// this file will serve as our setup for shape creation logic

//will take in parameters used in prompt system to be shared by all shapes
class Shape {
    constructor(shape, shapeColor, text, textColor){


        // //validates length of text parameter
        // if(text.length > 3) {
        //     throw new Error('`text` must be less than 3 characters')
        // }
        
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    //will return
    showProperties() {
        return `The shape is a ${this.shapeColor} ${this.shape}, that says ${this.text} in ${this.textColor} letters`
    }
}










 //function will ideally take shape prompt response and use it to initiate shape classes
 function renderShapeResponse(shapePrompt) {

        //validates data passed into shapePrompt user answer
        if(shapePrompt.toLowerCase() == "circle" || shapePrompt.toLowerCase() == "square" || shapePrompt.toLowerCase() == "triangle") {
            //nothing happens if proper shape passed. Will account for Caps situations
        } else {
            throw new Error('Please select either Circle, Square, or Triangle')
        }


        //loop will take shapePrompt answer and use it to create a new Shape class instance accordingly
        if(shapePrompt.toLowerCase() == 'circle'){
            //code for creating circle

            return 'Creating Circle';
        } else if (shapePrompt.toLowerCase() == 'square'){
            //code for creating circle

            return 'Creating Square';
        } else if (shapePrompt.toLowerCase() == 'triangle'){
            //code for creating circle

            return 'Creating Triangle';
        } 
 }



module.exports = {  
    Shape,
    renderShapeResponse
}
