import { getRandomNumber } from "helpers";

export const getRandomIndexes = dimension => {
  const randomIndexes = [];
  const puzzlesCount = dimension * dimension;

  while (randomIndexes.length < puzzlesCount) {
    const randomNumber = getRandomNumber(0, puzzlesCount - 1);
    let found = false;

    for (let i = 0; i < randomIndexes.length; i += 1) {
      if (randomIndexes[i] === randomNumber) {
        found = true;

        break;
      }
    }

    if (!found) {
      randomIndexes.push(randomNumber);
    }
  }

  return randomIndexes;
};
