import { swapPuzzles as nativeSwapPuzzles } from "../../../../swap-puzzles";
import { checkPuzzlesIndexesOrder as nativeCheckPuzzlesIndexesOrder } from "../../../../check-puzzles-indexes-order";
import { dragEnd } from "../../drag-end";
import { dragLeave } from "../../drag-leave";
import { dragOver } from "../../drag-over";

function getDragDrop({ config, dragStart, dragEnter }) {
  const { elements, values } = this._state;

  const swapPuzzles = nativeSwapPuzzles.bind(this);
  const checkPuzzlesIndexesOrder = nativeCheckPuzzlesIndexesOrder.bind(this);

  return function dragDrop() {
    if (!config.isAllowDragDrop) {
      return;
    }

    const currentPuzzleIndex = elements.puzzles.findIndex(
      el => el === config.currentPuzzle,
    );
    const emptyPuzzleIndex = elements.puzzles.findIndex(el => el === this);

    const newEmpty = this.cloneNode(true);
    const newCurrentPuzzle = config.currentPuzzle.cloneNode(true);
    config.currentPuzzle.replaceWith(newEmpty);
    this.replaceWith(newCurrentPuzzle);

    newEmpty.classList.remove("empty_hovered");
    newCurrentPuzzle.classList.remove("puzzle_hidden");

    newCurrentPuzzle.addEventListener("dragstart", dragStart);
    newCurrentPuzzle.addEventListener("dragend", dragEnd);

    newEmpty.addEventListener("drop", dragDrop);
    newEmpty.addEventListener("dragenter", dragEnter);
    newEmpty.addEventListener("dragleave", dragLeave);
    newEmpty.addEventListener("dragover", dragOver);

    newCurrentPuzzle.addEventListener("click", () => {
      swapPuzzles(newCurrentPuzzle);
    });

    newCurrentPuzzle.setAttribute("draggable", true);

    //  update puzzles array after every swap
    elements.puzzles[currentPuzzleIndex] = newEmpty;
    elements.puzzles[emptyPuzzleIndex] = newCurrentPuzzle;
    values.moves += 1;
    elements.moves.textContent = `Moves: ${values.moves}`;

    if (values.isVolumeOn) {
      elements.audioDragMove.play();
    }

    checkPuzzlesIndexesOrder();
  };
}

export default getDragDrop;
