function Bullet() {
    this.ctx = canvas.getCanvasCtx('canvasJet');
    this.speed = 3;
    this.dimen = new Dimen(5, 5);
    this.position = new Position(-20, 20);
    this.boundary = new Boundary(this.position, this.dimen);
    this.options = {
        srcX: 100,
        srcY: 500,
        width: 10,
        height: 10,
        drawX: this.position.x,
        drawY: this.position.y,
        drawWidth: this.dimen.width,
        drawHeight: this.dimen.height,
        explosion: new Explosion()
    };
}

Bullet.prototype.setDrawX = function(){
    this.options.drawX = this.position.x;
    this.boundary.setBoundary(this.position.x, this.position.y);
}

Bullet.prototype.setDrawY = function(){
    this.options.drawY = this.position.y;
    this.boundary.setBoundary(this.position.x, this.position.y);
}

Bullet.prototype.drawBulletCanvas = function () {
    this.position.x += this.speed;
    this.setDrawX();
    canvas.draw(this.ctx, this.options);
    this.checkHitEnemy();
    this.recycleBullet();
};

Bullet.prototype.recycleBullet = function () {
    //debugger;
    if (!CollisionDetector.isCollide(this.boundary, gameBoundary) || this.options.explosion.hasHit) this.position.x = -20;
}

Bullet.prototype.test = function () {
    console.log("Working");
}

Bullet.prototype.fire = function (drawX, drawY) {
    this.position.x = drawX;
    this.setDrawX();
    this.position.y = drawY;
    this.setDrawY();
    // fireSound.play();
    document.getElementById('fire').cloneNode(true).play();
}

Bullet.prototype.checkHitEnemy = function () {
    for (var i = 0; i < canvas.enemies.length; i++) {
        if (CollisionDetector.isCollide(this.boundary, canvas.enemies[i].boundary)) {
            document.getElementById('enemyKill').cloneNode(true).play();
            // debugger;
            fighterJet.score.updateScoreForKill();

            this.options.explosion.options.drawX = canvas.enemies[i].position.x + (this.options.explosion.options.width / 2);
            this.options.explosion.options.drawY = canvas.enemies[i].position.y - (this.options.explosion.options.height / 3);
            this.options.explosion.hasHit = true;
            this.recycleBullet();
            canvas.enemies[i].recycleEnemy();
        }
    };
};

Bullet.prototype.removeBullet = function () { 
	this.options.drawX = -20;
 }