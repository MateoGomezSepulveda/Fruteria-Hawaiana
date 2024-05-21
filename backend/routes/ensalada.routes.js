const {Router} = require('express');
const { getEnsalada, postEnsalada, putEnsalada, deleteEnsalada } = require('../controllers/ensalada.controller.js');

const router = Router();

router.get('/', getEnsalada);
router.post('/', postEnsalada);
router.put('/', putEnsalada);
router.delete('/', deleteEnsalada);

module.exports = router;

