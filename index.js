//this index file will hold code for actually invoking the svg render process
//after the initial code is all done

//setting const to utilize fs promises api.
//this will support writing/reading of files and easier validation of data
const { readFile, writeFile} = require('fs/promises');
const inquirer = require('inquirer')
const shapeCreator = require('./lib/data/shapeCreator')
const generateSVG = require('./lib/utils/generateSVG')


const validateTextResponse = generateSVG.validateTextResponse
const validateShapeResponse = generateSVG.validateShapeResponse


//prompt system (may need to move this onto another file)
const prompt = inquirer.createPromptModule();

//will be the terminal prompts for the user to answer
const questions = [

    //prompt for shape: gives option for Circle, Square, or Triangle
    {
    
        type: 'rawlist',
        message: 'Please choose one of the following shapes',
        name: 'shapePrompt',
        choices: [
            'Circle', 
            'Square', 
            'Triangle'
        ]

    },    

    //prompt for shapeColor
    {
    
        type: 'input',
        message: 'Please type a color or paste an RBG code for your shape',
        name: 'shapeColorPrompt',
        default: 'Blue',

    }, 

    //prompt for text
    {
    
        type: 'input',
        message: 'Please type in text to go inside shape. Text can only have up to three letters',
        name: 'textPrompt',
        default: 'SVG',

    }, 

    //prompt for textColor
    {
    
        type: 'input',
        message: 'Please type a color or paste an RBG code for your text',
        name: 'textColorPrompt',
        default: 'White',

    }, 

]

const init = () => {
 prompt(questions)
 .then(data => {
    
    console.log(data);

    //will make sure textPrompt is between 1-3 letters
    //will also turn response to all CAPS
    validateTextResponse(data.textPrompt)
    console.log(validateTextResponse(data.textPrompt));
 })
}

init()

module.exports = {
    // init
}