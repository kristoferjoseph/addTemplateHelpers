addTemplateHelpers
==========

Mixin to add custom template helpers to underscore.

Install
-------

`npm i addTemplateHelpers`

Usage
-----

```
var _ = require('underscore');
var addTemplateHelpers = require('addTemplateHelpers');
// Mixin the addTemplateHelpers object to augment underscore
_.mixin(addTemplateHelpers);

var data = {
  foo: 'yuppers'
};

_.addTemplateHelpers({
  sum: function(a, b) {
    return a + b;
  }
});

var compiled = _.template('<p><%= data.sum(1,2) %> <%= data.foo %></p>', {
  variable: 'data'
});

compiled(data);
// Will result in <p>3 yuppers</p>
```

