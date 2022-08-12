function backToMenu(currentMenu) {
  const { elements } = this._state;

  currentMenu.remove();
  elements.menu.style.display = "flex";
}

export default backToMenu;
