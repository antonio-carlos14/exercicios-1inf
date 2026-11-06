const prompt = require("prompt-sync") ()

const produto = {
    nome: prompt("Nome o produto: "),
    preco: Number(prompt("Preço do produto: ")),
    estoque: Number(prompt("Estoque disponível: ")),
    aumento: Number(prompt("Aumento do preço: ")),
}
produto.preco = produto.preco + aumento

console.log(produto.preco)

module.export = produto
