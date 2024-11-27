
function getRandomInt(max){
  return Math.floor(Math.random() * max);

}

let sorteio = [];

for(let i = 0 ; i < 6 ; i++){
  let numero = getRandomInt(60) + 1 ;


  if (sorteio.includes(numero)){
     i--;
  }else{
    sorteio.push(numero); 
  }
}

console.log(`Números sorteado: ${sorteio}`);