// this file will serve as our setup for shape creation logic

//will take in parameters used in prompt system to be shared by all shapes
class Shape {
    constructor(shape, shapeColor, text, textColor){
      



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

// const triangle = new Shape('square', 'Blue', 'BOP', 'White')

// console.log(triangle);



 //function will ideally take shape prompt response and use it to initiate shape classes
 function renderShapeResponse(shapePrompt) {

        //validates data passed into shapePrompt user answer
        if(shapePrompt.toLowerCase() == "circle" || shapePrompt.toLowerCase() == "square" || shapePrompt.toLowerCase() == "triangle") {
            //nothing happens if proper shape passed. Will account for Caps situations
        } else {
            throw new Error('Please select either Circle, Square, or Triangle')
        }

    console.log('User chose: ' + shapePrompt + ' as their shape response');

    const triangle = new Shape(shapePrompt, 'Blue', 'YET', 'Purple')
    console.log(triangle);


    //need an if statement that will pass shapePrompt answer to it's proper shape
 }

 renderShapeResponse('tri')

module.exports = Shape