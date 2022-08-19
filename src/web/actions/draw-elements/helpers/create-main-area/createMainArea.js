import { checkSettings } from "../../actions";

function createMainArea() {
  const { elements, values } = this._state;

  checkSettings.call(this);

  elements.mainArea = document.createElement("div");
  elements.mainArea.classList.add("main-area");
  elements.mainArea.style = `grid-template-columns: repeat(${values.dimension}, 1fr);`;

  elements.container.appendChild(elements.mainArea);
}

export default createMainArea;
