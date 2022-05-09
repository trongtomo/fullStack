import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MedicalFacility from "./Section/MedicalFacility";
import Specialty from "./Section/Specialty";
import "./HomePage.scss";
import FeatureDoctor from "./Section/FeatureDoctor";
import HandBook from "./Section/HandBook";
import About from "./Section/About";
import Footer from "./Footer";
class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Header />
        <Specialty settings={settings} />
        <MedicalFacility settings={settings} />
        <FeatureDoctor settings={settings} />
        <HandBook settings={settings} />
        <About />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
