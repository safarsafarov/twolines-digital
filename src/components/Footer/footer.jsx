/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Uzbekistan</h6>
                    <p>Tashkent</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>twolines.digital@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              {/* <div className="title">
                <h5>Recent News</h5>
              </div> */}
              {/* <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer