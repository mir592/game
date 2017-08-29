var numberId = 0;

function BadThings() {
  this.element = $('<div>').addClass('bads');
  this.speedX = 60;
  this.nextPx = 0;
  this.posX = parseInt((this.element).position().left); //donde se encuentra en el eje X
  this.posY = parseInt((this.element).position().top); //donde se encuentra en el eje Y (lo que queremos modificar)
  this.element.css('top', this.posY);
  $('.board').append(this.element);
  console.log(this.posX);
}

BadThings.prototype.appearTop = function() {
  this.nextPx = parseInt(Math.floor(Math.random() * ($('.board').width() - 1)));
  this.element.css('left', this.nextPx).attr('id', 'obstacle ' + numberId);
  numberId++;
};

BadThings.prototype.goDown = function() {
  element = this.element;
  console.log("PosicionY", this.posY);
  this.posY += this.speedX;
  this.element.css('top', this.posY);
  console.log("TrasModificarse", this.posY);

};

BadThings.prototype.differentTimes = function() {
  console.log(numberId);
  switch (numberId) {
    case 0:
      var intervalMoveObsta0 = setInterval(function() {
        this.element.goDown();
      }, 100);
      break;
    case 1:
      var intervalMoveObsta1 = setInterval(function() {
        this.element.goDown();
      }, 200);
      break;
    case 2:
      var intervalMoveObsta2 = setInterval(function() {
        this.element.goDown();
      }, 300);
      break;
    case 3:
      var intervalMoveObsta3 = setInterval(function() {
        this.element.goDown();
      }, 400);
      break;
    case 4:
      var intervalMoveObsta4 = setInterval(function() {
        this.element.goDown();
      }, 500);
      break;
    case 5:
      var intervalMoveObsta5 = setInterval(function() {
        this.element.goDown();
      }, 600);
      break;
    case 6:
      var intervalMoveObsta6 = setInterval(function() {
        this.element.goDown();
      }, 700);
      break;
    case 7:
      var intervalMoveObsta7 = setInterval(function() {
        this.element.goDown();
      }, 800);
      break;
    default:

  }
};
function clearInterval(){
  clearInterval(intervalMoveObsta0);
  clearInterval(intervalMoveObsta1);
  clearInterval(intervalMoveObsta2);
  clearInterval(intervalMoveObsta3);
  clearInterval(intervalMoveObsta4);
  clearInterval(intervalMoveObsta5);
  clearInterval(intervalMoveObsta6);
}
