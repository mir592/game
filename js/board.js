function Board(){
  this.initBoard();
}

Board.prototype.initBoard = function(){
this.left = $('.board').position().left;
this.top = $('.board').position().top;
this.rigth = this.left + $('.board').width();
this.bottom =  this.top + $('.board').height();
};


Board.prototype.badThings = function(){
  var obstacle = new Obstacles();
  obstacle.putBads();
  obstacle.moveObstacles();
  setTimeout(function(){
    var obstacle2 = new Obstacles();
    obstacle2.putBads();
    obstacle2.moveObstacles();
  }, 2000);
  setTimeout(function(){
     var obstacle3 = new Obstacles();
     obstacle3.putBads();
     obstacle3.moveObstacles();
   }, 4000);
  setTimeout(function(){
   var obstacle4 = new Obstacles();
    obstacle4.putBads();
    obstacle4.moveObstacles();
  }, 6000);
  setTimeout(function(){
   var obstacle5 = new Obstacles();
    obstacle5.putBads();
    obstacle5.moveObstacles();
  }, 8000);
  setTimeout(function(){
   var obstacle6 = new Obstacles();
    obstacle6.putBads();
    obstacle6.moveObstacles();
  }, 10000);
  setTimeout(function(){
   var obstacle7 = new Obstacles();
    obstacle7.putBads();
    obstacle7.moveObstacles();
  }, 10000);
  setTimeout(function(){
   var obstacle8 = new Obstacles();
    obstacle8.putBads();
    obstacle8.moveObstacles();
  }, 10000);
  setTimeout(function(){
   var obstacle9 = new Obstacles();
    obstacle9.putBads();
    obstacle9.moveObstacles();
  }, 10000);
  setTimeout(function(){
   var obstacle10 = new Obstacles();
    obstacle10.putBads();
    obstacle10.moveObstacles();
  }, 10000);



};