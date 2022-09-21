const express = require('express') //Download npm install express
const app = express();


const validate = require('./validate.js') //Download express-validator
const mahasiswaController = require('./mahasiswa.js')
port = 3000

app.use(mahasiswaController.bodyParser.urlencoded({ extended: false }));

// GET HTML
app.get('/', mahasiswaController.getIndex)
app.get('/get-insert', mahasiswaController.getInsert)
app.get('/find', mahasiswaController.getMahasiswa)

// POST TO DATABASE CRUD
app.post('/api/insert', validate.insertMahasiswaValidate, mahasiswaController.Insert)
app.post('/api/delete/:id', mahasiswaController.deleteMahasiswa)
app.put('/api/update/:id', mahasiswaController.updateMahasiswa)
app.get('/api/show', mahasiswaController.showMahasiswa)

app.listen(port, () => console.log(`This app is listening on port ${port}`));