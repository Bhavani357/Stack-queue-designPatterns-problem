const Shape = require('./shapes')
const Queue = require('./queue')
const Logger = require('./logger')
const Stack = require('./stack')


const shape = new Shape()
const queue = new Queue()
const logger = new Logger()
const stack = new Stack()

function main(input){
    const obj = shape.createShapes(input)
    obj.calculateArea()
    obj.calculatePerimeter()
    queue.enqueue(obj)
    logger.logSuccess(queue)

    if(queue.perimeterSum>=100){
        while(queue.perimeterSum>=100){
            let popEl = queue.dequeue()
            stack.push(popEl)
            logger.logSuccess("after pushing:")
            logger.logSuccess(stack)
        }
    }
    if(stack.areaSum >=200){
        while(stack.areaSum >=200){
            let popEl = stack.pop()
            logger.logSuccess("after poped:")
            logger.logSuccess(stack)
        }
    }
}
main({'type':'square','length':10})
main({'type':'rectangle','length':12,'bredth':11})
main({'type':'square','length':23})
main({'type':'rectangle','length':4,'bredth':2})

