import { drawRulesPointsContentConstants } from "./ducks";

const { RULES_POINTS } = drawRulesPointsContentConstants;

function getRulesPointsContent() {
  const content = document.createElement("div");
  content.classList.add("content");

  const rulePoints = RULES_POINTS.map(({ classList, textContent }) => {
    const rulePoint = document.createElement("p");
    rulePoint.classList.add(classList);
    rulePoint.textContent = textContent;

    return rulePoint;
  });

  content.append(...rulePoints);

  return content;
}

export default getRulesPointsContent;
