/*
** 对象深度Copy
*/

var Copy = function(obj){
	var newObj = {};

	for(var i in obj){
		if(typeof(obj) == "Object"){
			newObj[i] = Copy(obj[i])
		}else{
			newObj[i] = obj[i];
		}
	}
	
	return newObj;
};


var stu = {name: 'xiaoming', age: 15, score:{chinese: 45, math: 56}};

var stu1 = Copy(stu);
console.log(stu1);