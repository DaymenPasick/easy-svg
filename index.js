//this index file will hold code for actually invoking the svg render process
//after the initial code is all done

//setting const to utilize fs promises api.
//this will support writing/reading of files and easier validation of data
const { readFile, writeFile} = require('fs/promises');
const shapeCreator = require('./lib/data/shapeCreator')

const Shape = shapeCreator.Shape

const renderShapeResponse = shapeCreator.renderShapeResponse

const triangle = renderShapeResponse('triangle')

console.log(renderShapeResponse('triangle'));


//brainstorm notes.
//I have a way to handle shapePrompt user input
//now I need to create the actual terminal prompt for to get shapePrompt data back
//once prompt created, need to tranfer that data into shapePrompt