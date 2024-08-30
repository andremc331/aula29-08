class Usuario {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    dizerNome() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

class Pai_De_Aluno {
    num_filhos: number;
    constructor(num_filhos: number) {
        this.num_filhos = num_filhos;
    }
    apresentar() {
        console.log(`Eu tenho ${this.num_filhos} filhos.`);
    }
}

let num_filhos = new Pai_De_Aluno(2);
let nome = new Usuario("André")
//const usuario2 = new Usuario("Ana");
//usuario.dizerNome();

//const paiDeAluno2 = new Pai_De_Aluno(2);
//paiDeAluno.apresentar();