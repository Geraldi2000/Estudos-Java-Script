let n1 = parseFloat(prompt("Digite uma nota1 de 0 a 10"))
let n2 = parseFloat(prompt("Digite outra nota2 de 0 a 10"))

// if(typeof(n1) != "number" && typeof(n2) != "number"){
    if((n1>=0 && n1<=10) && (n2>=0 && n2<=10)){
        console.log("Numero atende a solicitação")
        console.log(`Nota 1: ${n1}\nNota 2: ${n2}\n Média: ${(n1+n2)/2}`)
    }else{
        alert("Digite um numero de 1 a 10")
    }
// }else{
//     alert("Deve ser informado um numero")
// }

