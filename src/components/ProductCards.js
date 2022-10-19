/**
 * This function accept the following parameter
 * @param {object} obj and create the following product
 * card template and assign the object property to it's
 * required place inside the product template and finally
 * @returns the final product card template.
 */
const card = (obj, likes = 0, comments = 0) => `
    <article class="product">
        <header>
          <img class="product-image" src="${obj.image}" alt="Product image">
        </header>
        <div class="product-details pt-300">
          <div class="actions pb-100">
            <div class="like">
              <img class="hit-like" data-liked="${obj.id}" width="20" height="20" src="./images/hearth-icon.svg" alt="hearth-icon">
              <p><b>${likes}</b> like</p>
            </div>
            <div class="comment">
              <img class="hit-comment" data-display="${obj.id}" width="20" height="20" src="./images/comment-icon.svg" alt="comment icon">
              <p><b>${comments}</b> comment</p>
            </div>
          </div>
          <h2 class="product-title">
            ${obj.title}
          </h2>
        </div>
      </article>
    `;

export default card;
