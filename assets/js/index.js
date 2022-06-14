'use strict'
class RangeValidator {
    #form
    #to
    /**
     * 
     * @param {number} form 
     * @param {number} to 
     */
    constructor(form, to) { this.form = form, this.to = to };
    set form(form) {
        this.#form = form;
    }
    get form() {
        return this.#form;
    }
    set to(to) {
        this.#to = to;
    }
    get to() {
        return this.#to;
    }
    get range() {
        return [this.#form, this.#to];
    }
    checRange() { return (this.to - this.form) >= 0 ? true : false };
    /**
     * @throws {RangeError}
     */
    validate(numb) {
        switch (this.checRange()) {
            case true:
                if (numb >= this.form && numb <= this.to) {
                    return numb;
                }
            case false:
                if (numb <= this.form && numb >= this.to) {
                    return numb;
                }
            default:
                throw RangeError(`The number ${number} is not in the range between ${this.#form} and ${this.#to}`);
                break;
        }
    }

};


let test = new RangeValidator(5, 7);
let test1 = test.range;
console.log(test);
console.log(test1);
console.log(test.validate(7));
/////////////////////////////////////////////////

class Figure3D {
    constructor(name) { this.name = name };
    fillVightBall() { return (1.3 * Math.PI * Math.pow(this.radius, 3)) };
    fillVightCylinder() { return Math.PI * Math.pow(this.radius, 2) * this.hight };
    fillVightCube() { return Math.pow(this.size, 3) };
};
class Ball extends Figure3D {
    constructor(name, radius,) {
        super(name);
        this.radius = radius;
    }
    fillVightBall() { return super.fillVightBall(this.radius) };
};
class Cylinder extends Figure3D {
    constructor(name, radius, hight) {
        super(name);
        this.radius = radius;
        this.hight = hight;
    }
    fillVightCylinder() { return super.fillVightCylinder(this.radius, this.hight) };
};
class Cube extends Figure3D {
    constructor(name, size) {
        super(name);
        this.size = size;

    }
    fillVightCube() { return super.fillVightCube(this.size) };
};
let ball = new Ball('ball', 15);
console.log(ball.fillVightBall());
let cylinder = new Cylinder('cylinder', 25, 12);
console.log(cylinder.fillVightCylinder());
let cube = new Cube('cube', 15);
console.log(cube.fillVightCube());
