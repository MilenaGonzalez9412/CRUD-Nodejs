const {
    argv
} = require('./yargs');
const functions = require('./functions');

console.log(argv);
console.log('Position 0 ' + argv._[0]);

let comando = argv._[0];

if (argv._[0] == 'create') {
    functions.create(argv);
}