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

const argv = require('yargs')
    .command('create', 'Create a new student in my DB', creation)
    .argv;

module.exports = {
    argv
};

console.log(creation);