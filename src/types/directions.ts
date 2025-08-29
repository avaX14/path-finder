export type Direction = 'up' | 'down' | 'left' | 'right';

export const directionMoves: Record<Direction, [number, number]> = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
};
