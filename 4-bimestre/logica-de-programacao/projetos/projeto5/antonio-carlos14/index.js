const prompt = require("prompt-sync") ()

const nomeTurno = prompt("Digite seu turno: ")
let meta = Number(prompt("Digite a meta de produçâo"))
let producaoAtual = Number(prompt("Digite a produçâo inicial"))
const pecasPorCaixa = Number(prompt("Digite a quantidade de itens por caixa"))

const producaoInicial = producaoAtual

while (producaoAtual < meta) {
    console.log(`producao ${producaoAtual}`)
    producaoAtual++
}

const producaoFinal = producaoAtual

let producaoParaCaixas = producaoAtual
let caixasNecessarias = 0

if (producaoParaCaixas > 0) {
do {
    producaoParaCaixas = producaoParaCaixas - pecasPorCaixa
    caixasNecessarias++
} while (producaoParaCaixas > 0)
}

const situacaoMeta = producaoAtual >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `turno: ${nomeTurno} | Produção final: ${producaoFinal} | Caixas: ${caixasNecessarias} | situação: ${situacaoMeta}`

console.log("=====RESUMO DO TURNO=====")
console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}