
export function formatDate(dateString) {
  const date = new Date(dateString);
  let day = date.getDate() + 1;
  day = day.toString().length === 1 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month.toString().length === 1 ? `0${month}` : month;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function romanize(num) {
  if (!+num) { return NaN; }
  const digits = String(+num).split('');
  const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let roman = '';
  let i = 3;
  // eslint-disable-next-line no-plusplus
  while (i--) { roman = (key[+digits.pop() + (i * 10)] || '') + roman; }
  return Array(+digits.join('') + 1).join('M') + roman;
}
