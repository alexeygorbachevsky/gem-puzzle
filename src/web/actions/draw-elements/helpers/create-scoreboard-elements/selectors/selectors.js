import { getPauseButtonListeners } from "./pause-button-selectors";
import { getHelpListeners } from "./help-selectors";
import { getVolumeListeners } from "./volume-selectors";

export function getDrawElements() {
  const { values } = this._state;

  return [
    {
      name: "time",
      tagName: "div",
      classList: "time",
      textContent: `Time:${values.time}`,
      innerHTML: null,
      listeners: null,
    },
    {
      name: "pause",
      tagName: "div",
      classList: "pause",
      textContent: null,
      innerHTML: null,
      listeners: null,
    },
    {
      name: "pauseBtn",
      tagName: "h3",
      classList: "pauseBtn",
      textContent: "Pause",
      innerHTML: null,
      listeners: getPauseButtonListeners.call(this),
    },
    {
      name: "volume",
      tagName: "div",
      classList: "volume",
      textContent: null,
      innerHTML: '<i class="fas fa-volume-up"></i>',
      listeners: getVolumeListeners.call(this),
    },
    {
      name: "help",
      tagName: "div",
      classList: "help",
      textContent: null,
      innerHTML: '<i class="fas fa-question-circle help-icon"></i>',
      listeners: getHelpListeners.call(this),
    },
    {
      name: "moves",
      tagName: "div",
      classList: "moves",
      textContent: `Moves: ${values.moves}`,
      innerHTML: null,
      listeners: null,
    },
  ];
}
