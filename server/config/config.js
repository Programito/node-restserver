//==================================
//Puerto
//==================================
process.env.PORT = process.env.PORT || 3000;

//==================================
// Entorno
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================================
// Vencimiento del Token
//==================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';

//==================================
// SEED de autentificacion
//==================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';




//==================================
// Base de datos
//==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}



process.env.URLDB = urlDB;


//==================================
// Google client ID
//==================================

process.env.CLIENT_ID = process.env.CLIENT_ID || "344495840272-os2ii0lem9ri9jq5siked0vshqrq5a68.apps.googleusercontent.com";