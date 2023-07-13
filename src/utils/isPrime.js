const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const stop = number / 2;
  const iter = (counter) => {
    if (counter > stop) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

export default isPrime;
