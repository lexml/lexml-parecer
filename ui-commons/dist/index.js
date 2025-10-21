import '@awesome.me/webawesome/dist/components/input/input.js';
import { LitElement, html, css } from 'lit';
import { query, state, customElement, property } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/radio/radio.js';
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/split-panel/split-panel.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/switch/switch.js';

var quill$1 = {exports: {}};

/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
var quill = quill$1.exports;

var hasRequiredQuill;

function requireQuill () {
	if (hasRequiredQuill) return quill$1.exports;
	hasRequiredQuill = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory();
		})(typeof self !== 'undefined' ? self : quill, function() {
		return /******/ (function(modules) { // webpackBootstrap
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
		/******/ 			Object.defineProperty(exports, name, {
		/******/ 				configurable: false,
		/******/ 				enumerable: true,
		/******/ 				get: getter
		/******/ 			});
		/******/ 		}
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
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(__webpack_require__.s = 109);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", { value: true });
		var container_1 = __webpack_require__(17);
		var format_1 = __webpack_require__(18);
		var leaf_1 = __webpack_require__(19);
		var scroll_1 = __webpack_require__(45);
		var inline_1 = __webpack_require__(46);
		var block_1 = __webpack_require__(47);
		var embed_1 = __webpack_require__(48);
		var text_1 = __webpack_require__(49);
		var attributor_1 = __webpack_require__(12);
		var class_1 = __webpack_require__(32);
		var style_1 = __webpack_require__(33);
		var store_1 = __webpack_require__(31);
		var Registry = __webpack_require__(1);
		var Parchment = {
		    Scope: Registry.Scope,
		    create: Registry.create,
		    find: Registry.find,
		    query: Registry.query,
		    register: Registry.register,
		    Container: container_1.default,
		    Format: format_1.default,
		    Leaf: leaf_1.default,
		    Embed: embed_1.default,
		    Scroll: scroll_1.default,
		    Block: block_1.default,
		    Inline: inline_1.default,
		    Text: text_1.default,
		    Attributor: {
		        Attribute: attributor_1.default,
		        Class: class_1.default,
		        Style: style_1.default,
		        Store: store_1.default,
		    },
		};
		exports.default = Parchment;


		/***/ }),
		/* 1 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var ParchmentError = /** @class */ (function (_super) {
		    __extends(ParchmentError, _super);
		    function ParchmentError(message) {
		        var _this = this;
		        message = '[Parchment] ' + message;
		        _this = _super.call(this, message) || this;
		        _this.message = message;
		        _this.name = _this.constructor.name;
		        return _this;
		    }
		    return ParchmentError;
		}(Error));
		exports.ParchmentError = ParchmentError;
		var attributes = {};
		var classes = {};
		var tags = {};
		var types = {};
		exports.DATA_KEY = '__blot';
		var Scope;
		(function (Scope) {
		    Scope[Scope["TYPE"] = 3] = "TYPE";
		    Scope[Scope["LEVEL"] = 12] = "LEVEL";
		    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
		    Scope[Scope["BLOT"] = 14] = "BLOT";
		    Scope[Scope["INLINE"] = 7] = "INLINE";
		    Scope[Scope["BLOCK"] = 11] = "BLOCK";
		    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
		    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
		    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
		    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
		    Scope[Scope["ANY"] = 15] = "ANY";
		})(Scope = exports.Scope || (exports.Scope = {}));
		function create(input, value) {
		    var match = query(input);
		    if (match == null) {
		        throw new ParchmentError("Unable to create " + input + " blot");
		    }
		    var BlotClass = match;
		    var node = 
		    // @ts-ignore
		    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
		    return new BlotClass(node, value);
		}
		exports.create = create;
		function find(node, bubble) {
		    if (bubble === void 0) { bubble = false; }
		    if (node == null)
		        return null;
		    // @ts-ignore
		    if (node[exports.DATA_KEY] != null)
		        return node[exports.DATA_KEY].blot;
		    if (bubble)
		        return find(node.parentNode, bubble);
		    return null;
		}
		exports.find = find;
		function query(query, scope) {
		    if (scope === void 0) { scope = Scope.ANY; }
		    var match;
		    if (typeof query === 'string') {
		        match = types[query] || attributes[query];
		        // @ts-ignore
		    }
		    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
		        match = types['text'];
		    }
		    else if (typeof query === 'number') {
		        if (query & Scope.LEVEL & Scope.BLOCK) {
		            match = types['block'];
		        }
		        else if (query & Scope.LEVEL & Scope.INLINE) {
		            match = types['inline'];
		        }
		    }
		    else if (query instanceof HTMLElement) {
		        var names = (query.getAttribute('class') || '').split(/\s+/);
		        for (var i in names) {
		            match = classes[names[i]];
		            if (match)
		                break;
		        }
		        match = match || tags[query.tagName];
		    }
		    if (match == null)
		        return null;
		    // @ts-ignore
		    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
		        return match;
		    return null;
		}
		exports.query = query;
		function register() {
		    var Definitions = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        Definitions[_i] = arguments[_i];
		    }
		    if (Definitions.length > 1) {
		        return Definitions.map(function (d) {
		            return register(d);
		        });
		    }
		    var Definition = Definitions[0];
		    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
		        throw new ParchmentError('Invalid definition');
		    }
		    else if (Definition.blotName === 'abstract') {
		        throw new ParchmentError('Cannot register abstract class');
		    }
		    types[Definition.blotName || Definition.attrName] = Definition;
		    if (typeof Definition.keyName === 'string') {
		        attributes[Definition.keyName] = Definition;
		    }
		    else {
		        if (Definition.className != null) {
		            classes[Definition.className] = Definition;
		        }
		        if (Definition.tagName != null) {
		            if (Array.isArray(Definition.tagName)) {
		                Definition.tagName = Definition.tagName.map(function (tagName) {
		                    return tagName.toUpperCase();
		                });
		            }
		            else {
		                Definition.tagName = Definition.tagName.toUpperCase();
		            }
		            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
		            tagNames.forEach(function (tag) {
		                if (tags[tag] == null || Definition.className == null) {
		                    tags[tag] = Definition;
		                }
		            });
		        }
		    }
		    return Definition;
		}
		exports.register = register;


		/***/ }),
		/* 2 */
		/***/ (function(module, exports, __webpack_require__) {

		var diff = __webpack_require__(51);
		var equal = __webpack_require__(11);
		var extend = __webpack_require__(3);
		var op = __webpack_require__(20);


		var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


		var Delta = function (ops) {
		  // Assume we are given a well formed ops
		  if (Array.isArray(ops)) {
		    this.ops = ops;
		  } else if (ops != null && Array.isArray(ops.ops)) {
		    this.ops = ops.ops;
		  } else {
		    this.ops = [];
		  }
		};


		Delta.prototype.insert = function (text, attributes) {
		  var newOp = {};
		  if (text.length === 0) return this;
		  newOp.insert = text;
		  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
		    newOp.attributes = attributes;
		  }
		  return this.push(newOp);
		};

		Delta.prototype['delete'] = function (length) {
		  if (length <= 0) return this;
		  return this.push({ 'delete': length });
		};

		Delta.prototype.retain = function (length, attributes) {
		  if (length <= 0) return this;
		  var newOp = { retain: length };
		  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
		    newOp.attributes = attributes;
		  }
		  return this.push(newOp);
		};

		Delta.prototype.push = function (newOp) {
		  var index = this.ops.length;
		  var lastOp = this.ops[index - 1];
		  newOp = extend(true, {}, newOp);
		  if (typeof lastOp === 'object') {
		    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
		      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
		      return this;
		    }
		    // Since it does not matter if we insert before or after deleting at the same index,
		    // always prefer to insert first
		    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
		      index -= 1;
		      lastOp = this.ops[index - 1];
		      if (typeof lastOp !== 'object') {
		        this.ops.unshift(newOp);
		        return this;
		      }
		    }
		    if (equal(newOp.attributes, lastOp.attributes)) {
		      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
		        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
		        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
		        return this;
		      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
		        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
		        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
		        return this;
		      }
		    }
		  }
		  if (index === this.ops.length) {
		    this.ops.push(newOp);
		  } else {
		    this.ops.splice(index, 0, newOp);
		  }
		  return this;
		};

		Delta.prototype.chop = function () {
		  var lastOp = this.ops[this.ops.length - 1];
		  if (lastOp && lastOp.retain && !lastOp.attributes) {
		    this.ops.pop();
		  }
		  return this;
		};

		Delta.prototype.filter = function (predicate) {
		  return this.ops.filter(predicate);
		};

		Delta.prototype.forEach = function (predicate) {
		  this.ops.forEach(predicate);
		};

		Delta.prototype.map = function (predicate) {
		  return this.ops.map(predicate);
		};

		Delta.prototype.partition = function (predicate) {
		  var passed = [], failed = [];
		  this.forEach(function(op) {
		    var target = predicate(op) ? passed : failed;
		    target.push(op);
		  });
		  return [passed, failed];
		};

		Delta.prototype.reduce = function (predicate, initial) {
		  return this.ops.reduce(predicate, initial);
		};

		Delta.prototype.changeLength = function () {
		  return this.reduce(function (length, elem) {
		    if (elem.insert) {
		      return length + op.length(elem);
		    } else if (elem.delete) {
		      return length - elem.delete;
		    }
		    return length;
		  }, 0);
		};

		Delta.prototype.length = function () {
		  return this.reduce(function (length, elem) {
		    return length + op.length(elem);
		  }, 0);
		};

		Delta.prototype.slice = function (start, end) {
		  start = start || 0;
		  if (typeof end !== 'number') end = Infinity;
		  var ops = [];
		  var iter = op.iterator(this.ops);
		  var index = 0;
		  while (index < end && iter.hasNext()) {
		    var nextOp;
		    if (index < start) {
		      nextOp = iter.next(start - index);
		    } else {
		      nextOp = iter.next(end - index);
		      ops.push(nextOp);
		    }
		    index += op.length(nextOp);
		  }
		  return new Delta(ops);
		};


		Delta.prototype.compose = function (other) {
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  var ops = [];
		  var firstOther = otherIter.peek();
		  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
		    var firstLeft = firstOther.retain;
		    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
		      firstLeft -= thisIter.peekLength();
		      ops.push(thisIter.next());
		    }
		    if (firstOther.retain - firstLeft > 0) {
		      otherIter.next(firstOther.retain - firstLeft);
		    }
		  }
		  var delta = new Delta(ops);
		  while (thisIter.hasNext() || otherIter.hasNext()) {
		    if (otherIter.peekType() === 'insert') {
		      delta.push(otherIter.next());
		    } else if (thisIter.peekType() === 'delete') {
		      delta.push(thisIter.next());
		    } else {
		      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
		      var thisOp = thisIter.next(length);
		      var otherOp = otherIter.next(length);
		      if (typeof otherOp.retain === 'number') {
		        var newOp = {};
		        if (typeof thisOp.retain === 'number') {
		          newOp.retain = length;
		        } else {
		          newOp.insert = thisOp.insert;
		        }
		        // Preserve null when composing with a retain, otherwise remove it for inserts
		        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
		        if (attributes) newOp.attributes = attributes;
		        delta.push(newOp);

		        // Optimization if rest of other is just retain
		        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
		          var rest = new Delta(thisIter.rest());
		          return delta.concat(rest).chop();
		        }

		      // Other op should be delete, we could be an insert or retain
		      // Insert + delete cancels out
		      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
		        delta.push(otherOp);
		      }
		    }
		  }
		  return delta.chop();
		};

		Delta.prototype.concat = function (other) {
		  var delta = new Delta(this.ops.slice());
		  if (other.ops.length > 0) {
		    delta.push(other.ops[0]);
		    delta.ops = delta.ops.concat(other.ops.slice(1));
		  }
		  return delta;
		};

		Delta.prototype.diff = function (other, index) {
		  if (this.ops === other.ops) {
		    return new Delta();
		  }
		  var strings = [this, other].map(function (delta) {
		    return delta.map(function (op) {
		      if (op.insert != null) {
		        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
		      }
		      var prep = (delta === other) ? 'on' : 'with';
		      throw new Error('diff() called ' + prep + ' non-document');
		    }).join('');
		  });
		  var delta = new Delta();
		  var diffResult = diff(strings[0], strings[1], index);
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  diffResult.forEach(function (component) {
		    var length = component[1].length;
		    while (length > 0) {
		      var opLength = 0;
		      switch (component[0]) {
		        case diff.INSERT:
		          opLength = Math.min(otherIter.peekLength(), length);
		          delta.push(otherIter.next(opLength));
		          break;
		        case diff.DELETE:
		          opLength = Math.min(length, thisIter.peekLength());
		          thisIter.next(opLength);
		          delta['delete'](opLength);
		          break;
		        case diff.EQUAL:
		          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
		          var thisOp = thisIter.next(opLength);
		          var otherOp = otherIter.next(opLength);
		          if (equal(thisOp.insert, otherOp.insert)) {
		            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
		          } else {
		            delta.push(otherOp)['delete'](opLength);
		          }
		          break;
		      }
		      length -= opLength;
		    }
		  });
		  return delta.chop();
		};

		Delta.prototype.eachLine = function (predicate, newline) {
		  newline = newline || '\n';
		  var iter = op.iterator(this.ops);
		  var line = new Delta();
		  var i = 0;
		  while (iter.hasNext()) {
		    if (iter.peekType() !== 'insert') return;
		    var thisOp = iter.peek();
		    var start = op.length(thisOp) - iter.peekLength();
		    var index = typeof thisOp.insert === 'string' ?
		      thisOp.insert.indexOf(newline, start) - start : -1;
		    if (index < 0) {
		      line.push(iter.next());
		    } else if (index > 0) {
		      line.push(iter.next(index));
		    } else {
		      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
		        return;
		      }
		      i += 1;
		      line = new Delta();
		    }
		  }
		  if (line.length() > 0) {
		    predicate(line, {}, i);
		  }
		};

		Delta.prototype.transform = function (other, priority) {
		  priority = !!priority;
		  if (typeof other === 'number') {
		    return this.transformPosition(other, priority);
		  }
		  var thisIter = op.iterator(this.ops);
		  var otherIter = op.iterator(other.ops);
		  var delta = new Delta();
		  while (thisIter.hasNext() || otherIter.hasNext()) {
		    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
		      delta.retain(op.length(thisIter.next()));
		    } else if (otherIter.peekType() === 'insert') {
		      delta.push(otherIter.next());
		    } else {
		      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
		      var thisOp = thisIter.next(length);
		      var otherOp = otherIter.next(length);
		      if (thisOp['delete']) {
		        // Our delete either makes their delete redundant or removes their retain
		        continue;
		      } else if (otherOp['delete']) {
		        delta.push(otherOp);
		      } else {
		        // We retain either their retain or insert
		        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
		      }
		    }
		  }
		  return delta.chop();
		};

		Delta.prototype.transformPosition = function (index, priority) {
		  priority = !!priority;
		  var thisIter = op.iterator(this.ops);
		  var offset = 0;
		  while (thisIter.hasNext() && offset <= index) {
		    var length = thisIter.peekLength();
		    var nextType = thisIter.peekType();
		    thisIter.next();
		    if (nextType === 'delete') {
		      index -= Math.min(length, index - offset);
		      continue;
		    } else if (nextType === 'insert' && (offset < index || !priority)) {
		      index += length;
		    }
		    offset += length;
		  }
		  return index;
		};


		module.exports = Delta;


		/***/ }),
		/* 3 */
		/***/ (function(module, exports) {

		var hasOwn = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var defineProperty = Object.defineProperty;
		var gOPD = Object.getOwnPropertyDescriptor;

		var isArray = function isArray(arr) {
			if (typeof Array.isArray === 'function') {
				return Array.isArray(arr);
			}

			return toStr.call(arr) === '[object Array]';
		};

		var isPlainObject = function isPlainObject(obj) {
			if (!obj || toStr.call(obj) !== '[object Object]') {
				return false;
			}

			var hasOwnConstructor = hasOwn.call(obj, 'constructor');
			var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
			// Not own constructor property must be Object
			if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			var key;
			for (key in obj) { /**/ }

			return typeof key === 'undefined' || hasOwn.call(obj, key);
		};

		// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
		var setProperty = function setProperty(target, options) {
			if (defineProperty && options.name === '__proto__') {
				defineProperty(target, options.name, {
					enumerable: true,
					configurable: true,
					value: options.newValue,
					writable: true
				});
			} else {
				target[options.name] = options.newValue;
			}
		};

		// Return undefined instead of __proto__ if '__proto__' is not an own property
		var getProperty = function getProperty(obj, name) {
			if (name === '__proto__') {
				if (!hasOwn.call(obj, name)) {
					return void 0;
				} else if (gOPD) {
					// In early versions of node, obj['__proto__'] is buggy when obj has
					// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
					return gOPD(obj, name).value;
				}
			}

			return obj[name];
		};

		module.exports = function extend() {
			var options, name, src, copy, copyIsArray, clone;
			var target = arguments[0];
			var i = 1;
			var length = arguments.length;
			var deep = false;

			// Handle a deep copy situation
			if (typeof target === 'boolean') {
				deep = target;
				target = arguments[1] || {};
				// skip the boolean and the target
				i = 2;
			}
			if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
				target = {};
			}

			for (; i < length; ++i) {
				options = arguments[i];
				// Only deal with non-null/undefined values
				if (options != null) {
					// Extend the base object
					for (name in options) {
						src = getProperty(target, name);
						copy = getProperty(options, name);

						// Prevent never-ending loop
						if (target !== copy) {
							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && isArray(src) ? src : [];
								} else {
									clone = src && isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

							// Don't bring in undefined values
							} else if (typeof copy !== 'undefined') {
								setProperty(target, { name: name, newValue: copy });
							}
						}
					}
				}
			}

			// Return the modified object
			return target;
		};


		/***/ }),
		/* 4 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _break = __webpack_require__(16);

		var _break2 = _interopRequireDefault(_break);

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var NEWLINE_LENGTH = 1;

		var BlockEmbed = function (_Parchment$Embed) {
		  _inherits(BlockEmbed, _Parchment$Embed);

		  function BlockEmbed() {
		    _classCallCheck(this, BlockEmbed);

		    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
		  }

		  _createClass(BlockEmbed, [{
		    key: 'attach',
		    value: function attach() {
		      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
		      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
		    }
		  }, {
		    key: 'delta',
		    value: function delta() {
		      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
		      if (attribute != null) {
		        this.attributes.attribute(attribute, value);
		      }
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      this.format(name, value);
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (typeof value === 'string' && value.endsWith('\n')) {
		        var block = _parchment2.default.create(Block.blotName);
		        this.parent.insertBefore(block, index === 0 ? this : this.next);
		        block.insertAt(0, value.slice(0, -1));
		      } else {
		        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
		      }
		    }
		  }]);

		  return BlockEmbed;
		}(_parchment2.default.Embed);

		BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
		// It is important for cursor behavior BlockEmbeds use tags that are block level elements


		var Block = function (_Parchment$Block) {
		  _inherits(Block, _Parchment$Block);

		  function Block(domNode) {
		    _classCallCheck(this, Block);

		    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

		    _this2.cache = {};
		    return _this2;
		  }

		  _createClass(Block, [{
		    key: 'delta',
		    value: function delta() {
		      if (this.cache.delta == null) {
		        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
		          if (leaf.length() === 0) {
		            return delta;
		          } else {
		            return delta.insert(leaf.value(), bubbleFormats(leaf));
		          }
		        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
		      }
		      return this.cache.delta;
		    }
		  }, {
		    key: 'deleteAt',
		    value: function deleteAt(index, length) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
		      this.cache = {};
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (length <= 0) return;
		      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
		        if (index + length === this.length()) {
		          this.format(name, value);
		        }
		      } else {
		        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
		      }
		      this.cache = {};
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
		      if (value.length === 0) return;
		      var lines = value.split('\n');
		      var text = lines.shift();
		      if (text.length > 0) {
		        if (index < this.length() - 1 || this.children.tail == null) {
		          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
		        } else {
		          this.children.tail.insertAt(this.children.tail.length(), text);
		        }
		        this.cache = {};
		      }
		      var block = this;
		      lines.reduce(function (index, line) {
		        block = block.split(index, true);
		        block.insertAt(0, line);
		        return line.length;
		      }, index + text.length);
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      var head = this.children.head;
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
		      if (head instanceof _break2.default) {
		        head.remove();
		      }
		      this.cache = {};
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      if (this.cache.length == null) {
		        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
		      }
		      return this.cache.length;
		    }
		  }, {
		    key: 'moveChildren',
		    value: function moveChildren(target, ref) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
		      this.cache = {};
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize(context) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
		      this.cache = {};
		    }
		  }, {
		    key: 'path',
		    value: function path(index) {
		      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
		    }
		  }, {
		    key: 'removeChild',
		    value: function removeChild(child) {
		      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
		      this.cache = {};
		    }
		  }, {
		    key: 'split',
		    value: function split(index) {
		      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
		        var clone = this.clone();
		        if (index === 0) {
		          this.parent.insertBefore(clone, this);
		          return this;
		        } else {
		          this.parent.insertBefore(clone, this.next);
		          return clone;
		        }
		      } else {
		        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
		        this.cache = {};
		        return next;
		      }
		    }
		  }]);

		  return Block;
		}(_parchment2.default.Block);

		Block.blotName = 'block';
		Block.tagName = 'P';
		Block.defaultChild = 'break';
		Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

		function bubbleFormats(blot) {
		  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  if (blot == null) return formats;
		  if (typeof blot.formats === 'function') {
		    formats = (0, _extend2.default)(formats, blot.formats());
		  }
		  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
		    return formats;
		  }
		  return bubbleFormats(blot.parent, formats);
		}

		exports.bubbleFormats = bubbleFormats;
		exports.BlockEmbed = BlockEmbed;
		exports.default = Block;

		/***/ }),
		/* 5 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.overload = exports.expandConfig = undefined;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		__webpack_require__(50);

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _editor = __webpack_require__(14);

		var _editor2 = _interopRequireDefault(_editor);

		var _emitter3 = __webpack_require__(8);

		var _emitter4 = _interopRequireDefault(_emitter3);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _selection = __webpack_require__(15);

		var _selection2 = _interopRequireDefault(_selection);

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		var _theme = __webpack_require__(34);

		var _theme2 = _interopRequireDefault(_theme);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var debug = (0, _logger2.default)('quill');

		var Quill = function () {
		  _createClass(Quill, null, [{
		    key: 'debug',
		    value: function debug(limit) {
		      if (limit === true) {
		        limit = 'log';
		      }
		      _logger2.default.level(limit);
		    }
		  }, {
		    key: 'find',
		    value: function find(node) {
		      return node.__quill || _parchment2.default.find(node);
		    }
		  }, {
		    key: 'import',
		    value: function _import(name) {
		      if (this.imports[name] == null) {
		        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
		      }
		      return this.imports[name];
		    }
		  }, {
		    key: 'register',
		    value: function register(path, target) {
		      var _this = this;

		      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		      if (typeof path !== 'string') {
		        var name = path.attrName || path.blotName;
		        if (typeof name === 'string') {
		          // register(Blot | Attributor, overwrite)
		          this.register('formats/' + name, path, target);
		        } else {
		          Object.keys(path).forEach(function (key) {
		            _this.register(key, path[key], target);
		          });
		        }
		      } else {
		        if (this.imports[path] != null && !overwrite) {
		          debug.warn('Overwriting ' + path + ' with', target);
		        }
		        this.imports[path] = target;
		        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
		          _parchment2.default.register(target);
		        } else if (path.startsWith('modules') && typeof target.register === 'function') {
		          target.register();
		        }
		      }
		    }
		  }]);

		  function Quill(container) {
		    var _this2 = this;

		    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		    _classCallCheck(this, Quill);

		    this.options = expandConfig(container, options);
		    this.container = this.options.container;
		    if (this.container == null) {
		      return debug.error('Invalid Quill container', container);
		    }
		    if (this.options.debug) {
		      Quill.debug(this.options.debug);
		    }
		    var html = this.container.innerHTML.trim();
		    this.container.classList.add('ql-container');
		    this.container.innerHTML = '';
		    this.container.__quill = this;
		    this.root = this.addContainer('ql-editor');
		    this.root.classList.add('ql-blank');
		    this.root.setAttribute('data-gramm', false);
		    this.scrollingContainer = this.options.scrollingContainer || this.root;
		    this.emitter = new _emitter4.default();
		    this.scroll = _parchment2.default.create(this.root, {
		      emitter: this.emitter,
		      whitelist: this.options.formats
		    });
		    this.editor = new _editor2.default(this.scroll);
		    this.selection = new _selection2.default(this.scroll, this.emitter);
		    this.theme = new this.options.theme(this, this.options);
		    this.keyboard = this.theme.addModule('keyboard');
		    this.clipboard = this.theme.addModule('clipboard');
		    this.history = this.theme.addModule('history');
		    this.theme.init();
		    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
		      if (type === _emitter4.default.events.TEXT_CHANGE) {
		        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
		      }
		    });
		    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
		      var range = _this2.selection.lastRange;
		      var index = range && range.length === 0 ? range.index : undefined;
		      modify.call(_this2, function () {
		        return _this2.editor.update(null, mutations, index);
		      }, source);
		    });
		    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
		    this.setContents(contents);
		    this.history.clear();
		    if (this.options.placeholder) {
		      this.root.setAttribute('data-placeholder', this.options.placeholder);
		    }
		    if (this.options.readOnly) {
		      this.disable();
		    }
		  }

		  _createClass(Quill, [{
		    key: 'addContainer',
		    value: function addContainer(container) {
		      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		      if (typeof container === 'string') {
		        var className = container;
		        container = document.createElement('div');
		        container.classList.add(className);
		      }
		      this.container.insertBefore(container, refNode);
		      return container;
		    }
		  }, {
		    key: 'blur',
		    value: function blur() {
		      this.selection.setRange(null);
		    }
		  }, {
		    key: 'deleteText',
		    value: function deleteText(index, length, source) {
		      var _this3 = this;

		      var _overload = overload(index, length, source);

		      var _overload2 = _slicedToArray(_overload, 4);

		      index = _overload2[0];
		      length = _overload2[1];
		      source = _overload2[3];

		      return modify.call(this, function () {
		        return _this3.editor.deleteText(index, length);
		      }, source, index, -1 * length);
		    }
		  }, {
		    key: 'disable',
		    value: function disable() {
		      this.enable(false);
		    }
		  }, {
		    key: 'enable',
		    value: function enable() {
		      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		      this.scroll.enable(enabled);
		      this.container.classList.toggle('ql-disabled', !enabled);
		    }
		  }, {
		    key: 'focus',
		    value: function focus() {
		      var scrollTop = this.scrollingContainer.scrollTop;
		      this.selection.focus();
		      this.scrollingContainer.scrollTop = scrollTop;
		      this.scrollIntoView();
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      var _this4 = this;

		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        var range = _this4.getSelection(true);
		        var change = new _quillDelta2.default();
		        if (range == null) {
		          return change;
		        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
		          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
		        } else if (range.length === 0) {
		          _this4.selection.format(name, value);
		          return change;
		        } else {
		          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
		        }
		        _this4.setSelection(range, _emitter4.default.sources.SILENT);
		        return change;
		      }, source);
		    }
		  }, {
		    key: 'formatLine',
		    value: function formatLine(index, length, name, value, source) {
		      var _this5 = this;

		      var formats = void 0;

		      var _overload3 = overload(index, length, name, value, source);

		      var _overload4 = _slicedToArray(_overload3, 4);

		      index = _overload4[0];
		      length = _overload4[1];
		      formats = _overload4[2];
		      source = _overload4[3];

		      return modify.call(this, function () {
		        return _this5.editor.formatLine(index, length, formats);
		      }, source, index, 0);
		    }
		  }, {
		    key: 'formatText',
		    value: function formatText(index, length, name, value, source) {
		      var _this6 = this;

		      var formats = void 0;

		      var _overload5 = overload(index, length, name, value, source);

		      var _overload6 = _slicedToArray(_overload5, 4);

		      index = _overload6[0];
		      length = _overload6[1];
		      formats = _overload6[2];
		      source = _overload6[3];

		      return modify.call(this, function () {
		        return _this6.editor.formatText(index, length, formats);
		      }, source, index, 0);
		    }
		  }, {
		    key: 'getBounds',
		    value: function getBounds(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      var bounds = void 0;
		      if (typeof index === 'number') {
		        bounds = this.selection.getBounds(index, length);
		      } else {
		        bounds = this.selection.getBounds(index.index, index.length);
		      }
		      var containerBounds = this.container.getBoundingClientRect();
		      return {
		        bottom: bounds.bottom - containerBounds.top,
		        height: bounds.height,
		        left: bounds.left - containerBounds.left,
		        right: bounds.right - containerBounds.left,
		        top: bounds.top - containerBounds.top,
		        width: bounds.width
		      };
		    }
		  }, {
		    key: 'getContents',
		    value: function getContents() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

		      var _overload7 = overload(index, length);

		      var _overload8 = _slicedToArray(_overload7, 2);

		      index = _overload8[0];
		      length = _overload8[1];

		      return this.editor.getContents(index, length);
		    }
		  }, {
		    key: 'getFormat',
		    value: function getFormat() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      if (typeof index === 'number') {
		        return this.editor.getFormat(index, length);
		      } else {
		        return this.editor.getFormat(index.index, index.length);
		      }
		    }
		  }, {
		    key: 'getIndex',
		    value: function getIndex(blot) {
		      return blot.offset(this.scroll);
		    }
		  }, {
		    key: 'getLength',
		    value: function getLength() {
		      return this.scroll.length();
		    }
		  }, {
		    key: 'getLeaf',
		    value: function getLeaf(index) {
		      return this.scroll.leaf(index);
		    }
		  }, {
		    key: 'getLine',
		    value: function getLine(index) {
		      return this.scroll.line(index);
		    }
		  }, {
		    key: 'getLines',
		    value: function getLines() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

		      if (typeof index !== 'number') {
		        return this.scroll.lines(index.index, index.length);
		      } else {
		        return this.scroll.lines(index, length);
		      }
		    }
		  }, {
		    key: 'getModule',
		    value: function getModule(name) {
		      return this.theme.modules[name];
		    }
		  }, {
		    key: 'getSelection',
		    value: function getSelection() {
		      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		      if (focus) this.focus();
		      this.update(); // Make sure we access getRange with editor in consistent state
		      return this.selection.getRange()[0];
		    }
		  }, {
		    key: 'getText',
		    value: function getText() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

		      var _overload9 = overload(index, length);

		      var _overload10 = _slicedToArray(_overload9, 2);

		      index = _overload10[0];
		      length = _overload10[1];

		      return this.editor.getText(index, length);
		    }
		  }, {
		    key: 'hasFocus',
		    value: function hasFocus() {
		      return this.selection.hasFocus();
		    }
		  }, {
		    key: 'insertEmbed',
		    value: function insertEmbed(index, embed, value) {
		      var _this7 = this;

		      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

		      return modify.call(this, function () {
		        return _this7.editor.insertEmbed(index, embed, value);
		      }, source, index);
		    }
		  }, {
		    key: 'insertText',
		    value: function insertText(index, text, name, value, source) {
		      var _this8 = this;

		      var formats = void 0;

		      var _overload11 = overload(index, 0, name, value, source);

		      var _overload12 = _slicedToArray(_overload11, 4);

		      index = _overload12[0];
		      formats = _overload12[2];
		      source = _overload12[3];

		      return modify.call(this, function () {
		        return _this8.editor.insertText(index, text, formats);
		      }, source, index, text.length);
		    }
		  }, {
		    key: 'isEnabled',
		    value: function isEnabled() {
		      return !this.container.classList.contains('ql-disabled');
		    }
		  }, {
		    key: 'off',
		    value: function off() {
		      return this.emitter.off.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'on',
		    value: function on() {
		      return this.emitter.on.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'once',
		    value: function once() {
		      return this.emitter.once.apply(this.emitter, arguments);
		    }
		  }, {
		    key: 'pasteHTML',
		    value: function pasteHTML(index, html, source) {
		      this.clipboard.dangerouslyPasteHTML(index, html, source);
		    }
		  }, {
		    key: 'removeFormat',
		    value: function removeFormat(index, length, source) {
		      var _this9 = this;

		      var _overload13 = overload(index, length, source);

		      var _overload14 = _slicedToArray(_overload13, 4);

		      index = _overload14[0];
		      length = _overload14[1];
		      source = _overload14[3];

		      return modify.call(this, function () {
		        return _this9.editor.removeFormat(index, length);
		      }, source, index);
		    }
		  }, {
		    key: 'scrollIntoView',
		    value: function scrollIntoView() {
		      this.selection.scrollIntoView(this.scrollingContainer);
		    }
		  }, {
		    key: 'setContents',
		    value: function setContents(delta) {
		      var _this10 = this;

		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        delta = new _quillDelta2.default(delta);
		        var length = _this10.getLength();
		        var deleted = _this10.editor.deleteText(0, length);
		        var applied = _this10.editor.applyDelta(delta);
		        var lastOp = applied.ops[applied.ops.length - 1];
		        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
		          _this10.editor.deleteText(_this10.getLength() - 1, 1);
		          applied.delete(1);
		        }
		        var ret = deleted.compose(applied);
		        return ret;
		      }, source);
		    }
		  }, {
		    key: 'setSelection',
		    value: function setSelection(index, length, source) {
		      if (index == null) {
		        this.selection.setRange(null, length || Quill.sources.API);
		      } else {
		        var _overload15 = overload(index, length, source);

		        var _overload16 = _slicedToArray(_overload15, 4);

		        index = _overload16[0];
		        length = _overload16[1];
		        source = _overload16[3];

		        this.selection.setRange(new _selection.Range(index, length), source);
		        if (source !== _emitter4.default.sources.SILENT) {
		          this.selection.scrollIntoView(this.scrollingContainer);
		        }
		      }
		    }
		  }, {
		    key: 'setText',
		    value: function setText(text) {
		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      var delta = new _quillDelta2.default().insert(text);
		      return this.setContents(delta, source);
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

		      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
		      this.selection.update(source);
		      return change;
		    }
		  }, {
		    key: 'updateContents',
		    value: function updateContents(delta) {
		      var _this11 = this;

		      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

		      return modify.call(this, function () {
		        delta = new _quillDelta2.default(delta);
		        return _this11.editor.applyDelta(delta, source);
		      }, source, true);
		    }
		  }]);

		  return Quill;
		}();

		Quill.DEFAULTS = {
		  bounds: null,
		  formats: null,
		  modules: {},
		  placeholder: '',
		  readOnly: false,
		  scrollingContainer: null,
		  strict: true,
		  theme: 'default'
		};
		Quill.events = _emitter4.default.events;
		Quill.sources = _emitter4.default.sources;
		// eslint-disable-next-line no-undef
		Quill.version =  "1.3.7";

		Quill.imports = {
		  'delta': _quillDelta2.default,
		  'parchment': _parchment2.default,
		  'core/module': _module2.default,
		  'core/theme': _theme2.default
		};

		function expandConfig(container, userConfig) {
		  userConfig = (0, _extend2.default)(true, {
		    container: container,
		    modules: {
		      clipboard: true,
		      keyboard: true,
		      history: true
		    }
		  }, userConfig);
		  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
		    userConfig.theme = _theme2.default;
		  } else {
		    userConfig.theme = Quill.import('themes/' + userConfig.theme);
		    if (userConfig.theme == null) {
		      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
		    }
		  }
		  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
		  [themeConfig, userConfig].forEach(function (config) {
		    config.modules = config.modules || {};
		    Object.keys(config.modules).forEach(function (module) {
		      if (config.modules[module] === true) {
		        config.modules[module] = {};
		      }
		    });
		  });
		  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
		  var moduleConfig = moduleNames.reduce(function (config, name) {
		    var moduleClass = Quill.import('modules/' + name);
		    if (moduleClass == null) {
		      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
		    } else {
		      config[name] = moduleClass.DEFAULTS || {};
		    }
		    return config;
		  }, {});
		  // Special case toolbar shorthand
		  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
		    userConfig.modules.toolbar = {
		      container: userConfig.modules.toolbar
		    };
		  }
		  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
		  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
		    if (typeof userConfig[key] === 'string') {
		      userConfig[key] = document.querySelector(userConfig[key]);
		    }
		  });
		  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
		    if (userConfig.modules[name]) {
		      config[name] = userConfig.modules[name];
		    }
		    return config;
		  }, {});
		  return userConfig;
		}

		// Handle selection preservation and TEXT_CHANGE emission
		// common to modification APIs
		function modify(modifier, source, index, shift) {
		  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
		    return new _quillDelta2.default();
		  }
		  var range = index == null ? null : this.getSelection();
		  var oldDelta = this.editor.delta;
		  var change = modifier();
		  if (range != null) {
		    if (index === true) index = range.index;
		    if (shift == null) {
		      range = shiftRange(range, change, source);
		    } else if (shift !== 0) {
		      range = shiftRange(range, index, shift, source);
		    }
		    this.setSelection(range, _emitter4.default.sources.SILENT);
		  }
		  if (change.length() > 0) {
		    var _emitter;

		    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
		    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
		    if (source !== _emitter4.default.sources.SILENT) {
		      var _emitter2;

		      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
		    }
		  }
		  return change;
		}

		function overload(index, length, name, value, source) {
		  var formats = {};
		  if (typeof index.index === 'number' && typeof index.length === 'number') {
		    // Allow for throwaway end (used by insertText/insertEmbed)
		    if (typeof length !== 'number') {
		      source = value, value = name, name = length, length = index.length, index = index.index;
		    } else {
		      length = index.length, index = index.index;
		    }
		  } else if (typeof length !== 'number') {
		    source = value, value = name, name = length, length = 0;
		  }
		  // Handle format being object, two format name/value strings or excluded
		  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
		    formats = name;
		    source = value;
		  } else if (typeof name === 'string') {
		    if (value != null) {
		      formats[name] = value;
		    } else {
		      source = name;
		    }
		  }
		  // Handle optional source
		  source = source || _emitter4.default.sources.API;
		  return [index, length, formats, source];
		}

		function shiftRange(range, index, length, source) {
		  if (range == null) return null;
		  var start = void 0,
		      end = void 0;
		  if (index instanceof _quillDelta2.default) {
		    var _map = [range.index, range.index + range.length].map(function (pos) {
		      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
		    });

		    var _map2 = _slicedToArray(_map, 2);

		    start = _map2[0];
		    end = _map2[1];
		  } else {
		    var _map3 = [range.index, range.index + range.length].map(function (pos) {
		      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
		      if (length >= 0) {
		        return pos + length;
		      } else {
		        return Math.max(index, pos + length);
		      }
		    });

		    var _map4 = _slicedToArray(_map3, 2);

		    start = _map4[0];
		    end = _map4[1];
		  }
		  return new _selection.Range(start, end - start);
		}

		exports.expandConfig = expandConfig;
		exports.overload = overload;
		exports.default = Quill;

		/***/ }),
		/* 6 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Inline = function (_Parchment$Inline) {
		  _inherits(Inline, _Parchment$Inline);

		  function Inline() {
		    _classCallCheck(this, Inline);

		    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
		  }

		  _createClass(Inline, [{
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
		        var blot = this.isolate(index, length);
		        if (value) {
		          blot.wrap(name, value);
		        }
		      } else {
		        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize(context) {
		      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
		      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
		        var parent = this.parent.isolate(this.offset(), this.length());
		        this.moveChildren(parent);
		        parent.wrap(this);
		      }
		    }
		  }], [{
		    key: 'compare',
		    value: function compare(self, other) {
		      var selfIndex = Inline.order.indexOf(self);
		      var otherIndex = Inline.order.indexOf(other);
		      if (selfIndex >= 0 || otherIndex >= 0) {
		        return selfIndex - otherIndex;
		      } else if (self === other) {
		        return 0;
		      } else if (self < other) {
		        return -1;
		      } else {
		        return 1;
		      }
		    }
		  }]);

		  return Inline;
		}(_parchment2.default.Inline);

		Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
		// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
		Inline.order = ['cursor', 'inline', // Must be lower
		'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
		];

		exports.default = Inline;

		/***/ }),
		/* 7 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TextBlot = function (_Parchment$Text) {
		  _inherits(TextBlot, _Parchment$Text);

		  function TextBlot() {
		    _classCallCheck(this, TextBlot);

		    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
		  }

		  return TextBlot;
		}(_parchment2.default.Text);

		exports.default = TextBlot;

		/***/ }),
		/* 8 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _eventemitter = __webpack_require__(54);

		var _eventemitter2 = _interopRequireDefault(_eventemitter);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:events');

		var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

		EVENTS.forEach(function (eventName) {
		  document.addEventListener(eventName, function () {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
		      // TODO use WeakMap
		      if (node.__quill && node.__quill.emitter) {
		        var _node$__quill$emitter;

		        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
		      }
		    });
		  });
		});

		var Emitter = function (_EventEmitter) {
		  _inherits(Emitter, _EventEmitter);

		  function Emitter() {
		    _classCallCheck(this, Emitter);

		    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

		    _this.listeners = {};
		    _this.on('error', debug.error);
		    return _this;
		  }

		  _createClass(Emitter, [{
		    key: 'emit',
		    value: function emit() {
		      debug.log.apply(debug, arguments);
		      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
		    }
		  }, {
		    key: 'handleDOM',
		    value: function handleDOM(event) {
		      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      (this.listeners[event.type] || []).forEach(function (_ref) {
		        var node = _ref.node,
		            handler = _ref.handler;

		        if (event.target === node || node.contains(event.target)) {
		          handler.apply(undefined, [event].concat(args));
		        }
		      });
		    }
		  }, {
		    key: 'listenDOM',
		    value: function listenDOM(eventName, node, handler) {
		      if (!this.listeners[eventName]) {
		        this.listeners[eventName] = [];
		      }
		      this.listeners[eventName].push({ node: node, handler: handler });
		    }
		  }]);

		  return Emitter;
		}(_eventemitter2.default);

		Emitter.events = {
		  EDITOR_CHANGE: 'editor-change',
		  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
		  SCROLL_OPTIMIZE: 'scroll-optimize',
		  SCROLL_UPDATE: 'scroll-update',
		  SELECTION_CHANGE: 'selection-change',
		  TEXT_CHANGE: 'text-change'
		};
		Emitter.sources = {
		  API: 'api',
		  SILENT: 'silent',
		  USER: 'user'
		};

		exports.default = Emitter;

		/***/ }),
		/* 9 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Module = function Module(quill) {
		  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		  _classCallCheck(this, Module);

		  this.quill = quill;
		  this.options = options;
		};

		Module.DEFAULTS = {};

		exports.default = Module;

		/***/ }),
		/* 10 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var levels = ['error', 'warn', 'log', 'info'];
		var level = 'warn';

		function debug(method) {
		  if (levels.indexOf(method) <= levels.indexOf(level)) {
		    var _console;

		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }

		    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
		  }
		}

		function namespace(ns) {
		  return levels.reduce(function (logger, method) {
		    logger[method] = debug.bind(console, method, ns);
		    return logger;
		  }, {});
		}

		debug.level = namespace.level = function (newLevel) {
		  level = newLevel;
		};

		exports.default = namespace;

		/***/ }),
		/* 11 */
		/***/ (function(module, exports, __webpack_require__) {

		var pSlice = Array.prototype.slice;
		var objectKeys = __webpack_require__(52);
		var isArguments = __webpack_require__(53);

		var deepEqual = module.exports = function (actual, expected, opts) {
		  if (!opts) opts = {};
		  // 7.1. All identical values are equivalent, as determined by ===.
		  if (actual === expected) {
		    return true;

		  } else if (actual instanceof Date && expected instanceof Date) {
		    return actual.getTime() === expected.getTime();

		  // 7.3. Other pairs that do not both pass typeof value == 'object',
		  // equivalence is determined by ==.
		  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
		    return opts.strict ? actual === expected : actual == expected;

		  // 7.4. For all other Object pairs, including Array objects, equivalence is
		  // determined by having the same number of owned properties (as verified
		  // with Object.prototype.hasOwnProperty.call), the same set of keys
		  // (although not necessarily the same order), equivalent values for every
		  // corresponding key, and an identical 'prototype' property. Note: this
		  // accounts for both named and indexed properties on Arrays.
		  } else {
		    return objEquiv(actual, expected, opts);
		  }
		};

		function isUndefinedOrNull(value) {
		  return value === null || value === undefined;
		}

		function isBuffer (x) {
		  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
		  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
		    return false;
		  }
		  if (x.length > 0 && typeof x[0] !== 'number') return false;
		  return true;
		}

		function objEquiv(a, b, opts) {
		  var i, key;
		  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
		    return false;
		  // an identical 'prototype' property.
		  if (a.prototype !== b.prototype) return false;
		  //~~~I've managed to break Object.keys through screwy arguments passing.
		  //   Converting to array solves the problem.
		  if (isArguments(a)) {
		    if (!isArguments(b)) {
		      return false;
		    }
		    a = pSlice.call(a);
		    b = pSlice.call(b);
		    return deepEqual(a, b, opts);
		  }
		  if (isBuffer(a)) {
		    if (!isBuffer(b)) {
		      return false;
		    }
		    if (a.length !== b.length) return false;
		    for (i = 0; i < a.length; i++) {
		      if (a[i] !== b[i]) return false;
		    }
		    return true;
		  }
		  try {
		    var ka = objectKeys(a),
		        kb = objectKeys(b);
		  } catch (e) {//happens when one is a string literal and the other isn't
		    return false;
		  }
		  // having the same number of owned properties (keys incorporates
		  // hasOwnProperty)
		  if (ka.length != kb.length)
		    return false;
		  //the same set of keys (although not necessarily the same order),
		  ka.sort();
		  kb.sort();
		  //~~~cheap key test
		  for (i = ka.length - 1; i >= 0; i--) {
		    if (ka[i] != kb[i])
		      return false;
		  }
		  //equivalent values for every corresponding key, and
		  //~~~possibly expensive deep test
		  for (i = ka.length - 1; i >= 0; i--) {
		    key = ka[i];
		    if (!deepEqual(a[key], b[key], opts)) return false;
		  }
		  return typeof a === typeof b;
		}


		/***/ }),
		/* 12 */
		/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", { value: true });
		var Registry = __webpack_require__(1);
		var Attributor = /** @class */ (function () {
		    function Attributor(attrName, keyName, options) {
		        if (options === void 0) { options = {}; }
		        this.attrName = attrName;
		        this.keyName = keyName;
		        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
		        if (options.scope != null) {
		            // Ignore type bits, force attribute bit
		            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
		        }
		        else {
		            this.scope = Registry.Scope.ATTRIBUTE;
		        }
		        if (options.whitelist != null)
		            this.whitelist = options.whitelist;
		    }
		    Attributor.keys = function (node) {
		        return [].map.call(node.attributes, function (item) {
		            return item.name;
		        });
		    };
		    Attributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        node.setAttribute(this.keyName, value);
		        return true;
		    };
		    Attributor.prototype.canAdd = function (node, value) {
		        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
		        if (match == null)
		            return false;
		        if (this.whitelist == null)
		            return true;
		        if (typeof value === 'string') {
		            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
		        }
		        else {
		            return this.whitelist.indexOf(value) > -1;
		        }
		    };
		    Attributor.prototype.remove = function (node) {
		        node.removeAttribute(this.keyName);
		    };
		    Attributor.prototype.value = function (node) {
		        var value = node.getAttribute(this.keyName);
		        if (this.canAdd(node, value) && value) {
		            return value;
		        }
		        return '';
		    };
		    return Attributor;
		}());
		exports.default = Attributor;


		/***/ }),
		/* 13 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.Code = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Code = function (_Inline) {
		  _inherits(Code, _Inline);

		  function Code() {
		    _classCallCheck(this, Code);

		    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
		  }

		  return Code;
		}(_inline2.default);

		Code.blotName = 'code';
		Code.tagName = 'CODE';

		var CodeBlock = function (_Block) {
		  _inherits(CodeBlock, _Block);

		  function CodeBlock() {
		    _classCallCheck(this, CodeBlock);

		    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
		  }

		  _createClass(CodeBlock, [{
		    key: 'delta',
		    value: function delta() {
		      var _this3 = this;

		      var text = this.domNode.textContent;
		      if (text.endsWith('\n')) {
		        // Should always be true
		        text = text.slice(0, -1);
		      }
		      return text.split('\n').reduce(function (delta, frag) {
		        return delta.insert(frag).insert('\n', _this3.formats());
		      }, new _quillDelta2.default());
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      if (name === this.statics.blotName && value) return;

		      var _descendant = this.descendant(_text2.default, this.length() - 1),
		          _descendant2 = _slicedToArray(_descendant, 1),
		          text = _descendant2[0];

		      if (text != null) {
		        text.deleteAt(text.length() - 1, 1);
		      }
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, name, value) {
		      if (length === 0) return;
		      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
		        return;
		      }
		      var nextNewline = this.newlineIndex(index);
		      if (nextNewline < 0 || nextNewline >= index + length) return;
		      var prevNewline = this.newlineIndex(index, true) + 1;
		      var isolateLength = nextNewline - prevNewline + 1;
		      var blot = this.isolate(prevNewline, isolateLength);
		      var next = blot.next;
		      blot.format(name, value);
		      if (next instanceof CodeBlock) {
		        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
		      }
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null) return;

		      var _descendant3 = this.descendant(_text2.default, index),
		          _descendant4 = _slicedToArray(_descendant3, 2),
		          text = _descendant4[0],
		          offset = _descendant4[1];

		      text.insertAt(offset, value);
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      var length = this.domNode.textContent.length;
		      if (!this.domNode.textContent.endsWith('\n')) {
		        return length + 1;
		      }
		      return length;
		    }
		  }, {
		    key: 'newlineIndex',
		    value: function newlineIndex(searchIndex) {
		      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      if (!reverse) {
		        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
		        return offset > -1 ? searchIndex + offset : -1;
		      } else {
		        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize(context) {
		      if (!this.domNode.textContent.endsWith('\n')) {
		        this.appendChild(_parchment2.default.create('text', '\n'));
		      }
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
		      var next = this.next;
		      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
		        next.optimize(context);
		        next.moveChildren(this);
		        next.remove();
		      }
		    }
		  }, {
		    key: 'replace',
		    value: function replace(target) {
		      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
		      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
		        var blot = _parchment2.default.find(node);
		        if (blot == null) {
		          node.parentNode.removeChild(node);
		        } else if (blot instanceof _parchment2.default.Embed) {
		          blot.remove();
		        } else {
		          blot.unwrap();
		        }
		      });
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
		      domNode.setAttribute('spellcheck', false);
		      return domNode;
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      return true;
		    }
		  }]);

		  return CodeBlock;
		}(_block2.default);

		CodeBlock.blotName = 'code-block';
		CodeBlock.tagName = 'PRE';
		CodeBlock.TAB = '  ';

		exports.Code = Code;
		exports.default = CodeBlock;

		/***/ }),
		/* 14 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _op = __webpack_require__(20);

		var _op2 = _interopRequireDefault(_op);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _code = __webpack_require__(13);

		var _code2 = _interopRequireDefault(_code);

		var _cursor = __webpack_require__(24);

		var _cursor2 = _interopRequireDefault(_cursor);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		var _break = __webpack_require__(16);

		var _break2 = _interopRequireDefault(_break);

		var _clone = __webpack_require__(21);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(11);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var ASCII = /^[ -~]*$/;

		var Editor = function () {
		  function Editor(scroll) {
		    _classCallCheck(this, Editor);

		    this.scroll = scroll;
		    this.delta = this.getDelta();
		  }

		  _createClass(Editor, [{
		    key: 'applyDelta',
		    value: function applyDelta(delta) {
		      var _this = this;

		      var consumeNextNewline = false;
		      this.scroll.update();
		      var scrollLength = this.scroll.length();
		      this.scroll.batchStart();
		      delta = normalizeDelta(delta);
		      delta.reduce(function (index, op) {
		        var length = op.retain || op.delete || op.insert.length || 1;
		        var attributes = op.attributes || {};
		        if (op.insert != null) {
		          if (typeof op.insert === 'string') {
		            var text = op.insert;
		            if (text.endsWith('\n') && consumeNextNewline) {
		              consumeNextNewline = false;
		              text = text.slice(0, -1);
		            }
		            if (index >= scrollLength && !text.endsWith('\n')) {
		              consumeNextNewline = true;
		            }
		            _this.scroll.insertAt(index, text);

		            var _scroll$line = _this.scroll.line(index),
		                _scroll$line2 = _slicedToArray(_scroll$line, 2),
		                line = _scroll$line2[0],
		                offset = _scroll$line2[1];

		            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
		            if (line instanceof _block2.default) {
		              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
		                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
		                  leaf = _line$descendant2[0];

		              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
		            }
		            attributes = _op2.default.attributes.diff(formats, attributes) || {};
		          } else if (_typeof(op.insert) === 'object') {
		            var key = Object.keys(op.insert)[0]; // There should only be one key
		            if (key == null) return index;
		            _this.scroll.insertAt(index, key, op.insert[key]);
		          }
		          scrollLength += length;
		        }
		        Object.keys(attributes).forEach(function (name) {
		          _this.scroll.formatAt(index, length, name, attributes[name]);
		        });
		        return index + length;
		      }, 0);
		      delta.reduce(function (index, op) {
		        if (typeof op.delete === 'number') {
		          _this.scroll.deleteAt(index, op.delete);
		          return index;
		        }
		        return index + (op.retain || op.insert.length || 1);
		      }, 0);
		      this.scroll.batchEnd();
		      return this.update(delta);
		    }
		  }, {
		    key: 'deleteText',
		    value: function deleteText(index, length) {
		      this.scroll.deleteAt(index, length);
		      return this.update(new _quillDelta2.default().retain(index).delete(length));
		    }
		  }, {
		    key: 'formatLine',
		    value: function formatLine(index, length) {
		      var _this2 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      this.scroll.update();
		      Object.keys(formats).forEach(function (format) {
		        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
		        var lines = _this2.scroll.lines(index, Math.max(length, 1));
		        var lengthRemaining = length;
		        lines.forEach(function (line) {
		          var lineLength = line.length();
		          if (!(line instanceof _code2.default)) {
		            line.format(format, formats[format]);
		          } else {
		            var codeIndex = index - line.offset(_this2.scroll);
		            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
		            line.formatAt(codeIndex, codeLength, format, formats[format]);
		          }
		          lengthRemaining -= lineLength;
		        });
		      });
		      this.scroll.optimize();
		      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'formatText',
		    value: function formatText(index, length) {
		      var _this3 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      Object.keys(formats).forEach(function (format) {
		        _this3.scroll.formatAt(index, length, format, formats[format]);
		      });
		      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'getContents',
		    value: function getContents(index, length) {
		      return this.delta.slice(index, index + length);
		    }
		  }, {
		    key: 'getDelta',
		    value: function getDelta() {
		      return this.scroll.lines().reduce(function (delta, line) {
		        return delta.concat(line.delta());
		      }, new _quillDelta2.default());
		    }
		  }, {
		    key: 'getFormat',
		    value: function getFormat(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      var lines = [],
		          leaves = [];
		      if (length === 0) {
		        this.scroll.path(index).forEach(function (path) {
		          var _path = _slicedToArray(path, 1),
		              blot = _path[0];

		          if (blot instanceof _block2.default) {
		            lines.push(blot);
		          } else if (blot instanceof _parchment2.default.Leaf) {
		            leaves.push(blot);
		          }
		        });
		      } else {
		        lines = this.scroll.lines(index, length);
		        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
		      }
		      var formatsArr = [lines, leaves].map(function (blots) {
		        if (blots.length === 0) return {};
		        var formats = (0, _block.bubbleFormats)(blots.shift());
		        while (Object.keys(formats).length > 0) {
		          var blot = blots.shift();
		          if (blot == null) return formats;
		          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
		        }
		        return formats;
		      });
		      return _extend2.default.apply(_extend2.default, formatsArr);
		    }
		  }, {
		    key: 'getText',
		    value: function getText(index, length) {
		      return this.getContents(index, length).filter(function (op) {
		        return typeof op.insert === 'string';
		      }).map(function (op) {
		        return op.insert;
		      }).join('');
		    }
		  }, {
		    key: 'insertEmbed',
		    value: function insertEmbed(index, embed, value) {
		      this.scroll.insertAt(index, embed, value);
		      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
		    }
		  }, {
		    key: 'insertText',
		    value: function insertText(index, text) {
		      var _this4 = this;

		      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
		      this.scroll.insertAt(index, text);
		      Object.keys(formats).forEach(function (format) {
		        _this4.scroll.formatAt(index, text.length, format, formats[format]);
		      });
		      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
		    }
		  }, {
		    key: 'isBlank',
		    value: function isBlank() {
		      if (this.scroll.children.length == 0) return true;
		      if (this.scroll.children.length > 1) return false;
		      var block = this.scroll.children.head;
		      if (block.statics.blotName !== _block2.default.blotName) return false;
		      if (block.children.length > 1) return false;
		      return block.children.head instanceof _break2.default;
		    }
		  }, {
		    key: 'removeFormat',
		    value: function removeFormat(index, length) {
		      var text = this.getText(index, length);

		      var _scroll$line3 = this.scroll.line(index + length),
		          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
		          line = _scroll$line4[0],
		          offset = _scroll$line4[1];

		      var suffixLength = 0,
		          suffix = new _quillDelta2.default();
		      if (line != null) {
		        if (!(line instanceof _code2.default)) {
		          suffixLength = line.length() - offset;
		        } else {
		          suffixLength = line.newlineIndex(offset) - offset + 1;
		        }
		        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
		      }
		      var contents = this.getContents(index, length + suffixLength);
		      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
		      var delta = new _quillDelta2.default().retain(index).concat(diff);
		      return this.applyDelta(delta);
		    }
		  }, {
		    key: 'update',
		    value: function update(change) {
		      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

		      var oldDelta = this.delta;
		      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
		        // Optimization for character changes
		        var textBlot = _parchment2.default.find(mutations[0].target);
		        var formats = (0, _block.bubbleFormats)(textBlot);
		        var index = textBlot.offset(this.scroll);
		        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
		        var oldText = new _quillDelta2.default().insert(oldValue);
		        var newText = new _quillDelta2.default().insert(textBlot.value());
		        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
		        change = diffDelta.reduce(function (delta, op) {
		          if (op.insert) {
		            return delta.insert(op.insert, formats);
		          } else {
		            return delta.push(op);
		          }
		        }, new _quillDelta2.default());
		        this.delta = oldDelta.compose(change);
		      } else {
		        this.delta = this.getDelta();
		        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
		          change = oldDelta.diff(this.delta, cursorIndex);
		        }
		      }
		      return change;
		    }
		  }]);

		  return Editor;
		}();

		function combineFormats(formats, combined) {
		  return Object.keys(combined).reduce(function (merged, name) {
		    if (formats[name] == null) return merged;
		    if (combined[name] === formats[name]) {
		      merged[name] = combined[name];
		    } else if (Array.isArray(combined[name])) {
		      if (combined[name].indexOf(formats[name]) < 0) {
		        merged[name] = combined[name].concat([formats[name]]);
		      }
		    } else {
		      merged[name] = [combined[name], formats[name]];
		    }
		    return merged;
		  }, {});
		}

		function normalizeDelta(delta) {
		  return delta.reduce(function (delta, op) {
		    if (op.insert === 1) {
		      var attributes = (0, _clone2.default)(op.attributes);
		      delete attributes['image'];
		      return delta.insert({ image: op.attributes.image }, attributes);
		    }
		    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
		      op = (0, _clone2.default)(op);
		      if (op.attributes.list) {
		        op.attributes.list = 'ordered';
		      } else {
		        op.attributes.list = 'bullet';
		        delete op.attributes.bullet;
		      }
		    }
		    if (typeof op.insert === 'string') {
		      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
		      return delta.insert(text, op.attributes);
		    }
		    return delta.push(op);
		  }, new _quillDelta2.default());
		}

		exports.default = Editor;

		/***/ }),
		/* 15 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.Range = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _clone = __webpack_require__(21);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(11);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _emitter3 = __webpack_require__(8);

		var _emitter4 = _interopRequireDefault(_emitter3);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var debug = (0, _logger2.default)('quill:selection');

		var Range = function Range(index) {
		  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		  _classCallCheck(this, Range);

		  this.index = index;
		  this.length = length;
		};

		var Selection = function () {
		  function Selection(scroll, emitter) {
		    var _this = this;

		    _classCallCheck(this, Selection);

		    this.emitter = emitter;
		    this.scroll = scroll;
		    this.composing = false;
		    this.mouseDown = false;
		    this.root = this.scroll.domNode;
		    this.cursor = _parchment2.default.create('cursor', this);
		    // savedRange is last non-null range
		    this.lastRange = this.savedRange = new Range(0, 0);
		    this.handleComposition();
		    this.handleDragging();
		    this.emitter.listenDOM('selectionchange', document, function () {
		      if (!_this.mouseDown) {
		        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
		      }
		    });
		    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
		      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
		        _this.update(_emitter4.default.sources.SILENT);
		      }
		    });
		    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
		      if (!_this.hasFocus()) return;
		      var native = _this.getNativeRange();
		      if (native == null) return;
		      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
		      // TODO unclear if this has negative side effects
		      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
		        try {
		          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
		        } catch (ignored) {}
		      });
		    });
		    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
		      if (context.range) {
		        var _context$range = context.range,
		            startNode = _context$range.startNode,
		            startOffset = _context$range.startOffset,
		            endNode = _context$range.endNode,
		            endOffset = _context$range.endOffset;

		        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
		      }
		    });
		    this.update(_emitter4.default.sources.SILENT);
		  }

		  _createClass(Selection, [{
		    key: 'handleComposition',
		    value: function handleComposition() {
		      var _this2 = this;

		      this.root.addEventListener('compositionstart', function () {
		        _this2.composing = true;
		      });
		      this.root.addEventListener('compositionend', function () {
		        _this2.composing = false;
		        if (_this2.cursor.parent) {
		          var range = _this2.cursor.restore();
		          if (!range) return;
		          setTimeout(function () {
		            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
		          }, 1);
		        }
		      });
		    }
		  }, {
		    key: 'handleDragging',
		    value: function handleDragging() {
		      var _this3 = this;

		      this.emitter.listenDOM('mousedown', document.body, function () {
		        _this3.mouseDown = true;
		      });
		      this.emitter.listenDOM('mouseup', document.body, function () {
		        _this3.mouseDown = false;
		        _this3.update(_emitter4.default.sources.USER);
		      });
		    }
		  }, {
		    key: 'focus',
		    value: function focus() {
		      if (this.hasFocus()) return;
		      this.root.focus();
		      this.setRange(this.savedRange);
		    }
		  }, {
		    key: 'format',
		    value: function format(_format, value) {
		      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
		      this.scroll.update();
		      var nativeRange = this.getNativeRange();
		      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
		      if (nativeRange.start.node !== this.cursor.textNode) {
		        var blot = _parchment2.default.find(nativeRange.start.node, false);
		        if (blot == null) return;
		        // TODO Give blot ability to not split
		        if (blot instanceof _parchment2.default.Leaf) {
		          var after = blot.split(nativeRange.start.offset);
		          blot.parent.insertBefore(this.cursor, after);
		        } else {
		          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
		        }
		        this.cursor.attach();
		      }
		      this.cursor.format(_format, value);
		      this.scroll.optimize();
		      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
		      this.update();
		    }
		  }, {
		    key: 'getBounds',
		    value: function getBounds(index) {
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		      var scrollLength = this.scroll.length();
		      index = Math.min(index, scrollLength - 1);
		      length = Math.min(index + length, scrollLength - 1) - index;
		      var node = void 0,
		          _scroll$leaf = this.scroll.leaf(index),
		          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
		          leaf = _scroll$leaf2[0],
		          offset = _scroll$leaf2[1];
		      if (leaf == null) return null;

		      var _leaf$position = leaf.position(offset, true);

		      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

		      node = _leaf$position2[0];
		      offset = _leaf$position2[1];

		      var range = document.createRange();
		      if (length > 0) {
		        range.setStart(node, offset);

		        var _scroll$leaf3 = this.scroll.leaf(index + length);

		        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

		        leaf = _scroll$leaf4[0];
		        offset = _scroll$leaf4[1];

		        if (leaf == null) return null;

		        var _leaf$position3 = leaf.position(offset, true);

		        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

		        node = _leaf$position4[0];
		        offset = _leaf$position4[1];

		        range.setEnd(node, offset);
		        return range.getBoundingClientRect();
		      } else {
		        var side = 'left';
		        var rect = void 0;
		        if (node instanceof Text) {
		          if (offset < node.data.length) {
		            range.setStart(node, offset);
		            range.setEnd(node, offset + 1);
		          } else {
		            range.setStart(node, offset - 1);
		            range.setEnd(node, offset);
		            side = 'right';
		          }
		          rect = range.getBoundingClientRect();
		        } else {
		          rect = leaf.domNode.getBoundingClientRect();
		          if (offset > 0) side = 'right';
		        }
		        return {
		          bottom: rect.top + rect.height,
		          height: rect.height,
		          left: rect[side],
		          right: rect[side],
		          top: rect.top,
		          width: 0
		        };
		      }
		    }
		  }, {
		    key: 'getNativeRange',
		    value: function getNativeRange() {
		      var selection = document.getSelection();
		      if (selection == null || selection.rangeCount <= 0) return null;
		      var nativeRange = selection.getRangeAt(0);
		      if (nativeRange == null) return null;
		      var range = this.normalizeNative(nativeRange);
		      debug.info('getNativeRange', range);
		      return range;
		    }
		  }, {
		    key: 'getRange',
		    value: function getRange() {
		      var normalized = this.getNativeRange();
		      if (normalized == null) return [null, null];
		      var range = this.normalizedToRange(normalized);
		      return [range, normalized];
		    }
		  }, {
		    key: 'hasFocus',
		    value: function hasFocus() {
		      return document.activeElement === this.root;
		    }
		  }, {
		    key: 'normalizedToRange',
		    value: function normalizedToRange(range) {
		      var _this4 = this;

		      var positions = [[range.start.node, range.start.offset]];
		      if (!range.native.collapsed) {
		        positions.push([range.end.node, range.end.offset]);
		      }
		      var indexes = positions.map(function (position) {
		        var _position = _slicedToArray(position, 2),
		            node = _position[0],
		            offset = _position[1];

		        var blot = _parchment2.default.find(node, true);
		        var index = blot.offset(_this4.scroll);
		        if (offset === 0) {
		          return index;
		        } else if (blot instanceof _parchment2.default.Container) {
		          return index + blot.length();
		        } else {
		          return index + blot.index(node, offset);
		        }
		      });
		      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
		      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
		      return new Range(start, end - start);
		    }
		  }, {
		    key: 'normalizeNative',
		    value: function normalizeNative(nativeRange) {
		      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
		        return null;
		      }
		      var range = {
		        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
		        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
		        native: nativeRange
		      };
		      [range.start, range.end].forEach(function (position) {
		        var node = position.node,
		            offset = position.offset;
		        while (!(node instanceof Text) && node.childNodes.length > 0) {
		          if (node.childNodes.length > offset) {
		            node = node.childNodes[offset];
		            offset = 0;
		          } else if (node.childNodes.length === offset) {
		            node = node.lastChild;
		            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
		          } else {
		            break;
		          }
		        }
		        position.node = node, position.offset = offset;
		      });
		      return range;
		    }
		  }, {
		    key: 'rangeToNative',
		    value: function rangeToNative(range) {
		      var _this5 = this;

		      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
		      var args = [];
		      var scrollLength = this.scroll.length();
		      indexes.forEach(function (index, i) {
		        index = Math.min(scrollLength - 1, index);
		        var node = void 0,
		            _scroll$leaf5 = _this5.scroll.leaf(index),
		            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
		            leaf = _scroll$leaf6[0],
		            offset = _scroll$leaf6[1];
		        var _leaf$position5 = leaf.position(offset, i !== 0);

		        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

		        node = _leaf$position6[0];
		        offset = _leaf$position6[1];

		        args.push(node, offset);
		      });
		      if (args.length < 2) {
		        args = args.concat(args);
		      }
		      return args;
		    }
		  }, {
		    key: 'scrollIntoView',
		    value: function scrollIntoView(scrollingContainer) {
		      var range = this.lastRange;
		      if (range == null) return;
		      var bounds = this.getBounds(range.index, range.length);
		      if (bounds == null) return;
		      var limit = this.scroll.length() - 1;

		      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
		          _scroll$line2 = _slicedToArray(_scroll$line, 1),
		          first = _scroll$line2[0];

		      var last = first;
		      if (range.length > 0) {
		        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

		        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

		        last = _scroll$line4[0];
		      }
		      if (first == null || last == null) return;
		      var scrollBounds = scrollingContainer.getBoundingClientRect();
		      if (bounds.top < scrollBounds.top) {
		        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
		      } else if (bounds.bottom > scrollBounds.bottom) {
		        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
		      }
		    }
		  }, {
		    key: 'setNativeRange',
		    value: function setNativeRange(startNode, startOffset) {
		      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
		      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
		      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
		      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
		        return;
		      }
		      var selection = document.getSelection();
		      if (selection == null) return;
		      if (startNode != null) {
		        if (!this.hasFocus()) this.root.focus();
		        var native = (this.getNativeRange() || {}).native;
		        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

		          if (startNode.tagName == "BR") {
		            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
		            startNode = startNode.parentNode;
		          }
		          if (endNode.tagName == "BR") {
		            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
		            endNode = endNode.parentNode;
		          }
		          var range = document.createRange();
		          range.setStart(startNode, startOffset);
		          range.setEnd(endNode, endOffset);
		          selection.removeAllRanges();
		          selection.addRange(range);
		        }
		      } else {
		        selection.removeAllRanges();
		        this.root.blur();
		        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
		      }
		    }
		  }, {
		    key: 'setRange',
		    value: function setRange(range) {
		      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

		      if (typeof force === 'string') {
		        source = force;
		        force = false;
		      }
		      debug.info('setRange', range);
		      if (range != null) {
		        var args = this.rangeToNative(range);
		        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
		      } else {
		        this.setNativeRange(null);
		      }
		      this.update(source);
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

		      var oldRange = this.lastRange;

		      var _getRange = this.getRange(),
		          _getRange2 = _slicedToArray(_getRange, 2),
		          lastRange = _getRange2[0],
		          nativeRange = _getRange2[1];

		      this.lastRange = lastRange;
		      if (this.lastRange != null) {
		        this.savedRange = this.lastRange;
		      }
		      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
		        var _emitter;

		        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
		          this.cursor.restore();
		        }
		        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
		        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
		        if (source !== _emitter4.default.sources.SILENT) {
		          var _emitter2;

		          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
		        }
		      }
		    }
		  }]);

		  return Selection;
		}();

		function contains(parent, descendant) {
		  try {
		    // Firefox inserts inaccessible nodes around video elements
		    descendant.parentNode;
		  } catch (e) {
		    return false;
		  }
		  // IE11 has bug with Text nodes
		  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
		  if (descendant instanceof Text) {
		    descendant = descendant.parentNode;
		  }
		  return parent.contains(descendant);
		}

		exports.Range = Range;
		exports.default = Selection;

		/***/ }),
		/* 16 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Break = function (_Parchment$Embed) {
		  _inherits(Break, _Parchment$Embed);

		  function Break() {
		    _classCallCheck(this, Break);

		    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
		  }

		  _createClass(Break, [{
		    key: 'insertInto',
		    value: function insertInto(parent, ref) {
		      if (parent.children.length === 0) {
		        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
		      } else {
		        this.remove();
		      }
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      return 0;
		    }
		  }, {
		    key: 'value',
		    value: function value() {
		      return '';
		    }
		  }], [{
		    key: 'value',
		    value: function value() {
		      return undefined;
		    }
		  }]);

		  return Break;
		}(_parchment2.default.Embed);

		Break.blotName = 'break';
		Break.tagName = 'BR';

		exports.default = Break;

		/***/ }),
		/* 17 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var linked_list_1 = __webpack_require__(44);
		var shadow_1 = __webpack_require__(30);
		var Registry = __webpack_require__(1);
		var ContainerBlot = /** @class */ (function (_super) {
		    __extends(ContainerBlot, _super);
		    function ContainerBlot(domNode) {
		        var _this = _super.call(this, domNode) || this;
		        _this.build();
		        return _this;
		    }
		    ContainerBlot.prototype.appendChild = function (other) {
		        this.insertBefore(other);
		    };
		    ContainerBlot.prototype.attach = function () {
		        _super.prototype.attach.call(this);
		        this.children.forEach(function (child) {
		            child.attach();
		        });
		    };
		    ContainerBlot.prototype.build = function () {
		        var _this = this;
		        this.children = new linked_list_1.default();
		        // Need to be reversed for if DOM nodes already in order
		        [].slice
		            .call(this.domNode.childNodes)
		            .reverse()
		            .forEach(function (node) {
		            try {
		                var child = makeBlot(node);
		                _this.insertBefore(child, _this.children.head || undefined);
		            }
		            catch (err) {
		                if (err instanceof Registry.ParchmentError)
		                    return;
		                else
		                    throw err;
		            }
		        });
		    };
		    ContainerBlot.prototype.deleteAt = function (index, length) {
		        if (index === 0 && length === this.length()) {
		            return this.remove();
		        }
		        this.children.forEachAt(index, length, function (child, offset, length) {
		            child.deleteAt(offset, length);
		        });
		    };
		    ContainerBlot.prototype.descendant = function (criteria, index) {
		        var _a = this.children.find(index), child = _a[0], offset = _a[1];
		        if ((criteria.blotName == null && criteria(child)) ||
		            (criteria.blotName != null && child instanceof criteria)) {
		            return [child, offset];
		        }
		        else if (child instanceof ContainerBlot) {
		            return child.descendant(criteria, offset);
		        }
		        else {
		            return [null, -1];
		        }
		    };
		    ContainerBlot.prototype.descendants = function (criteria, index, length) {
		        if (index === void 0) { index = 0; }
		        if (length === void 0) { length = Number.MAX_VALUE; }
		        var descendants = [];
		        var lengthLeft = length;
		        this.children.forEachAt(index, length, function (child, index, length) {
		            if ((criteria.blotName == null && criteria(child)) ||
		                (criteria.blotName != null && child instanceof criteria)) {
		                descendants.push(child);
		            }
		            if (child instanceof ContainerBlot) {
		                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
		            }
		            lengthLeft -= length;
		        });
		        return descendants;
		    };
		    ContainerBlot.prototype.detach = function () {
		        this.children.forEach(function (child) {
		            child.detach();
		        });
		        _super.prototype.detach.call(this);
		    };
		    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
		        this.children.forEachAt(index, length, function (child, offset, length) {
		            child.formatAt(offset, length, name, value);
		        });
		    };
		    ContainerBlot.prototype.insertAt = function (index, value, def) {
		        var _a = this.children.find(index), child = _a[0], offset = _a[1];
		        if (child) {
		            child.insertAt(offset, value, def);
		        }
		        else {
		            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
		            this.appendChild(blot);
		        }
		    };
		    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
		        if (this.statics.allowedChildren != null &&
		            !this.statics.allowedChildren.some(function (child) {
		                return childBlot instanceof child;
		            })) {
		            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
		        }
		        childBlot.insertInto(this, refBlot);
		    };
		    ContainerBlot.prototype.length = function () {
		        return this.children.reduce(function (memo, child) {
		            return memo + child.length();
		        }, 0);
		    };
		    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
		        this.children.forEach(function (child) {
		            targetParent.insertBefore(child, refNode);
		        });
		    };
		    ContainerBlot.prototype.optimize = function (context) {
		        _super.prototype.optimize.call(this, context);
		        if (this.children.length === 0) {
		            if (this.statics.defaultChild != null) {
		                var child = Registry.create(this.statics.defaultChild);
		                this.appendChild(child);
		                child.optimize(context);
		            }
		            else {
		                this.remove();
		            }
		        }
		    };
		    ContainerBlot.prototype.path = function (index, inclusive) {
		        if (inclusive === void 0) { inclusive = false; }
		        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
		        var position = [[this, index]];
		        if (child instanceof ContainerBlot) {
		            return position.concat(child.path(offset, inclusive));
		        }
		        else if (child != null) {
		            position.push([child, offset]);
		        }
		        return position;
		    };
		    ContainerBlot.prototype.removeChild = function (child) {
		        this.children.remove(child);
		    };
		    ContainerBlot.prototype.replace = function (target) {
		        if (target instanceof ContainerBlot) {
		            target.moveChildren(this);
		        }
		        _super.prototype.replace.call(this, target);
		    };
		    ContainerBlot.prototype.split = function (index, force) {
		        if (force === void 0) { force = false; }
		        if (!force) {
		            if (index === 0)
		                return this;
		            if (index === this.length())
		                return this.next;
		        }
		        var after = this.clone();
		        this.parent.insertBefore(after, this.next);
		        this.children.forEachAt(index, this.length(), function (child, offset, length) {
		            child = child.split(offset, force);
		            after.appendChild(child);
		        });
		        return after;
		    };
		    ContainerBlot.prototype.unwrap = function () {
		        this.moveChildren(this.parent, this.next);
		        this.remove();
		    };
		    ContainerBlot.prototype.update = function (mutations, context) {
		        var _this = this;
		        var addedNodes = [];
		        var removedNodes = [];
		        mutations.forEach(function (mutation) {
		            if (mutation.target === _this.domNode && mutation.type === 'childList') {
		                addedNodes.push.apply(addedNodes, mutation.addedNodes);
		                removedNodes.push.apply(removedNodes, mutation.removedNodes);
		            }
		        });
		        removedNodes.forEach(function (node) {
		            // Check node has actually been removed
		            // One exception is Chrome does not immediately remove IFRAMEs
		            // from DOM but MutationRecord is correct in its reported removal
		            if (node.parentNode != null &&
		                // @ts-ignore
		                node.tagName !== 'IFRAME' &&
		                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
		                return;
		            }
		            var blot = Registry.find(node);
		            if (blot == null)
		                return;
		            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
		                blot.detach();
		            }
		        });
		        addedNodes
		            .filter(function (node) {
		            return node.parentNode == _this.domNode;
		        })
		            .sort(function (a, b) {
		            if (a === b)
		                return 0;
		            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
		                return 1;
		            }
		            return -1;
		        })
		            .forEach(function (node) {
		            var refBlot = null;
		            if (node.nextSibling != null) {
		                refBlot = Registry.find(node.nextSibling);
		            }
		            var blot = makeBlot(node);
		            if (blot.next != refBlot || blot.next == null) {
		                if (blot.parent != null) {
		                    blot.parent.removeChild(_this);
		                }
		                _this.insertBefore(blot, refBlot || undefined);
		            }
		        });
		    };
		    return ContainerBlot;
		}(shadow_1.default));
		function makeBlot(node) {
		    var blot = Registry.find(node);
		    if (blot == null) {
		        try {
		            blot = Registry.create(node);
		        }
		        catch (e) {
		            blot = Registry.create(Registry.Scope.INLINE);
		            [].slice.call(node.childNodes).forEach(function (child) {
		                // @ts-ignore
		                blot.domNode.appendChild(child);
		            });
		            if (node.parentNode) {
		                node.parentNode.replaceChild(blot.domNode, node);
		            }
		            blot.attach();
		        }
		    }
		    return blot;
		}
		exports.default = ContainerBlot;


		/***/ }),
		/* 18 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var attributor_1 = __webpack_require__(12);
		var store_1 = __webpack_require__(31);
		var container_1 = __webpack_require__(17);
		var Registry = __webpack_require__(1);
		var FormatBlot = /** @class */ (function (_super) {
		    __extends(FormatBlot, _super);
		    function FormatBlot(domNode) {
		        var _this = _super.call(this, domNode) || this;
		        _this.attributes = new store_1.default(_this.domNode);
		        return _this;
		    }
		    FormatBlot.formats = function (domNode) {
		        if (typeof this.tagName === 'string') {
		            return true;
		        }
		        else if (Array.isArray(this.tagName)) {
		            return domNode.tagName.toLowerCase();
		        }
		        return undefined;
		    };
		    FormatBlot.prototype.format = function (name, value) {
		        var format = Registry.query(name);
		        if (format instanceof attributor_1.default) {
		            this.attributes.attribute(format, value);
		        }
		        else if (value) {
		            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
		                this.replaceWith(name, value);
		            }
		        }
		    };
		    FormatBlot.prototype.formats = function () {
		        var formats = this.attributes.values();
		        var format = this.statics.formats(this.domNode);
		        if (format != null) {
		            formats[this.statics.blotName] = format;
		        }
		        return formats;
		    };
		    FormatBlot.prototype.replaceWith = function (name, value) {
		        var replacement = _super.prototype.replaceWith.call(this, name, value);
		        this.attributes.copy(replacement);
		        return replacement;
		    };
		    FormatBlot.prototype.update = function (mutations, context) {
		        var _this = this;
		        _super.prototype.update.call(this, mutations, context);
		        if (mutations.some(function (mutation) {
		            return mutation.target === _this.domNode && mutation.type === 'attributes';
		        })) {
		            this.attributes.build();
		        }
		    };
		    FormatBlot.prototype.wrap = function (name, value) {
		        var wrapper = _super.prototype.wrap.call(this, name, value);
		        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
		            this.attributes.move(wrapper);
		        }
		        return wrapper;
		    };
		    return FormatBlot;
		}(container_1.default));
		exports.default = FormatBlot;


		/***/ }),
		/* 19 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var shadow_1 = __webpack_require__(30);
		var Registry = __webpack_require__(1);
		var LeafBlot = /** @class */ (function (_super) {
		    __extends(LeafBlot, _super);
		    function LeafBlot() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    LeafBlot.value = function (domNode) {
		        return true;
		    };
		    LeafBlot.prototype.index = function (node, offset) {
		        if (this.domNode === node ||
		            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
		            return Math.min(offset, 1);
		        }
		        return -1;
		    };
		    LeafBlot.prototype.position = function (index, inclusive) {
		        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
		        if (index > 0)
		            offset += 1;
		        return [this.parent.domNode, offset];
		    };
		    LeafBlot.prototype.value = function () {
		        var _a;
		        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
		    };
		    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
		    return LeafBlot;
		}(shadow_1.default));
		exports.default = LeafBlot;


		/***/ }),
		/* 20 */
		/***/ (function(module, exports, __webpack_require__) {

		var equal = __webpack_require__(11);
		var extend = __webpack_require__(3);


		var lib = {
		  attributes: {
		    compose: function (a, b, keepNull) {
		      if (typeof a !== 'object') a = {};
		      if (typeof b !== 'object') b = {};
		      var attributes = extend(true, {}, b);
		      if (!keepNull) {
		        attributes = Object.keys(attributes).reduce(function (copy, key) {
		          if (attributes[key] != null) {
		            copy[key] = attributes[key];
		          }
		          return copy;
		        }, {});
		      }
		      for (var key in a) {
		        if (a[key] !== undefined && b[key] === undefined) {
		          attributes[key] = a[key];
		        }
		      }
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    },

		    diff: function(a, b) {
		      if (typeof a !== 'object') a = {};
		      if (typeof b !== 'object') b = {};
		      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
		        if (!equal(a[key], b[key])) {
		          attributes[key] = b[key] === undefined ? null : b[key];
		        }
		        return attributes;
		      }, {});
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    },

		    transform: function (a, b, priority) {
		      if (typeof a !== 'object') return b;
		      if (typeof b !== 'object') return undefined;
		      if (!priority) return b;  // b simply overwrites us without priority
		      var attributes = Object.keys(b).reduce(function (attributes, key) {
		        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
		        return attributes;
		      }, {});
		      return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		  },

		  iterator: function (ops) {
		    return new Iterator(ops);
		  },

		  length: function (op) {
		    if (typeof op['delete'] === 'number') {
		      return op['delete'];
		    } else if (typeof op.retain === 'number') {
		      return op.retain;
		    } else {
		      return typeof op.insert === 'string' ? op.insert.length : 1;
		    }
		  }
		};


		function Iterator(ops) {
		  this.ops = ops;
		  this.index = 0;
		  this.offset = 0;
		}
		Iterator.prototype.hasNext = function () {
		  return this.peekLength() < Infinity;
		};

		Iterator.prototype.next = function (length) {
		  if (!length) length = Infinity;
		  var nextOp = this.ops[this.index];
		  if (nextOp) {
		    var offset = this.offset;
		    var opLength = lib.length(nextOp);
		    if (length >= opLength - offset) {
		      length = opLength - offset;
		      this.index += 1;
		      this.offset = 0;
		    } else {
		      this.offset += length;
		    }
		    if (typeof nextOp['delete'] === 'number') {
		      return { 'delete': length };
		    } else {
		      var retOp = {};
		      if (nextOp.attributes) {
		        retOp.attributes = nextOp.attributes;
		      }
		      if (typeof nextOp.retain === 'number') {
		        retOp.retain = length;
		      } else if (typeof nextOp.insert === 'string') {
		        retOp.insert = nextOp.insert.substr(offset, length);
		      } else {
		        // offset should === 0, length should === 1
		        retOp.insert = nextOp.insert;
		      }
		      return retOp;
		    }
		  } else {
		    return { retain: Infinity };
		  }
		};

		Iterator.prototype.peek = function () {
		  return this.ops[this.index];
		};

		Iterator.prototype.peekLength = function () {
		  if (this.ops[this.index]) {
		    // Should never return 0 if our index is being managed correctly
		    return lib.length(this.ops[this.index]) - this.offset;
		  } else {
		    return Infinity;
		  }
		};

		Iterator.prototype.peekType = function () {
		  if (this.ops[this.index]) {
		    if (typeof this.ops[this.index]['delete'] === 'number') {
		      return 'delete';
		    } else if (typeof this.ops[this.index].retain === 'number') {
		      return 'retain';
		    } else {
		      return 'insert';
		    }
		  }
		  return 'retain';
		};

		Iterator.prototype.rest = function () {
		  if (!this.hasNext()) {
		    return [];
		  } else if (this.offset === 0) {
		    return this.ops.slice(this.index);
		  } else {
		    var offset = this.offset;
		    var index = this.index;
		    var next = this.next();
		    var rest = this.ops.slice(this.index);
		    this.offset = offset;
		    this.index = index;
		    return [next].concat(rest);
		  }
		};


		module.exports = lib;


		/***/ }),
		/* 21 */
		/***/ (function(module, exports) {

		var clone = (function() {

		function _instanceof(obj, type) {
		  return type != null && obj instanceof type;
		}

		var nativeMap;
		try {
		  nativeMap = Map;
		} catch(_) {
		  // maybe a reference error because no `Map`. Give it a dummy value that no
		  // value will ever be an instanceof.
		  nativeMap = function() {};
		}

		var nativeSet;
		try {
		  nativeSet = Set;
		} catch(_) {
		  nativeSet = function() {};
		}

		var nativePromise;
		try {
		  nativePromise = Promise;
		} catch(_) {
		  nativePromise = function() {};
		}

		/**
		 * Clones (copies) an Object using deep copying.
		 *
		 * This function supports circular references by default, but if you are certain
		 * there are no circular references in your object, you can save some CPU time
		 * by calling clone(obj, false).
		 *
		 * Caution: if `circular` is false and `parent` contains circular references,
		 * your program may enter an infinite loop and crash.
		 *
		 * @param `parent` - the object to be cloned
		 * @param `circular` - set to true if the object to be cloned may contain
		 *    circular references. (optional - true by default)
		 * @param `depth` - set to a number if the object is only to be cloned to
		 *    a particular depth. (optional - defaults to Infinity)
		 * @param `prototype` - sets the prototype to be used when cloning an object.
		 *    (optional - defaults to parent prototype).
		 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
		 *    should be cloned as well. Non-enumerable properties on the prototype
		 *    chain will be ignored. (optional - false by default)
		*/
		function clone(parent, circular, depth, prototype, includeNonEnumerable) {
		  if (typeof circular === 'object') {
		    depth = circular.depth;
		    prototype = circular.prototype;
		    includeNonEnumerable = circular.includeNonEnumerable;
		    circular = circular.circular;
		  }
		  // maintain two arrays for circular references, where corresponding parents
		  // and children have the same index
		  var allParents = [];
		  var allChildren = [];

		  var useBuffer = typeof Buffer != 'undefined';

		  if (typeof circular == 'undefined')
		    circular = true;

		  if (typeof depth == 'undefined')
		    depth = Infinity;

		  // recurse this function so we don't reset allParents and allChildren
		  function _clone(parent, depth) {
		    // cloning null always returns null
		    if (parent === null)
		      return null;

		    if (depth === 0)
		      return parent;

		    var child;
		    var proto;
		    if (typeof parent != 'object') {
		      return parent;
		    }

		    if (_instanceof(parent, nativeMap)) {
		      child = new nativeMap();
		    } else if (_instanceof(parent, nativeSet)) {
		      child = new nativeSet();
		    } else if (_instanceof(parent, nativePromise)) {
		      child = new nativePromise(function (resolve, reject) {
		        parent.then(function(value) {
		          resolve(_clone(value, depth - 1));
		        }, function(err) {
		          reject(_clone(err, depth - 1));
		        });
		      });
		    } else if (clone.__isArray(parent)) {
		      child = [];
		    } else if (clone.__isRegExp(parent)) {
		      child = new RegExp(parent.source, __getRegExpFlags(parent));
		      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
		    } else if (clone.__isDate(parent)) {
		      child = new Date(parent.getTime());
		    } else if (useBuffer && Buffer.isBuffer(parent)) {
		      if (Buffer.allocUnsafe) {
		        // Node.js >= 4.5.0
		        child = Buffer.allocUnsafe(parent.length);
		      } else {
		        // Older Node.js versions
		        child = new Buffer(parent.length);
		      }
		      parent.copy(child);
		      return child;
		    } else if (_instanceof(parent, Error)) {
		      child = Object.create(parent);
		    } else {
		      if (typeof prototype == 'undefined') {
		        proto = Object.getPrototypeOf(parent);
		        child = Object.create(proto);
		      }
		      else {
		        child = Object.create(prototype);
		        proto = prototype;
		      }
		    }

		    if (circular) {
		      var index = allParents.indexOf(parent);

		      if (index != -1) {
		        return allChildren[index];
		      }
		      allParents.push(parent);
		      allChildren.push(child);
		    }

		    if (_instanceof(parent, nativeMap)) {
		      parent.forEach(function(value, key) {
		        var keyChild = _clone(key, depth - 1);
		        var valueChild = _clone(value, depth - 1);
		        child.set(keyChild, valueChild);
		      });
		    }
		    if (_instanceof(parent, nativeSet)) {
		      parent.forEach(function(value) {
		        var entryChild = _clone(value, depth - 1);
		        child.add(entryChild);
		      });
		    }

		    for (var i in parent) {
		      var attrs;
		      if (proto) {
		        attrs = Object.getOwnPropertyDescriptor(proto, i);
		      }

		      if (attrs && attrs.set == null) {
		        continue;
		      }
		      child[i] = _clone(parent[i], depth - 1);
		    }

		    if (Object.getOwnPropertySymbols) {
		      var symbols = Object.getOwnPropertySymbols(parent);
		      for (var i = 0; i < symbols.length; i++) {
		        // Don't need to worry about cloning a symbol because it is a primitive,
		        // like a number or string.
		        var symbol = symbols[i];
		        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
		        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
		          continue;
		        }
		        child[symbol] = _clone(parent[symbol], depth - 1);
		        if (!descriptor.enumerable) {
		          Object.defineProperty(child, symbol, {
		            enumerable: false
		          });
		        }
		      }
		    }

		    if (includeNonEnumerable) {
		      var allPropertyNames = Object.getOwnPropertyNames(parent);
		      for (var i = 0; i < allPropertyNames.length; i++) {
		        var propertyName = allPropertyNames[i];
		        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
		        if (descriptor && descriptor.enumerable) {
		          continue;
		        }
		        child[propertyName] = _clone(parent[propertyName], depth - 1);
		        Object.defineProperty(child, propertyName, {
		          enumerable: false
		        });
		      }
		    }

		    return child;
		  }

		  return _clone(parent, depth);
		}

		/**
		 * Simple flat clone using prototype, accepts only objects, usefull for property
		 * override on FLAT configuration object (no nested props).
		 *
		 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
		 * works.
		 */
		clone.clonePrototype = function clonePrototype(parent) {
		  if (parent === null)
		    return null;

		  var c = function () {};
		  c.prototype = parent;
		  return new c();
		};

		// private utility functions

		function __objToStr(o) {
		  return Object.prototype.toString.call(o);
		}
		clone.__objToStr = __objToStr;

		function __isDate(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object Date]';
		}
		clone.__isDate = __isDate;

		function __isArray(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object Array]';
		}
		clone.__isArray = __isArray;

		function __isRegExp(o) {
		  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
		}
		clone.__isRegExp = __isRegExp;

		function __getRegExpFlags(re) {
		  var flags = '';
		  if (re.global) flags += 'g';
		  if (re.ignoreCase) flags += 'i';
		  if (re.multiline) flags += 'm';
		  return flags;
		}
		clone.__getRegExpFlags = __getRegExpFlags;

		return clone;
		})();

		if (typeof module === 'object' && module.exports) {
		  module.exports = clone;
		}


		/***/ }),
		/* 22 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _emitter = __webpack_require__(8);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		var _break = __webpack_require__(16);

		var _break2 = _interopRequireDefault(_break);

		var _code = __webpack_require__(13);

		var _code2 = _interopRequireDefault(_code);

		var _container = __webpack_require__(25);

		var _container2 = _interopRequireDefault(_container);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		function isLine(blot) {
		  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
		}

		var Scroll = function (_Parchment$Scroll) {
		  _inherits(Scroll, _Parchment$Scroll);

		  function Scroll(domNode, config) {
		    _classCallCheck(this, Scroll);

		    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

		    _this.emitter = config.emitter;
		    if (Array.isArray(config.whitelist)) {
		      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
		        whitelist[format] = true;
		        return whitelist;
		      }, {});
		    }
		    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
		    _this.domNode.addEventListener('DOMNodeInserted', function () {});
		    _this.optimize();
		    _this.enable();
		    return _this;
		  }

		  _createClass(Scroll, [{
		    key: 'batchStart',
		    value: function batchStart() {
		      this.batch = true;
		    }
		  }, {
		    key: 'batchEnd',
		    value: function batchEnd() {
		      this.batch = false;
		      this.optimize();
		    }
		  }, {
		    key: 'deleteAt',
		    value: function deleteAt(index, length) {
		      var _line = this.line(index),
		          _line2 = _slicedToArray(_line, 2),
		          first = _line2[0],
		          offset = _line2[1];

		      var _line3 = this.line(index + length),
		          _line4 = _slicedToArray(_line3, 1),
		          last = _line4[0];

		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
		      if (last != null && first !== last && offset > 0) {
		        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
		          this.optimize();
		          return;
		        }
		        if (first instanceof _code2.default) {
		          var newlineIndex = first.newlineIndex(first.length(), true);
		          if (newlineIndex > -1) {
		            first = first.split(newlineIndex + 1);
		            if (first === last) {
		              this.optimize();
		              return;
		            }
		          }
		        } else if (last instanceof _code2.default) {
		          var _newlineIndex = last.newlineIndex(0);
		          if (_newlineIndex > -1) {
		            last.split(_newlineIndex + 1);
		          }
		        }
		        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
		        first.moveChildren(last, ref);
		        first.remove();
		      }
		      this.optimize();
		    }
		  }, {
		    key: 'enable',
		    value: function enable() {
		      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		      this.domNode.setAttribute('contenteditable', enabled);
		    }
		  }, {
		    key: 'formatAt',
		    value: function formatAt(index, length, format, value) {
		      if (this.whitelist != null && !this.whitelist[format]) return;
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
		      this.optimize();
		    }
		  }, {
		    key: 'insertAt',
		    value: function insertAt(index, value, def) {
		      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
		      if (index >= this.length()) {
		        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
		          var blot = _parchment2.default.create(this.statics.defaultChild);
		          this.appendChild(blot);
		          if (def == null && value.endsWith('\n')) {
		            value = value.slice(0, -1);
		          }
		          blot.insertAt(0, value, def);
		        } else {
		          var embed = _parchment2.default.create(value, def);
		          this.appendChild(embed);
		        }
		      } else {
		        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
		      }
		      this.optimize();
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
		        var wrapper = _parchment2.default.create(this.statics.defaultChild);
		        wrapper.appendChild(blot);
		        blot = wrapper;
		      }
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
		    }
		  }, {
		    key: 'leaf',
		    value: function leaf(index) {
		      return this.path(index).pop() || [null, -1];
		    }
		  }, {
		    key: 'line',
		    value: function line(index) {
		      if (index === this.length()) {
		        return this.line(index - 1);
		      }
		      return this.descendant(isLine, index);
		    }
		  }, {
		    key: 'lines',
		    value: function lines() {
		      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

		      var getLines = function getLines(blot, index, length) {
		        var lines = [],
		            lengthLeft = length;
		        blot.children.forEachAt(index, length, function (child, index, length) {
		          if (isLine(child)) {
		            lines.push(child);
		          } else if (child instanceof _parchment2.default.Container) {
		            lines = lines.concat(getLines(child, index, lengthLeft));
		          }
		          lengthLeft -= length;
		        });
		        return lines;
		      };
		      return getLines(this, index, length);
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize() {
		      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		      if (this.batch === true) return;
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
		      }
		    }
		  }, {
		    key: 'path',
		    value: function path(index) {
		      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
		    }
		  }, {
		    key: 'update',
		    value: function update(mutations) {
		      if (this.batch === true) return;
		      var source = _emitter2.default.sources.USER;
		      if (typeof mutations === 'string') {
		        source = mutations;
		      }
		      if (!Array.isArray(mutations)) {
		        mutations = this.observer.takeRecords();
		      }
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
		      }
		      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
		      if (mutations.length > 0) {
		        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
		      }
		    }
		  }]);

		  return Scroll;
		}(_parchment2.default.Scroll);

		Scroll.blotName = 'scroll';
		Scroll.className = 'ql-editor';
		Scroll.tagName = 'DIV';
		Scroll.defaultChild = 'block';
		Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

		exports.default = Scroll;

		/***/ }),
		/* 23 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.SHORTKEY = exports.default = undefined;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _clone = __webpack_require__(21);

		var _clone2 = _interopRequireDefault(_clone);

		var _deepEqual = __webpack_require__(11);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _op = __webpack_require__(20);

		var _op2 = _interopRequireDefault(_op);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:keyboard');

		var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

		var Keyboard = function (_Module) {
		  _inherits(Keyboard, _Module);

		  _createClass(Keyboard, null, [{
		    key: 'match',
		    value: function match(evt, binding) {
		      binding = normalize(binding);
		      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
		        return !!binding[key] !== evt[key] && binding[key] !== null;
		      })) {
		        return false;
		      }
		      return binding.key === (evt.which || evt.keyCode);
		    }
		  }]);

		  function Keyboard(quill, options) {
		    _classCallCheck(this, Keyboard);

		    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

		    _this.bindings = {};
		    Object.keys(_this.options.bindings).forEach(function (name) {
		      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
		        return;
		      }
		      if (_this.options.bindings[name]) {
		        _this.addBinding(_this.options.bindings[name]);
		      }
		    });
		    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
		    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
		    if (/Firefox/i.test(navigator.userAgent)) {
		      // Need to handle delete and backspace for Firefox in the general case #1171
		      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
		      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
		    } else {
		      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
		      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
		    }
		    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
		    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
		    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
		    _this.listen();
		    return _this;
		  }

		  _createClass(Keyboard, [{
		    key: 'addBinding',
		    value: function addBinding(key) {
		      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		      var binding = normalize(key);
		      if (binding == null || binding.key == null) {
		        return debug.warn('Attempted to add invalid keyboard binding', binding);
		      }
		      if (typeof context === 'function') {
		        context = { handler: context };
		      }
		      if (typeof handler === 'function') {
		        handler = { handler: handler };
		      }
		      binding = (0, _extend2.default)(binding, context, handler);
		      this.bindings[binding.key] = this.bindings[binding.key] || [];
		      this.bindings[binding.key].push(binding);
		    }
		  }, {
		    key: 'listen',
		    value: function listen() {
		      var _this2 = this;

		      this.quill.root.addEventListener('keydown', function (evt) {
		        if (evt.defaultPrevented) return;
		        var which = evt.which || evt.keyCode;
		        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
		          return Keyboard.match(evt, binding);
		        });
		        if (bindings.length === 0) return;
		        var range = _this2.quill.getSelection();
		        if (range == null || !_this2.quill.hasFocus()) return;

		        var _quill$getLine = _this2.quill.getLine(range.index),
		            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
		            line = _quill$getLine2[0],
		            offset = _quill$getLine2[1];

		        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
		            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
		            leafStart = _quill$getLeaf2[0],
		            offsetStart = _quill$getLeaf2[1];

		        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
		            _ref2 = _slicedToArray(_ref, 2),
		            leafEnd = _ref2[0],
		            offsetEnd = _ref2[1];

		        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
		        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
		        var curContext = {
		          collapsed: range.length === 0,
		          empty: range.length === 0 && line.length() <= 1,
		          format: _this2.quill.getFormat(range),
		          offset: offset,
		          prefix: prefixText,
		          suffix: suffixText
		        };
		        var prevented = bindings.some(function (binding) {
		          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
		          if (binding.empty != null && binding.empty !== curContext.empty) return false;
		          if (binding.offset != null && binding.offset !== curContext.offset) return false;
		          if (Array.isArray(binding.format)) {
		            // any format is present
		            if (binding.format.every(function (name) {
		              return curContext.format[name] == null;
		            })) {
		              return false;
		            }
		          } else if (_typeof(binding.format) === 'object') {
		            // all formats must match
		            if (!Object.keys(binding.format).every(function (name) {
		              if (binding.format[name] === true) return curContext.format[name] != null;
		              if (binding.format[name] === false) return curContext.format[name] == null;
		              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
		            })) {
		              return false;
		            }
		          }
		          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
		          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
		          return binding.handler.call(_this2, range, curContext) !== true;
		        });
		        if (prevented) {
		          evt.preventDefault();
		        }
		      });
		    }
		  }]);

		  return Keyboard;
		}(_module2.default);

		Keyboard.keys = {
		  BACKSPACE: 8,
		  TAB: 9,
		  ENTER: 13,
		  ESCAPE: 27,
		  LEFT: 37,
		  UP: 38,
		  RIGHT: 39,
		  DOWN: 40,
		  DELETE: 46
		};

		Keyboard.DEFAULTS = {
		  bindings: {
		    'bold': makeFormatHandler('bold'),
		    'italic': makeFormatHandler('italic'),
		    'underline': makeFormatHandler('underline'),
		    'indent': {
		      // highlight tab or tab at beginning of list, indent or blockquote
		      key: Keyboard.keys.TAB,
		      format: ['blockquote', 'indent', 'list'],
		      handler: function handler(range, context) {
		        if (context.collapsed && context.offset !== 0) return true;
		        this.quill.format('indent', '+1', _quill2.default.sources.USER);
		      }
		    },
		    'outdent': {
		      key: Keyboard.keys.TAB,
		      shiftKey: true,
		      format: ['blockquote', 'indent', 'list'],
		      // highlight tab or tab at beginning of list, indent or blockquote
		      handler: function handler(range, context) {
		        if (context.collapsed && context.offset !== 0) return true;
		        this.quill.format('indent', '-1', _quill2.default.sources.USER);
		      }
		    },
		    'outdent backspace': {
		      key: Keyboard.keys.BACKSPACE,
		      collapsed: true,
		      shiftKey: null,
		      metaKey: null,
		      ctrlKey: null,
		      altKey: null,
		      format: ['indent', 'list'],
		      offset: 0,
		      handler: function handler(range, context) {
		        if (context.format.indent != null) {
		          this.quill.format('indent', '-1', _quill2.default.sources.USER);
		        } else if (context.format.list != null) {
		          this.quill.format('list', false, _quill2.default.sources.USER);
		        }
		      }
		    },
		    'indent code-block': makeCodeBlockHandler(true),
		    'outdent code-block': makeCodeBlockHandler(false),
		    'remove tab': {
		      key: Keyboard.keys.TAB,
		      shiftKey: true,
		      collapsed: true,
		      prefix: /\t$/,
		      handler: function handler(range) {
		        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
		      }
		    },
		    'tab': {
		      key: Keyboard.keys.TAB,
		      handler: function handler(range) {
		        this.quill.history.cutoff();
		        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
		        this.quill.updateContents(delta, _quill2.default.sources.USER);
		        this.quill.history.cutoff();
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		      }
		    },
		    'list empty enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: ['list'],
		      empty: true,
		      handler: function handler(range, context) {
		        this.quill.format('list', false, _quill2.default.sources.USER);
		        if (context.format.indent) {
		          this.quill.format('indent', false, _quill2.default.sources.USER);
		        }
		      }
		    },
		    'checklist enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: { list: 'checked' },
		      handler: function handler(range) {
		        var _quill$getLine3 = this.quill.getLine(range.index),
		            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
		            line = _quill$getLine4[0],
		            offset = _quill$getLine4[1];

		        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
		        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
		        this.quill.updateContents(delta, _quill2.default.sources.USER);
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		        this.quill.scrollIntoView();
		      }
		    },
		    'header enter': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: ['header'],
		      suffix: /^$/,
		      handler: function handler(range, context) {
		        var _quill$getLine5 = this.quill.getLine(range.index),
		            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
		            line = _quill$getLine6[0],
		            offset = _quill$getLine6[1];

		        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
		        this.quill.updateContents(delta, _quill2.default.sources.USER);
		        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		        this.quill.scrollIntoView();
		      }
		    },
		    'list autofill': {
		      key: ' ',
		      collapsed: true,
		      format: { list: false },
		      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
		      handler: function handler(range, context) {
		        var length = context.prefix.length;

		        var _quill$getLine7 = this.quill.getLine(range.index),
		            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
		            line = _quill$getLine8[0],
		            offset = _quill$getLine8[1];

		        if (offset > length) return true;
		        var value = void 0;
		        switch (context.prefix.trim()) {
		          case '[]':case '[ ]':
		            value = 'unchecked';
		            break;
		          case '[x]':
		            value = 'checked';
		            break;
		          case '-':case '*':
		            value = 'bullet';
		            break;
		          default:
		            value = 'ordered';
		        }
		        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
		        this.quill.history.cutoff();
		        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
		        this.quill.updateContents(delta, _quill2.default.sources.USER);
		        this.quill.history.cutoff();
		        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
		      }
		    },
		    'code exit': {
		      key: Keyboard.keys.ENTER,
		      collapsed: true,
		      format: ['code-block'],
		      prefix: /\n\n$/,
		      suffix: /^\s+$/,
		      handler: function handler(range) {
		        var _quill$getLine9 = this.quill.getLine(range.index),
		            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
		            line = _quill$getLine10[0],
		            offset = _quill$getLine10[1];

		        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
		        this.quill.updateContents(delta, _quill2.default.sources.USER);
		      }
		    },
		    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
		    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
		    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
		    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
		  }
		};

		function makeEmbedArrowHandler(key, shiftKey) {
		  var _ref3;

		  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
		  return _ref3 = {
		    key: key,
		    shiftKey: shiftKey,
		    altKey: null
		  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
		    var index = range.index;
		    if (key === Keyboard.keys.RIGHT) {
		      index += range.length + 1;
		    }

		    var _quill$getLeaf3 = this.quill.getLeaf(index),
		        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
		        leaf = _quill$getLeaf4[0];

		    if (!(leaf instanceof _parchment2.default.Embed)) return true;
		    if (key === Keyboard.keys.LEFT) {
		      if (shiftKey) {
		        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
		      } else {
		        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
		      }
		    } else {
		      if (shiftKey) {
		        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
		      } else {
		        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
		      }
		    }
		    return false;
		  }), _ref3;
		}

		function handleBackspace(range, context) {
		  if (range.index === 0 || this.quill.getLength() <= 1) return;

		  var _quill$getLine11 = this.quill.getLine(range.index),
		      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
		      line = _quill$getLine12[0];

		  var formats = {};
		  if (context.offset === 0) {
		    var _quill$getLine13 = this.quill.getLine(range.index - 1),
		        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
		        prev = _quill$getLine14[0];

		    if (prev != null && prev.length() > 1) {
		      var curFormats = line.formats();
		      var prevFormats = this.quill.getFormat(range.index - 1, 1);
		      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
		    }
		  }
		  // Check for astral symbols
		  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
		  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
		  if (Object.keys(formats).length > 0) {
		    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
		  }
		  this.quill.focus();
		}

		function handleDelete(range, context) {
		  // Check for astral symbols
		  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
		  if (range.index >= this.quill.getLength() - length) return;
		  var formats = {},
		      nextLength = 0;

		  var _quill$getLine15 = this.quill.getLine(range.index),
		      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
		      line = _quill$getLine16[0];

		  if (context.offset >= line.length() - 1) {
		    var _quill$getLine17 = this.quill.getLine(range.index + 1),
		        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
		        next = _quill$getLine18[0];

		    if (next) {
		      var curFormats = line.formats();
		      var nextFormats = this.quill.getFormat(range.index, 1);
		      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
		      nextLength = next.length();
		    }
		  }
		  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
		  if (Object.keys(formats).length > 0) {
		    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
		  }
		}

		function handleDeleteRange(range) {
		  var lines = this.quill.getLines(range);
		  var formats = {};
		  if (lines.length > 1) {
		    var firstFormats = lines[0].formats();
		    var lastFormats = lines[lines.length - 1].formats();
		    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
		  }
		  this.quill.deleteText(range, _quill2.default.sources.USER);
		  if (Object.keys(formats).length > 0) {
		    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
		  }
		  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
		  this.quill.focus();
		}

		function handleEnter(range, context) {
		  var _this3 = this;

		  if (range.length > 0) {
		    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
		  }
		  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
		    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
		      lineFormats[format] = context.format[format];
		    }
		    return lineFormats;
		  }, {});
		  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
		  // Earlier scroll.deleteAt might have messed up our selection,
		  // so insertText's built in selection preservation is not reliable
		  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
		  this.quill.focus();
		  Object.keys(context.format).forEach(function (name) {
		    if (lineFormats[name] != null) return;
		    if (Array.isArray(context.format[name])) return;
		    if (name === 'link') return;
		    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
		  });
		}

		function makeCodeBlockHandler(indent) {
		  return {
		    key: Keyboard.keys.TAB,
		    shiftKey: !indent,
		    format: { 'code-block': true },
		    handler: function handler(range) {
		      var CodeBlock = _parchment2.default.query('code-block');
		      var index = range.index,
		          length = range.length;

		      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
		          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
		          block = _quill$scroll$descend2[0],
		          offset = _quill$scroll$descend2[1];

		      if (block == null) return;
		      var scrollIndex = this.quill.getIndex(block);
		      var start = block.newlineIndex(offset, true) + 1;
		      var end = block.newlineIndex(scrollIndex + offset + length);
		      var lines = block.domNode.textContent.slice(start, end).split('\n');
		      offset = 0;
		      lines.forEach(function (line, i) {
		        if (indent) {
		          block.insertAt(start + offset, CodeBlock.TAB);
		          offset += CodeBlock.TAB.length;
		          if (i === 0) {
		            index += CodeBlock.TAB.length;
		          } else {
		            length += CodeBlock.TAB.length;
		          }
		        } else if (line.startsWith(CodeBlock.TAB)) {
		          block.deleteAt(start + offset, CodeBlock.TAB.length);
		          offset -= CodeBlock.TAB.length;
		          if (i === 0) {
		            index -= CodeBlock.TAB.length;
		          } else {
		            length -= CodeBlock.TAB.length;
		          }
		        }
		        offset += line.length + 1;
		      });
		      this.quill.update(_quill2.default.sources.USER);
		      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
		    }
		  };
		}

		function makeFormatHandler(format) {
		  return {
		    key: format[0].toUpperCase(),
		    shortKey: true,
		    handler: function handler(range, context) {
		      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
		    }
		  };
		}

		function normalize(binding) {
		  if (typeof binding === 'string' || typeof binding === 'number') {
		    return normalize({ key: binding });
		  }
		  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
		    binding = (0, _clone2.default)(binding, false);
		  }
		  if (typeof binding.key === 'string') {
		    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
		      binding.key = Keyboard.keys[binding.key.toUpperCase()];
		    } else if (binding.key.length === 1) {
		      binding.key = binding.key.toUpperCase().charCodeAt(0);
		    } else {
		      return null;
		    }
		  }
		  if (binding.shortKey) {
		    binding[SHORTKEY] = binding.shortKey;
		    delete binding.shortKey;
		  }
		  return binding;
		}

		exports.default = Keyboard;
		exports.SHORTKEY = SHORTKEY;

		/***/ }),
		/* 24 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Cursor = function (_Parchment$Embed) {
		  _inherits(Cursor, _Parchment$Embed);

		  _createClass(Cursor, null, [{
		    key: 'value',
		    value: function value() {
		      return undefined;
		    }
		  }]);

		  function Cursor(domNode, selection) {
		    _classCallCheck(this, Cursor);

		    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

		    _this.selection = selection;
		    _this.textNode = document.createTextNode(Cursor.CONTENTS);
		    _this.domNode.appendChild(_this.textNode);
		    _this._length = 0;
		    return _this;
		  }

		  _createClass(Cursor, [{
		    key: 'detach',
		    value: function detach() {
		      // super.detach() will also clear domNode.__blot
		      if (this.parent != null) this.parent.removeChild(this);
		    }
		  }, {
		    key: 'format',
		    value: function format(name, value) {
		      if (this._length !== 0) {
		        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
		      }
		      var target = this,
		          index = 0;
		      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
		        index += target.offset(target.parent);
		        target = target.parent;
		      }
		      if (target != null) {
		        this._length = Cursor.CONTENTS.length;
		        target.optimize();
		        target.formatAt(index, Cursor.CONTENTS.length, name, value);
		        this._length = 0;
		      }
		    }
		  }, {
		    key: 'index',
		    value: function index(node, offset) {
		      if (node === this.textNode) return 0;
		      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
		    }
		  }, {
		    key: 'length',
		    value: function length() {
		      return this._length;
		    }
		  }, {
		    key: 'position',
		    value: function position() {
		      return [this.textNode, this.textNode.data.length];
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
		      this.parent = null;
		    }
		  }, {
		    key: 'restore',
		    value: function restore() {
		      if (this.selection.composing || this.parent == null) return;
		      var textNode = this.textNode;
		      var range = this.selection.getNativeRange();
		      var restoreText = void 0,
		          start = void 0,
		          end = void 0;
		      if (range != null && range.start.node === textNode && range.end.node === textNode) {
		        var _ref = [textNode, range.start.offset, range.end.offset];
		        restoreText = _ref[0];
		        start = _ref[1];
		        end = _ref[2];
		      }
		      // Link format will insert text outside of anchor tag
		      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
		        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
		      }
		      if (this.textNode.data !== Cursor.CONTENTS) {
		        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
		        if (this.next instanceof _text2.default) {
		          restoreText = this.next.domNode;
		          this.next.insertAt(0, text);
		          this.textNode.data = Cursor.CONTENTS;
		        } else {
		          this.textNode.data = text;
		          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
		          this.textNode = document.createTextNode(Cursor.CONTENTS);
		          this.domNode.appendChild(this.textNode);
		        }
		      }
		      this.remove();
		      if (start != null) {
		        var _map = [start, end].map(function (offset) {
		          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
		        });

		        var _map2 = _slicedToArray(_map, 2);

		        start = _map2[0];
		        end = _map2[1];

		        return {
		          startNode: restoreText,
		          startOffset: start,
		          endNode: restoreText,
		          endOffset: end
		        };
		      }
		    }
		  }, {
		    key: 'update',
		    value: function update(mutations, context) {
		      var _this2 = this;

		      if (mutations.some(function (mutation) {
		        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
		      })) {
		        var range = this.restore();
		        if (range) context.range = range;
		      }
		    }
		  }, {
		    key: 'value',
		    value: function value() {
		      return '';
		    }
		  }]);

		  return Cursor;
		}(_parchment2.default.Embed);

		Cursor.blotName = 'cursor';
		Cursor.className = 'ql-cursor';
		Cursor.tagName = 'span';
		Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


		exports.default = Cursor;

		/***/ }),
		/* 25 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Container = function (_Parchment$Container) {
		  _inherits(Container, _Parchment$Container);

		  function Container() {
		    _classCallCheck(this, Container);

		    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
		  }

		  return Container;
		}(_parchment2.default.Container);

		Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

		exports.default = Container;

		/***/ }),
		/* 26 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ColorAttributor = function (_Parchment$Attributor) {
		  _inherits(ColorAttributor, _Parchment$Attributor);

		  function ColorAttributor() {
		    _classCallCheck(this, ColorAttributor);

		    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
		  }

		  _createClass(ColorAttributor, [{
		    key: 'value',
		    value: function value(domNode) {
		      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
		      if (!value.startsWith('rgb(')) return value;
		      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
		      return '#' + value.split(',').map(function (component) {
		        return ('00' + parseInt(component).toString(16)).slice(-2);
		      }).join('');
		    }
		  }]);

		  return ColorAttributor;
		}(_parchment2.default.Attributor.Style);

		var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
		  scope: _parchment2.default.Scope.INLINE
		});
		var ColorStyle = new ColorAttributor('color', 'color', {
		  scope: _parchment2.default.Scope.INLINE
		});

		exports.ColorAttributor = ColorAttributor;
		exports.ColorClass = ColorClass;
		exports.ColorStyle = ColorStyle;

		/***/ }),
		/* 27 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.sanitize = exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Link = function (_Inline) {
		  _inherits(Link, _Inline);

		  function Link() {
		    _classCallCheck(this, Link);

		    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
		  }

		  _createClass(Link, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
		      value = this.constructor.sanitize(value);
		      this.domNode.setAttribute('href', value);
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
		      value = this.sanitize(value);
		      node.setAttribute('href', value);
		      node.setAttribute('rel', 'noopener noreferrer');
		      node.setAttribute('target', '_blank');
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return domNode.getAttribute('href');
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
		    }
		  }]);

		  return Link;
		}(_inline2.default);

		Link.blotName = 'link';
		Link.tagName = 'A';
		Link.SANITIZED_URL = 'about:blank';
		Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

		function _sanitize(url, protocols) {
		  var anchor = document.createElement('a');
		  anchor.href = url;
		  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
		  return protocols.indexOf(protocol) > -1;
		}

		exports.default = Link;
		exports.sanitize = _sanitize;

		/***/ }),
		/* 28 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _keyboard = __webpack_require__(23);

		var _keyboard2 = _interopRequireDefault(_keyboard);

		var _dropdown = __webpack_require__(107);

		var _dropdown2 = _interopRequireDefault(_dropdown);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var optionsCounter = 0;

		function toggleAriaAttribute(element, attribute) {
		  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
		}

		var Picker = function () {
		  function Picker(select) {
		    var _this = this;

		    _classCallCheck(this, Picker);

		    this.select = select;
		    this.container = document.createElement('span');
		    this.buildPicker();
		    this.select.style.display = 'none';
		    this.select.parentNode.insertBefore(this.container, this.select);

		    this.label.addEventListener('mousedown', function () {
		      _this.togglePicker();
		    });
		    this.label.addEventListener('keydown', function (event) {
		      switch (event.keyCode) {
		        // Allows the "Enter" key to open the picker
		        case _keyboard2.default.keys.ENTER:
		          _this.togglePicker();
		          break;

		        // Allows the "Escape" key to close the picker
		        case _keyboard2.default.keys.ESCAPE:
		          _this.escape();
		          event.preventDefault();
		          break;
		      }
		    });
		    this.select.addEventListener('change', this.update.bind(this));
		  }

		  _createClass(Picker, [{
		    key: 'togglePicker',
		    value: function togglePicker() {
		      this.container.classList.toggle('ql-expanded');
		      // Toggle aria-expanded and aria-hidden to make the picker accessible
		      toggleAriaAttribute(this.label, 'aria-expanded');
		      toggleAriaAttribute(this.options, 'aria-hidden');
		    }
		  }, {
		    key: 'buildItem',
		    value: function buildItem(option) {
		      var _this2 = this;

		      var item = document.createElement('span');
		      item.tabIndex = '0';
		      item.setAttribute('role', 'button');

		      item.classList.add('ql-picker-item');
		      if (option.hasAttribute('value')) {
		        item.setAttribute('data-value', option.getAttribute('value'));
		      }
		      if (option.textContent) {
		        item.setAttribute('data-label', option.textContent);
		      }
		      item.addEventListener('click', function () {
		        _this2.selectItem(item, true);
		      });
		      item.addEventListener('keydown', function (event) {
		        switch (event.keyCode) {
		          // Allows the "Enter" key to select an item
		          case _keyboard2.default.keys.ENTER:
		            _this2.selectItem(item, true);
		            event.preventDefault();
		            break;

		          // Allows the "Escape" key to close the picker
		          case _keyboard2.default.keys.ESCAPE:
		            _this2.escape();
		            event.preventDefault();
		            break;
		        }
		      });

		      return item;
		    }
		  }, {
		    key: 'buildLabel',
		    value: function buildLabel() {
		      var label = document.createElement('span');
		      label.classList.add('ql-picker-label');
		      label.innerHTML = _dropdown2.default;
		      label.tabIndex = '0';
		      label.setAttribute('role', 'button');
		      label.setAttribute('aria-expanded', 'false');
		      this.container.appendChild(label);
		      return label;
		    }
		  }, {
		    key: 'buildOptions',
		    value: function buildOptions() {
		      var _this3 = this;

		      var options = document.createElement('span');
		      options.classList.add('ql-picker-options');

		      // Don't want screen readers to read this until options are visible
		      options.setAttribute('aria-hidden', 'true');
		      options.tabIndex = '-1';

		      // Need a unique id for aria-controls
		      options.id = 'ql-picker-options-' + optionsCounter;
		      optionsCounter += 1;
		      this.label.setAttribute('aria-controls', options.id);

		      this.options = options;

		      [].slice.call(this.select.options).forEach(function (option) {
		        var item = _this3.buildItem(option);
		        options.appendChild(item);
		        if (option.selected === true) {
		          _this3.selectItem(item);
		        }
		      });
		      this.container.appendChild(options);
		    }
		  }, {
		    key: 'buildPicker',
		    value: function buildPicker() {
		      var _this4 = this;

		      [].slice.call(this.select.attributes).forEach(function (item) {
		        _this4.container.setAttribute(item.name, item.value);
		      });
		      this.container.classList.add('ql-picker');
		      this.label = this.buildLabel();
		      this.buildOptions();
		    }
		  }, {
		    key: 'escape',
		    value: function escape() {
		      var _this5 = this;

		      // Close menu and return focus to trigger label
		      this.close();
		      // Need setTimeout for accessibility to ensure that the browser executes
		      // focus on the next process thread and after any DOM content changes
		      setTimeout(function () {
		        return _this5.label.focus();
		      }, 1);
		    }
		  }, {
		    key: 'close',
		    value: function close() {
		      this.container.classList.remove('ql-expanded');
		      this.label.setAttribute('aria-expanded', 'false');
		      this.options.setAttribute('aria-hidden', 'true');
		    }
		  }, {
		    key: 'selectItem',
		    value: function selectItem(item) {
		      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		      var selected = this.container.querySelector('.ql-selected');
		      if (item === selected) return;
		      if (selected != null) {
		        selected.classList.remove('ql-selected');
		      }
		      if (item == null) return;
		      item.classList.add('ql-selected');
		      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
		      if (item.hasAttribute('data-value')) {
		        this.label.setAttribute('data-value', item.getAttribute('data-value'));
		      } else {
		        this.label.removeAttribute('data-value');
		      }
		      if (item.hasAttribute('data-label')) {
		        this.label.setAttribute('data-label', item.getAttribute('data-label'));
		      } else {
		        this.label.removeAttribute('data-label');
		      }
		      if (trigger) {
		        if (typeof Event === 'function') {
		          this.select.dispatchEvent(new Event('change'));
		        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
		          // IE11
		          var event = document.createEvent('Event');
		          event.initEvent('change', true, true);
		          this.select.dispatchEvent(event);
		        }
		        this.close();
		      }
		    }
		  }, {
		    key: 'update',
		    value: function update() {
		      var option = void 0;
		      if (this.select.selectedIndex > -1) {
		        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
		        option = this.select.options[this.select.selectedIndex];
		        this.selectItem(item);
		      } else {
		        this.selectItem(null);
		      }
		      var isActive = option != null && option !== this.select.querySelector('option[selected]');
		      this.label.classList.toggle('ql-active', isActive);
		    }
		  }]);

		  return Picker;
		}();

		exports.default = Picker;

		/***/ }),
		/* 29 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		var _break = __webpack_require__(16);

		var _break2 = _interopRequireDefault(_break);

		var _container = __webpack_require__(25);

		var _container2 = _interopRequireDefault(_container);

		var _cursor = __webpack_require__(24);

		var _cursor2 = _interopRequireDefault(_cursor);

		var _embed = __webpack_require__(35);

		var _embed2 = _interopRequireDefault(_embed);

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		var _scroll = __webpack_require__(22);

		var _scroll2 = _interopRequireDefault(_scroll);

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		var _clipboard = __webpack_require__(55);

		var _clipboard2 = _interopRequireDefault(_clipboard);

		var _history = __webpack_require__(42);

		var _history2 = _interopRequireDefault(_history);

		var _keyboard = __webpack_require__(23);

		var _keyboard2 = _interopRequireDefault(_keyboard);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_quill2.default.register({
		  'blots/block': _block2.default,
		  'blots/block/embed': _block.BlockEmbed,
		  'blots/break': _break2.default,
		  'blots/container': _container2.default,
		  'blots/cursor': _cursor2.default,
		  'blots/embed': _embed2.default,
		  'blots/inline': _inline2.default,
		  'blots/scroll': _scroll2.default,
		  'blots/text': _text2.default,

		  'modules/clipboard': _clipboard2.default,
		  'modules/history': _history2.default,
		  'modules/keyboard': _keyboard2.default
		});

		_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

		exports.default = _quill2.default;

		/***/ }),
		/* 30 */
		/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", { value: true });
		var Registry = __webpack_require__(1);
		var ShadowBlot = /** @class */ (function () {
		    function ShadowBlot(domNode) {
		        this.domNode = domNode;
		        // @ts-ignore
		        this.domNode[Registry.DATA_KEY] = { blot: this };
		    }
		    Object.defineProperty(ShadowBlot.prototype, "statics", {
		        // Hack for accessing inherited static methods
		        get: function () {
		            return this.constructor;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    ShadowBlot.create = function (value) {
		        if (this.tagName == null) {
		            throw new Registry.ParchmentError('Blot definition missing tagName');
		        }
		        var node;
		        if (Array.isArray(this.tagName)) {
		            if (typeof value === 'string') {
		                value = value.toUpperCase();
		                if (parseInt(value).toString() === value) {
		                    value = parseInt(value);
		                }
		            }
		            if (typeof value === 'number') {
		                node = document.createElement(this.tagName[value - 1]);
		            }
		            else if (this.tagName.indexOf(value) > -1) {
		                node = document.createElement(value);
		            }
		            else {
		                node = document.createElement(this.tagName[0]);
		            }
		        }
		        else {
		            node = document.createElement(this.tagName);
		        }
		        if (this.className) {
		            node.classList.add(this.className);
		        }
		        return node;
		    };
		    ShadowBlot.prototype.attach = function () {
		        if (this.parent != null) {
		            this.scroll = this.parent.scroll;
		        }
		    };
		    ShadowBlot.prototype.clone = function () {
		        var domNode = this.domNode.cloneNode(false);
		        return Registry.create(domNode);
		    };
		    ShadowBlot.prototype.detach = function () {
		        if (this.parent != null)
		            this.parent.removeChild(this);
		        // @ts-ignore
		        delete this.domNode[Registry.DATA_KEY];
		    };
		    ShadowBlot.prototype.deleteAt = function (index, length) {
		        var blot = this.isolate(index, length);
		        blot.remove();
		    };
		    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
		        var blot = this.isolate(index, length);
		        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
		            blot.wrap(name, value);
		        }
		        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
		            var parent = Registry.create(this.statics.scope);
		            blot.wrap(parent);
		            parent.format(name, value);
		        }
		    };
		    ShadowBlot.prototype.insertAt = function (index, value, def) {
		        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
		        var ref = this.split(index);
		        this.parent.insertBefore(blot, ref);
		    };
		    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
		        if (refBlot === void 0) { refBlot = null; }
		        if (this.parent != null) {
		            this.parent.children.remove(this);
		        }
		        var refDomNode = null;
		        parentBlot.children.insertBefore(this, refBlot);
		        if (refBlot != null) {
		            refDomNode = refBlot.domNode;
		        }
		        if (this.domNode.parentNode != parentBlot.domNode ||
		            this.domNode.nextSibling != refDomNode) {
		            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
		        }
		        this.parent = parentBlot;
		        this.attach();
		    };
		    ShadowBlot.prototype.isolate = function (index, length) {
		        var target = this.split(index);
		        target.split(length);
		        return target;
		    };
		    ShadowBlot.prototype.length = function () {
		        return 1;
		    };
		    ShadowBlot.prototype.offset = function (root) {
		        if (root === void 0) { root = this.parent; }
		        if (this.parent == null || this == root)
		            return 0;
		        return this.parent.children.offset(this) + this.parent.offset(root);
		    };
		    ShadowBlot.prototype.optimize = function (context) {
		        // TODO clean up once we use WeakMap
		        // @ts-ignore
		        if (this.domNode[Registry.DATA_KEY] != null) {
		            // @ts-ignore
		            delete this.domNode[Registry.DATA_KEY].mutations;
		        }
		    };
		    ShadowBlot.prototype.remove = function () {
		        if (this.domNode.parentNode != null) {
		            this.domNode.parentNode.removeChild(this.domNode);
		        }
		        this.detach();
		    };
		    ShadowBlot.prototype.replace = function (target) {
		        if (target.parent == null)
		            return;
		        target.parent.insertBefore(this, target.next);
		        target.remove();
		    };
		    ShadowBlot.prototype.replaceWith = function (name, value) {
		        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
		        replacement.replace(this);
		        return replacement;
		    };
		    ShadowBlot.prototype.split = function (index, force) {
		        return index === 0 ? this : this.next;
		    };
		    ShadowBlot.prototype.update = function (mutations, context) {
		        // Nothing to do by default
		    };
		    ShadowBlot.prototype.wrap = function (name, value) {
		        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
		        if (this.parent != null) {
		            this.parent.insertBefore(wrapper, this.next);
		        }
		        wrapper.appendChild(this);
		        return wrapper;
		    };
		    ShadowBlot.blotName = 'abstract';
		    return ShadowBlot;
		}());
		exports.default = ShadowBlot;


		/***/ }),
		/* 31 */
		/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", { value: true });
		var attributor_1 = __webpack_require__(12);
		var class_1 = __webpack_require__(32);
		var style_1 = __webpack_require__(33);
		var Registry = __webpack_require__(1);
		var AttributorStore = /** @class */ (function () {
		    function AttributorStore(domNode) {
		        this.attributes = {};
		        this.domNode = domNode;
		        this.build();
		    }
		    AttributorStore.prototype.attribute = function (attribute, value) {
		        // verb
		        if (value) {
		            if (attribute.add(this.domNode, value)) {
		                if (attribute.value(this.domNode) != null) {
		                    this.attributes[attribute.attrName] = attribute;
		                }
		                else {
		                    delete this.attributes[attribute.attrName];
		                }
		            }
		        }
		        else {
		            attribute.remove(this.domNode);
		            delete this.attributes[attribute.attrName];
		        }
		    };
		    AttributorStore.prototype.build = function () {
		        var _this = this;
		        this.attributes = {};
		        var attributes = attributor_1.default.keys(this.domNode);
		        var classes = class_1.default.keys(this.domNode);
		        var styles = style_1.default.keys(this.domNode);
		        attributes
		            .concat(classes)
		            .concat(styles)
		            .forEach(function (name) {
		            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
		            if (attr instanceof attributor_1.default) {
		                _this.attributes[attr.attrName] = attr;
		            }
		        });
		    };
		    AttributorStore.prototype.copy = function (target) {
		        var _this = this;
		        Object.keys(this.attributes).forEach(function (key) {
		            var value = _this.attributes[key].value(_this.domNode);
		            target.format(key, value);
		        });
		    };
		    AttributorStore.prototype.move = function (target) {
		        var _this = this;
		        this.copy(target);
		        Object.keys(this.attributes).forEach(function (key) {
		            _this.attributes[key].remove(_this.domNode);
		        });
		        this.attributes = {};
		    };
		    AttributorStore.prototype.values = function () {
		        var _this = this;
		        return Object.keys(this.attributes).reduce(function (attributes, name) {
		            attributes[name] = _this.attributes[name].value(_this.domNode);
		            return attributes;
		        }, {});
		    };
		    return AttributorStore;
		}());
		exports.default = AttributorStore;


		/***/ }),
		/* 32 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var attributor_1 = __webpack_require__(12);
		function match(node, prefix) {
		    var className = node.getAttribute('class') || '';
		    return className.split(/\s+/).filter(function (name) {
		        return name.indexOf(prefix + "-") === 0;
		    });
		}
		var ClassAttributor = /** @class */ (function (_super) {
		    __extends(ClassAttributor, _super);
		    function ClassAttributor() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    ClassAttributor.keys = function (node) {
		        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
		            return name
		                .split('-')
		                .slice(0, -1)
		                .join('-');
		        });
		    };
		    ClassAttributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        this.remove(node);
		        node.classList.add(this.keyName + "-" + value);
		        return true;
		    };
		    ClassAttributor.prototype.remove = function (node) {
		        var matches = match(node, this.keyName);
		        matches.forEach(function (name) {
		            node.classList.remove(name);
		        });
		        if (node.classList.length === 0) {
		            node.removeAttribute('class');
		        }
		    };
		    ClassAttributor.prototype.value = function (node) {
		        var result = match(node, this.keyName)[0] || '';
		        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
		        return this.canAdd(node, value) ? value : '';
		    };
		    return ClassAttributor;
		}(attributor_1.default));
		exports.default = ClassAttributor;


		/***/ }),
		/* 33 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var attributor_1 = __webpack_require__(12);
		function camelize(name) {
		    var parts = name.split('-');
		    var rest = parts
		        .slice(1)
		        .map(function (part) {
		        return part[0].toUpperCase() + part.slice(1);
		    })
		        .join('');
		    return parts[0] + rest;
		}
		var StyleAttributor = /** @class */ (function (_super) {
		    __extends(StyleAttributor, _super);
		    function StyleAttributor() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    StyleAttributor.keys = function (node) {
		        return (node.getAttribute('style') || '').split(';').map(function (value) {
		            var arr = value.split(':');
		            return arr[0].trim();
		        });
		    };
		    StyleAttributor.prototype.add = function (node, value) {
		        if (!this.canAdd(node, value))
		            return false;
		        // @ts-ignore
		        node.style[camelize(this.keyName)] = value;
		        return true;
		    };
		    StyleAttributor.prototype.remove = function (node) {
		        // @ts-ignore
		        node.style[camelize(this.keyName)] = '';
		        if (!node.getAttribute('style')) {
		            node.removeAttribute('style');
		        }
		    };
		    StyleAttributor.prototype.value = function (node) {
		        // @ts-ignore
		        var value = node.style[camelize(this.keyName)];
		        return this.canAdd(node, value) ? value : '';
		    };
		    return StyleAttributor;
		}(attributor_1.default));
		exports.default = StyleAttributor;


		/***/ }),
		/* 34 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Theme = function () {
		  function Theme(quill, options) {
		    _classCallCheck(this, Theme);

		    this.quill = quill;
		    this.options = options;
		    this.modules = {};
		  }

		  _createClass(Theme, [{
		    key: 'init',
		    value: function init() {
		      var _this = this;

		      Object.keys(this.options.modules).forEach(function (name) {
		        if (_this.modules[name] == null) {
		          _this.addModule(name);
		        }
		      });
		    }
		  }, {
		    key: 'addModule',
		    value: function addModule(name) {
		      var moduleClass = this.quill.constructor.import('modules/' + name);
		      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
		      return this.modules[name];
		    }
		  }]);

		  return Theme;
		}();

		Theme.DEFAULTS = {
		  modules: {}
		};
		Theme.themes = {
		  'default': Theme
		};

		exports.default = Theme;

		/***/ }),
		/* 35 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _text = __webpack_require__(7);

		var _text2 = _interopRequireDefault(_text);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var GUARD_TEXT = '\uFEFF';

		var Embed = function (_Parchment$Embed) {
		  _inherits(Embed, _Parchment$Embed);

		  function Embed(node) {
		    _classCallCheck(this, Embed);

		    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

		    _this.contentNode = document.createElement('span');
		    _this.contentNode.setAttribute('contenteditable', false);
		    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
		      _this.contentNode.appendChild(childNode);
		    });
		    _this.leftGuard = document.createTextNode(GUARD_TEXT);
		    _this.rightGuard = document.createTextNode(GUARD_TEXT);
		    _this.domNode.appendChild(_this.leftGuard);
		    _this.domNode.appendChild(_this.contentNode);
		    _this.domNode.appendChild(_this.rightGuard);
		    return _this;
		  }

		  _createClass(Embed, [{
		    key: 'index',
		    value: function index(node, offset) {
		      if (node === this.leftGuard) return 0;
		      if (node === this.rightGuard) return 1;
		      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
		    }
		  }, {
		    key: 'restore',
		    value: function restore(node) {
		      var range = void 0,
		          textNode = void 0;
		      var text = node.data.split(GUARD_TEXT).join('');
		      if (node === this.leftGuard) {
		        if (this.prev instanceof _text2.default) {
		          var prevLength = this.prev.length();
		          this.prev.insertAt(prevLength, text);
		          range = {
		            startNode: this.prev.domNode,
		            startOffset: prevLength + text.length
		          };
		        } else {
		          textNode = document.createTextNode(text);
		          this.parent.insertBefore(_parchment2.default.create(textNode), this);
		          range = {
		            startNode: textNode,
		            startOffset: text.length
		          };
		        }
		      } else if (node === this.rightGuard) {
		        if (this.next instanceof _text2.default) {
		          this.next.insertAt(0, text);
		          range = {
		            startNode: this.next.domNode,
		            startOffset: text.length
		          };
		        } else {
		          textNode = document.createTextNode(text);
		          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
		          range = {
		            startNode: textNode,
		            startOffset: text.length
		          };
		        }
		      }
		      node.data = GUARD_TEXT;
		      return range;
		    }
		  }, {
		    key: 'update',
		    value: function update(mutations, context) {
		      var _this2 = this;

		      mutations.forEach(function (mutation) {
		        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
		          var range = _this2.restore(mutation.target);
		          if (range) context.range = range;
		        }
		      });
		    }
		  }]);

		  return Embed;
		}(_parchment2.default.Embed);

		exports.default = Embed;

		/***/ }),
		/* 36 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var config = {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: ['right', 'center', 'justify']
		};

		var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
		var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
		var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

		exports.AlignAttribute = AlignAttribute;
		exports.AlignClass = AlignClass;
		exports.AlignStyle = AlignStyle;

		/***/ }),
		/* 37 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.BackgroundStyle = exports.BackgroundClass = undefined;

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _color = __webpack_require__(26);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
		  scope: _parchment2.default.Scope.INLINE
		});
		var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
		  scope: _parchment2.default.Scope.INLINE
		});

		exports.BackgroundClass = BackgroundClass;
		exports.BackgroundStyle = BackgroundStyle;

		/***/ }),
		/* 38 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var config = {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: ['rtl']
		};

		var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
		var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
		var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

		exports.DirectionAttribute = DirectionAttribute;
		exports.DirectionClass = DirectionClass;
		exports.DirectionStyle = DirectionStyle;

		/***/ }),
		/* 39 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.FontClass = exports.FontStyle = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var config = {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['serif', 'monospace']
		};

		var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

		var FontStyleAttributor = function (_Parchment$Attributor) {
		  _inherits(FontStyleAttributor, _Parchment$Attributor);

		  function FontStyleAttributor() {
		    _classCallCheck(this, FontStyleAttributor);

		    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
		  }

		  _createClass(FontStyleAttributor, [{
		    key: 'value',
		    value: function value(node) {
		      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
		    }
		  }]);

		  return FontStyleAttributor;
		}(_parchment2.default.Attributor.Style);

		var FontStyle = new FontStyleAttributor('font', 'font-family', config);

		exports.FontStyle = FontStyle;
		exports.FontClass = FontClass;

		/***/ }),
		/* 40 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.SizeStyle = exports.SizeClass = undefined;

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['small', 'large', 'huge']
		});
		var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
		  scope: _parchment2.default.Scope.INLINE,
		  whitelist: ['10px', '18px', '32px']
		});

		exports.SizeClass = SizeClass;
		exports.SizeStyle = SizeStyle;

		/***/ }),
		/* 41 */
		/***/ (function(module, exports, __webpack_require__) {


		module.exports = {
		  'align': {
		    '': __webpack_require__(76),
		    'center': __webpack_require__(77),
		    'right': __webpack_require__(78),
		    'justify': __webpack_require__(79)
		  },
		  'background': __webpack_require__(80),
		  'blockquote': __webpack_require__(81),
		  'bold': __webpack_require__(82),
		  'clean': __webpack_require__(83),
		  'code': __webpack_require__(58),
		  'code-block': __webpack_require__(58),
		  'color': __webpack_require__(84),
		  'direction': {
		    '': __webpack_require__(85),
		    'rtl': __webpack_require__(86)
		  },
		  'float': {
		    'center': __webpack_require__(87),
		    'full': __webpack_require__(88),
		    'left': __webpack_require__(89),
		    'right': __webpack_require__(90)
		  },
		  'formula': __webpack_require__(91),
		  'header': {
		    '1': __webpack_require__(92),
		    '2': __webpack_require__(93)
		  },
		  'italic': __webpack_require__(94),
		  'image': __webpack_require__(95),
		  'indent': {
		    '+1': __webpack_require__(96),
		    '-1': __webpack_require__(97)
		  },
		  'link': __webpack_require__(98),
		  'list': {
		    'ordered': __webpack_require__(99),
		    'bullet': __webpack_require__(100),
		    'check': __webpack_require__(101)
		  },
		  'script': {
		    'sub': __webpack_require__(102),
		    'super': __webpack_require__(103)
		  },
		  'strike': __webpack_require__(104),
		  'underline': __webpack_require__(105),
		  'video': __webpack_require__(106)
		};

		/***/ }),
		/* 42 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getLastChangeIndex = exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var History = function (_Module) {
		  _inherits(History, _Module);

		  function History(quill, options) {
		    _classCallCheck(this, History);

		    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

		    _this.lastRecorded = 0;
		    _this.ignoreChange = false;
		    _this.clear();
		    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
		      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
		      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
		        _this.record(delta, oldDelta);
		      } else {
		        _this.transform(delta);
		      }
		    });
		    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
		    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
		    if (/Win/i.test(navigator.platform)) {
		      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
		    }
		    return _this;
		  }

		  _createClass(History, [{
		    key: 'change',
		    value: function change(source, dest) {
		      if (this.stack[source].length === 0) return;
		      var delta = this.stack[source].pop();
		      this.stack[dest].push(delta);
		      this.lastRecorded = 0;
		      this.ignoreChange = true;
		      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
		      this.ignoreChange = false;
		      var index = getLastChangeIndex(delta[source]);
		      this.quill.setSelection(index);
		    }
		  }, {
		    key: 'clear',
		    value: function clear() {
		      this.stack = { undo: [], redo: [] };
		    }
		  }, {
		    key: 'cutoff',
		    value: function cutoff() {
		      this.lastRecorded = 0;
		    }
		  }, {
		    key: 'record',
		    value: function record(changeDelta, oldDelta) {
		      if (changeDelta.ops.length === 0) return;
		      this.stack.redo = [];
		      var undoDelta = this.quill.getContents().diff(oldDelta);
		      var timestamp = Date.now();
		      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
		        var delta = this.stack.undo.pop();
		        undoDelta = undoDelta.compose(delta.undo);
		        changeDelta = delta.redo.compose(changeDelta);
		      } else {
		        this.lastRecorded = timestamp;
		      }
		      this.stack.undo.push({
		        redo: changeDelta,
		        undo: undoDelta
		      });
		      if (this.stack.undo.length > this.options.maxStack) {
		        this.stack.undo.shift();
		      }
		    }
		  }, {
		    key: 'redo',
		    value: function redo() {
		      this.change('redo', 'undo');
		    }
		  }, {
		    key: 'transform',
		    value: function transform(delta) {
		      this.stack.undo.forEach(function (change) {
		        change.undo = delta.transform(change.undo, true);
		        change.redo = delta.transform(change.redo, true);
		      });
		      this.stack.redo.forEach(function (change) {
		        change.undo = delta.transform(change.undo, true);
		        change.redo = delta.transform(change.redo, true);
		      });
		    }
		  }, {
		    key: 'undo',
		    value: function undo() {
		      this.change('undo', 'redo');
		    }
		  }]);

		  return History;
		}(_module2.default);

		History.DEFAULTS = {
		  delay: 1000,
		  maxStack: 100,
		  userOnly: false
		};

		function endsWithNewlineChange(delta) {
		  var lastOp = delta.ops[delta.ops.length - 1];
		  if (lastOp == null) return false;
		  if (lastOp.insert != null) {
		    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
		  }
		  if (lastOp.attributes != null) {
		    return Object.keys(lastOp.attributes).some(function (attr) {
		      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
		    });
		  }
		  return false;
		}

		function getLastChangeIndex(delta) {
		  var deleteLength = delta.reduce(function (length, op) {
		    length += op.delete || 0;
		    return length;
		  }, 0);
		  var changeIndex = delta.length() - deleteLength;
		  if (endsWithNewlineChange(delta)) {
		    changeIndex -= 1;
		  }
		  return changeIndex;
		}

		exports.default = History;
		exports.getLastChangeIndex = getLastChangeIndex;

		/***/ }),
		/* 43 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BaseTooltip = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _emitter = __webpack_require__(8);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _keyboard = __webpack_require__(23);

		var _keyboard2 = _interopRequireDefault(_keyboard);

		var _theme = __webpack_require__(34);

		var _theme2 = _interopRequireDefault(_theme);

		var _colorPicker = __webpack_require__(59);

		var _colorPicker2 = _interopRequireDefault(_colorPicker);

		var _iconPicker = __webpack_require__(60);

		var _iconPicker2 = _interopRequireDefault(_iconPicker);

		var _picker = __webpack_require__(28);

		var _picker2 = _interopRequireDefault(_picker);

		var _tooltip = __webpack_require__(61);

		var _tooltip2 = _interopRequireDefault(_tooltip);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ALIGNS = [false, 'center', 'right', 'justify'];

		var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

		var FONTS = [false, 'serif', 'monospace'];

		var HEADERS = ['1', '2', '3', false];

		var SIZES = ['small', false, 'large', 'huge'];

		var BaseTheme = function (_Theme) {
		  _inherits(BaseTheme, _Theme);

		  function BaseTheme(quill, options) {
		    _classCallCheck(this, BaseTheme);

		    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

		    var listener = function listener(e) {
		      if (!document.body.contains(quill.root)) {
		        return document.body.removeEventListener('click', listener);
		      }
		      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
		        _this.tooltip.hide();
		      }
		      if (_this.pickers != null) {
		        _this.pickers.forEach(function (picker) {
		          if (!picker.container.contains(e.target)) {
		            picker.close();
		          }
		        });
		      }
		    };
		    quill.emitter.listenDOM('click', document.body, listener);
		    return _this;
		  }

		  _createClass(BaseTheme, [{
		    key: 'addModule',
		    value: function addModule(name) {
		      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
		      if (name === 'toolbar') {
		        this.extendToolbar(module);
		      }
		      return module;
		    }
		  }, {
		    key: 'buildButtons',
		    value: function buildButtons(buttons, icons) {
		      buttons.forEach(function (button) {
		        var className = button.getAttribute('class') || '';
		        className.split(/\s+/).forEach(function (name) {
		          if (!name.startsWith('ql-')) return;
		          name = name.slice('ql-'.length);
		          if (icons[name] == null) return;
		          if (name === 'direction') {
		            button.innerHTML = icons[name][''] + icons[name]['rtl'];
		          } else if (typeof icons[name] === 'string') {
		            button.innerHTML = icons[name];
		          } else {
		            var value = button.value || '';
		            if (value != null && icons[name][value]) {
		              button.innerHTML = icons[name][value];
		            }
		          }
		        });
		      });
		    }
		  }, {
		    key: 'buildPickers',
		    value: function buildPickers(selects, icons) {
		      var _this2 = this;

		      this.pickers = selects.map(function (select) {
		        if (select.classList.contains('ql-align')) {
		          if (select.querySelector('option') == null) {
		            fillSelect(select, ALIGNS);
		          }
		          return new _iconPicker2.default(select, icons.align);
		        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
		          var format = select.classList.contains('ql-background') ? 'background' : 'color';
		          if (select.querySelector('option') == null) {
		            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
		          }
		          return new _colorPicker2.default(select, icons[format]);
		        } else {
		          if (select.querySelector('option') == null) {
		            if (select.classList.contains('ql-font')) {
		              fillSelect(select, FONTS);
		            } else if (select.classList.contains('ql-header')) {
		              fillSelect(select, HEADERS);
		            } else if (select.classList.contains('ql-size')) {
		              fillSelect(select, SIZES);
		            }
		          }
		          return new _picker2.default(select);
		        }
		      });
		      var update = function update() {
		        _this2.pickers.forEach(function (picker) {
		          picker.update();
		        });
		      };
		      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
		    }
		  }]);

		  return BaseTheme;
		}(_theme2.default);

		BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        formula: function formula() {
		          this.quill.theme.tooltip.edit('formula');
		        },
		        image: function image() {
		          var _this3 = this;

		          var fileInput = this.container.querySelector('input.ql-image[type=file]');
		          if (fileInput == null) {
		            fileInput = document.createElement('input');
		            fileInput.setAttribute('type', 'file');
		            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
		            fileInput.classList.add('ql-image');
		            fileInput.addEventListener('change', function () {
		              if (fileInput.files != null && fileInput.files[0] != null) {
		                var reader = new FileReader();
		                reader.onload = function (e) {
		                  var range = _this3.quill.getSelection(true);
		                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
		                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
		                  fileInput.value = "";
		                };
		                reader.readAsDataURL(fileInput.files[0]);
		              }
		            });
		            this.container.appendChild(fileInput);
		          }
		          fileInput.click();
		        },
		        video: function video() {
		          this.quill.theme.tooltip.edit('video');
		        }
		      }
		    }
		  }
		});

		var BaseTooltip = function (_Tooltip) {
		  _inherits(BaseTooltip, _Tooltip);

		  function BaseTooltip(quill, boundsContainer) {
		    _classCallCheck(this, BaseTooltip);

		    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

		    _this4.textbox = _this4.root.querySelector('input[type="text"]');
		    _this4.listen();
		    return _this4;
		  }

		  _createClass(BaseTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this5 = this;

		      this.textbox.addEventListener('keydown', function (event) {
		        if (_keyboard2.default.match(event, 'enter')) {
		          _this5.save();
		          event.preventDefault();
		        } else if (_keyboard2.default.match(event, 'escape')) {
		          _this5.cancel();
		          event.preventDefault();
		        }
		      });
		    }
		  }, {
		    key: 'cancel',
		    value: function cancel() {
		      this.hide();
		    }
		  }, {
		    key: 'edit',
		    value: function edit() {
		      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
		      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		      this.root.classList.remove('ql-hidden');
		      this.root.classList.add('ql-editing');
		      if (preview != null) {
		        this.textbox.value = preview;
		      } else if (mode !== this.root.getAttribute('data-mode')) {
		        this.textbox.value = '';
		      }
		      this.position(this.quill.getBounds(this.quill.selection.savedRange));
		      this.textbox.select();
		      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
		      this.root.setAttribute('data-mode', mode);
		    }
		  }, {
		    key: 'restoreFocus',
		    value: function restoreFocus() {
		      var scrollTop = this.quill.scrollingContainer.scrollTop;
		      this.quill.focus();
		      this.quill.scrollingContainer.scrollTop = scrollTop;
		    }
		  }, {
		    key: 'save',
		    value: function save() {
		      var value = this.textbox.value;
		      switch (this.root.getAttribute('data-mode')) {
		        case 'link':
		          {
		            var scrollTop = this.quill.root.scrollTop;
		            if (this.linkRange) {
		              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
		              delete this.linkRange;
		            } else {
		              this.restoreFocus();
		              this.quill.format('link', value, _emitter2.default.sources.USER);
		            }
		            this.quill.root.scrollTop = scrollTop;
		            break;
		          }
		        case 'video':
		          {
		            value = extractVideoUrl(value);
		          } // eslint-disable-next-line no-fallthrough
		        case 'formula':
		          {
		            if (!value) break;
		            var range = this.quill.getSelection(true);
		            if (range != null) {
		              var index = range.index + range.length;
		              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
		              if (this.root.getAttribute('data-mode') === 'formula') {
		                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
		              }
		              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
		            }
		            break;
		          }
		      }
		      this.textbox.value = '';
		      this.hide();
		    }
		  }]);

		  return BaseTooltip;
		}(_tooltip2.default);

		function extractVideoUrl(url) {
		  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
		  if (match) {
		    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
		  }
		  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
		    // eslint-disable-line no-cond-assign
		    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
		  }
		  return url;
		}

		function fillSelect(select, values) {
		  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		  values.forEach(function (value) {
		    var option = document.createElement('option');
		    if (value === defaultValue) {
		      option.setAttribute('selected', 'selected');
		    } else {
		      option.setAttribute('value', value);
		    }
		    select.appendChild(option);
		  });
		}

		exports.BaseTooltip = BaseTooltip;
		exports.default = BaseTheme;

		/***/ }),
		/* 44 */
		/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", { value: true });
		var LinkedList = /** @class */ (function () {
		    function LinkedList() {
		        this.head = this.tail = null;
		        this.length = 0;
		    }
		    LinkedList.prototype.append = function () {
		        var nodes = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            nodes[_i] = arguments[_i];
		        }
		        this.insertBefore(nodes[0], null);
		        if (nodes.length > 1) {
		            this.append.apply(this, nodes.slice(1));
		        }
		    };
		    LinkedList.prototype.contains = function (node) {
		        var cur, next = this.iterator();
		        while ((cur = next())) {
		            if (cur === node)
		                return true;
		        }
		        return false;
		    };
		    LinkedList.prototype.insertBefore = function (node, refNode) {
		        if (!node)
		            return;
		        node.next = refNode;
		        if (refNode != null) {
		            node.prev = refNode.prev;
		            if (refNode.prev != null) {
		                refNode.prev.next = node;
		            }
		            refNode.prev = node;
		            if (refNode === this.head) {
		                this.head = node;
		            }
		        }
		        else if (this.tail != null) {
		            this.tail.next = node;
		            node.prev = this.tail;
		            this.tail = node;
		        }
		        else {
		            node.prev = null;
		            this.head = this.tail = node;
		        }
		        this.length += 1;
		    };
		    LinkedList.prototype.offset = function (target) {
		        var index = 0, cur = this.head;
		        while (cur != null) {
		            if (cur === target)
		                return index;
		            index += cur.length();
		            cur = cur.next;
		        }
		        return -1;
		    };
		    LinkedList.prototype.remove = function (node) {
		        if (!this.contains(node))
		            return;
		        if (node.prev != null)
		            node.prev.next = node.next;
		        if (node.next != null)
		            node.next.prev = node.prev;
		        if (node === this.head)
		            this.head = node.next;
		        if (node === this.tail)
		            this.tail = node.prev;
		        this.length -= 1;
		    };
		    LinkedList.prototype.iterator = function (curNode) {
		        if (curNode === void 0) { curNode = this.head; }
		        // TODO use yield when we can
		        return function () {
		            var ret = curNode;
		            if (curNode != null)
		                curNode = curNode.next;
		            return ret;
		        };
		    };
		    LinkedList.prototype.find = function (index, inclusive) {
		        if (inclusive === void 0) { inclusive = false; }
		        var cur, next = this.iterator();
		        while ((cur = next())) {
		            var length = cur.length();
		            if (index < length ||
		                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
		                return [cur, index];
		            }
		            index -= length;
		        }
		        return [null, 0];
		    };
		    LinkedList.prototype.forEach = function (callback) {
		        var cur, next = this.iterator();
		        while ((cur = next())) {
		            callback(cur);
		        }
		    };
		    LinkedList.prototype.forEachAt = function (index, length, callback) {
		        if (length <= 0)
		            return;
		        var _a = this.find(index), startNode = _a[0], offset = _a[1];
		        var cur, curIndex = index - offset, next = this.iterator(startNode);
		        while ((cur = next()) && curIndex < index + length) {
		            var curLength = cur.length();
		            if (index > curIndex) {
		                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
		            }
		            else {
		                callback(cur, 0, Math.min(curLength, index + length - curIndex));
		            }
		            curIndex += curLength;
		        }
		    };
		    LinkedList.prototype.map = function (callback) {
		        return this.reduce(function (memo, cur) {
		            memo.push(callback(cur));
		            return memo;
		        }, []);
		    };
		    LinkedList.prototype.reduce = function (callback, memo) {
		        var cur, next = this.iterator();
		        while ((cur = next())) {
		            memo = callback(memo, cur);
		        }
		        return memo;
		    };
		    return LinkedList;
		}());
		exports.default = LinkedList;


		/***/ }),
		/* 45 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var container_1 = __webpack_require__(17);
		var Registry = __webpack_require__(1);
		var OBSERVER_CONFIG = {
		    attributes: true,
		    characterData: true,
		    characterDataOldValue: true,
		    childList: true,
		    subtree: true,
		};
		var MAX_OPTIMIZE_ITERATIONS = 100;
		var ScrollBlot = /** @class */ (function (_super) {
		    __extends(ScrollBlot, _super);
		    function ScrollBlot(node) {
		        var _this = _super.call(this, node) || this;
		        _this.scroll = _this;
		        _this.observer = new MutationObserver(function (mutations) {
		            _this.update(mutations);
		        });
		        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
		        _this.attach();
		        return _this;
		    }
		    ScrollBlot.prototype.detach = function () {
		        _super.prototype.detach.call(this);
		        this.observer.disconnect();
		    };
		    ScrollBlot.prototype.deleteAt = function (index, length) {
		        this.update();
		        if (index === 0 && length === this.length()) {
		            this.children.forEach(function (child) {
		                child.remove();
		            });
		        }
		        else {
		            _super.prototype.deleteAt.call(this, index, length);
		        }
		    };
		    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
		        this.update();
		        _super.prototype.formatAt.call(this, index, length, name, value);
		    };
		    ScrollBlot.prototype.insertAt = function (index, value, def) {
		        this.update();
		        _super.prototype.insertAt.call(this, index, value, def);
		    };
		    ScrollBlot.prototype.optimize = function (mutations, context) {
		        var _this = this;
		        if (mutations === void 0) { mutations = []; }
		        if (context === void 0) { context = {}; }
		        _super.prototype.optimize.call(this, context);
		        // We must modify mutations directly, cannot make copy and then modify
		        var records = [].slice.call(this.observer.takeRecords());
		        // Array.push currently seems to be implemented by a non-tail recursive function
		        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
		        while (records.length > 0)
		            mutations.push(records.pop());
		        // TODO use WeakMap
		        var mark = function (blot, markParent) {
		            if (markParent === void 0) { markParent = true; }
		            if (blot == null || blot === _this)
		                return;
		            if (blot.domNode.parentNode == null)
		                return;
		            // @ts-ignore
		            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
		                // @ts-ignore
		                blot.domNode[Registry.DATA_KEY].mutations = [];
		            }
		            if (markParent)
		                mark(blot.parent);
		        };
		        var optimize = function (blot) {
		            // Post-order traversal
		            if (
		            // @ts-ignore
		            blot.domNode[Registry.DATA_KEY] == null ||
		                // @ts-ignore
		                blot.domNode[Registry.DATA_KEY].mutations == null) {
		                return;
		            }
		            if (blot instanceof container_1.default) {
		                blot.children.forEach(optimize);
		            }
		            blot.optimize(context);
		        };
		        var remaining = mutations;
		        for (var i = 0; remaining.length > 0; i += 1) {
		            if (i >= MAX_OPTIMIZE_ITERATIONS) {
		                throw new Error('[Parchment] Maximum optimize iterations reached');
		            }
		            remaining.forEach(function (mutation) {
		                var blot = Registry.find(mutation.target, true);
		                if (blot == null)
		                    return;
		                if (blot.domNode === mutation.target) {
		                    if (mutation.type === 'childList') {
		                        mark(Registry.find(mutation.previousSibling, false));
		                        [].forEach.call(mutation.addedNodes, function (node) {
		                            var child = Registry.find(node, false);
		                            mark(child, false);
		                            if (child instanceof container_1.default) {
		                                child.children.forEach(function (grandChild) {
		                                    mark(grandChild, false);
		                                });
		                            }
		                        });
		                    }
		                    else if (mutation.type === 'attributes') {
		                        mark(blot.prev);
		                    }
		                }
		                mark(blot);
		            });
		            this.children.forEach(optimize);
		            remaining = [].slice.call(this.observer.takeRecords());
		            records = remaining.slice();
		            while (records.length > 0)
		                mutations.push(records.pop());
		        }
		    };
		    ScrollBlot.prototype.update = function (mutations, context) {
		        var _this = this;
		        if (context === void 0) { context = {}; }
		        mutations = mutations || this.observer.takeRecords();
		        // TODO use WeakMap
		        mutations
		            .map(function (mutation) {
		            var blot = Registry.find(mutation.target, true);
		            if (blot == null)
		                return null;
		            // @ts-ignore
		            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
		                // @ts-ignore
		                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
		                return blot;
		            }
		            else {
		                // @ts-ignore
		                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
		                return null;
		            }
		        })
		            .forEach(function (blot) {
		            if (blot == null ||
		                blot === _this ||
		                //@ts-ignore
		                blot.domNode[Registry.DATA_KEY] == null)
		                return;
		            // @ts-ignore
		            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
		        });
		        // @ts-ignore
		        if (this.domNode[Registry.DATA_KEY].mutations != null) {
		            // @ts-ignore
		            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
		        }
		        this.optimize(mutations, context);
		    };
		    ScrollBlot.blotName = 'scroll';
		    ScrollBlot.defaultChild = 'block';
		    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
		    ScrollBlot.tagName = 'DIV';
		    return ScrollBlot;
		}(container_1.default));
		exports.default = ScrollBlot;


		/***/ }),
		/* 46 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var format_1 = __webpack_require__(18);
		var Registry = __webpack_require__(1);
		// Shallow object comparison
		function isEqual(obj1, obj2) {
		    if (Object.keys(obj1).length !== Object.keys(obj2).length)
		        return false;
		    // @ts-ignore
		    for (var prop in obj1) {
		        // @ts-ignore
		        if (obj1[prop] !== obj2[prop])
		            return false;
		    }
		    return true;
		}
		var InlineBlot = /** @class */ (function (_super) {
		    __extends(InlineBlot, _super);
		    function InlineBlot() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    InlineBlot.formats = function (domNode) {
		        if (domNode.tagName === InlineBlot.tagName)
		            return undefined;
		        return _super.formats.call(this, domNode);
		    };
		    InlineBlot.prototype.format = function (name, value) {
		        var _this = this;
		        if (name === this.statics.blotName && !value) {
		            this.children.forEach(function (child) {
		                if (!(child instanceof format_1.default)) {
		                    child = child.wrap(InlineBlot.blotName, true);
		                }
		                _this.attributes.copy(child);
		            });
		            this.unwrap();
		        }
		        else {
		            _super.prototype.format.call(this, name, value);
		        }
		    };
		    InlineBlot.prototype.formatAt = function (index, length, name, value) {
		        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
		            var blot = this.isolate(index, length);
		            blot.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    InlineBlot.prototype.optimize = function (context) {
		        _super.prototype.optimize.call(this, context);
		        var formats = this.formats();
		        if (Object.keys(formats).length === 0) {
		            return this.unwrap(); // unformatted span
		        }
		        var next = this.next;
		        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
		            next.moveChildren(this);
		            next.remove();
		        }
		    };
		    InlineBlot.blotName = 'inline';
		    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
		    InlineBlot.tagName = 'SPAN';
		    return InlineBlot;
		}(format_1.default));
		exports.default = InlineBlot;


		/***/ }),
		/* 47 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var format_1 = __webpack_require__(18);
		var Registry = __webpack_require__(1);
		var BlockBlot = /** @class */ (function (_super) {
		    __extends(BlockBlot, _super);
		    function BlockBlot() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    BlockBlot.formats = function (domNode) {
		        var tagName = Registry.query(BlockBlot.blotName).tagName;
		        if (domNode.tagName === tagName)
		            return undefined;
		        return _super.formats.call(this, domNode);
		    };
		    BlockBlot.prototype.format = function (name, value) {
		        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
		            return;
		        }
		        else if (name === this.statics.blotName && !value) {
		            this.replaceWith(BlockBlot.blotName);
		        }
		        else {
		            _super.prototype.format.call(this, name, value);
		        }
		    };
		    BlockBlot.prototype.formatAt = function (index, length, name, value) {
		        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
		            this.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    BlockBlot.prototype.insertAt = function (index, value, def) {
		        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
		            // Insert text or inline
		            _super.prototype.insertAt.call(this, index, value, def);
		        }
		        else {
		            var after = this.split(index);
		            var blot = Registry.create(value, def);
		            after.parent.insertBefore(blot, after);
		        }
		    };
		    BlockBlot.prototype.update = function (mutations, context) {
		        if (navigator.userAgent.match(/Trident/)) {
		            this.build();
		        }
		        else {
		            _super.prototype.update.call(this, mutations, context);
		        }
		    };
		    BlockBlot.blotName = 'block';
		    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
		    BlockBlot.tagName = 'P';
		    return BlockBlot;
		}(format_1.default));
		exports.default = BlockBlot;


		/***/ }),
		/* 48 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var leaf_1 = __webpack_require__(19);
		var EmbedBlot = /** @class */ (function (_super) {
		    __extends(EmbedBlot, _super);
		    function EmbedBlot() {
		        return _super !== null && _super.apply(this, arguments) || this;
		    }
		    EmbedBlot.formats = function (domNode) {
		        return undefined;
		    };
		    EmbedBlot.prototype.format = function (name, value) {
		        // super.formatAt wraps, which is what we want in general,
		        // but this allows subclasses to overwrite for formats
		        // that just apply to particular embeds
		        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
		    };
		    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
		        if (index === 0 && length === this.length()) {
		            this.format(name, value);
		        }
		        else {
		            _super.prototype.formatAt.call(this, index, length, name, value);
		        }
		    };
		    EmbedBlot.prototype.formats = function () {
		        return this.statics.formats(this.domNode);
		    };
		    return EmbedBlot;
		}(leaf_1.default));
		exports.default = EmbedBlot;


		/***/ }),
		/* 49 */
		/***/ (function(module, exports, __webpack_require__) {

		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var leaf_1 = __webpack_require__(19);
		var Registry = __webpack_require__(1);
		var TextBlot = /** @class */ (function (_super) {
		    __extends(TextBlot, _super);
		    function TextBlot(node) {
		        var _this = _super.call(this, node) || this;
		        _this.text = _this.statics.value(_this.domNode);
		        return _this;
		    }
		    TextBlot.create = function (value) {
		        return document.createTextNode(value);
		    };
		    TextBlot.value = function (domNode) {
		        var text = domNode.data;
		        // @ts-ignore
		        if (text['normalize'])
		            text = text['normalize']();
		        return text;
		    };
		    TextBlot.prototype.deleteAt = function (index, length) {
		        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
		    };
		    TextBlot.prototype.index = function (node, offset) {
		        if (this.domNode === node) {
		            return offset;
		        }
		        return -1;
		    };
		    TextBlot.prototype.insertAt = function (index, value, def) {
		        if (def == null) {
		            this.text = this.text.slice(0, index) + value + this.text.slice(index);
		            this.domNode.data = this.text;
		        }
		        else {
		            _super.prototype.insertAt.call(this, index, value, def);
		        }
		    };
		    TextBlot.prototype.length = function () {
		        return this.text.length;
		    };
		    TextBlot.prototype.optimize = function (context) {
		        _super.prototype.optimize.call(this, context);
		        this.text = this.statics.value(this.domNode);
		        if (this.text.length === 0) {
		            this.remove();
		        }
		        else if (this.next instanceof TextBlot && this.next.prev === this) {
		            this.insertAt(this.length(), this.next.value());
		            this.next.remove();
		        }
		    };
		    TextBlot.prototype.position = function (index, inclusive) {
		        return [this.domNode, index];
		    };
		    TextBlot.prototype.split = function (index, force) {
		        if (force === void 0) { force = false; }
		        if (!force) {
		            if (index === 0)
		                return this;
		            if (index === this.length())
		                return this.next;
		        }
		        var after = Registry.create(this.domNode.splitText(index));
		        this.parent.insertBefore(after, this.next);
		        this.text = this.statics.value(this.domNode);
		        return after;
		    };
		    TextBlot.prototype.update = function (mutations, context) {
		        var _this = this;
		        if (mutations.some(function (mutation) {
		            return mutation.type === 'characterData' && mutation.target === _this.domNode;
		        })) {
		            this.text = this.statics.value(this.domNode);
		        }
		    };
		    TextBlot.prototype.value = function () {
		        return this.text;
		    };
		    TextBlot.blotName = 'text';
		    TextBlot.scope = Registry.Scope.INLINE_BLOT;
		    return TextBlot;
		}(leaf_1.default));
		exports.default = TextBlot;


		/***/ }),
		/* 50 */
		/***/ (function(module, exports, __webpack_require__) {


		var elem = document.createElement('div');
		elem.classList.toggle('test-class', false);
		if (elem.classList.contains('test-class')) {
		  var _toggle = DOMTokenList.prototype.toggle;
		  DOMTokenList.prototype.toggle = function (token, force) {
		    if (arguments.length > 1 && !this.contains(token) === !force) {
		      return force;
		    } else {
		      return _toggle.call(this, token);
		    }
		  };
		}

		if (!String.prototype.startsWith) {
		  String.prototype.startsWith = function (searchString, position) {
		    position = position || 0;
		    return this.substr(position, searchString.length) === searchString;
		  };
		}

		if (!String.prototype.endsWith) {
		  String.prototype.endsWith = function (searchString, position) {
		    var subjectString = this.toString();
		    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
		      position = subjectString.length;
		    }
		    position -= searchString.length;
		    var lastIndex = subjectString.indexOf(searchString, position);
		    return lastIndex !== -1 && lastIndex === position;
		  };
		}

		if (!Array.prototype.find) {
		  Object.defineProperty(Array.prototype, "find", {
		    value: function value(predicate) {
		      if (this === null) {
		        throw new TypeError('Array.prototype.find called on null or undefined');
		      }
		      if (typeof predicate !== 'function') {
		        throw new TypeError('predicate must be a function');
		      }
		      var list = Object(this);
		      var length = list.length >>> 0;
		      var thisArg = arguments[1];
		      var value;

		      for (var i = 0; i < length; i++) {
		        value = list[i];
		        if (predicate.call(thisArg, value, i, list)) {
		          return value;
		        }
		      }
		      return undefined;
		    }
		  });
		}

		document.addEventListener("DOMContentLoaded", function () {
		  // Disable resizing in Firefox
		  document.execCommand("enableObjectResizing", false, false);
		  // Disable automatic linkifying in IE11
		  document.execCommand("autoUrlDetect", false, false);
		});

		/***/ }),
		/* 51 */
		/***/ (function(module, exports) {

		/**
		 * This library modifies the diff-patch-match library by Neil Fraser
		 * by removing the patch and match functionality and certain advanced
		 * options in the diff function. The original license is as follows:
		 *
		 * ===
		 *
		 * Diff Match and Patch
		 *
		 * Copyright 2006 Google Inc.
		 * http://code.google.com/p/google-diff-match-patch/
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *   http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */


		/**
		 * The data structure representing a diff is an array of tuples:
		 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
		 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
		 */
		var DIFF_DELETE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;


		/**
		 * Find the differences between two texts.  Simplifies the problem by stripping
		 * any common prefix or suffix off the texts before diffing.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {Int} cursor_pos Expected edit position in text1 (optional)
		 * @return {Array} Array of diff tuples.
		 */
		function diff_main(text1, text2, cursor_pos) {
		  // Check for equality (speedup).
		  if (text1 == text2) {
		    if (text1) {
		      return [[DIFF_EQUAL, text1]];
		    }
		    return [];
		  }

		  // Check cursor_pos within bounds
		  if (cursor_pos < 0 || text1.length < cursor_pos) {
		    cursor_pos = null;
		  }

		  // Trim off common prefix (speedup).
		  var commonlength = diff_commonPrefix(text1, text2);
		  var commonprefix = text1.substring(0, commonlength);
		  text1 = text1.substring(commonlength);
		  text2 = text2.substring(commonlength);

		  // Trim off common suffix (speedup).
		  commonlength = diff_commonSuffix(text1, text2);
		  var commonsuffix = text1.substring(text1.length - commonlength);
		  text1 = text1.substring(0, text1.length - commonlength);
		  text2 = text2.substring(0, text2.length - commonlength);

		  // Compute the diff on the middle block.
		  var diffs = diff_compute_(text1, text2);

		  // Restore the prefix and suffix.
		  if (commonprefix) {
		    diffs.unshift([DIFF_EQUAL, commonprefix]);
		  }
		  if (commonsuffix) {
		    diffs.push([DIFF_EQUAL, commonsuffix]);
		  }
		  diff_cleanupMerge(diffs);
		  if (cursor_pos != null) {
		    diffs = fix_cursor(diffs, cursor_pos);
		  }
		  diffs = fix_emoji(diffs);
		  return diffs;
		}

		/**
		 * Find the differences between two texts.  Assumes that the texts do not
		 * have any common prefix or suffix.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_compute_(text1, text2) {
		  var diffs;

		  if (!text1) {
		    // Just add some text (speedup).
		    return [[DIFF_INSERT, text2]];
		  }

		  if (!text2) {
		    // Just delete some text (speedup).
		    return [[DIFF_DELETE, text1]];
		  }

		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  var i = longtext.indexOf(shorttext);
		  if (i != -1) {
		    // Shorter text is inside the longer text (speedup).
		    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
		             [DIFF_EQUAL, shorttext],
		             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
		    // Swap insertions for deletions if diff is reversed.
		    if (text1.length > text2.length) {
		      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
		    }
		    return diffs;
		  }

		  if (shorttext.length == 1) {
		    // Single character string.
		    // After the previous speedup, the character can't be an equality.
		    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
		  }

		  // Check to see if the problem can be split in two.
		  var hm = diff_halfMatch_(text1, text2);
		  if (hm) {
		    // A half-match was found, sort out the return data.
		    var text1_a = hm[0];
		    var text1_b = hm[1];
		    var text2_a = hm[2];
		    var text2_b = hm[3];
		    var mid_common = hm[4];
		    // Send both pairs off for separate processing.
		    var diffs_a = diff_main(text1_a, text2_a);
		    var diffs_b = diff_main(text1_b, text2_b);
		    // Merge the results.
		    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
		  }

		  return diff_bisect_(text1, text2);
		}

		/**
		 * Find the 'middle snake' of a diff, split the problem in two
		 * and return the recursively constructed diff.
		 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 * @private
		 */
		function diff_bisect_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  var max_d = Math.ceil((text1_length + text2_length) / 2);
		  var v_offset = max_d;
		  var v_length = 2 * max_d;
		  var v1 = new Array(v_length);
		  var v2 = new Array(v_length);
		  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
		  // integers and undefined.
		  for (var x = 0; x < v_length; x++) {
		    v1[x] = -1;
		    v2[x] = -1;
		  }
		  v1[v_offset + 1] = 0;
		  v2[v_offset + 1] = 0;
		  var delta = text1_length - text2_length;
		  // If the total number of characters is odd, then the front path will collide
		  // with the reverse path.
		  var front = (delta % 2 != 0);
		  // Offsets for start and end of k loop.
		  // Prevents mapping of space beyond the grid.
		  var k1start = 0;
		  var k1end = 0;
		  var k2start = 0;
		  var k2end = 0;
		  for (var d = 0; d < max_d; d++) {
		    // Walk the front path one step.
		    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
		      var k1_offset = v_offset + k1;
		      var x1;
		      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
		        x1 = v1[k1_offset + 1];
		      } else {
		        x1 = v1[k1_offset - 1] + 1;
		      }
		      var y1 = x1 - k1;
		      while (x1 < text1_length && y1 < text2_length &&
		             text1.charAt(x1) == text2.charAt(y1)) {
		        x1++;
		        y1++;
		      }
		      v1[k1_offset] = x1;
		      if (x1 > text1_length) {
		        // Ran off the right of the graph.
		        k1end += 2;
		      } else if (y1 > text2_length) {
		        // Ran off the bottom of the graph.
		        k1start += 2;
		      } else if (front) {
		        var k2_offset = v_offset + delta - k1;
		        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
		          // Mirror x2 onto top-left coordinate system.
		          var x2 = text1_length - v2[k2_offset];
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }

		    // Walk the reverse path one step.
		    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
		      var k2_offset = v_offset + k2;
		      var x2;
		      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
		        x2 = v2[k2_offset + 1];
		      } else {
		        x2 = v2[k2_offset - 1] + 1;
		      }
		      var y2 = x2 - k2;
		      while (x2 < text1_length && y2 < text2_length &&
		             text1.charAt(text1_length - x2 - 1) ==
		             text2.charAt(text2_length - y2 - 1)) {
		        x2++;
		        y2++;
		      }
		      v2[k2_offset] = x2;
		      if (x2 > text1_length) {
		        // Ran off the left of the graph.
		        k2end += 2;
		      } else if (y2 > text2_length) {
		        // Ran off the top of the graph.
		        k2start += 2;
		      } else if (!front) {
		        var k1_offset = v_offset + delta - k2;
		        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
		          var x1 = v1[k1_offset];
		          var y1 = v_offset + x1 - k1_offset;
		          // Mirror x2 onto top-left coordinate system.
		          x2 = text1_length - x2;
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }
		  }
		  // Diff took too long and hit the deadline or
		  // number of diffs equals number of characters, no commonality at all.
		  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
		}

		/**
		 * Given the location of the 'middle snake', split the diff in two parts
		 * and recurse.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {number} x Index of split point in text1.
		 * @param {number} y Index of split point in text2.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_bisectSplit_(text1, text2, x, y) {
		  var text1a = text1.substring(0, x);
		  var text2a = text2.substring(0, y);
		  var text1b = text1.substring(x);
		  var text2b = text2.substring(y);

		  // Compute both diffs serially.
		  var diffs = diff_main(text1a, text2a);
		  var diffsb = diff_main(text1b, text2b);

		  return diffs.concat(diffsb);
		}

		/**
		 * Determine the common prefix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the start of each
		 *     string.
		 */
		function diff_commonPrefix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerstart = 0;
		  while (pointermin < pointermid) {
		    if (text1.substring(pointerstart, pointermid) ==
		        text2.substring(pointerstart, pointermid)) {
		      pointermin = pointermid;
		      pointerstart = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }
		  return pointermid;
		}

		/**
		 * Determine the common suffix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of each string.
		 */
		function diff_commonSuffix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 ||
		      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerend = 0;
		  while (pointermin < pointermid) {
		    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
		        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
		      pointermin = pointermid;
		      pointerend = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }
		  return pointermid;
		}

		/**
		 * Do the two texts share a substring which is at least half the length of the
		 * longer text?
		 * This speedup can produce non-minimal diffs.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {Array.<string>} Five element Array, containing the prefix of
		 *     text1, the suffix of text1, the prefix of text2, the suffix of
		 *     text2 and the common middle.  Or null if there was no match.
		 */
		function diff_halfMatch_(text1, text2) {
		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
		    return null;  // Pointless.
		  }

		  /**
		   * Does a substring of shorttext exist within longtext such that the substring
		   * is at least half the length of longtext?
		   * Closure, but does not reference any external variables.
		   * @param {string} longtext Longer string.
		   * @param {string} shorttext Shorter string.
		   * @param {number} i Start index of quarter length substring within longtext.
		   * @return {Array.<string>} Five element Array, containing the prefix of
		   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
		   *     of shorttext and the common middle.  Or null if there was no match.
		   * @private
		   */
		  function diff_halfMatchI_(longtext, shorttext, i) {
		    // Start with a 1/4 length substring at position i as a seed.
		    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
		    var j = -1;
		    var best_common = '';
		    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
		    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
		      var prefixLength = diff_commonPrefix(longtext.substring(i),
		                                           shorttext.substring(j));
		      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
		                                           shorttext.substring(0, j));
		      if (best_common.length < suffixLength + prefixLength) {
		        best_common = shorttext.substring(j - suffixLength, j) +
		            shorttext.substring(j, j + prefixLength);
		        best_longtext_a = longtext.substring(0, i - suffixLength);
		        best_longtext_b = longtext.substring(i + prefixLength);
		        best_shorttext_a = shorttext.substring(0, j - suffixLength);
		        best_shorttext_b = shorttext.substring(j + prefixLength);
		      }
		    }
		    if (best_common.length * 2 >= longtext.length) {
		      return [best_longtext_a, best_longtext_b,
		              best_shorttext_a, best_shorttext_b, best_common];
		    } else {
		      return null;
		    }
		  }

		  // First check if the second quarter is the seed for a half-match.
		  var hm1 = diff_halfMatchI_(longtext, shorttext,
		                             Math.ceil(longtext.length / 4));
		  // Check again based on the third quarter.
		  var hm2 = diff_halfMatchI_(longtext, shorttext,
		                             Math.ceil(longtext.length / 2));
		  var hm;
		  if (!hm1 && !hm2) {
		    return null;
		  } else if (!hm2) {
		    hm = hm1;
		  } else if (!hm1) {
		    hm = hm2;
		  } else {
		    // Both matched.  Select the longest.
		    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
		  }

		  // A half-match was found, sort out the return data.
		  var text1_a, text1_b, text2_a, text2_b;
		  if (text1.length > text2.length) {
		    text1_a = hm[0];
		    text1_b = hm[1];
		    text2_a = hm[2];
		    text2_b = hm[3];
		  } else {
		    text2_a = hm[0];
		    text2_b = hm[1];
		    text1_a = hm[2];
		    text1_b = hm[3];
		  }
		  var mid_common = hm[4];
		  return [text1_a, text1_b, text2_a, text2_b, mid_common];
		}

		/**
		 * Reorder and merge like edit sections.  Merge equalities.
		 * Any edit section can move as long as it doesn't cross an equality.
		 * @param {Array} diffs Array of diff tuples.
		 */
		function diff_cleanupMerge(diffs) {
		  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
		  var pointer = 0;
		  var count_delete = 0;
		  var count_insert = 0;
		  var text_delete = '';
		  var text_insert = '';
		  var commonlength;
		  while (pointer < diffs.length) {
		    switch (diffs[pointer][0]) {
		      case DIFF_INSERT:
		        count_insert++;
		        text_insert += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_DELETE:
		        count_delete++;
		        text_delete += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_EQUAL:
		        // Upon reaching an equality, check for prior redundancies.
		        if (count_delete + count_insert > 1) {
		          if (count_delete !== 0 && count_insert !== 0) {
		            // Factor out any common prefixies.
		            commonlength = diff_commonPrefix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              if ((pointer - count_delete - count_insert) > 0 &&
		                  diffs[pointer - count_delete - count_insert - 1][0] ==
		                  DIFF_EQUAL) {
		                diffs[pointer - count_delete - count_insert - 1][1] +=
		                    text_insert.substring(0, commonlength);
		              } else {
		                diffs.splice(0, 0, [DIFF_EQUAL,
		                                    text_insert.substring(0, commonlength)]);
		                pointer++;
		              }
		              text_insert = text_insert.substring(commonlength);
		              text_delete = text_delete.substring(commonlength);
		            }
		            // Factor out any common suffixies.
		            commonlength = diff_commonSuffix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              diffs[pointer][1] = text_insert.substring(text_insert.length -
		                  commonlength) + diffs[pointer][1];
		              text_insert = text_insert.substring(0, text_insert.length -
		                  commonlength);
		              text_delete = text_delete.substring(0, text_delete.length -
		                  commonlength);
		            }
		          }
		          // Delete the offending records and add the merged ones.
		          if (count_delete === 0) {
		            diffs.splice(pointer - count_insert,
		                count_delete + count_insert, [DIFF_INSERT, text_insert]);
		          } else if (count_insert === 0) {
		            diffs.splice(pointer - count_delete,
		                count_delete + count_insert, [DIFF_DELETE, text_delete]);
		          } else {
		            diffs.splice(pointer - count_delete - count_insert,
		                count_delete + count_insert, [DIFF_DELETE, text_delete],
		                [DIFF_INSERT, text_insert]);
		          }
		          pointer = pointer - count_delete - count_insert +
		                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
		        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
		          // Merge this equality with the previous one.
		          diffs[pointer - 1][1] += diffs[pointer][1];
		          diffs.splice(pointer, 1);
		        } else {
		          pointer++;
		        }
		        count_insert = 0;
		        count_delete = 0;
		        text_delete = '';
		        text_insert = '';
		        break;
		    }
		  }
		  if (diffs[diffs.length - 1][1] === '') {
		    diffs.pop();  // Remove the dummy entry at the end.
		  }

		  // Second pass: look for single edits surrounded on both sides by equalities
		  // which can be shifted sideways to eliminate an equality.
		  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
		  var changes = false;
		  pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
		        diffs[pointer + 1][0] == DIFF_EQUAL) {
		      // This is a single edit surrounded by equalities.
		      if (diffs[pointer][1].substring(diffs[pointer][1].length -
		          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
		        // Shift the edit over the previous equality.
		        diffs[pointer][1] = diffs[pointer - 1][1] +
		            diffs[pointer][1].substring(0, diffs[pointer][1].length -
		                                        diffs[pointer - 1][1].length);
		        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
		        diffs.splice(pointer - 1, 1);
		        changes = true;
		      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
		          diffs[pointer + 1][1]) {
		        // Shift the edit over the next equality.
		        diffs[pointer - 1][1] += diffs[pointer + 1][1];
		        diffs[pointer][1] =
		            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
		            diffs[pointer + 1][1];
		        diffs.splice(pointer + 1, 1);
		        changes = true;
		      }
		    }
		    pointer++;
		  }
		  // If shifts were made, the diff needs reordering and another shift sweep.
		  if (changes) {
		    diff_cleanupMerge(diffs);
		  }
		}

		var diff = diff_main;
		diff.INSERT = DIFF_INSERT;
		diff.DELETE = DIFF_DELETE;
		diff.EQUAL = DIFF_EQUAL;

		module.exports = diff;

		/*
		 * Modify a diff such that the cursor position points to the start of a change:
		 * E.g.
		 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
		 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
		 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
		 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
		 *
		 * @param {Array} diffs Array of diff tuples
		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
		 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
		 */
		function cursor_normalize_diff (diffs, cursor_pos) {
		  if (cursor_pos === 0) {
		    return [DIFF_EQUAL, diffs];
		  }
		  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
		    var d = diffs[i];
		    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
		      var next_pos = current_pos + d[1].length;
		      if (cursor_pos === next_pos) {
		        return [i + 1, diffs];
		      } else if (cursor_pos < next_pos) {
		        // copy to prevent side effects
		        diffs = diffs.slice();
		        // split d into two diff changes
		        var split_pos = cursor_pos - current_pos;
		        var d_left = [d[0], d[1].slice(0, split_pos)];
		        var d_right = [d[0], d[1].slice(split_pos)];
		        diffs.splice(i, 1, d_left, d_right);
		        return [i + 1, diffs];
		      } else {
		        current_pos = next_pos;
		      }
		    }
		  }
		  throw new Error('cursor_pos is out of bounds!')
		}

		/*
		 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
		 *
		 * Case 1)
		 *   Check if a naive shift is possible:
		 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
		 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
		 * Case 2)
		 *   Check if the following shifts are possible:
		 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
		 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
		 *         ^            ^
		 *         d          d_next
		 *
		 * @param {Array} diffs Array of diff tuples
		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
		 * @return {Array} Array of diff tuples
		 */
		function fix_cursor (diffs, cursor_pos) {
		  var norm = cursor_normalize_diff(diffs, cursor_pos);
		  var ndiffs = norm[1];
		  var cursor_pointer = norm[0];
		  var d = ndiffs[cursor_pointer];
		  var d_next = ndiffs[cursor_pointer + 1];

		  if (d == null) {
		    // Text was deleted from end of original string,
		    // cursor is now out of bounds in new string
		    return diffs;
		  } else if (d[0] !== DIFF_EQUAL) {
		    // A modification happened at the cursor location.
		    // This is the expected outcome, so we can return the original diff.
		    return diffs;
		  } else {
		    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
		      // Case 1)
		      // It is possible to perform a naive shift
		      ndiffs.splice(cursor_pointer, 2, d_next, d);
		      return merge_tuples(ndiffs, cursor_pointer, 2)
		    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
		      // Case 2)
		      // d[1] is a prefix of d_next[1]
		      // We can assume that d_next[0] !== 0, since d[0] === 0
		      // Shift edit locations..
		      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
		      var suffix = d_next[1].slice(d[1].length);
		      if (suffix.length > 0) {
		        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
		      }
		      return merge_tuples(ndiffs, cursor_pointer, 3)
		    } else {
		      // Not possible to perform any modification
		      return diffs;
		    }
		  }
		}

		/*
		 * Check diff did not split surrogate pairs.
		 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
		 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
		 *
		 * @param {Array} diffs Array of diff tuples
		 * @return {Array} Array of diff tuples
		 */
		function fix_emoji (diffs) {
		  var compact = false;
		  var starts_with_pair_end = function(str) {
		    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
		  };
		  var ends_with_pair_start = function(str) {
		    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
		  };
		  for (var i = 2; i < diffs.length; i += 1) {
		    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
		        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
		        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
		      compact = true;

		      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
		      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

		      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
		    }
		  }
		  if (!compact) {
		    return diffs;
		  }
		  var fixed_diffs = [];
		  for (var i = 0; i < diffs.length; i += 1) {
		    if (diffs[i][1].length > 0) {
		      fixed_diffs.push(diffs[i]);
		    }
		  }
		  return fixed_diffs;
		}

		/*
		 * Try to merge tuples with their neigbors in a given range.
		 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
		 *
		 * @param {Array} diffs Array of diff tuples.
		 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
		 * @param {Int} length Number of consecutive elements to check.
		 * @return {Array} Array of merged diff tuples.
		 */
		function merge_tuples (diffs, start, length) {
		  // Check from (start-1) to (start+length).
		  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
		    if (i + 1 < diffs.length) {
		      var left_d = diffs[i];
		      var right_d = diffs[i+1];
		      if (left_d[0] === right_d[1]) {
		        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
		      }
		    }
		  }
		  return diffs;
		}


		/***/ }),
		/* 52 */
		/***/ (function(module, exports) {

		exports = module.exports = typeof Object.keys === 'function'
		  ? Object.keys : shim;

		exports.shim = shim;
		function shim (obj) {
		  var keys = [];
		  for (var key in obj) keys.push(key);
		  return keys;
		}


		/***/ }),
		/* 53 */
		/***/ (function(module, exports) {

		var supportsArgumentsClass = (function(){
		  return Object.prototype.toString.call(arguments)
		})() == '[object Arguments]';

		exports = module.exports = supportsArgumentsClass ? supported : unsupported;

		exports.supported = supported;
		function supported(object) {
		  return Object.prototype.toString.call(object) == '[object Arguments]';
		}
		exports.unsupported = unsupported;
		function unsupported(object){
		  return object &&
		    typeof object == 'object' &&
		    typeof object.length == 'number' &&
		    Object.prototype.hasOwnProperty.call(object, 'callee') &&
		    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
		    false;
		}

		/***/ }),
		/* 54 */
		/***/ (function(module, exports) {

		var has = Object.prototype.hasOwnProperty
		  , prefix = '~';

		/**
		 * Constructor to create a storage for our `EE` objects.
		 * An `Events` instance is a plain object whose properties are event names.
		 *
		 * @constructor
		 * @api private
		 */
		function Events() {}

		//
		// We try to not inherit from `Object.prototype`. In some engines creating an
		// instance in this way is faster than calling `Object.create(null)` directly.
		// If `Object.create(null)` is not supported we prefix the event names with a
		// character to make sure that the built-in object properties are not
		// overridden or used as an attack vector.
		//
		if (Object.create) {
		  Events.prototype = Object.create(null);

		  //
		  // This hack is needed because the `__proto__` property is still inherited in
		  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
		  //
		  if (!new Events().__proto__) prefix = false;
		}

		/**
		 * Representation of a single event listener.
		 *
		 * @param {Function} fn The listener function.
		 * @param {Mixed} context The context to invoke the listener with.
		 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
		 * @constructor
		 * @api private
		 */
		function EE(fn, context, once) {
		  this.fn = fn;
		  this.context = context;
		  this.once = once || false;
		}

		/**
		 * Minimal `EventEmitter` interface that is molded against the Node.js
		 * `EventEmitter` interface.
		 *
		 * @constructor
		 * @api public
		 */
		function EventEmitter() {
		  this._events = new Events();
		  this._eventsCount = 0;
		}

		/**
		 * Return an array listing the events for which the emitter has registered
		 * listeners.
		 *
		 * @returns {Array}
		 * @api public
		 */
		EventEmitter.prototype.eventNames = function eventNames() {
		  var names = []
		    , events
		    , name;

		  if (this._eventsCount === 0) return names;

		  for (name in (events = this._events)) {
		    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
		  }

		  if (Object.getOwnPropertySymbols) {
		    return names.concat(Object.getOwnPropertySymbols(events));
		  }

		  return names;
		};

		/**
		 * Return the listeners registered for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Boolean} exists Only check if there are listeners.
		 * @returns {Array|Boolean}
		 * @api public
		 */
		EventEmitter.prototype.listeners = function listeners(event, exists) {
		  var evt = prefix ? prefix + event : event
		    , available = this._events[evt];

		  if (exists) return !!available;
		  if (!available) return [];
		  if (available.fn) return [available.fn];

		  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
		    ee[i] = available[i].fn;
		  }

		  return ee;
		};

		/**
		 * Calls each of the listeners registered for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @returns {Boolean} `true` if the event had listeners, else `false`.
		 * @api public
		 */
		EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
		  var evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) return false;

		  var listeners = this._events[evt]
		    , len = arguments.length
		    , args
		    , i;

		  if (listeners.fn) {
		    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

		    switch (len) {
		      case 1: return listeners.fn.call(listeners.context), true;
		      case 2: return listeners.fn.call(listeners.context, a1), true;
		      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
		      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
		      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
		      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
		    }

		    for (i = 1, args = new Array(len -1); i < len; i++) {
		      args[i - 1] = arguments[i];
		    }

		    listeners.fn.apply(listeners.context, args);
		  } else {
		    var length = listeners.length
		      , j;

		    for (i = 0; i < length; i++) {
		      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

		      switch (len) {
		        case 1: listeners[i].fn.call(listeners[i].context); break;
		        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
		        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
		        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
		        default:
		          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
		            args[j - 1] = arguments[j];
		          }

		          listeners[i].fn.apply(listeners[i].context, args);
		      }
		    }
		  }

		  return true;
		};

		/**
		 * Add a listener for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {Mixed} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.on = function on(event, fn, context) {
		  var listener = new EE(fn, context || this)
		    , evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
		  else if (!this._events[evt].fn) this._events[evt].push(listener);
		  else this._events[evt] = [this._events[evt], listener];

		  return this;
		};

		/**
		 * Add a one-time listener for a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {Mixed} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.once = function once(event, fn, context) {
		  var listener = new EE(fn, context || this, true)
		    , evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
		  else if (!this._events[evt].fn) this._events[evt].push(listener);
		  else this._events[evt] = [this._events[evt], listener];

		  return this;
		};

		/**
		 * Remove the listeners of a given event.
		 *
		 * @param {String|Symbol} event The event name.
		 * @param {Function} fn Only remove the listeners that match this function.
		 * @param {Mixed} context Only remove the listeners that have this context.
		 * @param {Boolean} once Only remove one-time listeners.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
		  var evt = prefix ? prefix + event : event;

		  if (!this._events[evt]) return this;
		  if (!fn) {
		    if (--this._eventsCount === 0) this._events = new Events();
		    else delete this._events[evt];
		    return this;
		  }

		  var listeners = this._events[evt];

		  if (listeners.fn) {
		    if (
		         listeners.fn === fn
		      && (!once || listeners.once)
		      && (!context || listeners.context === context)
		    ) {
		      if (--this._eventsCount === 0) this._events = new Events();
		      else delete this._events[evt];
		    }
		  } else {
		    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
		      if (
		           listeners[i].fn !== fn
		        || (once && !listeners[i].once)
		        || (context && listeners[i].context !== context)
		      ) {
		        events.push(listeners[i]);
		      }
		    }

		    //
		    // Reset the array, or remove it completely if we have no more listeners.
		    //
		    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
		    else if (--this._eventsCount === 0) this._events = new Events();
		    else delete this._events[evt];
		  }

		  return this;
		};

		/**
		 * Remove all listeners, or those of the specified event.
		 *
		 * @param {String|Symbol} [event] The event name.
		 * @returns {EventEmitter} `this`.
		 * @api public
		 */
		EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
		  var evt;

		  if (event) {
		    evt = prefix ? prefix + event : event;
		    if (this._events[evt]) {
		      if (--this._eventsCount === 0) this._events = new Events();
		      else delete this._events[evt];
		    }
		  } else {
		    this._events = new Events();
		    this._eventsCount = 0;
		  }

		  return this;
		};

		//
		// Alias methods names because people roll like that.
		//
		EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;

		//
		// This function doesn't apply anymore.
		//
		EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
		  return this;
		};

		//
		// Expose the prefix.
		//
		EventEmitter.prefixed = prefix;

		//
		// Allow `EventEmitter` to be imported as module namespace.
		//
		EventEmitter.EventEmitter = EventEmitter;

		//
		// Expose the module.
		//
		if ('undefined' !== typeof module) {
		  module.exports = EventEmitter;
		}


		/***/ }),
		/* 55 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _extend2 = __webpack_require__(3);

		var _extend3 = _interopRequireDefault(_extend2);

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		var _align = __webpack_require__(36);

		var _background = __webpack_require__(37);

		var _code = __webpack_require__(13);

		var _code2 = _interopRequireDefault(_code);

		var _color = __webpack_require__(26);

		var _direction = __webpack_require__(38);

		var _font = __webpack_require__(39);

		var _size = __webpack_require__(40);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:clipboard');

		var DOM_KEY = '__ql-matcher';

		var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

		var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
		  memo[attr.keyName] = attr;
		  return memo;
		}, {});

		var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
		  memo[attr.keyName] = attr;
		  return memo;
		}, {});

		var Clipboard = function (_Module) {
		  _inherits(Clipboard, _Module);

		  function Clipboard(quill, options) {
		    _classCallCheck(this, Clipboard);

		    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

		    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
		    _this.container = _this.quill.addContainer('ql-clipboard');
		    _this.container.setAttribute('contenteditable', true);
		    _this.container.setAttribute('tabindex', -1);
		    _this.matchers = [];
		    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
		      var _ref2 = _slicedToArray(_ref, 2),
		          selector = _ref2[0],
		          matcher = _ref2[1];

		      if (!options.matchVisual && matcher === matchSpacing) return;
		      _this.addMatcher(selector, matcher);
		    });
		    return _this;
		  }

		  _createClass(Clipboard, [{
		    key: 'addMatcher',
		    value: function addMatcher(selector, matcher) {
		      this.matchers.push([selector, matcher]);
		    }
		  }, {
		    key: 'convert',
		    value: function convert(html) {
		      if (typeof html === 'string') {
		        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
		        return this.convert();
		      }
		      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
		      if (formats[_code2.default.blotName]) {
		        var text = this.container.innerText;
		        this.container.innerHTML = '';
		        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
		      }

		      var _prepareMatching = this.prepareMatching(),
		          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
		          elementMatchers = _prepareMatching2[0],
		          textMatchers = _prepareMatching2[1];

		      var delta = traverse(this.container, elementMatchers, textMatchers);
		      // Remove trailing newline
		      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
		        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
		      }
		      debug.log('convert', this.container.innerHTML, delta);
		      this.container.innerHTML = '';
		      return delta;
		    }
		  }, {
		    key: 'dangerouslyPasteHTML',
		    value: function dangerouslyPasteHTML(index, html) {
		      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

		      if (typeof index === 'string') {
		        this.quill.setContents(this.convert(index), html);
		        this.quill.setSelection(0, _quill2.default.sources.SILENT);
		      } else {
		        var paste = this.convert(html);
		        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
		        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
		      }
		    }
		  }, {
		    key: 'onPaste',
		    value: function onPaste(e) {
		      var _this2 = this;

		      if (e.defaultPrevented || !this.quill.isEnabled()) return;
		      var range = this.quill.getSelection();
		      var delta = new _quillDelta2.default().retain(range.index);
		      var scrollTop = this.quill.scrollingContainer.scrollTop;
		      this.container.focus();
		      this.quill.selection.update(_quill2.default.sources.SILENT);
		      setTimeout(function () {
		        delta = delta.concat(_this2.convert()).delete(range.length);
		        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
		        // range.length contributes to delta.length()
		        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
		        _this2.quill.scrollingContainer.scrollTop = scrollTop;
		        _this2.quill.focus();
		      }, 1);
		    }
		  }, {
		    key: 'prepareMatching',
		    value: function prepareMatching() {
		      var _this3 = this;

		      var elementMatchers = [],
		          textMatchers = [];
		      this.matchers.forEach(function (pair) {
		        var _pair = _slicedToArray(pair, 2),
		            selector = _pair[0],
		            matcher = _pair[1];

		        switch (selector) {
		          case Node.TEXT_NODE:
		            textMatchers.push(matcher);
		            break;
		          case Node.ELEMENT_NODE:
		            elementMatchers.push(matcher);
		            break;
		          default:
		            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
		              // TODO use weakmap
		              node[DOM_KEY] = node[DOM_KEY] || [];
		              node[DOM_KEY].push(matcher);
		            });
		            break;
		        }
		      });
		      return [elementMatchers, textMatchers];
		    }
		  }]);

		  return Clipboard;
		}(_module2.default);

		Clipboard.DEFAULTS = {
		  matchers: [],
		  matchVisual: true
		};

		function applyFormat(delta, format, value) {
		  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
		    return Object.keys(format).reduce(function (delta, key) {
		      return applyFormat(delta, key, format[key]);
		    }, delta);
		  } else {
		    return delta.reduce(function (delta, op) {
		      if (op.attributes && op.attributes[format]) {
		        return delta.push(op);
		      } else {
		        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
		      }
		    }, new _quillDelta2.default());
		  }
		}

		function computeStyle(node) {
		  if (node.nodeType !== Node.ELEMENT_NODE) return {};
		  var DOM_KEY = '__ql-computed-style';
		  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
		}

		function deltaEndsWith(delta, text) {
		  var endText = "";
		  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
		    var op = delta.ops[i];
		    if (typeof op.insert !== 'string') break;
		    endText = op.insert + endText;
		  }
		  return endText.slice(-1 * text.length) === text;
		}

		function isLine(node) {
		  if (node.childNodes.length === 0) return false; // Exclude embed blocks
		  var style = computeStyle(node);
		  return ['block', 'list-item'].indexOf(style.display) > -1;
		}

		function traverse(node, elementMatchers, textMatchers) {
		  // Post-order
		  if (node.nodeType === node.TEXT_NODE) {
		    return textMatchers.reduce(function (delta, matcher) {
		      return matcher(node, delta);
		    }, new _quillDelta2.default());
		  } else if (node.nodeType === node.ELEMENT_NODE) {
		    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
		      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
		      if (childNode.nodeType === node.ELEMENT_NODE) {
		        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
		          return matcher(childNode, childrenDelta);
		        }, childrenDelta);
		        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
		          return matcher(childNode, childrenDelta);
		        }, childrenDelta);
		      }
		      return delta.concat(childrenDelta);
		    }, new _quillDelta2.default());
		  } else {
		    return new _quillDelta2.default();
		  }
		}

		function matchAlias(format, node, delta) {
		  return applyFormat(delta, format, true);
		}

		function matchAttributor(node, delta) {
		  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
		  var classes = _parchment2.default.Attributor.Class.keys(node);
		  var styles = _parchment2.default.Attributor.Style.keys(node);
		  var formats = {};
		  attributes.concat(classes).concat(styles).forEach(function (name) {
		    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
		    if (attr != null) {
		      formats[attr.attrName] = attr.value(node);
		      if (formats[attr.attrName]) return;
		    }
		    attr = ATTRIBUTE_ATTRIBUTORS[name];
		    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
		      formats[attr.attrName] = attr.value(node) || undefined;
		    }
		    attr = STYLE_ATTRIBUTORS[name];
		    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
		      attr = STYLE_ATTRIBUTORS[name];
		      formats[attr.attrName] = attr.value(node) || undefined;
		    }
		  });
		  if (Object.keys(formats).length > 0) {
		    delta = applyFormat(delta, formats);
		  }
		  return delta;
		}

		function matchBlot(node, delta) {
		  var match = _parchment2.default.query(node);
		  if (match == null) return delta;
		  if (match.prototype instanceof _parchment2.default.Embed) {
		    var embed = {};
		    var value = match.value(node);
		    if (value != null) {
		      embed[match.blotName] = value;
		      delta = new _quillDelta2.default().insert(embed, match.formats(node));
		    }
		  } else if (typeof match.formats === 'function') {
		    delta = applyFormat(delta, match.blotName, match.formats(node));
		  }
		  return delta;
		}

		function matchBreak(node, delta) {
		  if (!deltaEndsWith(delta, '\n')) {
		    delta.insert('\n');
		  }
		  return delta;
		}

		function matchIgnore() {
		  return new _quillDelta2.default();
		}

		function matchIndent(node, delta) {
		  var match = _parchment2.default.query(node);
		  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
		    return delta;
		  }
		  var indent = -1,
		      parent = node.parentNode;
		  while (!parent.classList.contains('ql-clipboard')) {
		    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
		      indent += 1;
		    }
		    parent = parent.parentNode;
		  }
		  if (indent <= 0) return delta;
		  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
		}

		function matchNewline(node, delta) {
		  if (!deltaEndsWith(delta, '\n')) {
		    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
		      delta.insert('\n');
		    }
		  }
		  return delta;
		}

		function matchSpacing(node, delta) {
		  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
		    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
		    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
		      delta.insert('\n');
		    }
		  }
		  return delta;
		}

		function matchStyles(node, delta) {
		  var formats = {};
		  var style = node.style || {};
		  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
		    formats.italic = true;
		  }
		  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
		    formats.bold = true;
		  }
		  if (Object.keys(formats).length > 0) {
		    delta = applyFormat(delta, formats);
		  }
		  if (parseFloat(style.textIndent || 0) > 0) {
		    // Could be 0.5in
		    delta = new _quillDelta2.default().insert('\t').concat(delta);
		  }
		  return delta;
		}

		function matchText(node, delta) {
		  var text = node.data;
		  // Word represents empty line with <o:p>&nbsp;</o:p>
		  if (node.parentNode.tagName === 'O:P') {
		    return delta.insert(text.trim());
		  }
		  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
		    return delta;
		  }
		  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
		    // eslint-disable-next-line func-style
		    var replacer = function replacer(collapse, match) {
		      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
		      return match.length < 1 && collapse ? ' ' : match;
		    };
		    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
		    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
		    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
		      text = text.replace(/^\s+/, replacer.bind(replacer, false));
		    }
		    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
		      text = text.replace(/\s+$/, replacer.bind(replacer, false));
		    }
		  }
		  return delta.insert(text);
		}

		exports.default = Clipboard;
		exports.matchAttributor = matchAttributor;
		exports.matchBlot = matchBlot;
		exports.matchNewline = matchNewline;
		exports.matchSpacing = matchSpacing;
		exports.matchText = matchText;

		/***/ }),
		/* 56 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Bold = function (_Inline) {
		  _inherits(Bold, _Inline);

		  function Bold() {
		    _classCallCheck(this, Bold);

		    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
		  }

		  _createClass(Bold, [{
		    key: 'optimize',
		    value: function optimize(context) {
		      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
		      if (this.domNode.tagName !== this.statics.tagName[0]) {
		        this.replaceWith(this.statics.blotName);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create() {
		      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      return true;
		    }
		  }]);

		  return Bold;
		}(_inline2.default);

		Bold.blotName = 'bold';
		Bold.tagName = ['STRONG', 'B'];

		exports.default = Bold;

		/***/ }),
		/* 57 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.addControls = exports.default = undefined;

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _quillDelta = __webpack_require__(2);

		var _quillDelta2 = _interopRequireDefault(_quillDelta);

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _logger = __webpack_require__(10);

		var _logger2 = _interopRequireDefault(_logger);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var debug = (0, _logger2.default)('quill:toolbar');

		var Toolbar = function (_Module) {
		  _inherits(Toolbar, _Module);

		  function Toolbar(quill, options) {
		    _classCallCheck(this, Toolbar);

		    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

		    if (Array.isArray(_this.options.container)) {
		      var container = document.createElement('div');
		      addControls(container, _this.options.container);
		      quill.container.parentNode.insertBefore(container, quill.container);
		      _this.container = container;
		    } else if (typeof _this.options.container === 'string') {
		      _this.container = document.querySelector(_this.options.container);
		    } else {
		      _this.container = _this.options.container;
		    }
		    if (!(_this.container instanceof HTMLElement)) {
		      var _ret;

		      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
		    }
		    _this.container.classList.add('ql-toolbar');
		    _this.controls = [];
		    _this.handlers = {};
		    Object.keys(_this.options.handlers).forEach(function (format) {
		      _this.addHandler(format, _this.options.handlers[format]);
		    });
		    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
		      _this.attach(input);
		    });
		    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
		      if (type === _quill2.default.events.SELECTION_CHANGE) {
		        _this.update(range);
		      }
		    });
		    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
		      var _this$quill$selection = _this.quill.selection.getRange(),
		          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
		          range = _this$quill$selection2[0]; // quill.getSelection triggers update


		      _this.update(range);
		    });
		    return _this;
		  }

		  _createClass(Toolbar, [{
		    key: 'addHandler',
		    value: function addHandler(format, handler) {
		      this.handlers[format] = handler;
		    }
		  }, {
		    key: 'attach',
		    value: function attach(input) {
		      var _this2 = this;

		      var format = [].find.call(input.classList, function (className) {
		        return className.indexOf('ql-') === 0;
		      });
		      if (!format) return;
		      format = format.slice('ql-'.length);
		      if (input.tagName === 'BUTTON') {
		        input.setAttribute('type', 'button');
		      }
		      if (this.handlers[format] == null) {
		        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
		          debug.warn('ignoring attaching to disabled format', format, input);
		          return;
		        }
		        if (_parchment2.default.query(format) == null) {
		          debug.warn('ignoring attaching to nonexistent format', format, input);
		          return;
		        }
		      }
		      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
		      input.addEventListener(eventName, function (e) {
		        var value = void 0;
		        if (input.tagName === 'SELECT') {
		          if (input.selectedIndex < 0) return;
		          var selected = input.options[input.selectedIndex];
		          if (selected.hasAttribute('selected')) {
		            value = false;
		          } else {
		            value = selected.value || false;
		          }
		        } else {
		          if (input.classList.contains('ql-active')) {
		            value = false;
		          } else {
		            value = input.value || !input.hasAttribute('value');
		          }
		          e.preventDefault();
		        }
		        _this2.quill.focus();

		        var _quill$selection$getR = _this2.quill.selection.getRange(),
		            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
		            range = _quill$selection$getR2[0];

		        if (_this2.handlers[format] != null) {
		          _this2.handlers[format].call(_this2, value);
		        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
		          value = prompt('Enter ' + format);
		          if (!value) return;
		          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
		        } else {
		          _this2.quill.format(format, value, _quill2.default.sources.USER);
		        }
		        _this2.update(range);
		      });
		      // TODO use weakmap
		      this.controls.push([format, input]);
		    }
		  }, {
		    key: 'update',
		    value: function update(range) {
		      var formats = range == null ? {} : this.quill.getFormat(range);
		      this.controls.forEach(function (pair) {
		        var _pair = _slicedToArray(pair, 2),
		            format = _pair[0],
		            input = _pair[1];

		        if (input.tagName === 'SELECT') {
		          var option = void 0;
		          if (range == null) {
		            option = null;
		          } else if (formats[format] == null) {
		            option = input.querySelector('option[selected]');
		          } else if (!Array.isArray(formats[format])) {
		            var value = formats[format];
		            if (typeof value === 'string') {
		              value = value.replace(/\"/g, '\\"');
		            }
		            option = input.querySelector('option[value="' + value + '"]');
		          }
		          if (option == null) {
		            input.value = ''; // TODO make configurable?
		            input.selectedIndex = -1;
		          } else {
		            option.selected = true;
		          }
		        } else {
		          if (range == null) {
		            input.classList.remove('ql-active');
		          } else if (input.hasAttribute('value')) {
		            // both being null should match (default values)
		            // '1' should match with 1 (headers)
		            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
		            input.classList.toggle('ql-active', isActive);
		          } else {
		            input.classList.toggle('ql-active', formats[format] != null);
		          }
		        }
		      });
		    }
		  }]);

		  return Toolbar;
		}(_module2.default);

		Toolbar.DEFAULTS = {};

		function addButton(container, format, value) {
		  var input = document.createElement('button');
		  input.setAttribute('type', 'button');
		  input.classList.add('ql-' + format);
		  if (value != null) {
		    input.value = value;
		  }
		  container.appendChild(input);
		}

		function addControls(container, groups) {
		  if (!Array.isArray(groups[0])) {
		    groups = [groups];
		  }
		  groups.forEach(function (controls) {
		    var group = document.createElement('span');
		    group.classList.add('ql-formats');
		    controls.forEach(function (control) {
		      if (typeof control === 'string') {
		        addButton(group, control);
		      } else {
		        var format = Object.keys(control)[0];
		        var value = control[format];
		        if (Array.isArray(value)) {
		          addSelect(group, format, value);
		        } else {
		          addButton(group, format, value);
		        }
		      }
		    });
		    container.appendChild(group);
		  });
		}

		function addSelect(container, format, values) {
		  var input = document.createElement('select');
		  input.classList.add('ql-' + format);
		  values.forEach(function (value) {
		    var option = document.createElement('option');
		    if (value !== false) {
		      option.setAttribute('value', value);
		    } else {
		      option.setAttribute('selected', 'selected');
		    }
		    input.appendChild(option);
		  });
		  container.appendChild(input);
		}

		Toolbar.DEFAULTS = {
		  container: null,
		  handlers: {
		    clean: function clean() {
		      var _this3 = this;

		      var range = this.quill.getSelection();
		      if (range == null) return;
		      if (range.length == 0) {
		        var formats = this.quill.getFormat();
		        Object.keys(formats).forEach(function (name) {
		          // Clean functionality in existing apps only clean inline formats
		          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
		            _this3.quill.format(name, false);
		          }
		        });
		      } else {
		        this.quill.removeFormat(range, _quill2.default.sources.USER);
		      }
		    },
		    direction: function direction(value) {
		      var align = this.quill.getFormat()['align'];
		      if (value === 'rtl' && align == null) {
		        this.quill.format('align', 'right', _quill2.default.sources.USER);
		      } else if (!value && align === 'right') {
		        this.quill.format('align', false, _quill2.default.sources.USER);
		      }
		      this.quill.format('direction', value, _quill2.default.sources.USER);
		    },
		    indent: function indent(value) {
		      var range = this.quill.getSelection();
		      var formats = this.quill.getFormat(range);
		      var indent = parseInt(formats.indent || 0);
		      if (value === '+1' || value === '-1') {
		        var modifier = value === '+1' ? 1 : -1;
		        if (formats.direction === 'rtl') modifier *= -1;
		        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
		      }
		    },
		    link: function link(value) {
		      if (value === true) {
		        value = prompt('Enter link URL:');
		      }
		      this.quill.format('link', value, _quill2.default.sources.USER);
		    },
		    list: function list(value) {
		      var range = this.quill.getSelection();
		      var formats = this.quill.getFormat(range);
		      if (value === 'check') {
		        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
		          this.quill.format('list', false, _quill2.default.sources.USER);
		        } else {
		          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
		        }
		      } else {
		        this.quill.format('list', value, _quill2.default.sources.USER);
		      }
		    }
		  }
		};

		exports.default = Toolbar;
		exports.addControls = addControls;

		/***/ }),
		/* 58 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

		/***/ }),
		/* 59 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _picker = __webpack_require__(28);

		var _picker2 = _interopRequireDefault(_picker);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ColorPicker = function (_Picker) {
		  _inherits(ColorPicker, _Picker);

		  function ColorPicker(select, label) {
		    _classCallCheck(this, ColorPicker);

		    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

		    _this.label.innerHTML = label;
		    _this.container.classList.add('ql-color-picker');
		    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
		      item.classList.add('ql-primary');
		    });
		    return _this;
		  }

		  _createClass(ColorPicker, [{
		    key: 'buildItem',
		    value: function buildItem(option) {
		      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
		      item.style.backgroundColor = option.getAttribute('value') || '';
		      return item;
		    }
		  }, {
		    key: 'selectItem',
		    value: function selectItem(item, trigger) {
		      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
		      var colorLabel = this.label.querySelector('.ql-color-label');
		      var value = item ? item.getAttribute('data-value') || '' : '';
		      if (colorLabel) {
		        if (colorLabel.tagName === 'line') {
		          colorLabel.style.stroke = value;
		        } else {
		          colorLabel.style.fill = value;
		        }
		      }
		    }
		  }]);

		  return ColorPicker;
		}(_picker2.default);

		exports.default = ColorPicker;

		/***/ }),
		/* 60 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _picker = __webpack_require__(28);

		var _picker2 = _interopRequireDefault(_picker);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var IconPicker = function (_Picker) {
		  _inherits(IconPicker, _Picker);

		  function IconPicker(select, icons) {
		    _classCallCheck(this, IconPicker);

		    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

		    _this.container.classList.add('ql-icon-picker');
		    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
		      item.innerHTML = icons[item.getAttribute('data-value') || ''];
		    });
		    _this.defaultItem = _this.container.querySelector('.ql-selected');
		    _this.selectItem(_this.defaultItem);
		    return _this;
		  }

		  _createClass(IconPicker, [{
		    key: 'selectItem',
		    value: function selectItem(item, trigger) {
		      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
		      item = item || this.defaultItem;
		      this.label.innerHTML = item.innerHTML;
		    }
		  }]);

		  return IconPicker;
		}(_picker2.default);

		exports.default = IconPicker;

		/***/ }),
		/* 61 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Tooltip = function () {
		  function Tooltip(quill, boundsContainer) {
		    var _this = this;

		    _classCallCheck(this, Tooltip);

		    this.quill = quill;
		    this.boundsContainer = boundsContainer || document.body;
		    this.root = quill.addContainer('ql-tooltip');
		    this.root.innerHTML = this.constructor.TEMPLATE;
		    if (this.quill.root === this.quill.scrollingContainer) {
		      this.quill.root.addEventListener('scroll', function () {
		        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
		      });
		    }
		    this.hide();
		  }

		  _createClass(Tooltip, [{
		    key: 'hide',
		    value: function hide() {
		      this.root.classList.add('ql-hidden');
		    }
		  }, {
		    key: 'position',
		    value: function position(reference) {
		      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
		      // root.scrollTop should be 0 if scrollContainer !== root
		      var top = reference.bottom + this.quill.root.scrollTop;
		      this.root.style.left = left + 'px';
		      this.root.style.top = top + 'px';
		      this.root.classList.remove('ql-flip');
		      var containerBounds = this.boundsContainer.getBoundingClientRect();
		      var rootBounds = this.root.getBoundingClientRect();
		      var shift = 0;
		      if (rootBounds.right > containerBounds.right) {
		        shift = containerBounds.right - rootBounds.right;
		        this.root.style.left = left + shift + 'px';
		      }
		      if (rootBounds.left < containerBounds.left) {
		        shift = containerBounds.left - rootBounds.left;
		        this.root.style.left = left + shift + 'px';
		      }
		      if (rootBounds.bottom > containerBounds.bottom) {
		        var height = rootBounds.bottom - rootBounds.top;
		        var verticalShift = reference.bottom - reference.top + height;
		        this.root.style.top = top - verticalShift + 'px';
		        this.root.classList.add('ql-flip');
		      }
		      return shift;
		    }
		  }, {
		    key: 'show',
		    value: function show() {
		      this.root.classList.remove('ql-editing');
		      this.root.classList.remove('ql-hidden');
		    }
		  }]);

		  return Tooltip;
		}();

		exports.default = Tooltip;

		/***/ }),
		/* 62 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _emitter = __webpack_require__(8);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _base = __webpack_require__(43);

		var _base2 = _interopRequireDefault(_base);

		var _link = __webpack_require__(27);

		var _link2 = _interopRequireDefault(_link);

		var _selection = __webpack_require__(15);

		var _icons = __webpack_require__(41);

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

		var SnowTheme = function (_BaseTheme) {
		  _inherits(SnowTheme, _BaseTheme);

		  function SnowTheme(quill, options) {
		    _classCallCheck(this, SnowTheme);

		    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
		      options.modules.toolbar.container = TOOLBAR_CONFIG;
		    }

		    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

		    _this.quill.container.classList.add('ql-snow');
		    return _this;
		  }

		  _createClass(SnowTheme, [{
		    key: 'extendToolbar',
		    value: function extendToolbar(toolbar) {
		      toolbar.container.classList.add('ql-snow');
		      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
		      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
		      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
		      if (toolbar.container.querySelector('.ql-link')) {
		        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
		          toolbar.handlers['link'].call(toolbar, !context.format.link);
		        });
		      }
		    }
		  }]);

		  return SnowTheme;
		}(_base2.default);

		SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        link: function link(value) {
		          if (value) {
		            var range = this.quill.getSelection();
		            if (range == null || range.length == 0) return;
		            var preview = this.quill.getText(range);
		            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
		              preview = 'mailto:' + preview;
		            }
		            var tooltip = this.quill.theme.tooltip;
		            tooltip.edit('link', preview);
		          } else {
		            this.quill.format('link', false);
		          }
		        }
		      }
		    }
		  }
		});

		var SnowTooltip = function (_BaseTooltip) {
		  _inherits(SnowTooltip, _BaseTooltip);

		  function SnowTooltip(quill, bounds) {
		    _classCallCheck(this, SnowTooltip);

		    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

		    _this2.preview = _this2.root.querySelector('a.ql-preview');
		    return _this2;
		  }

		  _createClass(SnowTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this3 = this;

		      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
		      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
		        if (_this3.root.classList.contains('ql-editing')) {
		          _this3.save();
		        } else {
		          _this3.edit('link', _this3.preview.textContent);
		        }
		        event.preventDefault();
		      });
		      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
		        if (_this3.linkRange != null) {
		          var range = _this3.linkRange;
		          _this3.restoreFocus();
		          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
		          delete _this3.linkRange;
		        }
		        event.preventDefault();
		        _this3.hide();
		      });
		      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
		        if (range == null) return;
		        if (range.length === 0 && source === _emitter2.default.sources.USER) {
		          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
		              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
		              link = _quill$scroll$descend2[0],
		              offset = _quill$scroll$descend2[1];

		          if (link != null) {
		            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
		            var preview = _link2.default.formats(link.domNode);
		            _this3.preview.textContent = preview;
		            _this3.preview.setAttribute('href', preview);
		            _this3.show();
		            _this3.position(_this3.quill.getBounds(_this3.linkRange));
		            return;
		          }
		        } else {
		          delete _this3.linkRange;
		        }
		        _this3.hide();
		      });
		    }
		  }, {
		    key: 'show',
		    value: function show() {
		      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
		      this.root.removeAttribute('data-mode');
		    }
		  }]);

		  return SnowTooltip;
		}(_base.BaseTooltip);

		SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

		exports.default = SnowTheme;

		/***/ }),
		/* 63 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _core = __webpack_require__(29);

		var _core2 = _interopRequireDefault(_core);

		var _align = __webpack_require__(36);

		var _direction = __webpack_require__(38);

		var _indent = __webpack_require__(64);

		var _blockquote = __webpack_require__(65);

		var _blockquote2 = _interopRequireDefault(_blockquote);

		var _header = __webpack_require__(66);

		var _header2 = _interopRequireDefault(_header);

		var _list = __webpack_require__(67);

		var _list2 = _interopRequireDefault(_list);

		var _background = __webpack_require__(37);

		var _color = __webpack_require__(26);

		var _font = __webpack_require__(39);

		var _size = __webpack_require__(40);

		var _bold = __webpack_require__(56);

		var _bold2 = _interopRequireDefault(_bold);

		var _italic = __webpack_require__(68);

		var _italic2 = _interopRequireDefault(_italic);

		var _link = __webpack_require__(27);

		var _link2 = _interopRequireDefault(_link);

		var _script = __webpack_require__(69);

		var _script2 = _interopRequireDefault(_script);

		var _strike = __webpack_require__(70);

		var _strike2 = _interopRequireDefault(_strike);

		var _underline = __webpack_require__(71);

		var _underline2 = _interopRequireDefault(_underline);

		var _image = __webpack_require__(72);

		var _image2 = _interopRequireDefault(_image);

		var _video = __webpack_require__(73);

		var _video2 = _interopRequireDefault(_video);

		var _code = __webpack_require__(13);

		var _code2 = _interopRequireDefault(_code);

		var _formula = __webpack_require__(74);

		var _formula2 = _interopRequireDefault(_formula);

		var _syntax = __webpack_require__(75);

		var _syntax2 = _interopRequireDefault(_syntax);

		var _toolbar = __webpack_require__(57);

		var _toolbar2 = _interopRequireDefault(_toolbar);

		var _icons = __webpack_require__(41);

		var _icons2 = _interopRequireDefault(_icons);

		var _picker = __webpack_require__(28);

		var _picker2 = _interopRequireDefault(_picker);

		var _colorPicker = __webpack_require__(59);

		var _colorPicker2 = _interopRequireDefault(_colorPicker);

		var _iconPicker = __webpack_require__(60);

		var _iconPicker2 = _interopRequireDefault(_iconPicker);

		var _tooltip = __webpack_require__(61);

		var _tooltip2 = _interopRequireDefault(_tooltip);

		var _bubble = __webpack_require__(108);

		var _bubble2 = _interopRequireDefault(_bubble);

		var _snow = __webpack_require__(62);

		var _snow2 = _interopRequireDefault(_snow);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_core2.default.register({
		  'attributors/attribute/direction': _direction.DirectionAttribute,

		  'attributors/class/align': _align.AlignClass,
		  'attributors/class/background': _background.BackgroundClass,
		  'attributors/class/color': _color.ColorClass,
		  'attributors/class/direction': _direction.DirectionClass,
		  'attributors/class/font': _font.FontClass,
		  'attributors/class/size': _size.SizeClass,

		  'attributors/style/align': _align.AlignStyle,
		  'attributors/style/background': _background.BackgroundStyle,
		  'attributors/style/color': _color.ColorStyle,
		  'attributors/style/direction': _direction.DirectionStyle,
		  'attributors/style/font': _font.FontStyle,
		  'attributors/style/size': _size.SizeStyle
		}, true);

		_core2.default.register({
		  'formats/align': _align.AlignClass,
		  'formats/direction': _direction.DirectionClass,
		  'formats/indent': _indent.IndentClass,

		  'formats/background': _background.BackgroundStyle,
		  'formats/color': _color.ColorStyle,
		  'formats/font': _font.FontClass,
		  'formats/size': _size.SizeClass,

		  'formats/blockquote': _blockquote2.default,
		  'formats/code-block': _code2.default,
		  'formats/header': _header2.default,
		  'formats/list': _list2.default,

		  'formats/bold': _bold2.default,
		  'formats/code': _code.Code,
		  'formats/italic': _italic2.default,
		  'formats/link': _link2.default,
		  'formats/script': _script2.default,
		  'formats/strike': _strike2.default,
		  'formats/underline': _underline2.default,

		  'formats/image': _image2.default,
		  'formats/video': _video2.default,

		  'formats/list/item': _list.ListItem,

		  'modules/formula': _formula2.default,
		  'modules/syntax': _syntax2.default,
		  'modules/toolbar': _toolbar2.default,

		  'themes/bubble': _bubble2.default,
		  'themes/snow': _snow2.default,

		  'ui/icons': _icons2.default,
		  'ui/picker': _picker2.default,
		  'ui/icon-picker': _iconPicker2.default,
		  'ui/color-picker': _colorPicker2.default,
		  'ui/tooltip': _tooltip2.default
		}, true);

		exports.default = _core2.default;

		/***/ }),
		/* 64 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.IndentClass = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var IdentAttributor = function (_Parchment$Attributor) {
		  _inherits(IdentAttributor, _Parchment$Attributor);

		  function IdentAttributor() {
		    _classCallCheck(this, IdentAttributor);

		    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
		  }

		  _createClass(IdentAttributor, [{
		    key: 'add',
		    value: function add(node, value) {
		      if (value === '+1' || value === '-1') {
		        var indent = this.value(node) || 0;
		        value = value === '+1' ? indent + 1 : indent - 1;
		      }
		      if (value === 0) {
		        this.remove(node);
		        return true;
		      } else {
		        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
		      }
		    }
		  }, {
		    key: 'canAdd',
		    value: function canAdd(node, value) {
		      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
		    }
		  }, {
		    key: 'value',
		    value: function value(node) {
		      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
		    }
		  }]);

		  return IdentAttributor;
		}(_parchment2.default.Attributor.Class);

		var IndentClass = new IdentAttributor('indent', 'ql-indent', {
		  scope: _parchment2.default.Scope.BLOCK,
		  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
		});

		exports.IndentClass = IndentClass;

		/***/ }),
		/* 65 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Blockquote = function (_Block) {
		  _inherits(Blockquote, _Block);

		  function Blockquote() {
		    _classCallCheck(this, Blockquote);

		    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
		  }

		  return Blockquote;
		}(_block2.default);

		Blockquote.blotName = 'blockquote';
		Blockquote.tagName = 'blockquote';

		exports.default = Blockquote;

		/***/ }),
		/* 66 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Header = function (_Block) {
		  _inherits(Header, _Block);

		  function Header() {
		    _classCallCheck(this, Header);

		    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		  }

		  _createClass(Header, null, [{
		    key: 'formats',
		    value: function formats(domNode) {
		      return this.tagName.indexOf(domNode.tagName) + 1;
		    }
		  }]);

		  return Header;
		}(_block2.default);

		Header.blotName = 'header';
		Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

		exports.default = Header;

		/***/ }),
		/* 67 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.ListItem = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _block = __webpack_require__(4);

		var _block2 = _interopRequireDefault(_block);

		var _container = __webpack_require__(25);

		var _container2 = _interopRequireDefault(_container);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ListItem = function (_Block) {
		  _inherits(ListItem, _Block);

		  function ListItem() {
		    _classCallCheck(this, ListItem);

		    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
		  }

		  _createClass(ListItem, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (name === List.blotName && !value) {
		        this.replaceWith(_parchment2.default.create(this.statics.scope));
		      } else {
		        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      if (this.prev == null && this.next == null) {
		        this.parent.remove();
		      } else {
		        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
		      }
		    }
		  }, {
		    key: 'replaceWith',
		    value: function replaceWith(name, value) {
		      this.parent.isolate(this.offset(this.parent), this.length());
		      if (name === this.parent.statics.blotName) {
		        this.parent.replaceWith(name, value);
		        return this;
		      } else {
		        this.parent.unwrap();
		        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'formats',
		    value: function formats(domNode) {
		      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
		    }
		  }]);

		  return ListItem;
		}(_block2.default);

		ListItem.blotName = 'list-item';
		ListItem.tagName = 'LI';

		var List = function (_Container) {
		  _inherits(List, _Container);

		  _createClass(List, null, [{
		    key: 'create',
		    value: function create(value) {
		      var tagName = value === 'ordered' ? 'OL' : 'UL';
		      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
		      if (value === 'checked' || value === 'unchecked') {
		        node.setAttribute('data-checked', value === 'checked');
		      }
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      if (domNode.tagName === 'OL') return 'ordered';
		      if (domNode.tagName === 'UL') {
		        if (domNode.hasAttribute('data-checked')) {
		          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
		        } else {
		          return 'bullet';
		        }
		      }
		      return undefined;
		    }
		  }]);

		  function List(domNode) {
		    _classCallCheck(this, List);

		    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

		    var listEventHandler = function listEventHandler(e) {
		      if (e.target.parentNode !== domNode) return;
		      var format = _this2.statics.formats(domNode);
		      var blot = _parchment2.default.find(e.target);
		      if (format === 'checked') {
		        blot.format('list', 'unchecked');
		      } else if (format === 'unchecked') {
		        blot.format('list', 'checked');
		      }
		    };

		    domNode.addEventListener('touchstart', listEventHandler);
		    domNode.addEventListener('mousedown', listEventHandler);
		    return _this2;
		  }

		  _createClass(List, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (this.children.length > 0) {
		        this.children.tail.format(name, value);
		      }
		    }
		  }, {
		    key: 'formats',
		    value: function formats() {
		      // We don't inherit from FormatBlot
		      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
		    }
		  }, {
		    key: 'insertBefore',
		    value: function insertBefore(blot, ref) {
		      if (blot instanceof ListItem) {
		        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
		      } else {
		        var index = ref == null ? this.length() : ref.offset(this);
		        var after = this.split(index);
		        after.parent.insertBefore(blot, after);
		      }
		    }
		  }, {
		    key: 'optimize',
		    value: function optimize(context) {
		      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
		      var next = this.next;
		      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
		        next.moveChildren(this);
		        next.remove();
		      }
		    }
		  }, {
		    key: 'replace',
		    value: function replace(target) {
		      if (target.statics.blotName !== this.statics.blotName) {
		        var item = _parchment2.default.create(this.statics.defaultChild);
		        target.moveChildren(item);
		        this.appendChild(item);
		      }
		      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
		    }
		  }]);

		  return List;
		}(_container2.default);

		List.blotName = 'list';
		List.scope = _parchment2.default.Scope.BLOCK_BLOT;
		List.tagName = ['OL', 'UL'];
		List.defaultChild = 'list-item';
		List.allowedChildren = [ListItem];

		exports.ListItem = ListItem;
		exports.default = List;

		/***/ }),
		/* 68 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _bold = __webpack_require__(56);

		var _bold2 = _interopRequireDefault(_bold);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Italic = function (_Bold) {
		  _inherits(Italic, _Bold);

		  function Italic() {
		    _classCallCheck(this, Italic);

		    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
		  }

		  return Italic;
		}(_bold2.default);

		Italic.blotName = 'italic';
		Italic.tagName = ['EM', 'I'];

		exports.default = Italic;

		/***/ }),
		/* 69 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Script = function (_Inline) {
		  _inherits(Script, _Inline);

		  function Script() {
		    _classCallCheck(this, Script);

		    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
		  }

		  _createClass(Script, null, [{
		    key: 'create',
		    value: function create(value) {
		      if (value === 'super') {
		        return document.createElement('sup');
		      } else if (value === 'sub') {
		        return document.createElement('sub');
		      } else {
		        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
		      }
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      if (domNode.tagName === 'SUB') return 'sub';
		      if (domNode.tagName === 'SUP') return 'super';
		      return undefined;
		    }
		  }]);

		  return Script;
		}(_inline2.default);

		Script.blotName = 'script';
		Script.tagName = ['SUB', 'SUP'];

		exports.default = Script;

		/***/ }),
		/* 70 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Strike = function (_Inline) {
		  _inherits(Strike, _Inline);

		  function Strike() {
		    _classCallCheck(this, Strike);

		    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
		  }

		  return Strike;
		}(_inline2.default);

		Strike.blotName = 'strike';
		Strike.tagName = 'S';

		exports.default = Strike;

		/***/ }),
		/* 71 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _inline = __webpack_require__(6);

		var _inline2 = _interopRequireDefault(_inline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Underline = function (_Inline) {
		  _inherits(Underline, _Inline);

		  function Underline() {
		    _classCallCheck(this, Underline);

		    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
		  }

		  return Underline;
		}(_inline2.default);

		Underline.blotName = 'underline';
		Underline.tagName = 'U';

		exports.default = Underline;

		/***/ }),
		/* 72 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _link = __webpack_require__(27);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ATTRIBUTES = ['alt', 'height', 'width'];

		var Image = function (_Parchment$Embed) {
		  _inherits(Image, _Parchment$Embed);

		  function Image() {
		    _classCallCheck(this, Image);

		    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
		  }

		  _createClass(Image, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (ATTRIBUTES.indexOf(name) > -1) {
		        if (value) {
		          this.domNode.setAttribute(name, value);
		        } else {
		          this.domNode.removeAttribute(name);
		        }
		      } else {
		        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
		      if (typeof value === 'string') {
		        node.setAttribute('src', this.sanitize(value));
		      }
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return ATTRIBUTES.reduce(function (formats, attribute) {
		        if (domNode.hasAttribute(attribute)) {
		          formats[attribute] = domNode.getAttribute(attribute);
		        }
		        return formats;
		      }, {});
		    }
		  }, {
		    key: 'match',
		    value: function match(url) {
		      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
		      );
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('src');
		    }
		  }]);

		  return Image;
		}(_parchment2.default.Embed);

		Image.blotName = 'image';
		Image.tagName = 'IMG';

		exports.default = Image;

		/***/ }),
		/* 73 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _block = __webpack_require__(4);

		var _link = __webpack_require__(27);

		var _link2 = _interopRequireDefault(_link);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var ATTRIBUTES = ['height', 'width'];

		var Video = function (_BlockEmbed) {
		  _inherits(Video, _BlockEmbed);

		  function Video() {
		    _classCallCheck(this, Video);

		    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
		  }

		  _createClass(Video, [{
		    key: 'format',
		    value: function format(name, value) {
		      if (ATTRIBUTES.indexOf(name) > -1) {
		        if (value) {
		          this.domNode.setAttribute(name, value);
		        } else {
		          this.domNode.removeAttribute(name);
		        }
		      } else {
		        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
		      }
		    }
		  }], [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
		      node.setAttribute('frameborder', '0');
		      node.setAttribute('allowfullscreen', true);
		      node.setAttribute('src', this.sanitize(value));
		      return node;
		    }
		  }, {
		    key: 'formats',
		    value: function formats(domNode) {
		      return ATTRIBUTES.reduce(function (formats, attribute) {
		        if (domNode.hasAttribute(attribute)) {
		          formats[attribute] = domNode.getAttribute(attribute);
		        }
		        return formats;
		      }, {});
		    }
		  }, {
		    key: 'sanitize',
		    value: function sanitize(url) {
		      return _link2.default.sanitize(url);
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('src');
		    }
		  }]);

		  return Video;
		}(_block.BlockEmbed);

		Video.blotName = 'video';
		Video.className = 'ql-video';
		Video.tagName = 'IFRAME';

		exports.default = Video;

		/***/ }),
		/* 74 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.FormulaBlot = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _embed = __webpack_require__(35);

		var _embed2 = _interopRequireDefault(_embed);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var FormulaBlot = function (_Embed) {
		  _inherits(FormulaBlot, _Embed);

		  function FormulaBlot() {
		    _classCallCheck(this, FormulaBlot);

		    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
		  }

		  _createClass(FormulaBlot, null, [{
		    key: 'create',
		    value: function create(value) {
		      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
		      if (typeof value === 'string') {
		        window.katex.render(value, node, {
		          throwOnError: false,
		          errorColor: '#f00'
		        });
		        node.setAttribute('data-value', value);
		      }
		      return node;
		    }
		  }, {
		    key: 'value',
		    value: function value(domNode) {
		      return domNode.getAttribute('data-value');
		    }
		  }]);

		  return FormulaBlot;
		}(_embed2.default);

		FormulaBlot.blotName = 'formula';
		FormulaBlot.className = 'ql-formula';
		FormulaBlot.tagName = 'SPAN';

		var Formula = function (_Module) {
		  _inherits(Formula, _Module);

		  _createClass(Formula, null, [{
		    key: 'register',
		    value: function register() {
		      _quill2.default.register(FormulaBlot, true);
		    }
		  }]);

		  function Formula() {
		    _classCallCheck(this, Formula);

		    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

		    if (window.katex == null) {
		      throw new Error('Formula module requires KaTeX.');
		    }
		    return _this2;
		  }

		  return Formula;
		}(_module2.default);

		exports.FormulaBlot = FormulaBlot;
		exports.default = Formula;

		/***/ }),
		/* 75 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.CodeToken = exports.CodeBlock = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _parchment = __webpack_require__(0);

		var _parchment2 = _interopRequireDefault(_parchment);

		var _quill = __webpack_require__(5);

		var _quill2 = _interopRequireDefault(_quill);

		var _module = __webpack_require__(9);

		var _module2 = _interopRequireDefault(_module);

		var _code = __webpack_require__(13);

		var _code2 = _interopRequireDefault(_code);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SyntaxCodeBlock = function (_CodeBlock) {
		  _inherits(SyntaxCodeBlock, _CodeBlock);

		  function SyntaxCodeBlock() {
		    _classCallCheck(this, SyntaxCodeBlock);

		    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
		  }

		  _createClass(SyntaxCodeBlock, [{
		    key: 'replaceWith',
		    value: function replaceWith(block) {
		      this.domNode.textContent = this.domNode.textContent;
		      this.attach();
		      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
		    }
		  }, {
		    key: 'highlight',
		    value: function highlight(_highlight) {
		      var text = this.domNode.textContent;
		      if (this.cachedText !== text) {
		        if (text.trim().length > 0 || this.cachedText == null) {
		          this.domNode.innerHTML = _highlight(text);
		          this.domNode.normalize();
		          this.attach();
		        }
		        this.cachedText = text;
		      }
		    }
		  }]);

		  return SyntaxCodeBlock;
		}(_code2.default);

		SyntaxCodeBlock.className = 'ql-syntax';

		var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
		  scope: _parchment2.default.Scope.INLINE
		});

		var Syntax = function (_Module) {
		  _inherits(Syntax, _Module);

		  _createClass(Syntax, null, [{
		    key: 'register',
		    value: function register() {
		      _quill2.default.register(CodeToken, true);
		      _quill2.default.register(SyntaxCodeBlock, true);
		    }
		  }]);

		  function Syntax(quill, options) {
		    _classCallCheck(this, Syntax);

		    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

		    if (typeof _this2.options.highlight !== 'function') {
		      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
		    }
		    var timer = null;
		    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
		      clearTimeout(timer);
		      timer = setTimeout(function () {
		        _this2.highlight();
		        timer = null;
		      }, _this2.options.interval);
		    });
		    _this2.highlight();
		    return _this2;
		  }

		  _createClass(Syntax, [{
		    key: 'highlight',
		    value: function highlight() {
		      var _this3 = this;

		      if (this.quill.selection.composing) return;
		      this.quill.update(_quill2.default.sources.USER);
		      var range = this.quill.getSelection();
		      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
		        code.highlight(_this3.options.highlight);
		      });
		      this.quill.update(_quill2.default.sources.SILENT);
		      if (range != null) {
		        this.quill.setSelection(range, _quill2.default.sources.SILENT);
		      }
		    }
		  }]);

		  return Syntax;
		}(_module2.default);

		Syntax.DEFAULTS = {
		  highlight: function () {
		    if (window.hljs == null) return null;
		    return function (text) {
		      var result = window.hljs.highlightAuto(text);
		      return result.value;
		    };
		  }(),
		  interval: 1000
		};

		exports.CodeBlock = SyntaxCodeBlock;
		exports.CodeToken = CodeToken;
		exports.default = Syntax;

		/***/ }),
		/* 76 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

		/***/ }),
		/* 77 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

		/***/ }),
		/* 78 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

		/***/ }),
		/* 79 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

		/***/ }),
		/* 80 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

		/***/ }),
		/* 81 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

		/***/ }),
		/* 82 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

		/***/ }),
		/* 83 */
		/***/ (function(module, exports) {

		module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

		/***/ }),
		/* 84 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

		/***/ }),
		/* 85 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

		/***/ }),
		/* 86 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

		/***/ }),
		/* 87 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

		/***/ }),
		/* 88 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

		/***/ }),
		/* 89 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

		/***/ }),
		/* 90 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

		/***/ }),
		/* 91 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

		/***/ }),
		/* 92 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

		/***/ }),
		/* 93 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

		/***/ }),
		/* 94 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

		/***/ }),
		/* 95 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

		/***/ }),
		/* 96 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

		/***/ }),
		/* 97 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

		/***/ }),
		/* 98 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

		/***/ }),
		/* 99 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

		/***/ }),
		/* 100 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

		/***/ }),
		/* 101 */
		/***/ (function(module, exports) {

		module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

		/***/ }),
		/* 102 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

		/***/ }),
		/* 103 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

		/***/ }),
		/* 104 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

		/***/ }),
		/* 105 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

		/***/ }),
		/* 106 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

		/***/ }),
		/* 107 */
		/***/ (function(module, exports) {

		module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

		/***/ }),
		/* 108 */
		/***/ (function(module, exports, __webpack_require__) {


		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = exports.BubbleTooltip = undefined;

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _extend = __webpack_require__(3);

		var _extend2 = _interopRequireDefault(_extend);

		var _emitter = __webpack_require__(8);

		var _emitter2 = _interopRequireDefault(_emitter);

		var _base = __webpack_require__(43);

		var _base2 = _interopRequireDefault(_base);

		var _selection = __webpack_require__(15);

		var _icons = __webpack_require__(41);

		var _icons2 = _interopRequireDefault(_icons);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

		var BubbleTheme = function (_BaseTheme) {
		  _inherits(BubbleTheme, _BaseTheme);

		  function BubbleTheme(quill, options) {
		    _classCallCheck(this, BubbleTheme);

		    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
		      options.modules.toolbar.container = TOOLBAR_CONFIG;
		    }

		    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

		    _this.quill.container.classList.add('ql-bubble');
		    return _this;
		  }

		  _createClass(BubbleTheme, [{
		    key: 'extendToolbar',
		    value: function extendToolbar(toolbar) {
		      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
		      this.tooltip.root.appendChild(toolbar.container);
		      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
		      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
		    }
		  }]);

		  return BubbleTheme;
		}(_base2.default);

		BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
		  modules: {
		    toolbar: {
		      handlers: {
		        link: function link(value) {
		          if (!value) {
		            this.quill.format('link', false);
		          } else {
		            this.quill.theme.tooltip.edit();
		          }
		        }
		      }
		    }
		  }
		});

		var BubbleTooltip = function (_BaseTooltip) {
		  _inherits(BubbleTooltip, _BaseTooltip);

		  function BubbleTooltip(quill, bounds) {
		    _classCallCheck(this, BubbleTooltip);

		    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

		    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
		      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
		      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
		        _this2.show();
		        // Lock our width so we will expand beyond our offsetParent boundaries
		        _this2.root.style.left = '0px';
		        _this2.root.style.width = '';
		        _this2.root.style.width = _this2.root.offsetWidth + 'px';
		        var lines = _this2.quill.getLines(range.index, range.length);
		        if (lines.length === 1) {
		          _this2.position(_this2.quill.getBounds(range));
		        } else {
		          var lastLine = lines[lines.length - 1];
		          var index = _this2.quill.getIndex(lastLine);
		          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
		          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
		          _this2.position(_bounds);
		        }
		      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
		        _this2.hide();
		      }
		    });
		    return _this2;
		  }

		  _createClass(BubbleTooltip, [{
		    key: 'listen',
		    value: function listen() {
		      var _this3 = this;

		      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
		      this.root.querySelector('.ql-close').addEventListener('click', function () {
		        _this3.root.classList.remove('ql-editing');
		      });
		      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
		        // Let selection be restored by toolbar handlers before repositioning
		        setTimeout(function () {
		          if (_this3.root.classList.contains('ql-hidden')) return;
		          var range = _this3.quill.getSelection();
		          if (range != null) {
		            _this3.position(_this3.quill.getBounds(range));
		          }
		        }, 1);
		      });
		    }
		  }, {
		    key: 'cancel',
		    value: function cancel() {
		      this.show();
		    }
		  }, {
		    key: 'position',
		    value: function position(reference) {
		      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
		      var arrow = this.root.querySelector('.ql-tooltip-arrow');
		      arrow.style.marginLeft = '';
		      if (shift === 0) return shift;
		      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
		    }
		  }]);

		  return BubbleTooltip;
		}(_base.BaseTooltip);

		BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

		exports.BubbleTooltip = BubbleTooltip;
		exports.default = BubbleTheme;

		/***/ }),
		/* 109 */
		/***/ (function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(63);


		/***/ })
		/******/ ])["default"];
		}); 
	} (quill$1));
	return quill$1.exports;
}

requireQuill();

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// Tipo string para salvar o nome em vez do índice
var TipoMensagem;
(function (TipoMensagem) {
    TipoMensagem["INFO"] = "INFO";
    TipoMensagem["WARNING"] = "WARNING";
    TipoMensagem["ERROR"] = "ERROR";
    TipoMensagem["CRITICAL"] = "CRITICAL";
    TipoMensagem["SUCCESS"] = "SUCCESS";
})(TipoMensagem || (TipoMensagem = {}));
var AutoFix;
(function (AutoFix) {
    AutoFix["INFORMAR_NORMA"] = "\u00C9 necess\u00E1rio informar a norma a ser alterada";
    AutoFix["OMISSIS_ANTES"] = "\u00C9 necess\u00E1rio uma linha pontilhada antes deste dispositivo";
    AutoFix["OMISSIS_SEQUENCIAIS"] = "N\u00E3o pode haver mais de uma linha pontilhada sequencialmente";
    AutoFix["RENUMERAR_DISPOSITIVO"] = "Numere o dispositivo";
})(AutoFix || (AutoFix = {}));

/* eslint-disable prettier/prettier */
class NotaRodape {
    constructor({ id, numero, texto }) {
        this.id = id;
        this.numero = numero;
        this.texto = texto;
    }
}
const NOTA_RODAPE_INPUT_EVENT = 'nota-rodape:input';
const NOTA_RODAPE_CHANGE_EVENT = 'nota-rodape:change';
const NOTA_RODAPE_REMOVE_EVENT = 'nota-rodape:remove';

// import { EditorTextoRicoComponent } from '../richtext/editor-texto-rico.component';
let LexmlUiCommons = class LexmlUiCommons extends LitElement {
    constructor() {
        super(...arguments);
        this._log = () => {
            if (!this._destinoEl) {
                console.warn('lexml-ui-destino não encontrado');
                return;
            }
            if (!this._dataEl) {
                console.warn('lexml-ui-data não encontrado');
                return;
            }
            if (!this._opcoesImpressaoEl) {
                console.warn('lexml-ui-opcoes-impressao não encontrado');
                return;
            }
            const destino = this._destinoEl.getDestino();
            console.log('--------------------- [Destino] ---------------------');
            console.log(destino);
            const data = this._dataEl.getData();
            console.log('--------------------- [Data] ---------------------');
            console.log(data);
            const opcoesImpressao = this._opcoesImpressaoEl.getOpcoesImpressao();
            console.log('--------------------- [OpcoesImpressao] ---------------------');
            console.log(opcoesImpressao);
        };
        // *********************************************
        // ******************************************* Itens para o Teste do Autocomplete
        this._nomesParlamentares = [
            'Davi Alcolumbre',
            'Rodrigo Pacheco',
            'Jaques Wagner',
            'Randolfe Rodrigues',
            'Eliziane Gama',
            'Sérgio Moro',
            'Eduardo Braga',
            'Tasso Jereissati',
            'Omar Aziz',
            'Simone Tebet',
        ];
        this._nomeSelecionado = '';
        this._onAutocomplete = (e) => {
            this._nomeSelecionado = e.detail.value; // item escolhido da lista
        };
        this._onInput = (e) => {
            this._nomeSelecionado = e.target.value ?? '';
        };
        // ******************************************* Fim dos Itens para o Autocomplete
        // ******************************************* Itens para o Teste do Alert
        this._tipoIdx = 0;
        // Recebe o total via seletorHost (o lexml-ui-alertas seta isso)
        this.totalAlertas = 0;
        // Demo local de alertas (substitui Redux neste teste)
        this.alertasDemo = [
            {
                id: 'a1',
                tipo: TipoMensagem.INFO,
                mensagem: 'Bem-vindo! Este é um alerta informativo.',
                podeFechar: true,
            },
            {
                id: 'a2',
                tipo: TipoMensagem.WARNING,
                mensagem: 'Atenção: verifique os dados preenchidos.',
                podeFechar: true,
            },
        ];
        this.tiposCiclo = [
            TipoMensagem.INFO,
            TipoMensagem.WARNING,
            TipoMensagem.ERROR,
            TipoMensagem.CRITICAL,
            TipoMensagem.SUCCESS,
        ];
        this.labelTipo = {
            [TipoMensagem.INFO]: 'INFO',
            [TipoMensagem.WARNING]: 'WARNING',
            [TipoMensagem.ERROR]: 'ERROR',
            [TipoMensagem.CRITICAL]: 'CRITICAL',
            [TipoMensagem.SUCCESS]: 'SUCCESS',
        };
        this.adicionarAlertaDemo = () => {
            const tipo = this.tiposCiclo[this._tipoIdx];
            this._tipoIdx = (this._tipoIdx + 1) % this.tiposCiclo.length;
            const agora = new Date().toLocaleTimeString();
            const novo = {
                id: this.gerarId(),
                tipo,
                mensagem: `[${this.labelTipo[tipo]}] Alerta criado As disparidades são ainda maiores quando se avalia as diferentes regiões do Brasil: no Norte, a média de investimento anual é de R$ 66,52 por habitante e, no Nordeste, de R$ 87,21 — muito abaixo dos R$ 171,49 registrados para o Sudeste. Os dados são do Sistema Nacional de Informações em Saneamento Básico (Sinisa – 2023) Fonte: Agência Senado ${agora}.`,
                podeFechar: true,
            };
            this.alertasDemo = [novo, ...this.alertasDemo];
        };
        this.removerAlertaDemo = (id) => {
            this.alertasDemo = this.alertasDemo.filter(a => a.id !== id);
        };
        this.limparAlertasDemo = () => {
            this.alertasDemo = [];
        };
        // ******************************************* Fim dos Itens para o Teste do Alert
        // ******************************************* Itens para o Teste do Destino
        this.comissoesTeste = [
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCDD',
                nome: 'Comissão de Comunicação e Direito Digital',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CSP',
                nome: 'Comissão de Segurança Pública',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CDD',
                nome: 'Comissão de Defesa da Democracia',
            },
            { siglaCasaLegislativa: 'SF', sigla: 'CEsp', nome: 'Comissão de Esporte' },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CTFC',
                nome: 'Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CRA',
                nome: 'Comissão de Agricultura e Reforma Agrária',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CDR',
                nome: 'Comissão de Desenvolvimento Regional e Turismo',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCT',
                nome: 'Comissão de Ciência, Tecnologia, Inovação e Informática',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CMA',
                nome: 'Comissão de Meio Ambiente',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CI',
                nome: 'Comissão de Serviços de Infraestrutura',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CRE',
                nome: 'Comissão de Relações Exteriores e Defesa Nacional',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CE',
                nome: 'Comissão de Educação e Cultura',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CAS',
                nome: 'Comissão de Assuntos Sociais',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCJ',
                nome: 'Comissão de Constituição, Justiça e Cidadania',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CAE',
                nome: 'Comissão de Assuntos Econômicos',
            },
        ];
    }
    createRenderRoot() {
        return this;
    }
    gerarId() {
        return 'a' + Math.random().toString(36).slice(2, 8);
    }
    // ******************************************* Fim dos Itens para o Teste do Destino
    render() {
        return html `
      <style>
        lexml-ui-commons {
          display: block;
          padding: 25px;
          color: var(--lexml-ui-commons-text-color, #000);
        }
        .linha {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .caixa {
          background: #f2f2f2;
          padding: 12px;
          width: 1000px;
          border-radius: 8px;
        }
        .area-texto {
          height: 200px;
        }
      </style>
      <div id="main-container">
        <button @click=${this._log}>APRESENTAR VALORES NO CONSOLE</button>
        <h2>Start Projeto LEXML UI COMMONS</h2>
        <h2>Teste wa-input</h2>
        <wa-input label="Texto" placeholder="Digite um texto"></wa-input>
        <br />

        <h2>Teste EditorTextoRicoComponent</h2>
        <div class="teste">
          <lexml-ui-editor-texto-rico height=400 orientacaoNotaRodaPe=abaixo ></lexml-ui-editor-texto-rico>
        </div>
        <br />
        <lexml-ui-editor-texto-rico
            .toolbar=${'italic'}
          ></lexml-ui-editor-texto-rico>
        <!-- <div class="area-texto">
          <lexml-ui-editor-texto-rico></lexml-ui-editor-texto-rico>
        </div>
        <br />
        <br />
        <br />
          

        <br />
        <br />
        <br />

        <h2>Teste AutoCompletComponent</h2>
        <lexml-ui-autocomplete
          label="Parlamentar"
          .items=${this._nomesParlamentares}
          .value=${this._nomeSelecionado}
          @autocomplete=${this._onAutocomplete}
          @input=${this._onInput}
        ></lexml-ui-autocomplete>
        <h4>Teste</h4>
        <lexml-autocomplete-universal
          label="Parlamentar"
          .mode=${'sync'}
          .items=${this._nomesParlamentares}
          .value=${this._nomeSelecionado}
          @autocomplete=${this._onAutocomplete}
        ></lexml-autocomplete-universal>
        <br />
        <h2>Teste DestinoComponent</h2>
        <lexml-ui-destino .comissoes=${this.comissoesTeste}></lexml-ui-destino>
        <br />
        <h2>Teste DataComponent</h2>
        <lexml-ui-data></lexml-ui-data>
        <br />
        <h2>Teste OpcoesImpressaoComponent</h2>
        <lexml-ui-opcoes-impressao></lexml-ui-opcoes-impressao>
        <h2>Teste AlertasComponent</h2>
        <br />
        <div class="linha">
          <h2 style="margin: 0">Teste AlertasComponent</h2>
          <div id="contadorAvisos">
            <wa-badge attention="none">${this.totalAlertas}</wa-badge>
          </div>
          <button @click=${this.adicionarAlertaDemo}>Adicionar alerta</button>
          <button @click=${this.limparAlertasDemo}>Limpar alertas</button>
        </div>

        <div class="caixa">
          <lexml-ui-alertas
            .alertas=${this.alertasDemo}
            .removeAlert=${(id) => this.removerAlertaDemo(id)}
            .clearAlerts=${() => this.limparAlertasDemo()}
            .seletorHost=${'lexml-ui-commons'}
            .seletorBadge=${'#contadorAvisos wa-badge'}
            @alertas:alterados=${(e) => {
            this.totalAlertas = e.detail.total;
        }}
          ></lexml-ui-alertas>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    `;
    }
    renumerarNotasRodape() {
        let numeroInicial = 1;
        [...this.querySelectorAll('lexml-ui-editor-texto-rico')].forEach((ed) => {
            ed.renumerarNotasRodape(numeroInicial);
            numeroInicial += ed.getNotasRodape().length;
        });
    }
    firstUpdated() {
        this.querySelector('#main-container')?.addEventListener(NOTA_RODAPE_CHANGE_EVENT, this.renumerarNotasRodape);
        this.querySelector('#main-container')?.addEventListener(NOTA_RODAPE_REMOVE_EVENT, this.renumerarNotasRodape);
    }
};
__decorate([
    query('lexml-ui-destino')
], LexmlUiCommons.prototype, "_destinoEl", void 0);
__decorate([
    query('lexml-ui-data')
], LexmlUiCommons.prototype, "_dataEl", void 0);
__decorate([
    query('lexml-ui-opcoes-impressao')
], LexmlUiCommons.prototype, "_opcoesImpressaoEl", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "_nomesParlamentares", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "_nomeSelecionado", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "_tipoIdx", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "totalAlertas", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "alertasDemo", void 0);
LexmlUiCommons = __decorate([
    customElement('lexml-ui-commons')
], LexmlUiCommons);

class Option {
    constructor(value, description) {
        this.value = value;
        this.description = description;
    }
}
let LexmlAutocompleteUniversal = class LexmlAutocompleteUniversal extends LitElement {
    constructor() {
        super(...arguments);
        // ---------- UI props ----------
        this.label = '';
        this.placeholder = '';
        this.disabled = false;
        this.readonly = false;
        this.showOnEmpty = false;
        // ---------- Modo de operação ----------
        // Preferir 'mode'; manter 'async' como alias p/ retrocompatibilidade.
        this.mode = 'sync';
        // ---------- Dados / callbacks ----------
        // Para 'sync': pode ser string[] ou Option[]
        this.items = [];
        // Para 'async': callback de busca
        this.onSearch = undefined;
        this.onSelect = () => { };
        this.onChange = () => { };
        this.onClick = () => { };
        // ---------- Comportamento ----------
        this.minChars = 3;
        this.maxSuggestions = 10;
        this.opened = false;
        this._bound = {};
        this._interval = 300; // debounce
        this._blur = false;
        this._syncListWidth = () => {
            if (!this._suggestionEl || !this.contentElement)
                return;
            const w = this.contentElement.getBoundingClientRect().width || 0;
            if (w > 0) {
                this._suggestionEl.style.boxSizing = 'border-box';
                this._suggestionEl.style.minWidth = `${w}px`;
                this._suggestionEl.style.width = `${w}px`;
            }
        };
        // ---------------- suggestions state ----------------
        this._currentOptions = [];
    }
    set async(v) {
        this.mode = v ? 'async' : 'sync';
    }
    get async() {
        return this.mode === 'async';
    }
    get value() {
        return (this.contentElement && this.contentElement.value) || '';
    }
    set value(v) {
        if (!this.contentElement) {
            this._tempValue = v;
            return;
        }
        this.contentElement.value = v ?? '';
    }
    // Render
    render() {
        return html `
      <style>
        .suggest-container {
          position: relative;
        }
        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid #ccc;
          background: #fff;
          overflow: auto;
        }
        li {
          padding: 6px 8px;
          cursor: pointer;
        }
        li.active {
          background: #f5f5f5;
        }
        [hidden] {
          display: none;
        }
        .lexml-autocomplete-input {
          width: 100%;
        }
        wa-input {
          font-size: 14px;
        }
      </style>

      <slot id="dropdown-input">
        <wa-input
          id="defaultInput"
          class="lexml-autocomplete-input"
          type="text"
          .value=${this.value || ''}
          label=${this.label}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
        ></wa-input>
      </slot>

      <div class="suggest-container">
        <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mousedown=${(e) => e.preventDefault()}
        >
          ${this._currentOptions.map((opt) => html ` <li
                @click=${() => this._selectOption(opt)}
                title=${opt.description}
              >
                ${opt.description}
              </li>`)}
        </ul>
      </div>
    `;
    }
    // ---------------- lifecycle / element refs ----------------
    get contentElement() {
        if (this._inputEl)
            return this._inputEl;
        if (!this.hasUpdated)
            return undefined;
        const slotEl = this.shadowRoot.getElementById('dropdown-input');
        const assigned = slotEl.assignedElements();
        this._inputEl = assigned.length
            ? assigned[0]
            : this.shadowRoot.getElementById('defaultInput');
        return this._inputEl;
    }
    firstUpdated() {
        this._suggestionEl = this.shadowRoot.getElementById('suggestions');
        this._syncListWidth();
        this._ro = new ResizeObserver(() => this._syncListWidth());
        this._ro.observe(this.contentElement);
        this._io = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting)
                this._syncListWidth();
        }, { threshold: 0.01 });
        this._io.observe(this);
        this._bound.onKeyDown = this._handleKeyDown.bind(this);
        this._bound.onKeyUp = this._handleKeyUp.bind(this);
        this._bound.onFocus = this._handleFocus.bind(this);
        this._bound.onBlur = this._handleBlur.bind(this);
        this._bound.onChange = (e) => this._handleChange(e?.target?.value ?? this.value);
        this._bound.onClick = (e) => this._handleClick(e?.target?.value ?? this.value);
        const el = this.contentElement;
        el.addEventListener('keydown', this._bound.onKeyDown);
        el.addEventListener('keyup', this._bound.onKeyUp);
        el.addEventListener('focus', this._bound.onFocus);
        el.addEventListener('blur', this._bound.onBlur);
        el.addEventListener('wa-input', this._bound.onChange);
        el.addEventListener('click', this._bound.onClick);
        if (this._tempValue !== undefined)
            el.value = this._tempValue;
        this._recalcList(); // primeira passada
    }
    disconnectedCallback() {
        this._ro?.disconnect();
        this._io?.disconnect();
        window.removeEventListener('resize', this._syncListWidth);
        if (this.contentElement) {
            const el = this.contentElement;
            el.removeEventListener('keydown', this._bound.onKeyDown);
            el.removeEventListener('keyup', this._bound.onKeyUp);
            el.removeEventListener('focus', this._bound.onFocus);
            el.removeEventListener('blur', this._bound.onBlur);
            el.removeEventListener('wa-input', this._bound.onChange);
            el.removeEventListener('click', this._bound.onClick);
        }
        super.disconnectedCallback();
    }
    updated(changed) {
        if (changed.has('items') || changed.has('mode')) {
            this._recalcList();
        }
        if (changed.has('opened') &&
            this.opened &&
            this._suggestionEl?.childElementCount) {
            this._highlightedEl = this._suggestionEl.children[0];
            this._highlightedEl.classList.add('active');
        }
    }
    _itemsToOptions(src) {
        return (src || []).map(it => typeof it === 'string' ? new Option(it, it) : it);
    }
    _recalcList() {
        if (this.mode === 'sync') {
            this._currentOptions = this.showOnEmpty
                ? this._itemsToOptions(this.items).slice(0, this.maxSuggestions)
                : [];
            this.requestUpdate();
        }
    }
    _setSuggestions(list) {
        this._currentOptions = this._itemsToOptions(list).slice(0, this.maxSuggestions);
        this._currentOptions.length ? this.open() : this.close();
        this.requestUpdate();
    }
    // ---------------- open/close ----------------
    open() {
        this._syncListWidth();
        if (this._currentOptions.length)
            this.opened = true;
    }
    close() {
        this.opened = false;
        this._highlightedEl = null;
    }
    // ---------------- select ----------------
    _selectOption(opt) {
        // escreve só o texto no input (sempre string)
        this.contentElement.value = opt?.description ?? '';
        this.onSelect?.(opt);
        // compat com o autocomplete "antigo" que emitia evento
        this.dispatchEvent(new CustomEvent('autocomplete', {
            bubbles: true,
            composed: true,
            detail: { value: this.contentElement.value, option: opt },
        }));
        this.close();
        this.contentElement?.focus?.();
    }
    // ---------------- keyboard / input handlers ----------------
    _handleKeyDown(ev) {
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    _handleKeyUp(ev) {
        switch (ev.key) {
            case 'ArrowUp':
                if (this._highlightedEl?.previousElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightedEl.classList.remove('active');
                    this._highlightedEl = this._highlightedEl.previousElementSibling;
                    this._highlightedEl.classList.add('active');
                }
                break;
            case 'ArrowDown':
                if (this._highlightedEl?.nextElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightedEl.classList.remove('active');
                    this._highlightedEl = this._highlightedEl.nextElementSibling;
                    this._highlightedEl.classList.add('active');
                }
                else if (!this.opened && this._currentOptions.length) {
                    this.open();
                }
                break;
            case 'Enter':
                this._highlightedEl?.click?.();
                this.contentElement.blur();
                break;
            default:
                this._debouncedSearch();
        }
    }
    _debouncedSearch() {
        const q = this.value || '';
        clearTimeout(this._timer);
        const run = async () => {
            if (this.mode === 'async') {
                if (!this.onSearch)
                    return;
                if ((q?.length ?? 0) < this.minChars) {
                    this._setSuggestions([]);
                    return;
                }
                try {
                    const res = await this.onSearch(q);
                    this._setSuggestions(Array.isArray(res) ? res : []);
                }
                catch {
                    this._setSuggestions([]);
                }
            }
            else {
                // sync local: filtra items se fornecidos
                const base = this._itemsToOptions(this.items);
                if (!q) {
                    this._setSuggestions([]);
                    return;
                }
                const norm = (s) => s
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase();
                const nq = norm(q);
                // começa com, depois contém
                let out = base
                    .filter(o => norm(o.description).startsWith(nq))
                    .slice(0, this.maxSuggestions);
                if (out.length < this.maxSuggestions) {
                    out = [
                        ...out,
                        ...base.filter(o => norm(o.description).includes(nq) &&
                            !out.some(x => x.value === o.value)),
                    ].slice(0, this.maxSuggestions);
                }
                this._setSuggestions(out);
            }
        };
        this._timer = setTimeout(run, this._interval);
    }
    _handleFocus() {
        this._blur = false;
        if (this._currentOptions.length > 1)
            this.open();
    }
    _handleBlur() {
        this._blur = true;
        setTimeout(() => this.close(), 200);
    }
    _handleChange(value) {
        this.onChange?.(value);
    }
    _handleClick(value) {
        this.onClick?.(value);
        if (this.mode === 'sync') {
            const q = (this.value ?? '').trim();
            if (!q) {
                if (this.showOnEmpty)
                    this._setSuggestions(this.items);
                else
                    this.close();
                return;
            }
            if (this._currentOptions.length)
                this.open();
        }
    }
};
__decorate([
    property({ type: String })
], LexmlAutocompleteUniversal.prototype, "label", void 0);
__decorate([
    property({ type: String })
], LexmlAutocompleteUniversal.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LexmlAutocompleteUniversal.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LexmlAutocompleteUniversal.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], LexmlAutocompleteUniversal.prototype, "showOnEmpty", void 0);
__decorate([
    property({ type: String })
], LexmlAutocompleteUniversal.prototype, "mode", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LexmlAutocompleteUniversal.prototype, "async", null);
__decorate([
    property({ type: Array })
], LexmlAutocompleteUniversal.prototype, "items", void 0);
__decorate([
    property({ attribute: false })
], LexmlAutocompleteUniversal.prototype, "onSearch", void 0);
__decorate([
    property({ attribute: false })
], LexmlAutocompleteUniversal.prototype, "onSelect", void 0);
__decorate([
    property({ attribute: false })
], LexmlAutocompleteUniversal.prototype, "onChange", void 0);
__decorate([
    property({ attribute: false })
], LexmlAutocompleteUniversal.prototype, "onClick", void 0);
__decorate([
    property({ type: Number })
], LexmlAutocompleteUniversal.prototype, "minChars", void 0);
__decorate([
    property({ type: Number })
], LexmlAutocompleteUniversal.prototype, "maxSuggestions", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], LexmlAutocompleteUniversal.prototype, "opened", void 0);
__decorate([
    property({ type: String })
], LexmlAutocompleteUniversal.prototype, "value", null);
LexmlAutocompleteUniversal = __decorate([
    customElement('lexml-autocomplete-universal')
], LexmlAutocompleteUniversal);

class ColegiadoApreciador {
    constructor() {
        this.siglaCasaLegislativa = 'CN';
        this.tipoColegiado = 'Plenário';
    }
}

class RefProposicaoEmendada {
    constructor() {
        this.urn = '';
        this.sigla = '';
        this.numero = '';
        this.ano = '';
        this.ementa = '';
        this.identificacaoTexto = '';
        this.emendarTextoSubstitutivo = false;
    }
}

const autoriaCss = css `
  .lexml-autoria {
    display: block;
    font-size: var(--sl-font-size-small);
    font-family: var(--sl-font-sans);
    max-width: 700px;
  }

  .lexml-autocomplete {
    width: 100%;
  }

  .grid-autoria {
    display: grid;
    grid-template-columns: 3fr 2fr 250px;
  }

  .autoria-grid {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 0 4px 0;
    flex-wrap: wrap;
  }

  .autoria-grid--col1 {
    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .autoria-grid--col2 {
    flex: none;
    order: 1;
    flex-grow: 1;
  }

  .autoria-grid--col3 {
    flex: none;
    order: 2;
    flex-grow: 1;
  }

  [class^='autoria-grid--'] {
    margin: 0px 2px;
  }

  .autoria-grid:first-child {
    padding: 0 0 2px 0;
  }

  .autoria-header {
    width: 180px;
    padding: 0px 2px;
  }

  .autoria-buttons {
    width: 124px;
    text-align: right;
  }

  .autoria-input {
    width: 100%;
    margin: 0px;
  }

  .autoria-button {
    background-color: white;
    border: 1px solid #555;
    border-radius: 2px;
    padding: 2px 4px;
    cursor: pointer;
  }

  .autoria-label {
    display: none;
  }

  .autoria-icon {
    background-color: #555;
  }

  .icon-up {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
  }

  .icon-down {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
  }

  .icon-delete {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .assinaturas-adicionais {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    vertical-align: center;
    gap: 10px;
  }

  .assinaturas-adicionais div {
    padding-top: 5px;
  }

  .assinaturas-adicionais .autoria-input {
    display: block;
    max-width: 400px;
  }

  @media (max-width: 576px) {
    .autoria-grid {
      flex-direction: column;
    }

    .autoria-labels {
      display: none;
    }
    .autoria-label {
      display: block;
    }

    .autoria-buttons {
      width: calc(100% - 3px);
    }

    .autoria-input {
      width: calc(100% - 2px);
    }

    [class^='autoria-grid--'] {
      width: 100%;
      padding: 2px 0;
    }
  }
`;

class Destino {
    constructor() {
        this.colegiadoApreciador = 'Plenário';
        this.comissao = null;
    }
}

let DestinoComponent = class DestinoComponent extends LitElement {
    set proposicao(value) {
        this._proposicao = value;
        this.isMPV = false;
        if (this._proposicao.sigla === 'MPV') {
            this.isMPV = true;
            this._colegiadoApreciador.tipoColegiado = 'Comissão';
            if (this.isMateriaOrcamentaria) {
                this._colegiadoApreciador.siglaComissao = 'CMO';
                this._autocomplete.value = `${this._colegiadoApreciador.siglaComissao} - COMISSÃO MISTA DE PLANOS, ORÇAMENTOS PÚBLICOS E FISCALIZAÇÃO`;
            }
            else {
                this._colegiadoApreciador.siglaComissao = `CMMPV ${this._proposicao.numero}/${this._proposicao.ano}`;
                this._autocomplete.value = `${this._colegiadoApreciador.siglaComissao} - COMISSÃO MISTA DA MEDIDA PROVISÓRIA N° ${this._proposicao.numero}, DE ${this._proposicao.ano}`;
            }
        }
        this.requestUpdate();
    }
    constructor() {
        super();
        this._comissoesAutocomplete = [];
        this._comissaoSelecionada = null;
        this.isMPV = false;
        this.isPlenario = false;
        this.tipoColegiadoPlenario = false;
        this.isMateriaOrcamentaria = false;
        this.isErroComissaoSelecionada = false;
        this.criticalType = 'CRITICAL';
        this._comissoes = [];
        this._comissoesOptions = [];
        this._colegiadoApreciador = new ColegiadoApreciador();
        this._colegiadoApreciador.tipoColegiado = 'Plenário';
        this.tipoColegiadoPlenario = true;
    }
    getDestino() {
        const d = new Destino();
        d.colegiadoApreciador =
            this._colegiadoApreciador?.tipoColegiado ?? 'Plenário';
        if (d.colegiadoApreciador !== 'Plenário' && this._comissaoSelecionada) {
            d.comissao = { ...this._comissaoSelecionada };
        }
        else {
            d.comissao = null;
        }
        return d;
    }
    get proposicao() {
        return this._proposicao;
    }
    set comissoes(value) {
        this.isPlenario = false;
        if (!this._comissoes || this._comissoes.length === 0) {
            this._comissoes = value ? value : [];
            this._comissoesOptions = this.comissoes.map(comissao => new Option(comissao.sigla, `${comissao.sigla} - ${comissao.nome}`));
            this.ajustarValorAutocomplete();
            this.requestUpdate();
        }
        if (typeof value === 'undefined') {
            this.isPlenario = true;
        }
    }
    get comissoes() {
        return this._comissoes;
    }
    ajustarValorAutocomplete() {
        if (this._colegiadoApreciador?.siglaComissao) {
            const option = this._comissoesOptions.find(op => op.value === this._colegiadoApreciador.siglaComissao) || new Option('', '');
            this._selecionarComissao(option);
            this._autocomplete.value =
                option.description || this._colegiadoApreciador.siglaComissao;
        }
    }
    set colegiadoApreciador(value) {
        this._colegiadoApreciador = value ? value : new ColegiadoApreciador();
        this.tipoColegiadoPlenario =
            this._colegiadoApreciador.tipoColegiado === 'Plenário';
        if (this.tipoColegiadoPlenario) {
            this.ajustarTipoColegiadoPlenario();
        }
        else if (this._colegiadoApreciador.siglaComissao) {
            this.ajustarValorAutocomplete();
        }
        else {
            this._autocomplete.value = '';
        }
        if (!this.tipoColegiadoPlenario &&
            !this._colegiadoApreciador.siglaComissao) {
            this.criarAlertaErroComissao();
        }
        this.requestUpdate();
    }
    get colegiadoApreciador() {
        return this._colegiadoApreciador;
    }
    render() {
        return html `
      <style>
        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1em;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          flex-wrap: wrap;
          padding: 20px 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
        }

        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
        }

        .mensagem {
          font-size: 0.8em;
          font-weight: normal;
          text-align: left;
          border: 1px solid;
          padding: 4px 10px;
          margin: 10px 0;
          display: inline-block;
          border-radius: 2px;
          font-family: var(--wa-font-sans);
        }

        .mensagem--danger {
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        }
        wa-radio {
          font-size: 14px;
        }
      </style>
      <fieldset class="lexml-destino">
        <legend>Destino</legend>
        <div>
          <wa-radio-group
            id="tipoColegiado"
            .value=${this._colegiadoApreciador?.tipoColegiado}
          >
            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Plenário')}
              @wa-change=${(evt) => evt.target?.checked && this.updateTipoColegiado('Plenário')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Plenário'}
              value="Plenário"
              ?disabled=${this.isMPV || this.isPlenario}
              >Plenário</wa-radio
            >
            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Comissão')}
              @wa-change=${(evt) => evt.target?.checked && this.updateTipoColegiado('Comissão')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Comissão'}
              value="Comissão"
              ?disabled=${this.isMPV || this.isPlenario}
              >Comissão</wa-radio
            >

            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Plenário via Comissão')}
              @wa-change=${(evt) => evt.target?.checked &&
            this.updateTipoColegiado('Plenário via Comissão')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Plenário via Comissão'}
              value="Plenário via Comissão"
              ?disabled=${this.isMPV || this.isPlenario}
              >Plenário via Comissão</wa-radio
            >
          </wa-radio-group>
        </div>
        <div style="width:100%;margin-top:10px">
          <lexml-autocomplete-universal
            id="auto-complete"
            label="Comissão"
            .mode=${'sync'}
            ?readonly=${this.isMPV || this.isPlenario}
            placeholder="ex: Comissão"
            .items=${this._comissoesOptions}
            .onSelect=${(opt) => this._selecionarComissao(opt)}
            .onClick=${() => (this._autocomplete.value = '')}
            @blur=${this._blurAutoComplete}
            ?disabled=${this.isMPV ||
            this.isPlenario ||
            this.tipoColegiadoPlenario ||
            !this.comissoes?.length}
          ></lexml-autocomplete-universal>
          ${this.isErroComissaoSelecionada
            ? html `
                <div class="mensagem mensagem--danger">
                  A comissão de destino deve ser selecionada.
                </div>
              `
            : ''}
        </div>
      </fieldset>
    `;
    }
    _exibirComissoes() {
        this._autocomplete.value = '';
        this._comissoesAutocomplete = [];
    }
    criarAlertaErroComissao() {
        this.isErroComissaoSelecionada = true;
        const alerta = {
            id: 'alerta-global-comissao-nao-selecionada',
            tipo: this.criticalType,
            mensagem: 'A comissão de destino deve ser selecionada.',
            podeFechar: false,
        };
        if (this.addAlert) {
            this.addAlert(alerta);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:add', {
                bubbles: true,
                composed: true,
                detail: alerta,
            }));
        }
    }
    removerAlertaErroComissao() {
        this.isErroComissaoSelecionada = false;
        const id = 'alerta-global-comissao-nao-selecionada';
        if (this.removeAlert) {
            this.removeAlert(id);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:remove', {
                bubbles: true,
                composed: true,
                detail: { id },
            }));
        }
    }
    updateTipoColegiado(value) {
        if (!this.isMPV && !this.isPlenario) {
            this._colegiadoApreciador.tipoColegiado = value;
            this.tipoColegiadoPlenario =
                this._colegiadoApreciador.tipoColegiado === 'Plenário';
            if (this.tipoColegiadoPlenario)
                this.ajustarTipoColegiadoPlenario();
            this.requestUpdate();
        }
    }
    _selecionarComissao(item) {
        if (!item?.value)
            return;
        if (!this._colegiadoApreciador) {
            this._colegiadoApreciador = new ColegiadoApreciador();
        }
        this._comissaoSelecionada = null;
        this._comissaoSelecionada = this._comissoes.find(op => op.sigla === item.value);
        if (!this._comissaoSelecionada)
            return;
        this._colegiadoApreciador.siglaCasaLegislativa =
            this._comissaoSelecionada.siglaCasaLegislativa;
        this._colegiadoApreciador.siglaComissao = this._comissaoSelecionada.sigla;
        this.removerAlertaErroComissao();
    }
    _blurAutoComplete() {
        if (!this.comissoes?.length)
            return;
        setTimeout(() => {
            const comissao = this._autocomplete.value ?? '';
            const comissaoSelecionada = this._comissoesOptions.find(comissaoOp => comissao === comissaoOp.description);
            if (!comissaoSelecionada) {
                this._colegiadoApreciador.siglaComissao = '';
                this.criarAlertaErroComissao();
                this._autocomplete.value = '';
            }
        }, 200);
    }
    emitirEventoOnChange(origemEvento) {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento,
            },
        }));
    }
    ajustarTipoColegiadoPlenario() {
        this._autocomplete.value = '';
        this._colegiadoApreciador.siglaComissao = '';
        this.removerAlertaErroComissao();
    }
};
DestinoComponent.styles = [autoriaCss];
__decorate([
    query('#auto-complete')
], DestinoComponent.prototype, "_autocomplete", void 0);
__decorate([
    state()
], DestinoComponent.prototype, "_comissoesAutocomplete", void 0);
__decorate([
    state()
], DestinoComponent.prototype, "isErroComissaoSelecionada", void 0);
__decorate([
    property({ attribute: false })
], DestinoComponent.prototype, "addAlert", void 0);
__decorate([
    property({ attribute: false })
], DestinoComponent.prototype, "removeAlert", void 0);
__decorate([
    property({ type: String })
], DestinoComponent.prototype, "criticalType", void 0);
__decorate([
    property({ type: RefProposicaoEmendada })
], DestinoComponent.prototype, "proposicao", null);
__decorate([
    property({ type: Array, state: true })
], DestinoComponent.prototype, "comissoes", null);
__decorate([
    property({ type: Object, state: true })
], DestinoComponent.prototype, "colegiadoApreciador", null);
DestinoComponent = __decorate([
    customElement('lexml-ui-destino')
], DestinoComponent);

class Comissao {
    constructor() {
        this.siglaCasaLegislativa = 'CN';
        this.sigla = '';
        this.nome = '';
    }
}

let Data = class Data extends LitElement {
    constructor() {
        super(...arguments);
        this.data = new Date().toISOString().slice(0, 10);
        this.timerOnChange = 0;
    }
    getData() {
        if (this.optionNaoInformarData?.checked || !this.data) {
            return null;
        }
        return this.data;
    }
    firstUpdated() {
        setTimeout(() => {
            const internalLabel = this.inputData.shadowRoot?.querySelector('label');
            if (internalLabel) {
                internalLabel.addEventListener('click', () => {
                    this.selecionarRadioData();
                });
            }
            else {
                console.error('FALHA: A label interna do wa-input.');
            }
        }, 100);
    }
    selecionarRadioData() {
        const radio = this.shadowRoot?.querySelector('#radio-data-option');
        if (radio && !radio.checked) {
            radio.checked = true;
            this.setDate();
        }
    }
    updated() {
        this.inputData.value =
            this.data ||
                this.inputData.value ||
                new Date().toISOString().replace(/T.+$/, '');
        if (!this.data && !this.optionNaoInformarData.checked) {
            this.optionNaoInformarData.checked = true;
        }
    }
    render() {
        return html `
      <style>
        :host {
          font-size: 14px;
          --wa-font-size-medium: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }
        fieldset.lexml-data {
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          padding: 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          margin: 0;
        }
        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 6px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 8px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
          margin-left: 8px;
        }

        wa-radio-group {
          margin-left: 10px;
        }
        wa-radio {
          font-size: 14px;
        }
        wa-input {
          max-width: 190px;
        }
        .label-on-left {
          display: grid;
          grid-template-columns: 32px 1fr;

          wa-input {
            grid-column: 1 / -1;
            grid-row-end: span 2;
            display: grid;
            grid-template-columns: subgrid;
            gap: 0 var(--wa-space-l);
            margin-right: 20px;
            font-size: 14px;
          }
          ::part(input) {
            margin-top: -10px;
          }
          ::part(label) {
            text-align: right;
          }

          ::part(hint) {
            grid-column: 2;
          }
        }
        .fiel-click-radio {
          margin-top: -10px;
        }
        .label-on-left wa-input::part(label) {
          cursor: pointer;
        }
        @media (max-width: 480px) {
        }
      </style>
      <fieldset class="lexml-data">
        <legend>Data</legend>
        <wa-radio-group
          id="data-component"
          orientation="horizontal"
          size="medium"
          .value=${this.data ? '2' : '1'}
        >
          <wa-radio
            id="radio-data-option"
            name="data"
            value="2"
            @click=${this.setDate}
          >
            <div class="label-on-left">
              <wa-input
                id="input-data"
                label="Data"
                type="date"
                ?disabled=${!this.data}
                @input=${this.setDate}
              >
              </wa-input>
            </div>
          </wa-radio>
          <wa-radio name="data" id="no-date" value="1" @click=${this.resetDate}>
            Não informar
          </wa-radio>
        </wa-radio-group>
      </fieldset>
    `;
    }
    resetDate() {
        const original = this.data;
        this.data = '';
        if (original !== this.data) {
            this.agendarEmissaoEventoOnChange();
        }
    }
    setDate() {
        if (this.inputData) {
            const original = this.data;
            this.data = this.inputData.value;
            if (original !== this.data) {
                this.agendarEmissaoEventoOnChange();
            }
        }
    }
    agendarEmissaoEventoOnChange() {
        clearTimeout(this.timerOnChange);
        this.timerOnChange = window.setTimeout(() => this.emitirEventoOnChange(), 1000);
    }
    emitirEventoOnChange() {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento: 'data',
            },
        }));
    }
};
__decorate([
    query('#input-data')
], Data.prototype, "inputData", void 0);
__decorate([
    query('#data-component')
], Data.prototype, "group", void 0);
__decorate([
    query('#no-date')
], Data.prototype, "optionNaoInformarData", void 0);
__decorate([
    property({ type: String })
], Data.prototype, "data", void 0);
Data = __decorate([
    customElement('lexml-ui-data')
], Data);

class OpcoesImpressao {
    constructor() {
        this.imprimirBrasao = true;
        this.textoCabecalho = '';
        this.reduzirEspacoEntreLinhas = false;
        this.tamanhoFonte = 14;
    }
}

let OpcoesImpressaoComponent = class OpcoesImpressaoComponent extends LitElement {
    constructor() {
        super(...arguments);
        this._opcoesImpressao = new OpcoesImpressao();
        this.timerEmitirEventoOnChange = 0;
    }
    set opcoesImpressao(value) {
        this._opcoesImpressao = value ? value : new OpcoesImpressao();
        this.requestUpdate();
    }
    get opcoesImpressao() {
        return this._opcoesImpressao;
    }
    getOpcoesImpressao() {
        const tamanho = Number(this.tamanhoFonte?.value ?? this._opcoesImpressao?.tamanhoFonte ?? 14);
        return {
            imprimirBrasao: !!this._opcoesImpressao?.imprimirBrasao,
            textoCabecalho: this._opcoesImpressao?.textoCabecalho ?? '',
            reduzirEspacoEntreLinhas: !!this._opcoesImpressao?.reduzirEspacoEntreLinhas,
            tamanhoFonte: Number.isFinite(tamanho) ? tamanho : 14,
        };
    }
    firstUpdated() {
        this.tamanhoFonte.addEventListener('wa-change', this._atualizarTamanhoFonte);
    }
    render() {
        return html `
      <style>
        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          flex-wrap: wrap;
          padding: 20px 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          margin: 1em 0 2em 0;
        }

        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
        }

        @media (max-width: 480px) {
        }
        wa-select {
          max-width: 400px;
        }
        label {
          line-height: var(--wa-toggle-size);
          font-size: var(--wa-font-size-xs);
          display: flex;
          align-items: center;
          gap: 5px;
        }
      </style>

      <fieldset class="lexml-opcoes-impressao">
        <legend>Opções de impressão</legend>
        <div>
          <label class="lbl-imprimir-brasao" for="chk-imprimir-brasao">
            <input
              type="checkbox"
              id="chk-imprimir-brasao"
              ?checked=${this._opcoesImpressao?.imprimirBrasao}
              @input=${(ev) => this._atualizarImprimirBrasao(ev)}
            />
            Imprimir brasão
          </label>
        </div>
        <wa-input
          type="text"
          id="input-cabecalho"
          name="textoCabecalho"
          label="Texto do cabeçalho"
          value=${this._opcoesImpressao?.textoCabecalho}
          @input=${(ev) => this._atualizarTextoCabecalho(ev)}
          size="small"
        ></wa-input>
        <div>
          <wa-select
            id="select-tamanho-fonte"
            label="Tamanho da letra"
            size="small"
            value=${this._opcoesImpressao?.tamanhoFonte}
          >
            <wa-option value="14">14</wa-option>
            <wa-option value="16">16</wa-option>
            <wa-option value="18">18</wa-option>
          </wa-select>
        </div>
        <div>
          <label class="lbl-reduzir-espaco" for="chk-reduzir-espaco">
            <input
              type="checkbox"
              id="chk-reduzir-espaco"
              ?checked=${this._opcoesImpressao?.reduzirEspacoEntreLinhas}
              @input=${(ev) => this._atualizarReduzirEspacoEntreLinhas(ev)}
            />
            Reduzir espaço entre linhas
          </label>
        </div>
      </fieldset>
    `;
    }
    _atualizarTextoCabecalho(ev) {
        this._opcoesImpressao.textoCabecalho = ev.target.value;
        this.requestUpdate();
    }
    _atualizarImprimirBrasao(ev) {
        this._opcoesImpressao.imprimirBrasao = ev.target.checked;
        this.requestUpdate();
    }
    _atualizarTamanhoFonte(ev) {
        const valorFonte = parseInt(ev.currentTarget.value);
        this._opcoesImpressao.tamanhoFonte = valorFonte;
        this.requestUpdate();
    }
    _atualizarReduzirEspacoEntreLinhas(ev) {
        this._opcoesImpressao.reduzirEspacoEntreLinhas = ev.target.checked;
        this.requestUpdate();
    }
    agendarEmissaoEventoOnChange(origemEvento) {
        clearInterval(this.timerEmitirEventoOnChange);
        this.timerEmitirEventoOnChange = window.setTimeout(() => this.emitirEventoOnChange(origemEvento), 50);
    }
    emitirEventoOnChange(origemEvento) {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento,
            },
        }));
    }
};
__decorate([
    query('#select-tamanho-fonte')
], OpcoesImpressaoComponent.prototype, "tamanhoFonte", void 0);
__decorate([
    property({ type: Object, state: true })
], OpcoesImpressaoComponent.prototype, "opcoesImpressao", null);
OpcoesImpressaoComponent = __decorate([
    customElement('lexml-ui-opcoes-impressao')
], OpcoesImpressaoComponent);

const mapTipoMensagem = {
    [TipoMensagem.INFO]: { icon: 'circle-info', variant: 'brand' },
    [TipoMensagem.WARNING]: { icon: 'triangle-exclamation', variant: 'warning' },
    [TipoMensagem.ERROR]: { icon: 'circle-exclamation', variant: 'danger' },
    [TipoMensagem.CRITICAL]: { icon: 'circle-exclamation', variant: 'danger' },
    [TipoMensagem.SUCCESS]: { icon: 'circle-check', variant: 'success' },
};
let AlertasComponent = class AlertasComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.alertas = [];
        this.seletorHost = 'lexml-emenda';
        this.seletorBadge = '#contadorAvisos wa-badge';
        this._lastCount = 0;
        this.onCloseClick = (e) => {
            e.stopPropagation();
            e.stopImmediatePropagation?.();
            const id = e.currentTarget?.dataset?.id;
            if (id)
                this.removeAlertaById(id);
        };
    }
    stateChanged(state) {
        this.alertas = state.elementoReducer.ui?.alertas || [];
    }
    getAlertIcon(tipoAlerta) {
        return html `<wa-icon
      slot="icon"
      name="${mapTipoMensagem[tipoAlerta].icon}"
    ></wa-icon>`;
    }
    limparAlertas() {
        if (this.clearAlerts) {
            this.clearAlerts();
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:clear', {
                bubbles: true,
                composed: true,
            }));
        }
    }
    removeAlertaById(id) {
        if (this.removeAlert) {
            this.removeAlert(id);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:remove', {
                bubbles: true,
                composed: true,
                detail: { id },
            }));
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('alertas')) {
            this.alertas?.forEach(alerta => {
                this.shadowRoot
                    ?.getElementById(alerta.id)
                    ?.addEventListener('click', (event) => {
                    event.stopImmediatePropagation();
                    this.removeAlertaById(event.target.id);
                });
            });
            const host = this.seletorHost
                ? document.querySelector(this.seletorHost)
                : null;
            if (host) {
                host.totalAlertas = this.alertas.length;
            }
            const oldValue = changedProperties.get('alertas')?.length || 0;
            const newValue = this.alertas.length;
            if (host && newValue > oldValue) {
                const badge = this.seletorBadge
                    ? document.querySelector(this.seletorBadge)
                    : null;
                if (badge) {
                    badge.setAttribute('attention', 'none');
                    void badge.offsetWidth;
                    badge.setAttribute('attention', 'pulse');
                }
            }
            this.dispatchEvent(new CustomEvent('alertas:alterados', {
                bubbles: true,
                composed: true,
                detail: { total: newValue, aumentou: newValue > oldValue },
            }));
        }
    }
    render() {
        return html `
      <style>
        wa-callout {
          box-shadow: var(--wa-shadow-l);
          margin: 20px;
        }
        .field__alert {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .alert__close-button {
          cursor: pointer;
        }
        wa-button::part(base) {
          background-color: transparent;
        }
      </style>
      ${this.alertas.map(alerta => html ` ${alerta.podeFechar
            ? html `
                <wa-callout
                  variant="${mapTipoMensagem[alerta.tipo].variant}"
                  appearance="outlined filled"
                >
                  ${this.getAlertIcon(alerta.tipo)}
                  <div class="field__alert">
                    ${alerta.mensagem}
                    <wa-button
                      appearance="plain"
                      size="small"
                      class="alert__close-button"
                      data-id="${alerta.id}"
                      aria-label="fechar"
                      @click=${this.onCloseClick}
                    >
                      <wa-icon
                        class="icon__close"
                        name="xmark"
                        label="Fechar"
                      ></wa-icon>
                    </wa-button>
                  </div>
                </wa-callout>
              `
            : html `<wa-callout
                variant="${mapTipoMensagem[alerta.tipo].variant}"
                appearance="outlined"
              >
                ${this.getAlertIcon(alerta.tipo)}${alerta.mensagem}
              </wa-callout> `}`)}
    `;
    }
};
__decorate([
    property({ type: Array })
], AlertasComponent.prototype, "alertas", void 0);
__decorate([
    property({ attribute: false })
], AlertasComponent.prototype, "removeAlert", void 0);
__decorate([
    property({ attribute: false })
], AlertasComponent.prototype, "clearAlerts", void 0);
__decorate([
    property({ type: String })
], AlertasComponent.prototype, "seletorHost", void 0);
__decorate([
    property({ type: String })
], AlertasComponent.prototype, "seletorBadge", void 0);
AlertasComponent = __decorate([
    customElement('lexml-ui-alertas')
], AlertasComponent);

const REGEX_ACCENTS = /[\u0300-\u036f]/g;
const encodeHtml = (texto) => {
    const p = document.createElement('p');
    p.textContent = texto;
    return p.innerHTML || '';
};
const decodeHtml = (texto) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = texto;
    return txt.value;
};

let Autocomplete = class Autocomplete extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.label = '';
        this.opened = false;
        this.maxSuggestions = 10;
        this._suggestions = [];
        this._bound = {};
        this._blur = false;
        this._mouseEnter = false;
    }
    render() {
        return html `
      <style>
        .suggest-container {
          position: relative;
        }

        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid grey;
          background: white;
        }
        li {
          padding: 4px;
          cursor: pointer;
        }
        li.active {
          background: whitesmoke;
        }
        [hidden] {
          display: none;
        }

        .lexml-autocomplete-input {
          width: 100%;
        }

        @media (max-width: 576px) {
          .lexml-autocomplete-label {
            width: calc(100% - 2px);
            display: block;
          }
          .lexml-autocomplete-input {
            width: calc(100% - 2px);
          }
        }
      </style>
      <slot id="dropdown-input">
        <wa-input
          id="defaultInput"
          class="lexml-autocomplete-input"
          label=${this.label}
          type="text"
          placeholder=""
          size="small"
          .value=${this.value || ''}
        >
        </wa-input>
      </slot>
      <div class="suggest-container">
        <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
          @mousedown=${(e) => e.preventDefault()}
        >
          ${this._suggestions.map((item) => html `<li @click=${() => this._selectFromMouse(item)}>
                ${item}
              </li>`)}
        </ul>
      </div>
    `;
    }
    /**
     * Input element getter
     */
    get contentElement() {
        if (this._inputEl)
            return this._inputEl; // Cache
        if (!this.hasUpdated)
            return undefined; // No shadow root, no element to use
        const slotElement = this.shadowRoot.getElementById('dropdown-input');
        const slotInputList = slotElement.assignedElements();
        this._inputEl = slotInputList.length
            ? slotInputList[0]
            : this.shadowRoot.getElementById('defaultInput');
        return this._inputEl;
    }
    /**
     * Value getter from input element.
     */
    get value() {
        return this.contentElement && this.contentElement.value;
    }
    /**
     * Value setter to input element.
     */
    set value(value) {
        if (!this.contentElement) {
            this._tempValue = value;
            return;
        }
        this.contentElement.value = value;
    }
    firstUpdated() {
        this._suggestionEl = this.shadowRoot.getElementById('suggestions');
        this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        this._bound.onKeyDown = this._handleKeyDown.bind(this);
        this._bound.onKeyUp = this._handleKeyUp.bind(this);
        this._bound.onFocus = this._handleFocus.bind(this);
        this._bound.onBlur = this._handleBlur.bind(this);
        this.contentElement.addEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.addEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.addEventListener('focus', this._bound.onFocus);
        this.contentElement.addEventListener('blur', this._bound.onBlur);
        if (this._tempValue !== undefined) {
            this.contentElement.value = this._tempValue;
        }
    }
    disconnectedCallback() {
        if (!this.contentElement)
            return; // no events to remove
        this.contentElement.removeEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.removeEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.removeEventListener('focus', this._bound.onFocus);
        this.contentElement.removeEventListener('blur', this._bound.onBlur);
    }
    focus(options) {
        if (this.contentElement) {
            this.contentElement.focus(options);
        }
    }
    updated(changed) {
        if (changed.has('opened') &&
            this.opened &&
            this._suggestionEl.childElementCount) {
            // Highlight the first when there are suggestions
            // eslint-disable-next-line prefer-destructuring
            this._highlightedEl = this._suggestionEl.children[0];
            this._highlightedEl.classList.add('active');
        }
    }
    /**
     * Open suggestions.
     */
    open() {
        if (this._suggestionEl.style.width === '0px') {
            this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        }
        if (this._suggestions.length) {
            this.opened = true;
        }
    }
    /**
     * Close suggestions.
     */
    close() {
        this.opened = false;
        this._highlightedEl = null;
    }
    /**
     * Suggest autocomplete items.
     * @param {Array<String>} suggestions
     */
    suggest(suggestions) {
        this._suggestions = suggestions || [];
        // eslint-disable-next-line no-unused-expressions
        this._suggestions.length > 1 ||
            (this._suggestions.length === 1 &&
                this._suggestions[0] !== this.contentElement.value)
            ? this.open()
            : this.close();
        this.requestUpdate();
    }
    /**
     * Autocomplete input with `value`.
     * @param {String} value
     */
    autocomplete(value) {
        this.contentElement.value = value;
        this.close();
        this.dispatchEvent(new CustomEvent('autocomplete', {
            detail: { value },
            composed: true,
            bubbles: true,
        }));
    }
    _selectFromMouse(item) {
        this.autocomplete(item);
        this.contentElement?.focus?.();
    }
    _highlightPrev() {
        if (!this._highlightedEl || !this._highlightedEl.previousElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.previousElementSibling;
        this._highlightedEl.classList.add('active');
    }
    _highlightNext() {
        if (!this._highlightedEl || !this._highlightedEl.nextElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.nextElementSibling;
        this._highlightedEl.classList.add('active');
    }
    // eslint-disable-next-line class-methods-use-this
    _handleKeyDown(ev) {
        // Prevent up and down from behaving as home and end on some browsers
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    _handleKeyUp(ev) {
        switch (ev.key) {
            case 'ArrowUp':
                if (this._highlightedEl?.previousElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightPrev();
                }
                break;
            case 'ArrowDown':
                if (this._highlightedEl?.nextElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightNext();
                }
                break;
            case 'Enter':
                // Select
                // eslint-disable-next-line no-unused-expressions
                this._highlightedEl && this._highlightedEl.click();
                break;
            default:
                // TODO debounce
                if (this.items.length) {
                    const { value } = this.contentElement;
                    const normalizedValue = value
                        .normalize('NFD')
                        .replace(REGEX_ACCENTS, '');
                    this.suggest(this._findSuggetions(normalizedValue));
                }
        }
    }
    _findSuggetions(value, nItemsResult = this.maxSuggestions) {
        if (!value) {
            return [];
        }
        let suggestions = this._filterStartWith(value, nItemsResult);
        if (suggestions.length < this.maxSuggestions) {
            suggestions = [
                ...suggestions,
                ...this._filterContains(value, this.maxSuggestions - suggestions.length).filter(item => !suggestions.includes(item)),
            ];
        }
        return suggestions;
    }
    _filterStartWith(value, itemsResult = this.maxSuggestions) {
        const regexStartWith = new RegExp('^' + value, 'gi');
        return ((value &&
            this.items
                .filter(item => item
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .match(regexStartWith))
                .slice(0, itemsResult)) ||
            []);
    }
    _filterContains(value, itemsResult = this.maxSuggestions) {
        const regexContains = new RegExp(value, 'gi');
        return ((value &&
            this.items
                .filter(item => item
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .match(regexContains))
                .slice(0, itemsResult)) ||
            []);
    }
    _handleFocus() {
        this._blur = false;
        // eslint-disable-next-line no-unused-expressions
        this._suggestions.length > 1 && this.open();
    }
    _handleBlur() {
        this._blur = true;
        // eslint-disable-next-line no-unused-expressions
        // !this._mouseEnter && this.close();
        setTimeout(() => this.close(), 200);
        this._suggestions = [];
    }
    // Handle mouse change focus to suggestions
    _handleItemMouseEnter() {
        this._mouseEnter = true;
    }
    _handleItemMouseLeave() {
        this._mouseEnter = false;
        // eslint-disable-next-line no-unused-expressions
        this._blur && setTimeout(() => this.close(), 500); // Give user some slack before closing
    }
};
__decorate([
    property({ type: Array })
], Autocomplete.prototype, "items", void 0);
__decorate([
    property({ type: String })
], Autocomplete.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Autocomplete.prototype, "opened", void 0);
__decorate([
    property({ type: Number })
], Autocomplete.prototype, "maxSuggestions", void 0);
__decorate([
    property({ type: String })
], Autocomplete.prototype, "value", null);
Autocomplete = __decorate([
    customElement('lexml-ui-autocomplete')
], Autocomplete);

let AutocompleteAsync = class AutocompleteAsync extends LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.label = '';
        this.items = [];
        this.disabled = false;
        this.opened = false;
        this.async = true;
        this.maxSuggestions = 10;
        this.onSearch = (value) => console.log('Texto da pesquisa', value);
        this.onSelect = (value) => console.log('Item selecionado:', value);
        this.onChange = (value) => console.log('Mudança texto:', value);
        this.onClick = (value) => console.log('Click:', value);
        this._interval = 1000;
        this._bound = {};
        this._blur = false;
        this._mouseEnter = false;
        this._search = () => {
            const { value } = this.contentElement;
            if (this.async) {
                clearTimeout(this._timer);
                if (value.length >= 5 || !this.async) {
                    this._timer = setTimeout(() => {
                        this.onSearch(value);
                    }, this.async ? this._interval : 0);
                }
            }
            else {
                this.onSearch(value);
            }
        };
    }
    render() {
        return html `
      <style>
        .suggest-container {
          position: relative;
        }

        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid grey;
          background: white;
        }
        li {
          padding: 4px;
          cursor: pointer;
        }
        li.active {
          background: whitesmoke;
        }
        [hidden] {
          display: none;
        }

        .lexml-autocomplete-input {
          width: 100%;
        }
        wa-input {
          font-size: 14px;
        }
        @media (max-width: 576px) {
          .lexml-autocomplete-label {
            width: calc(100% - 2px);
            display: block;
          }
          .lexml-autocomplete-input {
            width: calc(100% - 2px);
          }
        }
      </style>
      <slot id="dropdown-input">
        <wa-input
          id="defaultInput"
          class="lexml-autocomplete-input"
          type="text"
          label=${this.label}
          placeholder=${this.placeholder}
          .value=${this.value?.description || ''}
          @change=${(e) => this._handleChange(e.target.value)}
          @click=${(e) => this._handleClick(e.target.value)}
          ?disabled=${this.disabled}
        ></wa-input>
      </slot>
      <div class="suggest-container">
        <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
        >
          ${this.items.map((item) => html `<li @click=${() => this.autocomplete(item)}>
                ${item.description}
              </li>`)}
        </ul>
      </div>
    `;
    }
    /**
     * Input element getter
     */
    get contentElement() {
        if (this._inputEl)
            return this._inputEl; // Cache
        if (!this.hasUpdated)
            return undefined; // No shadow root, no element to use
        const slotElement = this.shadowRoot.getElementById('dropdown-input');
        const slotInputList = slotElement.assignedElements();
        this._inputEl = slotInputList.length
            ? slotInputList[0]
            : this.shadowRoot.getElementById('defaultInput');
        return this._inputEl;
    }
    /**
     * Value getter from input element.
     */
    get value() {
        return this.contentElement && this.contentElement.value;
    }
    /**
     * Value setter to input element.
     */
    set value(value) {
        if (!this.contentElement) {
            this._tempValue = value;
            return;
        }
        this.contentElement.value = value;
    }
    firstUpdated() {
        this._suggestionEl = this.shadowRoot.getElementById('suggestions');
        this._suggestionEl.style = 'max-height: 250px; overflow: scroll';
        this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        this._bound.onKeyDown = this._handleKeyDown.bind(this);
        this._bound.onKeyUp = this._handleKeyUp.bind(this);
        this._bound.onFocus = this._handleFocus.bind(this);
        this._bound.onBlur = this._handleBlur.bind(this);
        this._bound.onChange = this._handleChange.bind(this);
        this._bound.onClick = this._handleClick.bind(this);
        this.contentElement.addEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.addEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.addEventListener('focus', this._bound.onFocus);
        this.contentElement.addEventListener('blur', this._bound.onBlur);
        this.contentElement.addEventListener('wa-input', this._bound.onChange);
        this.contentElement.addEventListener('click', this._bound.onClick);
        if (this._tempValue !== undefined) {
            this.contentElement.value = this._tempValue;
        }
    }
    disconnectedCallback() {
        if (!this.contentElement)
            return; // no events to remove
        this.contentElement.removeEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.removeEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.removeEventListener('focus', this._bound.onFocus);
        this.contentElement.removeEventListener('blur', this._bound.onBlur);
        this.contentElement.removeEventListener('wa-input', this._bound.onChange);
        this.contentElement.removeEventListener('click', this._bound.onClick);
    }
    focus(options) {
        if (this.contentElement) {
            this.contentElement.focus(options);
        }
    }
    updated(changed) {
        if (changed.has('items')) {
            this.items.length > 1 ||
                (this.items.length === 1 && this.items[0] !== this.contentElement.value)
                ? this.open()
                : this.close();
        }
        if (changed.has('opened') &&
            this.opened &&
            this._suggestionEl.childElementCount) {
            // Highlight the first when there are suggestions
            // eslint-disable-next-line prefer-destructuring
            this._highlightedEl = this._suggestionEl.children[0];
            this._highlightedEl.classList.add('active');
        }
    }
    /**
     * Open suggestions.
     */
    open() {
        if (this._suggestionEl.style.width === '0px') {
            this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        }
        if (this.items.length) {
            this.opened = true;
        }
    }
    /**
     * Close suggestions.
     */
    close() {
        this.opened = false;
        this._highlightedEl = null;
    }
    /**
     * Autocomplete input with `value`.
     * @param {String} value
     */
    autocomplete(value) {
        this.contentElement.value = value;
        this.onSelect(value);
        this.close();
    }
    _highlightPrev() {
        if (!this._highlightedEl || !this._highlightedEl.previousElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.previousElementSibling;
        this._highlightedEl.classList.add('active');
    }
    _highlightNext() {
        if (!this._highlightedEl || !this._highlightedEl.nextElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.nextElementSibling;
        this._highlightedEl.classList.add('active');
    }
    // eslint-disable-next-line class-methods-use-this
    _handleChange(value) {
        this.onChange(value);
    }
    _handleKeyDown(ev) {
        // Prevent up and down from behaving as home and end on some browsers
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    _handleKeyUp(ev) {
        switch (ev.key) {
            case 'ArrowUp':
                if (this._highlightedEl?.previousElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightPrev();
                }
                break;
            case 'ArrowDown':
                if (this._highlightedEl?.nextElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightNext();
                }
                break;
            case 'Enter':
                // eslint-disable-next-line no-unused-expressions
                this._highlightedEl && this._highlightedEl.click();
                this.contentElement.blur();
                break;
            default:
                this._search();
        }
    }
    _handleFocus() {
        this._blur = false;
        // eslint-disable-next-line no-unused-expressions
        this.items.length > 1 && this.open();
    }
    _handleBlur() {
        this._blur = true;
        // eslint-disable-next-line no-unused-expressions
        setTimeout(() => this.close(), 200);
        //this.items = [];
    }
    // Handle mouse change focus to suggestions
    _handleItemMouseEnter() {
        this._mouseEnter = true;
    }
    _handleItemMouseLeave() {
        this._mouseEnter = false;
        // eslint-disable-next-line no-unused-expressions
        this._blur && setTimeout(() => this.close(), 500); // Give user some slack before closing
    }
    _handleClick(value) {
        this.onClick(value);
    }
};
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "label", void 0);
__decorate([
    property({ type: Array, reflect: true })
], AutocompleteAsync.prototype, "items", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "opened", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "async", void 0);
__decorate([
    property({ type: Number })
], AutocompleteAsync.prototype, "maxSuggestions", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onSearch", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onSelect", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onChange", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onClick", void 0);
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "value", null);
AutocompleteAsync = __decorate([
    customElement('autocomplete-ui-async')
], AutocompleteAsync);

const negrito = `
<svg class="icon-negrito" id="negrito" viewBox="0 0 16 16">
<path class="ql-fill" d="M10.7,13.5c-0.1,0-0.4,0-0.6-0.2L6,7.8C6,7.7,5.8,7.7,5.8,7.8l0,5.1c0,0.3-0.2,0.5-0.5,0.5H3.7
	c-0.3,0-0.5-0.2-0.5-0.5l0-9.5c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.2,0.4-0.4,0.7-0.4h1c0.1,0,0.4,0,0.6,0.2l4.4,5.9
	c0.1,0.1,0.2,0,0.2-0.1V3c0-0.3,0.2-0.5,0.5-0.5h1.5c0.3,0,0.5,0.2,0.5,0.5V13c0,0.3-0.2,0.5-0.5,0.5H10.7z"/>
</svg>
`;
const sublinhado = `
<svg class="icon-sublinhado" id="sublinhado" viewBox="0 0 16 16">
<path class="ql-fill" d="M4.3,9.4c0-0.2,0.1-0.3,0.4-0.3h0.7c0.2,0,0.4,0.1,0.4,0.3C5.8,10.4,6.7,11,8.1,11c1.3,0,2.2-0.5,2.2-1.4
	c0-1.1-1.2-1.4-2.5-1.9C6.3,7.3,4.5,6.8,4.5,5c0-1.6,1.5-2.7,3.5-2.7c1.9,0,3.3,1.1,3.4,2.6c0,0.2-0.1,0.3-0.4,0.3h-0.7
	c-0.2,0-0.3-0.1-0.4-0.3C9.9,4.1,9.2,3.7,8.1,3.7C6.8,3.7,6,4.2,6,5c0,0.9,0.9,1.2,2.2,1.6c1.6,0.5,3.5,1.1,3.5,3.1
	c0,1.6-1.5,2.7-3.6,2.7C5.9,12.3,4.3,11.2,4.3,9.4z"/>
<rect x="3" y="12.9" class="ql-fill" width="9.9" height="0.8"/>
</svg>
`;
const iconeMarginBottom = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
<path class="ql-fill" d="M 13.55 8.55 L 13.55 7.4 1.8 7.4 1.8 8.55 13.55 8.55 M 13.05 2.55 L 13.05 1.4 1.8 1.4 1.8 2.55 13.05 2.55 M 10.55 5.55 L 10.55 4.4 1.8 4.4 1.8 5.55 10.55 5.55 M 10.3 14.65 L 10.3 10.4 1.8 10.4 1.8 14.65 10.3 14.65 M 2.8 11.4 L 9.3 11.4 9.3 13.55 2.8 13.55 2.8 11.4 M 14.6 10.55 L 13.85 9.8 11.3 12.55 13.85 15.2 14.6 14.45 12.8 12.55 14.6 10.55 Z"/>
</svg>
`;
const iconeTextIndent = `
<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
<path class="ql-fill" d="M 1.65,2.3 0.9,3.05 2.65,4.95 0.9,6.9 1.65,7.65 4.15,4.95 1.65,2.3 M 2.5,12.45 v 1.1 h 11.25 v -1.1 H 2.5 m 11.25,-2.1 V 9.25 H 2.5 v 1.1 h 11.25 m 0,-4.3 H 6.25 V 7.1 h 7.5 V 6.05 m 0,-3.25 h -7.5 v 1.1 h 7.5 z"></path>
</svg>
`;
const iconeNotaDeRodape = `
<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path class="ql-fill" d="M 5,12.5 C 5,12.223858 5.2238576,12 5.5,12 h 2 c 0.6666664,0 0.6666664,1 0,1 h -2 C 5.2238576,13 5,12.776142 5,12.5 m 0,-2 C 5,10.223858 5.2238576,10 5.5,10 h 5 c 0.666666,0 0.666666,1 0,1 h -5 C 5.2238576,11 5,10.776142 5,10.5" />
  <path class="ql-fill" d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
  <path class="ql-fill" d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
</svg>
`;

class Subscription {
    constructor(callback, canceled) {
        this.callback = callback;
        this.canceled = canceled;
    }
    isCanceled() {
        return this.canceled ?? false;
    }
    cancel() {
        this.canceled = true;
    }
}
class Observable {
    constructor() {
        this.subscriptions = [];
    }
    subscribe(callback) {
        const inscricao = new Subscription(callback);
        this.subscriptions.push(inscricao);
        return inscricao;
    }
    notify(data) {
        this.subscriptions.forEach((subscription) => {
            if (!subscription.isCanceled()) {
                setTimeout(() => {
                    subscription.callback(data);
                }, 1);
            }
        });
    }
    clean() {
        this.subscriptions = [];
    }
}

/* eslint-disable prettier/prettier */
// import { SlMenuItem } from '@shoelace-style/shoelace';
async function showMenuImagem(editorTextoRico, img, top, left) {
    const content = document.createRange().createContextualFragment(`
    <div>
      <style>
      #bg-wp-menu-img {
        position:absolute; top:0; left:0; width:100%; height:100%; z-index:999;
      }
      #menu-img {
        position:absolute; z-index:9999;
      }
      </style>
      <div id="bg-wp-menu-img">
        <wa-menu id="menu-img" style="top:${top}px;left:${left}px;">
          <wa-menu-item id="item-menu-largura-img" value="alterar-largura-imagem">Alterar a largura da imagem</wa-menu-item>
        </wa-menu>
      </div>
    </div>
  `);
    const itemMenu = content.querySelector('#item-menu-largura-img');
    const bgWpMenuImagem = content.querySelector('#bg-wp-menu-img');
    itemMenu.onclick = () => {
        const width = img.getAttribute('width');
        editorTextoRico.showAlterarLarguraImagemModal(img, width);
    };
    bgWpMenuImagem.onclick = () => {
        bgWpMenuImagem.parentElement?.remove();
    };
    await editorTextoRico.appendChild(content);
}

const editorTextoRicoCss = html `
  <style>
    :host {
      --rte-toolbar-h: 55px;
    }

    .rte-split {
      box-sizing: border-box;
    }
    wa-split-panel.notas-desabilitadas::part(divider),
    wa-split-panel.notas-desabilitadas::part(panel end) {
      display: none;
    }

    wa-split-panel.notas-desabilitadas {
      grid-template-rows: 1fr !important;
      grid-template-columns: 1fr !important;
    }
    .split-start,
    .split-end {
      display: flex;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    .split-end,
    .panel-nota-rodape-container {
      min-width: 0;
      min-height: 0;
    }

    /* editor ocupa tudo e libera scroll no conteúdo interno */
    .editor-wrapper {
      display: flex;
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      flex-direction: column;
    }
    .editor-texto-rico {
      flex: 1 1 auto;
      min-height: 0;
      box-sizing: border-box;
      font-size: 18px !important;
    }
    .editor-texto-rico .ql-container {
      flex: 1 1 auto;
      min-height: 0;
      border: none;
    }
    .editor-texto-rico .ql-editor {
      height: 100%;
      overflow: auto;
      font-size: 18px !important;
    }

    .rte-toolbar .ql-toolbar.ql-snow {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 6px 8px;
      box-shadow: none;
      border-bottom: 0px;
    }
    .editor-texto-rico p,
    .editor-texto-rico ol,
    .editor-texto-rico ul {
      margin-bottom: 0.7rem;
    }
    .editor-texto-rico p:not(.ql-align-rigth, .ql-align-center) {
      text-indent: 3rem;
    }
    .rte-toolbar .ql-toolbar.ql-snow .ql-formats {
      margin-right: 8px;
    }
    .editor-texto-rico.ql-snow .ql-tooltip {
      font-family: var(--eta-font-sans);
      font-size: 0.9rem;
    }
    .ql-tooltip .ql-action,
    .ql-tooltip .ql-remove {
      background-color: var(--wa-color-gray-100);
      border: 1px solid var(--wa-color-gray-500);
      border-radius: 3px;
      color: var(--wa-color-gray-900);
      width: fit-content !important;
      padding: 0 15px;
      margin: 0 0 0 10px;
    }
    .editor-texto-rico.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
      content: 'Salvar';
      margin: 0 !important;
      padding: 0 !important;
    }
    .editor-texto-rico.ql-snow .ql-tooltip a.ql-action::after {
      display: inline;
      content: 'Editar';
      margin: 0 !important;
      padding: 0 !important;
      border: 0;
    }
    .editor-texto-rico.ql-snow .ql-tooltip a.ql-remove::before {
      display: inline;
      content: 'Remover';
      margin: 0 !important;
      padding: 0 !important;
    }
    .editor-texto-rico.ql-snow .ql-tooltip[data-mode='link']::before {
      content: 'Insira o link:';
    }
    .editor-texto-rico.ql-snow .ql-tooltip::before {
      content: 'Visite o link:';
    }
    @media (max-width: 600px) {
      .editor-texto-rico.ql-snow .ql-tooltip {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }
      .ql-tooltip .ql-action,
      .ql-tooltip .ql-remove {
        margin: 0;
      }
      .editor-texto-rico.ql-snow .ql-tooltip.ql-hidden {
        display: none;
      }
    }

    .editor-texto-rico .estilo-ementa {
      text-indent: 0 !important;
      text-align: justify;
      margin-left: 40%;
    }
    .editor-texto-rico .estilo-norma-alterada {
      margin-left: 3rem;
    }

    #revisoes-justificativa-icon wa-icon,
    #revisoes-texto-livre-icon wa-icon,
    #aceita-revisao-justificativa {
      margin-right: 0.1rem;
    }

    .revisoes-justificativa-icon__ativo {
      color: white;
      background-color: var(--wa-color-warning-600) !important;
      border-color: white !important;
    }
    .revisoes-texto-livre-icon__ativo {
      color: white;
      background-color: var(--wa-color-warning-600) !important;
      border-color: white !important;
    }
    .lista-revisoes-justificativa {
      padding-left: 1rem;
      padding-right: 0.5rem;
    }
    [id^='chk-em-revisao-justificativa-'] {
      border: 1px solid #ccc !important;
      padding: 5px 10px !important;
      border-radius: 20px !important;
      margin-left: auto;
      margin-right: 5px;
      font-weight: bold;
      background-color: #eee;
    }
    [id^='chk-em-revisao-justificativa-'][checked] {
      background-color: var(--wa-color-blue-100);
    }

    [id^='chk-em-revisao-texto-livre-'] {
      border: 1px solid #ccc !important;
      padding: 5px 10px !important;
      border-radius: 20px !important;
      margin-left: auto;
      margin-right: 5px;
      font-weight: bold;
      background-color: #eee;
    }
    [id^='chk-em-revisao-texto-livre-'][checked] {
      background-color: var(--wa-color-blue-100);
    }

    #toolbar {
      padding: 1.5px 0 1.5px 8px;
    }

    [id^='badge-marca-alteracao-justificativa-']::part(base) {
      min-width: 1.4rem;
    }

    [id^='badge-marca-alteracao-texto-livre-']::part(base) {
      min-width: 1.4rem;
    }
    revisao-container {
      margin-left: auto;
    }

    .rte-toolbar .ql-toolbar.ql-snow .panel-revisao {
      display: flex;
      flex-grow: 1;
    }

    .ql-picker.ql-estilo .ql-picker-label {
      width: 160px;
    }

    .ql-picker.ql-estilo .ql-picker-label::before,
    .ql-picker.ql-estilo .ql-picker-item::before {
      content: 'Texto normal';
    }

    .ql-picker.ql-estilo .ql-picker-label[data-value='ementa']:before,
    .ql-picker.ql-estilo .ql-picker-item[data-value='ementa']:before {
      content: 'Ementa';
    }

    .ql-picker.ql-estilo .ql-picker-label[data-value='norma-alterada']:before,
    .ql-picker.ql-estilo .ql-picker-item[data-value='norma-alterada']:before {
      content: 'Norma alterada';
    }

    .ql-estilo span.ql-picker-label {
      border-color: #ccc !important;
    }

    .ql-picker-item[data-value='insert']::after {
      content: 'Inserir tabela';
    }

    .ql-picker-item[data-value='append-col']::after {
      content: 'Inserir coluna';
    }

    .ql-picker-item[data-value='append-col-before']::after {
      content: 'Inserir coluna à esquerda';
    }

    .ql-picker-item[data-value='append-col-after']::after {
      content: 'Inserir coluna à direita';
    }

    .ql-picker-item[data-value='remove-col']::after {
      content: 'Remover coluna';
    }

    .ql-picker-item[data-value='change-width-col-modal']::after {
      content: 'Alterar a largura da coluna';
    }

    .ql-picker-item[data-value='change-width-table-modal']::after {
      content: 'Alterar a largura da tabela';
    }

    .ql-picker-item[data-value='append-row']::after {
      content: 'Inserir linha';
    }

    .ql-picker-item[data-value='append-row-above']::after {
      content: 'Inserir linha acima';
    }

    .ql-picker-item[data-value='append-row-below']::after {
      content: 'Inserir linha abaixo';
    }

    .ql-picker-item[data-value='remove-row']::after {
      content: 'Remover linha';
    }

    .ql-picker-item[data-value='split-cell']::after {
      content: 'Dividir célula';
    }

    .ql-picker-item[data-value='merge-selection']::after {
      content: 'Mesclar células';
    }

    .ql-picker-item[data-value='remove-cell']::after {
      content: 'Remover célula';
    }

    .ql-picker-item[data-value='remove-selection']::after {
      content: 'Remover seleção';
    }

    .ql-picker-item[data-value='undo']::after {
      content: 'Desfazer';
    }

    .ql-picker-item[data-value='redo']::after {
      content: 'Refazer';
    }

    .ql-picker-item[data-value='remove-table']:before {
      content: 'Remover tabela';
    }

    .ql-editor td > p {
      text-indent: 0 !important;
      margin-bottom: 0 !important;
    }

    .table-selected {
      border: 1px solid #87ceeb; /* Define a borda sólida em tom azul claro */
      box-shadow: 0 0 10px rgba(135, 206, 235, 0.5); /* Adiciona sombra com tom azul claro */
    }

    .ql-snow .ql-editor img {
      max-width: 100%;
    }

    .editor-texto-rico p.ql-text-indent-0px {
      text-indent: 0;
    }

    .editor-texto-rico p.ql-margin-bottom-0px {
      margin-bottom: 0;
    }

    .ql-editor ins {
      text-decoration: none;
      background-color: #b2e6be;
      /* #d4edda; */
    }

    .ql-editor del {
      text-decoration: strikethrough;
      background-color: #f4a9b0;
      /* #f8d7da; */
    }

    .editor-texto-rico .ql-tooltip input:invalid {
      color: red;
    }

    .editor-texto-rico .ql-tooltip div.tooltip-invalid-message {
      color: red;
      display: none;
      font-family: var(--eta-font-sans);
      font-size: 0.9rem;
    }

    .editor-texto-rico
      .ql-tooltip[data-mode='link']
      div.tooltip-invalid-message::after {
      content: 'A URL deve iniciar com http:// ou https://';
    }

    .editor-texto-rico
      .ql-tooltip[data-mode='link']
      input:invalid
      ~ div.tooltip-invalid-message {
      display: block;
    }

    .ql-image[type='file'] {
      display: none;
    }

    .aceitar-revisao,
    .rejeitar-revisao {
      margin-left: 0.5rem;
    }

    @-moz-document url-prefix() {
      #editor-texto-rico-justificativa-inner > .ql-editor {
        white-space: pre-wrap;
      }
    }

    @media (max-width: 768px) {
      .mobile-buttons {
        display: inline-block !important;
      }
      [id^='chk-em-revisao-justificativa-'] span {
        display: none;
      }
      .ql-snow .ql-editor img {
        max-width: 100%;
      }
    }
    /* ======== painel de notas ======== */
    .panel-nota-rodape-container,
    .panel-nota-rodape {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }
  </style>
`;

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import * as QuillNamespace from 'quill/dist/quill.js';
// const Quill: any = (QuillNamespace as any).default || QuillNamespace;
const Parchment$b = Quill.import('parchment');
const config$2 = {
    scope: Parchment$b.Scope.BLOCK,
    whitelist: ['ementa', 'norma-alterada'],
};
const EstiloTextoClass = new Parchment$b.Attributor.Class('estilo', 'estilo', config$2);

const quillTableCss = html `<style>
  .ql-editor table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    overflow: hidden;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
  }

  .ql-editor table td {
    border: 1px solid black;
    padding: 2px 5px;
    height: 25px;
    vertical-align: top;
    white-space: pre-wrap; /* https://github.com/quilljs/quill/issues/1760 */
  }

  .ql-editor table td[rowspan='2'] {
    height: 50px;
  }

  .ql-editor table td[rowspan='3'] {
    height: 75px;
  }

  .ql-editor table td[rowspan='4'] {
    height: 100px;
  }

  .ql-editor table td[rowspan='5'] {
    height: 125px;
  }

  .ql-editor table td[rowspan='6'] {
    height: 150px;
  }

  .ql-editor table td[rowspan='7'] {
    height: 175px;
  }

  .ql-editor table td[rowspan='8'] {
    height: 200px;
  }

  .ql-editor table td[rowspan='9'] {
    height: 225px;
  }

  .ql-editor table td.ql-cell-selected {
    background-color: #cce0f8;
  }

  .ql-editor table td[merge_id] {
    display: none;
  }

  .quill-better-table-wrapper {
    overflow-x: auto;
  }

  .ql-picker.ql-table {
    width: auto !important;
    margin-right: 0;
  }

  .ql-picker.ql-table .ql-picker-label svg {
    display: none;
  }

  .ql-picker.ql-table .ql-picker-label::before {
    display: block;
    font-size: 14px;
  }

  .ql-table:nth-of-type(1) .ql-picker-label {
    background:
      url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/></svg>')
        no-repeat center,
      white;
    background-size: 16px;
  }

  .ql-picker.ql-table .ql-picker-label::before {
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    padding-top: 2px;
    line-height: 1em;
  }

  .ql-table:nth-of-type(1),
  .ql-contain {
    width: 90px;
    margin-right: 0;
  }

  .ql-picker.ql-table:nth-of-type(1) {
    font-size: 11px;
    font-weight: normal;
  }

  .ql-picker.ql-table .ql-picker-label {
    padding: 2px 3px;
    width: 23px;
  }

  .ql-picker.ql-table:nth-of-type(1) .ql-picker-options {
    width: 180px;
  }

  .ql-picker.ql-table:nth-of-type(1) .ql-picker-item {
    display: block;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0px;
    margin: 1px;
  }

  .ql-toolbar .ql-picker.ql-table .ql-picker-item {
    display: none;
  }

  .ql-toolbar .ql-picker.ql-table .ql-picker-item.enabled {
    display: block;
  }

  .ql-picker.ql-table:nth-of-type(2) {
    display: flex;
    width: 145px;
  }

  .ql-table:nth-of-type(2) .ql-picker-label {
    background:
      url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border" viewBox="0 0 16 16"><path d="M0 0h.969v.5H1v.469H.969V1H.5V.969H0V0zm2.844 1h-.938V0h.938v1zm1.875 0H3.78V0h.938v1zm1.875 0h-.938V0h.938v1zm.937 0V.969H7.5V.5h.031V0h.938v.5H8.5v.469h-.031V1H7.53zm2.813 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zM15.5 1h-.469V.969H15V.5h.031V0H16v.969h-.5V1zM1 1.906v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM1 3.78v.938H0V3.78h1zm6.5.938V3.78h1v.938h-1zm7.5 0V3.78h1v.938h-1zM1 5.656v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM.969 8.5H.5v-.031H0V7.53h.5V7.5h.469v.031H1v.938H.969V8.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875-.031V8.5H7.53v-.031H7.5V7.53h.031V7.5h.938v.031H8.5v.938h-.031zm1.875.031h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.406 0h-.469v-.031H15V7.53h.031V7.5h.469v.031h.5v.938h-.5V8.5zM0 10.344v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 12.22v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 14.094v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM.969 16H0v-.969h.5V15h.469v.031H1v.469H.969v.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H7.5v-.469h.031V15h.938v.031H8.5v.469h-.031v.5H7.53zm2.813 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H15v-.469h.031V15h.469v.031h.5V16h-.969z"/></svg>')
        no-repeat center,
      white;
    background-size: 16px;
  }
  .ql-picker.ql-table:nth-of-type(2) {
    color: #444;
  }

  .ql-picker.ql-table:nth-of-type(1) .ql-picker-item {
    border: 1px solid #444;
    color: #444;
  }

  .ql-table:nth-of-type(2) .ql-picker-label.ql-active {
    color: #444 !important;
  }

  .ql-toolbar .ql-picker-item.ql-selected:before,
  .ql-picker.ql-table:nth-of-type(2) .ql-picker-item {
    color: #444;
  }

  /* .ql-picker-label.ql-active .ql-stroke {
    stroke: #444 !important;
  } */

  .ql-picker-item[data-value='remove-table'] {
    border: none !important;
    width: 100%;
  }

  .ql-picker-item[data-value='newtable_1_1']:before {
    content: '1x1';
  }

  .ql-picker-item[data-value='newtable_1_2']:before {
    content: '1x2';
  }

  .ql-picker-item[data-value='newtable_1_3']:before {
    content: '1x3';
  }

  .ql-picker-item[data-value='newtable_1_4']:before {
    content: '1x4';
  }

  .ql-picker-item[data-value='newtable_1_5']:before {
    content: '1x5';
  }

  .ql-picker-item[data-value='newtable_2_1']:before {
    content: '2x1';
  }

  .ql-picker-item[data-value='newtable_2_2']:before {
    content: '2x2';
  }

  .ql-picker-item[data-value='newtable_2_3']:before {
    content: '2x3';
  }

  .ql-picker-item[data-value='newtable_2_4']:before {
    content: '2x4';
  }

  .ql-picker-item[data-value='newtable_2_5']:before {
    content: '2x5';
  }

  .ql-picker-item[data-value='newtable_3_1']:before {
    content: '3x1';
  }

  .ql-picker-item[data-value='newtable_3_2']:before {
    content: '3x2';
  }

  .ql-picker-item[data-value='newtable_3_3']:before {
    content: '3x3';
  }

  .ql-picker-item[data-value='newtable_3_4']:before {
    content: '3x4';
  }

  .ql-picker-item[data-value='newtable_3_5']:before {
    content: '3x5';
  }

  .ql-picker-item[data-value='newtable_4_1']:before {
    content: '4x1';
  }

  .ql-picker-item[data-value='newtable_4_2']:before {
    content: '4x2';
  }

  .ql-picker-item[data-value='newtable_4_3']:before {
    content: '4x3';
  }

  .ql-picker-item[data-value='newtable_4_4']:before {
    content: '4x4';
  }

  .ql-picker-item[data-value='newtable_4_5']:before {
    content: '4x5';
  }

  .ql-picker-item[data-value='newtable_5_1']:before {
    content: '5x1';
  }

  .ql-picker-item[data-value='newtable_5_2']:before {
    content: '5x2';
  }

  .ql-picker-item[data-value='newtable_5_3']:before {
    content: '5x3';
  }

  .ql-picker-item[data-value='newtable_5_4']:before {
    content: '5x4';
  }

  .ql-picker-item[data-value='newtable_5_5']:before {
    content: '5x5';
  }

  p:has(img) {
    text-align: center !important;
    text-indent: 0 !important;
  }
</style>`;

// import Quill from 'quill';

const Container$3 = Quill.import('blots/container');
const Block$1 = Quill.import('blots/block');
const BlockEmbed$1 = Quill.import('blots/block/embed');
const Parchment$a = Quill.import('parchment');

class ContainBlot extends Container$3 {
  static create(value) {
    return super.create(value);
  }

  // formats(domNode) {
  //   if (domNode) {
  //     return domNode.tagName;
  //   }
  //   return this.domNode.tagName;
  // }
}

ContainBlot.blotName = 'contain';
ContainBlot.tagName = 'contain';
ContainBlot.scope = Parchment$a.Scope.BLOCK_BLOT;
ContainBlot.defaultChild = 'block';
ContainBlot.allowedChildren = [Block$1, BlockEmbed$1, Container$3];

// import Quill from 'quill';

const Container$2 = Quill.import('blots/container');
const Block = Quill.import('blots/block');
const BlockEmbed = Quill.import('blots/block/embed');
const Parchment$9 = Quill.import('parchment');

class TableCell extends ContainBlot {
  static create(value) {
    const tagName = 'td';
    let node = super.create(tagName);
    let ids = value.split('|');
    node.setAttribute('table_id', ids[0]);
    node.setAttribute('row_id', ids[1]);
    node.setAttribute('cell_id', ids[2]);
    if (ids[3]) {
      node.setAttribute('merge_id', ids[3]);
    }
    if (ids[4]) {
      node.setAttribute('colspan', ids[4]);
    }
    if (ids[5]) {
      node.setAttribute('rowspan', ids[5]);
    }
    return node;
  }

  format() {}

  formats() {
    // We don't inherit from FormatBlot
    return {
      [this.statics.blotName]:
        [
          this.domNode.getAttribute('table_id'),
          this.domNode.getAttribute('row_id'),
          this.domNode.getAttribute('cell_id'),
          this.domNode.getAttribute('merge_id'),
          this.domNode.getAttribute('colspan'),
          this.domNode.getAttribute('rowspan')
        ].join('|')
    }
  }

  optimize(context) {
    super.optimize(context);

    let parent = this.parent;
    if (parent != null) {
      if (parent.statics.blotName === 'td') {
        this.moveChildren(parent, this);
        this.remove();
        return;
      } else if (parent.statics.blotName !== 'tr') {
        // we will mark td position, put in table and replace mark
        let mark = Parchment$9.create('block');
        this.parent.insertBefore(mark, this.next);
        let table = Parchment$9.create('table', this.domNode.getAttribute('table_id'));
        let tr = Parchment$9.create('tr', this.domNode.getAttribute('row_id'));
        table.appendChild(tr);
        tr.appendChild(this);
        table.replace(mark);
      }
    }

    // merge same TD id
    let next = this.next;
    if (next != null && next.prev === this &&
      next.statics.blotName === this.statics.blotName &&
      next.domNode.tagName === this.domNode.tagName &&
      next.domNode.getAttribute('cell_id') === this.domNode.getAttribute('cell_id')
    ) {
      next.moveChildren(this);
      next.remove();
    }
  }

  insertBefore(childBlot, refBlot) {
    if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
      return childBlot instanceof child;
    })) {
      let newChild = Parchment$9.create(this.statics.defaultChild);
      newChild.appendChild(childBlot);
      childBlot = newChild;
    }
    super.insertBefore(childBlot, refBlot);
  }

  replace(target) {
    if (target.statics.blotName !== this.statics.blotName) {
      let item = Parchment$9.create(this.statics.defaultChild);
      target.moveChildren(item);
      this.appendChild(item);
    }
    if (target.parent == null) return;
    super.replace(target);
  }

  moveChildren(targetParent, refNode) {
    this.children.forEach(function (child) {
      targetParent.insertBefore(child, refNode);
    });
  }
}

TableCell.blotName = 'td';
TableCell.tagName = 'td';
TableCell.className = 'td-q';
TableCell.scope = Parchment$9.Scope.BLOCK_BLOT;
TableCell.allowedChildren = [Block, BlockEmbed, Container$2];

// import Quill from 'quill';

const Parchment$8 = Quill.import('parchment');

class TableHistory {
  // Register DOM change into current table history entry
  static register(type, change) {
    TableHistory.changes.push({ type, ...change });
  }

  // Add table history entry
  static add(quill) {
    if (!TableHistory.changes.length) return;

    const historyChangeStatus = quill.history.ignoreChange;
    // ignore history change and reset last recorded time for adding later changes in a new history entry
    quill.history.ignoreChange = true;
    quill.history.lastRecorded = 0;

    // wait history update
    setTimeout(() => {
      // reset history changes value
      quill.history.ignoreChange = historyChangeStatus;

      // add new entry in table stack
      const id = TableTrick.random_id();
      quill.history.tableStack[id] = TableHistory.changes;

      // set reference to table stack entry in a new history entry
      quill.history.stack.undo.push({ type: 'tableHistory', id: id });

      TableHistory.changes = [];
    }, 0);
  }

  static undo(quill, id) {
    const historyChangeStatus = quill.history.ignoreChange;
    quill.history.ignoreChange = true;

    const entry = quill.history.tableStack[id];
    if (typeof entry !== 'undefined') {
      // apply changes from last change to first change (undo)
      entry.reverse().forEach(change => {
        const oldDelta = quill.getContents();
        switch (change.type) {
          case 'insert':
            // remove node (undo)
            TableHistory.remove(change);
            break;
          case 'remove':
            // add node (undo)
            TableHistory.insert(change);
            break;
          case 'split':
            // merge cell (redo)
            TableHistory.merge(change, true);
            // force triggering text-change event
            TableTrick.emitTextChange(quill, oldDelta);
            break;
          case 'merge':
            // split cell (redo)
            TableHistory.split(change, true);
            break;
          case 'propertyChange':
            // property change (undo)
            TableHistory.propertyChange(change, true);
            break;
        }
      });
    }

    // wait history update
    setTimeout(() => {
      // update history
      const historyEntry = quill.history.stack.undo.pop();
      quill.history.stack.redo.push(historyEntry);
      quill.history.ignoreChange = historyChangeStatus;
    }, 0);
  }

  static redo(quill, id) {
    const historyChangeStatus = quill.history.ignoreChange;
    quill.history.ignoreChange = true;

    const entry = quill.history.tableStack[id];
    if (typeof entry !== 'undefined') {
      // apply changes from first change to last change (redo)
      entry.forEach(change => {
        switch (change.type) {
          case 'insert':
            // add node (redo)
            TableHistory.insert(change);
            break;
          case 'remove':
            // remove node (redo)
            TableHistory.remove(change);
            break;
          case 'split':
            // split cell (redo)
            TableHistory.split(change, false);
            break;
          case 'merge':
            // merge cell (redo)
            TableHistory.merge(change, false);
            break;
          case 'propertyChange':
            // property change (redo)
            TableHistory.propertyChange(change, false);
            break;
        }
      });
    }

    // wait history update
    setTimeout(() => {
      // update history
      const historyEntry = quill.history.stack.redo.pop();
      quill.history.stack.undo.push(historyEntry);
      quill.history.ignoreChange = historyChangeStatus;
    }, 0);
  }

  static insert(change) {
    const parentNode = change.parentNode || change.nextNode.parentNode;
    if (parentNode) {
      const _parentNode = Parchment$8.find(parentNode);
      if (_parentNode) {
        const _node = Parchment$8.create(change.node);
        if (change.nextNode) {
          const _nextNode = Parchment$8.find(change.nextNode);
          if (_nextNode) {
            _parentNode.insertBefore(_node, _nextNode);
          }
        } else {
          _parentNode.appendChild(_node);
        }
      }

      // force re-rendering cells border (Firefox bug)
      const tableNode = change.node.nodeName === 'TABLE' ? change.node : parentNode.closest('table');
      tableNode.style.setProperty('overflow', (window.getComputedStyle(tableNode)['overflow'] || 'visible') === 'visible' ? 'hidden' : 'visible');
      setTimeout(() => {
        tableNode.style.removeProperty('overflow');
      }, 0);

      return true;
    }
    return false;
  }

  static remove(change) {
    change.node.remove();
    return true;
  }

  static split(change, revert) {
    const td = change.node;
    // remove colspan and rowspan attributes
    td.removeAttribute('colspan');
    td.removeAttribute('rowspan');
    // for each merged node, remove merge_id attribute and restore content
    change.mergedNodes.forEach(cell => {
      cell.node.removeAttribute('merge_id');
      cell.node.innerHTML = cell[revert ? 'oldContent' : 'newContent'];
    });
    // restore content
    td.innerHTML = change[revert ? 'oldContent' : 'newContent'];
    return true;
  }

  static merge(change, revert) {
    const td = change.node;
    const cell_id = td.getAttribute('cell_id');
    // set colspan and rowspan attributes
    td.setAttribute('colspan', change.colSpan);
    td.setAttribute('rowspan', change.rowSpan);
    // for each node to merge, set merge_id attribute and restore content
    change.mergedNodes.forEach(cell => {
      cell.node.innerHTML = cell[revert ? 'oldContent' : 'newContent'];
      cell.node.setAttribute('merge_id', cell_id);
    });
    // restore content
    td.innerHTML = change[revert ? 'oldContent' : 'newContent'];
    return true;
  }

  static propertyChange(change, revert) {
    const { node, property, oldValue, newValue } = change;
    const value = revert ? oldValue : newValue;
    if (value !== null) {
      node.setAttribute(property, value);
    } else {
      node.removeAttribute(property);
    }
  }
}

TableHistory.changes = [];

class TableToolbar {
  static get(quill) {
    if (quill.container.previousSibling && quill.container.previousSibling.classList && quill.container.previousSibling.classList.contains('ql-toolbar')) {
      return quill.container.previousSibling;
    }
    return null;
  }

  static toggle(quill, actions = [], enable = true) {
    const toolbar = TableToolbar.get(quill);
    if (!toolbar) return;
    if (typeof actions === 'string') actions = [actions];

    actions.forEach(action => {
      let selector = `.ql-table .ql-picker-item[data-value="${action}"], .ql-table[value="${action}"]`;
      if (action.startsWith('*') && action.endsWith('*')) {
        selector = `.ql-table .ql-picker-item[data-value*="${action.substring(1, action.length - 1)}"], .ql-table[value*="${action.substring(1, action.length - 1)}"]`;
      } else if (action.startsWith('*')) {
        selector = `.ql-table .ql-picker-item[data-value$="${action.substring(1)}"], .ql-table[value$="${action.substring(1)}"]`;
      } else if (action.endsWith('*')) {
        selector = `.ql-table .ql-picker-item[data-value^="${action.substring(0, action.length - 1)}"], .ql-table[value^="${action.substring(0, action.length - 1)}"]`;
      }

      toolbar.querySelectorAll(selector).forEach(item => {
        item.classList[enable ? 'add' : 'remove']('enabled');
      });
    });
  }

  static enable(quill, actions) {
    TableToolbar.toggle(quill, actions, true);
  }

  static disable(quill, actions) {
    TableToolbar.toggle(quill, actions, false);
  }

  static disableAll(quill) {
    const toolbar = TableToolbar.get(quill);
    if (!toolbar) return false;
    toolbar.querySelectorAll('.ql-table .ql-picker-item.enabled, .ql-table.enabled[value]').forEach(item => item.classList.remove('enabled'));
  }

  static isEnabled(quill, action) {
    const toolbar = TableToolbar.get(quill);
    if (!toolbar) return false;
    const item = toolbar.querySelector(`.ql-table .ql-picker-item[data-value="${action}"], .ql-table[value="${action}"]`);
    return item && item.classList.contains('enabled');
  }
}

class TableSelection {
  static mouseDown(quill, e, inCellSelectionOnClick) {
    if (inCellSelectionOnClick !== undefined){ //we may have no options set for onClick
      TableSelection.cellSelectionOnClick = inCellSelectionOnClick;
    }

    if (e.which !== 1) {
      // do nothing with center or right click
      return;
    }

    TableSelection.resetSelection();

    if ((!TableSelection.cellSelectionOnClick && e.ctrlKey) || TableSelection.cellSelectionOnClick){
      TableSelection.isMouseDown = true;
      // reset cell selection
      TableSelection.previousSelection = [TableSelection.selectionStartElement, TableSelection.selectionEndElement];
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      TableSelection.resetSelection();

      const targetCell = TableSelection.getTargetCell(e);
      if (!targetCell) {
        // default mouse down event when clicking outside a cell
        TableSelection.focusedCell = null;
        return;
      }

      if ((!TableSelection.preventMouseDown && targetCell === TableSelection.clickedCellTimeout) || TableSelection.focusedCell === targetCell) {
        // default mouse down event when multiple click in less than 500ms in the same cell or if the cell is already focused
        TableSelection.focusedCell = targetCell;
        return;
      }

      // single mouse left click = start selection
      e.preventDefault();
      TableSelection.focusedCell = null;

      clearTimeout(TableSelection.dblClickTimeout);
      TableSelection.dblClickTimeout = setTimeout(() => {
        TableSelection.preventMouseDown = true;
        TableSelection.clickedCellTimeout = null;
      }, 500);
      TableSelection.preventMouseDown = false;

      TableSelection.selectionStartElement = TableSelection.clickedCellTimeout = targetCell;

      if (TableSelection.selectionStartElement) {
        TableSelection.selectionStartElement.classList.add('ql-cell-selected');
      }
    }
  }

  static mouseMove(quill, e) {
    if (TableSelection.isMouseDown && TableSelection.selectionStartElement) {
      const previousSelectionEndElement = TableSelection.selectionEndElement;
      TableSelection.selectionEndElement = TableSelection.getTargetCell(e);
      // Update selection if: mouse button is down, selection changed, start and end element exist and are in the same table
      if (
        TableSelection.selectionEndElement &&
        TableSelection.selectionEndElement !== previousSelectionEndElement &&
        TableSelection.selectionStartElement.closest('table') === TableSelection.selectionEndElement.closest('table')
      ) {
        TableSelection.resetSelection();

        // set new selection
        const coords = TableSelection.getSelectionCoords();
        for (let y = coords.minY; y <= coords.maxY; y++) {
          for (let x = coords.minX; x <= coords.maxX; x++) {
            let cell = TableSelection.getCellAt(x, y);
            if (cell) {
              cell.classList.add('ql-cell-selected');
            }
          }
        }
      }
    }
  }

  static mouseUp(quill, e) {
    TableSelection.isMouseDown = false;
    if (!TableSelection.selectionEndElement) {
      TableSelection.selectionEndElement = TableSelection.selectionStartElement;
    }

    if (
      TableSelection.previousSelection[0] !== TableSelection.selectionStartElement &&
      TableSelection.previousSelection[1] !== TableSelection.selectionEndElement
    ) {
      TableSelection.selectionChange(quill);
    }
  }

  static selectionChange(quill, range = null, oldRange = null) {
    let isInTable = false;
    if (TableSelection.selectionStartElement || TableSelection.selectionEndElement) {
      // there is a table selection
      isInTable = true;
      TableToolbar.enable(quill, ['split-cell', 'merge-selection', 'remove-selection']);
    } else {
      // Text selection
      TableToolbar.disable(quill, ['split-cell', 'merge-selection', 'remove-selection']);
      let selectionStartElement, selectionEndElement;
      if (range === null && oldRange !== null) {
        // There is a previous Quill selection but editor is no longer focused (selection-change event)
        const [startLeaf] = quill.getLeaf(oldRange.index);
        const [endLeaf] = quill.getLeaf(oldRange.index + oldRange.length);
        selectionStartElement = startLeaf.parent.domNode;
        selectionEndElement = endLeaf.parent.domNode;
      } else {
        // No Quill selection, use window.getSelection instead
        const selection = window.getSelection();
        selectionStartElement = selection.anchorNode ? (selection.anchorNode.nodeType === Node.TEXT_NODE ? selection.anchorNode.parentElement : selection.anchorNode) : null;
        selectionEndElement = selection.focusNode ? (selection.focusNode.nodeType === Node.TEXT_NODE ? selection.focusNode.parentElement : selection.focusNode) : null;
      }

      if (selectionStartElement && selectionEndElement) {
        // there is a text selection
        let closestTable = selectionStartElement.closest('table');
        if (closestTable && closestTable.closest('.ql-editor')) {
          if (selectionEndElement !== selectionStartElement) {
            closestTable = selectionEndElement.closest('table');
            isInTable = closestTable && closestTable.closest('.ql-editor');
          } else {
            isInTable = true;
          }
        }
      } // no selection = not in table
    }

    if (!isInTable && quill.table.isInTable) {
      // disable
      quill.table.isInTable = false;
      TableToolbar.disableAll(quill);
      TableToolbar.enable(quill, ['newtable_*', 'insert', 'undo', 'redo']);
    }

    if (isInTable && !quill.table.isInTable) {
      // enable
      quill.table.isInTable = true;
      TableToolbar.enable(quill, ['append-row*', 'append-col*', 'remove-cell', 'remove-row', 'remove-col', 'change-width-col-modal', 'change-width-table-modal', 'remove-table']);
    }
  }

  static getSelectionCoords() {
    if (TableSelection.selectionStartElement && TableSelection.selectionEndElement) {
      const coords = [
        [
          Array.prototype.indexOf.call(TableSelection.selectionStartElement.parentElement.children, TableSelection.selectionStartElement),
          Array.prototype.indexOf.call(TableSelection.selectionStartElement.parentElement.parentElement.children, TableSelection.selectionStartElement.parentElement)
        ],
        [
          Array.prototype.indexOf.call(TableSelection.selectionEndElement.parentElement.children, TableSelection.selectionEndElement),
          Array.prototype.indexOf.call(TableSelection.selectionEndElement.parentElement.parentElement.children, TableSelection.selectionEndElement.parentElement)
        ]
      ];

      return {
        coords,
        minX: Math.min(coords[0][0], coords[1][0]),
        maxX: Math.max(coords[0][0], coords[1][0]),
        minY: Math.min(coords[0][1], coords[1][1]),
        maxY: Math.max(coords[0][1], coords[1][1])
      };
    }
    return null;
  }

  static getCellAt(x, y) {
    const currentTable = TableSelection.selectionStartElement.closest('table');
    if (currentTable) {
      if (typeof currentTable.children[y] !== 'undefined' && typeof currentTable.children[y].children[x] !== 'undefined') {
        return currentTable.children[y].children[x];
      }
    }
    return null;
  }

  static getTargetCell(e) {
    let element = e.target;
    let cell = null;
    do {
      if (['td', 'th'].includes(element.tagName.toLowerCase())) {
        cell = element;
        break;
      }
      element = element.parentNode;
    } while (element && element !== e.currentTarget);
    return cell;
  }

  static resetSelection(container) {
    // reset selection for all instances
    document.querySelectorAll('.ql-editor td.ql-cell-selected').forEach(cell => {
      cell.classList.remove('ql-cell-selected');
    });
  }
}

TableSelection.focusedCell = null;
TableSelection.isMouseDown = false;
TableSelection.selectionStartElement = null;
TableSelection.selectionEndElement = null;
TableSelection.previousSelection = [];

TableSelection.dblClickTimeout = null;
TableSelection.clickedCellTimeout = null;
TableSelection.preventMouseDown = true;
TableSelection.cellSelectionOnClick = true;

// import Quill from 'quill';

const Parchment$7 = Quill.import('parchment');
const Container$1 = Quill.import('blots/container');
const Scroll = Quill.import('blots/scroll');

class TableTrick {
  static random_id() {
    return Math.random().toString(36).slice(2);
  }

  static getBlot(quill) {
    let blot = null;
    const selection = quill.getSelection();
    if (selection) {
      blot = quill.getLeaf(selection['index'])[0];
    }
    return blot;
  }

  static find_td(quill) {
    let blot = TableTrick.getBlot(quill);
    if (blot) {
      for (; blot != null && blot.statics.blotName !== 'td';) {
        blot = blot.parent;
      }
    }
    return blot; // return TD or NULL
  }

  static find_td_node(quill) {
    let td = TableTrick.find_td(quill);
    if(td) {
      return td.domNode;
    }
  }

  static find_table(quill) {
    const td = TableTrick.find_td(quill);
    if (td) {
      return td.parent.parent;
    }
  }

  static find_table_node(quill) {
    const table = TableTrick.find_table(quill);
    if (table) {
      return table.domNode;
    }
  }


  static getQuill(el) {
    // Get Quill instance from node/element or blot
    let quill = null;
    if (el instanceof Node) {
      if (!el instanceof Element) {
        el = el.parentElement;
      }
    } else if (typeof el === 'object' && typeof el.domNode !== 'undefined') {
      el = el.domNode;
    }

    if (el instanceof Element) {
      const editorNode = el.closest('.ql-container');
      if (editorNode) {
        quill = Quill.find(editorNode);
      }
    }
    return quill;
  }

  static insertTable(quill, col_count, row_count) {
    const table_id = TableTrick.random_id();
    const table = Parchment$7.create('table', table_id);
    for (let ri = 0; ri < row_count; ri++) {
      const row_id = TableTrick.random_id();
      const tr = Parchment$7.create('tr', row_id);
      table.appendChild(tr);
      for (let ci = 0; ci < col_count; ci++) {
        const cell_id = TableTrick.random_id();
        const value = [table_id, row_id, cell_id].join('|');
        const td = Parchment$7.create('td', value);
        tr.appendChild(td);
        const p = Parchment$7.create('block');
        td.appendChild(p);
        const br = Parchment$7.create('break');
        p.appendChild(br);
      }
    }
    let blot = TableTrick.getBlot(quill);
    let top_branch = null;
    for (; blot != null && !(blot instanceof Container$1 || blot instanceof Scroll);) {
      top_branch = blot;
      blot = blot.parent;
    }
    blot.insertBefore(table, top_branch);
    // TableHistory.register('insert', { node: table.domNode, nextNode: top_branch.domNode });
    // TableHistory.add(quill);
  }

  static removeTable(quill) {
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    let table;
    if (coords) {
      const _table = TableSelection.selectionStartElement.closest('table');
      table = Parchment$7.find(_table);
    } else {
      const td = TableTrick.find_td(quill);
      if (td) {
        table = td.parent.parent;
      }
    }

    if (table) {
      TableHistory.register('remove', { node: table.domNode, nextNode: table.next ? table.next.domNode : null, parentNode: table.parent.domNode });
      TableHistory.add(quill);
      table.remove();
    }
  }


  static changeWidthTable(quill, width) {
    const widthValue = width + '%';
    const styleValue = `width:${widthValue}`;
    const table = TableTrick.find_table(quill);

    if (table) {
      const tableNode = table.domNode;
      TableHistory.register('propertyChange',{ node: tableNode, property: 'style', oldValue: tableNode.style, newValue: styleValue });
      tableNode.setAttribute('style', styleValue);
      TableHistory.add(quill);
    }
  }

  static addCol(quill, direction = 'after') {
    // direction = before: append col before current cell or before leftmost cell of selection
    // direction = after: append col after current cell or after rightmost cell of selection
    const coords = TableSelection.getSelectionCoords();
    let td = TableTrick.find_td(quill);
    if (coords) {
      const cell = TableSelection.getCellAt(coords.maxX, coords.minY) || TableSelection.getCellAt(coords.maxX, coords.maxY);
      if (cell) {
        td = Parchment$7.find(cell);
      }
    }

    if (td) {
      if (direction !== 'before' && td.domNode.getAttribute('colspan')) {
        // for direction = after, if the cell is merged, append column at the end of merged cell (not after the first cell)
        const endCell = td.parent.domNode.children[
          Array.prototype.indexOf.call(td.parent.domNode.children, td.domNode) + Number.parseInt(td.domNode.getAttribute('colspan')) - 1
        ];
        if (endCell) {
          td = Parchment$7.find(endCell);
        }
      }

      // get cell index
      const index = Array.prototype.indexOf.call(td.parent.domNode.children, td.domNode) + (direction === 'before' ? 0 : 1);
      // is this the last cell?
      const last_cell = index === td.parent.domNode.children.length;
      const table = td.parent.parent;
      const table_id = table.domNode.getAttribute('table_id');
      let managed_merged_cells = [];

      table.children.forEach(function (tr) {
        const row_id = tr.domNode.getAttribute('row_id');
        const cell_id = TableTrick.random_id();
        const new_td = Parchment$7.create('td', [table_id, row_id, cell_id].join('|'));
        // do not add the cell for this row if selected cell is the last cell and if this row has more or less cells
        if (!last_cell || index === tr.domNode.children.length) {
          if (typeof tr.domNode.children[index] === 'undefined') {
            tr.appendChild(new_td);
            TableHistory.register('insert', { node: new_td.domNode, parentNode: tr.domNode });
          } else {
            const td = Parchment$7.find(tr.domNode.children[index]);
            if (td) {
              // manage merged cells
              if (td.domNode.previousSibling) {
                let merge_id = td.domNode.previousSibling.getAttribute('merge_id');
                const _colSpan = Number.parseInt(td.domNode.previousSibling.getAttribute('colspan') || 1);
                if (_colSpan > 1) {
                  merge_id = td.domNode.previousSibling.getAttribute('cell_id');
                }

                if (merge_id) {
                  new_td.domNode.setAttribute('merge_id', merge_id);
                  if (managed_merged_cells.indexOf(merge_id) === -1) {
                    managed_merged_cells.push(merge_id);
                    const _cell = table.domNode.querySelector('td[cell_id="' + merge_id + '"]');
                    if (_cell) {
                      const colSpan = Number.parseInt(_cell.getAttribute('colspan'));
                      _cell.setAttribute('colspan', colSpan + 1);
                      TableHistory.register('propertyChange', { node: _cell, property: 'colspan', oldValue: colSpan, newValue: colSpan + 1 });
                    }
                  }
                }
              }
              tr.insertBefore(new_td, td);
              TableHistory.register('insert', { node: new_td.domNode, nextNode: td.domNode });
            }
          }
        }
      });
      TableHistory.add(quill);
    }
  }

  static addRow(quill, direction = 'after') {
    // direction = before: append row above current cell or above topmost cell of selection
    // direction = after: append row below current cell or below bottommost cell of selection
    const coords = TableSelection.getSelectionCoords();
    let td = TableTrick.find_td(quill);
    if (coords) {
      const cell = TableSelection.getCellAt(coords.minX, coords.maxY) || TableSelection.getCellAt(coords.maxX, coords.maxY);
      if (cell) {
        td = Parchment$7.find(cell);
      }
    }

    if (td) {
      const tr = td.parent;
      const col_count = tr.domNode.children.length;
      const table = tr.parent;
      const new_row = tr.clone();
      // get row index
      let index = Array.prototype.indexOf.call(table.domNode.children, tr.domNode) + (direction === 'before' ? 0 : 1);

      let manage_merged_cells = true;
      const rowSpan = Number.parseInt(td.domNode.getAttribute('rowspan') || 1);
      if (rowSpan > 1) {
        manage_merged_cells = false;
        if (direction !== 'before') {
          // add row below merged cell
          index += rowSpan - 1;
        }
      }

      const table_id = table.domNode.getAttribute('table_id');
      const row_id = TableTrick.random_id();
      new_row.domNode.setAttribute('row_id', row_id);
      let managed_merged_cells = [];
      let managed_unmerged_cells = [];

      for (let i = 0; i < col_count; i++) {
        const prev_cell = tr.domNode.children[i];
        const cell_id = TableTrick.random_id();
        const td = Parchment$7.create('td', [table_id, row_id, cell_id].join('|'));
        if (prev_cell && manage_merged_cells) {
          // manage merged cells
          let merge_id, merged_cell;
          if (prev_cell.getAttribute('rowspan')) {
            merge_id = prev_cell.getAttribute('cell_id');
            merged_cell = prev_cell;
            if (direction === 'before') {
              // do not merge cells if we add a row before a merged cell
              if (managed_unmerged_cells.indexOf(merge_id) === -1) {
                managed_unmerged_cells.push(merge_id);
              }
            }
          } else if (prev_cell.getAttribute('merge_id')) {
            merge_id = prev_cell.getAttribute('merge_id');
            merged_cell = table.domNode.querySelector('td[cell_id="' + merge_id + '"]');
          }

          if (merge_id && merged_cell && managed_unmerged_cells.indexOf(merge_id) === -1 && merged_cell.getAttribute('rowspan')) {
            // merge cells of the new row according to previous row
            let merge_rowspan = Number.parseInt(merged_cell.getAttribute('rowspan'));
            if (merge_rowspan > 1) {
              if (managed_merged_cells.indexOf(merge_id) === -1) {
                managed_merged_cells.push(merge_id);
                merged_cell.setAttribute('rowspan', merge_rowspan + 1);
                TableHistory.register('propertyChange', { node: merged_cell, property: 'rowspan', oldValue: merge_rowspan, newValue: merge_rowspan + 1 });
              }
              td.domNode.setAttribute('merge_id', merge_id);
            }
          }
        }

        new_row.appendChild(td);
        const p = Parchment$7.create('block');
        td.appendChild(p);
        const br = Parchment$7.create('break');
        p.appendChild(br);
      }

      if (typeof table.domNode.children[index] === 'undefined') {
        table.appendChild(new_row);
        TableHistory.register('insert', { node: new_row.domNode, parentNode: table.domNode });
      } else {
        const row = Parchment$7.find(table.domNode.children[index]);
        if (row) {
          table.insertBefore(new_row, row);
          TableHistory.register('insert', { node: new_row.domNode, nextNode: row.domNode });
        }
      }
      TableHistory.add(quill);
    }
  }

  static removeCol(quill) {
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    let table, colIndex, colsToRemove;
    if (coords) {
      // if we have a selection, remove all selected columns
      const _table = TableSelection.selectionStartElement.closest('table');
      table = Parchment$7.find(_table);
      colIndex = coords.minX;
      colsToRemove = coords.maxX - coords.minX + 1;
    } else {
      // otherwise, remove only the column of current cell
      colsToRemove = 1;
      const currentCell = TableTrick.find_td(quill);
      if (currentCell) {
        table = currentCell.parent.parent;
        colIndex = Array.prototype.indexOf.call(currentCell.parent.domNode.children, currentCell.domNode);
      }
    }

    if (table && typeof colIndex === 'number' && typeof colsToRemove === 'number') {
      // Remove all TDs with the colIndex and repeat it colsToRemove times if there are multiple columns to delete
      for (let i = 0; i < colsToRemove; i++) {
        table.children.forEach(function (tr) {
          const td = tr.domNode.children[colIndex];
          if (td) {
            const merge_id = td.getAttribute('merge_id');
            if (merge_id) {
              // if a cell is merged to another cell, get target cell and decrement colspan
              const cell = table.domNode.querySelector(`td[cell_id="${merge_id}"]`);
              if (cell) {
                const colSpan = Number.parseInt(cell.getAttribute('colspan'));
                cell.setAttribute('colspan', colSpan - 1);
                TableHistory.register('propertyChange', { node: cell, property: 'colspan', oldValue: colSpan, newValue: colSpan - 1 });
              }
            }

            if (td.getAttribute('colspan')) {
              TableTrick._split(td);
            }

            TableHistory.register('remove', { node: td, nextNode: td.nextSibling, parentNode: tr.domNode });
            const _td = Parchment$7.find(td);
            if (_td) { // remove node this way in order to update delta
              _td.remove();
            }
          }
        });
      }
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      TableHistory.add(quill);
    }
  }

  static changeWidthCol(quill, width) {
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    let table, colIndex, colsToRemove;
    if (coords) {
      // if we have a selection, remove all selected columns
      const _table = TableSelection.selectionStartElement.closest('table');
      table = Parchment$7.find(_table);
      colIndex = coords.minX;
      colsToRemove = coords.maxX - coords.minX + 1;
    } else {
      // otherwise, remove only the column of current cell
      colsToRemove = 1;
      const currentCell = TableTrick.find_td(quill);
      if (currentCell) {
        table = currentCell.parent.parent;
        colIndex = Array.prototype.indexOf.call(currentCell.parent.domNode.children, currentCell.domNode);
      }
    }

    if (table && typeof colIndex === 'number' && typeof colsToRemove === 'number') {
      const widthValue = width + '%';
      // Remove all TDs with the colIndex and repeat it colsToRemove times if there are multiple columns to delete
      for (let i = 0; i < colsToRemove; i++) {
        table.children.forEach(function (tr) {
          const td = tr.domNode.children[colIndex];
          if (td) {
            TableHistory.register('propertyChange', { node: td, property: 'width', oldValue: td.width, newValue: widthValue });
            td.setAttribute('width', widthValue);
          }
        });
      }
      TableHistory.add(quill);
    }
  }

  static removeRow(quill) {
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);

    const manageMergedCells = (tr) => {
      let managed_merged_cells = [];
      [...tr.children].forEach(function(td) {
        const merge_id = td.getAttribute('merge_id');
        if (merge_id && managed_merged_cells.indexOf(merge_id) === -1) {
          // if a cell is merged to another cell, get target cell and decrement rowspan
          const cell = tr.parentNode.querySelector(`td[cell_id="${merge_id}"]`);
          managed_merged_cells.push(merge_id);
          if (cell) {
            const rowSpan = Number.parseInt(cell.getAttribute('rowspan'));
            cell.setAttribute('rowspan', rowSpan - 1);
            TableHistory.register('propertyChange', { node: cell, property: 'rowspan', oldValue: rowSpan, newValue: rowSpan - 1 });
          }
        }

        if (td.getAttribute('rowspan')) {
          TableTrick._split(td);
        }
      });
    };

    if (coords) {
      // if we have a selection, remove all selected rows
      const table = TableSelection.selectionStartElement.closest('table');
      const rowIndex = coords.minY;
      const rowsToRemove = coords.maxY - coords.minY + 1;

      for (let i = 0; i < rowsToRemove; i++) {
        const tr = table.children[rowIndex];
        if (tr) {
          manageMergedCells(tr);
          TableHistory.register('remove', { node: tr, nextNode: tr.nextSibling, parentNode: table });
          const _tr = Parchment$7.find(tr);
          if (_tr) { // remove node this way in order to update delta
            _tr.remove();
          }
        }
      }
    } else {
      // otherwise, remove only the row of current cell
      const td = TableTrick.find_td(quill);
      if (td) {
        const tr = td.parent;
        manageMergedCells(tr.domNode);
        TableHistory.register('remove', { node: tr.domNode, nextNode: tr.next ? tr.next.domNode : null, parentNode: tr.parent.domNode });
        const _tr = Parchment$7.find(tr.domNode);
        if (_tr) { // remove node this way in order to update delta
          _tr.remove();
        }
      }
    }
    TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
    TableHistory.add(quill);
  }

  static splitCell(quill) {
    // get cell
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    let td = TableTrick.find_td(quill);
    if (coords && coords.maxX - coords.minX === 0 && coords.maxY - coords.minY === 0) {
      const _td = TableSelection.getCellAt(coords.minX, coords.minY);
      td = Parchment$7.find(_td);
    }

    if (td && TableTrick._split(td.domNode)) {
      // add changes to history
      // TableTrick._split already register 'split' change to history
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      // force triggering text-change event
      td.domNode.innerHTML = td.domNode.innerHTML;
      TableHistory.add(quill);
    }
  }

  static mergeSelection(quill) {
    // get selection
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    if (coords) {
      const table = TableSelection.selectionStartElement.closest('table');
      const colSpan = coords.maxX - coords.minX + 1;
      const rowSpan = coords.maxY - coords.minY + 1;
      if (colSpan > 1 || rowSpan > 1) {
        let node = null;
        let oldContent = null;
        let mergedNodes = [];
        let mergedCellContent = [];
        let cell_id;
        // get selected cells
        for (let y = coords.minY; y <= coords.maxY; y++) {
          for (let x = coords.minX; x <= coords.maxX; x++) {
            const cell = table.children[y].children[x];
            if (cell) {
              if (cell.textContent !== '') {
                // merge all contents
                mergedCellContent.push(cell.innerHTML);
              }

              if (!node) {
                // first cell (this cell will be kept)
                cell_id = cell.getAttribute('cell_id');
                node = cell;
                oldContent = node.innerHTML;
              } else {
                // other cells that will be merged
                let _oldContent = cell.innerHTML;
                // update mergedNodes array for history purposes
                mergedNodes.push({ node: cell, oldContent: _oldContent, newContent: '<p><br></p>' });
              }

              if (cell.getAttribute('colspan') || cell.getAttribute('rowspan')) {
                // cannot merge cell already merged
                alert('Cannot merge already merged cell');
                return false;
              }
            }
          }
        }

        if (node && mergedNodes.length) {
          mergedNodes.forEach(mergedNode => {
            mergedNode.node.setAttribute('merge_id', cell_id);
            mergedNode.node.innerHTML = mergedNode.newContent;
          });

          // set colspan and rowspan attributes
          node.setAttribute('colspan', colSpan);
          node.setAttribute('rowspan', rowSpan);
          // set merged content
          node.innerHTML = mergedCellContent.join('');
        }
        // add changes to history
        TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
        TableHistory.register('merge', { node, mergedNodes, colSpan, rowSpan, oldContent, newContent: node.innerHTML });
        TableHistory.add(quill);
      }
    }
  }

  static removeCell(quill) {
    // get cell
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    let td = TableTrick.find_td(quill);
    if (coords && coords.maxX - coords.minX === 0 && coords.maxY - coords.minY === 0) {
      const _td = TableSelection.getCellAt(coords.minX, coords.minY);
      td = Parchment$7.find(_td);
    }

    if (td && TableTrick._removeCell(td.domNode)) {
      // add changes to history
      // TableTrick._removeCell already register 'remove' change to history
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      TableHistory.add(quill);
    }
  }

  static removeSelection(quill) {
    // get selection
    const coords = TableSelection.getSelectionCoords();
    TableSelection.resetSelection(quill.container);
    if (coords) {
      const table = TableSelection.selectionStartElement.closest('table');
      let nodesToRemove = [];
      for (let y = coords.minY; y <= coords.maxY; y++) {
        for (let x = coords.minX; x <= coords.maxX; x++) {
          const cell = table.children[y].children[x];
          if (cell) {
            // if a cell is merged to another cell, split target cell
            const merge_id = cell.getAttribute('merge_id');
            if (merge_id) {
              const targetCell = table.querySelector(`td[cell_id="${merge_id}"]`);
              if (targetCell) {
                TableTrick._split(targetCell);
              }
            }

            if (cell.getAttribute('rowspan') || cell.getAttribute('colspan')) {
              TableTrick._split(cell);
            }

            // remove cell (and row if empty)
            let node = cell;
            let nextNode = cell.nextSibling;
            let parentNode = cell.parentNode;
            if (parentNode.nodeName === 'TR' && parentNode.childNodes.length <= 1) {
              // remove row if only one node (cell to be removed)
              node = parentNode;
              nextNode = node.nextSibling;
              parentNode = node.parentNode;
            }
            nodesToRemove.push(node);
            TableHistory.register('remove', { node, nextNode, parentNode });
          }
        }
      }

      nodesToRemove.forEach(node => {
        const _node = Parchment$7.find(node);
        if (_node) { // remove node this way in order to update delta
          _node.remove();
        }
      });

      // add changes to history
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      TableHistory.add(quill);
    }
  }

  static _removeCell(cell, recursive = true) {
    let cell_id = cell.getAttribute('cell_id');
    if (cell.nodeName === 'TD') {
      if (recursive) {
        if (cell.getAttribute('merge_id')) {
          // remove merged cells
          cell = cell.closest('table').querySelector('td[cell_id="' + cell.getAttribute('merge_id') + '"]');
          if (!cell) return false;
          cell_id = cell.getAttribute('cell_id');
        }

        if (cell.getAttribute('colspan') || cell.getAttribute('rowspan')) {
          // remove merged cells
          cell.parentNode.parentNode.querySelectorAll(`td[merge_id="${cell_id}"`).forEach(node => {
            TableTrick._removeCell(node, false);
          });
        }
      }

      let node = cell;
      let nextNode = cell.nextSibling;
      let parentNode = cell.parentNode;
      if (parentNode.nodeName === 'TR' && parentNode.childNodes.length <= 1) {
        // remove row if only one node (cell to be removed)
        node = parentNode;
        nextNode = node.nextSibling;
        parentNode = node.parentNode;
        if (parentNode.nodeName === 'TABLE' && parentNode.childNodes.length <= 1) {
          // remove table if only one node (row to be removed)
          node = parentNode;
          nextNode = node.nextSibling;
          parentNode = node.parentNode;
        }
      }

      const _node = Parchment$7.find(node);
      if (_node) { // remove node this way in order to update delta
        _node.remove();
      }

      TableHistory.register('remove', { node, nextNode, parentNode });
      return true;
    }
    return false;
  }

  static _split(cell) {
    const cell_id = cell.getAttribute('cell_id');
    // get merged nodes and update mergedNodes array for history purposes, remove merge_id attribute
    let mergedNodes = [];
    cell.parentNode.parentNode.querySelectorAll(`td[merge_id="${cell_id}"`).forEach(node => {
      mergedNodes.push({ node, oldContent: node.innerHTML, newContent: node.innerHTML });
      node.removeAttribute('merge_id');
    });

    const colSpan = Number.parseInt(cell.getAttribute('colspan') || 1);
    const rowSpan = Number.parseInt(cell.getAttribute('rowspan') || 1);
    if (colSpan > 1 || rowSpan > 1) {
      // remove colspan and rowspan attributes
      cell.removeAttribute('colspan');
      cell.removeAttribute('rowspan');
      // register changes to history
      TableHistory.register('split', { node: cell, mergedNodes, colSpan, rowSpan, oldContent: cell.innerHTML, newContent: cell.innerHTML });
      return true;
    }
    return false;
  }

  static emitTextChange(quill, oldDelta, source = 'user') {
    const newDelta = quill.getContents();
    quill.emitter.emit('text-change', oldDelta.diff(newDelta), oldDelta, source);
  }

  static table_handler(value, quill) {
    // Check if the selection is for the same Quill instance, otherwise reset selection
    if (
      (TableSelection.selectionStartElement && !quill.container.contains(TableSelection.selectionStartElement)) ||
      (TableSelection.selectionEndElement && !quill.container.contains(TableSelection.selectionEndElement))
    ) {
      TableSelection.selectionStartElement = TableSelection.selectionEndElement = null;
      TableSelection.resetSelection();
    }

    if (value.includes('newtable_')) {
      const sizes = value.split('_');
      const row_count = Number.parseInt(sizes[1]);
      const col_count = Number.parseInt(sizes[2]);
      TableTrick.insertTable(quill, col_count, row_count);
    } else {
      let append_direction = 'after';
      switch (value) {
        case 'append-col-before':
          append_direction = 'before';
        case 'append-col':
        case 'append-col-after':
          TableTrick.addCol(quill, append_direction);
          break;
        case 'remove-col':
          TableTrick.removeCol(quill);
          break;
        case 'append-row-above':
          append_direction = 'before';
        case 'append-row':
        case 'append-row-below':
          TableTrick.addRow(quill, append_direction);
          break;
        case 'remove-row':
          TableTrick.removeRow(quill);
          break;
        case 'insert':
          TableTrick.insertTable(quill, 1, 1);
          break;
        case 'remove-table':
          TableTrick.removeTable(quill);
          break;
        case 'split-cell':
          TableTrick.splitCell(quill);
          break;
        case 'merge-selection':
          TableTrick.mergeSelection(quill);
          break;
        case 'remove-cell':
          TableTrick.removeCell(quill);
          break;
        case 'remove-selection':
          TableTrick.removeSelection(quill);
          break;
        case 'undo':
          if (quill.history.stack.undo.length) {
            const entry = quill.history.stack.undo[quill.history.stack.undo.length - 1];
            if (typeof entry.type !== 'undefined' && typeof entry.id !== 'undefined' && entry.type === 'tableHistory') {
              // Table history entry
              TableHistory.undo(quill, entry.id);
              return false;
            } else if (entry.undo && entry.undo.ops.some(op => op.attributes && op.attributes.td === null)) {
              // Ajusta histórico: operação de undo possui um item com atributo td=null que mantém uma célula vazia
              const index = entry.undo.ops.findIndex(op => op.attributes && op.attributes.td === null);
              entry.undo.ops.splice(index, 1);
            }
            // Classic history entry
          }
          return true;
        case 'redo':
          if (quill.history.stack.redo.length) {
            const entry = quill.history.stack.redo[quill.history.stack.redo.length - 1];
            if (typeof entry.type !== 'undefined' && typeof entry.id !== 'undefined' && entry.type === 'tableHistory') {
              // Table history entry
              TableHistory.redo(quill, entry.id);
              return false;
            }
            // Classic history entry
          }
          return true;
        case 'copy':
          if (TableSelection.selectionStartElement && TableSelection.selectionEndElement) {
            // Copy text in selection
            // Save previous selection
            let { anchorNode, anchorOffset, focusNode, focusOffset } = window.getSelection();
            // Get table selection position
            // Set selection and copy
            window.getSelection().removeAllRanges();
            let range = document.createRange();
            range.setStart(TableSelection.selectionStartElement, 0);
            range.setEnd(TableSelection.selectionEndElement, TableSelection.selectionEndElement.childNodes.length);
            window.getSelection().addRange(range);
            if (TableSelection.selectionStartElement === TableSelection.selectionEndElement) {
              TableSelection.selectionStartElement.classList.remove('ql-cell-selected');
            }
            document.execCommand('copy');
            if (TableSelection.selectionStartElement === TableSelection.selectionEndElement) {
              TableSelection.selectionStartElement.classList.add('ql-cell-selected');
            }
            // Remove selection and restore previous selection
            window.getSelection().removeAllRanges();
            range.setStart(anchorNode, anchorOffset);
            range.setEnd(focusNode, focusOffset);
            window.getSelection().addRange(range);
            return false;
          }
          return true;
      }
    }
  }
}

// import Quill from 'quill';

const Parchment$6 = Quill.import('parchment');

class TableRow extends ContainBlot {
  static create(value) {
    const tagName = 'tr';
    let node = super.create(tagName);
    node.setAttribute('row_id', value ? value : TableTrick.random_id());
    return node;
  }

  format() {}

  optimize(context) {
    if (this.children.length === 0) {
      if (this.statics.defaultChild != null) {
        var child = this.createDefaultChild();
        this.appendChild(child);
        child.optimize(context);
      } else {
        this.remove();
      }
    }
    let next = this.next;
    if (next != null && next.prev === this &&
      next.statics.blotName === this.statics.blotName &&
      next.domNode.tagName === this.domNode.tagName &&
      next.domNode.getAttribute('row_id') === this.domNode.getAttribute('row_id')
    ) {
      next.moveChildren(this);
      next.remove();
    }
  }

  insertBefore(childBlot, refBlot) {
    if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
      return childBlot instanceof child;
    })) {
      let newChild = this.createDefaultChild(refBlot);
      newChild.appendChild(childBlot);
      childBlot = newChild;
    }
    super.insertBefore(childBlot, refBlot);
  }

  replace(target) {
    if (target.statics.blotName !== this.statics.blotName) {
      let item = this.createDefaultChild();
      target.moveChildren(item, this);
      this.appendChild(item);
    }
    super.replace(target);
  }

  createDefaultChild(refBlot) {
    let table_id = null;
    if (refBlot) {
      table_id = refBlot.domNode.getAttribute('table_id');
    } else if (this.parent) {
      table_id = this.parent.domNode.getAttribute('table_id');
    } else {
      table_id = this.domNode.parent.getAttribute('table_id');
    }

    return Parchment$6.create(this.statics.defaultChild, [table_id, this.domNode.getAttribute('row_id'), TableTrick.random_id()].join('|'));
  }
}

TableRow.blotName = 'tr';
TableRow.tagName = 'tr';
TableRow.scope = Parchment$6.Scope.BLOCK_BLOT;
TableRow.defaultChild = 'td';
TableRow.allowedChildren = [TableCell];

// import Quill from 'quill';

const Parchment$5 = Quill.import('parchment');

class Table extends ContainBlot {
  static create(value) {
    const tagName = 'table';
    let node = super.create(tagName);
    node.setAttribute('table_id', value ? value : TableTrick.random_id());
    node.setAttribute('border', '1');
    return node;
  }

  format() {}

  optimize(context) {
    super.optimize(context);
    let quill = TableTrick.getQuill(this.domNode);
    if (!quill) return;
    let next = this.next;
    const table_id = this.domNode.getAttribute('table_id');

    if (
      next != null && next.prev === this && next.domNode.getAttribute('table_id') === table_id &&
      next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName
    ) {
      // merge table containing single cell with table
      next.moveChildren(this);
      next.remove();
    }

    if (
      typeof quill.table.tables[table_id] !== 'undefined' &&
      quill.table.tables[table_id].cell_counter === this.domNode.querySelectorAll('td').length &&
      quill.table.tables[table_id].row_counter === this.domNode.querySelectorAll('tr').length
    ) {
      // our table is fully initialized, we can do more optimizations

      // add hidden merged cells
      this.domNode.querySelectorAll('td[cell_id][colspan], td[cell_id][rowspan]').forEach(cell => {
        const index = Array.prototype.indexOf.call(cell.parentNode.children, cell);
        const colSpan = Number.parseInt(cell.getAttribute('colspan') || 1);
        const rowSpan = Number.parseInt(cell.getAttribute('rowspan') || 1);

        if (!this.domNode.querySelector('td[merge_id="' + cell.getAttribute('cell_id') + '"]') && (colSpan > 1 || rowSpan > 1)) {
          let row = cell.parentNode;
          for (let y = 1; y <= rowSpan; y++) {
            if (!row) break;
            // we want to add the cell between cell with colspan/rowspan and next cell
            // for next rows, add the cell before the cell with the same index
            let nextCell = y === 1 ? row.children[index + 1] : row.children[index];
            for (let x = 1; x <= colSpan; x++) {
              if (x === 1 && y === 1) {
                continue; // do not add a cell at the original cell position
              }
              let newCell = document.createElement('td');
              newCell.setAttribute('cell_id', TableTrick.random_id());
              newCell.setAttribute('row_id', row.getAttribute('row_id'));
              newCell.setAttribute('table_id', this.domNode.getAttribute('table_id'));
              newCell.setAttribute('merge_id', cell.getAttribute('cell_id'));
              let p = document.createElement('p');
              let br = document.createElement('br');
              p.appendChild(br);
              newCell.appendChild(p);
              row.insertBefore(newCell, nextCell);
            }
            row = row.nextSibling;
          }
        }
      });

      if (quill.table.tables[table_id].pasted) {
        // add to history
        TableHistory.register('insert', { node: this.domNode, nextNode: this.domNode.nextSibling, parentNode: this.domNode.parentNode });
        TableHistory.add(quill);
      }

      // delete entry for optimizing only once
      delete quill.table.tables[table_id];
    }
  }

  insertBefore(childBlot, refBlot) {
    if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
      return childBlot instanceof child;
    })) {
      let newChild = Parchment$5.create(this.statics.defaultChild, TableTrick.random_id());
      newChild.appendChild(childBlot);
      childBlot = newChild;
    }
    super.insertBefore(childBlot, refBlot);
  }
}

Table.blotName = 'table';
Table.tagName = 'table';
Table.scope = Parchment$5.Scope.BLOCK_BLOT;
Table.defaultChild = 'tr';
Table.allowedChildren = [TableRow];

// import Quill from 'quill';
// import Delta from 'quill-delta';
// import './css/quill.table.css';

const Container = Quill.import('blots/container');
const Parchment$4 = Quill.import('parchment');
const Delta$5 = Quill.import("delta");

const nodeListToArray = collection => {
  const elementsIndex = [];
  for (let i = 0; i < collection.length; i++) {
    elementsIndex.push(i);
  }
  return elementsIndex.map(i => collection.item(i));
};

Container.order = [
  'list', 'contain',   // Must be lower
  'td', 'tr', 'table'  // Must be higher
];

const emitirEventoTableInTable = (quill) => {
  quill.container.dispatchEvent(
    new CustomEvent('onTableInTable', {
      bubbles: true,
      composed: true,
    })
  );
};

class TableModule {
  static register() {
    Quill.register(TableCell, true);
    Quill.register(TableRow, true);
    Quill.register(Table, true);
    Quill.register(ContainBlot, true);
  }

  constructor(quill, options) {
    quill.history.tableStack = {};
    quill.table = {
      isInTable: false,
      tables: {}
    };

    // selection mouse events
    quill.container.addEventListener('mousedown', (e) => TableSelection.mouseDown(quill, e, options.cellSelectionOnClick));
    quill.container.addEventListener('mousemove', (e) => TableSelection.mouseMove(quill, e));
    quill.container.addEventListener('mouseup', (e) => TableSelection.mouseUp(quill, e));
    quill.on('selection-change', (range, oldRange) => TableSelection.selectionChange(quill, range, oldRange));

    const toolbar = quill.getModule('toolbar');

    toolbar.addHandler('table', function (value) {
      TableModule.configToolbar(quill, value);
    });

    const clipboard = quill.getModule('clipboard');
    clipboard.addMatcher('TABLE', function (node, delta) {
      if (isInTable(quill)) {
        emitirEventoTableInTable(quill);
        return new Delta$5();
      }

      const is_pasted_data = node.closest('.ql-editor') === null;
      const table_id = node.getAttribute('table_id');
      if (table_id) {
        quill.table.tables[table_id] = {
          pasted: is_pasted_data,
          row_counter: node.querySelectorAll('tr').length,
          cell_counter: node.querySelectorAll('td').length
        };
      }
      return delta;
    });
    clipboard.addMatcher('TR', function (node, delta) {
      return delta;
    });
    clipboard.addMatcher('TD, TH', function (node, delta) {
      if (delta.length() === 0) {
        // fix https://github.com/dclement8/quill1-table/issues/7 (empty td removed)
        delta.ops = [
          {insert: '\n'}
        ];
      } else if (delta.ops && delta.ops.length) {
        // fix https://github.com/dclement8/quill1-table/issues/7 (td with no child node)
        const lastIndex = delta.ops.reduce((lastIndex, op, idx) => typeof op.insert !== 'undefined' ? idx : lastIndex, -1);
        if (lastIndex >= 0 && !delta.ops[lastIndex].insert.endsWith('\n')) {
          delta.ops[lastIndex].insert += '\n';
        }
      }

      const tableNode = node.closest('table');
      if (!node.getAttribute('table_id') && tableNode) {
        if (!tableNode.getAttribute('table_id')) {
          tableNode.setAttribute('table_id', TableTrick.random_id());
        }
        node.setAttribute('table_id', tableNode.getAttribute('table_id'));
      }

      if (!node.getAttribute('row_id')) {
        const rowNode = node.closest('tr');
        if (rowNode) {
          if (!rowNode.getAttribute('row_id')) {
            rowNode.setAttribute('row_id', TableTrick.random_id());
          }
          node.setAttribute('row_id', rowNode.getAttribute('row_id'));
        }
      }

      if (!node.getAttribute('cell_id')) {
        node.setAttribute('cell_id', TableTrick.random_id());
      }

      const newDelta = delta.compose(new Delta$5().retain(delta.length(), {
        td: [
          node.getAttribute('table_id'),
          node.getAttribute('row_id'),
          node.getAttribute('cell_id'),
          node.getAttribute('merge_id'),
          node.getAttribute('colspan'),
          node.getAttribute('rowspan')
        ].join('|')
      }));
      return newDelta;
    });

    TableToolbar.enable(quill, ['newtable_*', 'insert', 'undo', 'redo']);
  }

  static tableOptions() {
    const maxRows = 5;
    const maxCols = 5;
    const tableOptions = [];
    for (let r = 1; r <= maxRows; r++) {
      for (let c = 1; c <= maxCols; c++) {
        tableOptions.push('newtable_' + r + '_' + c);
      }
    }
    return tableOptions;
  }

  static configToolbar(quill, value) {
    if (isInsertTable(value) && isInTable(quill)) {
      emitirEventoTableInTable(quill);
      return false;
    }
    return TableTrick.table_handler(value, quill);
  }


  static removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  static keyboardHandler(quill, key, range, keycontext) {
    const format_start = quill.getFormat(range.index - 1);
    const format_end = quill.getFormat(range.index + range.length);

    if (key === 'undo' || key === 'redo' || key === 'copy') {
      return TableTrick.table_handler(key, quill);
    }

    // If the event is not in a cell, then pass the standard handler
    if (!format_start.td && !keycontext.format.td && !format_end.td) {
      return true;
    }

    if (key === 'backspace') {
      // if the selection is at the cell border
      // BUG: after undo brings back deleted cell when backspace comes in the keycontext offset is 0, which throws it to the end
      if (!keycontext.offset && !range.length) {
        const selection = window.getSelection();
        const nodeList = document.querySelectorAll(".ql-editor p");
        // remove selected content
        const resultNodes = nodeListToArray(nodeList).filter(cell =>
          selection.containsNode(cell, true)
        );

        // deletion does not affect the cell
        if (!resultNodes.length) {
          return true;
        }
        // do not delete if we have a selection (TODO: manage selection deletion)
        if (TableSelection.getSelectionCoords()) {
          return false;
        }

        let nodeRemoved = false;
        resultNodes.forEach((resultNode, i) => {
          if (resultNode.previousSibling) {
            if (resultNode.previousSibling.nodeName === 'TABLE') {
              // remove last cell if we are right after a table
              const cells = resultNode.previousSibling.querySelectorAll('td');
              if (cells.length && TableTrick._removeCell(cells[cells.length - 1])) {
                nodeRemoved = true;
              }
            }
          } else if (resultNode.parentNode.nodeName === 'TD') {
            // remove current cell if we are inside it
            if (TableTrick._removeCell(resultNode.parentNode)) {
              nodeRemoved = true;
            }
          }
        });

        if (nodeRemoved) {
          TableHistory.add(quill);
        }

        // if at least one node has been removed, then return false (do not call standard handler)
        return !nodeRemoved;
      }

      // If we delete not at the cell border, then pass the standard handler
      return true;
    }

    if (key === 'tab') {
      TableSelection.resetSelection();
      const [leaf] = quill.getLeaf(quill.getSelection().index);
      let selectionIndex;
      let blot;
      let unmergedCell;
      if (leaf.parent.domNode.closest('td')) {
        if (leaf.parent.domNode.closest('td').nextSibling) {
          unmergedCell = leaf.parent.domNode.closest('td').nextSibling;
          while (unmergedCell && unmergedCell.getAttribute('merge_id')) {
            unmergedCell = unmergedCell.nextSibling;
          }
          blot = Quill.find(unmergedCell ? unmergedCell : leaf.parent.domNode.closest('tr').nextSibling); //we truly dont have any more cells
        } else { //we dont need to find the first child here since quill does the right thing
          if (leaf.parent.domNode.closest('tr').nextSibling) { //no more cells, go to the next row
            blot = Quill.find(leaf.parent.domNode.closest('tr').nextSibling);
          } else { //no more rows to the tables next sibling which will be the next quill run p,h1-h4
            if (leaf.parent.domNode.closest('table').nextSibling) {
              blot = Quill.find(leaf.parent.domNode.closest('table').nextSibling);
            }
          }
        }
        //we get the actual editor index when we have the blot aka element in editor
        selectionIndex = blot.offset(quill.scroll);
        quill.setSelection(selectionIndex, 0);

        return false
      }
      return true
    }

    if (key === "shiftTab") {
      //previous cell
      TableSelection.resetSelection();
      const [leaf] = quill.getLeaf(quill.getSelection().index);
      let selectionIndex;
      let blot;
      let unmergedCell;
      if (leaf.parent.domNode.closest('td')) {
        if (leaf.parent.domNode.closest('td').previousSibling) {
          unmergedCell = leaf.parent.domNode.closest('td').previousSibling;
          while (unmergedCell.getAttribute('merge_id')) { //this a merged cell, in dom but styled/css out
            unmergedCell = unmergedCell.previousSibling;
          }
          blot = Quill.find(unmergedCell);
        } else {
          if (leaf.parent.domNode.closest('tr').previousSibling) { //no more cells, go to the next row
            unmergedCell = leaf.parent.domNode.closest('tr').previousSibling.lastChild;
            while (unmergedCell.getAttribute('merge_id')) { //this a merged cell, in dom but styled/css out
              unmergedCell = unmergedCell.previousSibling;
            }
            blot = Quill.find(unmergedCell);
          } else {
            if (leaf.parent.domNode.closest('table').previousSibling) { //no more rows to the tables prev sibling which will just go to electron default.
              return true;
            }
          }
        }
        //we get the actual editor index when we have the blot aka element in editor
        selectionIndex = blot.offset(quill.scroll);
        quill.setSelection(selectionIndex, 0);

        return false;
      }
      return true;
    }

    let node = quill.selection.getNativeRange().start.node;
    if (!node) return false;
    let blot = Parchment$4.find(node);

    if (
      key === 'delete' && blot &&
      keycontext.offset < (blot.text ? blot.text.length : 0)
    ) {
      return true;
    }

    const [prev] = quill.getLine(range.index - 1);
    const [next] = quill.getLine(range.index + 1);
    // If a cell has multiple rows, you can delete as standard

    if (key === 'selectAll') {
      let [line] = quill.getLine(quill.getSelection().index);
      let blot;
      let nextBlot;
      if (line.parent.domNode.nodeName === "TD") {
        if (line.parent.domNode.nextSibling){
          nextBlot = Quill.find(line.parent.domNode.nextSibling);
        } else { //no next cell to bounce the end to
          if (line.parent.domNode.closest('tr').nextSibling) { //no next row either
            nextBlot = Quill.find(line.parent.domNode.closest('tr').nextSibling);
          } else { //the only other thing is get tables sibling which is the next p in editor
            nextBlot = Quill.find(line.parent.domNode.closest('table').nextSibling);
          }
        }
        blot = Quill.find(line.parent.domNode);
        let selectionIndex = blot.offset(quill.scroll); //index for cell start
        let nextBlotIndex = nextBlot.offset(quill.scroll); //index for cell ending
        quill.setSelection(selectionIndex, nextBlotIndex-selectionIndex-1);
        return false;
      }
      return true;
    }
    if (key === 'backspace' && prev && prev.next) {
      return true;
    }
    if (key === 'delete' && next && next.prev) {
      return true;
    }
  }
}

const isInsertTable = (value = '') => value.includes('newtable_');

const isInTable = (quill) => quill && quill.getSelection(true) && quill.getFormat(quill.getSelection(true)).td;

const removeElementosTDOcultos = (html = '') => {
    // O quill1table adiciona elementos td ocultos para identificar/gerenciar undo de células mescladas.
    // Esses elementos não devem fazer parte do texto html a ser salvo.
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const elementosOcultos = tempDiv.querySelectorAll('td[merge_id]');
    elementosOcultos.forEach((elemento) => elemento.parentNode?.removeChild(elemento));
    return tempDiv.innerHTML;
};

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import Quill from 'quill/dist/quill.js';
const Parchment$3 = Quill.import('parchment');
const config$1 = {
    scope: Parchment$3.Scope.BLOCK,
    whitelist: ['0px'],
};
// const NoIndentStyle = new Parchment.Attributor.Style('text-indent', 'text-indent', config);
const NoIndentClass = new Parchment$3.Attributor.Class('text-indent', 'ql-text-indent', config$1);

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import Quill from 'quill/dist/quill.js';
const Parchment$2 = Quill.import('parchment');
const config = {
    scope: Parchment$2.Scope.BLOCK,
    whitelist: ['0px'],
};
// const MarginBottomStyle = new Parchment.Attributor.Style('margin-bottom', 'margin-bottom', config);
const MarginBottomClass = new Parchment$2.Attributor.Class('margin-bottom', 'ql-margin-bottom', config);

const notaRodapeCss = html `
  <style>
    .nota-rodape {
      position: relative;
      cursor: pointer;
      font-size: 0.8em;
      line-height: 1;
      vertical-align: super;
      z-index: 1;
      margin-left: 0.1em;
    }

    .nota-rodape::after {
      content: attr(data-nota);
      color: transparent;
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      opacity: 0;
      background-color: var(--wa-color-red-80);
      color: black;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: 0.7em;
      text-indent: 0;
      z-index: -1;
      transition: transform opacity 0.3s ease;
    }

    .nota-rodape:hover::after {
      animation: pulseAnimation 1s infinite;
      opacity: 0.5;
    }

    @keyframes pulseAnimation {
      0% {
        transform: translate(-50%, 50%) scale(0.8);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, 50%) scale(1.2);
        opacity: 0.5;
      }
      100% {
        transform: translate(-50%, 50%) scale(1.6);
        opacity: 0;
      }
    }

    .nota-rodape.pulse::after {
      animation: pulseAnimation 1s infinite;
    }
  </style>
`;

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// const Quill = require('quill');
class QuillUtil {
    static configurarAcoesLink(quill) {
        const theme = quill.theme;
        const div = document.createElement('div');
        div.setAttribute('class', 'tooltip-invalid-message');
        theme.tooltip.root.appendChild(div);
        // Sobrescreve o método de criação do tooltip para adicionar a validação do link
        const originalEditTooltip = theme.tooltip.edit.bind(theme.tooltip);
        theme.tooltip.edit = (mode = 'link', preview = null) => {
            theme.tooltip.textbox?.setAttribute('pattern', mode === 'link' ? 'https?://.+' : '');
            originalEditTooltip(mode, preview);
        };
        // Sobrescreve o método de salvamento do tooltip para adicionar a validação do link
        const originalSaveTooltip = theme.tooltip.save.bind(theme.tooltip);
        theme.tooltip.save = () => {
            const el = quill.root.querySelector('.ql-tooltip[data-mode="link"]') ||
                quill.root.parentNode?.querySelector('.ql-tooltip[data-mode="link"]');
            const url = theme.tooltip.textbox?.value ?? '';
            if (el && !url.match(/https?:\/\//)) {
                el.classList.add('ql-tooltip-invalid');
                return;
            }
            originalSaveTooltip();
        };
    }
}
const isIgnored = (quill, index, length) => quill.getContents(index, length).ops.some((op) => op.attributes?.ignore);
const addBindingOnTop = (quill, key, context, handler) => {
    quill.keyboard.addBinding(key, context, handler);
    const _key = Object.keys(quill.keyboard.bindings)
        .map(k => quill.keyboard.bindings[k])
        .flat()
        .find(binding => binding.handler === handler && binding.key === key)?.key;
    if (!_key)
        return;
    const newBinding = (quill.keyboard.bindings[_key] || []).pop();
    newBinding && quill.keyboard.bindings[_key].unshift(newBinding);
};
const addMultipleBindingsOnTop = (quill, keys, context, handler) => {
    keys.forEach(key => addBindingOnTop(quill, key, context, handler));
};
class Range {
    constructor(index, length) {
        this.index = index;
        this.length = length ?? 0;
    }
}

function toPx(v) {
    if (v === null)
        return undefined;
    return typeof v === 'number' ? `${v}px` : v;
}
function ensureStack(width) {
    const id = 'wa-callout-stack';
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('div');
        el.id = id;
        el.className = 'wa-callout-stack';
        el.style.position = 'fixed';
        el.style.top = '16px';
        el.style.right = '16px';
        el.style.zIndex = '9999';
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
        el.style.gap = '8px';
        el.style.width = width || '420px';
        document.body.appendChild(el);
    }
    else if (width) {
        el.style.width = width;
    }
    return el;
}
function alertarInfo(msg, opts) {
    const { variant = 'danger', duration = 4000, icon = 'circle-exclamation', iconWeight = 'solid', width, height, } = opts || {};
    const stack = ensureStack(toPx(width));
    const callout = document.createElement('wa-callout');
    callout.setAttribute('variant', variant);
    callout.setAttribute('open', '');
    callout.style.width = '100%';
    const h = toPx(height);
    if (h) {
        callout.style.minHeight = h;
        callout.style.display = 'flex';
        callout.style.alignItems = 'center';
    }
    const waIcon = document.createElement('wa-icon');
    waIcon.setAttribute('slot', 'icon');
    waIcon.setAttribute('name', icon);
    waIcon.setAttribute('variant', iconWeight);
    const text = document.createTextNode(msg);
    callout.append(waIcon, text);
    stack.appendChild(callout);
    if (duration > 0) {
        setTimeout(() => callout.remove(), duration);
    }
}

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import Quill from 'quill/dist/quill.js';
const Delta$4 = Quill.import('delta');
class ModuloAspasCurvas {
    constructor(quill, options) {
        this.enabled = true;
        this.quill = quill;
        this.options = options;
        this.quill.root.addEventListener('keydown', (event) => {
            const range = this.quill?.getSelection();
            const key = event.key;
            if (!this.enabled || !range || !['"', "'"].includes(key))
                return;
            this.tratarAspas(range, key);
            event.preventDefault();
        });
        // O código abaixo é uma outra forma de fazer a mesma coisa.
        // Se o código abaixo for usado, o código acima (addEventListener e todo o seu conteúdo) deve ser comentado.
        // this.quill.keyboard.addBinding({ key: 192 }, { shiftKey: true }, (range: any, context: any): boolean => this.tratarAspas(range, '"'));
        // this.quill.keyboard.addBinding({ key: 192 }, { shiftKey: false }, (range: any, context: any): boolean => this.tratarAspas(range, "'"));
    }
    // Imita autoformação de aspas curvas do Word
    tratarAspas(range, caracter) {
        if (!this.enabled)
            return true;
        const isAspasDuplas = caracter === '"';
        const abreAspas = isAspasDuplas ? '“' : '‘';
        const fechaAspas = isAspasDuplas ? '”' : '’';
        const texto = this.quill?.getText().substring(0, range.index);
        const aspasTransformada = !texto || texto?.match(/\s$/g) ? abreAspas : fechaAspas;
        const format = this.quill?.getFormat(range);
        // Insere o caracter normalmente
        let delta = new Delta$4()
            .retain(range.index)
            .delete(range.length)
            .insert(caracter, format);
        this.quill?.updateContents(delta, 'user');
        this.quill.history.cutoff();
        // Troca por aspas curvas
        delta = new Delta$4()
            .retain(range.index)
            .delete(1)
            .insert(aspasTransformada, format);
        this.quill?.updateContents(delta, 'user');
        this.quill?.setSelection(range.index + 1, 'silent');
        return false;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
}

const generateUUID = () => {
    let uuid = '';
    for (let i = 0; i < 32; i++) {
        const randomNumber = (Math.random() * 16) | 0;
        const value = (i === 12 ? 4 : i === 16 ? (randomNumber & 3) | 8 : randomNumber).toString(16);
        uuid += (i === 8 || i === 12 || i === 16 || i === 20 ? '-' : '') + value;
    }
    return uuid;
};

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
const Delta$3 = Quill.import('delta');
const Parchment$1 = Quill.import('parchment');
const Module$2 = Quill.import('core/module');
const Inline$1 = Quill.import('blots/inline');
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
class RevisaoUtil {
    static valueToAttributes(value, domNode) {
        if (!value)
            return;
        const partes = value.split('|');
        domNode.setAttribute('usuario', partes[0]);
        domNode.setAttribute('date', partes[1]);
        domNode.setAttribute('title', 'Revisão de ' +
            partes[0] +
            ' em ' +
            this.formatDDMMYYYYAndTime(new Date(partes[1])));
        domNode.setAttribute('id-revisao', partes[2]);
    }
    static formats(domNode) {
        if (domNode?.hasAttribute('usuario') && domNode?.hasAttribute('date')) {
            return [
                domNode.getAttribute('usuario'),
                domNode.getAttribute('date'),
                domNode.getAttribute('id-revisao'),
            ].join('|');
        }
    }
    static padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    static formatDate(date) {
        return ([
            date.getFullYear(),
            RevisaoUtil.padTo2Digits(date.getMonth() + 1),
            RevisaoUtil.padTo2Digits(date.getDate()),
        ].join('-') +
            ' ' +
            [
                RevisaoUtil.padTo2Digits(date.getHours()),
                RevisaoUtil.padTo2Digits(date.getMinutes()),
                // RevisaoUtil.padTo2Digits(date.getSeconds()),
                '00',
            ].join(':'));
    }
    static formatDDMMYYYYAndTime(date) {
        const data = [
            this.padTo2Digits(date.getDate()),
            this.padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
        const hora = [
            this.padTo2Digits(date.getHours()),
            this.padTo2Digits(date.getMinutes()),
        ].join(':');
        return `${data} ${hora}`;
    }
}
// --------------------------------------------------------------------------------------------------------------------
// Fornatos de revisão inline
class InlineRevisionBaseFormat extends Inline$1 {
    static create(value) {
        let node = super.create();
        RevisaoUtil.valueToAttributes(value, node);
        return node;
    }
    static formats(domNode) {
        return RevisaoUtil.formats(domNode);
    }
    format(name, value) {
        if (name !== this.statics.blotName || !value)
            return super.format(name, value);
        RevisaoUtil.valueToAttributes(value, this.domNode);
    }
    optimize(context) {
        const blotName = this.statics.blotName;
        if (blotName === this.next?.statics?.blotName) {
            const formatoAtual = this.formats();
            this.next.domNode.setAttribute('date', this.domNode.getAttribute('date'));
            this.next.domNode.setAttribute('usuario', this.domNode.getAttribute('usuario'));
            this.next.format(blotName, formatoAtual[blotName]);
        }
        super.optimize(context);
    }
}
InlineRevisionBaseFormat.blotName = 'revisionBaseFormat';
InlineRevisionBaseFormat.tagName = '';
class InsBlot extends InlineRevisionBaseFormat {
}
InsBlot.blotName = 'added';
InsBlot.tagName = 'ins';
class DelBlot extends InlineRevisionBaseFormat {
}
DelBlot.blotName = 'removed';
DelBlot.tagName = 'del';
const cursorEstaSobreBlotDel = (quill) => {
    const range = quill.getSelection();
    const blot = range && quill.getLeaf(range.index)[0];
    return (blot?.statics.blotName === DelBlot.blotName ||
        blot?.parent?.statics.blotName === DelBlot.blotName);
};
class ModuloRevisao extends Module$2 {
    static register() {
        Quill.register(InsBlot, true);
        Quill.register(DelBlot, true);
    }
    constructor(quill, options) {
        super(quill, options);
        this.ignorarEventoTextChange = false;
        this.emRevisao = false;
        this.gerenciarKeydown = true;
        this.isAbrindoTexto = false;
        this.quill = quill;
        this.options = options;
        if (!options || !Object.keys(options).length)
            return;
        // this.quill.options.formats.push(...['added', 'removed']);
        this.usuario = options.usuario;
        this.emRevisao = options.emRevisao ?? false;
        this.gerenciarKeydown = options.gerenciarKeydown ?? true;
        this.tableModule = options.tableModule;
        this.tableTrick = options.tableTrick;
        this.quill.revisao = this;
        this.addClipboardMatcher();
        this.addKeyboardBindings(this.quill);
        this.quill.on('text-change', this.onTextChange.bind(this));
        this.quill.root.addEventListener('click', this.tratarClick.bind(this));
        if (this.tableModule) {
            const toolbar = this.quill?.getModule('toolbar');
            toolbar.addHandler('table', (value) => {
                const quill = this.quill;
                const isInsertTable = (value = '') => value.includes('newtable_');
                const isInTable = (quill) => quill &&
                    quill.getSelection(true) &&
                    quill.getFormat(quill.getSelection(true)).td;
                if (isInsertTable(value) && isInTable(quill)) {
                    return false;
                }
                quill?.revisao?.setIgnorarEventoTextChange(true);
                return this.tableTrick.table_handler(value, quill);
            });
        }
    }
    isTagRevisao(param) {
        const tagName = typeof param === 'string' ? param : param?.tagName;
        return ['INS', 'DEL'].includes(tagName);
    }
    getTagRevisaoMaisProxima(elemento) {
        return elemento?.closest(`${InsBlot.tagName}, ${DelBlot.tagName}`);
    }
    tratarClick(event) {
        const elRevisao = this.getTagRevisaoMaisProxima(event.target);
        elRevisao && this.mostrarTooltipRevisao(elRevisao);
    }
    revisarTodos(aceitar) {
        this.revisar(this.getRevisoes(), aceitar, true);
    }
    revisar(elementosRevisao, aceitar, todos = false) {
        if (!this.emRevisao)
            return;
        elementosRevisao
            .filter(el => this.isTagRevisao(el))
            .forEach(elRevisao => {
            const isTagIns = elRevisao.tagName === 'INS';
            const blot = Quill.find(elRevisao);
            this.ignorarEventoTextChange = true;
            if (blot !== null) {
                if ((aceitar && !isTagIns) || (!aceitar && isTagIns)) {
                    const index = this.quill.getIndex(blot);
                    const length = blot.length();
                    this.quill.updateContents(new Delta$3().retain(index).delete(length), 'user');
                }
                else {
                    blot.format(isTagIns ? 'added' : 'removed', false, 'user');
                }
            }
        });
        //força o revisar quando é "todos" e ainda sobrou revisões no quill
        if (todos && this.getRevisoes().length > 0) {
            this.revisar(this.getRevisoes(), aceitar);
        }
    }
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    mostrarTooltipRevisao(elRevisao) {
        if (!elRevisao)
            return;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-revisao');
        const data = new Date(elRevisao.getAttribute('date') || '');
        tooltip.innerHTML = `
        <style>
        .tooltip-revisao {
          position: absolute;
          border: 1px solid black;
          background-color: white;
          padding: 10px;
          border-radius: 4px;
          z-index: 9999;
          font-size: 0.9rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          max-width: 300px;
          transition: all 0.3s ease-in-out;
        }
        .tooltip-revisao__actions {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }
        .tooltip-revisao__actions button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 15px;
          background-color: #eee;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
        }
        .tooltip-revisao__actions svg {
          fill: currentColor;
          width: 24px;
          height: 24px;
        }
        .tooltip-revisao button:hover {
          background-color: #ddd;
        }
        .tooltip-revisao button:active {
          background-color: #ccc;
        }
        .tooltip-revisao__body {
          display: flex;
          flex-direction: row;
          gap: 1rem;
        }
        .tooltip-revisao__autor {
          font-weight: bold;
        }
        .tooltip-revisao__data {
          font-size: 0.8rem;
          color: #666;
        }
      </style>
      <div class="tooltip-revisao__body" role="tooltip">
        <div>
          <div class="tooltip-revisao__autor">${elRevisao.getAttribute('usuario')}</div>
          <div class="tooltip-revisao__data">${RevisaoUtil.formatDDMMYYYYAndTime(data)}</div>
        </div>
        <div class="tooltip-revisao__actions">
          <button id="button-rejeitar-revisao" aria-label="Rejeitar revisão" title="Rejeitar revisão">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
          <button id="button-aceitar-revisao" aria-label="Aceitar revisão" title="Aceitar revisão">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
          </button>
        </div>
      </div>
      `;
        tooltip.style.opacity = '0';
        document.body.appendChild(tooltip);
        const fnActionRevisao = (event, aceitar) => {
            const elementos = [
                ...this.quill.root.querySelectorAll(`${elRevisao.tagName}[id-revisao="${elRevisao.getAttribute('id-revisao')}"]`),
            ];
            this.revisar(elementos, aceitar);
            closeTooltip(event);
        };
        tooltip
            .querySelector('#button-rejeitar-revisao')
            .addEventListener('click', (event) => fnActionRevisao(event, false));
        tooltip
            .querySelector('#button-aceitar-revisao')
            .addEventListener('click', (event) => fnActionRevisao(event, true));
        this.ajustaPosicaoTooltip(tooltip, elRevisao);
        const closeTooltip = (e) => {
            if (e.type === 'click') {
                limpaTooltip();
            }
            else if (e.type === 'keydown' &&
                e.key === 'Escape') {
                limpaTooltip();
            }
            setTimeout(() => this.quill.root.focus(), 0);
        };
        const limpaTooltip = () => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                tooltip.remove();
                document.removeEventListener('click', closeTooltip);
                document.removeEventListener('keydown', closeTooltip);
            }, 300);
        };
        setTimeout(() => {
            document.addEventListener('click', closeTooltip);
            document.addEventListener('keydown', closeTooltip);
            tooltip.style.opacity = '1';
        }, 0);
        window.addEventListener('resize', () => this.ajustaPosicaoTooltip(tooltip, elRevisao));
    }
    ajustaPosicaoTooltip(tooltip, button) {
        const rect = button.getBoundingClientRect();
        const offset = 10;
        // Abrir para cima por padrão, a menos que não haja espaço suficiente
        let topOffset = rect.top - tooltip.clientHeight - offset;
        if (topOffset < window.scrollY) {
            topOffset = rect.bottom + offset;
        }
        tooltip.style.top = `${topOffset + window.scrollY}px`;
        // Ajustar horizontalmente se estiver muito próximo à borda direita
        let leftOffset = rect.left + rect.width / 2 - tooltip.clientWidth / 2;
        if (leftOffset + tooltip.clientWidth > window.innerWidth) {
            leftOffset = window.innerWidth - tooltip.clientWidth - offset;
        }
        else if (leftOffset < 0) {
            leftOffset = offset;
        }
        tooltip.style.left = `${leftOffset + window.scrollX}px`;
    }
    createTooltip() {
        Array.from(this.querySelectorAll('#tooltipAcceptRefuse')).forEach(el => this.removeChild(el));
        const tooltipElem = document.createElement('tooltip');
        tooltipElem.id = 'tooltipAcceptRefuse';
        document.body.appendChild(tooltipElem);
        document.createRange().createContextualFragment(`
    <style>
    .tooltip {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    .tooltip .tooltiptext {
      display: none;
      width: 120px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      top: calc(100% + 5px);
      left: 50%;
      margin-left: -60px;
    }

    </style>
    <div class="tooltip" id="tooltip">
      Hover sobre mim
      <span class="tooltiptext" id="tooltipContent">
        <button onclick="botaoClicado(1)">Botão 1</button>
        <button onclick="botaoClicado(2)">Botão 2</button>
      </span>
    </div>

    <wa-button slot="footer" variant="primary">Fechar</wa-button>
  `);
    }
    handleKeyDown(e) {
        // Não implementado
    }
    addClipboardMatcher() {
        // Handle para tratar colagem de trechos com tag <del>
        this.quill.clipboard.addMatcher('DEL', (node, delta) => {
            if (this.isAbrindoTexto) {
                return delta;
            }
            else {
                let match = Parchment$1.query(node);
                if (match == null || match.blotName !== 'removed') {
                    return delta;
                }
                const id = generateUUID();
                const ops = delta.ops.reduce((acc, op) => {
                    if (op.insert) {
                        delete op.attributes.background;
                        delete op.attributes.removed;
                        if (this.emRevisao) {
                            op.attributes.added = this.buildAttributes(id);
                        }
                        acc.push(op);
                    }
                    return acc;
                }, []);
                return new Delta$3(ops);
            }
        });
    }
    addKeyboardBindings(quill) {
        function addBindingOnTop(keyBinding, context, handler) {
            quill.keyboard.addBinding(keyBinding, context, handler);
            const key = Object.keys(quill.keyboard.bindings)
                .map(k => quill.keyboard.bindings[k])
                .flat()
                .find(binding => binding.handler === handler).key;
            const newBinding = (quill.keyboard.bindings[key] || []).pop();
            quill.keyboard.bindings[key].unshift(newBinding);
        }
        addBindingOnTop({ key: 'Backspace' }, null, (range, context) => this.handleRemove(range, context, 'Backspace'));
        addBindingOnTop({ key: 'Delete' }, null, (range, context) => this.handleRemove(range, context, 'Delete'));
        // Undo
        addBindingOnTop({ key: 'z', shortKey: true }, null, (range, context) => this.handleUndo(range, context));
        // Redo
        addBindingOnTop({ key: 'z', shortKey: true, shiftKey: true }, null, (range, context) => this.handleRedo(range, context));
        addBindingOnTop({ key: 'y', shortKey: true }, null, (range, context) => this.handleRedo(range, context));
    }
    handleUndo(range, context) {
        const hasModuloTabela = this.quill.getModule('table') && this.tableModule;
        if (this.emRevisao) {
            this.ignorarEventoTextChange = true;
        }
        if (hasModuloTabela) {
            return this.tableModule.keyboardHandler(this.quill, 'undo', range, context);
        }
        else {
            this.quill.history.undo();
        }
    }
    handleRedo(range, context) {
        const hasModuloTabela = this.quill.getModule('table') && this.tableModule;
        if (this.emRevisao) {
            this.ignorarEventoTextChange = true;
        }
        if (hasModuloTabela) {
            return this.tableModule.keyboardHandler(this.quill, 'redo', range, context);
        }
        else {
            this.quill.history.redo();
        }
    }
    buildAttributes(id = '') {
        return this.usuario + '|' + RevisaoUtil.formatDate(new Date()) + ' |' + id;
    }
    handleRemove(range, context, key) {
        const deslocamento = key === 'Delete' ? 1 : -1;
        const quill = this.quill;
        if (this.emRevisao) {
            const blot = quill.getLeaf(range.index)[0];
            const isEmbedBlot = ['image'].includes(blot.statics.blotName);
            const index = (blot.text || isEmbedBlot) && deslocamento === -1 && !range.length
                ? range.index - 1
                : range.index;
            let posicao = index;
            if (index < 0 || index >= quill.getLength())
                return true;
            const delta = quill.getContents(index, range.length || 1);
            const id = generateUUID();
            const ops = delta.ops.reduce((acc, op) => {
                const numChars = typeof op.insert === 'string' ? op.insert.length : 1;
                if (op.attributes?.added) {
                    acc.push({ delete: numChars });
                }
                else {
                    if (op.attributes?.list && !blot.text) {
                        acc.push({ retain: numChars, attributes: { list: false } });
                    }
                    else if (!blot.text && !isEmbedBlot) {
                        acc.push({ delete: numChars });
                    }
                    else {
                        acc.push({
                            retain: numChars,
                            attributes: {
                                ...(op.attributes || {}),
                                removed: this.buildAttributes(id),
                            },
                        });
                        if (deslocamento === 1) {
                            posicao += numChars;
                        }
                    }
                }
                return acc;
            }, []);
            index && ops.unshift({ retain: index });
            this.ignorarEventoTextChange = true;
            quill.updateContents({ ops }, 'user');
            quill.setSelection(posicao);
            return false;
        }
        return true;
    }
    onTextChange(delta, oldContent, source) {
        const isInsertJaFormatadoEmModoDeRevisao = delta.ops.find((op) => op.insert)?.attributes?.added;
        const apenasNovaLinha = delta.ops.length === 2 &&
            delta.ops[0].retain &&
            delta.ops[1].insert === '\n';
        const quill = this.quill;
        if (this.ignorarEventoTextChange ||
            !this.emRevisao ||
            isInsertJaFormatadoEmModoDeRevisao ||
            !delta.ops.length ||
            apenasNovaLinha) {
            this.ignorarEventoTextChange = false;
            return;
        }
        if (quill.history.stack.undo.length === 0)
            return;
        let numCaracteresRemovidos = 0;
        this.ignorarEventoTextChange = true;
        let itemUndo = quill.history.stack.undo.pop();
        const redo = JSON.parse(JSON.stringify(itemUndo.redo));
        quill.history.cutoff();
        quill.history.ignoreChange = true;
        quill.updateContents(itemUndo.undo, 'silent');
        quill.history.ignoreChange = false;
        if (!quill.history.options?.userOnly)
            quill.history.stack.undo.pop();
        this.ignorarEventoTextChange = true;
        let rev = { ops: [] };
        let idx = 0;
        const id = generateUUID();
        rev = redo.ops.reduce((acc, op) => {
            const length = op.retain ||
                op.delete ||
                (typeof op.insert === 'string' ? op.insert.length : 1);
            if (op.retain && op.attributes?.list) {
                // idx += 1;
                acc.ops.push({
                    retain: op.retain,
                    attributes: { ...(op.attributes || {}) },
                });
                idx += op.retain;
            }
            else if (op.retain) {
                acc.ops.push({
                    retain: op.retain,
                    attributes: { ...(op.attributes || {}) },
                });
                idx += op.retain;
            }
            else if (op.delete) {
                // Para refazer trechos removidos em modo de revisão é preciso identificar o que está sendo removido
                const contentDeletedRange = quill.getContents(idx, op.delete);
                contentDeletedRange.ops.forEach((op2) => {
                    if (op2.insert && op2.attributes?.added) {
                        // Deixa remover conteúdo adicionado em modo de revisão
                        acc.ops.push({ delete: op2.insert.length });
                    }
                    else if (op2.insert && !op2.attributes?.added) {
                        // Não deixa remover conteúdo adicionado FORA modo de revisão
                        // Formata como removido em modo de revisão
                        acc.ops.push({
                            retain: op2.insert.length,
                            attributes: { removed: this.buildAttributes(id) },
                        });
                        idx += op2.insert.length;
                        numCaracteresRemovidos += op2.insert.length;
                    }
                    else {
                        acc.ops.push({
                            retain: op2.retain || op2.delete,
                            attributes: { removed: this.buildAttributes(id) },
                        });
                        idx += op2.retain || op2.delete;
                    }
                });
            }
            else if (op.insert && !op.attributes?.added) {
                op.attributes = {
                    ...(op.attributes || {}),
                    added: this.buildAttributes(id),
                    removed: false,
                };
                acc.ops.push(op);
                idx += length;
            }
            return acc;
        }, rev);
        quill.history.cutoff();
        quill.updateContents(rev, 'user');
        setTimeout(() => {
            quill.setSelection(idx - numCaracteresRemovidos, 0);
            this.ignorarEventoTextChange = false;
        }, 0);
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    setEmRevisao(emRevisao) {
        this.emRevisao = emRevisao;
    }
    setIgnorarEventoTextChange(ignorarEventoTextChange) {
        this.ignorarEventoTextChange = ignorarEventoTextChange;
    }
    getQuantidadeRevisoes() {
        return this.getRevisoesSemDuplicidade(this.getRevisoes()).length;
    }
    getRevisoes() {
        const cursorCode = 65279;
        return [...this.quill.root.querySelectorAll('ins, del')].filter(el => el.innerText?.charCodeAt(0) !== cursorCode);
    }
    getRevisoesSemDuplicidade(listElements) {
        const revisoesSemDuplicidade = [];
        listElements.forEach(element => {
            if (!revisoesSemDuplicidade.find((r) => r.getAttribute('id-revisao') ===
                element.getAttribute('id-revisao') &&
                r.nodeName === element.nodeName)) {
                revisoesSemDuplicidade.push(element);
            }
        });
        return revisoesSemDuplicidade;
    }
}

// Foi utilizado TemplateResult porque o editor.component.ts não usa ShadowDom
const quillSnowStyles = html `
  <style>
    /*!
    * Quill Editor v1.3.7
    * https://quilljs.com/
    * Copyright (c) 2014, Jason Chen
    * Copyright (c) 2013, salesforce.com
    */
    .ql-container {
      box-sizing: border-box;
      /* font-family: Helvetica, Arial, sans-serif; */
      font-family: var(--eta-font-serif);
      font-size: 13px;
      height: 100%;
      margin: 0px;
      position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
      visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
      pointer-events: none;
    }
    .ql-clipboard {
      left: -100000px;
      height: 1px;
      overflow-y: hidden;
      position: absolute;
      top: 50%;
    }
    .ql-clipboard p {
      margin: 0;
      padding: 0;
    }
    .ql-editor {
      box-sizing: border-box;
      line-height: 1.42;
      height: 100%;
      outline: none;
      overflow-y: auto;
      padding: 12px 15px;
      tab-size: 4;
      -moz-tab-size: 4;
      text-align: left;
      /* white-space: pre-wrap; */
      word-wrap: break-word;
    }
    .ql-editor > * {
      cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
      margin: 0;
      padding: 0;
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
        list-9;
    }
    .ql-editor p {
      line-height: 1.42;
      font-size: 18px;
    }
    .ql-editor ol,
    .ql-editor ul {
      padding-left: 1.5em;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
      list-style-type: none;
    }
    .ql-editor ul > li::before {
      content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
      pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
      pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
      color: #777;
      cursor: pointer;
      pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
      content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
      content: '\\2610';
    }
    .ql-editor li::before {
      display: inline-block;
      white-space: nowrap;
      width: 1.2em;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
      margin-left: 0.3em;
      margin-right: -1.5em;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
      padding-left: 1.5em;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
      padding-right: 1.5em;
    }
    .ql-editor ol li {
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
        list-9;
      counter-increment: list-0;
    }
    .ql-editor ol li:before {
      content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
      counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
      content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
      counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
      content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
      counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
      content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
      counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
      content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
      counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
      counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
      content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
      counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
      counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
      content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
      counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
      counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
      content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
      counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
      counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
      content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
      counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
      counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
      content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 3em;
    }
    .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 4.5em;
    }
    .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 3em;
    }
    .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 4.5em;
    }
    .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 6em;
    }
    .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 7.5em;
    }
    .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 6em;
    }
    .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 7.5em;
    }
    .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 9em;
    }
    .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 10.5em;
    }
    .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 9em;
    }
    .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 10.5em;
    }
    .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 12em;
    }
    .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 13.5em;
    }
    .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 12em;
    }
    .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 13.5em;
    }
    .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 15em;
    }
    .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 16.5em;
    }
    .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 15em;
    }
    .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 16.5em;
    }
    .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 18em;
    }
    .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 19.5em;
    }
    .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 18em;
    }
    .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 19.5em;
    }
    .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 21em;
    }
    .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 22.5em;
    }
    .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 21em;
    }
    .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 22.5em;
    }
    .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 24em;
    }
    .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 25.5em;
    }
    .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 24em;
    }
    .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 25.5em;
    }
    .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 27em;
    }
    .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 28.5em;
    }
    .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 27em;
    }
    .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 28.5em;
    }
    .ql-editor .ql-video {
      display: block;
      max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
      margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
      margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
      background-color: #000;
    }
    .ql-editor .ql-bg-red {
      background-color: #e60000;
    }
    .ql-editor .ql-bg-orange {
      background-color: #f90;
    }
    .ql-editor .ql-bg-yellow {
      background-color: #ff0;
    }
    .ql-editor .ql-bg-green {
      background-color: #008a00;
    }
    .ql-editor .ql-bg-blue {
      background-color: #06c;
    }
    .ql-editor .ql-bg-purple {
      background-color: #93f;
    }
    .ql-editor .ql-color-white {
      color: #fff;
    }
    .ql-editor .ql-color-red {
      color: #e60000;
    }
    .ql-editor .ql-color-orange {
      color: #f90;
    }
    .ql-editor .ql-color-yellow {
      color: #ff0;
    }
    .ql-editor .ql-color-green {
      color: #008a00;
    }
    .ql-editor .ql-color-blue {
      color: #06c;
    }
    .ql-editor .ql-color-purple {
      color: #93f;
    }
    .ql-editor .ql-font-serif {
      font-family:
        Georgia,
        Times New Roman,
        serif;
    }
    .ql-editor .ql-font-monospace {
      font-family:
        Monaco,
        Courier New,
        monospace;
    }
    .ql-editor .ql-size-small {
      font-size: 0.75em;
    }
    .ql-editor .ql-size-large {
      font-size: 1.5em;
    }
    .ql-editor .ql-size-huge {
      font-size: 2.5em;
    }
    .ql-editor .ql-direction-rtl {
      direction: rtl;
      text-align: inherit;
    }
    .ql-editor .ql-align-center {
      text-align: center;
    }
    .ql-editor .ql-align-justify {
      text-align: justify;
    }
    .ql-editor .ql-align-right {
      text-align: right;
    }
    .ql-editor.ql-blank::before {
      color: rgba(0, 0, 0, 0.6);
      content: attr(data-placeholder);
      font-style: italic;
      left: 15px;
      pointer-events: none;
      position: absolute;
      right: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
      clear: both;
      content: '';
      display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
      background: none;
      border: none;
      cursor: pointer;
      display: inline-block;
      float: left;
      height: 24px;
      padding: 3px 5px;
      width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
      float: left;
      height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
      outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
      display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
      color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
      fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
      stroke: #06c;
    }
    @media (pointer: coarse) {
      .ql-snow.ql-toolbar button:hover:not(.ql-active),
      .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
      }
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
      }
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
      }
    }
    .ql-snow {
      box-sizing: border-box;
    }
    .ql-snow * {
      box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
      display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
      visibility: hidden;
    }
    .ql-snow .ql-tooltip {
      position: absolute;
      transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
      cursor: pointer;
      text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
      transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
      display: inline-block;
      vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
      clear: both;
      content: '';
      display: table;
    }
    .ql-snow .ql-stroke {
      fill: none;
      stroke: #444;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
      fill: none;
      stroke: #444;
      stroke-miterlimit: 10;
      stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
      fill: #444;
    }
    .ql-snow .ql-empty {
      fill: none;
    }
    .ql-snow .ql-even {
      fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
      stroke-width: 1;
    }
    .ql-snow .ql-transparent {
      opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
      display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
      display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
      display: none;
    }
    .ql-snow .ql-editor h1 {
      font-size: 2em;
    }
    .ql-snow .ql-editor h2 {
      font-size: 1.5em;
    }
    .ql-snow .ql-editor h3 {
      font-size: 1.17em;
    }
    .ql-snow .ql-editor h4 {
      font-size: 1em;
    }
    .ql-snow .ql-editor h5 {
      font-size: 0.83em;
    }
    .ql-snow .ql-editor h6 {
      font-size: 0.67em;
    }
    .ql-snow .ql-editor a {
      text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
      border-left: 4px solid #ccc;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
      background-color: #f0f0f0;
      border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
      white-space: pre-wrap;
      margin-bottom: 5px;
      margin-top: 5px;
      padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
      font-size: 85%;
      padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
      background-color: #23241f;
      color: #f8f8f2;
      overflow: visible;
    }
    .ql-snow .ql-editor img {
      max-width: 100%;
    }
    .ql-snow .ql-picker {
      color: #444;
      display: inline-block;
      float: left;
      font-size: 14px;
      font-weight: 500;
      height: 24px;
      position: relative;
      vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      padding-left: 8px;
      padding-right: 2px;
      position: relative;
      width: 100%;
    }
    .ql-snow .ql-picker-label::before {
      display: inline-block;
      line-height: 22px;
    }
    .ql-snow .ql-picker-options {
      background-color: #fff;
      display: none;
      min-width: 100%;
      padding: 4px 8px;
      position: absolute;
      white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
      cursor: pointer;
      display: block;
      padding-bottom: 5px;
      padding-top: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
      color: #ccc;
      z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
      fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
      stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
      display: block;
      margin-top: -1px;
      top: 100%;
      z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
      width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
      padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
      right: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
      padding: 4px 0px;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
      height: 24px;
      width: 24px;
      padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
      padding: 3px 5px;
      width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
      border: 1px solid transparent;
      float: left;
      height: 16px;
      margin: 2px;
      padding: 0px;
      width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
      position: absolute;
      margin-top: -9px;
      right: 0;
      top: 50%;
      width: 18px;
    }
    .ql-snow
      .ql-picker.ql-header
      .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow
      .ql-picker.ql-size
      .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow
      .ql-picker.ql-header
      .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow
      .ql-picker.ql-size
      .ql-picker-item[data-label]:not([data-label=''])::before {
      content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
      width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
      content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      font-size: 2em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      font-size: 1.5em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      font-size: 1.17em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      font-size: 1em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      font-size: 0.83em;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      font-size: 0.67em;
    }
    .ql-snow .ql-picker.ql-font {
      width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
      content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      content: 'Serif';
    }
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value='monospace']::before,
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value='monospace']::before {
      content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      font-family:
        Georgia,
        Times New Roman,
        serif;
    }
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value='monospace']::before {
      font-family:
        Monaco,
        Courier New,
        monospace;
    }
    .ql-snow .ql-picker.ql-size {
      width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
      content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
      background-color: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
      background-color: #000;
    }
    .ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
      border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
      border: 1px solid transparent;
      box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
      border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
      border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
      border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
      border-top: 0px;
    }
    .ql-snow .ql-tooltip {
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 5px #ddd;
      color: #444;
      padding: 5px 12px;
      white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
      content: 'Visit URL:';
      line-height: 26px;
      margin-right: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
      display: none;
      border: 1px solid #ccc;
      font-size: 13px;
      height: 26px;
      margin: 0px;
      padding: 3px 5px;
      width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
      display: inline-block;
      max-width: 200px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
      border-right: 1px solid #ccc;
      content: 'Edit';
      margin-left: 16px;
      padding-right: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
      content: 'Remove';
      margin-left: 8px;
    }
    .ql-snow .ql-tooltip a {
      line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
      display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
      display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
      border-right: 0px;
      content: 'Save';
      padding-right: 0px;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
      content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
      content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
      content: 'Enter video:';
    }
    .ql-snow a {
      color: #06c;
    }
    .ql-container.ql-snow {
      border: 1px solid #ccc;
    }
  </style>
`;

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import Quill from 'quill/dist/quill.js';
class NotaRodapeModal {
    constructor(options) {
        this.ajustaHtml = (html = '') => {
            return html
                .replace(/ql-indent/g, 'indent')
                .replace(/ql-align-justify/g, 'align-justify')
                .replace(/ql-align-center/g, 'align-center')
                .replace(/ql-align-right/g, 'align-right');
        };
        this.idNotaRodape = options.idNotaRodape;
        this.textoInicialNotaRodape = options.textoInicialNotaRodape ?? '';
        this.domNodeNotaRodape = options.domNodeNotaRodape;
        this.tituloModal = options.tituloModal;
        this.modalElement = document.createElement('div');
        this.modalElement.classList.add('modal');
        this.modalElement.classList.add('modal-nota-rodape');
        this.shadowRoot = document.createElement('div');
        this.shadowRoot.classList.add('d-flex');
        this.modalElement.appendChild(this.shadowRoot);
        this.shadowRoot.innerHTML = `
      ${quillSnowStyles.strings.join('')}
      <style>

        .modal-nota-rodape {
          display: inline-table;
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100px;
          max-width: 640px;
          width: 80%;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 1010;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
          transition: opacity 0.3s, transform 0.3s;
        }

        .modal-body .ql-editor {
          min-height: 400px;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          margin: 0;
          width: 100%;
          font-size: var(--wa-font-size-large);
        }

        .modal-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .modal-textarea {
          width: 100%;
          height: 100px;
          margin-bottom: 15px;
          font-family: inherit;
          font-size: inherit;
          padding: 10px;
          box-sizing: border-box;
        }

        .modal-close-button {
          cursor: pointer;
          background-color: #eee;
          padding: 5px 10px;
          border-radius: 5px;
          transition: background-color 0.3s;
          border: none;
        }

        .header-close-button {
          background-color: transparent;
          font-size: 30px;
        }

        .modal-save-button {
          cursor: pointer;
          background-color: #0284c7;
          color: white;
          padding: 9px 14px;
          border-radius: 5px;
          border: none;
        }

        .modal-save-button:hover {
          background-color: #0ea5e9;
        }

        .modal-close-button: hover {
          background-color: #ddd;
        }

        @media (max-width: 600px) {
          :host {
            width: 80%;
            min-width: 0;
          }
        }

        .ql-snow .ql-tooltip {
          font-family: var(--eta-font-sans);
          font-size: 0.9rem;
        }
        .ql-tooltip .ql-action,
        .ql-tooltip .ql-remove {
          background-color: var(--wa-color-gray-100);
          border: 1px solid var(--wa-color-gray-500);
          border-radius: 3px;
          color: var(--wa-color-gray-900);
          width: fit-content !important;
          padding: 0 15px;
          margin: 0 0 0 10px;
        }
        .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
          content: 'Salvar';
          margin: 0 !important;
          padding: 0 !important;
        }
        .ql-snow .ql-tooltip a.ql-action::after {
          display: inline;
          content: 'Editar';
          margin: 0 !important;
          padding: 0 !important;
        }
        .ql-snow .ql-tooltip a.ql-remove::before {
          display: inline;
          content: 'Remover';
          margin: 0 !important;
          padding: 0 !important;
        }
        .ql-snow .ql-tooltip[data-mode='link']::before {
          content: 'Insira o link:';
        }
        .ql-snow .ql-tooltip::before {
          content: 'Visite o link:';
        }
        @media (max-width: 600px) {
          .ql-snow .ql-tooltip {
            display: flex;
            gap: 5px;
            flex-direction: column;
          }
          .ql-tooltip .ql-action,
          .ql-tooltip .ql-remove {
            margin: 0;
          }
          .ql-snow .ql-tooltip.ql-hidden {
            display: none;
          }
        }

        .modal-nota-rodape .ql-tooltip input:invalid {
          color: red;
        }

        .modal-nota-rodape .ql-tooltip div.tooltip-invalid-message {
          color: red;
          display: none;
          font-family: var(--eta-font-sans);
          font-size: 0.9rem;
        }

        .modal-nota-rodape .ql-tooltip[data-mode='link'] div.tooltip-invalid-message::after {
          content: 'A URL deve iniciar com http:// ou https://';
        }

        .modal-nota-rodape .ql-tooltip[data-mode='link'] input:invalid ~ div.tooltip-invalid-message {
          display: block;
        }
        .d-flex {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

      </style>
      <div class="modal-header">
        <h1 id="modalTitle" class="modal-title">Editar nota de rodapé</h1>
        <button class="modal-close-button header-close-button" aria-label="Fechar" title="Fechar">&times;</button>
      </div>
      <div class="modal-body">
        <div id="editor-nota-rodape-container"></div>
      </div>
      <div class="modal-footer">
        <button class="modal-save-button" aria-label="Salvar">Salvar</button>
        <button class="modal-close-button" aria-label="Fechar">Fechar</button>
      </div>
    `;
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add('overlay');
        this.overlayElement.style.opacity = '0';
        this.overlayElement.style.transition = 'opacity 0.3s';
        this.overlayElement.style.position = 'fixed';
        this.overlayElement.style.top = '0';
        this.overlayElement.style.left = '0';
        this.overlayElement.style.width = '100%';
        this.overlayElement.style.height = '100%';
        this.overlayElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        this.overlayElement.style.zIndex = '1000';
        document.body.appendChild(this.overlayElement);
        document.body.appendChild(this.modalElement);
        this.keydownListener = (event) => {
            if (event.key === 'Escape') {
                this.close();
            }
        };
        document.addEventListener('keydown', this.keydownListener);
        Array.from(this.shadowRoot.querySelectorAll('.modal-close-button')).forEach(element => element.addEventListener('click', () => this.close()));
        this.shadowRoot
            .querySelector('.modal-save-button')
            ?.addEventListener('click', this.save.bind(this));
        const quillContainer = this.shadowRoot.querySelector('#editor-nota-rodape-container');
        Quill.register('formats/estilo-texto', EstiloTextoClass, true);
        Quill.register('formats/text-indent', NoIndentClass, true);
        Quill.register('formats/margin-bottom', MarginBottomClass, true);
        this.quill = new Quill(quillContainer, {
            formats: ['bold', 'italic', 'underline', 'link'],
            modules: {
                toolbar: {
                    container: [['bold', 'italic', 'underline'], ['link']],
                },
            },
            placeholder: 'Digite a nota de rodapé aqui...',
            theme: 'snow',
        });
        QuillUtil.configurarAcoesLink(this.quill);
    }
    open() {
        this.overlayElement.style.display = 'block';
        setTimeout(() => {
            this.overlayElement.style.opacity = '1';
            this.modalElement.style.opacity = '1';
            this.modalElement.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
        this.quill.root.innerHTML = this.textoInicialNotaRodape ?? '';
        this.quill.root.focus();
        const modalTitle = this.shadowRoot.querySelector('.modal-title');
        if (modalTitle) {
            modalTitle.innerHTML = this.tituloModal ?? modalTitle.innerHTML;
        }
    }
    close(fromSave = false) {
        if (fromSave || this.shouldClose()) {
            this.modalElement.style.opacity = '0';
            this.overlayElement.style.opacity = '0';
            setTimeout(() => this.removeModal(), 300); // Tempo de transição
        }
    }
    shouldClose() {
        const texto = this.quill.root.innerHTML;
        console.log(texto, this.textoInicialNotaRodape);
        if (texto !== this.textoInicialNotaRodape) {
            return confirm('Tem certeza que deseja fechar? As alterações não salvas serão perdidas.');
        }
        return true;
    }
    removeModal() {
        document.removeEventListener('keydown', this.keydownListener);
        this.modalElement.remove();
        this.overlayElement.remove();
    }
    save() {
        const texto = this.quill.root.innerHTML;
        if (texto === this.textoInicialNotaRodape || !texto) {
            this.close(true);
            return;
        }
        this.domNodeNotaRodape.dispatchEvent(new CustomEvent(NOTA_RODAPE_INPUT_EVENT, {
            detail: { id: this.idNotaRodape, texto: this.quill.root.innerHTML },
        }));
        this.close(true);
    }
}

/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// import Quill from 'quill/dist/quill.js';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
const PREFIXO_ID = 'nr';
const Delta$2 = Quill.import('delta');
const Module$1 = Quill.import('core/module');
const Embed = Quill.import('blots/embed'); // Inline Embed
const Text$1 = Quill.import('blots/text'); // Inline Text
const Parchment = Quill.import('parchment');
const cfgInline = {
    scope: Parchment.Scope.INLINE_ATTRIBUTE,
};
const IdNotaRodapeAttribute = new Parchment.Attributor.Attribute('id-nota-rodape', 'id-nota-rodape', cfgInline);
const NumeroAttribute = new Parchment.Attributor.Attribute('numero', 'numero', cfgInline);
const TextoAttribute = new Parchment.Attributor.Attribute('texto', 'texto', cfgInline);
class NotaRodapeBlot extends Embed {
    static create(value) {
        let node = super.create(value);
        node.setAttribute('class', 'nota-rodape');
        node.setAttribute('contenteditable', 'false');
        NotaRodapeBlot.valueToAttributes(value, node);
        return node;
    }
    static value(domNode) {
        return domNode.notaRodape || NotaRodapeBlot.buildNotaRodape(domNode);
    }
    format(name, value) {
        if (name !== this.statics.blotName || !value)
            return super.format(name, value);
        NotaRodapeBlot.valueToAttributes(value, this.domNode);
    }
    // static formats(domNode) {
    //   return { 'nota-rodape': domNode.notaRodape || NotaRodapeBlot.buildNotaRodape(domNode) };
    // }
    static buildNotaRodape(domNode) {
        return {
            // id: domNode.getAttribute('id'),
            id: domNode.getAttribute('id-nota-rodape'),
            numero: domNode.getAttribute('numero'),
            texto: decodeHtml(domNode.getAttribute('texto')),
        };
    }
    static valueToAttributes(value, domNode) {
        if (!value || typeof value === 'boolean')
            return;
        // value.id && domNode.setAttribute('id', value.id);
        value.id && domNode.setAttribute('id-nota-rodape', value.id);
        value.numero && domNode.setAttribute('numero', value.numero);
        domNode.notaRodape = value;
        domNode.innerText = value.numero;
        domNode.setAttribute('texto', encodeHtml(value.texto));
    }
}
NotaRodapeBlot.blotName = 'nota-rodape';
NotaRodapeBlot.tagName = 'nota-rodape';
NotaRodapeBlot.allowedChildren = [Text$1];
class ModuloNotaRodape extends Module$1 {
    get isAbrindoTexto() {
        return this._isAbrindoTexto;
    }
    set isAbrindoTexto(value) {
        this._isAbrindoTexto = value;
        // if (!value) {
        //   setTimeout(() => {
        //     this.quill.root.innerHTML = this.ajustarConteudoTagsNotaRodape(this.quill.root.innerHTML);
        //   }, 0);
        // }
    }
    static register() {
        Quill.register(NotaRodapeBlot);
        Quill.register(IdNotaRodapeAttribute);
        Quill.register(NumeroAttribute);
        Quill.register(TextoAttribute);
    }
    constructor(quill, options) {
        super(quill, options);
        this._isAbrindoTexto = false;
        this.quill = quill;
        this.options = options;
        this.options.numeroInicial = this.options.numeroInicial || 1;
        this.quill.notasRodape = this;
        const toolbar = this.quill.getModule('toolbar');
        if (toolbar) {
            toolbar.addHandler('nota-rodape', this.solicitarTexto.bind(this));
        }
        this.addClipboardMatcher();
        this.quill.on('text-change', this.onTextChange.bind(this));
        this.quill.root.addEventListener('click', this.onClick.bind(this));
        this.quill.root.addEventListener(NOTA_RODAPE_INPUT_EVENT, this.tratarRespostaModal.bind(this));
    }
    addClipboardMatcher() {
        this.quill.clipboard.addMatcher('nota-rodape', (node, delta) => {
            let match = Parchment.query(node);
            if (match == null || match.blotName !== 'nota-rodape') {
                return delta;
            }
            const id = this.isAbrindoTexto
                ? node.getAttribute('id-nota-rodape')
                : this.gerarId();
            const numero = node.getAttribute('numero');
            const texto = decodeHtml(node.getAttribute('texto'));
            const notaRodape = new NotaRodape({ id, numero, texto });
            return new Delta$2().insert({ 'nota-rodape': notaRodape });
            // const ops = delta.ops.reduce((acc, op) => {
            //   if (op.insert && op.attributes?.['id-nota-rodape']) {
            //     const { 'id-nota-rodape': id, numero, texto } = op.attributes || {};
            //     const notaRodape = new NotaRodape({ id, numero: +numero, texto });
            //     acc.push({ insert: { 'nota-rodape': notaRodape } });
            //   }
            //   return acc;
            // }, []);
            // return new Delta(ops);
        });
    }
    onTextChange(delta, oldContent, source) {
        const undo = this.quill.history.stack.undo[this.quill.history.stack.undo.length - 1];
        const redo = this.quill.history.stack.redo[this.quill.history.stack.redo.length - 1];
        if (this.hasNotaRodape(delta) ||
            this.hasNotaRodape(undo?.undo) ||
            this.hasNotaRodape(undo?.redo) ||
            this.hasNotaRodape(redo?.redo)) {
            this.renumerarTodasNotas();
            this.emitirEventoNotaRodapeAdicionadaOuRemovida(this.hasNotaRodape(delta));
        }
        if (this.hasNotaRodape(delta)) {
            this.removerEspacosAoRedorNotaRodape();
        }
    }
    removerEspacosAoRedorNotaRodape() {
        // A operação de colar texto que possua nota de rodapé está adicionando \t antes e depois do número da nota
        // O código abaixo remove esses espaços
        const notas = this.findBlotsNotaRodape();
        notas.forEach(item => {
            item.blot.next?.text?.match(/^\t/) &&
                this.quill.deleteText(item.index + 1, 1, 'silent');
            item.blot.prev?.text?.match(/\s$/) &&
                this.quill.deleteText(item.index - 1, 1, 'silent');
        });
    }
    emitirEventoNotaRodapeAdicionadaOuRemovida(isAdicionadaOuAtualizada) {
        clearTimeout(this.timerEmitirEventoNotaRodapeChange);
        this.timerEmitirEventoNotaRodapeChange = setTimeout(() => {
            const eventName = isAdicionadaOuAtualizada
                ? NOTA_RODAPE_CHANGE_EVENT
                : NOTA_RODAPE_REMOVE_EVENT;
            this.quill.root.dispatchEvent(new CustomEvent(eventName, { bubbles: true }));
        }, 100);
    }
    hasNotaRodape(delta) {
        return delta?.ops?.find((op) => op.insert?.['nota-rodape']);
    }
    onClick(e) {
        const el = e.target;
        const elRev = el?.closest('ins, del');
        if (!elRev &&
            (el?.tagName === 'NOTA-RODAPE' ||
                el?.parentElement?.tagName === 'NOTA-RODAPE')) {
            e.preventDefault();
            e.stopPropagation();
            this.solicitarTexto(el.notaRodape || el.parentElement.notaRodape);
        }
    }
    tratarRespostaModal(event) {
        event.stopPropagation();
        const { id, texto } = event.detail;
        const el = id && this.findNodeById(id);
        this.quill.focus();
        el ? this.atualizarTexto(el.notaRodape, texto) : this.adicionar(texto);
    }
    solicitarTexto(notaRodape) {
        // const texto = prompt('Texto da nota', notaRodape?.texto);
        // if (!texto) return;
        // typeof notaRodape === 'object' ? this.atualizarTexto(notaRodape, texto) : this.adicionar(texto);
        const notaRodapeModal = new NotaRodapeModal({
            domNodeNotaRodape: this.quill.root,
            idNotaRodape: notaRodape?.id,
            textoInicialNotaRodape: notaRodape?.texto,
            tituloModal: typeof notaRodape === 'object'
                ? 'Editar nota de rodapé'
                : 'Adicionar nota de rodapé',
        });
        notaRodapeModal.open();
    }
    atualizarTexto(notaRodape, novoTexto) {
        const elemento = this.findNodeById(notaRodape.id);
        const blot = Quill.find(elemento);
        blot.format('nota-rodape', { ...notaRodape, texto: novoTexto });
        return blot.domNode.notaRodape;
    }
    adicionar(texto) {
        const quill = this.quill;
        const range = quill.getSelection();
        if (!range)
            return;
        const id = this.gerarId();
        const notaRodape = new NotaRodape({ id, numero: 0, texto });
        const delta = new Delta$2()
            .retain(range.index)
            .delete(range.length)
            .insert({ 'nota-rodape': notaRodape });
        quill.updateContents(delta, 'user');
        quill.setSelection(range.index + 1, 0);
        return notaRodape;
    }
    remover(idNotaRodape) {
        const elemento = this.findNodeById(idNotaRodape);
        const blot = Quill.find(elemento);
        blot?.remove();
    }
    editar(idNotaRodape) {
        const notaRodape = this.findNodeById(idNotaRodape)?.notaRodape;
        notaRodape && this.solicitarTexto(notaRodape);
    }
    associar(notasRodape) {
        notasRodape.forEach(nota => {
            const elemento = this.findNodeById(nota.id);
            if (elemento) {
                elemento.notaRodape = nota;
            }
        });
    }
    getNotasRodape() {
        return this.findBlotsNotaRodape().map(item => item.blot.domNode.notaRodape);
    }
    gerarId() {
        return PREFIXO_ID + new Date().getTime();
    }
    findNodeById(id) {
        return this.quill.root.querySelector(`nota-rodape[id-nota-rodape="${id}"]`);
    }
    findBlotsNotaRodape() {
        return Array.from(this.quill.root.querySelectorAll('nota-rodape')).map(domNode => {
            const blot = Quill.find(domNode);
            const index = blot.offset(this.quill.scroll);
            return {
                index,
                blot,
            };
        });
    }
    renumerarTodasNotas(numeroInicial = this.options.numeroInicial || 1) {
        this.options.numeroInicial = numeroInicial;
        const range = this.quill.getSelection();
        const notas = this.findBlotsNotaRodape();
        notas.forEach((item, idx) => {
            const numero = idx + numeroInicial;
            const node = item.blot.domNode;
            node.innerText = numero;
            node.setAttribute('numero', numero);
            if (node.notaRodape?.id) {
                node.notaRodape.numero = numero;
            }
        });
        range && this.quill.setSelection(range.index, range.length);
    }
    ajustarConteudoTagsNotaRodape(html) {
        // Ajusta o conteúdo das tags <nota-rodape> para que o número da nota fique dentro da tag <nota-rodape>
        return html.replace(/<nota-rodape.+?<\/nota-rodape>/g, (texto) => texto.replace(/>.?<span[^>]*>(\d+)<\/span>.?</g, '>$1<'));
    }
}

// Foi utilizado TemplateResult porque o editor.component.ts não usa ShadowDom
const editorStyles = html `
  <style>
    :root {
      --elemento-padding-factor: 20;
      --eta-font-serif: 'Times New Roman', Times, serif;
      --eta-font-sans: var(--wa-font-sans);
    }

    #lx-eta-box {
      /* display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 42px calc(100% - 30px); */
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* #lx-eta-box .ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      padding: 3px 10px 3px 10px;
    } */

    .ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      /* padding: 8px; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-height: 55px;
    }
    #lx-eta-box .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
      /* height: 20px !important;
      padding: 0px !important;
      width: 24px !important;
      margin: 0px !important; */
      background: none;
      border: none;
      cursor: pointer;
      display: inline-block;
      float: left;
      height: 24px;
      padding: 3px 5px;
      width: 28px;
    }

    #lx-eta-barra-ferramenta button:focus {
      outline: 0;
      border: 0px solid #f1f1f1;
      -webkit-box-shadow: 0px;
      box-shadow: none;
    }

    #lx-eta-barra-ferramenta .lx-eta-ql-button {
      font-size: 1.1em;
      color: #444444;
    }

    .lx-eta-rebate-180-graus {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    #lx-eta-editor {
      overflow-y: hidden;
    }

    #lx-eta-editor .ql-editor {
      /* font-family: sans-serif, 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji'; */
      font-family: var(--eta-font-serif);
      font-size: 18px;
      line-height: 1.42;
      color: #646260;
      text-transform: none !important;
      padding: 0 10px 0 8px;
      min-height: 250px;
      overflow-x: hidden;
    }

    #lx-eta-editor .ql-editor *:focus {
      outline: 0;
      border: 0px solid #f1f1f1;
      -webkit-box-shadow: 0px;
      box-shadow: none;
    }

    #lx-eta-editor .ql-editor label:before {
      /* content: attr(data-rotulo) ' '; */
    }

    #toast-msg {
      padding: 1em;
      font-size: 1.1em;
    }

    .lx-eta-dropbtn {
      background-color: transparent;
      color: #444444;
      width: 26px;
      font-weight: bold;
      vertical-align: middle;
      border: none;
      cursor: pointer;
      text-align: center;
    }

    .container__menu wa-button::part(base) {
      position: absolute;
      margin: -13px 0 0 -15px;
      background-color: #e1e1e1;
      line-height: 20px;
      height: 23px;
      color: black;
      font-weight: bold;
      font-size: 15px;
    }

    .container__menu wa-menu-item::part(suffix) {
      font-size: 14px;
      padding-left: 20px;
    }

    .container__menu wa-menu-item:hover .lx-eta-dropbtn {
      background-color: #e1e1e1;
    }

    .lx-eta-btn-desfazer {
      margin-left: 10px;
    }

    .icon-undo-redo {
      width: 19px;
      height: 16px !important;
    }

    .icon-undo-redo:hover {
      fill: #0066cc;
    }

    .icon-negrito {
      fill: #444;
    }

    .icon-negrito:hover {
      fill: #0066cc;
    }

    .icon-sublinhado {
      fill: #444;
    }

    .icon-sublinhado:hover {
      fill: #0066cc;
    }

    .lx-eta-dropdown-content-right {
      right: 0;
    }

    .ql-snow .ql-hidden {
      display: none;
    }

    .ql-snow .ql-tooltip::before {
      content: 'Acesse a norma:';
    }

    .ql-snow .ql-tooltip a.ql-action::after {
      display: none;
    }

    .ql-snow .ql-tooltip a.ql-remove::before {
      display: none;
    }

    .ql-snow .ql-tooltip a.ql-preview {
      max-width: 300px;
    }

    .btn--artigoOndeCouber {
    }

    .container__linha {
      display: flex;
      width: 100%;
    }

    .container__linha--reverse {
      flex-direction: row-reverse;
    }

    .container__texto {
      flex: 1;
      white-space: pre-wrap;
    }

    .container_elemento--omissis .container__texto {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    .container_elemento--omissis .container__texto--mensagem {
      flex: 1;
      display: inline-block;
    }

    .container_elemento--omissis .texto__rotulo {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex: none;
      order: 0;
      flex-grow: 0;
    }

    .container_elemento--omissis .texto__dispositivo {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      flex-grow: 1;
    }

    .container_elemento--omissis .texto__omissis {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex-grow: 1;
      width: 50px;
      white-space: nowrap;
    }

    .elemento-tipo-capitulo .texto__dispositivo,
    .elemento-tipo-titulo .texto__dispositivo,
    .elemento-tipo-livro .texto__dispositivo,
    .elemento-tipo-parte .texto__dispositivo {
      text-transform: uppercase;
    }

    .elemento-tipo-secao .texto__dispositivo,
    .elemento-tipo-subsecao .texto__dispositivo {
      font-weight: bold;
    }

    .container__menu {
      width: 30px;
      vertical-align: top;
      text-align: center;
    }

    .container__elemento--padrao {
      width: 100%;
      min-height: 26px;
      border: 3px solid #ffffff;
      line-height: 1.42;
      margin: 0;
      padding: 0 5px 0 0;
    }

    .container__elemento--ativo {
      border: 3px solid #24d421;
      border-radius: 4px;
    }

    [bloqueado='true'] {
      position: relative;
      box-sizing: border-box;
      background-color: #f9f9fa;
      color: #a8a8ac;
    }

    [bloqueado='true'] .texto__rotulo {
      color: #a8a8ac;
    }

    .container__elemento--ativo[bloqueado='true'] {
      border-color: #cccccc;
    }

    [bloqueado='true']::before {
      content: '';
      display: inline-block;
      mask-image: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20fill=%22currentColor%22%20class=%22bi%20bi-ban%22%20viewBox=%220%200%2016%2016%22%3E%3Cpath%20d=%22M15%208a6.97%206.97%200%200%200-1.71-4.584l-9.874%209.875A7%207%200%200%200%2015%208M2.71%2012.584l9.874-9.875a7%207%200%200%200-9.874%209.874ZM16%208A8%208%200%201%201%200%208a8%208%200%200%201%2016%200%22/%3E%3C/svg%3E');
      width: 0.7em;
      height: 0.7em;
      background-color: currentColor;
      -webkit-mask-size: cover;
      mask-size: cover;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #9c9ca0;
    }

    [bloqueado='true']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid #e9e9eb;
      border-radius: 4px;
      pointer-events: none;
      box-sizing: border-box;
    }

    .container__elemento--ativo[bloqueado='true']::after {
      border: 0;
    }

    [bloqueado='true']:hover {
      cursor: not-allowed;
    }

    .container__elemento--articulacao {
      width: 100%;
      min-height: 1px;
      line-height: 0.42;
      margin: 1px;
    }

    .agrupador {
      text-align: center;
    }

    label[pode-informar-numeracao='true'] {
      cursor: pointer;
      /* border-bottom: 1px dashed; */
      -webkit-box-shadow: 0px -1px 0px green inset;
      -moz-box-shadow: 0px -1px 0px green inset;
      box-shadow: 0px -1px 0px green inset;
    }

    /* [existenanormaalterada] label:after, */
    .existencia {
      font-family: var(--wa-font-sans);
      position: relative;
      left: 5px;
      top: -1px;
      margin-right: 5px;
      border: 1px solid green;
      padding: 0 4px;
      font-weight: normal;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      font-size: 12px;
    }

    .existencia {
      margin-left: -10px;
      margin-right: 15px;
    }

    .existencia:hover {
      cursor: pointer;
    }

    /* [existenanormaalterada='true'] label:after {
      content: 'Existente';
    }

    [existenanormaalterada='false'] label:after {
      content: 'Novo';
    } */

    .texto__rotulo {
      color: black;
      font-weight: 600;
    }

    .texto__rotulo--padrao {
      display: inline-block;
      padding-right: 10px; /* Manter padding em vez de margin para evitar problema de layout ao apagar todo o texto do dispositivo.
        Fica um sublinhado a mais, mas é melhor que a alternativa.
      */
    }

    .texto__rotulo--omissis,
    .tipo-omissis {
      font-family: var(--wa-font-sans);
      box-shadow: none;
    }

    .texto__rotulo--omissis:before,
    .tipo-omissis {
      position: relative;
      left: 0;
      top: -1px;
      margin-right: 5px;
      border: 1px solid green;
      padding: 0 4px;
      font-weight: normal;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      display: none;
    }

    .agrupador .blot-tipo-omissis {
      display: block;
    }

    /* .container__texto[tipo-omissis='inciso-caput'] .texto__rotulo--omissis:before {
      content: ' Incisos omitidos ';
    }

    .container__texto[tipo-omissis='inciso-paragrafo'] .texto__rotulo--omissis:before {
      content: ' Incisos omitidos ';
    }

    .container__texto[tipo-omissis='paragrafo'] .texto__rotulo--omissis:before {
      content: ' Parágrafos omitidos ';
    }

    .container__texto[tipo-omissis='alinea'] .texto__rotulo--omissis:before {
      content: ' Alíneas omitidas ';
    }

    .container__texto[tipo-omissis='item'] .texto__rotulo--omissis:before {
      content: ' Itens omitidos ';
    } */

    .Omissis {
      word-break: break-all;
      word-break: break-word;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }

    .agrupador .existencia {
      margin-left: 0;
      margin-right: 0;
    }

    .dispositivo--adicionado {
      color: green;
    }

    .dispositivo--modificado {
      color: blue;
    }

    .dispositivo--suprimido {
      color: red;
    }

    .dispositivo--suprimido .texto__dispositivo {
      text-decoration: line-through;
    }

    /* .texto--suprimido {
      text-decoration: line-through;
    } */

    .ementa {
      margin-bottom: 30px;
    }

    .ementa .container__texto {
      margin-left: 35%;
    }

    .texto__rotulo--ementa {
      display: none;
    }

    .mensagem {
      font-family: var(--wa-font-sans);
      font-size: 0.8em;
      font-weight: normal;
      border: 1px solid;
      padding: 4px 10px;
      margin: 2px;
      display: inline-block;
      border-radius: 2px;
    }

    .mensagem--success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    .mensagem--info {
      color: #0c5460;
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }

    .mensagem--warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }

    .mensagem--danger {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
    .mensagem__fix {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }

    #lx-eta-buffer {
      display: none;
      height: 0px;
    }

    /* [fecha-aspas]::after {
      content: '” (' attr(nota-alteracao) ')';
      font-weight: bold;
    }

    [abre-aspas]::before {
      content: '“';
      font-weight: bold;
    } */

    .nota-alteracao,
    .abre-aspas,
    .fecha-aspas {
      font-weight: bold;
    }

    .nota-alteracao[exibir],
    .abre-aspas[exibir],
    .fecha-aspas[exibir] {
      display: inline;
    }

    .nota-alteracao:not([exibir]),
    .abre-aspas:not([exibir]),
    .fecha-aspas:not([exibir]) {
      display: none;
    }

    .titulo-dispositivo {
      font-weight: bold;
      display: block;
      color: #000;
      margin-bottom: 5px;
    }

    .nota-alteracao-editavel {
      text-decoration: underline;
      cursor: pointer;
    }

    .texto__dispositivo {
      display: inline;
      /* background-color: lightblue; */
    }

    @-moz-document url-prefix() {
      .agrupador .texto__dispositivo {
        display: inline-block;
        min-height: 1rem;
      }
    }

    .blot-existencia br,
    .blot-tipo-omissis br,
    .agrupador.dispositivo-alteracao p[fecha-aspas] br,
    .h-artigo br {
      display: none; /* faz o BR não pular linha em texto__dispositivo vazio */
    }

    .mobile-buttons {
      float: right;
      /* margin-right: 30px; */
      width: auto !important;
      display: none !important;
    }

    .mobile-button {
      margin-right: 2px;
      width: auto !important;
    }

    .mobile-button wa-icon {
      font-size: 18px;
    }

    .mobile-button span {
      vertical-align: 4px;
    }

    .button-navegacao-marca {
      font-size: 18px;
    }

    .button-navegacao-marca::part(base) {
      margin: 0 2px;
    }

    .button-navegacao-marca::part(label) {
      padding: 0;
    }

    @media (max-width: 768px) {
      .mobile-buttons {
        display: inline-block !important;
      }
      [id^='chk-em-revisao-'] span {
        display: none;
      }
      .button-navegacao-marca {
        display: none;
      }
      wa-dialog {
        --wa-font-size-large: 1rem;
      }
      .modal {
        --wa-font-size-large: 1rem;
      }
    }

    @media (max-width: 640px) {
      .mobile-button span {
        display: none;
      }
      .mobile-button:last-child {
        display: none !important;
      }
    }

    .revisao-ativa {
      background-color: #add8e6 !important;
    }

    [em-revisao='true'] {
      background-color: var(--wa-color-blue-90);
    }

    [excluido='true'] .texto__dispositivo {
      text-decoration: line-through;
      /* background-color: #d3d3d3; */
    }

    .blot__revisao {
      padding: 3px 7px;
      border: 1px solid white;
      border-radius: 1rem;
      background-color: rgb(217, 119, 6);
      color: white;
      cursor: pointer;
      position: relative;
      top: -1px;
    }

    .blot__revisao_aceitar {
      padding: 5px;
      border: 1px solid black;
      border-radius: 1rem;
      background-color: rgb(217, 119, 6);
      color: white;
      cursor: pointer;
      position: relative;
      width: 1.3rem;
      height: 1.3rem;
      top: -1px;
      background:
        url('assets/icons/check-lg.svg') no-repeat center,
        white;
      background-size: 1rem;
    }

    .blot__revisao_aceitar:hover {
      filter: invert(100%);
    }

    .blot__opcoes_diff {
      padding: 5px;
      border: 1px solid black;
      border-radius: 1rem;
      background-color: rgb(217, 119, 6);
      color: white;
      cursor: pointer;
      position: relative;
      width: 1.3rem;
      height: 1.3rem;
      top: -1px;
      background:
        url('assets/icons/plus-minus.svg') no-repeat center,
        white;
      background-size: 0.8rem;
      margin-right: 1.2px;
    }

    .blot__opcoes_diff:hover {
      filter: invert(100%);
    }

    .blot__revisao_recusar {
      padding: 5px;
      border: 1px solid black;
      border-radius: 1rem;
      background-color: rgb(217, 119, 6);
      color: white;
      cursor: pointer;
      position: relative;
      width: 1.3rem;
      height: 1.3rem;
      top: -1px;
      background:
        url('assets/icons/x.svg') no-repeat center,
        white;
      background-size: 1rem;
    }

    .blot__revisao_recusar:hover {
      filter: invert(100%);
    }

    .blot__revisao_aceitar:focus,
    .blot__opcoes_diff:focus .blot__revisao_recusar:focus {
      outline: 1px solid #000;
      border: 1px solid #000;
    }

    [id^='chk-em-revisao-'] {
      border: 1px solid #ccc !important;
      padding: 5px 10px !important;
      border-radius: 20px !important;
      margin-left: auto;
      margin-right: 5px;
      font-weight: bold;
      background-color: #eee;
    }
    [id^='chk-em-revisao-'][checked] {
      background-color: var(--wa-color-blue-90);
    }

    .container__revisao {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.1rem;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    .container__opcoes {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 0.1rem;
      gap: 0.1rem;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    @media (max-width: 480px) {
      .lx-eta-btn-desfazer {
        margin-left: 0px;
      }
    }

    @media (max-width: 398px) {
      .btn-dicas {
        display: none !important;
      }
    }
  </style>
`;

function mostrarToolTipVerificacaoOrtografica(elMisspell, erro) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip-erro-ortografico');
    tooltip.innerHTML = buildTooltipHtml(erro);
    tooltip.style.opacity = '0';
    document.body.appendChild(tooltip);
    tooltip
        .querySelector('.tooltip-lista-sugestoes')
        ?.addEventListener('click', (evt) => {
        const el = evt.target;
        if (el?.tagName === 'LI') {
            const sugestaoSelecionada = el.getAttribute('data-sugestao');
            if (sugestaoSelecionada) {
                const customEvent = new CustomEvent('verificacao-ortografica:corrigir', {
                    bubbles: true,
                    detail: {
                        erro,
                        sugestaoSelecionada,
                    },
                });
                elMisspell.dispatchEvent(customEvent);
                limpaTooltip();
            }
        }
    });
    tooltip
        .querySelector('#button-fechar-erro-ortografico')
        .addEventListener('click', () => limpaTooltip());
    ajustaPosicaoTooltip(tooltip, elMisspell);
    const closeTooltip = (e) => {
        if (e.type === 'click' && !isClickDentroDaTooltip(e.target)) {
            limpaTooltip();
        }
        else if (e.type === 'keydown' && e.key === 'Escape') {
            limpaTooltip();
        }
        // setTimeout(() => this.quill.root.focus(), 0);
    };
    const limpaTooltip = () => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            tooltip.remove();
            document.removeEventListener('click', closeTooltip);
            document.removeEventListener('keydown', closeTooltip);
        }, 300);
    };
    const isClickDentroDaTooltip = (element) => {
        return !!element.closest('.tooltip-erro-ortografico');
    };
    setTimeout(() => {
        document.addEventListener('click', closeTooltip);
        document.addEventListener('keydown', closeTooltip);
        tooltip.style.opacity = '1';
    }, 0);
    window.addEventListener('resize', () => ajustaPosicaoTooltip(tooltip, elMisspell));
}
function buildTooltipHtml(erro) {
    const html = `
        <style>
        .tooltip-erro-ortografico {
          position: absolute;
          border: 1px solid black;
          background-color: white;
          padding: 10px;
          border-radius: 4px;
          z-index: 9999;
          font-size: 0.9rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          min-width: 200px;
          max-width: 500px;
          transition: all 0.3s ease-in-out;
        }
        .tooltip-erro-ortografico__actions {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }
        .tooltip-erro-ortografico__actions button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 15px;
          background-color: #eee;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          color: black;
        }
        .tooltip-erro-ortografico__actions svg {
          fill: currentColor;
          width: 24px;
          height: 24px;
        }
        .tooltip-erro-ortografico button:hover {
          background-color: #ddd;
        }
        .tooltip-erro-ortografico button:active {
          background-color: #ccc;
        }
        .tooltip-erro-ortografico__container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tooltip-erro-ortografico__header {
          border-bottom: 1px solid #ccc;
        }

        .tooltip-erro-ortografico__word {
          font-weight: bold;
        }

        .tooltip-erro-ortografico__message {
          color: #333;
        }

        .tooltip-erro-ortografico__sugestao {
          font-size: 0.8rem;
          color: #333;
          padding: 3px 5px;
          cursor: pointer;
        }

        .tooltip-erro-ortografico__sugestao:hover {
          background-color: #f0f0f0;
        }
        .tooltip-erro-ortografico__sugestao.selected {
          background-color: #cceeff;
          font-weight: bold;
          color: #333;
        }

        .tooltip-lista-sugestoes {
          list-style: none;
          padding: 0;
          margin-top: 5px;
          max-height: 200px;
          overflow-y: auto;
        }
      </style>
      <div class="tooltip-erro-ortografico__container" role="tooltip">
        <div class="tooltip-erro-ortografico__header">
          <div class="tooltip-erro-ortografico__word">${erro.word}</div>
          <div class="tooltip-erro-ortografico__message">(${erro.message})</div>
        </div>
        <div>
          ${buildListaSugestoes(erro)}
        </div>
        <div class="tooltip-erro-ortografico__actions">
          <button id="button-fechar-erro-ortografico" aria-label="Fechar" title="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
        </div>
      </div>
`;
    return html;
}
// eslint-disable-next-line prettier/prettier
const buildListaSugestoes = (erro) => {
    return `
    <ul class="tooltip-lista-sugestoes">
      ${erro.suggestions.map(buildItemSugestao).join('\n')}
    </ul>
  `;
};
const buildItemSugestao = (sugestao) => {
    // return `<li class="tooltip-erro-ortografico__sugestao">${sugestao}</li>`;
    return `<li class="tooltip-erro-ortografico__sugestao" data-sugestao="${sugestao}">${sugestao}</li>`;
};
const ajustaPosicaoTooltip = (tooltip, button) => {
    const rect = button.getBoundingClientRect();
    const offset = 10;
    // Abrir para cima por padrão, a menos que não haja espaço suficiente
    let topOffset = rect.top - tooltip.clientHeight - offset;
    if (topOffset < window.scrollY) {
        topOffset = rect.bottom + offset;
    }
    tooltip.style.top = `${topOffset + window.scrollY}px`;
    // Ajustar horizontalmente se estiver muito próximo à borda direita
    let leftOffset = rect.left + rect.width / 2 - tooltip.clientWidth / 2;
    if (leftOffset + tooltip.clientWidth > window.innerWidth) {
        leftOffset = window.innerWidth - tooltip.clientWidth - offset;
    }
    else if (leftOffset < 0) {
        leftOffset = offset;
    }
    tooltip.style.left = `${leftOffset + window.scrollX}px`;
};

/* eslint-disable prettier/prettier */
// import Quill, { Module, Range } from 'quill';
// import Inline from 'quill/blots/inline';
const Module = Quill.import('core/module');
const Inline = Quill.import('blots/inline');
// const Range = Quill.import('core/selection').Range;
class Utils {
    static debounce(fn, delay) {
        let timeoutID;
        return function () {
            clearTimeout(timeoutID);
            // const args = arguments;
            // const that = this;
            timeoutID = window.setTimeout(() => {
                // fn.apply(that, args);
                fn();
            }, delay);
        };
    }
}
Utils.isWordCharacter = (c) => (c ?? '').match(/[\p{L}\d-]/u) !== null;
Utils.extractWords = (str) => {
    const words = [];
    let currentWord = '';
    let currentStart = -1;
    for (let i = 0; i < str.length; i++) {
        if (Utils.isWordCharacter(str[i])) {
            if (currentWord === '') {
                currentStart = i;
            }
            currentWord += str[i];
        }
        else {
            if (currentWord !== '') {
                words.push({
                    offset: currentStart,
                    length: currentWord.length,
                    word: currentWord,
                });
                currentWord = '';
                currentStart = -1;
            }
        }
    }
    // Adiciona a última palavra se a string terminar com uma palavra
    if (currentWord !== '') {
        words.push({
            offset: currentStart,
            length: currentWord.length,
            word: currentWord,
        });
    }
    return words;
};
const defaultOptions = {
    debounceTime: 300,
    urlVerificadorOrtografico: '',
    enabled: true,
    callBackVerificadorOrtografico: async function (texto) {
        if (!this.urlVerificadorOrtografico || !texto?.trim().length) {
            return [];
        }
        try {
            // O retorno da função deve ser um array de objetos do tipo VerificadorOrtograficoResponse
            const response = await fetch(this.urlVerificadorOrtografico, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: texto,
            });
            if (!response.ok) {
                console.error('Erro na resposta da verificação ortográfica:', response.status, response.statusText);
                return [];
            }
            const json = await response.json();
            return json.map((it) => ({ ...it, uuid: generateUUID() }));
        }
        catch (error) {
            console.log('Erro ao chamar o verificador ortográfico', error);
            return [];
        }
    },
    callbackRenderErrosOrtograficos: function () { },
};
class IgnoreBlot extends Inline {
}
IgnoreBlot.blotName = 'ignore';
IgnoreBlot.className = 'ql-ignore';
IgnoreBlot.tagName = 'ignore';
class MisspelledBlot extends Inline {
    static create(value) {
        const node = super.create();
        MisspelledBlot.updateAttributes(node, value);
        return node;
    }
    static updateAttributes(node, value) {
        if (value) {
            node.setAttribute('data-uuid', value.uuid);
            node.setAttribute('data-rule-id', value.ruleId);
            node.setAttribute('data-issue-type', value.issueType);
            node.setAttribute('data-category-id', value.categoryId);
            node.setAttribute('data-category-name', value.categoryName);
            node.setAttribute('data-message', value.message);
            node.setAttribute('data-short-message', value.shortMessage);
            node.setAttribute('title', value.message);
        }
    }
    static format(node, value) {
        if (value) {
            MisspelledBlot.updateAttributes(node, value);
        }
    }
    static formats(node) {
        return {
            uuid: node.getAttribute('data-uuid'),
            ruleId: node.getAttribute('data-rule-id'),
            issueType: node.getAttribute('data-issue-type'),
            categoryId: node.getAttribute('data-category-id'),
            categoryName: node.getAttribute('data-category-name'),
            message: node.getAttribute('data-message'),
            shortMessage: node.getAttribute('data-short-message'),
        };
    }
}
MisspelledBlot.blotName = 'misspelled';
MisspelledBlot.className = 'ql-misspelled';
MisspelledBlot.tagName = 'misspelled';
class EditorCustomEventErrosOrtograficos extends CustomEvent {
    constructor(detalhes) {
        super('editor:erros-ortograficos', {
            detail: detalhes,
            bubbles: true,
        });
    }
}
class ModuloVerificacaoOrtografica extends Module {
    static register() {
        Quill.register(MisspelledBlot, true);
        Quill.register(IgnoreBlot, true);
    }
    constructor(quill, options) {
        super(quill, options);
        this.lastResponses = [];
        if (!options)
            return;
        this.quill = quill;
        this.options = { ...defaultOptions, ...options };
        // this.quill.root.addEventListener("input", this.checkSpelling.bind(this));
        addBindingOnTop(this.quill, 'Backspace', undefined, (range) => {
            if (!range.index && !range.length)
                return true;
            const index = range.length ? range.index : range.index - 1;
            const length = range.length || 1;
            return this.removeIgnoreFormatting(new Range(index, length));
        });
        addMultipleBindingsOnTop(this.quill, ['Delete', 'Enter'], undefined, this.removeIgnoreFormatting);
        addMultipleBindingsOnTop(this.quill, ['x', 'v', 'X', 'V'], { ctrlKey: true }, this.removeIgnoreFormatting);
        if (this.options.debounceTime) {
            this.quill.on('text-change', Utils.debounce(this.checkSpelling.bind(this), this.options.debounceTime));
        }
        else {
            this.quill.on('text-change', this.checkSpelling.bind(this));
        }
        this.quill.root.setAttribute('spellcheck', 'false');
        this.quill.root.addEventListener('click', this.tratarClick.bind(this));
        this.quill.root.addEventListener('verificacao-ortografica:corrigir', this.corrigirErroOrtografico.bind(this));
    }
    tratarClick(event) {
        const elMisspell = this.getErroOrtograficoMaisProximo(event.target);
        if (!elMisspell)
            return;
        const uuid = elMisspell.getAttribute('data-uuid');
        const erro = this.lastResponses.find((err) => err.uuid === uuid);
        erro && mostrarToolTipVerificacaoOrtografica(elMisspell, erro);
    }
    corrigirErroOrtografico(event) {
        const { erro, sugestaoSelecionada } = event.detail;
        const el = this.quill.root.querySelector(`misspelled[data-uuid="${erro.uuid}"]`);
        if (el) {
            el.innerText = sugestaoSelecionada;
        }
    }
    getErroOrtograficoMaisProximo(elemento) {
        return elemento?.closest(MisspelledBlot.tagName);
    }
    removeIgnoreFormatting(range) {
        let { index, length } = range;
        // expande seleção para remover formatação de ignore, pegando início e fim da palavra
        while (index > 0 && isIgnored(this.quill, index - 1, 1)) {
            index--;
        }
        const totalLength = this.quill.getLength();
        while (index + length < totalLength &&
            isIgnored(this.quill, index + length, 1)) {
            length++;
        }
        this.quill.formatText(index, length, { ignore: false }, 'user');
        return true;
    }
    async checkSpelling() {
        if (!this.options.enabled) {
            return;
        }
        const text = this.quill.getText();
        const numErrosAntigos = this.lastResponses?.length;
        if (this.options.callBackVerificadorOrtografico) {
            this.lastResponses =
                await this.options.callBackVerificadorOrtografico(text);
        }
        if (!this.lastResponses?.length) {
            if (numErrosAntigos) {
                this.limparFormatacoesDeErros(text);
                if (this.options.callbackRenderErrosOrtograficos) {
                    this.options.callbackRenderErrosOrtograficos([]);
                }
            }
            return;
        }
        this.lastResponses = this.removerErrosIgnorados(this.lastResponses);
        this.formatarErrosOrtograficos(text, this.lastResponses);
        if (this.options.callbackRenderErrosOrtograficos) {
            this.options.callbackRenderErrosOrtograficos(this.lastResponses);
        }
    }
    removerErrosIgnorados(erros) {
        return erros.filter(erro => !isIgnored(this.quill, erro.offset, erro.length));
    }
    limparFormatacoesDeErros(text = '') {
        this.quill.focus();
        // this.quill.formatText(0, text.length, formatName, false, 'silent');
        try {
            this.quill.formatText(0, text.length - 1, { misspelled: false, ignore: false }, 'silent');
        }
        catch {
            /* empty */
        }
        try {
            this.quill.formatText(0, text.length, { misspelled: false, ignore: false }, 'silent');
        }
        catch {
            /* empty */
        }
    }
    formatarErrosOrtograficos(text, erros) {
        const formatName = 'misspelled';
        this.limparFormatacoesDeErros(text);
        erros.forEach(response => {
            try {
                this.quill.formatText(response.offset, response.length, formatName, response, 'silent');
            }
            catch (error) {
                // empty
            }
        });
    }
    ignorarErro(erro) {
        this.quill.formatText(erro.offset, erro.length, { misspelled: false, ignore: true }, 'user');
        console.log('Ignorando erro', erro);
    }
}

const verificacaoOrtograficaCss = html `
  <style>
    .ql-ignore {
      border: 1px solid #aaa;
    }

    .ql-misspelled[data-rule-id='MORFOLOGIK_RULE_PT_BR'] {
      text-decoration: underline wavy red;
    }

    .ql-misspelled:not([data-rule-id='MORFOLOGIK_RULE_PT_BR']) {
      text-decoration: underline wavy orange;
    }

    .ql-misspelled[data-rule-id='MORFOLOGIK_RULE_PT_BR']:hover {
      cursor: pointer;
      background-color: #ffe5e5;
    }

    .ql-misspelled:not([data-rule-id='MORFOLOGIK_RULE_PT_BR']):hover {
      cursor: pointer;
      background-color: peachpuff;
    }
  </style>
`;

/* eslint-disable prettier/prettier */
// Este módulo substitui o módulo Clipboard padrão do Quill para tratar cenários de colagem
// em que há formatações de revisão (blots <del>) ou de correção ortográfica (misspelled, ignore).
const Clipboard = Quill.import('modules/clipboard');
const Delta$1 = Quill.import('delta');
const DOM_KEY = '__ql-matcher';
function traverse(node, elementMatchers, textMatchers) {
    // Post-order
    if (node.nodeType === node.TEXT_NODE) {
        return textMatchers.reduce(function (delta, matcher) {
            return matcher(node, delta);
        }, new Delta$1());
    }
    else if (node.nodeType === node.ELEMENT_NODE) {
        return [].reduce.call(node.childNodes || [], (delta, childNode) => {
            let childrenDelta = traverse(childNode, elementMatchers, textMatchers);
            if (childNode.nodeType === node.ELEMENT_NODE) {
                childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
                    return matcher(childNode, childrenDelta);
                }, childrenDelta);
                childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
                    return matcher(childNode, childrenDelta);
                }, childrenDelta);
            }
            return delta.concat(childrenDelta);
        }, new Delta$1());
    }
    else {
        return new Delta$1();
    }
}
function deltaEndsWith(delta, text) {
    let endText = '';
    for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
        const op = delta.ops[i];
        if (typeof op.insert !== 'string')
            break;
        endText = op.insert + endText;
    }
    return endText.slice(-1 * text.length) === text;
}
class ModuloCustomClipboard extends Clipboard {
    constructor(quill, options) {
        super(quill, options);
        this.quill.root.addEventListener('cut', this.onCut.bind(this));
    }
    onCut(e) {
        if (this.quill?.revisao?.emRevisao) {
            e.preventDefault();
            e.stopPropagation();
            const range = this.quill.getSelection();
            if (range?.length) {
                this.copiarSelecaoParaClipboard();
                this.quill?.revisao?.handleRemove(range, null, null);
            }
        }
    }
    onPaste(e) {
        if (cursorEstaSobreBlotDel(this.quill)) {
            e.preventDefault();
            e.stopPropagation();
        }
        // super.onPaste(e);
        if (e.defaultPrevented || !this.quill.isEnabled())
            return;
        const range = this.quill.getSelection();
        let delta = new Delta$1().retain(range.index);
        const scrollTop = this.quill.scrollingContainer.scrollTop;
        this.container.focus();
        this.quill.selection.update('silent');
        setTimeout(() => {
            delta = delta.concat(this.convert()).delete(range.length);
            // WORKAROUND: o Quill insere um \t (tab) quando cola conteúdo rich text que possui formatação de correção ortográfica
            // TODO: descobrir por quê e tentar corrigir na fonte
            delta.ops = delta.ops.filter((o) => o.insert !== '\t' || o.attributes);
            this.quill.updateContents(delta, 'user');
            // range.length contributes to delta.length()
            this.quill.setSelection(delta.length() - range.length, 'silent');
            this.quill.scrollingContainer.scrollTop = scrollTop;
            this.quill.focus();
        }, 1);
    }
    convert(html) {
        if (typeof html === 'string') {
            // this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
            this.container.innerHTML = html.replace(/>\r?\n +</g, '><'); // Remove spaces between tags
            return this.convert();
        }
        const formats = this.quill.getFormat(this.quill.selection.savedRange.index);
        if (formats['code']) {
            const text = this.container.innerText;
            this.container.innerHTML = '';
            return new Delta$1().insert(text, { ['code']: formats['code'] });
        }
        const [elementMatchers, textMatchers] = this.prepareMatching();
        let delta = traverse(this.container, elementMatchers, textMatchers);
        // Remove trailing newline
        if (deltaEndsWith(delta, '\n') &&
            delta.ops[delta.ops.length - 1].attributes === null) {
            delta = delta.compose(new Delta$1().retain(delta.length() - 1).delete(1));
        }
        // debug.log('convert', this.container.innerHTML, delta);
        this.container.innerHTML = '';
        return delta;
    }
    copiarSelecaoParaClipboard() {
        const selection = window.getSelection();
        if (selection) {
            if (navigator.clipboard) {
                // Cria um elemento div temporário para armazenar a seleção
                const tempElement = document.createElement('div');
                // Clona a seleção e a insere no elemento div temporário
                for (let i = 0; i < selection.rangeCount; i++) {
                    tempElement.appendChild(selection.getRangeAt(i).cloneContents());
                }
                // Copia o conteúdo do elemento div temporário para a área de transferência
                navigator.clipboard
                    .write([
                    new ClipboardItem({
                        'text/plain': new Blob([tempElement.innerText], {
                            type: 'text/plain',
                        }),
                        'text/html': new Blob([tempElement.outerHTML], {
                            type: 'text/html',
                        }),
                    }),
                ])
                    .finally(() => tempElement.remove());
            }
            else {
                console.log('Clipboard API não suportada');
                document.execCommand('copy'); // Alternativa para o caso de não suportar a Clipboard API
            }
        }
    }
}

const Keyboard = Quill.import('modules/keyboard');
// A classe abaixo adiciona um listener para o evento keydown para ser executado antes do listener padrão do Quill
class ModuloCustomKeyboard extends Keyboard {
    listen() {
        this.quill.root.addEventListener('keydown', this.onKeyDown.bind(this));
        this.quill.root.addEventListener('keypress', this.onKeyPress.bind(this));
        super.listen();
    }
    onKeyDown(e) {
        if (this.quill?.revisao?.gerenciarKeydown &&
            this.quill?.revisao?.emRevisao) {
            this.quill.revisao.handleKeyDown(e);
        }
    }
    onKeyPress(e) {
        if (cursorEstaSobreBlotDel(this.quill)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}

let PanelNotaRodapeComponent = class PanelNotaRodapeComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.posicao = 'abaixo';
        this.desabilitarTrocaOrientacao = false;
        this.notasRodape = [];
    }
    mudarPosicao() {
        if (this.desabilitarTrocaOrientacao)
            return;
        const nova = this.posicao === 'lado' ? 'abaixo' : 'lado';
        this.dispatchEvent(new CustomEvent('nota-rodape:mudar-posicao', {
            bubbles: true,
            composed: true,
            detail: { posicao: nova },
        }));
    }
    render() {
        const podeTrocar = !this.desabilitarTrocaOrientacao;
        const indoPara = this.posicao === 'lado'
            ? 'Notas de rodapé para baixo'
            : 'Notas de rodapé para o lado';
        const icon = this.posicao === 'lado' ? 'arrow-down' : 'arrow-right';
        return html `
      <div class="notas-rodape">
        <div class="header-notas-rodape">
          <h4>Notas de rodapé</h4>
          ${podeTrocar
            ? html `
                <wa-button
                  title=${indoPara}
                  appearance="outlined"
                  pill
                  size="small"
                  @click=${this.mudarPosicao}
                >
                  <wa-icon
                    name=${icon}
                    variant="solid"
                    label=${indoPara}
                  ></wa-icon>
                </wa-button>
              `
            : null}
        </div>
        <div class="notas-scroll">${this.renderNotasRodape()}</div>
      </div>
    `;
    }
    renderNotasRodape() {
        if (!this.notasRodape.length) {
            return html `
        <span class="notas-texto-vazio">
          Não há notas de rodapé registradas.
        </span>
      `;
        }
        const minNumero = Math.min(...this.notasRodape.map(n => n.numero));
        const startOffset = minNumero - 1;
        return html `
      <ol style="counter-reset: item ${startOffset};">
        ${this.notasRodape.map((nr) => html `
            <li>
              <input
                type="checkbox"
                idNotaRodape="${nr.id}"
                class="notas-checkbox"
                id="checkbox-${nr.id}"
                @change=${() => this.selecionarNotaRodape(nr.id)}
              />
              <label for="checkbox-${nr.id}" class="notas-texto"
                >${unsafeHTML(nr.texto)}</label
              >
              <span class="notas-acoes">
                <wa-button
                  class="notas-acao"
                  appearance="outlined"
                  variant="neutral"
                  size="small"
                  aria-label="Editar nota de rodapé"
                  title="Editar nota de rodapé"
                  idNotaRodape="${nr.id}"
                  @click=${() => this.editarNotaRodape(nr.id)}
                >
                  <wa-icon name="pen-to-square"></wa-icon>
                </wa-button>
                <wa-button
                  class="notas-acao"
                  appearance="outlined"
                  variant="neutral"
                  size="small"
                  aria-label="Excluir nota de rodapé"
                  title="Excluir nota de rodapé"
                  idNotaRodape="${nr.id}"
                  @click=${() => this.removerNotaRodape(nr.id)}
                >
                  <wa-icon name="trash"></wa-icon>
                </wa-button>
              </span>
            </li>
          `)}
      </ol>
    `;
    }
    selecionarNotaRodape(idNotaRodape) {
        const checkbox = this.shadowRoot?.querySelector(`#checkbox-${idNotaRodape}`);
        if (checkbox) {
            if (checkbox.checked) {
                const checkboxes = this.shadowRoot?.querySelectorAll('.notas-checkbox');
                checkboxes?.forEach(cb => {
                    if (cb.id !== checkbox.id) {
                        cb.checked = false;
                    }
                });
                this.localizarNotaRodape(idNotaRodape);
            }
            else {
                this.removerPulsarNotaRodape(idNotaRodape);
            }
        }
    }
    removerPulsarNotaRodape(idNotaRodape) {
        this.emitirEvento(NOTA_RODAPE_REMOVER_PULSAR, idNotaRodape);
    }
    editarNotaRodape(idNotaRodape) {
        this.emitirEvento(NOTA_RODAPE_EDITAR, idNotaRodape);
    }
    removerNotaRodape(idNotaRodape) {
        this.emitirEvento(NOTA_RODAPE_REMOVER, idNotaRodape);
    }
    localizarNotaRodape(idNotaRodape) {
        this.emitirEvento(NOTA_RODAPE_LOCALIZAR, idNotaRodape);
    }
    emitirEvento(nomeEvento, idNotaRodape) {
        this.dispatchEvent(new CustomEvent(nomeEvento, {
            bubbles: true,
            detail: { idNotaRodape },
        }));
    }
};
PanelNotaRodapeComponent.styles = css `
    .notas-rodape {
      font-family: var(--eta-font-serif);
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 0;
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
      border: 1px solid #ccc;
      padding: 0 10px 10px 10px;
    }
    .notas-rodape h4 {
      font-family: var(--eta-font-sans);
      font-style: normal;
      font-size: 0.95rem;
      padding: 1rem 0px 0.5rem;
      margin: 0px;
    }
    .header-notas-rodape {
      border-bottom: var(--wa-color-gray-50) 0.5px solid;
      margin-bottom: 8px;
      height: 40px;
      padding: 0 2px;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      background: white;
    }
    .header-notas-rodape wa-button::part(base) {
      height: 28px;
      width: 28px;
    }
    .notas-texto-vazio {
      padding-left: 20px;
      color: var(--wa-color-gray-50);
      font-style: italic;
    }

    .notas-scroll {
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
    }

    .notas-rodape ol {
      padding-left: 20px;
      list-style: none;
      counter-reset: item;
      margin: 0px;
    }

    .notas-rodape li {
      padding: 0px;
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .notas-rodape li:hover {
      background-color: var(--wa-color-gray-95);
    }

    .notas-rodape li::before {
      content: counter(item);
      counter-increment: item;
      width: 20px;
      left: -20px;
      top: 4px;
      font-size: smaller;
      vertical-align: super;
      font-weight: bold;
      font-size: 12px;
      color: var(--wa-color-gray-50);
      text-align: right;
    }

    .notas-texto {
      flex-grow: 1;
      cursor: pointer;
      padding: 5px;
      color: var(--wa-color-gray-50);
    }

    .notas-texto p {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .notas-acoes {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .notas-acao {
      margin-left: 5px;
      visibility: hidden;
      cursor: pointer;
    }

    .notas-rodape li:hover .notas-acao {
      visibility: visible;
    }

    .notas-checkbox {
      appearance: none;
      background: transparent;
      display: none;
    }

    .notas-checkbox:checked + .notas-texto {
      color: black;
      font-style: italic;
    }
  `;
__decorate([
    property({ type: String })
], PanelNotaRodapeComponent.prototype, "posicao", void 0);
__decorate([
    property({ type: Boolean })
], PanelNotaRodapeComponent.prototype, "desabilitarTrocaOrientacao", void 0);
__decorate([
    property({ type: Array })
], PanelNotaRodapeComponent.prototype, "notasRodape", void 0);
PanelNotaRodapeComponent = __decorate([
    customElement('panel-nota-rodape')
], PanelNotaRodapeComponent);
const NOTA_RODAPE_LOCALIZAR = 'nota-rodape:localizar';
const NOTA_RODAPE_REMOVER_PULSAR = 'nota-rodape:remover-pulsar';
const NOTA_RODAPE_REMOVER = 'nota-rodape:remover';
const NOTA_RODAPE_EDITAR = 'nota-rodape:editar';

Quill.register('modules/clipboard', ModuloCustomClipboard, true);
Quill.register('modules/keyboard', ModuloCustomKeyboard, true);
Quill.register('modules/aspasCurvas', ModuloAspasCurvas, true);
Quill.register('modules/revisao', ModuloRevisao, true);
Quill.register('modules/notaRodape', ModuloNotaRodape, true);
Quill.register('modules/verificacaoOrtografico', ModuloVerificacaoOrtografica);
// const DefaultKeyboardModule = Quill.import('modules/keyboard');
// const DefaultClipboardModule = Quill.import('modules/clipboard');
const Delta = Quill.import('delta');
const CLASS_BUTTON_ACEITAR_REVISAO = 'aceitar-revisao';
const CLASS_BUTTON_REJEITAR_REVISAO = 'rejeitar-revisao';
// --- HOTFIX: Para o Funcionamento da troca de orientação da nota de rodapé alteração do  patch em <wa-split-panel> para evitar "position=100" e loops ---
const patchSplitPanelForLexml = (() => {
    let patched = false;
    return () => {
        if (patched)
            return;
        patched = true;
        customElements.whenDefined('wa-split-panel').then(() => {
            const SplitCls = customElements.get('wa-split-panel');
            if (!SplitCls || !SplitCls.prototype)
                return;
            const proto = SplitCls.prototype;
            function clampToCssBounds(pct) {
                if (!Number.isFinite(this.size) || this.size <= 0) {
                    this.detectSize?.();
                }
                const cs = getComputedStyle(this);
                const minStr = (cs.getPropertyValue('--min') || '0%').trim();
                const maxStr = (cs.getPropertyValue('--max') || '100%').trim();
                const toPct = (v) => {
                    if (v.endsWith('%'))
                        return parseFloat(v);
                    const px = parseFloat(v);
                    return this.size > 0 ? (px / this.size) * 100 : 0;
                };
                const minPct = toPct(minStr);
                const maxPct = toPct(maxStr);
                const lo = Math.min(minPct, maxPct);
                const hi = Math.max(minPct, maxPct);
                return Math.max(lo, Math.min(hi, pct));
            }
            const origHandleResize = proto.handleResize;
            proto.handleResize = function (entries) {
                try {
                    const { width, height } = entries?.[0]?.contentRect || this.getBoundingClientRect();
                    const nextSize = this.orientation === 'vertical' ? height : width;
                    if (!Number.isFinite(nextSize) || nextSize <= 0)
                        return;
                    this.size = nextSize;
                    if (this.primary) {
                        if (!Number.isFinite(this.cachedPositionInPixels)) {
                            const pct = Number.isFinite(this.position) ? this.position : 50;
                            this.cachedPositionInPixels = this.percentageToPixels(pct);
                        }
                        this.position = this.pixelsToPercentage(this.cachedPositionInPixels);
                        return;
                    }
                    if (!Number.isFinite(this.position)) {
                        this.position = 50;
                    }
                }
                catch {
                    /* ignora */
                }
                return origHandleResize?.call(this, entries);
            };
            const origHandlePositionChange = proto.handlePositionChange;
            proto.handlePositionChange = function () {
                this.detectSize?.();
                const clamped = clampToCssBounds.call(this, this.position);
                if (clamped !== this.position) {
                    this.position = clamped;
                    return;
                }
                this.cachedPositionInPixels = this.percentageToPixels(this.position);
                this.positionInPixels = this.cachedPositionInPixels;
                return origHandlePositionChange?.call(this);
            };
            const origUpdated = proto.updated;
            proto.updated = function (changed) {
                const ret = origUpdated?.call(this, changed);
                try {
                    if (changed?.has?.('orientation')) {
                        this.detectSize?.();
                        this.position = clampToCssBounds.call(this, this.position ?? 80);
                    }
                }
                catch {
                    /* noop */
                }
                return ret;
            };
        });
    };
})();
// --- /HOTFIX ---
let EditorTextoRicoComponent = class EditorTextoRicoComponent extends LitElement {
    get _orientation() {
        return this.notasPosicao === 'lado' ? 'horizontal' : 'vertical';
    }
    get _posPercent() {
        return this.notasPosicao === 'lado' ? 80 : 65;
    }
    get _dividerIcon() {
        return this._orientation === 'horizontal'
            ? 'grip-vertical'
            : 'grip-horizontal';
    }
    get _styleSplit() {
        const h = `calc(${this.height}px - var(--rte-toolbar-h, 55px))`;
        const base = this._orientation === 'horizontal'
            ? '--divider-width: 20px; --min: 50%; --max: 90%;'
            : '--divider-width: 10px; --min: 50%; --max: 75%;';
        return `${base} height:${h};`;
    }
    showAlterarLarguraImagemModal(img, width) {
        this.alterarLarguraImagemModal.show(img, width);
    }
    showAlterarLarguraColunaModal(width) {
        this.alterarLarguraColunaModal.show(width);
    }
    hideAlterarLarguraColunaModal() {
        this.alterarLarguraColunaModal.hide();
    }
    showAlterarLarguraTabelaModal(width) {
        this.alterarLarguraTabelaModal.show(width);
    }
    hideAlterarLarguraTabelaModal() {
        this.alterarLarguraTabelaModal.hide();
    }
    agendarEmissaoEventoOnChange() {
        clearTimeout(this.timerOnChange);
        this.timerOnChange = setTimeout(() => {
            this.dispatchEvent(new CustomEvent('onchange', {
                bubbles: true,
                composed: true,
                detail: {
                    origemEvento: this.registroEvento,
                },
            }));
            this.onChange.notify(this.registroEvento);
        }, 1000);
    }
    createRenderRoot() {
        return this;
    }
    // stateChanged(state: any): void {
    //   const moduloRevisao = this.quill?.revisao;
    //   const events: StateEvent[] = state.elementoReducer.ui?.events;
    //   if (events) {
    //     if (events.some(ev => ev.stateType === StateType.RevisaoAtivada)) {
    //       moduloRevisao && (moduloRevisao.emRevisao = true);
    //       if (!this._textoAntesRevisao) {
    //         this._textoAntesRevisao = this.texto;
    //       }
    //     } else if (events.some(ev => ev.stateType === StateType.RevisaoDesativada)) {
    //       moduloRevisao && (moduloRevisao.emRevisao = false);
    //       this._textoAntesRevisao = undefined;
    //     }
    //     if (events.some(ev => ev.stateType === StateType.AtualizaUsuario) && moduloRevisao) {
    //       moduloRevisao.usuario = state.elementoReducer.usuario?.nome || 'Anônimo';
    //     }
    //   }
    // }
    updateRevisionStatus(value) {
        const moduloRevisao = this.quill?.revisao;
        if (moduloRevisao) {
            moduloRevisao.emRevisao = value;
            moduloRevisao.textoAntesRevisao = value ? this.texto : undefined;
        }
    }
    get _trocaOrientacaoDesabilitada() {
        return this._forcarLado || this._forcarAbaixo;
    }
    willUpdate(changed) {
        if (changed.has('orientacaoNotaRodaPe')) {
            const nova = this.orientacaoNotaRodaPe === 'lado' ? 'lado' : 'abaixo';
            this._orientacaoPreferida = nova;
            if (!this._forcarLado &&
                !this._forcarAbaixo &&
                nova !== this.notasPosicao) {
                this.notasPosicao = nova;
            }
        }
    }
    // labelAnexo = (): string => {
    //   const lengthAnexos = this.anexos?.length;
    //   return lengthAnexos === 1
    //     ? '1 anexo'
    //     : lengthAnexos > 1
    //       ? `${lengthAnexos} anexos`
    //       : '';
    // };
    render() {
        return html `
      ${quillSnowStyles} ${quillTableCss} ${editorStyles} ${editorTextoRicoCss}
      ${notaRodapeCss} ${verificacaoOrtograficaCss}

      <div class="panel-revisao">
        <lexml-ui-switch-revisao
          id="lexml-ui-switch-revisao-component-${this._uid}"
          modo="${this.modo}"
          class="revisao-container"
          .nomeSwitch="${this.getNomeSwitch()}"
          .nomeBadgeQuantidadeRevisao="${this.getNomeBadge()}"
        >
        </lexml-ui-switch-revisao>

        <wa-button
          class="aceitar-revisao"
          variant="neutral"
          size="small"
          title="Aceitar revisões"
          appearance="outlined"
          @click=${() => this.aceitarRevisoes()}
          disabled
          pill
        >
          <wa-icon name="check" label="Aceitar revisões"></wa-icon>
        </wa-button>
        <wa-button
          class="rejeitar-revisao"
          variant="neutral"
          size="small"
          title="Rejeitar revisões"
          appearance="outlined"
          @click=${() => this.rejeitarRevisoes()}
          disabled
          pill
        >
          <wa-icon name="x" label="Rejeitar revisões"></wa-icon>
        </wa-button>
      </div>
      <div>
        <!-- Toolbar externa, passa "por cima" de texto + notas -->
        <div id="rte-toolbar-${this._uid}" class="rte-toolbar"></div>
        <wa-split-panel
          .orientation=${this._orientation}
          .position=${this._posPercent}
          style=${this._styleSplit}
          class=${'rte-split ' +
            (!this.apresentarNotaRodape ? 'notas-desabilitadas' : '')}
        >
          <wa-icon
            slot="divider"
            name="${this._dividerIcon}"
            variant="solid"
          ></wa-icon>
          <div slot="start" class="split-start">
            <div class="editor-wrapper">
              <div id="${this._containerId}" class="editor-texto-rico"></div>
            </div>
          </div>
          <div slot="end" class="split-end">
            <div class="panel-nota-rodape-container">
              <panel-nota-rodape
                class="panel-nota-rodape"
                .notasRodape=${this.notasRodape}
                .posicao=${this.notasPosicao}
                .desabilitarTrocaOrientacao=${this._trocaOrientacaoDesabilitada}
              ></panel-nota-rodape>
            </div>
          </div>
        </wa-split-panel>
      </div>

      <lexml-ui-alterar-largura-tabela-coluna-modal
        id="lexml-alterar-largura-tabela-modal"
        tipo="tabela"
      ></lexml-ui-alterar-largura-tabela-coluna-modal>
      <lexml-ui-alterar-largura-tabela-coluna-modal
        id="lexml-alterar-largura-coluna-modal"
        tipo="coluna"
      ></lexml-ui-alterar-largura-tabela-coluna-modal>
      <lexml-ui-alterar-largura-imagem-modal
        id="lexml-alterar-largura-img-modal"
      ></lexml-ui-alterar-largura-imagem-modal>
    `;
    }
    constructor() {
        super();
        this._uid = crypto.randomUUID();
        this._containerId = `rte-${this._uid}`;
        this.height = 500;
        this.orientacaoNotaRodaPe = 'abaixo';
        this.notasPosicao = 'abaixo';
        this._forcarAbaixo = false;
        this._forcarLado = false;
        this._orientacaoPreferida = this.orientacaoNotaRodaPe ?? 'abaixo';
        this.texto = '';
        // @property({ type: Array }) anexos: Anexo[] = [];
        this.notasRodape = [];
        this.registroEvento = '';
        // @property({ type: Object }) lexmlEtaConfig: LexmlEmendaConfig = new LexmlEmendaConfig();
        this.tamanhoMaximoImagem = 2048; //2MB
        this.indHabilitarNotaRodape = true;
        this.apresentarNotaRodape = true;
        this.modo = '';
        this.nomeUsuarioRevisao = 'Anônimo';
        /** Toolbar opcional: string com tokens separados por vírgula.
         * Tokens: bold, italic, underline, ordered, bullet, sub, super, undo, redo,
         *         clean, align, textindent, marginbottom, image, link, notarodape, table.
         * Ex.: .toolbar=('bold') | .toolbar=('bold, italic, image') | .toolbar=('ordered, bullet, align')
         * Use como prop (.toolbar='...') ou atributo (toolbar="...").
         * Vazio => usa a toolbar padrão; tokens desconhecidos são ignorados. */
        this.toolbar = '';
        this.onChange = new Observable();
        this.icons = Quill.import('ui/icons');
        this.onTableInTable = () => {
            clearTimeout(this.timerAlerta);
            console.log('Teste');
            alertarInfo('Não é permitido inserir uma tabela dentro de outra tabela.');
        };
        this.enableAllTableItems = () => {
            const toolbar = this.quill?.getModule('toolbar')
                ?.container;
            if (!toolbar)
                return;
            toolbar
                .querySelectorAll('.ql-picker.ql-table .ql-picker-item')
                .forEach(el => el.classList.add('enabled'));
        };
        this.init = () => {
            const quillContainer = this.querySelector(`#${this._containerId}`);
            if (quillContainer) {
                Quill.register('modules/table', TableModule, true);
                Quill.register('formats/estilo-texto', EstiloTextoClass, true);
                Quill.register('formats/text-indent', NoIndentClass, true);
                Quill.register('formats/margin-bottom', MarginBottomClass, true);
                const tokens = this.parseToolbarTokens();
                let customToolbarOptions;
                let customFormatsOptions;
                if (tokens.length) {
                    customToolbarOptions = this.buildToolbarContainer(tokens);
                    customFormatsOptions = this.buildFormats(tokens);
                }
                else {
                    customToolbarOptions = [...toolbarOptions];
                    customFormatsOptions = [...formatsOptions];
                    if (this.indHabilitarNotaRodape) {
                        customToolbarOptions.push(['nota-rodape']);
                        customFormatsOptions.push('nota-rodape', 'link');
                    }
                }
                const externalToolbar = this.querySelector(`#rte-toolbar-${this._uid}`);
                this.quill = new Quill(quillContainer, {
                    formats: customFormatsOptions,
                    modules: {
                        toolbar: {
                            container: customToolbarOptions,
                            handlers: {
                                undo: this.undo,
                                redo: this.redo,
                                image: this.imageHandler,
                            },
                        },
                        aspasCurvas: true,
                        notaRodape: true,
                        table: {
                            cellSelectionOnClick: false,
                        },
                        revisao: {
                            usuario: this.nomeUsuarioRevisao || 'Anônimo',
                            emRevisao: false,
                            gerenciarKeydown: true,
                            tableModule: TableModule,
                            tableTrick: TableTrick,
                        },
                        verificacaoOrtografico: {
                            urlVerificadorOrtografico: 'https://verificador-ortografico.camara.leg.br/grammarcheck',
                            debounceTime: 500,
                            callbackRenderErrosOrtograficos: (erros) => {
                                // const codItemReferencia = +(this.quill?.root.getAttribute('data-cod-item-referencia') ?? 0);
                                const evt = new EditorCustomEventErrosOrtograficos({
                                    erros,
                                    codItemReferencia: 0,
                                });
                                this.quill?.root.dispatchEvent(evt);
                            },
                        },
                        history: {
                            delay: 1000,
                            maxStack: 500,
                            userOnly: true,
                        },
                        clipboard: {},
                        keyboard: {
                            // Since Quill’s default handlers are added at initialization, the only way to prevent them is to add yours in the configuration.
                            bindings: {
                                tab: {
                                    key: 'tab',
                                    handler: (range, keycontext) => {
                                        const outSideOfTable = TableModule.keyboardHandler(this.quill, 'tab', range, keycontext);
                                        if (outSideOfTable && this.quill) {
                                            //for some reason when you return true as quill says it should hand it to the default like the other bindings... for tab it doesnt.
                                            this.quill.history.cutoff(); //mimic the exact same thing quill does
                                            const delta = new Delta()
                                                .retain(range.index)
                                                .delete(range.length)
                                                .insert('\t');
                                            this.quill.updateContents(delta, 'user');
                                            this.quill.history.cutoff();
                                            this.quill.setSelection(range.index + 1, 0, 'silent');
                                        }
                                    },
                                },
                                shiftTab: {
                                    key: 'tab',
                                    shiftKey: true,
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'shiftTab', range, keycontext);
                                    },
                                },
                                selectAll: {
                                    key: 'a',
                                    ctrlKey: true,
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'selectAll', range, keycontext);
                                    },
                                },
                                backspace: {
                                    key: 'backspace',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'backspace', range, keycontext);
                                    },
                                },
                                delete: {
                                    key: 'delete',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'delete', range, keycontext);
                                    },
                                },
                                undo: {
                                    ctrlKey: true,
                                    key: 'z',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'undo', range, keycontext);
                                    },
                                },
                                redo: {
                                    ctrlKey: true,
                                    key: 'y',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'redo', range, keycontext);
                                    },
                                },
                                redo2: {
                                    ctrlKey: true,
                                    shiftKey: true,
                                    key: 'z',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'redo', range, keycontext);
                                    },
                                },
                                copy: {
                                    ctrlKey: true,
                                    key: 'c',
                                    handler: (range, keycontext) => {
                                        return TableModule.keyboardHandler(this.quill, 'copy', range, keycontext);
                                    },
                                },
                                // Desabilita autoformatação de listas
                                // Referência: https://github.com/quilljs/quill/blob/1.3.7/modules/keyboard.js (linha 249)
                                'list autofill': {
                                    key: ' ',
                                    handler: () => true,
                                },
                            },
                        },
                    },
                    placeholder: '',
                    theme: 'snow',
                });
                this.setContent(this.texto, this.notasRodape);
                this.addBotoesExtra();
                this.configureTooltip();
                this.elTableManagerButton = this.querySelectorAll('span.ql-table')[1];
                this.quill?.on('text-change', this.updateTexto);
                this.quill?.on('selection-change', this.onSelectionChange);
                this.alterarLarguraColunaModal.callback = this.alterarLarguraDaColuna;
                this.alterarLarguraTabelaModal.callback = this.alterarLarguraDaTabela;
                this.alterarLarguraImagemModal.callback = this.alterarLarguraDaImagem;
                quillContainer.addEventListener('contextmenu', this.menuContextImagem);
                quillContainer.addEventListener('click', this.onClick);
                const tb = this.quill.getModule('toolbar').container;
                externalToolbar.appendChild(tb);
                this.enableAllTableItems();
                const toolbar = this.quill.getModule('toolbar');
                toolbar.addHandler('table', (value) => {
                    TableModule.configToolbar(this.quill, value);
                    console.log('teste-toolbar');
                    if (value === 'change-width-col-modal') {
                        this.lastSelecion = this.quill?.getSelection();
                        const td = TableTrick.find_td_node(this.quill);
                        this.showAlterarLarguraColunaModal(td.width);
                    }
                    else if (value === 'change-width-table-modal') {
                        this.lastSelecion = this.quill?.getSelection();
                        const table = TableTrick.find_table_node(this.quill);
                        this.showAlterarLarguraTabelaModal(table.width);
                    }
                });
                this.addEventListener(NOTA_RODAPE_CHANGE_EVENT, this.updateNotasRodape);
                this.addEventListener(NOTA_RODAPE_REMOVE_EVENT, this.updateNotasRodape);
                this.addEventListener(NOTA_RODAPE_REMOVER, (evt) => this.removerNotaRodape(evt.detail.idNotaRodape));
                this.addEventListener(NOTA_RODAPE_EDITAR, (evt) => this.editarNotaRodape(evt.detail.idNotaRodape));
                this.addEventListener(NOTA_RODAPE_LOCALIZAR, (evt) => this.localizarNotaRodape(evt.detail.idNotaRodape));
                this.addEventListener(NOTA_RODAPE_REMOVER_PULSAR, (evt) => this.removerPulsarNotaRodape(evt.detail.idNotaRodape));
                // this.buildRevisoes();
                QuillUtil.configurarAcoesLink(this.quill);
                this.addEventListener('switch-revisao:change', (ev) => {
                    this.updateRevisionStatus(ev.detail.checked);
                });
            }
        };
        this.menuContextImagem = (ev) => {
            const elemento = ev.target;
            if (elemento.tagName === 'IMG') {
                ev.preventDefault();
                showMenuImagem(this, elemento, ev.pageY, ev.pageX);
            }
        };
        this.onClick = (ev) => {
            const elemento = ev.target;
            if (elemento.tagName === 'IMG') {
                ev.preventDefault();
                this.selectImage(elemento);
            }
        };
        this.selectImage = (img) => {
            const imgBlot = Quill.find(img);
            imgBlot && this.quill.setSelection(this.quill.getIndex(imgBlot), 1);
        };
        this.imageHandler = () => {
            let fileInput = this.querySelector('input.ql-image[type=file]');
            if (fileInput === null) {
                fileInput = document.createElement('input');
                fileInput.setAttribute('type', 'file');
                fileInput.setAttribute('hidden', 'true');
                fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
                fileInput.classList.add('ql-image');
                fileInput.addEventListener('change', () => {
                    if (fileInput.files !== null && fileInput.files[0] !== null) {
                        const reader = new FileReader();
                        reader.onload = e => {
                            if (this.tamanhoPermitido(e)) {
                                const range = this.quill.getSelection(true);
                                this.quill.updateContents(new Delta()
                                    .retain(range.index)
                                    .delete(range.length)
                                    .insert({ image: e.target.result }), 'user');
                                fileInput.value = '';
                                fileInput.remove();
                            }
                            else {
                                alertarInfo(`Essa imagem ultrapassa o tamanho máximo permitido (${Math.trunc(this.tamanhoMaximoImagem / 1024)}MB)`);
                                fileInput.remove();
                            }
                        };
                        reader.readAsDataURL(fileInput.files[0]);
                    }
                });
                this.appendChild(fileInput);
            }
            fileInput.click();
        };
        this.tamanhoPermitido = (e) => {
            const size = Math.round(e.loaded / 1024);
            return size < this.tamanhoMaximoImagem;
        };
        this.alterarLarguraDaColuna = (valor) => {
            this.quill.setSelection(this.lastSelecion);
            TableTrick.changeWidthCol(this.quill, valor);
            this.updateApenasTexto();
            this.hideAlterarLarguraColunaModal();
        };
        this.alterarLarguraDaTabela = (valor) => {
            this.quill.setSelection(this.lastSelecion);
            TableTrick.changeWidthTable(this.quill, valor);
            this.updateApenasTexto();
            this.hideAlterarLarguraTabelaModal();
        };
        this.alterarLarguraDaImagem = (img, valor) => {
            const blot = Quill.find(img);
            blot && blot.format('width', `${valor}%`);
        };
        this.onSelectionChange = (range) => {
            if (this.quill && range)
                this.quill.getModule('toolbar').update(range);
            setTimeout(() => {
                const format = range && this.quill?.getFormat(range);
                this.highLightBotaoGerenciarTabela(format);
                this.enableAllTableItems();
            }, 0);
        };
        this.highLightBotaoGerenciarTabela = (format) => {
            format?.td
                ? this.elTableManagerButton?.classList.add('table-selected')
                : this.elTableManagerButton?.classList.remove('table-selected');
        };
        this.addBotoesExtra = () => {
            const toolbarContainer = this.quill.getModule('toolbar').container;
            const elAnexo = this.querySelector('.panel-anexo');
            const elRevisao = this.querySelector('.panel-revisao');
            if (elAnexo) {
                elAnexo.parentNode.removeChild(elAnexo);
                toolbarContainer.appendChild(elAnexo);
            }
            elRevisao.parentNode.removeChild(elRevisao);
            toolbarContainer.appendChild(elRevisao);
        };
        this.configureTooltip = () => {
            const toolbarContainer = this.quill.getModule('toolbar').container;
            this.setTitle(toolbarContainer, 'button.ql-bold', 'Negrito (Ctrl+b)');
            this.setTitle(toolbarContainer, 'button.ql-italic', 'Itálico (Ctrl+i)');
            this.setTitle(toolbarContainer, 'button.ql-underline', 'Sublinhado (Ctrl+u)');
            this.setTitle(toolbarContainer, 'button.ql-list[value="ordered"]', 'Lista ordenada');
            this.setTitle(toolbarContainer, 'button.ql-list[value="bullet"]', 'Lista não ordenada');
            this.setTitle(toolbarContainer, 'button.ql-blockquote', 'Bloco de citação');
            this.setTitle(toolbarContainer, 'button.ql-script[value="sub"]', 'Subscrito');
            this.setTitle(toolbarContainer, 'button.ql-script[value="super"]', 'Sobrescrito');
            this.setTitle(toolbarContainer, '.ql-align .ql-picker-options > span:nth-child(1)', 'Alinhar à esquerda');
            this.setTitle(toolbarContainer, '.ql-align .ql-picker-options > span:nth-child(2)', 'Centralizar');
            this.setTitle(toolbarContainer, '.ql-align .ql-picker-options > span:nth-child(3)', 'Alinhar à direita');
            this.setTitle(toolbarContainer, '.ql-align .ql-picker-options > span:nth-child(4)', 'Justificar');
            this.setTitle(toolbarContainer, 'button.ql-clean', 'Limpar formatação');
            this.setTitle(toolbarContainer, 'button.ql-image', 'Inserir imagem');
            this.setTitle(toolbarContainer, 'button.ql-undo', 'Desfazer (Ctrl+z)');
            this.setTitle(toolbarContainer, 'button.ql-redo', 'Refazer (Ctrl+y)');
            this.setTitle(toolbarContainer, 'button.ql-margin-bottom', 'Distância entre parágrafos');
            this.setTitle(toolbarContainer, 'button.ql-text-indent', 'Recuo de parágrafo');
            this.setTitle(toolbarContainer, 'button.ql-table', 'Tabela');
            this.setTitle(toolbarContainer, 'button.ql-nota-rodape', 'Nota de rodapé');
        };
        this.setTitle = (toolbarContainer, seletor, title) => toolbarContainer.querySelector(seletor)?.setAttribute('title', title);
        this.setContent = (texto, notasRodape = []) => {
            if (!this.quill || !this.quill.root) {
                return;
            }
            this.texto = texto;
            const textoAjustado = (texto || '')
                .replace(/align-justify/g, 'ql-align-justify')
                .replace(/align-center/g, 'ql-align-center')
                .replace(/align-right/g, 'ql-align-right');
            this.quill.history.clear(); // Não remover: isso é um workaround para o bug que ocorre ao limpar conteúdo depois de alguma inserção de tabela
            if (this.quill?.revisao) {
                this.quill.revisao.modo = this.modo;
            }
            this.configAbrindoTexto(true);
            this.quill.setContents(this.quill.clipboard.convert(textoAjustado), 'silent');
            this.configAbrindoTexto(false);
            this.notasRodape = notasRodape;
            this._atualizarVisibilidadeNotasRodape();
            setTimeout(() => {
                this.quill.history.clear();
                if (this.quill?.notasRodape?.associar) {
                    this.quill.notasRodape.associar(notasRodape);
                }
            }, 100); // A linha anterior gera um history, então é necessário limpar novamente.
            if (!textoAjustado)
                this.quill.format('align', 'justify');
            this.atualizaStatusElementosRevisao();
        };
        this.configAbrindoTexto = (valor) => {
            const q = this.quill;
            if (q?.revisao)
                q.revisao.isAbrindoTexto = valor;
            if (q?.notasRodape)
                q.notasRodape.isAbrindoTexto = valor;
            const emRevisao = q?.revisao?.emRevisao ?? false;
            if (!valor) {
                if (this.getQuantidadeDeRevisoes() > 0 && !emRevisao) {
                    if (this._switchRevisaoEl) {
                        this._switchRevisaoEl.ativarDesativarMarcaDeRevisao();
                        setTimeout(() => this.alertaGlobalRevisao(), 0);
                    }
                }
            }
        };
        this.updateApenasTexto = () => {
            const texto = this.ajustaHtml(this.quill?.root.innerHTML);
            this.texto = texto === '<p><br></p>' ? '' : texto;
        };
        this.updateTexto = () => {
            const texto = this.ajustaHtml(this.quill?.root.innerHTML);
            this.texto = texto === '<p><br></p>' ? '' : texto;
            this.agendarEmissaoEventoOnChange();
            this.onSelectionChange(this.quill?.getSelection());
            this.atualizaStatusElementosRevisao(false);
            // this.buildRevisoes();
            this.alertaGlobalRevisao();
        };
        this.updateNotasRodape = () => {
            this.notasRodape = this.quill.notasRodape?.getNotasRodape() || [];
            this._atualizarVisibilidadeNotasRodape();
        };
        this.getNotasRodape = () => {
            return this.notasRodape;
        };
        this.ajustaHtml = (html = '') => {
            let result = html
                .replace(/ql-indent/g, 'indent')
                .replace(/ql-align-justify/g, 'align-justify')
                .replace(/ql-align-center/g, 'align-center')
                .replace(/ql-align-right/g, 'align-right');
            result = removeElementosTDOcultos(result);
            return this.quill.notasRodape.ajustarConteudoTagsNotaRodape(result);
        };
        this.undo = () => {
            this.quill?.focus();
            if (this.quill.revisao?.handleUndo(this.quill?.getSelection(), undefined)) {
                this.quill?.history.undo();
                this.atualizaStatusElementosRevisao();
            }
            else {
                this.quill?.history.undo();
            }
        };
        this.redo = () => {
            this.quill?.focus();
            if (this.quill.revisao?.handleRedo(this.quill?.getSelection(), undefined)) {
                this.quill?.history.redo();
                this.atualizaStatusElementosRevisao();
            }
            else {
                this.quill?.history.redo();
            }
        };
        // atualizaAnexo = (anexo: Anexo[]): void => {
        //   this.anexos = [...anexo];
        // };
        this.isEditorVazio = () => {
            const delta = this.quill?.getContents();
            if (!delta || !delta.ops || delta.ops.length === 0) {
                return true;
            }
            for (let i = 0; i < delta.ops.length; i++) {
                if (delta.ops[i]?.insert.trim() !== '') {
                    return false;
                }
            }
            return true;
        };
        this.getTexto = () => {
            return this.texto;
        };
        this.getNomeSwitch = () => `chk-em-revisao-texto-livre-${this._uid}`;
        this.getNomeBadge = () => `badge-marca-alteracao-texto-livre-${this._uid}`;
        this.getQuantidadeDeRevisoes = () => {
            return this.quill?.revisao?.getQuantidadeRevisoes() ?? 0;
        };
        this.aceitarRevisoes = () => {
            this.quill?.revisao?.revisarTodos(true);
            // this.setTextoAntesRevisao(undefined);
            this.atualizaStatusElementosRevisao();
            // this.removeRevisoes();
        };
        this.rejeitarRevisoes = () => {
            this.quill?.revisao?.revisarTodos(false);
            // this.setTextoAntesRevisao(undefined);
            this.atualizaStatusElementosRevisao();
            // this.removeRevisoes();
        };
        this.atualizaStatusElementosRevisao = (immediate = true) => {
            const fnUpdate = () => {
                const quantidade = this.getQuantidadeDeRevisoes();
                this.desabilitaBtn(quantidade === 0, CLASS_BUTTON_REJEITAR_REVISAO);
                this.desabilitaBtn(quantidade === 0, CLASS_BUTTON_ACEITAR_REVISAO);
                this.atualizaQuantidadeRevisao(quantidade);
            };
            if (immediate) {
                fnUpdate();
            }
            else {
                clearTimeout(this.timerAtualizaStatusElementosRevisao);
                this.timerAtualizaStatusElementosRevisao = setTimeout(fnUpdate, 100);
            }
        };
        this.desabilitaBtn = (desabilita, button) => {
            const contadorView = this.querySelector(`.${button}`);
            if (contadorView) {
                if (desabilita) {
                    contadorView.setAttribute('disabled', desabilita);
                }
                else {
                    contadorView.removeAttribute('disabled');
                }
            }
        };
        this.atualizaQuantidadeRevisao = (quantidade) => {
            this._switchRevisaoEl?.atualizaQuantidadeRevisao(quantidade);
        };
        patchSplitPanelForLexml();
        this.icons['undo'] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
    </svg>`;
        this.icons['redo'] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
    </svg>`;
        //this.icons['anexo'] = anexo + ;
        this.icons['bold'] = negrito;
        this.icons['underline'] = sublinhado;
        this.icons['text-indent'] = iconeTextIndent;
        this.icons['margin-bottom'] = iconeMarginBottom;
        this.icons['nota-rodape'] = iconeNotaDeRodape;
        this.classList.add('lexml-ui-editor-texto-rico');
    }
    firstUpdated() {
        this.init();
        const sp = this.renderRoot?.querySelector('wa-split-panel');
        if (sp) {
            this._splitResizeObs = new ResizeObserver(entries => {
                const rect = entries[0]?.contentRect ?? sp.getBoundingClientRect();
                const w = rect.width;
                const h = rect.height;
                const forceBelow = w < 995;
                const forceSide = h < 290;
                const prevForcarAbaixo = this._forcarAbaixo;
                const prevForcarLado = this._forcarLado;
                this._forcarAbaixo = forceBelow;
                this._forcarLado = forceSide;
                const alvo = forceSide
                    ? 'lado'
                    : forceBelow
                        ? 'abaixo'
                        : this._orientacaoPreferida;
                if (alvo !== this.notasPosicao) {
                    this.notasPosicao = alvo;
                    queueMicrotask(async () => {
                        await this.updateComplete;
                        const spAny = this.renderRoot?.querySelector('wa-split-panel');
                        if (spAny)
                            spAny.position = this._posPercent;
                    });
                }
                if (prevForcarAbaixo !== this._forcarAbaixo ||
                    prevForcarLado !== this._forcarLado) {
                    this.requestUpdate();
                }
            });
            this._splitResizeObs.observe(sp);
        }
        this.addEventListener('nota-rodape:mudar-posicao', async (ev) => {
            if (this._forcarLado || this._forcarAbaixo)
                return;
            this.notasPosicao = ev?.detail?.posicao === 'abaixo' ? 'abaixo' : 'lado';
            this._orientacaoPreferida = this.notasPosicao;
            await this.updateComplete;
            const spAny = this.renderRoot?.querySelector('wa-split-panel');
            if (spAny)
                spAny.position = this._posPercent;
        });
        const switchEl = this.querySelector(`#lexml-ui-switch-revisao-component-${this._uid}`);
        if (switchEl) {
            this._switchRevisaoEl = switchEl;
            switchEl.addEventListener('switch-revisao:change', (ev) => {
                this.updateRevisionStatus(!!ev.detail?.checked);
                ev.stopPropagation();
            });
        }
    }
    disconnectedCallback() {
        this.quill?.off('text-change', this.updateTexto);
        this.quill?.off('selection-change', this.onSelectionChange);
        super.disconnectedCallback();
    }
    _atualizarVisibilidadeNotasRodape() {
        this.apresentarNotaRodape = this.notasRodape && this.notasRodape.length > 0;
    }
    alertaGlobalRevisao() {
        //TODOX ----
        const id = 'alerta-global-revisao';
        const total = this.getQuantidadeDeRevisoes();
        if (total > 0) {
            const alerta = {
                id,
                tipo: 'INFO',
                mensagem: 'Este documento contém marcas de revisão e não deve ser protocolado até que estas sejam removidas.',
                podeFechar: true,
            };
            if (this.addAlert)
                this.addAlert(alerta);
            else
                this.dispatchEvent(new CustomEvent('alert:add', {
                    bubbles: true,
                    composed: true,
                    detail: alerta,
                }));
        }
        else {
            if (this.removeAlert)
                this.removeAlert(id);
            else
                this.dispatchEvent(new CustomEvent('alert:remove', {
                    bubbles: true,
                    composed: true,
                    detail: { id },
                }));
        }
    }
    renumerarNotasRodape(numeroInicial = 1) {
        this.quill?.notasRodape?.renumerarTodasNotas(numeroInicial);
        this.updateNotasRodape();
    }
    editarNotaRodape(idNotaRodape) {
        this.quill?.notasRodape?.editar(idNotaRodape);
    }
    removerNotaRodape(idNotaRodape) {
        this.quill?.notasRodape?.remover(idNotaRodape);
    }
    removerPulsarNotaRodape(idNotaRodape) {
        const notaRodapeElement = this.querySelector(`.ql-editor nota-rodape[id-nota-rodape="${idNotaRodape}"]`);
        notaRodapeElement?.classList.remove('pulse');
    }
    localizarNotaRodape(idNotaRodape) {
        const notaRodapeElement = this.querySelector(`.ql-editor nota-rodape[id-nota-rodape="${idNotaRodape}"]`);
        notaRodapeElement &&
            setTimeout(() => notaRodapeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            }), 100);
        const notasRodape = this.querySelectorAll('.ql-editor nota-rodape');
        notasRodape.forEach((nr) => {
            if (nr.attributes['id-nota-rodape'].value === idNotaRodape) {
                nr?.classList.add('pulse');
            }
            else {
                nr.classList.remove('pulse');
            }
        });
    }
    reset() {
        this.setContent('');
    }
    parseToolbarTokens() {
        const raw = this.toolbar || this.getAttribute('toolbar') || '';
        const tokens = raw
            .split(',')
            .map(s => s.trim().toLowerCase())
            .filter(Boolean);
        if (raw.trim() !== '') {
            if (!tokens.includes('notarodape')) {
                this.apresentarNotaRodape = false;
            }
        }
        return tokens;
    }
    buildToolbarContainer(tokens) {
        const map = {
            bold: ['bold'],
            italic: ['italic'],
            underline: ['underline'],
            ordered: [{ list: 'ordered' }],
            bullet: [{ list: 'bullet' }],
            sub: [{ script: 'sub' }],
            super: [{ script: 'super' }],
            undo: ['undo'],
            redo: ['redo'],
            align: [{ align: [] }],
            textindent: [{ 'text-indent': '0px' }],
            marginbottom: [{ 'margin-bottom': '0px' }],
            clean: ['clean'],
            image: ['image'],
            link: ['link'],
            notarodape: ['nota-rodape'],
            table: [
                { table: TableModule.tableOptions() },
                {
                    table: [
                        'change-width-col-modal',
                        'change-width-table-modal',
                        'append-row-above',
                        'append-row-below',
                        'append-col-before',
                        'append-col-after',
                        'remove-col',
                        'remove-row',
                        'remove-table',
                        'split-cell',
                        'merge-selection',
                    ],
                },
            ],
        };
        const container = [];
        tokens.forEach(t => {
            const entry = map[t];
            if (!entry)
                return;
            if (t !== 'table') {
                container.push(entry);
            }
            else {
                entry.forEach(obj => container.push([obj]));
            }
        });
        return container;
    }
    buildFormats(tokens) {
        const formatsMap = {
            bold: ['bold'],
            italic: ['italic'],
            underline: ['underline'],
            ordered: ['list'],
            bullet: ['list'],
            sub: ['script'],
            super: ['script'],
            align: ['align'],
            textindent: ['text-indent'],
            marginbottom: ['margin-bottom'],
            image: ['image'],
            link: ['link'],
            notarodape: ['nota-rodape'],
            table: ['table', 'tr', 'td', 'width'],
        };
        const set = new Set(['estilo']);
        tokens.forEach(t => (formatsMap[t] || []).forEach(f => set.add(f)));
        set.add('added');
        set.add('removed');
        return Array.from(set);
    }
};
__decorate([
    property({ type: Number })
], EditorTextoRicoComponent.prototype, "height", void 0);
__decorate([
    property({ type: String, reflect: true })
], EditorTextoRicoComponent.prototype, "orientacaoNotaRodaPe", void 0);
__decorate([
    state()
], EditorTextoRicoComponent.prototype, "notasPosicao", void 0);
__decorate([
    state()
], EditorTextoRicoComponent.prototype, "_forcarAbaixo", void 0);
__decorate([
    state()
], EditorTextoRicoComponent.prototype, "_forcarLado", void 0);
__decorate([
    property({ type: String })
], EditorTextoRicoComponent.prototype, "texto", void 0);
__decorate([
    property({ type: Array })
], EditorTextoRicoComponent.prototype, "notasRodape", void 0);
__decorate([
    property({ type: String, attribute: 'registro-evento' })
], EditorTextoRicoComponent.prototype, "registroEvento", void 0);
__decorate([
    property({ type: Number })
], EditorTextoRicoComponent.prototype, "tamanhoMaximoImagem", void 0);
__decorate([
    property({ type: Boolean })
], EditorTextoRicoComponent.prototype, "indHabilitarNotaRodape", void 0);
__decorate([
    state()
], EditorTextoRicoComponent.prototype, "apresentarNotaRodape", void 0);
__decorate([
    property({ type: String })
], EditorTextoRicoComponent.prototype, "modo", void 0);
__decorate([
    property({ type: String })
], EditorTextoRicoComponent.prototype, "nomeUsuarioRevisao", void 0);
__decorate([
    property({ type: String, attribute: 'toolbar' })
], EditorTextoRicoComponent.prototype, "toolbar", void 0);
__decorate([
    property({ attribute: false })
], EditorTextoRicoComponent.prototype, "addAlert", void 0);
__decorate([
    property({ attribute: false })
], EditorTextoRicoComponent.prototype, "removeAlert", void 0);
__decorate([
    property({ attribute: false })
], EditorTextoRicoComponent.prototype, "onRevisionCountChange", void 0);
__decorate([
    query('#lexml-alterar-largura-coluna-modal')
], EditorTextoRicoComponent.prototype, "alterarLarguraColunaModal", void 0);
__decorate([
    query('#lexml-alterar-largura-tabela-modal')
], EditorTextoRicoComponent.prototype, "alterarLarguraTabelaModal", void 0);
__decorate([
    query('#lexml-alterar-largura-img-modal')
], EditorTextoRicoComponent.prototype, "alterarLarguraImagemModal", void 0);
EditorTextoRicoComponent = __decorate([
    customElement('lexml-ui-editor-texto-rico')
], EditorTextoRicoComponent);
const formatsOptions = [
    'estilo',
    'bold',
    'italic',
    'image',
    'underline',
    'align',
    'list',
    'script',
    'image',
    'table',
    'tr',
    'td',
    'link',
    'text-indent',
    'margin-bottom',
    'width',
    'added',
    'removed',
    'misspelled',
];
const toolbarOptions = [
    [{ estilo: [false, 'ementa', 'norma-alterada'] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    // ['blockquote'],
    ['undo', 'redo'],
    [{ align: [] }],
    [{ 'text-indent': '0px' }],
    [{ 'margin-bottom': '0px' }],
    ['clean'],
    [
        {
            table: TableModule.tableOptions(),
        },
        {
            table: [
                // 'insert',
                'change-width-col-modal',
                'change-width-table-modal',
                'append-row-above',
                'append-row-below',
                'append-col-before',
                'append-col-after',
                'remove-col',
                'remove-row',
                'remove-table',
                'split-cell',
                'merge-selection',
                // 'remove-cell',
                // 'remove-selection',
            ],
        },
    ],
    ['image'],
];

let AlterarLarguraTabelaColunaModalComponent = class AlterarLarguraTabelaColunaModalComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.exibirAviso = false;
        this.valorLargura = '';
        this.tipo = '';
        this.onAfterShow = () => {
            this.shadowRoot?.querySelector('wa-input')?.focus();
        };
        this.onAfterHide = () => {
            this.exibirAviso = false;
            this.valorLargura = '';
        };
        this.onInput = (e) => {
            const target = e.target;
            this.valorLargura = target.value ?? '';
            if (this.exibirAviso)
                this.exibirAviso = false;
        };
    }
    openDialog() {
        if (this.dialog?.show)
            this.dialog.show();
        else if ('open' in this.dialog)
            this.dialog.open = true;
        else
            this.dialog?.setAttribute?.('open', '');
    }
    closeDialog() {
        if (this.dialog?.hide)
            this.dialog.hide();
        else if (this.dialog?.close)
            this.dialog.close();
        else if ('open' in this.dialog)
            this.dialog.open = false;
        else
            this.dialog?.removeAttribute?.('open');
    }
    show(width) {
        this.valorLargura = width ? width.replace('%', '') : '';
        this.exibirAviso = false;
        this.openDialog();
    }
    hide() {
        this.closeDialog();
    }
    alterarLargura() {
        const width = parseInt(this.valorLargura);
        if (isNaN(width) || width < 1 || width > 100) {
            this.exibirAviso = true;
        }
        else if (this.callback) {
            this.callback(width);
            this.hide();
        }
    }
    render() {
        return html `
      <style>
        :host {
          font-family: var(--wa-font-sans);
        }
        wa-input::part(base) {
          width: 150px;
          margin-top: 5px;
        }
        wa-callout {
          margin-top: 20px;
        }
      </style>

      <wa-dialog
        label="Alterar a largura da ${this.tipo}"
        @wa-after-show=${this.onAfterShow}
        @wa-after-hide=${this.onAfterHide}
      >
        <label>Informe o percentual da largura da ${this.tipo}</label>
        <wa-input
          type="number"
          .value=${this.valorLargura}
          @input=${this.onInput}
        >
          <wa-icon name="percent" slot="suffix"></wa-icon>
        </wa-input>

        ${this.exibirAviso
            ? html `
              <wa-callout variant="warning" closable>
                <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                Informe um valor numérico de 1 a 100.
              </wa-callout>
            `
            : null}

        <wa-button slot="footer" variant="brand" @click=${this.alterarLargura}>
          Alterar
        </wa-button>
        <wa-button slot="footer" @click=${this.hide}>Fechar</wa-button>
      </wa-dialog>
    `;
    }
};
__decorate([
    query('wa-dialog')
], AlterarLarguraTabelaColunaModalComponent.prototype, "dialog", void 0);
__decorate([
    property({ type: Boolean })
], AlterarLarguraTabelaColunaModalComponent.prototype, "exibirAviso", void 0);
__decorate([
    property({ type: String })
], AlterarLarguraTabelaColunaModalComponent.prototype, "valorLargura", void 0);
__decorate([
    property({ type: String })
], AlterarLarguraTabelaColunaModalComponent.prototype, "tipo", void 0);
__decorate([
    property({ type: Function })
], AlterarLarguraTabelaColunaModalComponent.prototype, "callback", void 0);
AlterarLarguraTabelaColunaModalComponent = __decorate([
    customElement('lexml-ui-alterar-largura-tabela-coluna-modal')
], AlterarLarguraTabelaColunaModalComponent);

let AlterarLarguraImagemModalComponent = class AlterarLarguraImagemModalComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.exibirAviso = false;
        this.valorLargura = '';
        this.tipo = '';
        this.onAfterShow = () => {
            this.shadowRoot?.querySelector('wa-input')?.focus();
        };
        this.onAfterHide = () => {
            this.exibirAviso = false;
            this.valorLargura = '';
            this.img = undefined;
        };
        this.onInput = (e) => {
            const target = e.target;
            this.valorLargura = target.value ?? '';
            if (this.exibirAviso)
                this.exibirAviso = false;
        };
        this.onKeyDown = (e) => {
            if (e.key === 'Enter')
                this.alterarLargura();
        };
    }
    openDialog() {
        if (this.dialog?.show)
            this.dialog.show();
        else if ('open' in this.dialog)
            this.dialog.open = true;
        else
            this.dialog?.setAttribute?.('open', '');
    }
    closeDialog() {
        if (this.dialog?.hide)
            this.dialog.hide();
        else if (this.dialog?.close)
            this.dialog.close();
        else if ('open' in this.dialog)
            this.dialog.open = false;
        else
            this.dialog?.removeAttribute?.('open');
    }
    show(img, width) {
        this.img = img;
        this.valorLargura = width ? width.replace('%', '') : '';
        this.exibirAviso = false;
        this.openDialog();
    }
    hide() {
        this.closeDialog();
    }
    alterarLargura() {
        const width = parseInt(this.valorLargura, 10);
        if (isNaN(width) || width < 1 || width > 100) {
            this.exibirAviso = true;
            return;
        }
        this.callback?.(this.img, width);
        this.hide();
    }
    render() {
        return html `
      <style>
        :host {
          font-family: var(--wa-font-sans);
        }
        wa-input::part(base) {
          width: 150px;
          margin-top: 5px;
        }
        wa-callout {
          margin-top: 20px;
        }
      </style>

      <wa-dialog
        label="Alterar a largura da Imagem"
        @wa-after-show=${this.onAfterShow}
        @wa-after-hide=${this.onAfterHide}
      >
        <label>Informe o percentual da largura da Imagem</label>

        <wa-input
          type="number"
          .value=${this.valorLargura}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
        >
          <wa-icon name="percent" slot="suffix"></wa-icon>
        </wa-input>

        ${this.exibirAviso
            ? html `
              <wa-callout variant="warning" closable>
                <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                Informe um valor numérico de 1 a 100.
              </wa-callout>
            `
            : null}

        <wa-button slot="footer" variant="brand" @click=${this.alterarLargura}>
          Alterar
        </wa-button>
        <wa-button slot="footer" @click=${this.hide}> Fechar </wa-button>
      </wa-dialog>
    `;
    }
};
__decorate([
    query('wa-dialog')
], AlterarLarguraImagemModalComponent.prototype, "dialog", void 0);
__decorate([
    property({ type: Boolean })
], AlterarLarguraImagemModalComponent.prototype, "exibirAviso", void 0);
__decorate([
    property({ type: String })
], AlterarLarguraImagemModalComponent.prototype, "valorLargura", void 0);
__decorate([
    property({ type: String })
], AlterarLarguraImagemModalComponent.prototype, "tipo", void 0);
__decorate([
    property({ type: Function })
], AlterarLarguraImagemModalComponent.prototype, "callback", void 0);
AlterarLarguraImagemModalComponent = __decorate([
    customElement('lexml-ui-alterar-largura-imagem-modal')
], AlterarLarguraImagemModalComponent);

// import { Observable } from '../../utils/observable';
// import { ativarDesativarMarcaDeRevisao, atualizaQuantidadeRevisao, getQuantidadeRevisoesAll, setCheckedElement } from '../../redux/elemento/util/revisaoUtil';
// import { StateEvent, StateType } from '../../redux/state';
// import { alertarInfo } from '../../redux/elemento/util/alertaUtil';
// import { Modo } from '../../model/modo.model';
let SwitchRevisaoComponent = class SwitchRevisaoComponent extends LitElement {
    // onChange: Observable<string> = new Observable<string>();
    update(changedProperties) {
        super.update(changedProperties);
    }
    createRenderRoot() {
        return this;
    }
    // TODO: revisar essa parte de integração com o redux
    // stateChanged(state: any): void {
    //   if (state.elementoReducer.ui) {
    //     if (state.elementoReducer.ui.events) {
    //       if (state.elementoReducer.ui.message && state.elementoReducer.ui.events[0]?.stateType === 'AtualizacaoAlertas') {
    //         alertarInfo(state.elementoReducer.ui.message.descricao);
    //       }
    //       this.processarStateEvents(state.elementoReducer.ui.events);
    //     }
    //   }
    // }
    // TODO: revisar essa parte de integração com o redux
    // private processarStateEvents(events: StateEvent[]): void {
    //   events?.forEach((event: StateEvent): void => {
    //     switch (event.stateType) {
    //       case StateType.RevisaoAtivada:
    //       case StateType.RevisaoDesativada:
    //         this.checkedSwitchMarcaAlteracao();
    //         break;
    //     }
    //     this.atualizaQuantidadeRevisao();
    //   });
    // }
    render() {
        return html `
      <style>
        #revisoes-justificativa-icon wa-icon {
          border: 1px solid #ccc !important;
          padding: 0.4rem 0.4rem !important;
          border-radius: 15px !important;
          font-weight: bold;
          background-color: #eee;
          cursor: pointer;
        }

        #revisoes-texto-livre-icon wa-icon {
          border: 1px solid #ccc !important;
          padding: 0.4rem 0.4rem !important;
          border-radius: 15px !important;
          font-weight: bold;
          background-color: #eee;
          cursor: pointer;
        }
        [id^='chk-em-revisao-'] {
          border: 1px solid #ccc !important;
          padding: 5px 10px !important;
          border-radius: 20px !important;
          margin-left: auto;
          margin-right: 5px;
          font-weight: bold;
          background-color: #eee;
        }
        [id^='chk-em-revisao-'][checked] {
          background-color: var(--wa-color-blue-100);
        }
        .revisao-container {
          margin-left: auto;
        }
        .wa-toast-stack wa-alert::part(base) {
          background-color: var(--wa-color-danger-100);
        }
        @media (max-width: 992px) {
          .mobile-buttons {
            display: inline-block !important;
          }
          #chk-em-revisao span {
            display: none;
          }
        }
      </style>
      <div id="switch-container">
        <wa-switch
          id="${this.nomeSwitch}"
          size="small"
          @input=${() => console.log(11111, 'input')}
          @change=${() => this.ativarDesativarMarcaDeRevisao()}
        >
          <span>Marcas de revisão</span>
          <wa-badge
            id="${this.nomeBadgeQuantidadeRevisao}"
            variant="warning"
            pill
            >${this.quantidadeRevisao}</wa-badge
          >
        </wa-switch>
      </div>
    `;
    }
    constructor() {
        super();
        this.quantidadeRevisao = 0;
        this.nomeSwitch = '';
        this.nomeBadgeQuantidadeRevisao = '';
        // @property({ type: Boolean, reflect: true })
        // checkedRevisao = false;
        this.modo = '';
        this.atualizaQuantidadeRevisao = (quantidade) => {
            this.quantidadeRevisao = quantidade;
        };
    }
    ativarDesativarMarcaDeRevisao() {
        const switchElement = document.getElementById(this.nomeSwitch);
        const checked = switchElement?.checked;
        if (!checked && this.quantidadeRevisao > 0) {
            switchElement.checked = true;
            switchElement.setAttribute('checked', '');
            // alertarInfo('Desative as marcas de revisão somente após aceitar ou rejeitar todas as alterações.');
            console.log(11111, 'Desative as marcas de revisão somente após aceitar ou rejeitar todas as alterações.');
            return;
        }
        this.dispatchEvent(new CustomEvent('switch-revisao:change', {
            bubbles: true,
            detail: { checked },
        }));
        // this.checkedSwitchMarcaAlteracao(checked);
    }
};
__decorate([
    property({ type: Number })
], SwitchRevisaoComponent.prototype, "quantidadeRevisao", void 0);
__decorate([
    property({ type: String })
], SwitchRevisaoComponent.prototype, "nomeSwitch", void 0);
__decorate([
    property({ type: String })
], SwitchRevisaoComponent.prototype, "nomeBadgeQuantidadeRevisao", void 0);
__decorate([
    property({ type: String })
], SwitchRevisaoComponent.prototype, "modo", void 0);
SwitchRevisaoComponent = __decorate([
    customElement('lexml-ui-switch-revisao')
], SwitchRevisaoComponent);

window.Quill = Quill;

export { AlertasComponent, AlterarLarguraImagemModalComponent, AlterarLarguraTabelaColunaModalComponent, AutoFix, Autocomplete, AutocompleteAsync, Comissao, Data, Destino, DestinoComponent, EditorTextoRicoComponent, LexmlAutocompleteUniversal, LexmlUiCommons, OpcoesImpressaoComponent, Option, PanelNotaRodapeComponent, REGEX_ACCENTS, SwitchRevisaoComponent, TipoMensagem, alertarInfo };
//# sourceMappingURL=index.js.map
