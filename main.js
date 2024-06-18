const ShapeFactory = require('./shapes')
const Queue = require('./queue')
const Logger = require('./logger')
const Stack = require('./stack')


const shapeFactory = new ShapeFactory()
const queue = new Queue()
const logger = new Logger()
const stack = new Stack()

function main(input){
    const obj = shapeFactory.createShapes(input)
    obj.calculateArea()
    obj.calculatePerimeter()
    queue.enqueue(obj)
    logger.logSuccess(queue)

    if(queue.perimeterSum>=100){
        while(queue.perimeterSum>=100){
            let popEl = queue.dequeue()
            stack.push(popEl)
            logger.logSuccess("after push:")
            logger.logSuccess(stack)
        }
    }
    if(stack.areaSum >=200){
        while(stack.areaSum >=200){
            let popEl = stack.pop()
            logger.logSuccess("after pop:")
            logger.logSuccess(stack)
        }
    }
}

const objArr = [{'type':'square','length':10},
    {'type':'rectangle','length':12,'bredth':11},
    {'type':'square','length':23},
    {'type':'rectangle','length':4,'bredth':2}
]
function mainCall(){
    for(let i=0;i<objArr.length;i++){
        main(objArr[i])
    }
}
mainCall()
