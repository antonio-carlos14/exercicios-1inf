const cliente="Bianca Ferreira"
const medicamento="Analgésico Dorfin"
const preco= 15
const quantidade= 10
const estoque= 20
const valorPago= 150
const subtotal= 150
let estoqueDisponivel= 20
const valorDesconto= 20
const desconto= 20
const valorFinal= 130

let pagamentoStatus= "aguardando"
let statusVenda= "aguardando"
let descontoStatus= "aguardando"

if (quantidade >= 10) {
    console.log("estoque suficiene")
    estoqueDisponivel = "Estoque suficiente"
} else {
    console.log("estoque insuficiente")
    estoqueDisponivel = "Estoque insuficiente"
}

 if(subtotal >= 100)  {
     console.log("desconto aplicado")
     descontoStatus = "Desconto aplicado"
} else {
    console.log("sem desconto")
    descontoStatus = "Sem desconto"
}

if (valorPago >= valorFinal ) {
    console.log("pagamento aprovado")
    pagamentoStatus = "Pagamento aprovado"
} else {
    console.log("pagamento insulficiente")
    pagamentoStatus = "Pagamento insuficiente"
}

let troco=(valorPago-valorFinal)

if (valorPago >= valorFinal) {
    console.log("20")
    troco = 20
} else {
    console.log("0")
}
console.log(valorPago)
console.log(estoqueDisponivel)

if (estoque >= 20 && valorPago >= 150) {
    console.log("Venda confirmada")
    statusVenda = "Venda confirmada"
} else if (estoque >= 20 && valorPago < 150) {
    console.log("Venda pendente de pagamento")
    statusVenda ="Venda pendente de pagamento"
} else if (estoque < 20) {
    console.log("Venda não pode ser confirmada por falta de estoque")
    statusVenda = "Venda não pode ser confirmada por falta de estoque"
}

const resumo =`=====================
     SISTEMA DE VENDAS EM FARMÁCIA
===================================

cliente: ${cliente}
medicamento: ${medicamento}
preco: ${preco}
quantidade: ${quantidade}
estoqueDisponivel: ${estoqueDisponivel}
valorPago: ${valorPago}
descontoStatus: ${descontoStatus}
valorDesconto: ${valorDesconto}
valorFinal: ${valorFinal}
subtotal: ${subtotal}
statusVenda: ${statusVenda}
pagamentoStatus: ${pagamentoStatus}
troco: ${troco}
`
console.log(resumo)

module.exports = {
    cliente,
    medicamento,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
    resumo
}
