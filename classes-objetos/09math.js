const gerarNumeroAleatorio = () => {
    // Math.random() gera um  numero entre 0 e 1 (exclusivo)
    let numeroAleatorio = Math.random();
    console.log(`Sorteio: ${numeroAleatorio}`);

    // multiplicamos por 15 oara obter um numero entre 0 e 14 (esclusivo)
    numeroAleatorio *= 15;
    console.log(`Multiplicar: ${numeroAleatorio}`);

    // Math.floor() para arredondar para baixo para um numero inteiro
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(`Arredondar: ${numeroAleatorio}`);

    // somamos 1 para obter um numero enrte 1 e 15 (inclusivo)
    numeroAleatorio += 1;
    console.log(`Somar 1: ${numeroAleatorio}`);

    //retorna o numero aleatorio
    return numeroAleatorio;
}

// atribuindo a funcao a uma variavel
let numeroSorteado = gerarNumeroAleatorio();

// exibindo o numero sorteado
console.log(`Numero Sorteado: ${numeroSorteado}`);


// ------- CODIGO OTIMIZADO --------
const gerarNumeroAleatorioR = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// exemplo de uso
console.log(gerarNumeroAleatorioR()); // gera um numero etre 1 e 15
console.log(gerarNumeroAleatorioR(10,15)) // gera um numero entre 5 e 10