// const num = document.querySelector("intervalo__valor--max")

// variaveel global
const quatidadedeNumerosRecentes = 5;

// obter os elementos
const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');

// seção com o botao 
const botaoSortear = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');

const listaNumeros = document.querySelector('.historico__lista');
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');

const mensagem = document.querySelector('.area__mensagem');

console.log(sliderMax, sliderMin)


const atualizarValorSlider = () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    // exibir o valor do slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};

//evento para atualizar o valor em tempo real
sliderMin.addEventListener('input', atualizarValorSlider);
sliderMax.addEventListener('input', atualizarValorSlider);

// inicalizar interface com valores atuais
atualizarValorSlider();


const gerarNumeroAleatorio = (min, max) => {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1 ));
    numeroAleatorio += min;
    return numeroAleatorio;
}

// funcao para atualizar o texto da interface com o numero soteado
const atualizarTexto = (elemento, valor) => {
    elemento.textContent = valor;
};


// funcao para criar a lista de numeros sorteados
const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
    });
    return li;
};

// funcao para gerenciar a lista de numeros sorteados
const atualizarHistorico = (lista, item, limite) =>{
    lista.prepend(item);

    if (lista.children.length > limite) {
        lista.removeChild(lista.lastChild);
    };
};

// funcao para limpar o historico de sorteios
const limparHistorico = () => {
    if (confirm('Deseja realmente limpar o historico de sorteios?')) {
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0';
    }
};

// eventos
botaoSortear.addEventListener('click', () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    if (min > max) {
        mensagem.textContent = 'O valor mínimo deve ser menor ou igusl so vslor máximo.';
        return;
    }

    mensagem.textContent = '';

    const numeroSorteado = gerarNumeroAleatorio(min, max);

    atualizarTexto(elementoNumero, numeroSorteado);

    const item = criarItemHistorico(numeroSorteado);
    atualizarHistorico(listaNumeros, item, quatidadedeNumerosRecentes);
});

botaoLimparHistorico.addEventListener('click', limparHistorico);


const validarInputs = () =>{
    if (inputMIn.value >= inputMax.value) {
        historicoLista.innerHTML = 'Por favor, preencha ambos os campos de intervalo.';
        return false;
    }
    else {
        return true;
    }
}