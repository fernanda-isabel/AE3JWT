const { Router } = require('express');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { 
    createEstado, 
    getEstados, 
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require('../controllers/estado')

const router = Router()

router.post('/', [ validarJWT, validarRolAdmin ], createEstado)

router.get('/', [ validarJWT, validarRolAdmin ], getEstados)

router.get('/:id', getEstadoByID)

router.put('/:id', updateEstadoByID)

router.delete('/:id', deleteEstadoByID)

module.exports = router;

