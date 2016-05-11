var fs = require('fs');

var readStream = fs.ReadStream('miao_copy.jpg').pipe(fs.WriteStream('miao_pipe.jpg'));