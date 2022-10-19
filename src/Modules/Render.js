/* eslint-disable linebreak-style */
import getProducts from './GetProducts.js';

let allProducts = [];
const render = (obj) => `
    <article class="product">
        <header>
          <img class="product-image" src="${obj.image}" alt="Product image">
        </header>
        <div class="product-details pt-300">
          <div class="actions pb-100">
            <div class="like">
              <img class="hit-like" data-liked="${obj.id}" width="20" height="20" src="./images/hearth-icon.svg" alt="hearth-icon">
              <p>10 likes</p>
            </div>
            <div class="comment">
              <img class="hit-comment" data-display="${obj.id}" width="20" height="20" src="./images/comment-icon.svg" alt="comment icon">
              <p>20 comments</p>
            </div>
          </div>
          <h2 class="product-title">
            ${obj.title}
          </h2>
        </div>
      </article>
    `;

const pagination = (index) => `
<ul class='pagination'>
    <li><a class='page-item' data-index='0'>&laquo;</a></li>
    <li><a class='page-item ${
  index === 0 ? 'active' : ''
}' data-index='0'>1</a></li>
    <li><a class='page-item ${
  index === 1 ? 'active' : ''
}' data-index='1'>2</a></li>
    <li><a class='page-item ${
  index === 2 ? 'active' : ''
}' data-index='2'>3</a></li>
    <li><a class='page-item ${
  index === 3 ? 'active' : ''
}' data-index='3'>4</a></li>
    <li><a class='page-item' data-index='3'>&raquo;</a></li>
  <ul>
`;

/**
 * This function add an event Listener to the
 * pagination items and get their data-index
 * property value on click and sent it to the
 * @renderTemplate function to display different
 * range of data dor the next index of pagination
 */
const addPagination = () => {
  const pagination = document.querySelectorAll('.page-item');
  pagination.forEach((item) => {
    item.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      renderTemplate(Number(e.target.getAttribute('data-index')));
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
    template += render(allProducts[count]);
  }
  template += '</div>';
  template += pagination(index);
  container.innerHTML = template;
  addPagination();
};

/**
 * this function fire on the page load
 * and send a get request to an external API
 * and pass the received data to the @renderTemplate function
 */
function appendProducts() {
  window.addEventListener('load', () => {
    getProducts().then((data) => {
      allProducts = data;
      renderTemplate();
    });
  });
}
export default appendProducts;
