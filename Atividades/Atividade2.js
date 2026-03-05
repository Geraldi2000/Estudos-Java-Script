let x = 38

switch (typeof x){
    case "string":
        console.log("É um Texto");
        break;
    case "number":
        console.log("É um Numero");
        break;
    case "boolean":
        console.log("É um booleano");
        break;
    case "undefined":
        console.log("É um valor indefinido");
        break;
    default:
        console.log("Nenhum tipo conhecido")
}