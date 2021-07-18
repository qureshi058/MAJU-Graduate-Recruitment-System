import React from "react";
import Button from "../../../Buttons/Buttons.jsx";

import "./StudentNavbar.css";

function StudentNavbar() {
  return (
    <div className="navbar-poistion">
      <Button href="/StudentHome" className="adjsutment">Home</Button>
      <Button href="/Companies" className="adjsutment">Companies</Button>
      <Button href="/GraduateJobs" className="adjsutment">Graduate Jobs</Button>
      <Button href="/UngraduateJobs" className="adjsutment">Undergraduate Jobs</Button>
    </div>
  );
}

export default StudentNavbar;
