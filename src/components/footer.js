import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container">
          <div className="navbar-text pull-left">
            <p>copyright durga prasad 2017</p>
          </div>
          <div className="navbar-text pull-right">
            <a href="#">
              <i className="fa fa-facebook fa-2x" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-twitter fa-2x" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-google-plus fa-2x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
