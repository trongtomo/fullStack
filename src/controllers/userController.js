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
  let id = req.body.id; //ALL or Single:id
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
module.exports = {
  handleLogin: handleLogin,
  getAllUsers: getAllUsers,
};
