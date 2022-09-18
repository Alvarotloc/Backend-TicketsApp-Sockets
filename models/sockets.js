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
            });

            socket.on('asignar-tickets',({escritorio,nombre},callback) => {
                const ticketAsignado = this.ticketList.asignarTicket(nombre,escritorio);
                if(Object.keys(ticketAsignado)[0] !== 'error'){
                    this.io.emit('ultimos-tickets',this.ticketList.ultimosOcho)
                }
                callback(ticketAsignado);
            })
        })
    }

}

module.exports = Sockets;