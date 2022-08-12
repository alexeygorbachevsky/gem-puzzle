import "assets/sounds/drag-move.mp3";
import "assets/sounds/drag-move-2.mp3";
import "assets/sounds/drag-move-3.mp3";
import "assets/sounds/hover-menu-item.mp3";
import "assets/sounds/menu.mp3";
import "assets/sounds/move.mp3";
import "assets/sounds/move-animation.mp3";
import "assets/sounds/move-full.mp3";
import "assets/sounds/select-menu-item.mp3";
import "assets/sounds/win.mp3";

(function loadMainThemeSounds() {
  for (let i = 1; i <= 7; i += 1) {
    import(`assets/sounds/main-theme/${i}.mp3`);
  }
})();
