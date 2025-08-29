import { directionMoves, type Direction } from '../types/directions';
import { isValidCell } from '../validations/isValidCell';

export default function getInitialDirection(
  map: string[][],
  row: number,
  col: number
): Direction | null {
  const validDirections: Direction[] = [];

  for (const dir of Object.keys(directionMoves) as Direction[]) {
    const [dr, dc] = directionMoves[dir];
    const next = map[row + dr]?.[col + dc];
    if (isValidCell(next) && next !== '@') validDirections.push(dir);
  }

  if (validDirections.length === 0) {
    throw new Error(`Invalid map: No valid direction found.`);
  }

  if (validDirections.length > 1) {
    throw new Error(`Invalid map: Multiple starting paths found.`);
  }

  return validDirections[0];
}
