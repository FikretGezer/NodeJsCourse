const path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log("File path: " + filePath);

const base = path.basename(filePath);
console.log("File name: " + base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log("Absolute path: " + absolute);