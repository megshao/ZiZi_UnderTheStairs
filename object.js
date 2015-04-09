function object(){
	var x = 0;
	var y = 600;

	this.x = x;
	this.y = y;

	this.setX = function(input){
		this.x = input;
	}

	this.setY = function(input){
		this.y = input;
	}

	this.getX = function(){
		return this.x;
	}

	this.getY = function(){
		return this.y;
	}

	this.fallDown = function(){
		this.y--;
	}
}