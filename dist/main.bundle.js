/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_controller_GlobalController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller/GlobalController.js */ \"./src/scripts/controller/GlobalController.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jasmine'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\n\n\nvar jasmine = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jasmine'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\njasmine.loadConfigFile('spec/support/jasmine.json');\njasmine.execute();\n\n//app.loadPolyfills();\n//app.init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/Polyfills/CustomPolyfill.js":
/*!*************************************************!*\
  !*** ./src/scripts/Polyfills/CustomPolyfill.js ***!
  \*************************************************/
/*! exports provided: Polyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Polyfills\", function() { return Polyfills; });\nclass Polyfills {\n    static forEachPolyfill() {\n        if (window.NodeList && !NodeList.prototype.forEach) {\n            NodeList.prototype.forEach = function (callback, params) {\n                params = params || window;\n                for (var i = 0; i < this.length; i++) {\n                    callback.call(params, this[i], i, this);\n                }\n            };\n        }\n    }\n\n    static scrollBy() {\n        if (!Element.prototype.scrollBy) {\n            Element.prototype.scrollBy = function (params) {\n                this.scrollLeft = params.left;\n            };\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/Polyfills/CustomPolyfill.js?");

/***/ }),

/***/ "./src/scripts/cart/CartController.js":
/*!********************************************!*\
  !*** ./src/scripts/cart/CartController.js ***!
  \********************************************/
/*! exports provided: CartController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartController\", function() { return CartController; });\n/* harmony import */ var _components_cartitems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cartitems */ \"./src/scripts/cart/components/cartitems.js\");\n/* harmony import */ var _components_subtotal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/subtotal */ \"./src/scripts/cart/components/subtotal.js\");\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _common_lazy_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/lazy-load */ \"./src/scripts/common/lazy-load.js\");\n\n\n\n\n\nclass CartController {\n\n    constructor() {}\n\n    bindWindowEvents() {\n        window.addEventListener('load', _components_subtotal__WEBPACK_IMPORTED_MODULE_1__[\"subtotal\"].populateCartItems);\n        window.addEventListener('load', () => {\n            Object(_common_lazy_load__WEBPACK_IMPORTED_MODULE_3__[\"lazyImgBinder\"])(this.storage);\n        });\n        window.addEventListener('scroll', () => {\n            Object(_common_lazy_load__WEBPACK_IMPORTED_MODULE_3__[\"lazyImgBinder\"])(this.storage);\n        });\n    }\n\n    bindComponentEvents() {\n\n        _common_common__WEBPACK_IMPORTED_MODULE_2__[\"selector\"].reduceQty().forEach(t => {\n            t.addEventListener('click', _components_cartitems__WEBPACK_IMPORTED_MODULE_0__[\"cartitems\"].reduceQty);\n        });\n        _common_common__WEBPACK_IMPORTED_MODULE_2__[\"selector\"].increaseQty().forEach(t => {\n            t.addEventListener('click', _components_cartitems__WEBPACK_IMPORTED_MODULE_0__[\"cartitems\"].increaseQty);\n        });\n\n        _common_common__WEBPACK_IMPORTED_MODULE_2__[\"selector\"].itemSize().forEach(size => {\n            size.addEventListener('click', _components_cartitems__WEBPACK_IMPORTED_MODULE_0__[\"cartitems\"].selectSize);\n        });\n        _common_common__WEBPACK_IMPORTED_MODULE_2__[\"selector\"].removeItem().forEach(btn => {\n            btn.addEventListener('click', _components_cartitems__WEBPACK_IMPORTED_MODULE_0__[\"cartitems\"].removeItem);\n        });\n    }\n\n    init(firebaseStorage) {\n        this.storage = firebaseStorage;\n        _components_cartitems__WEBPACK_IMPORTED_MODULE_0__[\"cartitems\"].populateCartItems();\n        this.bindWindowEvents();\n        this.bindComponentEvents();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/cart/CartController.js?");

/***/ }),

/***/ "./src/scripts/cart/components/cart.js":
/*!*********************************************!*\
  !*** ./src/scripts/cart/components/cart.js ***!
  \*********************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cart\", function() { return Cart; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _models_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/CartItem */ \"./src/scripts/cart/models/CartItem.js\");\n\n\n\nconst addToCart = (size, qty, itemid) => {\n    const item = {\n        \"id\": Math.random(),\n        \"size\": size,\n        \"qty\": qty,\n        \"itemid\": itemid,\n        \"time\": new Date().getTime()\n    };\n    let itemstr = getLocalStorageCartItems();\n    console.log(\"====>\" + itemstr);\n    let itemArr;\n    if (itemstr === null) {\n        itemArr = [];\n        itemArr.push(item);\n    } else {\n        itemArr = JSON.parse(itemstr);\n        itemArr.push(item);\n    }\n    itemstr = JSON.stringify(itemArr);\n    setLocalStorageCartItems(itemstr);\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].setCartCount();\n};\n\nconst loadFromCart = () => {\n    let itemstr = getLocalStorageCartItems();\n    let itemArr;\n    if (itemstr === null) {\n        return null;\n    } else {\n        itemArr = JSON.parse(itemstr);\n        let validItems = _common_common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].fetchItems('menu-items.json');\n        return itemArr.map(cartitem => {\n            //      debugger;\n            let validItem = validItems.find(t => cartitem.itemid === t.id);\n            if (validItem !== null && validItem !== undefined) {\n                return new _models_CartItem__WEBPACK_IMPORTED_MODULE_1__[\"CartItem\"](validItem, cartitem.id, cartitem.size, cartitem.qty, cartitem.time);\n            }\n        });\n    }\n};\n\nconst validateMenuItem = itemid => {\n    let validItems = _common_common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].fetchItems('menu-items.json');\n    let validItem = validItems.find(t => itemid === t.id);\n    if (validItem !== null && validItem !== undefined) {\n        return true;\n    }\n    return false;\n};\n\nconst getLocalStorageCartItems = () => {\n    return localStorage.getItem('cartItems');\n};\n\nconst setLocalStorageCartItems = cartItemsstr => {\n    return localStorage.setItem('cartItems', cartItemsstr);\n};\n\nconst removeFromCart = cartid => {\n    const itemstr = getLocalStorageCartItems();\n    let arr = JSON.parse(itemstr);\n    arr = arr.filter(cartitem => cartitem.id != cartid);\n    setLocalStorageCartItems(JSON.stringify(arr));\n};\n\nconst updateCart = cartitem => {\n    if (validateMenuItem(cartitem.itemid)) {\n        removeFromCart(cartitem.id);\n        let arr = getLocalStorageCartItems();\n        arr = JSON.parse(arr);\n        arr.push(cartitem);\n        setLocalStorageCartItems(JSON.stringify(arr));\n    }\n};\n\nconst getCartItem = cartid => {\n    const itemstr = getLocalStorageCartItems();\n    let arr = JSON.parse(itemstr);\n    return arr.find(cartitem => cartitem.id == cartid);\n};\n\nconst clearCart = () => {\n    localStorage.clear();\n};\n\nconst Cart = {\n    loadFromCart: loadFromCart,\n    addToCart: addToCart,\n    getCartItem: getCartItem,\n    updateCart: updateCart,\n    removeFromCart: removeFromCart,\n    clearCart: clearCart\n};\n\n//# sourceURL=webpack:///./src/scripts/cart/components/cart.js?");

/***/ }),

/***/ "./src/scripts/cart/components/cartitems.js":
/*!**************************************************!*\
  !*** ./src/scripts/cart/components/cartitems.js ***!
  \**************************************************/
