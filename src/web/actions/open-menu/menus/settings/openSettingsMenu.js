import { backToMenu } from "../../../back-to-menu";
import { resetSettings } from "./helpers";
import { saveSettings } from "../save";

function openSettingsMenu() {
  const { elements, values } = this._state;

  elements.menu.style.display = "none";

  elements.settingsMenu = document.createElement("div");
  elements.settingsMenu.classList.add("settingsMenu");

  const settingsMenuTitle = document.createElement("h3");
  settingsMenuTitle.classList.add("settingsMenuTitle");
  settingsMenuTitle.textContent = "Settings";

  const boardSizeWrapper = document.createElement("div");
  boardSizeWrapper.classList.add("boardSizeWrapper");
  const boardSizeText = document.createElement("p");
  boardSizeText.classList.add("boardSizeText");
  boardSizeText.textContent = "Board Size";
  elements.boardSizeSelect = document.createElement("select");
  elements.boardSizeSelect.classList.add("boardSizeSelect");

  const option1 = document.createElement("option");
  option1.classList.add("option");
  option1.textContent = "3x3";
  const option2 = document.createElement("option");
  option2.classList.add("option");
  option2.textContent = "4x4";
  const option3 = document.createElement("option");
  option3.classList.add("option");
  option3.textContent = "5x5";
  const option4 = document.createElement("option");
  option4.classList.add("option");
  option4.textContent = "6x6";
  const option5 = document.createElement("option");
  option5.classList.add("option");
  option5.textContent = "7x7";
  const option6 = document.createElement("option");
  option6.classList.add("option");
  option6.textContent = "8x8";

  boardSizeWrapper.appendChild(boardSizeText);
  elements.boardSizeSelect.appendChild(option1);
  elements.boardSizeSelect.appendChild(option2);
  elements.boardSizeSelect.appendChild(option3);
  elements.boardSizeSelect.appendChild(option4);
  elements.boardSizeSelect.appendChild(option5);
  elements.boardSizeSelect.appendChild(option6);
  boardSizeWrapper.appendChild(elements.boardSizeSelect);

  const boardSizeOptionValue = `${values.dimension}x${values.dimension}`;
  for (let i = 0; i < elements.boardSizeSelect.options.length; i += 1) {
    if (elements.boardSizeSelect.options[i].value === boardSizeOptionValue) {
      elements.boardSizeSelect.options[i].setAttribute("selected", "");
    }
  }

  const moveAnimationWrapper = document.createElement("div");
  moveAnimationWrapper.classList.add("moveAnimationWrapper");
  const moveAnimationText = document.createElement("p");
  moveAnimationText.classList.add("moveAnimationText");
  moveAnimationText.textContent = "Move Animation";

  const moveAnimationLabel = document.createElement("label");
  moveAnimationLabel.classList.add("switch");
  elements.moveAnimationCheckbox = document.createElement("input");
  elements.moveAnimationCheckbox.type = "checkbox";
  elements.moveAnimationCheckbox.classList.add("checkbox");
  elements.moveAnimationCheckbox.setAttribute("checked", "");
  const moveAnimationSpan = document.createElement("span");
  moveAnimationSpan.classList.add("slider", "round");
  moveAnimationLabel.appendChild(elements.moveAnimationCheckbox);
  moveAnimationLabel.appendChild(moveAnimationSpan);

  moveAnimationWrapper.appendChild(moveAnimationText);
  moveAnimationWrapper.appendChild(moveAnimationLabel);

  elements.moveAnimationCheckbox.checked = values.isAnimation;

  const difficultyWrapper = document.createElement("div");
  difficultyWrapper.classList.add("difficultyWrapper");

  const difficultyText = document.createElement("p");
  difficultyText.classList.add("difficultyText");
  difficultyText.textContent = "Difficulty";

  elements.difficultySelect = document.createElement("select");
  elements.difficultySelect.classList.add("difficultySelect");
  const difficultyOption1 = document.createElement("option");
  difficultyOption1.classList.add("option");
  difficultyOption1.textContent = "Digits";
  const difficultyOption2 = document.createElement("option");
  difficultyOption2.classList.add("option");
  difficultyOption2.textContent = "Picture with digits";
  const difficultyOption3 = document.createElement("option");
  difficultyOption3.classList.add("option");
  difficultyOption3.textContent = "Picture only";

  elements.difficultySelect.appendChild(difficultyOption1);
  elements.difficultySelect.appendChild(difficultyOption2);
  elements.difficultySelect.appendChild(difficultyOption3);
  difficultyWrapper.appendChild(difficultyText);
  difficultyWrapper.appendChild(elements.difficultySelect);

  for (let i = 0; i < elements.difficultySelect.options.length; i += 1) {
    if (values.difficulty === 1) {
      elements.difficultySelect.options[0].setAttribute("selected", "");
    } else if (values.difficulty === 2) {
      elements.difficultySelect.options[1].setAttribute("selected", "");
    } else if (values.difficulty === 3) {
      elements.difficultySelect.options[2].setAttribute("selected", "");
    }
  }

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("buttonsWrapper");

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("saveBtn");
  saveBtn.textContent = "Save";

  saveBtn.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    setTimeout(() => {
      saveSettings.call(this);
    }, 500);
  });
  saveBtn.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  const resetBtn = document.createElement("button");
  resetBtn.classList.add("resetBtn");
  resetBtn.textContent = "Reset";
  resetBtn.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    setTimeout(() => {
      resetSettings.call(this, openSettingsMenu);
    }, 500);
  });
  resetBtn.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  buttonsWrapper.appendChild(saveBtn);
  buttonsWrapper.appendChild(resetBtn);

  elements.backButton = document.createElement("h3");
  elements.backButton.classList.add("backButton");
  elements.backButton.textContent = "Back";
  elements.backButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    backToMenu.call(this, elements.settingsMenu);
  });
  elements.backButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  elements.settingsMenu.appendChild(settingsMenuTitle);
  elements.settingsMenu.appendChild(boardSizeWrapper);
  elements.settingsMenu.appendChild(moveAnimationWrapper);
  elements.settingsMenu.appendChild(difficultyWrapper);
  elements.settingsMenu.appendChild(buttonsWrapper);
  elements.settingsMenu.appendChild(elements.backButton);
  elements.container.appendChild(elements.settingsMenu);
}

export default openSettingsMenu;
