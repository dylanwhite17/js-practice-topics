//// Working with and learning Closures in Javascript:

//// Below are 2 versions of the same function, demonstrating 
//// a basic use for a closure by passing in a number to the outer 
//// outer function (counter, counterArrow) and counting down from
//// that number with a user passed in factor. Each time counter is 
//// called, where it would normally keep passing in the origNum, it 
//// is instead returning the inner function (increment), holding
//// onto the value of the new num (num - fac) for the next call.

//// (2)
const counterArrow = (fac, num) => (incrementArrow = () => num = num - fac)  => incrementArrow()

const origNum = 10 // starting number to begin counting down from
let factor = 1 // rate at which to count down
let timesToRun = 10 // amount of times to log the function using the for loop below
let shotCaller = counter(factor, origNum) // call the function declaration function (1)
let shotCallerArrow = counterArrow(factor, origNum) //call the function expression - arrow (2)

//// (1)
function counter(fac, num) {
    function increment() {
        num = num - fac
        return num
    }
    return increment;
}

////TESTING AND LOGGING:

console.log(`Program will run ${timesToRun} times.`)
console.log(`The left column is the counter function, the right column is the counterArrow function:`)
for (i = 1; i < (timesToRun + 1); i++) {
    console.log(shotCaller(), shotCallerArrow())
}

// console.log(shotCallerArrow())
// console.log(shotCallerArrow())
// console.log(shotCallerArrow())