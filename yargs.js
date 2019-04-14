const name = {
  demand: true,
  alias: "n"
};

const math = {
  demand: true,
  alias: "m"
};

const arts = {
  demand: true,
  alias: "a"
};

const programming = {
  demand: true,
  alias: "p"
};

const creation = {
  name,
  math,
  arts,
  programming
};

const student = {
  name
};

const update = {
  name,
  theme: {
    demand: true,
    alias: "t"
  },
  calification: {
    demand: true,
    alias: "c"
  }
};

const argv = require("yargs")
  .command("Create", "Create a new student in my DB", creation)
  .command("List", "Show the students")
  .command("SearchStudent", "Show the student to look", student)
  .command("ShowAverage", "Shows he average of the student´s notes.", student)
  .command("ShowWinnersMath", "Show the students who won math")
  .command("ShowWinners", "Show the students who have an average over 3.")
  .command("Update", "Update the note of a theme of a student", update)
  .command("Delete", "Delete an existing student", student)
  .argv;

module.exports = {
  argv
};
