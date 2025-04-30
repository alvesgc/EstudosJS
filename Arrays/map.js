/* O map funciona da seguinte forma: 
ele percorre cada elemento do array e aplica a função que você passar como argumento, 
retornando um novo array com os resultados da função aplicada a cada elemento.
No exemplo acima, o map percorre o array numbers e multiplica cada número por 2,
retornando um novo array com os números dobrados. 
*/
const mapArray = () => { 
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); 
}

const mapArray2 = () => {
  const numbers = [1,3,5,4,6,8,7];
  const doubledAndSort = numbers.map(num => num * 2).sort((a,b) => a - b)
  console.log(doubledAndSort);
}
/* Primeiro eu mapeio todos os numeros do array, logo após eu aplico o sort, ordenando por ordem crescente.*/



