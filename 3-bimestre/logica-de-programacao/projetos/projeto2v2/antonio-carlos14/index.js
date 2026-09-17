const cliente="Bianca Ferreira"
const medicamento="Analgésico Dorfin"
const preco="15"
const quantidade="10"
const estoque="20"
const valorPago="150"
const desconto="20"
const valorFinal="130"
const subtotal="150"
const statusVenda="Venda confirmada"
if (estoque >= 20) {
    console.log("Estoque sulficiente")
} else {
    console.log("Estoque insulficiente")
} if(subtotal >= 100 && desconto ==="20")  {
    console.log("Desconto aplicado:R$ 20")
} else {
    console.log("Sem desconto")
}
if (valorPago >= valorFinal ) {
    console.log("pagamento aprovado")
} else {
    console.log("pagamento insulficiente")
}
const troco=(valorPago-valorFinal)
if (subtotal)
