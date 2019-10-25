import { romanize } from './formater';

describe('formater tests', () => {
  it('romanize should return roman number', () => {
    let numberRoman;
    numberRoman = romanize(1);
    expect(numberRoman).toBe('I');
    numberRoman = romanize(4);
    expect(numberRoman).toBe('IV');
    numberRoman = romanize(12);
    expect(numberRoman).toBe('XII');
  });
});
