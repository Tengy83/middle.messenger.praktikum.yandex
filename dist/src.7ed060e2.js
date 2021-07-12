// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/modules/button/button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/form/components/input/input.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/form/form.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./components/input/input.scss":"../src/modules/form/components/input/input.scss","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/headerUser/headerUser.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/authorization/authorization.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/registration/registration.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/usersList/usersList.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\..\\static\\img\\search_icon.svg":[["search_icon.d3c9f39d.svg","img/search_icon.svg"],"img/search_icon.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/chatStub/chatStub.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/user/user.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/editUser/editUser.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/changePassword/changePassword.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/error/error.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/moduleStub/moduleStub.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/scss/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../modules/button/button.scss":"../src/modules/button/button.scss","../modules/form/form.scss":"../src/modules/form/form.scss","../modules/headerUser/headerUser.scss":"../src/modules/headerUser/headerUser.scss","../modules/authorization/authorization.scss":"../src/modules/authorization/authorization.scss","../modules/registration/registration.scss":"../src/modules/registration/registration.scss","../modules/usersList/usersList.scss":"../src/modules/usersList/usersList.scss","../modules/chatStub/chatStub.scss":"../src/modules/chatStub/chatStub.scss","../modules/user/user.scss":"../src/modules/user/user.scss","../modules/editUser/editUser.scss":"../src/modules/editUser/editUser.scss","../modules/changePassword/changePassword.scss":"../src/modules/changePassword/changePassword.scss","../modules/error/error.scss":"../src/modules/error/error.scss","../modules/moduleStub/moduleStub.scss":"../src/modules/moduleStub/moduleStub.scss","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/modules/header/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'header',
  classLogoLinkName: 'header__logo-link',
  logoLink: '#',
  logoImgUrl: './img/logo.svg',
  logoTxt: 'FriendlyMessage',
  logoLinkDataPage: 'chats'
};
exports.state = state;
},{}],"../src/modules/error/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'error',
  errorTitle: '404',
  errorText: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E<br>\u0432\u044B \u0438\u0449\u0435\u0442\u0435, \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",
  link: '/',
  linkTitle: 'Вернуться на главную',
  dataPage: 'home'
};
exports.state = state;
},{}],"../src/modules/header/header.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = createHeader;

function createHeader() {
  return "<header class=\"{{ className }}\">\n    <a href=\"{{logoLink}}\" class=\"{{ classLogoLinkName }}\" data-page=\"{{logoLinkDataPage}}\">\n      <img src=\"{{ logoImgUrl }}\" alt=\"{{ logoTxt }}\" />\n      <span>{{ logoTxt }}</span>\n    </a>\n  </header>";
}
},{}],"../src/modules/error/error.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createError = createError;

function createError() {
  return "<div class=\"{{ className }}\">\n    <h1 class=\"error__title\">{{ errorTitle }}</h1>\n    <div class=\"error__content\">{{ errorText }}</div>\n    <a href=\"{{link}}\" class=\"error_link\"  data-page=\"{{dataPage}}\">{{ linkTitle }}</a>\n  </div>";
}
},{}],"../constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_CONTAINER_ID = exports.TEMPLATE_REGEXP = void 0;
var TEMPLATE_REGEXP = /\{\{(.*?)\}\}/i;
exports.TEMPLATE_REGEXP = TEMPLATE_REGEXP;
var ROOT_CONTAINER_ID = '#root';
exports.ROOT_CONTAINER_ID = ROOT_CONTAINER_ID;
},{}],"../utils/Templator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Templator = void 0;

var _constants = require("../constants");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Templator = /*#__PURE__*/function () {
  function Templator(template) {
    _classCallCheck(this, Templator);

    this._template = template;
  }

  _createClass(Templator, [{
    key: "setTemplate",
    value: function setTemplate(template) {
      this._template = template;
    }
  }, {
    key: "compile",
    value: function compile(ctx) {
      return this._compileTemplate(ctx);
    }
  }, {
    key: "_compileTemplate",
    value: function _compileTemplate(ctx) {
      var tmpl = this._template;
      var key = null;
      var regExp = _constants.TEMPLATE_REGEXP;

      while (key = regExp.exec(tmpl)) {
        if (key[1]) {
          var tmplValue = key[1].trim();
          var data = (0, _utils.getObjValue)(ctx, tmplValue);

          if (typeof data === 'function') {
            window[tmplValue] = data;
            tmpl = tmpl.replace(new RegExp(key[0], 'gi'), "window.".concat(key[1].trim(), "()"));
            continue;
          }

          tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
        }
      }

      return tmpl;
    }
  }]);

  return Templator;
}();

