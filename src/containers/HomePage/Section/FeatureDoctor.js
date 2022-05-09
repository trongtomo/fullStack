import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";

import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FeatureDoctor extends Component {
  render() {
    return (
      <div className="section-share section-featuredoctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bac si noi bat tuan qua</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
              </div>
              <div className="section-customize ">
                <div className="outer-bg">
                  <div className="bg-img section-featuredoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Giao su Toan</div>
                  <div>Vay AWP</div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureDoctor);
