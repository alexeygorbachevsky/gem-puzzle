import { getRandomNumber } from "helpers";

import { updateTime } from "../update-time";

function startGame() {
  const { elements, values } = this._state;

  values.previousRandomImageName = values.randomImageName;
  values.randomImageName = getRandomNumber.call(this);
  elements.menu.remove();

  updateTime.call(this);
}

export default startGame;