exports.Templator = Templator;
},{"../constants":"../constants.js","./utils":"../utils/utils.js"}],"../utils/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjValue = getObjValue;
exports.identity = identity;
exports.last = last;
exports.first = first;
exports.range = range;
exports.rangeRight = rangeRight;
exports.isEmpty = isEmpty;
exports.domCreate = domCreate;
exports.returnTmpl = returnTmpl;

var _Templator = require("./Templator");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getObjValue(obj, path, defaultValue) {
  var _result;

  var keys = path.split('.');
  var result = obj;

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      result = result[key];

      if (result === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return (_result = result) !== null && _result !== void 0 ? _result : defaultValue;
}

function identity(value) {
  return value;
}

function last(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  var length = arr.length;
  return length ? arr[length - 1] : undefined;
}

function first(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr.length ? arr[0] : undefined;
}

function range() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
  var iteration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var isRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var arr = [];

  if (isNaN(start) || isNaN(end) || isNaN(iteration)) {
    console.error('Error: Argument of the wrong type');
    return undefined;
  }

  if (start === 0 && start === end && iteration === 1) {
    return arr;
  }

  var sign = end < 0 ? -1 : 1;
  start = Math.abs(start);
  end = Math.abs(end);
  iteration = Math.abs(iteration);
  var ind = start === end ? 0 : start;

  if (iteration === 0) {
    return new Array(Math.abs(end - ind)).fill(start);
  }

  for (var i = ind; i < end; i += iteration) {
    var num = i !== 0 ? i * sign : 0;
    arr.push(num);
  }

  return isRight ? arr.reverse() : arr;
}

function rangeRight(start) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;
  var iteration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var isRight = arguments.length > 3 ? arguments[3] : undefined;
  return range(start, end, iteration, true);
}

function isEmpty(arg) {
  if (!arg) {
    return true;
  }

  var type = _typeof(arg);

  switch (type) {
    case 'object':
      if (arg.constructor === Object && Object.keys(arg).length === 0 || Array.isArray(arg) && arg.length === 0 || arg.constructor === Set && arg.size === 0 || arg.constructor === Map && arg.size === 0) {
        return true;
      }

      return false;

    case 'number':
    case 'boolean':
      return true;

    default:
      return false;
  }
}

function domCreate(tagName) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return el;
}

function returnTmpl(template, stateModule) {
  var tmpl = new _Templator.Templator(template);
  return tmpl.compile(stateModule);
}
},{"./Templator":"../utils/Templator.js"}],"../src/pages/error404.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/error/state");

var _header = require("../modules/header/header.tmpl");

var _error = require("../modules/error/error.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _error.createError)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/error/state":"../src/modules/error/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/error/error.tmpl":"../src/modules/error/error.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/authorization/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'authorization',
  titleClass: 'authorization__title',
  title: "\u0421 FriendlyMessage \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430<br /> \u043E\u0441\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u0437\u043D\u0430\u043A\u043E\u043C\u044B\u043C\u0438.",
  form: {
    action: '/user',
    method: 'post',
    className: 'authorization__form form',
    inputs: {
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        placeholder: 'Логин'
      },
      password: {
        type: 'password',
        name: 'password',
        className: 'form__input password',
        placeholder: 'Пароль'
      }
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Войти'
      },
      forgotPass: {
        tag: 'a',
        link: '#',
        className: 'form__forgot_pass form__link',
        title: 'Забыли пароль?',
        dataPage: 'forgot-pass'
      },
      register: {
        tag: 'a',
        link: '#',
        className: 'btn btn-red form__register_link page_link',
        title: 'Регистрация',
        dataPage: 'registration',
        hr: true
      }
    }
  }
};
exports.state = state;
},{}],"../src/modules/form/components/input/input.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInput = createInput;

