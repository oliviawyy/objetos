// classe é uma definicap. como um objeyo deve ser.
class Senai{
    codigo;
    cidade;
    // dentro de uma classe nao precisa da palavra function para criar um metodo
    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola do senai de ${this.cidade}`)
    }
}

// instancia é uma ocorrencia. criacao de um novo objeto, uma nova ocorrencia da classe
// criando uma instancia(uma nova escola)

const senaiArqa = new Senai();
// incrementando o codigo
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';

// exibindo os dados no console
senaiArqa.descreverEscola();
senaiMat.descreverEscola();