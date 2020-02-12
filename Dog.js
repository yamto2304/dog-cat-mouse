var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach= [];
}

Dog.prototype.eat = function(Animal) {
	this.stomach.push(Animal);	
};

Dog.prototype.sayHi = function(){
	console.log('MeoMeo ' + chalk.red(this.name) + '!!');
	dog.eat(Mouse);
};

module.exports = Dog;
