const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const cors = require('cors');

const Sockets = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.server = http.createServer(this.app);

        this.io = socketIo(this.server);
    }

    middlewares(){
        this.app.use(cors());
    }

    configurarSockets(){
        new Sockets(this.io);
    }

    execute(){
        this.middlewares();

        this.configurarSockets();

        this.server.listen(this.port, () =>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;