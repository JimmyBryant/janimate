	var init = function(obj,prop,param,callback) {
		if(obj){
			callback=callback&&typeof callback=='function'?callback:typeof param=='function'?param:null;
			param=param&&typeof param=='object'?param:{};
			_.concat(obj,prop,param,callback);
		}
	};
	init(obj,prop,param,callback);
};