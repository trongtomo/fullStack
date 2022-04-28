import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "../../utils//emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
    };
  }
  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phonenumber: "",
      });
    });
  }
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert(`Missing parameter:` + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleSaveUpdateUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };
  componentDidMount() {
    //   let {currentUser} =this.props;
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hardcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phonenumber: user.phonenumber,
      });
    }
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size="lg"
        className={"modal-user-container"}
      >
        <ModalHeader toggle={() => this.toggle()}>Edit a User</ModalHeader>
        <ModalBody>
          <div className="container mt-5 modal-user-body">
            <div className="row ">
              <div className="col-12 ">Edit user</div>
              <div className="col-sm-6">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "email");
                  }}
                  value={this.state.email}
                  disabled
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label">Password</label>
                <input
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "password");
                  }}
                  value={this.state.password}
                  name="password"
                  type="password"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="col-sm-6">
                <label className="form-label">First Name</label>
                <input
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "firstName");
                  }}
                  value={this.state.firstName}
                  name="firstName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label">Last Name</label>
                <input
                  value={this.state.lastName}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "lastName");
                  }}
                  name="lastName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-sm-12">
                <label className="form-label">Address</label>
                <input
                  value={this.state.address}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "address");
                  }}
                  name="address"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md">
                <label className="form-label">Phone</label>
                <input
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "phonenumber");
                  }}
                  value={this.state.phonenumber}
                  name="phonenumber"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-auto ">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  aria-label="Your gender"
                >
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
              <div className="form-group col-md">
                <label className="form-label">Role</label>
                <select
                  name="roleId"
                  className="form-select"
                  aria-label="Your Role"
                >
                  <option value="1">Admin</option>
                  <option value="2">Doctor</option>
                  <option value="3">Patient</option>
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSaveUpdateUser()}
          >
            Save changes
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
