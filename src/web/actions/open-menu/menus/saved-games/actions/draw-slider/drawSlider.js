import { toggleSlider } from "./helpers";

function drawSlider() {
  const { elements, values } = this._state;

  elements.slider = document.createElement("div");
  elements.slider.classList.add("slider");

  elements.angleLeft = document.createElement("div");
  elements.angleLeft.classList.add("angles", "angle-left");
  elements.angleLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';

  elements.angleLeft.addEventListener("click", () => {
    toggleSlider.call(this, "left");
  });

  elements.slider.append(elements.angleLeft, elements.screenShots[0]);

  elements.angleRight = document.createElement("div");
  elements.angleRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
  elements.angleRight.classList.add("angles", "angle-right");

  elements.angleRight.addEventListener("click", () => {
    toggleSlider.call(this, "right");
  });

  elements.slider.appendChild(elements.angleRight);

  if (values.savedGames.length === 1) {
    elements.angleRight.style.opacity = "0.4";
    elements.angleLeft.style.opacity = "0.4";
  }
}

export default drawSlider;
