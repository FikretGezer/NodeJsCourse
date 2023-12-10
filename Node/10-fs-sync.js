const {readFileSync, writeFileSync} = require('fs');

console.clear();
console.log("Sync ops are starting...");

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);


/*flag helps to overwrite or do something before writing a data into an file -> LOOK AT DOCS about Flag*/
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a+'});
console.log("Sync ops are ended");
console.log("Starting the next one");

// const newFile = readFileSync('./content/result-sync.txt', 'utf-8');
// console.log(newFile);