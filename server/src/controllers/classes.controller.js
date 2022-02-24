const classcontroler = {}

const classe = require('../models/classes')

classcontroler.getClasses = async (req, res) => {
    const classes = await classe.find()
    res.json(classes)
}

classcontroler.createClasses = async (req, res) => {
    const newclasse = new classe(req.body)
    
    await newclasse.save()
    res.send({message: 'Class created'})
}

classcontroler.getClass = async (req, res) => {
    const clas = await classe.findById(req.params.id)
    res.send(clas)
}

classcontroler.editClasses = async (req, res) => {
    await classe.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Class updated'})
}

classcontroler.deleteClasses = async (req, res) => {
    await classe.findByIdAndDelete(req.params.id)
    res.json({status : 'Class deleted'})
}

module.exports = classcontroler