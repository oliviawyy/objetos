/* Exercícios:
   1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento'
      que deve iniciar sempre como 'false' (escola fechada por padrão).
   2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
      exibir uma mensagem de boas-vindas.
   3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
      avisar que as atividades encerraram.
   4. Teste as funcionalidades nas instâncias criadas.
*/

class Senai{
    constructor(codigo, cidade, anoConstrucao, qtdeCursos){
        this.statusFuncionamento = false; //inicia fechada por padrão
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        // JS MODERNO: calculando a idade com base no ano atual do sistema
        this.idade = new Date().getFullYear() - anoConstrucao;
}
    abrirEscola(){
        if (this.statusFuncionamento === false){
            this.statusFuncionamento = true;
            console.log(`A escola do SENAI ${this.cidade} agora esta aberta! Bem Vindo(a)!`)
        } else {
            console.log("A escola já esta aberta!")
        }
        
    }

    fecharEscola(){
         if (this.statusFuncionamento === true){
            this.statusFuncionamento = false;
            console.log(`A escola do SENAI ${this.cidade} agora esta fechada! As atividades foram encerradas!`)
         } else {
            console.log("A escola já esta fechada!")
         }
        
    }

    dadosEscola(){
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
        console.log(`- Capacidade: ${this.qtdeCursos} cursos disponíveis`);
        console.log(`- Status: A escola esta ${this.statusFuncionamento ? 'Aberta' : 'Fechada'}`); //essa funcao faz a verificacao e exibe a mensagem correta

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
const escolaA = new Senai(603, 'Araraquara', 2000, 10);
const escolaB = new Senai(145, 'São Carlos', 1995, 15);
const escolaC = new Senai(545, 'Américo Brasiliense', 2010, 8);


escolaA.fecharEscola();
escolaA.dadosEscola();


escolaA.abrirEscola();
escolaA.dadosEscola();


