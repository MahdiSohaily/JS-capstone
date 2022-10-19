/**
 * This function send a GET request
 * to an external API to get some dummy
 * data about products od an store and
 * @returns a Promise contains the data
 */
const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

export default getProducts;
