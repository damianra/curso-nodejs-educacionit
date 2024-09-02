import {
    app,
    PORT
} from './controller.mjs'

const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

server.on('error', error => console.log('Error en servidor ' + error.message ))