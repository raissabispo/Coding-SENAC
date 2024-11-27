function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let numJogos = 5;

for (let j = 0 ; j < numJogos ; j++) {
  let numeros = [];

  for (let i = 0; i < 6; i++) {
      let numSorteado = getRandomInt(60) + 1;
      if (numeros.includes(numSorteado)) {
          i--;
      } else {
          numeros.push(numSorteado);
      }
  }

  console.log(`Os números sorteados foram: ${numeros.sort()}`);
}

// numeros.forEach(element => {
//     console.log(element)
// });