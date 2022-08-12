import { getRulesPointsContent, initiateBackButton } from "./actions";

function openRulesMenu() {
  const { elements } = this._state;

  elements.menu.style.display = "none";
  elements.rulesMenu = document.createElement("div");
  elements.rulesMenu.classList.add("rulesMenu");

  const rulesMenuTitle = document.createElement("h3");
  rulesMenuTitle.classList.add("rulesMenuTitle");
  rulesMenuTitle.textContent = "Game Rules";

  const rulePoints = getRulesPointsContent();

  initiateBackButton.call(this);

  elements.rulesMenu.append(rulesMenuTitle, rulePoints, elements.backButton);
  elements.container.appendChild(elements.rulesMenu);
}

export default openRulesMenu;
