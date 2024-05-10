let arr = [153, 123, 432, 435, 894];

for(let num of arr){
    console.log(`Sum of digits of ${num} is ${sumOfDigits(num)}`);

    if(num === armStrong(num)) console.log(`${num} is an Armstrong number`);
    else console.log(`${num} is not an Armstrong number`);

    if(isPrime(num)) {
        console.log(`${num} is a prime number`);
        
    }
    else console.log(`${num} is not a prime number`);

    console.log(`Factors of ${num} are ${factors(num)}`);

    console.log("############################");

}


    

function sumOfDigits(num){
    let sum=0;
    while(num!=0){
        sum = sum + num%10;
        num = Math.floor(num/10);
    }

    return sum;
}

function armStrong(num){
    let sum=0;
    while(num!=0){
        sum = sum + Math.pow(num%10,3);
        num = Math.floor(num/10);
    }

    return sum;
}

function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0) return false;
    }
    return true;
}

function factors(num){
    let arr = [];
    for(let i=1;i<=num;i++){
        if(num%i===0) arr.push(i);
    }
    return arr;
}