function createInput(inputState, inputName) {
  var placeholder = inputState['placeholder'] ? "placeholder=\"{{form.inputs.".concat(inputName, ".placeholder }}\"") : '';
  var value = inputState['value'] ? "value=\"{{form.inputs.".concat(inputName, ".value }}\"") : '';
  return "<input type=\"{{form.inputs.".concat(inputName, ".type}}\" name=\"{{form.inputs.").concat(inputName, ".name}}\" class=\"{{form.inputs.").concat(inputName, ".className}}\" ").concat(placeholder, " ").concat(value, " />");
}
},{}],"../src/modules/button/button.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;

function createButton(buttonState, buttonName) {
  var hr = buttonState['hr'] ? "<hr />" : '';
  var href = buttonState['href'] ? "href=\"{{form.buttons.".concat(buttonName, ".link}}\"") : '';
  var dataPage = buttonState['dataPage'] ? "data-page=\"{{form.buttons.".concat(buttonName, ".dataPage}}\"") : '';
  return "".concat(hr, "<{{form.buttons.").concat(buttonName, ".tag}} ").concat(href, " class=\"{{form.buttons.").concat(buttonName, ".className}}\" ").concat(dataPage, ">{{form.buttons.").concat(buttonName, ".title}}</{{form.buttons.").concat(buttonName, ".tag}}>");
}
},{}],"../src/modules/form/form.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForm = createForm;

var _input = require("./components/input/input.tmpl");

var _button = require("../button/button.tmpl");

function createForm(formState) {
  var inputs = createComponentsTmpl(formState.inputs, _input.createInput) || '';
  var buttons = createComponentsTmpl(formState.buttons, _button.createButton) || '';
  return "<form action=\"{{form.action}}\" method=\"{{form.method}}\" class=\"{{form.className}}\">".concat(inputs).concat(buttons, "</form>");
}

function createComponentsTmpl(state, createTmpl) {
  var tmpl = '';
  Object.entries(state).forEach(function (compState) {
    tmpl += createTmpl(compState[1], compState[0]);
  });
  return tmpl;
}
},{"./components/input/input.tmpl":"../src/modules/form/components/input/input.tmpl.js","../button/button.tmpl":"../src/modules/button/button.tmpl.js"}],"../src/modules/authorization/authorization.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAuthorization = createAuthorization;

var _state = require("./state");

var _form = require("../form/form.tmpl");

function createAuthorization() {
  return "<div class=\"{{ className }}\">\n    <h1 class=\"{{ titleClass }}\">\n      {{title}}\n    </h1>\n    ".concat((0, _form.createForm)(_state.state.form), "\n  </div>");
}
},{"./state":"../src/modules/authorization/state.js","../form/form.tmpl":"../src/modules/form/form.tmpl.js"}],"../src/pages/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/authorization/state");

var _header = require("../modules/header/header.tmpl");

var _authorization = require("../modules/authorization/authorization.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _authorization.createAuthorization)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/authorization/state":"../src/modules/authorization/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/authorization/authorization.tmpl":"../src/modules/authorization/authorization.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/registration/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'registration',
  titleClass: 'registration__title',
  title: 'Регистрация',
  form: {
    action: 'user/registration',
    method: 'post',
    className: 'registration__form form',
    inputs: {
      email: {
        type: 'email',
        name: 'email',
        className: 'form__input email',
        placeholder: 'Почта'
      },
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        placeholder: 'Логин'
      },
      firstName: {
        type: 'text',
        name: 'first_name',
        className: 'form__input first_name',
        placeholder: 'Имя'
      },
      secondName: {
        type: 'text',
        name: 'second_name',
        className: 'form__input second_name',
        placeholder: 'Фамилия'
      },
      phone: {
        type: 'tel',
        name: 'phone',
        className: 'form__input phone',
        placeholder: 'Телефон'
      },
      password: {
        type: 'password',
        name: 'password',
        className: 'password',
        placeholder: 'Пароль'
      },
      passwordRepeat: {
        type: 'password',
        name: 'passwordRepeat',
        className: 'passwordRepeat',
        placeholder: 'Пароль (еще раз)'
      }
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Зарегистрироваться'
      },
      login: {
        tag: 'a',
        link: '#',
        className: 'form__login-link form__link',
        title: 'Войти',
        dataPage: 'home'
      }
    }
  }
};
exports.state = state;
},{}],"../src/modules/registration/registration.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegistration = createRegistration;

