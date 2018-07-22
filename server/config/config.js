//==================================
//Puerto
//==================================
process.env.PORT = process.env.PORT || 3000;

//==================================
// Entorno
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================================
// Base de datos
//==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:vetetuasaber2@ds247191.mlab.com:47191/kafe';
}



process.env.URLDB = urlDB;