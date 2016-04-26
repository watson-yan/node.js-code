function Learn(str){
	console.log('I will so something about ' + str);
}


function CallMethod(callback,str){
	callback(str);
}

CallMethod(Learn,'Study Node.js');