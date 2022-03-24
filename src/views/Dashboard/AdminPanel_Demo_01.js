import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ADD_USER } from "../../Constants/PathConstants";
import SnackbarMessage from '../SnackbarMessage'


//style for the component
const useStyles = makeStyles((theme) => ({
paper: {
marginTop: theme.spacing(8),
display: "flex",
flexDirection: "column",
alignItems: "center",
},
form: {
width: "100%", // Fix IE 11 issue.
marginTop: theme.spacing(1),
},
submit: {
margin: theme.spacing(3, 0, 2),
},
}));

function AddUsers() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [addrtype, setAddrtype] = useState(["Normal", "Admin"])
const Add = addrtype.map(Add => Add)
const handleAddrTypeChange = (e) => { console.clear(); 
console.log((addrtype[e.target.value])); setRole(addrtype[e.target.value]) }
const [role, setRole] = useState('Normal')
// usage of the above component
const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");
const [snackbarSeverity, setSnackbarSeverity] = useState("");
const classes = useStyles();

const handleAddUser = async (event) => {
event.preventDefault();
console.log(`
  Name: ${name}
  Email: ${email} 
  Role: ${role}           
`);

var axios = require("axios");
var data = JSON.stringify({
  request: {
    userAttributes: {
      "custom:name": name,
      email: email,
      "custom:role": role,
    },
  },
  response: {}
});

var config = {
  method: "post",
  url: "YOUR URL to API Gateway -> Lambda function"
    
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

let res = await axios(config)
console.log(res);
let statusCode = res.data.statusCode;
if (statusCode === 200) {
  console.log(res.data.statusCode);
  setSnackbarMessage("User Created Succesfully");
  setSnackbarSeverity("success");
  setSnackbarOpen(true);
} else if (statusCode === 500) {
  console.log(res.data.statusCode);
  console.log(res.data.body.error.message);
  let err_Msg = res.data.body.error.message;
  setSnackbarMessage(err_Msg);
  setSnackbarSeverity("error");
  setSnackbarOpen(true);
}

};

return (
<Container component="main" maxWidth="xs">
  <div className={classes.paper}>
    {/* Header for the component */}
    <Typography component="h1" variant="h5">
      {ADD_USER}
    </Typography>
    {/* Content for the component */}
    <form className={classes.form} onSubmit={handleAddUser}>
      <TextField
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        margin="normal"
        fullWidth
        value={name}
        placeholder="Name"
        required
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Email Id"
        variant="outlined"
        value={email}
        placeholder="Email"
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <label for="role">Choose a Role:</label>
      < select
        onChange={e => handleAddrTypeChange(e)}
        className="browser-default custom-select" >
        {
          Add.map((address, key) => <option key={key} value={key}>{address}</option>)
        }
      </select >
      <Button
        type="Upload"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {ADD_USER}
      </Button>
    </form>
  </div>
  <SnackbarMessage message={snackbarMessage} open={snackbarOpen} setopen= 
{setSnackbarOpen} severity={snackbarSeverity} />
</Container>
);
}
export default AddUsers;
