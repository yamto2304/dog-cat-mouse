var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach= [];
}

Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);	
};

Dog.prototype.sayHi = function(){
	console.log('Gaugau ' + chalk.red(this.name) + '!!');
};

module.exports = Dog;