//this will hold functions for handling user input from terminal prompt system
const fs = require('fs');
const shapeCreator = require('../data/shapeCreator')



//======================================================These functions will be called @ index.js ==========================================

 //will validate data passed into shapePrompt. If passed, will return shaepPrompt data to lowercase
 function validateShapeResponse(shapePrompt) {
    if(shapePrompt.toLowerCase() == "circle" || shapePrompt.toLowerCase() == "square" || shapePrompt.toLowerCase() == "triangle") {
       return shapePrompt.toLowerCase();
    } else {
        throw new Error('Please select either Circle, Square, or Triangle')
    }

}  


//will validate color/rgb data from shapeColorPrompt.
//will change letters to lowercase if color is letters



//will take textPrompt response and use it to validate textPrompt length
function validateTextResponse(text) {
    //validates length of text parameter. Converts response to CAPS
    const lettersOnly = /^[A-Za-z]+$/
    //const lettersOnly will ensure response is only letters
    if(text.length > 3) {
        throw new Error('`text` must be less than 3 characters')
    } else if(!text.match(lettersOnly)) {
        throw new Error('`text` must only contain letters')
    } else { 
        return text.toUpperCase()
    }
}


//will validate color/rgb data from textColorPrompt.
//will change letters to lowercase if color is letters
  

 //will take shapePrompt answer and use it to create a new Shape class instance accordingly
 function createSelectedShape(validatedShapeResponse) {
    //shapes from shapeCreator.js that extend Shape class
    const Circle = shapeCreator.Circle
    const Square = shapeCreator.Square
    const Triangle = shapeCreator.Triangle


    if(validatedShapeResponse.toLowerCase() == 'circle'){
        return Circle

    } else if (validatedShapeResponse.toLowerCase() == 'square'){
        return Square

    } else if (validatedShapeResponse.toLowerCase() == 'triangle'){
        return Triangle

    } 
}

module.exports = {
    validateTextResponse,
    validateShapeResponse,
    createSelectedShape
}