import React from "react";
import Grid from "@material-ui/core/Grid";
import GokuTraining from "./Images/goku-training.jpg";
import { makeStyles } from "@material-ui/core/styles";
import "./createAccount.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FastRewindIcon from "@material-ui/icons/FastRewind";

const accountTypes = [
  {
    accountType: "Personal Trainer"
  },
  {
    accountType: "Client"
  },
  {
    accountType: "Guest"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${GokuTraining})`,
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  menu: {
    width: 200
  }
}));

export default function CreateAccount() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    accountType: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root} id="mainDiv">
      <Grid container spacing={8}>
        <Grid item xs={12} id="title">
          Goku Gainz!
        </Grid>
        <Grid item xs={12} style={{marginLeft: '44em'}}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="userName"
              label="Name"
              placeholder="Name"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="email"
              label="Email"
              placeholder="Email"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
          </form>
        </Grid>
        <Grid item xs={12} style={{marginLeft: '44em'}}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="memberPassword"
              label="Password"
              placeholder="Password"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="confirmMemberPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
          </form>
        </Grid>
        <Grid item xs={12} style={{marginLeft: '52em'}}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="accountType"
              select
              label="Select"
              className={classes.textField}
              value={values.accountType}
              onChange={handleChange("accountType")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your account type"
              margin="normal"
              variant="filled"
            >
              {accountTypes.map(option => (
                <MenuItem key={option.accountType} value={option.accountType}>
                  {option.accountType}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </Grid>
        <Grid item xs={12}>
          <button id="createAccountButton" onClick="">
            Create Account
          </button>
        </Grid>
        <Grid item xs={12}>
          <a href="./">
            <button id="backButton" onClick="">
              {<FastRewindIcon />} Back
            </button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
