const jwt = require('jsonwebtoken');

// ============================
// Verificar Token
// ============================

//el next para que continue la funcion que la llama
let verificaToken = (req, res, next) => {

    //leer el header
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });



};

module.exports = {
    verificaToken
}