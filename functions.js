const fs = require('fs');

studentList = [];

const create = (student) => {
    toList();
    let st = {
        name: student.name,
        math: student.math,
        arts: student.arts,
        programming: student.programming
    };

    let duplicate = studentList.find(nom => nom.name == student.name);
    if(!duplicate){

        studentList.push(st);
        console.log('Student List');
        console.log(studentList);
        save();
    }else{
        console.log('There is already a student with that name');
    }

}

const toList = () => {
    try {
        studentList = require('./studentList');
    } catch (error) {
        studentList = [];
    }
}

const save = () => {
    let data = JSON.stringify(studentList);
    fs.writeFile('studentList.json', data, (err) => {
        if (err) throw (err);
        console.log('File created successfuly')
    })
}

module.exports = {
    create
}