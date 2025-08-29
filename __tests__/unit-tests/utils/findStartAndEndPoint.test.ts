import findStartAndEndPoint from '../../../src/utils/findStartAndEndPoint';

describe('findStartAndEndPoint', () => {
  it('should return the correct start and end positions', () => {
    const map = [
      [' ', '@', ' '],
      [' ', '-', ' '],
      [' ', 'x', ' '],
    ];

    const result = findStartAndEndPoint(map);

    expect(result).toEqual({
      start: [0, 1],
      end: [2, 1],
    });
  });

  it('should throw if there are multiple start points', () => {
    const map = [
      ['@', '@'],
      [' ', 'x'],
    ];

    expect(() => findStartAndEndPoint(map)).toThrow(
      'Invalid map: Multiple starting paths.'
    );
  });

  it('should throw if there are multiple end points', () => {
    const map = [
      ['@', ' '],
      ['x', 'x'],
    ];

    expect(() => findStartAndEndPoint(map)).toThrow(
      'Invalid map: multiple end points (x).'
    );
  });

  it('should throw if the start point is missing', () => {
    const map = [
      [' ', ' '],
      ['x', ' '],
    ];

    expect(() => findStartAndEndPoint(map)).toThrow(
      'Invalid map: missing start point (@).'
    );
  });

  it('should throw if the end point is missing', () => {
    const map = [
      ['@', ' '],
      [' ', ' '],
    ];

    expect(() => findStartAndEndPoint(map)).toThrow(
      'Invalid map: missing end point (x).'
    );
  });

  it('should handle a larger map correctly', () => {
    const map = [
      [' ', ' ', ' ', ' ', ' '],
      [' ', '@', '-', '-', ' '],
      [' ', ' ', ' ', 'x', ' '],
    ];

    const result = findStartAndEndPoint(map);

    expect(result).toEqual({
      start: [1, 1],
      end: [2, 3],
    });
  });
});
