'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('underscore', function() {
  var _;
  var addTemplateHelpers;

  beforeEach(function() {
    _ = require('underscore');
    addTemplateHelpers = require('./');
    _.mixin(addTemplateHelpers);
  });

  afterEach(function() {
    addTemplateHelpers = null;
    _.mixin(addTemplateHelpers);
    _ = null;
  });

  it('should have viewHelpers method', function() {
    expect(_.addTemplateHelpers).to.exist;
  });

  describe('_.addTemplateHelpers', function() {

    it('should add helper methods', function() {
      var data = {
        foo: 'yuppers'
      };

      _.addTemplateHelpers({
        sum: function(a, b) {
          return a + b;
        },
        capitalize: function(value) {
          return ("" + value).toUpperCase();
        }
      });
      var compiled = _.template('<p><%= sum(1,2) %> <%= capitalize(foo) %></p>');
      expect(compiled(data)).to.equal('<p>3 YUPPERS</p>');
    });

    it('should clobber previous helper method', function() {
      var data = {
        foo: 'yuppers'
      };

      _.addTemplateHelpers({
        sum: function(a, b) {
          return a + b;
        },
        capitalize: function(value) {
          return 'PUPPIES' + (' ' + value).toUpperCase() + '!';
        }
      });
      var compiled = _.template('<p><%= sum(1,2) %> <%= capitalize(foo) %></p>');
      expect(compiled(data)).to.equal('<p>3 PUPPIES YUPPERS!</p>');
    });

    describe('helper method', function() {

      it('should work with variable setting', function() {
        var data = {
          foo: 'yuppers'
        };

        _.addTemplateHelpers({
          sum: function(a, b) {
            return a + b;
          }
        });
        var compiled = _.template('<p><%= data.sum(1,2) %></p>', {
          variable: 'data'
        });
        expect(compiled(data)).to.equal('<p>3</p>');

      });

    });
  });
});
