var board = new Board();
var player1 = new Player('.p1');


$(document).keydown(function() {
  var max = (board.rigth - player1.width);
  if(event.keyCode === 37){
    player1.left();}
  if(event.keyCode === 39) {
    player1.right();
}
});
