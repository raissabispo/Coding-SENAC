 function getRandomInt(max){
   return Math.floor(Math.random() * max);

 }

 let sorteio = [];
 for(let i = 0 ; i < 6 ; i++){
    let numero = getRandomInt(60) + 1 ;

   while (sorteio.includes(numero)) {
    numero = getRandomInt(60) + 1 ;
}
sorteio.push(numero); 
 }


console.log("Números sorteados:", sorteio);

// while 
// guardar variavies array 

// comparar com o primeiro numero 

// dentro do if fazer um while 
