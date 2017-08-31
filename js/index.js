var board = new Board();
var player1 = new Player('.p1');
var player2 = new Player('.p2');
$(document).keydown(function() {
  if (event.keyCode === 65) {
    player1.left();
  }
  if (event.keyCode === 68) {
    player1.right();
  }
  if (event.keyCode === 37) { // tecla A
    player2.left();
  }
  if (event.keyCode === 39) { // tecla D
    player2.right();
  }
});
