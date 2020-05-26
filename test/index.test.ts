import { add } from '../src';

describe('index', () => {
  it('adds', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
