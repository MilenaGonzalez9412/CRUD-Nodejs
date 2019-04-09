<h3>CRUD node js</h3>

You can create a json file with student's information.

To run the proyect you have to enter to the file and run the command 'node index'

A student have the following atributes and alias as follows:<br>
<strong>Atribute: </strong> Name <strong> Alias: </strong>-n <br>
<strong>Atribute: </strong> Maths <strong> Alias: </strong>-m <br>
<strong>Atribute: </strong> Arts <strong> Alias: </strong>-a <br>
<strong>Atribute: </strong> Programming <strong> Alias: </strong>-p <br>

Using yargs, you have options to make different actions like create a student, to list them and show them according to a specific subject like the ones who won maths or search a student by his name. To do diferents options, you hav to run the following commands:

<ul>
<li>
    * To Create a student: 'node index Create -n Name -m MathNote -a ArtsNote -p ProgrammingNote'
</li>
<li>
    * To List the students: 'node index List
</li>
<li>
    * To Search a student by name: 'node index SearchStudent -n StudentName
</li>
<li>
    * To show the average of an student, given the name: 'node index ShowAverage -n StudentName 
</li>
<li>
    * To show the students who won math: 'node index ShowWinnersMath'
</li>
<li>
    * To show the students who have an average greater than or equal to 3: 'node index ShowWinners'
</li>
</ul>

