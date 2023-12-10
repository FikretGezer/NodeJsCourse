const {createReadStream} = require('fs');

const stream = createReadStream('./content/first.txt', {
    highWaterMark: 9000,
});

stream.on('data',(result) => {
    console.log(result);
});
stream.on('error', error => {
    console.log(error);
});