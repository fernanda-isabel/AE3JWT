const { Router } = require('express');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { validarRolDocente } = require('../middleware/validar-rol-docente');

const { 
    getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID,
    uploadImageByID,
    getImageByID
} = require('../controllers/inventario');


const router = Router()

router.get('/', [ validarJWT, validarRolDocente ], getInventarios)

router.post('/', [ validarJWT, validarRolAdmin ], createInventario)

router.get('/:id', getInventarioByID)

router.put('/:id', updateInventarioByID)

router.delete('/:id', deleteInventarioByID)


router.post('/:id/images', uploadImageByID);


router.get('/:id/images', getImageByID);

module.exports = router;