var _state = require("./state");

var _form = require("../form/form.tmpl");

function createRegistration() {
  return "<div class=\"{{ className }}\">\n    <h1 class=\"{{ titleClass }}\">\n      {{title}}\n    </h1>\n    ".concat((0, _form.createForm)(_state.state.form), "\n  </div>");
}
},{"./state":"../src/modules/registration/state.js","../form/form.tmpl":"../src/modules/form/form.tmpl.js"}],"../src/pages/registration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/registration/state");

var _header = require("../modules/header/header.tmpl");

var _registration = require("../modules/registration/registration.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _registration.createRegistration)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/registration/state":"../src/modules/registration/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/registration/registration.tmpl":"../src/modules/registration/registration.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/headerUser/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'header',
  classLogoLinkName: 'header__logo-link',
  logoLink: '#',
  logoImgUrl: './img/logo.svg',
  logoTxt: 'FriendlyMessage',
  logoLinkDataPage: 'chats',
  userLink: '#',
  classUserLink: 'header__user-link',
  userLinkDataPage: 'user',
  userImgUrl: './img/user_icon_w.svg',
  classUserImg: 'header__user-img',
  userName: 'Евгений'
};
exports.state = state;
},{}],"../src/modules/usersList/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'chats-list',
  form: {
    action: 'search/',
    method: 'get',
    className: 'search__form form',
    inputs: {
      search: {
        type: 'text',
        name: 'search',
        className: 'form__input search',
        placeholder: 'Поиск'
      }
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn-search',
        title: '<span></span>'
      }
    }
  },
  newChatLink: {
    link: '#',
    className: 'btn btn-grey new_chat_link',
    title: '<span>Новый чат</span>'
  }
};
exports.state = state;
},{}],"../src/layouts/contentWrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentWrapper = contentWrapper;

function contentWrapper(content, classWrapper) {
  return "\n  <div class=\"".concat(classWrapper, "\">\n    ").concat(content, "\n  </div>\n  ");
}
},{}],"../src/modules/headerUser/headerUser.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = createHeader;

function createHeader() {
  return "<header class=\"{{ className }}\">\n    <a href=\"{{logoLink}}\" class=\"{{ classLogoLinkName }}\" data-page=\"{{logoLinkDataPage}}\">\n      <img src=\"{{ logoImgUrl }}\" alt=\"{{ logoTxt }}\" />\n      <span>{{ logoTxt }}</span>\n    </a>\n    <a href=\"{{userLink}}\" class=\"{{ classUserLink }}\" data-page=\"{{userLinkDataPage}}\">\n      <img src=\"{{ userImgUrl }}\" class=\"{{ classUserImg }}\" alt=\"{{ userName }}\" />\n      <span>{{ userName }}</span>\n      <img src=\"./img/menu_tres_icon_w.svg\"\" />\n    </a>\n  </header>";
}
},{}],"../src/modules/usersList/usersList.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsersList = createUsersList;

var _state = require("./state");

var _form = require("../form/form.tmpl");

