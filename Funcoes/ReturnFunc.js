// Foi criada uma closure, onde a função `createMult` recebe um multiplicador
// e retorna uma nova função que, por sua vez, multiplica um número por esse multiplicador.
function createMult(multiplier) {
  return function(n) {
    return n * multiplier;
  };
}

// Criamos funções específicas passando diferentes multiplicadores.
const duplier = createMult(2);      // Função que duplica
const triplier = createMult(3);     // Função que triplica
const quadriplier = createMult(4);  // Função que quadruplica

// Chamamos as funções passando o número que será multiplicado.
console.log(duplier(3));      // Saída: 6
console.log(triplier(2));     // Saída: 6
console.log(quadriplier(10)); // Saída: 40
