const showComments = (comments) => {
  let template = '';
  comments.forEach((element) => {
    template += `<li>${element.creation_date}</li>`;
  });

  return template;
};
const appendComment = () => {};
export { showComments, appendComment };