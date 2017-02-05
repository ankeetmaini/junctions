webpackJsonp([3],{

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    blockquote = (0, _react.createFactory)('blockquote'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    h2 = (0, _react.createFactory)('h2'),
	    img = (0, _react.createFactory)('img'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Junctions was originally designed in response to the requirements of a real production application. And as it turns out, these same requirements can be summarised as a haiku."),
	
	    blockquote({},
	    p({},
	    "Components compose")),
	
	
	    blockquote({},
	    p({},
	    "Browsers show “Back” and “Forward”")),
	
	
	    blockquote({},
	    p({},
	    "Get outta’ the way!")),
	
	
	    p({},
	    "So why exactly are these three principles important enough to warrant a haiku? Let’s take a look at each in turn to find out."),
	
	    h2({ "id": "components-compose" },
	    "Components Compose"),
	
	    p({},
	    "React is a wonderful tool for making parts of your code reusable, owing in large part to its component system. But perhaps ",
	    em({},
	    "because"),
	
	    " React makes creating new components so easy, it can also be easy to forget that there are still problems which componentization can’t solve. In particular, components still have access to a shared environment – and they can use that environment in ways that don’t play well with others. Or in mathy jargon, ",
	    em({},
	    "components are not guaranteed to compose"),
	
	    "."),
	
	    p({},
	    "The goal of Junctions is to allow you to write truly reusable components, and part of that is to be able to compose them whichever way you’d like. ",
	    em({},
	    "But URLs are a shared resource"),
	
	    ", and ",
	    strong({},
	    "allowing components to take ownership of URLs willy-nilly can lead to chaos"),
	
	    "."),
	
	    p({},
	    "To demonstrate, consider an application which renders two components:"),
	
	    ul({},
	    li({},
	    "A set of tabs for the application’s navigation"),
	
	    li({},
	    "A modal with the current user’s account details")),
	
	
	    p({},
	    img({ "src": __webpack_require__(325), "alt": "Parallel Routes Wireframe" })),
	
	    p({},
	    "These components ",
	    em({},
	    "should be"),
	
	    " completely independent – in fact, the account details modal component could be reused across any number of applications! But because both components have navigation controls, they need to share the same URL space. And this can cause conflicts."),
	
	    p({},
	    "In order to follow the principle that ",
	    em({},
	    "Components Must Compose"),
	
	    ", components which use Junctions for routing avoid taking ownership of any shared resources. In particular:"),
	
	    ul({},
	    li({},
	    "Components never access routing data through ",
	    a({ "href": "https://facebook.github.io/react/docs/context.html#why-not-to-use-context" },
	    "React Context")),
	
	
	    li({},
	    "Components don’t choose their own URLs (but can still suggest them)")),
	
	
	    p({},
	    "Of course, there is no avoiding the fact that components still need access to shared resources. ",
	    strong({},
	    "The difference with Junctions is that these resources are allocated by your application – not by your components.")),
	
	
	    h2({ "id": "browsers-show-back-and-forward" },
	    "Browsers show “Back” and “Forward”"),
	
	    p({},
	    "If there is one constant over the short history of the web browser, it is that the “Back” and “Forward” buttons have been – and always will be – important."),
	
	    p({},
	    img({ "src": __webpack_require__(324), "alt": "Parallel Routes Wireframe" }),
	    _react2.default.createElement('center', null, ',',
	      _react2.default.createElement('small', null, ', "Netscape Navigator 1.22, with \u201CBack\u201D and \u201CForward\u201D",'), ',')),
	
	
	
	
	    p({},
	    "These two simple buttons hold the distinction of being perhaps the most well understood pieces of web UI in existence. They’re incredibly useful, uniquely ubiquitous, and with Javascript, frustratingly easy to break. And with this in mind, properly supporting “Back” and “Forward” was woven into Junctions’ design from the beginning."),
	
	    p({},
	    "But what does this mean for you, as a developer? Well, Junctions avoids introducing any new state to your application. In order to ensure that “Back” and “Forward” work as planned, ",
	    strong({},
	    "",
	    em({},
	    "all"),
	
	    " navigation state needs to be stored within standard browser APIs"),
	
	    ":"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// Stores all the information in your browser's address bar</span>\nwindow<span class=\"token punctuation\" >.</span>location\n\n<span class=\"token comment\" spellcheck=\"true\">// A JavaScript object which can be updated with</span>\n<span class=\"token comment\" spellcheck=\"true\">// `History.pushState`, allowing arbitrary data to be stored</span>\nHistory<span class=\"token punctuation\" >.</span>state\n"),
	    p({},
	    "With no state to manage, Junctions-based applications are ",
	    em({},
	    "simple"),
	
	    ". All your routing data is available at the application root, and Routing information is passed to your components the way God and The React Devs intended – via ",
	    code({}, "props"),
	    "."),
	
	    p({},
	    "But isn’t this simplicity limiting? Not at all! The thing is that the browser History API isn’t limited to URLs; it also supports ",
	    code({}, "state"),
	    " objects. And given your Junctions-based components don’t allocate their own Locations anyway, ",
	    strong({},
	    "navigation will use URLs when possible, and ",
	    code({}, "state"),
	    " when necessary"),
	
	    ". So you can have your cake, and eat it too!"),
	
	    h2({ "id": "get-outta-the-way" },
	    "Get outta’ the way!"),
	
	    p({},
	    "One of the things about routing tools is that they’re often at the core of your application. After all, the URL bar is at top of the browser. Your ",
	    code({}, "history"),
	    " object is probably one of the first things you instantiate. And your application can’t do ",
	    em({},
	    "anything"),
	
	    " if it doesn’t know what the user wants to see."),
	
	    p({},
	    "So you can see how this might go to the head of someone making a routing library. Not only do they get to control an important part of your project; by limiting how routing data can be accessed, their API can dictate ",
	    em({},
	    "the structure of your entire application!"),
	
	    " And as a number of react-router users have discovered, ",
	    strong({},
	    "if the router API changes – your application will need to change too"),
	
	    "."),
	
	    p({},
	    "Junctions avoids these issues by being completely agnostic as to how you use your routing data. It gives you one single method to convert your URL into a tree of routes. And once the conversion is complete, you can use your routing data however you’d like!"),
	
	    ul({},
	    li({},
	    "You can use it directly at the application root"),
	
	    li({},
	    "You can pass it explicitly where it needs to go, via ",
	    code({}, "props")),
	
	    li({},
	    "You can create some Context-based helpers (like react-router)")),
	
	
	    p({},
	    "But the best part? The conversion of your entire URL into ",
	    code({}, "Route"),
	    " objects can take place ",
	    em({},
	    "outside"),
	
	    " of any React component tree. This means that ",
	    strong({},
	    "Junctions will ",
	    em({},
	    "never"),
	
	    " get in the way of React."),
	
	    " Or Vue. Or Angular. Or whatever framework you choose to use it with."),
	
	    p({},
	    "Now to be clear, this flexibility does come at a cost: out of the box, Junctions-based components are a tad more verbose than those written with competing routers. But to mitigate this, you get packages to integrate with frameworks, and docs which contain examples to follow. And even without these tools, ",
	    em({},
	    "flexibility is less of a problem than you may think."),
	
	    " Because ",
	    strong({},
	    "Junctions gives you back control"),
	
	    ". It lets you add your own sugar, so your routing is not too bland, not too sweet – but just perfect for you. Which sounds great and all, but ",
	    a({ "href": "/docs/introduction/what-you-get-from-junctions.md" },
	    "how exactly does Junctions manage this?"))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "metaDescription": "Junctions.js is a routing library for React that is designed around a haiku.",
	  "title": "The Haiku Of Routing Principles"
	}


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1dbb8572c4f6fc4bb3aac655920b5efe.png";

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "11722dfd0d09de3a50a506b0bcf75d49.png";

/***/ }

});