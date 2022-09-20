const express = require('express') //Download npm install express
const app = express();


const {check, validate} = require('express-validator') //Download express-validator
const mahasiswaController = require('./mahasiswa.js')
port = 3000

app.use(mahasiswaController.bodyParser.urlencoded({ extended: false }));

// GET HTML
app.get('/', mahasiswaController.getIndex)
app.get('/insert', mahasiswaController.getInsert)

// POST TO DATABASE CRUD
app.post('/insert', mahasiswaController.Insert)
app.post('/delete', mahasiswaController.deleteMahasiswa)
app.post('/update', mahasiswaController.update)
app.get('/show', mahasiswaController.showMahasiswa)

app.listen(port, () => console.log(`This app is listening on port ${port}`));