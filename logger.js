class Logger{
    constructor(){
        if(! Logger.instance){
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
}
module.exports = Logger