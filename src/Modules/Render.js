/* eslint-disable linebreak-style */
import getProducts from './GetProducts.js';
import pagination from '../components/Pagination.js';
import card from '../components/ProductCards.js';
import Likes from './Likes.js';

let allProducts = [];

/**
 * This function add an event Listener to the
 * pagination items and get their data-index
 * property value on click and sent it to the
 * @renderTemplate function to display different
 * range of data dor the next index of pagination
 */
const activePagination = () => {
  const pagination = document.querySelectorAll('.page-item');
  pagination.forEach((item) => {
    item.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      renderTemplate(Number(e.target.getAttribute('data-index')));
    });
  });
};

/**
 * This function add an event Listener to the
 * pagination items and get their data-index
 * property value on click and sent it to the
 * @renderTemplate function to display different
 * range of data dor the next index of pagination
 */
const hitLike = () => {
  const pagination = document.querySelectorAll('.hit-like');
  pagination.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.style.fill = 'yellow';
      console.log(e.target.style.fill);
      // eslint-disable-next-line no-use-before-define
      Likes.setLike(Number(e.target.getAttribute('data-liked')));
    });
  });
};

/**
 * This function accept the following type of parameter
 * @param {number} index and display only a certain range
 * of data at the beginning and others will bw displayed with
 * different value of index for pagination
 */
const renderTemplate = (index = 0) => {
  const start = index * 6;
  const container = document.querySelector('#app');
  let end = index * 6 + 6;
  let template = '<div class="product-container pt-500 pb-500">';
  if (end > allProducts.length) {
    end = allProducts.length;
  }
  for (let count = start; count < end; count += 1) {
    template += card(allProducts[count]);
  }
  template += '</div>';
  template += pagination(index);
  container.innerHTML = template;
  activePagination();
  hitLike()
};

window.addEventListener('load', () => {
  getProducts().then((data) => {
    allProducts = data;
    renderTemplate();
  });
});
