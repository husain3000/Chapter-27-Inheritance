class Animal {
	constructor(name, color, height){
		this.name = name
		this.color = color
		this.height = height
	}
	shout(){
		console.log(this.name + "is shouting")
	}
	run(){
		console.log(this.name + " is running")
	}
	color(){
		console.log(this.name + " is " + this.color + " in color")
	}
}

class Ape extends Animal{
	eatBanana(){
		console.log(this.name + " is eating a Banana")
	}
	climbTree(){
		console.log(this.name + " is climbing a Tree")
	}
}

class Chimpanzee extends Ape {
	laughing(){
		console.log(this.name + " is laughing!")
	}
}



let Chimp1 = new Chimpanzee("bruno", "Black", "4 feet")
let Chimp2 = new Chimpanzee("macho", "Black", "5 feet")


Chimp1.eatBanana()
Chimp1.climbTree()
Chimp2.laughing()
