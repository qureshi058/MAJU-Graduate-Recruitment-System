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
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./MakeStudentProfile.css";

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
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function MakeStudentProfile(props) {
  const [valuef, setValue] = React.useState("female");
  const classes = useStyles();
  const [career_level, setCareerLevel] = React.useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [working_email, setWorkEmail] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [git_repo, setGitRepo] = useState("");

  const handleCareerChange = (event) => {
    setCareerLevel(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleWorkEmail = (event) => {
    setWorkEmail(event.target.value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleContactNumber = (event) => {
    setContactNumber(event.target.value);
  };
  const handleGitRepo = (event) => {
    setGitRepo(event.target.value);
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
                  className="fulln"
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
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Working Email"
                  onChange={handleWorkEmail}
                  name="working email"
                  value={working_email}
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
                  label="Git Repository Link"
                  onChange={handleGitRepo}
                  name="git repo"
                  value={git_repo}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  autoComplete="off"
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid
                    className="dateob"
                    container
                    justifyContent="space-around"
                  >
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date Of Birth"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>

                <div></div>
                <p className="gender">
                  Gender <span className="steric">*</span>
                </p>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={valuef}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <p className="cl">
                  Career Level <span className="steric">*</span>
                </p>

                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="drropdown"
                    onChange={handleCareerChange}
                    value={career_level}
                  >
                    <MenuItem value={10}>Graduate</MenuItem>
                    <MenuItem value={20}>Undergraduate</MenuItem>
                  </Select>
                </FormControl>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </React.Fragment>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Skills"
                      placeholder="Favorites"
                    />
                  )}
                />

                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Expertise}
                  className="expertise"
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </React.Fragment>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Expertise"
                      placeholder="Favorites"
                    />
                  )}
                />
                <TextareaAutosize
                  className="Description-box"
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Tell about yourself. eg:Your past experiences"
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

const top100Films = [
  { title: "Problem-Solving" },
  { title: "Fast Learner" },
  { title: "Good Communication" },
  { title: "Data Scientist" },
  { title: "Problem Management  " },
  { title: "Leadership  " },
  { title: "Analytical abilities" },
  { title: "Creativity" },
  { title: "Perseverance" },
];

const top100Expertise = [
  { title: "Problem-Solving" },
  { title: "Fast Learner" },
  { title: "Good Communication" },
  { title: "Data Scientist" },
  { title: "Problem Management  " },
  { title: "Leadership  " },
  { title: "Analytical abilities" },
  { title: "Creativity" },
  { title: "Perseverance" },
];
export default MakeStudentProfile;
