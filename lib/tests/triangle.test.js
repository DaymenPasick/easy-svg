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
         const circleColor = 'Red'
         const redCircle = new Triangle(circleColor)
 
         expect(redCircle.shapeColor).toBe(circleColor)
     })
    })
    
    //Triangle:text parameter test
    describe('Initiate Triangle text', () =>{
     it('will pass if text parameter is correctly passed', () => {
         const circleText = 'TST'
         const tstCircleText = new Shape('Blue', circleText)
 
         expect(tstCircleText.text).toBe(circleText)
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
        describe('showProperties()', () =>{
            it('will pass if showProperties() outputs parameter data correctly', () => {
                const testCircle = new Triangle(
                    'Blue',
                    'TST',
                    'White'
                )
        
                expect(testCircle.showProperties()).toBe(
                    `Created a Blue Triangle labeled TST in White text`
                )
            })
           }) 
 
 })