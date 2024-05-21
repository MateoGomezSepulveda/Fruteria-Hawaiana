const {Router} = require('express');
const { getEmpanada, postEmpanada, putEmpanada, deleteEmpanada } = require('../controllers/empanada.controller');

const router = Router();

router.get('/', getEmpanada);
router.post('/', postEmpanada);
router.put('/', putEmpanada);
router.delete('/', deleteEmpanada);

module.exports = router;