/*! exports provided: cartitems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartitems\", function() { return cartitems; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _templates_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/cart-item */ \"./src/scripts/cart/templates/cart-item.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./src/scripts/cart/components/cart.js\");\n/* harmony import */ var _subtotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtotal */ \"./src/scripts/cart/components/subtotal.js\");\n\n\n\n\n\n\nconst populateCartItems = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].cartcounts().innerHTML = '';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].cartcounts().insertAdjacentHTML('beforeend', cartItemsDom());\n};\n\nconst cartItemsDom = () => {\n\n    const cartitems = _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].loadFromCart();\n    let final = '';\n    cartitems.sort((x, y) => x.time > y.time);\n    cartitems.forEach(item => {\n        final += Object(_templates_cart_item__WEBPACK_IMPORTED_MODULE_1__[\"cartItemTemplate\"])(item);\n    });\n    return final;\n};\n\nconst reduceQty = e => {\n    e.preventDefault();\n    let input = e.target.parentElement.querySelector('input.item-qty');\n    if (parseInt(input.value) > 1) {\n        input.value = parseInt(input.value) - 1;\n        const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.cartId;\n        let tmp = _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].getCartItem(id);\n        if (tmp != undefined) {\n            tmp.qty = input.value;\n            _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].updateCart(tmp);\n            _subtotal__WEBPACK_IMPORTED_MODULE_3__[\"subtotal\"].populateCartItems();\n        }\n    }\n};\n\nconst increaseQty = e => {\n    e.preventDefault();\n    let input = e.target.parentElement.querySelector('input.item-qty');\n    if (parseInt(input.value) < 5) {\n\n        input.value = parseInt(input.value) + 1;\n        const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.cartId;\n        let tmp = _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].getCartItem(id);\n        if (tmp != undefined) {\n            tmp.qty = input.value;\n            _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].updateCart(tmp);\n            _subtotal__WEBPACK_IMPORTED_MODULE_3__[\"subtotal\"].populateCartItems();\n        }\n    }\n};\n\nconst selectSize = e => {\n    const items = _common_common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].fetchItems('menu-items.json');\n    const parent = e.target.parentElement.parentElement.parentElement.parentElement;\n    const id = parent.dataset.itemId;\n    const item = items.find(t => t.id == id);\n    let size = 'f';\n    if (e.target.className === 'halfSize') {\n        parent.querySelector('.item-price span').innerText = '₹' + item.price.h;\n        size = 'h';\n    } else if (e.target.className === 'fullSize') {\n        parent.querySelector('.item-price span').innerText = '₹' + item.price.f;\n    }\n    const cartid = e.target.parentElement.parentElement.parentElement.parentElement.dataset.cartId;\n    let tmp = _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].getCartItem(cartid);\n    if (tmp != undefined) {\n        tmp.size = size;\n        _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].updateCart(tmp);\n        _subtotal__WEBPACK_IMPORTED_MODULE_3__[\"subtotal\"].populateCartItems();\n    }\n};\n\nconst removeItem = e => {\n    const id = e.target.parentElement.parentElement.dataset.cartId;\n    _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].removeFromCart(id);\n    window.location.reload();\n};\n\nconst cartitems = {\n    populateCartItems: populateCartItems,\n    cartItemsDom: cartItemsDom,\n    reduceQty: reduceQty,\n    increaseQty: increaseQty,\n    selectSize: selectSize,\n    removeItem: removeItem\n};\n\n//# sourceURL=webpack:///./src/scripts/cart/components/cartitems.js?");

/***/ }),

/***/ "./src/scripts/cart/components/subtotal.js":
/*!*************************************************!*\
  !*** ./src/scripts/cart/components/subtotal.js ***!
  \*************************************************/
/*! exports provided: subtotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtotal\", function() { return subtotal; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _templates_subtotal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/subtotal */ \"./src/scripts/cart/templates/subtotal.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./src/scripts/cart/components/cart.js\");\n\n\n\n\nconst populateCartItems = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].subtotalcontainer().innerHTML = '';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].subtotalcontainer().insertAdjacentHTML('beforeend', subtotalDom());\n};\n\nconst subtotalDom = () => {\n\n    const cartitems = _cart__WEBPACK_IMPORTED_MODULE_2__[\"Cart\"].loadFromCart();\n    let final = '';\n    cartitems.sort((x, y) => x.time > y.time);\n    final += Object(_templates_subtotal__WEBPACK_IMPORTED_MODULE_1__[\"subtotalTemplate\"])(cartitems);\n    return final;\n};\n\nconst subtotal = {\n    populateCartItems: populateCartItems,\n    subtotalDom: subtotalDom\n};\n\n//# sourceURL=webpack:///./src/scripts/cart/components/subtotal.js?");

/***/ }),

/***/ "./src/scripts/cart/index.js":
/*!***********************************!*\
  !*** ./src/scripts/cart/index.js ***!
  \***********************************/
/*! exports provided: cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cart\", function() { return cart; });\n/* harmony import */ var _CartController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartController */ \"./src/scripts/cart/CartController.js\");\n\n\nconst cart = new _CartController__WEBPACK_IMPORTED_MODULE_0__[\"CartController\"]();\n\n//# sourceURL=webpack:///./src/scripts/cart/index.js?");

/***/ }),

/***/ "./src/scripts/cart/models/CartItem.js":
/*!*********************************************!*\
  !*** ./src/scripts/cart/models/CartItem.js ***!
  \*********************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartItem\", function() { return CartItem; });\nclass CartItem {\n    constructor(item, id, size, qty, time) {\n        this.id = id;\n        this.item = item;\n        this.qty = qty;\n        this.size = size;\n        this.price = item.price[size];\n        this.time = time;\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/cart/models/CartItem.js?");

/***/ }),

/***/ "./src/scripts/cart/templates/cart-item.js":
/*!*************************************************!*\
  !*** ./src/scripts/cart/templates/cart-item.js ***!
  \*************************************************/
