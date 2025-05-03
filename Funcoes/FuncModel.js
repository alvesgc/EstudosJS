/* As funções podem sofrer hoisting - Independente se eu crio a 
função abaixo do escopo ou acima, caso eu referencie ela antes ela será chamada, sofrendo hoisting.
*/
sayHello()

function sayHello()  {
  console.log('Hello!')
}

// Function expression - First Class Object
const oneData = function() {
  console.log(`I'm a data`);
};

// Podemos passar uma função como parametro e chamar ela dentro de outra função.
function dataExecute(funcao) { 
  console.log('I passed here before ur function');
  funcao();
};

dataExecute(oneData);

// Arrow functions
const arrowFunction = () => {
  console.log('Arrow function');
};

arrowFunction();

//Dentro de um objeto
const obj = {
  falar() {
    console.log('Falando')
  }
};

obj.falar();