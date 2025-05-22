// DefineProperty e DefineProperties
function Product(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a propriedade
    value: estoque, // valor
    writable: true, // pode ser alterado
    configurable: false // não pode ser deletado
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a propriedade
      value: estoque, // valor
      writable: true, // pode ser alterado
      configurable: false // não pode ser deletado
    }
  })
}

const p1 = new Product('Caneta', 1.99, 1000);
console.log(p1.estoque); // 1000
console.log(p1);