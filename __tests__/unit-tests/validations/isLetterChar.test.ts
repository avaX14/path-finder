import isLetterChar from '../../../src/validations/isLetterChar';

describe('isLetterChar', () => {
  it('returns true only for uppercase letters', () => {
    expect(isLetterChar('A')).toBe(true);
    expect(isLetterChar('Z')).toBe(true);
    expect(isLetterChar('a')).toBe(false);
    expect(isLetterChar('1')).toBe(false);
    expect(isLetterChar('+')).toBe(false);
  });
});
