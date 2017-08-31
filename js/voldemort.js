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
  console.log('velocidad',this.speed);
  this.speed += 1;
};
var p1 = 8;
$('.L1').text(p1);
var p2 = 8;
$('.L2').text(p2);

function checkObstacles() {
  if($(".p1").collision(".bads").length > 0){
    $('.L1').text(p1);
    console.log("harry Life: ", p1);
    p1 -=0.5;
    isDeadP1(p1);
    return;

  }
  if($(".p2").collision(".bads").length > 0) {
    $('.L2').text(p2);
    console.log('hermioneLifes:' , p2);
    p2 -=0.5;
    isDeadP2(p2);
    return;
  }
}

function isDeadP1(count){
if (count === 4){
    $('.p1').attr('id', 'dead1');
  }else if(count < 0){
    $('.p1').remove();
    return true;
  }
}
function isDeadP2(count){
  if (count === 4){
    $('.p2').attr('id', 'dead2');
  }else if(count < 0){
    $('.p2').remove();
    return true;
  }
}
function allDead(){
  if(isDeadP1() && isDeadP2()){
    
    $("<div>").addClass('gameOver');
  }
}
