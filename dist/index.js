!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-grid"]=e():t["vue-grid"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=16)}([function(t,e,r){"use strict";e.__esModule=!0;var n=r(17),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,r){return e in t?(0,o.default)(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){t.exports=!r(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";e.a={props:{gutterVertical:[Boolean,String],marginBottom:[Boolean,String],marginTop:[Boolean,String],supportedGutterTypes:{type:Array,default:function(){return["gutterVertical","marginBottom","marginTop"]}}},methods:{kebabToCamel:function(t){if(t&&"string"==typeof t){var e=t.split("-"),r="";return e.forEach(function(t){r+=t.charAt(0).toUpperCase()+t.slice(1)}),r}},getGutter:function(t){var e=this[t],r=e&&this.kebabToCamel(e);return{className:this.$style[""+t+r],enabled:""===e||e,formattedName:r,type:t}}},computed:{gutters:function(){var t=this,e={};return this.supportedGutterTypes.forEach(function(r){var n=t.getGutter(r);n.className&&n.enabled&&(e[n.className]=n.enabled)}),e}}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e,r,n){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),n){var s=Object.create(u.computed||null);Object.keys(n).forEach(function(t){var e=n[t];s[t]=function(){return e}}),u.computed=s}return{esModule:o,exports:i,options:u}}},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(20),o=r(25),i=r(27),a=Object.defineProperty;e.f=r(1)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a={namespaced:!0,state:{width:window.innerWidth,height:window.innerHeight,breakpoints:[{name:"xs",size:0,matches:!1},{name:"sm",size:544,matches:!1},{name:"md",size:768,matches:!1},{name:"lg",size:1280,matches:!1},{name:"xl",size:1920,matches:!1}]},mutations:o()({},"SET_VIEWPORT_SIZE",function(t,e){t.width=e.width,t.height=e.height,t.breakpoints.forEach(function(e,r){var n=t.breakpoints.length>r+1,o=n?r+1:r,i=t.breakpoints[o].size-(n?1:0),a=void 0;a=n?"(min-width: "+e.size+"px) and (max-width: "+i+"px)":"(min-width: "+i+"px)",e.matches=window.matchMedia(a).matches})}),actions:{setViewport:function(t,e){t.state;(0,t.commit)("SET_VIEWPORT_SIZE",e)}},getters:{width:function(t){return t.width},height:function(t){return t.height},breakpoints:function(t){return t.breakpoints},breakpoint:function(t){return t.breakpoints.find(function(t){return t.matches})||{}}}}},function(t,e,r){var n={};n.$style=r(31),n.column=r(34);var o=r(4)(r(13),r(37),null,n);t.exports=o.exports},function(t,e,r){var n={};n.$style=r(30),n.container=r(33);var o=r(4)(r(14),r(36),null,n);t.exports=o.exports},function(t,e,r){var n={};n.$style=r(29),n.row=r(32);var o=r(4)(r(15),r(35),null,n);t.exports=o.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r.n(n),i=r(2);e.default={mixins:[i.a],props:{columns:{type:Number,default:12},size:Number,sizes:{type:Object,default:function(){return{}}},offset:Number,gutterless:Boolean,fit:Boolean,odd:Boolean},methods:{getColumnSize:function(t){return t/this.columns*100+"%"}},computed:{style:function(){return{maxWidth:this.percentageSize,flex:this.percentageSize&&"0 0 "+this.percentageSize,marginLeft:this.percentageOffset}},percentageSize:function(){if(this.breakpointSize||this.size)return this.getColumnSize(this.breakpointSize||this.size)},percentageOffset:function(){if(this.offset&&(!this.breakpoint||"xs"!==this.breakpoint.name))return this.getColumnSize(this.offset)},classes:function(){var t;return t={},o()(t,this.$style.column,!0),o()(t,this.column.common,this.size||this.fit),o()(t,this.column.fluid,!this.size&&!this.fit),o()(t,this.$style.gutterHorisontalNone,this.gutterless),t},breakpoint:function(){return this.$store&&this.$store.getters["breakpoints/breakpoint"]},breakpoints:function(){return this.$store&&this.$store.getters["breakpoints/breakpoints"]},columnBreakpoints:function(){var t=this;if(this.breakpoints)return this.breakpoints.filter(function(e){return t.sizes[e.name]})},breakpointSize:function(){var t=this;if(this.columnBreakpoints){var e=this.columnBreakpoints.find(function(e){return e.name===t.breakpoint.name});if(e)return this.sizes[e.name];for(var r=0;r<this.columnBreakpoints.length;r++){var n=this.columnBreakpoints[r];if(this.breakpoint.size<n.size)return this.sizes[n.name]}}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r.n(n),i=r(2);e.default={mixins:[i.a],props:{fluid:{type:Boolean,default:!1}},computed:{classes:function(){var t;return t={},o()(t,this.$style.container,!0),o()(t,this.container.maxWidth,!this.fluid),t}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r.n(n),i=r(2);e.default={name:"row",mixins:[i.a],props:{justify:String,vertical:Boolean,gutterless:Boolean},computed:{classes:function(){var t;return t={},o()(t,this.$style.row,!0),o()(t,this.row.common,!0),o()(t,this.row.vertical,this.vertical),o()(t,this.$style.marginHorisontalNone,this.gutterless),o()(t,this.row["justify-"+this.justify],this.justify),t}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),o=r.n(n),i=r(12),a=r.n(i),u=r(10),s=r.n(u),c=r(9);r.d(e,"breakpoints",function(){return c.a}),e.default={Container:o.a,Row:a.a,Column:s.a}},function(t,e,r){t.exports={default:r(18),__esModule:!0}},function(t,e,r){r(28);var n=r(5).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(3);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(19);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(3),o=r(7).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(7),o=r(5),i=r(21),a=r(24),u=function(t,e,r){var s,c,l,f=t&u.F,g=t&u.G,m=t&u.S,p=t&u.P,d=t&u.B,h=t&u.W,v=g?o:o[e]||(o[e]={}),b=v.prototype,y=g?n:m?n[e]:(n[e]||{}).prototype;g&&(r=e);for(s in r)(c=!f&&y&&void 0!==y[s])&&s in v||(l=c?y[s]:r[s],v[s]=g&&"function"!=typeof y[s]?r[s]:d&&c?i(l,n):h&&y[s]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):p&&"function"==typeof l?i(Function.call,l):l,p&&((v.virtual||(v.virtual={}))[s]=l,t&u.R&&b&&!b[s]&&a(b,s,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,r){var n=r(8),o=r(26);t.exports=r(1)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){t.exports=!r(1)&&!r(6)(function(){return 7!=Object.defineProperty(r(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(3);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(23);n(n.S+n.F*!r(1),"Object",{defineProperty:r(8).f})},function(t,e){t.exports={container:"container-1-VIOZeL",row:"row-33SsFfxv",column:"column--1WoBcWR",gutterHorisontal:"gutterHorisontal-21r4Y67E",gutterHorisontalSmall:"gutterHorisontalSmall-17yGTvm8",gutterHorisontalLarge:"gutterHorisontalLarge-1eXngiDm",gutterHorisontalXLarge:"gutterHorisontalXLarge-3P7ckdBc",gutterVertical:"gutterVertical-Icjf6vii",gutterVerticalSmall:"gutterVerticalSmall-1LTSvmb9",gutterVerticalLarge:"gutterVerticalLarge-2hV5i2B_",gutterVerticalXLarge:"gutterVerticalXLarge-3k5w49Y5",gutterHorisontalNone:"gutterHorisontalNone-3gJ2GHZB",gutterVerticalNone:"gutterVerticalNone-2G94od8R",marginBottom:"marginBottom-1CC6l2Wk",marginBottomSmall:"marginBottomSmall-2Tu1VOrS",marginBottomLarge:"marginBottomLarge-rmz5HbaP",marginBottomXLarge:"marginBottomXLarge-EbgIFzp7",marginTop:"marginTop-1pRbb_nD",marginTopSmall:"marginTopSmall-ut2_M4r2",marginTopLarge:"marginTopLarge-3Xb8Qb8M",marginTopXLarge:"marginTopXLarge-1nwvznyv",marginHorisontalNone:"marginHorisontalNone-27-dMszR"}},function(t,e){t.exports={container:"container-1-VIOZeL",row:"row-33SsFfxv",column:"column--1WoBcWR",gutterHorisontal:"gutterHorisontal-21r4Y67E",gutterHorisontalSmall:"gutterHorisontalSmall-17yGTvm8",gutterHorisontalLarge:"gutterHorisontalLarge-1eXngiDm",gutterHorisontalXLarge:"gutterHorisontalXLarge-3P7ckdBc",gutterVertical:"gutterVertical-Icjf6vii",gutterVerticalSmall:"gutterVerticalSmall-1LTSvmb9",gutterVerticalLarge:"gutterVerticalLarge-2hV5i2B_",gutterVerticalXLarge:"gutterVerticalXLarge-3k5w49Y5",gutterHorisontalNone:"gutterHorisontalNone-3gJ2GHZB",gutterVerticalNone:"gutterVerticalNone-2G94od8R",marginBottom:"marginBottom-1CC6l2Wk",marginBottomSmall:"marginBottomSmall-2Tu1VOrS",marginBottomLarge:"marginBottomLarge-rmz5HbaP",marginBottomXLarge:"marginBottomXLarge-EbgIFzp7",marginTop:"marginTop-1pRbb_nD",marginTopSmall:"marginTopSmall-ut2_M4r2",marginTopLarge:"marginTopLarge-3Xb8Qb8M",marginTopXLarge:"marginTopXLarge-1nwvznyv",marginHorisontalNone:"marginHorisontalNone-27-dMszR"}},function(t,e){t.exports={container:"container-1-VIOZeL",row:"row-33SsFfxv",column:"column--1WoBcWR",gutterHorisontal:"gutterHorisontal-21r4Y67E",gutterHorisontalSmall:"gutterHorisontalSmall-17yGTvm8",gutterHorisontalLarge:"gutterHorisontalLarge-1eXngiDm",gutterHorisontalXLarge:"gutterHorisontalXLarge-3P7ckdBc",gutterVertical:"gutterVertical-Icjf6vii",gutterVerticalSmall:"gutterVerticalSmall-1LTSvmb9",gutterVerticalLarge:"gutterVerticalLarge-2hV5i2B_",gutterVerticalXLarge:"gutterVerticalXLarge-3k5w49Y5",gutterHorisontalNone:"gutterHorisontalNone-3gJ2GHZB",gutterVerticalNone:"gutterVerticalNone-2G94od8R",marginBottom:"marginBottom-1CC6l2Wk",marginBottomSmall:"marginBottomSmall-2Tu1VOrS",marginBottomLarge:"marginBottomLarge-rmz5HbaP",marginBottomXLarge:"marginBottomXLarge-EbgIFzp7",marginTop:"marginTop-1pRbb_nD",marginTopSmall:"marginTopSmall-ut2_M4r2",marginTopLarge:"marginTopLarge-3Xb8Qb8M",marginTopXLarge:"marginTopXLarge-1nwvznyv",marginHorisontalNone:"marginHorisontalNone-27-dMszR"}},function(t,e){t.exports={common:"common-VGDmpw1b_1",gutterless:"gutterless-2AsBJ0XK_1",vertical:"vertical-1tmBHH5y_1","justify-end":"justify-end-3OdHQ_7B_1",justifyEnd:"justify-end-3OdHQ_7B_1","justify-center":"justify-center-18bgjZMT_1",justifyCenter:"justify-center-18bgjZMT_1","justify-space-between":"justify-space-between-3z0DBQlg_1",justifySpaceBetween:"justify-space-between-3z0DBQlg_1"}},function(t,e){t.exports={maxWidth:"maxWidth-1_pJILAG_1"}},function(t,e){t.exports={common:"common-U8BOAT8d_1",fluid:"fluid-3SUa58Yg_1"}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.classes,t.gutters]},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.classes,t.gutters]},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.classes,t.gutters],style:t.style},[t._t("default")],2)},staticRenderFns:[]}}])});