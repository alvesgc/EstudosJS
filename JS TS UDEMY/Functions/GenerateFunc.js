function* generate() {
  yield 'Value 1';  
}
const g1 = generate();
console.log(g1.next());

function* generate2() { 
  let i = 0;
  while (true) {
    yield i++;
  }
}

function* generate3() {
  yield 0;
  yield 1;
  yield 2;
}