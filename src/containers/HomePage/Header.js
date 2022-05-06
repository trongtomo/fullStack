import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.scss";
import logo from "../../assets/bookingcarelogo.svg";
import { FormattedMessage } from "react-intl";
class Header extends Component {
  render() {
    console.log("check props", this.props);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fa-solid fa-bars"></i>
              <img className="header-logo" src={logo} />
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.speciality" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.search-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id="home-header.health-facility" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.find-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.general-health-check" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fa-solid fa-circle-question"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div className="language-vi"> VN</div>
              <div className="language-en"> ENG</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="home-banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="home-banner.title2" />
            </div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="..." />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child1" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child2" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child3" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child4" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-banner-child.child5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
