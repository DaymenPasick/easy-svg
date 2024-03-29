//inquires and requires
const shapeCreator = require('../data/shapeCreator')


//================================These functions will be called @ index.js ==========================================

 //will validate data passed into shapePrompt. 
 //If passed, will return shaepPrompt data to lowercase
 function validateShapeResponse(shapePrompt) {
    if(shapePrompt.toLowerCase() == "circle" ||
       shapePrompt.toLowerCase() == "square" || 
       shapePrompt.toLowerCase() == "triangle") { return shapePrompt.toLowerCase();
      } else {

        throw new Error('Please select either Circle, Square, or Triangle')
      }
}  


//will take textPrompt response and use it to validate textPrompt length
function validateTextResponse(textPrompt) {

    //validates length of textPrompt parameter. Converts response to CAPS
    const lettersOnly = /^[A-Za-z]+$/
    //const lettersOnly will ensure response is only letters
    if(textPrompt.length > 3) {

        throw new Error('`textPrompt` must be less than 3 characters')
    } else if(!textPrompt.match(lettersOnly)) {

        throw new Error('`textPrompt` must only contain letters')
    } else { 

        return textPrompt.toUpperCase()
    }
}


 //will take shapePrompt answer,
 //and use it to create a new Shape class instance accordingly
 function createSelectedShape(validatedShapeResponse) {

    //shapes from shapeCreator.js that extend Shape class
    const Circle = shapeCreator.Circle
    const Square = shapeCreator.Square
    const Triangle = shapeCreator.Triangle

    //will return one of the above shape classes 
    if(validatedShapeResponse.toLowerCase() == 'circle'){
        return Circle

    } else if (validatedShapeResponse.toLowerCase() == 'square'){
        return Square

    } else if (validatedShapeResponse.toLowerCase() == 'triangle'){
        return Triangle

    } 
}


//function for generating SVG object
function generateSvgLogo(populatedShape) {
    
    return `

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${populatedShape.svgProperties()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${populatedShape.textColor}">${populatedShape.text}</text></svg>
    `

}


module.exports = {
    validateTextResponse,
    validateShapeResponse,
    createSelectedShape,
    generateSvgLogo,
}