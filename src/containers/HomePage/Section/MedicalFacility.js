import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";

import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-share section-medicalfacility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Co so y te noi bat</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 1</h3>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 2</h3>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 3</h3>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 4</h3>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-img section-medicalfacility"> </div>
                <h3>Co so 6</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
