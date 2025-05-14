// IIFE - Immediately Invoked Function Expression
(function (age,weight,height) {
  const surnname = "Alves";
  function createName(name) {
    return name + " " + surnname;	
  }
  function callName() {
  console.log(createName("Alisson"))
}
callName();
console.log(age, weight, height);
})(24,96,1.855);




