export default function findStartAndEndPoint(map: string[][]): {
  start: [number, number];
  end: [number, number];
} {
  let start: [number, number] | null = null;
  let end: [number, number] | null = null;

  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const cell = map[row][column];

      if (cell === '@') {
        if (start) throw new Error('Invalid map: Multiple starting paths.');
        start = [row, column];
      }

      if (cell === 'x') {
        if (end) throw new Error('Invalid map: multiple end points (x).');
        end = [row, column];
      }
    }
  }

  if (!start) throw new Error('Invalid map: missing start point (@).');
  if (!end) throw new Error('Invalid map: missing end point (x).');

  return { start, end };
}
