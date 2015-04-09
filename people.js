function people(){
	var x = 0;
	var y = 0;
	var fallFlag = false;

	this.x = x;
	this.y = y;
	this.fallFlag = fallFlag;
	this.step = null;

	this.setX = function(input){
		this.x = input;
	}

	this.setY = function(input){
		this.y = input;
	}

	this.turnOnFlag = function(){
		this.fallFlag = true;
	}

	this.turnOffFlag = function(){
		this.fallFlag = false;
	}

	this.setStep = function(input){
		this.step = input;
	}

	this.resetStep = function(){
		this.step = null;
	}

	this.getX = function(){
		return this.x;
	}

	this.getY = function(){
		return this.y;
	}

	this.getFallFlag = function(){
		return this.fallFlag;
	}

	this.onTheStep = function(){
		this.y--;
	}

	this.fallDown = function(){
		this.y+=3;
	}

	this.moveRight = function(){
		if(this.x + 30 > 600)
			this.x = 580;
		else
			this.x+=10;
	}

	this.moveLeft = function(){
		if(this.x - 10 < 0)
			this.x = 0;
		else
			this.x -= 10;
	}
}