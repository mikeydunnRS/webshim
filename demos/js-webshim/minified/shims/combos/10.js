(function(){var b=Function.prototype.call,a=Object.prototype,h=Array.prototype.slice,i,j;if(!Function.prototype.bind)Function.prototype.bind=function(b){var d=this;if("function"!=typeof d)throw new TypeError;var a=h.call(arguments,1),n=function(){if(this instanceof n){var c=function(){};c.prototype=d.prototype;var c=new c,j=d.apply(c,a.concat(h.call(arguments)));return null!==j&&Object(j)===j?j:c}return d.apply(b,a.concat(h.call(arguments)))};return n};j=b.bind(a.toString);i=b.bind(a.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(b){return"[object Array]"==j(b)};if(!Array.prototype.forEach)Array.prototype.forEach=function(b,d){var c=s(this),a=0,o=c.length>>>0;if("[object Function]"!=j(b))throw new TypeError;for(;a<o;)a in c&&b.call(d,c[a],a,c),a++};if(!Array.prototype.map)Array.prototype.map=function(b,d){var c=s(this),a=c.length>>>0,o=Array(a);if("[object Function]"!=j(b))throw new TypeError;for(var g=0;g<a;g++)g in c&&(o[g]=b.call(d,c[g],g,c));return o};if(!Array.prototype.filter)Array.prototype.filter=
function(b,c){var d=s(this),a=d.length>>>0,g=[];if("[object Function]"!=j(b))throw new TypeError;for(var m=0;m<a;m++)m in d&&b.call(c,d[m],m,d)&&g.push(d[m]);return g};if(!Array.prototype.every)Array.prototype.every=function(b,d){var c=s(this),a=c.length>>>0;if("[object Function]"!=j(b))throw new TypeError;for(var g=0;g<a;g++)if(g in c&&!b.call(d,c[g],g,c))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(b,c){var d=s(this),a=d.length>>>0;if("[object Function]"!=j(b))throw new TypeError;
for(var g=0;g<a;g++)if(g in d&&b.call(c,d[g],g,d))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(b){var d=s(this),c=d.length>>>0;if("[object Function]"!=j(b))throw new TypeError;if(!c&&1==arguments.length)throw new TypeError;var a=0,g;if(2<=arguments.length)g=arguments[1];else{do{if(a in d){g=d[a++];break}if(++a>=c)throw new TypeError;}while(1)}for(;a<c;a++)a in d&&(g=b.call(void 0,g,d[a],a,d));return g};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(b){var d=
s(this),c=d.length>>>0;if("[object Function]"!=j(b))throw new TypeError;if(!c&&1==arguments.length)throw new TypeError;var a,c=c-1;if(2<=arguments.length)a=arguments[1];else{do{if(c in d){a=d[c--];break}if(0>--c)throw new TypeError;}while(1)}do c in this&&(a=b.call(void 0,a,d[c],c,d));while(c--);return a};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(b){var d=s(this),c=d.length>>>0;if(!c)return-1;var a=0;1<arguments.length&&(a=t(arguments[1]));for(a=0<=a?a:c-Math.abs(a);a<c;a++)if(a in
d&&d[a]===b)return a;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(b){var d=s(this),a=d.length>>>0;if(!a)return-1;var c=a-1;1<arguments.length&&(c=t(arguments[1]));for(c=0<=c?c:a-Math.abs(c);0<=c;c--)if(c in d&&b===d[c])return c;return-1};if(!Object.keys){var c=!0,d="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),v=d.length,m;for(m in{toString:null})c=!1;Object.keys=function(b){if("object"!=typeof b&&"function"!=
typeof b||null===b)throw new TypeError("Object.keys called on a non-object");var a=[],j;for(j in b)i(b,j)&&a.push(j);if(c)for(j=0;j<v;j++){var g=d[j];i(b,g)&&a.push(g)}return a}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var b,c,a;if(!isFinite(this))throw new RangeError;b=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(c=b.length;c--;)a=b[c],10>a&&(b[c]="0"+a);return b.slice(0,3).join("-")+"T"+
b.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};b="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";if(!String.prototype.trim||b.trim()){var b="["+b+"]",q=RegExp("^"+b+b+"*"),g=
RegExp(b+b+"*$");String.prototype.trim=function(){return(""+this).replace(q,"").replace(g,"")}}var t=function(b){b=+b;b!==b?b=-1:0!==b&&b!==1/0&&b!==-(1/0)&&(b=(0<b||-1)*Math.floor(Math.abs(b)));return b},x="a"!="a"[0],s=function(b){if(null==b)throw new TypeError;return x&&"string"==typeof b&&b?b.split(""):Object(b)}})();
(function(b,a){var h=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);h&&!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var b=document.createElement("foo");Object.defineProperty(b,"bar",{get:function(){return!0}});h=!!b.bar}catch(c){h=!1}b=null}();Modernizr.objectAccessor=!(!(h||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||b.browser.opera&&!(11<=a.browserVersion));Modernizr.advancedObjectProperties=h;
if(!h||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var i=Function.prototype.call.bind(Object.prototype.hasOwnProperty);a.objectCreate=function(b,c,d,i){var m;m=function(){};m.prototype=b;m=new m;if(!i&&!("__proto__"in m)&&!Modernizr.objectAccessor)m.__proto__=b;c&&a.defineProperties(m,c);if(d)m.options=jQuery.extend(!0,{},m.options||{},d),d=m.options;m._create&&jQuery.isFunction(m._create)&&m._create(d);return m};a.defineProperties=function(b,
c){for(var d in c)i(c,d)&&a.defineProperty(b,d,c[d]);return b};a.defineProperty=function(b,c,a){if("object"!=typeof a||null===a)return b;if(i(a,"value"))return b[c]=a.value,b;b.__defineGetter__&&("function"==typeof a.get&&b.__defineGetter__(c,a.get),"function"==typeof a.set&&b.__defineSetter__(c,a.set));return b};a.getPrototypeOf=function(b){return Object.getPrototypeOf&&Object.getPrototypeOf(b)||b.__proto__||b.constructor&&b.constructor.prototype};a.getOwnPropertyDescriptor=function(b,a){if("object"!==
typeof b&&"function"!==typeof b||null===b)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var d;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return d=Object.getOwnPropertyDescriptor(b,a)}catch(h){}d={configurable:!0,enumerable:!0,writable:!0,value:void 0};var m=b.__lookupGetter__&&b.__lookupGetter__(a),q=b.__lookupSetter__&&b.__lookupSetter__(a);if(!m&&!q){if(!i(b,a))return;d.value=b[a];return d}delete d.writable;delete d.value;d.get=d.set=void 0;if(m)d.get=
m;if(q)d.set=q;return d}}})(jQuery,jQuery.webshims);(function(b){if(!Modernizr.genericDOM){var a=document,h,i,j=/<([\w:]+)/,c={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};b.webshims.fixHTML5=function(b){if("string"!=typeof b||c[(j.exec(b)||["",""])[1].toLowerCase()])return b;if(!i){h=a.body;if(!h)return b;i=a.createElement("div");i.style.display="none"}var v=i.cloneNode(!1);h.appendChild(v);v.innerHTML=b;h.removeChild(v);return v.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(b,a,h,i,j){var c=a.modules,d=/\s*,\s*/,v={},m={},q={},g={},t={},x=b.fn.val,s=function(a,k,c,e,l){return l?x.call(b(a)):x.call(b(a),c)};b.fn.val=function(a){var k=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!k||1!==k.nodeType?x.call(this):b.prop(k,"value",a,"val",!0);if(b.isArray(a))return x.apply(this,arguments);var c=b.isFunction(a);return this.each(function(e){k=this;1===k.nodeType&&(c?(e=a.call(k,e,b.prop(k,"value",j,"val",
!0)),null==e&&(e=""),b.prop(k,"value",e,"val")):b.prop(k,"value",a,"val"))})};var u="_webshimsLib"+Math.round(1E3*Math.random()),p=function(a,k,c){a=a.jquery?a[0]:a;if(!a)return c||{};var e=b.data(a,u);c!==j&&(e||(e=b.data(a,u,{})),k&&(e[k]=c));return k?e&&e[k]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){b.fn[a.name]=function(){return this.map(function(){var b=p(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){v[c]=b[c];b[c]=function(a,f,e,l,d){var r="val"==l,g=!r?v[c]:s;if(!a||!m[f]||1!==a.nodeType||!r&&l&&"attr"==c&&b.attrFn[f])return g(a,f,e,l,d);var C=(a.nodeName||"").toLowerCase(),i=q[C],z="attr"==c&&(!1===e||null===e)?"removeAttr":c,h,n,o;i||(i=q["*"]);i&&(i=i[f]);i&&(h=i[z]);if(h){if("value"==f)n=h.isVal,h.isVal=r;if("removeAttr"===z)return h.value.call(a);if(e===j)return h.get?h.get.call(a):h.value;h.set&&
("attr"==c&&!0===e&&(e=f),o=h.set.call(a,e));if("value"==f)h.isVal=n}else o=g(a,f,e,l,d);if((e!==j||"removeAttr"===z)&&t[C]&&t[C][f]){var p;p="removeAttr"==z?!1:"prop"==z?!!e:!0;t[C][f].forEach(function(b){if(!b.only||(b.only="prop"==c)||"attr"==b.only&&"prop"!=c)b.call(a,e,p,r?"val":z,c)})}return o};g[c]=function(k,f,e){q[k]||(q[k]={});q[k][f]||(q[k][f]={});var l=q[k][f][c],d=function(b,a,l){return a&&a[b]?a[b]:l&&l[b]?l[b]:"prop"==c&&"value"==f?function(b){return e.isVal?s(this,f,b,!1,0===arguments.length):
v[c](this,f,b)}:"prop"==c&&"value"==b&&e.value.apply?function(b){var a=v[c](this,f);a&&a.apply&&(a=a.apply(this,arguments));return a}:function(b){return v[c](this,f,b)}};q[k][f][c]=e;if(e.value===j){if(!e.set)e.set=e.writeable?d("set",e,l):a.cfg.useStrict&&"prop"==f?function(){throw f+" is readonly on "+k;}:b.noop;if(!e.get)e.get=d("get",e,l)}["value","get","set"].forEach(function(b){e[b]&&(e["_sup"+b]=d(b,l))})}});var w=!b.browser.msie||8<parseInt(b.browser.version,10),n=function(){var b=a.getPrototypeOf(i.createElement("foobar")),
c=Object.prototype.hasOwnProperty;return function(f,e,l){var d=i.createElement(f),g=a.getPrototypeOf(d);if(w&&g&&b!==g&&(!d[e]||!c.call(d,e))){var j=d[e];l._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};g[e]=l.value}else l._supvalue=function(){var b=p(this,"propValue");return b&&b[e]&&b[e].apply?b[e].apply(this,arguments):b&&b[e]},o.extendValue(f,e,l.value);l.value._supvalue=l._supvalue}}(),o=function(){var c={};a.addReady(function(e,k){var d={},f=function(a){d[a]||(d[a]=b(e.getElementsByTagName(a)),
k[0]&&b.nodeName(k[0],a)&&(d[a]=d[a].add(k)))};b.each(c,function(b,e){f(b);!e||!e.forEach?a.warn("Error: with "+b+"-property. methods: "+e):e.forEach(function(a){d[b].each(a)})});d=null});var k,d=b([]),e=function(a,e){c[a]?c[a].push(e):c[a]=[e];b.isDOMReady&&(k||b(i.getElementsByTagName(a))).each(e)};return{createTmpCache:function(a){b.isDOMReady&&(k=k||b(i.getElementsByTagName(a)));return k||d},flushTmpCache:function(){k=null},content:function(a,c){e(a,function(){var a=b.attr(this,c);null!=a&&b.attr(this,
c,a)})},createElement:function(b,a){e(b,a)},extendValue:function(a,c,d){e(a,function(){b(this).each(function(){p(this,"propValue",{})[c]=this[c];this[c]=d})})}}}(),y=function(b,a){if(b.defaultValue===j)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};b.extend(a,{getID:function(){var a=(new Date).getTime();return function(c){var c=b(c),d=c.attr("id");d||(a++,d="ID-"+a,c.attr("id",d));return d}}(),extendUNDEFProp:function(a,
c){b.each(c,function(b,e){b in a||(a[b]=e)})},createPropDefault:y,data:p,moveToFirstEvent:function(){var a=b._data?"_data":"data";return function(c,d,e){if((c=(b[a](c,"events")||{})[d])&&1<c.length)d=c.pop(),e||(e="bind"),"bind"==e&&c.delegateCount?c.splice(c.delegateCount,0,d):c.unshift(d)}}(),addShadowDom:function(a,c,d){d=d||{};a.jquery&&(a=a[0]);c.jquery&&(c=c[0]);if(!d.shadowFocusElement)d.shadowFocusElement=c;var e=b.data(a,u)||b.data(a,u,{}),l=b.data(c,u)||b.data(c,u,{});e.hasShadow=c;l.nativeElement=
a;l.shadowData=e.shadowData={nativeElement:a,shadowElement:c,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){p(this,"shadowData",l.shadowData)});if(d.data)e.shadowData.data=d.data,l.shadowData.data=d.data;d=null},propTypes:{standard:function(b){y(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){y(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(c,k){"string"==typeof k&&(k=k.split(d));k.forEach(function(d){a.defineNodeNamesProperty(c,d,{prop:{set:function(a){b.attr(this,d,a)},get:function(){return b.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,f){m[d]=!0;if(f.reflect)a.propTypes[f.propType||"standard"](f);["prop","attr","removeAttr"].forEach(function(e){var l=f[e];l&&(l="prop"===e?b.extend({writeable:!0},l):b.extend({},
l,{writeable:!0}),g[e](c,d,l),"*"!=c&&a.cfg.extendNative&&"prop"==e&&l.value&&b.isFunction(l.value)&&n(c,d,l),f[e]=l)});f.initAttr&&o.content(c,d);return f},defineNodeNameProperties:function(b,c,d,e){for(var l in c)!e&&c[l].initAttr&&o.createTmpCache(b),d&&(c[l][d]?a.log("override: "+b+"["+l+"] for "+d):(c[l][d]={},["value","set","get"].forEach(function(b){b in c[l]&&(c[l][d][b]=c[l][b],delete c[l][b])}))),c[l]=a.defineNodeNameProperty(b,l,c[l]);e||o.flushTmpCache();return c},createElement:function(c,
d,f){var e;b.isFunction(d)&&(d={after:d});o.createTmpCache(c);d.before&&o.createElement(c,d.before);f&&(e=a.defineNodeNameProperties(c,f,!1,!0));d.after&&o.createElement(c,d.after);o.flushTmpCache();return e},onNodeNamesPropertyModify:function(a,c,f,e){"string"==typeof a&&(a=a.split(d));b.isFunction(f)&&(f={set:f});a.forEach(function(b){t[b]||(t[b]={});"string"==typeof c&&(c=c.split(d));f.initAttr&&o.createTmpCache(b);c.forEach(function(a){t[b][a]||(t[b][a]=[],m[a]=!0);if(f.set){if(e)f.set.only=e;
t[b][a].push(f.set)}f.initAttr&&o.content(b,a)});o.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={});if(b.isFunction(f))f.set=f;a.defineNodeNamesProperty(c,d,{attr:{set:function(b){this.setAttribute(d,b);f.set&&f.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?j:d}},removeAttr:{value:function(){this.removeAttribute(d);f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===
j)return c=(b.attributes[a]||{}).value,null==c?j:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var d=[],g={},f,e,l=/:\/\/|^\.*\//,j=function(c,d,e){return d&&e&&-1!==b.inArray(d,e.availabeLangs||[])?(c.loading=!0,e=e.langSrc,l.test(e)||(e=a.cfg.basePath+e),a.loader.loadScript(e+d+".js",function(){c.langObj[d]?(c.loading=!1,i(c,!0)):b(function(){c.langObj[d]&&i(c,!0);c.loading=!1})}),!0):!1},r=function(b){g[b]&&g[b].forEach(function(b){b.callback()})},
i=function(b,a){if(b.activeLang!=f&&b.activeLang!==e){var d=c[b.module].options;if(b.langObj[f]||e&&b.langObj[e])b.activeLang=f,b.callback(b.langObj[f]||b.langObj[e],f),r(b.module);else if(!a&&!j(b,f,d)&&!j(b,e,d)&&b.langObj[""]&&""!==b.activeLang)b.activeLang="",b.callback(b.langObj[""],f),r(b.module)}};return function(a){if("string"==typeof a&&a!==f)f=a,e=f.split("-")[0],f==e&&(e=!1),b.each(d,function(b,a){i(a)});else if("object"==typeof a)if(a.register)g[a.register]||(g[a.register]=[]),g[a.register].push(a),
a.callback();else{if(!a.activeLang)a.activeLang="";d.push(a);i(a)}return f}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,c){a[b]=function(b,e,l,g){"string"==typeof b&&(b=b.split(d));var r={};b.forEach(function(b){r[b]=a[c](b,e,l,g)});return r}});a.isReady("webshimLocalization",!0)});
(function(b,a){var h=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<h)&&(!b.browser.msie||12>h&&7<h)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},j=function(b,a){b.getAttribute("role")||b.setAttribute("role",a)};b.webshims.addReady(function(c,d){b.each(i,function(a,h){for(var i=b(a,c).add(d.filter(a)),m=0,q=i.length;m<q;m++)j(i[m],h)});if(c===a){var h=a.getElementsByTagName("header")[0],m=a.getElementsByTagName("footer"),q=m.length;
h&&!b(h).closest("section, article")[0]&&j(h,"banner");q&&(h=m[q-1],b(h).closest("section, article")[0]||j(h,"contentinfo"))}})}})(jQuery,document);
(function(b,a,h){var i=a.audio&&a.video,j=!1;if(i)b=document.createElement("video"),a.videoBuffered="buffered"in b,j="loop"in b,h.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),a.videoBuffered||(h.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:a.videoBuffered,d:["dom-support"]}),h.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(b,a,h,m,q){var g=a.mediaelement,t=a.cfg.mediaelement,
x=function(a,d){var a=b(a),f={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!f.src)return f;var r=a.attr("type");if(r)f.type=r,f.container=b.trim(r.split(";")[0]);else if(d||(d=a[0].nodeName.toLowerCase(),"source"==d&&(d=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r=g.getTypeForSrc(f.src,d))f.type=r,f.container=r;if(r=a.attr("media"))f.media=r;return f},s=swfobject.hasFlashPlayerVersion("9.0.115"),u=!s&&"postMessage"in h&&i,p=function(){a.ready("mediaelement-swf",
function(){if(!g.createSWF)a.modules["mediaelement-swf"].test=b.noop,a.reTest(["mediaelement-swf"],i)})},w=function(){var b;return function(){!b&&u&&(b=!0,a.loader.loadScript("https://www.youtube.com/player_api"),a.polyfill("mediaelement-yt"))}}(),n=function(){s?p():w()};a.addPolyfill("mediaelement-yt",{test:!u,d:["dom-support"]});g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),
"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=b.extend({},
g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(a,d){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],f;b.each(g.mimeTypes[d],function(b,c){if(-1!==c.indexOf(a))return f=b,!1});return f};g.srces=function(a,d){a=b(a);if(d)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(d)||(d=[d]),d.forEach(function(b){var c=m.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",
b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var d=[],f=a[0].nodeName.toLowerCase(),g=x(a,f);g.src?d.push(g):b("source",a).each(function(){g=x(this,f);g.src&&d.push(g)});return d}};b.fn.loadMediaSrc=function(a,d){return this.each(function(){d!==q&&(b(this).removeAttr("poster"),d&&b.attr(this,"poster",d));g.srces(this,a);b(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canThirdPlaySrces=function(a,d){var f="";if(s||u)a=b(a),d=d||g.srces(a),b.each(d,function(b,a){if(a.container&&a.src&&(s&&-1!=g.swfMimeTypes.indexOf(a.container)||u&&"video/youtube"==a.container))return f=a,!1});return f};var o={};g.canNativePlaySrces=function(a,d){var f="";if(i){var a=b(a),h=(a[0].nodeName||"").toLowerCase();if(!o[h])return f;d=d||g.srces(a);b.each(d,function(b,c){if(c.type&&o[h].prop._supvalue.call(a[0],c.type))return f=c,!1})}return f};g.setError=function(e,f){f||(f="can't play sources");
b(e).pause().data("mediaerror",f);a.warn("mediaelementError: "+f);setTimeout(function(){b(e).data("mediaerror")&&b(e).trigger("mediaerror")},1)};var y=function(){var b;return function(c,f,h){a.ready(s?"mediaelement-swf":"mediaelement-yt",function(){g.createSWF?g.createSWF(c,f,h):b||(b=!0,n(),y(c,f,h))});!b&&u&&!g.createSWF&&w()}}(),A=function(b,a,c,d,f){c||!1!==c&&a&&"third"==a.isActive?(c=g.canThirdPlaySrces(b,d))?y(b,c,a):f?g.setError(b,!1):A(b,a,!1,d,!0):(c=g.canNativePlaySrces(b,d))?a&&"third"==
a.isActive&&g.setActive(b,"html5",a):f?(g.setError(b,!1),a&&"third"==a.isActive&&g.setActive(b,"html5",a)):A(b,a,!0,d,!0)},k=/^(?:embed|object|datalist)$/i,f=function(e,f){var h=a.data(e,"mediaelementBase")||a.data(e,"mediaelementBase",{}),j=g.srces(e),i=e.parentNode;clearTimeout(h.loadTimer);b.data(e,"mediaerror",!1);if(j.length&&i&&!(1!=i.nodeType||k.test(i.nodeName||"")))f=f||a.data(e,"mediaelement"),A(e,f,t.preferFlash||q,j)};b(m).bind("ended",function(e){var f=a.data(e.target,"mediaelement");
(!j||f&&"html5"!=f.isActive||b.prop(e.target,"loop"))&&setTimeout(function(){!b.prop(e.target,"paused")&&b.prop(e.target,"loop")&&b(e.target).prop("currentTime",0).play()},1)});j||a.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(e){var h=a.defineNodeNameProperty(e,"load",{prop:{value:function(){var b=a.data(this,"mediaelement");f(this,b);i&&(!b||"html5"==b.isActive)&&h.prop._supvalue&&h.prop._supvalue.apply(this,arguments)}}});o[e]=a.defineNodeNameProperty(e,
"canPlayType",{prop:{value:function(a){var d="";i&&o[e].prop._supvalue&&(d=o[e].prop._supvalue.call(this,a),"no"==d&&(d=""));!d&&s&&(a=b.trim((a||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(a)&&(d="maybe"));return d}}})});a.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,c=a.data(b,"mediaelementBase")||a.data(b,"mediaelementBase",{});clearTimeout(c.loadTimer);c.loadTimer=setTimeout(function(){f(b);b=null},9)}});h=function(){a.addReady(function(e,g){b("video, audio",
e).add(g.filter("video, audio")).each(function(){b.browser.msie&&8<a.browserVersion&&b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():f(this);if(i){var e,g,h=this,j=function(){var a=b.prop(h,"buffered");if(a){for(var d="",e=0,f=a.length;e<f;e++)d+=a.end(e);return d}},l=function(){var a=j();a!=g&&(g=a,b(h).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==
b.type&&(g=j());clearTimeout(e);e=setTimeout(l,999)}).bind("emptied stalled mediaerror abort suspend",function(b){"emptied"==b.type&&(g=!1);clearTimeout(e)})}})})};i?(a.isReady("mediaelement-core",!0),h(),a.ready("WINDOWLOAD mediaelement",n)):a.ready("mediaelement-swf",h)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,a,h,i,j,c){var d=a.mediaelement,v=h.swfobject,m=Modernizr.audio&&Modernizr.video,q=v.hasFlashPlayerVersion("9.0.115"),g=0,h={paused:!0,ended:!1,currentSrc:"",duration:h.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)a.error("buffered index size error");else return 0},end:function(b){if(b)a.error("buffered index size error");else return 0},length:0}},t=Object.keys(h),x={currentTime:0,volume:1,
muted:!1};Object.keys(x);var s=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:j},h,x),u=/^jwplayer-/,p=function(b){if(b=i.getElementById(b.replace(u,"")))return b=a.data(b,"mediaelement"),"third"==b.isActive?b:null},w=function(b){return(b=a.data(b,"mediaelement"))&&"third"==b.isActive?b:null},n=function(a,c){c=b.Event(c);c.preventDefault();b.event.trigger(c,j,a)},o=c.playerPath||a.cfg.basePath+
"jwplayer/"+(c.playerName||"player.swf"),y=c.pluginPath||a.cfg.basePath+"swf/jwwebshims.swf";a.extendUNDEFProp(c.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});a.extendUNDEFProp(c.jwVars,{screencolor:"ffffffff"});a.extendUNDEFProp(c.jwAttrs,{bgcolor:"#000000"});var A=function(a,c){var e=a.duration;if(!(e&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=e}catch(f){}a.duration&&
a.duration!=a._lastDuration?(n(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&d.jwEvents.Model.META(b.extend({duration:a.duration},c),a),a._durationCalcs--):a._durationCalcs++}},k=function(b,a){3>b&&clearTimeout(a._canplaythroughTimer);if(3<=b&&3>a.readyState)a.readyState=b,n(a._elem,"canplay"),clearTimeout(a._canplaythroughTimer),a._canplaythroughTimer=setTimeout(function(){k(4,a)},4E3);if(4<=b&&4>a.readyState)a.readyState=b,n(a._elem,"canplaythrough");a.readyState=b};d.jwEvents=
{View:{PLAY:function(b){var a=p(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;n(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(a){var c=p(a.id);if(c&&"percentage"in a&&c._bufferedEnd!=a.percentage){c.networkState=100==a.percentage?1:2;(isNaN(c.duration)||5<a.percentage&&25>a.percentage||100===a.percentage)&&A(c,a);if(c.ended)c.ended=!1;if(c.duration){2<a.percentage&&20>a.percentage?k(3,c):20<a.percentage&&k(4,c);if(c._bufferedEnd&&
c._bufferedEnd>a.percentage)c._bufferedStart=c.currentTime||0;c._bufferedEnd=a.percentage;c.buffered.length=1;if(100==a.percentage)c.networkState=1,k(4,c);b.event.trigger("progress",j,c._elem,!0)}}},META:function(b,a){if(a=a&&a.networkState?a:p(b.id))if("duration"in b){if(!a._metadata||!((!b.height||a.videoHeight==b.height)&&b.duration===a.duration)){a._metadata=!0;var c=a.duration;if(b.duration)a.duration=b.duration;a._lastDuration=a.duration;if(b.height||b.width)a.videoHeight=b.height||0,a.videoWidth=
b.width||0;if(!a.networkState)a.networkState=2;1>a.readyState&&k(1,a);a.duration&&c!==a.duration&&n(a._elem,"durationchange");n(a._elem,"loadedmetadata")}}else a._callMeta=!0},TIME:function(b){var a=p(b.id);if(a&&a.currentTime!==b.position){a.currentTime=b.position;a.duration&&a.duration<a.currentTime&&A(a,b);2>a.readyState&&k(2,a);if(a.ended)a.ended=!1;n(a._elem,"timeupdate")}},STATE:function(b){var a=p(b.id);if(a)switch(b.newstate){case "BUFFERING":if(a.ended)a.ended=!1;k(1,a);n(a._elem,"waiting");
break;case "PLAYING":a.paused=!1;a._ppFlag=!0;a.duration||A(a,b);3>a.readyState&&k(3,a);if(a.ended)a.ended=!1;n(a._elem,"playing");break;case "PAUSED":if(!a.paused&&!a.stopPlayPause)a.paused=!0,a._ppFlag=!0,n(a._elem,"pause");break;case "COMPLETED":4>a.readyState&&k(4,a),a.ended=!0,n(a._elem,"ended")}}},Controller:{ERROR:function(b){var a=p(b.id);a&&d.setError(a._elem,b.message)},SEEK:function(b){var a=p(b.id);if(a){if(a.ended)a.ended=!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(c){}if(a.currentTime!=
b.position)a.currentTime=b.position,n(a._elem,"timeupdate")}},VOLUME:function(b){var a=p(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,n(a._elem,"volumechange")},MUTE:function(b){if(!b.state){var a=p(b.id);if(a&&a.muted!=b.state)a.muted=b.state,n(a._elem,"volumechange")}}}};var f=function(a){var c=!0;b.each(d.jwEvents,function(d,e){b.each(e,function(b){try{a.jwapi["add"+d+"Listener"](b,"jQuery.webshims.mediaelement.jwEvents."+d+"."+b)}catch(e){return c=!1}})});return c},e=function(b){var a=
b.actionQueue.length,c=0,d;if(a&&"third"==b.isActive)for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]},l=function(a){a&&(a._ppFlag===j&&b.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===j||!a.paused))try{b(a._elem).play()}catch(c){}},1)},H=function(a){if(a&&"video"==a._elemNodeName){var c,d,e,f,g,h,j,l,i=function(i,k){if(k&&i&&!(1>k||1>i||"third"!=a.isActive))if(c&&
(c.remove(),c=!1),f=i,g=k,clearTimeout(j),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){h=h||b(a._elem).getShadowElement();var m;d&&!e?(m=h.height(),i*=m/k,k=m):!d&&e&&(m=h.width(),k*=m/i,i=m);l=!0;setTimeout(function(){l=!1},9);h.css({width:i,height:k})}},k=function(){if(!("third"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var f=b.prop(a._elem,"poster");if(f&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),
c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(j);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||a.offsetHeight;e&&d?(i(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;i(d,e);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||
this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(j),j=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){i(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",k).bind("swfstageresize updatemediaelementdimensions",function(){l||i(f,g)}).bind("emptied",function(){f=void 0;g=void 0}).triggerHandler("swfstageresize");k();b.prop(a._elem,"readyState")&&i(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};
d.playerResize=function(a){a&&(a=i.getElementById(a.replace(u,"")))&&b(a).triggerHandler("swfstageresize")};b(i).bind("emptied",function(a){a=w(a.target);l(a)});var r;d.jwPlayerReady=function(c){var d=p(c.id),g=0,h=function(){if(!(9<g))if(g++,f(d)){if(d.wasSwfReady)b(d._elem).mediaLoad();else{var i=parseFloat(c.version,10);(5.6>i||6<=i)&&a.warn("mediaelement-swf is only testet with jwplayer 5.6+")}d.wasSwfReady=!0;d.tryedReframeing=0;e(d);l(d)}else clearTimeout(d.reframeTimer),d.reframeTimer=setTimeout(h,
9*g),2<g&&9>d.tryedReframeing&&(d.tryedReframeing++,d.shadowElem.css({overflow:"visible"}),setTimeout(function(){d.shadowElem.css({overflow:"hidden"})},16))};if(d&&d.jwapi){if(!d.tryedReframeing)d.tryedReframeing=0;clearTimeout(r);d.jwData=c;d.shadowElem.removeClass("flashblocker-assumed");b.prop(d._elem,"volume",d.volume);b.prop(d._elem,"muted",d.muted);h()}};var E=b.noop;if(m){var C={play:1,playing:1},G="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
z=G.map(function(a){return a+".webshimspolyfill"}).join(" "),I=function(c){var d=a.data(c.target,"mediaelement");d&&(c.originalEvent&&c.originalEvent.type===c.type)==("third"==d.activating)&&(c.stopImmediatePropagation(),C[c.type]&&d.isActive!=d.activating&&b(c.target).pause())},E=function(c){b(c).unbind(z).bind(z,I);G.forEach(function(b){a.moveToFirstEvent(c,b)})};E(i)}d.setActive=function(c,d,e){e||(e=a.data(c,"mediaelement"));if(e&&e.isActive!=d){"html5"!=d&&"third"!=d&&a.warn("wrong type for mediaelement activating: "+
d);var f=a.data(c,"shadowData");e.activating=d;b(c).pause();e.isActive=d;"third"==d?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],b(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(b(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);b(c).trigger("mediaelementapichange")}};var J=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),
b=a.length;return function(c){if(c){var d=b,e=c.networkState;for(k(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&n(c._elem,"emptied")}}}(),F=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||b(d).width(),height:d.style.height||b(d).height()})};d.createSWF=function(e,f,h){if(q){1>g?g=1:g++;var i=b.extend({},c.jwVars,{image:b.prop(e,"poster")||"",file:f.srcProp}),
j=b(e).data("jwvars")||{};h||(h=a.data(e,"mediaelement"));if(h&&h.swfCreated)d.setActive(e,"third",h),J(h),h.currentSrc=f.srcProp,b.extend(i,j),c.changeJW(i,e,f,h,"load"),D(e,"sendEvent",["LOAD",i]);else{var k=b.prop(e,"controls"),l="jwplayer-"+a.getID(e),n=b.extend({},c.jwParams,b(e).data("jwparams")),p=e.nodeName.toLowerCase(),u=b.extend({},c.jwAttrs,{name:l,id:l},b(e).data("jwattrs")),t=b('<div class="polyfill-'+p+' polyfill-mediaelement" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({position:"relative",
overflow:"hidden"}),h=a.data(e,"mediaelement",a.objectCreate(s,{actionQueue:{value:[]},shadowElem:{value:t},_elemNodeName:{value:p},_elem:{value:e},currentSrc:{value:f.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(b){if(b>=h.buffered.length)a.error("buffered index size error");else return 0},end:function(b){if(b>=h.buffered.length)a.error("buffered index size error");else return(h.duration-h._bufferedStart)*h._bufferedEnd/100+h._bufferedStart},length:0}}}));F(h,k);t.insertBefore(e);
m&&b.extend(h,{volume:b.prop(e,"volume"),muted:b.prop(e,"muted")});b.extend(i,{id:l,controlbar:k?c.jwVars.controlbar||("video"==p?"over":"bottom"):"video"==p?"none":"bottom",icons:""+(k&&"video"==p)},j,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});i.plugins=i.plugins?i.plugins+(","+y):y;a.addShadowDom(e,t);E(e);d.setActive(e,"third",h);c.changeJW(i,e,f,h,"embed");b(e).bind("updatemediaelementdimensions",function(){F(h,b.prop(e,"controls"))});H(h);v.embedSWF(o,l,"100%","100%","9.0.0",
!1,i,n,u,function(c){if(c.success)h.jwapi=c.ref,k||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&t[0].parentNode||"none"==c.ref.style.display)t.addClass("flashblocker-assumed"),b(e).trigger("flashblocker"),a.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),r||(clearTimeout(r),r=setTimeout(function(){var d=b(c.ref);1<d[0].offsetWidth&&1<d[0].offsetHeight&&0===location.protocol.indexOf("file:")?a.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>d[0].offsetWidth||2>d[0].offsetHeight)&&a.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(e).mediaLoad()},1)};var D=function(a,b,c,d){return(d=d||w(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(c){var d={},e,f=function(a){"audio"==c&&
("videoHeight"==a||"videoWidth"==a)||(d[a]={get:function(){var b=w(this);return b?b[a]:m&&e[a].prop._supget?e[a].prop._supget.apply(this):s[a]},writeable:!1})},g=function(a,b){f(a);delete d[a].writeable;d[a].set=b};g("volume",function(b){var c=w(this);if(c){if(b*=100,!isNaN(b)){var d=c.muted;(0>b||100<b)&&a.error("volume greater or less than allowed "+b/100);D(this,"sendEvent",["VOLUME",b],c);if(d)try{c.jwapi.sendEvent("mute","true")}catch(f){}b/=100;if(!(c.volume==b||"third"!=c.isActive))c.volume=
b,n(c._elem,"volumechange")}}else if(e.volume.prop._supset)return e.volume.prop._supset.apply(this,arguments)});g("muted",function(a){var b=w(this);if(b){if(a=!!a,D(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,n(b._elem,"volumechange")}else if(e.muted.prop._supset)return e.muted.prop._supset.apply(this,arguments)});g("currentTime",function(a){var b=w(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);D(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,n(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(e.currentTime.prop._supset)return e.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){d[a]={value:function(){var b=w(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),D(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,n(b._elem,a)},1);else if(e[a].prop._supvalue)return e[a].prop._supvalue.apply(this,arguments)}}});t.forEach(f);a.onNodeNamesPropertyModify(c,"controls",function(d,e){var f=w(this);b(this)[e?"addClass":"removeClass"]("webshims-controls");if(f){try{D(this,e?"showControls":"hideControls",[c],f)}catch(g){a.warn("you need to generate a crossdomain.xml")}"audio"==c&&F(f,e);b(f.jwapi).attr("tabindex",e?"0":"-1")}});e=a.defineNodeNameProperties(c,d,"prop")});if(q){var K=
b.cleanData,L=b.browser.msie&&9>a.browserVersion,M={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&g)for(b=0;b<c;b++)if(M[a[b].nodeName]){if("sendEvent"in a[b]){g--;try{a[b].sendEvent("play",!1)}catch(e){}}if(L)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return K.apply(this,arguments)}}if(!m){var B=i.createElement("a");B.style.display="none";["poster","src"].forEach(function(c){a.defineNodeNamesProperty("src"==c?["audio","video","source"]:["video"],
c,{prop:{get:function(){var a=this.getAttribute(c),d;if(null==a)return"";B.setAttribute("href",a+"");if(!b.support.hrefNormalized){try{b(B).appendTo(this),d=B.getAttribute("href",4)}catch(e){d=B.getAttribute("href",4)}b(B).detach()}return d||B.href},set:function(a){b.attr(this,c,a)}}})});["autoplay","controls"].forEach(function(b){a.defineNodeNamesBooleanProperty(["audio","video"],b)});a.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},
HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")}});
