import countLikes from '../Modules/likesCount.js';
import countItems from '../Modules/itemsCount.js';
import { calculateComments } from '../Modules/Commentcounter.js';

describe('Counting the number Comments', () => {
  test('Return number of comments', () => {
    const comments = [
      { user: 1, comment: 'comment1' },
      { user: 2, comment: 'comment2' },
      { user: 3, comment: 'comment3' },
    ];
    const result = calculateComments(comments);
    expect(result).toBe(3);
  });
});

describe('Counting the number of likes for specific item test', () => {
  // Test One
  test('Adding one Like Object with 5 likes and test it', () => {
    const allLikedItems = [{ likes: 5, item_id: 1 }];
    expect(countLikes(allLikedItems, 1)).toBe(5);
  });

  // Test Two
  test('Adding one Like Object with 10 likes and test it', () => {
    const allLikedItems = [{ likes: 10, item_id: 20 }];
    expect(countLikes(allLikedItems, 20)).toBe(10);
  });

  // Test Three
  test('Adding one Like Object with 1000 likes and test it', () => {
    const allLikedItems = [{ likes: 1000, item_id: 18 }];
    expect(countLikes(allLikedItems, 18)).toBe(1000);
  });
});

describe('Counting the number of Items for specific item test', () => {
  // Test One
  test('Adding five Objects and test it', () => {
    const products = [{}, {}, {}, {}, {}];
    expect(countItems(products)).toBe(5);
  });

  // Test Two
  test('Adding ten Objects and test it', () => {
    const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    expect(countItems(products)).toBe(10);
  });

  // Test Three
  test('Adding fifteen Objects and test it', () => {
    const products = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];
    expect(countItems(products)).toBe(15);
  });
});
