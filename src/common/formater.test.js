import { romanize, formatDate } from './formater';

describe('formater tests', () => {
  it('formatDate should return a formated date', () => {
    const date = '2002-05-16';
    const formatedDate = formatDate(date);
    expect(formatedDate).toBe('16/05/2002');
  });

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
