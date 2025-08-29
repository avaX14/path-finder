import { walkPath } from '../../../src/utils/walkPath';

describe('walkPath', () => {
  it('should walk straight horizontal path and collect no letters', () => {
    const map = [['@', '-', '-', '-', 'x']];
    const result = walkPath(map);
    expect(result.path).toBe('@---x');
    expect(result.letters).toBe('');
  });

  it('should walk straight vertical path and collect no letters', () => {
    const map = [['@'], ['|'], ['|'], ['x']];
    const result = walkPath(map);
    expect(result.path).toBe('@||x');
    expect(result.letters).toBe('');
  });

  it('should collect letters along the path', () => {
    const map = [['@', '-', 'A', '-', 'x']];
    const result = walkPath(map);
    expect(result.path).toBe('@-A-x');
    expect(result.letters).toBe('A');
  });

  it('should throw if multiple end points (x) exist', () => {
    const map = [
      [' ', ' ', '@', '-', 'A', '-', 'x'],
      [' ', ' ', '|', ' ', ' ', ' ', ' '],
      [' ', ' ', '+', '-', 'B', '-', 'x'],
    ];

    expect(() => walkPath(map)).toThrow('Invalid map: multiple end points (x)');
  });

  it('should not collect the same letter more than once when revisiting', () => {
    const map = [
      [' ', ' ', ' ', ' ', '+', '-', 'O', '-', 'N', '-', '+', ' ', ' '],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' '],
      [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '+', '-', 'I', '-', '+'],
      ['@', '-', 'G', '-', 'O', '-', '+', ' ', '|', ' ', '|', ' ', '|'],
      [' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '+', '-', '+', ' ', 'E'],
      [' ', ' ', ' ', ' ', '+', '-', '+', ' ', ' ', ' ', ' ', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ];
    const result = walkPath(map);

    const countA = (result.letters.match(/O/g) || []).length;
    expect(countA).toBe(2);
  });

  it('should throw error if start has no valid direction', () => {
    const map = [['@', ' ', 'x']];
    expect(() => walkPath(map)).toThrow(
      'Invalid map: No valid direction found.'
    );
  });

  it('should throw error if path is broken (missing continuation)', () => {
    const map = [
      ['@', '-', ' '],
      [' ', ' ', 'x'],
    ];
    expect(() => walkPath(map)).toThrow('Path is broken.');
  });
});
