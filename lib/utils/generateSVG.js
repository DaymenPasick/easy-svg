//this will hold functions for handling user input from terminal prompt system
const fs = require('fs');


//======================================================These functions will be called @ index.js ==========================================


//will take textPrompt response and use it to validate textPrompt length
function validateTextResponse(text) {

    //validates length of text parameter. Converts response to CAPS
    if(text.length > 3) {
        throw new Error('`text` must be less than 3 characters')
    } else { 
        return text.toUpperCase()
    }
}



 //will take shapePrompt response and use it to initiate shape classes
 function validateShapeResponse(shapePrompt) {

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
    validateTextResponse,
    validateShapeResponse
}