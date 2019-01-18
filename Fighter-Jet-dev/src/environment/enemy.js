function Enemy() {
    this.ctx = canvas.getCanvasCtx('canvasEnemy');
    this.position = new Position( Math.floor(Math.random() * 1000) + window.innerWidth, Math.floor(Math.random() * 360));
    this.dimen = new Dimen(100, 30);
    this.boundary = new Boundary(this.position, this.dimen);
    this.enemyOptions = {
        srcY: 540,
        drawX: this.position.x,
        drawY: this.position.y,
        width: this.dimen.width,
        height: this.dimen.height
    };
    this.movement = false;
    this.rewardPoints = 5;
    this.goUp = true;
    this.speed = 2;
    this.canShoot = false;
  this.warOptions =[];
}
Enemy.prototype.verticalMovement = 0.5;

Enemy.prototype.setDrawX = function () {
    if (typeof this.position.x !== 'undefined' && typeof this.position.y !== 'undefined') {
        this.enemyOptions.drawX = this.position.x;
        this.boundary.setBoundary(this.position.x, this.position.y);
    }
}

Enemy.prototype.setDrawY = function () {
    if (typeof this.position.x !== 'undefined' && typeof this.position.y !== 'undefined') {
        this.enemyOptions.drawY = this.position.y;
        this.boundary.setBoundary(this.position.x, this.position.y);
    }
}

Enemy.prototype.drawEnemyCanvas = function () {
    this.position.x -= this.speed;
    this.setDrawX();
    if (this.movement) {
        if (this.goUp) {
            this.position.y -= this.verticalMovement;
            this.setDrawY();
        } else {
            this.position.y += this.verticalMovement;
            this.setDrawY();
        }
        if (this.position.y === 0) {
            this.goUp = false;
        } else if (this.position.y === 500) {
            this.goUp = true;
        }
        // console.log(this.enemyOptions.drawY);
    }

    canvas.draw(this.ctx, this.enemyOptions);
    this.escaped();
};

Enemy.prototype.escaped = function () {
    if (this.position.x + this.dimen.width <= 0) {
        this.recycleEnemy();
    }
};

Enemy.prototype.recycleEnemy = function () {
    // console.log("enemy drawn");
    // console.log("Speed: " + this.speed);
    this.position.x = Math.floor(Math.random() * 1000) + window.innerWidth;
    this.setDrawX();
    this.position.y = Math.floor(Math.random() * 360);
    this.setDrawY();
    canvas.currentTotalEnemies++;
    // console.log("Current level total: " + canvas.currentTotalEnemies);
    // console.log("Number of enemies: " + level.getCurrentLevel().numberOfEnemies);
    // canvas.currentSpawnAmount--;
    // if(canvas.currentSpawnAmount === 0){

    // }
    if (canvas.currentTotalEnemies > level.getCurrentLevel().numberOfEnemies) {

        // console.log(canvas.enemies);
        // console.log("update");
        canvas.updateLevel();
    }
}

// Enemy.prototype.checkShooting = Jet.prototype.checkShooting;
// Enemy.prototype.drawAllBullets = Jet.prototype.drawAllBullets;