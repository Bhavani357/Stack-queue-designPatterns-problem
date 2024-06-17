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
        if(this.perimeterSum<100){
            this.data.push(obj)
            let perimeter = obj.params.perimeter
            this.perimeterSum += perimeter
        }else{
            logger.logSuccess("Your perimeter reaches the limit, please dequeue it")
        }
    }
    dequeue(){
        while(this.perimeterSum >= 100){
            let popedEl = this.data.shift()
            let perim = popedEl.params.perimeter
            this.perimeterSum -= perim
            stack.push(popedEl)
            logger.logSuccess(stack)
            return popedEl
        }
    }
    printData(){
        return this.data
    }
    getSum(){
        return this.perimeterSum
    }
}


module.exports = Queue


