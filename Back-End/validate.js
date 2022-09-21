const {body} = require('express-validator');
const Mahasiswa = require('./connect.js')

exports.insertMahasiswaValidate = [
    body('nim').isLength({min:9}).withMessage('NIM harus terdiri dari 9 angka')
    .isInt().withMessage('NIM harus angka').bail().trim().escape()
    .custom(value => {
        return Mahasiswa.findOne(value,(req,res)=>{
            
        })
    })
]