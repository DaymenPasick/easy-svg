//for testing Circle class extended from Shape class
const shapeCreator = require('../data/shapeCreator')
const Shape = shapeCreator.Shape;
const Circle = shapeCreator.Circle;



//will create testing for Circle class parameters, and to see if its an instance of Shape class
describe('Shape', () => {

    //instance test 
    describe('Instantiate', () =>{
     it('will pass if new instance of Shape is created properly', () => {
         const instanceShape = new Shape
 
         expect(instanceShape).toBeInstanceOf(Shape)
     })
    }) 
 
 
    //Shape:shape parameter test
    describe('Initiate shape', () =>{
     it('will pass if shape parameter is correctly passed', () => {
         const shape = 'Circle'
         const circleShape = new Shape(shape)
 
         expect(circleShape.shape).toBe(shape)
     })
    }) 
 
    //Shape:shapeColor parameter test
    describe('Initiate shapeColor', () =>{
     it('will pass if shapeColor parameter is correctly passed', () => {
         const shapeColor = 'Blue'
         const blueShape = new Shape('Triangle', shapeColor)
 
         expect(blueShape.shapeColor).toBe(shapeColor)
     })
    })
    
    //Shape:text parameter test
    describe('Initiate text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const text = 'TST'
         const tstTextShape = new Shape('Triangle', 'Blue', text)
 
         expect(tstTextShape.text).toBe(text)
     })
    })
    
    //Shape:textColor parameter test
    describe('Initiate textColor', () =>{
     it('will pass if textColor parameter is correctly passed', () => {
         const textColor = 'White'
         const whiteTextShape = new Shape('Triangle', 'Blue', 'TST', textColor )
 
         expect(whiteTextShape.textColor).toBe(textColor)
     })
    }) 
 
    //need to add test for show properties()
 })