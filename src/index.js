/* eslint-disable linebreak-style */
import './styles/styles.css';
import './Modules/UIEvents.js';
import { render } from './Modules/Render.js';
import getProducts from './Modules/GetProducts.js';

let allProducts = [];

const renderTemplate = (index = 0) => {
  const start = index * 8;
  const container = document.querySelector('#app');
  let end = index * 8 + 8;
  let template = '<div class="product-container pt-500 pb-500">';
  if (end > allProducts.length) {
    end = allProducts.length;
  }
  for (let count = start; count < end; count += 1) {
    template += render(allProducts[count]);
  }
  template += '</div>';

  container.innerHTML = template;
};

window.addEventListener('load', () => {
  getProducts().then((data) => {
    allProducts = data;
    renderTemplate();
  });
});
