/*!
*	janimate.js
*/
var janimate = function(obj,prop,param,callback) {	//param{duration:,ease:,delay:}

	var animQuery=[],
		timerID=null;

	var isArray=function(arr){
		return Object.prototype.toString.call(arr)==='[object Array]'?true:false;
	};

	var getPropName=function(name){	//get property name
		return name.replace(/\-(\w)/g, function(){return arguments[1].toUpperCase();});
	};
