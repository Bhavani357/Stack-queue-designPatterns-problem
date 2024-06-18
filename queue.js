const Stack = require('./stack')
const Logger = require('./logger')
const stack = new Stack()
const logger = new Logger()

class Queue{
    constructor(){
        this.data = []
        this.perimeterSum = 0
    }
    enqueue(obj){
        this.data.push(obj)
        let perimeter = obj.params.perimeter
        this.perimeterSum += perimeter
    }
    dequeue(){
        let popedEl = this.data.shift()
        let perim = popedEl.params.perimeter
        this.perimeterSum -= perim
        return popedEl
    }
    printData(){
        return this.data
    }
    getSum(){
        return this.perimeterSum
    }
}


module.exports = Queue


