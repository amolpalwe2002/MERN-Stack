const arr = [4, 8, 2, 11, 6, 7, 10];



const maxItem = function(arr) {
    let max = arr[0];
    for(let num of arr){
        if(num> max) max = num;
    }
    return max;
}

const sumOfItems = (arr) => {
    let sum = 0;
    for(let num of arr){
        sum = sum + num;
    }
    return sum;
}

const countOddItems = (arr) => {
    let count = 0;
    for(let num of arr){
        if(num%2 !== 0) count++;
    }
    return count;
}


console.log(`Max item is ${maxItem(arr)}`);
console.log(`Sum of items is ${sumOfItems(arr)}`);
console.log(`Count of odd items is ${countOddItems(arr)}`);