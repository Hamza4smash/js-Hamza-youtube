const name= "Hamza"
const repoCount= 299

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const jobFounded= new String('Backened-Developer-tester')
 
// console.log(jobFounded.__proto__);


// console.log(jobFounded.length);
// console.log(jobFounded.toUpperCase());
// console.log(jobFounded.charAt(7));
// console.log(jobFounded.indexOf('r'));

const newString= jobFounded.substring(0, 7)

// console.log(newString);

const differentString= jobFounded.slice(1,-7)
// console.log(differentString);

const newStringOne ="         Hamza        "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const link= "https://google.com/hithes%20choudhary"

// console.log(link.replace('%20','-'))
console.log(link.includes('google'))


console.log(jobFounded.split('-'));

const year=2026

console.log(`Aslaamualekum ${name} Mashallah you have mastered the Backend Develelopment v much in ${year}, Inshllah you will get good Job in Backened Development `)