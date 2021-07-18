import React from "react";
import './StudentContainer.css';

const StudentContainer = (props) => {
  // const truncate = (str, n) => {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // };

  return (
    <div className="student__container">
    <div className="img_heights">
      <img className="img__container" src={props.image} alt="abc" />
      <h3 className="company-name"> {props.name}</h3>
    </div>

    <div>
      <p className="descript-here">{(props.description)}</p>
    </div>
  </div>
  );
  }

export default StudentContainer;