/*! exports provided: cartItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartItemTemplate\", function() { return cartItemTemplate; });\nconst cartItemTemplate = cartItem => {\n    return ` <li>\n                    <div class='cart-item' data-cart-id='${cartItem.id}' data-item-id='${cartItem.item.id}'>\n                        <div class='cart-item-img'>\n                            <div>\n                                <img lazy-img-src='${cartItem.item.imgsrc}' src='${loaderbase64}' alt='${cartItem.item.name}' img-loaded='false'>\n                            </div>\n                        </div>\n                        <div class='cart-item-desc'>\n                            <div>\n                                <h3>${cartItem.item.name}</h3>\n                            </div>\n                            <div class='size-container'>\n                                <span class=\"label\">\n                             \n                                ${getItemAvailableSizes(cartItem)}\n                             \n                        </span>\n                            </div>\n                            <div class='item-price'>\n                                 <span>₹${cartItem.price}</span>  \n                            </div>\n\n                        </div>\n                        <div class='item-qty'>\n                            <h4>\n                                <span>\n                                    <a class='reduce-qty' href='#'>-</a>\n                                    <input type='text' class='item-qty' readonly value='${cartItem.qty}'>\n                                    <a class='increase-qty' href='#'>+</a>\n                                </span>\n                            </h4>\n                        </div>\n                        <div class='remove-item'>\n                            <button>REMOVE</button>\n                        </div>\n                    </div>\n                </li>`;\n};\n\nconst getItemAvailableSizes = cartitem => {\n    let final = '';\n    const sizeid = cartitem.id;\n    //   debugger;\n    if (cartitem.item.price.h !== undefined) {\n        final += `H<input type='radio' name='size-${sizeid}' value='h' class='halfSize' ${cartitem.size === 'h' ? 'checked=checked' : ''}>`;\n    }\n    if (cartitem.item.price.f !== undefined) {\n        final += `F<input type='radio' name='size-${sizeid}' value='f' class='fullSize' ${cartitem.size === 'f' ? 'checked=checked' : ''}>`;\n    }\n    return final;\n};\n\nconst loaderbase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzEgMzkuMlYuNGE2My42IDYzLjYgMCAwIDEgMzMuOTYgMTQuNTdMNzcuNjggNDIuMjRhMjUuNTMgMjUuNTMgMCAwIDAtNi43LTMuMDN6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDY0IDY0KSIvPjxwYXRoIGQ9Ik03MSAzOS4yVi40YTYzLjYgNjMuNiAwIDAgMSAzMy45NiAxNC41N0w3Ny42OCA0Mi4yNGEyNS41MyAyNS41MyAwIDAgMC02LjctMy4wM3oiIGZpbGw9IiNiZWJlYmUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2NCA2NCkiLz48cGF0aCBkPSJNNzEgMzkuMlYuNGE2My42IDYzLjYgMCAwIDEgMzMuOTYgMTQuNTdMNzcuNjggNDIuMjRhMjUuNTMgMjUuNTMgMCAwIDAtNi43LTMuMDN6IiBmaWxsPSIjOTc5Nzk3IiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iIzZlNmU2ZSIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDY0IDY0KSIvPjxwYXRoIGQ9Ik03MSAzOS4yVi40YTYzLjYgNjMuNiAwIDAgMSAzMy45NiAxNC41N0w3Ny42OCA0Mi4yNGEyNS41MyAyNS41MyAwIDAgMC02LjctMy4wM3oiIGZpbGw9IiMzYzNjM2MiIHRyYW5zZm9ybT0icm90YXRlKDMxNSA2NCA2NCkiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0IDY0OzQ1IDY0IDY0OzkwIDY0IDY0OzEzNSA2NCA2NDsxODAgNjQgNjQ7MjI1IDY0IDY0OzI3MCA2NCA2NDszMTUgNjQgNjQiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3MjBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PGc+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iNjMuNjYiIGN5PSI2My4xNiIgcj0iMTIiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBkdXI9IjcyMG1zIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSIxOzA7MSIvPjwvZz48L3N2Zz4=';\n\n//# sourceURL=webpack:///./src/scripts/cart/templates/cart-item.js?");

/***/ }),

/***/ "./src/scripts/cart/templates/subtotal.js":
/*!************************************************!*\
  !*** ./src/scripts/cart/templates/subtotal.js ***!
  \************************************************/
/*! exports provided: subtotalTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtotalTemplate\", function() { return subtotalTemplate; });\nconst subtotalTemplate = cartItems => {\n    let subtotal = cartItems.length > 1 ? cartItems.reduce((acc, value) => {\n        if (acc.price != undefined) {\n            acc = Number.parseInt(acc.price) * Number.parseInt(acc.qty);\n        }\n        return Number.parseInt(acc) + Number.parseInt(value.price) * Number.parseInt(value.qty);\n    }) : cartItems[0].price * cartItems[0].qty;\n\n    return `<h3>SUBTOTAL</h3>\n                <div class='subtotal-items'>\n                ${cartItems.map(cartItem => `\n                                    <span>\n                                        ${cartItem.item.name}\n                                    </span>\n                                    <span class='align-right'>\n                                        ₹${cartItem.price} x ${cartItem.qty}\n                                    </span>`).join('')}\n                                </div>\n                                 \n                                <div class='subtotal-price'>\n                                    <span>\n                                        Subtotal(${cartItems.length} items)\n                                    </span>\n                                    <span class='align-right'>\n                                        ₹${subtotal}\n                                    </span>\n                                </div>`;\n};\n\n//# sourceURL=webpack:///./src/scripts/cart/templates/subtotal.js?");

/***/ }),

/***/ "./src/scripts/checkout/CheckoutController.js":
/*!****************************************************!*\
  !*** ./src/scripts/checkout/CheckoutController.js ***!
  \****************************************************/
/*! exports provided: CheckoutController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckoutController\", function() { return CheckoutController; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _components_accordian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordian */ \"./src/scripts/checkout/components/accordian.js\");\n/* harmony import */ var _components_ordersummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ordersummary */ \"./src/scripts/checkout/components/ordersummary.js\");\n\n\n\n\nclass CheckoutController {\n\n    constructor() {}\n\n    bindWindowEvents() {}\n\n    bindComponentEvents() {\n        _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].proceed().forEach(t => t.addEventListener('click', _components_accordian__WEBPACK_IMPORTED_MODULE_1__[\"accordian\"].openNxtAccordian));\n        _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].accordianbtn().forEach(t => t.addEventListener('click', _components_accordian__WEBPACK_IMPORTED_MODULE_1__[\"accordian\"].openAccordian));\n    }\n\n    init() {\n\n        this.bindWindowEvents();\n        this.bindComponentEvents();\n        _components_ordersummary__WEBPACK_IMPORTED_MODULE_2__[\"order\"].populateOrderSummary();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/checkout/CheckoutController.js?");

/***/ }),

/***/ "./src/scripts/checkout/components/accordian.js":
/*!******************************************************!*\
  !*** ./src/scripts/checkout/components/accordian.js ***!
  \******************************************************/
/*! exports provided: accordian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accordian\", function() { return accordian; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n\n\nconst openNxtAccordian = e => {\n\n    e.preventDefault();\n    const currentAccordian = e.target.parentElement.parentElement;\n    const nxtAccordian = currentAccordian.parentElement.nextElementSibling.querySelector('div');\n\n    currentAccordian.style['display'] = 'none';\n    nxtAccordian.style['display'] = 'grid';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].addressaccordianinput().forEach(input => {\n        if (input.value == '' || input.value == undefined) {\n            currentAccordian.style['display'] = 'grid';\n            nxtAccordian.style['display'] = 'none';\n        }\n    });\n};\n\nconst openAccordian = e => {\n\n    e.preventDefault();\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].addressaccordianinput().forEach(input => {\n        e.target.parentElement.querySelector('div').style['display'] = 'grid';\n        if (input.value == '' || input.value == undefined) {\n            e.target.parentElement.querySelector('div').style['display'] = 'none';\n        }\n    });\n};\n\nconst accordian = {\n    openAccordian: openAccordian,\n    openNxtAccordian: openNxtAccordian\n};\n\n//# sourceURL=webpack:///./src/scripts/checkout/components/accordian.js?");

/***/ }),

/***/ "./src/scripts/checkout/components/ordersummary.js":
/*!*********************************************************!*\
  !*** ./src/scripts/checkout/components/ordersummary.js ***!
  \*********************************************************/
