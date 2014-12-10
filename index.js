'use strict';

var _ = require('underscore');
var virginTemplate = _.template;
var helpers = {};

module.exports = {

    addTemplateHelpers: function(customHelpers) {
      _.extend(helpers, customHelpers);
    },

    template: function() {
      var soiledTemplate = virginTemplate.apply(this, arguments);
      return function(data) {
        return soiledTemplate.call(this, _.defaults({}, data, helpers));
      };
    }

};
