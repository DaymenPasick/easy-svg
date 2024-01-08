//this will hold functions for handling user input from terminal prompt system
const fs = require('fs');
const shapeCreator = require('./lib/data/shapeCreator')


//======================================================These functions will be called @ index.js ==========================================


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


 //will validate data passed into shapePrompt. If passed, will return shaepPrompt data to lowercase
 function validateShapeResponse(shapePrompt) {
    if(shapePrompt.toLowerCase() == "circle" || shapePrompt.toLowerCase() == "square" || shapePrompt.toLowerCase() == "triangle") {
       return shapePrompt.toLowerCase();
    } else {
        throw new Error('Please select either Circle, Square, or Triangle')
    }

}    

 //will take shapePrompt answer and use it to create a new Shape class instance accordingly
 function createSelectedShape(validatedShapeResponse) {
    if(validatedShapeResponse.toLowerCase() == 'circle'){
        //code for creating circle

        return 'Creating Circle';
    } else if (validatedShapeResponse.toLowerCase() == 'square'){
        //code for creating circle

        return 'Creating Square';
    } else if (validatedShapeResponse.toLowerCase() == 'triangle'){
        //code for creating circle

        return 'Creating Triangle';
    } 
}

module.exports = {
    validateTextResponse,
    validateShapeResponse,
    createSelectedShape
}