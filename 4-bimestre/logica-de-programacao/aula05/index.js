const prompt = require('prompt-sync')()

const dias = Number(prompt('Quantos dias? '))
let totalProduzido = 0

for (let i = 1; i <= dias; i++) {
  const producaoDiaria = Number(prompt(`Produção do dia ${i}: `))
  totalProduzido += producaoDiaria
}

console.log (totalProduzido)

const resumo = {
    totalProduzido
}

module.exports = totalProduzido
