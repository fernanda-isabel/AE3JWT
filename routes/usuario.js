const { Router } = require('express');
const { validationResult, check } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');

const router = Router();

router.post('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('email', 'invalid.email').isEmail(),
    check('rol', 'invalid.rol').isIn(['ADMIN', 'DOCENTE']),
    check('contrasena', 'invalid.contrasena').not().isEmpty(),
    validarJWT, 
    validarRolAdmin
], async function(req, res) {
    try {
        console.log(req.body);

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array() });
        }

        const existeEmail = await Usuario.findOne({ email: req.body.email});
        if (existeEmail) {
            return res.status(400).json({ mensaje: 'Email ya existe'});
        } 

        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.rol = req.body.rol;

        const salt = bcrypt.genSaltSync();
        const contrasena = bcrypt.hashSync(req.body.contrasena, salt);
        usuario.contrasena = contrasena;

        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();

        usuario = await usuario.save();
        res.status(200).json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Internal server error'});
    }
});

router.get('/', [ validarJWT, validarRolAdmin ], async function(req, res) {
    try {

        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Internal server error'});
    }
});

module.exports = router;
