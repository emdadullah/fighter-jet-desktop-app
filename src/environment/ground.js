var ground = function (dimen) {
    var position = new Position(0, 0);
    var boundary = new Boundary(position, dimen);

    this.isHit = function (obj) {
        return CollisionDetector.isCollide(boundary, obj.boundary);
    }
}