let n1 = parseFolat(prompt("Digite um numero de 0 a 10:"))
let n2 = parseFolat(prompt("Digite outro numero de 0 a 10:"))

let media = (n1+n2)/2

console.log(`A média das notas nota 1 (${n1}) e nota 2 (${n2}) é ${media}. \n ${media <= 4 || n1 == 0 || n2 == 0 ? "Aprovado":"Reprovado"}`)