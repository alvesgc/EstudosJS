// Função construtora -> Objeto é criado a partir dela
// Função fábrica -> Função que retorna um objeto
// Funçoes construtoras começam com a letra maiúscula
// É Obrigatório usar o new para chamar a função construtora

function Person(name, lastname) {
  // Atributo privado
  const id = 123456789; 
  const method = () => {
    console.log('This is a private method');
  }
    // Atributos ou métodos publicos
    this.name = name;
    this.lastname = lastname;

    this.method = () => {
      console.log(`Hello ${this.name} ${this.lastname}`);
    }
}

const p1 = new Person('Alisson', 'Alves')

console.log(p1.name)
p1.method()