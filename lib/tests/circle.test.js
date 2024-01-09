//for testing Circle class extended from Shape class
const shapeCreator = require('../data/shapeCreator')
const Shape = shapeCreator.Shape;
const Circle = shapeCreator.Circle;



//will create testing for Circle class parameters, and to see if it instantiates properly
describe('Circle', () => {

    //instance test 
    describe('Instantiate Circle', () =>{
     it('will pass if new instance of Circle is created properly', () => {
         const instanceShape = new Circle
 
         expect(instanceShape).toBeInstanceOf(Circle)
     })
    }) 
 
 
    //Circle:shapeColor parameter test
    describe('Initiate Circle shapeColor', () =>{
     it('will pass if shapeColor parameter is correctly passed', () => {
         const circleColor = 'Red'
         const redCircle = new Circle(circleColor)
 
         expect(redCircle.shapeColor).toBe(circleColor)
     })
    })
    
    //Circle:text parameter test
    describe('Initiate Circle text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const circleText = 'TST'
         const tstCircleText = new Shape('Blue', circleText)
 
         expect(tstCircleText.text).toBe(circleText)
     })
    })
    
    //Circle:textColor parameter test
    describe('Initiate Circle textColor', () =>{
     it('will pass if textColor parameter is correctly passed', () => {
         const textColor = 'White'
         const whiteTextShape = new Shape('Blue', 'TST', textColor )
 
         expect(whiteTextShape.textColor).toBe(textColor)
     })
    }) 

        //Circle: svgProperties()
        describe('svgProperties()', () =>{
            it('will pass if showProperties() outputs parameter data correctly', () => {
                const testCircle = new Circle(
                    'Blue',
                    'TST',
                    'White'
                )
        
                expect(testCircle.svgProperties()).toBe(
                    `<circle cx="150" cy="100" r="80" fill="${testCircle.shapeColor}" />`
                )
            })
           }) 
 
 })