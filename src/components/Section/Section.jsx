import React, { Component } from "react";
import img from "../Images/img.png";
import "./Section.scss";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import { CiTrophy } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Rating from "../Rating/Rating";

// import Rating from "../Rating/Rating";
import Navbarsmall from "../Navbarsmall/Navbarsmall";
export default class Section extends Component {
  render() {
    return (
      <div>
        <section className="container_sec">
          <div className="container">
            <div className="head3">Best Website builders in the US</div>
            <hr></hr>
            <spam className="spam">
              <CiCircleCheck /> Last Updated - February 22, 2020{" "}
              <CiCircleInfo />
              Advertising Disclosure
              <spam className="align">
                {" "}
                Top Relevant
                <IoIosArrowDown />
              </spam>
            </spam>
            <hr></hr>
          </div>
          <section className="button_space">
            <button className="btnall">Tools</button>
            <button className="btnall">AWS Builder</button>
            <button className="btnall">Start Build</button>
            <button className="btnall">Build Supplies</button>
            <button className="btnall">Tooling</button>
            <button className="btnall">BlueHosting</button>
          </section>

          <Navbarsmall />
          <div className="box">
            <div>
              <div className="tag">
                <div className="icon1">
                  <CiTrophy />
                </div>
                <div className="tag_text">Best Choice</div>
              </div>
            </div>

            <div className="image">
              <img style={{ width: 150, height: 150 }} src={img}></img>
              <div className="Builder">
                <spam>Builder 1</spam>
              </div>
            </div>

            <div className="text_box">
              <div className="text">
                <p>
                  <strong>WixPro 72-Inch Responsive Website Builder-</strong>
                  Comprehensive Digital Platform Creation Tool, Streamlined
                  Design Interface for Professional Websites and Online Stores
                  (Black/Blue)
                </p>
              </div>

              <div className="text">
                <h3>Main highlights</h3>
                <p>
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </p>
                <button className="show">Show More</button>
                <div className="btn_space">
                  <button className="btn7">View</button>
                </div>
              </div>
            </div>

            <div className="box_rate">
              <Rating />
            </div>
          </div>

          <div className="box">
            <div className="tag">
              <div className="icon1">
                <IoDiamondOutline />
              </div>

              <div className="tag_text">Best Value</div>
            </div>
            <div className="image">
              <img style={{ width: 150, height: 150 }} src={img}></img>
              <div className="Builder">
                <spam>Builder </spam>
              </div>
            </div>

            <div className="text_box">
              <div className="text">
                <p>
                  <strong>
                    SiteCraft 68-Inch Ultimate Web Design Studio -
                  </strong>
                  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                  for Dynamic Websites and E-commerce Platforms (Green/White)
                  (Black/Blue)
                </p>
              </div>

              <div className="text">
                <h3>Main highlights</h3>
                <p>
                  [What You Get]: [What You Get]: Receive the WixPro website
                  builder suite, access to premium design templates, an
                  extensive library of widgets and apps, and detailed
                  step-by-step guides.
                </p>
                <button className="show">Show More</button>

                <div className="btn_space">
                  <button className="btn7">View</button>
                </div>
              </div>
            </div>

            <div className="box_rate">
              <Rating />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img style={{ width: 150, height: 150 }} src={img}></img>
              <div className="Builder">
                <spam>Builder 1</spam>
              </div>
            </div>

            <div className="text_box">
              <div className="text">
                <p>
                  <strong>CDK Resposive Builder:</strong>
                  An extensive library of widgets and apps, and detailed
                  step-by-step guides (Black/Blue)
                </p>
              </div>

              <div className="text">
                <h3>Main highlights</h3>
                <p>
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </p>
                <button className="show">Show More</button>

                <div className="btn_space">
                  <button className="btn7">View</button>
                </div>
              </div>
            </div>

            <div className="box_rate">
              <Rating />
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img style={{ width: 150, height: 150 }} src={img}></img>
              <div className="Builder">
                <spam> CDX</spam>
              </div>
            </div>

            <div className="text_box">
              <div className="text">
                <p>
                  <strong>CDK Resposive Builder:</strong>
                  An extensive library of widgets and apps, and detailed
                  step-by-step guides (Black/Blue)
                </p>
              </div>

              <div className="text">
                <h3>Main highlights</h3>

                <div className="list">
                  <p>7.8 building responsive</p>
                  <p>7.8 building responsive</p>
                  <p>7.2 Docs</p>
                </div>

                <div>
                  <button className="show">Show More</button>
                </div>

                <div className="btn_space">
                  <button className="btn7">View</button>
                </div>
              </div>
            </div>

            <div className="box_rate">
              <Rating />
            </div>
          </div>
          <Cart />
          <Footer />
        </section>
      </div>
    );
  }
}
