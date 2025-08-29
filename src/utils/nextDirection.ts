import type { Direction } from '../types/directions';
import { directionMoves } from '../types/directions';
import { isValidCell } from '../validations/isValidCell';

export default function nextDirection(
  map: string[][],
  row: number,
  col: number,
  cameFrom: Direction
): Direction {
  const candidates: Direction[] =
    cameFrom === 'left' || cameFrom === 'right'
      ? ['up', 'down'] // must turn vertical
      : ['left', 'right']; // must turn horizontal
  const validDirections: Direction[] = [];

  for (const dir of candidates) {
    const [dr, dc] = directionMoves[dir];
    const nextRow = row + dr;
    const nextCol = col + dc;
    const cell = map[nextRow]?.[nextCol];
    if (isValidCell(cell)) validDirections.push(dir);
  }

  if (validDirections.length === 0) {
    throw new Error(`Invalid map: No valid turns found.`);
  }

  if (validDirections.length > 1) {
    throw new Error(`Invalid map: fork in path found.`);
  }

  return validDirections[0];
}
