import {
  dragEnd,
  dragLeave,
  dragOver,
  getDragStart,
  getDragEnter,
  getDragDrop,
} from "./listeners";

function initiateDragNDrop() {
  const { elements } = this._state;

  const config = {
    isAllowDragDrop: true,
    currentPuzzle: "",
  };

  const dragStart = getDragStart.call(this, config);

  elements.puzzles.forEach(element => {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
  });

  const emptyElement = elements.puzzles.find(el => el.className === "empty");

  if (!emptyElement) {
    return;
  }

  const dragEnter = getDragEnter(config);
  const dragDrop = getDragDrop.call(this, { config, dragStart, dragEnter });

  emptyElement.addEventListener("dragenter", dragEnter);
  emptyElement.addEventListener("dragleave", dragLeave);
  emptyElement.addEventListener("dragover", dragOver);
  emptyElement.addEventListener("drop", dragDrop);
}

export default initiateDragNDrop;
