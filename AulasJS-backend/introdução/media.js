// exercicio media - clean code 

// três notas, calcular média e o conceito

let nota, media, conceito;

media = 0;

for (let i = 1;  i <=3; i++){
    nota = parseFloat(prompt(`Digite a sua ${i} nota: `));
    media += nota;
}

media /= 3;

(media >= 9.5) ? conceito = "Excelente" : 
  (media >= 8.5) ? conceito = "Ótimo":
     (media >= 7.0) ? conceito = "Bom":
       (media > 5.0)  ? conceito = "ANS" :conceito =  "Ruim"
       
console.log(`Sua média foi ${media.toFixed(2)}, e o seu conceito ficou ${conceito}`);