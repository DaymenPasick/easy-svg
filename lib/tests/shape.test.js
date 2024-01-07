const shapeCreator = require('../data/shapeCreator');
const Shape = shapeCreator;

//will create some basic testing for general parameters and functionality of Shape
describe('Shape', () => {

   //instance test 
   describe('Instantiate', () =>{
    it('will pass if new instance of Shape is created properly', () => {
        const instanceShape = new Shape()

        expect(instanceShape).toBeInstanceOf(Shape)
    })
   }) 


   //Shape:shape parameter test
   describe('Initiate shape', () =>{
    it('will pass if shape parameter is correctly passed', () => {
        const shape = 'Triangle'
        const triangleShape = new Shape(shape)

        expect(triangleShape.shape).toBe(shape)
    })
   }) 

   //Shape:shapeColor parameter test
   describe('Initiate shapeColor', () =>{
    it('will pass if shapeColor parameter is correctly passed', () => {
        const shapeColor = 'Blue'
        const blueShape = new Shape('Triangle', shapeColor)

        expect(triangleShape.shapeColor).toBe(shapeColor)
    })
   })
   
   //Shape:shape parameter test
   describe('Initiate shape', () =>{
    it('will pass if shape parameter is correctly passed', () => {
        const shape = 'Triangle'
        const triangleShape = new Shape(shape)

        expect(triangleShape.shape).toBe(shape)
    })
   })
   
   //Shape:shape parameter test
   describe('Initiate shape', () =>{
    it('will pass if shape parameter is correctly passed', () => {
        const shape = 'Triangle'
        const triangleShape = new Shape(shape)

        expect(triangleShape.shape).toBe(shape)
    })
   }) 
})
