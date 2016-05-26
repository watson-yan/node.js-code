//数组去重实现方式

Array.prototype.unique = function(){
	/* body... */
	var array = [];
	var obj = {};
	for(var i = 0; i < this.length; i++){
		if(!obj[this[i]]){
			obj[this[i]] = 1;
			array.push(this[i]);
		}
	}
	console.log(array.length);
	return array;
};

var array = new Array();
array = ['1','2','3','4','12','1','123','2','2','12','4'];

console.log(array.unique());