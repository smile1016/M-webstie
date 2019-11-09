/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@better-scroll/core/dist/core.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@better-scroll/core/dist/core.esm.js ***!
  \***********************************************************/
/*! exports provided: default, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/*!
 * better-scroll / core
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
    return window.performance && window.performance.now
        ? window.performance.now() + window.performance.timing.navigationStart
        : +new Date();
}
function extend(target) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < rest.length; i++) {
        var source = rest[i];
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return target;
}
function isUndef(v) {
    return v === undefined || v === null;
}

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    if (!inBrowser) {
        return false;
    }
    var transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (var key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
})();
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function getElement(el) {
    return (typeof el === 'string'
        ? document.querySelector(el)
        : el);
}
function addEvent(el, type, fn, capture) {
    el.addEventListener(type, fn, {
        passive: false,
        capture: !!capture
    });
}
function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture
    });
}
function offset(el) {
    var left = 0;
    var top = 0;
    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}
var cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransition = inBrowser && transition in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
};
var eventTypeMap = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2
};
function getRect(el) {
    if (el instanceof window.SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
    }
    else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
        };
    }
}
function preventDefaultExceptionFn(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}
var tagExceptionFn = preventDefaultExceptionFn;
function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
}
function click(e, event) {
    if (event === void 0) { event = 'click'; }
    var eventSource;
    if (e.type === 'mouseup') {
        eventSource = e;
    }
    else if (e.type === 'touchend' || e.type === 'touchcancel') {
        eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
        posSrc.screenX = eventSource.screenX || 0;
        posSrc.screenY = eventSource.screenY || 0;
        posSrc.clientX = eventSource.clientX || 0;
        posSrc.clientY = eventSource.clientY || 0;
    }
    var ev;
    var bubbles = true;
    var cancelable = true;
    if (typeof MouseEvent !== 'undefined') {
        try {
            ev = new MouseEvent(event, extend({
                bubbles: bubbles,
                cancelable: cancelable
            }, posSrc));
        }
        catch (e) {
            createEvent();
        }
    }
    else {
        createEvent();
    }
    function createEvent() {
        ev = document.createEvent('Event');
        ev.initEvent(event, bubbles, cancelable);
        extend(ev, posSrc);
    }
    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
}
function dblclick(e) {
    click(e, 'dblclick');
}

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 100 / 60;
var windowCompat = inBrowser && window;
function noop() { }
var requestAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

var noop$1 = function (val) { };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop$1,
    set: noop$1
};
var getProperty = function (obj, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
        if (typeof obj !== 'object' || !obj)
            return;
    }
    var lastKey = keys.pop();
    if (typeof obj[lastKey] === 'function') {
        return function () {
            return obj[lastKey].apply(obj, arguments);
        };
    }
    else {
        return obj[lastKey];
    }
};
var setProperty = function (obj, key, value) {
    var keys = key.split('.');
    var temp;
    for (var i = 0; i < keys.length - 1; i++) {
        temp = keys[i];
        if (!obj[temp])
            obj[temp] = {};
        obj = obj[temp];
    }
    obj[keys.pop()] = value;
};
function propertiesProxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return getProperty(this, sourceKey);
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        setProperty(this, sourceKey, val);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

var EventEmitter = /** @class */ (function () {
    function EventEmitter(names) {
        this.events = {};
        this.eventTypes = {};
        this.registerType(names);
    }
    EventEmitter.prototype.on = function (type, fn, context) {
        if (context === void 0) { context = this; }
        this._checkInTypes(type);
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push([fn, context]);
        return this;
    };
    EventEmitter.prototype.once = function (type, fn, context) {
        var _this = this;
        if (context === void 0) { context = this; }
        this._checkInTypes(type);
        var magic = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(type, magic);
            fn.apply(context, args);
        };
        magic.fn = fn;
        this.on(type, magic);
        return this;
    };
    EventEmitter.prototype.off = function (type, fn) {
        if (!type && !fn) {
            this.events = {};
            return this;
        }
        if (type) {
            this._checkInTypes(type);
            if (!fn) {
                this.events[type] = [];
                return this;
            }
            var events = this.events[type];
            if (!events) {
                return this;
            }
            var count = events.length;
            while (count--) {
                if (events[count][0] === fn ||
                    (events[count][0] && events[count][0].fn === fn)) {
                    events.splice(count, 1);
                }
            }
            return this;
        }
    };
    EventEmitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._checkInTypes(type);
        var events = this.events[type];
        if (!events) {
            return;
        }
        var len = events.length;
        var eventsCopy = events.slice();
        var ret;
        for (var i = 0; i < len; i++) {
            var event_1 = eventsCopy[i];
            var fn = event_1[0], context = event_1[1];
            if (fn) {
                ret = fn.apply(context, args);
                if (ret === true) {
                    return ret;
                }
            }
        }
    };
    EventEmitter.prototype.registerType = function (names) {
        var _this = this;
        names.forEach(function (type) {
            _this.eventTypes[type] = type;
        });
    };
    EventEmitter.prototype.destroy = function () {
        this.events = {};
        this.eventTypes = {};
    };
    EventEmitter.prototype._checkInTypes = function (type) {
        var types = this.eventTypes;
        var inTypes = types[type] === type;
        if (!inTypes) {
            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" + Object.keys(types) + "]");
        }
    };
    return EventEmitter;
}());

var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var DirectionLock;
(function (DirectionLock) {
    DirectionLock["Default"] = "";
    DirectionLock["Horizontal"] = "horizontal";
    DirectionLock["Vertical"] = "vertical";
    DirectionLock["None"] = "none";
})(DirectionLock || (DirectionLock = {}));

var EventPassthrough;
(function (EventPassthrough) {
    EventPassthrough["None"] = "";
    EventPassthrough["Horizontal"] = "horizontal";
    EventPassthrough["Vertical"] = "vertical";
})(EventPassthrough || (EventPassthrough = {}));

var EventType;
(function (EventType) {
    EventType[EventType["Touch"] = 1] = "Touch";
    EventType[EventType["Mouse"] = 2] = "Mouse";
})(EventType || (EventType = {}));

var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
})(MouseButton || (MouseButton = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var Options = /** @class */ (function () {
    function Options() {
        this.startX = 0;
        this.startY = 0;
        this.scrollX = false;
        this.scrollY = true;
        this.freeScroll = false;
        this.directionLockThreshold = 5;
        this.eventPassthrough = EventPassthrough.None;
        this.click = false;
        this.dblclick = false;
        this.tap = '';
        this.bounce = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.bounceTime = 800;
        this.momentum = true;
        this.momentumLimitTime = 300;
        this.momentumLimitDistance = 15;
        this.swipeTime = 2500;
        this.swipeBounceTime = 500;
        this.deceleration = 0.0015;
        this.flickLimitTime = 200;
        this.flickLimitDistance = 100;
        this.resizePolling = 60;
        this.probeType = Probe.Default;
        this.stopPropagation = false;
        this.preventDefault = true;
        this.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
        };
        this.tagException = {
            tagName: /^TEXTAREA$/
        };
        this.HWCompositing = true;
        this.useTransition = true;
        this.bindToWrapper = false;
        this.disableMouse = hasTouch;
        this.disableTouch = !hasTouch;
        this.autoBlur = true;
    }
    Options.prototype.merge = function (options) {
        if (!options)
            return this;
        for (var key in options) {
            this[key] = options[key];
        }
        return this;
    };
    Options.prototype.process = function () {
        this.translateZ =
            this.HWCompositing && hasPerspective ? ' translateZ(0)' : '';
        this.useTransition = this.useTransition && hasTransition;
        this.preventDefault = !this.eventPassthrough && this.preventDefault;
        // If you want eventPassthrough I have to lock one of the axes
        this.scrollX =
            this.eventPassthrough === EventPassthrough.Horizontal
                ? false
                : this.scrollX;
        this.scrollY =
            this.eventPassthrough === EventPassthrough.Vertical ? false : this.scrollY;
        // With eventPassthrough we also need lockDirection mechanism
        this.freeScroll = this.freeScroll && !this.eventPassthrough;
        // force true when freeScroll is true
        this.scrollX = this.freeScroll ? true : this.scrollX;
        this.scrollY = this.freeScroll ? true : this.scrollY;
        this.directionLockThreshold = this.eventPassthrough
            ? 0
            : this.directionLockThreshold;
        return this;
    };
    return Options;
}());

var EventRegister = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var ActionsHandler = /** @class */ (function () {
    function ActionsHandler(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeStart',
            'start',
            'move',
            'end',
            'click'
        ]);
        this.handleDOMEvents();
    }
    ActionsHandler.prototype.handleDOMEvents = function () {
        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
        var wrapper = this.wrapper;
        var target = bindToWrapper ? wrapper : window;
        var wrapperEvents = [];
        var targetEvents = [];
        var shouldRegiserTouch = hasTouch && !disableTouch;
        var sholdRegisterMouse = !disableMouse;
        if (click) {
            wrapperEvents.push({
                name: 'click',
                handler: this.click.bind(this),
                capture: true
            });
        }
        if (shouldRegiserTouch) {
            wrapperEvents.push({
                name: 'touchstart',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'touchmove',
                handler: this.move.bind(this)
            }, {
                name: 'touchend',
                handler: this.end.bind(this)
            }, {
                name: 'touchcancel',
                handler: this.end.bind(this)
            });
        }
        if (sholdRegisterMouse) {
            wrapperEvents.push({
                name: 'mousedown',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'mousemove',
                handler: this.move.bind(this)
            }, {
                name: 'mouseup',
                handler: this.end.bind(this)
            });
        }
        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
        this.targetEventRegister = new EventRegister(target, targetEvents);
    };
    ActionsHandler.prototype.beforeHandler = function (e, type) {
        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        var preventDefaultConditions = {
            start: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            end: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            move: function () {
                return preventDefault;
            }
        };
        if (preventDefaultConditions[type]()) {
            e.preventDefault();
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    ActionsHandler.prototype.setInitiated = function (type) {
        if (type === void 0) { type = 0; }
        this.initiated = type;
    };
    ActionsHandler.prototype.start = function (e) {
        var _eventType = eventTypeMap[e.type];
        if (this.initiated && this.initiated !== _eventType) {
            return;
        }
        this.setInitiated(_eventType);
        // if textarea or other html tags in options.tagException is manipulated
        // do not make bs scroll
        if (tagExceptionFn(e.target, this.options.tagException)) {
            this.setInitiated();
            return;
        }
        // no mouse left button
        if (_eventType === EventType.Mouse && e.button !== MouseButton.Left)
            return;
        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
            return;
        }
        this.beforeHandler(e, 'start');
        var point = (e.touches ? e.touches[0] : e);
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ActionsHandler.prototype.move = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.beforeHandler(e, 'move');
        var point = (e.touches ? e.touches[0] : e);
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        if (this.hooks.trigger(this.hooks.eventTypes.move, {
            deltaX: deltaX,
            deltaY: deltaY,
            e: e
        })) {
            return;
        }
        // auto end when out of wrapper
        var scrollLeft = document.documentElement.scrollLeft ||
            window.pageXOffset ||
            document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        var pX = this.pointX - scrollLeft;
        var pY = this.pointY - scrollTop;
        if (pX >
            document.documentElement.clientWidth -
                this.options.momentumLimitDistance ||
            pX < this.options.momentumLimitDistance ||
            pY < this.options.momentumLimitDistance ||
            pY >
                document.documentElement.clientHeight -
                    this.options.momentumLimitDistance) {
            this.end(e);
        }
    };
    ActionsHandler.prototype.end = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.setInitiated();
        this.beforeHandler(e, 'end');
        this.hooks.trigger(this.hooks.eventTypes.end, e);
    };
    ActionsHandler.prototype.click = function (e) {
        this.hooks.trigger(this.hooks.eventTypes.click, e);
    };
    ActionsHandler.prototype.destroy = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.hooks.destroy();
    };
    return ActionsHandler;
}());

var translaterMetaData = {
    x: ['translateX', 'px'],
    y: ['translateY', 'px']
};
var Translater = /** @class */ (function () {
    function Translater(content) {
        this.content = content;
        this.style = content.style;
        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
    }
    Translater.prototype.getComputedPosition = function () {
        var cssStyle = window.getComputedStyle(this.content, null);
        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]);
        var y = +(matrix[13] || matrix[5]);
        return {
            x: x,
            y: y
        };
    };
    Translater.prototype.translate = function (point) {
        var transformStyle = [];
        Object.keys(point).forEach(function (key) {
            if (!translaterMetaData[key]) {
                return;
            }
            var transformFnName = translaterMetaData[key][0];
            if (transformFnName) {
                var transformFnArgUnit = translaterMetaData[key][1];
                var transformFnArg = point[key];
                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
            }
        });
        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
        this.style[style.transform] = "" + transformStyle.join(' ');
        this.hooks.trigger(this.hooks.eventTypes.translate, point);
    };
    Translater.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Translater;
}());

var Base = /** @class */ (function () {
    function Base(content, translater, options) {
        this.content = content;
        this.translater = translater;
        this.options = options;
        this.hooks = new EventEmitter([
            'move',
            'end',
            'beforeForceStop',
            'forceStop',
            'time',
            'timeFunction'
        ]);
        this.style = content.style;
    }
    Base.prototype.translate = function (endPoint) {
        this.translater.translate(endPoint);
    };
    Base.prototype.setPending = function (pending) {
        this.pending = pending;
    };
    Base.prototype.setForceStopped = function (forceStopped) {
        this.forceStopped = forceStopped;
    };
    Base.prototype.destroy = function () {
        this.hooks.destroy();
        cancelAnimationFrame(this.timer);
    };
    return Base;
}());

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.startProbe = function () {
        var _this = this;
        var probe = function () {
            var pos = _this.translater.getComputedPosition();
            _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
            // excute when transition ends
            if (!_this.pending) {
                _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
                return;
            }
            _this.timer = requestAnimationFrame(probe);
        };
        cancelAnimationFrame(this.timer);
        this.timer = requestAnimationFrame(probe);
    };
    Transition.prototype.transitionTime = function (time) {
        if (time === void 0) { time = 0; }
        this.style[style.transitionDuration] = time + 'ms';
        this.hooks.trigger(this.hooks.eventTypes.time, time);
    };
    Transition.prototype.transitionTimingFunction = function (easing) {
        this.style[style.transitionTimingFunction] = easing;
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
    };
    Transition.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        this.setPending(time > 0 && (startPoint.x !== endPoint.x || startPoint.y !== endPoint.y));
        this.transitionTimingFunction(easingFn);
        this.transitionTime(time);
        this.translate(endPoint);
        if (time && this.options.probeType === Probe.Realtime) {
            this.startProbe();
        }
        // if we change content's transformY in a tick
        // such as: 0 -> 50px -> 0
        // transitionend will not be triggered
        // so we forceupdate by reflow
        if (!time) {
            this._reflow = this.content.offsetHeight;
        }
        // no need to dispatch move and end when slient
        if (!time && !isSlient) {
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
        }
    };
    Transition.prototype.stop = function () {
        // still in transition
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
            this.transitionTime();
            this.translate({ x: x, y: y });
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, { x: x, y: y })) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
        }
    };
    return Transition;
}(Base));

var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        // time is 0
        if (!time) {
            this.translate(endPoint);
            // if we change content's transformY in a tick
            // such as: 0 -> 50px -> 0
            // transitionend will not be triggered
            // so we forceupdate by reflow
            this._reflow = this.content.offsetHeight;
            // no need to dispatch move and end when slient
            if (isSlient)
                return;
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
            return;
        }
        this.animate(startPoint, endPoint, time, easingFn);
    };
    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
        var _this = this;
        var startTime = getNow();
        var destTime = startTime + duration;
        var step = function () {
            var now = getNow();
            // js animation end
            if (now >= destTime) {
                _this.translate(endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                return;
            }
            now = (now - startTime) / duration;
            var easing = easingFn(now);
            var newPoint = {};
            Object.keys(endPoint).forEach(function (key) {
                var startValue = startPoint[key];
                var endValue = endPoint[key];
                newPoint[key] = (endValue - startValue) * easing + startValue;
            });
            _this.translate(newPoint);
            if (_this.pending) {
                _this.timer = requestAnimationFrame(step);
            }
            if (_this.options.probeType === Probe.Realtime) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
            }
        };
        this.setPending(true);
        cancelAnimationFrame(this.timer);
        step();
    };
    Animation.prototype.stop = function () {
        // still in requestFrameAnimation
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var pos = this.translater.getComputedPosition();
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, pos)) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
        }
    };
    return Animation;
}(Base));

function createAnimater(element, translater, options) {
    var useTransition = options.useTransition;
    var animaterOptions = {};
    Object.defineProperty(animaterOptions, 'probeType', {
        enumerable: true,
        configurable: false,
        get: function () {
            return options.probeType;
        }
    });
    if (useTransition) {
        return new Transition(element, translater, animaterOptions);
    }
    else {
        return new Animation(element, translater, animaterOptions);
    }
}

var Behavior = /** @class */ (function () {
    function Behavior(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter(['momentum', 'end']);
        this.content = this.wrapper.children[0];
        this.currentPos = 0;
        this.startPos = 0;
    }
    Behavior.prototype.start = function () {
        this.direction = Direction.Default;
        this.movingDirection = Direction.Default;
        this.dist = 0;
    };
    Behavior.prototype.move = function (delta) {
        delta = this.hasScroll ? delta : 0;
        this.movingDirection =
            delta > 0
                ? Direction.Negative
                : delta < 0
                    ? Direction.Positive
                    : Direction.Default;
        var newPos = this.currentPos + delta;
        // Slow down or stop if outside of the boundaries
        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
                (newPos < this.maxScrollPos && this.options.bounces[1])) {
                newPos = this.currentPos + delta / 3;
            }
            else {
                newPos =
                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
            }
        }
        return newPos;
    };
    Behavior.prototype.end = function (duration) {
        var momentumInfo = {
            duration: 0
        };
        var absDist = Math.abs(this.currentPos - this.startPos);
        // start momentum animation if needed
        if (this.options.momentum &&
            duration < this.options.momentumLimitTime &&
            absDist > this.options.momentumLimitDistance) {
            var wrapperSize = (this.direction === Direction.Negative && this.options.bounces[0]) ||
                (this.direction === Direction.Positive && this.options.bounces[1])
                ? this.wrapperSize
                : 0;
            momentumInfo = this.hasScroll
                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
                : { destination: this.currentPos, duration: 0 };
        }
        else {
            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
        }
        return momentumInfo;
    };
    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
        if (options === void 0) { options = this.options; }
        var distance = current - start;
        var speed = Math.abs(distance) / time;
        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
        var momentumData = {
            destination: current + (speed / deceleration) * (distance < 0 ? -1 : 1),
            duration: swipeTime,
            rate: 15
        };
        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
        if (momentumData.destination < lowerMargin) {
            momentumData.destination = wrapperSize
                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
                : lowerMargin;
            momentumData.duration = swipeBounceTime;
        }
        else if (momentumData.destination > upperMargin) {
            momentumData.destination = wrapperSize
                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
                : upperMargin;
            momentumData.duration = swipeBounceTime;
        }
        momentumData.destination = Math.round(momentumData.destination);
        return momentumData;
    };
    Behavior.prototype.updateDirection = function () {
        var absDist = Math.round(this.currentPos) - this.absStartPos;
        this.direction =
            absDist > 0
                ? Direction.Negative
                : absDist < 0
                    ? Direction.Positive
                    : Direction.Default;
    };
    Behavior.prototype.refresh = function () {
        var _a = this.options.rect, size = _a.size, position = _a.position;
        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
        var wrapperRect = getRect(this.wrapper);
        this.wrapperSize = wrapperRect[size];
        var contentRect = getRect(this.content);
        this.contentSize = contentRect[size];
        this.relativeOffset = contentRect[position];
        if (isWrapperStatic) {
            this.relativeOffset -= wrapperRect[position];
        }
        this.minScrollPos = 0;
        this.maxScrollPos = this.wrapperSize - this.contentSize;
        if (this.maxScrollPos < 0) {
            this.maxScrollPos -= this.relativeOffset;
            this.minScrollPos = -this.relativeOffset;
        }
        this.hasScroll =
            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
        if (!this.hasScroll) {
            this.maxScrollPos = this.minScrollPos;
            this.contentSize = this.wrapperSize;
        }
        this.direction = 0;
    };
    Behavior.prototype.updatePosition = function (pos) {
        this.currentPos = pos;
    };
    Behavior.prototype.getCurrentPos = function () {
        return Math.round(this.currentPos);
    };
    Behavior.prototype.checkInBoundary = function () {
        var position = this.adjustPosition(this.currentPos);
        var inBoundary = position === this.getCurrentPos();
        return {
            position: position,
            inBoundary: inBoundary
        };
    };
    // adjust position when out of boundary
    Behavior.prototype.adjustPosition = function (pos) {
        var roundPos = Math.round(pos);
        if (!this.hasScroll || roundPos > this.minScrollPos) {
            roundPos = this.minScrollPos;
        }
        else if (roundPos < this.maxScrollPos) {
            roundPos = this.maxScrollPos;
        }
        return roundPos;
    };
    Behavior.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
    };
    Behavior.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
    };
    Behavior.prototype.resetStartPos = function () {
        this.updateStartPos();
        this.updateAbsStartPos();
    };
    Behavior.prototype.getAbsDist = function (delta) {
        this.dist += delta;
        return Math.abs(this.dist);
    };
    Behavior.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Behavior;
}());

var _a, _b, _c, _d;
var Passthrough;
(function (Passthrough) {
    Passthrough["Yes"] = "yes";
    Passthrough["No"] = "no";
})(Passthrough || (Passthrough = {}));
var PassthroughHandlers = (_a = {},
    _a[Passthrough.Yes] = function (e) {
        return true;
    },
    _a[Passthrough.No] = function (e) {
        e.preventDefault();
        return false;
    },
    _a);
