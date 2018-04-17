import productsResponse from "./products.json";

const sleep = miliseconds =>
  new Promise(resolve => {
    setTimeout(() => resolve(), miliseconds);
  });

const fetchProducts = async () => {
  await sleep(0);
  return productsResponse.products;
};

export default {
  fetchProducts
};
