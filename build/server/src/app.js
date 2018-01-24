'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _template = require('./template.js');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import cors from 'cors';
//import router from './router';

//const express = require('express');
var server = (0, _express2.default)(); //import path from 'path';

server.get('/', function (req, res) {
  var appString = (0, _server.renderToString)(_react2.default.createElement(_index2.default, null));

  res.send((0, _template2.default)({
    body: appString,
    title: "Welcome from server"
  }));
});
server.listen(3000, function () {
  return console.log('app listening at port 3000');
});