/*
** javascript 实现 Ajax
*/

function createXMLHttp(){
	var xmlHttp; 
	if(window.ActiveXObject){
		xmlHttp = new ActiveXObject('Microsoft.XMLHttp');  
	}else if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}
	return xmlHttp;
}