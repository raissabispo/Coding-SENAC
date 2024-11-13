let num1 , op ,num2;

prompt = require('prompt-sync')();

num1 = Number(prompt("Digite o primeiro número "));

op= prompt("Digite operador(+, -, x, /) ");

num2 = Number(prompt("Digite o segundo número "));

switch (op) {
    case '+':
        console.log(`O resultado é : ${num1 + num2}`)
        break;
        case '-':
            console.log(`O resultado é : ${num1 - num2}`)
            break;
            case 'x':
                console.log(`O resultado é : ${num1 * num2}`)
                break;
                case '/':
                    console.log(`O resultado é : ${num1 / num2}`)
                    break;
    default:
        console.log(`Operador ${op} inválido`);
        break;
}
