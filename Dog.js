var chalk = require('chalk');
var Mouse = require('./Mouse');
var mouse = new Mouse();
var dog = new Dog();

function Dog(name) {
	this.name = name;
	this.stomach= [];
}

Dog.prototype.eat = function(Animal) {
	this.stomach.push(Animal);	
};

Dog.prototype.sayHi = function(){
	console.log('MeoMeo ' + chalk.red(this.name) + '!!');
	dog.eat(mouse);
};

module.exports = Dog;
