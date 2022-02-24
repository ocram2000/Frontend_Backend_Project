const { Router } = require('express')

const router = Router()

const evaluationcontroller = require('../controllers/evaluation.controller.js')

router.get('/', evaluationcontroller.getEvaluations);

router.post('/', evaluationcontroller.createEvaluations);

router.get('/:id', evaluationcontroller.getEvaluation);

router.put('/:id', evaluationcontroller.editEvaluation);

router.delete('/:id', evaluationcontroller.deleteEvaluation);


module.exports = router