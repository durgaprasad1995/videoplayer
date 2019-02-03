import React, { Component } from "react";
import { Link } from "react-router";
import { login, logout, isLoggedIn } from "../utils/AuthService";
import "../App.css";
import { Button } from "reactstrap";

// import { MdClearAll } from "react-icons/lib/md";
class Nav extends Component {
  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open");
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Mobiotics
            </a>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav nav navbar-right">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li className="">
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="grids-heading gallery-heading">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-grids">
          <div class="show-reel">
            <div className="col-md-3 agile-gallery-grid">
              <div className="agile-gallery">
                <a
                  href="https://addpipe.com/sample_vid/poster.png"
                  className="lsb-preview"
                  data-lsb-group="header"
                >
                  <img src="https://addpipe.com/sample_vid/poster.png" alt="" />
                  <div className="agileits-caption">
                    <h4>Consectetur</h4>
                    <p>
                      Sed ultricies non sem sit amet laoreet. Ut semper erat
                      erat.
                    </p>
                  </div>
                </a>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Nav;
