const getProgression = (start, step, countOfDigits) => {
  const result = [];
  let iterationStep = 0;

  for (let index = 0; index < countOfDigits; index += 1) {
    result.push(start + iterationStep);
    iterationStep += step;
  }

  return result;
};

export default getProgression;
