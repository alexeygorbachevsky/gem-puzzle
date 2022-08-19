function checkSettings() {
  const { values } = this._state;

  const settingsFromLocalStorage = JSON.parse(localStorage.getItem("settings"));

  if (settingsFromLocalStorage) {
    values.dimension = settingsFromLocalStorage.dimension;
    values.isAnimation = settingsFromLocalStorage.isAnimation;
    values.difficulty = settingsFromLocalStorage.difficulty;
  }
}

export default checkSettings;
