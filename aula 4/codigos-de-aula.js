// explicação de mapas

let pessoa = {
    'nome':'João Loreto',
    'idade': 29,
    'temIngresso': true
}
/*
console.log(pessoa['nome'])
ou
console.log(pessoa.nome)
*/

// && significa E, || significa OU

/*
if (pessoa.idade >= 18 && pessoa.temIngresso == true){
    console.log("pode entrar")
} else {
    console.log("não pode entrar")
}
*/

//FUNÇÕES

function imprimirNome (nome, idade) {
    console.log(nome)
    console.log(idade)
}

//imprimirNome("João p função", 29)
//funções também podem retornar dados (cuspir dados) que são gravados.
/*
function tirarMedia(A, B){
    let soma = A + B
    let media = soma/2
    //console.log(media)
    return media
}

let mediaRecebidaFunc = tirarMedia(10, 14)
console.log(mediaRecebidaFunc)

const tirarMedia_arrow = (A, B) => {
    let soma = A + B
    let media = soma/2
    //console.log(media)
    return media
}
console.log(tirarMedia_arrow(200, 300))
*/

//RESOLVENDO PROBLEMAS COM FUNÇÕES
/*
let pessoaA = {'temIngresso': true, 'idade': 30, 'nome': "Tiago Sestari"}
let pessoaB = {'temIngresso': false, 'idade': 20, 'nome': "José Alfonso"}
let pessoaC = {'temIngresso': true, 'idade': 15, 'nome': "Ana Maria"}

function podeEntrar (idade, ingresso, nome) {
    console.log(nome)
    if (idade>=18 && ingresso == true){
        console.log("pode entrar")
    } else {
        console.log('não pode entrar')
    }
}

podeEntrar(pessoaA.idade, pessoaA.temIngresso, pessoaA.nome)
podeEntrar(pessoaB.idade, pessoaB.temIngresso, pessoaB.nome)
podeEntrar(pessoaC.idade, pessoaC.temIngresso, pessoaC.nome)
*/

// ITERAÇÕES

let alunos = [
    {'nome': 'Tiago', 'fezProva': true, 'media': 10},
    {'nome': 'Alvaro', 'fezProva': true, 'media': 9},
    {'nome': 'Tobias', 'fezProva': false, 'media': 8},
    {'nome': 'Regina', 'fezProva': true, 'media': 9},
    {'nome': 'Julia', 'fezProva': true, 'media': 5},
    {'nome': 'Joana', 'fezProva': false, 'media': 6},
    {'nome': 'Paulo', 'fezProva': false, 'media': 4},
    {'nome': 'Carla', 'fezProva': false, 'media': 2},
    {'nome': 'Luciana', 'fezProva': true, 'media': 1}
]

//vamos entender nossos dados
// se quiser pegar só um dado de um aluno:
//console.log(alunos[0].nome)
//console.log("O ",alunos[0].nome, "tirou média", alunos[0].media)

//exercicio 1 - mostrar só os alunos que fizeram prova:
/*
for (let aluno of alunos){
    if (aluno.fezProva==true){
        console.log(aluno.nome) 
    }
}
*/

//exercicio 2 - quantos alunos fizeram prova?
/*
let quantidadeAlunos = 0
for(let aluno of alunos){
    if (aluno.fezProva==true){
        quantidadeAlunos = quantidadeAlunos+1
    }
}
console.log(quantidadeAlunos)
*/

// estudo de métodos:

alunos.forEach(
    (aluno)=>{
        
        if (aluno.fezProva == true){
            console.log(aluno.nome)
        }
    }
)


