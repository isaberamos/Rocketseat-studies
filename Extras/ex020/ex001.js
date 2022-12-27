// Create a function which returns the number of true values there are in an array.

function countTrue(countArray) {
    let count = 0
    for(let i = 0; i < countArray.length; i++) {
        if(countArray[i] === true) {
            count++;
        }
    }
    return count
}

console.log(countTrue([true, false, true]))