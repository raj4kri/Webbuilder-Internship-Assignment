import React, { Component } from "react";
import  "./Navbarsmall.scss";

export default class Navbarsmall extends Component {
  render() {
    return (
      <div>
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Hosting for all</a>
          </li>
          <li>
            <a href="#">Hosting6</a>
          </li>
          <li>Hosting6</li>
        </ul>
      </div>
    );
  }
}
