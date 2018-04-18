/*
 * grunt-ejs
 * https://github.com/shama/grunt-ejs
 *
 * Copyright (c) 2014 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  'use strict'
  var path = require('path')
  var ejs = require('ejs')
  grunt.registerMultiTask('ejsjson', 'compile ejsjson templates', function () {
    var options = this.options()
    grunt.verbose.writeflags(options, 'Options')
    this.files.forEach(function (file) {
      // prevents options declared / overrided
      // on file level to be moved to the next file
      options = this.options()

      var json = path.join(file.src[0].replace('.ejs', '.json'))

      if (grunt.file.exists(json)) {
        var srcjson = grunt.file.read(json)
        options.md = JSON.parse(srcjson)
      }

      var out = file.src.map(grunt.file.read).join('')
      options.filename = file.src[0]
      grunt.file.write(file.dest, ejs.render(out, options))
      grunt.log.ok('Wrote ' + file.dest)
    }, this)
  })
}
