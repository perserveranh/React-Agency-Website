import React, { Component } from "react";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-white header-top d-none d-lg-block pt-4 pb-3">
          <div className="container">
            <div data-aos="fade-down" className="row">
              <div className="col-3">
                <img
                  src="/images/header/logo/1j_ojl1FOMkX9WypfBe43D6ki_CJrRBJmBfIwXs1M3EMoAJtlS (1).jpg"
                  alt="logo"
                />
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="far fa-clock" />
                  </a>
                  <h6>WORK TIME: 09:00 - 17:00</h6>
                  <p className="mt-2">Saturday and Sunday - CLOSED</p>
                </div>
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="far fa-envelope" />
                  </a>
                  <h6>MAIL US</h6>
                  <p className="mt-2">tuan.anh.257.it@gmail.com</p>
                </div>
              </div>
              <div className="col-3">
                <div className="info">
                  <a href>
                    <i className="fas fa-mobile-alt" />
                  </a>
                  <h6>CALL US</h6>
                  <p className="mt-2">+8434677668</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 pb-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-sm-4">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#About">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Services">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Gallery">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-8 text-right">
                  <ul className="list-unstyled social-icon">
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-google-plus-g" />
                    </li>
                    <li>
                      <i className="fab fa-weebly text-dark" />
                    </li>
                    <li>
                      <i className="fab fa-youtube" />
                    </li>
                    <li>
                      <i className="fab fa-instagram text-dark" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <header>
            <div className="container">
              <div data-aos="fade-up" data-aos-delay={1000} className="row">
                <div className="col-lg-7  text-center">
                  <h1>We have Best Medicare plan options for you</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem Sed ut perspiciatis natus error sit voluptatem{" "}
                  </p>
                  <button className="btn btn-primary" type="button">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </header>
          <section className="info text-white text-center">
            <div className="row">
              <div className="card-info col-lg-3 col-sm-6 pt-5 pr-3 pb-5 bl-3 one">
                <img src="images/info/1.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={400}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">Best Treatment</h5>
                  <p className="info-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem ed ut perspiciatis unde omnis iste natus error
                    sit voluptatem{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-3 col-sm-6 pt-5 pr-3 pb-5 bl-3 tow">
                <img src="images/info/2.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={800}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">Emergency Help</h5>
                  <p className="info-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem ed ut perspiciatis unde omnis iste natus error
                    sit voluptatem{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-3 col-sm-6 pt-5 pr-3 pb-5 bl-3 three">
                <img src="images/info/3.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={1000}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">Best Treatment</h5>
                  <p className="info-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem ed ut perspiciatis unde omnis iste natus error
                    sit voluptatem{" "}
                  </p>
                </div>
              </div>
              <div className="card-info col-lg-3 col-sm-6 pt-5 pr-3 pb-5 bl-3 four">
                <img src="images/info/4.png" alt="info" />
                <div
                  data-aos="fade-right"
                  data-aos-delay={1200}
                  className="card-info-body"
                >
                  <h5 className="info-title mb-3 mt-3">Best Treatment</h5>
                  <p className="info-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem ed ut perspiciatis unde omnis iste natus error
                    sit voluptatem{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container">
              <div data-aos="zoom-in" className="info text-center">
                <h2>Why Choose Us ? </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error Sed ut
                  perspiciatis unde omnis iste natus error Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-8">
                  <div className="row">
                    <div
                      data-aos="fade-right"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/1.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/2.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={2200}
                  className="col-lg-4 d-none d-lg-block"
                >
                  <img
                    src="images/content/woman.png"
                    alt="woman"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4 mt-8">
                  <div className="row">
                    <div
                      data-aos="fade-left"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/3.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay={400}
                      className="col-12 mb-8"
                    >
                      <div className="content-info">
                        <img src="images/content/icon/4.png" alt="icon" />
                        <h3>Professional</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        perspiciatis unde omnis iste natus error sit voluptatem{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="counter-info text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <img src="images/counter/icon/1.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">1000</h2>
                    <span className="plus">+</span>
                    <hr />
                    <p>
                      Happy
                      <br />
                      Customers
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img src="images/counter/icon/2.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">2017</h2>
                    <hr />
                    <p>
                      Top
                      <br />
                      Hospitality
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img src="images/counter/icon/3.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">1150</h2>
                    <hr />
                    <p>
                      Innovative
                      <br />
                      Approach
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <img src="images/counter/icon/4.png" alt="counter" />
                  <div className="info">
                    <h2 className="counter">500</h2>
                    <span className="plus">+</span>
                    <hr />
                    <p>
                      Lung
                      <br />
                      Replacement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="work">
            <div className="container">
              <div className="row">
                <div
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                  className="col-lg-8"
                >
                  <div className="info">
                    <h1>How we works</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem Sed ut perspiciatis unde omnis iste natus error
                      sit voluptatemSed ut perspiciatis unde omnis iste natus
                      error sit voluptatem
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <img
                          src="images/works/1.jpg"
                          alt="work"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Lorem ipsum dolor sit amet,{" "}
                          </h5>
                          <a href="#" className="card-link">
                            April 19, 2017 | Dr. Jon Doe
                          </a>
                          <p>
                            Sed ut perspiciatis unde omnis i t perspiciatis unde
                            omnis i ste natus error sit voluptatem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <img
                          src="images/works/2.jpg"
                          alt="work"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Lorem ipsum dolor sit amet,{" "}
                          </h5>
                          <a href="#" className="card-link">
                            April 19, 2017 | Dr. Jon Doe
                          </a>
                          <p>
                            Sed ut perspiciatis unde omnis i t perspiciatis unde
                            omnis i ste natus error sit voluptatem{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase"
                    type="button"
                  >
                    READ MORE
                  </button>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                  className="col-lg-4"
                >
                  <div className="info">
                    <h1>Our creative</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem{" "}
                    </p>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingOne"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingTwo"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingThree"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                    <div className="card pb-3">
                      <div
                        className="card-header panel-heading"
                        id="headingFor"
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFor"
                            aria-expanded="false"
                            aria-controls="collapseFor"
                          >
                            <i className="far fa-play-circle" /> Heart Treatment
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFor"
                        className="collapse"
                        aria-labelledby="headingFor"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Sed ut perspiciatis unde omnis iste natus error s.it
                          voluptatem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="gallery" className="gallery">
            <div className="container">
              <div
                data-aos="zoom-in-up"
                className="info text-white text-center"
              >
                <h2>Gallery</h2>
                <p>
                  {" "}
                  Sed ut perspiciatis unde omnis iste natus error s.it
                  voluptatem Sed ut perspiciatis unde omnis iste natus error
                  s.it voluptatem
                </p>
              </div>
              <div className="row">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/1.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/2.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/3.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/4.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/5.jpg" alt="gallery" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  className="col-lg-4 col-sm-6"
                >
                  <img src="images/gallery/6.jpg" alt="gallery" />
                </div>
              </div>
            </div>
          </section>
          <section id="blog" className="team text-dark text-center">
            <div className="container">
              <div data-aos="zoom-in" className="info">
                <h2>Air team</h2>
                <p>
                  In sass tutorial we will use sass / scss in html and convert
                  scss without using any code. Check video to convert SAS with
                  prepros application. This is the easiest and best way to
                  convert sass.
                </p>
              </div>
              <div className="row">
                <div data-aos="zoom-in-right" className="col-lg-3 col-sm-6">
                  <img src="images/team/1.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div data-aos="zoom-in-right" className="col-lg-3 col-sm-6">
                  <img src="images/team/2.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div data-aos="zoom-in-left" className="col-lg-3 col-sm-6">
                  <img src="images/team/3.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  className="col-lg-3 col-sm-6 ml-md-auto mr-md-auto"
                >
                  <img src="images/team/4.jpg" alt="team" />
                  <div className="team-info">
                    <h2>Dr Ricky Doe</h2>
                    <p>Techology</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                      <li>
                        <i className="fab fa-airbnb" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="offer">
              <div className="container">
                <div className="row">
                  <div data-aos="zoom-in-left" className="col-lg-10">
                    <h2>Design psd with Sass to Components By Perserver Anh</h2>
                  </div>
                  <div data-aos="zoom-in-right" className="col-lg-2">
                    <button className="btn btn-primary" type="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact-us" className="contact-us">
            <div className="container">
              <div className="row">
                <div data-aos="fade-right" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Gei in Touch</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/1.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/2.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <img src="images/contact-us/3.png" alt="icon" />
                        <p>
                          perserver.anh@gmai.com <br />
                          tuan.anh.257.it@gmail.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-right" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Quick Links</h4>
                  <ul className="list-unstyled link">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-left" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Our services</h4>
                  <ul className="list-unstyled link">
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-caret-right mr-3" />
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-left" className="col-lg-3 col-sm-6">
                  <h4 className="text-white mb-5">Enquiry Form</h4>
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <input
                      type="button"
                      defaultValue="Submit"
                      className="btn btn-primary mt-4"
                    />
                  </form>
                </div>
              </div>
              <ul data-aos="fade-up" className="list-unstyled social-icon">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-google-plus-g" />
                </li>
                <li>
                  <i className="fab fa-weebly text-dark" />
                </li>
                <li>
                  <i className="fab fa-youtube" />
                </li>
                <li>
                  <i className="fab fa-instagram text-dark" />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <footer className="text-center">
          <p>
            Copyright © 2017. By Perserver Anh | Design PSD With Sass and Jquery
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
