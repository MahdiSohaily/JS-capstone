/**
 * This function creates the HTML Template
 * for the pagination and accept the following
 * @param {number} index to mark the current active
 * pagination item as active and add the active class
 * @returns the pagination HTML structure.
 */
const createPagination = (index) => `
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

export { createPagination, addPagination };
