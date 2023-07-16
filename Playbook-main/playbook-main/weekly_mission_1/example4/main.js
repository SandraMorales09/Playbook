const Logger = requiere('./logger') // Invocas el modulo que contiene la clase

//Creacion de un objeto
const dblogger = new Logger('DB') // Creas un objeto nuevo, esto llama por dafault el constructor de la clase
    // Invocacion del metodo
dblogger.info('This is an informational message')

// Creacion de otro objeto
const accessLogger = new Logger('ACCES')
accessLogger.verbose('This is a verbose message')