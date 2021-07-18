import React from "react";
import './CompanyContainer.css';

const CompanyContainer = (props) => {
  // const truncate = (str, n) => {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // };

  return (
    <div className="company__container">
    <div className="img_heights1">
      <img className="img__container" src={props.image} alt="abc" />
      <h3 className="company-name"> {props.name}</h3>
    </div>

    <div>
      <p className="descript-here1">{(props.description)}</p>
    </div>
  </div>
  );
  }

export default CompanyContainer;
