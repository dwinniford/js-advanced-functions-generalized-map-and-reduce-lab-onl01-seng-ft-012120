// Add your functions here
function map(arr, fun) {
    const newArray = [] 
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fun(arr[i]))
    }
    return newArray
}

function reduce(arr, fun, startingValue) {
    let i 
    let total 
    if (startingValue) {
        total = startingValue 
        i = 0
    } else {
        total = arr[0]
        i = 1
    }
        
    for ( i; i < arr.length; i++) {
        total = fun(arr[i], total)
    }
    return total 
}