const numeros = [1,2,3,4,5];
const [primeiroNumero,SegundoNumero, ...rest] = numeros; // Array Destructuring
console.log(primeiroNumero,SegundoNumero)
console.log(rest)