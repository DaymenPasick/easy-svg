//this will hold functions for handling user input from terminal prompt system
const fs = require('fs');


//======================================================These functions will be called @ index.js ==========================================


//will take textPrompt response and use it to validate textPrompt length
function validateTextResponse(text) {

    //validates length of text parameter. Converts response to CAPS
    const lettersOnly = /^[A-Za-z]+$/
    if(text.length > 3) {
        throw new Error('`text` must be less than 3 characters')
    } else if(!text.match(lettersOnly)) {
        throw new Error('`text` must only contain letters')
    } else { 
        return text.toUpperCase()
    }
}



 //will take shapePrompt response and use it to initiate shape classes
 function validateShapeResponse(shapePrompt) {


    //validates data passed into shapePrompt user answer. If passed, will return shaepPrompt to lowercase
    if(shapePrompt.toLowerCase() == "circle" || shapePrompt.toLowerCase() == "square" || shapePrompt.toLowerCase() == "triangle") {
       return shapePrompt.toLowerCase;
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