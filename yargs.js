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

const showStudent = {
    name
}

const argv = require('yargs')
    .command('Create', 'Create a new student in my DB', creation)
    .command('List', 'Show the students')
    .command('SearchStudent', 'Show the student to look', showStudent)
    .argv;

module.exports = {
    argv
};