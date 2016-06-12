var obj = { 
	name : 'xiaoming',
	age: 18,
	friend: ['lily','jane', 'james']
}

var jsonStr = obj.toJSON();
console.log(jsonStr);