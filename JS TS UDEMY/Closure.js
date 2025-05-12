// O closure é uma função que tem acesso ao escopo de sua função pai, mesmo após a função pai ter sido executada.
// Isso significa que a função interna pode acessar variáveis e parâmetros da função externa, mesmo depois que a função externa já foi concluída.

function returnFunction() {
  const name = 'Alisson';
  return function () {
  return name;
  } 
}

const funcao = returnFunction();
console.log(funcao());
