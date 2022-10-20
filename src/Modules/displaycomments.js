const showComments = (comments) => {
  let template = '';
  comments.forEach((element, index) => {
    template += `<li>${index + 1} - ${element.username} - ${
      element.comment
    } - ${element.creation_date}</li>`;
  });

  return template;
};
const appendComment = () => {};
export { showComments, appendComment };