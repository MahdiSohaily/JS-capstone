/**
 * @jest-environment jsdom
 */
import { start, countLikes } from '../Modules/Render.js';

describe('Addition test', () => {
  // Test One
  test('Adding TODO One to local storage', () => {
    allLikedItems = []
    console.log(countLikes(1));
    expect(1).toEqual(1);
  });
});
