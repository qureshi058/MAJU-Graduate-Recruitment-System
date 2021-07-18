import React from "react";
import { Typography } from "@material-ui/core";
import compnayLogo from "../../assets/company-btn-img.png";
import studentLogo from '../../assets/male-btn-icon.jpg'
import Button from "../Buttons/Buttons";
import "./Signup.css";

const Signup = () => {
  return (
      <div className="bg-pic">
      <div className="border">
        <div className="signup">
          <Button  href="/CompanySignup">
            <div className="btn-cntrl">
              <img src={compnayLogo} alt="something" className="company-img" />
            </div>
            </Button>
            <Typography variant="h5">Company Signup</Typography>
        </div>
  
        
  
        <div className="signup">
          <Button href="/StudentSignup">
            <div className="btn-cntrl">
              <img src={studentLogo} alt="something" className="company-img" />
            </div>
            </Button>
            <Typography variant="h5">Student Signup</Typography>
        </div>
      </div>
      </div>
  );
};

export default Signup;
