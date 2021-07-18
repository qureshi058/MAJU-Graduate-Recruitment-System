import React from "react";

import CompnayNavbar from "../../CompanyPages/CompnayNavbar/CompnayNavbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import selectionProcess from "../../../../assets/selection-process-pillar-page-featured.jpg";
import onliners from "../../../../assets/online-recruitment-system.jpg";
import newsSlides from "../../../../assets/newsSlide.jpg";
import Footer from "../../../Footer/Footer";

import "./ComapnyHome.css";

function ComapnyHome() {
  return (
    <div className="home-style">
      <div className="container-01">
        <CompnayNavbar />
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
            Looking for talented students for your company ?
          </h3>
          <p className="para-student-home">
          Undergraduate,Grduates students looking to join your company. 
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

export default ComapnyHome;
