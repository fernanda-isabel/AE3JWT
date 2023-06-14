const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb://Fernanda:root@ac-5509ztc-shard-00-00.fzkpqz2.mongodb.net:27017,ac-5509ztc-shard-00-01.fzkpqz2.mongodb.net:27017,ac-5509ztc-shard-00-02.fzkpqz2.mongodb.net:27017/?ssl=true&replicaSet=atlas-okn6kh-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(url);
        console.log('Conexion exitosa');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error de conexion a la BD');

    }
}

module.exports = {
    getConnection,
}