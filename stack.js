const Logger = require('./logger')
const logger = new Logger()

class Stack{
    constructor(){
        this.data = []
        this.areaSum = 0
    }
    push(obj){
        if(this.areaSum<200){
            this.data.push(obj)
            let area = obj.params.area
            this.areaSum += area
        }else{
            logger.logSuccess("Your Stack's AreaSum is reaches the limit, so please pop")
        }
        
    }
    pop(){
        while(this.areaSum >=200){
            let popEl = this.data.pop()
            let area = popEl.params.area
            this.areaSum -= area
            return popEl
        }
    }
    getSum(){
        return this.areaSum
    }
}

module.exports = Stack