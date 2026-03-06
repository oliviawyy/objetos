// funcao de seta que soma dois numeros
const soma = (a, b) => a + b;

// funcao de seta que exibe uma saudaçao
const saudacao = nome => console.log(`Olá, ${nome}! `);

// funcao de seta que calcula o quedrado de um numero
const quadrado = x => x * x;

const areaQaudrado = lado => lado * lado

// funcao de seta que verifica se o numero é par
const ePar = num => num % 2 === 0;

// funcao de seta que exibe a data e hora atual
const exibirDataHora = () => {
    const data = new Date();
    console.log(data.toLocaleString());
}

// teste de funcoes 
console.log(soma(2))









