import React from "react";

import locationSvg from "../../assets/placeholder.png";
import mailSvg from "../../assets/mail.png";
import phoneSvg from "../../assets/telephone.png"

import "./Footer.css";

function Footer() {
  return (
      <>
      <div className="whole-container">
    <div className="main-container">
      <div className="container-footer-01">
        <div>
          <img alt="locationSvg" src={locationSvg} className="footer-images-01"/>
        </div>
        <div className="descript">
          Mohammad Ali Jinnah University, Stop Main، Lal Kothi (house), 22-E،
          Block-6 Block 6 PECHS,Karachi City, Sindh 75400, Pakistan
        </div>
      </div>
      <div className="container-footer-01">
        <div>
          <img alt="mailSvg" src={mailSvg} className="footer-images-02"/>
        </div>
        <div className="descript">info@jinnah.edu</div>
      </div>
      <div className="container-footer-01">
        <div>
          <img alt="mailSvg" src={phoneSvg}  className="footer-images-03"/>
        </div>
        <div className="descript">+92-21-34311325</div>
      </div>
      
      </div>
     
    </div>
    </>
  );
}

export default Footer;