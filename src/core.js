
	var initProp=function(){	//初始化动画队列
		var len=animQuery.length;
		for(var i=len-1;i<len;i++){
			var item=animQuery[i],
				gap={},
				prop=item.prop;
			item.initProp={};
			for(var p in prop){
				curStyle=css(item.obj).get(p);
				curStyle=curStyle==='auto'?0:curStyle;
				gap[p]=parseFloat(prop[p])-parseFloat(curStyle);
				item.initProp[p]=parseFloat(curStyle);
			}
			item.propgap=gap;
		}
	};

	var anim=function(objs,timer){	//anim 执行动画队列
		var easing=janimate.easing,
			speed=13,
			p,
			steping=false,
			tmpTime;
		var loop=function(){
			anim(objs);
		};
		for(var n=animQuery.length;n--;){
			if(objs&&!objs[n]) continue;
			var item=animQuery[n],
				start=_.startTime,
				ease=0,
				tmpCSS='';
			tmpTime=new Date().getTime()-start-item.delay;	//动画已经执行的时间
			ease=easing[item.ease](tmpTime/item.duration);
			if(tmpTime>0){	//delay结束后才能执行
				if(tmpTime<item.duration){	//动画还没结束
					steping=true;
					for(p in item.prop){
						tmpCSS+=';'+p+':'+(item.initProp[p]+item.propgap[p]*ease);
					}
					item.obj.style.cssText+=tmpCSS;
				}else{
					for(p in item.prop){
						tmpCSS+=';'+p+':'+item.prop[p];
					}
					item.obj.style.cssText+=tmpCSS;
					item.callback&&item.callback(item.obj);
					timerID=null;
				}
			}else{
				steping=true;
			}

		}
		if(steping){
			clearTimeout(timerID);
			timerID=window.setTimeout(loop,speed);
		}
	};