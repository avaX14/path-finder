import getInitialDirection from '../../../src/utils/getInitialDirection';

describe('getInitialDirection', () => {
  // Simple map with @ in the middle
  const map = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', '@', '-', 'A', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ];

  it('returns "right" if the valid path is to the right', () => {
    expect(getInitialDirection(map, 1, 1)).toBe('right');
  });

  it('returns "left" if the valid path is to the left', () => {
    const leftMap = [
      [' ', ' ', ' ', ' ', ' '],
      ['A', '-', '@', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
    ];
    expect(getInitialDirection(leftMap, 1, 2)).toBe('left');
  });

  it('returns "up" if the valid path is above', () => {
    const upMap = [
      [' ', '|', ' '],
      [' ', '@', ' '],
      [' ', ' ', ' '],
    ];
    expect(getInitialDirection(upMap, 1, 1)).toBe('up');
  });

  it('returns "down" if the valid path is below', () => {
    const downMap = [
      [' ', ' ', ' '],
      [' ', '@', ' '],
      [' ', '|', ' '],
    ];
    expect(getInitialDirection(downMap, 1, 1)).toBe('down');
  });

  it('should throw if no valid direction exists', () => {
    const isolatedMap = [
      [' ', ' ', ' '],
      [' ', '@', ' '],
      [' ', ' ', ' '],
    ];
    expect(() => getInitialDirection(isolatedMap, 1, 1)).toThrow(
      'Invalid map: No valid direction found.'
    );
  });
});
