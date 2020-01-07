var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    description:{
        type: String,
        default:''
    },
    date:{
        type:Date
    },
    taskStatus:{
        type:Boolean,
        default:false
    }
});

module.exports = schema;