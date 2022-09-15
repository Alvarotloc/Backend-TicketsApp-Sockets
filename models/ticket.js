const generarId = require('../utils/helpers');
class Ticket {
    constructor(number){
        this.id         = generarId();
        this.number     = number;
        this.escritorio = null;
        this.agente     = null;
    }
}

module.exports = Ticket;