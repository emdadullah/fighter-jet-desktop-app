var gamePos = new Position(0, 0);
var gameDimen = new Dimen(1000, 500);
var gameBoundary = new Boundary(gamePos, gameDimen);

function pauseGame(){
    canvas.stopPlaying();
}

function resumeGame(){
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
  }
  

function menu(){
    restart();
    canvas.stopPlaying();
}

function play(){
        startGame();

}
