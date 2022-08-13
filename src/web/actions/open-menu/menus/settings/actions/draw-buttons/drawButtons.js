import { saveSettings } from "../../../save";
import { resetSettings } from "../../helpers";
import { backToMenu } from "../../../../../back-to-menu";

function drawButtons({ buttonsWrapper, openSettingsMenu }) {
  const { elements, values } = this._state;

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

  buttonsWrapper.append(saveBtn, resetBtn);

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
}

export default drawButtons;
