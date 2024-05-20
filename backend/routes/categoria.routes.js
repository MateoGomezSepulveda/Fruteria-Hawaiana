const {Router} = require('express');
const {check} = require('express-validator');
const { postCategorias, getCategorias, getCategoria, putCategorias, deleteCategoria} = require('../controllers/categoria.controller.js');
const { validateDocuments } = require('../middlewares/validate.documentos.js');
const { validateJWT } = require('../middlewares/validate.JWT.js');
const { findCategoryById } = require('../helpers/db.validators.js');
const { isAdminRole } = require('../middlewares/validate.Role.js');

const router = Router();

router.get('/', getCategorias)


router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(findCategoryById),
    validateDocuments,
],getCategoria)



router.post('/', [
    validateJWT,
    check('nombre','El Nombre es obligatorio').not().isEmpty(),
    validateDocuments
], postCategorias);


router.put('/:id', [
    validateJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(findCategoryById),
    validateDocuments,
],putCategorias)

router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findCategoryById ),
    validateDocuments,
],deleteCategoria)

module.exports = router;

