const gradescontroller = {}

const grades = require('../models/grades')

gradescontroller.getGrades = async (req, res) => {
    const grad = await grades.find()
    res.json(grad)
}

gradescontroller.createGrades = async (req, res) => {
    const newgrade = new grades(req.body)
    
    await newgrade.save()
    res.send({message: 'Grades created'})
}

gradescontroller.getGrade = async (req, res) => {
    const grad = await grades.findById(req.params.id)
    res.send(grad)
}

gradescontroller.editGrades = async (req, res) => {
    await grades.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Grades updated'})
}

gradescontroller.deleteGrades = async (req, res) => {
    await grades.findByIdAndDelete(req.params.id)
    res.json({status : 'Grades deleted'})
}

module.exports = gradescontroller