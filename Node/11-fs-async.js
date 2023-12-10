const {readFile, writeFile} = require('fs');
console.clear();
console.log('async ops are starting...');
readFile('./content/first.txt','utf8',(err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err, result) => {
        if(err)
        {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the async: ${first}, ${second}`,(err,result) => {
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(result);
            console.log('async ops are ended...');
        });
    });
});
console.log('Starting to the next one');
