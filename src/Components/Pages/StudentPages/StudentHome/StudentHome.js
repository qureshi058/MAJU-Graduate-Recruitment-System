import React from "react";

import StudentNavbar from "../StudentNavbar/StudentNavbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import selectionProcess from "../../../../assets/selection-process-pillar-page-featured.jpg";
import onliners from "../../../../assets/online-recruitment-system.jpg";
import newsSlides from "../../../../assets/newsSlide.jpg";
import Footer from "../../../Footer/Footer";

import "./StudentHome.css";
import {connect} from 'react-redux'

function StudentHome({user}) {
  console.log(user)
  return (
    <div className="home-style">
      <div className="container-01">
        <StudentNavbar />
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 Main-Carousel"
              src={selectionProcess}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 Main-Carousel"
              src={selectionProcess}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Main-Carousel"
              src={selectionProcess}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Main-Container">
        <div className="container-02">
          <h3 className="heading-student-home">
            Are you an Undergraduate or a Graduate ?
          </h3>
          <p className="para-student-home">
            Why is getting a job so challenging ? Applying everywhere by going
            on each website which is a waste of valuable time. Making wrong
            decisions is not only costly,but it can also lead to high turover.
          </p>
          <div className="contrl-img-student-home">
            <img alt="ors" src={onliners} />
          </div>
        </div>
        <div className="container-03">
          <h3 className="heading-slide-student">News</h3>
          <Carousel className="carousel-cntrl">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 Main-Carousel"
                src={newsSlides}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 Main-Carousel"
                src={newsSlides}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 Main-Carousel"
                src={newsSlides}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps=(state)=>({
  user:state.company.currentUser
})

export default connect(mapStateToProps,null)(StudentHome)
