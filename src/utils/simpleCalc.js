const simpleCalc = (firstNum, secondNum, operator) => {
  let result;
  switch (operator) {
    case '*':
      result = Number(firstNum) * Number(secondNum);
      break;
    case '/':
      result = Number(firstNum) / Number(secondNum);
      break;
    case '-':
      result = Number(firstNum) - Number(secondNum);
      break;
    default:
      result = Number(firstNum) + Number(secondNum);
      break;
  }

  return result;
};

export default simpleCalc;
