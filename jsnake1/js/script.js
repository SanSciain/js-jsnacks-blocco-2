// For
let sum=0;

for (let i=0; i<5;i++) {
    let number = parseInt(prompt("For: Inserire un numero"));
    sum += number;
}

console.log(sum);




// While

sum = 0;
let j = 0;

while (j<5) {
    let number = parseInt(prompt("While: Inserire un numero"));
    if (!isNaN(number)){
        sum += number;
        j++;
    }
}

console.log(sum);