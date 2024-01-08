//inquires and requires
const { readFile, writeFile} = require('fs/promises');
const fs = require('fs');
const inquirer = require('inquirer')
const shapeCreator = require('./lib/data/shapeCreator')
const generateSVG = require('./lib/utils/generateSVG');


//const functions imported from generateSVG.js
const validateTextResponse = generateSVG.validateTextResponse
const validateShapeResponse = generateSVG.validateShapeResponse
const createSelectedShape = generateSVG.createSelectedShape
const generateSvgLogo = generateSVG.generateSvgLogo


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
        message: 'Please type a color or paste a hex value for your shape',
        name: 'shapeColorPrompt',
        validate: (value) => !!value.trim() || 'Please choose a color or hex value',

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
        message: 'Please type a color or paste a hex value for your text',
        name: 'textColorPrompt',
        validate: (value) => !!value.trim() || 'Please choose a color or hex value',

    }, 

]


//function to take in user terminal prompt answers and generate a populated
//shape class
const init = () => {
 prompt(questions)
 .then(data => {

    //will validate shapePrompt for proper shape choice, and return shape response in lowercase letters
    const validatedShapeResponse = validateShapeResponse(data.shapePrompt)

    //validated value return from shapeColorPrompt
    const validatedShapeColor = data.shapeColorPrompt

    //will make sure textPrompt is between 1-3 letters, only contains letters & will CAPS response
    const validatedTextResponse = validateTextResponse(data.textPrompt)

    //validated value return from textColorPrompt
    const validatedTextColor = data.textColorPrompt
   


    //will create new shape class based of response. Class will be made from
    //shape classes within shapeCreator.js
    const generatedShape = createSelectedShape(validatedShapeResponse)


    
    //will handle all above validated prompt answers and populate
    //a dynamically generated shape class
    function populateEmptyShape() {
        const populatedShape = new generatedShape(validatedShapeColor,
                                                  validatedTextResponse,
                                                  validatedTextColor)
        return populatedShape
    }


   const populatedShape = populateEmptyShape()

   console.log(populatedShape);

   //function will take validated prompt answers and create a logo.svg file
    function writeToFile(filename, populatedShape){

        const genSVG = generateSvgLogo(populatedShape)

        //will create an output directory if one doesn't exist
        if(!fs.existsSync('./output')) {
            fs.mkdirSync('./output')
        }

        //will use data from genSVG to write a logo.svg file into an output directory
        fs.writeFileSync('./output/logo.svg', genSVG, err =>{
            if(err){
                console.error(err);
            }
        })
    }
    

    //will call function
    writeToFile("logo.svg", populatedShape)
 })
}

//will start the svg logo creator
init()

