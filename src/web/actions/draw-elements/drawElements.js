import { getRandomNumber } from "helpers";
import { createMainArea, createScoreboardElements } from "./helpers";

function drawElements() {
  const { elements, values } = this._state;

  elements.container = document.createElement("div");
  elements.container.classList.add("container");

  elements.scoreboard = document.createElement("div");
  elements.scoreboard.classList.add("scoreboard");

  createScoreboardElements.call(this);
  createMainArea.call(this);

  document.body.appendChild(elements.container);
  values.randomImageName = getRandomNumber.call(this);
}

export default drawElements;
