const { Schema, model} = require('mongoose')

const evaluationSchema = new Schema({
    teste1 : {type: String, required: false},
    perct1 : {type : Number, required: false},
    teste2 : {type: String, required: false},
    perct2 : {type : Number, required: false},
    tp1 : {type: String, required: false},
    perctp1 : {type : Number, required: false},
    tp2 : {type: String, required: false},
    perctp2 : {type : Number, required: false},
    classe : {type : String, required: true},
    course : {type :String, required: true}

}, {
    timestamps : true, 
    versionKey : false
})

module.exports = model("Evaluation", evaluationSchema);