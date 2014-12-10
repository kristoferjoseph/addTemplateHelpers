var _ = require('underscore');
var addTemplateHelpers = require('..');
var data = {
  stuff: 'dope',
  things: 'nope'
};
var compiled;
var tmp;
var children;
var element;

_.mixin(addTemplateHelpers);

_.addTemplateHelpers({
  sum: function(a, b) {
    return a + b;
  },
  capitalize: function(value) {
    return ("" + value).toUpperCase();
  }
});

compiled = _.template('<p><%= data.sum(1,2) %> times <%= data.stuff %> is better than <%= data.sum(1,0) %> times <%= data.capitalize(data.things) %></p>', { variable: 'data' });

tmp = document.implementation.createHTMLDocument();
tmp.body.innerHTML = compiled(data);
children = tmp.body.children;
element = children[0];

document.body.appendChild(element);
