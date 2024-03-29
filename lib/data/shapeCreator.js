// this file will serve as our setup for shape creation logic

//Overall Shape class that will be used as basis for Circle, Square, and Triangle
class Shape {
    constructor(shapeColor, text, textColor){

        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}


//For Circle class
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }

    //will take in prompt answers to populate Circle with
    svgProperties(shapeColor) {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}


//For Square class
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text,textColor)
    }

    //will take in prompt answers to populate Square with
    svgProperties(shapeColor) {
        return `<rect width="300" height="200" fill="${this.shapeColor}" />`
    }
}



//For Triangle class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text,textColor)
    }


    //will take in prompt answers to populate Triangle with
    svgProperties(shapeColor) {
        return `<polygon points="150,0 302,200 5,200"  fill="${this.shapeColor}" />`
    }
}











module.exports = {  
    Shape,
    Circle,
    Square,
    Triangle
}
