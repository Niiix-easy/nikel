const nome = 'Niiix -easy';
let nome2 = '';

console.log('Valor inicial:');
console.log(nome2);
let pessoaDefault = {
    nome: 'Niiix',
    idade: '33',
    trabalho: 'Gamer'
}
let nomes = ['Nix easy', 'joao macato', 'pedro mate']

let pessoas =[
    {
        nome: 'Niiix',
    idade: '33',
    trabalho: 'Gamer'
    },
    {
        nome: 'Niiix easy',
    idade: '32',
    trabalho: 'Gamer'
    }
];

nome2 = 'Pedro Silva';

console.log('valor alterado');
console.log(nome2);

function alterarNome(){
    nome2 = 'Maria Silva';
    console.log('valor alterado');
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log('valor alterado recebe um nome');
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log('Nome:');
    console.log(pessoa.nome);
    
    console.log('idade:');
    console.log(pessoa.idade);
    
    console.log('Trabalho:');
    console.log(pessoa.Trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log('---Imprimir Pessoas---');
    pessoas.forEach((item) =>{
        console.log('Nome:');
        console.log(item.nome);

        console.log('idade:');
        console.log(item.idade);
        
        console.log('Trabalho:');
        console.log(item.Trabalho);
    });
}

 imprimirPessoas();

 adicionarPessoa({
     nome: 'Niiix easy ',
     idade: '28',
     trabalho: 'Gamer'
 });


imprimirPessoas();




//recebeEalteraNome('Niiix');
//recebeEalteraNome('maria silva');
//alterarNome();

