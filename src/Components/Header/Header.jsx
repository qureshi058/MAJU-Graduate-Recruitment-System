import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "../Bar/Bar";
import Typography from "@material-ui/core/Typography";
import Button from "../Buttons/Buttons";
import Logo from "../../assets/download.png";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  signOutSuccess,
} from "../Redux/actions/companyActions";

import "./Header.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lexend"].join(","),
    fontSize: 22,
  },
});



const Header = ({ signOutSuccess, history }) => {
  const handleout = async (event) => {
    event.preventDefault();
    signOutSuccess()
    history.push("/")
    localStorage.clear()
  };

  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Button href="/">
            <div className="logo" >
              <img src={Logo} alt="" className="Logo" />
            </div>
          </Button>
          <ThemeProvider theme={theme}>
            <Typography variant="h6" className="maju-header">MAJU RECRUITMENT SYSTEM</Typography>
          </ThemeProvider>
          {localStorage.getItem("user") ? <div>
            <Button color="inherit" variant="raised" onClick={handleout}>
              Logout
            </Button>
          </div> : <div>
            <Button color="inherit" variant="raised" href="/">
              Sign Up
            </Button>
            <Button color="inherit" variant="raised" href="/Login">
              Login
            </Button>
          </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOutSuccess
});

export default connect(mapDispatchToProps)(withRouter(Header));
