export const splitLastDigit = (number: number) => {
  const lastDigit = number % 10;

  const remainingDigits = Math.floor(number / 10);
  if (remainingDigits === 0) {
    return { remainingDigits: null, lastDigit };
  }

  return { remainingDigits, lastDigit };
};
