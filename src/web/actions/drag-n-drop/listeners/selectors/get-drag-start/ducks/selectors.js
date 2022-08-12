export const getIsElementsInOneRow = ({
  values,
  currentPuzzleIndex,
  emptyElementIndex,
}) => {
  const shiftedElementRowNumber =
    Math.floor(currentPuzzleIndex / values.dimension) + 1;
  const emptyElementRowNumber =
    Math.floor(emptyElementIndex / values.dimension) + 1;

  return shiftedElementRowNumber === emptyElementRowNumber;
};
