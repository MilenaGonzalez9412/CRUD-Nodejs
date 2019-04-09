const name = {
    demand: true,
    alias: 'n'
}

const math = {
    demand: true,
    alias: 'm'
}

const arts = {
    demand: true,
    alias: 'a'
}

const programming = {
    demand: true,
    alias: 'p'
}

const creation = {
    name,
    math,
    arts,
    programming
}

const student = {
    name
}


const argv = require('yargs')
    .command('Create', 'Create a new student in my DB', creation)
    .command('List', 'Show the students')
    .command('SearchStudent', 'Show the student to look', student)
    .command('ShowAverage', 'Shows he average of the student´s notes.', student)
    .argv;

module.exports = {
    argv
};