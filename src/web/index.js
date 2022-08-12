import "styles/main.scss";
import "helpers/resources";

import { state } from "./state";
import { init } from "./init";

class GemPuzzle {
  constructor() {
    this._state = state;
    this.init = init;
  }
}

window.onload = () => {
  const gemPuzzle = new GemPuzzle();
  gemPuzzle.init();
};
