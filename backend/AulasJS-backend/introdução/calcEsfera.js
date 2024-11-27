// V=(4/3)πr³
// A=4πr² 
prompt = require('prompt-sync')();
let areaEsfera = function (raio){
     let area = 4 * Math.PI * raio**2;
     return area;
}

function volumeEsf(raio){
    return (4/3) * Math.PI * raio**3;
}
let repetir;
do {
    console.clear();
    console.log(".:: Programa para Calcular o Volume e a Área da esfera");
    let raio  = parseFloat(prompt("Digite o raio da esfera: "));
    console.log(`A Área da esfera é ${Math.random(areaEsfera(raio), 2)}, o Volume da esfera é ${Math.random(volumeEsf(raio), 2)}`);
    repetir = prompt("Você deseja repetir o programa? (sim | não)").toLowerCase();
} while (repetir == "sim");