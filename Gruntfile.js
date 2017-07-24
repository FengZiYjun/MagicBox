module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			// the name of the concat task is 'release' 
			release: {
				src: ['js/values.js', 'js/prompt.js', 'getImages.js'], 
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
			files: ['js/values.js', 'js/prompt.js', 'getImages.js']
		},
		
		watch:{
			// a reference to all files in jshint
			files: ['<%= jshint.files %>', 'manifest.json'],
			tasks: ['default']
		}
	});		
	

	// load grunt components
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register a task
	// run jshint, concat and copy cmd in order
	grunt.registerTask('default', ['jshint', 'concat', 'copy']);
	
	
}
