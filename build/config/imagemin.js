/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Imagemin
 * @static
 */
module.exports = function(config) {

  return {

    build: {
      files: {
        expand: true,
        cwd: 'images/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'images/'
      }
    }

  };

};
