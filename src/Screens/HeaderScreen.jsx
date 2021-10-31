import React, { useState } from "react";
import "../css/style.css";
import "../css/responsive.css";
import i from "../images/slider-01.jpg";
import im from "../images/slider-02.jpg";
import imm from "../images/slider-03.jpg";
import { Carousel } from "react-bootstrap";

function HeaderScreen() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        <header class="top-navbar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbars-rs-food"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbars-rs-food">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="menu.html">
                      Menu
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-a">
                      <a class="dropdown-item" href="reservation.html">
                        Reservation
                      </a>
                      <a class="dropdown-item" href="stuff.html">
                        Stuff
                      </a>
                      <a class="dropdown-item" href="gallery.html">
                        Gallery
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      Blog
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-a">
                      <a class="dropdown-item" href="blog.html">
                        blog
                      </a>
                      <a class="dropdown-item" href="blog-details.html">
                        blog Single
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* <div id="slides" class="cover-slides">
        <ul class="slides-container">
          <li class="text-left">
            <img src={i} alt="" />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="m-b-20">
                    <strong>
                      Welcome To <br /> Live Dinner Restaurant
                    </strong>
                  </h1>
                  <p class="m-b-40">
                    See how your users experience your website in realtime or
                    view <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a
                      class="btn btn-lg btn-circle btn-outline-new-white"
                      href="#"
                    >
                      Reservation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="text-left">
            <img src={im} alt="" />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="m-b-20">
                    <strong>
                      Welcome To <br /> Live Dinner Restaurant
                    </strong>
                  </h1>
                  <p class="m-b-40">
                    See how your users experience your website in realtime or
                    view <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a
                      class="btn btn-lg btn-circle btn-outline-new-white"
                      href="#"
                    >
                      Reservation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="text-left">
            <img src={imm} alt="" />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="m-b-20">
                    <strong>
                      Welcome To <br /> Yamifood Restaurant
                    </strong>
                  </h1>
                  <p class="m-b-40">
                    See how your users experience your website in realtime or
                    view <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a
                      class="btn btn-lg btn-circle btn-outline-new-white"
                      href="#"
                    >
                      Reservation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="slides-navigation">
          <a href="#" class="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </a>
          <a href="#" class="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </a>
        </div>
      </div> */}
      {/* <div class="about-section-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 text-center">
              <div class="inner-column">
                <h1>
                  Welcome To <span>Live Dinner Restaurant</span>
                </h1>
                <h4>Little Story</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.{" "}
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros. Sed aliquam metus lorem, a pellentesque tellus pretium
                  a. Nulla placerat elit in justo vestibulum, et maximus sem
                  pulvinar.
                </p>
                <a class="btn btn-lg btn-circle btn-outline-new-white" href="#">
                  Reservation
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img src={im} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--Carousel Wrapper--> */}
      <div class="abc">
        <img className="d-block w-100" src={imm} alt="First slide" />
      </div>

      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={i} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={im} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}

export default HeaderScreen;