var DirectionMap = (_b = {},
    _b[DirectionLock.Horizontal] = (_c = {},
        _c[Passthrough.Yes] = EventPassthrough.Horizontal,
        _c[Passthrough.No] = EventPassthrough.Vertical,
        _c),
    _b[DirectionLock.Vertical] = (_d = {},
        _d[Passthrough.Yes] = EventPassthrough.Vertical,
        _d[Passthrough.No] = EventPassthrough.Horizontal,
        _d),
    _b);
var DirectionLockAction = /** @class */ (function () {
    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
        this.directionLockThreshold = directionLockThreshold;
        this.freeScroll = freeScroll;
        this.eventPassthrough = eventPassthrough;
        this.reset();
    }
    DirectionLockAction.prototype.reset = function () {
        this.directionLocked = DirectionLock.Default;
    };
    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
        this.computeDirectionLock(absDistX, absDistY);
        return this.handleEventPassthrough(e);
    };
    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
        if (this.directionLocked === DirectionLock.Horizontal) {
            deltaY = 0;
        }
        else if (this.directionLocked === DirectionLock.Vertical) {
            deltaX = 0;
        }
        return {
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
        // If you are scrolling in one direction, lock it
        if (this.directionLocked === DirectionLock.Default && !this.freeScroll) {
            if (absDistX > absDistY + this.directionLockThreshold) {
                this.directionLocked = DirectionLock.Horizontal; // lock horizontally
            }
            else if (absDistY >= absDistX + this.directionLockThreshold) {
                this.directionLocked = DirectionLock.Vertical; // lock vertically
            }
            else {
                this.directionLocked = DirectionLock.None; // no lock
            }
        }
    };
    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
        var handleMap = DirectionMap[this.directionLocked];
        if (handleMap) {
            if (this.eventPassthrough === handleMap[Passthrough.Yes]) {
                return PassthroughHandlers[Passthrough.Yes](e);
            }
            else if (this.eventPassthrough === handleMap[Passthrough.No]) {
                return PassthroughHandlers[Passthrough.No](e);
            }
        }
        return false;
    };
    return DirectionLockAction;
}());

var ScrollerActions = /** @class */ (function () {
    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
        this.hooks = new EventEmitter([
            'start',
            'beforeMove',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'end',
            'scrollEnd'
        ]);
        this.scrollBehaviorX = scrollBehaviorX;
        this.scrollBehaviorY = scrollBehaviorY;
        this.actionsHandler = actionsHandler;
        this.animater = animater;
        this.options = options;
        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
        this.enabled = true;
        this.bindActionsHandler();
    }
    ScrollerActions.prototype.bindActionsHandler = function () {
        var _this = this;
        // [mouse|touch]start event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleStart(e);
        });
        // [mouse|touch]move event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
            if (!_this.enabled)
                return true;
            return _this.handleMove(deltaX, deltaY, e);
        });
        // [mouse|touch]end event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleEnd(e);
        });
        // click
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            // handle native click event
            if (_this.enabled && !e._constructed) {
                _this.handleClick(e);
            }
        });
    };
    ScrollerActions.prototype.handleStart = function (e) {
        var timestamp = getNow();
        this.moved = false;
        this.startTime = timestamp;
        this.directionLockAction.reset();
        this.scrollBehaviorX.start();
        this.scrollBehaviorY.start();
        // force stopping last transition or animation
        this.animater.stop();
        this.scrollBehaviorX.resetStartPos();
        this.scrollBehaviorY.resetStartPos();
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
            return;
        }
        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
        var timestamp = getNow();
        // We need to move at least momentumLimitDistance pixels
        // for the scrolling to initiate
        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
            return true;
        }
        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
            this.actionsHandler.setInitiated();
            return true;
        }
        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
        var newX = this.scrollBehaviorX.move(delta.deltaX);
        var newY = this.scrollBehaviorY.move(delta.deltaY);
        if (!this.moved) {
            this.moved = true;
            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
        }
        this.animater.translate({
            x: newX,
            y: newY
        });
        this.dispatchScroll(timestamp);
    };
    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
        // dispatch scroll in interval time
        if (timestamp - this.startTime > this.options.momentumLimitTime) {
            // refresh time and starting position to initiate a momentum
            this.startTime = timestamp;
            this.scrollBehaviorX.updateStartPos();
            this.scrollBehaviorY.updateStartPos();
            if (this.options.probeType === Probe.Throttle) {
                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
            }
        }
        // dispatch scroll all the time
        if (this.options.probeType > Probe.Throttle) {
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
        }
    };
    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
        return (timestamp - this.endTime > this.options.momentumLimitTime &&
            absDistY < this.options.momentumLimitDistance &&
            absDistX < this.options.momentumLimitDistance);
    };
    ScrollerActions.prototype.handleEnd = function (e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
            return;
        }
        var currentPos = this.getCurrentPos();
        this.scrollBehaviorX.updateDirection();
        this.scrollBehaviorY.updateDirection();
        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
            return true;
        }
        this.animater.translate(currentPos);
        this.endTime = getNow();
        var duration = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
    };
    ScrollerActions.prototype.handleClick = function (e) {
        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    ScrollerActions.prototype.getCurrentPos = function () {
        return {
            x: this.scrollBehaviorX.getCurrentPos(),
            y: this.scrollBehaviorY.getCurrentPos()
        };
    };
    ScrollerActions.prototype.refresh = function () {
        this.endTime = 0;
    };
    ScrollerActions.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return ScrollerActions;
}());

function createActionsHandlerOptions(bsOptions) {
    var options = [
        'click',
        'bindToWrapper',
        'disableMouse',
        'disableTouch',
        'preventDefault',
        'stopPropagation',
        'tagException',
        'preventDefaultException'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    return options;
}
function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
    var options = [
        'momentum',
        'momentumLimitTime',
        'momentumLimitDistance',
        'deceleration',
        'swipeBounceTime',
        'swipeTime'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    // add extra property
    options.scrollable = bsOptions[extraProp];
    options.bounces = bounces;
    options.rect = rect;
    return options;
}

function bubbling(source, target, events) {
    events.forEach(function (event) {
        var sourceEvent;
        var targetEvent;
        if (typeof event === 'string') {
            sourceEvent = targetEvent = event;
        }
        else {
            sourceEvent = event.source;
            targetEvent = event.target;
        }
        source.on(sourceEvent, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return target.trigger.apply(target, [targetEvent].concat(args));
        });
    });
}

var Scroller = /** @class */ (function () {
    function Scroller(wrapper, options) {
        this.hooks = new EventEmitter([
            'beforeStart',
            'beforeMove',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'scrollEnd',
            'refresh',
            'touchEnd',
            'end',
            'flick',
            'scrollCancel',
            'momentum',
            'scrollTo',
            'ignoreDisMoveForSamePos',
            'scrollToElement'
        ]);
        this.wrapper = wrapper;
        this.content = wrapper.children[0];
        this.options = options;
        var _a = this
            .options.bounce, _b = _a.left, left = _b === void 0 ? true : _b, _c = _a.right, right = _c === void 0 ? true : _c, _d = _a.top, top = _d === void 0 ? true : _d, _e = _a.bottom, bottom = _e === void 0 ? true : _e;
        // direction X
        this.scrollBehaviorX = new Behavior(wrapper, createBehaviorOptions(options, 'scrollX', [left, right], {
            size: 'width',
            position: 'left'
        }));
        // direction Y
        this.scrollBehaviorY = new Behavior(wrapper, createBehaviorOptions(options, 'scrollY', [top, bottom], {
            size: 'height',
            position: 'top'
        }));
        this.translater = new Translater(this.content);
        this.animater = createAnimater(this.content, this.translater, this.options);
        this.actionsHandler = new ActionsHandler(wrapper, createActionsHandlerOptions(this.options));
        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
        var resizeHandler = this.resize.bind(this);
        this.resizeRegister = new EventRegister(window, [
            {
                name: 'orientationchange',
                handler: resizeHandler
            },
            {
                name: 'resize',
                handler: resizeHandler
            }
        ]);
        this.transitionEndRegister = new EventRegister(this.content, [
            {
                name: style.transitionEnd,
                handler: this.transitionEnd.bind(this)
            }
        ]);
        this.init();
    }
    Scroller.prototype.init = function () {
        var _this = this;
        this.bindTranslater();
        this.bindAnimater();
        this.bindActions();
        // enable pointer events when scrolling ends
        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            _this.togglePointerEvents(true);
        });
    };
    Scroller.prototype.bindTranslater = function () {
        var _this = this;
        var hooks = this.translater.hooks;
        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
            if (_this.options.translateZ) {
                transformStyle.push(_this.options.translateZ);
            }
        });
        // disable pointer events when scrolling
        hooks.on(hooks.eventTypes.translate, function (pos) {
            _this.updatePositions(pos);
            _this.togglePointerEvents(false);
        });
    };
    Scroller.prototype.bindAnimater = function () {
        var _this = this;
        // reset position
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
            if (!_this.resetPosition(_this.options.bounceTime)) {
                _this.animater.setPending(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
        });
        bubbling(this.animater.hooks, this.hooks, [
            {
                source: this.animater.hooks.eventTypes.move,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: this.animater.hooks.eventTypes.forceStop,
                target: this.hooks.eventTypes.scrollEnd
            }
        ]);
    };
    Scroller.prototype.bindActions = function () {
        var _this = this;
        var actions = this.actions;
        bubbling(actions.hooks, this.hooks, [
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeStart
            },
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeScrollStart // just for event api
            },
            {
                source: actions.hooks.eventTypes.beforeMove,
                target: this.hooks.eventTypes.beforeMove
            },
            {
                source: actions.hooks.eventTypes.scrollStart,
                target: this.hooks.eventTypes.scrollStart
            },
            {
                source: actions.hooks.eventTypes.scroll,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: actions.hooks.eventTypes.beforeEnd,
                target: this.hooks.eventTypes.beforeEnd
            }
        ]);
        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
                return true;
            }
            // check if it is a click operation
            if (!actions.moved && _this.checkClick(e)) {
                _this.animater.setForceStopped(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
                return true;
            }
            _this.animater.setForceStopped(false);
            // reset if we are outside of the boundaries
            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
                return true;
            }
        });
        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
            if (_this.checkFlick(duration, deltaX, deltaY)) {
                _this.hooks.trigger(_this.hooks.eventTypes.flick);
                return;
            }
            if (_this.momentum(pos, duration)) {
                return;
            }
            _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
        });
    };
    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
        // flick
        if (this.hooks.events.flick.length > 1 &&
            duration < this.options.flickLimitTime &&
            deltaX < this.options.flickLimitDistance &&
            deltaY < this.options.flickLimitDistance) {
            return true;
        }
    };
    Scroller.prototype.momentum = function (pos, duration) {
        var meta = {
            time: 0,
            easing: ease.swiper,
            newX: pos.x,
            newY: pos.y
        };
        // start momentum animation if needed
        var momentumX = this.scrollBehaviorX.end(duration);
        var momentumY = this.scrollBehaviorY.end(duration);
        meta.newX = isUndef(momentumX.destination)
            ? meta.newX
            : momentumX.destination;
        meta.newY = isUndef(momentumY.destination)
            ? meta.newY
            : momentumY.destination;
        meta.time = Math.max(momentumX.duration, momentumY.duration);
        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
        // when x or y changed, do momentum animation now!
        if (meta.newX !== pos.x || meta.newY !== pos.y) {
            // change easing function when scroller goes out of the boundaries
            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
                meta.newX < this.scrollBehaviorX.maxScrollPos ||
                meta.newY > this.scrollBehaviorY.minScrollPos ||
                meta.newY < this.scrollBehaviorY.maxScrollPos) {
                meta.easing = ease.swipeBounce;
            }
            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
            return true;
        }
    };
    Scroller.prototype.checkClick = function (e) {
        // when in the process of pulling down, it should not prevent click
        var cancelable = {
            preventClick: this.animater.forceStopped
        };
        // we scrolled less than momentumLimitDistance pixels
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
            return true;
        if (!cancelable.preventClick) {
            var _dblclick = this.options.dblclick;
            var dblclickTrigged = false;
            if (_dblclick && this.lastClickTime) {
                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
                if (getNow() - this.lastClickTime < delay) {
                    dblclickTrigged = true;
                    dblclick(e);
                }
            }
            if (this.options.tap) {
                tap(e, this.options.tap);
            }
            if (this.options.click &&
                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
                click(e);
            }
            this.lastClickTime = dblclickTrigged ? null : getNow();
            return true;
        }
        return false;
    };
    Scroller.prototype.resize = function () {
        var _this = this;
        if (!this.actions.enabled) {
            return;
        }
        // fix a scroll problem under Android condition
        if (isAndroid) {
            this.wrapper.scrollTop = 0;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(function () {
            _this.refresh();
        }, this.options.resizePolling);
    };
    Scroller.prototype.transitionEnd = function (e) {
        if (e.target !== this.content || !this.animater.pending) {
            return;
        }
        var animater = this.animater;
        animater.transitionTime();
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
            this.animater.setPending(false);
            if (this.options.probeType !== Probe.Realtime) {
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
            }
        }
    };
    Scroller.prototype.togglePointerEvents = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        var el = this.content.children.length
            ? this.content.children
            : [this.content];
        var pointerEvents = enabled ? 'auto' : 'none';
        for (var i = 0; i < el.length; i++) {
            var node = el[i];
            // ignore BetterScroll instance's wrapper DOM
            if (node.isBScroll) {
                continue;
            }
            node.style.pointerEvents = pointerEvents;
        }
    };
    Scroller.prototype.refresh = function () {
        this.scrollBehaviorX.refresh();
        this.scrollBehaviorY.refresh();
        this.actions.refresh();
        this.wrapperOffset = offset(this.wrapper);
    };
    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
        if (time === void 0) { time = 0; }
        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
        easing = !easing ? ease.bounce : easing;
        deltaX += x;
        deltaY += y;
        this.scrollTo(deltaX, deltaY, time, easing);
    };
    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform, isSilent) {
        if (time === void 0) { time = 0; }
        if (extraTransform === void 0) { extraTransform = {
            start: {},
            end: {}
        }; }
        easing = !easing ? ease.bounce : easing;
        var easingFn = this.options.useTransition ? easing.style : easing.fn;
        var currentPos = this.getCurrentPos();
        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
        var endPoint = __assign({ x: x,
            y: y }, extraTransform.end);
        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
        if (!this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos)) {
            // it is an useless move
            if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
                return;
            }
        }
        this.animater.move(startPoint, endPoint, time, easingFn, isSilent);
    };
    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
        var targetEle = getElement(el);
        var pos = offset(targetEle);
        var getOffset = function (offset, size, wrapperSize) {
            if (typeof offset === 'number') {
                return offset;
            }
            // if offsetX/Y are true we center the element to the screen
            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
        };
        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
            pos -= wrapperPos;
            pos = scrollBehavior.adjustPosition(pos - offset);
            return pos;
        };
        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
            return;
        }
        this.scrollTo(pos.left, pos.top, time, easing);
    };
    Scroller.prototype.resetPosition = function (time, easing) {
        if (time === void 0) { time = 0; }
        easing = !easing ? ease.bounce : easing;
        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
        if (xInBoundary && yInBoundary) {
            return false;
        }
        // out of boundary
        this.scrollTo(x, y, time, easing);
        return true;
    };
    Scroller.prototype.updatePositions = function (pos) {
        this.scrollBehaviorX.updatePosition(pos.x);
        this.scrollBehaviorY.updatePosition(pos.y);
    };
    Scroller.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
    };
    Scroller.prototype.enable = function () {
        this.actions.enabled = true;
    };
    Scroller.prototype.disable = function () {
        cancelAnimationFrame(this.animater.timer);
        this.actions.enabled = false;
    };
    Scroller.prototype.destroy = function () {
        var _this = this;
        var keys = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY'
        ];
        keys.forEach(function (key) { return _this[key].destroy(); });
    };
    return Scroller;
}());

var propertiesConfig = [
    {
        sourceKey: 'scroller.scrollBehaviorX.currentPos',
        key: 'x'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.currentPos',
        key: 'y'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
        key: 'hasHorizontalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
        key: 'hasVerticalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.contentSize',
        key: 'scrollerWidth'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.contentSize',
        key: 'scrollerHeight'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
        key: 'maxScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
        key: 'maxScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
        key: 'minScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
        key: 'minScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
        key: 'movingDirectionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
        key: 'movingDirectionY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.direction',
        key: 'directionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.direction',
        key: 'directionY'
    },
    {
        sourceKey: 'scroller.actions.enabled',
        key: 'enabled'
    },
    {
        sourceKey: 'scroller.animater.pending',
        key: 'pending'
    },
    {
        sourceKey: 'scroller.animater.stop',
        key: 'stop'
    },
    {
        sourceKey: 'scroller.scrollTo',
        key: 'scrollTo'
    },
    {
        sourceKey: 'scroller.scrollBy',
        key: 'scrollBy'
    },
    {
        sourceKey: 'scroller.scrollToElement',
        key: 'scrollToElement'
    },
    {
        sourceKey: 'scroller.resetPosition',
        key: 'resetPosition'
    }
];

var EnforceOrder;
(function (EnforceOrder) {
    EnforceOrder["Pre"] = "pre";
    EnforceOrder["Post"] = "post";
})(EnforceOrder || (EnforceOrder = {}));

var BScroll = /** @class */ (function (_super) {
    __extends(BScroll, _super);
    function BScroll(el, options) {
        var _this = _super.call(this, [
            'refresh',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy'
        ]) || this;
        var wrapper = getElement(el);
        if (!wrapper) {
            warn('Can not resolve the wrapper DOM.');
            return _this;
        }
        var content = wrapper.children[0];
        if (!content) {
            warn('The wrapper need at least one child element to be scroller.');
            return _this;
        }
        _this.plugins = {};
        _this.options = new Options().merge(options).process();
        _this.hooks = new EventEmitter([
            'init',
            'refresh',
            'enable',
            'disable',
            'destroy'
        ]);
        _this.init(wrapper);
        return _this;
    }
    BScroll.use = function (ctor) {
        var name = ctor.pluginName;
        var installed = this.plugins.some(function (plugin) { return ctor === plugin.ctor; });
        if (installed)
            return this;
        if (isUndef(name)) {
            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
            return this;
        }
        if (this.pluginsMap[name]) {
            warn("This plugin has been registered, maybe you need change plugin's name");
            return this;
        }
        this.pluginsMap[name] = true;
        this.plugins.push({
            name: name,
            enforce: ctor.enforce,
            ctor: ctor
        });
        return this;
    };
    BScroll.prototype.init = function (wrapper) {
        this.wrapper = wrapper;
        wrapper.isBScroll = true;
        this.scroller = new Scroller(wrapper, this.options);
        this.eventBubbling();
        this.handleAutoBlur();
        this.innerRefresh();
        this.scroller.scrollTo(this.options.startX, this.options.startY);
        this.enable();
        this.proxy(propertiesConfig);
        this.applyPlugins();
    };
    BScroll.prototype.applyPlugins = function () {
        var _this = this;
        var options = this.options;
        this.constructor.plugins
            .sort(function (a, b) {
            var _a;
            var enforeOrderMap = (_a = {},
                _a[EnforceOrder.Pre] = -1,
                _a[EnforceOrder.Post] = 1,
                _a);
            var aOrder = a.enforce ? enforeOrderMap[a.enforce] : 0;
            var bOrder = b.enforce ? enforeOrderMap[b.enforce] : 0;
            return aOrder - bOrder;
        })
            .forEach(function (item) {
            var ctor = item.ctor;
            if (options[item.name] && typeof ctor === 'function') {
                _this.plugins[item.name] = new ctor(_this);
            }
        });
    };
    BScroll.prototype.handleAutoBlur = function () {
        if (this.options.autoBlur) {
            this.on(this.eventTypes.beforeScrollStart, function () {
                var activeElement = document.activeElement;
                if (activeElement &&
                    (activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            });
        }
    };
    BScroll.prototype.eventBubbling = function () {
        bubbling(this.scroller.hooks, this, [
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick'
        ]);
    };
    BScroll.prototype.innerRefresh = function () {
        this.scroller.refresh();
        this.hooks.trigger(this.hooks.eventTypes.refresh);
        this.trigger(this.eventTypes.refresh);
    };
    BScroll.prototype.proxy = function (propertiesConfig) {
        var _this = this;
        propertiesConfig.forEach(function (_a) {
            var key = _a.key, sourceKey = _a.sourceKey;
            propertiesProxy(_this, sourceKey, key);
        });
    };
    BScroll.prototype.refresh = function () {
        this.innerRefresh();
        this.scroller.resetPosition();
    };
    BScroll.prototype.enable = function () {
        this.scroller.enable();
        this.hooks.trigger(this.hooks.eventTypes.enable);
        this.trigger(this.eventTypes.enable);
    };
    BScroll.prototype.disable = function () {
        this.scroller.disable();
        this.hooks.trigger(this.hooks.eventTypes.disable);
        this.trigger(this.eventTypes.disable);
    };
    BScroll.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy);
        this.trigger(this.eventTypes.destroy);
        this.scroller.destroy();
    };
    BScroll.prototype.eventRegister = function (names) {
        this.registerType(names);
    };
    BScroll.plugins = [];
    BScroll.pluginsMap = {};
    return BScroll;
}(EventEmitter));

/* harmony default export */ __webpack_exports__["default"] = (BScroll);



/***/ }),

