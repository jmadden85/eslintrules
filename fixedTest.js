'use strict';
(function init() {
  var test = {
    integer: 1,
    str    : 'testing',
    key    : 'value',
    bool   : true
  };

  var Fire = {
    hot: true
  };

  var arr = [1, 2, 3];
  var fire = new Fire();

  var testing = function testing () {
    console.log('working');
    console.log(arr);
    console.log(fire);
    return test;
  };

  testing();
}());
