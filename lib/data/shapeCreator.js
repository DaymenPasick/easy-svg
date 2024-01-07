// this file will serve as our setup for shape creation logic

//will take in parameters used in prompt system to be shared by all shapes
class Shape {
    constructor(shape, shapeColor, text, textColor){
        // if(shape !== "Circle" || shape !== "Square" || shape !== "Triangle") {
        //     throw new Error('`shape` must be either Circle, Square, or Triangle')
        // }

        if(shape !== "Circle" || shape !== "Square" || shape !== "Triangle") {
            throw new Error('`shape` must be either Circle, Square, or Triangle')
        }




        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
 
    }

    showProperties() {
        return `The shape is a ${this.shapeColor} ${this.shape}, that says ${this.text} in ${this.textColor} letters`
    }
}

const triangle = new Shape('Circle', 'Blue', 'BOP', 'White')

console.log(triangle);

module.exports = Shape