function createUsersList() {
  return "<div class=\"{{ className }}\">\n  ".concat((0, _form.createForm)(_state.state.form), "\n  <a href=\"{{newChatLink.link}}\" class=\"{{newChatLink.className}}\" disabled>{{newChatLink.title}}</a>\n  \n  <ul class=\"user-list\">\n      <li class=\"user-list__item user-item\">\n        <img\n          src=\"./img/user_icon.svg\"\n          alt=\"\"\n          class=\"user-item__icon\"\n        />\n        <div class=\"user-item__content\">\n        <span class=\"user-item__title\">\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440</span\n        ><small class=\"user-item__text\">\u0416\u0438\u0437\u043D\u044C \u0442\u0440\u0443\u0434\u043D\u0430...</small\n        >\n        </div>\n        <a href=\"#\" class=\"small-item__delete\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0427\u0430\u0442\"\n          ><img src=\"./img/menu_tres_icon.svg\" alt=\"\"\n        /></a>\n      </li>\n      <li class=\"user-list__item user-item\">\n        <img\n          src=\"./img/user_icon.svg\"\n          alt=\"\"\n          class=\"user-item__icon\"\n        />\n        <div class=\"user-item__content\">\n        <span class=\"user-item__title\">\u0415\u0432\u0433\u0435\u043D\u0438\u0439</span\n        ><small class=\"user-item__text\">\u0416\u0438\u0437\u043D\u044C \u0442\u0440\u0443\u0434\u043D\u0430...</small\n        >\n        </div>\n        <a href=\"#\" class=\"small-item__delete\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0427\u0430\u0442\"\n          ><img src=\"./img/menu_tres_icon.svg\" alt=\"\"\n        /></a>\n      </li>\n      <li class=\"user-list__item user-item\">\n        <img\n          src=\"./img/user_icon.svg\"\n          alt=\"\"\n          class=\"user-item__icon\"\n        />\n        <div class=\"user-item__content\">\n        <span class=\"user-item__title\">\u041C\u0430\u0440\u0438\u044F</span\n        ><small class=\"user-item__text\">\u0416\u0438\u0437\u043D\u044C \u0442\u0440\u0443\u0434\u043D\u0430...</small\n        >\n        </div>\n        <a href=\"#\" class=\"small-item__delete\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0427\u0430\u0442\"\n          ><img src=\"./img/menu_tres_icon.svg\" alt=\"\"\n        /></a>\n      </li>\n      <li class=\"user-list__item user-item\">\n        <img\n          src=\"./img/user_icon.svg\"\n          alt=\"\"\n          class=\"user-item__icon\"\n        />\n        <div class=\"user-item__content\">\n        <span class=\"user-item__title\">\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440</span\n        ><small class=\"user-item__text\">\u0416\u0438\u0437\u043D\u044C \u0442\u0440\u0443\u0434\u043D\u0430...</small\n        >\n        </div>\n        <a href=\"#\" class=\"small-item__delete\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0427\u0430\u0442\"\n          ><img src=\"./img/menu_tres_icon.svg\" alt=\"\"\n        /></a>\n      </li>\n    </ul>\n    </div>");
}
},{"./state":"../src/modules/usersList/state.js","../form/form.tmpl":"../src/modules/form/form.tmpl.js"}],"../src/modules/chatStub/chatStub.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChatStub = createChatStub;

function createChatStub() {
  return "<div class=\"chat-block\">\n    <h1>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432<br>FriendlyMessage!</h1>\n  </div>";
}
},{}],"../src/pages/chats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/headerUser/state");

var _state2 = require("../modules/usersList/state");

var _contentWrapper = require("../layouts/contentWrapper");

var _headerUser = require("../modules/headerUser/headerUser.tmpl");

var _usersList = require("../modules/usersList/usersList.tmpl");

var _chatStub = require("../modules/chatStub/chatStub.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  var template = (0, _utils.returnTmpl)((0, _headerUser.createHeader)(), _state.state);
  var templateWrapper = (0, _utils.returnTmpl)((0, _usersList.createUsersList)(), _state2.state) + (0, _chatStub.createChatStub)();
  return template + (0, _contentWrapper.contentWrapper)(templateWrapper, 'messenger-wrapper');
}
},{"../modules/headerUser/state":"../src/modules/headerUser/state.js","../modules/usersList/state":"../src/modules/usersList/state.js","../layouts/contentWrapper":"../src/layouts/contentWrapper.js","../modules/headerUser/headerUser.tmpl":"../src/modules/headerUser/headerUser.tmpl.js","../modules/usersList/usersList.tmpl":"../src/modules/usersList/usersList.tmpl.js","../modules/chatStub/chatStub.tmpl":"../src/modules/chatStub/chatStub.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/user/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'user',
  titleClass: 'user__title',
  img: './img/user_profile.svg',
  title: 'Александр',
  email: 'yandex@ya.ru',
  login: 'Alex',
  first_name: 'Александр',
  second_name: 'Программер',
  chat_name: 'Evgenii',
  phone: '+7 (777) 777-77-77',
  form: {
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Редактировать',
        dataPage: 'edit_user'
      },
      changePswLink: {
        tag: 'a',
        link: '#',
        className: 'btn btn-red',
        title: 'Изменить пароль',
        dataPage: 'change_password'
      },
      back: {
        tag: 'a',
        link: '#',
        className: 'back-link',
        title: 'Выйти',
        dataPage: 'chats',
        hr: true
      }
    }
  }
};
exports.state = state;
},{}],"../src/modules/user/user.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;

