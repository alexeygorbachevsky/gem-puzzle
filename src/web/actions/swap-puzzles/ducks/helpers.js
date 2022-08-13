export function isElementsInOneRow(shiftedElementIndex, emptyElementIndex) {
  const { values } = this._state;

  const shiftedElementRowNumber =
    Math.floor(shiftedElementIndex / values.dimension) + 1;
  const emptyElementRowNumber =
    Math.floor(emptyElementIndex / values.dimension) + 1;

  return shiftedElementRowNumber === emptyElementRowNumber;
}
