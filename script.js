
const personagens = [{nome: "Irmão do Jorel", idade: 8, raca: "humano"}, {nome: "Jorel", idade: 16, raca: "humano"}, {nome: "Nico", idade: 12, raca: "humano"}, {nome: "Lara", idade: 8, raca: "humano", falar: function () { console.log("Você chama alguém de mulherzinha quando a pessoa é incrível!")}}, {nome: "Vovo Juju", idade: undefined, raca: "Vovo", falar: function () {console.log("Abacate faz bem pro cabelo...")}}, {nome: "Gesonel", idade: 2, raca: "pato"}, {nome: "Fabrício", idade: 2, raca: "pato"}, {nome: "Danúbio", idade: 2, raca: "pato"}]

// 1. Retorne apenas os `patos`
// 2. Retorne apenas os personagens com a função `falar`
// 3. Retorne apenas os personagens com idade maior que 4
// 4. Retorne um novo array apenas com os nomes dos personagens
// 5. Retorne em um novo array as idades dos personagens incrementada em 1. Para personagens sem idade definida retorne a idade como `undefined`.
// 6. Retorne um novo array apenas com os nomes de todos os personagens humanos.
// 7. Execute todas as funções `falar` - Atenção, sem gerar erros.
// 8. Retorne um novo array de objetos com todos os personagens, porém cada objeto deve ter apenas os atributos `nome` e `idade`.
// 9. Retorne um novo array de objetos apenas com os personagens que possuem a função `falar`, cada objeto deve ter apenas `nome` e `falar`. Porém a função falar deve ser reescrita para exibir no console a mensagem `“Oi meu nome é ” NOME_DO_PERSONAGEM`. Por fim, execute a nova função `falar`.


//1 
const apenasPatos = personagens.filter(p => p.raca === 'pato')
// console.log(apenasPatos)

//2
const apenasFalam = personagens.filter(p => p.falar !== undefined)
// console.log(apenasFalam)

//3

const maior4 = personagens.filter(p => p.idade > 4)
// console.log(maior4)

//4

const apenasNome = personagens.map(p => p.nome)
// console.log(apenasNome)

//5
const retornarIdade = personagens.map( p => p.idade === undefined ? undefined : p.idade + 1)
// console.log(retornarIdade)

//6
const retornarHumano = personagens.filter(p => p.raca === 'humano').map(p => p.nome)
// console.log(retornarHumano)

//7
// const mapFalar = apenasFalam.forEach(element => { if(element.falar !== undefined){element.falar()}} )
// console.log(mapFalar)

//8
const novaArray = personagens.map( p => {return {nome: p.nome, idade: p.idade}})
// console.log(novaArray)

//9
const mudarFuncao = apenasFalam.map( p => {return {
    nome: p.nome, 
    falar: function() {console.log(`Meu nome e ${p.nome}`)}
} } )
// console.log(mudarFuncao)
const executarNovoFalar = mudarFuncao.forEach(p => {return p.falar()})
// console.log(executarNovoFalar)