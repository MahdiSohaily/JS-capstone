import Comments from './Comments.js';

const showComments = async () => {
  const com = await Comments.getComments();
  const resultsBox = document.querySelector('.comments-container');
  const fragment = new DocumentFragment();
  resultsBox.innerHTML = '';
  if (com.length === 0) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'No comments';
    resultsBox.append(paragraph);
  } else {
    com.forEach((element) => {
      const { username, comment } = element;
      const paragraph = document.createElement('p');
      paragraph.classList.add('comment-list');
      paragraph.innerText = `${username}: ${comment}`;
      fragment.append(paragraph);
    });
    resultsBox.append(fragment);
  }
};

const addComment = async () => {
  const inputs = document.querySelector('form').elements;
  const [username, comment] = [inputs[0].value, inputs[1].value];
  await Comments.setComments(username, comment);
  inputs[0].value = '';
  inputs[1].value = '';
  showComments();
};

export { showComments, addComment };