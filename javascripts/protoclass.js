function $A(t){if(!t)return[];if(t.toArray)return t.toArray();for(var n=t.length||0,e=new Array(n);n--;)e[n]=t[n];return e}var Class={create:function(){function t(){this.initialize.apply(this,arguments)}var n=null,e=$A(arguments);if(Object.isFunction(e[0])&&(n=e.shift()),Object.extend(t,Class.Methods),t.superclass=n,t.subclasses=[],n){var r=function(){};r.prototype=n.prototype,t.prototype=new r,n.subclasses.push(t)}for(var i=0;i<e.length;i++)t.addMethods(e[i]);return t.prototype.initialize||(t.prototype.initialize=this.emptyFunction),t.prototype.constructor=t,t},emptyFunction:function(){}};Class.Methods={addMethods:function(t){var n=this.superclass&&this.superclass.prototype,e=Object.keys(t);Object.keys({toString:!0}).length||e.push("toString","valueOf");for(var r=0,i=e.length;i>r;r++){var o=e[r],u=t[o];if(n&&Object.isFunction(u)&&"$super"==u.argumentNames().first())var s=u,u=Object.extend(function(t){return function(){return n[t].apply(this,arguments)}}(o).wrap(s),{valueOf:function(){return s},toString:function(){return s.toString()}});this.prototype[o]=u}return this}},Object.extend=function(t,n){for(var e in n)t[e]=n[e];return t},Object.extend(Object,{inspect:function(t){try{return Object.isUndefined(t)?"undefined":null===t?"null":t.inspect?t.inspect():String(t)}catch(n){if(n instanceof RangeError)return"...";throw n}},toJSON:function(t){var n=typeof t;switch(n){case"undefined":case"function":case"unknown":return;case"boolean":return t.toString()}if(null===t)return"null";if(t.toJSON)return t.toJSON();if(!Object.isElement(t)){var e=[];for(var r in t){var i=Object.toJSON(t[r]);Object.isUndefined(i)||e.push(r.toJSON()+": "+i)}return"{"+e.join(", ")+"}"}},toQueryString:function(t){return $H(t).toQueryString()},toHTML:function(t){return t&&t.toHTML?t.toHTML():String.interpret(t)},keys:function(t){var n=[];for(var e in t)n.push(e);return n},values:function(t){var n=[];for(var e in t)n.push(t[e]);return n},clone:function(t){return Object.extend({},t)},isElement:function(t){return t&&1==t.nodeType},isArray:function(t){return null!=t&&"object"==typeof t&&"splice"in t&&"join"in t},isHash:function(t){return t instanceof Hash},isFunction:function(t){return"function"==typeof t},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isUndefined:function(t){return"undefined"==typeof t}}),(WebKit=navigator.userAgent.indexOf("AppleWebKit/")>-1)&&($A=function(t){if(!t)return[];if((!Object.isFunction(t)||"[object NodeList]"!=t)&&t.toArray)return t.toArray();for(var n=t.length||0,e=new Array(n);n--;)e[n]=t[n];return e});