/*! exports provided: order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"order\", function() { return order; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _cart_components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cart/components/cart */ \"./src/scripts/cart/components/cart.js\");\n/* harmony import */ var _templates_ordersummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../templates/ordersummary */ \"./src/scripts/checkout/templates/ordersummary.js\");\n\n\n\n\nconst populateOrderSummary = () => {\n    //  selector.ordersummary().innerHTML = '';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].ordersummary().insertAdjacentHTML('afterbegin', orderSummaryDom());\n};\n\nconst orderSummaryDom = () => {\n    const cartitems = _cart_components_cart__WEBPACK_IMPORTED_MODULE_1__[\"Cart\"].loadFromCart();\n    const subtotal = cartitems.length > 1 ? cartitems.reduce((acc, value) => {\n        if (acc.price != undefined) {\n            acc = Number.parseInt(acc.price) * Number.parseInt(acc.qty);\n        }\n        return Number.parseInt(acc) + Number.parseInt(value.price) * Number.parseInt(value.qty);\n    }) : Number.parseInt(cartitems[0].price) * Number.parseInt(cartitems[0].qty);\n    const tax = subtotal * .05;\n    const total = subtotal + tax;\n    return Object(_templates_ordersummary__WEBPACK_IMPORTED_MODULE_2__[\"orderSummaryTemplate\"])(cartitems, subtotal, tax, total);\n};\n\nconst order = {\n    populateOrderSummary: populateOrderSummary\n};\n\n//# sourceURL=webpack:///./src/scripts/checkout/components/ordersummary.js?");

/***/ }),

/***/ "./src/scripts/checkout/index.js":
/*!***************************************!*\
  !*** ./src/scripts/checkout/index.js ***!
  \***************************************/
/*! exports provided: checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkout\", function() { return checkout; });\n/* harmony import */ var _CheckoutController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutController */ \"./src/scripts/checkout/CheckoutController.js\");\n\n\nconst checkout = new _CheckoutController__WEBPACK_IMPORTED_MODULE_0__[\"CheckoutController\"]();\n\n//# sourceURL=webpack:///./src/scripts/checkout/index.js?");

/***/ }),

/***/ "./src/scripts/checkout/templates/ordersummary.js":
/*!********************************************************!*\
  !*** ./src/scripts/checkout/templates/ordersummary.js ***!
  \********************************************************/
/*! exports provided: orderSummaryTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderSummaryTemplate\", function() { return orderSummaryTemplate; });\nconst orderSummaryTemplate = (cartitems, subtotal, tax, total) => {\n\n                return `${cartitems.map(cartitem => {\n                                return `<span>${cartitem.item.name} (${cartitem.size}) x ${cartitem.qty}</span><span>₹${cartitem.price * cartitem.qty}</span>`;\n                }).join('')}<span>SUBTOTAL</span><span>₹${subtotal}</span>\n                    <span>TAX (5%)</span><span>₹${tax}</span>\n                    <span class='total-price'>TOTAL</span><span class='total-price'>₹${total}</span>`;\n};\n\n//# sourceURL=webpack:///./src/scripts/checkout/templates/ordersummary.js?");

/***/ }),

/***/ "./src/scripts/common/common.js":
/*!**************************************!*\
  !*** ./src/scripts/common/common.js ***!
  \**************************************/
/*! exports provided: selector, Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\nconst $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nconst selector = function () {\n    return {\n        \"leftarrow\": () => document.querySelector('.featured-carousel .arrow.left'),\n        \"rightarrow\": () => document.querySelector('.featured-carousel .arrow.right'),\n        \"featureditems\": () => document.querySelectorAll('.featured-carousel .featured-item'),\n        \"slider\": () => document.querySelector('.slider'),\n        \"categories\": () => document.querySelectorAll('.categories li'),\n        \"categories_ul\": () => document.querySelector('.categories ul'),\n        \"category\": () => document.querySelectorAll('section.category:not(.search-result-section)'),\n        \"categorytarget\": () => document.querySelector('section.category:target'),\n        \"header\": () => document.querySelector('header'),\n        \"menuitems\": () => document.querySelector('.menu-items'),\n        \"lazyimg\": () => document.querySelectorAll('img[lazy-img-src]'),\n        \"menuitemcontainer\": () => document.querySelector('.menu-item-container'),\n        \"adddummybtn\": () => document.querySelectorAll('.add-btn-dummy-container button'),\n        \"searchbar\": () => document.querySelector('.search-bar input'),\n        \"searchresults\": () => document.querySelector('.search-results'),\n        \"searchresultsection\": () => document.querySelector('.search-result-section'),\n        \"searchresultsectionmenuitems\": () => document.querySelector('.search-result-section .menu-items'),\n        \"searchIcon\": () => document.querySelector('.search-icon'),\n        \"closeIcon\": () => document.querySelector('.close-icon'),\n        \"fullmenudiv\": () => document.querySelector('.full-menu div'),\n        \"itemSize\": () => document.querySelectorAll('.fullSize,.halfSize'),\n        \"reduceQty\": () => document.querySelectorAll('a.reduce-qty'),\n        \"increaseQty\": () => document.querySelectorAll('a.increase-qty'),\n        \"removeItem\": () => document.querySelectorAll('.remove-item'),\n        \"addtocartbtn\": () => document.querySelectorAll('button.add-to-cart-btn'),\n        \"cartcount\": () => document.querySelector('.cart-count'),\n        \"cartcounts\": () => document.querySelector('ol.cart-items'),\n        \"cartprice\": () => document.querySelectorAll('.item-price span'),\n        \"subtotalcontainer\": () => document.querySelector('.subtotal-container div'),\n        \"proceed\": () => document.querySelectorAll('.accordian-container a'),\n        \"addressaccordianinput\": () => document.querySelectorAll('#address div input'),\n        \"accordianbtn\": () => document.querySelectorAll('.accordian-container button'),\n        \"ordersummary\": () => document.querySelector('.summary')\n    };\n}();\n\nclass Common {\n    static fetchItems(filename) {\n        let tmp;\n        $.ajax({\n            url: '/static/' + filename,\n            datatype: \"json\",\n            async: false,\n            success: function (items) {\n                tmp = Object.values(items);\n            }\n        });\n        return tmp;\n    }\n\n    static setCartCount() {\n        selector.cartcount().innerText = loadFromCart().length;\n    }\n}\n\nconst loadFromCart = () => {\n    let itemstr = localStorage.getItem('cartItems');\n    let itemArr;\n    if (itemstr === null) {\n        return [];\n    } else {\n        itemArr = JSON.parse(itemstr);\n        return itemArr;\n    }\n};\n\n//# sourceURL=webpack:///./src/scripts/common/common.js?");

/***/ }),

/***/ "./src/scripts/common/header.js":
/*!**************************************!*\
  !*** ./src/scripts/common/header.js ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/scripts/common/common.js\");\n\n\nclass Header {\n\n    static reduceHeaderOnScroll() {\n\n        if (Math.floor(window.scrollY) > 10) {\n            _common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].header().className = 'header-height-s';\n        } else if (_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].header().className === 'header-height-s') {\n            _common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].header().className = 'header-height-l';\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/common/header.js?");

/***/ }),

/***/ "./src/scripts/common/lazy-load.js":
/*!*****************************************!*\
  !*** ./src/scripts/common/lazy-load.js ***!
  \*****************************************/
/*! exports provided: lazyImgBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyImgBinder\", function() { return lazyImgBinder; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/scripts/common/common.js\");\n\n\nconst lazyBind = (firebasestorage, ele) => {\n    const rect = ele.getBoundingClientRect();\n    if (ele.attributes['img-loaded'].value === 'false' && (rect.top < window.innerHeight - 100 && rect.top > 0 || rect.bottom > 0 && rect.bottom < window.innerHeight + 100)) {\n        const imgname = ele.attributes['lazy-img-src'].value;\n        firebasestorage.ref().child('menuitems/' + imgname).getDownloadURL().then(function (url) {\n            ele.attributes['src'].value = url;\n        }).catch(function () {\n            ele.attributes['src'].value = '/static/dummy.jpg';\n        });\n        ele.attributes['img-loaded'].value = 'true';\n    }\n};\n\nconst lazyImgBinder = firebasestorage => {\n    _common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].lazyimg().forEach(img => {\n        lazyBind(firebasestorage, img);\n    });\n};\n\n//# sourceURL=webpack:///./src/scripts/common/lazy-load.js?");

/***/ }),

