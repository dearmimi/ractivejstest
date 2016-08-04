module.exports = function(grunt) {

	// Configuring the Grunt
	grunt.initConfig({
		//retrieving the information from package.jason 
		pkg: grunt.file.readJSON('package.json'),
		
		//validate Java script files using jshint configuration
		jshint: {
			options: {
				reporter: require('jshint-stylish') 
			},
			build: ['Gruntfile.js', 'Grunt/src/js/progressbar.js']
		},
		
		// minifying javascripts
		uglify: {
			options: {
				banner: 'grunt compiled output'
			},
			build: {
				files: {
					'Grunt/dest/js/progressbar.min.js' : 'Grunt/src/js/progressbar.js',
					'Grunt/dest/js/jquery-1.11.3.min.js' : 'Grunt/src/js/jquery-1.11.3.js',
					'Grunt/dest/js/ractive.min.js' : 'Grunt/src/js/ractive.js',
					'Grunt/dest/js/ractive-load.min.js' : 'Grunt/src/js/ractive-load.js'
						}
			}
		},
		
		
		// css minification
		cssmin: {
			options: {
				banner: 'grunt complied css'
			},
			build: {
				files: {
					'Grunt/dest/css/progressbar.min.css': 'Grunt/src/css/styles.css',
					'styles/progressbar.min.css': 'Grunt/src/css/styles.css'
				}
			}
		}
		
		
	});
	
	// Loading grunt plugins configured in package.json
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass', 'less']);
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']); 
	
};

