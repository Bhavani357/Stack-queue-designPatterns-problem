const Logger = require('./logger')
const logger = new Logger()

class Stack{
    constructor(){
        this.data = []
        this.areaSum = 0
    }
    push(obj){
        this.data.push(obj)
        let area = obj.params.area
        this.areaSum += area
    }
    pop(){
        let popEl = this.data.pop()
        let area = popEl.params.area
        this.areaSum -= area
        return popEl
    }
    getSum(){
        return this.areaSum
    }
}

module.exports = Stack