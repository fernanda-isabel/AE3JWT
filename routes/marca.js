const { Router } = require('express');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { 
    createMarca, 
    getMarcas, 
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}= require('../controllers/marca')

const router = Router()

router.post('/', [ validarJWT, validarRolAdmin ], createMarca)

router.get('/', [ validarJWT, validarRolAdmin ], getMarcas)

router.get('/:id', getMarcaByID)

router.put('/:id', updateMarcaByID)

router.delete('/:id', deleteMarcaByID)

module.exports = router;
