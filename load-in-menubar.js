var menubar = require('menubar');
var path = require('path');

var mb = menubar({
  index: 'file://' + path.join(__dirname, 'index.html')
});

mb.on('ready', function ready() {
  console.log('loaded in menubar!')
});