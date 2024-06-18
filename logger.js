class Logger{
    constructor(){
        if(! Logger.instance){
            this.data = []
            Logger.instance = this
        }
        return Logger.instance;
    }
    logError(message){
        console.error(message)
    }
    logSuccess(message){
        console.log(message)
    }
    addData(data){
        this.data.push(data)
    }
}
module.exports = Logger