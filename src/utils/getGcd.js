const getGcd = (firstNum, secondNum) => {
  if (firstNum < secondNum) {
    return getGcd(secondNum, firstNum);
  }
  if (secondNum === 0) {
    return firstNum;
  }

  return getGcd(secondNum, firstNum % secondNum);
};

export default getGcd;
