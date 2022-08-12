const getRandomNumber = (from = 1, to = 150) =>
  Math.floor(from + Math.random() * (to + 1 - from));

export default getRandomNumber;
