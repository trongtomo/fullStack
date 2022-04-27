import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pasword: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
    };
  }
  handleOnChangeInput = (event, id) => {
    //bad
    // this.state[id] = event.target.value;
    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad state", this.state);
    //   }
    // );
    //good
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
  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.createNewUser(this.state);
    }
  };
  componentDidMount() {}
  toggle = () => {
    this.props.toggleFromParent();
  };
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg">
        <ModalHeader toggle={() => this.toggle()}>Create a User</ModalHeader>
        <ModalBody>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 ">Create a new user</div>
              <div className="col-sm-6">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "email");
                  }}
                  value={this.state.email}
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
          <Button color="primary" onClick={() => this.handleAddNewUser()}>
            Add New
          </Button>{" "}
          <Button onClick={() => this.toggle()}>Close</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
