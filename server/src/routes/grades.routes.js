const { Router } = require('express')

const router = Router()

const gradescontroller = require('../controllers/grades.controller.js')

router.get('/', gradescontroller.getGrades);

router.post('/', gradescontroller.createGrades);

router.get('/:id', gradescontroller.getGrade);

router.put('/:id', gradescontroller.editGrades);

router.delete('/:id', gradescontroller.deleteGrades);


module.exports = router