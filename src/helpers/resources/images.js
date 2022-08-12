import "assets/images/boards.jpg";

for (let i = 1; i <= 150; i += 1) {
  import(`assets/images/puzzle-images/${i}.jpg`);
}

for (let i = 3; i <= 8; i += 1) {
  import(`assets/images/digits-${i}.png`);
}
