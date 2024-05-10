let arr = [2, 7, 10, 11, 23, 45, 21];

function isEven(num){
    if(num%2==0) return true;
    return false;
}

for (let num of arr){
    if(isEven(num)) console.log(`${num} is even`);
    else console.log(`${num} is odd`);
}