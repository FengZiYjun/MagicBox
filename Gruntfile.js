module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			// the name of the concat task is 'release' 
			release: {
				src: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImage.js', 'js/main.js'], 
				dest:'release/main.js'
			}
		},

		copy: {
			release: {
				src: 'manifest.json',
				dest: 'release/manifest.json'
			}
		},
		
		jshint: {
			files: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImage.js', 'js/main.js']
		},
		
		watch:{
			// a reference to all files in jshint
			files: ['<%= jshint.files %>', 'manifest.json'],
			tasks: ['default']
		},

		jsdoc: {
			dist: {
				src: ['js/*.js'],
				dest: 'doc'
			}
		},

		jasmine: {
			test: {
				src: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImage.js', 'js/main.js'],
				option: {
					specs: 'test/*.js'
				}
			}
		}

	});		
	

	// load grunt components
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	// register a task
	// run jshint, concat and copy cmd in order
	grunt.registerTask('default', ['jshint', 'concat', 'copy']);
	
};
