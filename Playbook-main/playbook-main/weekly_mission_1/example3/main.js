/*
  nose main.js
*/

const logger1 = requiere('./logger_1')
const logger2 = requiere('.logger_2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')