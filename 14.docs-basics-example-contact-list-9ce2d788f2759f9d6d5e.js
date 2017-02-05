webpackJsonp([14],{

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    strong({},
	    "Note: The Guide is still only an outline. ",
	    a({ "href": "https://github.com/jamesknelson/junctions" },
	    "Pull Requests"),
	
	    " would be greatly appreciated!")),
	
	
	    p({},
	    "Let’s put together all the basics with a small example, which lets us navigate through a contact list built with Raw React.")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Example: Contact List"
	}


/***/ }

});