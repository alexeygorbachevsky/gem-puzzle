import { getMenuElements } from "./selectors";

function openMenu() {
  const { elements, values } = this._state;

  elements.menu = document.createElement("div");
  elements.menu.classList.add("menu");

  const menuElements = getMenuElements.call(this);

  for (const { name, classList, textContent, listeners } of menuElements) {
    elements[name] = document.createElement("h3");
    elements[name].classList.add(classList, "menu-item");
    elements[name].textContent = textContent;

    for (const { event, cb } of listeners) {
      elements[name].addEventListener(event, cb);
    }
  }

  if (values.isPauseClicked) {
    elements.menu.appendChild(elements.continueGameBtn);
  }

  elements.menu.appendChild(elements.newGameBtn);

  if (values.isPauseClicked) {
    elements.menu.appendChild(elements.saveGameBtn);
  }

  elements.menu.append(
    elements.savedGamesBtn,
    elements.bestScoresBtn,
    elements.rulesGameBtn,
    elements.settingsBtn,
  );

  document.body.appendChild(elements.menu);
}

export default openMenu;
