const Filtrar = () => { 
  const numerosMaiores = [1,6,8,2,4,5]
  const numerosFiltrados = numerosMaiores.filter(num => num > 5)
  console.log(numerosFiltrados)
}
/* O filter percorre o array e retorna um novo array com os elementos 
que atendem à condição especificada na função de callback. */