const showPopup = (product) => `<div class="popup-container">
<div class="popup-info">
<img width="20" height="20" class="popup-close" src="./images/icon-close.svg" alt="close icon">
<div class="prod-detail">
  <div class="img-container">
    <img class="prod-img" src="${product.image}" alt="product image">
  </div>
  <div class="pt-500">
    <div class="description">
      <h4 class="text-orange">Clara Store</h4>
      <h3 class="secondary-heading text-very-dark-blue mb-200">${product.title}</h3>
      <p class="text-grayish-blue prod-desc mb-300">
        ${product.description}.
      </p>
      <p class="product-price"> $${product.price}</p>
    </div>
  </div>
</div>
<div class="prod-comments">
  <div class="comment-list">
    <h3 class='comments-counters '>Comments (<span class="counter">0</span>) </h3>
    <ul class="comments-container border mt-100">
      <li></li>
    </ul>
  </div>
  <div class="add-comment-section">
    <div class="add-comment">
      <h3 class="comments-counters">Add Your Comment</h3>
    </div>
    <form class="form-comments border p-300 mt-100">
        <input type="text" name="name" aria-label="user name" class="name p-200" placeholder="Your name" required>
          <textarea name="description" aria-label="user message" class="message p-200" cols="30" rows="5"
            placeholder="Your insight..." required></textarea>
          <button id=${product.id} type="submit" class="submit-comment input p-200">Comment</button>
    </form>
  </div>
</div>
</div>
</div>`;
export default showPopup;