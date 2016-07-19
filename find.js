// Rescatando el argumento que es
// pasado al script
var ageArg = +process.argv[2];

// Conectarnos a la BD
// 1. Cargar el driver en nuestro script
var mongodb = require('mongodb');

// 2. El driver de MongoDB nos proporciona un cliente,
// por lo que lo extraemos de la libreria
var mongoClient = mongodb.MongoClient;

// 3. conectamos el cliente con la BD
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function (err,db) {
    // verificando si hubi un error en la conexion
    if(err){
        console.log("> Error al conectarse a : "+ 'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // Obteniendo la coleccion
    var parrotsCollection = db.collection('parrots');
    // aplicando un query sobre la coleccion 
    var objetoResultado = parrotsCollection.find(
        {
            age : {$gt : ageArg}
        });
        //
    objetoResultado.toArray(function(err, docs){

        console.log(docs);
        db.close();

    });
});