/* eslint-disable linebreak-style */
function render(obj) {
  return `
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
}

function like(id) {
  return (id);
}
export { render, like };
