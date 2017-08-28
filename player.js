function Player(playN){
  this.player = playN;
  this.position();
}
Player.prototype.position = function(){
  this.posX = $(this.player).position().left;
  this.posY = $(this.player).position().top;
  this.width = $(this.player).css('width');
};

Player.prototype.selectToMove = function(){
  $(this.player).css('left', this.posX);
};

Player.prototype.left = function(){
  this.posX -= 10;
  this.selectToMove();
};
Player.prototype.right = function(){
  this.posX += 10;
  this.selectToMove();
};
