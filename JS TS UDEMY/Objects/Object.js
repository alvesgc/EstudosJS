// DefineProperty e DefineProperties
function Product(nome, preco, estoque) {
  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a propriedade
    configurable: false, // não pode ser deletado
     get: function() {
        return estoquePrivado;
      },
      set: function(valor) {
        if (typeof valor !== 'number') {
          throw new TypeError('Valor inválido');
        }
        estoquePrivado = valor;
      }
  })

  // Object.defineProperties(this, {
  //   nome: {
  //     enumerable: true, // mostra a propriedade
  //     configurable: false, // não pode ser deletado
  //   }
  // })
}

// Exemplo de uso Getter e Setter em Factory Function
function criaProduto(nome)  {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  }
}

const p2 = criaProduto('Caneta');
console.log(p2.nome); 
// const p1 = new Product('Caneta', 1.99, 1000);
// p1.estoque = 'teste';
// console.log(p1.estoque); // 1000