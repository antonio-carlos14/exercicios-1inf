const prompt = require("prompt-sync")()

const quantidadeTurnos = Number(prompt("Quantos turnos? "))

let turnosAcimaDaMeta = 0

for (let turno = 1; turno <= quantidadeTurnos; turno++) {
  const pecas = Number(prompt(`Peças do turno ${turno}: `))

  if (pecas > 15) {
    turnosAcimaDaMeta = turnosAcimaDaMeta + 1
  }
}

console.log(turnosAcimaDaMeta)

module.exports = turnosAcimaDaMeta
