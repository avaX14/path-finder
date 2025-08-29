import { walkPath } from '../../src/utils/walkPath';
import {
  availableValidMaps,
  availableInvalidMaps,
} from '../../src/constants/pathMaps';

describe('walkPath - acceptance tests', () => {
  it('should walk a line and collect letters', () => {
    const result = walkPath(availableValidMaps[0]);

    expect(result.letters).toBe('ACB');
    expect(result.path).toBe('@---A--+|C|+---+|+B-x');
  });

  it('should go straight through intersections', () => {
    const result = walkPath(availableValidMaps[1]);

    expect(result.letters).toBe('ABCD');
    expect(result.path).toBe('@|A+---B--+|+--C-+|-||+---D--+|x');
  });

  it('Should pick up letter and take a turn', () => {
    const result = walkPath(availableValidMaps[2]);

    expect(result.letters).toBe('ACB');
    expect(result.path).toBe('@---A--+|||C---+|+B-x');
  });

  it('Should not collect a letter from the same location twice', () => {
    const result = walkPath(availableValidMaps[3]);

    expect(result.letters).toBe('GOONIES');
    expect(result.path).toBe('@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x');
  });

  it('Should keep direction, even in a compact space', () => {
    const result = walkPath(availableValidMaps[4]);

    expect(result.letters).toBe('BLAH');
    expect(result.path).toBe('@B+++B|+-L-+A+++A-+Hx');
  });

  it('Should ignore stuff after end of path', () => {
    const result = walkPath(availableValidMaps[5]);

    expect(result.letters).toBe('AB');
    expect(result.path).toBe('@-A--+|+-B--x');
  });

  it('Should throw missing start character', () => {
    expect(() => walkPath(availableInvalidMaps[0])).toThrow(
      'Invalid map: missing start point (@).'
    );
  });

  it('Should throw missing end character', () => {
    expect(() => walkPath(availableInvalidMaps[1])).toThrow(
      'Invalid map: missing end point (x).'
    );
  });

  it('Should throw multiple start points detected', () => {
    expect(() => walkPath(availableInvalidMaps[2])).toThrow(
      'Invalid map: Multiple starting paths.'
    );
  });

  it('Should throw fork in path found', () => {
    expect(() => walkPath(availableInvalidMaps[3])).toThrow(
      'Invalid map: fork in path found.'
    );
  });

  it('should throw if path is broken', () => {
    expect(() => walkPath(availableInvalidMaps[4])).toThrow(
      'Invalid map: Path is broken.'
    );
  });

  it('should throw multiple starting paths', () => {
    expect(() => walkPath(availableInvalidMaps[5])).toThrow(
      'Invalid map: Multiple starting paths found.'
    );
  });

  it('Should throw no valid turns ', () => {
    expect(() => walkPath(availableInvalidMaps[6])).toThrow(
      'Invalid map: No valid turns found.'
    );
  });
});