/***/ "./src/scripts/controller/ComponentsController.js":
/*!********************************************************!*\
  !*** ./src/scripts/controller/ComponentsController.js ***!
  \********************************************************/
/*! exports provided: ComponentsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentsController\", function() { return ComponentsController; });\n/* harmony import */ var _home_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/index.js */ \"./src/scripts/home/index.js\");\n/* harmony import */ var _cart_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/index.js */ \"./src/scripts/cart/index.js\");\n/* harmony import */ var _common_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/header.js */ \"./src/scripts/common/header.js\");\n/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.js */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _checkout_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../checkout/index.js */ \"./src/scripts/checkout/index.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\n\n\n\n\n\n\n\nclass ComponentsController {\n    constructor(page) {\n        this.page = page;\n        var config = {\n            apiKey: \"AIzaSyB9NBMkReB1oOkdSO4Csk9qbZPqx4uXh20\",\n            authDomain: \"web201-201.firebaseapp.com\",\n            databaseURL: \"https://web201-201.firebaseio.com\",\n            projectId: \"web201-201\",\n            storageBucket: \"web201-201.appspot.com\",\n            messagingSenderId: \"527954885165\"\n        };\n        firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.initializeApp(config);\n        this.firebaseStorage = firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.storage();\n    }\n\n    init() {\n        window.addEventListener('scroll', _common_header_js__WEBPACK_IMPORTED_MODULE_2__[\"Header\"].reduceHeaderOnScroll);\n        window.addEventListener('load', _common_header_js__WEBPACK_IMPORTED_MODULE_2__[\"Header\"].reduceHeaderOnScroll);\n        window.addEventListener('load', _common_common_js__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].setCartCount);\n        switch (this.page) {\n            case 'cart':\n                {\n                    _cart_index_js__WEBPACK_IMPORTED_MODULE_1__[\"cart\"].init(this.firebaseStorage);\n                    break;\n                }\n            case 'checkout':\n                {\n                    _checkout_index_js__WEBPACK_IMPORTED_MODULE_4__[\"checkout\"].init(this.firebaseStorage);\n                    break;\n                }\n            default:\n                {\n                    _home_index_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].init(this.firebaseStorage);\n                    break;\n                }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/controller/ComponentsController.js?");

/***/ }),

/***/ "./src/scripts/controller/GlobalController.js":
/*!****************************************************!*\
  !*** ./src/scripts/controller/GlobalController.js ***!
  \****************************************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var _ComponentsController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentsController.js */ \"./src/scripts/controller/ComponentsController.js\");\n/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../routes/routes.js */ \"./src/scripts/routes/routes.js\");\n/* harmony import */ var _Polyfills_CustomPolyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Polyfills/CustomPolyfill.js */ \"./src/scripts/Polyfills/CustomPolyfill.js\");\n\n\n\n\nconst initComponents = () => {\n    let ci = new _ComponentsController_js__WEBPACK_IMPORTED_MODULE_0__[\"ComponentsController\"](_routes_routes_js__WEBPACK_IMPORTED_MODULE_1__[\"Route\"].getPage());\n    ci.init();\n};\n\nconst loadPolyfills = () => {\n    _Polyfills_CustomPolyfill_js__WEBPACK_IMPORTED_MODULE_2__[\"Polyfills\"].forEachPolyfill();\n    _Polyfills_CustomPolyfill_js__WEBPACK_IMPORTED_MODULE_2__[\"Polyfills\"].scrollBy();\n};\n\nconst app = {\n    init: initComponents,\n    loadPolyfills: loadPolyfills\n};\n\n//# sourceURL=webpack:///./src/scripts/controller/GlobalController.js?");

/***/ }),

/***/ "./src/scripts/home/HomeController.js":
/*!********************************************!*\
  !*** ./src/scripts/home/HomeController.js ***!
  \********************************************/
/*! exports provided: HomeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeController\", function() { return HomeController; });\n/* harmony import */ var _components_category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category.js */ \"./src/scripts/home/components/category.js\");\n/* harmony import */ var _components_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carousel.js */ \"./src/scripts/home/components/carousel.js\");\n/* harmony import */ var _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuitem.js */ \"./src/scripts/home/components/menuitem.js\");\n/* harmony import */ var _common_lazy_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/lazy-load */ \"./src/scripts/common/lazy-load.js\");\n/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.js */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search */ \"./src/scripts/home/components/search.js\");\n\n\n\n\n\n\n\nclass HomeController {\n\n    constructor() {}\n\n    populateData() {\n        _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].populateData();\n        _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].populateFullMenuData();\n        _components_category_js__WEBPACK_IMPORTED_MODULE_0__[\"category\"].populateData();\n    }\n\n    init(firebaseStorage) {\n        this.storage = firebaseStorage;\n        this.populateData();\n        _components_search__WEBPACK_IMPORTED_MODULE_5__[\"search\"].generateMenuIndex();\n        this.bindWindowEvents();\n        this.bindComponentEvents();\n    }\n\n    bindWindowEvents() {\n        window.addEventListener('scroll', _components_category_js__WEBPACK_IMPORTED_MODULE_0__[\"category\"].selectCategory);\n        window.addEventListener('load', () => {\n            Object(_common_lazy_load__WEBPACK_IMPORTED_MODULE_3__[\"lazyImgBinder\"])(this.storage);\n        });\n        window.addEventListener('scroll', () => {\n            Object(_common_lazy_load__WEBPACK_IMPORTED_MODULE_3__[\"lazyImgBinder\"])(this.storage);\n        });\n    }\n\n    bindComponentEvents() {\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].rightarrow().addEventListener('click', _components_carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"carousel\"].moveRight);\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].leftarrow().addEventListener('click', _components_carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"carousel\"].moveLeft);\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].searchbar().addEventListener('keyup', _components_search__WEBPACK_IMPORTED_MODULE_5__[\"search\"].searchForInput);\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].searchIcon().addEventListener('click', _components_search__WEBPACK_IMPORTED_MODULE_5__[\"search\"].searchAndGetAll);\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].closeIcon().addEventListener('click', _components_search__WEBPACK_IMPORTED_MODULE_5__[\"search\"].clearSearch);\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].adddummybtn().forEach(t => t.addEventListener('focusin', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].showAddToCart));\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].adddummybtn().forEach(t => t.addEventListener('focusout', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].hideAddToCart));\n\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].itemSize().forEach(size => {\n            size.addEventListener('click', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].selectSize);\n        });\n\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].reduceQty().forEach(t => {\n            t.addEventListener('click', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].reduceQty);\n        });\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].increaseQty().forEach(t => {\n            t.addEventListener('click', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].increaseQty);\n        });\n        _common_common_js__WEBPACK_IMPORTED_MODULE_4__[\"selector\"].addtocartbtn().forEach(t => {\n            t.addEventListener('click', _components_menuitem_js__WEBPACK_IMPORTED_MODULE_2__[\"menuItems\"].getSelectedItem);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/home/HomeController.js?");

/***/ }),

/***/ "./src/scripts/home/components/carousel.js":
/*!*************************************************!*\
  !*** ./src/scripts/home/components/carousel.js ***!
  \*************************************************/
