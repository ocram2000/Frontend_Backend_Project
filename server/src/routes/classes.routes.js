const { Router } = require('express')

const router = Router()

const classescontroler = require('../controllers/classes.controller.js')

router.get('/', classescontroler.getClasses);

router.post('/', classescontroler.createClasses);

router.get('/:id', classescontroler.getClass);

router.put('/:id', classescontroler.editClasses);

router.delete('/:id', classescontroler.deleteClasses);


module.exports = router