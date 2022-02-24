const evaluationcontroller = {}

const evaluation = require('../models/evaluation')

evaluationcontroller.getEvaluations = async (req, res) => {
    const eval = await evaluation.find()
    res.json(eval)
}

evaluationcontroller.createEvaluations = async (req, res) => {
    const newevaluation = new evaluation(req.body)
    
    await newevaluation.save()
    res.send({message: 'Evaluation created'})
}

evaluationcontroller.getEvaluation = async (req, res) => {
    const eval = await evaluation.findById(req.params.id)
    res.send(eval)
}

evaluationcontroller.editEvaluation = async (req, res) => {
    await evaluation.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Evaluation updated'})
}

evaluationcontroller.deleteEvaluation = async (req, res) => {
    await evaluation.findByIdAndDelete(req.params.id)
    res.json({status : 'Evaluation deleted'})
}

module.exports = evaluationcontroller