/*! exports provided: carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carousel\", function() { return carousel; });\n/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common.js */ \"./src/scripts/common/common.js\");\n\n\nconst moveRight = () => {\n    _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollBy({\n        left: window.innerWidth * 0.85,\n        behavior: 'smooth'\n    });\n    if (_common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollWidth < _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollLeft + window.innerWidth * 0.85) {\n        _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollBy({\n            left: _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollWidth * -1,\n            behavior: 'smooth'\n        });\n    }\n};\n\nconst moveLeft = () => {\n    _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].slider().scrollBy({\n        left: window.innerWidth * 0.85 * -1,\n        behavior: 'smooth'\n    });\n};\n\nconst carousel = {\n    moveRight: moveRight,\n    moveLeft: moveLeft\n};\n\n//# sourceURL=webpack:///./src/scripts/home/components/carousel.js?");

/***/ }),

/***/ "./src/scripts/home/components/category.js":
/*!*************************************************!*\
  !*** ./src/scripts/home/components/category.js ***!
  \*************************************************/
/*! exports provided: allCategoriesDom, category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allCategoriesDom\", function() { return allCategoriesDom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"category\", function() { return category; });\n/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common.js */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Category */ \"./src/scripts/home/models/Category.js\");\n/* harmony import */ var _templates_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/category */ \"./src/scripts/home/templates/category.js\");\n\n\n\n\n\nconst selectCategory = () => {\n    _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].category().forEach(ele => {\n        const bufferheight = window.innerHeight * 0.08;\n        const winloc = bufferheight + window.scrollY;\n\n        if (Math.floor(winloc) >= Math.floor(ele.offsetTop - bufferheight) && Math.floor(winloc) <= Math.floor(ele.offsetTop + ele.offsetHeight - bufferheight)) {\n\n            _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].categories().forEach(x => {\n                if (x.id == 'cat-' + ele.id) {\n                    x.style['background-color'] = \"#f7a91980\";\n                    x.style['font-weight'] = \"600\";\n                } else {\n                    x.style['background-color'] = '#fff';\n                    x.style['font-weight'] = \"400\";\n                }\n            });\n        } else {\n            ele.style['background-color'] = '#fff';\n            //ele.style = \"background-color:#fff\";\n        }\n    });\n};\n\nconst fetchCategories = () => {\n    let tmp = [];\n    let items = _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].fetchItems('categories.json');\n    for (let i = 0; i < items.length; i++) {\n        tmp.push(new _models_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"](items[i].id, items[i].name, items[i].imgsrc));\n    }\n    return tmp;\n};\n\nconst fetchCategories2 = () => {\n    let tmp = [];\n    let items = _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].fetchItems('categories2.json');\n    for (let i = 0; i < items.length; i++) {\n        tmp.push(new _models_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"](items[i].id, items[i].name));\n    }\n    return tmp;\n};\n\nconst allCategoriesDom = () => {\n\n    let _allcategories = '';\n    fetchCategories().forEach(cat => {\n        _allcategories += Object(_templates_category__WEBPACK_IMPORTED_MODULE_2__[\"categoryTemplate\"])(cat);\n    });\n    return _allcategories;\n};\n\nconst populateData = () => {\n    _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].categories_ul().innerHTML = '';\n    _common_common_js__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].categories_ul().insertAdjacentHTML(\"afterbegin\", allCategoriesDom());\n};\n\nconst category = {\n    selectCategory: selectCategory,\n    populateData: populateData,\n    allCategoriesDom: allCategoriesDom,\n    fetchCategories: fetchCategories,\n    fetchCategories2: fetchCategories2\n};\n\n//# sourceURL=webpack:///./src/scripts/home/components/category.js?");

/***/ }),

/***/ "./src/scripts/home/components/menuitem.js":
/*!*************************************************!*\
  !*** ./src/scripts/home/components/menuitem.js ***!
  \*************************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuItems\", function() { return menuItems; });\n/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/MenuItem */ \"./src/scripts/home/models/MenuItem.js\");\n/* harmony import */ var _templates_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/menu-item */ \"./src/scripts/home/templates/menu-item.js\");\n/* harmony import */ var _templates_menu_item_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/menu-item-section */ \"./src/scripts/home/templates/menu-item-section.js\");\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category */ \"./src/scripts/home/components/category.js\");\n/* harmony import */ var _cart_components_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cart/components/cart */ \"./src/scripts/cart/components/cart.js\");\n\n\n\n\n\n\n\n\nconst fetchMenuItems = function () {\n    let items = _common_common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].fetchItems('menu-items.json');\n    let tmp = [];\n    for (let i = 0; i < items.length; i++) {\n        tmp.push(new _models_MenuItem__WEBPACK_IMPORTED_MODULE_0__[\"MenuItem\"](items[i].id, items[i].name, items[i].price, items[i].description, items[i].imgsrc, items[i].splcategoryid, items[i].categoryid, items[i].tags));\n    }\n    return tmp;\n};\n\nconst populateData = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_3__[\"selector\"].menuitemcontainer().insertAdjacentHTML('beforeend', menuItemSectionDom());\n};\n\nconst populateFullMenuData = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_3__[\"selector\"].fullmenudiv().insertAdjacentHTML('beforeend', fullMenuItemSectionDom());\n};\n\nconst populateSearchData = item => {\n    _common_common__WEBPACK_IMPORTED_MODULE_3__[\"selector\"].searchresultsectionmenuitems().insertAdjacentHTML('beforeend', Object(_templates_menu_item__WEBPACK_IMPORTED_MODULE_1__[\"menuItemTemplate\"])(item));\n};\n\nconst menuItemSectionDom = () => {\n    const c = _category__WEBPACK_IMPORTED_MODULE_4__[\"category\"].fetchCategories();\n    const cat_menuitem_map = new Map();\n    const menuitems = fetchMenuItems();\n    c.forEach(cat => {\n        const item_arr = menuitems.filter(item => item.splcategoryid.includes(cat.id));\n        cat_menuitem_map.set(cat, item_arr);\n    });\n    let final = '';\n    cat_menuitem_map.forEach((value, key) => {\n        final += Object(_templates_menu_item_section__WEBPACK_IMPORTED_MODULE_2__[\"menuItemSectionTemplate\"])(key, value);\n    });\n    return final;\n};\n\nconst fullMenuItemSectionDom = () => {\n    const c = _category__WEBPACK_IMPORTED_MODULE_4__[\"category\"].fetchCategories2();\n    const cat_menuitem_map = new Map();\n    const menuitems = fetchMenuItems();\n    c.forEach(cat => {\n        const item_arr = menuitems.filter(item => item.categoryid.includes(cat.id));\n        cat_menuitem_map.set(cat, item_arr);\n    });\n    let final = '';\n    cat_menuitem_map.forEach((value, key) => {\n        final += Object(_templates_menu_item_section__WEBPACK_IMPORTED_MODULE_2__[\"menuItemSectionTemplate\"])(key, value);\n    });\n    return final;\n};\n\nconst selectSize = e => {\n    if (e.target.className === 'halfSize') {\n        let h = e.target.parentElement.parentElement.parentElement.querySelector('div span.price-half');\n        h.style['display'] = 'inline-block';\n        let f = e.target.parentElement.parentElement.parentElement.querySelector('div span.price-full');\n        f.style['display'] = 'none';\n    } else if (e.target.className === 'fullSize') {\n        let h = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('div span.price-half');\n        h.style['display'] = 'none';\n        let f = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('div span.price-full');\n        f.style['display'] = 'inline-block';\n    }\n};\n\nconst reduceQty = e => {\n    e.preventDefault();\n    let input = e.target.parentElement.querySelector('input.item-qty');\n    if (parseInt(input.value) > 0) input.value = parseInt(input.value) - 1;\n};\n\nconst increaseQty = e => {\n    e.preventDefault();\n    let input = e.target.parentElement.querySelector('input.item-qty');\n    if (parseInt(input.value) < 5) input.value = parseInt(input.value) + 1;\n};\n\nconst getSelectedItem = e => {\n    e.preventDefault();\n    const ele = e.target.parentElement.parentElement.querySelector('input[type=\"radio\"]:checked');\n    let size = 'f';\n    if (ele !== null) {\n        size = ele.value;\n    }\n    if (size === null) {\n        size = 'f';\n    }\n    let qty = e.target.parentElement.parentElement.querySelector('input.item-qty').value;\n    if (qty == '0') {\n        qty = '1';\n    }\n    const id = e.target.parentElement.parentElement.parentElement.id;\n    if (id != undefined && id.length > 0) {\n        _cart_components_cart__WEBPACK_IMPORTED_MODULE_5__[\"Cart\"].addToCart(size, qty, id);\n        animateCart();\n    }\n};\n\nconst animateCart = () => {\n    const l = document.querySelector('.cart-link');\n    l.classList.remove('cart-link');\n    setTimeout(() => {\n        const animate = l => {\n            l.className = 'cart-link';\n        };\n        animate(l);\n    }, 50);\n};\n\n//added for accessibility\nconst showAddToCart = e => {\n\n    e.target.parentElement.nextElementSibling.style['transform'] = 'scaleY(1)';\n};\n\n//added for accessibility\n/*/\r\nconst hideAddToCart = (e) => {\r\n    e.target.parentElement.nextElementSibling.style['transform'] = 'scaleY(0)';\r\n};\r\n/*/\n\nconst menuItems = {\n    populateData: populateData,\n    menuItemSectionDom: menuItemSectionDom,\n    populateSearchData: populateSearchData,\n    populateFullMenuData: populateFullMenuData,\n    fullMenuItemSectionDom: fullMenuItemSectionDom,\n    selectSize: selectSize,\n    reduceQty: reduceQty,\n    increaseQty: increaseQty,\n    getSelectedItem: getSelectedItem,\n    showAddToCart: showAddToCart\n};\n\n//# sourceURL=webpack:///./src/scripts/home/components/menuitem.js?");

