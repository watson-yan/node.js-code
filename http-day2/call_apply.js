var pet = {
	name: 'Chamiao',
	MakeSound: function(name){
		console.log('I am '+name);  //这里面的this指向pet这个对象
		console.log(this);
	}
}

pet.MakeSound(pet.name);

var dog = { name:'single dog'};

pet.MakeSound.call(dog, dog.name);


/*
*上下文对象测试
*/

function Test(name){
	this.name = name;  //this 指向全局，方法的所有者
	this.Logger = function(){
		console.log(this.name);
	}
}

function Test2(name){
	this.name = name;
	Test.call(this,this.name);
}

var t2 = new Test2('XiaoMing');
t2.Logger();
