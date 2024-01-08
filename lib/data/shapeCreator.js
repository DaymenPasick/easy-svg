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

    showProperties() {
        return `Created a ${this.shapeColor} Circle labeled ${this.text} in ${this.textColor} text`
    }
}


//For Square class
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text,textColor)
    }

    showProperties() {
        return `Created a ${this.shapeColor} Square labeled ${this.text} in ${this.textColor} text`
    }
}



//For Triangle class
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text,textColor)
    }

    showProperties() {
        return `Created a ${this.shapeColor} Triangle labeled ${this.text} in ${this.textColor} text`
    }
}











module.exports = {  
    Shape,
    Circle,
    Square,
    Triangle
}
