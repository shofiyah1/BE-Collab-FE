const {check, validateresult} = require('express-validator');

exports.insertBarangValidate = [
    check('nim', 'NIM belum di insert').trim().escape()
    .matches('[0-9]').withMessage('NIM harus angka')
    .isLength({min:9}).withMessage('NIM harus terdiri dari 9 nomor'),
    check('')
]