var _button = require("../button/button.tmpl");

var _state = require("./state");

function createUser() {
  return "<div class=\"{{ className }}\">\n    <img src=\"{{ img }}\" alt=\"{{ title }}\" />\n    <h1 class=\"{{ titleClass }}\">\n      {{title}}\n    </h1>\n    <div class=\"user-profile\">\n      <div class=\"user-profile__item user-email\">\n        <span class=\"user-email__title\">\u041F\u043E\u0447\u0442\u0430</span><span class=\"user-email__content\">{{ email }}</span>\n      </div>\n      <div class=\"user-profile__item user-login\">\n        <span class=\"user-login__title\">\u041B\u043E\u0433\u0438\u043D</span><span class=\"user-login__content\">{{ login }}</span>\n      </div>\n      <div class=\"user-profile__item user-f_name\">\n        <span class=\"user-f_name__title\">\u0418\u043C\u044F</span><span class=\"user-f_name__content\">{{ first_name }}</span>\n      </div>\n      <div class=\"user-profile__item user-s_name\">\n        <span class=\"user-s_name__title\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</span><span class=\"user-s_name__content\">{{ second_name }}</span>\n      </div>\n      <div class=\"user-profile__item user-c_name\">\n        <span class=\"user-c_name__title\">\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435</span><span class=\"user-c_name__content\">{{ chat_name }}</span>\n      </div>\n      <div class=\"user-profile__item user-phone\">\n        <span class=\"user-phone__title\">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</span><span class=\"user-phone__content\">{{ phone }}</span>\n      </div>\n      ".concat(createButtonsTmpl(), "\n    </div>\n  </div>");
}

function createButtonsTmpl() {
  var buttons = '';
  Object.entries(_state.state['form']['buttons']).forEach(function (buttonState) {
    buttons += (0, _button.createButton)(buttonState[1], buttonState[0]);
  });
  console.log(buttons);
  return buttons;
}
},{"../button/button.tmpl":"../src/modules/button/button.tmpl.js","./state":"../src/modules/user/state.js"}],"../src/pages/user.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/user/state");

var _header = require("../modules/header/header.tmpl");

var _user = require("../modules/user/user.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _user.createUser)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/user/state":"../src/modules/user/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/user/user.tmpl":"../src/modules/user/user.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/editUser/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'edit-user',
  titleClass: 'edit-user__title',
  title: 'Александр',
  img: './img/user_profile.svg',
  form: {
    action: 'user/edit',
    method: 'post',
    className: 'edit-user__form form',
    inputs: {
      email: {
        type: 'email',
        name: 'email',
        className: 'form__input email',
        value: 'pochta@yandex.ru'
      },
      login: {
        type: 'text',
        name: 'login',
        className: 'form__input login',
        value: 'Alex'
      },
      firstName: {
        type: 'text',
        name: 'first_name',
        className: 'form__input first_name',
        value: 'Александр'
      },
      secondName: {
        type: 'text',
        name: 'second_name',
        className: 'form__input second_name',
        value: 'Александров'
      },
      chatsName: {
        type: 'text',
        name: 'chats_name',
        className: 'form__input chats_name',
        value: 'Алекс'
      },
      phone: {
        type: 'tel',
        name: 'phone',
        className: 'form__input phone',
        value: '+7 (909) 967 30 30'
      },
      file: {
        type: 'file',
        name: 'file',
        className: 'form__input file'
      }
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Редактировать'
      },
      userLink: {
        tag: 'a',
        link: '#',
        className: 'form__user-link form__link',
        title: 'Выйти',
        dataPage: 'user'
      }
    }
  }
};
exports.state = state;
},{}],"../src/modules/editUser/editUser.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEditUser = createEditUser;

var _state = require("./state");

var _form = require("../form/form.tmpl");

function createEditUser() {
  return "<div class=\"{{ className }}\">\n    <img src=\"{{ img }}\" alt=\"{{ title }}\" />\n    <h1 class=\"{{ titleClass }}\">\n      {{title}}\n    </h1>\n    ".concat((0, _form.createForm)(_state.state.form), "\n  </div>");
}
},{"./state":"../src/modules/editUser/state.js","../form/form.tmpl":"../src/modules/form/form.tmpl.js"}],"../src/pages/editUser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/editUser/state");

