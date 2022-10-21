/**
 * This function add an event Listener to the
 * pagination items and get their data-index
 * property value on click and sent it to the
 * @renderTemplate function to display different
 * range of data dor the next index of pagination
 */
const countLikes = (likedList, id) => {
  const item = likedList.filter((elem) => (elem.item_id === id ? elem : 0));
  return item.length > 0 ? item[0].likes : 0;
};

export default countLikes;