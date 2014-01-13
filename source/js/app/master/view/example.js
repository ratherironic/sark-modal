define('master/view/example', [
  'jquery',
  'lodash',
  'backbone',
  'master/view/subExample'
], function($, _, Backbone, SubView) {

  'use strict';

  return Backbone.View.extend({

    events: {},

    el: '#main',

    initialize: function(options) {

      var view = this;

      _.bindAll(this);

      view.render();

      console.log('Backbone : Global : ExampleView : Initialized');
    },


    render: function() {

      var view = this;

      view.subview = new SubView({
        el: '#content'
      });
    }

  });

});
