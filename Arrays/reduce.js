// 🧩 Desafio 1 – Soma total de um carrinho
const carrinho = [
  {
    nome: "Teclado", preco: 150,
    nome: "Mouse", preco: 100,
    nome: "Monitor", preco: 200,
  }
]
const totalCarrinho = carrinho.reduce((acc,item) => acc + item.preco, 0)

// 🧩 Desafio 2 – Contar quantas vezes cada cor aparece
const cores = ["azul", "vermelho", "verde", "azul", "amarelo", "vermelho", "azul"];

const contagem = cores.reduce((acc, cor) => {
  acc[cor] = (acc[cor] || 0) + 1;
  return acc;
}, {});

console.log(contagem);

// 🧩 Desafio 3 – Separar produtos por categoria
const produtos = [
  { nome: "Camiseta", categoria: "Roupas" },
  { nome: "Calça", categoria: "Roupas" },
  { nome: "Fone", categoria: "Eletrônicos" },
  { nome: "Celular", categoria: "Eletrônicos" },
];
const separacao = produtos.reduce((acc,item) => {
  if (!acc[item.categoria]){
  acc[item.categoria] = [];
  }
  acc[item.categoria].push(item.nome)
  return acc;
},{});
console.log(separacao)
/* O reduce percorre o array de produtos e cria um objeto onde cada chave é uma categoria e 
o valor é um array com os nomes dos produtos daquela categoria.
O resultado é um objeto que separa os produtos por categoria, facilitando a visualização e o acesso às informações. */ 