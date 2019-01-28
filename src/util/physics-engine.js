var CollisionDetector = {

    isCollide: function (obj2, obj1) {
        var val = 0;
        for (var j = 0; j < 4; j++) {
            var check = [2, 2, 2, 2];
            var ok = 5;
            for (var i = 0; i < 4; i++) {
                check[i] = orientation(obj2.pos[i], obj2.pos[(i + 1) % 4], obj1.pos[j]);
            }
            ok = check[0] + check[1] + check[2] + check[3];
            if (ok > 3 || ok < -3) {
                return true;
            }

            ok = 0;
            for (var i = 0; i < 4; i++) {
                check[i] = orientation(obj1.pos[i], obj1.pos[(i + 1) % 4], obj2.pos[j]);
            }
            ok = check[0] + check[1] + check[2] + check[3];
            if (ok > 3 || ok < -3) {
                return true;
            }

        }
        return false;
    }

}

var orientation = function (p0, p1, p2) {
    var area = (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y);
    if (area > 0) return 1;
    if (area < 0) return -1;
    return 0;
}