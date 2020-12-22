import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should remove all foreign characters', () => {
    const pipe = new TrimPipe();
    const result = pipe.transform(' ..,, ..,;3::;;; ; :');
    const expectedResult = '3';
    expect(result).toEqual(expectedResult);
  });
});
