const TicketList = require("./ticket-list");

class Sockets {
    constructor(io){
        this.io = io;
        this.socketEvents();

        this.ticketList = new TicketList();
    }

    socketEvents(){
        this.io.on('connection',(socket) => {
            console.log('Usuario conectado');

            socket.on('generar-ticket',(data,callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket);
            })
        })
    }

}

module.exports = Sockets;