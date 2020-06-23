export default class Gigasecond {
    private iDate: Date
    
    constructor(date: Date){
        this.iDate = date
    }

    date = (): Date => {
        return new Date(this.iDate.getTime() + 1000000000000)
    }
}
