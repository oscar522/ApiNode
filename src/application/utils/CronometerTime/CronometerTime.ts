export class CronometerTime{
    private initTime : Date
    private finishTime : Date
    setInitTime(initTimeIn : Date){
        this.initTime = initTimeIn;
    }
    getInteval(finishTimeIn : Date){
        this.finishTime  = finishTimeIn;
        return this.finishTime.getTime()-this.initTime.getTime()
    }
}