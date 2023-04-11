// Write a function that takes in a string and returns it when reversed
//quiz1
let food = "eating"
console.log(food.split())

//quiz2
// Write a function that takes in the following array and consoles the target if it is found else
// null
function merge(num){
    if(num.length<=1){
    return num;
    }

    let middle=Math.floor(num.length-1)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
sort(merge(left),merge(right))

}
function sort(left,right){
    newNums=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
        newNums.push(left.shift())
        }
        else{
            newNums.push(right.shift())
        }
    }
    return [...newNums,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(num)


function binaryS(num,target){
let left=0;
let right=num.length-1

while (left<right){
    let middle=Math.floor(left+right/2)
    if(num[middle]===target){
        return middle
    }
    else if(num[middle]<target){
        left=middle+1
    }
else{
    right=middle-1
}
}
return null
}
target = 23
console.log(binaryS(num,target))


// 3. Given years between 2000 and 2023, console all the leap years in the following
//quiz4
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

// for (let t = 0; t < numbers.length; t++) {0
//     t===100
//     if(0>100/3){
//         let b="fizz"
//         console.log(b)
//     }
//     else if(0>100/3){
//     "buzz"
// }
// else{
//     "fizzBuzz"
// }
// }
//quiz5
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
let newNums=[]
for (let r = 0; r < numArray.length; r++) {
    console.log(numArray[r]*4)
}