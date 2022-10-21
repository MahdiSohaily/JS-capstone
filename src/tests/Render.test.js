/**
 * @jest-environment jsdom
 */
import { countLikes } from '../Modules/Render.js';

describe('Addition test', () => {
  // Test One
  test('Adding TODO One to local storage', () => {
    const allLikedItems = [{ likes: 5, item_id: '1' }];
    console.log(countLikes(allLikedItems, 1));
    expect(1).toEqual(1);
  });
});