var _header = require("../modules/header/header.tmpl");

var _editUser = require("../modules/editUser/editUser.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _editUser.createEditUser)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/editUser/state":"../src/modules/editUser/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/editUser/editUser.tmpl":"../src/modules/editUser/editUser.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/modules/changePassword/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  className: 'change-password',
  titleClass: 'change-password__title',
  title: 'Сменить пароль',
  form: {
    action: 'user/changepsw',
    method: 'post',
    className: 'change-password__form form',
    inputs: {
      password: {
        type: 'password',
        name: 'password',
        className: 'password',
        placeholder: 'Пароль'
      },
      passwordRepeat: {
        type: 'password',
        name: 'passwordRepeat',
        className: 'passwordRepeat',
        placeholder: 'Пароль (еще раз)'
      }
    },
    buttons: {
      submit: {
        tag: 'button',
        type: 'submit',
        className: 'btn',
        title: 'Поменять пароль'
      },
      back: {
        tag: 'a',
        link: '#',
        className: 'form__back-link form__link',
        title: 'Отмена',
        dataPage: 'user'
      }
    }
  }
};
exports.state = state;
},{}],"../src/modules/changePassword/changePassword.tmpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChangePassword = createChangePassword;

var _state = require("./state");

var _form = require("../form/form.tmpl");

function createChangePassword() {
  return "<div class=\"{{ className }}\">\n    <h1 class=\"{{ titleClass }}\">\n      {{title}}\n    </h1>\n    ".concat((0, _form.createForm)(_state.state.form), "\n  </div>");
}
},{"./state":"../src/modules/changePassword/state.js","../form/form.tmpl":"../src/modules/form/form.tmpl.js"}],"../src/pages/changePassword.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _state = require("../modules/header/state");

var _state2 = require("../modules/changePassword/state");

var _header = require("../modules/header/header.tmpl");

var _changePassword = require("../modules/changePassword/changePassword.tmpl");

var _utils = require("../../utils/utils");

function createPage() {
  return (0, _utils.returnTmpl)((0, _header.createHeader)(), _state.state) + (0, _utils.returnTmpl)((0, _changePassword.createChangePassword)(), _state2.state);
}
},{"../modules/header/state":"../src/modules/header/state.js","../modules/changePassword/state":"../src/modules/changePassword/state.js","../modules/header/header.tmpl":"../src/modules/header/header.tmpl.js","../modules/changePassword/changePassword.tmpl":"../src/modules/changePassword/changePassword.tmpl.js","../../utils/utils":"../utils/utils.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

require("./scss/index.scss");

var _error = require("./pages/error404");

var _home = require("./pages/home");

var _registration = require("./pages/registration");

var _chats = require("./pages/chats");

var _user = require("./pages/user");

var _editUser = require("./pages/editUser");

var _changePassword = require("./pages/changePassword");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var pages = {
  error404: _error.createPage,
  home: _home.createPage,
  registration: _registration.createPage,
  chats: _chats.createPage,
  user: _user.createPage,
  edit_user: _editUser.createPage,
  change_password: _changePassword.createPage
};
var root = document.querySelector('#root');

function renderPage(name) {
  var createCurrentPage = pages[name] || _error.createPage;
  removeClickHandlers();
  root.innerHTML = createCurrentPage();
  initClickHandlers();
}

var pathname = window.location.pathname.replace('/', '');
renderPage(pathname || 'home');

function initClickHandlers() {
  var links = document.querySelectorAll('[data-page]');

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener('click', pageRenderListener);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function removeClickHandlers() {
  var links = document.querySelectorAll('[data-page]');

  var _iterator2 = _createForOfIteratorHelper(links),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var link = _step2.value;
      link.removeEventListener('click', pageRenderListener);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function pageRenderListener(ev) {
  ev.preventDefault();
  var pageName = ev.currentTarget.dataset.page;
  renderPage(pageName);
}
},{"./scss/index.scss":"../src/scss/index.scss","./pages/error404":"../src/pages/error404.js","./pages/home":"../src/pages/home.js","./pages/registration":"../src/pages/registration.js","./pages/chats":"../src/pages/chats.js","./pages/user":"../src/pages/user.js","./pages/editUser":"../src/pages/editUser.js","./pages/changePassword":"../src/pages/changePassword.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50081" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map