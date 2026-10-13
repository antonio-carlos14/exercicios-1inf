const cliente = "Juliana Prado"
const opcaoMenu = 2
const quantidade = 2
const formaPagamento = "dinheiro"
const statusPedido = "enviado"

let prato = "Aguardando"
let precoUnitario = 0

switch (opcaoMenu) {
    case 1:
        prato = "Café"
        precoUnitario = 6
        break
    case 2:
        prato = "Cappuccino"
        precoUnitario = 12
        break
    case 3:
        prato = "Bolo"
        precoUnitario = 15
        break
    case 4:
        prato = "Sanduíche"
        precoUnitario = 20
        break
    default:
        prato = "Opção inválida"
        precoUnitario = 0
}

const subtotal = precoUnitario * quantidade

const freteStatus = subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 80 ? 0 : 8

let pagamentoMensagem = "Aguardando"
let descontoPercentual = 0

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
}

switch (formaPagamento) {
    case "cartao":
    case "dinheiro":
        descontoPercentual = 10
        break
    case "pix":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
}

const desconto = (subtotal * descontoPercentual) / 100
const total = subtotal - desconto + frete

let situacaoPedido = "Aguardando"

switch (statusPedido) {
    case "pendente":
        situacaoPedido = "Aguardando pagamento"
        break
    case "aprovado":
        situacaoPedido = "Pedido em preparo"
        break
    case "enviado":
        situacaoPedido = "Pedido a caminho"
        break
    case "cancelado":
        situacaoPedido = "Pedido cancelado"
        break
    default:
        situacaoPedido = "Status desconhecido"
}

const statusMensagem = situacaoPedido

const resumo = `
cliente: ${cliente}
opcaoMenu: ${opcaoMenu}
quantidade: ${quantidade}
formaPagamento: ${formaPagamento}
statusPedido: ${statusPedido}
prato: ${prato}
precoUnitario: ${precoUnitario}
subtotal: ${subtotal}
freteStatus: ${freteStatus}
frete: ${frete}
pagamentoMensagem: ${pagamentoMensagem}
descontoPercentual: ${descontoPercentual}
desconto: ${desconto}
total: ${total}
statusMensagem: ${statusMensagem}
`

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}