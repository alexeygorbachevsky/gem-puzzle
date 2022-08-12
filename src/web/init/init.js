import { openMenu, initiatePuzzles, initiateDragNDrop } from "../actions";
import { initiateAudio, createSortedPuzzles, drawElements } from "./actions";

function init() {
  drawElements.call(this);
  initiateAudio.call(this);
  createSortedPuzzles.call(this);
  initiatePuzzles.call(this);
  initiateDragNDrop.call(this);
  openMenu.call(this);
}

export default init;
