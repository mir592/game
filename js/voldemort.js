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
  if(this.y > $(".board").height()+this.element.height()){
    this.element.remove();
    this.tobeDeleted = true;
  }
};
function checkObstacles() {
  if($(".p1").collision(".bads").length > 0){
    $('.p1').attr('id', 'dead1');
    return;

  }
  if($(".p2").collision(".bads").length > 0) {
    $('.p2').attr('id','dead2');
    return;
  }

}
