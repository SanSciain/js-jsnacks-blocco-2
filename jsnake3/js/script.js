
let userNumber;
const resultList = [];

do {
    userNumber = parseInt(prompt ("Inserire un numero"));
} while (isNaN(userNumber));

for (let i=1;i<=userNumber;i++){
    resultList.push(Math.pow(i,3));
}

console.log(resultList);