/***/ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-down
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var sourcePrefix = 'plugins.pullDownRefresh';
var propertiesMap = [
    {
        key: 'finishPullDown',
        name: 'finish'
    },
    {
        key: 'openPullDown',
        name: 'open'
    },
    {
        key: 'closePullDown',
        name: 'close'
    },
    {
        key: 'autoPullDownRefresh',
        name: 'autoPull'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullDown = /** @class */ (function () {
    function PullDown(scroll) {
        this.scroll = scroll;
        this.pulling = false;
        if (scroll.options.pullDownRefresh) {
            this._watch();
        }
        this.scroll.registerType(['pullingDown']);
        this.scroll.proxy(propertiesProxyConfig);
    }
    PullDown.prototype._watch = function () {
        // 需要设置 probe = 3 吗？
        // must watch scroll in real time
        this.scroll.options.probeType = Probe.Realtime;
        this.scroll.scroller.hooks.on('end', this._checkPullDown, this);
    };
    PullDown.prototype._checkPullDown = function () {
        if (!this.scroll.options.pullDownRefresh) {
            return;
        }
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        // check if a real pull down action
        if (this.scroll.directionY !== Direction.Negative ||
            this.scroll.y < threshold) {
            return false;
        }
        if (!this.pulling) {
            this.pulling = true;
            this.scroll.trigger('pullingDown');
            this.originalMinScrollY = this.scroll.minScrollY;
            this.scroll.minScrollY = stop;
        }
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
        return this.pulling;
    };
    PullDown.prototype.finish = function () {
        this.pulling = false;
        this.scroll.minScrollY = this.originalMinScrollY;
        this.scroll.resetPosition(this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.scroll.options.pullDownRefresh = config;
        this._watch();
    };
    PullDown.prototype.close = function () {
        this.scroll.options.pullDownRefresh = false;
    };
    PullDown.prototype.autoPull = function () {
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        if (this.pulling) {
            return;
        }
        this.pulling = true;
        this.originalMinScrollY = this.scroll.minScrollY;
        this.scroll.minScrollY = threshold;
        this.scroll.scrollTo(this.scroll.x, threshold);
        this.scroll.trigger('pullingDown');
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.pluginName = 'pullDownRefresh';
    return PullDown;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullDown);


/***/ }),

/***/ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-up
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var sourcePrefix = 'plugins.pullUpLoad';
var propertiesMap = [
    {
        key: 'finishPullUp',
        name: 'finish'
    },
    {
        key: 'openPullUp',
        name: 'open'
    },
    {
        key: 'closePullUp',
        name: 'close'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullUp = /** @class */ (function () {
    function PullUp(bscroll) {
        this.bscroll = bscroll;
        this.watching = false;
        if (bscroll.options.pullUpLoad) {
            this._watch();
        }
        this.bscroll.registerType(['pullingUp']);
        this.bscroll.proxy(propertiesProxyConfig);
    }
    PullUp.prototype._watch = function () {
        if (this.watching) {
            return;
        }
        // must watch scroll in real time
        this.bscroll.options.probeType = Probe.Realtime;
        this.watching = true;
        this.bscroll.on('scroll', this._checkToEnd, this);
    };
    PullUp.prototype._checkToEnd = function (pos) {
        var _this = this;
        if (!this.bscroll.options.pullUpLoad) {
            return;
        }
        var _a = this.bscroll.options
            .pullUpLoad.threshold, threshold = _a === void 0 ? 0 : _a;
        if (this.bscroll.movingDirectionY === Direction.Positive &&
            pos.y <= this.bscroll.maxScrollY + threshold) {
            // reset pullupWatching status after scroll end to promise that trigger 'pullingUp' only once when pulling up
            this.bscroll.once('scrollEnd', function () {
                _this.watching = false;
            });
            this.bscroll.trigger('pullingUp');
            this.bscroll.off('scroll', this._checkToEnd);
        }
    };
    PullUp.prototype.finish = function () {
        if (this.watching) {
            this.bscroll.once('scrollEnd', this._watch, this);
        }
        else {
            this._watch();
        }
    };
    PullUp.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.bscroll.options.pullUpLoad = config;
        this._watch();
    };
    PullUp.prototype.close = function () {
        this.bscroll.options.pullUpLoad = false;
        if (!this.watching) {
            return;
        }
        this.watching = false;
        this.bscroll.off('scroll', this._checkToEnd);
    };
    PullUp.pluginName = 'pullUpLoad';
    return PullUp;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullUp);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/controller/ErrorController.js":
/*!**********************************************!*\
  !*** ./src/js/controller/ErrorController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_errorpage_404_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/errorpage/404.html */ "./src/views/errorpage/404.html");
/* harmony import */ var _views_errorpage_404_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_errorpage_404_html__WEBPACK_IMPORTED_MODULE_2__);




var ErrorController =
/*#__PURE__*/
function () {
  function ErrorController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorController, [{
    key: "render",
    value: function render() {
      console.log(1);
      $('#main-container').html(_views_errorpage_404_html__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  }]);

  return ErrorController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ErrorController());

/***/ }),

/***/ "./src/js/controller/PositionController.js":
/*!*************************************************!*\
  !*** ./src/js/controller/PositionController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/position/positionlist.html */ "./src/views/position/positionlist.html");
/* harmony import */ var _views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/position/positionlist-item.html */ "./src/views/position/positionlist-item.html");
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_Fetch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Fetch.js */ "./src/js/model/Fetch.js");
/* harmony import */ var _better_scroll_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @better-scroll/core */ "./node_modules/@better-scroll/core/dist/core.esm.js");
/* harmony import */ var _better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @better-scroll/pull-down */ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js");
/* harmony import */ var _better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @better-scroll/pull-up */ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js");









_better_scroll_core__WEBPACK_IMPORTED_MODULE_6__["default"].use(_better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_7__["default"]);
_better_scroll_core__WEBPACK_IMPORTED_MODULE_6__["default"].use(_better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_8__["default"]);

var PositionController =
/*#__PURE__*/
function () {
  function PositionController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PositionController);

    this.name = 'listmore';
    this.pageNo = 1;
    this.pageSize = 15;
    this.datalist = [];
    this.total = 0;
    this.initEvent();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PositionController, [{
    key: "getlist",
    value: function getlist() {
      var _this = this;

      return new Promise(function _callee(reslove, reject) {
        var rs, html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $("#loading").show();
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_model_Fetch_js__WEBPACK_IMPORTED_MODULE_5__["default"].getPositionlist({
                  name: _this.name,
                  pageNo: _this.pageNo,
                  pageSize: _this.pageSize
                }));

              case 3:
                rs = _context.sent;
                _this.total = rs.content.data.page.totalCOntent;
                _this.datalist = _this.datalist.concat(rs.content.data.page.result);
                html = template.render(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  list: _this.datalist
                });
                $("#list-container").html(html);
                $("#loading").hide();
                reslove();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var $head;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function render$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              $("#main-container").html(_views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_3___default.a);
              $head = $("#main-container .head");
              _context4.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getlist());

            case 4:
              this.scroll = new _better_scroll_core__WEBPACK_IMPORTED_MODULE_6__["default"]('#position-wrapper', {
                scrollY: true,
                click: true,
                probeType: 3,
                pullUpLoad: true,
                pullDownRefresh: {
                  threshold: 50
                }
              }); // 下拉刷新

              this.scroll.on('pullingDown', function _callee2() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('pullingDown');
                        _context2.next = 3;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this2.getlist());

                      case 3:
                        _this2.scroll.finishPullDown();

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                });
              }); // 上拉加载更多

              this.scroll.on('pullingUp', function _callee3() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _this2.pageNo++;
                        console.log('pullingup');
                        _context3.next = 4;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this2.getlist());

                      case 4:
                        _this2.scroll.finishPullUp();

                        _this2.scroll.refresh();

                        if (_this2.datalist.length === _this2.total) {
                          $("#main-container .foot").hide();
                          alert('finish');
                        }

                      case 7:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              });
              this.scroll.on('scroll', function () {
                // console.log(this.y)
                if (this.y > 10 && this.y < 50) {
                  $head.show();
                } else if (this.y > 50) {
                  $head.find('img').attr('src', './images/loading.gif');
                } else {
                  $head.hide();
                }
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      $('#main-container').on('click', '.item', function () {
        var id = $(this).attr('data-id');
        console.log(id);
        location.href = './detail.html?' + id;
      });
    }
  }]);

  return PositionController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PositionController());

/***/ }),

/***/ "./src/js/controller/ProfileController.js":
/*!************************************************!*\
  !*** ./src/js/controller/ProfileController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var ProfileController =
/*#__PURE__*/
function () {
  function ProfileController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProfileController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProfileController, [{
    key: "render",
    value: function render() {
      $('#main-container').html('profile');
    }
  }]);

  return ProfileController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ProfileController());

/***/ }),

/***/ "./src/js/controller/SearchController.js":
/*!***********************************************!*\
  !*** ./src/js/controller/SearchController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_search_search_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/search/search.html */ "./src/views/search/search.html");
/* harmony import */ var _views_search_search_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_search_search_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/position/positionlist-item.html */ "./src/views/position/positionlist-item.html");
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_Search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Search.js */ "./src/js/model/Search.js");



// import Searchhtml from '../../views/search/search.html';
// class SearchController{
//     render(){
//         $('#main-container').html(Searchhtml)
//     }
// }
// export default new SearchController();




var SearchController =
/*#__PURE__*/
function () {
  function SearchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SearchController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SearchController, [{
    key: "render",
    value: function render() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function render$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $("#main-container").html(_views_search_search_html__WEBPACK_IMPORTED_MODULE_3___default.a);
              _context.t0 = $('.search-btn');
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getlist());

            case 4:
              _context.t1 = _context.sent;

              _context.t0.on.call(_context.t0, 'click', _context.t1);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getlist",
    value: function getlist() {
      console.log(11); // return new Promise(async (reslove, reject) => {
      //     let rs = await search.getPositionlist();
      //     // this.total = rs.content.data.page.totalCOntent;
      //     // this.datalist = this.datalist.concat(rs.result)
      //     let html = template.render(itemHtml, {
      //         list: rs
      //     })
      //     $("#list-container").html(html)
      //     reslove();
      // })
    }
  }]);

  return SearchController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SearchController());

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_Router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/Router.js */ "./src/js/router/Router.js");




var Index =
/*#__PURE__*/
function () {
  function Index() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Index);

    this.initEvent();
    location.hash = '#position';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index, [{
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      $("#index_nav li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var hash = $(this).attr('data-hash'); // location.hash = hash;

        _router_Router_js__WEBPACK_IMPORTED_MODULE_2__["default"].go(hash);
      });
      $(window).on('hashchange', function () {
        var hash = location.hash.replace('#', '');
        $('index_nav').find('li[data-hash="' + hash + '"]');
        $(_this).addClass('active').siblings().removeClass('active');
      });
    }
  }]);

  return Index;
}();

new Index();

/***/ }),

/***/ "./src/js/model/Fetch.js":
/*!*******************************!*\
  !*** ./src/js/model/Fetch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Fetch =
/*#__PURE__*/
function () {
  function Fetch() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Fetch);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Fetch, [{
    key: "getPositionlist",
    value: function getPositionlist(params) {
      var name = params.name,
          pageNo = params.pageNo,
          pageSize = params.pageSize;
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "/fetch/".concat(name, ".json?pageNo=").concat(pageNo, "&pageSize=").concat(pageSize),
          type: 'GET',
          success: function success(result) {
            resolve(result);
          },
          error: function error(result) {
            reject(result);
          }
        });
      });
    }
  }]);

  return Fetch;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Fetch());

/***/ }),

/***/ "./src/js/model/Search.js":
/*!********************************!*\
  !*** ./src/js/model/Search.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Search =
/*#__PURE__*/
function () {
  function Search() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Search);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Search, [{
    key: "getPositionlist",
    value: function getPositionlist() {
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: '/search/api/positionlist',
          type: 'GET',
          success: function success(result) {
            resolve(result);
          },
          error: function error(result) {
            reject(result);
          }
        });
      });
    }
  }]);

  return Search;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Search());

/***/ }),

/***/ "./src/js/router/Router.js":
/*!*********************************!*\
  !*** ./src/js/router/Router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/PositionController.js */ "./src/js/controller/PositionController.js");
/* harmony import */ var _controller_SearchController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/SearchController.js */ "./src/js/controller/SearchController.js");
/* harmony import */ var _controller_ProfileController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/ProfileController.js */ "./src/js/controller/ProfileController.js");
/* harmony import */ var _controller_ErrorController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/ErrorController.js */ "./src/js/controller/ErrorController.js");






var MODE = 'hash';

var Router =
/*#__PURE__*/
function () {
  function Router() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);

    this.routes = {
      'position': _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      'search': _controller_SearchController_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      'profile': _controller_ProfileController_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.initEvent();
    _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__["default"].render();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{
    key: "loadView",
    value: function loadView(path) {
      if (this.routes[path]) {
        this.routes[path].render();
      } else {
        _controller_ErrorController_js__WEBPACK_IMPORTED_MODULE_5__["default"].render();
      }
    }
  }, {
    key: "go",
    value: function go(path) {
      if (MODE === 'hash') {
        location.hash = path;
      } else {
        history.pushState({
          path: path
        }, '', path);
        this.loadView(path);
      }
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      if (MODE === 'hash') {
        window.addEventListener('hashchange', function () {
          var hash = location.hash.replace('#', '');

          _this.loadView(hash);
        });
      } else {
        window.addEventListener('popstate', function () {
          _this.loadView(history.state.path);
        });
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Router());

/***/ }),

/***/ "./src/views/errorpage/404.html":
/*!**************************************!*\
  !*** ./src/views/errorpage/404.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>    page not found!</div>"

/***/ }),

/***/ "./src/views/position/positionlist-item.html":
/*!***************************************************!*\
  !*** ./src/views/position/positionlist-item.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<% for(var i = 0;i<list.length;i++){ %><div class=\"item\" data-id=<%=list[i].positionId %>>    <div class=\"logo\">        <img src=\"https://www.lgstatic.com/<%=list[i].companyLogo %>\" alt=\"\">    </div>    <div class=\"desc\">        <h2><%=list[i].companyName %></h2>        <p><%=list[i][\'positionName\'] %>[<%=list[i][\'city\'] %>]</p>        <p><%=list[i][\'createTime\'] %></p>    </div>    <div class=\"salary\">        <%=list[i][\'salary\'] %>    </div></div><% } %>"

/***/ }),

/***/ "./src/views/position/positionlist.html":
/*!**********************************************!*\
  !*** ./src/views/position/positionlist.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"position-wrapper\">    <div>        <div id=\"loading\">            <img src=\"../images/loading.gif\" alt=\"\">        </div>        <div class=\"head\">                <img src=\"../images/arrow.png\" alt=\"\">            下拉刷新        </div>        <div class=\"custom\">            <span>                10秒钟定制职位            </span>            <button>去登录</button>        </div>        <div id=\"list-container\">            <!-- <% for(var i = 0;i<list.length;i++){ %>                    <div class=\"item\">                        <div class=\"logo\">                            <img src=\"https://www.lgstatic.com/<%=list[i].companyLogo %>\" alt=\"\">                        </div>                                    <div class=\"desc\">                            <h2><%=list[i].companyName %></h2>                            <p><%=list[i][\'positionName\'] %></p>                            <p><%=list[i][\'createTime\'] %></p>                        </div>                        <div class=\"salary\">                                <%=list[i][\'salary\'] %>                        </div>                    </div>                    <% } %> -->        </div>        <div class=\"foot\">            上拉加载更多        </div>    </div></div>"

/***/ }),

