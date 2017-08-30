var numberId = 0;

function Obstacles(speed) {
  this.positionX = this.getRandomPositionX(); //posicion del LEFT
  this.positionY = 0; // posicion del TOP
  this.speed = speed;
  this.tobeDeleted = false;
}
Obstacles.prototype.getRandomPositionX = function() {
  return parseInt(Math.floor(Math.random() * ($('.board').width() - 10)));
};

Obstacles.prototype.putBads = function() {
  var width = $('#board').width();
  var newObstacle = $('<div>').addClass('bads').attr('id', 'obstacle' +
    numberId).css({
    top: this.positionY,
    left: this.positionX
  });
  $('.board').append(newObstacle);
  numberId++;
};

// Obstacles.prototype.moveObstacles = function() {
//   console.log('el numero es : ' + numberId);
//
//   switch (numberId) {
//     case 1:
//       topPos = $('#obstacle0').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta0 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle0');
//           var speed = 23;
//           $('#obstacle0').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle0").css({
//             top: topPos = 0
//           });
//
//         }
//
//       }, 100);
//
//       break;
//     case 2:
//       topPos = $('#obstacle1').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta1 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle1');
//           var speed = 30;
//           $('#obstacle1').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle1").css({
//             top: topPos = 0,
//             left: newLeft
//           });
//         }
//       }, 150);
//
//       break;
//     case 3:
//       var topPos = $('#obstacle2').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta2 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle2');
//           var speed = 15;
//           $('#obstacle2').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle2").css({
//             top: topPos = 0,
//           });
//         }
//       }, 180);
//
//       break;
//     case 4:
//       topPos = $('#obstacle3').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta3 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle3');
//           var speed = 40;
//           $('#obstacle3').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle3").css({
//             top: topPos = 0,
//           });
//         }
//       }, 100);
//
//       break;
//     case 5:
//       topPos = $('#obstacle4').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta4 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle4');
//           var speed = 50;
//           $('#obstacle4').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle4").css({
//             top: topPos = 0,
//           });
//         }
//       }, 200);
//       break;
//
//     case 6:
//       topPos = $('#obstacle5').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta5 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle5');
//           var speed = 65;
//           $('#obstacle5').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle5").css({
//             top: topPos = 0,
//           });
//         }
//       }, 250);
//       break;
//
//     case 7:
//       topPos = $('#obstacle6').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta6 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle6');
//           var speed = 20;
//           $('#obstacle6').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle6").css({
//             top: topPos = 0,
//           });
//         }
//       }, 2000);
//       break;
//     case 8:
//       topPos = $('#obstacle7').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta7 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle7');
//           var speed = 35;
//           $('#obstacle7').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle7").css({
//             top: topPos = 0,
//           });
//
//         }
//
//       }, 100);
//
//       break;
//     case 9:
//       topPos = $('#obstacle8').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta8 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle8');
//           var speed = 25;
//           $('#obstacle8').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle8").css({
//             top: topPos = 0,
//           });
//
//         }
//
//       }, 100);
//
//       break;
//     case 10:
//       topPos = $('#obstacle9').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta9 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle9');
//           var speed = 15;
//           $('#obstacle9').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle9").css({
//             top: topPos = 0,
//           });
//
//         }
//
//       }, 100);
//
//       break;
//     case 11:
//       topPos = $('#obstacle10').position().top;
//       newLeft = this.getRandomPositionX();
//       var intervalMoveObsta10 = setInterval(function() {
//         checkObstacles();
//         var obstacleArray;
//         if (topPos < 580) {
//           obstacleArray = $('#obstacle10');
//           var speed = 45;
//           $('#obstacle10').css({
//             top: topPos += speed
//           });
//         } else {
//           $("#obstacle10").css({
//             top: topPos = 0,
//           });
//
//         }
//
//       }, 100);
//
//       break;
//     default:
//
//   }
// };
//

//
// function clearInter() {
//   clearInterval(intervalMoveObsta0);
//   clearInterval(intervalMoveObsta1);
//   clearInterval(intervalMoveObsta2);
//   clearInterval(intervalMoveObsta3);
//   clearInterval(intervalMoveObsta4);
//   clearInterval(intervalMoveObsta5);
//   clearInterval(intervalMoveObsta6);
//   clearInterval(intervalMoveObsta7);
//   clearInterval(intervalMoveObsta8);
//   clearInterval(intervalMoveObsta9);
//   clearInterval(intervalMoveObsta10);
// }
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


Obstacles.prototype.updateBads = function() {
  this.positionY = (this.positionY + this.speed);
  console.log("update");
  this.element= $('<div>').addClass('bads').css({
    top: this.positionY,
    left: this.positionX
  });
  $('.board').append(this.element);
  if(this.positionY > board.bottom-this.element.height()){
    this.element.remove();
    this.tobeDeleted = true;
  }
};
