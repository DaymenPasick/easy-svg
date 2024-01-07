const shapeCreator = require('../data/shapeCreator');
const Shape = shapeCreator;

//will create some basic testing for general parameters and functionality of Shape
describe('Shape', () => {

   describe('Instantiate', () =>{
    it('will pass if new instance of Shape is created properly', () => {
        const instanceShape = new Shape()

        expect(instanceShape).toBeInstanceOf(Shape)
    })
   }) 


})
