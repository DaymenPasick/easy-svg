//for testing Circle class extended from Shape class
const shapeCreator = require('../data/shapeCreator')
const Shape = shapeCreator.Shape;
const Circle = shapeCreator.Circle;



//will create testing for Circle class parameters, and to see if it instantiates properly
describe('Shape', () => {

    //instance test 
    describe('Instantiate', () =>{
     it('will pass if new instance of Circle is created properly', () => {
         const instanceShape = new Circle
 
         expect(instanceShape).toBeInstanceOf(Circle)
     })
    }) 
 
 
    //Circle:shapeColor parameter test
    describe('Initiate shapeColor', () =>{
     it('will pass if shapeColor parameter is correctly passed', () => {
         const shapeColor = 'Blue'
         const blueCircle = new Circle(shapeColor)
 
         expect(blueCircle.shapeColor).toBe(shapeColor)
     })
    })
    
    //Circle:text parameter test
    describe('Initiate text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const text = 'TST'
         const tstTextShape = new Shape('Blue', text)
 
         expect(tstTextShape.text).toBe(text)
     })
    })
    
    //Circle:textColor parameter test
    describe('Initiate textColor', () =>{
     it('will pass if textColor parameter is correctly passed', () => {
         const textColor = 'White'
         const whiteTextShape = new Shape('Blue', 'TST', textColor )
 
         expect(whiteTextShape.textColor).toBe(textColor)
     })
    }) 
 
    //need to add test for show properties()
 })