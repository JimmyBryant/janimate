module.exports = function(grunt) {
	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 jshint:{
		 	options:{
		 		immed:true,
		 		laxbreak:true,
		 		browser: true,
		 		evil:true,
		 		laxcomma:true,
		 		scripturl:true,
		 		smarttabs:true,
		 		expr:true
		 	},
		 	src:['dist/janimate.js']
		 },
		 uglify: {
			options: {
				banner: '/*!<%= pkg.name%> v<%= pkg.version%> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			src:{
				files: {
					'dist/janimate.min.js':['dist/janimate.js']
				}
			}

		  },
		  cssmin:{
		  	minify:{
		  		options: {
			    	banner: '/* minified css file */'
			    },
			    files:{
			    	'pinad/css/instreet.pinad.min.css':'pinad/css/instreet.pinad.css'
			    }
		  	}
		  },
		  concat:{
		  	options: {
		  		banner: '/*!<%= pkg.name%> v<%= pkg.version%> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		    },
		    dist: {
		      src: ['src/intro.js','src/outro.js'],
		      dest: 'dist/janimate.js'
		    }
		  }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['concat','jshint','uglify']);

};