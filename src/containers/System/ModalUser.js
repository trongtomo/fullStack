import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  toggle = () => {
    this.props.toggleFromParent();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"abc"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Create a User</ModalHeader>
        <ModalBody>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 ">Create a new user</div>
              <div className="col-sm-6">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="col-sm-6">
                <label className="form-label">First Name</label>
                <input name="firstName" type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label className="form-label">Last Name</label>
                <input name="lastName" type="text" className="form-control" />
              </div>
              <div className="col-sm-12">
                <label className="form-label">Address</label>
                <input name="address" type="text" className="form-control" />
              </div>
              <div className="form-group col-md">
                <label className="form-label">Phone</label>
                <input
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
          <Button color="primary" onClick={() => this.toggle()}>
            Save Changes
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
