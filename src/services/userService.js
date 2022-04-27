import axios from "../axios";
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("api/login", { email: userEmail, password: userPassword });
};
const getAllUser = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUser = (data) => {
  return axios.post("/api/create-new-user", data);
};
const deleteUser = (userId) => {
  // return axios.delete("/api/delete-a-user", { id: userId });
  return axios.delete("/api/delete-a-user", {
    data: {
      id: userId,
    },
  });
};
export { handleLoginApi, getAllUser, createNewUser, deleteUser };
