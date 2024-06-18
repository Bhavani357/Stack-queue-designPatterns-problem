class Logger{
    constructor(){
        if(! Logger.instance){
            this.data = []
            Logger.instance = this
        }
        return Logger.instance;
    }
    logError(){
        console.log("change the inputs and try again")
    }
    logSuccess(message){
        console.log(message)
    }
    addData(data){
        this.data.push(data)
    }
}
module.exports = Logger