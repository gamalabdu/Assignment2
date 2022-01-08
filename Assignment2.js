
// TEST ARRAYS
let array = [1,2,3,4,5]



// MYEACH
function myEach (arr,callback) {
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }
}


// console.log(myEach(array,(e) => e + 1))

// myEach(array,(e) => e + 1)

// console.log(array)

//MYMAP

function myMap(arr,callback) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]))
    }
    return newArray
}

console.log("This is myMap " + myMap(array,(e) => e + 2))


//FILTER

function myFilter (arr,callback) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log("This is myFilter " + myFilter(array, (e) => e % 2 === 0))


// SOME

function mySome (arr,callback) {

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            return true
        }
    }
        return false
} 

console.log("This is mySome true " + mySome(array,(e) => e < 5))
console.log("This is mySome false " + mySome(array,(e) => e > 10))

//EVERY

function myEvery (arr,callback) {

    for(let i = 0; i < arr.length; i++) {  //[1,2,3,4,5]
        if(!callback(arr[i]) === true) {      
            return false
        }
    }
        return true
} 

console.log("This is myEvery " + myEvery(array,(e) => e % 2 === 0))

// REDUCE 

function myReduce (arr,callback) {   // [1,2,3,4,5]

    let reduce = arr[0]

    for(let i = 1; i < arr.length; i++) {
        reduce = callback(arr[i], reduce)
    }
    return reduce
} 

console.log("This is myReduce " + myReduce(array,(x,y) => x * y) )

// INCLUDES

function myIncludes (arr,elem) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === elem) {
            return true
        }
    }
        return false
}

console.log("This is myIncludes " + myIncludes(array,6))


// INDEX OF

function myIndexOf (arr,elem) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === elem) {
            return i
        }
    }
        return -1
}

console.log("This is myIndexOf " + myIndexOf(array,3))

// PUSH

function myPush (arr,elem) {
    arr[arr.length] = elem
}

// myPush(array,6)

// console.log("This is myPush " + array)


// LAST INDEX OF

function myLastIndexOf (arr,elem) {

    for(let i = arr.length-1; i >= 0; i--) {
        if(arr[i] === elem) {
            return i
        }
    }
        return -1
}

let array2 = [1,2,3,4,5,5,5,6]

console.log("This is myLastIndexOf " + myLastIndexOf(array2,5))


// OBJECT KEYS

let obj1 = {
    "car" :"Tesla",
    speed : 100,
    price : 30000
}

function grabKeys (object) {

    let newArray = []
    for(item in object){
        newArray.push(item)
    }
    return newArray
}

console.log("This is grabKeys " + grabKeys(obj1))


// OBJECT VALUES

function grabValues (object) {

    let newArray = []
    for(item in object){
        newArray.push(object[item])
    }
    return newArray
}

console.log("This is grabValues " + grabValues(obj1))

// SUM OF RANGE

function myRange(start,end,step = 1) {

    let newArray = []

    for(let i = start; i <= end; i+= step) {
        newArray.push(i)
    }
        return newArray
}

console.log("This is myRange " + myRange(1,10))

function mySum (arr) {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

console.log("This is mySum with myRange " + mySum(myRange(1,10)))

// REVERSING ARRAY

let arr2 = [1,3,4,2,7]

function reverseArray(arr) {
    let newArray = []
    for(let i = arr.length - 1; i >= 0 ; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

function reverseArrayInPlace(arr) {

    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }

    return arr

}

console.log("This is reverseArrayInPlace " + reverseArrayInPlace(arr2))
console.log("This is reverseArray " + reverseArray(arr2))

// A LIST

let array4 = [1,2,7]

let testList = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

function arrayToList (arr) {
    let list = null;

    for( i = arr.length-1; i >= 0; i-- )
    list = { value: arr[i], rest: list };

  return list;
}

console.log("This is arrayToList" + arrayToList(array4))


function listToArray (list) {
    let newArray =[]
    let curr = list
    while(curr != null){
        newArray.push(curr.value)
        curr = curr.rest
    }
    return newArray
}

console.log("This is listToArray " + listToArray(testList))

function prepend(elem,list) {
    return {value: elem, rest: list}
}

console.log("This is prepend " + JSON.stringify(prepend("string",testList)))


function nth(curr,n) {

   return nthHelper(curr, 0, n)
    
}

function nthHelper(curr, start, n){
    if(start == n){
        return curr.value
    } else {
        return nthHelper(curr.rest, start + 1, n)
    }
}


console.log("This is nth " + nth(testList, 2))


// DEEP COMPARISON



function deepEqual(obj, obj2) {
    if(obj1.length != obj2.length){
        return false
    }
    for(item in obj){
        if(!(item in obj2)){
            return false;
        } else if(typeof(obj1[item]) === 'object'){
            if(!deepEqual(obj1[item], obj2[item])){
                return false;
            }
        } else if (obj1.value != obj2.value) {
            return false;
        }
    }

    return true
}


let obj = {here: {is: "an"}, object: 2};

console.log("This is deepEqual " + deepEqual(obj, obj));

// MOVE ZEROS

function moveZeroes(arr) {
    let switches = 0
    for(let i = 0; i < arr.length - switches; i++){
        if(arr[i] === 0){
            for(let j = i + 1; j <= arr.length; j++) {
                if(arr[j] !== 0){
                    arr[i] = arr[j]
                    arr[j] = 0
                    switches++
                    break
                }
            }
        }
        console.log(arr)
    }
}

let array5 = [0,1,0,3,12]
moveZeroes(array5)
console.log("This is moveZeroes " + array5)