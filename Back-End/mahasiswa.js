const Mahasiswa = require('./connect.js');

exports.bodyParser = require('body-parser'); // parser middleware


exports.getIndex = async (req,res) => {
    res.sendFile(__dirname + '/index.html');
}

exports.getInsert = async (req,res) => {
    res.sendFile(__dirname + '/insert.html');
}

exports.Insert = async (req,res) => {
    var mahasiswa = new Mahasiswa({
        nim: req.body.nim,
        nama: req.body.nama
    })
    mahasiswa.save()
    res.redirect('/')
}

exports.deleteMahasiswa = async (req,res) => {
    Mahasiswa.remove({nim: req.body.nim}).then(res => {
        if(res){
            console.log('User Delete')
        } else {
            console.log('eweuh ngab')
        }
    }).catch(res =>{
        console.log('Error')
    });
}

exports.updateMahasiswa = async (req,res) => {
    Mahasiswa.findOneAndUpdate({nim: req.body.nim}).then(res => {
        console.log('User Updated')
    }).catch(err => {
        console.log(err)
    })
}

exports.showMahasiswa= async (req,res) => {
    Mahasiswa.find().then(res => {
        console.log('Show')
    }).catch(err => {
        console.log(err)
    })
}