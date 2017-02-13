var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
};

Grub.prototype.eat = function(food){
	return food === this.food ?'It can be eaten' : 'It cannot be eaten';
}
