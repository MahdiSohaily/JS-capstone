import { calculateComments } from '../Modules/Commentcounter.js';

const comments = [
  { user: 1, comment: 'comment1' },
  { user: 2, comment: 'comment2' },
  { user: 3, comment: 'comment3' }];

test('Return number of comments', () => {
  const result = calculateComments(comments);
  expect(result).toBe(3);
});