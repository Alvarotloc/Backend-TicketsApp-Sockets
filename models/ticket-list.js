const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.ultimoNumero = 0;

    this.pendientes = [];
    this.asignados = [];
  }

  get siguienteNumero() {
    this.ultimoNumero += 1;
    return this.ultimoNumero;
  }

  get ultimosOcho() {
    return this.asignados.slice(0, 8);
  }

  crearTicket() {
    const nuevoTicket = new Ticket(this.siguienteNumero);
    this.pendientes.push(nuevoTicket);
    return nuevoTicket;
  }

  asignarTicket(agente, escritorio) {
    if ([agente, escritorio].includes("")) return;
    if (this.pendientes.length === 0) return {error : 'No hay tickets en la cola'};

    const siguienteTicket = this.pendientes.shift();

    siguienteTicket.agente = agente;
    siguienteTicket.escritorio = escritorio;

    this.asignados.unshift(siguienteTicket);

    return siguienteTicket;
  }
}

module.exports = TicketList;
