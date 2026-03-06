// declaracao e um objeto. chave: valor;

// 01 -criar objeto quadrado
let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lados){
        return lados + lados + lados + lados 
        return this.lados*4
    }
};
// objeto

let quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
    return this.lados * lado;  }
};
// array

let quadrado3 = [{}];
// array, e na posicao 0 do array eu tenho o objeto

// 01 - criar um objeto senai
const senai = {
    codigo: 603,
    cidade: 'Araraquara'
};

console.log('--------------');

senai.telefone = 1633035252;
senai.rua = 'Hugo Negrini';
delete senai.rua;

senai.endereco = {rua:'Hugo Negrini', numero: 60, bairro: 'Quitandinha'};
senai.alunos = ['SESI', 'EEBA', 'comunidade'];

senai.endereco.numero = 62;
senai.alunos[2] = "tag"
console.log(senai);



// 02 - criar funcoes (metodos area e perimetro)
// 03 - entender o contexto this
// 04 - escrever de forma abreviada
// 05 - acessar os dados do objeto

console.log(quadrado2.perimetro(4));