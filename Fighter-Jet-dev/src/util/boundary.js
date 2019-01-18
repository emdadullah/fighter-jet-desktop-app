function Boundary(position, dimen) {
    this.dimen = dimen;
    this.top = {
        left : {
            x: position.x,
            y: position.y
        },
        right : {
            x: position.x + dimen.width,
            y: position.y
        }
    }

    this.bottom = {
        left : {
            x: position.x,
            y: position.y + dimen.height
        },
        right : {
            x: position.x + dimen.width,
            y: position.y + dimen.height
        }
    }

    this.pos = [this.bottom.left, this.bottom.right, this.top.right, this.top.left];

}

Boundary.prototype.setBoundary = function(x , y){
   // debugger;
    if (typeof x === 'undefined') return;
    if (typeof y === 'undefined') return;
    if (typeof this.top === 'undefined') return;
    if (typeof this.bottom === 'undefined') return;
    this.setTopLeft(x, y);
    this.setTopRight(x, y);
    this.setBottomLeft(x, y);
    this.setBottomRight(x, y);
    this.setPos();
}

Boundary.prototype.setTopLeft = function(x , y) {
    this.top.left.x = x;
    this.top.left.y = y;
}

Boundary.prototype.setTopRight = function(x , y) {
    this.top.right.x = x + this.dimen.width;
    this.top.right.y = y;
}

Boundary.prototype.setBottomLeft = function(x , y) {
    this.bottom.left.x = x;
    this.bottom.left.y = y + this.dimen.height;
}

Boundary.prototype.setBottomRight = function(x , y) {
    this.bottom.right.x = x + this.dimen.width;
    this.bottom.right.y = y + this.dimen.height;
}

Boundary.prototype.setPos = function() {
    this.pos = [this.bottom.left, this.bottom.right, this.top.right, this.top.left];
}