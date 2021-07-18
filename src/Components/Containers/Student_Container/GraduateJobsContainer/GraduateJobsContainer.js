import React from "react";
import './GraduateJobsContainer.css';

const GraduateJobsContainer = (props) => {
  // const truncate = (str, n) => {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // };

  return (
    <div className="graduateJobs__container">
    <div className="img_heights">
      <img className="img__container" src={props.image} alt="abc" />
      <h3 className="company-name"> {props.name}</h3>
    </div>

    <div>
      <p className="descript-here">{(props.description)}</p>
      <h5 className="descript-here">{(props.description2)} </h5>
      <p className="descript-here3">{(props.description3)} </p>
      <p className="descript-here3">{(props.description4)} </p>


    </div>
   
  </div>
  );
  }

export default GraduateJobsContainer;
