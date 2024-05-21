const {Router} = require('express');
const { getDesayuno, postDesayuno, putDesayuno, deleteDesayuno } = require('../controllers/desayuno.controller');

const router = Router();

router.get('/', getDesayuno);
router.post('/', postDesayuno);
router.put('/', putDesayuno);
router.delete('/', deleteDesayuno);

module.exports = router;