/***/ }),

/***/ "./src/scripts/home/components/search.js":
/*!***********************************************!*\
  !*** ./src/scripts/home/components/search.js ***!
  \***********************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ \"./src/scripts/common/common.js\");\n/* harmony import */ var _templates_search_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/search-result */ \"./src/scripts/home/templates/search-result.js\");\n/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/MenuItem */ \"./src/scripts/home/models/MenuItem.js\");\n/* harmony import */ var _menuitem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuitem.js */ \"./src/scripts/home/components/menuitem.js\");\n\n\n\n\nconst $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nconst populateSearchDropDown = menuitem => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresults().insertAdjacentHTML('beforeend', Object(_templates_search_result__WEBPACK_IMPORTED_MODULE_1__[\"searchResultTemplate\"])(menuitem));\n};\n\nconst searchForInput = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresults().style['display'] = 'block';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresults().innerHTML = '';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchbar().removeEventListener('keyup', searchForInput);\n    setTimeout(function () {\n        _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchbar().addEventListener('keyup', searchForInput);\n        searchKeys(populateSearchDropDown);\n    }, 400);\n};\n\nconst searchAndGetAll = () => {\n    clearSearch();\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresultsection().style['display'] = 'block';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresultsectionmenuitems().innerHTML = '';\n    searchKeys(_menuitem_js__WEBPACK_IMPORTED_MODULE_3__[\"menuItems\"].populateSearchData, NoResultFound);\n    window.scrollBy(0, 1);\n};\n\nconst NoResultFound = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresultsectionmenuitems().innerHTML = '<span style=\"margin-left:5%\">No Result Found.<span>';\n};\n\nconst searchKeys = fn => {\n    // let flag = false;\n    if (_common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchbar().value.length > 0) {\n        index.forEach((value, key) => {\n            const reg1 = new RegExp('(.*)' + _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchbar().value.toLowerCase() + '(.*)');\n            const reg2 = new RegExp('(.*)' + key.toLowerCase() + '(.*)');\n            if (reg1.test(key.toLowerCase()) || reg2.test(_common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchbar().value.toLowerCase())) {\n                value.forEach(menuitem => {\n                    fn(menuitem);\n                    //      flag = true;\n                });\n            }\n        });\n    }\n};\n\nlet index = new Map();\nconst generateMenuIndex = function () {\n    index = new Map();\n    $.ajax({\n        url: '/static/menu-items.json',\n        datatype: 'json',\n        async: true,\n        success: function (items) {\n            items = Object.values(items);\n            for (let i = 0; i < items.length; i++) {\n                const m = new _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"](items[i].id, items[i].name, items[i].price, items[i].description, items[i].imgsrc, items[i].categoryid, items[i].tags);\n                const tags = items[i].tags.split(',');\n                tags.forEach(tag => {\n                    tag = tag.trim().toLowerCase();\n                    if (index.has(tag)) {\n                        index.get(tag).push(m);\n                    } else if (!index.has(tag)) {\n                        let arr = [];\n                        arr.push(m);\n                        index.set(tag.toLowerCase(), arr);\n                    }\n                });\n            }\n        }\n    });\n};\n\nconst clearSearch = () => {\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresults().style['display'] = 'none';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresults().innerHTML = '';\n    _common_common__WEBPACK_IMPORTED_MODULE_0__[\"selector\"].searchresultsection().style['display'] = 'none';\n};\n\nconst search = {\n    searchForInput: searchForInput,\n    generateMenuIndex: generateMenuIndex,\n    searchAndGetAll: searchAndGetAll,\n    clearSearch: clearSearch\n};\n\n//# sourceURL=webpack:///./src/scripts/home/components/search.js?");

/***/ }),

/***/ "./src/scripts/home/index.js":
/*!***********************************!*\
  !*** ./src/scripts/home/index.js ***!
  \***********************************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _HomeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeController */ \"./src/scripts/home/HomeController.js\");\n\n\nconst home = new _HomeController__WEBPACK_IMPORTED_MODULE_0__[\"HomeController\"]();\n\n//# sourceURL=webpack:///./src/scripts/home/index.js?");

/***/ }),

/***/ "./src/scripts/home/models/Category.js":
/*!*********************************************!*\
  !*** ./src/scripts/home/models/Category.js ***!
  \*********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\nclass Category {\n    constructor(id, name, imgsrc) {\n        this.id = id;\n        this.name = name;\n        this.imgsrc = imgsrc;\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/home/models/Category.js?");

/***/ }),

/***/ "./src/scripts/home/models/MenuItem.js":
/*!*********************************************!*\
  !*** ./src/scripts/home/models/MenuItem.js ***!
  \*********************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\nclass MenuItem {\n\n    constructor(id, name, price, description, imgsrc, splcategoryid, categoryid, tags) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.description = description;\n        this.imgsrc = imgsrc;\n        this.splcategoryid = splcategoryid;\n        this.categoryid = categoryid;\n        this.tags = tags;\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/home/models/MenuItem.js?");

/***/ }),

