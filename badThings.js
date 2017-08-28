function BadThings(){
  this.element = $('<div>').addClass('bads');
  this.speedX = 10;
  this.nextPx = 0;
  this.posX = 0;
  this.posY = 0;
  $('.board').append(this.element);
  console.log("HOLI");
}

BadThings.prototype.positions = function() {
  this.posX = parseInt((this.element).position().left);
  this.posY = parseInt($(this.element).position().top);
  this.width = parseInt($(this.element).css('width'));
  console.log("Posiciones", this.posX, this.posY, this.width);
};

BadThings.prototype.appearTop = function(){
  this.nextPx = parseInt(Math.floor(Math.random()*($('.board').width())));
  console.log("appearTop", this.nextPx);

};

BadThings.prototype.goDown = function(speed){
  console.log("GODOWN");
//this.posY += this.speedX;
  //console.log(this.posY += this.speedX);
  this.element.css({top:this.posY, left:this.nextPx });
};
