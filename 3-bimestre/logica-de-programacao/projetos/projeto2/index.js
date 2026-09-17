const cliente= "Lucas Almeida"
const produto= "Notebook Gamer"
const preco= 4500
const quantidade= 2
const estoque= 10
const estoqueDisponível= 2
const valorPago= 9000
const quantidadeSolicitada= 2
const valorDesconto= 900
const descontoPercentual= 20/100
const desconto= 900
const subtotal = preco * quantidade
console.log("9000")
if (quantidadeSolicitada  <= estoqueDisponível) {
    console.log("estoque disponivel")
    estoqueDisponível = "estoque disponível"
} else {
    console.log("estoque indisponível")
}
if (subtotal >= 1000) {
    console.log("desconto:20")
    valorDesconto = 20
} else {
    console.log("não recebe desconto")
}

let pagamentoStatus= "Aguardando"
let statusPedido= "Aguardando"

const valorFinal = (subtotal - descontoPercentual)
console.log("8100")
if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
    console.log("pagamento aprovado")
} else {
    console.log("pagamento insuficiente")
}
const troco= valorPago - valorFinal
if (troco > 0) {
    console.log(900)
} else {
    console.log(0)
}
if (estoqueDisponível >= quantidadeSolicitada) {
    statusPedido = "pedido disponível para finalização"
    console.log("Pedido disponível para finalização")
} else if (estoqueDisponível < quantidadeSolicitada) {
    console.log("Pedido não finalizado por falta de estoque")
}

const resumo=`
cliente= ${cliente}
produto= ${produto}
preco= ${preco}
quantidade= ${quantidade}
estoque= ${estoque}
valorPago= ${valorPago}
subtotal= ${subtotal}
estoqueDisponível= ${estoqueDisponível}
descontoPercentual= ${descontoPercentual}
valorDesconto= ${valorDesconto}
valorFinal= ${valorFinal}
pagamentoStatus= ${pagamentoStatus}
troco= ${troco}
statusPedido= ${statusPedido}
`
console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}