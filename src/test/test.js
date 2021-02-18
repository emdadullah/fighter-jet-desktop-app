var t1Pos = new Position(5, 5);
var t1Dim = new Dimen(10, 10);
var t1Bound = new Boundary(t1Pos, t1Dim);

var t2Pos = new Position(7, 7);
var t2Dim = new Dimen(1, 1);
var t2Bound = new Boundary(t2Pos, t2Dim);

console.log(CollisionDetector.isCollide(t1Bound, t2Bound));