import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import { connect } from "react-redux"

const PublicRoutes = ({ currentUser }) => {
  const [user, setUser] = useState(currentUser)
  console.log(currentUser)
  useEffect(() => {

    setUser({ ...currentUser })
  }, [currentUser])
  return (
    <Switch>
      <Route exact path="/"  >
        {currentUser.isActive ? <Redirect to={"/Home"} /> : <Signup />}
      </Route>
      <Route exact path="/CompanySignup" component={CompnaySignup} />

      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentSignup" component={StudentSignup} />
      <Route exact path="/Home">
        {  currentUser.role === "COMPANY" ? <CompanyHome /> : <StudentHome />}
      </Route>
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
const mapStateToProps = (state) => ({
  currentUser: state.company.currentUser
})

export default connect(mapStateToProps, null)(PublicRoutes)
