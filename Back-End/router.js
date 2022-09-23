const express = require('express') //Download npm install express
const app = express();


const validate = require('./validate.js') //Download express-validator
const mahasiswaController = require('./mahasiswa.js')
port = 3000

app.use(mahasiswaController.bodyParser.urlencoded({ extended: false }));

// GET HTML PAGE
// Index.html
app.get('/', mahasiswaController.getIndex)

// Insert.html
app.get('/insert', mahasiswaController.getInsert)

// *************************************************************************************
// ******************************POST TO DATABASE CRUD API******************************

// This function is called insert (Create Mahasiswa)
app.post('/api/mahasiswa', validate.insertMahasiswaValidate, mahasiswaController.Insert)

// This function is called update (Update Mahasiswa)
app.put('/api/mahasiswa/:id', mahasiswaController.updateMahasiswa)

// This function is called delete (Delete Mahasiswa)
app.delete('/api/mahasiswa/:id', mahasiswaController.deleteMahasiswa)

// This function is called data from database (Read Mahasiswa)
app.get('/api/mahasiswa', mahasiswaController.getMahasiswa)

// *************************************************************************************

app.listen(port, () => console.log(`This app is listening on port ${port}`));