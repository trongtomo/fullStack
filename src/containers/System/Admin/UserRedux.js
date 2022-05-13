import { entries } from "lodash";
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCode } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }
  async componentDidMount() {
    try {
      let res = await getAllCode("gender");
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        });
      }
    } catch (error) {}
  }

  render() {
    console.log("check state", this.state);
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="user-redux-container">
        <div className="title">User Redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div class="container mt-5">
              <form action="/post-crud" method="post">
                <div class="row">
                  <div class="col-12 ">
                    <FormattedMessage id="manage-user.add" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.email" />
                    </label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.password" />
                    </label>
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                    />
                  </div>

                  <div class="col-sm-6">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.firstName" />
                    </label>
                    <input name="firstName" type="text" class="form-control" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.lastName" />
                    </label>
                    <input name="lastName" type="text" class="form-control" />
                  </div>
                  <div class="col-sm-12">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.address" />
                    </label>
                    <input name="address" type="text" class="form-control" />
                  </div>
                  <div class="form-group col-md">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.phone" />
                    </label>
                    <input
                      name="phonenumber"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group col-md-auto ">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.gender" />
                    </label>
                    <select
                      name="gender"
                      class="form-select"
                      aria-label="Your gender"
                    >
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVI
                                : item.valueEN}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div class="form-group col-md">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.role" />
                    </label>
                    <select
                      name="roleId"
                      class="form-select"
                      aria-label="Your Role"
                    >
                      <option value="1">Admin</option>
                      <option value="2">Doctor</option>
                      <option value="3">Patient</option>
                    </select>
                  </div>
                  <div class="col-sm-12">
                    <label class="form-label">
                      <FormattedMessage id="manage-user.image" />
                    </label>
                    <input name="Image" type="text" class="form-control" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                  <FormattedMessage id="manage-user.submit" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
