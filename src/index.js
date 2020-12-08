const writtenNumber = require('written-number');

export function convertNumberToEnglishText(number) {
  let isNegative = false

  number = number.toString();

  if (number.includes('-')) {
    isNegative = true;
    number = number.replace(/\-/g, '')
  }

  number = parseFloat(number)

  number = writtenNumber(number);

  number = isNegative ? "negative " + number : number;
  number = number.replace(/\-/g, ' ')
  number = number.replace(/\sand/, '')

  return number;
}