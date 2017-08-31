function Voldemort(speed) {
  this.x = parseInt(Math.floor(Math.random() * ($('.board').width() - 20)));
  this.y = 0;
  this.speed = speed;
  this.tobeDeleted = false;
  this.element = $("<div>").addClass('bads');
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"
  });
  $(".board").append(this.element);
}

Voldemort.prototype.updateBads = function() {
  this.y = (this.y + this.speed);
  this.element.css({
    top: this.y,
    position: 'absolute'
  });
  if(this.y > $(".board").height()-this.element.height()){
    this.element.remove();
    this.tobeDeleted = true;
  }
};
Voldemort.prototype.speedPlus = function(){
  this.speed += 2;
  console.log('velocidad',this.speed);

};
var p1 = 8;
$('.L1').text(p1);
var p2 = 8;
$('.L2').text(p2);

function _checkObstacles() {
  if($(".p1").collision(".bads").length > 0){
    $('.L1').text(p1);
    console.log("harry Life: ", p1);
    p1 -=0.5;
    _isDeadP1(p1);
    return;
  }
  if($(".p2").collision(".bads").length > 0) {
    $('.L2').text(p2);
    console.log('hermioneLifes:' , p2);
    p2 -=0.5;
    _isDeadP2(p2);
    return;
  }
  _allDead(p1, p2);
}

function _isDeadP1(count){

if (count === 4){
    $('.p1').attr('id', 'dead1');
    $('.L1').css('color', 'red');
  }else if(count < 0){
    $('.p1').remove();
    $('.L1').text('DEAD');

    return true;
  }
}

function _isDeadP2(count){
  if (count === 4){
      $('.p2').attr('id', 'dead2');
      $('.L2').css('color', 'red');

  }else if(count < 0){
    $('.p2').remove();
    $('.L2').text('DEAD');

    return true;
  }
}
function _allDead(a, b){
  console.log(a,b);
  if(a < 0 && b < 0){
    $("#lost").attr('class','gameOver').text('GAME OVER');
  }
}
