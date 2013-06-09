;(function  () {

	var animQuery=[],
		timerID=null;

	var isArray=function(arr){
		return Object.prototype.toString.call(arr)==='[object Array]'?true:false;
	};
	//animate per step
	var step=function(){

	};

	var janimate=function(obj,prop,duration,ease,delay,callback){
		this.concat(obj,prop,duration,ease,delay,callback);
	};

	//add animate item to animQuery
	janimate.prototype.concat=function(obj,prop,duration,ease,delay,callback){
		var elems;
		if(!isArray(obj)&&!obj.item)
			elems=[obj];
		else
			elems=obj;
		for(var i=elems.length;i--;){
			var elem=elems[i];
			if(elem&&elem.nodeName){	//判断是否为dom对象
				animQuery[animQuery.length]={obj:elem,cssStyle:elem.style,prop:prop,duration:duration||500,ease:ease||'linear',delay:delay||0,callback:callback};
			}
		}
		return this;
	};

	//start animate
	janimate.prototype.start=function(obj){

	};
