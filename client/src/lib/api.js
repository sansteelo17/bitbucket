import axios from "axios";

export const getAllProducts = async () => {
  const response = await axios.get(
    "https://steelotest.000webhostapp.com/routes/products.php"
  );

  if (response.status === 200) {
    const allProducts = response.data.allProducts;

    return allProducts;
  }
};

export const insertProduct = async (product, successFn = () => {}) => {
  const response = await axios.post(
    "https://steelotest.000webhostapp.com/routes/insert.php",
    product
  );

  if (response.status === 200) {
    successFn();
  }
};

export const massDelete = async (products, successFn = () => {}) => {
  const response = await axios.post(
    "https://steelotest.000webhostapp.com/routes/delete.php",
    products
  );

  if (response.status === 200) {
    successFn();
  }
};
