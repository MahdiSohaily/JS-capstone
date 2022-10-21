/**
 * @jest-environment jsdom
 */
import { countLikes } from '../Modules/Render.js';

describe('Addition test', () => {
  // Test One
  test('Adding TODO One to local storage', () => {
    const allLikedItems = [{ likes: 5, item_id: 1 }];
    expect(countLikes(allLikedItems, 1)).toBe(5);
  });
});
