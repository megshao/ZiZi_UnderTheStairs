function object(){
	var x = 0;
	var y = 600;

	this.x = x;
	this.y = y;
	this.stepType = 0;

	this.setX = function(input){
		this.x = input;
	}

	this.setY = function(input){
		this.y = input;
	}

	this.setStepType = function(input){
		this.stepType = input;
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