// Arguments - 'Váriavel' do js para gravar parametros que não definimos na função. Funcione apenas em funções nomeadas. 

// Funções podem receber parametros que serão mudadas dentro do próprio parametro, ou seja. Caso eu não passe nada para o parametro, ee irá assumir o valor de B será 3;

function funcao(a,b = 3) {
    console.log(a + b)
  };
funcao(2,7);

function destructing({nome,sobrenome,idade}) {
console.log(nome,sobrenome,idade)
};

destructing({nome: 'Alisson', sobrenome:'Alves', idade: 24 })

function arrayDestructing([valor1,valor2,valor3]) {
  console.log(valor1,valor2,valor3)
  };
  arrayDestructing(['Alisson','Alves',24])

  function conta(operador,acumulador,...numeros){
    for(let numero of numeros) {
      if(operador === '+') acumulador += numero; 
    }
    console.log(acumulador);
  };
  conta('+',0,20,30,40,50);