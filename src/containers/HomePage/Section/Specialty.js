import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";

import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyen khoa pho bien</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 1</h3>
              </div>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 2</h3>
              </div>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 3</h3>
              </div>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 4</h3>
              </div>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 5</h3>
              </div>
              <div className="section-customize ">
                <div className="bg-img section-specialty"> </div>
                <h3>Cơ Xương Khớp 6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
