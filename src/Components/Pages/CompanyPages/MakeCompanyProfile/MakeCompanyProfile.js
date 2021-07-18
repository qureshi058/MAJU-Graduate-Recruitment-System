import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Button from "../../../Buttons/Buttons";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import "./MakeCompanyProfile.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    marginLeft: 28,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MakeCompanyProfile(props) {
  const [valuef, setValue] = React.useState("female");
  const classes = useStyles();
  const [career_level, setCareerLevel] = React.useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const handleCareerChange = (event) => {
    setCareerLevel(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCompanyEmail = (event) => {
    setCompanyEmail(event.target.value);
  };
  const handleCompanyAddress = (event) => {
    setCompanyAddress(event.target.value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handleContactNumber = (event) => {
    setContactNumber(event.target.value);
  };
  const handleCompanyWebsite = (event) => {
    setCompanyWebsite(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-1">
      <div className="whole-profile-container">
        <div className="your-profile-header">
          <h2> Make your Profile</h2>
        </div>
        <div className="container-2">
          <div>
            <h6 className="header-6">Please fill in the details below</h6>
            <div>
              <ValidatorForm onSubmit={handleSubmit} className="">
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Company Name"
                  onChange={handleCompanyName}
                  name="Full Name"
                  value={companyName}
                  validators={["required"]}
                  errorMessages={[
                    "this field is required",
                    "name is not valid",
                  ]}
                  autoComplete="off"
                  className="fulln"
                />
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Company Email"
                  onChange={handleCompanyEmail}
                  name="email"
                  value={companyEmail}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  autoComplete="off"
                />
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Company Address"
                  onChange={handleCompanyAddress}
                  name="company address"
                  value={companyAddress}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  autoComplete="off"
                />
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Contact Number"
                  onChange={handleContactNumber}
                  name="contact number"
                  value={contact_number}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  autoComplete="off"
                />

                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Company Website"
                  onChange={handleCompanyWebsite}
                  name="company website"
                  value={companyWebsite}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  autoComplete="off"
                />

                
                <div></div>
            

                <Autocomplete
                  id="combo-box-demo"
                  options={madesince}
                  className="since"
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Since" variant="outlined" />
                  )}
                />

                <TextareaAutosize
                  className="Description-box"
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="About Us"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const madesince = [
  { title: "1990" },
  { title: "1991" },
  { title: "1992" },
  { title: "1993" },
  { title: "1994  " },
  { title: "1995  " },
  { title: "1996" },
  { title: "1997" },
  { title: "1998" },
  { title: "1999" },
  { title: "2000" },
  { title: "2001" },
  { title: "2002" },
  { title: "2003" },
  { title: "2004" },
  { title: "2005" },
  { title: "2006" },
  { title: "2007" },

  { title: "2008" },
  { title: "2009" },
  { title: "2010" },
  { title: "2011" },
  { title: "2012" },
  { title: "2013" },
  { title: "2014" },
  { title: "2015" },
  { title: "2016" },
  { title: "2017" },
  { title: "2018" },
  { title: "2019" },
];

export default MakeCompanyProfile;
