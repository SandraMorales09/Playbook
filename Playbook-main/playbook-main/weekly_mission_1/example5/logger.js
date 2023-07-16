class Logger {
    constructor(name) {
        // Al crear este objeto se guardaran estos valores
        this.count = 0
        this.name = name
    }

    log(message) {
        this.count = 0
        this.name = name
    }
}

module.exports = new Logger('DEFAULT') //Instanciacion del objeto y se eporta