const prompt = require("prompt-sync")()


const subtotal = Number(prompt("Subtotal do pedido: "))
const frete = calcularFrete(subtotal)

function calcularFrete(subtotal) {
  if (subtotal >= 80) {
    return 0
  }

  return 10
}



console.log(frete)

module.exports = frete
