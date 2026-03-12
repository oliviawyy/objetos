// CONSTRUTOR: É o primeiro metodo executado quando fazemos 'new Senai()'.
// ele serve para "exigir" os dados necessarios logo na criaçao
class Senai{
    constructor(codigo, cidade, anoConstrucao, qtdeCursos){
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        // JS MODERNO: calculando a idade com base no ano atual do sistema
        this.idade = new Date().getFullYear() - anoConstrucao;
}

    dadosEscola(){
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
        console.log(`- Capacidade: ${this.qtdeCursos} cursos disponíveis`);
        console.log(`=============================================================\n`);
    }

    }

// FUNCAO DE COMPARAÇAO: RECEBE DOIS OBJETOS COMO PARAMETROS
// melhoria: adicionando tratamento para casos de quantidades iguais.
const compararEscolas = (e1, e2) => {
    console.log(`> Comparando oferta de cursos: ${e1.cidade} e ${e2.cidade}...`);
    if (e1.qtdeCursos > e1.qtdeCursos){
        console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
    } else if (e2.qtdeCursos > e1.qtdeCursos){
        console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${e1.cidade}  (${e1.qtdeCursos}) | ${e2.cidade}  (${e2.qtdeCursos}) \n`);
}
    
    

// a criacao agora é feita em apenas uma linha, passando os valores como argumentos para o construtor
const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();