const getDragEnter = config =>
  function dragEnter(e) {
    e.preventDefault();

    if (!config.isAllowDragDrop) {
      return;
    }

    this.classList.add("empty_hovered");
  };

export default getDragEnter;
