#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const paths = {
  "plugins" : {
    "main" : "./lib/modules",
    "handlers" : "${main}/handlers",
    "handlers" : "${main}/utils"
  },
  "tests" : "./test"
}

var args = process.argv.slice(2);
// console.log('Arguments: ', args[0]);

console.log(`hello ${args}, how are you doing`);

fs.rename(__dirname + '/templates/package.json', __dirname + '/lib/modules/' + `${args}.json`, function (err) {
  if (err) throw err;
  console.log('Move complete.');
});
// fs.createReadStream(__dirname + '/templates/package.json').pipe(fs.createWriteStream(path.resolve(__dirname, 'templates/test.json')));
