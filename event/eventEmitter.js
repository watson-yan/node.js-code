var EventEmitter = require('events').EventEmitter; 

var life = new EventEmitter();

life.on('smile', function(who){
	console.log('she was smiled when she saw ' + who);
});

life.on('cry',function(who){
	console.log('she was crying when she saw ' + who);
});

life.emit('smile', 'me');
life.emit('cry', 'he');