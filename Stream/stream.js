var fs = require('fs');
var source = fs.readFileSync('../buffer/miao.jpg');

fs.writeFileSync('miao_copy.jpg', source);