const {Router} = require('express');
const { getUsuarios, postUsuarios, deleteUsuarios, putUsuarios, patchUsuarios } = require('../controllers/usuario.controller.js');
const {check} = require ('express-validator');
const { validateDocuments } = require('../middlewares/validate.documentos.js');
const { isValidRole, emailExiste, userExistsById } = require('../helpers/db.validators.js');
const { validateJWT } = require('../middlewares/validate.JWT.js');
const { isAdminRole } = require('../middlewares/validate.Role.js');


const router = Router();

router.get("/", getUsuarios);


router.post("/", [
    check('nombre', 'El Nombre no es valido').not().isEmpty(),
    check('password', 'El password debe ser minimo de 6 letras').isLength({min: 6}),
    // validator si emailExiste
    check('email').custom(emailExiste),
    // check('rol', 'No es un rol valido').isIn(['ADMIN','USER']),
    check('rol').custom(isValidRole),
    validateDocuments

], postUsuarios);

router.delete("/:id", [
    validateJWT,

    isAdminRole,

    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(userExistsById),
    validateDocuments
], deleteUsuarios);


router.put("/:id", [
    // validacion de que fuera un formato MONGODB valido
    check('id', 'No es un ObjectID MongoDB valido').isMongoId(),
    // validacion de que fuera un usuario existente
    check('id').custom(userExistsById),
    // Validacion de coincidencia de roles
    check ('rol').custom(isValidRole),
    validateDocuments
],putUsuarios);


router.patch("/", patchUsuarios);




module.exports = router;