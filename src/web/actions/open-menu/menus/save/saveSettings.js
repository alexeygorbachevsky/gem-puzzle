import { openModal } from "../../../open-modal";

function saveSettings() {
  const { elements, values } = this._state;

  values.dimension = Number(elements.boardSizeSelect.value.slice(0, 1));
  values.isAnimation = elements.moveAnimationCheckbox.checked;

  if (elements.difficultySelect.value === "Digits") {
    values.difficulty = 1;
  } else if (elements.difficultySelect.value === "Picture with digits") {
    values.difficulty = 2;
  } else if (elements.difficultySelect.value === "Picture only") {
    values.difficulty = 3;
  }

  localStorage.setItem(
    "settings",
    JSON.stringify({
      dimension: values.dimension,
      isAnimation: values.isAnimation,
      difficulty: values.difficulty,
    }),
  );

  document.body.innerHTML = "";
  elements.settingsMenu.remove();
  values.isPauseClicked = false;
  values.isVolumeOn = true;
  this.init();
  openModal.call(this, "Settings are successfully applied");
}

export default saveSettings;
