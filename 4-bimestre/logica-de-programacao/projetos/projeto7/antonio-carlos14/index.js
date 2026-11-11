const prompt = require("prompt-sync")()


const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeProdutos = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 0; i < quantidadeProdutos; i++) {
  const nome = prompt(`Produto ${i + 1} - nome: `)
  const preco = Number(prompt(`Produto ${i + 1} - preço: `))
  const estoque = Number(prompt(`Produto ${i + 1} - estoque: `))

  catalogo.push({
    nome,
    preco,
    estoque
  })
}


const nomeReajuste = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].nome === nomeReajuste) {
    catalogo[i].preco += aumento
  }
}


let produtoMaisCaro = catalogo[0].nome
let maiorPreco = catalogo[0].preco

for (let i = 1; i < catalogo.length; i++) {
  if (catalogo[i].preco > maiorPreco) {
    maiorPreco = catalogo[i].preco
    produtoMaisCaro = catalogo[i].nome
  }
}


let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
  estoqueTotal += catalogo[i].estoque
}


let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].estoque <= limiteEstoqueBaixo) {
    produtosComEstoqueBaixo++
  }
}


const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(`
📦 Resumo do Catálogo
------------------------------
Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}
`)


module.exports = {
  catalogo,
  limiteEstoqueBaixo,
  produtoMaisCaro,
  estoqueTotal,
  produtosComEstoqueBaixo,
  resumo,
}
