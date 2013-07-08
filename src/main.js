	var _=this;
	this.concat=function(obj,prop,param,callback){	//添加动画单元到队列
		var elems;
		if(!isArray(obj)&&!obj.item)
			elems=[obj];
		else
			elems=obj;
		for(var i=elems.length;i--;){
			var elem=elems[i];
			if(elem&&elem.nodeName){	//判断是否为dom对象
				animQuery[animQuery.length]={obj:elem,prop:prop,duration:param.duration||500,ease:param.ease||'linear',delay:param.delay||0,callback:callback};
				initProp();
			}
		}
		return this;
	};

	this.stop=function(){
		window.clearTimeout(timerID);
	};

	this.start=function(obj){
		var params=[],
			elems=null;
		if(obj&&(isArray(obj)||obj.item))params=obj;
		for(var objs=[],n=params.length;n--;){
			for(var i=animQuery.length;i--;)
				if(animQuery[i].obj===params[n])
					objs[i]=true;
		}
		if(!timerID){
			_.startTime=new Date().getTime();	//动画起始时间
		}
		window.clearTimeout(timerID);
		elems=objs.length?objs:null;
		anim(elems);
		return this;
	};