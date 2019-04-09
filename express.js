var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello Wold');
// })

//Indica que express puede usar lo que hay en la carpeta public
app.use(express.static(__dirname + '/public'))

app.listen(5500);