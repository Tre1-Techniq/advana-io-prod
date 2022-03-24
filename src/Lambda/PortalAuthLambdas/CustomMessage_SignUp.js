'use strict';

exports.handler = async (event, context, callback) => {
  const email = event.request.userAttributes.email;
  const link = `https://advana.io/welcome?userName=${email}&confirmation_code=${event.request.codeParameter}`;
  const firstname = event.request.userAttributes.firstname;
  const template = (firstname,link) => `<html>
    <body style="background-color:#e7e7e7; font-family: PT Sans,Trebuchet MS,sans-serif; ">
      <div style="margin: 0 auto; width: 600px; background-color: #fff; font-size: 1.2rem; font-style: normal;font-weight: normal;line-height: 19px;" align="center">
        <div style="padding: 20;">
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <img style="border: 0;display: block;height: auto; width: 100%;max-width: 373px;" alt="Animage" height="200" width="300"  src="https://advana-image-assets.s3.amazonaws.com/logos/advana-full-logo-grad.eps" />
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <h2
                style="margin-top: 20px; margin-bottom: 0;font-style: normal; font-weight: bold; color: #000;font-size: 24px;line-height: 32px;text-align: center;">Welcome, ${firstname}</h2>
            <p style="margin-top: 30px;Margin-bottom: 0;">&nbsp;</p>
            <p style="margin-top: 10px;margin-right: 30px;margin-bottom: 0;margin-left: 30px;font-size: 16px;line-height: 24px; color: #848484">Your submission has been approved. Click the link below to confirm your email address and complete your registration.</p>
            <p style="margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
                <div style="margin-left: 20px;margin-right: 20px;Margin-top: 24px;">
                    <div style="margin-bottom: 20px;text-align: center;">
                        <a
                            style="width: 50%; border-radius: 6px;display: block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px 13px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);background-color: #3b5998;font-family: PT Sans, Trebuchet MS, sans-serif; letter-spacing: 0.05rem;"
                            href="${link}">VERIFY YOUR EMAIL</a>
                        </div>
                </div>
        </div>
      </div>
    </body>
  </html>`;
  
  const templateInvite = (firstname,email,code)=> `<html>
  <body
    style="
      background-color: #e7e7e7;
      font-family: PT Sans, Trebuchet MS, sans-serif;
    "
  >
    <div
      style="
        margin: 0 auto;
        width: 600px;
        background-color: #fff;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: normal;
        line-height: 19px;
      "
      align="center"
    >
      <div style="padding: 20">
        <img
          style="
            border: 0;
            display: block;
            height: auto;
            width: 100%;
            max-width: 373px;
          "
          alt="Animage"
          height="200"
          width="300"
          src="https://advana-image-assets.s3.amazonaws.com/logos/advana-full-logo-grad.eps"
        />
        <h2
          style="
            font-size: 28px;
            margin-top: 20px;
            margin-bottom: 0;
            font-style: normal;
            font-weight: bold;
            color: #000;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
          "
        >
          Welcome, ${firstname}
        </h2>
        <p
          style="
            margin-top: 20px;
            margin-bottom: 0;
            font-size: 16px;
            line-height: 24px;
            color: #000;
          "
        >
          Use the temporary credentials below to get start with your registration.
        </p>
        <div style="display: inline-block; margin: 0 auto">
          <h2
            style="
              margin-top: 20px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;
            "
          >
            username: ${email}
          </h2>
          <h2
            style="
              margin-top: 20px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;
            "
          >
            temporary password: ${code}
          </h2>
        </div>
      </div>
    </div>
  </body>
</html>
`;
  if (event.triggerSource === "CustomMessage_SignUp") {

    event.response = {
        emailSubject: "Advana | Confirm your email",
        emailMessage: template(firstname, link)
    };
  }else if(event.triggerSource==='CustomMessage_AdminCreateUser'){
      event.response = {
        emailSubject: "Advana | Your temporary account details",
        emailMessage: templateInvite(firstname,event.request.usernameParameter,event.request.codeParameter)
    };
  }
  console.log(event.response);
  callback(null, event);
};
