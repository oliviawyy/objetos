// metodo é uma funcao denteo de um objeyo
const senai = {
    codigo: 603,
    cidade: 'Araraquara',

    descreverEscola: () => {
        // a palavra reserva this se refere ao proprio objeto, ou seja, senai
        // é usado para acessar propriedades e metodos do objeto corrente.
        console.log(`O código ${senai.codigo} pertence a escola do senai de ${senai.cidade}`)
    }
};



senai.codigo = 608;
senai.cidade = 'Matão'
senai.descreverEscola()