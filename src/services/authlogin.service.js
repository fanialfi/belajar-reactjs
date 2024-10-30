import axios from "axios";

export default function authLogin(username, password) {
  let data = {
    username: username,
    password: password,
  };

  return axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
