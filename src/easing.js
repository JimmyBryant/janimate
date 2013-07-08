	// easing
	janimate.easing={

		linear:function(n){
			return n;
		},

		easeInQuad: function(pos) {
			return Math.pow(pos, 2);
		},

		easeInCubic: function(pos) {
			return Math.pow(pos, 3);
		}

	};