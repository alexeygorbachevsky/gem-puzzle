import {
  getContinueGameBtnListeners,
  getNewGameBtnListeners,
  getSaveGameBtnListeners,
  getSavedGamesBtnListeners,
  getSettingsBtnListeners,
  getBestScoresBtnListeners,
  getRulesBtnListeners,
} from "./listeners";

function getMenuElements() {
  return [
    {
      name: "continueGameBtn",
      classList: "continueGameBtn",
      textContent: "Continue",
      listeners: getContinueGameBtnListeners.call(this),
    },
    {
      name: "newGameBtn",
      classList: "newGameBtn",
      textContent: "New Game",
      listeners: getNewGameBtnListeners.call(this),
    },
    {
      name: "saveGameBtn",
      classList: "saveGameBtn",
      textContent: "Save Game",
      listeners: getSaveGameBtnListeners.call(this),
    },
    {
      name: "savedGamesBtn",
      classList: "savedGamesBtn",
      textContent: "Saved Games",
      listeners: getSavedGamesBtnListeners.call(this),
    },
    {
      name: "bestScoresBtn",
      classList: "bestScoresBtn",
      textContent: "Best Scores",
      listeners: getBestScoresBtnListeners.call(this),
    },
    {
      name: "rulesGameBtn",
      classList: "rulesGameBtn",
      textContent: "Game Rules",
      listeners: getRulesBtnListeners.call(this),
    },
    {
      name: "settingsBtn",
      classList: "settingsBtn",
      textContent: "Settings",
      listeners: getSettingsBtnListeners.call(this),
    },
  ];
}

export default getMenuElements;
