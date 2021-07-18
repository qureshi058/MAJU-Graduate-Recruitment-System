import React from "react";
import Button from "../../../Buttons/Buttons.jsx";

import "./CompnayNavbar.css";

function CompnayNavbar() {
  return (
    <div className="navbar-poistion">
      <Button href="/CompanyHome" className="adjsutment">Home</Button>
      <Button href="/Students" className="adjsutment">Students</Button>
      <Button href="" className="adjsutment">Graduate Students</Button>
      <Button href="" className="adjsutment">Undergraduate Students</Button>
    </div>
  );
}

export default CompnayNavbar;