/***/ "./src/views/search/search.html":
/*!**************************************!*\
  !*** ./src/views/search/search.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-container\">    <div>        <div class=\"search\">            <div class=\"selectcity\">全国</div>            <input type=\"text\" placeholder=\"搜索职位或公司\">            <div class=\"search-btn\">🔍</div>        </div>        <div id=\"list-container\">                        </div>        <div class=\"foot\">            上拉加载更多        </div>    </div></div>"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmV0dGVyLXNjcm9sbC9jb3JlL2Rpc3QvY29yZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL3B1bGwtZG93bi9kaXN0L3B1bGwtZG93bi5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL3B1bGwtdXAvZGlzdC9wdWxsLXVwLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9sbGVyL0Vycm9yQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9Qb3NpdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRyb2xsZXIvUHJvZmlsZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRyb2xsZXIvU2VhcmNoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdXRlci9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vycm9ycGFnZS80MDQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0LWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9zZWFyY2guaHRtbCJdLCJuYW1lcyI6WyJFcnJvckNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwiJCIsImh0bWwiLCJlcnJvckh0bWwiLCJCU2Nyb2xsIiwidXNlIiwiUHVsbERvd24iLCJQdWxsVXAiLCJQb3NpdGlvbkNvbnRyb2xsZXIiLCJuYW1lIiwicGFnZU5vIiwicGFnZVNpemUiLCJkYXRhbGlzdCIsInRvdGFsIiwiaW5pdEV2ZW50IiwiUHJvbWlzZSIsInJlc2xvdmUiLCJyZWplY3QiLCJzaG93IiwiZmV0Y2giLCJnZXRQb3NpdGlvbmxpc3QiLCJycyIsImNvbnRlbnQiLCJkYXRhIiwicGFnZSIsInRvdGFsQ09udGVudCIsImNvbmNhdCIsInJlc3VsdCIsInRlbXBsYXRlIiwicmVuZGVyIiwiaXRlbUh0bWwiLCJsaXN0IiwiaGlkZSIsIlBvc2l0aW9uaHRtbCIsIiRoZWFkIiwiZ2V0bGlzdCIsInNjcm9sbCIsInNjcm9sbFkiLCJjbGljayIsInByb2JlVHlwZSIsInB1bGxVcExvYWQiLCJwdWxsRG93blJlZnJlc2giLCJ0aHJlc2hvbGQiLCJvbiIsImZpbmlzaFB1bGxEb3duIiwiZmluaXNoUHVsbFVwIiwicmVmcmVzaCIsImxlbmd0aCIsImFsZXJ0IiwieSIsImZpbmQiLCJhdHRyIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJQcm9maWxlQ29udHJvbGxlciIsIlNlYXJjaENvbnRyb2xsZXIiLCJzZWFyY2hIdG1sIiwiSW5kZXgiLCJoYXNoIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiUm91dGVyIiwiZ28iLCJ3aW5kb3ciLCJyZXBsYWNlIiwiRmV0Y2giLCJwYXJhbXMiLCJyZXNvbHZlIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJTZWFyY2giLCJNT0RFIiwicm91dGVzIiwicGF0aCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2FkVmlldyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7OztBQ0E5QztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFD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dkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEMsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsRUFBRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHNFQUFPLEVBQUM7QUFDSjs7Ozs7Ozs7Ozs7OztBQ3JoRW5CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEl4QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0JBQXNCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDdkd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFlLENBQUMrQixNQUFoQjtBQUNIO0FBQ0o7Ozt1QkFDRWlELEksRUFBSztBQUNKLFVBQUdGLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQ2Z2QixnQkFBUSxDQUFDTSxJQUFULEdBQWdCbUIsSUFBaEI7QUFDSCxPQUZELE1BRUs7QUFDREMsZUFBTyxDQUFDQyxTQUFSLENBQWtCO0FBQUNGLGNBQUksRUFBSkE7QUFBRCxTQUFsQixFQUF5QixFQUF6QixFQUE0QkEsSUFBNUI7QUFDQSxhQUFLRyxRQUFMLENBQWNILElBQWQ7QUFDSDtBQUNKOzs7Z0NBRVU7QUFBQTs7QUFDUCxVQUFHRixJQUFJLEtBQUssTUFBWixFQUFtQjtBQUNmWCxjQUFNLENBQUNpQixnQkFBUCxDQUF3QixZQUF4QixFQUFxQyxZQUFJO0FBQ3JDLGNBQUl2QixJQUFJLEdBQUdOLFFBQVEsQ0FBQ00sSUFBVCxDQUFjTyxPQUFkLENBQXNCLEdBQXRCLEVBQTBCLEVBQTFCLENBQVg7O0FBQ0EsZUFBSSxDQUFDZSxRQUFMLENBQWN0QixJQUFkO0FBQ0gsU0FIRDtBQUlILE9BTEQsTUFNSTtBQUNBTSxjQUFNLENBQUNpQixnQkFBUCxDQUF3QixVQUF4QixFQUFtQyxZQUFJO0FBQ25DLGVBQUksQ0FBQ0QsUUFBTCxDQUFjRixPQUFPLENBQUNJLEtBQVIsQ0FBY0wsSUFBNUI7QUFDSCxTQUZEO0FBR0g7QUFFSjs7Ozs7O0FBRVUsbUVBQUlmLE1BQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pEQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxtQ0FBbUMsY0FBYyxLQUFLLHliQUF5YixJOzs7Ozs7Ozs7OztBQ0EvZSw0ZEFBNGQsY0FBYyxLQUFLLHVxQkFBdXFCLGtHOzs7Ozs7Ozs7OztBQ0F0cEMsdVkiLCJmaWxlIjoiaW5kZXgtbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBjb3JlXG4gKiAoYykgMjAxNi0yMDE5IHVzdGJodWFuZ3lpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW0JTY3JvbGwgd2Fybl06IFwiICsgbXNnKTtcclxufVxuXG4vLyBzc3Igc3VwcG9ydFxyXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbnZhciB1YSA9IGluQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbnZhciBpc1dlQ2hhdERldlRvb2xzID0gdWEgJiYgL3dlY2hhdGRldnRvb2xzLy50ZXN0KHVhKTtcclxudmFyIGlzQW5kcm9pZCA9IHVhICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDA7XG5cbmZ1bmN0aW9uIGdldE5vdygpIHtcclxuICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vd1xyXG4gICAgICAgID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcclxuICAgICAgICA6ICtuZXcgRGF0ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcclxuICAgIHZhciByZXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc291cmNlID0gcmVzdFtpXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBpc1VuZGVmKHYpIHtcclxuICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbDtcclxufVxuXG52YXIgZWxlbWVudFN0eWxlID0gKGluQnJvd3NlciAmJlxyXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUpO1xyXG52YXIgdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHRyYW5zZm9ybU5hbWVzID0ge1xyXG4gICAgICAgIHdlYmtpdDogJ3dlYmtpdFRyYW5zZm9ybScsXHJcbiAgICAgICAgTW96OiAnTW96VHJhbnNmb3JtJyxcclxuICAgICAgICBPOiAnT1RyYW5zZm9ybScsXHJcbiAgICAgICAgbXM6ICdtc1RyYW5zZm9ybScsXHJcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybU5hbWVzKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRTdHlsZVt0cmFuc2Zvcm1OYW1lc1trZXldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KSgpO1xyXG5mdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xyXG4gICAgaWYgKHZlbmRvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodmVuZG9yID09PSAnc3RhbmRhcmQnKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlID09PSAndHJhbnNpdGlvbkVuZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZlbmRvciArIHN0eWxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGUuc3Vic3RyKDEpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEVsZW1lbnQoZWwpIHtcclxuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgICA6IGVsKTtcclxufVxyXG5mdW5jdGlvbiBhZGRFdmVudChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHtcclxuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcclxuICAgICAgICBjYXB0dXJlOiAhIWNhcHR1cmVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwge1xyXG4gICAgICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XHJcbiAgICB2YXIgbGVmdCA9IDA7XHJcbiAgICB2YXIgdG9wID0gMDtcclxuICAgIHdoaWxlIChlbCkge1xyXG4gICAgICAgIGxlZnQgLT0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3AgLT0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgIHRvcDogdG9wXHJcbiAgICB9O1xyXG59XHJcbnZhciBjc3NWZW5kb3IgPSB2ZW5kb3IgJiYgdmVuZG9yICE9PSAnc3RhbmRhcmQnID8gJy0nICsgdmVuZG9yLnRvTG93ZXJDYXNlKCkgKyAnLScgOiAnJztcclxudmFyIHRyYW5zZm9ybSA9IHByZWZpeFN0eWxlKCd0cmFuc2Zvcm0nKTtcclxudmFyIHRyYW5zaXRpb24gPSBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpO1xyXG52YXIgaGFzUGVyc3BlY3RpdmUgPSBpbkJyb3dzZXIgJiYgcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gZWxlbWVudFN0eWxlO1xyXG4vLyBmaXggaXNzdWUgIzM2MVxyXG52YXIgaGFzVG91Y2ggPSBpbkJyb3dzZXIgJiYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBpc1dlQ2hhdERldlRvb2xzKTtcclxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgdHJhbnNpdGlvbiBpbiBlbGVtZW50U3R5bGU7XHJcbnZhciBzdHlsZSA9IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkR1cmF0aW9uJyksXHJcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpLFxyXG4gICAgdHJhbnNpdGlvbkVuZDogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25FbmQnKVxyXG59O1xyXG52YXIgZXZlbnRUeXBlTWFwID0ge1xyXG4gICAgdG91Y2hzdGFydDogMSxcclxuICAgIHRvdWNobW92ZTogMSxcclxuICAgIHRvdWNoZW5kOiAxLFxyXG4gICAgbW91c2Vkb3duOiAyLFxyXG4gICAgbW91c2Vtb3ZlOiAyLFxyXG4gICAgbW91c2V1cDogMlxyXG59O1xyXG5mdW5jdGlvbiBnZXRSZWN0KGVsKSB7XHJcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IGVsLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdDogZWwub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlbCwgZXhjZXB0aW9ucykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBleGNlcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGV4Y2VwdGlvbnNbaV0udGVzdChlbFtpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciB0YWdFeGNlcHRpb25GbiA9IHByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm47XHJcbmZ1bmN0aW9uIHRhcChlLCBldmVudE5hbWUpIHtcclxuICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICBldi5wYWdlWCA9IGUucGFnZVg7XHJcbiAgICBldi5wYWdlWSA9IGUucGFnZVk7XHJcbiAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcclxufVxyXG5mdW5jdGlvbiBjbGljayhlLCBldmVudCkge1xyXG4gICAgaWYgKGV2ZW50ID09PSB2b2lkIDApIHsgZXZlbnQgPSAnY2xpY2snOyB9XHJcbiAgICB2YXIgZXZlbnRTb3VyY2U7XHJcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcpIHtcclxuICAgICAgICBldmVudFNvdXJjZSA9IGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XHJcbiAgICAgICAgZXZlbnRTb3VyY2UgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgfVxyXG4gICAgdmFyIHBvc1NyYyA9IHt9O1xyXG4gICAgaWYgKGV2ZW50U291cmNlKSB7XHJcbiAgICAgICAgcG9zU3JjLnNjcmVlblggPSBldmVudFNvdXJjZS5zY3JlZW5YIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLnNjcmVlblkgPSBldmVudFNvdXJjZS5zY3JlZW5ZIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLmNsaWVudFggPSBldmVudFNvdXJjZS5jbGllbnRYIHx8IDA7XHJcbiAgICAgICAgcG9zU3JjLmNsaWVudFkgPSBldmVudFNvdXJjZS5jbGllbnRZIHx8IDA7XHJcbiAgICB9XHJcbiAgICB2YXIgZXY7XHJcbiAgICB2YXIgYnViYmxlcyA9IHRydWU7XHJcbiAgICB2YXIgY2FuY2VsYWJsZSA9IHRydWU7XHJcbiAgICBpZiAodHlwZW9mIE1vdXNlRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZXYgPSBuZXcgTW91c2VFdmVudChldmVudCwgZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBjYW5jZWxhYmxlXHJcbiAgICAgICAgICAgIH0sIHBvc1NyYykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudCgpIHtcclxuICAgICAgICBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgICAgIGV2LmluaXRFdmVudChldmVudCwgYnViYmxlcywgY2FuY2VsYWJsZSk7XHJcbiAgICAgICAgZXh0ZW5kKGV2LCBwb3NTcmMpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yd2FyZGVkVG91Y2hFdmVudCBzZXQgdG8gdHJ1ZSBpbiBjYXNlIG9mIHRoZSBjb25mbGljdCB3aXRoIGZhc3RjbGlja1xyXG4gICAgZXYuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XHJcbiAgICBldi5fY29uc3RydWN0ZWQgPSB0cnVlO1xyXG4gICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XHJcbn1cclxuZnVuY3Rpb24gZGJsY2xpY2soZSkge1xyXG4gICAgY2xpY2soZSwgJ2RibGNsaWNrJyk7XHJcbn1cblxudmFyIGVhc2UgPSB7XHJcbiAgICAvLyBlYXNlT3V0UXVpbnRcclxuICAgIHN3aXBlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSArIC0tdCAqIHQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFyZFxyXG4gICAgc3dpcGVCb3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ICogKDIgLSB0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJ0XHJcbiAgICBib3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwIC8gNjA7XHJcbnZhciB3aW5kb3dDb21wYXQgPSBpbkJyb3dzZXIgJiYgd2luZG93O1xyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAvLyBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHNldFRpbWVvdXRcclxuICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAoY2FsbGJhY2suaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCkgLyAyKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxyXG4gICAgICAgIH0pO1xyXG59KSgpO1xyXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH1cclxuICAgIHJldHVybiAod2luZG93Q29tcGF0LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgICB9KTtcclxufSkoKTtcblxudmFyIG5vb3AkMSA9IGZ1bmN0aW9uICh2YWwpIHsgfTtcclxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IG5vb3AkMSxcclxuICAgIHNldDogbm9vcCQxXHJcbn07XHJcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xyXG4gICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBvYmogPSBvYmpba2V5c1tpXV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFvYmopXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBsYXN0S2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0eXBlb2Ygb2JqW2xhc3RLZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtsYXN0S2V5XS5hcHBseShvYmosIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBvYmpbbGFzdEtleV07XHJcbiAgICB9XHJcbn07XHJcbnZhciBzZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcclxuICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgICB2YXIgdGVtcDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0ga2V5c1tpXTtcclxuICAgICAgICBpZiAoIW9ialt0ZW1wXSlcclxuICAgICAgICAgICAgb2JqW3RlbXBdID0ge307XHJcbiAgICAgICAgb2JqID0gb2JqW3RlbXBdO1xyXG4gICAgfVxyXG4gICAgb2JqW2tleXMucG9wKCldID0gdmFsdWU7XHJcbn07XHJcbmZ1bmN0aW9uIHByb3BlcnRpZXNQcm94eSh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XHJcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5KHRoaXMsIHNvdXJjZUtleSk7XHJcbiAgICB9O1xyXG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyKHZhbCkge1xyXG4gICAgICAgIHNldFByb3BlcnR5KHRoaXMsIHNvdXJjZUtleSwgdmFsKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XHJcbn1cblxudmFyIEV2ZW50RW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihuYW1lcykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5ldmVudFR5cGVzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUobmFtZXMpO1xyXG4gICAgfVxyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0eXBlLCBmbiwgY29udGV4dCkge1xyXG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHRoaXM7IH1cclxuICAgICAgICB0aGlzLl9jaGVja0luVHlwZXModHlwZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50c1t0eXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKFtmbiwgY29udGV4dF0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uICh0eXBlLCBmbiwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gdGhpczsgfVxyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5UeXBlcyh0eXBlKTtcclxuICAgICAgICB2YXIgbWFnaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMub2ZmKHR5cGUsIG1hZ2ljKTtcclxuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWdpYy5mbiA9IGZuO1xyXG4gICAgICAgIHRoaXMub24odHlwZSwgbWFnaWMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0eXBlICYmICFmbikge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tJblR5cGVzKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xyXG4gICAgICAgICAgICBpZiAoIWV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gZXZlbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudHNbY291bnRdWzBdID09PSBmbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChldmVudHNbY291bnRdWzBdICYmIGV2ZW50c1tjb3VudF1bMF0uZm4gPT09IGZuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoY291bnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJblR5cGVzKHR5cGUpO1xyXG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcclxuICAgICAgICBpZiAoIWV2ZW50cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW4gPSBldmVudHMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBldmVudHNDb3B5ID0gZXZlbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgdmFyIHJldDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBldmVudF8xID0gZXZlbnRzQ29weVtpXTtcclxuICAgICAgICAgICAgdmFyIGZuID0gZXZlbnRfMVswXSwgY29udGV4dCA9IGV2ZW50XzFbMV07XHJcbiAgICAgICAgICAgIGlmIChmbikge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlZ2lzdGVyVHlwZSA9IGZ1bmN0aW9uIChuYW1lcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5ldmVudFR5cGVzW3R5cGVdID0gdHlwZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZXMgPSB7fTtcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLl9jaGVja0luVHlwZXMgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciB0eXBlcyA9IHRoaXMuZXZlbnRUeXBlcztcclxuICAgICAgICB2YXIgaW5UeXBlcyA9IHR5cGVzW3R5cGVdID09PSB0eXBlO1xyXG4gICAgICAgIGlmICghaW5UeXBlcykge1xyXG4gICAgICAgICAgICB3YXJuKFwiRXZlbnRFbWl0dGVyIGhhcyB1c2VkIHVua25vd24gZXZlbnQgdHlwZTogXFxcIlwiICsgdHlwZSArIFwiXFxcIiwgc2hvdWxkIGJlIG9uZW9mIFtcIiArIE9iamVjdC5rZXlzKHR5cGVzKSArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcclxufSgpKTtcblxudmFyIERpcmVjdGlvbjtcclxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJQb3NpdGl2ZVwiXSA9IDFdID0gXCJQb3NpdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIk5lZ2F0aXZlXCJdID0gLTFdID0gXCJOZWdhdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XG5cbnZhciBEaXJlY3Rpb25Mb2NrO1xyXG4oZnVuY3Rpb24gKERpcmVjdGlvbkxvY2spIHtcclxuICAgIERpcmVjdGlvbkxvY2tbXCJEZWZhdWx0XCJdID0gXCJcIjtcclxuICAgIERpcmVjdGlvbkxvY2tbXCJIb3Jpem9udGFsXCJdID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICBEaXJlY3Rpb25Mb2NrW1wiVmVydGljYWxcIl0gPSBcInZlcnRpY2FsXCI7XHJcbiAgICBEaXJlY3Rpb25Mb2NrW1wiTm9uZVwiXSA9IFwibm9uZVwiO1xyXG59KShEaXJlY3Rpb25Mb2NrIHx8IChEaXJlY3Rpb25Mb2NrID0ge30pKTtcblxudmFyIEV2ZW50UGFzc3Rocm91Z2g7XHJcbihmdW5jdGlvbiAoRXZlbnRQYXNzdGhyb3VnaCkge1xyXG4gICAgRXZlbnRQYXNzdGhyb3VnaFtcIk5vbmVcIl0gPSBcIlwiO1xyXG4gICAgRXZlbnRQYXNzdGhyb3VnaFtcIkhvcml6b250YWxcIl0gPSBcImhvcml6b250YWxcIjtcclxuICAgIEV2ZW50UGFzc3Rocm91Z2hbXCJWZXJ0aWNhbFwiXSA9IFwidmVydGljYWxcIjtcclxufSkoRXZlbnRQYXNzdGhyb3VnaCB8fCAoRXZlbnRQYXNzdGhyb3VnaCA9IHt9KSk7XG5cbnZhciBFdmVudFR5cGU7XHJcbihmdW5jdGlvbiAoRXZlbnRUeXBlKSB7XHJcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiVG91Y2hcIl0gPSAxXSA9IFwiVG91Y2hcIjtcclxuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJNb3VzZVwiXSA9IDJdID0gXCJNb3VzZVwiO1xyXG59KShFdmVudFR5cGUgfHwgKEV2ZW50VHlwZSA9IHt9KSk7XG5cbnZhciBNb3VzZUJ1dHRvbjtcclxuKGZ1bmN0aW9uIChNb3VzZUJ1dHRvbikge1xyXG4gICAgTW91c2VCdXR0b25bTW91c2VCdXR0b25bXCJMZWZ0XCJdID0gMF0gPSBcIkxlZnRcIjtcclxuICAgIE1vdXNlQnV0dG9uW01vdXNlQnV0dG9uW1wiTWlkZGxlXCJdID0gMV0gPSBcIk1pZGRsZVwiO1xyXG4gICAgTW91c2VCdXR0b25bTW91c2VCdXR0b25bXCJSaWdodFwiXSA9IDJdID0gXCJSaWdodFwiO1xyXG59KShNb3VzZUJ1dHRvbiB8fCAoTW91c2VCdXR0b24gPSB7fSkpO1xuXG52YXIgUHJvYmU7XHJcbihmdW5jdGlvbiAoUHJvYmUpIHtcclxuICAgIFByb2JlW1Byb2JlW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlRocm90dGxlXCJdID0gMV0gPSBcIlRocm90dGxlXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIk5vcm1hbFwiXSA9IDJdID0gXCJOb3JtYWxcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiUmVhbHRpbWVcIl0gPSAzXSA9IFwiUmVhbHRpbWVcIjtcclxufSkoUHJvYmUgfHwgKFByb2JlID0ge30pKTtcblxudmFyIE9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZyZWVTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSA1O1xyXG4gICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9IEV2ZW50UGFzc3Rocm91Z2guTm9uZTtcclxuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYmxjbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGFwID0gJyc7XHJcbiAgICAgICAgdGhpcy5ib3VuY2UgPSB7XHJcbiAgICAgICAgICAgIHRvcDogdHJ1ZSxcclxuICAgICAgICAgICAgYm90dG9tOiB0cnVlLFxyXG4gICAgICAgICAgICBsZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICByaWdodDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3VuY2VUaW1lID0gODAwO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW1MaW1pdFRpbWUgPSAzMDA7XHJcbiAgICAgICAgdGhpcy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgPSAxNTtcclxuICAgICAgICB0aGlzLnN3aXBlVGltZSA9IDI1MDA7XHJcbiAgICAgICAgdGhpcy5zd2lwZUJvdW5jZVRpbWUgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb24gPSAwLjAwMTU7XHJcbiAgICAgICAgdGhpcy5mbGlja0xpbWl0VGltZSA9IDIwMDtcclxuICAgICAgICB0aGlzLmZsaWNrTGltaXREaXN0YW5jZSA9IDEwMDtcclxuICAgICAgICB0aGlzLnJlc2l6ZVBvbGxpbmcgPSA2MDtcclxuICAgICAgICB0aGlzLnByb2JlVHlwZSA9IFByb2JlLkRlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUfEFVRElPKSQvXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRhZ0V4Y2VwdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogL15URVhUQVJFQSQvXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkhXQ29tcG9zaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iaW5kVG9XcmFwcGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlTW91c2UgPSBoYXNUb3VjaDtcclxuICAgICAgICB0aGlzLmRpc2FibGVUb3VjaCA9ICFoYXNUb3VjaDtcclxuICAgICAgICB0aGlzLmF1dG9CbHVyID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIE9wdGlvbnMucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT3B0aW9ucy5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVogPVxyXG4gICAgICAgICAgICB0aGlzLkhXQ29tcG9zaXRpbmcgJiYgaGFzUGVyc3BlY3RpdmUgPyAnIHRyYW5zbGF0ZVooMCknIDogJyc7XHJcbiAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uID0gdGhpcy51c2VUcmFuc2l0aW9uICYmIGhhc1RyYW5zaXRpb247XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCA9ICF0aGlzLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAvLyBJZiB5b3Ugd2FudCBldmVudFBhc3N0aHJvdWdoIEkgaGF2ZSB0byBsb2NrIG9uZSBvZiB0aGUgYXhlc1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gRXZlbnRQYXNzdGhyb3VnaC5Ib3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2Nyb2xsWDtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IEV2ZW50UGFzc3Rocm91Z2guVmVydGljYWwgPyBmYWxzZSA6IHRoaXMuc2Nyb2xsWTtcclxuICAgICAgICAvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gdGhpcy5mcmVlU2Nyb2xsICYmICF0aGlzLmV2ZW50UGFzc3Rocm91Z2g7XHJcbiAgICAgICAgLy8gZm9yY2UgdHJ1ZSB3aGVuIGZyZWVTY3JvbGwgaXMgdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IHRoaXMuZnJlZVNjcm9sbCA/IHRydWUgOiB0aGlzLnNjcm9sbFg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gdGhpcy5mcmVlU2Nyb2xsID8gdHJ1ZSA6IHRoaXMuc2Nyb2xsWTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSB0aGlzLmV2ZW50UGFzc3Rocm91Z2hcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPcHRpb25zO1xyXG59KCkpO1xuXG52YXIgRXZlbnRSZWdpc3RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50UmVnaXN0ZXIod3JhcHBlciwgZXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcclxuICAgICAgICB0aGlzLmFkZERPTUV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZURPTUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuYWRkRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKGFkZEV2ZW50KTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5yZW1vdmVET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVET01FdmVudHMocmVtb3ZlRXZlbnQpO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmhhbmRsZURPTUV2ZW50cyA9IGZ1bmN0aW9uIChldmVudE9wZXJhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLndyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnRPcGVyYXRpb24od3JhcHBlciwgZXZlbnQubmFtZSwgX3RoaXMsICEhZXZlbnQuY2FwdHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuc29tZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50Lm5hbWUgPT09IGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuaGFuZGxlcihlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXZlbnRSZWdpc3RlcjtcclxufSgpKTtcblxudmFyIEFjdGlvbnNIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWN0aW9uc0hhbmRsZXIod3JhcHBlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdiZWZvcmVTdGFydCcsXHJcbiAgICAgICAgICAgICdzdGFydCcsXHJcbiAgICAgICAgICAgICdtb3ZlJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdjbGljaydcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLmhhbmRsZURPTUV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmhhbmRsZURPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMsIGJpbmRUb1dyYXBwZXIgPSBfYS5iaW5kVG9XcmFwcGVyLCBkaXNhYmxlTW91c2UgPSBfYS5kaXNhYmxlTW91c2UsIGRpc2FibGVUb3VjaCA9IF9hLmRpc2FibGVUb3VjaCwgY2xpY2sgPSBfYS5jbGljaztcclxuICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMud3JhcHBlcjtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gYmluZFRvV3JhcHBlciA/IHdyYXBwZXIgOiB3aW5kb3c7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJFdmVudHMgPSBbXTtcclxuICAgICAgICB2YXIgdGFyZ2V0RXZlbnRzID0gW107XHJcbiAgICAgICAgdmFyIHNob3VsZFJlZ2lzZXJUb3VjaCA9IGhhc1RvdWNoICYmICFkaXNhYmxlVG91Y2g7XHJcbiAgICAgICAgdmFyIHNob2xkUmVnaXN0ZXJNb3VzZSA9ICFkaXNhYmxlTW91c2U7XHJcbiAgICAgICAgaWYgKGNsaWNrKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xpY2snLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5jbGljay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFJlZ2lzZXJUb3VjaCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5zdGFydC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2htb3ZlJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMubW92ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaGNhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvbGRSZWdpc3Rlck1vdXNlKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vkb3duJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlbW92ZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLm1vdmUuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2V1cCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyYXBwZXJFdmVudFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIod3JhcHBlciwgd3JhcHBlckV2ZW50cyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFdmVudFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIodGFyZ2V0LCB0YXJnZXRFdmVudHMpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5iZWZvcmVIYW5kbGVyID0gZnVuY3Rpb24gKGUsIHR5cGUpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMsIHByZXZlbnREZWZhdWx0ID0gX2EucHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvbiA9IF9hLnN0b3BQcm9wYWdhdGlvbiwgcHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBfYS5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjtcclxuICAgICAgICB2YXIgcHJldmVudERlZmF1bHRDb25kaXRpb25zID0ge1xyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2ZW50RGVmYXVsdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJldmVudERlZmF1bHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgcHJldmVudERlZmF1bHRFeGNlcHRpb24pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJldmVudERlZmF1bHRDb25kaXRpb25zW3R5cGVdKCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5zZXRJbml0aWF0ZWQgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IDA7IH1cclxuICAgICAgICB0aGlzLmluaXRpYXRlZCA9IHR5cGU7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgX2V2ZW50VHlwZSA9IGV2ZW50VHlwZU1hcFtlLnR5cGVdO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYXRlZCAmJiB0aGlzLmluaXRpYXRlZCAhPT0gX2V2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhdGVkKF9ldmVudFR5cGUpO1xyXG4gICAgICAgIC8vIGlmIHRleHRhcmVhIG9yIG90aGVyIGh0bWwgdGFncyBpbiBvcHRpb25zLnRhZ0V4Y2VwdGlvbiBpcyBtYW5pcHVsYXRlZFxyXG4gICAgICAgIC8vIGRvIG5vdCBtYWtlIGJzIHNjcm9sbFxyXG4gICAgICAgIGlmICh0YWdFeGNlcHRpb25GbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnRhZ0V4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbml0aWF0ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBubyBtb3VzZSBsZWZ0IGJ1dHRvblxyXG4gICAgICAgIGlmIChfZXZlbnRUeXBlID09PSBFdmVudFR5cGUuTW91c2UgJiYgZS5idXR0b24gIT09IE1vdXNlQnV0dG9uLkxlZnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTdGFydCwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ3N0YXJ0Jyk7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gKGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIHRoaXMucG9pbnRYID0gcG9pbnQucGFnZVg7XHJcbiAgICAgICAgdGhpcy5wb2ludFkgPSBwb2ludC5wYWdlWTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBlKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZU1hcFtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmVmb3JlSGFuZGxlcihlLCAnbW92ZScpO1xyXG4gICAgICAgIHZhciBwb2ludCA9IChlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB2YXIgZGVsdGFYID0gcG9pbnQucGFnZVggLSB0aGlzLnBvaW50WDtcclxuICAgICAgICB2YXIgZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WTtcclxuICAgICAgICB0aGlzLnBvaW50WCA9IHBvaW50LnBhZ2VYO1xyXG4gICAgICAgIHRoaXMucG9pbnRZID0gcG9pbnQucGFnZVk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwge1xyXG4gICAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcclxuICAgICAgICAgICAgZGVsdGFZOiBkZWx0YVksXHJcbiAgICAgICAgICAgIGU6IGVcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGF1dG8gZW5kIHdoZW4gb3V0IG9mIHdyYXBwZXJcclxuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcclxuICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgICAgIHZhciBwWCA9IHRoaXMucG9pbnRYIC0gc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgcFkgPSB0aGlzLnBvaW50WSAtIHNjcm9sbFRvcDtcclxuICAgICAgICBpZiAocFggPlxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSB8fFxyXG4gICAgICAgICAgICBwWCA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgcFkgPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIHBZID5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChldmVudFR5cGVNYXBbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEluaXRpYXRlZCgpO1xyXG4gICAgICAgIHRoaXMuYmVmb3JlSGFuZGxlcihlLCAnZW5kJyk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGUpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5jbGljaywgZSk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyRXZlbnRSZWdpc3Rlci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRFdmVudFJlZ2lzdGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWN0aW9uc0hhbmRsZXI7XHJcbn0oKSk7XG5cbnZhciB0cmFuc2xhdGVyTWV0YURhdGEgPSB7XHJcbiAgICB4OiBbJ3RyYW5zbGF0ZVgnLCAncHgnXSxcclxuICAgIHk6IFsndHJhbnNsYXRlWScsICdweCddXHJcbn07XHJcbnZhciBUcmFuc2xhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlcihjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnN0eWxlID0gY29udGVudC5zdHlsZTtcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbJ2JlZm9yZVRyYW5zbGF0ZScsICd0cmFuc2xhdGUnXSk7XHJcbiAgICB9XHJcbiAgICBUcmFuc2xhdGVyLnByb3RvdHlwZS5nZXRDb21wdXRlZFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjc3NTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudCwgbnVsbCk7XHJcbiAgICAgICAgdmFyIG1hdHJpeCA9IGNzc1N0eWxlW3N0eWxlLnRyYW5zZm9ybV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcclxuICAgICAgICB2YXIgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xyXG4gICAgICAgIHZhciB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgdmFyIHRyYW5zZm9ybVN0eWxlID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXMocG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuTmFtZSA9IHRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldWzBdO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtRm5OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtRm5BcmdVbml0ID0gdHJhbnNsYXRlck1ldGFEYXRhW2tleV1bMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtRm5BcmcgPSBwb2ludFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUucHVzaCh0cmFuc2Zvcm1Gbk5hbWUgKyBcIihcIiArIHRyYW5zZm9ybUZuQXJnICsgdHJhbnNmb3JtRm5BcmdVbml0ICsgXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVUcmFuc2xhdGUsIHRyYW5zZm9ybVN0eWxlLCBwb2ludCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZVtzdHlsZS50cmFuc2Zvcm1dID0gXCJcIiArIHRyYW5zZm9ybVN0eWxlLmpvaW4oJyAnKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRyYW5zbGF0ZSwgcG9pbnQpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zbGF0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zbGF0ZXI7XHJcbn0oKSk7XG5cbnZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZShjb250ZW50LCB0cmFuc2xhdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZXIgPSB0cmFuc2xhdGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnbW92ZScsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnYmVmb3JlRm9yY2VTdG9wJyxcclxuICAgICAgICAgICAgJ2ZvcmNlU3RvcCcsXHJcbiAgICAgICAgICAgICd0aW1lJyxcclxuICAgICAgICAgICAgJ3RpbWVGdW5jdGlvbidcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnN0eWxlID0gY29udGVudC5zdHlsZTtcclxuICAgIH1cclxuICAgIEJhc2UucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChlbmRQb2ludCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlci50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgfTtcclxuICAgIEJhc2UucHJvdG90eXBlLnNldFBlbmRpbmcgPSBmdW5jdGlvbiAocGVuZGluZykge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHBlbmRpbmc7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuc2V0Rm9yY2VTdG9wcGVkID0gZnVuY3Rpb24gKGZvcmNlU3RvcHBlZCkge1xyXG4gICAgICAgIHRoaXMuZm9yY2VTdG9wcGVkID0gZm9yY2VTdG9wcGVkO1xyXG4gICAgfTtcclxuICAgIEJhc2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJhc2U7XHJcbn0oKSk7XG5cbnZhciBUcmFuc2l0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRyYW5zaXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnN0YXJ0UHJvYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcHJvYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBfdGhpcy50cmFuc2xhdGVyLmdldENvbXB1dGVkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIHBvcyk7XHJcbiAgICAgICAgICAgIC8vIGV4Y3V0ZSB3aGVuIHRyYW5zaXRpb24gZW5kc1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocHJvYmUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9iZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvblRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICB0aGlzLnN0eWxlW3N0eWxlLnRyYW5zaXRpb25EdXJhdGlvbl0gPSB0aW1lICsgJ21zJztcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRpbWUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcclxuICAgICAgICB0aGlzLnN0eWxlW3N0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy50aW1lRnVuY3Rpb24sIGVhc2luZyk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRQZW5kaW5nKHRpbWUgPiAwICYmIChzdGFydFBvaW50LnggIT09IGVuZFBvaW50LnggfHwgc3RhcnRQb2ludC55ICE9PSBlbmRQb2ludC55KSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nRm4pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUodGltZSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgICAgIGlmICh0aW1lICYmIHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IFByb2JlLlJlYWx0aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQcm9iZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB3ZSBjaGFuZ2UgY29udGVudCdzIHRyYW5zZm9ybVkgaW4gYSB0aWNrXHJcbiAgICAgICAgLy8gc3VjaCBhczogMCAtPiA1MHB4IC0+IDBcclxuICAgICAgICAvLyB0cmFuc2l0aW9uZW5kIHdpbGwgbm90IGJlIHRyaWdnZXJlZFxyXG4gICAgICAgIC8vIHNvIHdlIGZvcmNldXBkYXRlIGJ5IHJlZmxvd1xyXG4gICAgICAgIGlmICghdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZsb3cgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBubyBuZWVkIHRvIGRpc3BhdGNoIG1vdmUgYW5kIGVuZCB3aGVuIHNsaWVudFxyXG4gICAgICAgIGlmICghdGltZSAmJiAhaXNTbGllbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlbmRQb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RpbGwgaW4gdHJhbnNpdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMudHJhbnNsYXRlci5nZXRDb21wdXRlZFBvc2l0aW9uKCksIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZSh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yY2VTdG9wcGVkKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVGb3JjZVN0b3AsIHsgeDogeCwgeTogeSB9KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZm9yY2VTdG9wLCB7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmFuc2l0aW9uO1xyXG59KEJhc2UpKTtcblxudmFyIEFuaW1hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBbmltYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBbmltYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbiwgaXNTbGllbnQpIHtcclxuICAgICAgICAvLyB0aW1lIGlzIDBcclxuICAgICAgICBpZiAoIXRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBjaGFuZ2UgY29udGVudCdzIHRyYW5zZm9ybVkgaW4gYSB0aWNrXHJcbiAgICAgICAgICAgIC8vIHN1Y2ggYXM6IDAgLT4gNTBweCAtPiAwXHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb25lbmQgd2lsbCBub3QgYmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgICAgIC8vIHNvIHdlIGZvcmNldXBkYXRlIGJ5IHJlZmxvd1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZsb3cgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRpc3BhdGNoIG1vdmUgYW5kIGVuZCB3aGVuIHNsaWVudFxyXG4gICAgICAgICAgICBpZiAoaXNTbGllbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZShzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4pO1xyXG4gICAgfTtcclxuICAgIEFuaW1hdGlvbi5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIChzdGFydFBvaW50LCBlbmRQb2ludCwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc3RhcnRUaW1lID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgdmFyIGRlc3RUaW1lID0gc3RhcnRUaW1lICsgZHVyYXRpb247XHJcbiAgICAgICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBnZXROb3coKTtcclxuICAgICAgICAgICAgLy8ganMgYW5pbWF0aW9uIGVuZFxyXG4gICAgICAgICAgICBpZiAobm93ID49IGRlc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2xhdGUoZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub3cgPSAobm93IC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgZWFzaW5nID0gZWFzaW5nRm4obm93KTtcclxuICAgICAgICAgICAgdmFyIG5ld1BvaW50ID0ge307XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVuZFBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gc3RhcnRQb2ludFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZFZhbHVlID0gZW5kUG9pbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIG5ld1BvaW50W2tleV0gPSAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAqIGVhc2luZyArIHN0YXJ0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy50cmFuc2xhdGUobmV3UG9pbnQpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucHJvYmVUeXBlID09PSBQcm9iZS5SZWFsdGltZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIG5ld1BvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQZW5kaW5nKHRydWUpO1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgIHN0ZXAoKTtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc3RpbGwgaW4gcmVxdWVzdEZyYW1lQW5pbWF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMudHJhbnNsYXRlci5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9yY2VTdG9wcGVkKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVGb3JjZVN0b3AsIHBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmZvcmNlU3RvcCwgcG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFuaW1hdGlvbjtcclxufShCYXNlKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGVyKGVsZW1lbnQsIHRyYW5zbGF0ZXIsIG9wdGlvbnMpIHtcclxuICAgIHZhciB1c2VUcmFuc2l0aW9uID0gb3B0aW9ucy51c2VUcmFuc2l0aW9uO1xyXG4gICAgdmFyIGFuaW1hdGVyT3B0aW9ucyA9IHt9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuaW1hdGVyT3B0aW9ucywgJ3Byb2JlVHlwZScsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnByb2JlVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh1c2VUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKGVsZW1lbnQsIHRyYW5zbGF0ZXIsIGFuaW1hdGVyT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbihlbGVtZW50LCB0cmFuc2xhdGVyLCBhbmltYXRlck9wdGlvbnMpO1xyXG4gICAgfVxyXG59XG5cbnZhciBCZWhhdmlvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJlaGF2aW9yKHdyYXBwZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoWydtb21lbnR1bScsICdlbmQnXSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uRGVmYXVsdDtcclxuICAgICAgICB0aGlzLm1vdmluZ0RpcmVjdGlvbiA9IERpcmVjdGlvbi5EZWZhdWx0O1xyXG4gICAgICAgIHRoaXMuZGlzdCA9IDA7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSA9IHRoaXMuaGFzU2Nyb2xsID8gZGVsdGEgOiAwO1xyXG4gICAgICAgIHRoaXMubW92aW5nRGlyZWN0aW9uID1cclxuICAgICAgICAgICAgZGVsdGEgPiAwXHJcbiAgICAgICAgICAgICAgICA/IERpcmVjdGlvbi5OZWdhdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBkZWx0YSA8IDBcclxuICAgICAgICAgICAgICAgICAgICA/IERpcmVjdGlvbi5Qb3NpdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogRGlyZWN0aW9uLkRlZmF1bHQ7XHJcbiAgICAgICAgdmFyIG5ld1BvcyA9IHRoaXMuY3VycmVudFBvcyArIGRlbHRhO1xyXG4gICAgICAgIC8vIFNsb3cgZG93biBvciBzdG9wIGlmIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICBpZiAobmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgfHwgbmV3UG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgaWYgKChuZXdQb3MgPiB0aGlzLm1pblNjcm9sbFBvcyAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1swXSkgfHxcclxuICAgICAgICAgICAgICAgIChuZXdQb3MgPCB0aGlzLm1heFNjcm9sbFBvcyAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1sxXSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld1BvcyA9IHRoaXMuY3VycmVudFBvcyArIGRlbHRhIC8gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1BvcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgPyB0aGlzLm1pblNjcm9sbFBvcyA6IHRoaXMubWF4U2Nyb2xsUG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBtb21lbnR1bUluZm8gPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgYWJzRGlzdCA9IE1hdGguYWJzKHRoaXMuY3VycmVudFBvcyAtIHRoaXMuc3RhcnRQb3MpO1xyXG4gICAgICAgIC8vIHN0YXJ0IG1vbWVudHVtIGFuaW1hdGlvbiBpZiBuZWVkZWRcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vbWVudHVtICYmXHJcbiAgICAgICAgICAgIGR1cmF0aW9uIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXRUaW1lICYmXHJcbiAgICAgICAgICAgIGFic0Rpc3QgPiB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyU2l6ZSA9ICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5lZ2F0aXZlICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzBdKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUG9zaXRpdmUgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMV0pXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMud3JhcHBlclNpemVcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgbW9tZW50dW1JbmZvID0gdGhpcy5oYXNTY3JvbGxcclxuICAgICAgICAgICAgICAgID8gdGhpcy5tb21lbnR1bSh0aGlzLmN1cnJlbnRQb3MsIHRoaXMuc3RhcnRQb3MsIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFBvcywgdGhpcy5taW5TY3JvbGxQb3MsIHdyYXBwZXJTaXplLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICA6IHsgZGVzdGluYXRpb246IHRoaXMuY3VycmVudFBvcywgZHVyYXRpb246IDAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBtb21lbnR1bUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9tZW50dW1JbmZvO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGFydCwgdGltZSwgbG93ZXJNYXJnaW4sIHVwcGVyTWFyZ2luLCB3cmFwcGVyU2l6ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgfVxyXG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydDtcclxuICAgICAgICB2YXIgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lO1xyXG4gICAgICAgIHZhciBkZWNlbGVyYXRpb24gPSBvcHRpb25zLmRlY2VsZXJhdGlvbiwgc3dpcGVCb3VuY2VUaW1lID0gb3B0aW9ucy5zd2lwZUJvdW5jZVRpbWUsIHN3aXBlVGltZSA9IG9wdGlvbnMuc3dpcGVUaW1lO1xyXG4gICAgICAgIHZhciBtb21lbnR1bURhdGEgPSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjdXJyZW50ICsgKHNwZWVkIC8gZGVjZWxlcmF0aW9uKSAqIChkaXN0YW5jZSA8IDAgPyAtMSA6IDEpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogc3dpcGVUaW1lLFxyXG4gICAgICAgICAgICByYXRlOiAxNVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb21lbnR1bSwgbW9tZW50dW1EYXRhLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA8IGxvd2VyTWFyZ2luKSB7XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KGxvd2VyTWFyZ2luIC0gd3JhcHBlclNpemUgLyA0LCBsb3dlck1hcmdpbiAtICh3cmFwcGVyU2l6ZSAvIG1vbWVudHVtRGF0YS5yYXRlKSAqIHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgOiBsb3dlck1hcmdpbjtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmR1cmF0aW9uID0gc3dpcGVCb3VuY2VUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPiB1cHBlck1hcmdpbikge1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbih1cHBlck1hcmdpbiArIHdyYXBwZXJTaXplIC8gNCwgdXBwZXJNYXJnaW4gKyAod3JhcHBlclNpemUgLyBtb21lbnR1bURhdGEucmF0ZSkgKiBzcGVlZClcclxuICAgICAgICAgICAgICAgIDogdXBwZXJNYXJnaW47XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kdXJhdGlvbiA9IHN3aXBlQm91bmNlVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID0gTWF0aC5yb3VuZChtb21lbnR1bURhdGEuZGVzdGluYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBtb21lbnR1bURhdGE7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZURpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYWJzRGlzdCA9IE1hdGgucm91bmQodGhpcy5jdXJyZW50UG9zKSAtIHRoaXMuYWJzU3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICBhYnNEaXN0ID4gMFxyXG4gICAgICAgICAgICAgICAgPyBEaXJlY3Rpb24uTmVnYXRpdmVcclxuICAgICAgICAgICAgICAgIDogYWJzRGlzdCA8IDBcclxuICAgICAgICAgICAgICAgICAgICA/IERpcmVjdGlvbi5Qb3NpdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogRGlyZWN0aW9uLkRlZmF1bHQ7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLnJlY3QsIHNpemUgPSBfYS5zaXplLCBwb3NpdGlvbiA9IF9hLnBvc2l0aW9uO1xyXG4gICAgICAgIHZhciBpc1dyYXBwZXJTdGF0aWMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLndyYXBwZXIsIG51bGwpLnBvc2l0aW9uID09PSAnc3RhdGljJztcclxuICAgICAgICB2YXIgd3JhcHBlclJlY3QgPSBnZXRSZWN0KHRoaXMud3JhcHBlcik7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyU2l6ZSA9IHdyYXBwZXJSZWN0W3NpemVdO1xyXG4gICAgICAgIHZhciBjb250ZW50UmVjdCA9IGdldFJlY3QodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRTaXplID0gY29udGVudFJlY3Rbc2l6ZV07XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZU9mZnNldCA9IGNvbnRlbnRSZWN0W3Bvc2l0aW9uXTtcclxuICAgICAgICBpZiAoaXNXcmFwcGVyU3RhdGljKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVPZmZzZXQgLT0gd3JhcHBlclJlY3RbcG9zaXRpb25dO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pblNjcm9sbFBvcyA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhTY3JvbGxQb3MgPSB0aGlzLndyYXBwZXJTaXplIC0gdGhpcy5jb250ZW50U2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5tYXhTY3JvbGxQb3MgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2Nyb2xsUG9zIC09IHRoaXMucmVsYXRpdmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2Nyb2xsUG9zID0gLXRoaXMucmVsYXRpdmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsID1cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNjcm9sbGFibGUgJiYgdGhpcy5tYXhTY3JvbGxQb3MgPCB0aGlzLm1pblNjcm9sbFBvcztcclxuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2Nyb2xsUG9zID0gdGhpcy5taW5TY3JvbGxQb3M7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFNpemUgPSB0aGlzLndyYXBwZXJTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHBvcztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZ2V0Q3VycmVudFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnRQb3MpO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5jaGVja0luQm91bmRhcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5hZGp1c3RQb3NpdGlvbih0aGlzLmN1cnJlbnRQb3MpO1xyXG4gICAgICAgIHZhciBpbkJvdW5kYXJ5ID0gcG9zaXRpb24gPT09IHRoaXMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICAgICAgaW5Cb3VuZGFyeTogaW5Cb3VuZGFyeVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLy8gYWRqdXN0IHBvc2l0aW9uIHdoZW4gb3V0IG9mIGJvdW5kYXJ5XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuYWRqdXN0UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIHJvdW5kUG9zID0gTWF0aC5yb3VuZChwb3MpO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGwgfHwgcm91bmRQb3MgPiB0aGlzLm1pblNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICByb3VuZFBvcyA9IHRoaXMubWluU2Nyb2xsUG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3VuZFBvcyA8IHRoaXMubWF4U2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUG9zID0gdGhpcy5tYXhTY3JvbGxQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3VuZFBvcztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUudXBkYXRlU3RhcnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHRoaXMuY3VycmVudFBvcztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUudXBkYXRlQWJzU3RhcnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hYnNTdGFydFBvcyA9IHRoaXMuY3VycmVudFBvcztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUucmVzZXRTdGFydFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0UG9zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBYnNTdGFydFBvcygpO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5nZXRBYnNEaXN0ID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5kaXN0ICs9IGRlbHRhO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmRpc3QpO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCZWhhdmlvcjtcclxufSgpKTtcblxudmFyIF9hLCBfYiwgX2MsIF9kO1xyXG52YXIgUGFzc3Rocm91Z2g7XHJcbihmdW5jdGlvbiAoUGFzc3Rocm91Z2gpIHtcclxuICAgIFBhc3N0aHJvdWdoW1wiWWVzXCJdID0gXCJ5ZXNcIjtcclxuICAgIFBhc3N0aHJvdWdoW1wiTm9cIl0gPSBcIm5vXCI7XHJcbn0pKFBhc3N0aHJvdWdoIHx8IChQYXNzdGhyb3VnaCA9IHt9KSk7XHJcbnZhciBQYXNzdGhyb3VnaEhhbmRsZXJzID0gKF9hID0ge30sXHJcbiAgICBfYVtQYXNzdGhyb3VnaC5ZZXNdID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBfYVtQYXNzdGhyb3VnaC5Ob10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgX2EpO1xyXG52YXIgRGlyZWN0aW9uTWFwID0gKF9iID0ge30sXHJcbiAgICBfYltEaXJlY3Rpb25Mb2NrLkhvcml6b250YWxdID0gKF9jID0ge30sXHJcbiAgICAgICAgX2NbUGFzc3Rocm91Z2guWWVzXSA9IEV2ZW50UGFzc3Rocm91Z2guSG9yaXpvbnRhbCxcclxuICAgICAgICBfY1tQYXNzdGhyb3VnaC5Ob10gPSBFdmVudFBhc3N0aHJvdWdoLlZlcnRpY2FsLFxyXG4gICAgICAgIF9jKSxcclxuICAgIF9iW0RpcmVjdGlvbkxvY2suVmVydGljYWxdID0gKF9kID0ge30sXHJcbiAgICAgICAgX2RbUGFzc3Rocm91Z2guWWVzXSA9IEV2ZW50UGFzc3Rocm91Z2guVmVydGljYWwsXHJcbiAgICAgICAgX2RbUGFzc3Rocm91Z2guTm9dID0gRXZlbnRQYXNzdGhyb3VnaC5Ib3Jpem9udGFsLFxyXG4gICAgICAgIF9kKSxcclxuICAgIF9iKTtcclxudmFyIERpcmVjdGlvbkxvY2tBY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb25Mb2NrQWN0aW9uKGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQsIGZyZWVTY3JvbGwsIGV2ZW50UGFzc3Rocm91Z2gpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSBkaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xyXG4gICAgICAgIHRoaXMuZnJlZVNjcm9sbCA9IGZyZWVTY3JvbGw7XHJcbiAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID0gZXZlbnRQYXNzdGhyb3VnaDtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IERpcmVjdGlvbkxvY2suRGVmYXVsdDtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5jaGVja01vdmluZ0RpcmVjdGlvbiA9IGZ1bmN0aW9uIChhYnNEaXN0WCwgYWJzRGlzdFksIGUpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVEaXJlY3Rpb25Mb2NrKGFic0Rpc3RYLCBhYnNEaXN0WSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXZlbnRQYXNzdGhyb3VnaChlKTtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5hZGp1c3REZWx0YSA9IGZ1bmN0aW9uIChkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gRGlyZWN0aW9uTG9jay5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIGRlbHRhWSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBEaXJlY3Rpb25Mb2NrLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIGRlbHRhWCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxyXG4gICAgICAgICAgICBkZWx0YVk6IGRlbHRhWVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuY29tcHV0ZURpcmVjdGlvbkxvY2sgPSBmdW5jdGlvbiAoYWJzRGlzdFgsIGFic0Rpc3RZKSB7XHJcbiAgICAgICAgLy8gSWYgeW91IGFyZSBzY3JvbGxpbmcgaW4gb25lIGRpcmVjdGlvbiwgbG9jayBpdFxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gRGlyZWN0aW9uTG9jay5EZWZhdWx0ICYmICF0aGlzLmZyZWVTY3JvbGwpIHtcclxuICAgICAgICAgICAgaWYgKGFic0Rpc3RYID4gYWJzRGlzdFkgKyB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gRGlyZWN0aW9uTG9jay5Ib3Jpem9udGFsOyAvLyBsb2NrIGhvcml6b250YWxseVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFic0Rpc3RZID49IGFic0Rpc3RYICsgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IERpcmVjdGlvbkxvY2suVmVydGljYWw7IC8vIGxvY2sgdmVydGljYWxseVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBEaXJlY3Rpb25Mb2NrLk5vbmU7IC8vIG5vIGxvY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5oYW5kbGVFdmVudFBhc3N0aHJvdWdoID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaGFuZGxlTWFwID0gRGlyZWN0aW9uTWFwW3RoaXMuZGlyZWN0aW9uTG9ja2VkXTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IGhhbmRsZU1hcFtQYXNzdGhyb3VnaC5ZZXNdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFzc3Rocm91Z2hIYW5kbGVyc1tQYXNzdGhyb3VnaC5ZZXNdKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gaGFuZGxlTWFwW1Bhc3N0aHJvdWdoLk5vXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhc3N0aHJvdWdoSGFuZGxlcnNbUGFzc3Rocm91Z2guTm9dKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGlyZWN0aW9uTG9ja0FjdGlvbjtcclxufSgpKTtcblxudmFyIFNjcm9sbGVyQWN0aW9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjcm9sbGVyQWN0aW9ucyhzY3JvbGxCZWhhdmlvclgsIHNjcm9sbEJlaGF2aW9yWSwgYWN0aW9uc0hhbmRsZXIsIGFuaW1hdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICAgICAnYmVmb3JlTW92ZScsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnYmVmb3JlRW5kJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclggPSBzY3JvbGxCZWhhdmlvclg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkgPSBzY3JvbGxCZWhhdmlvclk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlciA9IGFjdGlvbnNIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIgPSBhbmltYXRlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbiA9IG5ldyBEaXJlY3Rpb25Mb2NrQWN0aW9uKG9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCwgb3B0aW9ucy5mcmVlU2Nyb2xsLCBvcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9uc0hhbmRsZXIoKTtcclxuICAgIH1cclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuYmluZEFjdGlvbnNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXXN0YXJ0IGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlU3RhcnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXW1vdmUgZXZlbnRcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWCA9IF9hLmRlbHRhWCwgZGVsdGFZID0gX2EuZGVsdGFZLCBlID0gX2EuZTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVNb3ZlKGRlbHRhWCwgZGVsdGFZLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBbbW91c2V8dG91Y2hdZW5kIGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUVuZChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLmNsaWNrLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgbmF0aXZlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2xpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZVN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGltZXN0YW1wID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbi5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkuc3RhcnQoKTtcclxuICAgICAgICAvLyBmb3JjZSBzdG9wcGluZyBsYXN0IHRyYW5zaXRpb24gb3IgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgucmVzZXRTdGFydFBvcygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnJlc2V0U3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBlKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoZGVsdGFYLCBkZWx0YVksIGUpIHtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVNb3ZlLCBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhYnNEaXN0WCA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmdldEFic0Rpc3QoZGVsdGFYKTtcclxuICAgICAgICB2YXIgYWJzRGlzdFkgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5nZXRBYnNEaXN0KGRlbHRhWSk7XHJcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldE5vdygpO1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbW92ZSBhdCBsZWFzdCBtb21lbnR1bUxpbWl0RGlzdGFuY2UgcGl4ZWxzXHJcbiAgICAgICAgLy8gZm9yIHRoZSBzY3JvbGxpbmcgdG8gaW5pdGlhdGVcclxuICAgICAgICBpZiAodGhpcy5jaGVja01vbWVudHVtKGFic0Rpc3RYLCBhYnNEaXN0WSwgdGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbi5jaGVja01vdmluZ0RpcmVjdGlvbihhYnNEaXN0WCwgYWJzRGlzdFksIGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuc2V0SW5pdGlhdGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24uYWRqdXN0RGVsdGEoZGVsdGFYLCBkZWx0YVkpO1xyXG4gICAgICAgIHZhciBuZXdYID0gdGhpcy5zY3JvbGxCZWhhdmlvclgubW92ZShkZWx0YS5kZWx0YVgpO1xyXG4gICAgICAgIHZhciBuZXdZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkubW92ZShkZWx0YS5kZWx0YVkpO1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIudHJhbnNsYXRlKHtcclxuICAgICAgICAgICAgeDogbmV3WCxcclxuICAgICAgICAgICAgeTogbmV3WVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTY3JvbGwodGltZXN0YW1wKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmRpc3BhdGNoU2Nyb2xsID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIC8vIGRpc3BhdGNoIHNjcm9sbCBpbiBpbnRlcnZhbCB0aW1lXHJcbiAgICAgICAgaWYgKHRpbWVzdGFtcCAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXRUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGltZSBhbmQgc3RhcnRpbmcgcG9zaXRpb24gdG8gaW5pdGlhdGUgYSBtb21lbnR1bVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IFByb2JlLlRocm90dGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRpc3BhdGNoIHNjcm9sbCBhbGwgdGhlIHRpbWVcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByb2JlVHlwZSA+IFByb2JlLlRocm90dGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsLCB0aGlzLmdldEN1cnJlbnRQb3MoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuY2hlY2tNb21lbnR1bSA9IGZ1bmN0aW9uIChhYnNEaXN0WCwgYWJzRGlzdFksIHRpbWVzdGFtcCkge1xyXG4gICAgICAgIHJldHVybiAodGltZXN0YW1wIC0gdGhpcy5lbmRUaW1lID4gdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXRUaW1lICYmXHJcbiAgICAgICAgICAgIGFic0Rpc3RZIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBhYnNEaXN0WCA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuaGFuZGxlRW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVFbmQsIGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSB0aGlzLmdldEN1cnJlbnRQb3MoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC51cGRhdGVEaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS51cGRhdGVEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGUsIGN1cnJlbnRQb3MpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLnRyYW5zbGF0ZShjdXJyZW50UG9zKTtcclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBnZXROb3coKTtcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSB0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgY3VycmVudFBvcywgZHVyYXRpb24pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuZ2V0Q3VycmVudFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnNjcm9sbEJlaGF2aW9yWC5nZXRDdXJyZW50UG9zKCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLmdldEN1cnJlbnRQb3MoKVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY3JvbGxlckFjdGlvbnM7XHJcbn0oKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNIYW5kbGVyT3B0aW9ucyhic09wdGlvbnMpIHtcclxuICAgIHZhciBvcHRpb25zID0gW1xyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgJ2JpbmRUb1dyYXBwZXInLFxyXG4gICAgICAgICdkaXNhYmxlTW91c2UnLFxyXG4gICAgICAgICdkaXNhYmxlVG91Y2gnLFxyXG4gICAgICAgICdwcmV2ZW50RGVmYXVsdCcsXHJcbiAgICAgICAgJ3N0b3BQcm9wYWdhdGlvbicsXHJcbiAgICAgICAgJ3RhZ0V4Y2VwdGlvbicsXHJcbiAgICAgICAgJ3ByZXZlbnREZWZhdWx0RXhjZXB0aW9uJ1xyXG4gICAgXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cikge1xyXG4gICAgICAgIHByZXZbY3VyXSA9IGJzT3B0aW9uc1tjdXJdO1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQmVoYXZpb3JPcHRpb25zKGJzT3B0aW9ucywgZXh0cmFQcm9wLCBib3VuY2VzLCByZWN0KSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IFtcclxuICAgICAgICAnbW9tZW50dW0nLFxyXG4gICAgICAgICdtb21lbnR1bUxpbWl0VGltZScsXHJcbiAgICAgICAgJ21vbWVudHVtTGltaXREaXN0YW5jZScsXHJcbiAgICAgICAgJ2RlY2VsZXJhdGlvbicsXHJcbiAgICAgICAgJ3N3aXBlQm91bmNlVGltZScsXHJcbiAgICAgICAgJ3N3aXBlVGltZSdcclxuICAgIF0ucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcclxuICAgICAgICBwcmV2W2N1cl0gPSBic09wdGlvbnNbY3VyXTtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxuICAgIC8vIGFkZCBleHRyYSBwcm9wZXJ0eVxyXG4gICAgb3B0aW9ucy5zY3JvbGxhYmxlID0gYnNPcHRpb25zW2V4dHJhUHJvcF07XHJcbiAgICBvcHRpb25zLmJvdW5jZXMgPSBib3VuY2VzO1xyXG4gICAgb3B0aW9ucy5yZWN0ID0gcmVjdDtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59XG5cbmZ1bmN0aW9uIGJ1YmJsaW5nKHNvdXJjZSwgdGFyZ2V0LCBldmVudHMpIHtcclxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBzb3VyY2VFdmVudDtcclxuICAgICAgICB2YXIgdGFyZ2V0RXZlbnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgc291cmNlRXZlbnQgPSB0YXJnZXRFdmVudCA9IGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc291cmNlRXZlbnQgPSBldmVudC5zb3VyY2U7XHJcbiAgICAgICAgICAgIHRhcmdldEV2ZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzb3VyY2Uub24oc291cmNlRXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRyaWdnZXIuYXBwbHkodGFyZ2V0LCBbdGFyZ2V0RXZlbnRdLmNvbmNhdChhcmdzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG52YXIgU2Nyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY3JvbGxlcih3cmFwcGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnYmVmb3JlU3RhcnQnLFxyXG4gICAgICAgICAgICAnYmVmb3JlTW92ZScsXHJcbiAgICAgICAgICAgICdiZWZvcmVTY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnYmVmb3JlRW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEVuZCcsXHJcbiAgICAgICAgICAgICdyZWZyZXNoJyxcclxuICAgICAgICAgICAgJ3RvdWNoRW5kJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdmbGljaycsXHJcbiAgICAgICAgICAgICdzY3JvbGxDYW5jZWwnLFxyXG4gICAgICAgICAgICAnbW9tZW50dW0nLFxyXG4gICAgICAgICAgICAnc2Nyb2xsVG8nLFxyXG4gICAgICAgICAgICAnaWdub3JlRGlzTW92ZUZvclNhbWVQb3MnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsVG9FbGVtZW50J1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gd3JhcHBlci5jaGlsZHJlblswXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXNcclxuICAgICAgICAgICAgLm9wdGlvbnMuYm91bmNlLCBfYiA9IF9hLmxlZnQsIGxlZnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IF9hLnJpZ2h0LCByaWdodCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gX2EudG9wLCB0b3AgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBfZSA9IF9hLmJvdHRvbSwgYm90dG9tID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gWFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYID0gbmV3IEJlaGF2aW9yKHdyYXBwZXIsIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhvcHRpb25zLCAnc2Nyb2xsWCcsIFtsZWZ0LCByaWdodF0sIHtcclxuICAgICAgICAgICAgc2l6ZTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICAvLyBkaXJlY3Rpb24gWVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZID0gbmV3IEJlaGF2aW9yKHdyYXBwZXIsIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhvcHRpb25zLCAnc2Nyb2xsWScsIFt0b3AsIGJvdHRvbV0sIHtcclxuICAgICAgICAgICAgc2l6ZTogJ2hlaWdodCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJ1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZXIgPSBuZXcgVHJhbnNsYXRlcih0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIgPSBjcmVhdGVBbmltYXRlcih0aGlzLmNvbnRlbnQsIHRoaXMudHJhbnNsYXRlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyID0gbmV3IEFjdGlvbnNIYW5kbGVyKHdyYXBwZXIsIGNyZWF0ZUFjdGlvbnNIYW5kbGVyT3B0aW9ucyh0aGlzLm9wdGlvbnMpKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBuZXcgU2Nyb2xsZXJBY3Rpb25zKHRoaXMuc2Nyb2xsQmVoYXZpb3JYLCB0aGlzLnNjcm9sbEJlaGF2aW9yWSwgdGhpcy5hY3Rpb25zSGFuZGxlciwgdGhpcy5hbmltYXRlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB2YXIgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHdpbmRvdywgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3JpZW50YXRpb25jaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogcmVzaXplSGFuZGxlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVzaXplJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHJlc2l6ZUhhbmRsZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZFJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIodGhpcy5jb250ZW50LCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHN0eWxlLnRyYW5zaXRpb25FbmQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnRyYW5zaXRpb25FbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYmluZFRyYW5zbGF0ZXIoKTtcclxuICAgICAgICB0aGlzLmJpbmRBbmltYXRlcigpO1xyXG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoKTtcclxuICAgICAgICAvLyBlbmFibGUgcG9pbnRlciBldmVudHMgd2hlbiBzY3JvbGxpbmcgZW5kc1xyXG4gICAgICAgIHRoaXMuaG9va3Mub24odGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy50b2dnbGVQb2ludGVyRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5iaW5kVHJhbnNsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBob29rcyA9IHRoaXMudHJhbnNsYXRlci5ob29rcztcclxuICAgICAgICBob29rcy5vbihob29rcy5ldmVudFR5cGVzLmJlZm9yZVRyYW5zbGF0ZSwgZnVuY3Rpb24gKHRyYW5zZm9ybVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnRyYW5zbGF0ZVopIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlLnB1c2goX3RoaXMub3B0aW9ucy50cmFuc2xhdGVaKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGRpc2FibGUgcG9pbnRlciBldmVudHMgd2hlbiBzY3JvbGxpbmdcclxuICAgICAgICBob29rcy5vbihob29rcy5ldmVudFR5cGVzLnRyYW5zbGF0ZSwgZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVQb3NpdGlvbnMocG9zKTtcclxuICAgICAgICAgICAgX3RoaXMudG9nZ2xlUG9pbnRlckV2ZW50cyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmJpbmRBbmltYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHJlc2V0IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5ob29rcy5vbih0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMucmVzZXRQb3NpdGlvbihfdGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlci5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidWJibGluZyh0aGlzLmFuaW1hdGVyLmhvb2tzLCB0aGlzLmhvb2tzLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5hbmltYXRlci5ob29rcy5ldmVudFR5cGVzLm1vdmUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMuZm9yY2VTdG9wLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuYmluZEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcclxuICAgICAgICBidWJibGluZyhhY3Rpb25zLmhvb2tzLCB0aGlzLmhvb2tzLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlU3RhcnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTY3JvbGxTdGFydCAvLyBqdXN0IGZvciBldmVudCBhcGlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZU1vdmVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsU3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGwsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICBhY3Rpb25zLmhvb2tzLm9uKGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGZ1bmN0aW9uIChlLCBwb3MpIHtcclxuICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnRvdWNoRW5kLCBwb3MpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgcG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgaXMgYSBjbGljayBvcGVyYXRpb25cclxuICAgICAgICAgICAgaWYgKCFhY3Rpb25zLm1vdmVkICYmIF90aGlzLmNoZWNrQ2xpY2soZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldEZvcmNlU3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsQ2FuY2VsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldEZvcmNlU3RvcHBlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGlmIHdlIGFyZSBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5yZXNldFBvc2l0aW9uKF90aGlzLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFjdGlvbnMuaG9va3Mub24oYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgZnVuY3Rpb24gKHBvcywgZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWCA9IE1hdGguYWJzKHBvcy54IC0gX3RoaXMuc2Nyb2xsQmVoYXZpb3JYLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHBvcy55IC0gX3RoaXMuc2Nyb2xsQmVoYXZpb3JZLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNoZWNrRmxpY2soZHVyYXRpb24sIGRlbHRhWCwgZGVsdGFZKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmZsaWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMubW9tZW50dW0ocG9zLCBkdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBwb3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5jaGVja0ZsaWNrID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgICAgIC8vIGZsaWNrXHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MuZXZlbnRzLmZsaWNrLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgZHVyYXRpb24gPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdFRpbWUgJiZcclxuICAgICAgICAgICAgZGVsdGFYIDwgdGhpcy5vcHRpb25zLmZsaWNrTGltaXREaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBkZWx0YVkgPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUubW9tZW50dW0gPSBmdW5jdGlvbiAocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBtZXRhID0ge1xyXG4gICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2Uuc3dpcGVyLFxyXG4gICAgICAgICAgICBuZXdYOiBwb3MueCxcclxuICAgICAgICAgICAgbmV3WTogcG9zLnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHN0YXJ0IG1vbWVudHVtIGFuaW1hdGlvbiBpZiBuZWVkZWRcclxuICAgICAgICB2YXIgbW9tZW50dW1YID0gdGhpcy5zY3JvbGxCZWhhdmlvclguZW5kKGR1cmF0aW9uKTtcclxuICAgICAgICB2YXIgbW9tZW50dW1ZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuZW5kKGR1cmF0aW9uKTtcclxuICAgICAgICBtZXRhLm5ld1ggPSBpc1VuZGVmKG1vbWVudHVtWC5kZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgPyBtZXRhLm5ld1hcclxuICAgICAgICAgICAgOiBtb21lbnR1bVguZGVzdGluYXRpb247XHJcbiAgICAgICAgbWV0YS5uZXdZID0gaXNVbmRlZihtb21lbnR1bVkuZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAgID8gbWV0YS5uZXdZXHJcbiAgICAgICAgICAgIDogbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgIG1ldGEudGltZSA9IE1hdGgubWF4KG1vbWVudHVtWC5kdXJhdGlvbiwgbW9tZW50dW1ZLmR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vbWVudHVtLCBtZXRhLCB0aGlzKTtcclxuICAgICAgICAvLyB3aGVuIHggb3IgeSBjaGFuZ2VkLCBkbyBtb21lbnR1bSBhbmltYXRpb24gbm93IVxyXG4gICAgICAgIGlmIChtZXRhLm5ld1ggIT09IHBvcy54IHx8IG1ldGEubmV3WSAhPT0gcG9zLnkpIHtcclxuICAgICAgICAgICAgLy8gY2hhbmdlIGVhc2luZyBmdW5jdGlvbiB3aGVuIHNjcm9sbGVyIGdvZXMgb3V0IG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGlmIChtZXRhLm5ld1ggPiB0aGlzLnNjcm9sbEJlaGF2aW9yWC5taW5TY3JvbGxQb3MgfHxcclxuICAgICAgICAgICAgICAgIG1ldGEubmV3WCA8IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1heFNjcm9sbFBvcyB8fFxyXG4gICAgICAgICAgICAgICAgbWV0YS5uZXdZID4gdGhpcy5zY3JvbGxCZWhhdmlvclkubWluU2Nyb2xsUG9zIHx8XHJcbiAgICAgICAgICAgICAgICBtZXRhLm5ld1kgPCB0aGlzLnNjcm9sbEJlaGF2aW9yWS5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgICAgIG1ldGEuZWFzaW5nID0gZWFzZS5zd2lwZUJvdW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKG1ldGEubmV3WCwgbWV0YS5uZXdZLCBtZXRhLnRpbWUsIG1ldGEuZWFzaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5jaGVja0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyB3aGVuIGluIHRoZSBwcm9jZXNzIG9mIHB1bGxpbmcgZG93biwgaXQgc2hvdWxkIG5vdCBwcmV2ZW50IGNsaWNrXHJcbiAgICAgICAgdmFyIGNhbmNlbGFibGUgPSB7XHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogdGhpcy5hbmltYXRlci5mb3JjZVN0b3BwZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHdlIHNjcm9sbGVkIGxlc3MgdGhhbiBtb21lbnR1bUxpbWl0RGlzdGFuY2UgcGl4ZWxzXHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuY2hlY2tDbGljaykpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICghY2FuY2VsYWJsZS5wcmV2ZW50Q2xpY2spIHtcclxuICAgICAgICAgICAgdmFyIF9kYmxjbGljayA9IHRoaXMub3B0aW9ucy5kYmxjbGljaztcclxuICAgICAgICAgICAgdmFyIGRibGNsaWNrVHJpZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoX2RibGNsaWNrICYmIHRoaXMubGFzdENsaWNrVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX2RibGNsaWNrLmRlbGF5LCBkZWxheSA9IF9hID09PSB2b2lkIDAgPyAzMDAgOiBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChnZXROb3coKSAtIHRoaXMubGFzdENsaWNrVGltZSA8IGRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2tUcmlnZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkYmxjbGljayhlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgdGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2sgJiZcclxuICAgICAgICAgICAgICAgICFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBjbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBkYmxjbGlja1RyaWdnZWQgPyBudWxsIDogZ2V0Tm93KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25zLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaXggYSBzY3JvbGwgcHJvYmxlbSB1bmRlciBBbmRyb2lkIGNvbmRpdGlvblxyXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmNvbnRlbnQgfHwgIXRoaXMuYW5pbWF0ZXIucGVuZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmltYXRlciA9IHRoaXMuYW5pbWF0ZXI7XHJcbiAgICAgICAgYW5pbWF0ZXIudHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgICBpZiAoIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZXIuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlICE9PSBQcm9iZS5SZWFsdGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHRoaXMuZ2V0Q3VycmVudFBvcygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudG9nZ2xlUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uIChlbmFibGVkKSB7XHJcbiAgICAgICAgaWYgKGVuYWJsZWQgPT09IHZvaWQgMCkgeyBlbmFibGVkID0gdHJ1ZTsgfVxyXG4gICAgICAgIHZhciBlbCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5sZW5ndGhcclxuICAgICAgICAgICAgPyB0aGlzLmNvbnRlbnQuY2hpbGRyZW5cclxuICAgICAgICAgICAgOiBbdGhpcy5jb250ZW50XTtcclxuICAgICAgICB2YXIgcG9pbnRlckV2ZW50cyA9IGVuYWJsZWQgPyAnYXV0bycgOiAnbm9uZSc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsW2ldO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgQmV0dGVyU2Nyb2xsIGluc3RhbmNlJ3Mgd3JhcHBlciBET01cclxuICAgICAgICAgICAgaWYgKG5vZGUuaXNCU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBwb2ludGVyRXZlbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gb2Zmc2V0KHRoaXMud3JhcHBlcik7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZLCB0aW1lLCBlYXNpbmcpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRDdXJyZW50UG9zKCksIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgZGVsdGFYICs9IHg7XHJcbiAgICAgICAgZGVsdGFZICs9IHk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhkZWx0YVgsIGRlbHRhWSwgdGltZSwgZWFzaW5nKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nLCBleHRyYVRyYW5zZm9ybSwgaXNTaWxlbnQpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgaWYgKGV4dHJhVHJhbnNmb3JtID09PSB2b2lkIDApIHsgZXh0cmFUcmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcclxuICAgICAgICAgICAgZW5kOiB7fVxyXG4gICAgICAgIH07IH1cclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgdmFyIGVhc2luZ0ZuID0gdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gPyBlYXNpbmcuc3R5bGUgOiBlYXNpbmcuZm47XHJcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSB0aGlzLmdldEN1cnJlbnRQb3MoKTtcclxuICAgICAgICB2YXIgc3RhcnRQb2ludCA9IF9fYXNzaWduKHsgeDogY3VycmVudFBvcy54LCB5OiBjdXJyZW50UG9zLnkgfSwgZXh0cmFUcmFuc2Zvcm0uc3RhcnQpO1xyXG4gICAgICAgIHZhciBlbmRQb2ludCA9IF9fYXNzaWduKHsgeDogeCxcclxuICAgICAgICAgICAgeTogeSB9LCBleHRyYVRyYW5zZm9ybS5lbmQpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsVG8sIGVuZFBvaW50KTtcclxuICAgICAgICBpZiAoIXRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuaWdub3JlRGlzTW92ZUZvclNhbWVQb3MpKSB7XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGFuIHVzZWxlc3MgbW92ZVxyXG4gICAgICAgICAgICBpZiAoc3RhcnRQb2ludC54ID09PSBlbmRQb2ludC54ICYmIHN0YXJ0UG9pbnQueSA9PT0gZW5kUG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIubW92ZShzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2lsZW50KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0RWxlID0gZ2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgdmFyIHBvcyA9IG9mZnNldCh0YXJnZXRFbGUpO1xyXG4gICAgICAgIHZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0LCBzaXplLCB3cmFwcGVyU2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXHJcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgPyBNYXRoLnJvdW5kKHNpemUgLyAyIC0gd3JhcHBlclNpemUgLyAyKSA6IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvZmZzZXRYID0gZ2V0T2Zmc2V0KG9mZnNldFgsIHRhcmdldEVsZS5vZmZzZXRXaWR0aCwgdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoKTtcclxuICAgICAgICBvZmZzZXRZID0gZ2V0T2Zmc2V0KG9mZnNldFksIHRhcmdldEVsZS5vZmZzZXRIZWlnaHQsIHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICAgIHZhciBnZXRQb3MgPSBmdW5jdGlvbiAocG9zLCB3cmFwcGVyUG9zLCBvZmZzZXQsIHNjcm9sbEJlaGF2aW9yKSB7XHJcbiAgICAgICAgICAgIHBvcyAtPSB3cmFwcGVyUG9zO1xyXG4gICAgICAgICAgICBwb3MgPSBzY3JvbGxCZWhhdmlvci5hZGp1c3RQb3NpdGlvbihwb3MgLSBvZmZzZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcG9zLmxlZnQgPSBnZXRQb3MocG9zLmxlZnQsIHRoaXMud3JhcHBlck9mZnNldC5sZWZ0LCBvZmZzZXRYLCB0aGlzLnNjcm9sbEJlaGF2aW9yWCk7XHJcbiAgICAgICAgcG9zLnRvcCA9IGdldFBvcyhwb3MudG9wLCB0aGlzLndyYXBwZXJPZmZzZXQudG9wLCBvZmZzZXRZLCB0aGlzLnNjcm9sbEJlaGF2aW9yWSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsVG9FbGVtZW50LCB0YXJnZXRFbGUsIHBvcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbFRvKHBvcy5sZWZ0LCBwb3MudG9wLCB0aW1lLCBlYXNpbmcpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5yZXNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICBlYXNpbmcgPSAhZWFzaW5nID8gZWFzZS5ib3VuY2UgOiBlYXNpbmc7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zY3JvbGxCZWhhdmlvclguY2hlY2tJbkJvdW5kYXJ5KCksIHggPSBfYS5wb3NpdGlvbiwgeEluQm91bmRhcnkgPSBfYS5pbkJvdW5kYXJ5O1xyXG4gICAgICAgIHZhciBfYiA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLmNoZWNrSW5Cb3VuZGFyeSgpLCB5ID0gX2IucG9zaXRpb24sIHlJbkJvdW5kYXJ5ID0gX2IuaW5Cb3VuZGFyeTtcclxuICAgICAgICBpZiAoeEluQm91bmRhcnkgJiYgeUluQm91bmRhcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXQgb2YgYm91bmRhcnlcclxuICAgICAgICB0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC51cGRhdGVQb3NpdGlvbihwb3MueCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlUG9zaXRpb24ocG9zLnkpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZXIudGltZXIpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIga2V5cyA9IFtcclxuICAgICAgICAgICAgJ3Jlc2l6ZVJlZ2lzdGVyJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb25FbmRSZWdpc3RlcicsXHJcbiAgICAgICAgICAgICdhY3Rpb25zSGFuZGxlcicsXHJcbiAgICAgICAgICAgICdhY3Rpb25zJyxcclxuICAgICAgICAgICAgJ2hvb2tzJyxcclxuICAgICAgICAgICAgJ2FuaW1hdGVyJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZXInLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQmVoYXZpb3JYJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEJlaGF2aW9yWSdcclxuICAgICAgICBdO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpc1trZXldLmRlc3Ryb3koKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjcm9sbGVyO1xyXG59KCkpO1xuXG52YXIgcHJvcGVydGllc0NvbmZpZyA9IFtcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguY3VycmVudFBvcycsXHJcbiAgICAgICAga2V5OiAneCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmN1cnJlbnRQb3MnLFxyXG4gICAgICAgIGtleTogJ3knXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5oYXNTY3JvbGwnLFxyXG4gICAgICAgIGtleTogJ2hhc0hvcml6b250YWxTY3JvbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5oYXNTY3JvbGwnLFxyXG4gICAgICAgIGtleTogJ2hhc1ZlcnRpY2FsU2Nyb2xsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguY29udGVudFNpemUnLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbGVyV2lkdGgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5jb250ZW50U2l6ZScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsZXJIZWlnaHQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5tYXhTY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21heFNjcm9sbFgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5tYXhTY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21heFNjcm9sbFknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5taW5TY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21pblNjcm9sbFgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5taW5TY3JvbGxQb3MnLFxyXG4gICAgICAgIGtleTogJ21pblNjcm9sbFknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5tb3ZpbmdEaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ21vdmluZ0RpcmVjdGlvblgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5tb3ZpbmdEaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ21vdmluZ0RpcmVjdGlvblknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5kaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ2RpcmVjdGlvblgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5kaXJlY3Rpb24nLFxyXG4gICAgICAgIGtleTogJ2RpcmVjdGlvblknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLmFjdGlvbnMuZW5hYmxlZCcsXHJcbiAgICAgICAga2V5OiAnZW5hYmxlZCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYW5pbWF0ZXIucGVuZGluZycsXHJcbiAgICAgICAga2V5OiAncGVuZGluZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYW5pbWF0ZXIuc3RvcCcsXHJcbiAgICAgICAga2V5OiAnc3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsVG8nLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbFRvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCeScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsQnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbFRvRWxlbWVudCcsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsVG9FbGVtZW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5yZXNldFBvc2l0aW9uJyxcclxuICAgICAgICBrZXk6ICdyZXNldFBvc2l0aW9uJ1xyXG4gICAgfVxyXG5dO1xuXG52YXIgRW5mb3JjZU9yZGVyO1xyXG4oZnVuY3Rpb24gKEVuZm9yY2VPcmRlcikge1xyXG4gICAgRW5mb3JjZU9yZGVyW1wiUHJlXCJdID0gXCJwcmVcIjtcclxuICAgIEVuZm9yY2VPcmRlcltcIlBvc3RcIl0gPSBcInBvc3RcIjtcclxufSkoRW5mb3JjZU9yZGVyIHx8IChFbmZvcmNlT3JkZXIgPSB7fSkpO1xuXG52YXIgQlNjcm9sbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCU2Nyb2xsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQlNjcm9sbChlbCwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFtcclxuICAgICAgICAgICAgJ3JlZnJlc2gnLFxyXG4gICAgICAgICAgICAnZW5hYmxlJyxcclxuICAgICAgICAgICAgJ2Rpc2FibGUnLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEVuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxDYW5jZWwnLFxyXG4gICAgICAgICAgICAndG91Y2hFbmQnLFxyXG4gICAgICAgICAgICAnZmxpY2snLFxyXG4gICAgICAgICAgICAnZGVzdHJveSdcclxuICAgICAgICBdKSB8fCB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gZ2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgaWYgKCF3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHdhcm4oJ0NhbiBub3QgcmVzb2x2ZSB0aGUgd3JhcHBlciBET00uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB3cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICB3YXJuKCdUaGUgd3JhcHBlciBuZWVkIGF0IGxlYXN0IG9uZSBjaGlsZCBlbGVtZW50IHRvIGJlIHNjcm9sbGVyLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLnBsdWdpbnMgPSB7fTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMoKS5tZXJnZShvcHRpb25zKS5wcm9jZXNzKCk7XHJcbiAgICAgICAgX3RoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2luaXQnLFxyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICdlbmFibGUnLFxyXG4gICAgICAgICAgICAnZGlzYWJsZScsXHJcbiAgICAgICAgICAgICdkZXN0cm95J1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIF90aGlzLmluaXQod3JhcHBlcik7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQlNjcm9sbC51c2UgPSBmdW5jdGlvbiAoY3Rvcikge1xyXG4gICAgICAgIHZhciBuYW1lID0gY3Rvci5wbHVnaW5OYW1lO1xyXG4gICAgICAgIHZhciBpbnN0YWxsZWQgPSB0aGlzLnBsdWdpbnMuc29tZShmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBjdG9yID09PSBwbHVnaW4uY3RvcjsgfSk7XHJcbiAgICAgICAgaWYgKGluc3RhbGxlZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGlzVW5kZWYobmFtZSkpIHtcclxuICAgICAgICAgICAgd2FybihcIlBsdWdpbiBDbGFzcyBtdXN0IHNwZWNpZnkgcGx1Z2luJ3MgbmFtZSBpbiBzdGF0aWMgcHJvcGVydHkgYnkgJ3BsdWdpbk5hbWUnIGZpZWxkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbnNNYXBbbmFtZV0pIHtcclxuICAgICAgICAgICAgd2FybihcIlRoaXMgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQsIG1heWJlIHlvdSBuZWVkIGNoYW5nZSBwbHVnaW4ncyBuYW1lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zTWFwW25hbWVdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGVuZm9yY2U6IGN0b3IuZW5mb3JjZSxcclxuICAgICAgICAgICAgY3RvcjogY3RvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgd3JhcHBlci5pc0JTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIgPSBuZXcgU2Nyb2xsZXIod3JhcHBlciwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmV2ZW50QnViYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF1dG9CbHVyKCk7XHJcbiAgICAgICAgdGhpcy5pbm5lclJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsIHRoaXMub3B0aW9ucy5zdGFydFkpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5wcm94eShwcm9wZXJ0aWVzQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGx1Z2lucygpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmFwcGx5UGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IucGx1Z2luc1xyXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciBlbmZvcmVPcmRlck1hcCA9IChfYSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgX2FbRW5mb3JjZU9yZGVyLlByZV0gPSAtMSxcclxuICAgICAgICAgICAgICAgIF9hW0VuZm9yY2VPcmRlci5Qb3N0XSA9IDEsXHJcbiAgICAgICAgICAgICAgICBfYSk7XHJcbiAgICAgICAgICAgIHZhciBhT3JkZXIgPSBhLmVuZm9yY2UgPyBlbmZvcmVPcmRlck1hcFthLmVuZm9yY2VdIDogMDtcclxuICAgICAgICAgICAgdmFyIGJPcmRlciA9IGIuZW5mb3JjZSA/IGVuZm9yZU9yZGVyTWFwW2IuZW5mb3JjZV0gOiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gYU9yZGVyIC0gYk9yZGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjdG9yID0gaXRlbS5jdG9yO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uc1tpdGVtLm5hbWVdICYmIHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbHVnaW5zW2l0ZW0ubmFtZV0gPSBuZXcgY3RvcihfdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5oYW5kbGVBdXRvQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9CbHVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudFR5cGVzLmJlZm9yZVNjcm9sbFN0YXJ0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZXZlbnRCdWJibGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBidWJibGluZyh0aGlzLnNjcm9sbGVyLmhvb2tzLCB0aGlzLCBbXHJcbiAgICAgICAgICAgICdiZWZvcmVTY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdmbGljaydcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5pbm5lclJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5yZWZyZXNoKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLnJlZnJlc2gpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLnByb3h5ID0gZnVuY3Rpb24gKHByb3BlcnRpZXNDb25maWcpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHByb3BlcnRpZXNDb25maWcuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9hLmtleSwgc291cmNlS2V5ID0gX2Euc291cmNlS2V5O1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzUHJveHkoX3RoaXMsIHNvdXJjZUtleSwga2V5KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJSZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZXNldFBvc2l0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmFibGUpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMuZW5hYmxlKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZGlzYWJsZSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5kaXNhYmxlKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZGVzdHJveSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5kZXN0cm95KTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5ldmVudFJlZ2lzdGVyID0gZnVuY3Rpb24gKG5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUobmFtZXMpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucGx1Z2lucyA9IFtdO1xyXG4gICAgQlNjcm9sbC5wbHVnaW5zTWFwID0ge307XHJcbiAgICByZXR1cm4gQlNjcm9sbDtcclxufShFdmVudEVtaXR0ZXIpKTtcblxuZXhwb3J0IGRlZmF1bHQgQlNjcm9sbDtcbmV4cG9ydCB7IE9wdGlvbnMgfTtcbiIsIi8qIVxuICogYmV0dGVyLXNjcm9sbCAvIHB1bGwtZG93blxuICogKGMpIDIwMTYtMjAxOSB1c3RiaHVhbmd5aVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG52YXIgRGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKERpcmVjdGlvbikge1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIlBvc2l0aXZlXCJdID0gMV0gPSBcIlBvc2l0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiTmVnYXRpdmVcIl0gPSAtMV0gPSBcIk5lZ2F0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbn0pKERpcmVjdGlvbiB8fCAoRGlyZWN0aW9uID0ge30pKTtcblxudmFyIFByb2JlO1xyXG4oZnVuY3Rpb24gKFByb2JlKSB7XHJcbiAgICBQcm9iZVtQcm9iZVtcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJUaHJvdHRsZVwiXSA9IDFdID0gXCJUaHJvdHRsZVwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJOb3JtYWxcIl0gPSAyXSA9IFwiTm9ybWFsXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlJlYWx0aW1lXCJdID0gM10gPSBcIlJlYWx0aW1lXCI7XHJcbn0pKFByb2JlIHx8IChQcm9iZSA9IHt9KSk7XG5cbnZhciBlYXNlID0ge1xyXG4gICAgLy8gZWFzZU91dFF1aW50XHJcbiAgICBzd2lwZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgKyAtLXQgKiB0ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcmRcclxuICAgIHN3aXBlQm91bmNlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdCAqICgyIC0gdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFydFxyXG4gICAgYm91bmNlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSAtLXQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgc291cmNlUHJlZml4ID0gJ3BsdWdpbnMucHVsbERvd25SZWZyZXNoJztcclxudmFyIHByb3BlcnRpZXNNYXAgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZmluaXNoUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdmaW5pc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ29wZW5QdWxsRG93bicsXHJcbiAgICAgICAgbmFtZTogJ29wZW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Nsb3NlUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdjbG9zZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnYXV0b1B1bGxEb3duUmVmcmVzaCcsXHJcbiAgICAgICAgbmFtZTogJ2F1dG9QdWxsJ1xyXG4gICAgfVxyXG5dO1xyXG52YXIgcHJvcGVydGllc1Byb3h5Q29uZmlnID0gcHJvcGVydGllc01hcC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBzb3VyY2VLZXk6IHNvdXJjZVByZWZpeCArIFwiLlwiICsgaXRlbS5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxudmFyIFB1bGxEb3duID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHVsbERvd24oc2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBzY3JvbGw7XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5yZWdpc3RlclR5cGUoWydwdWxsaW5nRG93biddKTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5wcm94eShwcm9wZXJ0aWVzUHJveHlDb25maWcpO1xyXG4gICAgfVxyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLl93YXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDpnIDopoHorr7nva4gcHJvYmUgPSAzIOWQl++8n1xyXG4gICAgICAgIC8vIG11c3Qgd2F0Y2ggc2Nyb2xsIGluIHJlYWwgdGltZVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHJvYmVUeXBlID0gUHJvYmUuUmVhbHRpbWU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsZXIuaG9va3Mub24oJ2VuZCcsIHRoaXMuX2NoZWNrUHVsbERvd24sIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5fY2hlY2tQdWxsRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zY3JvbGwub3B0aW9uc1xyXG4gICAgICAgICAgICAucHVsbERvd25SZWZyZXNoLCBfYiA9IF9hLnRocmVzaG9sZCwgdGhyZXNob2xkID0gX2IgPT09IHZvaWQgMCA/IDkwIDogX2IsIF9jID0gX2Euc3RvcCwgc3RvcCA9IF9jID09PSB2b2lkIDAgPyA0MCA6IF9jO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgcmVhbCBwdWxsIGRvd24gYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmRpcmVjdGlvblkgIT09IERpcmVjdGlvbi5OZWdhdGl2ZSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC55IDwgdGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnB1bGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwudHJpZ2dlcigncHVsbGluZ0Rvd24nKTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE1pblNjcm9sbFkgPSB0aGlzLnNjcm9sbC5taW5TY3JvbGxZO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5taW5TY3JvbGxZID0gc3RvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGhpcy5zY3JvbGwueCwgc3RvcCwgdGhpcy5zY3JvbGwub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVsbGluZztcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm1pblNjcm9sbFkgPSB0aGlzLm9yaWdpbmFsTWluU2Nyb2xsWTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5yZXNldFBvc2l0aW9uKHRoaXMuc2Nyb2xsLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB0cnVlOyB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2ggPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2ggPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUuYXV0b1B1bGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zY3JvbGwub3B0aW9uc1xyXG4gICAgICAgICAgICAucHVsbERvd25SZWZyZXNoLCBfYiA9IF9hLnRocmVzaG9sZCwgdGhyZXNob2xkID0gX2IgPT09IHZvaWQgMCA/IDkwIDogX2IsIF9jID0gX2Euc3RvcCwgc3RvcCA9IF9jID09PSB2b2lkIDAgPyA0MCA6IF9jO1xyXG4gICAgICAgIGlmICh0aGlzLnB1bGxpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1bGxpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNaW5TY3JvbGxZID0gdGhpcy5zY3JvbGwubWluU2Nyb2xsWTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5taW5TY3JvbGxZID0gdGhyZXNob2xkO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRoaXMuc2Nyb2xsLngsIHRocmVzaG9sZCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudHJpZ2dlcigncHVsbGluZ0Rvd24nKTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0aGlzLnNjcm9sbC54LCBzdG9wLCB0aGlzLnNjcm9sbC5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wbHVnaW5OYW1lID0gJ3B1bGxEb3duUmVmcmVzaCc7XHJcbiAgICByZXR1cm4gUHVsbERvd247XHJcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFB1bGxEb3duO1xuIiwiLyohXG4gKiBiZXR0ZXItc2Nyb2xsIC8gcHVsbC11cFxuICogKGMpIDIwMTYtMjAxOSB1c3RiaHVhbmd5aVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG52YXIgRGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKERpcmVjdGlvbikge1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIlBvc2l0aXZlXCJdID0gMV0gPSBcIlBvc2l0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiTmVnYXRpdmVcIl0gPSAtMV0gPSBcIk5lZ2F0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbn0pKERpcmVjdGlvbiB8fCAoRGlyZWN0aW9uID0ge30pKTtcblxudmFyIFByb2JlO1xyXG4oZnVuY3Rpb24gKFByb2JlKSB7XHJcbiAgICBQcm9iZVtQcm9iZVtcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJUaHJvdHRsZVwiXSA9IDFdID0gXCJUaHJvdHRsZVwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJOb3JtYWxcIl0gPSAyXSA9IFwiTm9ybWFsXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlJlYWx0aW1lXCJdID0gM10gPSBcIlJlYWx0aW1lXCI7XHJcbn0pKFByb2JlIHx8IChQcm9iZSA9IHt9KSk7XG5cbnZhciBzb3VyY2VQcmVmaXggPSAncGx1Z2lucy5wdWxsVXBMb2FkJztcclxudmFyIHByb3BlcnRpZXNNYXAgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZmluaXNoUHVsbFVwJyxcclxuICAgICAgICBuYW1lOiAnZmluaXNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdvcGVuUHVsbFVwJyxcclxuICAgICAgICBuYW1lOiAnb3BlbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnY2xvc2VQdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdjbG9zZSdcclxuICAgIH1cclxuXTtcclxudmFyIHByb3BlcnRpZXNQcm94eUNvbmZpZyA9IHByb3BlcnRpZXNNYXAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgc291cmNlS2V5OiBzb3VyY2VQcmVmaXggKyBcIi5cIiArIGl0ZW0ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cbnZhciBQdWxsVXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQdWxsVXAoYnNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbCA9IGJzY3JvbGw7XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJzY3JvbGwucmVnaXN0ZXJUeXBlKFsncHVsbGluZ1VwJ10pO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5wcm94eShwcm9wZXJ0aWVzUHJveHlDb25maWcpO1xyXG4gICAgfVxyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5fd2F0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtdXN0IHdhdGNoIHNjcm9sbCBpbiByZWFsIHRpbWVcclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wcm9iZVR5cGUgPSBQcm9iZS5SZWFsdGltZTtcclxuICAgICAgICB0aGlzLndhdGNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJzY3JvbGwub24oJ3Njcm9sbCcsIHRoaXMuX2NoZWNrVG9FbmQsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUuX2NoZWNrVG9FbmQgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLmJzY3JvbGwub3B0aW9uc1xyXG4gICAgICAgICAgICAucHVsbFVwTG9hZC50aHJlc2hvbGQsIHRocmVzaG9sZCA9IF9hID09PSB2b2lkIDAgPyAwIDogX2E7XHJcbiAgICAgICAgaWYgKHRoaXMuYnNjcm9sbC5tb3ZpbmdEaXJlY3Rpb25ZID09PSBEaXJlY3Rpb24uUG9zaXRpdmUgJiZcclxuICAgICAgICAgICAgcG9zLnkgPD0gdGhpcy5ic2Nyb2xsLm1heFNjcm9sbFkgKyB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgLy8gcmVzZXQgcHVsbHVwV2F0Y2hpbmcgc3RhdHVzIGFmdGVyIHNjcm9sbCBlbmQgdG8gcHJvbWlzZSB0aGF0IHRyaWdnZXIgJ3B1bGxpbmdVcCcgb25seSBvbmNlIHdoZW4gcHVsbGluZyB1cFxyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwub25jZSgnc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMud2F0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nVXAnKTtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLm9mZignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC5vbmNlKCdzY3JvbGxFbmQnLCB0aGlzLl93YXRjaCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vZmYoJ3Njcm9sbCcsIHRoaXMuX2NoZWNrVG9FbmQpO1xyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wbHVnaW5OYW1lID0gJ3B1bGxVcExvYWQnO1xyXG4gICAgcmV0dXJuIFB1bGxVcDtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUHVsbFVwO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQgZXJyb3JIdG1sIGZyb20gJy4uLy4uL3ZpZXdzL2Vycm9ycGFnZS80MDQuaHRtbCdcclxuXHJcbmNsYXNzIEVycm9yQ29udHJvbGxlcntcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICQoJyNtYWluLWNvbnRhaW5lcicpLmh0bWwoZXJyb3JIdG1sKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFcnJvckNvbnRyb2xsZXIoKTsiLCJpbXBvcnQgUG9zaXRpb25odG1sIGZyb20gJy4uLy4uL3ZpZXdzL3Bvc2l0aW9uL3Bvc2l0aW9ubGlzdC5odG1sJztcclxuaW1wb3J0IGl0ZW1IdG1sIGZyb20gJy4uLy4uL3ZpZXdzL3Bvc2l0aW9uL3Bvc2l0aW9ubGlzdC1pdGVtLmh0bWwnXHJcbmltcG9ydCBmZXRjaCBmcm9tICcuLi9tb2RlbC9GZXRjaC5qcyc7XHJcbmltcG9ydCBCU2Nyb2xsIGZyb20gJ0BiZXR0ZXItc2Nyb2xsL2NvcmUnXHJcbmltcG9ydCBQdWxsRG93biBmcm9tICdAYmV0dGVyLXNjcm9sbC9wdWxsLWRvd24nXHJcbmltcG9ydCBQdWxsVXAgZnJvbSAnQGJldHRlci1zY3JvbGwvcHVsbC11cCdcclxuQlNjcm9sbC51c2UoUHVsbERvd24pXHJcbkJTY3JvbGwudXNlKFB1bGxVcClcclxuXHJcbmNsYXNzIFBvc2l0aW9uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnbGlzdG1vcmUnXHJcbiAgICB0aGlzLnBhZ2VObyA9IDE7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gMTU7XHJcbiAgICB0aGlzLmRhdGFsaXN0ID0gW107XHJcbiAgICB0aGlzLnRvdGFsID0gMDtcclxuICAgIHRoaXMuaW5pdEV2ZW50KClcclxuICB9XHJcbiAgZ2V0bGlzdCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAgIGxldCBycyA9IGF3YWl0IGZldGNoLmdldFBvc2l0aW9ubGlzdCh7XHJcbiAgICAgICAgbmFtZTp0aGlzLm5hbWUsXHJcbiAgICAgICAgcGFnZU5vOiB0aGlzLnBhZ2VObyxcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50b3RhbCA9IHJzLmNvbnRlbnQuZGF0YS5wYWdlLnRvdGFsQ09udGVudDtcclxuICAgICAgdGhpcy5kYXRhbGlzdCA9IHRoaXMuZGF0YWxpc3QuY29uY2F0KHJzLmNvbnRlbnQuZGF0YS5wYWdlLnJlc3VsdClcclxuICAgICAgbGV0IGh0bWwgPSB0ZW1wbGF0ZS5yZW5kZXIoaXRlbUh0bWwsIHtcclxuICAgICAgICBsaXN0OiB0aGlzLmRhdGFsaXN0XHJcbiAgICAgIH0pXHJcbiAgICAgICQoXCIjbGlzdC1jb250YWluZXJcIikuaHRtbChodG1sKVxyXG4gICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xyXG5cclxuICAgICAgcmVzbG92ZSgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgICQoXCIjbWFpbi1jb250YWluZXJcIikuaHRtbChQb3NpdGlvbmh0bWwpXHJcbiAgICB2YXIgJGhlYWQgPSAkKFwiI21haW4tY29udGFpbmVyIC5oZWFkXCIpO1xyXG4gICAgYXdhaXQgdGhpcy5nZXRsaXN0KCk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwgPSBuZXcgQlNjcm9sbCgnI3Bvc2l0aW9uLXdyYXBwZXInLCB7XHJcbiAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgIGNsaWNrOiB0cnVlLFxyXG4gICAgICBwcm9iZVR5cGU6IDMsXHJcbiAgICAgIHB1bGxVcExvYWQ6IHRydWUsXHJcbiAgICAgIHB1bGxEb3duUmVmcmVzaDoge1xyXG4gICAgICAgIHRocmVzaG9sZDogNTBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOS4i+aLieWIt+aWsFxyXG4gICAgdGhpcy5zY3JvbGwub24oJ3B1bGxpbmdEb3duJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncHVsbGluZ0Rvd24nKVxyXG4gICAgICBhd2FpdCB0aGlzLmdldGxpc3QoKVxyXG4gICAgICB0aGlzLnNjcm9sbC5maW5pc2hQdWxsRG93bigpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOS4iuaLieWKoOi9veabtOWkmlxyXG4gICAgdGhpcy5zY3JvbGwub24oJ3B1bGxpbmdVcCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5wYWdlTm8rKztcclxuICAgICAgY29uc29sZS5sb2coJ3B1bGxpbmd1cCcpXHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0bGlzdCgpXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmZpbmlzaFB1bGxVcCgpXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnJlZnJlc2goKVxyXG4gICAgICBpZiAodGhpcy5kYXRhbGlzdC5sZW5ndGggPT09IHRoaXMudG90YWwpIHtcclxuICAgICAgICAkKFwiI21haW4tY29udGFpbmVyIC5mb290XCIpLmhpZGUoKVxyXG4gICAgICAgIGFsZXJ0KCdmaW5pc2gnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2Nyb2xsLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueSlcclxuICAgICAgaWYgKHRoaXMueSA+IDEwICYmIHRoaXMueSA8IDUwKSB7XHJcbiAgICAgICAgJGhlYWQuc2hvdygpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA+IDUwKSB7XHJcbiAgICAgICAgJGhlYWQuZmluZCgnaW1nJykuYXR0cignc3JjJywgJy4vaW1hZ2VzL2xvYWRpbmcuZ2lmJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGhlYWQuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGluaXRFdmVudCgpIHtcclxuICAgICQoJyNtYWluLWNvbnRhaW5lcicpLm9uKCdjbGljaycsJy5pdGVtJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy4vZGV0YWlsLmh0bWw/JytpZDtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zaXRpb25Db250cm9sbGVyKCk7IiwiY2xhc3MgUHJvZmlsZUNvbnRyb2xsZXJ7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAkKCcjbWFpbi1jb250YWluZXInKS5odG1sKCdwcm9maWxlJylcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZmlsZUNvbnRyb2xsZXIoKSIsIi8vIGltcG9ydCBTZWFyY2hodG1sIGZyb20gJy4uLy4uL3ZpZXdzL3NlYXJjaC9zZWFyY2guaHRtbCc7XHJcblxyXG4vLyBjbGFzcyBTZWFyY2hDb250cm9sbGVye1xyXG4vLyAgICAgcmVuZGVyKCl7XHJcbi8vICAgICAgICAgJCgnI21haW4tY29udGFpbmVyJykuaHRtbChTZWFyY2hodG1sKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgU2VhcmNoQ29udHJvbGxlcigpO1xyXG5cclxuaW1wb3J0IHNlYXJjaEh0bWwgZnJvbSAnLi4vLi4vdmlld3Mvc2VhcmNoL3NlYXJjaC5odG1sJztcclxuaW1wb3J0IGl0ZW1IdG1sIGZyb20gJy4uLy4uL3ZpZXdzL3Bvc2l0aW9uL3Bvc2l0aW9ubGlzdC1pdGVtLmh0bWwnXHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vbW9kZWwvU2VhcmNoLmpzJztcclxuXHJcbmNsYXNzIFNlYXJjaENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICAgICAgJChcIiNtYWluLWNvbnRhaW5lclwiKS5odG1sKHNlYXJjaEh0bWwpO1xyXG4gICAgICAgICQoJy5zZWFyY2gtYnRuJykub24oJ2NsaWNrJyxhd2FpdCB0aGlzLmdldGxpc3QoKSlcclxuICAgICAgICAvLyAkKCcuc2VhcmNoLWJ0bicpLm9uKCdjbGljaycsdGhpcy5jbGlja0hhbmRsZXIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldGxpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTEpXHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHJzID0gYXdhaXQgc2VhcmNoLmdldFBvc2l0aW9ubGlzdCgpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnRvdGFsID0gcnMuY29udGVudC5kYXRhLnBhZ2UudG90YWxDT250ZW50O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmRhdGFsaXN0ID0gdGhpcy5kYXRhbGlzdC5jb25jYXQocnMucmVzdWx0KVxyXG4gICAgICAgIC8vICAgICBsZXQgaHRtbCA9IHRlbXBsYXRlLnJlbmRlcihpdGVtSHRtbCwge1xyXG4gICAgICAgIC8vICAgICAgICAgbGlzdDogcnNcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgJChcIiNsaXN0LWNvbnRhaW5lclwiKS5odG1sKGh0bWwpXHJcbiAgICAgICAgLy8gICAgIHJlc2xvdmUoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VhcmNoQ29udHJvbGxlcigpOyIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIvUm91dGVyLmpzJ1xyXG5jbGFzcyBJbmRleHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcclxuICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNwb3NpdGlvbidcclxuICAgIH1cclxuICAgIGluaXRFdmVudCgpe1xyXG4gICAgICAgICQoXCIjaW5kZXhfbmF2IGxpXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGxldCBoYXNoID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhhc2gnKTtcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgICAgICAgIFJvdXRlci5nbyhoYXNoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywoKT0+e1xyXG4gICAgICAgICAgICBsZXQgaGFzaCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsJycpO1xyXG4gICAgICAgICAgICAkKCdpbmRleF9uYXYnKS5maW5kKCdsaVtkYXRhLWhhc2g9XCInK2hhc2grJ1wiXScpXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxubmV3IEluZGV4KCkiLCJjbGFzcyBGZXRjaHtcclxuICAgIGdldFBvc2l0aW9ubGlzdChwYXJhbXMpe1xyXG4gICAgICAgIGxldCB7bmFtZSxwYWdlTm8scGFnZVNpemV9ID0gcGFyYW1zO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6YC9mZXRjaC8ke25hbWV9Lmpzb24/cGFnZU5vPSR7cGFnZU5vfSZwYWdlU2l6ZT0ke3BhZ2VTaXplfWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KSA7XHJcbiAgICAgICAgICAgICAgICB9LGVycm9yKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pICBcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmV0Y2goKTtcclxuIiwiY2xhc3MgU2VhcmNoIHtcclxuXHJcbiAgICBnZXRQb3NpdGlvbmxpc3QoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHVybDogJy9zZWFyY2gvYXBpL3Bvc2l0aW9ubGlzdCcsXHJcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcihyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbmV3IFNlYXJjaCgpOyIsImltcG9ydCBQb3NpdGlvbkNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9Qb3NpdGlvbkNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgU2VhcmNoQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL1NlYXJjaENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgUHJvZmlsZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9Qcm9maWxlQ29udHJvbGxlci5qcydcclxuaW1wb3J0IEVycm9yQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL0Vycm9yQ29udHJvbGxlci5qcydcclxuXHJcbmNvbnN0IE1PREUgPSAnaGFzaCdcclxuY2xhc3MgUm91dGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJvdXRlcyA9IHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzpQb3NpdGlvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICdzZWFyY2gnOlNlYXJjaENvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICdwcm9maWxlJzpQcm9maWxlQ29udHJvbGxlclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xyXG4gICAgICAgIFBvc2l0aW9uQ29udHJvbGxlci5yZW5kZXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVmlldyhwYXRoKXtcclxuICAgICAgICBpZih0aGlzLnJvdXRlc1twYXRoXSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVzW3BhdGhdLnJlbmRlcigpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBFcnJvckNvbnRyb2xsZXIucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ28ocGF0aCl7XHJcbiAgICAgICAgaWYoTU9ERSA9PT0gJ2hhc2gnKXtcclxuICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHtwYXRofSwnJyxwYXRoKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRWaWV3KHBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRFdmVudCgpe1xyXG4gICAgICAgIGlmKE1PREUgPT09ICdoYXNoJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhc2ggPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFZpZXcoaGFzaCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFZpZXcoaGlzdG9yeS5zdGF0ZS5wYXRoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gICAgcGFnZSBub3QgZm91bmQhPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCUgZm9yKHZhciBpID0gMDtpPGxpc3QubGVuZ3RoO2krKyl7ICU+PGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS1pZD08JT1saXN0W2ldLnBvc2l0aW9uSWQgJT4+ICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPiAgICAgICAgPGltZyBzcmM9XFxcImh0dHBzOi8vd3d3Lmxnc3RhdGljLmNvbS88JT1saXN0W2ldLmNvbXBhbnlMb2dvICU+XFxcIiBhbHQ9XFxcIlxcXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjXFxcIj4gICAgICAgIDxoMj48JT1saXN0W2ldLmNvbXBhbnlOYW1lICU+PC9oMj4gICAgICAgIDxwPjwlPWxpc3RbaV1bXFwncG9zaXRpb25OYW1lXFwnXSAlPls8JT1saXN0W2ldW1xcJ2NpdHlcXCddICU+XTwvcD4gICAgICAgIDxwPjwlPWxpc3RbaV1bXFwnY3JlYXRlVGltZVxcJ10gJT48L3A+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVxcXCJzYWxhcnlcXFwiPiAgICAgICAgPCU9bGlzdFtpXVtcXCdzYWxhcnlcXCddICU+ICAgIDwvZGl2PjwvZGl2PjwlIH0gJT5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJwb3NpdGlvbi13cmFwcGVyXFxcIj4gICAgPGRpdj4gICAgICAgIDxkaXYgaWQ9XFxcImxvYWRpbmdcXFwiPiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvbG9hZGluZy5naWZcXFwiIGFsdD1cXFwiXFxcIj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZFxcXCI+ICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvYXJyb3cucG5nXFxcIiBhbHQ9XFxcIlxcXCI+ICAgICAgICAgICAg5LiL5ouJ5Yi35pawICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbVxcXCI+ICAgICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgIDEw56eS6ZKf5a6a5Yi26IGM5L2NICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgIDxidXR0b24+5Y6755m75b2VPC9idXR0b24+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgaWQ9XFxcImxpc3QtY29udGFpbmVyXFxcIj4gICAgICAgICAgICA8IS0tIDwlIGZvcih2YXIgaSA9IDA7aTxsaXN0Lmxlbmd0aDtpKyspeyAlPiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3d3dy5sZ3N0YXRpYy5jb20vPCU9bGlzdFtpXS5jb21wYW55TG9nbyAlPlxcXCIgYWx0PVxcXCJcXFwiPiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NcXFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PCU9bGlzdFtpXS5jb21wYW55TmFtZSAlPjwvaDI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwlPWxpc3RbaV1bXFwncG9zaXRpb25OYW1lXFwnXSAlPjwvcD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PCU9bGlzdFtpXVtcXCdjcmVhdGVUaW1lXFwnXSAlPjwvcD4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzYWxhcnlcXFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCU9bGlzdFtpXVtcXCdzYWxhcnlcXCddICU+ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIDwlIH0gJT4gLS0+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3RcXFwiPiAgICAgICAgICAgIOS4iuaLieWKoOi9veabtOWkmiAgICAgICAgPC9kaXY+ICAgIDwvZGl2PjwvZGl2PlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInNlYXJjaC1jb250YWluZXJcXFwiPiAgICA8ZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoXFxcIj4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RjaXR5XFxcIj7lhajlm708L2Rpdj4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuaQnOe0ouiBjOS9jeaIluWFrOWPuFxcXCI+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWJ0blxcXCI+8J+UjTwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGlkPVxcXCJsaXN0LWNvbnRhaW5lclxcXCI+ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290XFxcIj4gICAgICAgICAgICDkuIrmi4nliqDovb3mm7TlpJogICAgICAgIDwvZGl2PiAgICA8L2Rpdj48L2Rpdj5cIiJdLCJzb3VyY2VSb290IjoiIn0=