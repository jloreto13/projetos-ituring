/*

Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você:

*/
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

// Aqui realizei um operador condicional, buscando saber se o produto era internacional ou não.
// Caso ele seja internacional aplica-se o valor de impostos de 20% sobre o produto.
// Caso contrário, aplica-se o valor de 12% sobre o produto.

if(produtoA['internacional']==true){
    produtoA["valor"]=produtoA["valor"]*1.2
} else{
    produtoA["valor"]=produtoA["valor"]*1.12
}
console.log(produtoA)

if(produtoB['internacional']==true){
    produtoB["valor"]=produtoB["valor"]*1.2
} else{
    produtoB["valor"]=produtoB["valor"]*1.12
}
console.log(produtoB)

if(produtoC['internacional']==true){
    produtoC["valor"]=produtoC["valor"]*1.2
} else{
    produtoC["valor"]=produtoC["valor"]*1.12
}
console.log(produtoC)