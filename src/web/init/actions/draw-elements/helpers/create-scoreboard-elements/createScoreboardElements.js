import { drawElementsSelectors } from "./selectors";

const { getDrawElements } = drawElementsSelectors;

function createScoreboardElements() {
  const { elements } = this._state;

  const drawingElements = getDrawElements.call(this);

  for (const drawingElement of drawingElements) {
    const { name, tagName, classList, textContent, innerHTML, listeners } =
      drawingElement;

    elements[name] = document.createElement(tagName);
    elements[name].classList.add(classList);

    if (textContent) {
      elements[name].textContent = textContent;
    }

    if (innerHTML) {
      elements[name].innerHTML = innerHTML;
    }

    if (listeners) {
      for (const { event, cb } of listeners) {
        elements[name].addEventListener(event, cb);
      }
    }
  }

  elements.pause.appendChild(elements.pauseBtn);

  elements.scoreboard.append(
    elements.volume,
    elements.time,
    elements.pause,
    elements.moves,
    elements.help,
  );

  elements.container.appendChild(elements.scoreboard);
}

export default createScoreboardElements;
