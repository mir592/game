var Enemy = function() {
  this.speed = 10;
  this.topValue =  0;
  this.leftValue = parseInt(Math.floor(Math.random() * ($('.board').width() - 1)));
  this.createEnemy();
};
Enemy.prototype.createEnemy = function(){
  console.log("Entro en Create Enemy");
  this.enemy = $('<div>').css({
                        top: this.topValue,
                        left: this.leftValue
                      });
  $('.board').append(this.enemy);
};
Enemy.prototype.move = function(){
  this.topValue += this.speed;
  this.enemy.addClass('bads').css({
    top: this.topValue,
    left: this.leftValue
  });
};
