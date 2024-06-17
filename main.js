const Shape = require('./shapes')
const Queue = require('./queue')
const Logger = require('./logger')



const shape = new Shape()
const queue = new Queue()
const logger = new Logger()

let objsArr = [
    {'type':'rectangle','length':4,'bredth':9},
    {'type':'square','length':8},
    {'type':'rectangle','length':9,'bredth':22},
    {'type':'square','length':41}
]

for(let i=0;i<objsArr.length;i++){
    const obj = shape.createShapes(objsArr[i])
    obj.calculateArea()
    obj.calculatePerimeter()
    queue.enqueue(obj)
}

queue.dequeue()

const obj2 = shape.createShapes({'type':'square','length':16})
obj2.calculateArea()
obj2.calculatePerimeter()
queue.enqueue(obj2)

const obj3 = shape.createShapes({'type':'rectangle','length':12,'bredth':11})
obj3.calculateArea()
obj3.calculatePerimeter()
queue.enqueue(obj3)

queue.dequeue()

const obj4 = shape.createShapes({'type':'square','length':10})
obj4.calculateArea()
obj4.calculatePerimeter()
queue.enqueue(obj4)
queue.dequeue()

const obj5 = shape.createShapes({'type':'rectangle','length':23,'bredth':21})
obj5.calculateArea()
obj5.calculatePerimeter()
queue.enqueue(obj5)
queue.dequeue()

logger.logSuccess(queue)