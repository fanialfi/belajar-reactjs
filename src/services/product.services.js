import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response?.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getProduct, getProducts };
