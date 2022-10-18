/* eslint-disable linebreak-style */
export default class Product {
  // eslint-disable-next-line class-methods-use-this
  render(obj) {
    return `
    <article class="product">
        <header>
          <img src="${obj.image}" alt="Product image">
        </header>
        <div class="product-details pt-300">
          <div class="actions pb-100">
            <div class="like">
              <img class="hit-like" width="20" height="20" src="./images/hearth-icon.svg" alt="hearth-icon">
              <p>10 likes</p>
            </div>
            <div class="comment">
              <img class="hit-like" data-display="${obj.id}" width="20" height="20" src="./images/comment-icon.svg" alt="comment icon">
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
}
