/**
 * @jest-environment jsdom
 */
import { countLikes } from '../Modules/Render.js';

describe('Counting the number of likes for specific item test', () => {
  // Test One
  test('Adding TODO One to local storage', () => {
    const allLikedItems = [{ likes: 5, item_id: 1 }];
    expect(countLikes(allLikedItems, 1)).toBe(5);
  });

  // Test Two
  test('Adding TODO One to local storage', () => {
    const allLikedItems = [{ likes: 10, item_id: 20 }];
    expect(countLikes(allLikedItems, 20)).toBe(10);
  });

  // Test Three
  test('Adding TODO One to local storage', () => {
    const allLikedItems = [{ likes: 1000, item_id: 18 }];
    expect(countLikes(allLikedItems, 18)).toBe(1000);
  });
});
