// this file will serve as our setup for shape creation logic

//will take in parameters used in prompt system to be shared by all shapes
class Shape {
    constructor(shape, shapeColor, text, textColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
 
    }

    showProperties() {
        return `The shape is a ${this.shapeColor} ${this.shape}, that says ${this.text} in ${this.textColor} letters`
    }
}