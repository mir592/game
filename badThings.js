var numberId = 0;

function BadThings() {
  this.element = $('<div>').addClass('bads');
  this.speedX = 10;
  this.nextPx = 0;
  this.posX = parseInt((this.element).position().left);
  this.posY = parseInt((this.element).position().top);
  this.element.css('top', this.posY, 'left', this.posX);
  $('.board').append(this.element);
  console.log(this.posX);
}

BadThings.prototype.appearTop = function() {
  this.nextPx = parseInt(Math.floor(Math.random() * ($('.board').width() - 1)));
  this.element.css('left', this.nextPx);
  this.element.css('top', this.posY);
};

BadThings.prototype.goDown = function() {

  console.log(this.posY);
  this.posY += this.speedX;
  var newBads = this.element.css("top", this.posY).attr('id', 'obstacle' + numberId);
  numberId++;
  $('.board').append(newBads);
  console.log(this.element);
};
