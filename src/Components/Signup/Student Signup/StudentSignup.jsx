import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "../../Buttons/Buttons";
import StudentSignupImage from "../../../assets/student-signup-image.jpg";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./StudentSignup.css";
import { connect } from "react-redux";
import { signUpStart } from "../../Redux/actions/companyActions.js";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const StudentSignup = ({ signUpStart, history }) => {
  const [fullName, setFullName] = useState("");
  const [programName, setProgramName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email&&fullName&&password&&confirmPassword&&programName) {
      signUpStart({
        displayName: fullName,
        email: email,
        password,
        programName: programName,
        role: "STUDENT",
      });
      history.push("/Login")
    } else {
      toast.warn("fill out all feilds");
      return;
      
    }
    //getting user from the auth library
    
  };

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleProgramName = (event) => {
    setProgramName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassowerd = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0].map((value) => (
            <Grid key={value} item>
              <div className="whole">
                <Paper className="paper first-half">
                  <div className="col">
                    <div className="img-company">
                      <img
                        src={StudentSignupImage}
                        alt="companysignup-img"
                        className="company-img1"
                      />
                    </div>
                    <div className="signup-text">
                      <Typography variant="h5" className="Signup-text">
                        Sign Up
                      </Typography>
                      <Typography
                        variantMapping="p"
                        className="havean-acc-text"
                      >
                        Please enter your details and sign up and be part of our
                        community
                      </Typography>
                      <Typography variant="h5">
                        Already have an account ?
                      </Typography>
                      <Button className="MuiButton-texte" href="/Login">
                        LogIn
                      </Button>
                    </div>
                  </div>
                </Paper>
                <Paper className="paper1">
                  <Typography variant="h5" className="heading-companysignup">
                    Student Sign Up
                  </Typography>
                  <ValidatorForm onSubmit={handleSubmit} className="">
                    <TextValidator
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Full Name"
                      onChange={handleFullName}
                      name="Full Name"
                      value={fullName}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required",
                        "name is not valid",
                      ]}
                      autoComplete="off"
                      className=""
                    />
                    <TextValidator
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Program"
                      onChange={handleProgramName}
                      name="programName"
                      value={programName}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required",
                        "name is not valid",
                      ]}
                      autoComplete="off"
                    />
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
                    <TextValidator
                      variant="outlined"
                      label="Confirm password"
                      fullWidth
                      onChange={handleConfirmPassowerd}
                      name="confirmPassword"
                      type="password"
                      validators={["isPasswordMatch", "required"]}
                      errorMessages={[
                        "password mismatch",
                        "this field is required",
                      ]}
                      value={confirmPassword}
                      autoComplete="off"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="signup-btn"
                      onClick={handleSubmit}
                    >
                      Sign Up
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(withRouter(StudentSignup));
