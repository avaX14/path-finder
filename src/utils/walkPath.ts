import findStartAndEndPoint from './findStartAndEndPoint';
import nextDirection from './nextDirection';
import { isValidCell } from '../validations/isValidCell';
import { directionMoves, type Direction } from '../types/directions';
import isLetterChar from '../validations/isLetterChar';
import getInitialDirection from './getInitialDirection';

export function walkPath(map: string[][]): { letters: string; path: string } {
  const { start } = findStartAndEndPoint(map);
  let [row, col] = start;

  let direction: Direction | null = getInitialDirection(map, row, col);
  if (!direction) throw new Error('No valid direction from start');

  let pathChars = map[row][col];
  const letters: string[] = [];
  const visitedCells = new Set<string>();

  while (map[row][col] !== 'x') {
    const char = map[row][col];

    if (isLetterChar(char) && !visitedCells.has(`${row},${col}`)) {
      letters.push(char);
      visitedCells.add(`${row},${col}`);
    }

    if (char === '+') {
      direction = nextDirection(map, row, col, direction);
    } else if (isLetterChar(char)) {
      const [directionRow, directionCol] = directionMoves[direction];
      const straight = map[row + directionRow]?.[col + directionCol];
      if (!isValidCell(straight)) {
        direction = nextDirection(map, row, col, direction);
      }
    }

    const [directionRow, directionCol] = directionMoves[direction];
    row += directionRow;
    col += directionCol;

    const nextChar = map[row]?.[col];

    if (!nextChar || nextChar === ' ')
      throw new Error('Invalid map: Path is broken.');

    pathChars += nextChar;
  }

  return { letters: letters.join(''), path: pathChars };
}
