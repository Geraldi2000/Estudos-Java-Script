let n = parseFloat(prompt("Digite um numero"))

let contador = 0


if(isNaN(n)){
    alert('Não é um numero válido')
}else{
    console.log('Numero válido')
    while (contador <= 1000){
        document.write(`${n} X ${contador} = `+ n*contador + ("<br>"))
        contador+=1
    }
}



