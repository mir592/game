function Board() {
  this.initBoard();
}

Board.prototype.initBoard = function() {
  this.left = $('.board').position().left;
  this.top = $('.board').position().top;
  this.rigth = this.left + $('.board').width();
  this.bottom = this.top + $('.board').height();
};


/////Empiezan a caer AvadaKedabras en cuanto clicamos en el PLAY\\\\\\
$('#bot').on('click',function() {
  $('#bot').remove();
  $('.instruc').remove();
  var numberOfBads = 8;
  var bads = [];
  _createEnemies(numberOfBads);

  function _createEnemies(n) {
    for (var i = 0; i < n - bads.length; i++) {
      var speed = Math.random() * 10 + 15;
      bads.push(new Voldemort(speed));
    }
    console.log(bads);
  }

  function _updateAll() {
    bads = bads.filter(function(element) {
      console.log(element.tobeDeleted);
      return !element.tobeDeleted;
    });
    bads.forEach(function(element) {
      element.updateBads();
      element.speedPlus();

     });
  }

  setInterval(function() {
    _createEnemies(numberOfBads);
  }, 50);


  setInterval(function() {
    _updateAll();
    _checkObstacles();
  }, 100);

});
