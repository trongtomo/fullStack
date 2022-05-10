import { json } from "express/lib/response";
import UserService from "../services/UserService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let userData = await UserService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
let getAllUsers = async (req, res) => {
  let id = req.query.id; //ALL or Single:id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: `Missing required parameters`,
      users: [],
    });
  }
  let users = await UserService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: ``,
    users,
  });
};
let createNewUser = async (req, res) => {
  let message = await UserService.createNewUser(req.body);
  return res.status(200).json(message);
};
let deleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await UserService.deleteUser(req.body.id);
  return res.status(200).json(message);
};
let editUser = async (req, res) => {
  let data = req.body;
  let message = await UserService.updateUserData(data);
  return res.status(200).json(message);
};
let getAllCode = async (req, res) => {
  try {
    let data = await UserService.getAllCode(req.query.type);
    return res.status(200).json(data);
  } catch (error) {
    console.log("Get all code arror:", error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  editUser: editUser,
  deleteUser: deleteUser,
  getAllCode: getAllCode,
};
