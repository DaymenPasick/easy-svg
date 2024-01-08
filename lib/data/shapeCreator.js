// this file will serve as our setup for shape creation logic

//will take in parameters used in prompt system to be shared by all shapes
class Shape {
    constructor(shape, shapeColor, text, textColor){
      
        //this specific validator might have to be somewhere outside of this class xD
        //validates data passed into shape parameter
        if(shape.toLowerCase() == "circle" || shape.toLowerCase() == "square" || shape.toLowerCase() == "triangle") {
            //nothing happens if proper shape passed. Will account for Caps situations
        } else {
            throw new Error('`shape` must be either Circle, Square, or Triangle')
        }


        //validates length of text parameter
        if(text.length > 3 ) {
            throw new Error('`text` must be less than 3 characters')
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

const triangle = new Shape('square', 'Blue', 'BOP', 'White')

console.log(triangle);

module.exports = Shape