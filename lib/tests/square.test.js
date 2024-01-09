//for testing Square class extended from Shape class
const shapeCreator = require('../data/shapeCreator')
const Shape = shapeCreator.Shape;
const Square = shapeCreator.Square;



//will create testing for Square class parameters, and to see if it instantiates properly
describe('Square', () => {

    //instance test 
    describe('Instantiate Square', () =>{
     it('will pass if new instance of Square is created properly', () => {
         const instanceShape = new Square
 
         expect(instanceShape).toBeInstanceOf(Square)
     })
    }) 
 
 
    //Square:shapeColor parameter test
    describe('Initiate Square shapeColor', () =>{
     it('will pass if shapeColor parameter is correctly passed', () => {
         const SquareColor = 'Red'
         const redSquare = new Square(SquareColor)
 
         expect(redSquare.shapeColor).toBe(SquareColor)
     })
    })
    
    //Square:text parameter test
    describe('Initiate Square text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const SquareText = 'TST'
         const tstSquareText = new Shape('Blue', SquareText)
 
         expect(tstSquareText.text).toBe(SquareText)
     })
    })
    
    //Square:textColor parameter test
    describe('Initiate Square textColor', () =>{
     it('will pass if textColor parameter is correctly passed', () => {
         const textColor = 'White'
         const whiteTextShape = new Shape('Blue', 'TST', textColor )
 
         expect(whiteTextShape.textColor).toBe(textColor)
     })
    }) 

        //Square: svgProperties()
        describe('svgProperties()', () =>{
            it('will pass if svgProperties() outputs parameter data correctly', () => {
                const testSquare = new Square(
                    'Blue',
                    'TST',
                    'White'
                )
        
                expect(testSquare.svgProperties()).toBe(
                    `<rect width="300" height="200" fill="${testSquare.shapeColor}" />`
                )
            })
           }) 
 
 })