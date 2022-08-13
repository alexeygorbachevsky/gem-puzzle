import { openModal } from "../../../open-modal";
import { saveHelpers } from "./ducks";

const { setDifficulty } = saveHelpers;

function saveSettings() {
  const { elements, values } = this._state;

  values.dimension = Number(elements.boardSizeSelect.value.slice(0, 1));
  values.isAnimation = elements.moveAnimationCheckbox.checked;

  setDifficulty.call(this);

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
