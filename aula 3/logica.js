//Análise os pedaços de código a seguir e tente prever qual será o console.log resultante, A ou B.
//Você pode rodar os código para verificar suas respostas.

let a = 10
let b = true
let c = []
let d = [1,2,3,4]
let e = "Nome"

//1 A
if (a == 10) {
    console.log("A");
} else {
    console.log("B");
}
//2 B
if (a > 10) {
    console.log("A");
} else {
    console.log("B");
}
//3 B
if (a >= 10) {
    console.log("A");
} else {
    console.log("B");
}
//4 A
if (b == true) {
    console.log("A");
} else {
    console.log("B");
}
//5 A
if (b) {
    console.log("A");
} else {
    console.log("B");
}
//6 A
if (c) {
    console.log("A");
} else {
    console.log("B");
}
//7 A
if (d) {
    console.log("A");
} else {
    console.log("B");
}
//8 A
if (d[0] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//9 B
if (d[1] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//10 A
if (typeof(e) == 'string') {
    console.log("A");
} else {
    console.log("B");
}
