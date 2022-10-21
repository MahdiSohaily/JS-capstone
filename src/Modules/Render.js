/* eslint-disable linebreak-style */
import getProducts from './GetProducts.js';
import pagination from '../components/Pagination.js';
import card from '../components/ProductCards.js';
import Likes from './Likes.js';
import showPopup from '../components/popup.js';
import showComments from './displaycomments.js';
import Comments from './Comments.js';
import countLikes from './likesCount.js';

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



const closeModal = () => {
  const popup = document.querySelector('.show-popup');
  const close = document.querySelector('.popup-close');
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

/**
 * This function shows the popup when
 * click the comment button
 */

const hitComment = () => {
  const openPopup = document.querySelectorAll('.hit-comment'); /* Comment button */
  const popup = document.querySelector('.show-popup');

  openPopup.forEach((item) => {
    item.addEventListener('click', async (e) => {
      popup.style.display = 'block';
      const element = e.target;
      const id = element.getAttribute('data-display');
      const product = allProducts[id - 1];
      const comment = new Comments();
      const data = await comment.getComments(product.id);
      const template = showComments(data);
      popup.innerHTML = showPopup(product, template, data.length);
      closeModal();
      const submit = document.querySelector('.submit');
      const name = document.querySelector('.name');
      const message = document.querySelector('.message');
      submit.addEventListener('click', async (e) => {
        e.preventDefault();
        const comment = new Comments();
        comment.setComment(id, name.value, message.value).then(async () => {
          const data = await comment.getComments(product.id);
          const template = showComments(data);
          popup.innerHTML = showPopup(product, template, data.length);
          closeModal();
        });
      });
    });
  });
};

/**
 * This function accept the following type of parameter
 * @param {number} index and display only a certain range
 * of data at the beginning and others will bw displayed with
 * different value of index for pagination
 */
const renderTemplate = async (index = 0) => {
  const start = index * 6;
  const container = document.querySelector('#app');
  let end = index * 6 + 6;
  let template = '<div class="product-container pt-500 pb-500 m-300">';
  if (end > allProducts.length) {
    end = allProducts.length;
  }

  for (let count = start; count < end; count += 1) {
    const likeCount = countLikes(allLikedItems, allProducts[count].id);
    /** WE have the function to get the number of comments for specific card at popup section
     * Here we were also added that but that was causing the application to be slow
     * That is way we have added Random number of comments to have better UI insted
     * of just displaying zeros
     */
    template += card(
      allProducts[count],
      likeCount,
      Math.floor(Math.random() * 20),
    );
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
        const products = document.querySelector('#pCount');
        products.innerHTML = allProducts.length;
        renderTemplate();
      });
    });
  });
};

export default start;
