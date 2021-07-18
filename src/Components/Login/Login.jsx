import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import Button from "../Buttons/Buttons";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LoginImage from "../../assets/loginImage.jpg";
import { toast } from 'react-toastify'


import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./Login.css";
import { connect } from "react-redux";
import {
  checkUserSession,
  emailSignInStart,
} from "../Redux/actions/companyActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../Redux/selector";
import { withRouter } from "react-router";
import { getCurrentUser } from "../firebase/firebase";
// import { connect } from "react-redux";
// import AuthMiddleWare from "../redux/authMiddleWare";

const Login = ({
  emailSignInStart,
  checkUserSession,
  currentUser,
  history,
  ...props
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    checkUserSession();
    if(currentUser){
      console.log(currentUser.uid);
    }
  }, [checkUserSession]);

  const userAGAIN = getCurrentUser();
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    history.push("/StudentHome")
    toast.success("Sign In Successful")
    localStorage.setItem("user",email)
    
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // const handleCheck = (event) => {
  //   setRememberMe(event.target.checked);
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0].map((value) => (
            <Grid key={value} item>
              <div className="whole">
                <Paper className="paper first-half loginhere">
                  <div className="col">
                    <div className="img-company">
                      <img
                        src={LoginImage}
                        alt="companysignup-img"
                        className="company-img1"
                      />
                    </div>
                    <div className="signup-text ">
                      <Typography variant="h5" className="Signup-text">
                        Login
                      </Typography>
                      <Typography
                        variantMapping="p"
                        className="havean-acc-text"
                      >
                        Please enter your details and log in 
                      </Typography>
                      <Typography variant="h5">
                        Don't have an account ?
                      </Typography>
                      <Button className="MuiButton-texte reptile" href="/">
                        Signup
                      </Button>
                    </div>
                  </div>
                </Paper>
                <Paper className="paper1">
                  <Typography variant="h5" className="heading-login">
                    Login
                  </Typography>
                  <ValidatorForm onSubmit={handleSubmit} className="">
                  
                    <TextValidator
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Email"
                      onChange={handleEmail}
                      name="email"
                      value={email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid",
                      ]}
                      autoComplete="off"
                    />

                    <br />
                    <TextValidator
                      variant="outlined"
                      fullWidth
                      label="Password"
                      onChange={handlePassword}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                      autoComplete="off"
                    />
                    <br />
                 

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="signup-btn signupnow"
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </ValidatorForm>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
