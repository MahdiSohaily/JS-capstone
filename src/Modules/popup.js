const showPopup = (popupWindow, image, title, description, price, id) => {
  popupWindow.innerHTML = `<div class="popup-container">
  <img class="popup-close" src=".images/icon-close.svg" alt="close icon">
  <div class="popup-info">
      <div class="prod-detail">
          <div class="img-container">
              <img class="prod-img" src=${image} alt="product image">
          </div>
          <div class="detail-container">
              <div class="description">
                  <h4 class="company-name">'Clara Store'</h4>
                  <h3 class="product-title">${title}</h3>
                  <p class="product-description">${description}</p>
                  <p class="product-price">${price}</p>
              </div>
          </div>
      </div>
      <div class="prod-comments">
          <div class="comment-list">
              <h3 class='comments-counters'>Comments</h3>
              <ul class="comments-container">

              </ul>
          </div>
          <div class="add-comment-section">
              <div class="add-comment">
                  <h3>Add Comment</h3>
              </div>
              <form class="form-comments">
                  <input type="text" name="name" id="name" class="input-name" placeholder="Your name">
                  <textarea name="description" id="description" class="input-text" cols="30" rows="5"
                      placeholder="Your insight"></textarea>
                  <button id=${id} type="submit" class="submit-comment input">Comment</button>
              </form>
          </div>
      </div>
  </div>
</div>`;
};

export default showPopup;