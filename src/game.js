var gamePos = new Position(0, 0);
var gameDimen = new Dimen(1000, 500);
var gameBoundary = new Boundary(gamePos, gameDimen);

function pauseGame(){
    canvas.stopPlaying();
 //   $("#afterPause").fadeIn(1000);
    //$("#afterPause").removeClass('d-none');
    //afterPause
}

function resumeGame(){
    //$("#afterPause").fadeOut(1000);
    startGame();
}

function startGame(){
    canvas.startPlaying();

}
function initGameState(){
    fighterJet.score.score = 0;
    fighterJet.score.update();
    fighterJet.life = 3;
    level.currentLevel = 0;
}
function restart() {
    initGameState();
    fighterJet.restart();
    canvas.enemies = [];
    canvas.init();
    resumeGame();
   // $("#resume").text("Resume Game").attr('disabled', false);
  }
  

function menu(){
    restart();
    canvas.stopPlaying();
    //pauseGame();
  //  $("#afterPause").fadeOut(100);
   // $("#startGame").fadeIn(1000);
    //play();
}

function play(){
        //document.getElementById("startGame").style.display = "none";
   //     $("#startGame").fadeOut(1000);
     //   $("#pause").removeClass('d-none');
        startGame();

}
