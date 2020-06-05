const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
//const cors = require('cors');

const app = express();
app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());
// outra opção para representar os objetos em JSON
//app.use(express.json());
// app.use(cors);
app.use(require('./routes'));

app.listen(3001, ()=>{
    mongoose.connect('mongodb+srv://dbLogin:admin123@loginuser-xtzkr.mongodb.net/<dbname>?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, ()=>{
        console.log('conectado');
    });
});
