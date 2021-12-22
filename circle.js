class Circle {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    get Radius() {
        return this.radius;
    }
}