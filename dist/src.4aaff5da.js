parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ACuU":[function(require,module,exports) {

},{}],"OKVm":[function(require,module,exports) {

},{"./..\\..\\..\\static\\img\\search_icon.svg":[["search_icon.7b17cbf3.svg","d4mk"],"d4mk"]}],"MEoy":[function(require,module,exports) {

},{"../modules/headerUser/headerUser.scss":"ACuU","../modules/authorization/authorization.scss":"ACuU","../modules/registration/registration.scss":"ACuU","../modules/usersList/usersList.scss":"OKVm","../modules/chatStub/chatStub.scss":"ACuU","../modules/error/error.scss":"ACuU","../modules/moduleStub/moduleStub.scss":"ACuU"}],"RvwE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e={className:"header",classLogoLinkName:"header__logo-link",logoLink:"#",logoImgUrl:"./img/logo.svg",logoTxt:"FriendlyMessage",logoLinkDataPage:"chats"};exports.state=e;
},{}],"cckN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e={className:"error",errorTitle:"404",errorText:"Страница, которую<br>вы ищете, не найдена.",link:"/",linkTitle:"Вернуться на главную",dataPage:"home"};exports.state=e;
},{}],"Yw0R":[function(require,module,exports) {
"use strict";function e(){return'\n  <header class="{{ className }}">\n    <a href="{{logoLink}}" class="{{ classLogoLinkName }}" data-page="{{logoLinkDataPage}}">\n      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />\n      <span>{{ logoTxt }}</span>\n    </a>\n  </header>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHeader=e;
},{}],"Ml5n":[function(require,module,exports) {
"use strict";function e(){return'\n  <div class="{{ className }}">\n    <h1 class="error__title">{{ errorTitle }}</h1>\n    <div class="error__content">{{ errorText }}</div>\n    <a href="{{link}}" class="error_link"  data-page="{{dataPage}}">{{ linkTitle }}</a>\n  </div>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createError=e;
},{}],"gIeR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ROOT_CONTAINER_ID=exports.TEMPLATE_REGEXP=void 0;var e=/\{\{(.*?)\}\}/i;exports.TEMPLATE_REGEXP=e;var r="#root";exports.ROOT_CONTAINER_ID=r;
},{}],"WYMh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Templator=void 0;var e=require("../constants"),t=require("./utils");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var o=function(){function r(e){n(this,r),this._template=e}return i(r,[{key:"setTemplate",value:function(e){this._template=e}},{key:"compile",value:function(e){return this._compileTemplate(e)}},{key:"_compileTemplate",value:function(n){for(var r=this._template,i=null,o=e.TEMPLATE_REGEXP;i=o.exec(r);)if(i[1]){var a=i[1].trim(),l=(0,t.getObjValue)(n,a);if("function"==typeof l){window[a]=l,r=r.replace(new RegExp(i[0],"gi"),"window.".concat(i[1].trim(),"()"));continue}r=r.replace(new RegExp(i[0],"gi"),l)}return r}}]),r}();exports.Templator=o;
},{"../constants":"gIeR","./utils":"F1cB"}],"F1cB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getObjValue=i,exports.identity=a,exports.last=u,exports.first=l,exports.range=c,exports.rangeRight=f,exports.isEmpty=s,exports.domCreate=y,exports.returnTmpl=p;var r=require("./Templator");function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function e(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=n(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return u=r.done,r},e:function(r){l=!0,a=r},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw a}}}}function n(r,t){if(r){if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,t):void 0}}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function i(r,t,n){var o,i,a=r,u=e(t.split("."));try{for(u.s();!(i=u.n()).done;){if(void 0===(a=a[i.value]))return n}}catch(l){u.e(l)}finally{u.f()}return null!==(o=a)&&void 0!==o?o:n}function a(r){return r}function u(r){if(Array.isArray(r)){var t=r.length;return t?r[t-1]:void 0}}function l(r){if(Array.isArray(r))return r.length?r[0]:void 0}function c(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=[];if(!(isNaN(r)||isNaN(t)||isNaN(e))){if(0===r&&r===t&&1===e)return o;var i=t<0?-1:1,a=(r=Math.abs(r))===(t=Math.abs(t))?0:r;if(0===(e=Math.abs(e)))return new Array(Math.abs(t-a)).fill(r);for(var u=a;u<t;u+=e){var l=0!==u?u*i:0;o.push(l)}return n?o.reverse():o}console.error("Error: Argument of the wrong type")}function f(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;arguments.length>3&&arguments[3];return c(r,t,e,!0)}function s(r){if(!r)return!0;switch(t(r)){case"object":return!!(r.constructor===Object&&0===Object.keys(r).length||Array.isArray(r)&&0===r.length||r.constructor===Set&&0===r.size||r.constructor===Map&&0===r.size);case"number":case"boolean":return!0;default:return!1}}function y(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=document.createElement(r);return t&&e.classList.add(t),e}function p(t,e){return new r.Templator(t).compile(e)}
},{"./Templator":"WYMh"}],"vMhU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPage=a;var e=require("../modules/header/state"),r=require("../modules/error/state"),t=require("../modules/header/header.tmpl"),u=require("../modules/error/error.tmpl"),s=require("../../utils/utils");function a(){return(0,s.returnTmpl)((0,t.createHeader)(),e.state)+(0,s.returnTmpl)((0,u.createError)(),r.state)}
},{"../modules/header/state":"RvwE","../modules/error/state":"cckN","../modules/header/header.tmpl":"Yw0R","../modules/error/error.tmpl":"Ml5n","../../utils/utils":"F1cB"}],"hI4I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var t={className:"authorization",titleClass:"authorization__title",title:"С FriendlyMessage вы всегда<br /> остаетесь на связи со своими знакомыми.",form:{action:"/user",method:"post",className:"authorization__form form",inputs:{login:{type:"text",name:"login",className:"form__input login",placeholder:"Логин"},password:{type:"password",name:"password",className:"form__input password",placeholder:"Пароль"}},buttons:{submit:{tag:"button",type:"submit",className:"btn",title:"Войти"},forgotPass:{tag:"a",link:"#",className:"form__forgot_pass form__link",title:"Забыли пароль?"},register:{tag:"a",link:"#",className:"btn btn-red form__register_link page_link",title:"Регистрация",dataPage:"registration",hr:!0}}}};exports.state=t;
},{}],"oDAn":[function(require,module,exports) {
"use strict";function t(t){return'\n    <div class="{{ className }}">\n      <h1 class="{{ titleClass }}">\n        {{title}}\n      </h1>\n\n      <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">\n        <input type="{{form.inputs.login.type}}" name="{{form.inputs.login.name}}" class="{{form.inputs.login.className}}" placeholder="{{form.inputs.login.placeholder}}" />\n        <input\n          type="{{form.inputs.password.type}}"\n          name="{{form.inputs.password.name}}"\n          class="{{form.inputs.password.className}}"\n          placeholder="{{form.inputs.password.placeholder}}"\n        />\n        <{{form.buttons.submit.tag}} type="{{form.buttons.submit.type}}" class="{{form.buttons.submit.className}}" disabled>{{form.buttons.submit.title}}</{{form.buttons.submit.tag}}>\n        <{{form.buttons.forgotPass.tag}} href="{{form.buttons.forgotPass.link}}" class="{{form.buttons.forgotPass.className}}" data-page="{{form.buttons.forgotPass.dataPage}}">{{form.buttons.forgotPass.title}}</{{form.buttons.forgotPass.tag}}>\n\n        <hr />\n\n        <{{form.buttons.register.tag}} href="{{form.buttons.register.link}}" class="{{form.buttons.register.className}}" data-page="{{form.buttons.register.dataPage}}">{{form.buttons.register.title}}</{{form.buttons.register.tag}}>\n      </form>\n    </div>\n  '}function s(t){var s=o(t.inputs)||"";return'\n  <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">\n    '.concat(s,"\n  </form>\n  ")}function o(t){return""}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAuthorization=t;
},{}],"zUUr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPage=i;var e=require("../modules/header/state"),r=require("../modules/authorization/state"),t=require("../modules/header/header.tmpl"),u=require("../modules/authorization/authorization.tmpl"),a=require("../../utils/utils");function i(){return(0,a.returnTmpl)((0,t.createHeader)(),e.state)+(0,a.returnTmpl)((0,u.createAuthorization)(),r.state)}
},{"../modules/header/state":"RvwE","../modules/authorization/state":"hI4I","../modules/header/header.tmpl":"Yw0R","../modules/authorization/authorization.tmpl":"oDAn","../../utils/utils":"F1cB"}],"Ygar":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e={className:"registration",titleClass:"registration__title",title:"Регистрация",form:{action:"user/registration",method:"post",className:"registration__form form",inputs:{email:{type:"email",name:"email",className:"form__input email",placeholder:"Почта"},login:{type:"text",name:"login",className:"form__input login",placeholder:"Логин"},firstName:{type:"text",name:"first_name",className:"form__input first_name",placeholder:"Имя"},secondName:{type:"text",name:"second_name",className:"form__input second_name",placeholder:"Фамилия"},phone:{type:"tel",name:"phone",className:"form__input phone",placeholder:"Телефон"},password:{type:"password",name:"password",className:"password",placeholder:"Пароль"},passwordRepeat:{type:"password",name:"passwordRepeat",className:"passwordRepeat",placeholder:"Пароль (еще раз)"}},buttons:{submit:{tag:"button",type:"submit",className:"btn",title:"Зарегистрироваться"},login:{tag:"a",link:"#",className:"form__login-link form__link",title:"Войти",dataPage:"home"}}}};exports.state=e;
},{}],"bIoa":[function(require,module,exports) {
"use strict";function s(){return'\n  <div class="{{ className }}">\n      <h1 class="{{ titleClass }}">\n        {{title}}\n      </h1>\n      <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">\n      \n      <input type="{{form.inputs.email.type}}" name="{{form.inputs.email.name}}" class="{{form.inputs.email.className}}" placeholder="{{form.inputs.email.placeholder}}" />\n\n      <input type="{{form.inputs.login.type}}" name="{{form.inputs.login.name}}" class="{{form.inputs.login.className}}" placeholder="{{form.inputs.login.placeholder}}" />\n\n      <input type="{{form.inputs.firstName.type}}" name="{{form.inputs.firstName.name}}" class="{{form.inputs.firstName.className}}" placeholder="{{form.inputs.firstName.placeholder}}" />\n\n      <input type="{{form.inputs.secondName.type}}" name="{{form.inputs.secondName.name}}" class="{{form.inputs.secondName.className}}" placeholder="{{form.inputs.secondName.placeholder}}" />\n\n      <input type="{{form.inputs.phone.type}}" name="{{form.inputs.phone.name}}" class="{{form.inputs.phone.className}}" placeholder="{{form.inputs.phone.placeholder}}" />\n\n        <input\n          type="{{form.inputs.password.type}}"\n          name="{{form.inputs.password.name}}"\n          class="{{form.inputs.password.className}}"\n          placeholder="{{form.inputs.password.placeholder}}"\n        />\n        <input\n          type="{{form.inputs.passwordRepeat.type}}"\n          name="{{form.inputs.passwordRepeat.name}}"\n          class="{{form.inputs.passwordRepeat.className}}"\n          placeholder="{{form.inputs.passwordRepeat.placeholder}}"\n        />\n\n        <{{form.buttons.submit.tag}} type="{{form.buttons.submit.type}}" class="{{form.buttons.submit.className}}" disabled>{{form.buttons.submit.title}}</{{form.buttons.submit.tag}}>\n\n        <{{form.buttons.login.tag}} href="{{form.buttons.login.link}}" class="{{form.buttons.login.className}}" data-page="{{form.buttons.login.dataPage}}">{{form.buttons.login.title}}</{{form.buttons.login.tag}}>\n      </form>\n    </div>\n  '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createRegistration=s;
},{}],"jp9Y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPage=i;var e=require("../modules/header/state"),r=require("../modules/registration/state"),t=require("../modules/header/header.tmpl"),s=require("../modules/registration/registration.tmpl"),a=require("../../utils/utils");function i(){return(0,a.returnTmpl)((0,t.createHeader)(),e.state)+(0,a.returnTmpl)((0,s.createRegistration)(),r.state)}
},{"../modules/header/state":"RvwE","../modules/registration/state":"Ygar","../modules/header/header.tmpl":"Yw0R","../modules/registration/registration.tmpl":"bIoa","../../utils/utils":"F1cB"}],"O5qh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e={className:"header",classLogoLinkName:"header__logo-link",logoLink:"#",logoImgUrl:"./img/logo.svg",logoTxt:"FriendlyMessage",logoLinkDataPage:"chats",userLink:"#",classUserLink:"header__user-link",userLinkDataPage:"user",userImgUrl:"./img/user_icon_w.svg",classUserImg:"header__user-img",userName:"Евгений"};exports.state=e;
},{}],"uADZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var t={className:"chats-list",form:{action:"search/",method:"get",className:"search__form form",inputs:{search:{type:"text",name:"search",className:"form__input search",placeholder:"Поиск"}},buttons:{submit:{tag:"button",type:"submit",className:"btn-search",title:"<span></span>"}}},newChatLink:{link:"#",className:"btn btn-grey new_chat_link",title:"<span>Новый чат</span>"}};exports.state=t;
},{}],"o3m9":[function(require,module,exports) {
"use strict";function e(e,n){return'\n  <div class="'.concat(n,'">\n    ').concat(e,"\n  </div>\n  ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.contentWrapper=e;
},{}],"XfI6":[function(require,module,exports) {
"use strict";function a(){return'\n  <{{ dom }} class="{{ className }}">\n    <a href="{{logoLink}}" class="{{ classLogoLinkName }}" data-page="{{logoLinkDataPage}}">\n      <img src="{{ logoImgUrl }}" alt="{{ logoTxt }}" />\n      <span>{{ logoTxt }}</span>\n    </a>\n    <a href="{{userLink}}" class="{{ classUserLink }}" data-page="{{userLinkDataPage}}">\n      <img src="{{ userImgUrl }}" class="{{ classUserImg }}" alt="{{ userName }}" />\n      <span>{{ userName }}</span>\n      <img src="./img/menu_tres_icon_w.svg"" />\n    </a>\n  </{{dom}}>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHeader=a;
},{}],"nx2O":[function(require,module,exports) {
"use strict";function s(){return'\n  <div class="{{ className }}">\n  <form action="{{form.action}}" method="{{form.method}}" class="{{form.className}}">\n    <input type="{{form.inputs.search.type}}" name="{{form.inputs.search.name}}" class="{{form.inputs.search.className}}" placeholder="{{form.inputs.search.placeholder}}" />\n    <{{form.buttons.submit.tag}} type="{{form.buttons.submit.type}}" class="{{form.buttons.submit.className}}" disabled>{{form.buttons.submit.title}}</{{form.buttons.submit.tag}}>\n  </form>\n\n  <a href="{{newChatLink.link}}" class="{{newChatLink.className}}" disabled>{{newChatLink.title}}</a>\n  \n  <ul class="user-list">\n      <li class="user-list__item user-item">\n        <img\n          src="./img/user_icon.svg"\n          alt=""\n          class="user-item__icon"\n        />\n        <div class="user-item__content">\n        <span class="user-item__title">Александр</span\n        ><small class="user-item__text">Жизнь трудна...</small\n        >\n        </div>\n        <a href="#" class="small-item__delete" title="Удалить Чат"\n          ><img src="./img/menu_tres_icon.svg" alt=""\n        /></a>\n      </li>\n      <li class="user-list__item user-item">\n        <img\n          src="./img/user_icon.svg"\n          alt=""\n          class="user-item__icon"\n        />\n        <div class="user-item__content">\n        <span class="user-item__title">Евгений</span\n        ><small class="user-item__text">Жизнь трудна...</small\n        >\n        </div>\n        <a href="#" class="small-item__delete" title="Удалить Чат"\n          ><img src="./img/menu_tres_icon.svg" alt=""\n        /></a>\n      </li>\n      <li class="user-list__item user-item">\n        <img\n          src="./img/user_icon.svg"\n          alt=""\n          class="user-item__icon"\n        />\n        <div class="user-item__content">\n        <span class="user-item__title">Мария</span\n        ><small class="user-item__text">Жизнь трудна...</small\n        >\n        </div>\n        <a href="#" class="small-item__delete" title="Удалить Чат"\n          ><img src="./img/menu_tres_icon.svg" alt=""\n        /></a>\n      </li>\n      <li class="user-list__item user-item">\n        <img\n          src="./img/user_icon.svg"\n          alt=""\n          class="user-item__icon"\n        />\n        <div class="user-item__content">\n        <span class="user-item__title">Владимир</span\n        ><small class="user-item__text">Жизнь трудна...</small\n        >\n        </div>\n        <a href="#" class="small-item__delete" title="Удалить Чат"\n          ><img src="./img/menu_tres_icon.svg" alt=""\n        /></a>\n      </li>\n    </ul>\n    </div>\n'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createUsersList=s;
},{}],"eX3I":[function(require,module,exports) {
"use strict";function e(){return'\n  <div class="chat-block">\n    <h1>Добро пожаловать в<br>\n    FriendlyMessage!</h1>\n  </div>\n  '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createChatStub=e;
},{}],"vqFG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPage=l;var e=require("../modules/headerUser/state"),r=require("../modules/usersList/state"),t=require("../layouts/contentWrapper"),s=require("../modules/headerUser/headerUser.tmpl"),u=require("../modules/usersList/usersList.tmpl"),a=require("../modules/chatStub/chatStub.tmpl"),i=require("../../utils/utils");function l(){var l=(0,i.returnTmpl)((0,s.createHeader)(),e.state),p=(0,i.returnTmpl)((0,u.createUsersList)(),r.state)+(0,a.createChatStub)();return l+(0,t.contentWrapper)(p,"messenger-wrapper")}
},{"../modules/headerUser/state":"O5qh","../modules/usersList/state":"uADZ","../layouts/contentWrapper":"o3m9","../modules/headerUser/headerUser.tmpl":"XfI6","../modules/usersList/usersList.tmpl":"nx2O","../modules/chatStub/chatStub.tmpl":"eX3I","../../utils/utils":"F1cB"}],"bgQ0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e={className:"user",email:"yandex@ya.ru",login:"Evgenii",first_name:"Евгений",second_name:"Программер",chat_name:"Evgenii",phone:"+7 (777) 777-77-77"};exports.state=e;
},{}],"wCWZ":[function(require,module,exports) {
"use strict";function e(e){return'\n  <div class="module-stub">\n    <h1 class="module-stub__title"><strong>'.concat(e,"</strong> module is under development</h1>\n  </div>\n")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createModuleStub=e;
},{}],"HJuW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createUser=r;var e=require("../moduleStub/moduleStub.tmpl");function r(){return(0,e.createModuleStub)("User")}
},{"../moduleStub/moduleStub.tmpl":"wCWZ"}],"SIcK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPage=a;var e=require("../modules/header/state"),r=require("../modules/user/state"),t=require("../modules/header/header.tmpl"),u=require("../modules/user/user.tmpl"),s=require("../../utils/utils");function a(){return(0,s.returnTmpl)((0,t.createHeader)(),e.state)+(0,s.returnTmpl)((0,u.createUser)(),r.state)}
},{"../modules/header/state":"RvwE","../modules/user/state":"bgQ0","../modules/header/header.tmpl":"Yw0R","../modules/user/user.tmpl":"HJuW","../../utils/utils":"F1cB"}],"uBxZ":[function(require,module,exports) {
"use strict";require("./scss/index.scss");var e=require("./pages/error404"),r=require("./pages/home"),t=require("./pages/registration"),n=require("./pages/chats"),a=require("./pages/user");function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw o}}}}function i(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u={error404:e.createPage,home:r.createPage,registration:t.createPage,chats:n.createPage,user:a.createPage},l=document.querySelector("#root");function s(e){var r="";r=u.hasOwnProperty(e)?u[e]:u.error404,d(),l.innerHTML=r(),g()}var f=window.location.pathname.length;function g(){var e,r=o(document.querySelectorAll("[data-page]"));try{for(r.s();!(e=r.n()).done;){e.value.addEventListener("click",p)}}catch(t){r.e(t)}finally{r.f()}}function d(){var e,r=o(document.querySelectorAll("[data-page]"));try{for(r.s();!(e=r.n()).done;){e.value.removeEventListener("click",p)}}catch(t){r.e(t)}finally{r.f()}}function p(e){if(e.preventDefault(),"A"===e.target.tagName)s(e.target.dataset.page);else{for(var r=e.target,t=r.parentNode;"A"!==t.tagName||"BODY"==t.tagName;)t=(r=t).parentNode;t.dataset.page&&s(t.dataset.page)}}window.location.search.toLowerCase().indexOf("error=404")>=0||f>1?s("error404"):s("home");
},{"./scss/index.scss":"MEoy","./pages/error404":"vMhU","./pages/home":"zUUr","./pages/registration":"jp9Y","./pages/chats":"vqFG","./pages/user":"SIcK"}]},{},["uBxZ"], null)