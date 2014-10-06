'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var PeaceGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Peace generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      //bundle
      this.src.copy('_readme.md', 'README.md');
      this.src.copy('_gruntfile.js', 'Gruntfile.js');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');

      //app
      this.src.copy('favicon.ico', 'app/favicon.ico');
      this.src.copy('_index.html', 'app/index.html');
      this.directory('styles', 'app/styles');
      this.directory('scripts', 'app/scripts');
      this.directory('images', 'app/images');

    },

  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = PeaceGenerator;
