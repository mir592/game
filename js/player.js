function Player(playN) {
  this.player = playN;
  this.position();

}
Player.prototype.position = function() {
  this.posX = $(this.player).position().left;
  this.posY = $(this.player).position().top;
  this.width = parseInt($(this.player).css('width'));
};

Player.prototype.selectToMove = function() {
  $(this.player).css('left', this.posX);
};

Player.prototype.left = function() {
  this.posX -= 15;
  console.log(this.posX);
  if(this.posX < 0){
    this.posX = board.rigth;
  }else{
    this.selectToMove();
  }
};

Player.prototype.right = function() {
  this.posX += 15;
  console.log(this.posX);
  if(this.posX + this.width > board.rigth){
    this.posX = 0;
  }else{
    this.selectToMove();
  }
};
