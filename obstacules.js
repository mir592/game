function BadThings(){
  this.element = $('<div>').addClass('bads');
  $('.board').append(this.element);
  this.appearTop();
  this.numberId = 0;
  this.topValue = 0;
}

BadThings.prototype.appearTop = function(){
  this.nextPx = parseInt(Math.floor(Math.random() * ($('.board').width() - 1)));
  this.element.css('left', this.nextPx).attr('id', 'obstacle ' + this.numberId);
  this.numberId ++;
};
BadThings.prototype.goDown = function(){
  this.topValue += 10;
  $('.bads'+ this.numberId).css('top',this.topValue);
};
