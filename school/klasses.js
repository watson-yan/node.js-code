var student = require('./student')
var teacher = require('./teacher')

function CreateKlass(teacher,students){
	teacher.Add(teacher)
	students.forEach(function(item,index){
		student.Add(item)
	})
}

module.exports = CreateKlass