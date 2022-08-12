function getBestScores() {
  const { values } = this._state;

  const bestScores = JSON.parse(localStorage.getItem("bestScores"));

  if (bestScores) {
    values.bestScores = bestScores;
  }
}

export default getBestScores;
