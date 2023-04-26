const util = require('util')
const stream = require('stream')
const fs = require('fs')
const once = require('events')

// Paused Mode

const finished = util.promisify(stream.finished); // (A)

async function writeIterableToFile(iterable, filePath) {
  const writable = fs.createWriteStream(filePath, {encoding: 'utf8'});
  for await (const chunk of iterable) {
    if (!writable.write(chunk)) { // (B)
      // Handle backpressure
      await once(writable, 'drain');
    }
  }
  writable.end(); // (C)
  // Wait until done. Throws if there are errors.
  await finished(writable);
}

writeIterableToFile(
  ['One', ' line of texsst.\n'], 'text.txt');
