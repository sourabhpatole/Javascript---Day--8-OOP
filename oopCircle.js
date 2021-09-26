class circle {
    constructor(radius, color, area, circumference) {
        this.radius = radius;
        this.color = color;
        this.area = this.getArea();
        this.circumference = this.getCircum();
    }
    getArea() {
        return (this.radius * this.radius) * 3.14
    }
    getCircum() {
        return (2 * 3.14 * this.radius)
    }
}
const area = new circle(6, "Red")
console.log(area)