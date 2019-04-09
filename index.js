const {
    argv
} = require('./yargs');
const functions = require('./functions');

const express = require('express');
const app = express();


// console.log(argv);
// console.log('Position 0 ' + argv._[0]);
console.log('Argv:');
console.log(argv);

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

    case 'ShowAverage':
        functions.showAverage(argv.name);
        texto = ('The average of the notes of the student '+ argv.name + ' is: ' +  functions.showAverage(argv.name));
        break

    default:
        console.log('You did not enter an existing action');
}


app.get('/', function (req, res) {
    res.send(texto);
})

app.listen(3000);