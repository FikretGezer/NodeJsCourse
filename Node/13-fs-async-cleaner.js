/* Promies Long Version
const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        });
    });
}

const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
};
start();
console.log("deneme");
*/
const {readFile, writeFile} = require('fs').promises;

const start = async() => {
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        console.log(`${first}, ${second}`);
        await writeFile('./content/result-mind-grenade.txt',`${first}, ${second}`);
    } catch (error) {
        console.log(error);
    }
}
start();