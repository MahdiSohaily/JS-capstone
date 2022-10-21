/**
 * This function accept the following parameter
 * @param {object} obj and create the following product
 * card template and assign the object property to it's
 * required place inside the product template and finally
 * @returns the final product card template.
 */
const card = (obj, likes = 0, comments = 0) => `
<div class="item mr-400 ml-400">
<div class="diamond-container">
  <div class="diamond">
    <div class="diamond-wrapper">
      <div class="diamond-content">${obj.price}$</div>
    </div>
  </div>
</div>
<div class="item-wrapper">
  <div class="content-wrapper">
    <div class="img-container">
      <div class="bg-square"></div>
      <img class="item-img" src="${obj.image}" />
    </div>
    <div class="content-text">
    <div class="item-name">${obj.title}</div>
    <div class="item-subtext-container">
    <span class="item-subtext subtext-mfr">Rating: ${obj.rating.rate}</span>
    </div>
    </div>
  </div>
  <div class="view-more-btn">
  <div class="actions p-300">
      <div class="like">
        <img class="hit-like" data-liked="${obj.id}" width="20" height="20" src="./images/hearth-icon.svg" alt="hearth-icon">
        <p><b>${likes}</b> like</p>
      </div>
      <div class="comment">
        <img class="hit-comment" data-display="${obj.id}" width="20" height="20" src="./images/comment-icon.svg" alt="comment icon">
        <p><b>${comments}</b> comment</p>
      </div>
    </div>
  </div>
</div>
</div>
`;

export default card;
