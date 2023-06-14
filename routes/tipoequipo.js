const { Router } = require('express');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { 
    createTipoEquipo, 
    getTiposEquipo, 
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
} = require('../controllers/tipoEquipo')

const router = Router()

router.post('/', [ validarJWT, validarRolAdmin ], createTipoEquipo)


router.get('/', [ validarJWT, validarRolAdmin ], getTiposEquipo)


router.get('/:id', getTipoEquipoByID)


router.put('/:id', updateTipoEquipoByID)

router.delete('/:id', deleteTipoEquipoByID)

module.exports = router;
