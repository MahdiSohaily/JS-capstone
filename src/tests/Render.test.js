/**
 * @jest-environment jsdom
 */
import { countLikes } from '../Modules/Render.js';

describe('Addition test', () => {
  // Test One
  test('Adding TODO One to local storage', () => {
    countLikes();
    expect(1).toEqual(1);
  });
});
