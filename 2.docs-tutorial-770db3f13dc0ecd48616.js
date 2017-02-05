webpackJsonp([2],{

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b8f87f8fdb4c0295e0cfd931310d74ba.png";

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "63d8539be1b481ea13cd9ca3831fb00f.png";

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
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
	    "This guide will walk you through putting together a small React app from scratch using Junctions and ",
	    a({ "href": "https://github.com/facebookincubator/create-react-app" },
	    "create-react-app"),
	
	    "."),
	
	    p({},
	    "It is assumed you’re already reasonably familiar with React. If you’re not, start by reading ",
	    a({ "href": "http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/" },
	    "Learn Raw React"),
	
	    "."),
	
	    p({},
	    "The result of this guide is ",
	    a({ "href": "https://github.com/jamesknelson/junctions-react-app" },
	    "available on GitHub"),
	
	    "."),
	
	    h2({ "id": "creating-your-project" },
	    "Creating your project"),
	
	    p({},
	    "Before getting started, you’ll need to install ",
	    code({}, "create-react-app"),
	    " if you haven’t already:"),
	
	    codeBlock({ "className": "language-bash" }, "npm <span class=\"token function\" >install</span> -g create-react-app\n"),
	    p({},
	    "Once ",
	    code({}, "create-react-app"),
	    " is installed, create a new app and install ",
	    code({}, "junctions"),
	    ", ",
	    code({}, "react-junctions"),
	    " and ",
	    code({}, "history"),
	    ":"),
	
	    codeBlock({ "className": "language-bash" }, "create-react-app junctions-demo\n<span class=\"token function\" >cd</span> junctions-demo\nnpm <span class=\"token function\" >install</span> junctions react-junctions --save-dev\nnpm start\n"),
	    p({},
	    "Then open ",
	    a({ "href": "http://localhost:3000/" },
	    "http://localhost:3000/"),
	
	    ". You should see a spinning React logo, which means you’re ready to get started!"),
	
	    h2({ "id": "adding-a-menu" },
	    "Adding a menu"),
	
	    p({},
	    "All good demo apps have menus, so let’s start by adding a simple one using ",
	    code({}, "<a>"),
	    " tags."),
	
	    p({},
	    "A project generated with ",
	    code({}, "create-react-app"),
	    " only has one component – the ",
	    code({}, "App"),
	    " component in ",
	    code({}, "App.js"),
	    ". So let’s add our menu there by replacing its ",
	    code({}, "render()"),
	    " method:"),
	
	    codeBlock({ "className": "language-js" }, "  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/dashboard<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Dashboard<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/invoices<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Invoices<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "After saving your changes, you should see a very simple menu. You can even click the links and see how the URL changes! This works because the server included with ",
	    code({}, "create-react-app"),
	    " will redirect any requests to your one ",
	    code({}, "index.html"),
	    " file. But it’s behaviour isn’t exactly what we’d like; every click will result in a flash and refresh of the page."),
	
	    h2({ "id": "history-and" },
	    "History and ",
	    code({}, "pushState")),
	
	    p({},
	    "Instead of letting the browser do a standard page load when the user selects a menu item, we’d like to use the ",
	    a({ "href": "https://developer.mozilla.org/en/docs/Web/API/History" },
	    "History API"),
	
	    "’s ",
	    code({}, "pushState()"),
	    " method to update the URL ",
	    em({},
	    "without"),
	
	    " reloading the page."),
	
	    p({},
	    "The behaviour of the History API can differ between browsers. You could deal with these differences by yourself, but it is easier to use the wrapper provided by the ",
	    a({ "href": "https://github.com/mjackson/history" },
	    "history"),
	
	    " package."),
	
	    p({},
	    "You should have installed this earlier, so all that is left is to import ",
	    code({}, "createBrowserHistory"),
	    " and then to actually create one!"),
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token keyword\" >import</span> createBrowserHistory <span class=\"token keyword\" >from</span> <span class=\"token string\" >'history/createBrowserHistory'</span>\n\n<span class=\"token keyword\" >const</span> history <span class=\"token operator\" >=</span> <span class=\"token function\" >createBrowserHistory</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >App</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "links" },
	    "Links"),
	
	    p({},
	    "Now that you have access to a ",
	    code({}, "history"),
	    " object, you’ll need to use it to replace the default navigation events with ",
	    code({}, "pushState()"),
	    " calls."),
	
	    p({},
	    "The idea is to add an ",
	    code({}, "onClick"),
	    " event handler to each ",
	    code({}, "<a>"),
	    " element, and to cancel the default action and call ",
	    code({}, "history.push()"),
	    " instead:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >function</span> <span class=\"token function\" >pushDashboard</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\n    history<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'/dashboard'</span><span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/dashboard<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>pushDashboard<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Dashboard<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n"),
	    p({},
	    "Of course, writing this out for each link would be traumatic. And it wouldn’t be very user-friendly, either – right clicking isn’t handled well, ",
	    code({}, "target"),
	    " props on the ",
	    code({}, "<a>"),
	    " are not handled well, etc. Luckily, The ",
	    code({}, "react-junctions"),
	    " package provides a ",
	    code({}, "<Link>"),
	    " component which handles all of this for you!"),
	
	    p({},
	    "The ",
	    code({}, "<Link>"),
	    " component provided by ",
	    code({}, "react-junctions"),
	    " takes two parameters:"),
	
	    ul({},
	    li({},
	    code({}, "to"),
	    ": A ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " object specifying where the Link points top"),
	
	    li({},
	    code({}, "history"),
	    ": An optional ",
	    code({}, "history"),
	    " object whose ",
	    code({}, "push()"),
	    " method should be called")),
	
	
	    p({},
	    "Let’s replace the existing ",
	    code({}, "<a>"),
	    " tags with ",
	    code({}, "<Link>"),
	    " elements:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span>\n        <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/dashboard\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        Dashboard\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> \n        <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history\n        to<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/invoices\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        Invoices\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n"),
	    p({},
	    em({},
	    "Note: the ",
	    code({}, "history"),
	    " prop is optional, but your links still need access to a ",
	    code({}, "history"),
	    "! If you don’t pass ",
	    code({}, "history"),
	    " via ",
	    code({}, "props"),
	    ", you’ll need to pass it via ",
	    code({}, "context"),
	    ", using the ",
	    code({}, "<HistoryContext>"),
	    " or ",
	    code({}, "<Router>"),
	    " components. We’ll discuss this a little later on.")),
	
	
	    p({},
	    "After saving your file, you should be able to follow click links without a page refresh. You’re making progress! But there is one problem: how do we know that the user has navigated?"),
	
	    h2({ "id": "handling-navigation-events" },
	    "Handling navigation events"),
	
	    p({},
	    "Each time a new state is pushed onto your ",
	    code({}, "history"),
	    " object, it notifies any listeners that you’ve added. So how do you add a listener? By using ",
	    code({}, "history.listen()"),
	    "!"),
	
	    p({},
	    "Here’s an example which prints the new path to the JavaScript console each time you click a link:"),
	
	    codeBlock({ "className": "language-js" }, "history<span class=\"token punctuation\" >.</span><span class=\"token function\" >listen</span><span class=\"token punctuation\" >(</span>location <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >.</span>pathname<span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "Of course, just printing the location to the console isn’t going to help very much. What you ",
	    em({},
	    "really"),
	
	    " want to do is use the location to decide what to render. But this means that the current location will need to be available as component state. And ",
	    em({},
	    "that"),
	
	    " means that you’re going to need to call ",
	    code({}, "history.listen()"),
	    " within a lifecycle method."),
	
	    p({},
	    "The details on lifecycle methods and component state aren’t really relevant to this guide, so let’s skip them and just say that your ",
	    code({}, "App"),
	    " component is going to look something like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >App</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> \n        \n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n            <span class=\"token comment\" spellcheck=\"true\">// The initial location at page load is</span>\n            <span class=\"token comment\" spellcheck=\"true\">// available at history.location</span>\n            location<span class=\"token punctuation\" >:</span> history<span class=\"token punctuation\" >.</span>location\n        <span class=\"token punctuation\" >}</span>\n        \n        history<span class=\"token punctuation\" >.</span><span class=\"token function\" >listen</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleNavigation<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >handleNavigation</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> location <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span>\n                        <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n                        <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/dashboard\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                        Dashboard\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> \n                        <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history\n                        to<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/invoices\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                        Invoices\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >.</span>pathname<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "With this, your new heading element should reflect the current pathname. You’ve made a router! Congratulations!"),
	
	    h2({ "id": "do-i-really-need-a-router" },
	    "Do I Really Need A Router?"),
	
	    p({},
	    "This may seem out of place in a tutorial for a routing library, but it is an important question to ask. ",
	    em({},
	    "Do I Really Need A Router?")),
	
	
	    p({},
	    "The thing about routing libraries is that they’re only useful when they solve a genuine problem. Otherwise, they’re just taking up space."),
	
	    p({},
	    strong({},
	    "The single major problem that a routing library can solve for you is the structural mismatch between URLs and your React component tree.")),
	
	
	    p({},
	    "If the routing state in your app is only ever used by your top most component – like in the above example – then you don’t have a problem."),
	
	    p({},
	    "But what if you have nested components which each need to access some part of your routing state? In this case, manually passing navigation state around is clumsy and error-prone."),
	
	    p({},
	    img({ "src": __webpack_require__(59), "alt": "Flat URLs don't match nested components" }),
	    em({},
	    "It might not be impossible to get the information to the right component, but it certainly won’t be any fun.")),
	
	
	    p({},
	    "Instead, you’re going to want a representation of your routing state which better matches the structure of your component tree. And that’s where Junctions’ ",
	    code({}, "Route"),
	    " structure comes in."),
	
	    p({},
	    img({ "src": __webpack_require__(60), "alt": "Flat URLs don't match nested components" }),
	    em({},
	    "Route objects are designed to match the structure of your component tree perfectly.")),
	
	
	    h2({ "id": "routes" },
	    "Routes"),
	
	    p({},
	    "A ",
	    code({}, "Route"),
	    " is a data structure which holds information about the user’s current Location within the app. In fact, it holds ",
	    em({},
	    "exactly"),
	
	    " the same information as a ",
	    code({}, "Location"),
	    ". It just uses a different format, which looks a little like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// An name used to identify the *type* of route</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span>\n    \n    <span class=\"token comment\" spellcheck=\"true\">// Params extracted from the URL and query string</span>\n    params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> id<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'12345'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    \n    <span class=\"token comment\" spellcheck=\"true\">// A property which can hold a *nested* route </span>\n    next<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "Returning now to our application, remember that we have a heading which prints the current location by ",
	    code({}, "pathname"),
	    ":"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >.</span>pathname<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n"),
	    p({},
	    "But suppose what we’d really like to do is print the ",
	    code({}, "key"),
	    " of the ",
	    code({}, "Route"),
	    " that corresponds to our current location:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n"),
	    p({},
	    "The question becomes: ",
	    em({},
	    "how do we get hold of one of these ",
	    code({}, "Route"),
	    " objects?")),
	
	
	    h2({ "id": "converting-objects-to-objects" },
	    "Converting ",
	    code({}, "Location"),
	    " objects to ",
	    code({}, "Route"),
	    " objects"),
	
	    p({},
	    "There is an easy way to do this, and an ",
	    em({},
	    "even easier"),
	
	    " way."),
	
	    ul({},
	    li({},
	    "The easy way involves using a ",
	    code({}, "Converter"),
	    " object to convert between ",
	    code({}, "Location"),
	    " and ",
	    code({}, "Route"),
	    " objects."),
	
	    li({},
	    "The ",
	    em({},
	    "even easier"),
	
	    " way is to use the ",
	    code({}, "<Router>"),
	    " component provided by ",
	    code({}, "react-junctions"),
	    ". And as a bonus, this will set ",
	    code({}, "history"),
	    " on its context, removing the need to manually pass it to ",
	    code({}, "<Link>"),
	    " elements rendered inside it.")),
	
	
	    p({},
	    "Actually, the ",
	    code({}, "<Router>"),
	    " component still uses a ",
	    code({}, "Converter"),
	    " internally. It just lets you trade away a little flexibility for a whole lot less boilerplate. And since you probably don’t need to configure the ",
	    code({}, "Converter"),
	    " manually, this is a pretty good deal. So let’s go with the ",
	    em({},
	    "even easier"),
	
	    " option."),
	
	    h2({ "id": "the-component" },
	    "The ",
	    code({}, "<Router>"),
	    " Component"),
	
	    p({},
	    code({}, "<Router>"),
	    " is a component provided by the ",
	    code({}, "react-junctions"),
	    " package that takes three props, but let me tell you about two of them:"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " - a history object to ",
	    code({}, "listen()"),
	    " to"),
	
	    li({},
	    code({}, "render"),
	    " - a React element (or function returning an element) that will be rendered")),
	
	
	    p({},
	    "The ",
	    code({}, "<Router>"),
	    " takes care of all of the history-related boilerplate that was added earlier. All that is left to do is give it a ",
	    code({}, "history"),
	    " object and an element to render."),
	
	    p({},
	    em({},
	    "But how does the rendered element know what the current route is?")),
	
	
	    p({},
	    "Each time the current location changes, ",
	    code({}, "<Router>"),
	    " will calculate a corresponding ",
	    code({}, "Route"),
	    " and inject it into your ",
	    code({}, "render"),
	    " element’s props as ",
	    code({}, "route"),
	    ". This might be a bit of a mouthful, but it is pretty simple when you see it in action:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// This component will receive a `route` prop from the `&lt;Router>`</span>\n<span class=\"token comment\" spellcheck=\"true\">// component. You can add any other props that you'd like to pass</span>\n<span class=\"token comment\" spellcheck=\"true\">// within the `render()` method of the App Component.</span>\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Root</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n                        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/dashboard\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                            Dashboard\n                        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n                        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"/invoices\"</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                            Invoices\n                        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>route<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >App</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n                <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n                <span class=\"token attr-name\" >render={&lt;Root</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span>\n            <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "This makes your app ",
	    em({},
	    "almost"),
	
	    " complete, but there is just one problem. ",
	    code({}, "<Router>"),
	    " doesn’t actually know how to convert ",
	    code({}, "Location"),
	    " objects into ",
	    code({}, "Route"),
	    " objects."),
	
	    p({},
	    "Remember that I mentioned that the ",
	    code({}, "<Router>"),
	    " takes ",
	    em({},
	    "three"),
	
	    " props? The third prop is actually ",
	    em({},
	    "required"),
	
	    "; it is how ",
	    code({}, "<Router>"),
	    " knows how to convert between locations and routes. So what is this mysterious third prop? It is the ",
	    code({}, "junction"),
	    " prop, and you need to pass it a ",
	    code({}, "Junction"),
	    "."),
	
	    h2({ "id": "junctions" },
	    "Junctions"),
	
	    p({},
	    "Your ",
	    code({}, "<Router>"),
	    " uses a ",
	    code({}, "Junction"),
	    " object to decide how to map ",
	    code({}, "Location"),
	    " objects to ",
	    code({}, "Route"),
	    " objects. But instead of trying to explain how that works, let’s just create one. Here is how:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// Add this inside your `Root` class definition</span>\n<span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "This will add a static ",
	    code({}, "junction"),
	    " property to your ",
	    code({}, "Root"),
	    " component. All that is left is to pass it to the ",
	    code({}, "<Router>"),
	    " element:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n            <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>Root<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >render={&lt;Root</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span>\n        <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "Congratulations! You now have a working application that lets you navigate between pages, and each page will display the route ",
	    code({}, "key"),
	    " – i.e. the key of the object passed to ",
	    code({}, "createJunction()"),
	    " that contains the current ",
	    code({}, "path"),
	    "."),
	
	    h2({ "id": "why-you-need-junctions" },
	    "Why you need Junctions"),
	
	    p({},
	    "A ",
	    code({}, "Junction"),
	    " is an object which defines the possible locations that a ",
	    code({}, "<Router>"),
	    " needs to consider. The question is, ",
	    em({},
	    "why"),
	
	    " does a ",
	    code({}, "<Router>"),
	    " need to know all possible locations?"),
	
	    p({},
	    "To answer this, let’s go over an example. Imagine you have the following URL:"),
	
	    code({}, "/invoices/add\n"),
	    p({},
	    "Assuming you don’t also have access to a ",
	    code({}, "Junction"),
	    " object, my question for you is: ",
	    em({},
	    "what does this URL represent?"),
	
	    " Give this a little thought and come up with an answer before moving on."),
	
	    p({},
	    strong({},
	    "…")),
	
	
	    p({},
	    "So what was your answer? Or more precisely, did you even ",
	    em({},
	    "have"),
	
	    " an answer? The problem is that you can’t actually know, because:"),
	
	    ul({},
	    li({},
	    "The URL could represent an ",
	    code({}, "Add Invoice"),
	    " form"),
	
	    li({},
	    "The URL could represent an Invoice with the ID ",
	    code({}, "add")),
	
	    li({},
	    "The URL may be a 404"),
	
	    li({},
	    "Or the URL may be some gateway into a hidden world for all we know")),
	
	
	    p({},
	    "But once you have access to the ",
	    code({}, "Junction"),
	    " you defined above, the answer becomes easy; this URL is a 404. And honestly, this behaviour is kinda crap. So let’s fix it."),
	
	    p({},
	    "Obviously, the URL ",
	    code({}, "/invoices/add"),
	    " should ",
	    em({},
	    "really"),
	
	    " be used to display an invoice with the ID ",
	    code({}, "add"),
	    ". Seriously, you never know what an invoice could be called. But adding a new entry to your ",
	    code({}, "Junction"),
	    " for ",
	    em({},
	    "every possible ID"),
	
	    " doesn’t scale, so let’s use a URL parameter instead."),
	
	    h2({ "id": "parameters" },
	    "Parameters"),
	
	    p({},
	    "Parameters are a way to specify that a possible route may have some associated data like an id, or search query."),
	
	    p({},
	    "To add a parameter to your route, you’ll first need to configure your ",
	    code({}, "Junction"),
	    " with it. Given you’d like to display an invoice view for any URL of the form ",
	    code({}, "/invoices/???"),
	    ", and you’d like the second part of that URL to be accessible at ",
	    code({}, "route.params.id"),
	    ", you can configure your ",
	    code({}, "Junction"),
	    " like so:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    InvoiceDetails<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices/:id'</span><span class=\"token punctuation\" >,</span>\n        paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n            id<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> required<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> \n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "The ",
	    code({}, ":"),
	    " character in the path for ",
	    code({}, "InvoiceDetails"),
	    " is a way of telling Junctions that a path segment should match any possible value, and store that value in ",
	    code({}, "route.params"),
	    ". The string after the ",
	    code({}, ":"),
	    " character is the name of the param to store it in."),
	
	    p({},
	    "Junctions does have one idiosyncrasy with regards to parameters; you need to specify a ",
	    code({}, "paramTypes"),
	    " configuration object for each parameter. This configuration can be the blank object ",
	    code({}, "{}"),
	    ", or can include things like default values and serialisation helpers – check the API Reference if you’d like to know more."),
	
	    p({},
	    "Now that you can access the current invoice id at ",
	    code({}, "route.params.id"),
	    ", you’ll want to actually display it!"),
	
	    p({},
	    "Keeping in mind that this parameter will only be available when the route ",
	    code({}, "key"),
	    " is ",
	    code({}, "\"InvoiceDetails\""),
	    ", you can display the current id by replacing your existing ",
	    code({}, "<h1>"),
	    " tag with something like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n    route<span class=\"token punctuation\" >.</span>key <span class=\"token operator\" >==</span> <span class=\"token string\" >'InvoiceDetails'</span>\n        <span class=\"token operator\" >?</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span>Invoice #<span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>route<span class=\"token punctuation\" >.</span>params<span class=\"token punctuation\" >.</span>id<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>route<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "And if you navigate to ",
	    code({}, "/invoices/add"),
	    ", you should now see the text “Invoice #add”!"),
	
	    p({},
	    "Which is great and all, but what if you actually want ",
	    code({}, "/invoices/add"),
	    " to display an “Add Invoice” form? And what if you want that add form to share a common layout with the “View Invoice” page?"),
	
	    h2({ "id": "routable-components-aka-screens" },
	    "Routable Components, aka Screens"),
	
	    p({},
	    "Trying to force all of your invoicing information into a single ",
	    code({}, "Root"),
	    " Component would be kind of claustrophobic, so let’s create a new ",
	    code({}, "InvoicesScreen"),
	    " component. And since master-detail views are all the rage, something like this should put you on the path to creating the next unicorn:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// InvoicesScreen.jsx</span>\n\n<span class=\"token keyword\" >import</span> React<span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'react'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >InvoicesScreen</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>hr</span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Add Invoice<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >or</span> existing invoice<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    strong({},
	    "This tutorial is still a WIP. The below points are an outline for what is to come. If you’d like to help expand on these points, ",
	    a({ "href": "https://github.com/jamesknelson/junctions/" },
	    "Pull Requests"),
	
	    " are welcome!")),
	
	
	    ul({},
	    li({},
	    "While we haven’t added any link tags yet, let’s have a look at the structure"),
	
	    li({},
	    "Notice how what we have is a list of links, and a block of content."),
	
	    li({},
	    "This is similar to the navbar and content in a standard layout."),
	
	    li({},
	    "In both cases, what we have a list of links acting as a ",
	    em({},
	    "switch"),
	
	    " for the content that should be displayed."),
	
	    li({},
	    "Wherever you see this pattern, you can represent the options of the switch with a Junction.")),
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Invoice<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/:id'</span><span class=\"token punctuation\" >,</span>\n        paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n            invoiceId<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> required<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    Add<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/add'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    ul({},
	    li({},
	    p({},
	    "Note that our paths are ",
	    em({},
	    "relative"),
	
	    ".")),
	
	
	    li({},
	    p({},
	    "This is because we don’t know where our component will be mounted.")),
	
	
	    li({},
	    p({},
	    "Components need to be reusable. And to enable this, Junctions will use these ",
	    code({}, "path"),
	    " arguments as ",
	    em({},
	    "suggestions"),
	
	    " when deciding what URL to assign to the component. But the actual URLs are decided by junctions – not your component.")),
	
	
	    li({},
	    p({},
	    "You may be worried how ",
	    em({},
	    "junctions.js"),
	
	    " will handle the ‘/add’ URL. After all, it matches both paths.")),
	
	
	    li({},
	    p({},
	    "When there is a conflict like this, Junctions will always use the ",
	    em({},
	    "most specific"),
	
	    " URL. In this case, ",
	    code({}, "/add"),
	    " is more specific than ",
	    code({}, "/:id"),
	    ", so it will be used.")),
	
	
	    li({},
	    p({},
	    "Note that the order that the paths are specified is not important. Only the specificity.")),
	
	
	    li({},
	    p({},
	    "Recall that a ",
	    code({}, "Junction"),
	    " object just specifies the types of routes which a component can render.")),
	
	
	    li({},
	    p({},
	    "In this case, our ",
	    code({}, "InvoicesScreen"),
	    " component can render an ",
	    code({}, "Invoice"),
	    " route, or an ",
	    code({}, "Add"),
	    " route.")),
	
	
	    li({},
	    p({},
	    "With this in mind, we can assume that wherever ",
	    code({}, "InvoicesScreen"),
	    " is mounted, it will receive a ",
	    code({}, "route"),
	    " prop whose key will either be ",
	    code({}, "\"Invoice\""),
	    " or ",
	    code({}, "\"Add\""),
	    ".")),
	
	
	    li({},
	    p({},
	    "We also know that if the key is ",
	    code({}, "\"Invoice\""),
	    ", the route object will contain a ",
	    code({}, "params"),
	    " object that contains the invoice id.")),
	
	
	    li({},
	    p({},
	    "Let’s add support for this to the component"))),
	
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> route <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>route\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h2</span><span class=\"token punctuation\" >></span></span>Invoices<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h2</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>divider<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>Add Invoice<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >{</span>route <span class=\"token operator\" >&amp;&amp;</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>key <span class=\"token operator\" >==</span> <span class=\"token string\" >'Add'</span>\n                    <span class=\"token operator\" >?</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>New <span class=\"token class-name\" >Invoice</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>params<span class=\"token punctuation\" >.</span>invoiceId<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token punctuation\" >}</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >}</span>\n"),
	    ul({},
	    li({},
	    "Now that the component can handle the supplied route, all that is left is to pass the correct ",
	    code({}, "route"),
	    " prop into our ",
	    code({}, "<InvoicesScreen>"),
	    " element."),
	
	    li({},
	    "But where does the ",
	    code({}, "route"),
	    " prop come from?"),
	
	    li({},
	    "It comes from the ",
	    code({}, "<Router>"),
	    "!"),
	
	    li({},
	    "But doesn’t the ",
	    code({}, "route"),
	    " that ",
	    code({}, "<Router>"),
	    " supplies correspond to the ",
	    code({}, "App"),
	    " component itself?"),
	
	    li({},
	    "It actually corresponds to both. Just like a React element holds its own props as well as its children, a ",
	    em({},
	    "junctions.js"),
	
	    " route holds its own params as well as the routes for any child components."),
	
	    li({},
	    "These “child” routes are stored under the ",
	    code({}, "next"),
	    " prop.")),
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n            <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>App<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> route <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n                route<span class=\"token punctuation\" >.</span>key <span class=\"token operator\" >==</span> <span class=\"token string\" >'Invoices'</span>\n                    <span class=\"token operator\" >?</span> <span class=\"token operator\" >&lt;</span>InvoicesScreen route<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>next<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n                    <span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token punctuation\" >}</span>\n        <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    ul({},
	    li({},
	    "But while this code is mostly correct, there is still one thing missing."),
	
	    li({},
	    "Currently, ",
	    code({}, "route.next"),
	    " will always be null."),
	
	    li({},
	    "Remember that the junction for the ",
	    code({}, "InvoicesScreen"),
	    " component only specified ",
	    em({},
	    "relative"),
	
	    " paths, not full URLs."),
	
	    li({},
	    code({}, "<InvoicesScreen>"),
	    " is a child of the ",
	    code({}, "App"),
	    " component that is rendered whenever the app’s path is ",
	    code({}, "/invoices"),
	    ". Because of this, it is probably obvious to you that the paths of the ",
	    code({}, "InvoicesScreen"),
	    " junction should be relative to ",
	    code({}, "/invoices"),
	    "."),
	
	    li({},
	    "But Junctions doesn’t know this unless you tell it. And to do so, you must specify the ",
	    code({}, "next"),
	    " Junction when the ",
	    code({}, "Invoices"),
	    " route is active:")),
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices'</span><span class=\"token punctuation\" >,</span>\n        next<span class=\"token punctuation\" >:</span> InvoicesScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    ul({},
	    li({},
	    p({},
	    "And there you have it. This should work if you type some locations in the address bar manually. For example, try ",
	    code({}, "/invoices/0001"),
	    " or ",
	    code({}, "/invoices/add"),
	    ".")),
	
	
	    li({},
	    p({},
	    "All that is left is to add links to the ",
	    code({}, "InvoicesScreen"),
	    " component")),
	
	
	    li({},
	    p({},
	    "But how do we choose what the value of ",
	    code({}, "to"),
	    " should be?")),
	
	
	    li({},
	    p({},
	    code({}, "InvoicesScreen"),
	    " is a ",
	    em({},
	    "component"),
	
	    ". Even if we know where it’ll be mounted within this example, we can’t be sure that it will ",
	    em({},
	    "always"),
	
	    " be mounted under ",
	    code({}, "/invoices"),
	    ".")),
	
	
	    li({},
	    p({},
	    "For example, what if we’d like to display a list of invoices within a page for a given customer? Or what if we’d like to display a list of invoices within a modal?")),
	
	
	    li({},
	    p({},
	    "The problem is that ",
	    code({}, "pathname"),
	    " changes depending on the context that the component is used in.")),
	
	
	    li({},
	    p({},
	    "This is in contrast to the component’s ",
	    code({}, "route"),
	    " prop – which only contains information specific to the component itself.")),
	
	
	    li({},
	    p({},
	    "In fact, your component’s ",
	    code({}, "Junction"),
	    " object actually provides a ",
	    code({}, "createRoute()"),
	    " method that lets you create ",
	    code({}, "Route"),
	    " objects that point within your component.")),
	
	
	    li({},
	    p({},
	    "You can probably see where this is going. Route objects are relative. And ideally, we’d be able to specify a ",
	    code({}, "<Link>"),
	    " element’s with something relative, like routes:"))),
	
	
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token comment\" spellcheck=\"true\">// This won't work</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> invoiceId<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> invoiceId<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Add'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Add Invoice<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n"),
	    ul({},
	    li({},
	    "But this won’t work, because ",
	    code({}, "Link"),
	    " components take ",
	    code({}, "Location"),
	    " objects. And since the browser History API doesn’t understand routes, there is no way around this."),
	
	    li({},
	    em({},
	    "If only there was some way to convert routes into locations.")),
	
	
	    li({},
	    em({},
	    "Something like a ",
	    code({}, "locate"),
	    " function handily passed into our component."))),
	
	
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token comment\" spellcheck=\"true\">// This will work, if `locate` exists</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> invoiceId<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> invoiceId<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Invoice <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Add'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Add Invoice<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n"),
	    ul({},
	    li({},
	    "And as you’ve probably guessed, ",
	    code({}, "locate"),
	    " does exist!"),
	
	    li({},
	    "It just needs to be passed in from your component’s parent:")),
	
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n            <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>App<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> route <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n                route<span class=\"token punctuation\" >.</span>key <span class=\"token operator\" >==</span> <span class=\"token string\" >'Invoices'</span>\n                    <span class=\"token operator\" >?</span> <span class=\"token operator\" >&lt;</span>InvoicesScreen\n                        route<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>next<span class=\"token punctuation\" >}</span>\n                        locate<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>locate<span class=\"token punctuation\" >}</span></span>\n                      <span class=\"token punctuation\" >/></span></span>\n                    <span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h1</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h1</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token punctuation\" >}</span>\n        <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n    <span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    ul({},
	    li({},
	    "This is a little verbose, but the beauty of ",
	    em({},
	    "junctions.js"),
	
	    " is it gives you freedom to write your own helpers."))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "metaTitle": "Learn junctions.js with create-react-app",
	  "metaDescription": "A step-by-step tutorial that will teach you how to create a small app using Junctions and create-react-app.",
	  "title": "Tutorial"
	}


/***/ }

});