import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import CompnaySignup from "../Components/Signup/Company Signup/CompnaySignup";
import StudentSignup from "../Components/Signup/Student Signup/StudentSignup";
import Login from "../Components/Login/Login";
import CompanyHome from "../Components/Pages/CompanyPages/ComapnyHome/ComapnyHome";
import StudentHome from "../Components/Pages/StudentPages/StudentHome/StudentHome";
import Companies from ".././Components/Pages/StudentPages/Companies/Companies.js";
import GraduateJobs from '../Components/Pages/StudentPages/GraduateJobs/GraduateJobs.js'
import UngraduateJobs from '../Components/Pages/StudentPages/UndergraduateJobs/UndergraduateJobs'
import Students from '../Components/Pages/CompanyPages/Students/Students'
import MakeStudentProfile from '../Components/Pages/StudentPages/MakeStudentProfile/MakeStudentProfile'
import MakeCompanyProfile from '../Components/Pages/CompanyPages/MakeCompanyProfile/MakeCompanyProfile'

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/CompanySignup" component={CompnaySignup} />

      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentSignup" component={StudentSignup} />


      <Route exact path="/CompanyHome" component={CompanyHome} />
      <Route exact path="/StudentHome" component={StudentHome} />
      <Route exact path="/Companies" component={Companies} />
      <Route exact path="/GraduateJobs" component={GraduateJobs} />
      <Route exact path="/UngraduateJobs" component={UngraduateJobs} />


      <Route exact path="/Students" component={Students} />

      <Route exact path="/MakeStudentProfile" component={MakeStudentProfile} />

      <Route exact path="/MakeCompanyProfile" component={MakeCompanyProfile} />


    </Switch>
  );
};

export default PublicRoutes;
