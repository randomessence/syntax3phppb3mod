var XRegExp;if(XRegExp){throw Error("can't load XRegExp twice in the same frame")}(function(a){function l(a,b){if(!XRegExp.isRegExp(a))throw TypeError("type RegExp expected");var c=a._xregexp;a=XRegExp(a.source,m(a)+(b||""));if(c){a._xregexp={source:c.source,captureNames:c.captureNames?c.captureNames.slice(0):null}}return a}function m(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")}function n(a,b,c,d){var g=f.length,h,i,j;e=true;try{while(g--){j=f[g];if(c&j.scope&&(!j.trigger||j.trigger.call(d))){j.pattern.lastIndex=b;i=j.pattern.exec(a);if(i&&i.index===b){h={output:j.handler.call(d,i,c),match:i};break}}}}catch(k){throw k}finally{e=false}return h}function o(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);for(var d=c||0;d<a.length;d++){if(a[d]===b)return d}return-1}XRegExp=function(b,d){var f=[],h=XRegExp.OUTSIDE_CLASS,i=0,j,m,o,p,q;if(XRegExp.isRegExp(b)){if(d!==a)throw TypeError("can't supply flags when constructing one RegExp from another");return l(b)}if(e)throw Error("can't call the XRegExp constructor within token definition functions");d=d||"";j={hasNamedCapture:false,captureNames:[],hasFlag:function(a){return d.indexOf(a)>-1},setFlag:function(a){d+=a}};while(i<b.length){m=n(b,i,h,j);if(m){f.push(m.output);i+=m.match[0].length||1}else{if(o=g.exec.call(k[h],b.slice(i))){f.push(o[0]);i+=o[0].length}else{p=b.charAt(i);if(p==="[")h=XRegExp.INSIDE_CLASS;else if(p==="]")h=XRegExp.OUTSIDE_CLASS;f.push(p);i++}}}q=RegExp(f.join(""),g.replace.call(d,c,""));q._xregexp={source:b,captureNames:j.hasNamedCapture?j.captureNames:null};return q};XRegExp.version="1.5.1";XRegExp.INSIDE_CLASS=1;XRegExp.OUTSIDE_CLASS=2;var b=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,c=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,d=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,e=false,f=[],g={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},h=g.exec.call(/()??/,"")[1]===a,i=function(){var a=/^/g;g.test.call(a,"");return!a.lastIndex}(),j=RegExp.prototype.sticky!==a,k={};k[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;k[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;XRegExp.addToken=function(a,b,c,d){f.push({pattern:l(a,"g"+(j?"y":"")),handler:b,scope:c||XRegExp.OUTSIDE_CLASS,trigger:d||null})};XRegExp.cache=function(a,b){var c=a+"/"+(b||"");return XRegExp.cache[c]||(XRegExp.cache[c]=XRegExp(a,b))};XRegExp.copyAsGlobal=function(a){return l(a,"g")};XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};XRegExp.execAt=function(a,b,c,d){var e=l(b,"g"+(d&&j?"y":"")),f;e.lastIndex=c=c||0;f=e.exec(a);if(d&&f&&f.index!==c)f=null;if(b.global)b.lastIndex=f?e.lastIndex:0;return f};XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}};XRegExp.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"};XRegExp.iterate=function(a,b,c,d){var e=l(b,"g"),f=-1,g;while(g=e.exec(a)){if(b.global)b.lastIndex=e.lastIndex;c.call(d,g,++f,a,b);if(e.lastIndex===g.index)e.lastIndex++}if(b.global)b.lastIndex=0};XRegExp.matchChain=function(a,b){return function c(a,d){var e=b[d].regex?b[d]:{regex:b[d]},f=l(e.regex,"g"),g=[],h;for(h=0;h<a.length;h++){XRegExp.iterate(a[h],f,function(a){g.push(e.backref?a[e.backref]||"":a[0])})}return d===b.length-1||!g.length?g:c(g,d+1)}([a],0)};RegExp.prototype.apply=function(a,b){return this.exec(b[0])};RegExp.prototype.call=function(a,b){return this.exec(b)};RegExp.prototype.exec=function(b){var c,d,e,f;if(!this.global)f=this.lastIndex;c=g.exec.apply(this,arguments);if(c){if(!h&&c.length>1&&o(c,"")>-1){e=RegExp(this.source,g.replace.call(m(this),"g",""));g.replace.call((b+"").slice(c.index),e,function(){for(var b=1;b<arguments.length-2;b++){if(arguments[b]===a)c[b]=a}})}if(this._xregexp&&this._xregexp.captureNames){for(var j=1;j<c.length;j++){d=this._xregexp.captureNames[j-1];if(d)c[d]=c[j]}}if(!i&&this.global&&!c[0].length&&this.lastIndex>c.index)this.lastIndex--}if(!this.global)this.lastIndex=f;return c};RegExp.prototype.test=function(a){var b,c;if(!this.global)c=this.lastIndex;b=g.exec.call(this,a);if(b&&!i&&this.global&&!b[0].length&&this.lastIndex>b.index)this.lastIndex--;if(!this.global)this.lastIndex=c;return!!b};String.prototype.match=function(a){if(!XRegExp.isRegExp(a))a=RegExp(a);if(a.global){var b=g.match.apply(this,arguments);a.lastIndex=0;return b}return a.exec(this)};String.prototype.replace=function(a,c){var d=XRegExp.isRegExp(a),e,f,h,i;if(d){if(a._xregexp)e=a._xregexp.captureNames;if(!a.global)i=a.lastIndex}else{a=a+""}if(Object.prototype.toString.call(c)==="[object Function]"){f=g.replace.call(this+"",a,function(){if(e){arguments[0]=new String(arguments[0]);for(var b=0;b<e.length;b++){if(e[b])arguments[0][e[b]]=arguments[b+1]}}if(d&&a.global)a.lastIndex=arguments[arguments.length-2]+arguments[0].length;return c.apply(null,arguments)})}else{h=this+"";f=g.replace.call(h,a,function(){var a=arguments;return g.replace.call(c+"",b,function(b,c,d){if(c){switch(c){case"$":return"$";case"&":return a[0];case"`":return a[a.length-1].slice(0,a[a.length-2]);case"'":return a[a.length-1].slice(a[a.length-2]+a[0].length);default:var f="";c=+c;if(!c)return b;while(c>a.length-3){f=String.prototype.slice.call(c,-1)+f;c=Math.floor(c/10)}return(c?a[c]||"":"$")+f}}else{var g=+d;if(g<=a.length-3)return a[g];g=e?o(e,d):-1;return g>-1?a[g+1]:b}})})}if(d){if(a.global)a.lastIndex=0;else a.lastIndex=i}return f};String.prototype.split=function(b,c){if(!XRegExp.isRegExp(b))return g.split.apply(this,arguments);var d=this+"",e=[],f=0,h,i;if(c===a||+c<0){c=Infinity}else{c=Math.floor(+c);if(!c)return[]}b=XRegExp.copyAsGlobal(b);while(h=b.exec(d)){if(b.lastIndex>f){e.push(d.slice(f,h.index));if(h.length>1&&h.index<d.length)Array.prototype.push.apply(e,h.slice(1));i=h[0].length;f=b.lastIndex;if(e.length>=c)break}if(b.lastIndex===h.index)b.lastIndex++}if(f===d.length){if(!g.test.call(b,"")||i)e.push("")}else{e.push(d.slice(f))}return e.length>c?e.slice(0,c):e};XRegExp.addToken(/\(\?#[^)]*\)/,function(a){return g.test.call(d,a.input.slice(a.index+a[0].length))?"":"(?:)"});XRegExp.addToken(/\((?!\?)/,function(){this.captureNames.push(null);return"("});XRegExp.addToken(/\(\?<([$\w]+)>/,function(a){this.captureNames.push(a[1]);this.hasNamedCapture=true;return"("});XRegExp.addToken(/\\k<([\w$]+)>/,function(a){var b=o(this.captureNames,a[1]);return b>-1?"\\"+(b+1)+(isNaN(a.input.charAt(a.index+a[0].length))?"":"(?:)"):a[0]});XRegExp.addToken(/\[\^?]/,function(a){return a[0]==="[]"?"\\b\\B":"[\\s\\S]"});XRegExp.addToken(/^\(\?([imsx]+)\)/,function(a){this.setFlag(a[1]);return""});XRegExp.addToken(/(?:\s+|#.*)+/,function(a){return g.test.call(d,a.input.slice(a.index+a[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")});XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})()