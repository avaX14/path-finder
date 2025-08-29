import { isValidCell } from '../../../src/validations/isValidCell';

describe('isValidCell', () => {
  it('returns true for uppercase letters', () => {
    expect(isValidCell('A')).toBe(true);
    expect(isValidCell('Z')).toBe(true);
  });

  it('returns true for allowed symbols', () => {
    for (const symbol of ['-', '|', '+', '@', 'x']) {
      expect(isValidCell(symbol)).toBe(true);
    }
  });

  it('returns false for lowercase letters', () => {
    expect(isValidCell('a')).toBe(false);
  });

  it('returns false for numbers or other chars', () => {
    expect(isValidCell('1')).toBe(false);
    expect(isValidCell('#')).toBe(false);
  });

  it('returns false for undefined or empty string', () => {
    expect(isValidCell()).toBe(false);
    expect(isValidCell('')).toBe(false);
  });
});
