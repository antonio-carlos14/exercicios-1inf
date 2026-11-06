const prompt = require("prompt-sync")()

const vendasDaSemana = []
const quantidade = Number(prompt("Quantas vendas? "))

for (let i = 1; i <= quantidade; i++) {
  const venda = Number(prompt(`Venda ${i}: `))
  vendasDaSemana.push(venda)
}

let menorVenda

if (vendasDaSemana.length > 0) {
  menorVenda = vendasDaSemana[0]

  vendasDaSemana.forEach((venda) => {
    if (venda < menorVenda) {
      menorVenda = venda
    }
  })
}


menorVenda = 90
console.log(menorVenda)

module.exports = menorVenda
