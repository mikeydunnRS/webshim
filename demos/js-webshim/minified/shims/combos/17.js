(function(a){if(!Modernizr.genericDOM){var f=document,j,l,m=/<([\w:]+)/,r={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||r[(m.exec(a)||["",""])[1].toLowerCase()])return a;if(!l){j=f.body;if(!j)return a;l=f.createElement("div");l.style.display="none"}var q=l.cloneNode(!1);j.appendChild(q);q.innerHTML=a;j.removeChild(q);return q.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,f,j,l,m){var r=f.modules,g=/\s*,\s*/,q={},p={},o={},h={},s={},v=a.fn.val,t=function(c,e,b,d,k){return k?v.call(a(c)):v.call(a(c),b)};a.fn.val=function(c){var e=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!e||1!==e.nodeType?v.call(this):a.prop(e,"value",c,"val",!0);if(a.isArray(c))return v.apply(this,arguments);var b=a.isFunction(c);return this.each(function(d){e=this;1===e.nodeType&&(b?(d=c.call(e,d,a.prop(e,"value",m,"val",
!0)),null==d&&(d=""),a.prop(e,"value",d,"val")):a.prop(e,"value",c,"val"))})};var u="_webshimsLib"+Math.round(1E3*Math.random()),w=function(c,e,b){c=c.jquery?c[0]:c;if(!c)return b||{};var d=a.data(c,u);b!==m&&(d||(d=a.data(c,u,{})),e&&(d[e]=b));return e?d&&d[e]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){a.fn[c.name]=function(){return this.map(function(){var a=w(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){q[c]=a[c];a[c]=function(e,b,d,k,B){var i="val"==k,n=!i?q[c]:t;if(!e||!p[b]||1!==e.nodeType||!i&&k&&"attr"==c&&a.attrFn[b])return n(e,b,d,k,B);var z=(e.nodeName||"").toLowerCase(),f=o[z],g="attr"==c&&(!1===d||null===d)?"removeAttr":c,h,r,l;f||(f=o["*"]);f&&(f=f[b]);f&&(h=f[g]);if(h){if("value"==b)r=h.isVal,h.isVal=i;if("removeAttr"===g)return h.value.call(e);if(d===m)return h.get?h.get.call(e):h.value;h.set&&
("attr"==c&&!0===d&&(d=b),l=h.set.call(e,d));if("value"==b)h.isVal=r}else l=n(e,b,d,k,B);if((d!==m||"removeAttr"===g)&&s[z]&&s[z][b]){var x;x="removeAttr"==g?!1:"prop"==g?!!d:!0;s[z][b].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(e,d,x,i?"val":g,c)})}return l};h[c]=function(e,b,d){o[e]||(o[e]={});o[e][b]||(o[e][b]={});var k=o[e][b][c],i=function(a,k,e){return k&&k[a]?k[a]:e&&e[a]?e[a]:"prop"==c&&"value"==b?function(a){return d.isVal?t(this,b,a,!1,0===arguments.length):
q[c](this,b,a)}:"prop"==c&&"value"==a&&d.value.apply?function(d){var a=q[c](this,b);a&&a.apply&&(a=a.apply(this,arguments));return a}:function(a){return q[c](this,b,a)}};o[e][b][c]=d;if(d.value===m){if(!d.set)d.set=d.writeable?i("set",d,k):f.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+e;}:a.noop;if(!d.get)d.get=i("get",d,k)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=i(a,k))})}});var y=!a.browser.msie||8<parseInt(a.browser.version,10),i=function(){var a=f.getPrototypeOf(l.createElement("foobar")),
e=Object.prototype.hasOwnProperty;return function(b,d,k){var i=l.createElement(b),A=f.getPrototypeOf(i);if(y&&A&&a!==A&&(!i[d]||!e.call(i,d))){var g=i[d];k._supvalue=function(){return g&&g.apply?g.apply(this,arguments):g};A[d]=k.value}else k._supvalue=function(){var a=w(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},n.extendValue(b,d,k.value);k.value._supvalue=k._supvalue}}(),n=function(){var c={};f.addReady(function(d,e){var b={},i=function(c){b[c]||(b[c]=a(d.getElementsByTagName(c)),
e[0]&&a.nodeName(e[0],c)&&(b[c]=b[c].add(e)))};a.each(c,function(a,d){i(a);!d||!d.forEach?f.warn("Error: with "+a+"-property. methods: "+d):d.forEach(function(d){b[a].each(d)})});b=null});var e,b=a([]),d=function(d,b){c[d]?c[d].push(b):c[d]=[b];a.isDOMReady&&(e||a(l.getElementsByTagName(d))).each(b)};return{createTmpCache:function(d){a.isDOMReady&&(e=e||a(l.getElementsByTagName(d)));return e||b},flushTmpCache:function(){e=null},content:function(c,b){d(c,function(){var d=a.attr(this,b);null!=d&&a.attr(this,
b,d)})},createElement:function(a,c){d(a,c)},extendValue:function(c,b,e){d(c,function(){a(this).each(function(){w(this,"propValue",{})[b]=this[b];this[b]=e})})}}}(),x=function(a,e){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[e||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(f,{getID:function(){var c=(new Date).getTime();return function(e){var e=a(e),b=e.attr("id");b||(c++,b="ID-"+c,e.attr("id",b));return b}}(),extendUNDEFProp:function(c,
e){a.each(e,function(a,d){a in c||(c[a]=d)})},createPropDefault:x,data:w,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(e,b,d){if((e=(a[c](e,"events")||{})[b])&&1<e.length)b=e.pop(),d||(d="bind"),"bind"==d&&e.delegateCount?e.splice(e.delegateCount,0,b):e.unshift(b)}}(),addShadowDom:function(c,e,b){b=b||{};c.jquery&&(c=c[0]);e.jquery&&(e=e[0]);if(!b.shadowFocusElement)b.shadowFocusElement=e;var d=a.data(c,u)||a.data(c,u,{}),k=a.data(e,u)||a.data(e,u,{});d.hasShadow=e;k.nativeElement=
c;k.shadowData=d.shadowData={nativeElement:c,shadowElement:e,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){w(this,"shadowData",k.shadowData)});if(b.data)d.shadowData.data=b.data,k.shadowData.data=b.data;b=null},propTypes:{standard:function(a){x(a);if(!a.prop)a.prop={set:function(e){a.attr.set.call(this,""+e)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){x(a);if(!a.prop)a.prop={set:function(e){e?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(c,e){"string"==typeof e&&(e=e.split(g));e.forEach(function(b){f.defineNodeNamesProperty(c,b,{prop:{set:function(d){a.attr(this,b,d)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,e,b){p[e]=!0;if(b.reflect)f.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(d){var k=b[d];k&&(k="prop"===d?a.extend({writeable:!0},k):a.extend({},
k,{writeable:!0}),h[d](c,e,k),"*"!=c&&f.cfg.extendNative&&"prop"==d&&k.value&&a.isFunction(k.value)&&i(c,e,k),b[d]=k)});b.initAttr&&n.content(c,e);return b},defineNodeNameProperties:function(a,e,b,d){for(var k in e)!d&&e[k].initAttr&&n.createTmpCache(a),b&&(e[k][b]?f.log("override: "+a+"["+k+"] for "+b):(e[k][b]={},["value","set","get"].forEach(function(a){a in e[k]&&(e[k][b][a]=e[k][a],delete e[k][a])}))),e[k]=f.defineNodeNameProperty(a,k,e[k]);d||n.flushTmpCache();return e},createElement:function(c,
e,b){var d;a.isFunction(e)&&(e={after:e});n.createTmpCache(c);e.before&&n.createElement(c,e.before);b&&(d=f.defineNodeNameProperties(c,b,!1,!0));e.after&&n.createElement(c,e.after);n.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,e,b,d){"string"==typeof c&&(c=c.split(g));a.isFunction(b)&&(b={set:b});c.forEach(function(a){s[a]||(s[a]={});"string"==typeof e&&(e=e.split(g));b.initAttr&&n.createTmpCache(a);e.forEach(function(c){s[a][c]||(s[a][c]=[],p[c]=!0);if(b.set){if(d)b.set.only=d;
s[a][c].push(b.set)}b.initAttr&&n.content(a,c)});n.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,e,b){b||(b={});if(a.isFunction(b))b.set=b;f.defineNodeNamesProperty(c,e,{attr:{set:function(a){this.setAttribute(e,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(e)?m:e}},removeAttr:{value:function(){this.removeAttribute(e);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,e,b){if(a.nodeName){if(b===
m)return b=(a.attributes[e]||{}).value,null==b?m:b;"boolean"==typeof b?b?a.setAttribute(e,e):a.removeAttribute(e):a.setAttribute(e,b)}},activeLang:function(){var c=[],e={},b,d,k=/:\/\/|^\.*\//,i=function(d,b,c){return b&&c&&-1!==a.inArray(b,c.availabeLangs||[])?(d.loading=!0,c=c.langSrc,k.test(c)||(c=f.cfg.basePath+c),f.loader.loadScript(c+b+".js",function(){d.langObj[b]?(d.loading=!1,n(d,!0)):a(function(){d.langObj[b]&&n(d,!0);d.loading=!1})}),!0):!1},g=function(a){e[a]&&e[a].forEach(function(a){a.callback()})},
n=function(a,c){if(a.activeLang!=b&&a.activeLang!==d){var e=r[a.module].options;if(a.langObj[b]||d&&a.langObj[d])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[d],b),g(a.module);else if(!c&&!i(a,b,e)&&!i(a,d,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),g(a.module)}};return function(k){if("string"==typeof k&&k!==b)b=k,d=b.split("-")[0],b==d&&(d=!1),a.each(c,function(a,d){n(d)});else if("object"==typeof k)if(k.register)e[k.register]||(e[k.register]=[]),e[k.register].push(k),
k.callback();else{if(!k.activeLang)k.activeLang="";c.push(k);n(k)}return b}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,e){f[a]=function(a,d,c,i){"string"==typeof a&&(a=a.split(g));var n={};a.forEach(function(a){n[a]=f[e](a,d,c,i)});return n}});f.isReady("webshimLocalization",!0)});
(function(a,f){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(a,g){a.getAttribute("role")||a.setAttribute("role",g)};a.webshims.addReady(function(r,g){a.each(l,function(f,s){for(var l=a(f,r).add(g.filter(f)),j=0,p=l.length;j<p;j++)m(l[j],s)});if(r===f){var j=f.getElementsByTagName("header")[0],p=f.getElementsByTagName("footer"),o=p.length;
j&&!a(j).closest("section, article")[0]&&m(j,"banner");o&&(j=p[o-1],a(j).closest("section, article")[0]||m(j,"contentinfo"))}})}})(jQuery,document);
(function(a,f,j){var l=f.audio&&f.video,m=!1;if(l)a=document.createElement("video"),f.videoBuffered="buffered"in a,m="loop"in a,j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,g,f,j,o){var h=g.mediaelement,s=g.cfg.mediaelement,
v=function(d,c){var d=a(d),b={src:d.attr("src")||"",elem:d,srcProp:d.prop("src")};if(!b.src)return b;var e=d.attr("type");if(e)b.type=e,b.container=a.trim(e.split(";")[0]);else if(c||(c=d[0].nodeName.toLowerCase(),"source"==c&&(c=(d.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=h.getTypeForSrc(b.src,c))b.type=e,b.container=e;if(e=d.attr("media"))b.media=e;return b},t=swfobject.hasFlashPlayerVersion("9.0.115"),u=!t&&"postMessage"in f&&l,w=function(){g.ready("mediaelement-swf",
function(){if(!h.createSWF)g.modules["mediaelement-swf"].test=a.noop,g.reTest(["mediaelement-swf"],l)})},y=function(){var a;return function(){!a&&u&&(a=!0,g.loader.loadScript("https://www.youtube.com/player_api"),g.polyfill("mediaelement-yt"))}}(),i=function(){t?w():y()};g.addPolyfill("mediaelement-yt",{test:!u,d:["dom-support"]});h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),
"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=a.extend({},
h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(d,b){if(-1!=d.indexOf("youtube.com/watch?")||-1!=d.indexOf("youtube.com/v/"))return"video/youtube";var d=d.split("?")[0].split("."),d=d[d.length-1],c;a.each(h.mimeTypes[b],function(a,b){if(-1!==b.indexOf(d))return c=a,!1});return c};h.srces=function(d,b){d=a(d);if(b)d.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(b)||(b=[b]),b.forEach(function(a){var b=j.createElement("source");"string"==typeof a&&(a={src:a});b.setAttribute("src",
a.src);a.type&&b.setAttribute("type",a.type);a.media&&b.setAttribute("media",a.media);d.append(b)});else{var b=[],c=d[0].nodeName.toLowerCase(),e=v(d,c);e.src?b.push(e):a("source",d).each(function(){e=v(this,c);e.src&&b.push(e)});return b}};a.fn.loadMediaSrc=function(d,b){return this.each(function(){b!==o&&(a(this).removeAttr("poster"),b&&a.attr(this,"poster",b));h.srces(this,d);a(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canThirdPlaySrces=function(d,b){var c="";if(t||u)d=a(d),b=b||h.srces(d),a.each(b,function(a,d){if(d.container&&d.src&&(t&&-1!=h.swfMimeTypes.indexOf(d.container)||u&&"video/youtube"==d.container))return c=d,!1});return c};var n={};h.canNativePlaySrces=function(d,b){var c="";if(l){var d=a(d),e=(d[0].nodeName||"").toLowerCase();if(!n[e])return c;b=b||h.srces(d);a.each(b,function(a,b){if(b.type&&n[e].prop._supvalue.call(d[0],b.type))return c=b,!1})}return c};h.setError=function(d,b){b||(b="can't play sources");
a(d).pause().data("mediaerror",b);g.warn("mediaelementError: "+b);setTimeout(function(){a(d).data("mediaerror")&&a(d).trigger("mediaerror")},1)};var x=function(){var a;return function(b,c,e){g.ready(t?"mediaelement-swf":"mediaelement-yt",function(){h.createSWF?h.createSWF(b,c,e):a||(a=!0,i(),x(b,c,e))});!a&&u&&!h.createSWF&&y()}}(),c=function(a,b,e,i,f){e||!1!==e&&b&&"third"==b.isActive?(e=h.canThirdPlaySrces(a,i))?x(a,e,b):f?h.setError(a,!1):c(a,b,!1,i,!0):(e=h.canNativePlaySrces(a,i))?b&&"third"==
b.isActive&&h.setActive(a,"html5",b):f?(h.setError(a,!1),b&&"third"==b.isActive&&h.setActive(a,"html5",b)):c(a,b,!0,i,!0)},e=/^(?:embed|object|datalist)$/i,b=function(b,i){var f=g.data(b,"mediaelementBase")||g.data(b,"mediaelementBase",{}),n=h.srces(b),j=b.parentNode;clearTimeout(f.loadTimer);a.data(b,"mediaerror",!1);if(n.length&&j&&!(1!=j.nodeType||e.test(j.nodeName||"")))i=i||g.data(b,"mediaelement"),c(b,i,s.preferFlash||o,n)};a(j).bind("ended",function(b){var c=g.data(b.target,"mediaelement");
(!m||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});m||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var c=g.defineNodeNameProperty(d,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");b(this,a);l&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});n[d]=g.defineNodeNameProperty(d,
"canPlayType",{prop:{value:function(b){var c="";l&&n[d].prop._supvalue&&(c=n[d].prop._supvalue.call(this,b),"no"==c&&(c=""));!c&&t&&(b=a.trim((b||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(b)&&(c="maybe"));return c}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,c=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(c.loadTimer);c.loadTimer=setTimeout(function(){b(a);a=null},9)}});f=function(){g.addReady(function(c,e){a("video, audio",
c).add(e.filter("video, audio")).each(function(){a.browser.msie&&8<g.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():b(this);if(l){var c,d,e=this,i=function(){var b=a.prop(e,"buffered");if(b){for(var c="",d=0,i=b.length;d<i;d++)c+=b.end(d);return c}},f=function(){var b=i();b!=d&&(d=b,a(e).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(d=i());clearTimeout(c);c=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(d=!1);clearTimeout(c)})}})})};l?(g.isReady("mediaelement-core",!0),f(),g.ready("WINDOWLOAD mediaelement",i)):g.ready("mediaelement-swf",f)})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var f=window.Modernizr,j=a.webshims,l=j.bugs,m=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),r=function(){if(m[0].querySelector)try{l.findRequired=!m[0].querySelector("select:required")}catch(a){l.findRequired=!1}};l.findRequired=!1;l.validationMessage=!1;l.valueAsNumberSet=!1;j.capturingEventPrevented=function(f){if(!f._isPolyfilled){var g=f.isDefaultPrevented,
h=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return h.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!f.formvalidation||l.bustedValidity)r();else if(j.capturingEvents(["input"]),j.capturingEvents(["invalid"],!0),
f.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var g=a("input",m).eq(0),q,p=function(a){j.loader.loadList(["dom-extend"]);j.ready("dom-extend",a)},o=function(h){var l=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){m&&(m.remove(),m=g=null)},9);if(!f.bugfreeformvalidation)j.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),j.modules["form-extend"].test=a.noop;j.isReady("form-number-date-api")&&
l.push("form-number-date-api");j.reTest(l);if(g)try{g.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&p(function(){j.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&a.prop(this,"value",a.prop(this,"value"))}});j.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(f)}})})}catch(o){}(a.browser.opera||window.testGoodWithFix)&&
p(function(){var f=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(g){var h=j.defineNodeNameProperty(g,"checkValidity",{prop:{value:function(){j.fromSubmit||a(this).bind("invalid.checkvalidity",f);j.fromCheckValidity=!0;var i=h.prop._supvalue.apply(this,arguments);j.fromSubmit||a(this).unbind("invalid.checkvalidity",f);j.fromCheckValidity=!1;return i}}})})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){r();l.validationMessage=!g.prop("validationMessage");
if((f.inputtypes||{}).date){try{g.prop("valueAsNumber",0)}catch(h){}l.valueAsNumberSet="1970-01-01"!=g.prop("value")}g.prop("value","")}m.bind("submit",function(a){f.bugfreeformvalidation=!1;o(a)});q=setTimeout(function(){m&&m.triggerHandler("submit")},9);a("input, select",m).bind("invalid",o).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,f,j,l,m,r){var g={radio:1},q={checkbox:1,radio:1},p=a([]),o=f.bugs,h=function(i){var i=a(i),f,h;f=p;if(g[i[0].type])h=i.prop("form"),f=(f=i[0].name)?h?a(h[f]):a(l.getElementsByName(f)).filter(function(){return!a.prop(this,"form")}):i,f=f.filter('[type="radio"]');return f},s=f.getContentValidationMessage=function(i,f,g){var c=a(i).data("errormessage")||i.getAttribute("x-moz-errormessage")||"";g&&c[g]&&(c=c[g]);"object"==typeof c&&(f=f||a.prop(i,"validity")||
{valid:1},f.valid||a.each(f,function(a,b){if(b&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},v={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(i){return!(!a.prop(i,"willValidate")||!(a.prop(i,"validity")||{valid:1}).valid)},"invalid-element":function(i){return!(!a.prop(i,"willValidate")||(a.prop(i,"validity")||{valid:1}).valid)},"required-element":function(i){return!(!a.prop(i,"willValidate")||!a.prop(i,"required"))},"optional-element":function(i){return!!(a.prop(i,
"willValidate")&&!1===a.prop(i,"required"))},"in-range":function(i){if(!v[a.prop(i,"type")]||!a.prop(i,"willValidate"))return!1;i=a.prop(i,"validity");return!(!i||i.rangeOverflow||i.rangeUnderflow)},"out-of-range":function(i){if(!v[a.prop(i,"type")]||!a.prop(i,"willValidate"))return!1;i=a.prop(i,"validity");return!(!i||!i.rangeOverflow&&!i.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(i){a.expr.filters[i]=a.expr.filters[i+"-element"]});a.expr.filters.focus=function(a){try{var f=
a.ownerDocument;return a===f.activeElement&&(!f.hasFocus||f.hasFocus())}catch(g){}return!1};var t=a.event.customEvent||{};(o.bustedValidity||o.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var i=a.find,f=a.find.matchesSelector,g=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,c=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var d=arguments,d=a.call(d,1,d.length);d.unshift(b.replace(g,c));return i.apply(this,
d)},d;for(d in i)i.hasOwnProperty(d)&&(b[d]=i[d]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",l.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(g,c);return f.call(this,a,b)}}();var u=a.prop,w={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(f,g,j){var c=u.apply(this,arguments);if(f&&"form"in f&&w[g]&&j!==m&&a(f).hasClass("form-ui-invalid")&&(a.prop(f,"validity")||{valid:1}).valid)a(f).getShadowElement().removeClass("form-ui-invalid"),
"checked"==g&&j&&h(f).not(f).removeClass("form-ui-invalid").removeAttr("aria-invalid");return c};var y=function(f,g){var h;a.each(f,function(c,e){if(e)return h="customError"==c?a.prop(g,"validationMessage"):c,!1});return h};a(l).bind(r.validityUIEvents||"focusout change refreshvalidityui",function(f){if(f.target&&"submit"!=f.target.type&&a.prop(f.target,"willValidate")){var g=a.data(f.target,"webshimsswitchvalidityclass"),j=function(){var c=a(f.target).getNativeElement().trigger("refreshCustomValidityRules")[0],
e=a.prop(c,"validity"),b=a(c).getShadowElement(),d,g,j,n;e.valid?b.hasClass("form-ui-valid")||(d="form-ui-valid",g="form-ui-invalid",n="changedvaliditystate",j="changedvalid",q[c.type]&&c.checked&&h(c).not(c).removeClass(g).addClass(d).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(e=y(e,c),a.data(c,"webshimsinvalidcause")!=e&&(a.data(c,"webshimsinvalidcause",e),n="changedvaliditystate"),b.hasClass("form-ui-invalid")||(d="form-ui-invalid",g="form-ui-valid",q[c.type]&&!c.checked&&
h(c).not(c).removeClass(g).addClass(d),j="changedinvalid"));d&&(b.addClass(d).removeClass(g),setTimeout(function(){a(c).trigger(j)},0));n&&setTimeout(function(){a(c).trigger(n)},0);a.removeData(f.target,"webshimsswitchvalidityclass")};g&&clearTimeout(g);"refreshvalidityui"==f.type?j():a.data(f.target,"webshimsswitchvalidityclass",setTimeout(j,9))}});t.changedvaliditystate=!0;t.refreshCustomValidityRules=!0;t.changedvalid=!0;t.changedinvalid=!0;t.refreshvalidityui=!0;f.triggerInlineForm=function(f,
g){a(f).trigger(g)};f.modules["form-core"].getGroupElements=h;o=function(){f.scrollRoot=a.browser.webkit||"BackCompat"==l.compatMode?a(l.body):a(l.documentElement)};o();f.ready("DOM",o);f.getRelOffset=function(f,g){var f=a(f),h=a(g).offset(),c;a.swap(a(f)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){c=f.offset()});h.top-=c.top;h.left-=c.left;return h};f.validityAlert=function(){var g=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",h,p=!1,c=!1,e,b={hideDelay:5E3,
showFor:function(d,f,g,i){b._create();var d=a(d),l=a(d).getShadowElement(),m=b.getOffsetFromBody(l);b.clear();i?this.hide():(this.getMessage(d,f),this.position(l,m),h.css({fontSize:d.css("fontSize"),fontFamily:d.css("fontFamily")}),this.show(),this.hideDelay&&(p=setTimeout(e,this.hideDelay)),a(j).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(c);c=setTimeout(function(){b.position(l)},9)}));g||this.setFocus(l,m)},getOffsetFromBody:function(a){return f.getRelOffset(h,
a)},setFocus:function(b,c){var j=a(b).getShadowFocusElement(),p=f.scrollRoot.scrollTop(),m=(c||j.offset()).top-30,s;f.getID&&"label"==g&&h.attr("for",f.getID(j));p>m&&(f.scrollRoot.animate({scrollTop:m-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(p-m)),80)}),s=!0);try{j[0].focus()}catch(o){}s&&(f.scrollRoot.scrollTop(p),setTimeout(function(){f.scrollRoot.scrollTop(p)},0));setTimeout(function(){a(l).bind("focusout.validityalert",e)},10)},getMessage:function(b,c){c||(c=s(b[0])||b.prop("validationMessage"));
c?a("span.va-box",h).text(c):this.hide()},position:function(c,e){e=e?a.extend({},e):b.getOffsetFromBody(c);e.top+=c.outerHeight();h.css(e)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(p);a(l).unbind(".validityalert");a(j).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=b.errorBubble=a("<"+g+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
g+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&h.bgIframe()})}};e=a.proxy(b,"hide");return b}();(function(){var f,g=[],h;a(l).bind("invalid",function(c){if(!c.wrongWebkitInvalid){var e=a(c.target),b=e.getShadowElement();b.hasClass("form-ui-invalid")||(b.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(c.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!f)f=a.Event("firstinvalid"),f.isInvalidUIPrevented=c.isDefaultPrevented,b=a.Event("firstinvalidsystem"),a(l).triggerHandler(b,{element:c.target,form:c.target.form,isInvalidUIPrevented:c.isDefaultPrevented}),e.trigger(f);f&&f.isDefaultPrevented()&&c.preventDefault();g.push(c.target);c.extraData="fix";clearTimeout(h);h=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(g)};f=!1;g=[];a(c.target).trigger(b,b)},9);b=e=null}})})();a.fn.getErrorMessage=function(){var f="",
g=this[0];g&&(f=s(g)||a.prop(g,"customValidationMessage")||a.prop(g,"validationMessage"));return f};r.replaceValidationUI&&f.ready("DOM forms",function(){a(l).bind("firstinvalid",function(f){f.isInvalidUIPrevented()||(f.preventDefault(),a.webshims.validityAlert.showFor(f.target,a(f.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,f,j,l,m,r){var g=f.validityMessages,j=r.overrideMessages||r.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{});["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]="Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},g.de||{});["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var q=g[""];f.createValidationMessage=function(f,g){var h=q[g];h&&"string"!==typeof h&&(h=h[a.prop(f,"type")]||h[(f.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(g){if(-1!==h.indexOf("{%"+g)){var j=("label"==g?a.trim(a('label[for="'+f.id+'"]',f.form).text()).replace(/\*$|:$/,""):a.attr(f,g))||"";h=h.replace("{%"+g+"}",j);"value"==g&&(h=h.replace("{%valueLen}",j.length))}});return h||""};(f.bugs.validationMessage||!Modernizr.formvalidation||
f.bugs.bustedValidity)&&j.push("validationMessage");f.activeLang({langObj:g,module:"form-core",callback:function(a){q=a}});j.forEach(function(g){f.defineNodeNamesProperty(["fieldset","output","button"],g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var h=f.defineNodeNameProperty(j,g,{prop:{get:function(){var g=this,j="";if(!a.prop(g,"willValidate"))return j;var l=a.prop(g,"validity")||{valid:1};if(l.valid||(j=f.getContentValidationMessage(g,l)))return j;if(l.customError&&
g.nodeName&&(j=Modernizr.formvalidation&&!f.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(g):f.data(g,"customvalidationMessage")))return j;a.each(l,function(a,h){if("valid"!=a&&h&&(j=f.createValidationMessage(g,a)))return!1});return j||""},writeable:!1}})})})});
