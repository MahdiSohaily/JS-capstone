/* eslint-disable linebreak-style */
import getProducts from './GetProducts.js';
import pagination from '../components/Pagination.js';
import card from '../components/ProductCards.js';
import Likes from './Likes.js';
import showPopup from '../components/popup.js';
import Comments from './comments.js';

let allProducts = [];
let allLikedItems = [];

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
 * This function add an even Listener to
 * every like icon for the click event and
 * then increase the number of an specific item like.
 */
const hitLike = () => {
  const pagination = document.querySelectorAll('.hit-like');
  pagination.forEach((item) => {
    item.addEventListener('click', (e) => {
      const element = e.target;
      element.src = './images/red-hearth.svg';
      const like = new Likes();
      like.setLike(Number(element.getAttribute('data-liked'))).then(() => {
        const child = element.nextElementSibling.firstChild;
        const count = Number(child.innerHTML);
        child.innerHTML = count + 1;
      });
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
const countLikes = (id) => {
  const item = allLikedItems.filter((elem) => (elem.item_id === id ? elem : 0));

  return item;
};

/**
 * This function add an even Listener to
 * every comment for the click event.
 */

const hitComment = () => {
  const openPopup = document.querySelectorAll('.hit-comment'); /* Add class from comment button */
  const popup = document.querySelector('.show-popup');
  const close = document.querySelector('.popup-close');

  openPopup.forEach((item) => {
    item.addEventListener('click', (e) => {
      const element = e.target;
      const id = element.getAttribute('data-display');
      /*  console.log(id); */
      const product = allProducts[id - 1];
      /* console.log(product.image); */
      popup.innerHTML = showPopup(product);
    });
  });

  /*   close.addEventListener('click', () => {
      popup.style.display = 'none';

    }) */
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
    const item = countLikes(allProducts[count].id);
    const likeCount = item.length > 0 ? item[0].likes : 0;
    template += card(allProducts[count], likeCount);
  }
  template += '</div>';
  template += pagination(index);
  container.innerHTML = template;
  activePagination();
  hitLike();
  hitComment();
};

/**
 * This function starts on window load and get
 * two set of data one ofter another in a async
 * mode.
 * 1- The number of likes per product
 * 2- The over all existing products in Store
 */
const start = () => {
  window.addEventListener('load', () => {
    hitComment();
    const like = new Likes();
    like.getLikes().then((data) => {
      allLikedItems = data;

      getProducts().then((data) => {
        allProducts = data;
        renderTemplate();
      });
    });
  });
};

// const closePopup = document.querySelector('.popup-close');

// closePopup.addEventListener('click', () => {
//   popupWindow.style.display = 'none';
// });

export default start;