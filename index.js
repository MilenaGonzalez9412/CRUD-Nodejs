const {
    argv
} = require('./yargs');
const functions = require('./functions');

// console.log(argv);
// console.log('Position 0 ' + argv._[0]);

let command = argv._[0];

switch (command) {
    case 'Create':
        functions.create(argv);
        break

    case 'List':
        functions.show();
        break

    case 'SearchStudent':
        functions.showStudent(argv.name);
        break

    case 'ShowMath':
        functions.showStudentsWinMath();
        break

    default:
        console.log('You did not enter an existing action');
}