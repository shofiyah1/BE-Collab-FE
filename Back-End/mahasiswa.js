const Mahasiswa = require('./connect.js');
const {validationResult} = require('express-validator');
exports.bodyParser = require('body-parser'); // parser middleware


exports.getIndex = async (req,res) => {
    res.sendFile(__dirname + '/index.html');
}

exports.getInsert = async (req,res) => {
    res.sendFile(__dirname + '/insert.html');
}

exports.getMahasiswa = async (req,res)=>{
    Mahasiswa.find()
        .then(mahasiswa => {
            res.send(mahasiswa)
        })
        .catch(err => {
            res.status(500).send({message : err.message || "Error while retriving mahasiswa information"})
        })
}

exports.Insert = async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    } else {
        var mahasiswa = new Mahasiswa({
            nim: req.body.nim,
            nama: req.body.nama
        })
        mahasiswa
            .save(mahasiswa)
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).json({
                    message : err.message || "Error while creating insert operation"
                })
            })
        res.redirect('/')
    }
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

exports.updateMahasiswa = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:'Data can not be empty'})
    }

    const id = req.params.id
    Mahasiswa.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found`})
            }else{
                res.send(data)
            }  
        })
        .catch(err => {
            res.status(500).send({message: "error update user information"})
        })
}

exports.showMahasiswa= async (req,res) => {
    Mahasiswa.find().then(res => {
        console.log('Show')
    }).catch(err => {
        console.log(err)
    })
}