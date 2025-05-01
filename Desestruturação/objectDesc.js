const pessoa = { 
  nome: 'Alisson',
  sobrenome: 'Santos',
  idade: 24,
  endereco: {
    rua: 'Rua nova',
    numero: 139 
  }
}

// Atribuição via desestruturação
const { nome, ...rest } = pessoa
console.log(nome, rest);