let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let timeDOM = document.querySelector('#timer')


// STEP 3: Create an object from the timer class
let timer = new Timer()
console.log(Timer)
console.log('This is the script file')

function updateTime(){
    timeDOM.innerHTML = timer.time
   // update the time DOM here
   // console.log('Here')
    
}


startBtn.addEventListener('click', () => {
    timer.start(updateTime)
    // Call the timer start method
})


stopBtn.addEventListener('click', () => {
    timer.stop()
    // Call the timer stop method
})