// add properties and methods for your timer here
class Timer {

    //STEP 0: Add necessary properties for your timer
    constructor(){
        this.time= 0
        this.intervalId=0
        console.log('This the constructor in timer')
    }


    // STEP1: Create a start method to start the timer
    start(updateFunc){
        console.log('Start called')
        this.intervalId = setInterval(() => {
            this.time++
            updateFunc()
     //     console.log(updateFunc)
            console.log(this.time)
        },1000)
    }


    // STEP2: Create a stop method to stop the timer
    stop(){
        clearInterval(this.intervalId)
        console.log('Stop called')
    }

}

console.log('Timer file')