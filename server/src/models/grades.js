const { Schema, model } = require('mongoose')

const gradesSchema = new Schema({
    studentnumber : { type: Number, required: true},
    student: { type: String, required: true },
    classe: { type: String, required: true },
    course: { type: String, required: true },
    teste1: { type: Number, required: false },
    teste2: { type: Number, required: false },
    tp1: { type: Number, required: false },
    tp2: { type: Number, required: false },
    note: { type: String, require: false}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model("Grades", gradesSchema);