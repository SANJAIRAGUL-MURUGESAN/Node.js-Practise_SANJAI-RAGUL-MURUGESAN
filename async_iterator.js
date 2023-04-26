const fs = require('fs')

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable1 = fs.createReadStream(
  'text.txt', {encoding: 'utf8'});
logChunks(readable1);


async function readableToString2(readable) {
  let result = '';
  for await (const chunk of readable) {
    result += chunk;
  }
  console.log(result);
}

const readable2 = fs.createReadStream('text.txt',{encoding: 'utf8'});
readableToString2(readable2)