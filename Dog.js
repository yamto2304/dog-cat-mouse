var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach= [];
}

Dog.prototype.eat = function(Mouse) {
	this.stomach.push(Mouse);	
};

Dog.prototype.sayHi = function(){
	console.log('MeoMeo ' + chalk.red(this.name) + '!!');
};

module.exports = Dog;