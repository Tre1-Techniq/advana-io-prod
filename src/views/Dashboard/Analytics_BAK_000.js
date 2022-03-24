import React from "react";
// import axios from 'axios';

import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';

import $ from 'jquery';



// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

//import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

//const useStyles = makeStyles(styles);

const embedUrl = "https://6cwwmpfsv8.execute-api.us-east-1.amazonaws.com/prod/qs-embed";
// const embedContent = embedUrl.innerHTML;

export default function Analytics() {
  //const classes = useStyles();

  var awsData = {
    apiGatewayUrl:embedUrl,
    staticPageUrl:embedUrl,
    cognitoDomainUrl:'http://localhost:3000/admin/sentry',
    cognitoClientId:'7jf9np3f974kv4dtm7d9lvl46o',
    cognitoUserPoolId: 'us-east-1_BLIvGOWaC',
    dashboardInitialLoad:true,
    dashboard:'',
    session:'',
    qSearchBar:'',
    timerId:'',
    debugMode: false
  };

  //const [ embedContent, setEmbedContent ] = useState('');

  // useEffect(() => {
  //   // axios.get(embedUrl)
  //   //   .then(res => {
  //   //     const embed = res.data;
  //   //     setEmbedContent(embed);
  //   //     //console.log("EMBED: ", embed)
  //   //   })

    
  // }, []);

  $(document).ready(function () {
    //Specify whether Q bar has to be displayed or not. This value flows in from lambda layer.
    $('#DisplayParent').addClass('<qDisplaySelection>');
    
    //Once the page loads, invoke getOpenIdToken function.
    getOpenIdToken();
  });

  function getOpenIdToken(){
    writeDebugInfo('In getOpenIdToken func');
    //Check for token in url as well as in Cookie
    var idToken = getParameterValues('id_token','#','&') ?? getCookieField('openIdToken');
    writeDebugInfo(idToken);
    if (idToken ) {
      writeDebugInfo('Token found');
      //Remove the url fragment with token details. This will be stored into a local cookie.
      window.location.hash='';
      getQuickSightInfo(idToken);
      
    }
    else {
      writeDebugInfo('Token not found, Redirecting to Cognito');
      window.location.href = awsData.cognitoDomainUrl+'/auth?client_id='+awsData.cognitoClientId+'&response_type=token&scope=openid+profile&redirect_uri='+awsData.staticPageUrl;
    }
  }

   //If awsData.debugMode is set to true, this function logs messages to console.
   function writeDebugInfo(debugInfo){
    if (awsData.debugMode)
    {
      console.log(debugInfo);
    }
  }

  //Function used to extract parts of the url.
  //Extracted parts are stored as cookies and value retrieved from cookie on subsequent calls.
  function getParameterValues(param,slicer,delimiter) {
    writeDebugInfo('In getParameterValues func');
    var urlParms = window.location.href.slice(window.location.href.indexOf(slicer)+ slicer.length).split(delimiter);
    for (var i = 0; i < urlParms.length; i++) {
      var urlparm = urlParms[i].split('=');
      if (urlparm[0].toLowerCase() === param) {
        return decodeURIComponent(urlparm[1]);
      }
    }
    return;
  }
  
  //Return value stored in cookie. If cookie is not found, null is returned.
  function getCookie(name) {
    writeDebugInfo('In getCookie func');
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  //Sets cookies with an expiry of 1 hour.
  function setCookie(name, value) {
    writeDebugInfo('In setCookie func');
    document.cookie = name + "=" + value +"; Max-Age=3600; SameSite=Strict";
  }

  function getCookieField(fieldName) {
    writeDebugInfo('In getCookieField function');
    var cookie = getCookie('QSEmbedDemo');
    if (cookie)
    {
      var fieldValue = JSON.parse(cookie)[fieldName];
      return fieldValue;
    }
    else
    {
      signOut();
    }
  }  
  //Make APIGateway calls to retrieve info from QuickSight.
  function getQuickSightInfo(openIdToken) {
    writeDebugInfo('In getQuickSightInfo func');
    const parameters = {
        openIdToken: openIdToken,
        timestamp: new Date().getTime()  //Timestamp added just to ensure that browsers don't use cached response.
    };

    const myQueryString = $.param(parameters);

    //Retrieve list of dashboards that the user can access from QuickSight.
    $.ajax({
          url: awsData.apiGatewayUrl + '?mode=getDashboardList&' + myQueryString,
          contentType: "text/plain",
          dataType: 'json',
          success: function(result){
              writeDebugInfo(result.Dashboards);
              loadDashboardList(result.Dashboards);
              //In addition to dashboard list, we get back the token and expirty timestamp in the response. These are stored as a cookie
              var expiryTs = getCookieField('expiryTs');
              setCookie('QSEmbedDemo','{"openIdToken":"'+result.openIdToken+'", "expiryTs":'+result.expiryTs+'}',parseInt(result.expiryTs - Date.now()/1000));
              //Check to make sure session is not expired and set up a timer to call this function every minute.
              checkSessionDuration();
              awsData.timerId = setInterval(function(){checkSessionDuration();},60000);
          },
          error: function(err){
              console.log('Error on making API gateway call to retrieve Dashboard list..');
              console.log(err.responseText);
              $('#DisplayMessage').html(err.responseText.replaceAll('"',''));
            }
          });      

    //Retrieve a dynamic dashboard embed url from QuickSight.
    //This is generated for a non existent dashboard id as this call is made in parallel to retrieving the dashboard list.
    $.ajax({
          url: awsData.apiGatewayUrl + '?mode=getUrl&urlType=dashboard&' + myQueryString,
          contentType: "text/plain",
          dataType: 'json',
          success: function(result){
              writeDebugInfo(result);
              //------------
              //Embedding the url to non-existent dashboard will result in an error screen in the div.
              //However, on initial load, this div is hidden underneath status message screens.
              //When user picks a dashboard from drop down, NavigateToDashboard function will load it (without generating another url)
              //and then this div will be brought up to display layer.
              //This is done to ensure that dashboard loads as quickly as possible once user makes a selection.
              //-------------
              //Alternatively, you can choose to generate the url and hold off on embedding till user selects a dashboard.
              //In that case, you have to replace the string 'non-existent-id' in embed url with actual dashboard id.
              //Also, an embed url has to be redeemed within 5 mins. 
              //So, if following delyaed load approach, you got generate fresh urls based on a timer till one gets embedded.
              //OR you can choose to generate the url when user selects the initial dashboard.
              //-------------
              embedQuickSight('Dashboard', 'DashboardContainer',result.DashboardEmbedUrl);
          },
          error: function(err){
              console.log('Error on making API gateway call to retrieve dashboard embed url.');
              console.log(err.responseText);
              $('#DisplayMessage').html(err.responseText.replaceAll('"',''));
            }
          });

    //Retrieve a dynamic session embed url from QuickSight.
    $.ajax({
          url: awsData.apiGatewayUrl + '?mode=getUrl&urlType=session&' + myQueryString,
          contentType: "text/plain",
          dataType: 'json',
          success: function(result){
              writeDebugInfo(result);
              embedQuickSight('Session', 'SessionContainer',result.SessionEmbedUrl);
          },
          error: function(err){
              console.log('Error on making API gateway call to retrieve session embed url.');
              console.log(err.responseText);
              $('#DisplayMessage').html(err.responseText.replaceAll('"',''));
            }
          });
    
    //Retrieve Q embed url if configured.
    if( $('#DisplayParent').hasClass('ShowQ') ) 
    {
      $.ajax({
          url: awsData.apiGatewayUrl + '?mode=getUrl&urlType=q&' + myQueryString,
          contentType: "text/plain",
          dataType: 'json',
          success: function(result){
              writeDebugInfo(result);
              embedQuickSight('Q', 'QContainer',result.QEmbedUrl);
          },
          error: function(err){
              console.log('Error on making API gateway call to retrieve Q embed url.');
              console.log(err.responseText);
              $('#DisplayMessage').html(err.responseText.replaceAll('"',''));
            }
          });          
    }      
          
  }

  //Embed the generated url into the div identified to hold the dashboard/session.
  function embedQuickSight(entity, embedDiv, embedUrl) {
    writeDebugInfo('In embedQuickSight func');
    var containerDiv = document.getElementById(embedDiv);

    
    if (entity == 'Dashboard'){
      var params = {
        url: embedUrl,
        container: containerDiv,
        width:"100%",
        height:"100%",
        undoRedoDisabled: true, 
        resetDisabled: true
      };
      awsData.dashboard = QuickSightEmbedding.embedDashboard(params);
    }
    else if (entity == 'Session'){
      var params = {
        url: embedUrl,
        container: containerDiv,
        width:"100%",
        height:"100%"
      };
      awsData.session = QuickSightEmbedding.embedSession(params);
    }
    else {
      var params = {
        url: embedUrl,
        container: containerDiv,
        height:"100%",
        width:"100%",
        qSearchBarOptions: {
                    expandCallback: QExpandCallback,
                    collapseCallback: QCollapseCallback
                }
      };
      awsData.qSearchBar = QuickSightEmbedding.embedQSearchBar(params);
    }
  }
  //Make backdrop visible to dim the background while Q is active.
  function QExpandCallback()
  {
    $('#QBackdrop').css('visibility','visible');
  }
  //Hide backdrop once focus is shifted away from Q.
  function QCollapseCallback()
  {
    $('#QBackdrop').css('visibility','hidden');
  }
  //Load the drop down list with dashboards that the user can access.
  //Show message to select a dashboard once the list is loaded.
  //Try sharing more dashboards with the user or EmbeddedReaderGrp and see them show up in the drop down on page refresh.
  function loadDashboardList(Dashboards)
  {
    writeDebugInfo('In loadDashboardList func');
    //Clear & load drop down list
    $('#selectDashboard').empty();
    $('#selectDashboard').append($('<option></option>').val('non-existent-id').html(' '));
    $.each(Dashboards, function(index, dashboard) {
      $('#selectDashboard').append($('<option></option>').val(dashboard.DashboardId).html(dashboard.Name));
    });
    if (Dashboards.length > 0)
    {
       $('#DisplayMessage').html('Please select a dashboard to view.');
    }
    else
    {
      $('#DisplayMessage').html('Share a dashboard with this user or relevant EmbeddedDemoReaders group in QuickSight. <br> Then, try refreshing this page.');
    }

  }
  
  //Bring the dashboard div to top layer when invoked with show action and vice versa for hide.
  //Also, remove the empty placeholder from the dashboard selection drop down on initial invocation.
  function setVisibility(mode){
    writeDebugInfo('In setVisibility func : mode is '+mode);
    
    if (awsData.dashboardInitialLoad && mode == 'SelectDashboard')
    {
      $('#selectDashboard option[value="non-existent-id"]').remove();
      awsData.dashboardInitialLoad = false;
      mode = 'Dashboard'
    }
    
    if ( mode == 'Dashboard' && awsData.dashboardInitialLoad)
    {
      mode = 'UninitializedDashboard';
    }
    else if(mode == 'Dashboard' && !awsData.dashboardInitialLoad)
    {
      mode = 'InitializedDashboard'
    }
    
    writeDebugInfo('Derived mode is '+mode);
    switch(mode){
      case 'UninitializedDashboard':
        $('#DisplayMessageContainer').css('visibility','visible');
        $('#DashboardContainer').css('visibility','hidden');
        $('#SessionContainer').css('visibility','hidden');
        $('#NavEmbeddedDashboards').removeClass('text-secondary').addClass('text-primary');
        $('#NavEmbeddedSession').removeClass('text-primary').addClass('text-secondary');
        $('#DashboardSelector').css('visibility','visible');
        $('#DashboardSelectorHeader').css('visibility','visible');
        break;
      case 'InitializedDashboard':
        $('#DisplayMessageContainer').css('visibility','hidden');
        $('#DashboardContainer').css('visibility','visible');
        $('#SessionContainer').css('visibility','hidden');
        $('#NavEmbeddedDashboards').removeClass('text-secondary').addClass('text-primary');
        $('#NavEmbeddedSession').removeClass('text-primary').addClass('text-secondary');
        $('#DashboardSelector').css('visibility','visible');
        $('#DashboardSelectorHeader').css('visibility','visible');
        break;
      case 'Session':
        $('#DisplayMessageContainer').css('visibility','hidden');
        $('#DashboardContainer').css('visibility','hidden');
        $('#SessionContainer').css('visibility','visible');
        $('#NavEmbeddedDashboards').removeClass('text-primary').addClass('text-secondary');
        $('#NavEmbeddedSession').removeClass('text-secondary').addClass('text-primary');
        $('#DashboardSelector').css('visibility','hidden');
        $('#DashboardSelectorHeader').css('visibility','hidden');
        break;
        
      default:
        $('#DisplayMessageContainer').css('visibility','visible');
        $('#DashboardContainer').css('visibility','hidden');
        $('#SessionContainer').css('visibility','hidden');
        $('#NavEmbeddedDashboards').removeClass('text-primary').addClass('text-secondary');
        $('#NavEmbeddedSession').removeClass('text-primary').addClass('text-secondary');
        $('#DashboardSelector').css('visibility','visible');
        $('#DashboardSelectorHeader').css('visibility','visible');
        break;
      
    }
    
  }
  
  //Load selected dashboard using the navigateToDashboard function.
  //On initial invocation, add a 1 sec delay to the dashboard div being brought to top layer to avoid showing error screen.
  //(ie the error stating that dashboard non-existent-id doesn't exist. See comments further above for more details.)
  function selectDashboard(dashboardId){
    writeDebugInfo('In selectDashboard func');
    if (dashboardId != 'non-existent-id')
    {
      var options = {
            dashboardId: dashboardId
        };
      awsData.dashboard.navigateToDashboard(options);
      if (awsData.dashboardInitialLoad)
      {
        setTimeout(function(){setVisibility('SelectDashboard');}, 1000);
      }
    }
  }

  function checkSessionDuration(){
    writeDebugInfo('In checkSessionDuration function');
    var expiryTs = getCookieField('expiryTs');
    if (expiryTs)
    {
      var sessionDuration = parseInt((expiryTs - (Date.now()/1000) )/60 );
      sessionDuration = sessionDuration >= 0 ? sessionDuration : 0 ;
      
      if (sessionDuration == 0)
      {
        signOut();
      }
    }
    else
    {
      signOut();
    }
    
  }
  
  //Signout of the current Cognito session.
  function signOut(){
    writeDebugInfo('In signOut Function');
    setCookie('QSEmbedDemo', '');
    clearInterval(awsData.timerId);
    window.location.href = awsData.cognitoDomainUrl+'/logout?client_id='+awsData.cognitoClientId+'&logout_uri='+awsData.staticPageUrl;
  }

  return (
    // <iframe className={classes.iFrameInner} frameBorder="0" src={embedContent} width="100%" height="100%" title='A youtube video on React hooks'></iframe>

    // <div className={classes.embedContent} dangerouslySetInnerHTML={{ __html: `${embedContent}` }}></div>
    // <div className={classes.embedContent}>{`${embedContent}`}</div>
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light embedNav" >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id = "NavViewSelection" class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a id="NavEmbeddedSession" class="nav-link text-secondary " href="#" style="" onclick="setVisibility('Session')">List View</a>
          </li>
          <li class="nav-item active">
            <a id="NavEmbeddedDashboards" class="nav-link text-primary " href="#" style="" onclick="setVisibility('Dashboard')">Dashboard View</a>
          </li>
        </ul>
        
        <a class="navbar-brand">
          <img id="navbarLogo" src="data:image/png;base64,<LogoFileBase64>" height="50px" alt="" loading="lazy" />
        </a>
          
        <ul id="NavDashboards" class="navbar-nav" style="margin-right:40px; ">
          <li id="DashboardSelectorHeader" class="nav-item inactive">
            <a class="nav-link text-secondary "> Select Dashboard </a>
          </li>
          <li id="DashboardSelector" class="nav-item active" style="margin-right:0px">
            <select class="form-control text-secondary" id="selectDashboard" style="width:200px;" onchange="selectDashboard($(this).val())" />
          </li>
          <li class="nav-item active">
              <a id ="NavSignOut" class="nav-link text-secondary" href="#" onclick="signOut()">LogOut</a>
          </li>
        </ul>
      </div>
    </nav>
    
    <div id="DisplayParent" >
      <div id="DashboardContainer" style="visibility:hidden">
      </div>
      <div id="DisplayMessageContainer" class="overflow-auto" style="visibility:visible">
        <div class="jumbotron jumbotron-fluid col text-center" >
          <div class="container" >
            <h4 id="DisplayMessage" class="text-secondary">Loading..</h4>
          </div>
        </div>
      </div>
      <div id="SessionContainer" style="visibility:hidden">
      </div>
      <div id="QBackdrop" style="visibility:hidden"></div>
      <div id="QContainer"></div>
    </div>
    </>
  );
}
