const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.require = "O atibruto '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' é menor do que o limite min '{MIN}' "
mongoose.Error.messages.Number.max = "O '{VALUE}' é maio do que o limite maxímo '{MAX}' "
mongoose.Error.messages.String.enum = " '{VALUE}' não é válido para o atributo '{PATH}' "