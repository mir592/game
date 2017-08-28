function Board(){
  this.initBoard();
}

Board.prototype.initBoard = function(){
this.left = $('.board').position().left;
this.top = $('.board').position().top;
this.rigth = this.left + $('.board').width();
this.bottom =  this.top + $('.board').height();
};


// Board.prototype.createObstacles = function(){
//   var obstacle = new BadThings();
//   obstacle.appearTop();
//   obstacle.goDown();
//   setTimeout(function(){
//     var obstacle2 = new BadThings();
//     obstacle2.appearTop();
//     obstacle2.goDown();
//   }, 2000);
//   setTimeout(function(){
//      var obstacle3 = new BadThings();
//      obstacle3.appearTop();
//      obstacle3.goDown();
//    }, 4000);
//   setTimeout(function(){
//    var obstacle4 = new BadThings();
//     obstacle4.appearTop();
//     obstacle4.goDown();
//   }, 6000);
//   setTimeout(function(){
//    var obstacle5 = new BadThings();
//     obstacle5.appearTop();
//     obstacle5.goDown();
//   }, 8000);
//   setTimeout(function(){
//    var obstacle6 = new BadThings();
//     obstacle6.appearTop();
//     obstacle6.goDown();
//   }, 10000);
//   setTimeout(function(){
//    var obstacle7 = new BadThings();
//     obstacle7.appearTop();
//     obstacle7.goDown();
//   }, 10000);
//
// };
