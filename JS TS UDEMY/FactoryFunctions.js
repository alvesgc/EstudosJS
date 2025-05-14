// Factory Functions
// A factory function is a function that returns an object
// It is a way to create objects without using the `new` keyword
function createPerson(name, surname,height, weight) {
  return {
    name, 
    surname,
    // Getter
    get completeName() {
      return `${this.name} ${this.surname}`; 
    },
    // Setter
    set completeName (value) {
      value = value.split(' ');
      this.name = value.shift();
      this.surname = value.join(' ');
      console.log(value);
    },
    
     call (subject) {
      return `${name} ${surname} has ${subject} and is ${height}m tall and weighs ${weight}kg`;
    },
    height: height,
    weight: weight,
    // Getter 
    get imc() {
      const indice = this.weight / (this.height ** 2);
      return indice.toFixed(2);
    }
  }
}

const person = createPerson("Alisson", "Alves", 1.87, 94);
//console.log(person.call('talking about factory functions'));
person.completeName = 'Alisson Alves dos santos';
console.log(person.completeName);
console.log(person.name);
console.log(person.surname);

