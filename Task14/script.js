const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2==0) reject(`${num1}/${num2} = Cannot divide by zero`);
        else resolve(`${num1}/${num2} = ${(num1/num2).toFixed(2)}`);
    })
}

const arr = [2, 5, 3, 4, 0];

arr.forEach((num) => {
    divide(10, num)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
})

