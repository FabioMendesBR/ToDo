const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacAddressValidation = require('../middlewares/MacAddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.delete('/:id',TaskController.delete);
router.put('/:id/:done',TaskController.done);

router.get('/:id',TaskController.show);
router.get('/filter/all',MacAddressValidation, TaskController.all);
router.get('/filter/late',MacAddressValidation, TaskController.late);





module.exports = router;
