class Shape{
    calculateArea(){
        return new Error("you should implement this method")
    }
    calculatePerimeter(){
        return new Error("you should implement this method")
    }
}


class Rectangle extends Shape{
    constructor(options){
        super()
        this.length = options.length
        this.bredth = options.bredth
        this.params = {}
    }
    calculateArea(){
        let area = this.length*this.bredth
        this.params["area"] = area
        return area
    }
    calculatePerimeter(){
        let perimeter = 2*(this.length+this.bredth)
        this.params["perimeter"] = perimeter
        return perimeter
    }
    
}

class Square extends Shape{
    constructor(options){
        super()
        this.length = options.length
        this.params = {}
    }

    calculateArea(){
        let area = this.length**2
        this.params["area"] = area
        return area
    }
    calculatePerimeter(){
        
        let perimeter = 4*this.length
        this.params["perimeter"] = perimeter
        return perimeter
    }
}

class ShapeFactory{
    createShapes(options){
        switch(options.type){
            case 'square':
                return new Square(options)
            case 'rectangle':
                return new Rectangle(options)
        }
    }
}

module.exports = ShapeFactory
