var shootInterval = 0;

function Jet () {
	this.ctx = canvas.getCanvasCtx('canvasJet'),
    this.dimen = new Dimen(100, 30);
    this.position = new Position(200, 300);
    this.boundary = new Boundary(this.position, this.dimen);
	this.options = {
		srcY: 500,
		drawX: this.position.x,
		drawY: this.position.y,
		width: this.dimen.width,
		height: this.dimen.height,
		explosion: new Explosion()
	};

	this.stear = {
		up : false,
		forward : false,
		down : false,
		backword : false
	};

	this.jetWarOptions = {
		bullets : [],
		currentBullet : 0,
		fireBtn : false,
		isShooting : false
	}

	for( var i = 0; i <= 50; i++ ){
		this.jetWarOptions.bullets[ this.jetWarOptions.bullets.length ] = new Bullet();
	}

  this.score = new Score();
  this.score.update();
  this.speed = 2;
  this.life = 3;
  this.totalLife = 3;
}

Jet.prototype.restart = function(){
	this.position.x = 200;
	this.position.y = 300;
	this.setDrawX();
	this.setDrawY();
}

Jet.prototype.showLife = function () {
	
	
    for (var lifeNumber = 1; lifeNumber <= this.totalLife; lifeNumber++) {
      var id = "life" + lifeNumber;
	//   console.log(id);

	// if(lifeNumber > this.life){
	// 	$('#'+id).attr('src', 'images/lifeGone.png');
	// }
	// else{
	// 	$('#'+id).attr('src', 'images/jet.png');
	// }
	  
	}
	
  }
Jet.prototype.checkShooting = function(){
	if( this.jetWarOptions.fireBtn && shootInterval>5 ){
        this.jetWarOptions.isShooting = true;
		this.jetWarOptions.bullets[this.jetWarOptions.currentBullet++].fire(this.position.x + this.dimen.width, this.position.y + this.dimen.height);	
		if( this.jetWarOptions.currentBullet >= this.jetWarOptions.bullets.length ) {
			this.jetWarOptions.currentBullet = 0;	
		}
		shootInterval = 0;
	}else if( !this.jetWarOptions.fireBtn ){
		this.jetWarOptions.isShooting = false;
	}
};

Jet.prototype.drawAllBullets = function(){
	for(var i = 0; i < this.jetWarOptions.bullets.length; i++){
		if( this.jetWarOptions.bullets[i].position.x >= 0 ) this.jetWarOptions.bullets[i].drawBulletCanvas();
		if( this.jetWarOptions.bullets[i].options.explosion.hasHit) this.jetWarOptions.bullets[i].options.explosion.drawExplosionCanvas();
	}
}

Jet.prototype.jetDirection = function() {
	if(this.stear.up) {this.position.y -= this.speed; this.setDrawY();}
	if(this.stear.forward) {this.position.x += this.speed; this.setDrawX();}
	if(this.stear.down) {this.position.y += this.speed; this.setDrawY();}
    if(this.stear.backword) {this.position.x -= this.speed; this.setDrawX();}
}

Jet.prototype.updateScore = function(points){
	this.score += points; 
	//canvas.gameScore.update();
}

Jet.prototype.drawJetCanvas = function () {
	canvas.clear(this.ctx);
	this.jetDirection();
	this.checkShooting();
	this.drawAllBullets();
	this.checkHitEnemy();
	this.checkHitWall();
	this.showLife();
	canvas.draw(this.ctx, this.options);
};

Jet.prototype.checkHitWall = function(){
	if (this.options.drawX + this.options.width >= 1000){
		this.position.x = 1000 - 100;
		this.setDrawX();
	}
	if (this.options.drawX <= 0) {
		this.position.x = 0;
		this.setDrawX();
	}
	if (this.options.drawY <= 0) {
		this.position.y = 0;
		this.setDrawY();
	}
	if (this.options.drawY + this.options.height >= window.innerHeight) {
		this.position.y = 1000 - 30;
		this.setDrawY();
	}
}

Jet.prototype.setDrawX = function(){
	this.options.drawX = this.position.x;
	this.boundary.setBoundary(this.position.x, this.position.y);
}

Jet.prototype.setDrawY = function(){
	this.options.drawY = this.position.y;
	this.boundary.setBoundary(this.position.x, this.position.y);
}


Jet.prototype.checkHitEnemy = function () {
	for (var i = 0; i < canvas.enemies.length; i++) {
		if (CollisionDetector.isCollide(this.boundary, canvas.enemies[i].boundary)) {
			this.life--;
			this.showLife();
			if (this.life <= 0) {
				//$("#resume").text('Your Score: ' + fighterJet.score.score).attr('disabled', 'disabled');
				pauseGame();
			}
			this.options.explosion.options.drawX = canvas.enemies[i].position.x + (this.options.explosion.options.width / 2);
			this.options.explosion.options.drawY = canvas.enemies[i].position.y - (this.options.explosion.options.height / 3);
			this.options.explosion.hasHit = true;
			this.options.explosion.drawExplosionCanvas();
			canvas.enemies[i].recycleEnemy();
		}
	};
}