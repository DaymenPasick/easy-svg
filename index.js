//this index file will hold code for actually invoking the svg render process
//after the initial code is all done

//setting const to utilize fs promises api.
//this will support writing/reading of files and easier validation of data
const { readFile, writeFile} = require('fs/promises');
const inquirer = require('inquirer')
const shapeCreator = require('./lib/data/shapeCreator')

const Shape = shapeCreator.Shape

const renderShapeResponse = shapeCreator.renderShapeResponse

const triangle = renderShapeResponse('triangle')

console.log(triangle);


//brainstorm notes.

//might also create seperate js file for validation functions

//notes for tommorow
//made initial(hopefully final)tests for base Shape class and extends
//need to work on prompt for user
//need to pass prompt data into variables
//need to use these variables to trigger function that will make a specific shape accordingly

//prompt system (may need to move this onto another file)
const prompt = inquirer.createPromptModule();

const questions = [


    
]