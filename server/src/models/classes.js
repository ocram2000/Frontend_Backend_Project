const { Schema, model} = require('mongoose')

const classesSchema = new Schema({
    name : {type: String, required: true},
    course : {type: String, required: true},
    year : {type: Number, required: true},
    note : {type: String, required: false}
}, {
    timestamps : true, 
    versionKey : false
})

module.exports = model("Classes", classesSchema);