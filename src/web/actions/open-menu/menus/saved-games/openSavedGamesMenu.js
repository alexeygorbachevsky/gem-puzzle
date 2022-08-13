import {
  initSavedGamesMenu,
  drawSlider,
  drawSavedGamesMenuButtonWrapper,
  drawBackButton,
} from "./actions";

function openSavedGamesMenu() {
  const { elements } = this._state;

  const isContinue = initSavedGamesMenu.call(this);

  if (!isContinue) {
    return;
  }

  drawSlider.call(this);
  drawSavedGamesMenuButtonWrapper.call(this);
  drawBackButton.call(this);

  elements.savedGamesMenu.append(
    elements.slider,
    elements.savedGamesMenuButtonsWrapper,
    elements.backButton,
  );

  elements.container.appendChild(elements.savedGamesMenu);
}

export default openSavedGamesMenu;
