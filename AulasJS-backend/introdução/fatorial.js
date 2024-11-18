prompt = require('prompt-sync')();
function fatorial(n){
//   n! = n = (n-1)

  if (n == 1){
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
let repetir;
do {
    console.clear();
    console.log(".:: Programa para Calcular o Volume e a Área da esfera");
    let n;
     do{
        n = parseInt(prompt("Digite um inteiro maior que 0: "))
         if(n < 2 ){
            console.log(`Valor ${n} inválido`);
         }
     }while (n < 1); {
        console.log(`${n}! = ${fatorial(n)}`)
     }
    repetir = prompt("Você deseja repetir o programa? (sim | não)").toLowerCase();
} while (repetir == "sim");