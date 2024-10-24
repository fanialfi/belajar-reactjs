import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response?.data);
      callback(response?.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
