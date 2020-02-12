var chalk = require('chalk');
var Cat = require('./Cat');

var cat = new Cat();

function Dog(name) {
	this.name = name;
	this.stomach= [];
}

var dog = new Dog();

Dog.prototype.eat = function(animal) {
	this.stomach.push(animal);	
};

Dog.prototype.sayHi = function(){
	console.log('MeoMeo ' + chalk.red(this.name) + '!!');
	dog.eat(cat);
	console.log(dog);
};

module.exports = Dog;