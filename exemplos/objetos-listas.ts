const pessoa: any = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

const andre: { nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'

}

const Paula: { nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'

}

enum Profissão {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
 interface Pessoa {
    nome: String,
    idade: number,
    profissao?: Profissão;
 }

 interface Estudante extends Pessoa {
    materias: string[]

 }


 const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissão.Desenvolvedora

 }

 const maria: Pessoa ={
    nome:'Maria',
    idade: 23,
    profissao: Profissão.Desenvolvedora
 }

 const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissão.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
 }
 const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica discreta', 'programação']
 }

 function listar(lista: string[]) {
    for (const item of lista)  {
        console.log('- ', item);
    }
 }

 listar(monica.materias);
 