module.exports = function (grunt) {
  grunt.initConfig({
    ejsjson: {
      all: {
        src: ['test/*.ejs'],
        dest: 'tmp/',
        expand: true,
        ext: '.html'
      }
    }
  })
  grunt.loadTasks('tasks')
  grunt.registerTask('default', ['ejsjson'])
}
