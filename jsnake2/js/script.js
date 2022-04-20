
const nameList = ["Arturo", "Santi","Pino","Francesco","Saverio","Federica"];
const surnameList = ["Mastroeni","Giorgianni","Musso","Oppedisano","Cannata","Caravella"];
const resultList = [];

for (let i = 0; i < 3; i++) {
    let nameRandomNumber = Math.floor(Math.random() * (nameList.length - 1 + 1) );
    let surnameRandomNumber = Math.floor(Math.random() * (surnameList.length -1 + 1) );
    resultList.push( `${nameList[nameRandomNumber]} ${surnameList[surnameRandomNumber]}` );
}

console.log(resultList);