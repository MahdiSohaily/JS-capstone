/* eslint-disable linebreak-style */
import './styles/styles.css';
import './Modules/UIEvents.js';
import { render } from './Modules/Render.js';
import getProducts from './Modules/GetProducts.js';

let allProducts = [];

const addPagination = () => {
  const pagination = document.querySelectorAll('.page-item');
  pagination.forEach((item) => {
    item.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      renderTemplate(Number(e.target.getAttribute('data-index')));
    });
  });
};

const renderTemplate = (index = 0) => {
  const start = index * 6;
  const container = document.querySelector('#app');
  let end = index * 6 + 6;
  let template = '<div class="product-container pt-500 pb-500">';
  if (end > allProducts.length) {
    end = allProducts.length;
  }
  for (let count = start; count < end; count += 1) {
    template += render(allProducts[count]);
  }
  template += `
  </div>
  <ul class='pagination'>
    <li><a class='page-item' data-index='0'>&laquo;</a></li>
    <li><a class='page-item ${index === 0 ? 'active' : ''}' data-index='0'>1</a></li>
    <li><a class='page-item ${index === 1 ? 'active' : ''}' data-index='1'>2</a></li>
    <li><a class='page-item ${index === 2 ? 'active' : ''}' data-index='2'>3</a></li>
    <li><a class='page-item ${index === 3 ? 'active' : ''}' data-index='3'>4</a></li>
    <li><a class='page-item' data-index='3'>&raquo;</a></li>
  <ul>
  `;
  container.innerHTML = template;
  addPagination();
};

window.addEventListener('load', () => {
  getProducts().then((data) => {
    allProducts = data;
    renderTemplate();
  });
});


