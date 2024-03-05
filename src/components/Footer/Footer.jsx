import React, { Component } from 'react'

import '../Footer/Footer.scss'
import { IoChevronDownOutline } from "react-icons/io5";

export default class Footer extends Component {
  render() {
    return (
      <div>


<section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>Categories</h4>
      <ul className="links">
        <li>
          <a href="#">Web Builder</a>
        </li>
        <li>
          <a href="#">Hosting</a>
        </li>
        <li>
          <a href="#">Hosting</a>
        </li>
        <li>
          <a href="#">Robotic-Automation</a>
        </li>
       
      </ul>
    </div>
    <div className="footer-col">
      <h4>Contact</h4>
      <ul className="links">
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms Of Service</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        
      </ul>
    </div>
    <div className="footer-col">
      
      <div class="dropdown">
    <button class="dropbtn">United States <IoChevronDownOutline /> 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
    </div>
    
  </div>
</section>

        
      </div>
    )
  }
}
