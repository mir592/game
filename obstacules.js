var numberId = 0;

function Obstacles(obstacleNumber) {
  this.positionX= this.getRandomPositionX();
  this.positionY = -90;
  this.speed = 0;
}


Obstacles.prototype.getRandomPositionX = function() {
  return Math.floor(Math.random() * 560);
};

Obstacles.prototype.drawObstacle = function() {
  var width = $('#board').width();
  var newObstacle = $('<div>').addClass('obstacles').attr('id', 'obstacle' +
    numberId).css({
    top: this.positionY,
    left: this.positionX
  });
  $('#board').append(newObstacle);
  numberId++;
};

Obstacles.prototype.moveObstacles = function() {
  console.log('el numero es : ' + numberId);

  switch (numberId) {
    case 1:
      var topPos = $('#obstacle0').position().top;
      var intervalMoveObsta0 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle0');
          var speed = 25;
          $('#obstacle0').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle0").css({
            top: topPos = -20,
          });

        }

      }, 100);

      break;
    case 2:
      topPos = $('#obstacle1').position().top;
      var intervalMoveObsta1 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle1');
          var speed = 30;
          $('#obstacle1').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle1").css({
            top: topPos = -20,
          });
        }
      }, 150);

      break;
    case 3:
      topPos = $('#obstacle2').position().top;
      var intervalMoveObsta2 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle2');
          var speed = 15;
          $('#obstacle2').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle2").css({
            top: topPos = -20,
          });
        }
      }, 180);

      break;
    case 4:
      topPos = $('#obstacle3').position().top;
      var intervalMoveObsta3 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle3');
          var speed = 34;
          $('#obstacle3').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle3").css({
            top: topPos = -20,
          });
        }
      }, 100);

      break;
      case 6:
      topPos = $('#obstacle4').position().top;
      var intervalMoveObsta4 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle4');
          var speed = 34;
          $('#obstacle4').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle4").css({
            top: topPos = -20,
          });
        }
      }, 200);
        break;

        case 7:
        topPos = $('#obstacle5').position().top;
        var intervalMoveObsta5 = setInterval(function() {
          checkObstacles();
          var obstacleArray;
          if (topPos < 650) {
            obstacleArray = $('#obstacle5');
            var speed = 34;
            $('#obstacle5').css({
              top: topPos += speed
            });
          } else {
            $("#obstacle5").css({
              top: topPos = -20,
            });
          }
        }, 250);
        break;

       case 8:
        topPos = $('#obstacle6').position().top;
        var intervalMoveObsta6 = setInterval(function() {
          checkObstacles();
          var obstacleArray;
          if (topPos < 650) {
            obstacleArray = $('#obstacle6');
            var speed = 34;
            $('#obstacle6').css({
              top: topPos += speed
            });
          } else {
            $("#obstacle6").css({
              top: topPos = -20,
            });
          }
        }, 200);
        break;

    default:

  }

};
