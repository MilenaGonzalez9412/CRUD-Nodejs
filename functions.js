const fs = require("fs");

studentList = [];

const create = student => {
  toList();
  let st = {
    name: student.name,
    math: student.math,
    arts: student.arts,
    programming: student.programming
  };

  let duplicate = studentList.find(nom => nom.name == student.name);
  if (!duplicate) {
    studentList.push(st);
    console.log("Student List");
    console.log(studentList);
    save();
  } else {
    console.log("There is already a student with that name");
  }
};

const toList = () => {
  try {
    studentList = require("./studentList");
  } catch (error) {
    studentList = [];
  }
};

const save = () => {
  let data = JSON.stringify(studentList);
  fs.writeFile("studentList.json", data, err => {
    if (err) throw err;
    console.log("File created successfuly");
  });
};

const show = () => {
  toList();
  console.log("Students");
  studentList.forEach(student => {
    console.log("* " + student.name);
    console.log(" Notes: ");
    console.log(" Maths " + student.math);
    console.log(" Arts " + student.arts);
    console.log(" Programming " + student.programming);
  });
};

const showStudent = nam => {
  toList();
  // let student = studentList.find(search => search.name == nam);
  if (!student) {
    console.log("The student with the name to search does not exist");
  } else {
    console.log(student.name);
    console.log("Notes: ");
    console.log(" Maths " + student.math);
    console.log(" Arts " + student.arts);
    console.log(" Programming " + student.programming);
  }
};

const showStudentsWinMath = () => {
  toList();
  let winners = studentList.filter(winner => winner.math >= 3);

  if (winners.length == 0) {
    console.log("No student won maths");
  } else {
    winners.forEach(student => {
      console.log(student.name);
      console.log("Notes: ");
      console.log(" Maths " + student.math);
    });
  }
};

const showAverage = nam => {
  toList();
  let student = studentList.find(search => search.name == nam);
  if (!student) {
    console.log("The student with the name to search does not exist");
  } else {
    console.log(student.name);
    console.log(
      "The average of the notes of the student is: " +
        (student.math + student.arts + student.programming) / 3
    );
  }
};

const showWinners = () => {
  toList();
  let winners = studentList.filter(
    student => (student.math + student.arts + student.programming) / 3 >= 3
  );

  if (winners.length == 0) {
    console.log("No students won the year.");
  } else {
    console.log("The students who won the year are: ");
    winners.forEach(winner => {
      console.log(
        winner.name +
          "   Average: " +
          (winner.math + winner.arts + winner.programming) / 3
      );
    });
  }
};

const updateNote = (name, theme, calification) => {
  toList();
  let student = studentList.find(search => search.name == name);

  if (!student) {
    console.log("The student doesn't exist");
  } else {
    student[theme] = calification;
    save();
  }
};

const deleteStudent = name => {
  toList();
  let newList = studentList.filter(student => student.name != name);

  if (newList.length == studentList.length) {
    console.log("The student doesn't exist");
  } else {
    studentList = newList;
    save();
  }
};

module.exports = {
  create,
  show,
  showStudent,
  showStudentsWinMath,
  showAverage,
  showWinners,
  updateNote,
  deleteStudent
};
