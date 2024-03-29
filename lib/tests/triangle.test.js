//for testing Triangle class extended from Shape class
const shapeCreator = require('../data/shapeCreator')
const Shape = shapeCreator.Shape;
const Triangle = shapeCreator.Triangle;



//will create testing for Triangle class parameters, and to see if it instantiates properly
describe('Triangle', () => {

    //instance test 
    describe('Instantiate Triangle', () =>{
     it('will pass if new instance of Triangle is created properly', () => {
         const instanceShape = new Triangle
 
         expect(instanceShape).toBeInstanceOf(Triangle)
     })
    }) 
 
 
    //Triangle:shapeColor parameter test
    describe('Initiate Triangle shapeColor', () =>{
     it('will pass if shapeColor parameter is correctly passed', () => {
         const triangleColor = 'Red'
         const redTriangle = new Triangle(triangleColor)
 
         expect(redTriangle.shapeColor).toBe(triangleColor)
     })
    })
    
    //Triangle:text parameter test
    describe('Initiate Triangle text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const triangleText = 'TST'
         const tstTriangleText = new Shape('Blue', triangleText)
 
         expect(tstTriangleText.text).toBe(triangleText)
     })
    })
    
    //Triangle:textColor parameter test
    describe('Initiate Triangle textColor', () =>{
     it('will pass if textColor parameter is correctly passed', () => {
         const textColor = 'White'
         const whiteTextShape = new Shape('Blue', 'TST', textColor )
 
         expect(whiteTextShape.textColor).toBe(textColor)
     })
    }) 

        //Triangle: showProperties()
        describe('svgProperties()', () =>{
            it('will pass if svgProperties() outputs parameter data correctly', () => {
                const testTriangle = new Triangle(
                    'Blue',
                    'TST',
                    'White'
                )
                    
                // `<polygon points="150,0 302,200 5,200"  fill="${this.shapeColor}" />`
                expect(testTriangle.svgProperties()).toBe(
                    `<polygon points="150,0 302,200 5,200"  fill="${testTriangle.shapeColor}" />`
                )
            })
           }) 
 
 })