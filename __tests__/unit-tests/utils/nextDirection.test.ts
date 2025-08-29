import { Direction } from '../../../src/types/directions';
import nextDirection from '../../../src/utils/nextDirection';

describe('nextDirection', () => {
  it('should return "up" when coming from left and up cell is valid', () => {
    const map = [
      [' ', '|', ' '],
      ['-', '+', ' '],
      [' ', ' ', ' '],
    ];
    const result = nextDirection(map, 1, 1, 'left');
    expect(result).toBe<Direction>('up');
  });

  it('should return "down" when coming from right and down cell is valid', () => {
    const map = [
      [' ', ' ', ' '],
      [' ', '+', '-'],
      [' ', '|', ' '],
    ];
    const result = nextDirection(map, 1, 1, 'right');
    expect(result).toBe<Direction>('down');
  });

  it('should return "left" when coming from up and left cell is valid', () => {
    const map = [
      [' ', '|', ' '],
      ['-', '+', ' '],
      [' ', ' ', ' '],
    ];
    const result = nextDirection(map, 1, 1, 'up');
    expect(result).toBe<Direction>('left');
  });

  it('should return "right" when coming from down and right cell is valid', () => {
    const map = [
      [' ', ' ', ' '],
      [' ', '+', '-'],
      [' ', '|', ' '],
    ];
    const result = nextDirection(map, 1, 1, 'down');
    expect(result).toBe<Direction>('right');
  });

  it('should throw error if no valid turn found', () => {
    const map = [
      [' ', ' ', ' '],
      [' ', '+', ' '],
      [' ', ' ', ' '],
    ];
    expect(() => nextDirection(map, 1, 1, 'left')).toThrow(
      'Invalid map: No valid turns found.'
    );
  });

  it('should throw error if fork is found', () => {
    const map = [
      [' ', ' ', 'A'],
      ['@', '-', '+'],
      [' ', ' ', 'B'],
    ];
    expect(() => nextDirection(map, 1, 2, 'left')).toThrow(
      'Invalid map: fork in path found.'
    );
  });
});
