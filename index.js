var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Chow');
var tom = new Cat();
dog.eat(tom);
console.log(dog);
dog.sayHi();