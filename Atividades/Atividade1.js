let n1 = parseFloat(prompt("Digite nota 1?"))
let n2 = parseFloat(prompt("Digite nota 2?"))

let media = (n1+n2)/2

if(media>4 && n1 > 0 && n2 > 0 && !isNaN(n1) && !isNaN(n2)){
    console.log("APROVADO!")
}else{
    console.log("REPROVADO!!")
    console.log("Digite um numero de 1 a 10")
}
