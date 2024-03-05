import React, { Component } from "react";
import img from "../Images/img.png";
import "../Cart/Cart.scss";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="head">Related deals you might like for</div>
        <div className="cont">
          <div className="card-container">
            <img
              className="img"
              style={{ width: 150, height: 150 }}
              src={img}
            />
            <div className="disit">
            <p className="discount">20%off</p>
            <p className="lt">Limited time</p>
            </div>
           
            <div className="heading">Webbuilder 1</div>
            <div className="para">
              <p>Computer Modern clasic with wix support</p>
            </div>

            <p className="price">$19.99</p>
            <p>
              <button>View Deal</button>
            </p>
          </div>

          <div className="card-container">
            <img
              className="img"
              style={{ width: 150, height: 150 }}
              src={img}
            />
             <div className="disit">
            <p className="discount">20%off</p>
            <p className="lt">Limited time</p>
            </div>
            <div className="heading">Webbuilder 1</div>
            <div className="para">
              <p>Computer Modern clasic with wix support</p>
            </div>

            <p className="price">$19.99</p>
            <p>
              <button>View Deal</button>
            </p>
          </div>
          <div className="card-container">
            <img
              className="img"
              style={{ width: 150, height: 150 }}
              src={img}
            />
            <div className="disit">
            <p className="discount">20%off</p>
            <p className="lt">Limited time</p>
            </div>
            <div className="heading">Webbuilder 1</div>
            <div className="para">
              <p>Computer Modern clasic with wix support</p>
            </div>

            <p className="price">$19.99</p>
            <p>
              <button>View Deal</button>
            </p>
          </div>
        </div>
        
          <div className="head2">Sign up and get exclusive<br></br> special deals</div>

          <form className="form">
          <input className="input" />
            <button className="sineup">Sine Up</button>
          </form>
        </div>
      
    );
  }
}