/***/ "./src/scripts/home/templates/category.js":
/*!************************************************!*\
  !*** ./src/scripts/home/templates/category.js ***!
  \************************************************/
/*! exports provided: categoryTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"categoryTemplate\", function() { return categoryTemplate; });\nconst categoryTemplate = cat => `<li id=\"cat-${escape(cat.name)}\"><a href='#${escape(cat.name)}-placeholder'><img class='category-logo' src='${cat.imgsrc}' alt='${cat.name}' width='50px'><span>${cat.name}</span></a></li>`;\n\n//# sourceURL=webpack:///./src/scripts/home/templates/category.js?");

/***/ }),

/***/ "./src/scripts/home/templates/menu-item-section.js":
/*!*********************************************************!*\
  !*** ./src/scripts/home/templates/menu-item-section.js ***!
  \*********************************************************/
/*! exports provided: menuItemSectionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuItemSectionTemplate\", function() { return menuItemSectionTemplate; });\n/* harmony import */ var _templates_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/menu-item */ \"./src/scripts/home/templates/menu-item.js\");\n\n\nconst menuItemSectionTemplate = (cat, menuitems) => {\n    return `<section id='${escape(cat.name)}' class='category' vocab='http://schema.org/' typeof='MenuSection'>\n                        <div id='${escape(cat.name)}-placeholder' class='category-placeholder'></div>\n                        <h2 property='name'>\n                            ${cat.name}\n                        </h2>\n                        <section class='menu-items' property='hasMenuItem'>\n                          ${transformMenuItems(menuitems, cat.name)}\n                        </section>\n                        <hr>\n                    </section>`;\n};\n\nconst transformMenuItems = (menuitems, catname) => {\n\n    let final = '';\n    menuitems.forEach(item => final += Object(_templates_menu_item__WEBPACK_IMPORTED_MODULE_0__[\"menuItemTemplate\"])(item, catname));\n    return final;\n};\n\n//# sourceURL=webpack:///./src/scripts/home/templates/menu-item-section.js?");

/***/ }),

/***/ "./src/scripts/home/templates/menu-item.js":
/*!*************************************************!*\
  !*** ./src/scripts/home/templates/menu-item.js ***!
  \*************************************************/
/*! exports provided: menuItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuItemTemplate\", function() { return menuItemTemplate; });\nconst menuItemTemplate = item => {\n    return `<div class='menu-item' id='${item.id}' vocab='http://schema.org/' typeof='MenuItem'>\n                                <div><img src='${loaderbase64}' img-loaded='false' alt='${item.name}' lazy-img-src='${item.imgsrc}'/>\n                                </div>\n                                <h3 property='name'>${item.name}</h3>\n                                <div class='item-description'>\n                                    <hr/>\n                                    \n                                        <h4><span property='description' class='description'>${item.description}</span></h4>\n                                    \n                                    <div class='add-btn-dummy-container'>\n                                        <button>Add</button>\n                                    </div>\n                                    <div class='add-to-cart-container'>\n                                        <div>\n                                             <span class='label'>PRICE</span>\n                                                <span class='price price-half'>₹${item.price.h}</span>\n                                                <span class='price price-full'>₹${item.price.f}</span>\n                                             \n                                        </div>\n                                        <div>\n                                           \n                                                <span class='label'>SIZE: </span>\n                                                <span class='label'>\n                                                    ${getItemAvailableSizes(item)}\n                                                </span>\n                                           \n                                        </div>\n                                        <div>\n                                             \n                                                <span class='label'>QTY: </span>\n                                                <span>\n                                                    <a class='reduce-qty' href='#'>-</a>\n                                                    <input type='text' class='item-qty' value=0 readonly>\n                                                    <a class='increase-qty' href='#'>+</a>\n                                                </span>\n                                             \n                                        </div>\n                                        <button class='add-to-cart-btn'>Add to cart</button>\n                                    </div>\n                                </div>\n                            </div>`;\n};\n\nconst getItemAvailableSizes = item => {\n    let final = '';\n    if (item.price.h !== undefined) {\n        final += `H<input type='radio' name='size' value='h' class='halfSize'>`;\n    }\n    if (item.price.f !== undefined) {\n        final += `F<input type='radio' name='size' value='f' class='fullSize' checked='checked'>`;\n    }\n    return final;\n};\n\nconst loaderbase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzEgMzkuMlYuNGE2My42IDYzLjYgMCAwIDEgMzMuOTYgMTQuNTdMNzcuNjggNDIuMjRhMjUuNTMgMjUuNTMgMCAwIDAtNi43LTMuMDN6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iI2UxZTFlMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDY0IDY0KSIvPjxwYXRoIGQ9Ik03MSAzOS4yVi40YTYzLjYgNjMuNiAwIDAgMSAzMy45NiAxNC41N0w3Ny42OCA0Mi4yNGEyNS41MyAyNS41MyAwIDAgMC02LjctMy4wM3oiIGZpbGw9IiNiZWJlYmUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2NCA2NCkiLz48cGF0aCBkPSJNNzEgMzkuMlYuNGE2My42IDYzLjYgMCAwIDEgMzMuOTYgMTQuNTdMNzcuNjggNDIuMjRhMjUuNTMgMjUuNTMgMCAwIDAtNi43LTMuMDN6IiBmaWxsPSIjOTc5Nzk3IiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgNjQgNjQpIi8+PHBhdGggZD0iTTcxIDM5LjJWLjRhNjMuNiA2My42IDAgMCAxIDMzLjk2IDE0LjU3TDc3LjY4IDQyLjI0YTI1LjUzIDI1LjUzIDAgMCAwLTYuNy0zLjAzeiIgZmlsbD0iIzZlNmU2ZSIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDY0IDY0KSIvPjxwYXRoIGQ9Ik03MSAzOS4yVi40YTYzLjYgNjMuNiAwIDAgMSAzMy45NiAxNC41N0w3Ny42OCA0Mi4yNGEyNS41MyAyNS41MyAwIDAgMC02LjctMy4wM3oiIGZpbGw9IiMzYzNjM2MiIHRyYW5zZm9ybT0icm90YXRlKDMxNSA2NCA2NCkiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0IDY0OzQ1IDY0IDY0OzkwIDY0IDY0OzEzNSA2NCA2NDsxODAgNjQgNjQ7MjI1IDY0IDY0OzI3MCA2NCA2NDszMTUgNjQgNjQiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3MjBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PGc+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iNjMuNjYiIGN5PSI2My4xNiIgcj0iMTIiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBkdXI9IjcyMG1zIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSIxOzA7MSIvPjwvZz48L3N2Zz4=';\n\n//# sourceURL=webpack:///./src/scripts/home/templates/menu-item.js?");

/***/ }),

/***/ "./src/scripts/home/templates/search-result.js":
/*!*****************************************************!*\
  !*** ./src/scripts/home/templates/search-result.js ***!
  \*****************************************************/
/*! exports provided: searchResultTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchResultTemplate\", function() { return searchResultTemplate; });\nconst searchResultTemplate = s => {\n    return `<div class='search-result'><a href='#${s.id}'>${s.name}</a></div>`;\n};\n\n//# sourceURL=webpack:///./src/scripts/home/templates/search-result.js?");

/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return Route; });\nclass Route {\n\n    constructor() {}\n\n    static getPage() {\n        const arr = window.location.pathname.trim().split('/');\n        if (arr[1].length > 0) {\n            return arr[1].split('.')[0];\n        } else {\n            return 'home';\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/routes/routes.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/index.js?");

/***/ })

/******/ });