prompt = require('prompt-sync')();
let repetir;
do{ 

console.clear();
// limpa o terminal
let base, exp, result = 1;

base = Number(prompt("Digite a base da exponenciação: "));

exp = parseInt(prompt("Digite o expoente da exponenciação: "));

for(let i = 0; i < exp ; i++ ){
    result *= base;
  
}
  console.log(`O resultado da exponenciação é ${base} ^ ${exp} = ${result}`);
  repetir = prompt("Deseja repetir (sim/não)").toLowerCase(); 
//   toLowerCase (tudo o que ele digitou fica em minusculo)

}while(repetir =="sim");