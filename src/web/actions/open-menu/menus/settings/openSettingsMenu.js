import {
  drawSelect,
  drawMoveAnimationCheckbox,
  drawDifficultySelect,
  drawButtons,
} from "./actions";

function openSettingsMenu() {
  const { elements } = this._state;

  elements.menu.style.display = "none";

  elements.settingsMenu = document.createElement("div");
  elements.settingsMenu.classList.add("settingsMenu");

  const settingsMenuTitle = document.createElement("h3");
  settingsMenuTitle.classList.add("settingsMenuTitle");
  settingsMenuTitle.textContent = "Settings";

  const boardSizeWrapper = document.createElement("div");
  boardSizeWrapper.classList.add("boardSizeWrapper");
  drawSelect.call(this, boardSizeWrapper);

  const moveAnimationWrapper = document.createElement("div");
  moveAnimationWrapper.classList.add("moveAnimationWrapper");
  drawMoveAnimationCheckbox.call(this, moveAnimationWrapper);

  const difficultyWrapper = document.createElement("div");
  difficultyWrapper.classList.add("difficultyWrapper");
  drawDifficultySelect.call(this, difficultyWrapper);

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("buttonsWrapper");
  drawButtons.call(this, { buttonsWrapper, openSettingsMenu });

  elements.settingsMenu.append(
    settingsMenuTitle,
    boardSizeWrapper,
    moveAnimationWrapper,
    difficultyWrapper,
    buttonsWrapper,
    elements.backButton,
  );
  elements.container.appendChild(elements.settingsMenu);
}

export default openSettingsMenu;
