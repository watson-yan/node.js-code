var student = require('./student')
var teacher = require('./teacher')

function CreateKlass(teacherName,students){
	teacher.Add(teacherName)
	students.forEach(function(item,index){
		student.Add(item)
	})
}

/*
* exports.Create = CreateKlass
*/
module.exports = CreateKlass