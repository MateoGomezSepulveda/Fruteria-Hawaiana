const {Router} = require('express');
const { getHelados, postHelados, putHelados, deleteHelados } = require('../controllers/helado.controller.js');

const router = Router();

router.get('/',getHelados );
router.post('/',postHelados );
router.put('/', putHelados);
router.delete('/', deleteHelados);

module.exports = router;

