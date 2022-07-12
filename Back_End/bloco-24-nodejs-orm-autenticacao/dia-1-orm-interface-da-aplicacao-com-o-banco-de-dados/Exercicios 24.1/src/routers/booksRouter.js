const { Router } = require('express');

const bookController = require('../controllers/bookController');

const router = Router();

router.get('/', bookController.list);
router.post('/', bookController.create);
router.get('/:id', bookController.findById);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);



module.exports = router;