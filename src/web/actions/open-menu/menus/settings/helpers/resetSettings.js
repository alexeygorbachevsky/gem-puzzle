import { saveSettings } from "../../save";

function resetSettings(openSettingsMenu) {
  const { elements, values } = this._state;

  localStorage.removeItem("settings");

  values.dimension = 4;
  values.isAnimation = true;
  values.difficulty = 2;
  elements.settingsMenu.remove();
  openSettingsMenu.call(this);
  saveSettings.call(this);
}

export default resetSettings;
