import {openMenu} from "../../open-menu";

function createWinMenu() {
  const { elements, values } = this._state;

  elements.winMenu = document.createElement("div");
  elements.winMenu.classList.add("win-menu");

  const winMenuText = document.createElement("div");
  winMenuText.classList.add("win-menu__text");
  winMenuText.textContent = `Hooray! You solved the puzzle in ${values.time} and ${values.moves} moves`;

  elements.winMenu.appendChild(winMenuText);
  elements.container.appendChild(elements.winMenu);

  const winMenuBtn = document.createElement("button");
  winMenuBtn.classList.add("win-menu__btn");
  winMenuBtn.textContent = "Ok";

  winMenuBtn.addEventListener("click", () => {
    elements.winMenu.remove();
    elements.audioWin.pause();
    elements.audioWin.currentTime = 0;

    if (values.isVolumeOn) {
      elements.audioMenu.play();
    }

    openMenu.call(this);

    values.minutes = 0;
    values.seconds = 0;
    values.time = "00:00";
    elements.time.textContent = `Time:${values.time}`;
    values.moves = 0;
    elements.moves.textContent = `Moves: ${values.moves}`;
  });

  elements.winMenu.appendChild(winMenuBtn);

}

export default createWinMenu;
