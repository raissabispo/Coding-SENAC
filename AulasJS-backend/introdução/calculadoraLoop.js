prompt = require('prompt-sync')();
let base, exp, result = 1;

base = Number(prompt("Digite a base da exponenciação: "));

exp = parseInt(prompt("Digite o expoente da exponenciação: "));

for(let i = 0; i < exp ; i++ ){
    result *= base;
  
}
  console.log(`O resultado da exponenciação é ${base} ^ ${exp} = ${result}`)