
function getRandomInt(max){
    return Math.floor(Math.random() * max);
  
  }
  
  let jogos = 5;

  
  for(let j = 0 ; j < jogos ; j++){
    let numero = getRandomInt(60) + 1 ;
     
  
    if (sorteio.includes(numero)){
       i--;
    }else{
      sorteio.push(numero); 
    }
  }
  
  console.log(`Números sorteado: ${sorteio.sort()}`);