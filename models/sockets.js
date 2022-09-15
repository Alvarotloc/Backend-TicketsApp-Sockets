class Sockets {
    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection',(socket) => {
            console.log('Usuario conectado');
        })
    }

}

module.exports = Sockets;