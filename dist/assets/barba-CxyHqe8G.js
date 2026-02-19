(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function zx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function gp(r,e,t){return e&&zx(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function dr(){return dr=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},dr.apply(this,arguments)}function ah(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Wl(r,e)}function Of(r){return Of=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Of(r)}function Wl(r,e){return Wl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Wl(r,e)}function Vx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bf(r,e,t){return Bf=Vx()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Wl(a,s.prototype),a},Bf.apply(null,arguments)}function kf(r){var e=typeof Map=="function"?new Map:void 0;return kf=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Bf(t,arguments,Of(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Wl(n,t)},kf(r)}function Gx(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var ps,Hx=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(ps||(ps={}));var Am=ps.off,to=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Am},r.setLevel=function(t){return Am=ps[t]};var e=r.prototype;return e.error=function(){this.i(console.error,ps.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,ps.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,ps.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,ps.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Io(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Rm(r){return r&&r.sensitive?"":"i"}var _r={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},no=new((function(){function r(){this.o=_r,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),Wx=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=dr({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=dr({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=_r.prefix+"-"+_r.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},gp(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),u0=new Wx,Du=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=no.toElement(n.html);i.namespace=no.getNamespace(s),i.container=no.getContainer(s),i.url=n.url,i.html=n.html,u0.update({ns:i.namespace});var o=no.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},h0=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Rm(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,f=u!==void 0&&u,h=c.start,d=h===void 0||h,p=c.end,_=p===void 0||p,m=c.encode,g=m===void 0?function(z){return z}:m,x=c.delimiter,M=x===void 0?"/#?":x,y=c.endsWith,T="[".concat(Io(y===void 0?"":y),"]|$"),A="[".concat(Io(M),"]"),E=d?"^":"",v=0,S=a;v<S.length;v++){var D=S[v];if(typeof D=="string")E+=Io(g(D));else{var P=Io(g(D.prefix)),L=Io(g(D.suffix));if(D.pattern)if(l&&l.push(D),P||L)if(D.modifier==="+"||D.modifier==="*"){var U=D.modifier==="*"?"?":"";E+="(?:".concat(P,"((?:").concat(D.pattern,")(?:").concat(L).concat(P,"(?:").concat(D.pattern,"))*)").concat(L,")").concat(U)}else E+="(?:".concat(P,"(").concat(D.pattern,")").concat(L,")").concat(D.modifier);else E+=D.modifier==="+"||D.modifier==="*"?"((?:".concat(D.pattern,")").concat(D.modifier,")"):"(".concat(D.pattern,")").concat(D.modifier);else E+="(?:".concat(P).concat(L,")").concat(D.modifier)}}if(_)f||(E+="".concat(A,"?")),E+=c.endsWith?"(?=".concat(T,")"):"$";else{var F=a[a.length-1],k=typeof F=="string"?A.indexOf(F[F.length-1])>-1:F===void 0;f||(E+="(?:".concat(A,"(?=").concat(T,"))?")),k||(E+="(?=".concat(A,"|").concat(T,")"))}return new RegExp(E,Rm(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(L){for(var U=[],F=0;F<L.length;){var k=L[F];if(k!=="*"&&k!=="+"&&k!=="?")if(k!=="\\")if(k!=="{")if(k!=="}")if(k!==":")if(k!=="(")U.push({type:"CHAR",index:F,value:L[F++]});else{var z=1,O="";if(L[X=F+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(X));for(;X<L.length;)if(L[X]!=="\\"){if(L[X]===")"){if(--z==0){X++;break}}else if(L[X]==="("&&(z++,L[X+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(X));O+=L[X++]}else O+=L[X++]+L[X++];if(z)throw new TypeError("Unbalanced pattern at ".concat(F));if(!O)throw new TypeError("Missing pattern at ".concat(F));U.push({type:"PATTERN",index:F,value:O}),F=X}else{for(var Z="",X=F+1;X<L.length;){var N=L.charCodeAt(X);if(!(N>=48&&N<=57||N>=65&&N<=90||N>=97&&N<=122||N===95))break;Z+=L[X++]}if(!Z)throw new TypeError("Missing parameter name at ".concat(F));U.push({type:"NAME",index:F,value:Z}),F=X}else U.push({type:"CLOSE",index:F,value:L[F++]});else U.push({type:"OPEN",index:F,value:L[F++]});else U.push({type:"ESCAPED_CHAR",index:F++,value:L[F++]});else U.push({type:"MODIFIER",index:F,value:L[F++]})}return U.push({type:"END",index:F,value:""}),U})(a),u=l.prefixes,f=u===void 0?"./":u,h="[^".concat(Io(l.delimiter||"/#?"),"]+?"),d=[],p=0,_=0,m="",g=function(L){if(_<c.length&&c[_].type===L)return c[_++].value},x=function(L){var U=g(L);if(U!==void 0)return U;var F=c[_],k=F.index;throw new TypeError("Unexpected ".concat(F.type," at ").concat(k,", expected ").concat(L))},M=function(){for(var L,U="";L=g("CHAR")||g("ESCAPED_CHAR");)U+=L;return U};_<c.length;){var y=g("CHAR"),T=g("NAME"),A=g("PATTERN");if(T||A)f.indexOf(v=y||"")===-1&&(m+=v,v=""),m&&(d.push(m),m=""),d.push({name:T||p++,prefix:v,suffix:"",pattern:A||h,modifier:g("MODIFIER")||""});else{var E=y||g("ESCAPED_CHAR");if(E)m+=E;else if(m&&(d.push(m),m=""),g("OPEN")){var v=M(),S=g("NAME")||"",D=g("PATTERN")||"",P=M();x("CLOSE"),d.push({name:S||(D?p++:""),pattern:S&&!D?h:D,prefix:v,suffix:P,modifier:g("MODIFIER")||""})}else x("END")}}return d})(i,o),s,o)})(e,t,n)},Xx={__proto__:null,update:Du,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:h0},f0=function(){return window.location.origin},Xl=function(r){return r===void 0&&(r=window.location.href),ms(r).port},ms=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(f0(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=d0(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},d0=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},zf=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},qx={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:f0,getPort:Xl,getPath:function(r){return r===void 0&&(r=window.location.href),ms(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(ms(r).query):ms(r).query},getHash:function(r){return ms(r).hash},parse:ms,parseQuery:d0,clean:zf};function Yx(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:dr({href:l},ms(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function jx(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function sa(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(jx(a)?a.then(s,o):s(a))});return i}}var ds=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new to("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}ah(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return sa(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Hx)),p0=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return h0(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=ms(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),$x=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}ah(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=dr({},this.T.get(n),i);return this.T.set(n,s),s},e})(p0),Kx=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),Zx=function(){return!window.history.pushState},Jx=function(r){return!r.el||!r.href},Qx=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},ey=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},ty=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},ny=function(r){var e=r.el;return e.port!==void 0&&Xl()!==Xl(e.href)},iy=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},ry=function(r){return r.el.hasAttribute(_r.prefix+"-"+_r.prevent)},sy=function(r){return!!r.el.closest("["+_r.prefix+"-"+_r.prevent+'="all"]')},oy=function(r){var e=r.href;return zf(e)===zf()&&Xl(e)===Xl()},ay=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}ah(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Zx),this.add("exists",Jx),this.add("newTab",Qx),this.add("blank",ey),this.add("corsDomain",ty),this.add("corsPort",ny),this.add("download",iy),this.add("preventSelf",ry),this.add("preventAll",sy),this.add("sameUrl",oy,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(p0),Ah=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(Gx(i),e),i.name="BarbaError",i}return ah(e,r),e})(kf(Error)),ly=(function(){function r(t){t===void 0&&(t=[]),this.logger=new to("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var o=new Map,a=s.find(function(h){var d=!0,p={};return n.self&&h.name==="self"?(o.set(h,p),!0):(i.j.reverse().forEach(function(_){d&&(d=i.M(h,_,t,p),h.from&&h.to&&(d=i.M(h,_,t,p,"from")&&i.M(h,_,t,p,"to")),h.from&&!h.to&&(d=i.M(h,_,t,p,"from")),!h.from&&h.to&&(d=i.M(h,_,t,p,"to")))}),o.set(h,p),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,f=[a];Object.keys(l).length>0&&f.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,f=u,h=u,d=u,p=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?p&&p[u]:p[u]){switch(n.type){case"strings":default:var m=Array.isArray(p[f])?p[f]:[p[f]];_[f]&&m.indexOf(_[f])!==-1&&(l=!0),m.indexOf(_[f])===-1&&(a=!1);break;case"object":var g=Array.isArray(p[h])?p[h]:[p[h]];_[h]?(_[h].name&&g.indexOf(_[h].name)!==-1&&(l=!0),g.indexOf(_[h].name)===-1&&(a=!1)):a=!1;break;case"function":p[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function Wa(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var cy=(function(){function r(t){t===void 0&&(t=[]),this.logger=new to("@barba/core"),this.store=void 0,this.C=!1,this.store=new ly(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=Wa(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(h){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var f=Wa(function(){function h(){return Promise.resolve(l.L("before",n,c)).then(function(){function p(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var _=(function(){if(u)return Wa(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(M){if(l.H(M))throw new Ah(M,"Transition error [sync]")});var m=function(M){return Wa(function(){var y=(function(){if(g!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,g)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(y&&y.then)return y.then(function(){})},function(y){if(l.H(y))throw new Ah(y,"Transition error [before/after/enter]")})},g=!1,x=Wa(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Du(s,n)]).then(function(M){return M[0]})).then(function(M){return g=M,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(M){if(l.H(M))throw new Ah(M,"Transition error [before/after/leave]")});return x&&x.then?x.then(m):m()})();return _&&_.then?_.then(p):p()})}var d=(function(){if(u)return Promise.resolve(Du(s,n)).then(function(){})})();return d&&d.then?d.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(f&&f.then?f.then(a):a())}catch(h){return Promise.reject(h)}},e.once=function(t,n){try{return Promise.resolve(ds.do("once",t,n)).then(function(){return n.once?sa(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(ds.do("leave",t,n)).then(function(){return n.leave?sa(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(ds.do("enter",t,n)).then(function(){return n.enter?sa(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return no.addContainer(t.next.container,n),ds.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return no.removeContainer(t.current.container),ds.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(ds.do(t,n,i)).then(function(){return i[t]?sa(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},gp(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),uy=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){ds[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?sa(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var hy={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Vf=new((function(){function r(){this.version="2.10.3",this.schemaPage=hy,this.Logger=to,this.logger=new to("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=ds,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=no,this.helpers=Xx,this.history=u0,this.request=Yx,this.url=qx,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?_r:l,u=n.requestError,f=n.timeout,h=f===void 0?2e3:f,d=n.cacheIgnore,p=d!==void 0&&d,_=n.cacheFirstPage,m=_!==void 0&&_,g=n.prefetchIgnore,x=g!==void 0&&g,M=n.preventRunning,y=M!==void 0&&M,T=n.prevent,A=T===void 0?null:T,E=n.debug,v=n.logLevel;if(to.setLevel((E!==void 0&&E)===!0?"debug":v===void 0?"off":v),this.logger.info(this.version),Object.keys(c).forEach(function(P){_r[P]&&(_r[P]=c[P])}),this.B=u,this.timeout=h,this.cacheIgnore=p,this.cacheFirstPage=m,this.prefetchIgnore=x,this.preventRunning=y,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var S=this.data.current;if(!S.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new $x(p),this.headers=new Kx,this.prevent=new ay(x),this.transitions=new cy(s),this.views=new uy(a),A!==null){if(typeof A!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",A)}this.history.init(S.url.href,S.namespace),m&&this.cache.set(S.url.href,Promise.resolve({html:S.html,url:S.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(P){return P.init()});var D=this.data;D.trigger="barba",D.next=D.current,D.current=dr({},this.schemaPage),this.hooks.do("ready",D),this.once(D),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var f=l.data;return Promise.resolve(l.hooks.do("page",f)).then(function(){var h=(function(d,p){try{var _=(m=l.transitions.get(f,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:f,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return p()}var m;return _&&_.then?_.then(void 0,p):_})(0,function(){to.getLevel()===0&&l.force(f.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=dr({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(f){f.url.href!==t&&l.history.add(f.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Du(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(f){return Promise.reject(f)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:dr({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:dr({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},gp(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function Nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},_p,Ln,Gt,ki=1e8,Nt=1/ki,Gf=Math.PI*2,fy=Gf/4,dy=0,g0=Math.sqrt,py=Math.cos,my=Math.sin,En=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},vp=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},xp=function(){return typeof window<"u"},Mc=function(e){return Jt(e)||En(e)},_0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,gy=/random\([^)]+\)/g,_y=/,\s*/g,Cm=/(?:-?\.?\d|\.)+/gi,v0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,x0=/[+-]=-?[.\d]+/,vy=/[^,'"\[\]\s]+/gi,xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,ar,Hf,yp,Ei={},Iu={},y0,S0=function(e){return(Iu=Sa(e,Ei))&&li},Sp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ql=function(e,t){return!t&&console.warn(e)},M0=function(e,t){return e&&(Ei[e]=t)&&Iu&&(Iu[e]=t)||Ei},Yl=function(){return 0},yy={suppressEvents:!0,isStart:!0,kill:!1},du={suppressEvents:!0,kill:!1},Sy={suppressEvents:!0},Mp={},Ts=[],Wf={},b0,mi={},Ch={},Pm=30,pu=[],bp="",Tp=function(e){var t=e[0],n,i;if(Sr(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pu.length;i--&&!pu[i].targetTest(t););n=pu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Y0(e[i],n)))||e.splice(i,1);return e},fo=function(e){return e._gsap||Tp(zi(e))[0]._gsap},T0=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():vp(n)&&e.getAttribute&&e.getAttribute(t)||n},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},ca=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},My=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Nu=function(){var e=Ts.length,t=Ts.slice(0),n,i;for(Wf={},Ts.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wp=function(e){return!!(e._initted||e._startAt||e.add)},w0=function(e,t,n,i){Ts.length&&!Ln&&Nu(),e.render(t,n,!!(Ln&&t<0&&wp(e))),Ts.length&&!Ln&&Nu()},E0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vy).length<2?t:En(e)?e.trim():e},A0=function(e){return e},Ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},by=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sa=function(e,t){for(var n in t)e[n]=t[n];return e},Lm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Sr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Uu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sl=function(e){var t=e.parent||Xt,n=e.keyframes?by(Hn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ty=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},R0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},lh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},As=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},po=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xf=function(e,t,n,i){return e._startAt&&(Ln?e._startAt.revert(du):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ey=function r(e){return!e||e._ts&&r(e.parent)},Dm=function(e){return e._repeat?Ma(e._tTime,e=e.duration()+e._rDelay)*e:0},Ma=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ch=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},uh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ch(e),n._dirty||po(n,e)),e},C0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fu(e.rawTime(),t),(!t._dur||vc(0,t.totalDuration(),n)-t._tTime>Nt)&&t.render(n,!0)),po(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Nt}},fr=function(e,t,n,i){return t.parent&&As(t),t._start=Wt((Kr(n)?n:n||e!==Xt?Li(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),R0(e,t,"_first","_last",e._sort?"_start":0),qf(t)||(e._recent=t),i||C0(e,t),e._ts<0&&uh(e,e._tTime),e},P0=function(e,t){return(Ei.ScrollTrigger||Sp("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},L0=function(e,t,n,i,s){if(Ap(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&b0!==vi.frame)return Ts.push(e),e._lazy=[s,i],1},Ay=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},qf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ry=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Ay(e)&&!(!e._initted&&qf(e))||(e._ts<0||e._dp._ts<0)&&!qf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=vc(0,e._tDur,t),u=Ma(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ma(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||i||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&L0(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Nt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Xf(e,t,n,!0),e._onUpdate&&!n&&Si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&As(e,1),!n&&!Ln&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Cy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ba=function(e,t,n,i){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&uh(e,e._tTime=e._tDur*a),e.parent&&ch(e),n||po(e.parent,e),e},Im=function(e){return e instanceof Jn?po(e):ba(e,e._dur)},Py={_start:0,endTime:Yl,totalDuration:Yl},Li=function r(e,t,n){var i=e.labels,s=e._recent||Py,o=e.duration()>=ki?s.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ml=function(e,t,n){var i=Kr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},Ns=function(e,t){return e||e===0?t(e):t},vc=function(e,t,n){return n<e?e:n>t?t:n},zn=function(e,t){return!En(e)||!(t=xy.exec(e))?"":t[1]},Ly=function(e,t,n){return Ns(n,function(i){return vc(e,t,i)})},Yf=[].slice,D0=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==ar},Dy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return En(i)&&!t||D0(i,1)?(s=n).push.apply(s,zi(i)):n.push(i)})||n},zi=function(e,t,n){return Gt&&!t&&Gt.selector?Gt.selector(e):En(e)&&!n&&(Hf||!Ta())?Yf.call((t||yp).querySelectorAll(e),0):Hn(e)?Dy(e,n):D0(e)?Yf.call(e,0):e?[e]:[]},jf=function(e){return e=zi(e)[0]||ql("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?ql("Invalid scope")||yp.createElement("div"):e)}},I0=function(e){return e.sort(function(){return .5-Math.random()})},N0=function(e){if(Jt(e))return e;var t=Sr(e)?e:{each:e},n=mo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return En(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,p){var _=(p||t).length,m=o[_],g,x,M,y,T,A,E,v,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ki])[1],!S){for(E=-ki;E<(E=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*u-.5:i%S,x=S===ki?0:l?_*f/S-.5:i/S|0,E=0,v=ki,A=0;A<_;A++)M=A%S-g,y=x-(A/S|0),m[A]=T=c?Math.abs(c==="y"?y:M):g0(M*M+y*y),T>E&&(E=T),T<v&&(v=T);i==="random"&&I0(m),m.max=E-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zn(t.amount||t.each)||0,n=n&&_<0?W0(n):n}return _=(m[h]-m.min)/m.max||0,Wt(m.b+(n?n(_):_)*m.v)+m.u}},$f=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Kr(n)?0:zn(n))}},U0=function(e,t){var n=Hn(e),i,s;return!n&&Sr(e)&&(i=n=e.radius||ki,e.values?(e=zi(e.values),(s=!Kr(e[0]))&&(i*=i)):e=$f(e.increment)),Ns(t,n?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ki,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Kr(o)?u:u+zn(o)}:$f(e))},F0=function(e,t,n,i){return Ns(Hn(e)?!t:n===!0?!!(n=0):!i,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Iy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Ny=function(e,t){return function(n){return e(parseFloat(n))+(t||zn(n))}},Uy=function(e,t,n){return B0(e,t,0,1,n)},O0=function(e,t,n){return Ns(n,function(i){return e[~~t(i)]})},Fy=function r(e,t,n){var i=t-e;return Hn(e)?O0(e,r(0,e.length),t):Ns(n,function(s){return(i+(s-e)%i)%i+e})},Oy=function r(e,t,n){var i=t-e,s=i*2;return Hn(e)?O0(e,r(0,e.length-1),t):Ns(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},jl=function(e){return e.replace(gy,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_y);return F0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},B0=function(e,t,n,i,s){var o=t-e,a=i-n;return Ns(s,function(l){return n+((l-e)/o*a||0)})},By=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=En(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=Sa(Hn(e)?[]:{},e));if(!u){for(l in t)Ep.call(a,e,l,"get",t[l]);s=function(p){return Pp(p,a)||(o?e.p:e)}}}return Ns(n,s)},Nm=function(e,t,n){var i=e.labels,s=ki,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,n){var i=e.vars,s=i[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ts.length&&Nu(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},ol=function(e){return As(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Si(e,"onInterrupt"),e},aa,k0=[],z0=function(e){if(e)if(e=!e.name&&e.default||e,xp()||e.headless){var t=e.name,n=Jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Yl,render:Pp,add:Ep,kill:eS,modifier:Qy,rawVars:0},o={targetTest:0,get:0,getSetter:Cp,aliases:{},register:0};if(Ta(),e!==i){if(mi[t])return;Ai(i,Ai(Uu(e,s),o)),Sa(i.prototype,Sa(s,Uu(e,o))),mi[i.prop=t]=i,e.targetTest&&(pu.push(i),Mp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}M0(t,i),e.register&&e.register(li,i,ri)}else k0.push(e)},It=255,al={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Ph=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},V0=function(e,t,n){var i=e?Kr(e)?[e>>16,e>>8&It,e&It]:0:al.black,s,o,a,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),al[e])i=al[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Cm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ph(l+1/3,s,o),i[1]=Ph(l,s,o),i[2]=Ph(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(v0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cm)||al.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/It,o=i[1]/It,a=i[2]/It,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},G0=function(e){var t=[],n=[],i=-1;return e.split(ws).forEach(function(s){var o=s.match(oa)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Um=function(e,t,n){var i="",s=(e+i).match(ws),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=V0(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=G0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ws,"1").split(oa),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ws),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ws=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in al)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),ky=/hsl[a]?\(/,H0=function(e){var t=e.join(" "),n;if(ws.lastIndex=0,ws.test(t))return n=ky.test(t),e[1]=Um(e[1],n),e[0]=Um(e[0],n,G0(e[1])),!0},$l,vi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,p=function _(m){var g=r()-i,x=m===!0,M,y,T,A;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,M=T-o,(M>0||x)&&(A=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=M+(M>=s?4:s-M),y=1),x||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](T,h,A,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){y0&&(!Hf&&xp()&&(ar=Hf=window,yp=ar.document||{},Ei.gsap=li,(ar.gsapVersions||(ar.gsapVersions=[])).push(li.version),S0(Iu||ar.GreenSockGlobals||!ar.gsap&&ar||{}),k0.forEach(z0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},$l=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$l=0,c=Yl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,g,x){var M=g?function(y,T,A,E){m(y,T,A,E),f.remove(M)}:m;return f.remove(m),a[x?"unshift":"push"](M),Ta(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),Ta=function(){return!$l&&vi.wake()},gt={},zy=/^[\d.\-M][\d.\-,\s]/,Vy=/["']/g,Gy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Vy,"").trim():+c,i=l.substr(a+1).trim();return t},Hy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Wy=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Gy(t[1])]:Hy(e).split(",").map(E0)):gt._CE&&zy.test(e)?gt._CE("",e):n},W0=function(e){return function(t){return 1-e(1-t)}},X0=function r(e,t){for(var n=e._first,i;n;)n instanceof Jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mo=function(e,t){return e&&(Jt(e)?e:gt[e]||Wy(e))||t},Ro=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ii(e,function(a){gt[a]=Ei[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},q0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*my((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:q0(a);return s=Gf/s,l.config=function(c,u){return r(e,c,u)},l},Dh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:q0(n);return i.config=function(s){return r(e,s)},i};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ro(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Ro("Elastic",Lh("in"),Lh("out"),Lh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ro("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ro("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ro("Circ",function(r){return-(g0(1-r*r)-1)});Ro("Sine",function(r){return r===1?1:-py(r*fy)+1});Ro("Back",Dh("in"),Dh("out"),Dh());gt.SteppedEase=gt.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Nt;return function(a){return((i*vc(0,o,a)|0)+s)*n}}};ya.ease=gt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bp+=r+","+r+"Params,"});var Y0=function(e,t){this.id=dy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:T0,this.set=t?t.getSetter:Cp},Kl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ba(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),$l||vi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ba(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ta(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uh(this,n),!s._dp||s.parent||C0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),w0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ma(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ch(this),wy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Sy);var i=Ln;return Ln=n,wp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Im(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Im(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Li(this,n),ni(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-Nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Nt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Jt(n)?n:A0,l=function(){var u=i.then;i.then=null,s&&s(),Jt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ol(this)},r})();Ai(Kl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var Jn=(function(r){m0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Xt&&fr(n.parent||Xt,Nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&P0(Nr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ml(0,arguments,this),this},t.from=function(i,s,o){return Ml(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ml(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Sl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(i,s,Li(this,o),1),this},t.call=function(i,s,o){return fr(this,ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(i,o,Li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Sl(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Sl(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,_,m,g,x,M,y,T,A,E;if(this!==Xt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,M=this._ts,g=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Wt(u%m),u===l?(_=this._repeat,h=c):(T=Wt(u/m),_=~~T,_&&_===T&&(h=c,_--),h>c&&(h=c)),T=Ma(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(h=c-h,E=1),_!==T&&!this._lock){var v=A&&T&1,S=v===(A&&_&1);if(_<T&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Wt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;X0(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Cy(this,Wt(a),Wt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!T&&(Si(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=-Nt);break}}d=p}else{d=this._last;for(var D=i<0?i:h;d;){if(p=d._prev,(d._act||D<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,s,o||Ln&&wp(d)),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=D?-Nt:Nt);break}}d=p}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-Nt)._zTime=h>=a?1:-1,this._ts))return this._start=y,ch(this),this.render(i,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&As(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Kr(s)||(s=Li(this,s,i)),!(i instanceof Kl)){if(Hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(En(i))return this.addLabel(i,s);if(Jt(i))i=ln.delayedCall(0,i);else return this}return this!==i?fr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return En(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(i.parent===this&&lh(this,i),i===this._recent&&(this._recent=this._last),po(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(vi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=ln.delayedCall(0,s||Yl,o);return a.data="isPause",this._hasPause=1,fr(this,a,Li(this,i))},t.removePause=function(i){var s=this._first;for(i=Li(this,i);s;)s._start===i&&s.data==="isPause"&&As(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)vs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=zi(i),l=this._first,c=Kr(s),u;l;)l instanceof ln?My(l._targets,a)&&(c?(!vs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Li(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=ln.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ba(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ai({startAt:{time:Li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Wt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return po(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),po(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ki,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ba(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xt._ts&&(w0(Xt,Fu(i,Xt)),b0=vi.frame),vi.frame>=Pm){Pm+=Ti.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Ti.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e})(Kl);Ai(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xy=function(e,t,n,i,s,o,a){var l=new ri(this._pt,e,t,0,1,Q0,null,s),c=0,u=0,f,h,d,p,_,m,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=jl(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),h=n.match(Rh)||[];f=Rh.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?ca(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(x0.test(i)||g)&&(l.e=0),this._pt=l,l},Ep=function(e,t,n,i,s,o,a,l,c,u){Jt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Jt(f)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Jt(f)?c?Ky:Z0:Rp,p;if(En(i)&&(~i.indexOf("random(")&&(i=jl(i)),i.charAt(1)==="="&&(p=ca(h,i)+(zn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Kf)return!isNaN(h*i)&&i!==""?(p=new ri(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Jy:J0,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&Sp(t,i),Xy.call(this,e,t,h,i,d,l||Ti.stringFilter,c))},qy=function(e,t,n,i,s){if(Jt(e)&&(e=bl(e,s,t,n,i)),!Sr(e)||e.style&&e.nodeType||Hn(e)||_0(e))return En(e)?bl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=bl(e[a],s,t,n,i);return o},j0=function(e,t,n,i,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:qy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ri(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},vs,Kf,Ap=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!_p,y=e.timeline,T,A,E,v,S,D,P,L,U,F,k,z,O;if(y&&(!h||!s)&&(s="none"),e._ease=mo(s,ya.ease),e._yEase=f?W0(mo(f===!0?s:f,ya.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(L=m[0]?fo(m[0]).harness:0,z=L&&i[L.prop],T=Uu(i,Mp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?du:yy),_._lazy=0),o){if(As(e._startAt=ln.set(m,Ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!d)&&e._startAt.revert(du),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),E=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:g},T),z&&(E[L.prop]=z),As(e._startAt=ln.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(du):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ni(l)||l&&!p,A=0;A<m.length;A++){if(S=m[A],P=S._gsap||Tp(m)[A]._gsap,e._ptLookup[A]=F={},Wf[P.id]&&Ts.length&&Nu(),k=x===m?A:x.indexOf(S),L&&(U=new L).init(S,z||T,e,k,x)!==!1&&(e._pt=v=new ri(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Z){F[Z]=v}),U.priority&&(D=1)),!L||z)for(E in T)mi[E]&&(U=j0(E,T,e,k,S,x))?U.priority&&(D=1):F[E]=v=Ep.call(e,S,E,"get",T[E],k,x,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),M&&e._pt&&(vs=e,Xt.killTweensOf(S,F,e.globalTime(t)),O=!e.parent,vs=0),e._pt&&l&&(Wf[P.id]=1)}D&&ev(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,h&&t<=0&&y.render(ki,!0,!0)},Yy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Kf=1,e.vars[t]="+=0",Ap(e,a),Kf=0,l?ql(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=tn(n)+zn(f.e)),f.b&&(f.b=u.s+zn(f.b))},jy=function(e,t){var n=e[0]?fo(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Sa({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},$y=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},bl=function(e,t,n,i,s){return Jt(e)?e.call(t,n,i,s):En(e)&&~e.indexOf("random(")?jl(e):e},$0=bp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",K0={};ii($0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return K0[r]=1});var ln=(function(r){m0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Sl(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,x=i.parent||Xt,M=(Hn(n)||_0(n)?Kr(n[0]):"length"in i)?[n]:zi(n),y,T,A,E,v,S,D,P;if(a._targets=M.length?Tp(M):ql("GSAP target "+n+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||h||Mc(c)||Mc(u)){if(i=a.vars,y=a.timeline=new Jn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:M}),y.kill(),y.parent=y._dp=Nr(a),y._start=0,h||Mc(c)||Mc(u)){if(E=M.length,D=h&&N0(h),Sr(h))for(v in h)~$0.indexOf(v)&&(P||(P={}),P[v]=h[v]);for(T=0;T<E;T++)A=Uu(i,K0),A.stagger=0,g&&(A.yoyoEase=g),P&&Sa(A,P),S=M[T],A.duration=+bl(c,Nr(a),T,S,M),A.delay=(+bl(u,Nr(a),T,S,M)||0)-a._delay,!h&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(S,A,D?D(T,S,M):0),y._ease=gt.none;y.duration()?c=u=0:a.timeline=0}else if(p){Sl(Ai(y.vars.defaults,{ease:"none"})),y._ease=mo(p.ease||i.ease||"none");var L=0,U,F,k;if(Hn(p))p.forEach(function(z){return y.to(M,z,">")}),y.duration();else{A={};for(v in p)v==="ease"||v==="easeEach"||$y(v,p[v],A,p.easeEach);for(v in A)for(U=A[v].sort(function(z,O){return z.t-O.t}),L=0,T=0;T<U.length;T++)F=U[T],k={ease:F.e,duration:(F.t-(T?U[T-1].t:0))/100*c},k[v]=F.v,y.to(M,k,L),L+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!_p&&(vs=Nr(a),Xt.killTweensOf(M),vs=0),fr(x,Nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Wt(x._time)&&ni(f)&&Ey(Nr(a))&&x.data!=="nested")&&(a._tTime=-Nt,a.render(Math.max(0,-u)||0)),m&&P0(Nr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Nt&&!u?l:i<Nt?0:i,h,d,p,_,m,g,x,M,y;if(!c)Ry(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Wt(f%_),f===l?(p=this._repeat,h=c):(m=Wt(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,h=c-h),m=Ma(this._tTime,_),h===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(M&&this._yEase&&X0(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(L0(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),!a&&f&&!s&&!m&&(Si(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xf(this,i,s,o),Si(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Xf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&As(this,1),!s&&!(u&&!a)&&(f||a||g)&&(Si(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){$l||vi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ap(this,c),u=this._ease(c/this._dur),Yy(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(uh(this,0),this.parent||R0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vs&&vs.vars.overwrite!==!0)._first||ol(this),this.parent&&o!==this.timeline.totalDuration()&&ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?zi(i):a,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!s||s==="all")&&Ty(a,l))return s==="all"&&(this._pt=0),ol(this);for(f=this._op=this._op||[],s!=="all"&&(En(s)&&(_={},ii(s,function(x){return _[x]=1}),s=_),s=jy(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,p=h,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&lh(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ol(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ml(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ml(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Xt.killTweensOf(i,s,o)},e})(Kl);Ai(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(r){ln[r]=function(){var e=new Jn,t=Yf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rp=function(e,t,n){return e[t]=n},Z0=function(e,t,n){return e[t](n)},Ky=function(e,t,n,i){return e[t](i.fp,n)},Zy=function(e,t,n){return e.setAttribute(t,n)},Cp=function(e,t){return Jt(e[t])?Z0:vp(e[t])&&e.setAttribute?Zy:Rp},J0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Q0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qy=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},eS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?lh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},tS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ev=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ri=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||J0,this.d=l||this,this.set=c||Rp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tS,this.m=n,this.mt=s,this.tween=i},r})();ii(bp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Mp[r]=1});Ei.TweenMax=Ei.TweenLite=ln;Ei.TimelineLite=Ei.TimelineMax=Jn;Xt=new Jn({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=H0;var go=[],mu={},nS=[],Fm=0,iS=0,Ih=function(e){return(mu[e]||nS).map(function(t){return t()})},Zf=function(){var e=Date.now(),t=[];e-Fm>2&&(Ih("matchMediaInit"),go.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ar.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ih("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fm=e,Ih("matchMedia"))},tv=(function(){function r(t,n){this.selector=n&&jf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=iS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var o=this,a=function(){var c=Gt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=jf(s)),Gt=o,f=i.apply(o,arguments),Jt(f)&&o._r.push(f),Gt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Jt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=go.length;o--;)go[o].id===this.id&&go.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),rS=(function(){function r(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Sr(n)||(n={matches:n});var o=new tv(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ar.matchMedia(n[c]),l&&(go.indexOf(o)<0&&go.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zf):l.addEventListener("change",Zf)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return z0(i)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){En(e)&&(e=zi(e)[0]);var s=fo(e||{}).get,o=n?A0:E0;return n==="native"&&(n=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,n,i)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var i=e.map(function(u){return li.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=mi[t],a=fo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;aa._pt=0,f.init(e,n?u+n:u,aa,0,[e]),f.render(1,f),aa._pt&&Pp(1,aa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=li.to(e,Ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mo(e.ease,ya.ease)),Lm(ya,e||{})},config:function(e){return Lm(Ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ei[a]&&ql(t+" effect requires "+a+" plugin.")}),Ch[t]=function(a,l,c){return n(zi(a),Ai(l||{},s),c)},o&&(Jn.prototype[t]=function(a,l,c){return this.add(Ch[t](a,Sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=mo(t)},parseEase:function(e,t){return arguments.length?mo(e,t):gt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jn(e),i,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&fr(n,i,i._start-i._delay),i=s;return fr(Xt,n,0),n},context:function(e,t){return e?new tv(e,t):Gt},matchMedia:function(e){return new rS(e)},matchMediaRefresh:function(){return go.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zf()},addEventListener:function(e,t){var n=mu[e]||(mu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Fy,wrapYoyo:Oy,distribute:N0,random:F0,snap:U0,normalize:Uy,getUnit:zn,clamp:Ly,splitColor:V0,toArray:zi,selector:jf,mapRange:B0,pipe:Iy,unitize:Ny,interpolate:By,shuffle:I0},install:S0,effects:Ch,ticker:vi,updateRoot:Jn.updateRoot,plugins:mi,globalTimeline:Xt,core:{PropTween:ri,globals:M0,Tween:ln,Timeline:Jn,Animation:Kl,getCache:fo,_removeLinkedListItem:lh,reverting:function(){return Ln},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return _p=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ou[r]=ln[r]});vi.add(Jn.updateRoot);aa=Ou.to({},{duration:0});var sS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},oS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=sS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Nh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(En(s)&&(l={},ii(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}oS(a,s)}}}},li=Ou.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nh("roundProps",$f),Nh("modifiers"),Nh("snap",U0))||Ou;ln.version=Jn.version=li.version="3.14.2";y0=1;xp()&&Ta();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;var Om,xs,ua,Lp,io,Bm,Dp,aS=function(){return typeof window<"u"},Zr={},qs=180/Math.PI,ha=Math.PI/180,No=Math.atan2,km=1e8,Ip=/([A-Z])/g,lS=/(left|right|width|margin|padding|x)/i,cS=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},nv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},iv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pS=function(e,t,n){return e.style[t]=n},mS=function(e,t,n){return e.style.setProperty(t,n)},gS=function(e,t,n){return e._gsap[t]=n},_S=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},xS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},qt="transform",si=qt+"Origin",yS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fr(i,a)}):this.tfm[e]=o.x?o[e]:Fr(i,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},rv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},SS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ip,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dp(),(!s||!s.isStart)&&!n[qt]&&(rv(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sv=function(e,t){var n={target:e,props:[],revert:SS,save:yS};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ov,Qf=function(e,t){var n=xs.createElementNS?xs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xs.createElement(e);return n&&n.style?n:xs.createElement(e)},Mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ip,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,wa(t)||t,1)||""},zm="O,Moz,ms,Ms,Webkit".split(","),wa=function(e,t,n){var i=t||io,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zm[o]:"")+e},ed=function(){aS()&&window.document&&(Om=window,xs=Om.document,ua=xs.documentElement,io=Qf("div")||{style:{}},Qf("div"),qt=wa(qt),si=qt+"Origin",io.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ov=!!wa("perspective"),Dp=li.core.reverting,Lp=1)},Vm=function(e){var t=e.ownerSVGElement,n=Qf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ua.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ua.removeChild(n),s},Gm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},av=function(e){var t,n;try{t=e.getBBox()}catch{t=Vm(e),n=1}return t&&(t.width||t.height)||n||(t=Vm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gm(e,["x","cx","x1"])||0,y:+Gm(e,["y","cy","y1"])||0,width:0,height:0}:t},lv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&av(e))},Rs=function(e,t){if(t){var n=e.style,i;t in Zr&&t!==si&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ip,"-$1").toLowerCase())):n.removeAttribute(t)}},ys=function(e,t,n,i,s,o){var a=new ri(e._pt,t,n,0,1,o?iv:nv);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Hm={deg:1,rad:1,turn:1},MS={grid:1,flex:1},Cs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=io.style,l=lS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||Hm[i]||Hm[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&lv(e),(d||o==="%")&&(Zr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],tn(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xs||!_.appendChild)&&(_=xs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===vi.time&&!m.uncache)return tn(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+i,p=e[u],x?e.style[t]=x:Rs(e,t)}else(d||o==="%")&&!MS[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(io),p=io[u],_.removeChild(io),a.position="absolute";return l&&d&&(m=fo(_),m.time=vi.time,m.width=_[u]),tn(h?p*s/f:p&&s?f/p*s:0)},Fr=function(e,t,n,i){var s;return Lp||ed(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=Jl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ku(Mi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bu[t]&&Bu[t](e,t,n)||Mi(e,t)||T0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cs(e,t,s,n)+n:s},bS=function(e,t,n,i){if(!n||n==="none"){var s=wa(t,e,1),o=s&&Mi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,Q0),l=0,c=0,u,f,h,d,p,_,m,g,x,M,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Mi(e,t)||i,_?e.style[t]=_:Rs(e,t)),u=[n,i],H0(u),n=u[0],i=u[1],h=n.match(oa)||[],T=i.match(oa)||[],T.length){for(;f=oa.exec(i);)m=f[0],x=i.substring(l,f.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=ca(d,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=oa.lastIndex-M.length,M||(M=M||Ti.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(d=Cs(e,t,_,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?iv:nv;return x0.test(i)&&(a.e=0),this._pt=a,a},Wm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wm[n]||n,t[1]=Wm[i]||i,t.join(" ")},wS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Zr[a]&&(l=1,a=a==="transformOrigin"?si:qt),Rs(n,a);l&&(Rs(n,qt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Jl(n,1),o.uncache=1,rv(i)))}},Bu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,n,0,0,wS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Zl=[1,0,0,1,0,0],cv={},uv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xm=function(e){var t=Mi(e,qt);return uv(t)?Zl:t.substr(7).match(v0).map(tn)},Np=function(e,t){var n=e._gsap||fo(e),i=e.style,s=Xm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zl:s):(s===Zl&&!e.offsetParent&&e!==ua&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ua.appendChild(e)),s=Xm(e),l?i.display=l:Rs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},td=function(e,t,n,i,s,o){var a=e._gsap,l=s||Np(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],x=l[5],M=t.split(" "),y=parseFloat(M[0])||0,T=parseFloat(M[1])||0,A,E,v,S;n?l!==Zl&&(E=d*m-p*_)&&(v=y*(m/E)+T*(-_/E)+(_*x-m*g)/E,S=y*(-p/E)+T*(d/E)-(d*x-p*g)/E,y=v,T=S):(A=av(e),y=A.x+(~M[0].indexOf("%")?y/100*A.width:y),T=A.y+(~(M[1]||M[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(g=y-c,x=T-u,a.xOffset=f+(g*d+x*_)-g,a.yOffset=h+(g*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[si]="0px 0px",o&&(ys(o,a,"xOrigin",c,y),ys(o,a,"yOrigin",u,T),ys(o,a,"xOffset",f,a.xOffset),ys(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Jl=function(e,t){var n=e._gsap||new Y0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Mi(e,si)||"0",u,f,h,d,p,_,m,g,x,M,y,T,A,E,v,S,D,P,L,U,F,k,z,O,Z,X,N,se,ne,Se,Ve,Ze;return u=f=h=_=m=g=x=M=y=0,d=p=1,n.svg=!!(e.getCTM&&lv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),i.scale=i.rotate=i.translate="none"),E=Np(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),td(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,A=n.yOrigin||0,E!==Zl&&(P=E[0],L=E[1],U=E[2],F=E[3],u=k=E[4],f=z=E[5],E.length===6?(d=Math.sqrt(P*P+L*L),p=Math.sqrt(F*F+U*U),_=P||L?No(L,P)*qs:0,x=U||F?No(U,F)*qs+_:0,x&&(p*=Math.abs(Math.cos(x*ha))),n.svg&&(u-=T-(T*P+A*U),f-=A-(T*L+A*F))):(Ze=E[6],Se=E[7],N=E[8],se=E[9],ne=E[10],Ve=E[11],u=E[12],f=E[13],h=E[14],v=No(Ze,ne),m=v*qs,v&&(S=Math.cos(-v),D=Math.sin(-v),O=k*S+N*D,Z=z*S+se*D,X=Ze*S+ne*D,N=k*-D+N*S,se=z*-D+se*S,ne=Ze*-D+ne*S,Ve=Se*-D+Ve*S,k=O,z=Z,Ze=X),v=No(-U,ne),g=v*qs,v&&(S=Math.cos(-v),D=Math.sin(-v),O=P*S-N*D,Z=L*S-se*D,X=U*S-ne*D,Ve=F*D+Ve*S,P=O,L=Z,U=X),v=No(L,P),_=v*qs,v&&(S=Math.cos(v),D=Math.sin(v),O=P*S+L*D,Z=k*S+z*D,L=L*S-P*D,z=z*S-k*D,P=O,k=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=tn(Math.sqrt(P*P+L*L+U*U)),p=tn(Math.sqrt(z*z+Ze*Ze)),v=No(k,z),x=Math.abs(v)>2e-4?v*qs:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!uv(Mi(e,qt)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=tn(d),n.scaleY=tn(p),n.rotation=tn(_)+a,n.rotationX=tn(m)+a,n.rotationY=tn(g)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[si]=ku(c)),n.xOffset=n.yOffset=0,n.force3D=Ti.force3D,n.renderTransform=n.svg?AS:ov?hv:ES,n.uncache=0,n},ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uh=function(e,t,n){var i=zn(t);return tn(parseFloat(t)+parseFloat(Cs(e,"x",n+"px",i)))+i},ES=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hv(e,t)},Fs="0deg",Xa="0px",Os=") ",hv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,M=n.zOrigin,y="",T=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==Fs||u!==Fs)){var A=parseFloat(u)*ha,E=Math.sin(A),v=Math.cos(A),S;A=parseFloat(f)*ha,S=Math.cos(A),o=Uh(x,o,E*S*-M),a=Uh(x,a,-Math.sin(A)*-M),l=Uh(x,l,v*S*-M+M)}m!==Xa&&(y+="perspective("+m+Os),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==Xa||a!==Xa||l!==Xa)&&(y+=l!==Xa||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Os),c!==Fs&&(y+="rotate("+c+Os),u!==Fs&&(y+="rotateY("+u+Os),f!==Fs&&(y+="rotateX("+f+Os),(h!==Fs||d!==Fs)&&(y+="skew("+h+", "+d+Os),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Os),x.style[qt]=y||"translate(0, 0)"},AS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,x=n.forceCSS,M=parseFloat(o),y=parseFloat(a),T,A,E,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ha,c*=ha,T=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=ha,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),T*=S,A*=S)),T=tn(T),A=tn(A),E=tn(E),v=tn(v)):(T=f,v=h,A=E=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Cs(d,"x",o,"px"),y=Cs(d,"y",a,"px")),(p||_||m||g)&&(M=tn(M+p-(p*T+_*E)+m),y=tn(y+_-(p*A+_*v)+g)),(i||s)&&(S=d.getBBox(),M=tn(M+i/100*S.width),y=tn(y+s/100*S.height)),S="matrix("+T+","+A+","+E+","+v+","+M+","+y+")",d.setAttribute("transform",S),x&&(d.style[qt]=S)},RS=function(e,t,n,i,s){var o=360,a=En(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?qs:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*km)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*km)%o-~~(c/o)*o)),e._pt=h=new ri(e._pt,t,n,i,c,uS),h.e=u,h.u="deg",e._props.push(n),h},qm=function(e,t){for(var n in t)e[n]=t[n];return e},CS=function(e,t,n){var i=qm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[qt]=t,a=Jl(n,1),Rs(n,qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qt],o[qt]=t,a=Jl(n,1),o[qt]=c);for(l in Zr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=zn(c),p=zn(u),f=d!==p?Cs(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new ri(e._pt,a,l,f,h-f,Jf),e._pt.u=p||0,e._props.push(l));qm(a,i)};ii("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Bu[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(p){return Fr(a,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var fv={name:"css",register:ed,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,x,M,y,T,A,E,v,S;Lp||ed(),this.styles=this.styles||sv(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(mi[_]&&j0(_,t,n,i,e,s)))){if(d=typeof u,p=Bu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=jl(u)),p)p(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ws.lastIndex=0,ws.test(c)||(m=zn(c),g=zn(u),g?m!==g&&(c=Cs(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],En(c)&&~c.indexOf("random(")&&(c=jl(c)),zn(c+"")||c==="auto"||(c+=Ti.units[_]||zn(Fr(e,_))||""),(c+"").charAt(1)==="="&&(c=Fr(e,_))):c=Fr(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(h===1&&Fr(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,a.visibility),ys(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Zr,M){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=Mi(e,"perspective"),D?e.style.perspective=D:Rs(e,"perspective")}f=parseFloat(u)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Jl(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new ri(this._pt,a,qt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,T,"scaleY",T.scaleY,(x?ca(T.scaleY,x+f):f)-T.scaleY||0,Jf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(si,0,a[si]),u=TS(u),T.svg?td(e,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==T.zOrigin&&ys(this,T,"zOrigin",T.zOrigin,g),ys(this,a,_,ku(c),ku(u)));continue}else if(_==="svgOrigin"){td(e,u,1,A,0,this);continue}else if(_ in cv){RS(this,T,_,h,x?ca(h,x+u):u);continue}else if(_==="smoothOrigin"){ys(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){CS(this,u,e);continue}}else _ in a||(_=wa(_)||_);if(M||(f||f===0)&&(h||h===0)&&!cS.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),g=zn(u)||(_ in Ti.units?Ti.units[_]:m),m!==g&&(h=Cs(e,_,c,g)),this._pt=new ri(this._pt,M?T:a,_,h,(x?ca(h,x+f):f)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?dS:Jf),this._pt.u=g||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=fS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=hS);else if(_ in a)bS.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Sp(_,u);continue}M||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}E&&ev(this)},render:function(e,t){if(t.tween._time||!Dp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fr,aliases:pr,getSetter:function(e,t,n){var i=pr[t];return i&&i.indexOf(",")<0&&(t=i),t in Zr&&t!==si&&(e._gsap.x||Fr(e,"x"))?n&&Bm===n?t==="scale"?_S:gS:(Bm=n||{})&&(t==="scale"?vS:xS):e.style&&!vp(e.style[t])?pS:~t.indexOf("-")?mS:Cp(e,t)},core:{_removeProperty:Rs,_getMatrix:Np}};li.utils.checkPrefix=wa;li.core.getStyleSaver=sv;(function(r,e,t,n){var i=ii(r+","+e+","+t,function(s){Zr[s]=1});ii(e,function(s){Ti.units[s]="deg",cv[s]=1}),pr[i[13]]=r+","+e,ii(n,function(s){var o=s.split(":");pr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ti.units[r]="px"});li.registerPlugin(fv);var Le=li.registerPlugin(fv)||li;Le.core.Tween;let qa,Uo,Ym=typeof Symbol=="function"?Symbol():"_split",nd,PS=()=>nd||Ps.register(window.gsap),jm=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ql=r=>typeof r=="string"?Ql(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Ql(t)):e.push(t),e),[]):[r],$m=r=>Ql(r).filter(e=>e instanceof HTMLElement),id=[],Fh=function(){},LS={add:r=>r()},DS=/\s+/g,Km=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),zu={left:0,top:0,width:0,height:0},IS=(r,e)=>{for(;++e<r.length&&r[e]===zu;);return r[e]||zu},Zm=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Jm=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||id),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Qm=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Fo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),rd=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},NS=(r,e,t,n)=>{let i=rd("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},dv=(r,e,t,n,i,s,o,a,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=e,m=r.getBoundingClientRect(),g=m,x=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,y=t.collection,T,A,E,v,S,D,P,L,U,F,k,z,O,Z,X,N,se,ne;for(typeof d=="object"?(E=d.delimiter||d,A=d.replaceWith||""):A=d===""?"":d||" ",T=A!==" ";h<f.length;h++)if(v=f[h],v.nodeType===3){for(X=v.textContent||"",p?X=X.replace(DS," "):x&&(X=X.replace(/\n/g,A+`
`)),_&&(X=_(X,r)),v.textContent=X,S=A||E?X.split(E||A):X.match(a)||id,se=S[S.length-1],L=T?se.slice(-1)===" ":!se,se||S.pop(),g=m,P=T?S[0].charAt(0)===" ":!S[0],P&&Fo(" ",r,v),S[0]||S.shift(),Jm(S,l),s&&c||(v.textContent=""),U=1;U<=S.length;U++)if(N=S[U-1],!p&&x&&N.charAt(0)===`
`&&((u=v.previousSibling)==null||u.remove(),Fo(document.createElement("br"),r,v),N=N.slice(1)),!p&&N==="")Fo(A,r,v);else if(N===" ")r.insertBefore(document.createTextNode(" "),v);else{if(T&&N.charAt(0)===" "&&Fo(" ",r,v),M&&U===1&&!P&&y.indexOf(M.parentNode)>-1?(D=y[y.length-1],D.appendChild(document.createTextNode(n?"":N))):(D=t(n?"":N),Fo(D,r,v),M&&U===1&&!P&&D.insertBefore(M,D.firstChild)),n)for(k=jm?Jm([...jm.segment(N)].map(Se=>Se.segment),l):N.match(a)||id,ne=0;ne<k.length;ne++)D.appendChild(k[ne]===" "?document.createTextNode(" "):n(k[ne]));if(s&&c){if(X=v.textContent=X.substring(N.length+1,X.length),F=D.getBoundingClientRect(),F.top>g.top&&F.left<=g.left){for(z=r.cloneNode(),O=r.childNodes[0];O&&O!==D;)Z=O,O=O.nextSibling,z.appendChild(Z);r.parentNode.insertBefore(z,r),i&&Qm(z)}g=F}(U<S.length||L)&&Fo(U>=S.length?" ":T&&N.slice(-1)===" "?" "+A:A,r,v)}r.removeChild(v),M=0}else v.nodeType===1&&(o&&o.indexOf(v)>-1?(y.indexOf(v.previousSibling)>-1&&y[y.length-1].appendChild(v),M=v):(dv(v,e,t,n,i,s,o,a,l,!0),M=0),i&&Qm(v))};const pv=class mv{constructor(e,t){this.isSplit=!1,PS(),this.elements=$m(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Ym])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Zm)),o[Ym]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Fh(this),this.split(t)}split(e){return(this._ctx||LS).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,d=f&&!h&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+Km.source,"gu"):Km,m=!!e.ignore&&$m(e.ignore),{orig:g,animTime:x,obs:M}=this._data,y;(f||h||u)&&(this.elements.forEach((T,A)=>{g[A]={element:T,html:T.innerHTML,ariaL:T.getAttribute("aria-label"),ariaH:T.getAttribute("aria-hidden")},n==="auto"?T.setAttribute("aria-label",(T.textContent||"").trim()):n==="hidden"&&T.setAttribute("aria-hidden","true");let E=[],v=[],S=[],D=f?rd("char",e,E):null,P=rd("word",e,v),L,U,F,k;if(dv(T,e,P,D,d,i&&(u||d),m,_,p,!1),u){let z=Ql(T.childNodes),O=NS(T,z,e,S),Z,X=[],N=0,se=z.map(Ve=>Ve.nodeType===1?Ve.getBoundingClientRect():zu),ne=zu,Se;for(L=0;L<z.length;L++)Z=z[L],Z.nodeType===1&&(Z.nodeName==="BR"?((!L||z[L-1].nodeName!=="BR")&&(X.push(Z),O(N,L+1)),N=L+1,ne=IS(se,L)):(Se=se[L],L&&Se.top>ne.top&&Se.left<ne.left+ne.width-1&&(O(N,L),N=L),ne=Se));N<L&&O(N,L),X.forEach(Ve=>{var Ze;return(Ze=Ve.parentNode)==null?void 0:Ze.removeChild(Ve)})}if(!h){for(L=0;L<v.length;L++)if(U=v[L],f||!U.nextSibling||U.nextSibling.nodeType!==3)if(s&&!u){for(F=document.createElement("span"),F.style.whiteSpace="nowrap";U.firstChild;)F.appendChild(U.firstChild);U.replaceWith(F)}else U.replaceWith(...U.childNodes);else k=U.nextSibling,k&&k.nodeType===3&&(k.textContent=(U.textContent||"")+(k.textContent||""),U.remove());v.length=0,T.normalize()}this.lines.push(...S),this.words.push(...v),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(T=>{let A=T.cloneNode();return T.replaceWith(A),A.appendChild(T),T.className&&(A.className=T.className.trim()+"-mask"),A.style.overflow="clip",A}))),this.isSplit=!0,Uo&&u&&(a?Uo.addEventListener("loadingdone",this._split):Uo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(y=o&&o(this))&&y.totalTime&&(this._data.anim=x?y.totalTime(x):y),u&&a&&this.elements.forEach((T,A)=>{g[A].width=T.offsetWidth,M&&M.observe(T)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Uo?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Zm),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new mv(e,t)}static register(e){qa=qa||e||window.gsap,qa&&(Ql=qa.utils.toArray,Fh=qa.core.context||Fh),!nd&&window.innerWidth>0&&(Uo=document.fonts,nd=!0)}};pv.version="3.14.2";let Ps=pv;var US="1.3.17";function gv(r,e,t){return Math.max(r,Math.min(e,t))}function FS(r,e,t){return(1-t)*r+t*e}function OS(r,e,t,n){return FS(r,e,1-Math.exp(-t*n))}function BS(r,e){return(r%e+e)%e}var kS=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=gv(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=OS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function zS(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var VS=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=zS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_v=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},eg=100/6,is={passive:!1},GS=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,is),this.element.addEventListener("touchstart",this.onTouchStart,is),this.element.addEventListener("touchmove",this.onTouchMove,is),this.element.addEventListener("touchend",this.onTouchEnd,is)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new _v;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,is),this.element.removeEventListener("touchstart",this.onTouchStart,is),this.element.removeEventListener("touchmove",this.onTouchMove,is),this.element.removeEventListener("touchend",this.onTouchEnd,is)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?eg:n===2?this.window.width:1,s=n===1?eg:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},tg=r=>Math.min(1,1.001-Math.pow(2,-10*r)),HS=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new kS;emitter=new _v;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:M=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=US,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=tg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:x,autoRaf:M,anchors:y,autoToggle:T,allowNestedScroll:A,naiveDimensions:v,stopInertiaOnNavigate:S},this.dimensions=new VS(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new GS(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?(h=document.querySelector(r),h||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(h=r),h){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?p.left:p.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const h=r-this.animatedScroll;h>this.limit/2?r=r-this.limit:h<-this.limit/2&&(r=r+this.limit)}}else r=gv(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=tg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),i&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const T=window.getComputedStyle(r);i.computedStyle=T;const A=T.overflowX,E=T.overflowY;if(s=["auto","overlay","scroll"].includes(A),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight,a=c>f,l=u>h,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const T=e!==0,A=t!==0;T&&s&&a&&(p="x"),A&&o&&l&&(p="y")}if(!p)return!1;let _,m,g,x,M;if(p==="x")_=r.scrollLeft,m=c-f,g=e,x=s,M=a;else if(p==="y")_=r.scrollTop,m=u-h,g=t,x=o,M=l;else return!1;return(g>0?_<m:_>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?BS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function WS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function XS(r,e,t){return e&&WS(r.prototype,e),r}var Cn,gu,xi,Ss,Ms,fa,vv,Ys,Tl,xv,Vr,$i,yv,Sv=function(){return Cn||typeof window<"u"&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},Mv=1,la=[],ft=[],vr=[],wl=Date.now,sd=function(e,t){return t},qS=function(){var e=Tl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,vr),ft=n,vr=i,sd=function(o,a){return t[o](a)}},Es=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},El=function(e){return!!~xv.indexOf(e)},Yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},bc="scrollLeft",Tc="scrollTop",od=function(){return Vr&&Vr.isPressed||ft.cache++},Vu=function(e,t){var n=function i(s){if(s||s===0){Mv&&(xi.history.scrollRestoration="manual");var o=Vr&&Vr.isPressed;s=i.v=Math.round(s)||(Vr&&Vr.iOS?1:0),e(s),i.cacheID=ft.cache,o&&sd("ss",s)}else(t||ft.cache!==i.cacheID||sd("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Qn={s:bc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vu(function(r){return arguments.length?xi.scrollTo(r,gn.sc()):xi.pageXOffset||Ss[bc]||Ms[bc]||fa[bc]||0})},gn={s:Tc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Qn,sc:Vu(function(r){return arguments.length?xi.scrollTo(Qn.sc(),r):xi.pageYOffset||Ss[Tc]||Ms[Tc]||fa[Tc]||0})},ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||Cn.utils.toArray)(e)[0]||(typeof e=="string"&&Cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},YS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ls=function(e,t){var n=t.s,i=t.sc;El(e)&&(e=Ss.scrollingElement||Ms);var s=ft.indexOf(e),o=i===gn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||Yn(e,"scroll",od);var a=ft[s+o],l=a||(ft[s+o]=Vu(Es(e,n),!0)||(El(e)?i:Vu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Cn.getProperty(e,"scrollBehavior")==="smooth"),l},ad=function(e,t,n){var i=e,s=e,o=wl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=wl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(p){var _=a,m=s,g=wl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ya=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ng=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},bv=function(){Tl=Cn.core.globals().ScrollTrigger,Tl&&Tl.core&&qS()},Tv=function(e){return Cn=e||Sv(),!gu&&Cn&&typeof document<"u"&&document.body&&(xi=window,Ss=document,Ms=Ss.documentElement,fa=Ss.body,xv=[xi,Ss,Ms,fa],Cn.utils.clamp,yv=Cn.core.context||function(){},Ys="onpointerenter"in fa?"pointer":"mouse",vv=nn.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=nn.eventTypes=("ontouchstart"in Ms?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ms?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mv=0},500),bv(),gu=1),gu};Qn.op=gn;ft.cache=0;var nn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){gu||Tv(Cn)||console.warn("Please gsap.registerPlugin(Observer)"),Tl||bv();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,x=n.onDrag,M=n.onPress,y=n.onRelease,T=n.onRight,A=n.onLeft,E=n.onUp,v=n.onDown,S=n.onChangeX,D=n.onChangeY,P=n.onChange,L=n.onToggleX,U=n.onToggleY,F=n.onHover,k=n.onHoverEnd,z=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,X=n.onGestureStart,N=n.onGestureEnd,se=n.onWheel,ne=n.onEnable,Se=n.onDisable,Ve=n.onClick,Ze=n.scrollSpeed,Q=n.capture,ie=n.allowClicks,le=n.lockAxis,Be=n.onLockAxis;this.target=a=ti(a)||Ms,this.vars=n,d&&(d=Cn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,Ze=Ze||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(fa).lineHeight)||22);var ke,De,_t,Ee,qe,tt,Xe,j=this,V=0,St=0,lt=n.passive||!u&&n.passive!==!1,Ye=Ls(a,Qn),Me=Ls(a,gn),I=Ye(),b=Me(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",ee=El(a),te=a.ownerDocument||Ss,K=[0,0,0],xe=[0,0,0],ue=0,Ie=function(){return ue=wl()},be=function(Fe,it){return(j.event=Fe)&&d&&YS(Fe.target,d)||it&&G&&Fe.pointerType!=="touch"||O&&O(Fe,it)},oe=function(){j._vx.reset(),j._vy.reset(),De.pause(),f&&f(j)},ce=function(){var Fe=j.deltaX=ng(K),it=j.deltaY=ng(xe),_e=Math.abs(Fe)>=i,Ke=Math.abs(it)>=i;P&&(_e||Ke)&&P(j,Fe,it,K,xe),_e&&(T&&j.deltaX>0&&T(j),A&&j.deltaX<0&&A(j),S&&S(j),L&&j.deltaX<0!=V<0&&L(j),V=j.deltaX,K[0]=K[1]=K[2]=0),Ke&&(v&&j.deltaY>0&&v(j),E&&j.deltaY<0&&E(j),D&&D(j),U&&j.deltaY<0!=St<0&&U(j),St=j.deltaY,xe[0]=xe[1]=xe[2]=0),(Ee||_t)&&(z&&z(j),_t&&(m&&_t===1&&m(j),x&&x(j),_t=0),Ee=!1),tt&&!(tt=!1)&&Be&&Be(j),qe&&(se(j),qe=!1),ke=0},Te=function(Fe,it,_e){K[_e]+=Fe,xe[_e]+=it,j._vx.update(Fe),j._vy.update(it),c?ke||(ke=requestAnimationFrame(ce)):ce()},Ae=function(Fe,it){le&&!Xe&&(j.axis=Xe=Math.abs(Fe)>Math.abs(it)?"x":"y",tt=!0),Xe!=="y"&&(K[2]+=Fe,j._vx.update(Fe,!0)),Xe!=="x"&&(xe[2]+=it,j._vy.update(it,!0)),c?ke||(ke=requestAnimationFrame(ce)):ce()},pe=function(Fe){if(!be(Fe,1)){Fe=Ya(Fe,u);var it=Fe.clientX,_e=Fe.clientY,Ke=it-j.x,We=_e-j.y,Je=j.isDragging;j.x=it,j.y=_e,(Je||(Ke||We)&&(Math.abs(j.startX-it)>=s||Math.abs(j.startY-_e)>=s))&&(_t||(_t=Je?2:1),Je||(j.isDragging=!0),Ae(Ke,We))}},$e=j.onPress=function(ye){be(ye,1)||ye&&ye.button||(j.axis=Xe=null,De.pause(),j.isPressed=!0,ye=Ya(ye),V=St=0,j.startX=j.x=ye.clientX,j.startY=j.y=ye.clientY,j._vx.reset(),j._vy.reset(),Yn(Z?a:te,$i[1],pe,lt,!0),j.deltaX=j.deltaY=0,M&&M(j))},B=j.onRelease=function(ye){if(!be(ye,1)){Xn(Z?a:te,$i[1],pe,!0);var Fe=!isNaN(j.y-j.startY),it=j.isDragging,_e=it&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Ke=Ya(ye);!_e&&Fe&&(j._vx.reset(),j._vy.reset(),u&&ie&&Cn.delayedCall(.08,function(){if(wl()-ue>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(te.createEvent){var We=te.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,xi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(We)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,f&&it&&!Z&&De.restart(!0),_t&&ce(),g&&it&&g(j),y&&y(j,_e)}},he=function(Fe){return Fe.touches&&Fe.touches.length>1&&(j.isGesturing=!0)&&X(Fe,j.isDragging)},ae=function(){return(j.isGesturing=!1)||N(j)},me=function(Fe){if(!be(Fe)){var it=Ye(),_e=Me();Te((it-I)*Ze,(_e-b)*Ze,1),I=it,b=_e,f&&De.restart(!0)}},re=function(Fe){if(!be(Fe)){Fe=Ya(Fe,u),se&&(qe=!0);var it=(Fe.deltaMode===1?l:Fe.deltaMode===2?xi.innerHeight:1)*p;Te(Fe.deltaX*it,Fe.deltaY*it,0),f&&!Z&&De.restart(!0)}},J=function(Fe){if(!be(Fe)){var it=Fe.clientX,_e=Fe.clientY,Ke=it-j.x,We=_e-j.y;j.x=it,j.y=_e,Ee=!0,f&&De.restart(!0),(Ke||We)&&Ae(Ke,We)}},we=function(Fe){j.event=Fe,F(j)},He=function(Fe){j.event=Fe,k(j)},xt=function(Fe){return be(Fe)||Ya(Fe,u)&&Ve(j)};De=j._dc=Cn.delayedCall(h||.25,oe).pause(),j.deltaX=j.deltaY=0,j._vx=ad(0,50,!0),j._vy=ad(0,50,!0),j.scrollX=Ye,j.scrollY=Me,j.isDragging=j.isGesturing=j.isPressed=!1,yv(this),j.enable=function(ye){return j.isEnabled||(Yn(ee?te:a,"scroll",od),o.indexOf("scroll")>=0&&Yn(ee?te:a,"scroll",me,lt,Q),o.indexOf("wheel")>=0&&Yn(a,"wheel",re,lt,Q),(o.indexOf("touch")>=0&&vv||o.indexOf("pointer")>=0)&&(Yn(a,$i[0],$e,lt,Q),Yn(te,$i[2],B),Yn(te,$i[3],B),ie&&Yn(a,"click",Ie,!0,!0),Ve&&Yn(a,"click",xt),X&&Yn(te,"gesturestart",he),N&&Yn(te,"gestureend",ae),F&&Yn(a,Ys+"enter",we),k&&Yn(a,Ys+"leave",He),z&&Yn(a,Ys+"move",J)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Ee=_t=!1,j._vx.reset(),j._vy.reset(),I=Ye(),b=Me(),ye&&ye.type&&$e(ye),ne&&ne(j)),j},j.disable=function(){j.isEnabled&&(la.filter(function(ye){return ye!==j&&El(ye.target)}).length||Xn(ee?te:a,"scroll",od),j.isPressed&&(j._vx.reset(),j._vy.reset(),Xn(Z?a:te,$i[1],pe,!0)),Xn(ee?te:a,"scroll",me,Q),Xn(a,"wheel",re,Q),Xn(a,$i[0],$e,Q),Xn(te,$i[2],B),Xn(te,$i[3],B),Xn(a,"click",Ie,!0),Xn(a,"click",xt),Xn(te,"gesturestart",he),Xn(te,"gestureend",ae),Xn(a,Ys+"enter",we),Xn(a,Ys+"leave",He),Xn(a,Ys+"move",J),j.isEnabled=j.isPressed=j.isDragging=!1,Se&&Se(j))},j.kill=j.revert=function(){j.disable();var ye=la.indexOf(j);ye>=0&&la.splice(ye,1),Vr===j&&(Vr=0)},la.push(j),Z&&El(a)&&(Vr=j),j.enable(_)},XS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();nn.version="3.14.2";nn.create=function(r){return new nn(r)};nn.register=Tv;nn.getAll=function(){return la.slice()};nn.getById=function(r){return la.filter(function(e){return e.vars.id===r})[0]};Sv()&&Cn.registerPlugin(nn);var Pe,ia,ht,Ft,gi,wt,Up,Gu,ec,Al,ll,wc,On,hh,ld,Kn,ig,rg,ra,wv,Oh,Ev,$n,cd,Av,Rv,hs,ud,Fp,da,Op,Rl,hd,Bh,Ec=1,kn=Date.now,kh=kn(),Hi=0,cl=0,sg=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},og=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},jS=function r(){return cl&&requestAnimationFrame(r)},ag=function(){return hh=1},lg=function(){return hh=0},lr=function(e){return e},ul=function(e){return Math.round(e*1e5)/1e5||0},Cv=function(){return typeof window<"u"},Pv=function(){return Pe||Cv()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},bo=function(e){return!!~Up.indexOf(e)},Lv=function(e){return(e==="Height"?Op:ht["inner"+e])||gi["client"+e]||wt["client"+e]},Dv=function(e){return Es(e,"getBoundingClientRect")||(bo(e)?function(){return Su.width=ht.innerWidth,Su.height=Op,Su}:function(){return Or(e)})},$S=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Es(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Lv(s):e["client"+s])||0}},KS=function(e,t){return!t||~vr.indexOf(e)?Dv(e):function(){return Su}},mr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Es(e,n))?o()-Dv(e)()[s]:bo(e)?(gi[n]||wt[n])-Lv(i):e[n]-e["offset"+i])},Ac=function(e,t){for(var n=0;n<ra.length;n+=3)(!t||~t.indexOf(ra[n+1]))&&e(ra[n],ra[n+1],ra[n+2])},pi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},hl=function(e){return typeof e=="number"},js=function(e){return typeof e=="object"},ja=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Oo=Math.abs,Iv="left",Nv="top",Bp="right",kp="bottom",_o="width",vo="height",Cl="Right",Pl="Left",Ll="Top",Dl="Bottom",an="padding",Ii="margin",Ea="Width",zp="Height",pn="px",Ni=function(e){return ht.getComputedStyle(e)},ZS=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Or=function(e,t){var n=t&&Ni(e)[ld]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Uv=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},JS=function(e){return function(t){return Pe.utils.snap(Uv(e),t)}},Vp=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},QS=function(e){return function(t,n){return Vp(Uv(e))(t,n.direction)}},Rc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Cc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ug={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pc={toggleActions:"play",anticipatePin:0},Wu={top:0,left:0,center:.5,bottom:1,right:1},_u=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wu?Wu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Ft.createElement("div"),_=bo(n)||Es(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?wt:n,x=e.indexOf("start")!==-1,M=x?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===gn?Bp:kp)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],vu(p,0,i,x),p},vu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ea]=1,s["border"+a+Ea]=0,s[n.p]=t+"px",Pe.set(e,s)},ut=[],fd={},tc,hg=function(){return kn()-Hi>34&&(tc||(tc=requestAnimationFrame(qr)))},Bo=function(){(!$n||!$n.isPressed||$n.startX>wt.clientWidth)&&(ft.cache++,$n?tc||(tc=requestAnimationFrame(qr)):qr(),Hi||wo("scrollStart"),Hi=kn())},Vh=function(){Rv=ht.innerWidth,Av=ht.innerHeight},fl=function(e){ft.cache++,(e===!0||!On&&!Ev&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!cd||Rv!==ht.innerWidth||Math.abs(ht.innerHeight-Av)>ht.innerHeight*.25))&&Gu.restart(!0)},To={},eM=[],Fv=function r(){return Mn(at,"scrollEnd",r)||ro(!0)},wo=function(e){return To[e]&&To[e].map(function(t){return t()})||eM},di=[],Ov=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},Bv=function(){return ft.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},Gp=function(e,t){var n;for(Kn=0;Kn<ut.length;Kn++)n=ut[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Rl=!0,t&&Ov(t),t||wo("revert")},kv=function(e,t){ft.cache++,(t||!Zn)&&ft.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(ht.history.scrollRestoration=Fp=e)},Zn,xo=0,fg,tM=function(){if(fg!==xo){var e=fg=xo;requestAnimationFrame(function(){return e===xo&&ro(!0)})}},zv=function(){wt.appendChild(da),Op=!$n&&da.offsetHeight||ht.innerHeight,wt.removeChild(da)},dg=function(e){return ec(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ro=function(e,t){if(gi=Ft.documentElement,wt=Ft.body,Up=[ht,Ft,gi,wt],Hi&&!e&&!Rl){bn(at,"scrollEnd",Fv);return}zv(),Zn=at.isRefreshing=!0,Rl||Bv();var n=wo("refreshInit");wv&&at.sort(),t||Gp(),ft.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),Rl=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),hd=1,dg(!0),ut.forEach(function(i){var s=mr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),dg(!1),hd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kv(Fp,1),Gu.pause(),xo++,Zn=2,qr(2),ut.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=at.isRefreshing=!1,wo("refresh")},dd=0,xu=1,Il,qr=function(e){if(e===2||!Zn&&!Rl){at.isUpdating=!0,Il&&Il.update(0);var t=ut.length,n=kn(),i=n-kh>=50,s=t&&ut[0].scroll();if(xu=dd>s?-1:1,Zn||(dd=s),i&&(Hi&&!hh&&n-Hi>200&&(Hi=0,wo("scrollEnd")),ll=kh,kh=n),xu<0){for(Kn=t;Kn-- >0;)ut[Kn]&&ut[Kn].update(0,i);xu=1}else for(Kn=0;Kn<t;Kn++)ut[Kn]&&ut[Kn].update(0,i);at.isUpdating=!1}tc=0},pd=[Iv,Nv,kp,Bp,Ii+Dl,Ii+Cl,Ii+Ll,Ii+Pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yu=pd.concat([_o,vo,"boxSizing","max"+Ea,"max"+zp,"position",Ii,an,an+Ll,an+Cl,an+Dl,an+Pl]),nM=function(e,t,n){pa(n);var i=e._gsap;if(i.spacerIsNative)pa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=pd.length,o=t.style,a=e.style,l;s--;)l=pd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[kp]=a[Bp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_o]=Hu(e,Qn)+pn,o[vo]=Hu(e,gn)+pn,o[an]=a[Ii]=a[Nv]=a[Iv]="0",pa(i),a[_o]=a["max"+Ea]=n[_o],a[vo]=a["max"+zp]=n[vo],a[an]=n[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iM=/([A-Z])/g,pa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(iM,"-$1").toLowerCase())}},Dc=function(e){for(var t=yu.length,n=e.style,i=[],s=0;s<t;s++)i.push(yu[s],n[yu[s]]);return i.t=e,i},rM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Su={left:0,top:0},pg=function(e,t,n,i,s,o,a,l,c,u,f,h,d,p){Vn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?_u("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),hl(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&vu(a,n,i,!0);else{Vn(t)&&(t=t(l));var M=(e||"0").split(" "),y,T,A,E;x=ti(t,l)||wt,y=Or(x)||{},(!y||!y.left&&!y.top)&&Ni(x).display==="none"&&(E=x.style.display,x.style.display="block",y=Or(x),E?x.style.display=E:x.style.removeProperty("display")),T=_u(M[0],y[i.d]),A=_u(M[1]||"0",n),e=y[i.p]-c[i.p]-u+T+s-A,a&&vu(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var v=e+n,S=o._isStart;m="scroll"+i.d2,vu(o,v,i,S&&v>20||!S&&(f?Math.max(wt[m],gi[m]):o.parentNode[m])<=v+1),f&&(c=Or(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+pn))}return d&&x&&(m=Or(x),d.seek(h),g=Or(x),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},sM=/(webkit|moz|length|cssText|inset)/i,mg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!sM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},Vv=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ic=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},gg=function(e,t){var n=Ls(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,p={};c=c||n();var _=Vv(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&qr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Pe.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",n.wheelHandler),at.isTouch&&bn(e,"touchmove",n.wheelHandler),s},at=(function(){function r(t,n){ia||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ud(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!cl){this.update=this.refresh=this.kill=lr;return}n=cg(pi(n)||hl(n)||n.nodeType?{trigger:n}:n,Pc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,M=s.once,y=s.snap,T=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,S=s.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Qn:gn,P=!f&&f!==0,L=ti(n.scroller||ht),U=Pe.core.getCache(L),F=bo(L),k=("pinType"in n?n.pinType:Es(L,"pinType")||F&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Pc.markers,X=F?0:parseFloat(Ni(L)["border"+D.p2+Ea])||0,N=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(N)},ne=$S(L,F,D),Se=KS(L,F),Ve=0,Ze=0,Q=0,ie=Ls(L,D),le,Be,ke,De,_t,Ee,qe,tt,Xe,j,V,St,lt,Ye,Me,I,b,G,ee,te,K,xe,ue,Ie,be,oe,ce,Te,Ae,pe,$e,B,he,ae,me,re,J,we,He;if(N._startClamp=N._endClamp=!1,N._dir=D,m*=45,N.scroller=L,N.scroll=E?E.time.bind(E):ie,De=ie(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(wv=1,n.refreshPriority===-9999&&(Il=N)),U.tweenScroll=U.tweenScroll||{top:gg(L,gn),left:gg(L,Qn)},N.tweenTo=le=U.tweenScroll[D.p],N.scrubDuration=function(_e){he=hl(_e)&&_e,he?B?B.duration(_e):B=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return g&&g(N)}}):(B&&B.progress(1).kill(),B=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(f),pe=0,l||(l=i.vars.id)),y&&((!js(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in wt.style&&Pe.set(F?[wt,gi]:L,{scrollBehavior:"auto"}),ft.forEach(function(_e){return Vn(_e)&&_e.target===(F?Ft.scrollingElement||gi:L)&&(_e.smooth=!1)}),ke=Vn(y.snapTo)?y.snapTo:y.snapTo==="labels"?JS(i):y.snapTo==="labelsDirectional"?QS(i):y.directional!==!1?function(_e,Ke){return Vp(y.snapTo)(_e,kn()-Ze<500?0:Ke.direction)}:Pe.utils.snap(y.snapTo),ae=y.duration||{min:.1,max:2},ae=js(ae)?Al(ae.min,ae.max):Al(ae,ae),me=Pe.delayedCall(y.delay||he/2||.1,function(){var _e=ie(),Ke=kn()-Ze<500,We=le.tween;if((Ke||Math.abs(N.getVelocity())<10)&&!We&&!hh&&Ve!==_e){var Je=(_e-Ee)/Ye,Qt=i&&!P?i.totalProgress():Je,et=Ke?0:(Qt-$e)/(kn()-ll)*1e3||0,kt=Pe.utils.clamp(-Je,1-Je,Oo(et/2)*et/.185),hn=Je+(y.inertia===!1?0:kt),zt,Et,Mt=y,Dn=Mt.onStart,Ut=Mt.onInterrupt,In=Mt.onComplete;if(zt=ke(hn,N),hl(zt)||(zt=hn),Et=Math.max(0,Math.round(Ee+zt*Ye)),_e<=qe&&_e>=Ee&&Et!==_e){if(We&&!We._initted&&We.data<=Oo(Et-_e))return;y.inertia===!1&&(kt=zt-Je),le(Et,{duration:ae(Oo(Math.max(Oo(hn-Qt),Oo(zt-Qt))*.185/et/.05||0)),ease:y.ease||"power3",data:Oo(Et-_e),onInterrupt:function(){return me.restart(!0)&&Ut&&Ut(N)},onComplete:function(){N.update(),Ve=ie(),i&&!P&&(B?B.resetTo("totalProgress",zt,i._tTime/i._tDur):i.progress(zt)),pe=$e=i&&!P?i.totalProgress():N.progress,x&&x(N),In&&In(N)}},_e,kt*Ye,Et-_e-kt*Ye),Dn&&Dn(N,le.tween)}}else N.isActive&&Ve!==_e&&me.restart(!0)}).pause()),l&&(fd[l]=N),h=N.trigger=ti(h||d!==!0&&d),He=h&&h._gsap&&h._gsap.stRevert,He&&(He=He(N)),d=d===!0?h:ti(d),pi(a)&&(a={targets:h,className:a}),d&&(p===!1||p===Ii||(p=!p&&d.parentNode&&d.parentNode.style&&Ni(d.parentNode).display==="flex"?!1:an),N.pin=d,Be=Pe.core.getCache(d),Be.spacer?Me=Be.pinState:(A&&(A=ti(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Be.spacerIsNative=!!A,A&&(Be.spacerState=Dc(A))),Be.spacer=G=A||Ft.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),Be.pinState=Me=Dc(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),N.spacer=G=Be.spacer,Ae=Ni(d),Ie=Ae[p+D.os2],te=Pe.getProperty(d),K=Pe.quickSetter(d,D.a,pn),Gh(d,G,Ae),b=Dc(d)),Z){St=js(Z)?cg(Z,ug):ug,j=Lc("scroller-start",l,L,D,St,0),V=Lc("scroller-end",l,L,D,St,0,j),ee=j["offset"+D.op.d2];var xt=ti(Es(L,"content")||L);tt=this.markerStart=Lc("start",l,xt,D,St,ee,0,E),Xe=this.markerEnd=Lc("end",l,xt,D,St,ee,0,E),E&&(we=Pe.quickSetter([tt,Xe],D.a,pn)),!k&&!(vr.length&&Es(L,"fixedMarkers")===!0)&&(ZS(F?wt:L),Pe.set([j,V],{force3D:!0}),oe=Pe.quickSetter(j,D.a,pn),Te=Pe.quickSetter(V,D.a,pn))}if(E){var ye=E.vars.onUpdate,Fe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){N.update(0,0,1),ye&&ye.apply(E,Fe||[])})}if(N.previous=function(){return ut[ut.indexOf(N)-1]},N.next=function(){return ut[ut.indexOf(N)+1]},N.revert=function(_e,Ke){if(!Ke)return N.kill(!0);var We=_e!==!1||!N.enabled,Je=On;We!==N.isReverted&&(We&&(re=Math.max(ie(),N.scroll.rec||0),Q=N.progress,J=i&&i.progress()),tt&&[tt,Xe,j,V].forEach(function(Qt){return Qt.style.display=We?"none":"block"}),We&&(On=N,N.update(We)),d&&(!T||!N.isActive)&&(We?nM(d,G,Me):Gh(d,G,Ni(d),be)),We||N.update(We),On=Je,N.isReverted=We)},N.refresh=function(_e,Ke,We,Je){if(!((On||!N.enabled)&&!Ke)){if(d&&_e&&Hi){bn(r,"scrollEnd",Fv);return}!Zn&&se&&se(N),On=N,le.tween&&!We&&(le.tween.kill(),le.tween=0),B&&B.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Qt=ne(),et=Se(),kt=E?E.duration():mr(L,D),hn=Ye<=.01||!Ye,zt=0,Et=Je||0,Mt=js(We)?We.end:n.end,Dn=n.endTrigger||h,Ut=js(We)?We.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),In=N.pinnedContainer=n.pinnedContainer&&ti(n.pinnedContainer,N),Ci=h&&Math.max(0,ut.indexOf(N))||0,fn=Ci,dn,xn,Er,Po,C,H,$,Y,q,fe,ge,de,Ce;for(Z&&js(We)&&(de=Pe.getProperty(j,D.p),Ce=Pe.getProperty(V,D.p));fn-- >0;)H=ut[fn],H.end||H.refresh(0,1)||(On=N),$=H.pin,$&&($===h||$===d||$===In)&&!H.isReverted&&(fe||(fe=[]),fe.unshift(H),H.revert(!0,!0)),H!==ut[fn]&&(Ci--,fn--);for(Vn(Ut)&&(Ut=Ut(N)),Ut=sg(Ut,"start",N),Ee=pg(Ut,h,Qt,D,ie(),tt,j,N,et,X,k,kt,E,N._startClamp&&"_startClamp")||(d?-.001:0),Vn(Mt)&&(Mt=Mt(N)),pi(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(pi(Ut)?Ut.split(" ")[0]:"")+Mt:(zt=_u(Mt.substr(2),Qt),Mt=pi(Ut)?Ut:(E?Pe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ee):Ee)+zt,Dn=h)),Mt=sg(Mt,"end",N),qe=Math.max(Ee,pg(Mt||(Dn?"100% 0":kt),Dn,Qt,D,ie()+zt,Xe,V,N,et,X,k,kt,E,N._endClamp&&"_endClamp"))||-.001,zt=0,fn=Ci;fn--;)H=ut[fn]||{},$=H.pin,$&&H.start-H._pinPush<=Ee&&!E&&H.end>0&&(dn=H.end-(N._startClamp?Math.max(0,H.start):H.start),($===h&&H.start-H._pinPush<Ee||$===In)&&isNaN(Ut)&&(zt+=dn*(1-H.progress)),$===d&&(Et+=dn));if(Ee+=zt,qe+=zt,N._startClamp&&(N._startClamp+=zt),N._endClamp&&!Zn&&(N._endClamp=qe||-.001,qe=Math.min(qe,mr(L,D))),Ye=qe-Ee||(Ee-=.01)&&.001,hn&&(Q=Pe.utils.clamp(0,1,Pe.utils.normalize(Ee,qe,re))),N._pinPush=Et,tt&&zt&&(dn={},dn[D.a]="+="+zt,In&&(dn[D.p]="-="+ie()),Pe.set([tt,Xe],dn)),d&&!(hd&&N.end>=mr(L,D)))dn=Ni(d),Po=D===gn,Er=ie(),xe=parseFloat(te(D.a))+Et,!kt&&qe>1&&(ge=(F?Ft.scrollingElement||gi:L).style,ge={style:ge,value:ge["overflow"+D.a.toUpperCase()]},F&&Ni(wt)["overflow"+D.a.toUpperCase()]!=="scroll"&&(ge.style["overflow"+D.a.toUpperCase()]="scroll")),Gh(d,G,dn),b=Dc(d),xn=Or(d,!0),Y=k&&Ls(L,Po?Qn:gn)(),p?(be=[p+D.os2,Ye+Et+pn],be.t=G,fn=p===an?Hu(d,D)+Ye+Et:0,fn&&(be.push(D.d,fn+pn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=fn+pn)),pa(be),In&&ut.forEach(function(Re){Re.pin===In&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),k&&ie(re)):(fn=Hu(d,D),fn&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=fn+pn)),k&&(C={top:xn.top+(Po?Er-Ee:Y)+pn,left:xn.left+(Po?Y:Er-Ee)+pn,boxSizing:"border-box",position:"fixed"},C[_o]=C["max"+Ea]=Math.ceil(xn.width)+pn,C[vo]=C["max"+zp]=Math.ceil(xn.height)+pn,C[Ii]=C[Ii+Ll]=C[Ii+Cl]=C[Ii+Dl]=C[Ii+Pl]="0",C[an]=dn[an],C[an+Ll]=dn[an+Ll],C[an+Cl]=dn[an+Cl],C[an+Dl]=dn[an+Dl],C[an+Pl]=dn[an+Pl],I=rM(Me,C,T),Zn&&ie(0)),i?(q=i._initted,Oh(1),i.render(i.duration(),!0,!0),ue=te(D.a)-xe+Ye+Et,ce=Math.abs(Ye-ue)>1,k&&ce&&I.splice(I.length-2,2),i.render(0,!0,!0),q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Oh(0)):ue=Ye,ge&&(ge.value?ge.style["overflow"+D.a.toUpperCase()]=ge.value:ge.style.removeProperty("overflow-"+D.a));else if(h&&ie()&&!E)for(xn=h.parentNode;xn&&xn!==wt;)xn._pinOffset&&(Ee-=xn._pinOffset,qe-=xn._pinOffset),xn=xn.parentNode;fe&&fe.forEach(function(Re){return Re.revert(!1,!0)}),N.start=Ee,N.end=qe,De=_t=Zn?re:ie(),!E&&!Zn&&(De<re&&ie(re),N.scroll.rec=0),N.revert(!1,!0),Ze=kn(),me&&(Ve=-1,me.restart(!0)),On=0,i&&P&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(hn||Q!==N.progress||E||_||i&&!i._initted)&&(i&&!P&&(i._initted||Q||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ee<-.001&&!Q?Pe.utils.normalize(Ee,qe,0):Q,!0),N.progress=hn||(De-Ee)/Ye===Q?0:Q),d&&p&&(G._pinOffset=Math.round(N.progress*ue)),B&&B.invalidate(),isNaN(de)||(de-=Pe.getProperty(j,D.p),Ce-=Pe.getProperty(V,D.p),Ic(j,D,de),Ic(tt,D,de-(Je||0)),Ic(V,D,Ce),Ic(Xe,D,Ce-(Je||0))),hn&&!Zn&&N.update(),u&&!Zn&&!lt&&(lt=!0,u(N),lt=!1)}},N.getVelocity=function(){return(ie()-_t)/(kn()-ll)*1e3||0},N.endAnimation=function(){ja(N.callbackAnimation),i&&(B?B.progress(1):i.paused()?P||ja(i,N.direction<0,1):ja(i,i.reversed()))},N.labelToScroll=function(_e){return i&&i.labels&&(Ee||N.refresh()||Ee)+i.labels[_e]/i.duration()*Ye||0},N.getTrailing=function(_e){var Ke=ut.indexOf(N),We=N.direction>0?ut.slice(0,Ke).reverse():ut.slice(Ke+1);return(pi(_e)?We.filter(function(Je){return Je.vars.preventOverlaps===_e}):We).filter(function(Je){return N.direction>0?Je.end<=Ee:Je.start>=qe})},N.update=function(_e,Ke,We){if(!(E&&!We&&!_e)){var Je=Zn===!0?re:N.scroll(),Qt=_e?0:(Je-Ee)/Ye,et=Qt<0?0:Qt>1?1:Qt||0,kt=N.progress,hn,zt,Et,Mt,Dn,Ut,In,Ci;if(Ke&&(_t=De,De=E?ie():Je,y&&($e=pe,pe=i&&!P?i.totalProgress():et)),m&&d&&!On&&!Ec&&Hi&&(!et&&Ee<Je+(Je-_t)/(kn()-ll)*m?et=1e-4:et===1&&qe>Je+(Je-_t)/(kn()-ll)*m&&(et=.9999)),et!==kt&&N.enabled){if(hn=N.isActive=!!et&&et<1,zt=!!kt&&kt<1,Ut=hn!==zt,Dn=Ut||!!et!=!!kt,N.direction=et>kt?1:-1,N.progress=et,Dn&&!On&&(Et=et&&!kt?0:et===1?1:kt===1?2:3,P&&(Mt=!Ut&&O[Et+1]!=="none"&&O[Et+1]||O[Et],Ci=i&&(Mt==="complete"||Mt==="reset"||Mt in i))),S&&(Ut||Ci)&&(Ci||f||!i)&&(Vn(S)?S(N):N.getTrailing(S).forEach(function(Er){return Er.endAnimation()})),P||(B&&!On&&!Ec?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",et,i._tTime/i._tDur):(B.vars.totalProgress=et,B.invalidate().restart())):i&&i.totalProgress(et,!!(On&&(Ze||_e)))),d){if(_e&&p&&(G.style[p+D.os2]=Ie),!k)K(ul(xe+ue*et));else if(Dn){if(In=!_e&&et>kt&&qe+1>Je&&Je+1>=mr(L,D),T)if(!_e&&(hn||In)){var fn=Or(d,!0),dn=Je-Ee;mg(d,wt,fn.top+(D===gn?dn:0)+pn,fn.left+(D===gn?0:dn)+pn)}else mg(d,G);pa(hn||In?I:b),ce&&et<1&&hn||K(xe+(et===1&&!In?ue:0))}}y&&!le.tween&&!On&&!Ec&&me.restart(!0),a&&(Ut||M&&et&&(et<1||!Bh))&&ec(a.targets).forEach(function(Er){return Er.classList[hn||M?"add":"remove"](a.className)}),o&&!P&&!_e&&o(N),Dn&&!On?(P&&(Ci&&(Mt==="complete"?i.pause().totalProgress(1):Mt==="reset"?i.restart(!0).pause():Mt==="restart"?i.restart(!0):i[Mt]()),o&&o(N)),(Ut||!Bh)&&(c&&Ut&&zh(N,c),z[Et]&&zh(N,z[Et]),M&&(et===1?N.kill(!1,1):z[Et]=0),Ut||(Et=et===1?1:3,z[Et]&&zh(N,z[Et]))),v&&!hn&&Math.abs(N.getVelocity())>(hl(v)?v:2500)&&(ja(N.callbackAnimation),B?B.progress(1):ja(i,Mt==="reverse"?1:!et,1))):P&&o&&!On&&o(N)}if(Te){var xn=E?Je/E.duration()*(E._caScrollDist||0):Je;oe(xn+(j._isFlipped?1:0)),Te(xn)}we&&we(-Je/E.duration()*(E._caScrollDist||0))}},N.enable=function(_e,Ke){N.enabled||(N.enabled=!0,bn(L,"resize",fl),F||bn(L,"scroll",Bo),se&&bn(r,"refreshInit",se),_e!==!1&&(N.progress=Q=0,De=_t=Ve=ie()),Ke!==!1&&N.refresh())},N.getTween=function(_e){return _e&&le?le.tween:B},N.setPositions=function(_e,Ke,We,Je){if(E){var Qt=E.scrollTrigger,et=E.duration(),kt=Qt.end-Qt.start;_e=Qt.start+kt*_e/et,Ke=Qt.start+kt*Ke/et}N.refresh(!1,!1,{start:og(_e,We&&!!N._startClamp),end:og(Ke,We&&!!N._endClamp)},Je),N.update()},N.adjustPinSpacing=function(_e){if(be&&_e){var Ke=be.indexOf(D.d)+1;be[Ke]=parseFloat(be[Ke])+_e+pn,be[1]=parseFloat(be[1])+_e+pn,pa(be)}},N.disable=function(_e,Ke){if(_e!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ke||B&&B.pause(),re=0,Be&&(Be.uncache=1),se&&Mn(r,"refreshInit",se),me&&(me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!F)){for(var We=ut.length;We--;)if(ut[We].scroller===L&&ut[We]!==N)return;Mn(L,"resize",fl),F||Mn(L,"scroll",Bo)}},N.kill=function(_e,Ke){N.disable(_e,Ke),B&&!Ke&&B.kill(),l&&delete fd[l];var We=ut.indexOf(N);We>=0&&ut.splice(We,1),We===Kn&&xu>0&&Kn--,We=0,ut.forEach(function(Je){return Je.scroller===N.scroller&&(We=1)}),We||Zn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Ke||i.kill()),tt&&[tt,Xe,j,V].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Il===N&&(Il=0),d&&(Be&&(Be.uncache=1),We=0,ut.forEach(function(Je){return Je.pin===d&&We++}),We||(Be.spacer=0)),n.onKill&&n.onKill(N)},ut.push(N),N.enable(!1,!1),He&&He(N),i&&i.add&&!Ye){var it=N.update;N.update=function(){N.update=it,ft.cache++,Ee||qe||N.refresh()},Pe.delayedCall(.01,N.update),Ye=.01,Ee=qe=0}else N.refresh();d&&tM()},r.register=function(n){return ia||(Pe=n||Pv(),Cv()&&window.document&&r.enable(),ia=cl),ia},r.defaults=function(n){if(n)for(var i in n)Pc[i]=n[i];return Pc},r.disable=function(n,i){cl=0,ut.forEach(function(o){return o[i?"kill":"disable"](n)}),Mn(ht,"wheel",Bo),Mn(Ft,"scroll",Bo),clearInterval(wc),Mn(Ft,"touchcancel",lr),Mn(wt,"touchstart",lr),Rc(Mn,Ft,"pointerdown,touchstart,mousedown",ag),Rc(Mn,Ft,"pointerup,touchend,mouseup",lg),Gu.kill(),Ac(Mn);for(var s=0;s<ft.length;s+=3)Cc(Mn,ft[s],ft[s+1]),Cc(Mn,ft[s],ft[s+2])},r.enable=function(){if(ht=window,Ft=document,gi=Ft.documentElement,wt=Ft.body,Pe&&(ec=Pe.utils.toArray,Al=Pe.utils.clamp,ud=Pe.core.context||lr,Oh=Pe.core.suppressOverwrites||lr,Fp=ht.history.scrollRestoration||"auto",dd=ht.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),wt)){cl=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",zv(),jS(),nn.register(Pe),r.isTouch=nn.isTouch,hs=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cd=nn.isTouch===1,bn(ht,"wheel",Bo),Up=[ht,Ft,gi,wt],Pe.matchMedia?(r.matchMedia=function(c){var u=Pe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Pe.addEventListener("matchMediaInit",function(){Bv(),Gp()}),Pe.addEventListener("matchMediaRevert",function(){return Ov()}),Pe.addEventListener("matchMedia",function(){ro(0,1),wo("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Vh(),Vh})):console.warn("Requires GSAP 3.11.0 or later"),Vh(),bn(Ft,"scroll",Bo);var n=wt.hasAttribute("style"),i=wt.style,s=i.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Or(wt),gn.m=Math.round(a.top+gn.sc())||0,Qn.m=Math.round(a.left+Qn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(wt.setAttribute("style",""),wt.removeAttribute("style")),wc=setInterval(hg,250),Pe.delayedCall(.5,function(){return Ec=0}),bn(Ft,"touchcancel",lr),bn(wt,"touchstart",lr),Rc(bn,Ft,"pointerdown,touchstart,mousedown",ag),Rc(bn,Ft,"pointerup,touchend,mouseup",lg),ld=Pe.utils.checkPrefix("transform"),yu.push(ld),ia=kn(),Gu=Pe.delayedCall(.2,ro).pause(),ra=[Ft,"visibilitychange",function(){var c=ht.innerWidth,u=ht.innerHeight;Ft.hidden?(ig=c,rg=u):(ig!==c||rg!==u)&&fl()},Ft,"DOMContentLoaded",ro,ht,"load",ro,ht,"resize",fl],Ac(bn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)Cc(Mn,ft[l],ft[l+1]),Cc(Mn,ft[l],ft[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Bh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wc)||(wc=i)&&setInterval(hg,i),"ignoreMobileResize"in n&&(cd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ac(Mn)||Ac(bn,n.autoRefreshEvents||"none"),Ev=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ti(n),o=ft.indexOf(s),a=bo(s);~o&&ft.splice(o,a?6:2),i&&(a?vr.unshift(ht,i,wt,i,gi,i):vr.unshift(s,i))},r.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?ti(n):n).getBoundingClientRect(),a=o[s?_o:vo]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=ti(n));var o=n.getBoundingClientRect(),a=o[s?_o:vo],l=i==null?a/2:i in Wu?Wu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=To.killAll||[];To={},i.forEach(function(s){return s()})}},r})();at.version="3.14.2";at.saveStyles=function(r){return r?ec(r).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),ud())}}):di};at.revert=function(r,e){return Gp(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?fl(!0):(ia||at.register())&&ro(!0)};at.update=function(r){return++ft.cache&&qr(r===!0?2:0)};at.clearScrollMemory=kv;at.maxScroll=function(r,e){return mr(r,e?Qn:gn)};at.getScrollFunc=function(r,e){return Ls(ti(r),e?Qn:gn)};at.getById=function(r){return fd[r]};at.getAll=function(){return ut.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Hi};at.snapDirectional=Vp;at.addEventListener=function(r,e){var t=To[r]||(To[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=To[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Pe.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),bn(at,"refresh",function(){return s=e.batchMax()})),ec(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var _g=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===gi&&r(wt,t)},Nc={auto:1,scroll:1},oM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Nc[(l=Ni(s)).overflowY]||Nc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!bo(s)&&(Nc[(l=Ni(s)).overflowY]||Nc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Gv=function(e,t,n,i){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&oM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&bn(Ft,nn.eventTypes[0],xg,!1,!0)},onDisable:function(){return Mn(Ft,nn.eventTypes[0],xg,!0)}})},aM=/(input|label|select|textarea)/i,vg,xg=function(e){var t=aM.test(e.target.tagName);(t||vg)&&(e._gsapAllow=!0,vg=t)},lM=function(e){js(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ti(e.target)||gi,u=Pe.core.globals().ScrollSmoother,f=u&&u.get(),h=hs&&(e.content&&ti(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Ls(c,gn),p=Ls(c,Qn),_=1,m=(nn.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,g=0,x=Vn(i)?function(){return i(a)}:function(){return i||2.8},M,y,T=Gv(c,e.type,!0,s),A=function(){return y=!1},E=lr,v=lr,S=function(){l=mr(c,gn),v=Al(hs?1:0,l),n&&(E=Al(0,mr(c,Qn))),M=xo},D=function(){h._gsap.y=ul(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(A);var Z=ul(a.deltaY/2),X=v(d.v-Z);if(h&&X!==d.v+d.offset){d.offset=X-d.v;var N=ul((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px",d.cacheID=ft.cache,qr()}return!0}d.offset&&D(),y=!0},L,U,F,k,z=function(){S(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return h&&Pe.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return hs&&O.type==="touchmove"&&P()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=ul((ht.visualViewport&&ht.visualViewport.scale||1)/m),L.pause(),O!==_&&Hh(c,_>1.01?!0:n?!1:"x"),U=p(),F=d(),S(),M=xo},e.onRelease=e.onGestureStart=function(O,Z){if(d.offset&&D(),!Z)k.restart(!0);else{ft.cache++;var X=x(),N,se;n&&(N=p(),se=N+X*.05*-O.velocityX/.227,X*=_g(p,N,se,mr(c,Qn)),L.vars.scrollX=E(se)),N=d(),se=N+X*.05*-O.velocityY/.227,X*=_g(d,N,se,mr(c,gn)),L.vars.scrollY=v(se),L.invalidate().duration(X).play(.01),(hs&&L.vars.scrollY>=l||N>=l-1)&&Pe.to({},{onUpdate:z,duration:X})}o&&o(O)},e.onWheel=function(){L._ts&&L.pause(),kn()-g>1e3&&(M=0,g=kn())},e.onChange=function(O,Z,X,N,se){if(xo!==M&&S(),Z&&n&&p(E(N[2]===Z?U+(O.startX-O.x):p()+Z-N[1])),X){d.offset&&D();var ne=se[2]===X,Se=ne?F+O.startY-O.y:d()+X-se[1],Ve=v(Se);ne&&Se!==Ve&&(F+=Ve-Se),d(Ve)}(X||Z)&&qr()},e.onEnable=function(){Hh(c,n?!1:"x"),at.addEventListener("refresh",z),bn(ht,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),T.enable()},e.onDisable=function(){Hh(c,!0),Mn(ht,"resize",z),at.removeEventListener("refresh",z),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=hs,hs&&!d()&&d(1),hs&&Pe.ticker.add(lr),k=a._dc,L=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vv(d,d(),function(){return L.pause()})},onUpdate:qr,onComplete:k.vars.onComplete}),a};at.sort=function(r){if(Vn(r))return ut.sort(r);var e=ht.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ut.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new nn(r)};at.normalizeScroll=function(r){if(typeof r>"u")return $n;if(r===!0&&$n)return $n.enable();if(r===!1){$n&&$n.kill(),$n=r;return}var e=r instanceof nn?r:lM(r);return $n&&$n.target===e.target&&$n.kill(),bo(e.target)&&($n=e),e};at.core={_getVelocityProp:ad,_inputObserver:Gv,_scrollers:ft,_proxies:vr,bridge:{ss:function(){Hi||wo("scrollStart"),Hi=kn()},ref:function(){return On}}};Pv()&&Pe.registerPlugin(at);Le.registerPlugin(at);let Br=null,Nl=null;function cM(){return Br||(Br=new HS({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8}),Nl=r=>{Br.raf(r*1e3),at.update()},Le.ticker.add(Nl),Le.ticker.lagSmoothing(500,33),Br)}function uM(){Br&&(Nl&&(Le.ticker.remove(Nl),Nl=null),Br.destroy(),Br=null)}function Xu(){return Br}Le.registerPlugin(Ps);let Ul=!1,Ji=!1,_i=null,yg=!1,Sg=null,Mg=null;const Wh=new Map,hM=new WeakMap;function fM(r){if(Wh.has(r))return Wh.get(r);const e=new Ps(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),Wh.set(r,e),e}function dM(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ji=!0,r.forEach(i=>{i.style.pointerEvents="all"}),_i&&(_i.style.pointerEvents="all"),Le.to(_i,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),Xu()&&Xu().stop(),r.length?Le.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Ji=!1}}):Ji=!1,t.forEach(i=>{Le.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=fM(s);Le.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),Ul=!0}function Xh(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ji=!0,r.forEach(n=>{n.style.pointerEvents="none"}),_i&&(_i.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),Xu()&&Xu().start(),r.length?Le.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{Le.set(t,{opacity:0,transform:"translateY(100%)"}),_i?Le.to(_i,{autoAlpha:0,duration:.25,onComplete:()=>{Ji=!1}}):Ji=!1}}):Ji=!1,Ul=!1}function pM(){if(yg)return;yg=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".receipt-close");_i=document.querySelector(".menu-wrap"),_i&&(_i.style.pointerEvents="none",Le.set(_i,{autoAlpha:0}),Sg=s=>{s.target===_i&&Ul&&!Ji&&Xh()},_i.addEventListener("click",Sg)),r&&(Mg=s=>{s.preventDefault(),Ji&&(Le.killTweensOf([...e,...t]),Ji=!1),Ul?Xh():dM()},r.addEventListener("click",Mg)),n.forEach(s=>{const o=a=>{a.preventDefault(),Ul&&!Ji&&Xh()};s.addEventListener("click",o),hM.set(s,o)});const i=document.getElementById("receipt-datetime");if(i){const s=new Date,a=["SUN","MON","TUE","WED","THU","FRI","SAT"][s.getDay()],l=String(s.getDate()).padStart(2,"0"),c=String(s.getMonth()+1).padStart(2,"0"),u=String(s.getFullYear()).slice(-2);let f=s.getHours();const h=f>=12?"PM":"AM";f=f%12||12;const d=String(f).padStart(2,"0"),p=String(s.getMinutes()).padStart(2,"0"),_=String(s.getSeconds()).padStart(2,"0");i.textContent=`${a} ${l}/${c}/${u} ${d}:${p}:${_} ${h}`}}const fh="183",mM=0,bg=1,gM=2,_M=0,yo=1,vM=2,dl=3,Mr=0,oi=1,Fi=2,xr=0,So=1,nc=2,Tg=3,wg=4,xM=5,Zs=100,yM=101,SM=102,MM=103,bM=104,TM=200,wM=201,EM=202,AM=203,md=204,gd=205,RM=206,CM=207,PM=208,LM=209,DM=210,IM=211,NM=212,UM=213,FM=214,_d=0,vd=1,xd=2,Aa=3,yd=4,Sd=5,Md=6,bd=7,Hv=0,OM=1,BM=2,yr=0,Hp=1,Wp=2,Xp=3,xc=4,qp=5,Yp=6,jp=7,Eg="attached",kM="detached",Wv=300,Eo=301,Ra=302,qh=303,Yh=304,dh=306,Ca=1e3,Gn=1001,qu=1002,wn=1003,Xv=1004,pl=1005,Bt=1006,Mu=1007,bi=1008,yi=1009,qv=1010,Yv=1011,ic=1012,$p=1013,br=1014,ei=1015,Pn=1016,Kp=1017,Zp=1018,rc=1020,jv=35902,$v=35899,Kv=1021,Zv=1022,Vi=1023,Jr=1026,so=1027,Jp=1028,Qp=1029,Pa=1030,em=1031,tm=1033,bu=33776,Tu=33777,wu=33778,Eu=33779,Td=35840,wd=35841,Ed=35842,Ad=35843,Rd=36196,Cd=37492,Pd=37496,Ld=37488,Dd=37489,Id=37490,Nd=37491,Ud=37808,Fd=37809,Od=37810,Bd=37811,kd=37812,zd=37813,Vd=37814,Gd=37815,Hd=37816,Wd=37817,Xd=37818,qd=37819,Yd=37820,jd=37821,$d=36492,Kd=36494,Zd=36495,Jd=36283,Qd=36284,ep=36285,tp=36286,sc=2300,oc=2301,jh=2302,Ag=2303,Rg=2400,Cg=2401,Pg=2402,zM=2500,VM=0,Jv=1,np=2,GM=3200,Qv=0,HM=1,gs="",Kt="srgb",La="srgb-linear",Yu="linear",Tt="srgb",ko=7680,Lg=519,WM=512,XM=513,qM=514,nm=515,YM=516,jM=517,im=518,$M=519,ip=35044,Dg="300 es",gr=2e3,ac=2001;function KM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ZM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function JM(){const r=lc("canvas");return r.style.display="block",r}const Ig={};function ju(...r){const e="THREE."+r.shift();console.log(e,...r)}function ex(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=ex(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function je(...r){r=ex(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function $u(...r){const e=r.join(" ");e in Ig||(Ig[e]=!0,ze(...r))}function QM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const eb={[_d]:vd,[xd]:Md,[yd]:bd,[Aa]:Sd,[vd]:_d,[Md]:xd,[bd]:yd,[Sd]:Aa};class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ng=1234567;const Fl=Math.PI/180,Da=180/Math.PI;function Qi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function rm(r,e){return(r%e+e)%e}function tb(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function nb(r,e,t){return r!==e?(t-r)/(e-r):0}function Ol(r,e,t){return(1-t)*r+t*e}function ib(r,e,t,n){return Ol(r,e,1-Math.exp(-t*n))}function rb(r,e=1){return e-Math.abs(rm(r,e*2)-e)}function sb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ob(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ab(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lb(r,e){return r+Math.random()*(e-r)}function cb(r){return r*(.5-Math.random())}function ub(r){r!==void 0&&(Ng=r);let e=Ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hb(r){return r*Fl}function fb(r){return r*Da}function db(r){return(r&r-1)===0&&r!==0}function pb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mo={DEG2RAD:Fl,RAD2DEG:Da,generateUUID:Qi,clamp:dt,euclideanModulo:rm,mapLinear:tb,inverseLerp:nb,lerp:Ol,damp:ib,pingpong:rb,smoothstep:sb,smootherstep:ob,randInt:ab,randFloat:lb,randFloatSpread:cb,seededRandom:ub,degToRad:hb,radToDeg:fb,isPowerOfTwo:db,ceilPowerOfTwo:pb,floorPowerOfTwo:mb,setQuaternionFromProperEuler:gb,normalize:At,denormalize:Ki};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $h.copy(this).projectOnVector(e),this.sub($h)}reflect(e){return this.sub($h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $h=new W,Ug=new Qr;class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],M=i[4],y=i[7],T=i[2],A=i[5],E=i[8];return s[0]=o*_+a*x+l*T,s[3]=o*m+a*M+l*A,s[6]=o*g+a*y+l*E,s[1]=c*_+u*x+f*T,s[4]=c*m+u*M+f*A,s[7]=c*g+u*y+f*E,s[2]=h*_+d*x+p*T,s[5]=h*m+d*M+p*A,s[8]=h*g+d*y+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kh.makeScale(e,t)),this}rotate(e){return this.premultiply(Kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kh=new rt,Fg=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _b(){const r={enabled:!0,workingColorSpace:La,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(i.r=Yr(i.r),i.g=Yr(i.g),i.b=Yr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=ma(i.r),i.g=ma(i.g),i.b=ma(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gs?Yu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $u("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $u("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[La]:{primaries:e,whitePoint:n,transfer:Yu,toXYZ:Fg,fromXYZ:Og,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Fg,fromXYZ:Og,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}const vt=_b();function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zo;class vb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zo===void 0&&(zo=lc("canvas")),zo.width=e.width,zo.height=e.height;const i=zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xb=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zh(i[o].image)):s.push(Zh(i[o]))}else s=Zh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let yb=0;const Jh=new W;class cn extends Oa{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Gn,i=Gn,s=Bt,o=bi,a=Vi,l=yi,c=cn.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Qi(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Wv;cn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,T=(g+1)/2,A=(u+h)/4,E=(f+_)/4,v=(p+m)/4;return M>y&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=E/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=v/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sb extends Oa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new cn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new sm(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Sb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tx extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mb extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class st{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Vo.setFromMatrixColumn(e,0).length(),s=1/Vo.setFromMatrixColumn(e,1).length(),o=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bb,e,Tb)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),rs.crossVectors(n,ui),rs.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),rs.crossVectors(n,ui)),rs.normalize(),Uc.crossVectors(ui,rs),i[0]=rs.x,i[4]=Uc.x,i[8]=ui.x,i[1]=rs.y,i[5]=Uc.y,i[9]=ui.y,i[2]=rs.z,i[6]=Uc.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],y=n[11],T=n[15],A=i[0],E=i[4],v=i[8],S=i[12],D=i[1],P=i[5],L=i[9],U=i[13],F=i[2],k=i[6],z=i[10],O=i[14],Z=i[3],X=i[7],N=i[11],se=i[15];return s[0]=o*A+a*D+l*F+c*Z,s[4]=o*E+a*P+l*k+c*X,s[8]=o*v+a*L+l*z+c*N,s[12]=o*S+a*U+l*O+c*se,s[1]=u*A+f*D+h*F+d*Z,s[5]=u*E+f*P+h*k+d*X,s[9]=u*v+f*L+h*z+d*N,s[13]=u*S+f*U+h*O+d*se,s[2]=p*A+_*D+m*F+g*Z,s[6]=p*E+_*P+m*k+g*X,s[10]=p*v+_*L+m*z+g*N,s[14]=p*S+_*U+m*O+g*se,s[3]=x*A+M*D+y*F+T*Z,s[7]=x*E+M*P+y*k+T*X,s[11]=x*v+M*L+y*z+T*N,s[15]=x*S+M*U+y*O+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*d-c*h,M=a*d-c*f,y=a*h-l*f,T=o*d-c*u,A=o*h-l*u,E=o*f-a*u;return t*(_*x-m*M+g*y)-n*(p*x-m*T+g*A)+i*(p*M-_*T+g*E)-s*(p*y-_*A+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*a-n*o,M=t*l-i*o,y=t*c-s*o,T=n*l-i*a,A=n*c-s*a,E=i*c-s*l,v=u*_-f*p,S=u*m-h*p,D=u*g-d*p,P=f*m-h*_,L=f*g-d*_,U=h*g-d*m,F=x*U-M*L+y*P+T*D-A*S+E*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(a*U-l*L+c*P)*k,e[1]=(i*L-n*U-s*P)*k,e[2]=(_*E-m*A+g*T)*k,e[3]=(h*A-f*E-d*T)*k,e[4]=(l*D-o*U-c*S)*k,e[5]=(t*U-i*D+s*S)*k,e[6]=(m*y-p*E-g*M)*k,e[7]=(u*E-h*y+d*M)*k,e[8]=(o*L-a*D+c*v)*k,e[9]=(n*D-t*L-s*v)*k,e[10]=(p*A-_*y+g*x)*k,e[11]=(f*y-u*A-d*x)*k,e[12]=(a*S-o*P-l*v)*k,e[13]=(t*P-n*S+i*v)*k,e[14]=(_*M-p*T-m*x)*k,e[15]=(u*T-f*M+h*x)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,p=s*f,_=o*u,m=o*f,g=a*f,x=l*c,M=l*u,y=l*f,T=n.x,A=n.y,E=n.z;return i[0]=(1-(_+g))*T,i[1]=(d+y)*T,i[2]=(p-M)*T,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(h+g))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(p+M)*E,i[9]=(m-x)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Vo.set(i[0],i[1],i[2]).length();const a=Vo.set(i[4],i[5],i[6]).length(),l=Vo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),qi.copy(this);const c=1/o,u=1/a,f=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=f,qi.elements[9]*=f,qi.elements[10]*=f,t.setFromRotationMatrix(qi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=gr,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===gr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ac)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=gr,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===gr)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===ac)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vo=new W,qi=new st,bb=new W(0,0,0),Tb=new W(1,1,1),rs=new W,Uc=new W,ui=new W,Bg=new st,kg=new Qr;class Tr{constructor(e=0,t=0,n=0,i=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wb=0;const zg=new W,Go=new Qr,Ar=new st,Fc=new W,$a=new W,Eb=new W,Ab=new Qr,Vg=new W(1,0,0),Gg=new W(0,1,0),Hg=new W(0,0,1),Wg={type:"added"},Rb={type:"removed"},Ho={type:"childadded",child:null},Qh={type:"childremoved",child:null};class Yt extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new W,t=new Tr,n=new Qr,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(Vg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt($a,Fc,this.up):Ar.lookAt(Fc,$a,this.up),this.quaternion.setFromRotationMatrix(Ar),i&&(Ar.extractRotation(i.matrixWorld),Go.setFromRotationMatrix(Ar),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wg),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rb),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wg),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new W(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function tf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=rm(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=tf(o,s,e+1/3),this.g=tf(o,s,e),this.b=tf(o,s,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=nx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return vt.workingToColorSpace(Fn.copy(this),e),Math.round(dt(Fn.r*255,0,255))*65536+Math.round(dt(Fn.g*255,0,255))*256+Math.round(dt(Fn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,i=Fn.g,s=Fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Kt){vt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,n=Fn.g,i=Fn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Oc);const n=Ol(ss.h,Oc.h,t),i=Ol(ss.s,Oc.s,t),s=Ol(ss.l,Oc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ne;Ne.NAMES=nx;class Ao{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ph extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yi=new W,Rr=new W,nf=new W,Cr=new W,Wo=new W,Xo=new W,Xg=new W,rf=new W,sf=new W,of=new W,af=new Vt,lf=new Vt,cf=new Vt;class Zi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yi.subVectors(e,t),i.cross(Yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yi.subVectors(i,t),Rr.subVectors(n,t),nf.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(Rr),l=Yi.dot(nf),c=Rr.dot(Rr),u=Rr.dot(nf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,t),lf.fromBufferAttribute(e,n),cf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(e,t,n,i){return Yi.subVectors(n,t),Rr.subVectors(e,t),Yi.cross(Rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Yi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Wo.subVectors(i,n),Xo.subVectors(s,n),rf.subVectors(e,n);const l=Wo.dot(rf),c=Xo.dot(rf);if(l<=0&&c<=0)return t.copy(n);sf.subVectors(e,i);const u=Wo.dot(sf),f=Xo.dot(sf);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wo,o);of.subVectors(e,s);const d=Wo.dot(of),p=Xo.dot(of);if(p>=0&&d<=p)return t.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Xo,a);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Xg.subVectors(s,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Xg,a);const g=1/(m+_+h);return o=_*g,a=h*g,t.copy(n).addScaledVector(Wo,o).addScaledVector(Xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bc.copy(n.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),kc.subVectors(this.max,Ka),qo.subVectors(e.a,Ka),Yo.subVectors(e.b,Ka),jo.subVectors(e.c,Ka),os.subVectors(Yo,qo),as.subVectors(jo,Yo),Bs.subVectors(qo,jo);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Bs.z,Bs.y,os.z,0,-os.x,as.z,0,-as.x,Bs.z,0,-Bs.x,-os.y,os.x,0,-as.y,as.x,0,-Bs.y,Bs.x,0];return!uf(t,qo,Yo,jo,kc)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,qo,Yo,jo,kc))?!1:(zc.crossVectors(os,as),t=[zc.x,zc.y,zc.z],uf(t,qo,Yo,jo,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pr=[new W,new W,new W,new W,new W,new W,new W,new W],ji=new W,Bc=new tr,qo=new W,Yo=new W,jo=new W,os=new W,as=new W,Bs=new W,Ka=new W,kc=new W,zc=new W,ks=new W;function uf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ks.fromArray(r,s);const a=i.x*Math.abs(ks.x)+i.y*Math.abs(ks.y)+i.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),u=n.dot(ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kr=Pb();function Pb(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Lb(r){Math.abs(r)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),r=dt(r,-65504,65504),kr.floatView[0]=r;const e=kr.uint32View[0],t=e>>23&511;return kr.baseTable[t]+((e&8388607)>>kr.shiftTable[t])}function Db(r){const e=r>>10;return kr.uint32View[0]=kr.mantissaTable[kr.offsetTable[e]+(r&1023)]+kr.exponentTable[e],kr.floatView[0]}class Vc{static toHalfFloat(e){return Lb(e)}static fromHalfFloat(e){return Db(e)}}const sn=new W,Gc=new Ue;let Ib=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ib++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ip,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}}class ix extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rx extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wi extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Nb=new tr,Za=new W,hf=new W;class wr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Za,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(hf)),this.expandByPoint(Za.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ub=0;const Pi=new st,ff=new Yt,$o=new W,hi=new tr,Ja=new tr,Sn=new W;class Wn extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KM(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ja.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(hi.min,Ja.min),hi.expandByPoint(Sn),Sn.addVectors(hi.max,Ja.max),hi.expandByPoint(Sn)):(hi.expandByPoint(Ja.min),hi.expandByPoint(Ja.max))}hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&($o.fromBufferAttribute(e,c),Sn.add($o)),i=Math.max(i,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new W,l[v]=new W;const c=new W,u=new W,f=new W,h=new Ue,d=new Ue,p=new Ue,_=new W,m=new W;function g(v,S,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,D),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,D),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[v].add(_),a[S].add(_),a[D].add(_),l[v].add(m),l[S].add(m),l[D].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,S=x.length;v<S;++v){const D=x[v],P=D.start,L=D.count;for(let U=P,F=P+L;U<F;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new W,y=new W,T=new W,A=new W;function E(v){T.fromBufferAttribute(i,v),A.copy(T);const S=a[v];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(A,S);const P=y.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,S=x.length;v<S;++v){const D=x[v],P=D.start,L=D.count;for(let U=P,F=P+L;U<F;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Ht(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ip,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new W;class am{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ju("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new am(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ju("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ob=0;class er extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=So,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==md&&(n.blendSrc=this.blendSrc),this.blendDst!==gd&&(n.blendDst=this.blendDst),this.blendEquation!==Zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lr=new W,df=new W,Hc=new W,ls=new W,pf=new W,Wc=new W,mf=new W;class yc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){df.copy(e).add(t).multiplyScalar(.5),Hc.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(df);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hc),a=ls.dot(this.direction),l=-ls.dot(Hc),c=ls.lengthSq(),u=Math.abs(1-o*o);let f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(df).addScaledVector(Hc,h),d}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const n=Lr.dot(this.direction),i=Lr.dot(Lr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,i,s){pf.subVectors(t,e),Wc.subVectors(n,e),mf.crossVectors(pf,Wc);let o=this.direction.dot(mf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const l=a*this.direction.dot(Wc.crossVectors(ls,Wc));if(l<0)return null;const c=a*this.direction.dot(pf.cross(ls));if(c<0||l+c>o)return null;const u=-a*ls.dot(mf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qg=new st,zs=new yc,Xc=new wr,Yg=new W,qc=new W,Yc=new W,jc=new W,gf=new W,$c=new W,jg=new W,Kc=new W;class un extends Yt{constructor(e=new Wn,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(gf.fromBufferAttribute(f,e),o?$c.addScaledVector(gf,u):$c.addScaledVector(gf.sub(t),u))}t.add($c)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(s),zs.copy(e.ray).recast(e.near),!(Xc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Xc,Yg)===null||zs.origin.distanceToSquared(Yg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),zs.copy(e.ray).applyMatrix4(qg),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,T=M;y<T;y+=3){const A=a.getX(y),E=a.getX(y+1),v=a.getX(y+2);i=Zc(this,g,e,n,c,u,f,A,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Zc(this,o,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,T=M;y<T;y+=3){const A=y,E=y+1,v=y+2;i=Zc(this,g,e,n,c,u,f,A,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,M=m+1,y=m+2;i=Zc(this,o,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bb(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mr,a),l===null)return null;Kc.copy(a),Kc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Kc);return c<t.near||c>t.far?null:{distance:c,point:Kc.clone(),object:r}}function Zc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qc),r.getVertexPosition(l,Yc),r.getVertexPosition(c,jc);const u=Bb(r,e,t,n,qc,Yc,jc,jg);if(u){const f=new W;Zi.getBarycoord(jg,qc,Yc,jc,f),i&&(u.uv=Zi.getInterpolatedAttribute(i,a,l,c,f,new Ue)),s&&(u.uv1=Zi.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};Zi.getNormal(qc,Yc,jc,h.normal),u.face=h,u.barycoord=f}return u}const $g=new W,Kg=new Vt,Zg=new Vt,kb=new W,Jg=new st,Jc=new W,_f=new wr,Qg=new st,vf=new yc;class zb extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eg,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingBox.expandByPoint(Jc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingSphere.expandByPoint(Jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_f.copy(this.boundingSphere),_f.applyMatrix4(i),e.ray.intersectsSphere(_f)!==!1&&(Qg.copy(i).invert(),vf.copy(e.ray).applyMatrix4(Qg),!(this.boundingBox!==null&&vf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kM?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kg.fromBufferAttribute(i.attributes.skinIndex,e),Zg.fromBufferAttribute(i.attributes.skinWeight,e),$g.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Zg.getComponent(s);if(o!==0){const a=Kg.getComponent(s);Jg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kb.copy($g).applyMatrix4(Jg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sx extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mh extends cn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=wn,u=wn,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const e_=new st,Vb=new st;class lm{constructor(e=[],t=[]){this.uuid=Qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Vb;e_.multiplyMatrices(a,t[s]),e_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mh(t,e,e,Vi,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new sx),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class rp extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ko=new st,t_=new st,Qc=[],n_=new tr,Gb=new st,Qa=new un,el=new wr;class Hb extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rp(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ko),n_.copy(e.boundingBox).applyMatrix4(Ko),this.boundingBox.union(n_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ko),el.copy(e.boundingSphere).applyMatrix4(Ko),this.boundingSphere.union(el)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qa.geometry=this.geometry,Qa.material=this.material,Qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(n),e.ray.intersectsSphere(el)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ko),t_.multiplyMatrices(n,Ko),Qa.matrixWorld=t_,Qa.raycast(e,Qc);for(let o=0,a=Qc.length;o<a;o++){const l=Qc[o];l.instanceId=s,l.object=this,t.push(l)}Qc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mh(new Float32Array(i*this.count),i,this.count,Jp,ei));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xf=new W,Wb=new W,Xb=new rt;class $s{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xf.subVectors(n,t).cross(Wb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xb.getNormalMatrix(e),i=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new wr,qb=new Ue(.5,.5),eu=new W;class cm{constructor(e=new $s,t=new $s,n=new $s,i=new $s,s=new $s,o=new $s){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],x=s[12],M=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-o,d-u,g-p,T-x).normalize(),i[1].setComponents(c+o,d+u,g+p,T+x).normalize(),i[2].setComponents(c+a,d+f,g+_,T+M).normalize(),i[3].setComponents(c-a,d-f,g-_,T-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,d-h,g-m,T-y).normalize();else if(i[4].setComponents(c-l,d-h,g-m,T-y).normalize(),t===gr)i[5].setComponents(c+l,d+h,g+m,T+y).normalize();else if(t===ac)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const t=qb.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(eu.x=i.normal.x>0?e.max.x:e.min.x,eu.y=i.normal.y>0?e.max.y:e.min.y,eu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ox extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ku=new W,Zu=new W,i_=new st,tl=new yc,tu=new wr,yf=new W,r_=new W;class um extends Yt{constructor(e=new Wn,t=new ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ku.fromBufferAttribute(t,i-1),Zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ku.distanceTo(Zu);e.setAttribute("lineDistance",new wi(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(i),tu.radius+=s,e.ray.intersectsSphere(tu)===!1)return;i_.copy(i).invert(),tl.copy(e.ray).applyMatrix4(i_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=u.getX(_),x=u.getX(_+1),M=nu(this,e,tl,l,g,x,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(d),g=nu(this,e,tl,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=nu(this,e,tl,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=nu(this,e,tl,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nu(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ku.fromBufferAttribute(a,i),Zu.fromBufferAttribute(a,s),t.distanceSqToSegment(Ku,Zu,yf,r_)>n)return;yf.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(yf);if(!(c<e.near||c>e.far))return{distance:c,point:r_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const s_=new W,o_=new W;class Yb extends um{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)s_.fromBufferAttribute(t,i),o_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+s_.distanceTo(o_);e.setAttribute("lineDistance",new wi(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jb extends um{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ax extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const a_=new st,sp=new yc,iu=new wr,ru=new W;class hm extends Yt{constructor(e=new Wn,t=new ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(i),iu.radius+=s,e.ray.intersectsSphere(iu)===!1)return;a_.copy(i).invert(),sp.copy(e.ray).applyMatrix4(a_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,_=d;p<_;p++){const m=c.getX(p);ru.fromBufferAttribute(f,m),l_(ru,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,_=d;p<_;p++)ru.fromBufferAttribute(f,p),l_(ru,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function l_(r,e,t,n,i,s,o){const a=sp.distanceSqToPoint(r);if(a<t){const l=new W;sp.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class lx extends cn{constructor(e=[],t=Eo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends cn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cc extends cn{constructor(e,t,n=br,i,s,o,a=wn,l=wn,c,u=Jr,f=1){if(u!==Jr&&u!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kb extends cc{constructor(e,t=br,n=Eo,i,s,o=wn,a=wn,l,c=Jr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cx extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sc extends Wn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(u,3)),this.setAttribute("uv",new wi(f,2));function p(_,m,g,x,M,y,T,A,E,v,S){const D=y/E,P=T/v,L=y/2,U=T/2,F=A/2,k=E+1,z=v+1;let O=0,Z=0;const X=new W;for(let N=0;N<z;N++){const se=N*P-U;for(let ne=0;ne<k;ne++){const Se=ne*D-L;X[_]=Se*x,X[m]=se*M,X[g]=F,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=A>0?1:-1,u.push(X.x,X.y,X.z),f.push(ne/E),f.push(1-N/v),O+=1}}for(let N=0;N<v;N++)for(let se=0;se<E;se++){const ne=h+se+k*N,Se=h+se+k*(N+1),Ve=h+(se+1)+k*(N+1),Ze=h+(se+1)+k*N;l.push(ne,Se,Ze),l.push(Se,Ve,Ze),Z+=6}a.addGroup(d,Z,S),d+=Z,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class es extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-o;for(let M=0;M<c;M++){const y=M*f-s;p.push(y,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const M=x+c*g,y=x+c*(g+1),T=x+1+c*(g+1),A=x+1+c*g;d.push(M,y,A),d.push(y,T,A)}this.setIndex(d),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(_,3)),this.setAttribute("uv",new wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class ux extends er{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ia(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jn(r){const e={};for(let t=0;t<r.length;t++){const n=Ia(r[t]);for(const i in n)e[i]=n[i]}return e}function Zb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const uc={clone:Ia,merge:jn};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fx extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fm extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends fm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eT extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function su(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nT(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function c_(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function dx(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iT extends Ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rg,endingEnd:Rg}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cg:s=e,a=2*t-n;break;case Pg:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cg:o=e,l=2*n-t;break;case Pg:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let T=0;T!==a;++T)s[T]=g*o[u+T]+x*o[c+T]+M*o[l+T]+y*o[f+T];return s}}class rT extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class sT extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class oT extends Ba{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*m+o[l+g]*_;return s}const d=a*2,p=e-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],x=p*d+_*2,M=h[x],y=h[x+1],T=e*d+_*2,A=f[T],E=f[T+1];let v=(n-t)/(i-t),S,D,P,L,U;for(let F=0;F<8;F++){S=v*v,D=S*v,P=1-v,L=P*P,U=L*P;const z=U*t+3*L*v*M+3*P*S*A+D*i-n;if(Math.abs(z)<1e-10)break;const O=3*L*(M-t)+6*P*v*(A-M)+3*S*(i-A);if(Math.abs(O)<1e-10)break;v=v-z/O,v=Math.max(0,Math.min(1,v))}s[_]=U*m+3*L*v*y+3*P*S*E+D*g}return s}}class nr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=su(t,this.TimeBufferType),this.values=su(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:su(e.times,Array),values:su(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new oT(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case sc:t=this.InterpolantFactoryMethodDiscrete;break;case oc:t=this.InterpolantFactoryMethodLinear;break;case jh:t=this.InterpolantFactoryMethodSmooth;break;case Ag:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sc;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return jh;case this.InterpolantFactoryMethodBezier:return Ag}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ZM(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nr.prototype.ValueTypeName="";nr.prototype.TimeBufferType=Float32Array;nr.prototype.ValueBufferType=Float32Array;nr.prototype.DefaultInterpolation=oc;class ka extends nr{constructor(e,t,n){super(e,t,n)}}ka.prototype.ValueTypeName="bool";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=sc;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;class px extends nr{constructor(e,t,n,i){super(e,t,n,i)}}px.prototype.ValueTypeName="color";class Na extends nr{constructor(e,t,n,i){super(e,t,n,i)}}Na.prototype.ValueTypeName="number";class aT extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ua extends nr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}}Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends nr{constructor(e,t,n){super(e,t,n)}}za.prototype.ValueTypeName="string";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=sc;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends nr{constructor(e,t,n,i){super(e,t,n,i)}}Fa.prototype.ValueTypeName="vector";class lT{constructor(e="",t=-1,n=[],i=zM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(uT(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(nr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=nT(l);l=c_(l,1,u),c=c_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Na(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return je("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,p,_){if(d.length!==0){const m=[],g=[];dx(d,m,g,p),m.length!==0&&_.push(new f(h,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)d[h[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==h[p].morphTargets.length;++x){const M=h[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new Na(".morphTargetInfluence["+_+"]",m,g))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Fa,d+".position",h,"pos",i),n(Ua,d+".quaternion",h,"rot",i),n(Fa,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Na;case"vector":case"vector2":case"vector3":case"vector4":return Fa;case"color":return px;case"quaternion":return Ua;case"bool":case"boolean":return ka;case"string":return za}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function uT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cT(r.type);if(r.times===void 0){const t=[],n=[];dx(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Wr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(u_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!u_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function u_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class mx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hT=new mx;class Co{constructor(e){this.manager=e!==void 0?e:hT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dr={};class fT extends Error{constructor(e,t){super(e),this.response=t}}class dm extends Co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dr[e]!==void 0){Dr[e].push({onLoad:t,onProgress:n,onError:i});return}Dr[e]=[],Dr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){f.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let A=0,E=u.length;A<E;A++){const v=u[A];v.onProgress&&v.onProgress(T)}g.enqueue(y),x()}},M=>{g.error(M)})}}});return new Response(m)}else throw new fT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Wr.add(`file:${e}`,c);const u=Dr[e];delete Dr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Dr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zo=new WeakMap;class dT extends Co{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Zo.get(o);f===void 0&&(f=[],Zo.set(o,f)),f.push({onLoad:t,onError:i})}return o}const a=lc("img");function l(){u(),t&&t(this);const f=Zo.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Zo.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Wr.remove(`image:${e}`);const h=Zo.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}Zo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class pT extends Co{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new mh,a=new dm(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Gn,o.wrapT=c.wrapT!==void 0?c.wrapT:Gn,o.magFilter=c.magFilter!==void 0?c.magFilter:Bt,o.minFilter=c.minFilter!==void 0?c.minFilter:Bt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=bi),c.mipmapCount===1&&(o.minFilter=Bt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class gh extends Co{constructor(e){super(e)}load(e,t,n,i){const s=new cn,o=new dT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class _h extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sf=new st,h_=new W,f_=new W;class pm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cm,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),t.position.copy(h_),f_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(f_),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ac||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ou=new W,au=new Qr,rr=new W;class gx extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ou,au,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,au,rr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ou,au,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,au,rr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new W,d_=new Ue,p_=new Ue;class Rn extends gx{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,d_,p_),t.subVectors(p_,d_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mT extends pm{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Da*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class op extends _h{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new mT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class gT extends pm{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class mm extends _h{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Va extends gx{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _T extends pm{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends _h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new _T}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gm extends _h{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Mf=new WeakMap;class vT extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Mf.has(o)===!0)i&&i(Mf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Mf.set(l,c),Wr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Wr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jo=-90,Qo=1;class xT extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Jo,Qo,e,t);i.layers=this.layers,this.add(i);const s=new Rn(Jo,Qo,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Jo,Qo,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Jo,Qo,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Jo,Qo,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Jo,Qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class yT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _m="\\[\\]\\.:\\/",ST=new RegExp("["+_m+"]","g"),vm="[^"+_m+"]",MT="[^"+_m.replace("\\.","")+"]",bT=/((?:WC+[\/:])*)/.source.replace("WC",vm),TT=/(WCOD+)?/.source.replace("WCOD",MT),wT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vm),ET=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vm),AT=new RegExp("^"+bT+TT+wT+ET+"$"),RT=["material","materials","bones","map"];class CT{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ST,"")}static parseTrackName(e){const t=AT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);RT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=CT;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const m_=new st;class _x{constructor(e,t,n=0,i=1/0){this.ray=new yc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return m_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(m_),this}intersectObject(e,t=!0,n=[]){return ap(e,this,n,t),n.sort(g_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ap(e[i],this,n,t);return n.sort(g_),n}}function g_(r,e){return r.distance-e.distance}function ap(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ap(s[o],e,t,!0)}}class xm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=PT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function PT(){this._document.hidden===!1&&this.reset()}function __(r,e,t,n){const i=LT(n);switch(t){case Kv:return r*e;case Jp:return r*e/i.components*i.byteLength;case Qp:return r*e/i.components*i.byteLength;case Pa:return r*e*2/i.components*i.byteLength;case em:return r*e*2/i.components*i.byteLength;case Zv:return r*e*3/i.components*i.byteLength;case Vi:return r*e*4/i.components*i.byteLength;case tm:return r*e*4/i.components*i.byteLength;case bu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wd:case Ad:return Math.max(r,16)*Math.max(e,8)/4;case Td:case Ed:return Math.max(r,8)*Math.max(e,8)/2;case Rd:case Cd:case Ld:case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pd:case Id:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $d:case Kd:case Zd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jd:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LT(r){switch(r){case yi:case qv:return{byteLength:1,components:1};case ic:case Yv:case Pn:return{byteLength:2,components:1};case Kp:case Zp:return{byteLength:2,components:4};case br:case $p:case ei:return{byteLength:4,components:1};case jv:case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);function vx(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function DT(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var IT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:IT,alphahash_pars_fragment:NT,alphamap_fragment:UT,alphamap_pars_fragment:FT,alphatest_fragment:OT,alphatest_pars_fragment:BT,aomap_fragment:kT,aomap_pars_fragment:zT,batching_pars_vertex:VT,batching_vertex:GT,begin_vertex:HT,beginnormal_vertex:WT,bsdfs:XT,iridescence_fragment:qT,bumpmap_pars_fragment:YT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:KT,clipping_planes_vertex:ZT,color_fragment:JT,color_pars_fragment:QT,color_pars_vertex:ew,color_vertex:tw,common:nw,cube_uv_reflection_fragment:iw,defaultnormal_vertex:rw,displacementmap_pars_vertex:sw,displacementmap_vertex:ow,emissivemap_fragment:aw,emissivemap_pars_fragment:lw,colorspace_fragment:cw,colorspace_pars_fragment:uw,envmap_fragment:hw,envmap_common_pars_fragment:fw,envmap_pars_fragment:dw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:ww,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:_w,fog_fragment:vw,fog_pars_fragment:xw,gradientmap_pars_fragment:yw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:bw,lights_pars_begin:Tw,lights_toon_fragment:Ew,lights_toon_pars_fragment:Aw,lights_phong_fragment:Rw,lights_phong_pars_fragment:Cw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Dw,lights_fragment_maps:Iw,lights_fragment_end:Nw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:Bw,map_fragment:kw,map_pars_fragment:zw,map_particle_fragment:Vw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Hw,metalnessmap_pars_fragment:Ww,morphinstance_vertex:Xw,morphcolor_vertex:qw,morphnormal_vertex:Yw,morphtarget_pars_vertex:jw,morphtarget_vertex:$w,normal_fragment_begin:Kw,normal_fragment_maps:Zw,normal_pars_fragment:Jw,normal_pars_vertex:Qw,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:hE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:bE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:EE,transmission_pars_fragment:AE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:PE,worldpos_vertex:LE,background_vert:DE,background_frag:IE,backgroundCube_vert:NE,backgroundCube_frag:UE,cube_vert:FE,cube_frag:OE,depth_vert:BE,depth_frag:kE,distance_vert:zE,distance_frag:VE,equirect_vert:GE,equirect_frag:HE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:jE,meshlambert_frag:$E,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:JE,meshnormal_frag:QE,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:a1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:h1},ve={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ur={basic:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:jn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:jn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:jn([ve.points,ve.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:jn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:jn([ve.common,ve.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:jn([ve.sprite,ve.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:jn([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:jn([ve.lights,ve.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ur.physical={uniforms:jn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const lu={r:0,b:0,g:0},Gs=new Tr,f1=new st;function d1(r,e,t,n,i,s){const o=new Ne(0);let a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1;const y=d(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,M){const y=d(M);y&&(y.isCubeTexture||y.mapping===dh)?(c===void 0&&(c=new un(new Sc(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ia(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Gs.copy(M.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(Gs)),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Tt,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new un(new es(2,2),new rn({name:"BackgroundMaterial",uniforms:Ia(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(lu,hx(r)),t.buffers.color.setClear(lu.r,lu.g,lu.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function p1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(P,L,U,F,k){let z=!1;const O=f(P,F,U,L);s!==O&&(s=O,c(s.object)),z=d(P,F,U,k),z&&p(P,F,U,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(P,L,U,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function f(P,L,U,F){const k=F.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const O=P.isInstancedMesh===!0?P.id:0;let Z=z[O];Z===void 0&&(Z={},z[O]=Z);let X=Z[U.id];X===void 0&&(X={},Z[U.id]=X);let N=X[k];return N===void 0&&(N=h(l()),X[k]=N),N}function h(P){const L=[],U=[],F=[];for(let k=0;k<t;k++)L[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:F,object:P,attributes:{},index:null}}function d(P,L,U,F){const k=s.attributes,z=L.attributes;let O=0;const Z=U.getAttributes();for(const X in Z)if(Z[X].location>=0){const se=k[X];let ne=z[X];if(ne===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),se===void 0||se.attribute!==ne||ne&&se.data!==ne.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function p(P,L,U,F){const k={},z=L.attributes;let O=0;const Z=U.getAttributes();for(const X in Z)if(Z[X].location>=0){let se=z[X];se===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const ne={};ne.attribute=se,se&&se.data&&(ne.data=se.data),k[X]=ne,O++}s.attributes=k,s.attributesNum=O,s.index=F}function _(){const P=s.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){const U=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;U[P]=1,F[P]===0&&(r.enableVertexAttribArray(P),F[P]=1),k[P]!==L&&(r.vertexAttribDivisor(P,L),k[P]=L)}function x(){const P=s.newAttributes,L=s.enabledAttributes;for(let U=0,F=L.length;U<F;U++)L[U]!==P[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function M(P,L,U,F,k,z,O){O===!0?r.vertexAttribIPointer(P,L,U,k,z):r.vertexAttribPointer(P,L,U,F,k,z)}function y(P,L,U,F){_();const k=F.attributes,z=U.getAttributes(),O=L.defaultAttributeValues;for(const Z in z){const X=z[Z];if(X.location>=0){let N=k[Z];if(N===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(N=P.instanceColor)),N!==void 0){const se=N.normalized,ne=N.itemSize,Se=e.get(N);if(Se===void 0)continue;const Ve=Se.buffer,Ze=Se.type,Q=Se.bytesPerElement,ie=Ze===r.INT||Ze===r.UNSIGNED_INT||N.gpuType===$p;if(N.isInterleavedBufferAttribute){const le=N.data,Be=le.stride,ke=N.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)g(X.location+De,le.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let De=0;De<X.locationSize;De++)M(X.location+De,ne/X.locationSize,Ze,se,Be*Q,(ke+ne/X.locationSize*De)*Q,ie)}else{if(N.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)g(X.location+le,N.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let le=0;le<X.locationSize;le++)M(X.location+le,ne/X.locationSize,Ze,se,ne*Q,ne/X.locationSize*le*Q,ie)}}else if(O!==void 0){const se=O[Z];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(X.location,se);break;case 3:r.vertexAttrib3fv(X.location,se);break;case 4:r.vertexAttrib4fv(X.location,se);break;default:r.vertexAttrib1fv(X.location,se)}}}}x()}function T(){S();for(const P in n){const L=n[P];for(const U in L){const F=L[U];for(const k in F){const z=F[k];for(const O in z)u(z[O].object),delete z[O];delete F[k]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const U in L){const F=L[U];for(const k in F){const z=F[k];for(const O in z)u(z[O].object),delete z[O];delete F[k]}}delete n[P.id]}function E(P){for(const L in n){const U=n[L];for(const F in U){const k=U[F];if(k[P.id]===void 0)continue;const z=k[P.id];for(const O in z)u(z[O].object),delete z[O];delete k[P.id]}}}function v(P){for(const L in n){const U=n[L],F=P.isInstancedMesh===!0?P.id:0,k=U[F];if(k!==void 0){for(const z in k){const O=k[z];for(const Z in O)u(O[Z].object),delete O[Z];delete k[z]}delete U[F],Object.keys(U).length===0&&delete n[L]}}}function S(){D(),o=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function m1(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Vi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const v=E===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ei&&!v)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:A}}function _1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new $s,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,M=x*4;let y=g.clippingState||null;l.value=y,y=u(p,h,M,d);for(let T=0;T!==M;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const bs=4,v_=[.125,.215,.35,.446,.526,.582],Js=20,v1=256,nl=new Va,x_=new Ne;let bf=null,Tf=0,wf=0,Ef=!1;const x1=new W;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=x1}=s;bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Tf,wf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Pn,format:Vi,colorSpace:La,depthBuffer:!1},i=y_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y1(s)),this._blurMaterial=M1(s,e,t),this._ggxMaterial=S1(s,e,t)}return i}_compileMaterial(e){const t=new un(new Wn,e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,i,s){const l=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(x_),f.toneMapping=yr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Sc,new Hr({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(x_),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const T=this._cubeSize;ea(i,y*T,M>2?T:0,T,T),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Eo||e.mapping===Ra;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-bs?n-p+bs:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ea(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,nl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ea(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,nl)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Js-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Js;m>Js&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Js}`);const g=[];let x=0;for(let E=0;E<Js;++E){const v=E/_,S=Math.exp(-v*v/2);g.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const y=this._sizeLods[i],T=3*y*(i>M-bs?i-M+bs:0),A=4*(this._cubeSize-y);ea(t,T,A,3*y,2*y),l.setRenderTarget(t),l.render(f,nl)}}function y1(r){const e=[],t=[],n=[];let i=r;const s=r-bs+1+v_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-bs?l=v_[o-r+bs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),M=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,v=A>2?0:-1,S=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];x.set(S,_*p*A),M.set(h,m*p*A);const D=[A,A,A,A,A,A];y.set(D,g*p*A)}const T=new Wn;T.setAttribute("position",new Ht(x,_)),T.setAttribute("uv",new Ht(M,m)),T.setAttribute("faceIndex",new Ht(y,g)),n.push(new un(T,null)),i>bs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function y_(r,e,t){const n=new ai(r,e,t);return n.texture.mapping=dh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function S1(r,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function M1(r,e,t){const n=new Float32Array(Js),i=new W(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function S_(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function M_(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xx extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lx(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sc(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:xr});s.uniforms.tEquirect.value=t;const o=new un(i,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Bt),new xT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function b1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new xx(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,p=d===qh||d===Yh,_=d===Eo||d===Ra;if(p||_){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Qu(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Qu(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===qh?h.mapping=Eo:d===Yh&&(h.mapping=Ra),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function T1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$u("WebGLRenderer: "+n+" extension not supported."),i}}}function w1(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,y=x.length;M<y;M+=3){const T=x[M+0],A=x[M+1],E=x[M+2];h.push(T,A,A,E,E,T)}}else{const x=p.array;_=p.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const T=M+0,A=M+1,E=M+2;h.push(T,A,A,E,E,T)}}const m=new(p.count>=65535?rx:ix)(h,1);m.version=_;const g=s.get(f);g&&e.remove(g),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function E1(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,h*o,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function f(h,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function A1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function R1(r,e,t){const n=new WeakMap,i=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let D=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",D)};var d=D;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let T=a.attributes.position.count*y,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const E=new Float32Array(T*A*4*f),v=new tx(E,T,A,f);v.type=ei,v.needsUpdate=!0;const S=y*4;for(let P=0;P<f;P++){const L=g[P],U=x[P],F=M[P],k=T*A*4*P;for(let z=0;z<L.count;z++){const O=z*S;p===!0&&(i.fromBufferAttribute(L,z),E[k+O+0]=i.x,E[k+O+1]=i.y,E[k+O+2]=i.z,E[k+O+3]=0),_===!0&&(i.fromBufferAttribute(U,z),E[k+O+4]=i.x,E[k+O+5]=i.y,E[k+O+6]=i.z,E[k+O+7]=0),m===!0&&(i.fromBufferAttribute(F,z),E[k+O+8]=i.x,E[k+O+9]=i.y,E[k+O+10]=i.z,E[k+O+11]=F.itemSize===4?i.w:1)}}h={count:f,texture:v,size:new Ue(T,A)},n.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function C1(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const P1={[Hp]:"LINEAR_TONE_MAPPING",[Wp]:"REINHARD_TONE_MAPPING",[Xp]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Yp]:"AGX_TONE_MAPPING",[jp]:"NEUTRAL_TONE_MAPPING",[qp]:"CUSTOM_TONE_MAPPING"};function L1(r,e,t,n,i){const s=new ai(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new ai(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),a=new Wn;a.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new wi([0,2,0,0,2,0],2));const l=new fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new un(a,l),u=new Va(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(x,M){s.setSize(x,M),o.setSize(x,M);for(let y=0;y<m.length;y++){const T=m[y];T.setSize&&T.setSize(x,M)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const M=s.width,y=s.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(M,y)}},this.begin=function(x,M){if(d||x.toneMapping===yr&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,T=M.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return g===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=yr,!0},this.hasRenderPass=function(){return g},this.end=function(x,M){x.toneMapping=p,d=!0;let y=s,T=o;for(let A=0;A<m.length;A++){const E=m[A];if(E.enabled!==!1&&(E.render(x,T,y,M),E.needsSwap!==!1)){const v=y;y=T,T=v}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},vt.getTransfer(f)===Tt&&(l.defines.SRGB_TRANSFER="");const A=P1[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const yx=new cn,lp=new cc(1,1),Sx=new tx,Mx=new Mb,bx=new lx,b_=[],T_=[],w_=new Float32Array(16),E_=new Float32Array(9),A_=new Float32Array(4);function Ga(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=b_[i];if(s===void 0&&(s=new Float32Array(i),b_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xh(r,e){let t=T_[e];t===void 0&&(t=new Int32Array(e),T_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function D1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function N1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function U1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function F1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;A_.set(n),r.uniformMatrix2fv(this.addr,!1,A_),vn(t,n)}}function O1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;E_.set(n),r.uniformMatrix3fv(this.addr,!1,E_),vn(t,n)}}function B1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;w_.set(n),r.uniformMatrix4fv(this.addr,!1,w_),vn(t,n)}}function k1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function V1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function H1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function X1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function q1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function Y1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(lp.compareFunction=t.isReversedDepthBuffer()?im:nm,s=lp):s=yx,t.setTexture2D(e||s,i)}function j1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mx,i)}function $1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bx,i)}function K1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sx,i)}function Z1(r){switch(r){case 5126:return D1;case 35664:return I1;case 35665:return N1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return H1;case 36294:return W1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return K1}}function J1(r,e){r.uniform1fv(this.addr,e)}function Q1(r,e){const t=Ga(e,this.size,2);r.uniform2fv(this.addr,t)}function eA(r,e){const t=Ga(e,this.size,3);r.uniform3fv(this.addr,t)}function tA(r,e){const t=Ga(e,this.size,4);r.uniform4fv(this.addr,t)}function nA(r,e){const t=Ga(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function iA(r,e){const t=Ga(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rA(r,e){const t=Ga(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sA(r,e){r.uniform1iv(this.addr,e)}function oA(r,e){r.uniform2iv(this.addr,e)}function aA(r,e){r.uniform3iv(this.addr,e)}function lA(r,e){r.uniform4iv(this.addr,e)}function cA(r,e){r.uniform1uiv(this.addr,e)}function uA(r,e){r.uniform2uiv(this.addr,e)}function hA(r,e){r.uniform3uiv(this.addr,e)}function fA(r,e){r.uniform4uiv(this.addr,e)}function dA(r,e,t){const n=this.cache,i=e.length,s=xh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=lp:o=yx;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function pA(r,e,t){const n=this.cache,i=e.length,s=xh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mx,s[o])}function mA(r,e,t){const n=this.cache,i=e.length,s=xh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bx,s[o])}function gA(r,e,t){const n=this.cache,i=e.length,s=xh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sx,s[o])}function _A(r){switch(r){case 5126:return J1;case 35664:return Q1;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return hA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}class vA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z1(t.type)}}class xA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_A(t.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function R_(r,e){r.seq.push(e),r.map[e.id]=e}function SA(r,e,t){const n=r.name,i=n.length;for(Af.lastIndex=0;;){const s=Af.exec(n),o=Af.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){R_(t,c===void 0?new vA(a,r,e):new xA(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new yA(a),R_(t,f)),t=f}}}class Au{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);SA(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function C_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const MA=37297;let bA=0;function TA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const P_=new rt;function wA(r){vt._getMatrix(P_,vt.workingColorSpace,r);const e=`mat3( ${P_.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Yu:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function L_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+TA(r.getShaderSource(e),a)}else return s}function EA(r,e){const t=wA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const AA={[Hp]:"Linear",[Wp]:"Reinhard",[Xp]:"Cineon",[xc]:"ACESFilmic",[Yp]:"AgX",[jp]:"Neutral",[qp]:"Custom"};function RA(r,e){const t=AA[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cu=new W;function CA(){vt.getLuminanceCoefficients(cu);const r=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function LA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ml(r){return r!==""}function D_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(r){return r.replace(IA,UA)}const NA=new Map;function UA(r,e){let t=ot[e];if(t===void 0){const n=NA.get(e);if(n!==void 0)t=ot[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cp(t)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(r){return r.replace(FA,OA)}function OA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function U_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BA={[yo]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function kA(r){return BA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Eo]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[dh]:"ENVMAP_TYPE_CUBE_UV"};function VA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const GA={[Ra]:"ENVMAP_MODE_REFRACTION"};function HA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WA={[Hv]:"ENVMAP_BLENDING_MULTIPLY",[OM]:"ENVMAP_BLENDING_MIX",[BM]:"ENVMAP_BLENDING_ADD"};function XA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":WA[r.combine]||"ENVMAP_BLENDING_NONE"}function qA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YA(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kA(t),c=VA(t),u=HA(t),f=XA(t),h=qA(t),d=PA(t),p=LA(s),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ml).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ml).join(`
`),g.length>0&&(g+=`
`)):(m=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),g=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?ot.tonemapping_pars_fragment:"",t.toneMapping!==yr?RA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,EA("linearToOutputTexel",t.outputColorSpace),CA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ml).join(`
`)),o=cp(o),o=D_(o,t),o=I_(o,t),a=cp(a),a=D_(a,t),a=I_(a,t),o=N_(o),a=N_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+m+o,y=x+g+a,T=C_(i,i.VERTEX_SHADER,M),A=C_(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(T)||"",F=i.getShaderInfoLog(A)||"",k=L.trim(),z=U.trim(),O=F.trim();let Z=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{const N=L_(i,T,"vertex"),se=L_(i,A,"fragment");je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+N+`
`+se)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(z===""||O==="")&&(X=!1);X&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:g}})}i.deleteShader(T),i.deleteShader(A),v=new Au(i,_),S=DA(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,MA)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let jA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new KA(e),t.set(e,n)),n}}class KA{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}}function ZA(r,e,t,n,i,s){const o=new om,a=new $A,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,D,P,L){const U=P.fog,F=L.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||k,z),Z=O&&O.mapping===dh?O.image.height:null,X=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=N!==void 0?N.length:0;let ne=0;F.morphAttributes.position!==void 0&&(ne=1),F.morphAttributes.normal!==void 0&&(ne=2),F.morphAttributes.color!==void 0&&(ne=3);let Se,Ve,Ze,Q;if(X){const ye=ur[X];Se=ye.vertexShader,Ve=ye.fragmentShader}else Se=v.vertexShader,Ve=v.fragmentShader,a.update(v),Ze=a.getVertexShaderID(v),Q=a.getFragmentShaderID(v);const ie=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,De=!!v.map,_t=!!v.matcap,Ee=!!O,qe=!!v.aoMap,tt=!!v.lightMap,Xe=!!v.bumpMap,j=!!v.normalMap,V=!!v.displacementMap,St=!!v.emissiveMap,lt=!!v.metalnessMap,Ye=!!v.roughnessMap,Me=v.anisotropy>0,I=v.clearcoat>0,b=v.dispersion>0,G=v.iridescence>0,ee=v.sheen>0,te=v.transmission>0,K=Me&&!!v.anisotropyMap,xe=I&&!!v.clearcoatMap,ue=I&&!!v.clearcoatNormalMap,Ie=I&&!!v.clearcoatRoughnessMap,be=G&&!!v.iridescenceMap,oe=G&&!!v.iridescenceThicknessMap,ce=ee&&!!v.sheenColorMap,Te=ee&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,pe=!!v.specularColorMap,$e=!!v.specularIntensityMap,B=te&&!!v.transmissionMap,he=te&&!!v.thicknessMap,ae=!!v.gradientMap,me=!!v.alphaMap,re=v.alphaTest>0,J=!!v.alphaHash,we=!!v.extensions;let He=yr;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=r.toneMapping);const xt={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:Se,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:La,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:_t,envMap:Ee,envMapMode:Ee&&O.mapping,envMapCubeUVHeight:Z,aoMap:qe,lightMap:tt,bumpMap:Xe,normalMap:j,displacementMap:V,emissiveMap:St,normalMapObjectSpace:j&&v.normalMapType===HM,normalMapTangentSpace:j&&v.normalMapType===Qv,metalnessMap:lt,roughnessMap:Ye,anisotropy:Me,anisotropyMap:K,clearcoat:I,clearcoatMap:xe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ie,dispersion:b,iridescence:G,iridescenceMap:be,iridescenceThicknessMap:oe,sheen:ee,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:Ae,specularColorMap:pe,specularIntensityMap:$e,transmission:te,transmissionMap:B,thicknessMap:he,gradientMap:ae,opaque:v.transparent===!1&&v.blending===So&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:re,alphaHash:J,combine:v.combine,mapUv:De&&p(v.map.channel),aoMapUv:qe&&p(v.aoMap.channel),lightMapUv:tt&&p(v.lightMap.channel),bumpMapUv:Xe&&p(v.bumpMap.channel),normalMapUv:j&&p(v.normalMap.channel),displacementMapUv:V&&p(v.displacementMap.channel),emissiveMapUv:St&&p(v.emissiveMap.channel),metalnessMapUv:lt&&p(v.metalnessMap.channel),roughnessMapUv:Ye&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:xe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:Ae&&p(v.specularMap.channel),specularColorMapUv:pe&&p(v.specularColorMap.channel),specularIntensityMapUv:$e&&p(v.specularIntensityMap.channel),transmissionMapUv:B&&p(v.transmissionMap.channel),thicknessMapUv:he&&p(v.thicknessMap.channel),alphaMapUv:me&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(j||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(De||me),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&j===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===oi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(S,v),x(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=d[v.type];let D;if(S){const P=ur[S];D=uc.clone(P.uniforms)}else D=v.uniforms;return D}function y(v,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new YA(r,S,v,i),c.push(D),u.set(S,D)),D}function T(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:E}}function JA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function QA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function F_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function O_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,m,g){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function l(h,d,p,_,m,g){const x=a(h,d,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(h,d,p,_,m,g){const x=a(h,d,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||QA),n.length>1&&n.sort(d||F_),i.length>1&&i.sort(d||F_)}function f(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function eR(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new O_,r.set(n,[o])):i>=s.length?(o=new O_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function tR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ne};break;case"SpotLight":t={position:new W,direction:new W,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function nR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iR=0;function rR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sR(r){const e=new tR,t=nR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,s=new st,o=new st;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,M=0,y=0,T=0,A=0,E=0;c.sort(rR);for(let S=0,D=c.length;S<D;S++){const P=c[S],L=P.color,U=P.intensity,F=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pa?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*U,f+=L.g*U,h+=L.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);E++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(L).multiplyScalar(U),z.distance=F,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const O=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=k,y++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(L).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const O=P.shadow,Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=z,p++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==T||v.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,v.directionalLength=d,v.pointLength=p,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=T,v.numLightProbes=E,n.version=iR++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function B_(r){const e=new sR(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oR(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new B_(r),e.set(i,[a])):s>=o.length?(a=new B_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cR=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],uR=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],k_=new st,il=new W,Rf=new W;function hR(r,e,t){let n=new cm;const i=new Ue,s=new Ue,o=new Vt,a=new eT,l=new tT,c={},u=t.maxTextureSize,f={[Mr]:oi,[oi]:Mr,[Fi]:Fi},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:aR,fragmentShader:lR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Wn;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let g=this.type;this.render=function(A,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===vM&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);const S=r.getRenderTarget(),D=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(xr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=g!==this.type;U&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=A.length;F<k;F++){const z=A[F],O=z.shadow;if(O===void 0){ze("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===dl){if(z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ai(i.x,i.y,{format:Pa,type:Pn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new cc(i.x,i.y,ei),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Jr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn}else z.isPointLight?(O.map=new xx(i.x),O.map.depthTexture=new Kb(i.x,br)):(O.map=new ai(i.x,i.y),O.map.depthTexture=new cc(i.x,i.y,br)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Jr,this.type===yo?(O.map.depthTexture.compareFunction=X?im:nm,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn);O.camera.updateProjectionMatrix()}const N=O.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<N;se++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,se),r.clear();else{se===0&&(r.setRenderTarget(O.map),r.clear());const ne=O.getViewport(se);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),L.viewport(o)}if(z.isPointLight){const ne=O.camera,Se=O.matrix,Ve=z.distance||ne.far;Ve!==ne.far&&(ne.far=Ve,ne.updateProjectionMatrix()),il.setFromMatrixPosition(z.matrixWorld),ne.position.copy(il),Rf.copy(ne.position),Rf.add(cR[se]),ne.up.copy(uR[se]),ne.lookAt(Rf),ne.updateMatrixWorld(),Se.makeTranslation(-il.x,-il.y,-il.z),k_.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),O._frustum.setFromProjectionMatrix(k_,ne.coordinateSystem,ne.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),y(E,v,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===dl&&x(O,v),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(S,D,P)};function x(A,E){const v=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(i.x,i.y,{format:Pa,type:Pn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,v,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,v,d,_,null)}function M(A,E,v,S){let D=null;const P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)D=P;else if(D=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=D.uuid,U=E.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let k=F[U];k===void 0&&(k=D.clone(),F[U]=k,E.addEventListener("dispose",T)),D=k}if(D.visible=E.visible,D.wireframe=E.wireframe,S===dl?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:f[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=r.properties.get(D);L.light=v}return D}function y(A,E,v,S,D){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===dl)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const U=e.update(A),F=A.material;if(Array.isArray(F)){const k=U.groups;for(let z=0,O=k.length;z<O;z++){const Z=k[z],X=F[Z.materialIndex];if(X&&X.visible){const N=M(A,X,S,D);A.onBeforeShadow(r,A,E,v,U,N,Z),r.renderBufferDirect(v,null,U,N,A,Z),A.onAfterShadow(r,A,E,v,U,N,Z)}}}else if(F.visible){const k=M(A,F,S,D);A.onBeforeShadow(r,A,E,v,U,k,null),r.renderBufferDirect(v,null,U,k,A,null),A.onAfterShadow(r,A,E,v,U,k,null)}}const L=A.children;for(let U=0,F=L.length;U<F;U++)y(L[U],E,v,S,D)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const S=c[v],D=A.target.uuid;D in S&&(S[D].dispose(),delete S[D])}}}function fR(r,e){function t(){let B=!1;const he=new Vt;let ae=null;const me=new Vt(0,0,0,0);return{setMask:function(re){ae!==re&&!B&&(r.colorMask(re,re,re,re),ae=re)},setLocked:function(re){B=re},setClear:function(re,J,we,He,xt){xt===!0&&(re*=He,J*=He,we*=He),he.set(re,J,we,He),me.equals(he)===!1&&(r.clearColor(re,J,we,He),me.copy(he))},reset:function(){B=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ae=null,me=null,re=null;return{setReversed:function(J){if(he!==J){const we=e.get("EXT_clip_control");J?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),he=J;const He=re;re=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(J){J?ie(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(J){ae!==J&&!B&&(r.depthMask(J),ae=J)},setFunc:function(J){if(he&&(J=eb[J]),me!==J){switch(J){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case Aa:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case Sd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case bd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=J}},setLocked:function(J){B=J},setClear:function(J){re!==J&&(re=J,he&&(J=1-J),r.clearDepth(J))},reset:function(){B=!1,ae=null,me=null,re=null,he=!1}}}function i(){let B=!1,he=null,ae=null,me=null,re=null,J=null,we=null,He=null,xt=null;return{setTest:function(ye){B||(ye?ie(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(ye){he!==ye&&!B&&(r.stencilMask(ye),he=ye)},setFunc:function(ye,Fe,it){(ae!==ye||me!==Fe||re!==it)&&(r.stencilFunc(ye,Fe,it),ae=ye,me=Fe,re=it)},setOp:function(ye,Fe,it){(J!==ye||we!==Fe||He!==it)&&(r.stencilOp(ye,Fe,it),J=ye,we=Fe,He=it)},setLocked:function(ye){B=ye},setClear:function(ye){xt!==ye&&(r.clearStencil(ye),xt=ye)},reset:function(){B=!1,he=null,ae=null,me=null,re=null,J=null,we=null,He=null,xt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,T=null,A=null,E=new Ne(0,0,0),v=0,S=!1,D=null,P=null,L=null,U=null,F=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=O>=2);let X=null,N={};const se=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Se=new Vt().fromArray(se),Ve=new Vt().fromArray(ne);function Ze(B,he,ae,me){const re=new Uint8Array(4),J=r.createTexture();r.bindTexture(B,J),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<ae;we++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(he+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return J}const Q={};Q[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(Aa),Xe(!1),j(bg),ie(r.CULL_FACE),qe(xr);function ie(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function le(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Be(B,he){return f[B]!==he?(r.bindFramebuffer(B,he),f[B]=he,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=he),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ke(B,he){let ae=d,me=!1;if(B){ae=h.get(he),ae===void 0&&(ae=[],h.set(he,ae));const re=B.textures;if(ae.length!==re.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let J=0,we=re.length;J<we;J++)ae[J]=r.COLOR_ATTACHMENT0+J;ae.length=re.length,me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,me=!0);me&&r.drawBuffers(ae)}function De(B){return p!==B?(r.useProgram(B),p=B,!0):!1}const _t={[Zs]:r.FUNC_ADD,[yM]:r.FUNC_SUBTRACT,[SM]:r.FUNC_REVERSE_SUBTRACT};_t[MM]=r.MIN,_t[bM]=r.MAX;const Ee={[TM]:r.ZERO,[wM]:r.ONE,[EM]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[DM]:r.SRC_ALPHA_SATURATE,[PM]:r.DST_COLOR,[RM]:r.DST_ALPHA,[AM]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[LM]:r.ONE_MINUS_DST_COLOR,[CM]:r.ONE_MINUS_DST_ALPHA,[IM]:r.CONSTANT_COLOR,[NM]:r.ONE_MINUS_CONSTANT_COLOR,[UM]:r.CONSTANT_ALPHA,[FM]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(B,he,ae,me,re,J,we,He,xt,ye){if(B===xr){_===!0&&(le(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),B!==xM){if(B!==m||ye!==S){if((g!==Zs||y!==Zs)&&(r.blendEquation(r.FUNC_ADD),g=Zs,y=Zs),ye)switch(B){case So:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.ONE,r.ONE);break;case Tg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:je("WebGLState: Invalid blending: ",B);break}else switch(B){case So:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tg:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",B);break}x=null,M=null,T=null,A=null,E.set(0,0,0),v=0,m=B,S=ye}return}re=re||he,J=J||ae,we=we||me,(he!==g||re!==y)&&(r.blendEquationSeparate(_t[he],_t[re]),g=he,y=re),(ae!==x||me!==M||J!==T||we!==A)&&(r.blendFuncSeparate(Ee[ae],Ee[me],Ee[J],Ee[we]),x=ae,M=me,T=J,A=we),(He.equals(E)===!1||xt!==v)&&(r.blendColor(He.r,He.g,He.b,xt),E.copy(He),v=xt),m=B,S=!1}function tt(B,he){B.side===Fi?le(r.CULL_FACE):ie(r.CULL_FACE);let ae=B.side===oi;he&&(ae=!ae),Xe(ae),B.blending===So&&B.transparent===!1?qe(xr):qe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const me=B.stencilWrite;a.setTest(me),me&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(B){D!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),D=B)}function j(B){B!==mM?(ie(r.CULL_FACE),B!==P&&(B===bg?r.cullFace(r.BACK):B===gM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),P=B}function V(B){B!==L&&(z&&r.lineWidth(B),L=B)}function St(B,he,ae){B?(ie(r.POLYGON_OFFSET_FILL),(U!==he||F!==ae)&&(U=he,F=ae,o.getReversed()&&(he=-he),r.polygonOffset(he,ae))):le(r.POLYGON_OFFSET_FILL)}function lt(B){B?ie(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function Ye(B){B===void 0&&(B=r.TEXTURE0+k-1),X!==B&&(r.activeTexture(B),X=B)}function Me(B,he,ae){ae===void 0&&(X===null?ae=r.TEXTURE0+k-1:ae=X);let me=N[ae];me===void 0&&(me={type:void 0,texture:void 0},N[ae]=me),(me.type!==B||me.texture!==he)&&(X!==ae&&(r.activeTexture(ae),X=ae),r.bindTexture(B,he||Q[B]),me.type=B,me.texture=he)}function I(){const B=N[X];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function ee(){try{r.texSubImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function te(){try{r.texSubImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function ue(){try{r.texStorage2D(...arguments)}catch(B){je("WebGLState:",B)}}function Ie(){try{r.texStorage3D(...arguments)}catch(B){je("WebGLState:",B)}}function be(){try{r.texImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function oe(){try{r.texImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function ce(B){Se.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function Te(B){Ve.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ve.copy(B))}function Ae(B,he){let ae=c.get(he);ae===void 0&&(ae=new WeakMap,c.set(he,ae));let me=ae.get(B);me===void 0&&(me=r.getUniformBlockIndex(he,B.name),ae.set(B,me))}function pe(B,he){const me=c.get(he).get(B);l.get(he)!==me&&(r.uniformBlockBinding(he,me,B.__bindingPointIndex),l.set(he,me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,N={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,T=null,A=null,E=new Ne(0,0,0),v=0,S=!1,D=null,P=null,L=null,U=null,F=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:le,bindFramebuffer:Be,drawBuffers:ke,useProgram:De,setBlending:qe,setMaterial:tt,setFlipSided:Xe,setCullFace:j,setLineWidth:V,setPolygonOffset:St,setScissorTest:lt,activeTexture:Ye,bindTexture:Me,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:be,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Ie,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:ce,viewport:Te,reset:$e}}function dR(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return d?new OffscreenCanvas(I,b):lc("canvas")}function _(I,b,G){let ee=1;const te=Me(I);if((te.width>G||te.height>G)&&(ee=G/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(ee*te.width),xe=Math.floor(ee*te.height);f===void 0&&(f=p(K,xe));const ue=b?p(K,xe):f;return ue.width=K,ue.height=xe,ue.getContext("2d").drawImage(I,0,0,K,xe),ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+xe+")."),ue}else return"data"in I&&ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){r.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(I,b,G,ee,te=!1){if(I!==null){if(r[I]!==void 0)return r[I];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=b;if(b===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),b===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),b===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),b===r.RGBA){const xe=te?Yu:vt.getTransfer(ee);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=xe===Tt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(I,b){let G;return I?b===null||b===br||b===rc?G=r.DEPTH24_STENCIL8:b===ei?G=r.DEPTH32F_STENCIL8:b===ic&&(G=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===rc?G=r.DEPTH_COMPONENT24:b===ei?G=r.DEPTH_COMPONENT32F:b===ic&&(G=r.DEPTH_COMPONENT16),G}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==wn&&I.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){const b=I.target;b.removeEventListener("dispose",A),v(b),b.isVideoTexture&&u.delete(b)}function E(I){const b=I.target;b.removeEventListener("dispose",E),D(b)}function v(I){const b=n.get(I);if(b.__webglInit===void 0)return;const G=I.source,ee=h.get(G);if(ee){const te=ee[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(I),Object.keys(ee).length===0&&h.delete(G)}n.remove(I)}function S(I){const b=n.get(I);r.deleteTexture(b.__webglTexture);const G=I.source,ee=h.get(G);delete ee[b.__cacheKey],o.memory.textures--}function D(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let te=0;te<b.__webglFramebuffer[ee].length;te++)r.deleteFramebuffer(b.__webglFramebuffer[ee][te]);else r.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[ee]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let ee=0,te=G.length;ee<te;ee++){const K=n.get(G[ee]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(I)}let P=0;function L(){P=0}function U(){const I=P;return I>=i.maxTextures&&ze("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function F(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function k(I,b){const G=n.get(I);if(I.isVideoTexture&&lt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){const ee=I.image;if(ee===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,I,b);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function z(I,b){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Q(G,I,b);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function O(I,b){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Q(G,I,b);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function Z(I,b){const G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){ie(G,I,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const X={[Ca]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[qu]:r.MIRRORED_REPEAT},N={[wn]:r.NEAREST,[Xv]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Mu]:r.LINEAR_MIPMAP_NEAREST,[bi]:r.LINEAR_MIPMAP_LINEAR},se={[WM]:r.NEVER,[$M]:r.ALWAYS,[XM]:r.LESS,[nm]:r.LEQUAL,[qM]:r.EQUAL,[im]:r.GEQUAL,[YM]:r.GREATER,[jM]:r.NOTEQUAL};function ne(I,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Mu||b.magFilter===pl||b.magFilter===bi||b.minFilter===Bt||b.minFilter===Mu||b.minFilter===pl||b.minFilter===bi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,X[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==pl&&b.minFilter!==bi||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Se(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));const ee=b.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const K=F(b);if(K!==I.__cacheKey){te[K]===void 0&&(te[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[K].usedTimes++;const xe=te[I.__cacheKey];xe!==void 0&&(te[I.__cacheKey].usedTimes--,xe.usedTimes===0&&S(b)),I.__cacheKey=K,I.__webglTexture=te[K].texture}return G}function Ve(I,b,G){return Math.floor(Math.floor(I/G)/b)}function Ze(I,b,G,ee){const K=I.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,G,ee,b.data);else{K.sort((oe,ce)=>oe.start-ce.start);let xe=0;for(let oe=1;oe<K.length;oe++){const ce=K[xe],Te=K[oe],Ae=ce.start+ce.count,pe=Ve(Te.start,b.width,4),$e=Ve(ce.start,b.width,4);Te.start<=Ae+1&&pe===$e&&Ve(Te.start+Te.count-1,b.width,4)===pe?ce.count=Math.max(ce.count,Te.start+Te.count-ce.start):(++xe,K[xe]=Te)}K.length=xe+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),be=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let oe=0,ce=K.length;oe<ce;oe++){const Te=K[oe],Ae=Math.floor(Te.start/4),pe=Math.ceil(Te.count/4),$e=Ae%b.width,B=Math.floor(Ae/b.width),he=pe,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,$e,B,he,ae,G,ee,b.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,be)}}function Q(I,b,G){let ee=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=r.TEXTURE_3D);const te=Se(I,b),K=b.source;t.bindTexture(ee,I.__webglTexture,r.TEXTURE0+G);const xe=n.get(K);if(K.version!==xe.__version||te===!0){t.activeTexture(r.TEXTURE0+G);const ue=vt.getPrimaries(vt.workingColorSpace),Ie=b.colorSpace===gs?null:vt.getPrimaries(b.colorSpace),be=b.colorSpace===gs||ue===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let oe=_(b.image,!1,i.maxTextureSize);oe=Ye(b,oe);const ce=s.convert(b.format,b.colorSpace),Te=s.convert(b.type);let Ae=M(b.internalFormat,ce,Te,b.colorSpace,b.isVideoTexture);ne(ee,b);let pe;const $e=b.mipmaps,B=b.isVideoTexture!==!0,he=xe.__version===void 0||te===!0,ae=K.dataReady,me=T(b,oe);if(b.isDepthTexture)Ae=y(b.format===so,b.type),he&&(B?t.texStorage2D(r.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ce,Te,null));else if(b.isDataTexture)if($e.length>0){B&&he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,$e[0].width,$e[0].height);for(let re=0,J=$e.length;re<J;re++)pe=$e[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,Te,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,ce,Te,pe.data);b.generateMipmaps=!1}else B?(he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,oe.width,oe.height),ae&&Ze(b,oe,ce,Te)):t.texImage2D(r.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ce,Te,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,$e[0].width,$e[0].height,oe.depth);for(let re=0,J=$e.length;re<J;re++)if(pe=$e[re],b.format!==Vi)if(ce!==null)if(B){if(ae)if(b.layerUpdates.size>0){const we=__(pe.width,pe.height,b.format,b.type);for(const He of b.layerUpdates){const xt=pe.data.subarray(He*we/pe.data.BYTES_PER_ELEMENT,(He+1)*we/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,He,pe.width,pe.height,1,ce,xt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ce,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,oe.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ce,Te,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,oe.depth,0,ce,Te,pe.data)}else{B&&he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,$e[0].width,$e[0].height);for(let re=0,J=$e.length;re<J;re++)pe=$e[re],b.format!==Vi?ce!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,Te,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,ce,Te,pe.data)}else if(b.isDataArrayTexture)if(B){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,oe.width,oe.height,oe.depth),ae)if(b.layerUpdates.size>0){const re=__(oe.width,oe.height,b.format,b.type);for(const J of b.layerUpdates){const we=oe.data.subarray(J*re/oe.data.BYTES_PER_ELEMENT,(J+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ce,Te,we)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ce,Te,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,ce,Te,oe.data);else if(b.isData3DTexture)B?(he&&t.texStorage3D(r.TEXTURE_3D,me,Ae,oe.width,oe.height,oe.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ce,Te,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,ce,Te,oe.data);else if(b.isFramebufferTexture){if(he)if(B)t.texStorage2D(r.TEXTURE_2D,me,Ae,oe.width,oe.height);else{let re=oe.width,J=oe.height;for(let we=0;we<me;we++)t.texImage2D(r.TEXTURE_2D,we,Ae,re,J,0,ce,Te,null),re>>=1,J>>=1}}else if($e.length>0){if(B&&he){const re=Me($e[0]);t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height)}for(let re=0,J=$e.length;re<J;re++)pe=$e[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ce,Te,pe):t.texImage2D(r.TEXTURE_2D,re,Ae,ce,Te,pe);b.generateMipmaps=!1}else if(B){if(he){const re=Me(oe);t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Te,oe)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ce,Te,oe);m(b)&&g(ee),xe.__version=K.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ie(I,b,G){if(b.image.length!==6)return;const ee=Se(I,b),te=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);const K=n.get(te);if(te.version!==K.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const xe=vt.getPrimaries(vt.workingColorSpace),ue=b.colorSpace===gs?null:vt.getPrimaries(b.colorSpace),Ie=b.colorSpace===gs||xe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!be&&!oe?ce[J]=_(b.image[J],!0,i.maxCubemapSize):ce[J]=oe?b.image[J].image:b.image[J],ce[J]=Ye(b,ce[J]);const Te=ce[0],Ae=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),$e=M(b.internalFormat,Ae,pe,b.colorSpace),B=b.isVideoTexture!==!0,he=K.__version===void 0||ee===!0,ae=te.dataReady;let me=T(b,Te);ne(r.TEXTURE_CUBE_MAP,b);let re;if(be){B&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,$e,Te.width,Te.height);for(let J=0;J<6;J++){re=ce[J].mipmaps;for(let we=0;we<re.length;we++){const He=re[we];b.format!==Vi?Ae!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,$e,He.width,He.height,0,He.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,He.width,He.height,Ae,pe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,$e,He.width,He.height,0,Ae,pe,He.data)}}}else{if(re=b.mipmaps,B&&he){re.length>0&&me++;const J=Me(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,$e,J.width,J.height)}for(let J=0;J<6;J++)if(oe){B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,Ae,pe,ce[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,ce[J].width,ce[J].height,0,Ae,pe,ce[J].data);for(let we=0;we<re.length;we++){const xt=re[we].image[J].image;B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,xt.width,xt.height,Ae,pe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,$e,xt.width,xt.height,0,Ae,pe,xt.data)}}else{B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,pe,ce[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,Ae,pe,ce[J]);for(let we=0;we<re.length;we++){const He=re[we];B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,Ae,pe,He.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,$e,Ae,pe,He.image[J])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),K.__version=te.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function le(I,b,G,ee,te,K){const xe=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),Ie=M(G.internalFormat,xe,ue,G.colorSpace),be=n.get(b),oe=n.get(G);if(oe.__renderTarget=b,!be.__hasExternalTextures){const ce=Math.max(1,b.width>>K),Te=Math.max(1,b.height>>K);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Ie,ce,Te,b.depth,0,xe,ue,null):t.texImage2D(te,K,Ie,ce,Te,0,xe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,te,oe.__webglTexture,0,V(b)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,te,oe.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(I,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const ee=b.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,K=y(b.stencilBuffer,te),xe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;St(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),K,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,I)}else{const ee=b.textures;for(let te=0;te<ee.length;te++){const K=ee[te],xe=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),Ie=M(K.internalFormat,xe,ue,K.colorSpace);St(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),Ie,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),Ie,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(I,b,G){const ee=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b.depthTexture);const be=s.convert(b.depthTexture.format),oe=s.convert(b.depthTexture.type);let ce;b.depthTexture.format===Jr?ce=r.DEPTH_COMPONENT24:b.depthTexture.format===so&&(ce=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ce,b.width,b.height,0,be,oe,null)}}else k(b.depthTexture,0);const K=te.__webglTexture,xe=V(b),ue=ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Ie=b.depthTexture.format===so?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Jr)St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,ue,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,ue,K,0);else if(b.depthTexture.format===so)St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,ue,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,ue,K,0);else throw new Error("Unknown depthTexture format")}function De(I){const b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=ee}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let ee=0;ee<6;ee++)ke(b.__webglFramebuffer[ee],I,ee);else{const ee=I.texture.mipmaps;ee&&ee.length>0?ke(b.__webglFramebuffer[0],I,0):ke(b.__webglFramebuffer,I,0)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=r.createRenderbuffer(),Be(b.__webglDepthbuffer[ee],I,!1);else{const te=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}else{const ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Be(b.__webglDepthbuffer,I,!1);else{const te=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(I,b,G){const ee=n.get(I);b!==void 0&&le(ee.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&De(I)}function Ee(I){const b=I.texture,G=n.get(I),ee=n.get(b);I.addEventListener("dispose",E);const te=I.textures,K=I.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)G.__webglFramebuffer[ue][Ie]=r.createFramebuffer()}else G.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)G.__webglFramebuffer[ue]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ue=0,Ie=te.length;ue<Ie;ue++){const be=n.get(te[ue]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&St(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Ie=te[ue];G.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const be=s.convert(Ie.format,Ie.colorSpace),oe=s.convert(Ie.type),ce=M(Ie.internalFormat,be,oe,Ie.colorSpace,I.isXRRenderTarget===!0),Te=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ce,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)le(G.__webglFramebuffer[ue][Ie],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie);else le(G.__webglFramebuffer[ue],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,Ie=te.length;ue<Ie;ue++){const be=te[ue],oe=n.get(be);let ce=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,oe.__webglTexture),ne(ce,be),le(G.__webglFramebuffer,I,be,r.COLOR_ATTACHMENT0+ue,ce,0),m(be)&&g(ce)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),ne(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)le(G.__webglFramebuffer[Ie],I,b,r.COLOR_ATTACHMENT0,ue,Ie);else le(G.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,ue,0);m(b)&&g(ue),t.unbindTexture()}I.depthBuffer&&De(I)}function qe(I){const b=I.textures;for(let G=0,ee=b.length;G<ee;G++){const te=b[G];if(m(te)){const K=x(I),xe=n.get(te).__webglTexture;t.bindTexture(K,xe),g(K),t.unbindTexture()}}}const tt=[],Xe=[];function j(I){if(I.samples>0){if(St(I)===!1){const b=I.textures,G=I.width,ee=I.height;let te=r.COLOR_BUFFER_BIT;const K=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(I),ue=b.length>1;if(ue)for(let be=0;be<b.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ie=I.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<b.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(b[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,r.NEAREST),l===!0&&(tt.length=0,Xe.length=0,tt.push(r.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(tt.push(K),Xe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<b.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(b[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(I){return Math.min(i.maxSamples,I.samples)}function St(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(I){const b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Ye(I,b){const G=I.colorSpace,ee=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==La&&G!==gs&&(vt.getTransfer(G)===Tt?(ee!==Vi||te!==yi)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",G)),b}function Me(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=_t,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pR(r,e){function t(n,i=gs){let s;const o=vt.getTransfer(i);if(n===yi)return r.UNSIGNED_BYTE;if(n===Kp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$v)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===qv)return r.BYTE;if(n===Yv)return r.SHORT;if(n===ic)return r.UNSIGNED_SHORT;if(n===$p)return r.INT;if(n===br)return r.UNSIGNED_INT;if(n===ei)return r.FLOAT;if(n===Pn)return r.HALF_FLOAT;if(n===Kv)return r.ALPHA;if(n===Zv)return r.RGB;if(n===Vi)return r.RGBA;if(n===Jr)return r.DEPTH_COMPONENT;if(n===so)return r.DEPTH_STENCIL;if(n===Jp)return r.RED;if(n===Qp)return r.RED_INTEGER;if(n===Pa)return r.RG;if(n===em)return r.RG_INTEGER;if(n===tm)return r.RGBA_INTEGER;if(n===bu||n===Tu||n===wu||n===Eu)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Td||n===wd||n===Ed||n===Ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rd||n===Cd||n===Pd||n===Ld||n===Dd||n===Id||n===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rd||n===Cd)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ld)return s.COMPRESSED_R11_EAC;if(n===Dd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Id)return s.COMPRESSED_RG11_EAC;if(n===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ud||n===Fd||n===Od||n===Bd||n===kd||n===zd||n===Vd||n===Gd||n===Hd||n===Wd||n===Xd||n===qd||n===Yd||n===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ud)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Od)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$d||n===Kd||n===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$d)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jd||n===Qd||n===ep||n===tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rc?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const mR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:mR,fragmentShader:gR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vR extends Oa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new _R,g={},x=t.getContextAttributes();let M=null,y=null;const T=[],A=[],E=new Ue;let v=null;const S=new Rn;S.viewport=new Vt;const D=new Rn;D.viewport=new Vt;const P=[S,D],L=new yT;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=T[Q];return ie===void 0&&(ie=new ef,T[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=T[Q];return ie===void 0&&(ie=new ef,T[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=T[Q];return ie===void 0&&(ie=new ef,T[Q]=ie),ie.getHandSpace()};function k(Q){const ie=A.indexOf(Q.inputSource);if(ie===-1)return;const le=T[ie];le!==void 0&&(le.update(Q.inputSource,Q.frame,c||o),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let Q=0;Q<T.length;Q++){const ie=A[Q];ie!==null&&(A[Q]=null,T[Q].disconnect(ie))}U=null,F=null,m.reset();for(const Q in g)delete g[Q];e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Be=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?so:Jr,Be=x.stencil?rc:br);const De={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(De),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ai(h.textureWidth,h.textureHeight,{format:Vi,type:yi,depthTexture:new cc(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ai(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Q){for(let ie=0;ie<Q.removed.length;ie++){const le=Q.removed[ie],Be=A.indexOf(le);Be>=0&&(A[Be]=null,T[Be].disconnect(le))}for(let ie=0;ie<Q.added.length;ie++){const le=Q.added[ie];let Be=A.indexOf(le);if(Be===-1){for(let De=0;De<T.length;De++)if(De>=A.length){A.push(le),Be=De;break}else if(A[De]===null){A[De]=le,Be=De;break}if(Be===-1)break}const ke=T[Be];ke&&ke.connect(le)}}const Z=new W,X=new W;function N(Q,ie,le){Z.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Be=Z.distanceTo(X),ke=ie.projectionMatrix.elements,De=le.projectionMatrix.elements,_t=ke[14]/(ke[10]-1),Ee=ke[14]/(ke[10]+1),qe=(ke[9]+1)/ke[5],tt=(ke[9]-1)/ke[5],Xe=(ke[8]-1)/ke[0],j=(De[8]+1)/De[0],V=_t*Xe,St=_t*j,lt=Be/(-Xe+j),Ye=lt*-Xe;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(lt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=_t+lt,I=Ee+lt,b=V-Ye,G=St+(Be-Ye),ee=qe*Ee/I*Me,te=tt*Ee/I*Me;Q.projectionMatrix.makePerspective(b,G,ee,te,Me,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ie=Q.near,le=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(le=m.depthFar)),L.near=D.near=S.near=ie,L.far=D.far=S.far=le,(U!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,F=L.far),L.layers.mask=Q.layers.mask|6,S.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;const Be=Q.parent,ke=L.cameras;se(L,Be);for(let De=0;De<ke.length;De++)se(ke[De],Be);ke.length===2?N(L,S,D):L.projectionMatrix.copy(S.projectionMatrix),ne(Q,L,Be)};function ne(Q,ie,le){le===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Da*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Q){return g[Q]};let Se=null;function Ve(Q,ie){if(u=ie.getViewerPose(c||o),p=ie,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Be=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Be=!0);for(let Ee=0;Ee<le.length;Ee++){const qe=le[Ee];let tt=null;if(d!==null)tt=d.getViewport(qe);else{const j=f.getViewSubImage(h,qe);tt=j.viewport,Ee===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let Xe=P[Ee];Xe===void 0&&(Xe=new Rn,Xe.layers.enable(Ee),Xe.viewport=new Vt,P[Ee]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ee===0&&(L.matrix.copy(Xe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Be===!0&&L.cameras.push(Xe)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Ee=f.getDepthInformation(le[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,i.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ee=0;Ee<le.length;Ee++){const qe=le[Ee].camera;if(qe){let tt=g[qe];tt||(tt=new cx,g[qe]=tt);const Xe=f.getCameraImage(qe);tt.sourceTexture=Xe}}}}for(let le=0;le<T.length;le++){const Be=A[le],ke=T[le];Be!==null&&ke!==void 0&&ke.update(Be,ie,c||o)}Se&&Se(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}const Ze=new vx;Ze.setAnimationLoop(Ve),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Hs=new Tr,xR=new st;function yR(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,hx(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,M,y){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===oi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===oi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,Hs.copy(y),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(xR.makeRotationFromEuler(Hs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===oi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function SR(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=i[x.id];y===void 0&&(p(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const M=f();x.__bindingPointIndex=M;const y=r.createBuffer(),T=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=i[x.id],y=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,E=y.length;A<E;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,D=v.length;S<D;S++){const P=v[S];if(d(P,A,S,T)===!0){const L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let k=0;k<U.length;k++){const z=U[k],O=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+F,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,y,T){const A=x.value,E=M+"_"+y;if(T[E]===void 0)return typeof A=="number"||typeof A=="boolean"?T[E]=A:T[E]=A.clone(),!0;{const v=T[E];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return T[E]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function p(x){const M=x.uniforms;let y=0;const T=16;for(let E=0,v=M.length;E<v;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,P=S.length;D<P;D++){const L=S[D],U=Array.isArray(L.value)?L.value:[L.value];for(let F=0,k=U.length;F<k;F++){const z=U[F],O=_(z),Z=y%T,X=Z%O.boundary,N=Z+X;y+=X,N!==0&&T-N<O.storage&&(y+=T-N),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}const A=y%T;return A>0&&(y+=T-A),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const MR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sr=null;function bR(){return sr===null&&(sr=new mh(MR,16,16,Pa,Pn),sr.name="DFG_LUT",sr.minFilter=Bt,sr.magFilter=Bt,sr.wrapS=Gn,sr.wrapT=Gn,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}class ym{constructor(e={}){const{canvas:t=JM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=yi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=d,m=new Set([tm,em,Qp]),g=new Set([yi,br,ic,rc,Kp,Zp]),x=new Uint32Array(4),M=new Int32Array(4);let y=null,T=null;const A=[],E=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Kt;let P=0,L=0,U=null,F=-1,k=null;const z=new Vt,O=new Vt;let Z=null;const X=new Ne(0);let N=0,se=t.width,ne=t.height,Se=1,Ve=null,Ze=null;const Q=new Vt(0,0,se,ne),ie=new Vt(0,0,se,ne);let le=!1;const Be=new cm;let ke=!1,De=!1;const _t=new st,Ee=new W,qe=new Vt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function j(){return U===null?Se:1}let V=n;function St(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",xt,!1),V===null){const H="webgl2";if(V=St(H,C),V===null)throw St(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw je("WebGLRenderer: "+C.message),C}let lt,Ye,Me,I,b,G,ee,te,K,xe,ue,Ie,be,oe,ce,Te,Ae,pe,$e,B,he,ae,me;function re(){lt=new T1(V),lt.init(),he=new pR(V,lt),Ye=new g1(V,lt,e,he),Me=new fR(V,lt),Ye.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),I=new A1(V),b=new JA,G=new dR(V,lt,Me,b,Ye,he,I),ee=new b1(S),te=new DT(V),ae=new p1(V,te),K=new w1(V,te,I,ae),xe=new C1(V,K,te,ae,I),pe=new R1(V,Ye,G),ce=new _1(b),ue=new ZA(S,ee,lt,Ye,ae,ce),Ie=new yR(S,b),be=new eR,oe=new oR(lt),Ae=new d1(S,ee,Me,xe,p,l),Te=new hR(S,xe,Ye),me=new SR(V,I,Ye,Me),$e=new m1(V,lt,I),B=new E1(V,lt,I),I.programs=ue.programs,S.capabilities=Ye,S.extensions=lt,S.properties=b,S.renderLists=be,S.shadowMap=Te,S.state=Me,S.info=I}re(),_!==yi&&(v=new L1(_,t.width,t.height,i,s));const J=new vR(S,V);this.xr=J,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(C){C!==void 0&&(Se=C,this.setSize(se,ne,!1))},this.getSize=function(C){return C.set(se,ne)},this.setSize=function(C,H,$=!0){if(J.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,ne=H,t.width=Math.floor(C*Se),t.height=Math.floor(H*Se),$===!0&&(t.style.width=C+"px",t.style.height=H+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(se*Se,ne*Se).floor()},this.setDrawingBufferSize=function(C,H,$){se=C,ne=H,Se=$,t.width=Math.floor(C*$),t.height=Math.floor(H*$),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(_===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,H,$,Y){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,H,$,Y),Me.viewport(z.copy(Q).multiplyScalar(Se).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,H,$,Y){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,H,$,Y),Me.scissor(O.copy(ie).multiplyScalar(Se).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Me.setScissorTest(le=C)},this.setOpaqueSort=function(C){Ve=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,$=!0){let Y=0;if(C){let q=!1;if(U!==null){const fe=U.texture.format;q=m.has(fe)}if(q){const fe=U.texture.type,ge=g.has(fe),de=Ae.getClearColor(),Ce=Ae.getClearAlpha(),Re=de.r,nt=de.g,ct=de.b;ge?(x[0]=Re,x[1]=nt,x[2]=ct,x[3]=Ce,V.clearBufferuiv(V.COLOR,0,x)):(M[0]=Re,M[1]=nt,M[2]=ct,M[3]=Ce,V.clearBufferiv(V.COLOR,0,M))}else Y|=V.COLOR_BUFFER_BIT}H&&(Y|=V.DEPTH_BUFFER_BIT),$&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Ae.dispose(),be.dispose(),oe.dispose(),b.dispose(),ee.dispose(),xe.dispose(),ae.dispose(),me.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",Je),J.removeEventListener("sessionend",Qt),et.stop()};function we(C){C.preventDefault(),ju("WebGLRenderer: Context Lost."),D=!0}function He(){ju("WebGLRenderer: Context Restored."),D=!1;const C=I.autoReset,H=Te.enabled,$=Te.autoUpdate,Y=Te.needsUpdate,q=Te.type;re(),I.autoReset=C,Te.enabled=H,Te.autoUpdate=$,Te.needsUpdate=Y,Te.type=q}function xt(C){je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ye(C){const H=C.target;H.removeEventListener("dispose",ye),Fe(H)}function Fe(C){it(C),b.remove(C)}function it(C){const H=b.get(C).programs;H!==void 0&&(H.forEach(function($){ue.releaseProgram($)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,$,Y,q,fe){H===null&&(H=tt);const ge=q.isMesh&&q.matrixWorld.determinant()<0,de=Ci(C,H,$,Y,q);Me.setMaterial(Y,ge);let Ce=$.index,Re=1;if(Y.wireframe===!0){if(Ce=K.getWireframeAttribute($),Ce===void 0)return;Re=2}const nt=$.drawRange,ct=$.attributes.position;let Ge=nt.start*Re,Pt=(nt.start+nt.count)*Re;fe!==null&&(Ge=Math.max(Ge,fe.start*Re),Pt=Math.min(Pt,(fe.start+fe.count)*Re)),Ce!==null?(Ge=Math.max(Ge,0),Pt=Math.min(Pt,Ce.count)):ct!=null&&(Ge=Math.max(Ge,0),Pt=Math.min(Pt,ct.count));const en=Pt-Ge;if(en<0||en===1/0)return;ae.setup(q,Y,de,$,Ce);let jt,Lt=$e;if(Ce!==null&&(jt=te.get(Ce),Lt=B,Lt.setIndex(jt)),q.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*j()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(q.isLine){let Nn=Y.linewidth;Nn===void 0&&(Nn=1),Me.setLineWidth(Nn*j()),q.isLineSegments?Lt.setMode(V.LINES):q.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else q.isPoints?Lt.setMode(V.POINTS):q.isSprite&&Lt.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$u("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Nn=q._multiDrawStarts,Oe=q._multiDrawCounts,ci=q._multiDrawCount,yt=Ce?te.get(Ce).bytesPerElement:1,Xi=b.get(Y).currentProgram.getUniforms();for(let ir=0;ir<ci;ir++)Xi.setValue(V,"_gl_DrawID",ir),Lt.render(Nn[ir]/yt,Oe[ir])}else if(q.isInstancedMesh)Lt.renderInstances(Ge,en,q.count);else if($.isInstancedBufferGeometry){const Nn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Nn);Lt.renderInstances(Ge,en,Oe)}else Lt.render(Ge,en)};function _e(C,H,$){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Dn(C,H,$),C.side=Mr,C.needsUpdate=!0,Dn(C,H,$),C.side=Fi):Dn(C,H,$)}this.compile=function(C,H,$=null){$===null&&($=C),T=oe.get($),T.init(H),E.push(T),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),C!==$&&C.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights();const Y=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const fe=q.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const de=fe[ge];_e(de,$,q),Y.add(de)}else _e(fe,$,q),Y.add(fe)}),T=E.pop(),Y},this.compileAsync=function(C,H,$=null){const Y=this.compile(C,H,$);return new Promise(q=>{function fe(){if(Y.forEach(function(ge){b.get(ge).currentProgram.isReady()&&Y.delete(ge)}),Y.size===0){q(C);return}setTimeout(fe,10)}lt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ke=null;function We(C){Ke&&Ke(C)}function Je(){et.stop()}function Qt(){et.start()}const et=new vx;et.setAnimationLoop(We),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(C){Ke=C,J.setAnimationLoop(C),C===null?et.stop():et.start()},J.addEventListener("sessionstart",Je),J.addEventListener("sessionend",Qt),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const $=J.enabled===!0&&J.isPresenting===!0,Y=v!==null&&(U===null||$)&&v.begin(S,U);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,H,U),T=oe.get(C,E.length),T.init(H),E.push(T),_t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Be.setFromProjectionMatrix(_t,gr,H.reversedDepth),De=this.localClippingEnabled,ke=ce.init(this.clippingPlanes,De),y=be.get(C,A.length),y.init(),A.push(y),J.enabled===!0&&J.isPresenting===!0){const ge=S.xr.getDepthSensingMesh();ge!==null&&kt(ge,H,-1/0,S.sortObjects)}kt(C,H,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Ve,Ze),Xe=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Xe&&Ae.addToRenderList(y,C),this.info.render.frame++,ke===!0&&ce.beginShadows();const q=T.state.shadowsArray;if(Te.render(q,C,H),ke===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&v.hasRenderPass())===!1){const ge=y.opaque,de=y.transmissive;if(T.setupLights(),H.isArrayCamera){const Ce=H.cameras;if(de.length>0)for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re];zt(ge,de,C,ct)}Xe&&Ae.render(C);for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re];hn(y,C,ct,ct.viewport)}}else de.length>0&&zt(ge,de,C,H),Xe&&Ae.render(C),hn(y,C,H)}U!==null&&L===0&&(G.updateMultisampleRenderTarget(U),G.updateRenderTargetMipmap(U)),Y&&v.end(S),C.isScene===!0&&C.onAfterRender(S,C,H),ae.resetDefaultState(),F=-1,k=null,E.pop(),E.length>0?(T=E[E.length-1],ke===!0&&ce.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function kt(C,H,$,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){Y&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_t);const ge=xe.update(C),de=C.material;de.visible&&y.push(C,ge,de,$,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){const ge=xe.update(C),de=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),qe.copy(ge.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(_t)),Array.isArray(de)){const Ce=ge.groups;for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re],Ge=de[ct.materialIndex];Ge&&Ge.visible&&y.push(C,ge,Ge,$,qe.z,ct)}}else de.visible&&y.push(C,ge,de,$,qe.z,null)}}const fe=C.children;for(let ge=0,de=fe.length;ge<de;ge++)kt(fe[ge],H,$,Y)}function hn(C,H,$,Y){const{opaque:q,transmissive:fe,transparent:ge}=C;T.setupLightsView($),ke===!0&&ce.setGlobalState(S.clippingPlanes,$),Y&&Me.viewport(z.copy(Y)),q.length>0&&Et(q,H,$),fe.length>0&&Et(fe,H,$),ge.length>0&&Et(ge,H,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function zt(C,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){const Ge=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:Ge?Pn:yi,minFilter:bi,samples:Ye.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const fe=T.state.transmissionRenderTarget[Y.id],ge=Y.viewport||z;fe.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(X),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ae.render($);const nt=S.toneMapping;S.toneMapping=yr;const ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),ke===!0&&ce.setGlobalState(S.clippingPlanes,Y),Et(C,$,Y),G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pt=0,en=H.length;Pt<en;Pt++){const jt=H[Pt],{object:Lt,geometry:Nn,material:Oe,group:ci}=jt;if(Oe.side===Fi&&Lt.layers.test(Y.layers)){const yt=Oe.side;Oe.side=oi,Oe.needsUpdate=!0,Mt(Lt,$,Y,Nn,Oe,ci),Oe.side=yt,Oe.needsUpdate=!0,Ge=!0}}Ge===!0&&(G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe))}S.setRenderTarget(de,Ce,Re),S.setClearColor(X,N),ct!==void 0&&(Y.viewport=ct),S.toneMapping=nt}function Et(C,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let q=0,fe=C.length;q<fe;q++){const ge=C[q],{object:de,geometry:Ce,group:Re}=ge;let nt=ge.material;nt.allowOverride===!0&&Y!==null&&(nt=Y),de.layers.test($.layers)&&Mt(de,H,$,Ce,nt,Re)}}function Mt(C,H,$,Y,q,fe){C.onBeforeRender(S,H,$,Y,q,fe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(S,H,$,Y,C,fe),q.transparent===!0&&q.side===Fi&&q.forceSinglePass===!1?(q.side=oi,q.needsUpdate=!0,S.renderBufferDirect($,H,Y,q,C,fe),q.side=Mr,q.needsUpdate=!0,S.renderBufferDirect($,H,Y,q,C,fe),q.side=Fi):S.renderBufferDirect($,H,Y,q,C,fe),C.onAfterRender(S,H,$,Y,q,fe)}function Dn(C,H,$){H.isScene!==!0&&(H=tt);const Y=b.get(C),q=T.state.lights,fe=T.state.shadowsArray,ge=q.state.version,de=ue.getParameters(C,q.state,fe,H,$),Ce=ue.getProgramCacheKey(de);let Re=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=ee.get(C.envMap||Y.environment,nt),Y.envMapRotation=Y.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",ye),Re=new Map,Y.programs=Re);let ct=Re.get(Ce);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===ge)return In(C,de),ct}else de.uniforms=ue.getUniforms(C),C.onBeforeCompile(de,S),ct=ue.acquireProgram(de,Ce),Re.set(Ce,ct),Y.uniforms=de.uniforms;const Ge=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),In(C,de),Y.needsLights=dn(C),Y.lightsStateVersion=ge,Y.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=ct,Y.uniformsList=null,ct}function Ut(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Au.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function In(C,H){const $=b.get(C);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ci(C,H,$,Y,q){H.isScene!==!0&&(H=tt),G.resetTextureUnits();const fe=H.fog,ge=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,de=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:La,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Re=ee.get(Y.envMap||ge,Ce),nt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ct=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!$.morphAttributes.position,Pt=!!$.morphAttributes.normal,en=!!$.morphAttributes.color;let jt=yr;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(jt=S.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nn=Lt!==void 0?Lt.length:0,Oe=b.get(Y),ci=T.state.lights;if(ke===!0&&(De===!0||C!==k)){const yn=C===k&&Y.id===F;ce.setState(Y,C,yn)}let yt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ci.state.version||Oe.outputColorSpace!==de||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Re||Y.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ce.numPlanes||Oe.numIntersection!==ce.numIntersection)||Oe.vertexAlphas!==nt||Oe.vertexTangents!==ct||Oe.morphTargets!==Ge||Oe.morphNormals!==Pt||Oe.morphColors!==en||Oe.toneMapping!==jt||Oe.morphTargetsCount!==Nn)&&(yt=!0):(yt=!0,Oe.__version=Y.version);let Xi=Oe.currentProgram;yt===!0&&(Xi=Dn(Y,H,q));let ir=!1,Us=!1,Lo=!1;const Dt=Xi.getUniforms(),An=Oe.uniforms;if(Me.useProgram(Xi.program)&&(ir=!0,Us=!0,Lo=!0),Y.id!==F&&(F=Y.id,Us=!0),ir||k!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(V,"projectionMatrix",C.projectionMatrix),Dt.setValue(V,"viewMatrix",C.matrixWorldInverse);const ns=Dt.map.cameraPosition;ns!==void 0&&ns.setValue(V,Ee.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,Us=!0,Lo=!0)}if(Oe.needsLights&&(ci.state.directionalShadowMap.length>0&&Dt.setValue(V,"directionalShadowMap",ci.state.directionalShadowMap,G),ci.state.spotShadowMap.length>0&&Dt.setValue(V,"spotShadowMap",ci.state.spotShadowMap,G),ci.state.pointShadowMap.length>0&&Dt.setValue(V,"pointShadowMap",ci.state.pointShadowMap,G)),q.isSkinnedMesh){Dt.setOptional(V,q,"bindMatrix"),Dt.setOptional(V,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Dt.setValue(V,"boneTexture",yn.boneTexture,G))}q.isBatchedMesh&&(Dt.setOptional(V,q,"batchingTexture"),Dt.setValue(V,"batchingTexture",q._matricesTexture,G),Dt.setOptional(V,q,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",q._indirectTexture,G),Dt.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",q._colorsTexture,G));const ts=$.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&pe.update(q,$,Xi),(Us||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,Dt.setValue(V,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(An.envMapIntensity.value=H.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=bR()),Us&&(Dt.setValue(V,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&fn(An,Lo),fe&&Y.fog===!0&&Ie.refreshFogUniforms(An,fe),Ie.refreshMaterialUniforms(An,Y,Se,ne,T.state.transmissionRenderTarget[C.id]),Au.upload(V,Ut(Oe),An,G)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Au.upload(V,Ut(Oe),An,G),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Dt.setValue(V,"center",q.center),Dt.setValue(V,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(V,"normalMatrix",q.normalMatrix),Dt.setValue(V,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let ns=0,Do=yn.length;ns<Do;ns++){const Em=yn[ns];me.update(Em,Xi),me.bind(Em,Xi)}}return Xi}function fn(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function dn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,H,$){const Y=b.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=H,b.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const $=b.get(C);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const xn=V.createFramebuffer();this.setRenderTarget=function(C,H=0,$=0){U=C,P=H,L=$;let Y=null,q=!1,fe=!1;if(C){const de=b.get(C);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(V.FRAMEBUFFER,de.__webglFramebuffer),z.copy(C.viewport),O.copy(C.scissor),Z=C.scissorTest,Me.viewport(z),Me.scissor(O),Me.setScissorTest(Z),F=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(de.__hasExternalTextures)G.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(de.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Re=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[H])?Y=Re[H][$]:Y=Re[H],q=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?Y=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?Y=Re[$]:Y=Re,z.copy(C.viewport),O.copy(C.scissor),Z=C.scissorTest}else z.copy(Q).multiplyScalar(Se).floor(),O.copy(ie).multiplyScalar(Se).floor(),Z=le;if($!==0&&(Y=xn),Me.bindFramebuffer(V.FRAMEBUFFER,Y)&&Me.drawBuffers(C,Y),Me.viewport(z),Me.scissor(O),Me.setScissorTest(Z),q){const de=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,de.__webglTexture,$)}else if(fe){const de=H;for(let Ce=0;Ce<C.textures.length;Ce++){const Re=b.get(C.textures[Ce]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ce,Re.__webglTexture,$,de)}}else if(C!==null&&$!==0){const de=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,$)}F=-1},this.readRenderTargetPixels=function(C,H,$,Y,q,fe,ge,de=0){if(!(C&&C.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){Me.bindFramebuffer(V.FRAMEBUFFER,Ce);try{const Re=C.textures[de],nt=Re.format,ct=Re.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!Ye.textureFormatReadable(nt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ct)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&$>=0&&$<=C.height-q&&V.readPixels(H,$,Y,q,he.convert(nt),he.convert(ct),fe)}finally{const Re=U!==null?b.get(U).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,H,$,Y,q,fe,ge,de=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce)if(H>=0&&H<=C.width-Y&&$>=0&&$<=C.height-q){Me.bindFramebuffer(V.FRAMEBUFFER,Ce);const Re=C.textures[de],nt=Re.format,ct=Re.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!Ye.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,fe.byteLength,V.STREAM_READ),V.readPixels(H,$,Y,q,he.convert(nt),he.convert(ct),0);const Pt=U!==null?b.get(U).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,Pt);const en=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await QM(V,en,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,fe),V.deleteBuffer(Ge),V.deleteSync(en),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,$=0){const Y=Math.pow(2,-$),q=Math.floor(C.image.width*Y),fe=Math.floor(C.image.height*Y),ge=H!==null?H.x:0,de=H!==null?H.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,ge,de,q,fe),Me.unbindTexture()};const Er=V.createFramebuffer(),Po=V.createFramebuffer();this.copyTextureToTexture=function(C,H,$=null,Y=null,q=0,fe=0){let ge,de,Ce,Re,nt,ct,Ge,Pt,en;const jt=C.isCompressedTexture?C.mipmaps[fe]:C.image;if($!==null)ge=$.max.x-$.min.x,de=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,nt=$.min.y,ct=$.isBox3?$.min.z:0;else{const An=Math.pow(2,-q);ge=Math.floor(jt.width*An),de=Math.floor(jt.height*An),C.isDataArrayTexture?Ce=jt.depth:C.isData3DTexture?Ce=Math.floor(jt.depth*An):Ce=1,Re=0,nt=0,ct=0}Y!==null?(Ge=Y.x,Pt=Y.y,en=Y.z):(Ge=0,Pt=0,en=0);const Lt=he.convert(H.format),Nn=he.convert(H.type);let Oe;H.isData3DTexture?(G.setTexture3D(H,0),Oe=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(G.setTexture2DArray(H,0),Oe=V.TEXTURE_2D_ARRAY):(G.setTexture2D(H,0),Oe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const ci=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xi=V.getParameter(V.UNPACK_SKIP_PIXELS),ir=V.getParameter(V.UNPACK_SKIP_ROWS),Us=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Re),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);const Lo=C.isDataArrayTexture||C.isData3DTexture,Dt=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const An=b.get(C),ts=b.get(H),yn=b.get(An.__renderTarget),ns=b.get(ts.__renderTarget);Me.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Do=0;Do<Ce;Do++)Lo&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,q,ct+Do),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(H).__webglTexture,fe,en+Do)),V.blitFramebuffer(Re,nt,ge,de,Ge,Pt,ge,de,V.DEPTH_BUFFER_BIT,V.NEAREST);Me.bindFramebuffer(V.READ_FRAMEBUFFER,null),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||b.has(C)){const An=b.get(C),ts=b.get(H);Me.bindFramebuffer(V.READ_FRAMEBUFFER,Er),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,Po);for(let yn=0;yn<Ce;yn++)Lo?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,q,ct+yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,q),Dt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ts.__webglTexture,fe,en+yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ts.__webglTexture,fe),q!==0?V.blitFramebuffer(Re,nt,ge,de,Ge,Pt,ge,de,V.COLOR_BUFFER_BIT,V.NEAREST):Dt?V.copyTexSubImage3D(Oe,fe,Ge,Pt,en+yn,Re,nt,ge,de):V.copyTexSubImage2D(Oe,fe,Ge,Pt,Re,nt,ge,de);Me.bindFramebuffer(V.READ_FRAMEBUFFER,null),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,Nn,jt.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,jt.data):V.texSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,Nn,jt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,ge,de,Lt,Nn,jt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,jt.width,jt.height,Lt,jt.data):V.texSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,ge,de,Lt,Nn,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ci),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xi),V.pixelStorei(V.UNPACK_SKIP_ROWS,ir),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Us),fe===0&&H.generateMipmaps&&V.generateMipmap(Oe),Me.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,Me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const TR=parseInt(fh.replace(/\D+/g,""));function up(r,e){if(e===VM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===np||e===Jv){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===np)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function eh(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const oo="srgb",jr="srgb-linear",z_=3001,wR=3e3;class yh extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new WR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Bl.extractUrlBase(e);o=Bl.resolveURL(c,this.path)}else o=Bl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new dm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(eh(new Uint8Array(e.slice(0,4)))===Tx){try{o[pt.KHR_BINARY_GLTF]=new XR(e)}catch(u){i&&i(u);return}s=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(eh(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new rC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:o[u]=new RR;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new qR(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[u]=new YR;break;case pt.KHR_MESH_QUANTIZATION:o[u]=new jR;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function ER(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AR{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jr);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ju(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mm(u),c.distance=f;break;case"spot":c=new op(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ur(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class RR{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Hr}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,oo))}return Promise.all(i)}}class CR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class PR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class LR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class DR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class IR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,oo)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class NR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class UR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],jr),Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class OR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],jr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,oo)),Promise.all(s)}}class BR{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class zR{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class VR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class HR{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class WR{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const p of f){const _=new st,m=new W,g=new Qr,x=new W(1,1,1),M=new Hb(p.geometry,p.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,_.compose(m,g,x));for(const y in l)if(y==="_COLOR_0"){const T=l[y];M.instanceColor=new rp(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);Yt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Tx="glTF",rl=12,V_={JSON:1313821514,BIN:5130562};class XR{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rl);if(this.header={magic:eh(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-rl,i=new DataView(e,rl);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===V_.JSON){const l=new Uint8Array(e,rl+s,o);this.content=eh(l)}else if(a===V_.BIN){const l=rl+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=hp[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=hp[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=ga[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},a,c,jr,h)})})}}class YR{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jR{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class wx extends Ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,_=p-c,m=-2*d+3*h,g=d-h,x=1-m,M=g-h+f;for(let y=0;y!==a;y++){const T=o[_+y+a],A=o[_+y+l]*u,E=o[p+y+a],v=o[p+y]*u;s[y]=x*T+M*A+m*E+g*v}return s}}const $R=new Qr;class KR extends wx{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return $R.fromArray(s).normalize().toArray(s),s}}const Di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},G_={9728:wn,9729:Bt,9984:Xv,9985:Mu,9986:pl,9987:bi},H_={33071:Gn,33648:qu,10497:Ca},Cf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...TR>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZR={CUBICSPLINE:void 0,LINEAR:oc,STEP:sc},Pf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new fm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function Ws(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ur(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function eC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tC(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lf(t.attributes):e=r.indices+":"+Lf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Lf(r.targets[n]);return e}function Lf(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function fp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iC=new st;class rC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ER,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new gh(this.options.manager):this.textureLoader=new vT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ws(s,a,i),Ur(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Bl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Cf[i.type],a=ga[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Cf[i.type],c=ga[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(d&&d!==f){const g=Math.floor(h/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(x);M||(_=new c(a,g*d,i.count*d/u),M=new Fb(_,d/u),t.cache.add(x,M)),m=new am(M,l,h%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new Ht(_,l,p);if(i.sparse!==void 0){const g=Cf.SCALAR,x=ga[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new x(o[1],M,i.sparse.count*g),A=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized));for(let E=0,v=T.length;E<v;E++){const S=T[E];if(m.setX(S,A[E*l]),l>=2&&m.setY(S,A[E*l+1]),l>=3&&m.setZ(S,A[E*l+2]),l>=4&&m.setW(S,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=G_[h.magFilter]||Bt,u.minFilter=G_[h.minFilter]||bi,u.wrapS=H_[h.wrapS]||Ca,u.wrapT=H_[h.wrapT]||Ca,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(_){const m=new cn(_);m.needsUpdate=!0,h(m)}),t.load(Bl.resolveURL(f,s.path),p,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ur(f,o),f.userData.mimeType=o.mimeType||nC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===z_?oo:jr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===oo?z_:wR),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ax,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ox,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fm}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const f=i[pt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],jr),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,oo)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Fi);const u=s.alphaMode||Pf.OPAQUE;if(u===Pf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Hr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hr){const f=s.emissiveFactor;a.emissive=new Ne().setRGB(f[0],f[1],f[2],jr)}return s.emissiveTexture!==void 0&&o!==Hr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,oo)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ur(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ws(i,f,s),f})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return W_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=tC(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=W_(new Wn,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?JR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){const _=u[d],m=o[d];let g;const x=c[d];if(m.mode===Di.TRIANGLES||m.mode===Di.TRIANGLE_STRIP||m.mode===Di.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new zb(_,x):new un(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Di.TRIANGLE_STRIP?g.geometry=up(g.geometry,Jv):m.mode===Di.TRIANGLE_FAN&&(g.geometry=up(g.geometry,np));else if(m.mode===Di.LINES)g=new Yb(_,x);else if(m.mode===Di.LINE_STRIP)g=new um(_,x);else if(m.mode===Di.LINE_LOOP)g=new jb(_,x);else if(m.mode===Di.POINTS)g=new hm(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&eC(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ur(g,s),m.extensions&&Ws(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Ws(i,f[0],s),f[0];const h=new Gr;s.extensions&&Ws(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(Mo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Va(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ur(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new st;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lm(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],p=f[2],_=f[3],m=f[4],g=[];for(let x=0,M=h.length;x<M;x++){const y=h[x],T=d[x],A=p[x],E=_[x],v=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,T,A,E,v);if(S)for(let D=0;D<S.length;D++)g.push(S[D])}return new lT(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,iC)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new sx:c.length>1?u=new Gr:c.length===1?u=c[0]:u=new Yt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ur(u,s),s.extensions&&Ws(n,u,s),s.matrix!==void 0){const f=new st;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Gr;n.name&&(s.name=i.createUniqueName(n.name)),Ur(s,n),n.extensions&&Ws(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof er||h instanceof cn)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];us[s.path]===us.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(us[s.path]){case us.weights:c=Na;break;case us.rotation:c=Ua;break;case us.position:case us.scale:c=Fa;break;default:n.itemSize===1?c=Na:c=Fa;break}const u=i.interpolation!==void 0?ZR[i.interpolation]:oc,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const p=new c(l[h]+"."+us[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fp(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ua?KR:wx;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sC(r,e,t){const n=e.attributes,i=new tr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),a.normalized){const u=fp(ga[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new W,l=new W;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){const _=fp(ga[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new wr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function W_(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=hp[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ur(r,e),sC(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QR(r,e.targets,t):r})}class Ex extends pT{constructor(e){super(e),this.type=Pn}parse(e){const o=function(v,S){switch(v){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},f=function(v,S,D){S=S||1024;let L=v.pos,U=-1,F=0,k="",z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(L,L+128)));for(;0>(U=z.indexOf(`
`))&&F<S&&L<v.byteLength;)k+=z,F+=z.length,L+=128,z+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(L,L+128)));return-1<U?(v.pos+=F+U+1,k+z.slice(0,U)):!1},h=function(v){const S=/^#\?(\S+)/,D=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,z;for((v.pos>=v.byteLength||!(k=f(v)))&&o(1,"no header found"),(z=k.match(S))||o(3,"bad initial token"),F.valid|=1,F.programtype=z[1],F.string+=k+`
`;k=f(v),k!==!1;){if(F.string+=k+`
`,k.charAt(0)==="#"){F.comments+=k+`
`;continue}if((z=k.match(D))&&(F.gamma=parseFloat(z[1])),(z=k.match(P))&&(F.exposure=parseFloat(z[1])),(z=k.match(L))&&(F.valid|=2,F.format=z[1]),(z=k.match(U))&&(F.valid|=4,F.height=parseInt(z[1],10),F.width=parseInt(z[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(v,S,D){const P=S;if(P<8||P>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);P!==(v[2]<<8|v[3])&&o(3,"wrong scanline width");const L=new Uint8Array(4*S*D);L.length||o(4,"unable to allocate buffer space");let U=0,F=0;const k=4*P,z=new Uint8Array(4),O=new Uint8Array(k);let Z=D;for(;Z>0&&F<v.byteLength;){F+4>v.byteLength&&o(1),z[0]=v[F++],z[1]=v[F++],z[2]=v[F++],z[3]=v[F++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=P)&&o(3,"bad rgbe scanline format");let X=0,N;for(;X<k&&F<v.byteLength;){N=v[F++];const ne=N>128;if(ne&&(N-=128),(N===0||X+N>k)&&o(3,"bad scanline data"),ne){const Se=v[F++];for(let Ve=0;Ve<N;Ve++)O[X++]=Se}else O.set(v.subarray(F,F+N),X),X+=N,F+=N}const se=P;for(let ne=0;ne<se;ne++){let Se=0;L[U]=O[ne+Se],Se+=P,L[U+1]=O[ne+Se],Se+=P,L[U+2]=O[ne+Se],Se+=P,L[U+3]=O[ne+Se],U+=4}Z--}return L},p=function(v,S,D,P){const L=v[S+3],U=Math.pow(2,L-128)/255;D[P+0]=v[S+0]*U,D[P+1]=v[S+1]*U,D[P+2]=v[S+2]*U,D[P+3]=1},_=function(v,S,D,P){const L=v[S+3],U=Math.pow(2,L-128)/255;D[P+0]=Vc.toHalfFloat(Math.min(v[S+0]*U,65504)),D[P+1]=Vc.toHalfFloat(Math.min(v[S+1]*U,65504)),D[P+2]=Vc.toHalfFloat(Math.min(v[S+2]*U,65504)),D[P+3]=Vc.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const g=h(m),x=g.width,M=g.height,y=d(m.subarray(m.pos),x,M);let T,A,E;switch(this.type){case ei:E=y.length/4;const v=new Float32Array(E*4);for(let D=0;D<E;D++)p(y,D*4,v,D*4);T=v,A=ei;break;case Pn:E=y.length/4;const S=new Uint16Array(E*4);for(let D=0;D<E;D++)_(y,D*4,S,D*4);T=S,A=Pn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:M,data:T,header:g.string,gamma:g.gamma,exposure:g.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case ei:case Pn:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=Bt,o.magFilter=Bt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const oC=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:yh,RGBELoader:Ex,toTrianglesDrawMode:up},Symbol.toStringTag,{value:"Module"}));class aC{constructor(){this.cacheDom(),this.loadingManager=new mx,this.gltfLoader=new yh(this.loadingManager),this.animationComplete=!1,this.pendingLoadBatches=0,this.runPromise=null,this.runResolver=null,this.isCompleting=!1,this.init=this.init.bind(this),this.load=this.load.bind(this)}cacheDom(){this.container=document.querySelector(".preloader"),this.progressBar=document.querySelector(".progress-bar"),this.progressIndicator=document.querySelector(".progress-bar-indicator"),this.progressText=document.querySelector(".progress-bar-copy span"),this.resizeObserver=null}generateGrid(){const e=document.querySelector(".preloader-grid");if(!e)return;const t=window.innerWidth,n=window.innerHeight,i=t*n,s=Math.sqrt(i/200),o=Math.ceil(t/s),a=Math.ceil(n/s);e.style.setProperty("grid-template-columns",`repeat(${o}, 1fr)`),e.style.setProperty("grid-template-rows",`repeat(${a}, 1fr)`),e.innerHTML="";const l=o*a,c=document.createDocumentFragment();for(let u=0;u<l;u++){const f=document.createElement("div");f.classList.add("preloader-block"),c.appendChild(f)}e.appendChild(c),this.preloaderBlocks=document.querySelectorAll(".preloader-block")}init(){this.cacheDom(),this.generateGrid();let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>this.generateGrid(),200)});const t=sessionStorage.getItem("preloaderSeen")==="true";return this.container?this.runPromise?this.runPromise:t?(this.container.style.display="none",Promise.resolve()):(this.container.style.display="flex",this.animationComplete=!1,this.pendingLoadBatches=0,this.isCompleting=!1,this.runPromise=new Promise(n=>{this.runResolver=n,this.startSequence()}),this.runPromise):Promise.resolve()}async load(e){if(this.pendingLoadBatches+=1,!e||e.length===0){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion();return}const t=e.map(n=>new Promise((i,s)=>{this.gltfLoader.load(n,i,void 0,s)}));try{await Promise.all(t)}catch(n){console.error("Error loading assets:",n)}finally{this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}}hold(){this.pendingLoadBatches+=1}release(){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}startSequence(){if(!this.progressIndicator||!this.progressText||!this.progressBar){this.animationComplete=!0,this.checkCompletion();return}Le.set(this.preloaderBlocks,{opacity:1}),Le.set(this.progressIndicator,{"--progress":0}),this.progressText&&(this.progressText.textContent="0%"),Le.to(this.progressBar,{opacity:1,duration:.075,ease:"power2.inOut",delay:.5,repeat:1,yoyo:!0,onComplete:()=>{Le.set(this.progressBar,{opacity:1}),this.startIncrements()}})}startIncrements(){let e=0;const t=5;let n=0;const i=this.generateRandomIncrements(t),s=()=>{if(n>=t){this.animationComplete=!0,this.checkCompletion();return}const o=i[n],a=Math.min(e+o,100),l=200+Math.random()*400;setTimeout(()=>{Le.to(this.progressIndicator,{"--progress":a/100,duration:.5,ease:"power2.out",onUpdate:()=>{const c=Math.round(Le.getProperty(this.progressIndicator,"--progress")*100);this.progressText&&(this.progressText.textContent=`${c}%`)},onComplete:()=>{e=a,n++,s()}})},l)};s()}generateRandomIncrements(e){const t=[];let n=100;const i=30;for(let s=0;s<e-1;s++){const o=Math.min(i,n-(e-1-s)),a=Math.max(5,Math.floor(n/(e-s)*.5)),l=Math.floor(Math.random()*(o-a))+a;t.push(l),n-=l}return t.push(n),t.sort(()=>Math.random()-.5)}checkCompletion(){this.runPromise&&this.pendingLoadBatches===0&&this.animationComplete&&this.complete()}resolveRun(){this.runResolver&&this.runResolver(),this.runResolver=null,this.runPromise=null,this.isCompleting=!1}complete(){if(!this.container){this.resolveRun();return}this.isCompleting||(this.isCompleting=!0,sessionStorage.setItem("preloaderSeen","true"),Le.to(this.progressBar,{opacity:0,duration:.075,ease:"power2.inOut",delay:.3,repeat:1,yoyo:!0,onComplete:()=>{Le.set(this.progressBar,{opacity:0}),setTimeout(()=>{if(!this.preloaderBlocks||this.preloaderBlocks.length===0){this.container.style.display="none",this.resolveRun();return}const e=.8;let t=0;const n=this.preloaderBlocks.length;this.preloaderBlocks.forEach(i=>{const s=Math.random()*e;Le.to(i,{opacity:0,duration:.1,ease:"power1.out",delay:s,onComplete:()=>{Le.set(i,{opacity:0}),t++,t>=n&&(this.container.style.display="none",this.resolveRun())}})})},200)}}))}}const Oi=new aC,Sh=[{id:"money-me",slug:"money-me",title:"Money.me",image:"/archive/Naman_A_close-up_composition_of_delicate_sculpture_of_Centella__aace8618-81de-463e-8679-702770b9f84b.png",href:"/film"},{id:"haptic",slug:"haptic",title:"HAPTIC",image:"/archive/Naman_aluminum_tube_of_hand_cream_on_a_rock_standing_on_a_rugge_7ba8faf1-3491-429c-8e0a-12003c3a3b87.png",href:"/film"},{id:"flashcloud",slug:"flashcloud",title:"flashcloud",image:"/archive/Naman_A_north_Indian_postman_standing_alone_in_a_dimly_lit_op_79e71e38-b114-4803-a9ff-70f8b74bbca1_2.png",href:"/film"},{id:"gang",slug:"gang",title:"gang",image:"/archive/1.png",href:"/film"},{id:"t-bonk",slug:"t-bonk",title:"t.BONK",image:"/archive/Naman_A_close-up_composition_of_delicate_sculpture_of_cica_gl_848b5b68-582f-44b9-b9f9-a58993358e22_2.png",href:"/film"},{id:"perception-pod",slug:"perception-pod",title:"Perception pod",image:"/archive/Naman_A_surreal_still-life_composition_blending_luxury_with_s_7ffffa3b-e3b3-4578-bb03-62480fcdfd8a_1.png",href:"/film"}],Ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ha{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lC=new Va(-1,1,1,-1,0,1);class cC extends Wn{constructor(){super(),this.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wi([0,2,0,0,2,0],2))}}const uC=new cC;class Sm{constructor(e){this._mesh=new un(uC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wi extends Ha{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=uc.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class X_ extends Ha{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class hC extends Ha{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wi(Ru),this.copyPass.material.blending=xr,this.timer=new xm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}X_!==void 0&&(o instanceof X_?n=!0:o instanceof hC&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const fC="modulepreload",dC=function(r){return"/"+r},q_={},pC=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(t.map(u=>{if(u=dC(u),u in q_)return;q_[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":fC,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class bh extends Ha{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const uu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Th extends Ha{constructor(){super(),this.isOutputPass=!0,this.uniforms=uc.clone(uu.uniforms),this.material=new fx({name:uu.name,uniforms:this.uniforms,vertexShader:uu.vertexShader,fragmentShader:uu.fragmentShader}),this._fsQuad=new Sm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const mC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ds extends Ha{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(s,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ai(s,o,{type:Pn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new ai(s,o,{type:Pn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=mC;this.highPassUniforms=uc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=uc.clone(Ru.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Ru.vertexShader,fragmentShader:Ru.fragmentShader,premultipliedAlpha:!0,blending:nc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new Sm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ds.BlurDirectionX=new Ue(1,0);Ds.BlurDirectionY=new Ue(0,1);var Y_={};Le.registerPlugin(at);let bt=null,cr=null,on=null,Ot=null,kl=null,zl=null,Vl=null,Ks=null,Xr=!1,$t=null,ao=null,Zt=null,lo=null,_s=null,co=null,mn=null;const th=new Set;let _a=null,hc=null,zr=null,gC=null,uo=null;const fc={uTime:{value:0},uResolution:{value:new Ue(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};let dc=null;const Ir={angle:Math.PI/2,y:0,tilt:0},fi={angle:Math.PI/2,y:0,tilt:0},hr={x:0,y:0,z:0},sl={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Ct={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let ho=null,pc=null,mc=1;const Ax=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function _C(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:Ax.enableShadows,shadowMapSize:512}}function vC(r,e,t){typeof process<"u"&&Y_&&Y_.VITEST||(lo=new Qu(e),lo.compileEquirectangularShader&&lo.compileEquirectangularShader(),pC(async()=>{const{RGBELoader:n}=await Promise.resolve().then(()=>oC);return{RGBELoader:n}},void 0).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Ot){s.dispose?.();return}_s&&_s.dispose?.(),_s=lo.fromEquirectangular(s),r.environment=_s.texture,r.background=_s.texture,wC(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function xC(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=_M;return}r.shadowMap.type=yo,$t&&($t.castShadow=!0,$t.shadow.mapSize.set(1024,1024),$t.shadow.bias=-1e-4,$t.shadow.normalBias=.02,$t.shadow.camera.near=1,$t.shadow.camera.far=30,$t.shadow.camera.left=-7,$t.shadow.camera.right=7,$t.shadow.camera.top=7,$t.shadow.camera.bottom=-7,$t.target.position.set(Ct.modelX,Ct.modelY,Ct.modelZ),e.add($t.target));const n=new es(20,20),i=new ux({opacity:.22});Zt=new un(n,i),Zt.rotation.x=-Math.PI/2,Zt.position.set(Ct.modelX,Ct.shadowY,Ct.modelZ),Zt.receiveShadow=!0,e.add(Zt)}const yC={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:.15},uOffset:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uDarkness;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * 2.0;
      float vignette = 1.0 - dot(uv, uv) * uDarkness;
      vignette = smoothstep(0.0, uOffset, clamp(vignette, 0.0, 1.0));
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `},SC={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;
    
    float random(vec2 p) {
      vec2 k1 = vec2(
        23.14069263277926, // e^pi (Gelfond's constant)
        2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
      );
      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y, uTime));
      float grain = random(uvRandom);
      
      // Overlay grain
      vec3 color = texel.rgb;
      color += (grain - 0.5) * uGrain;
      
      gl_FragColor = vec4(color, texel.a);
    }
  `},MC={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);
      float edge = smoothstep(0.2, 0.75, dist);

      float shift = 0.0056 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `};function bC(r,e,t){const n=new bh(e,t);r.addPass(n),dc=new Ds(new Ue(window.innerWidth,window.innerHeight),.075,.4,.85),r.addPass(dc);const i=new Wi(yC);r.addPass(i);const s=new Wi(SC);s.uniforms.uGrain=fc.uGrain,s.uniforms.uTime=fc.uTime,r.addPass(s);const o=new Wi(MC);r.addPass(o);const a=new Th;r.addPass(a)}function TC(){bt&&(bt.toneMappingExposure=Ct.exposure),ao&&(ao.intensity=Ct.ambientIntensity,ao.color?.set&&ao.color.set(Ct.ambientColor)),$t&&($t.intensity=Ct.keyIntensity,$t.color?.set&&$t.color.set(Ct.keyColor),$t.position.set(Ct.keyX,Ct.keyY,Ct.keyZ))}function wC(){Ot&&(Ot.backgroundIntensity=Ct.envBackgroundIntensity,Ot.backgroundBlurriness=Ct.envBackgroundBlur)}function EC(){Zt&&(Zt.material&&(Zt.material.opacity=Ct.shadowOpacity),Zt.position.set(Ct.modelX,Ct.shadowY,Ct.modelZ))}function AC(){th.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=Mo.clamp((r.userData.baseRoughness??r.roughness)*Ct.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=Mo.clamp((r.userData.baseMetalness??r.metalness)*Ct.metalnessScale,0,1)),r.envMapIntensity=Mo.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Ct.envReflection,.2,5),r.needsUpdate=!0)})}function RC(r){r.map&&(r.map.colorSpace=Kt),r.emissiveMap&&(r.emissiveMap.colorSpace=Kt),r.needsUpdate=!0}function CC(r){return new Ri({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function PC(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=CC(t)),RC(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,th.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function LC(r){const e=new tr().setFromObject(r),t=e.getCenter(new W),n=e.getSize(new W);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function j_(r){LC(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,PC(e))})}function DC(){return uo||(uo=new Promise(async r=>{const e="/home/scene.glb",t="/work.glb";await Promise.all([Oi.init(),Oi.load([e,t])]),Oi.hold();const n=new yh,i=a=>new Promise(l=>{n.load(a,c=>{l(c.scene)},void 0,c=>{console.error(`[three.js] Error loading ${a}`,c),l(null)})}),[s,o]=await Promise.all([i(e),i(t)]);if(!Ot||!Xr){Oi.release(),r();return}s&&(_a=s,j_(_a),_a.traverse(a=>{if(!a.isMesh)return;const l=a.name.toLowerCase();(l.includes("volume")||l.includes("glow")||l.includes("light"))&&(ih=Rx(a,on,{c:1.45,p:2.1,glowColor:"#fff3c6",op:.18}))})),o&&(hc=o,j_(hc)),AC(),setTimeout(()=>{Oi.release()},200),r()}),uo)}async function nh(r){if(!Ot||(uo&&await uo,!Ot||!Xr))return;const e=r==="work"?hc:_a;!e||zr===e||(zr&&zr.parent&&Ot.remove(zr),e.position.set(Ct.modelX,Ct.modelY,Ct.modelZ),Ot.add(e),zr=e,Ot&&(r==="work"?Ot.fog=new Ao(15789284,.035):Ot.fog=new Ao(657935,.045)),Mm())}function IC(r,e){ho=r,pc=e}function NC(){ho=null,pc=null}function $_(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}function Rx(r,e,t={}){const{c:n=1.45,p:i=2.1,glowColor:s="#fff3c6",op:o=.18}=t,a=new Hr({side:Fi,blending:nc,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1});return a.onBeforeCompile=l=>{l.uniforms.c={value:n},l.uniforms.p={value:i},l.uniforms.glowColor={value:new Ne(s)},l.uniforms.op={value:o},l.vertexShader=`
      uniform float c;
      uniform float p;
      varying float vIntensity;
      void main() {
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDir = normalize(-(modelViewMatrix * vec4(position, 1.0)).xyz);
        float fresnel = pow(max(0.0, 1.0 - dot(viewNormal, viewDir)), p);
        vIntensity = min(1.5, fresnel * c);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,l.fragmentShader=`
      uniform vec3  glowColor;
      uniform float op;
      varying float vIntensity;
      void main() {
        float alpha = smoothstep(0.0, 1.0, vIntensity) * op;
        vec3 glow = glowColor * vIntensity;
        gl_FragColor = vec4(glow, alpha);
      }
    `,a.userData.shader=l},a.customProgramCacheKey=()=>`fake-volume-${s}-${n}-${i}`,r.material=a,r.renderOrder=10,r.needsUpdate=!0,{update(l){},setOpacity(l){const c=a.userData.shader;c&&(c.uniforms.op.value=l)}}}let ih=null;const gl=200,Cx={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function UC(r){const e=new Wn,t=new Float32Array(gl*3),n=new Float32Array(gl),i=new Float32Array(gl),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=Cx;for(let h=0;h<gl;h++)t[h*3]=(Math.random()-.5)*2*s,t[h*3+1]=o+Math.random()*(a-o),t[h*3+2]=l+Math.random()*(c-l),n[h]=.008+Math.random()*.016,i[h]=.35+Math.random()*.6;e.setAttribute("position",new Ht(t,3)),e.setAttribute("aSize",new Ht(n,1)),e.setAttribute("aOpacity",new Ht(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),f=new rn({transparent:!0,depthWrite:!1,blending:nc,uniforms:{uPixelRatio:{value:u}},vertexShader:`
      attribute float aSize;
      attribute float aOpacity;
      varying float vOpacity;
      uniform float uPixelRatio;
      void main() {
        vOpacity = aOpacity;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float alpha = smoothstep(1.0, 0.3, d) * vOpacity;
        gl_FragColor = vec4(vec3(1.0), alpha);
      }
    `});mn=new hm(e,f),mn.frustumCulled=!1,r.add(mn),Mm()}function FC(r){if(!mn)return;const e=mn.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Cx;for(let a=0;a<gl;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}mn.geometry.attributes.position.needsUpdate=!0}function OC(r,e){r&&r.traverse(t=>{if(!t.isMesh||!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i&&(i.userData.__baseOpacity===void 0&&(i.userData.__baseOpacity=i.opacity??1),i.transparent=!0,i.opacity=i.userData.__baseOpacity*e,i.depthWrite=e>.02,i.needsUpdate=!0)})})}function Mm(){const r=Mo.clamp(mc,0,1);OC(zr,r),mn?.material&&(mn.material.transparent=!0,mn.material.opacity=r,mn.visible=r>.01),Zt?.material&&(Zt.material.userData.__baseOpacity===void 0&&(Zt.material.userData.__baseOpacity=Zt.material.opacity??.22),Zt.material.opacity=Zt.material.userData.__baseOpacity*r,Zt.visible=r>.01)}function K_(){if(Xr)return{scene:Ot,camera:on,renderer:bt};Xr=!0,mc=1;const r=_C();if(Ot=new ph,Ot.fog=new Ao(657935,.045),on=new Rn(75,window.innerWidth/window.innerHeight,.1,1e3),bt=new ym({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),bt.setSize(window.innerWidth,window.innerHeight),bt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),bt.toneMapping=xc,bt.toneMappingExposure=r.toneMappingExposure,bt.outputColorSpace=Kt,Ks=document.querySelector("#background"),!Ks){console.warn("[three.js] #background element not found, creating one"),Ks=document.createElement("div"),Ks.id="background";const i=document.body.firstChild;document.body.insertBefore(Ks,i)}Ks.appendChild(bt.domElement),ao=new gm(16777215,.18),Ot.add(ao),$t=new Ju(16777215,3.25),$t.position.set(4.2,7.5,6.2),Ot.add($t),TC(),vC(Ot,bt,Ax.hdriUrl),xC(bt,Ot,r),EC(),UC(Ot),sessionStorage.getItem("webgl-page"),DC().then(()=>{if(!Ot||!Xr)return;const i=sessionStorage.getItem("webgl-page")||"home";nh(i==="work"?"work":"home");const o=Lx(i);hr.x=o.x,hr.y=o.y,hr.z=o.z});let e=null;kl=()=>{e&&clearTimeout(e),e=setTimeout(()=>{if(!on||!bt||!cr)return;const i=window.innerWidth,s=window.innerHeight;on.aspect=i/s,on.updateProjectionMatrix(),bt.setSize(i,s),cr.setSize(i,s),dc&&dc.setSize(i,s),fc.uResolution.value.set(i,s)},100)},window.addEventListener("resize",kl);try{cr=new Mh(bt)}catch{cr={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>bt?.render(Ot,on)}}bC(cr,Ot,on),Ir.angle=Math.PI/2,Ir.y=0,Ir.tilt=0,fi.angle=Math.PI/2,fi.y=0,fi.tilt=0;let t=0;zl=i=>{const s=performance.now();if(s-t<16)return;t=s;const o=i.clientX/window.innerWidth*2-1,a=-(i.clientY/window.innerHeight)*2+1;Ir.angle=Math.PI/2+o*sl.angleRange,Ir.y=-a*sl.yRange,Ir.tilt=o*sl.tiltRange},window.addEventListener("mousemove",zl,{passive:!0}),performance.now();const n=()=>{if(!Xr||!on||!cr)return;if(mc<=0&&!ho){Vl=requestAnimationFrame(n);return}const i=performance.now(),s=sl.lerp;fi.angle+=(Ir.angle-fi.angle)*s,fi.y+=(Ir.y-fi.y)*s,fi.tilt+=(Ir.tilt-fi.tilt)*s;const o=zr?zr.position:{x:Ct.modelX,y:Ct.modelY,z:Ct.modelZ},a=o.x+hr.x,l=o.y+hr.y,c=o.z+hr.z,u=sl.orbitRadius;on.position.x=a+Math.cos(fi.angle)*u,on.position.z=c+Math.sin(fi.angle)*u,on.position.y=l+fi.y+1;const f=i*.001;if(on.position.x+=Math.sin(f*.7)*.012+Math.sin(f*1.3)*.008,on.position.y+=Math.sin(f*.5)*.012+Math.cos(f*1.1)*.008,on.position.z+=Math.cos(f*.6)*.008,on.lookAt(a,l,c),on.rotation.z+=fi.tilt,fc.uTime.value=f,FC(f),ih&&ih.update(on),cr.render(),ho&&pc){const h=bt.autoClear;bt.autoClear=!1,bt.clearDepth();const d=ho.userData?.composer;d?d.render():bt.render(ho,pc),bt.autoClear=h}Vl=requestAnimationFrame(n)};return n(),{scene:Ot,camera:on,renderer:bt}}function _l(){if(!Xr)return;Xr=!1,Vl&&(cancelAnimationFrame(Vl),Vl=null),kl&&(window.removeEventListener("resize",kl),kl=null),zl&&(window.removeEventListener("mousemove",zl),zl=null),co&&(co.kill(),co=null),fc.uTime.value=0,dc=null,mn&&(mn.geometry&&mn.geometry.dispose(),mn.material&&mn.material.dispose(),mn.parent&&mn.parent.remove(mn),mn=null),ih=null,ho=null,pc=null,Zt&&(Zt.geometry&&Zt.geometry.dispose(),Zt.material&&Zt.material.dispose(),Zt=null),_s&&(_s.dispose(),_s=null),lo&&(lo.dispose(),lo=null),th.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),th.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==gC){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Ot?.remove(e))};r(_a),r(hc),_a=null,hc=null,zr=null,uo=null,cr&&(cr.dispose(),cr=null),bt&&(bt.dispose(),bt.domElement&&bt.domElement.parentNode&&bt.domElement.parentNode.removeChild(bt.domElement),bt=null),Ot=null,on=null,$t=null,ao=null,Ks=null,mc=1}function BC(){return Xr}function Px(){return bt}function bm(r){mc=Mo.clamp(r,0,1),Mm()}function Df(r){bm(1)}function Lx(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function Gl(r,e=!1){const t=Lx(r);sessionStorage.setItem("webgl-page",r),co&&(co.kill(),co=null),e?(hr.x=t.x,hr.y=t.y,hr.z=t.z):co=Le.to(hr,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}const kC={uniforms:{tDiffuse:{value:null},uDarkness:{value:.65},uOffset:{value:.68}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uDarkness;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = vUv - 0.5;
      float vignette = 1.0 - dot(uv, uv) * uDarkness;
      vignette = smoothstep(0.0, uOffset, clamp(vignette, 0.0, 1.0));
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `},zC={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec3 color = texel.rgb;
      vec2 uvRandom = vUv + uTime * 0.001;
      float grain = random(uvRandom);
      color += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(color, texel.a);
    }
  `},VC={uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);
      float edge = smoothstep(0.1, 0.6, dist);

      float shift = 0.0072 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));
      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `};function GC(r,e,t,n,i={}){const{bloomStrength:s=.15,bloomRadius:o=.5,bloomThreshold:a=.5,vignetteDarkness:l=.65,vignetteOffset:c=.68,includeBloom:u=!0}=i,f=new bh(e,t);if(r.addPass(f),u){const m=new Ds(new Ue(window.innerWidth,window.innerHeight),s,o,a);r.addPass(m)}const h=new Wi(kC);h.uniforms.uDarkness.value=l,h.uniforms.uOffset.value=c,r.addPass(h);const d=new Wi(zC);n?.uTime&&(d.uniforms.uTime=n.uTime),n?.uGrain&&(d.uniforms.uGrain=n.uGrain),r.addPass(d);const p=new Wi(VC);r.addPass(p);const _=new Th;r.addPass(_)}let Hl=!1;function Dx(){const r=document.querySelectorAll('[data-barba="container"][data-barba-namespace="work"]');return r.length?r[r.length-1]:null}const Qe={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:6,CAMERA_FOV:50,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ANGLE_RANGE:.2,PARALLAX_Y_RANGE:.3,PARALLAX_TILT_RANGE:.04,PARALLAX_CONFIG_LERP:.05,PARALLAX_ORBIT_RADIUS:5,WAVE_AMPLITUDE:.6,WAVE_FREQUENCY:.5,WAVE_SPEED:.2,WAVE_FLOW_X:.9,WAVE_FLOW_Y:.05,WAVE_FLOW_TURBULENCE:.08,WAVE_LAYER_FLOW_1:.45,WAVE_LAYER_FLOW_2:.9,WAVE_LAYER_FLOW_3:1.35,PARTICLE_COUNT:200,PARTICLE_BOUNDS:{xHalf:8,yMin:-3,yMax:5,zMin:-16,zMax:2},SCROLL_TILT_AMOUNT:.08,SCROLL_TILT_LERP:.04,SCROLL_TILT_MAX:.15},HC=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;
  uniform vec2 uWaveFlow;
  uniform float uWaveFlowTurbulence;
  uniform vec3 uWaveLayerFlow;
  uniform float uFlatten;
  uniform float uArcRadius;
  uniform float uArcSpan;

  varying vec2 vUv;
  varying vec3 vViewPosition;
  varying vec3 vNormal;

  // ─── SIMPLEX NOISE 3D (Ashima/McEwan) ───
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    float flatten = clamp(uFlatten, 0.0, 1.0);

    // Arc -> flat unwrapping.
    float angle = (vUv.x - 0.5) * uArcSpan;
    float xFlat = angle * uArcRadius;
    pos.x = mix(pos.x, xFlat, flatten);
    pos.z = mix(pos.z, 0.0, flatten);

    float t = uTime * uWaveSpeed;

    // ─── CLOTH SIMULATION ───
    
    // Scale UVs for noise space
    // x is long (ribbon length), y is short (ribbon height)
    vec2 noiseUV = vUv * vec2(2.0, 1.0) * uWaveFreq; 
    vec2 flow = uWaveFlow * t;

    // Layer 1: Large folds with subtle left->right advection.
    float n1 = snoise(vec3(
      noiseUV.x - flow.x * uWaveLayerFlow.x,
      noiseUV.y - flow.y * uWaveLayerFlow.x,
      t * uWaveFlowTurbulence
    ));

    // Layer 2: Smaller details/wrinkles
    float n2 = snoise(vec3(
      noiseUV.x * 2.5 - flow.x * uWaveLayerFlow.y,
      noiseUV.y * 2.5 - flow.y * uWaveLayerFlow.y,
      t * (uWaveFlowTurbulence * 1.8)
    ));

    // Layer 3: Fine flutter (mostly at edges)
    float n3 = snoise(vec3(
      noiseUV.x * 6.0 - flow.x * uWaveLayerFlow.z,
      noiseUV.y * 6.0 - flow.y * uWaveLayerFlow.z,
      t * (uWaveFlowTurbulence * 3.0)
    ));

    // Edge constraint: center is more constrained, edges flutter more
    float edgeDist = abs(vUv.y - 0.5) * 2.0; // 0 at center, 1 at edge
    float flutter = smoothstep(0.2, 1.0, edgeDist); 

    // Combine layers:
    // Base wave (large) + Detail wave (medium) + Edge flutter (small)
    float displacement = (n1 * 1.0 + n2 * 0.4 + n3 * 0.15 * flutter) * uWaveAmp * (1.0 - flatten);

    // Apply displacement along normal
    pos += normal * displacement;



    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Pass view position for recomputing normal in fragment shader
    vViewPosition = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
  }
`,WC=`
  uniform sampler2D uTex0;
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform sampler2D uTex3;
  uniform sampler2D uTex4;
  uniform sampler2D uTex5;
  uniform float uScrollOffset;
  uniform float uItemsOnStrip;
  uniform float uNumUnique;
  uniform float uGapSize;
  uniform float uTime;
  uniform float uSelectedIndex;
  uniform float uNonSelectedFade;
  uniform float uFocusSlot;
  uniform float uIsolateSlot;
  uniform float uTransitionOpacity;

  varying vec2 vUv;
  varying vec3 vViewPosition;
  varying vec3 vNormal;

  // Film grain hash
  float hash(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  void main() {
    // ─── RECOMPUTE NORMAL ───
    // Fallback to standard normal for now to debug
    vec3 normal = normalize(vNormal);

    // ─── TEXTURE MAPPING ───
    float totalU = vUv.x * uItemsOnStrip + uScrollOffset;
    float itemFract = fract(totalU);
    float itemIndex = floor(totalU);

    float wrappedIndex = mod(itemIndex, uNumUnique);
    if (wrappedIndex < 0.0) wrappedIndex += uNumUnique;

    float halfGap = uGapSize * 0.5;
    if (itemFract < halfGap || itemFract > 1.0 - halfGap) discard;

    float texU = (itemFract - halfGap) / (1.0 - uGapSize);
    vec2 texCoord = vec2(texU, vUv.y);

    vec3 col;
    int idx = int(wrappedIndex);
    if (idx == 0) col = texture2D(uTex0, texCoord).rgb;
    else if (idx == 1) col = texture2D(uTex1, texCoord).rgb;
    else if (idx == 2) col = texture2D(uTex2, texCoord).rgb;
    else if (idx == 3) col = texture2D(uTex3, texCoord).rgb;
    else if (idx == 4) col = texture2D(uTex4, texCoord).rgb;
    else col = texture2D(uTex5, texCoord).rgb;

    // ─── CLOTH LIGHTING (SHEEN) ───
    
    // View vector is simply opposite of view position (camera at 0,0,0 in view space)
    vec3 viewDir = normalize(vViewPosition); 
    
    // Fresnel / Sheen
    // Cloth looks brighter at glancing angles (sheen)
    float NdotV = abs(dot(normal, viewDir));
    float sheen = pow(1.0 - NdotV, 2.0); // Broad falloff for softness
    
    // Iridescence / Specular
    // Mix a warm golden tone into the sheen
    vec3 sheenColor = mix(vec3(0.5), vec3(1.0, 0.9, 0.7), 0.5);
    col = mix(col, col + sheenColor * 0.4, sheen);

    // Highlight wrinkles
    // Direct lighting simulation (assuming light from top-front)
    vec3 lightDir = normalize(vec3(0.2, 0.8, 1.0));
    float NdotL = max(0.0, dot(normal, lightDir));
    col *= (0.7 + 0.3 * NdotL); // Ambient + Diffuse



    // Film grain
    float grain = (hash(vUv * 1000.0 + uTime * 100.0) - 0.5) * 0.05;
    col += grain;

    float slotFloor = floor(totalU);
    float isSelectedSlot = 1.0 - step(0.5, abs(slotFloor - uFocusSlot));

    if (uIsolateSlot > 0.5 && isSelectedSlot < 0.5) discard;

    float nonSelectedFade = clamp(uNonSelectedFade, 0.0, 1.0);
    float alpha = 1.0;
    if (uFocusSlot > -0.5) {
      alpha -= (1.0 - isSelectedSlot) * nonSelectedFade;
    }

    gl_FragColor = vec4(col, alpha * uTransitionOpacity);
  }
`,R={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,composer:null,workGlowHandle:null,workModel:null,tunedMaterials:new Set,pointLight:null,ambientLight:null,shadowPlane:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{},scrollTilt:0,raycaster:new _x,rayMouse:new Ue,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,revealProgress:{},introTimeline:null,introComplete:!1,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,transitionLocked:!1,transitionProgress:0,selectedItemIndex:-1,selectedSlotIndex:0,selectedItem:null,clickNdc:new Ue(0,0),transitionTargetRect:null,stripStart:{position:new W(0,0,-1.5),scale:new W(.35,.35,.35),rotationZ:0},transitionEnd:{position:new W,scale:new W,rotationZ:0},transitionEndComputed:!1,coverPlaneTexture:null,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function XC(){const r=new gh,t=[...new Set(Sh.map(n=>n.image).filter(Boolean))].map(n=>R.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=Kt,s.minFilter=bi,s.magFilter=Bt,s.generateMipmaps=!0,R.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function qC(){const r=Qe.ARC_RADIUS,e=Qe.ARC_SPAN,t=Qe.STRIP_HEIGHT,n=Qe.WIDTH_SEGMENTS,i=Qe.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,f=0;for(let p=0;p<=i;p++){const _=p/i,m=(_-.5)*t+Qe.STRIP_Y_OFFSET;for(let g=0;g<=n;g++){const x=g/n,M=(x-.5)*e,y=Math.sin(M)*r,T=(Math.cos(M)-1)*r;o[c++]=y,o[c++]=m,o[c++]=T;const A=Math.sin(M),E=Math.cos(M);a[u++]=A,a[u++]=0,a[u++]=E,l[f++]=x,l[f++]=_}}const h=[];for(let p=0;p<i;p++)for(let _=0;_<n;_++){const m=p*(n+1)+_,g=m+1,x=m+(n+1),M=x+1;h.push(m,g,x),h.push(g,M,x)}const d=new Wn;return d.setAttribute("position",new Ht(o,3)),d.setAttribute("normal",new Ht(a,3)),d.setAttribute("uv",new Ht(l,2)),d.setIndex(h),d}function YC(r){r.map&&(r.map.colorSpace=Kt),r.emissiveMap&&(r.emissiveMap.colorSpace=Kt),r.needsUpdate=!0}function jC(r){return new Ri({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function $C(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=jC(t)),YC(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,R.tunedMaterials.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function KC(r){const e=new tr().setFromObject(r),t=e.getCenter(new W),n=e.getSize(new W);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function ZC(r){const e=KC(r),t=Math.max(e.x,e.y,e.z);if(t>0){const i=40/t;r.scale.set(i,i,i)}r.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,$C(n))})}async function JC(){const r="/work.glb";return await Promise.all([Oi.init(),Oi.load([r])]),Oi.hold(),new Promise((e,t)=>{new yh().load(r,i=>{R.workModel=i.scene,ZC(R.workModel),R.workModel.position.set(0,-5.6,-17.3),R.workModel.scale.set(1,1,1),R.scene.add(R.workModel),R.workModel.traverse(s=>{if(!s.isMesh)return;const o=s.name.toLowerCase();(o.includes("volume")||o.includes("glow")||o.includes("light"))&&(R.workGlowHandle=Rx(s,R.camera,{c:1.5,p:2.1,glowColor:"#fff8de",op:.2}))}),setTimeout(()=>{Oi.release()},200),e()},void 0,i=>{console.error("[work] Model load error:",i),Oi.release(),t(i)})})}function QC(){const r=window.innerWidth,e=window.innerHeight;R.camera=new Rn(Qe.CAMERA_FOV,r/e,.1,100),R.camera.position.set(0,0,Qe.PARALLAX_ORBIT_RADIUS),R.scene=new ph,R.scene.fog=new Ao(15131868,.055);const t=new op(16774630,1260);t.position.set(10,15,12),t.angle=Math.PI/5,t.penumbra=.5,t.decay=1.6,t.distance=3,t.castShadow=!0,t.shadow.bias=-1e-4,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.radius=4,R.scene.add(t),R.pointLight=t;const n=new mm(16777215,.9);n.position.set(-15,0,10),n.decay=2,n.distance=30,R.scene.add(n);const i=new op(16777215,1080);i.position.set(0,10,-15),i.target.position.set(0,0,-5),i.angle=Math.PI/4,i.penumbra=.6,i.decay=1.5,i.distance=40,R.scene.add(i),R.scene.add(i.target),R.ambientLight=new gm(16777215,.54),R.scene.add(R.ambientLight);const s=Px();s&&(s.shadowMap.enabled=!0,s.shadowMap.type=yo),R.stripGroup=new Gr,R.stripGroup.position.set(0,0,-1.5),R.stripGroup.scale.set(.35,.35,.35),R.scene.add(R.stripGroup),cP();const o=new es(60,60),a=new ux({opacity:.15,color:0});R.shadowPlane=new un(o,a),R.shadowPlane.rotation.x=-Math.PI/2,R.shadowPlane.position.set(0,-6,0),R.shadowPlane.receiveShadow=!0,R.shadowPlane.castShadow=!1,R.scene.add(R.shadowPlane),oP(),R.clock=new xm,iP(),IC(R.scene,R.camera)}function eP(){const r=[...new Set(Sh.map(e=>e.image))];for(R.textures=r.map(e=>R.textureCache.get(e)).filter(Boolean);R.textures.length<6;)R.textures.push(R.textures[0]||new cn);R.stripGeometry=qC(),R.stripMaterial=new rn({vertexShader:HC,fragmentShader:WC,uniforms:{uTex0:{value:R.textures[0]},uTex1:{value:R.textures[1]},uTex2:{value:R.textures[2]},uTex3:{value:R.textures[3]},uTex4:{value:R.textures[4]},uTex5:{value:R.textures[5]},uScrollOffset:{value:0},uItemsOnStrip:{value:Qe.ITEMS_ON_STRIP},uNumUnique:{value:Qe.NUM_UNIQUE},uGapSize:{value:Qe.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Qe.WAVE_AMPLITUDE},uWaveFreq:{value:Qe.WAVE_FREQUENCY},uWaveSpeed:{value:Qe.WAVE_SPEED},uWaveFlow:{value:new Ue(Qe.WAVE_FLOW_X,Qe.WAVE_FLOW_Y)},uWaveFlowTurbulence:{value:Qe.WAVE_FLOW_TURBULENCE},uWaveLayerFlow:{value:new W(Qe.WAVE_LAYER_FLOW_1,Qe.WAVE_LAYER_FLOW_2,Qe.WAVE_LAYER_FLOW_3)},uHoverUV:{value:new Ue(-1,-1)},uFlatten:{value:0},uSelectedIndex:{value:-1},uNonSelectedFade:{value:0},uFocusSlot:{value:-1},uIsolateSlot:{value:0},uTransitionOpacity:{value:1},uArcRadius:{value:Qe.ARC_RADIUS},uArcSpan:{value:Qe.ARC_SPAN}},extensions:{derivatives:!0},transparent:!0,side:Mr,depthWrite:!0}),R.stripMesh=new un(R.stripGeometry,R.stripMaterial),R.stripMesh.frustumCulled=!1,R.stripMesh.castShadow=!0,R.stripMesh.receiveShadow=!1,R.stripGroup.add(R.stripMesh)}function tP(){if(!R.titleEl||!R.titleEl.isConnected){const n=Dx();n&&(R.container=n,R.titleEl=n.querySelector(".slide-title"))}if(!R.titleEl)return;const r=.5*Qe.ITEMS_ON_STRIP+R.scrollCurrent,e=(Math.floor(r)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE;R.activeIndex=e;const t=Sh[e];t&&R.lastActiveTitle!==t.title&&(R.lastActiveTitle=t.title,R.titleEl.textContent=t.title)}function nP(r){if(!R.stripMaterial)return;const e=R.stripMaterial.uniforms;e.uScrollOffset.value=R.scrollCurrent,e.uTime.value=r}const Tm={uTime:{value:0},uResolution:{value:new Ue(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};function iP(){const r=Px();r&&(R.composer=new Mh(r),GC(R.composer,R.scene,R.camera,Tm,{includeBloom:!0,bloomStrength:.15,bloomRadius:.5,bloomThreshold:.5,vignetteDarkness:.65,vignetteOffset:.68}),R.scene.userData.composer=R.composer)}const ta={angle:Math.PI/2,y:0,tilt:0},or={angle:Math.PI/2,y:0,tilt:0};function rP(){if(R.transitionLocked)return;const r=R.clock?R.clock.getElapsed():0;ta.angle=Math.PI/2+R.mouseX*Qe.PARALLAX_ANGLE_RANGE,ta.y=-R.mouseY*Qe.PARALLAX_Y_RANGE,ta.tilt=R.mouseX*Qe.PARALLAX_TILT_RANGE;const e=Qe.PARALLAX_CONFIG_LERP;if(or.angle+=(ta.angle-or.angle)*e,or.y+=(ta.y-or.y)*e,or.tilt+=(ta.tilt-or.tilt)*e,R.camera){const t=R.stripGroup?R.stripGroup.position:{x:0,y:-.7,z:-13.4},n=t.x,i=t.y,s=t.z,o=Qe.PARALLAX_ORBIT_RADIUS;R.camera.position.x=n+Math.cos(or.angle)*o,R.camera.position.z=s+Math.sin(or.angle)*o,R.camera.position.y=i+or.y+1;const a=Math.sin(r*.7)*.012+Math.sin(r*1.3)*.008,l=Math.sin(r*.5)*.012+Math.cos(r*1.1)*.008,c=Math.cos(r*.6)*.008;R.camera.position.x+=a,R.camera.position.y+=l,R.camera.position.z+=c,R.camera.lookAt(n,i,s),R.camera.rotation.z+=or.tilt,R.pointLight&&(R.pointLight.position.x=R.camera.position.x*.5,R.pointLight.position.y=.5+R.camera.position.y*.3)}}function sP(){if(!R.stripGroup)return;const r=Math.max(-.15,Math.min(Qe.SCROLL_TILT_MAX,R.scrollVelocity*Qe.SCROLL_TILT_AMOUNT));R.scrollTilt+=(r-R.scrollTilt)*Qe.SCROLL_TILT_LERP,R.stripGroup.rotation.z=R.scrollTilt}function oP(){const{PARTICLE_COUNT:r,PARTICLE_BOUNDS:e}=Qe,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=e,a=new Wn,l=new Float32Array(r*3),c=new Float32Array(r),u=new Float32Array(r);for(let d=0;d<r;d++)l[d*3]=(Math.random()-.5)*2*t,l[d*3+1]=n+Math.random()*(i-n),l[d*3+2]=s+Math.random()*(o-s),c[d]=.012+Math.random()*.02,u[d]=.5+Math.random()*.4;a.setAttribute("position",new Ht(l,3)),a.setAttribute("aSize",new Ht(c,1)),a.setAttribute("aOpacity",new Ht(u,1));const f=Math.min(window.devicePixelRatio||1,1.5),h=new rn({transparent:!0,depthWrite:!1,blending:So,uniforms:{uPixelRatio:{value:f}},vertexShader:`
      attribute float aSize;
      attribute float aOpacity;
      varying float vOpacity;
      uniform float uPixelRatio;
      void main() {
        vOpacity = aOpacity;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio * (420.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float alpha = smoothstep(1.0, 0.3, d) * vOpacity;
        gl_FragColor = vec4(vec3(0.85), alpha);
      }
    `});R.particleSystem=new hm(a,h),R.particleSystem.frustumCulled=!1,R.particleSystem.renderOrder=10,R.scene.add(R.particleSystem)}function aP(r){if(!R.particleSystem)return;const e=R.particleSystem.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Qe.PARTICLE_BOUNDS;for(let a=0;a<Qe.PARTICLE_COUNT;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}R.particleSystem.geometry.attributes.position.needsUpdate=!0}function lP(){if(R.transitionLocked){R.scrollVelocity=0,R.scrollTarget=R.scrollCurrent;return}!R.isPointerDown&&Math.abs(R.scrollVelocity)>1e-4?(R.scrollTarget+=R.scrollVelocity,R.scrollVelocity*=.95):R.isPointerDown||(R.scrollVelocity=0),R.scrollCurrent+=(R.scrollTarget-R.scrollCurrent)*Qe.SCROLL_LERP}function na(r){return Math.max(0,Math.min(1,r))}function cP(){R.stripGroup&&(R.stripStart.position.copy(R.stripGroup.position),R.stripStart.scale.copy(R.stripGroup.scale),R.stripStart.rotationZ=R.stripGroup.rotation.z)}function uP(){R.stripGroup&&(R.stripGroup.position.copy(R.stripStart.position),R.stripGroup.scale.copy(R.stripStart.scale),R.stripGroup.rotation.z=R.stripStart.rotationZ)}function hP(r){if(!R.stripGroup||!R.transitionEndComputed)return;const t=r;R.stripGroup.position.lerpVectors(R.stripStart.position,R.transitionEnd.position,t),R.stripGroup.scale.lerpVectors(R.stripStart.scale,R.transitionEnd.scale,t),R.stripGroup.rotation.z=Mo.lerp(R.stripStart.rotationZ,R.transitionEnd.rotationZ,t)}function fP(r){const e=na(r);if(R.transitionProgress=e,R.stripMaterial?.uniforms&&(R.stripMaterial.uniforms.uFlatten.value=e,R.stripMaterial.uniforms.uSelectedIndex.value=R.selectedItemIndex,R.stripMaterial.uniforms.uNonSelectedFade.value=na((e-.18)/.55),R.stripMaterial.uniforms.uFocusSlot.value=R.selectedSlotIndex,R.stripMaterial.uniforms.uIsolateSlot.value=0),R.titleEl&&(R.titleEl.style.opacity=`${1-na(e*1.5)}`),R.workModel){const t=1-na((e-.05)/.45);R.workModel.visible=t>.01,R.workModel.traverse(n=>{if(!n.isMesh||!n.material)return;(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s&&(s.userData.__baseOpacity===void 0&&(s.userData.__baseOpacity=s.opacity??1),s.transparent=!0,s.opacity=s.userData.__baseOpacity*t)})})}if(R.particleSystem?.material&&"opacity"in R.particleSystem.material){R.particleSystem.material.transparent=!0;const t=1-na(e*1.4);R.particleSystem.material.opacity=t,R.particleSystem.visible=t>.01}if(R.stripMaterial?.uniforms&&e>.75){const t=1-na((e-.75)/.25);R.stripMaterial.uniforms.uTransitionOpacity.value=t}R.transitionTargetRect&&R.transitionEndComputed&&hP(e)}function dP(){R.coverPlaneTexture=null}function pP(r){if(R.transitionLocked||!R.introComplete)return;r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;R.scrollTarget+=e*Qe.SCROLL_SPEED}function mP(r){R.transitionLocked||!R.introComplete||(R.isPointerDown=!0,R.lastPointerX=r.clientX,R.dragStartX=r.clientX,R.dragStartY=r.clientY,R.scrollVelocity=0,R.lastDragTime=performance.now())}function gP(r){if(R.transitionLocked)return;if(R.isPointerDown){const n=performance.now(),i=r.clientX-R.lastPointerX,s=n-R.lastDragTime;R.scrollTarget-=i*Qe.DRAG_MULTIPLIER,s>0&&(R.scrollVelocity=-i*Qe.DRAG_MULTIPLIER/(s/16)),R.lastPointerX=r.clientX,R.lastDragTime=n}const e=r.clientX/window.innerWidth*2-1,t=-(r.clientY/window.innerHeight)*2+1;R.mouseX=e,R.mouseY=t}function _P(r){if(R.transitionLocked||!R.isPointerDown)return;R.isPointerDown=!1;const e=Math.abs(r.clientX-R.dragStartX),t=Math.abs(r.clientY-R.dragStartY);e<5&&t<5&&vP(r)}function vP(r){if(R.transitionLocked||!R.camera||!R.stripMesh)return;R.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),R.raycaster.setFromCamera(R.rayMouse,R.camera);const e=R.raycaster.intersectObject(R.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Qe.ITEMS_ON_STRIP+R.scrollCurrent,s=(Math.floor(n)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE,o=Sh[s];o?.href&&(Vf?.go?Vf.go(o.href):window.location.href=o.href)}}}let va=null;function xP(){va&&clearTimeout(va),va=setTimeout(()=>{if(!R.camera)return;const r=window.innerWidth,e=window.innerHeight;R.camera.aspect=r/e,R.camera.updateProjectionMatrix(),R.composer&&R.composer.setSize(r,e),Tm.uResolution.value.set(r,e)},100)}function yP(){R.handlers.wheel=pP,R.handlers.pointerdown=mP,R.handlers.pointermove=gP,R.handlers.pointerup=_P,R.handlers.resize=xP,window.addEventListener("wheel",R.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",R.handlers.pointerdown),window.addEventListener("pointermove",R.handlers.pointermove),window.addEventListener("pointerup",R.handlers.pointerup),window.addEventListener("resize",R.handlers.resize)}function SP(){R.handlers.wheel&&window.removeEventListener("wheel",R.handlers.wheel),R.handlers.pointerdown&&window.removeEventListener("pointerdown",R.handlers.pointerdown),R.handlers.pointermove&&window.removeEventListener("pointermove",R.handlers.pointermove),R.handlers.pointerup&&window.removeEventListener("pointerup",R.handlers.pointerup),R.handlers.resize&&window.removeEventListener("resize",R.handlers.resize)}function Ix(){R.clock&&R.clock.update();const r=R.clock?R.clock.getElapsed():0;lP(),nP(r),rP(),sP(),aP(r),R.workGlowHandle&&R.workGlowHandle.update(R.camera),tP(),Tm.uTime.value=r,R.animationFrame=requestAnimationFrame(Ix)}async function Nx(){if(Hl)return;Hl=!0;const r=Dx();if(!r){console.warn("[work] no active work container found"),Hl=!1;return}R.container=r,R.titleEl=r.querySelector(".slide-title"),R.transitionLocked=!1,R.transitionProgress=0,R.selectedItem=null,R.selectedItemIndex=-1,R.selectedSlotIndex=0,R.transitionTargetRect=null,bm(1),QC();try{await JC()}catch(e){console.error("[work] Failed to load 3D model:",e)}await XC(),eP(),yP(),R.introComplete=!0,R.scrollVelocity=0,R.scrollTarget=0,R.scrollCurrent=0,R.titleEl&&Le.set(R.titleEl,{opacity:1,y:0}),uP(),fP(0),R.animationFrame=requestAnimationFrame(Ix)}function Qs({keepCoverPlane:r=!1}={}){if(!Hl)return;Hl=!1;const e=R.transitionLocked;R.animationFrame!==null&&(cancelAnimationFrame(R.animationFrame),R.animationFrame=null),SP(),NC(),r||dP(),R.introTimeline&&(R.introTimeline.kill(),R.introTimeline=null),R.titleEl&&(Le.killTweensOf(R.titleEl),R.titleEl.style.opacity=""),R.stripMesh&&R.stripGroup?.remove(R.stripMesh),R.stripMaterial&&(R.stripMaterial.dispose(),R.stripMaterial=null),R.stripGeometry&&(R.stripGeometry.dispose(),R.stripGeometry=null),R.stripMesh=null,R.textures=[],R.particleSystem&&(R.particleSystem.geometry&&R.particleSystem.geometry.dispose(),R.particleSystem.material&&R.particleSystem.material.dispose(),R.particleSystem.parent&&R.particleSystem.parent.remove(R.particleSystem),R.particleSystem=null),R.workModel&&(R.scene?.remove(R.workModel),R.workModel.traverse(t=>{t.isMesh&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose()))}),R.workModel=null),R.tunedMaterials.clear(),R.composer&&(R.composer=null),R.workGlowHandle=null,R.shadowPlane&&(R.shadowPlane.geometry.dispose(),R.shadowPlane.material.dispose(),R.shadowPlane.parent&&R.shadowPlane.parent.remove(R.shadowPlane),R.shadowPlane=null),R.pointLight&&(R.scene?.remove(R.pointLight),R.pointLight=null),R.ambientLight&&(R.scene?.remove(R.ambientLight),R.ambientLight=null),R.stripGroup&&(R.scene?.remove(R.stripGroup),R.stripGroup=null),R.textureCache.forEach(t=>t.dispose()),R.textureCache.clear(),va&&(clearTimeout(va),va=null),document.body.style.cursor="",R.scene=null,R.camera=null,R.clock=null,R.container=null,R.titleEl=null,R.scrollTarget=0,R.scrollCurrent=0,R.scrollVelocity=0,R.lastDragTime=0,R.activeIndex=0,R.lastActiveTitle="",R.mouseX=0,R.mouseY=0,R.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},R.scrollTilt=0,R.hoverUV=null,R.hoverActive=!1,R.rippleStrength=0,R.isPointerDown=!1,R.transitionLocked=!1,R.transitionProgress=0,R.selectedItemIndex=-1,R.selectedSlotIndex=0,R.selectedItem=null,R.transitionTargetRect=null,R.transitionEndComputed=!1,R.clickNdc.set(0,0),e||bm(1),R.revealProgress={value:0},R.introTimeline=null,R.introComplete=!1,R.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}}const Gi=[{id:1,title:"Archive 01",year:"2024",description:"A glimpse into the creative process.",category:"photography",image:"/archive/image-1.jpg"},{id:2,title:"Archive 02",year:"2024",description:"Exploring light and shadow.",category:"photography",image:"/archive/image-2.jpg"},{id:3,title:"Archive 03",year:"2023",description:"Moments captured in time.",category:"photography",image:"/archive/image-3.jpg"},{id:4,title:"Archive 04",year:"2023",description:"Visual storytelling through imagery.",category:"photography",image:"/archive/image-4.jpg"},{id:5,title:"Archive 05",year:"2023",description:"The art of observation.",category:"photography",image:"/archive/image-5.jpg"}],mt=Object.freeze({cardWidth:2.25,cardHeight:2.8,cardSpacing:1.85,visibleRange:12,dragSensitivityDesktop:.0035,dragSensitivityMobile:.006,wheelSensitivity:.0012,velocityDamping:.95,velocityEpsilon:1e-5,boundSlack:1.1,clickThreshold:12,clickTimeout:260,dragExitThreshold:48,focusLift:1.35,focusScale:1.22,focusTrackLerp:.12,focusTransition:.42,cameraFollowLerp:.085,cameraBaseY:.25,cameraBaseZ:8.6,dockMargin:20,dockTopSafe:90,atlasTileSize:1024,mobileBreakpoint:900,hdriUrl:"/env.hdr",postFX:Object.freeze({grain:.015,vignette:.15,bloomStrength:.12,bloomRadius:.4,bloomThreshold:.85})}),MP={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:mt.postFX.vignette},uOffset:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uDarkness;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * 2.0;
      float vignette = 1.0 - dot(uv, uv) * uDarkness;
      vignette = smoothstep(0.0, uOffset, clamp(vignette, 0.0, 1.0));
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `},bP={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:mt.postFX.grain}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;
    
    float random(vec2 p) {
      vec2 k1 = vec2(
        23.14069263277926,
        2.665144142690225
      );
      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y, uTime));
      float grain = random(uvRandom);
      
      vec3 color = texel.rgb;
      color += (grain - 0.5) * uGrain;
      
      gl_FragColor = vec4(color, texel.a);
    }
  `},TP={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);
      float edge = smoothstep(0.2, 0.75, dist);

      float shift = 0.004 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `},w={running:!1,initToken:0,rafId:null,container:null,backgroundEl:null,renderHost:null,eventTarget:null,renderer:null,composer:null,grainPass:null,pmremGenerator:null,envRenderTarget:null,scene:null,camera:null,clock:null,root:null,cards:[],cardByIndex:new Map,atlasTexture:null,sourceTextures:[],ambientLight:null,keyLight:null,fillLight:null,rimLight:null,raycaster:new _x,pointerNdc:new Ue,trackOffset:0,trackVelocity:0,isDragging:!1,activePointerId:null,pointerStart:{x:0,y:0},pointerLast:{x:0,y:0},clickStartTime:0,dragDistance:0,focusedIndex:-1,focusLerp:{value:0},mouseParallaxTarget:new Ue(0,0),mouseParallaxCurrent:new Ue(0,0),dockPosCurrent:new Ue(-9999,-9999),dockPosTarget:new Ue(-9999,-9999),handlers:{},dom:{overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},tmp:{p0:new W,p1:new W,toCam:new W,projected:new W}};function Z_(r,e,t){return Math.min(t,Math.max(e,r))}function wP(){return window.innerWidth<=mt.mobileBreakpoint}function EP(){return wP()?mt.dragSensitivityMobile:mt.dragSensitivityDesktop}function J_(r,e){return e.x=r*mt.cardSpacing,e.y=Math.sin(r*.42)*.52+Math.sin(r*.11)*.25,e.z=Math.sin(r*.78)*2.15+Math.sin(r*.2)*1.1,e}function AP(r){return Math.sin(r*.55)*.24+Math.sin(r*.17)*.1}function rh(){w.dom.panel&&(w.dom.panel.style.transform="translate3d(-9999px, -9999px, 0)"),w.dockPosCurrent.set(-9999,-9999),w.dockPosTarget.set(-9999,-9999)}function RP(){w.dom.overlay=document.getElementById("archive-overlay"),w.dom.panel=document.querySelector(".archive-focus-panel"),w.dom.title=document.querySelector(".archive-focus-title"),w.dom.year=document.querySelector(".archive-focus-year"),w.dom.description=document.querySelector(".archive-focus-description"),w.dom.category=document.querySelector(".archive-focus-category"),w.dom.prev=document.getElementById("archive-prev"),w.dom.next=document.getElementById("archive-next"),w.dom.close=document.querySelector(".archive-close-btn")}function CP(){w.dom.overlay&&w.dom.overlay.classList.add("active"),document.body.classList.add("archive-focus-open")}function wm(){w.dom.overlay&&w.dom.overlay.classList.remove("active"),document.body.classList.remove("archive-focus-open"),rh()}function PP(r){const e=Gi[r];e&&(w.dom.title&&(w.dom.title.textContent=e.title||""),w.dom.year&&(w.dom.year.textContent=e.year||""),w.dom.description&&(w.dom.description.textContent=e.description||""),w.dom.category&&(w.dom.category.textContent=e.category||""))}async function LP(r){const e=new gh,t=new Array(r.length).fill(null);return await Promise.all(r.map((n,i)=>new Promise(s=>{e.load(n.image,o=>{o.colorSpace=Kt,o.wrapS=Gn,o.wrapT=Gn,o.minFilter=bi,o.magFilter=Bt,o.generateMipmaps=!0,t[i]=o,s()},void 0,()=>{t[i]=null,s()})}))),t}function DP(r){const e=Math.ceil(Math.sqrt(r.length)),t=mt.atlasTileSize,n=document.createElement("canvas");n.width=e*t,n.height=e*t;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,n.width,n.height),r.forEach((o,a)=>{if(!o?.image)return;const l=o.image,c=a%e*t,u=Math.floor(a/e)*t,f=(l.width||1)/(l.height||1);let h=t,d=t,p=c,_=u;f>1?(h=t*f,p=c-(h-t)*.5):(d=t/f,_=u-(d-t)*.5),i.drawImage(l,p,_,h,d)});const s=new $b(n);return s.colorSpace=Kt,s.wrapS=Gn,s.wrapT=Gn,s.minFilter=bi,s.magFilter=Bt,s.generateMipmaps=!0,s.flipY=!1,s}function IP(r,e){const t=Math.ceil(Math.sqrt(e)),n=r%t,i=Math.floor(r/t),s=new es(mt.cardWidth,mt.cardHeight,1,1),o=s.attributes.uv;for(let a=0;a<o.count;a+=1){const l=o.getX(a),c=o.getY(a),u=(l+n)/t,f=(c+(t-1-i))/t;o.setXY(a,u,f)}return o.needsUpdate=!0,s}function NP(r,e){const t=IP(r,Gi.length),n=new Ri({map:e,color:16777215,roughness:.25,metalness:.1,clearcoat:1,clearcoatRoughness:.1,iridescence:.15,iridescenceIOR:1.3,envMapIntensity:1.2,side:Fi}),i=new un(t,n);return i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.userData.archiveIndex=r,i}function UP(){w.composer=new Mh(w.renderer);const r=new bh(w.scene,w.camera);w.composer.addPass(r);const e=new Ds(new Ue(window.innerWidth,window.innerHeight),mt.postFX.bloomStrength,mt.postFX.bloomRadius,mt.postFX.bloomThreshold);w.composer.addPass(e);const t=new Wi(MP);w.composer.addPass(t),w.grainPass=new Wi(bP),w.composer.addPass(w.grainPass);const n=new Wi(TP);w.composer.addPass(n),w.composer.addPass(new Th)}function FP(){w.pmremGenerator=new Qu(w.renderer),w.pmremGenerator.compileEquirectangularShader(),new Ex().load(mt.hdriUrl,r=>{w.envRenderTarget=w.pmremGenerator.fromEquirectangular(r),w.scene.environment=w.envRenderTarget.texture,r.dispose()})}function OP(){w.scene=new ph,w.scene.background=new Ne(15921906),w.scene.fog=new Ao(15921906,.035),w.camera=new Rn(45,1,.1,120),w.camera.position.set(0,mt.cameraBaseY,mt.cameraBaseZ),w.root=new Gr,w.scene.add(w.root),w.ambientLight=new gm(16777215,.4),w.keyLight=new Ju(16777215,2),w.keyLight.position.set(5,5,8),w.keyLight.castShadow=!0,w.keyLight.shadow.mapSize.width=1024,w.keyLight.shadow.mapSize.height=1024,w.fillLight=new mm(12176383,.8,20),w.fillLight.position.set(-5,0,5),w.rimLight=new Ju(16767406,1.5),w.rimLight.position.set(0,5,-5),w.scene.add(w.ambientLight,w.keyLight,w.fillLight,w.rimLight),FP()}function BP(r,e){const t=r.mesh,n=t.material,i=w.focusedIndex===r.index,s=w.focusLerp.value;let o=0;s>0&&w.focusedIndex!==-1&&!i&&(o=s);const a=1-o*.55;n.color.setRGB(a,a,a),n.emissiveIntensity=i?.08+s*.22:.05,n.opacity=1-o*.2,t.visible=Math.abs(e)<=mt.visibleRange}function kP(){const r=w.tmp.p0,e=w.tmp.p1;for(const t of w.cards){const n=t.index-w.trackOffset;J_(n,r),J_(n+.04,e);const i=t.mesh;i.position.copy(r),i.lookAt(e),i.rotateZ(AP(n)),i.scale.set(1,1,1),w.focusedIndex===t.index&&w.focusLerp.value>.001&&(w.tmp.toCam.copy(w.camera.position).sub(i.position).normalize(),i.position.addScaledVector(w.tmp.toCam,mt.focusLift*w.focusLerp.value),i.scale.setScalar(1+mt.focusScale*w.focusLerp.value)),BP(t,n)}}function zP(){if(w.focusedIndex!==-1){const t=w.focusedIndex;w.trackOffset+=(t-w.trackOffset)*mt.focusTrackLerp,w.trackVelocity*=.84}else w.trackOffset+=w.trackVelocity,w.trackVelocity*=mt.velocityDamping,Math.abs(w.trackVelocity)<mt.velocityEpsilon&&(w.trackVelocity=0);const r=-mt.boundSlack,e=Gi.length-1+mt.boundSlack;w.trackOffset<r&&(w.trackOffset=r,w.trackVelocity<0&&(w.trackVelocity*=.35)),w.trackOffset>e&&(w.trackOffset=e,w.trackVelocity>0&&(w.trackVelocity*=.35))}function VP(){const r=Math.sin(w.trackOffset*.24)*.65+(w.trackOffset-(Gi.length-1)*.5)*.08;w.camera.position.x+=(r-w.camera.position.x)*mt.cameraFollowLerp,w.camera.position.y=mt.cameraBaseY,w.camera.position.z=mt.cameraBaseZ,w.camera.lookAt(w.camera.position.x*.2,0,-.45),w.mouseParallaxCurrent.x+=(w.mouseParallaxTarget.x-w.mouseParallaxCurrent.x)*.1,w.mouseParallaxCurrent.y+=(w.mouseParallaxTarget.y-w.mouseParallaxCurrent.y)*.1,w.camera.position.x+=w.mouseParallaxCurrent.x*.7,w.camera.position.y+=w.mouseParallaxCurrent.y*.28}function GP(){if(w.focusedIndex===-1||!w.dom.panel){rh();return}const r=w.cardByIndex.get(w.focusedIndex);if(!r?.mesh?.visible){rh();return}const e=r.mesh;w.tmp.projected.copy(e.position),w.tmp.projected.y+=mt.cardHeight*.22,w.tmp.projected.project(w.camera);const t=window.innerWidth,n=window.innerHeight,i=(w.tmp.projected.x*.5+.5)*t,s=(-w.tmp.projected.y*.5+.5)*n,o=w.dom.panel.getBoundingClientRect(),a=Z_(i+28,mt.dockMargin,t-o.width-mt.dockMargin),l=Z_(s-o.height*.5,mt.dockTopSafe,n-o.height-mt.dockMargin);w.dockPosTarget.set(a,l),w.dockPosCurrent.x+=(w.dockPosTarget.x-w.dockPosCurrent.x)*.2,w.dockPosCurrent.y+=(w.dockPosTarget.y-w.dockPosCurrent.y)*.2,w.dom.panel.style.transform=`translate3d(${w.dockPosCurrent.x.toFixed(2)}px, ${w.dockPosCurrent.y.toFixed(2)}px, 0)`}function HP(r,e){const t=w.renderer.domElement.getBoundingClientRect();w.pointerNdc.set((r-t.left)/t.width*2-1,-((e-t.top)/t.height*2-1))}function WP(r,e){if(!w.renderer||!w.camera||w.cards.length===0)return null;HP(r,e),w.raycaster.setFromCamera(w.pointerNdc,w.camera);const t=w.raycaster.intersectObjects(w.cards.map(s=>s.mesh),!1);if(!t.length)return null;const i=t[0].object.userData?.archiveIndex;return typeof i!="number"?null:i}function dp(r){r<0||r>=Gi.length||(w.focusedIndex=r,PP(r),CP(),Le.to(w.focusLerp,{value:1,duration:mt.focusTransition,ease:"power2.out",overwrite:!0}))}function Xs(){w.focusedIndex!==-1&&(w.focusedIndex=-1,Le.to(w.focusLerp,{value:0,duration:mt.focusTransition*.92,ease:"power2.out",overwrite:!0,onComplete:()=>{w.focusedIndex===-1&&wm()}}))}function hu(r){if(Gi.length===0)return;if(w.focusedIndex===-1){dp(0);return}let e=w.focusedIndex+r;e<0&&(e=Gi.length-1),e>=Gi.length&&(e=0),dp(e)}function XP(r){return!!(r?.closest(".nav-wrap")||r?.closest(".bottom-nav-wrap")||r?.closest(".menu-wrap")||r?.closest(".menu-box")||r?.closest(".archive-nav-btn")||r?.closest(".archive-close-btn")||r?.closest(".archive-focus-panel"))}function qP(){const r=w.eventTarget;r&&(w.handlers.pointerDown=e=>{if(!(e.button!==void 0&&e.button!==0)&&!XP(e.target)){if(w.isDragging=!0,w.activePointerId=e.pointerId??null,w.pointerStart.x=e.clientX,w.pointerStart.y=e.clientY,w.pointerLast.x=e.clientX,w.pointerLast.y=e.clientY,w.clickStartTime=performance.now(),w.dragDistance=0,r.setPointerCapture&&e.pointerId!==void 0)try{r.setPointerCapture(e.pointerId)}catch{}w.eventTarget?.style&&(w.eventTarget.style.cursor="grabbing")}},w.handlers.pointerMove=e=>{const t=w.renderer?.domElement?.getBoundingClientRect();if(t&&t.width&&t.height){const o=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;w.mouseParallaxTarget.set(-o*.05,a*.05)}if(!w.isDragging||w.activePointerId!==null&&e.pointerId!==void 0&&w.activePointerId!==e.pointerId)return;const n=e.clientX-w.pointerLast.x,i=e.clientY-w.pointerLast.y;w.dragDistance+=Math.sqrt(n*n+i*i);const s=-n*EP();w.trackOffset+=s,w.trackVelocity=s,w.focusedIndex!==-1&&w.dragDistance>mt.dragExitThreshold&&Xs(),w.pointerLast.x=e.clientX,w.pointerLast.y=e.clientY},w.handlers.pointerUp=e=>{if(!w.isDragging||w.activePointerId!==null&&e.pointerId!==void 0&&w.activePointerId!==e.pointerId)return;if(w.isDragging=!1,r.releasePointerCapture&&e.pointerId!==void 0)try{r.releasePointerCapture(e.pointerId)}catch{}if(w.activePointerId=null,w.eventTarget?.style&&(w.eventTarget.style.cursor="grab"),performance.now()-w.clickStartTime<=mt.clickTimeout&&w.dragDistance<=mt.clickThreshold){const i=WP(e.clientX,e.clientY);i===null?w.focusedIndex!==-1&&Xs():w.focusedIndex===i?Xs():dp(i),w.trackVelocity=0}},w.handlers.wheel=e=>{if(!r.contains(e.target))return;e.preventDefault();const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,n=t*mt.wheelSensitivity;w.trackOffset+=n,w.trackVelocity+=n*.35,w.focusedIndex!==-1&&Math.abs(t)>8&&Xs()},w.handlers.keyDown=e=>{if(e.key==="Escape"){w.focusedIndex!==-1&&(e.preventDefault(),Xs());return}e.key==="ArrowRight"?(e.preventDefault(),hu(1)):e.key==="ArrowLeft"&&(e.preventDefault(),hu(-1))},w.handlers.overlayClick=e=>{!e.target.closest(".archive-focus-panel")&&!e.target.closest(".archive-nav-btn")&&Xs()},w.handlers.prevClick=e=>{e.preventDefault(),e.stopPropagation(),hu(-1)},w.handlers.nextClick=e=>{e.preventDefault(),e.stopPropagation(),hu(1)},w.handlers.closeClick=e=>{e.preventDefault(),e.stopPropagation(),Xs()},w.handlers.resize=()=>{if(!w.renderer||!w.camera||!w.composer)return;const e=w.renderHost||w.backgroundEl||w.container,t=e?.clientWidth||window.innerWidth,n=e?.clientHeight||window.innerHeight;w.camera.aspect=t/n,w.camera.updateProjectionMatrix(),w.renderer.setSize(t,n),w.composer.setSize(t,n)},r.addEventListener("pointerdown",w.handlers.pointerDown),window.addEventListener("pointermove",w.handlers.pointerMove),window.addEventListener("pointerup",w.handlers.pointerUp),r.addEventListener("wheel",w.handlers.wheel,{passive:!1}),window.addEventListener("keydown",w.handlers.keyDown),window.addEventListener("resize",w.handlers.resize),w.dom.overlay?.addEventListener("click",w.handlers.overlayClick),w.dom.prev?.addEventListener("click",w.handlers.prevClick),w.dom.next?.addEventListener("click",w.handlers.nextClick),w.dom.close?.addEventListener("click",w.handlers.closeClick))}function YP(){const r=w.eventTarget;r&&(w.handlers.pointerDown&&r.removeEventListener("pointerdown",w.handlers.pointerDown),w.handlers.wheel&&r.removeEventListener("wheel",w.handlers.wheel)),window.removeEventListener("pointermove",w.handlers.pointerMove),window.removeEventListener("pointerup",w.handlers.pointerUp),window.removeEventListener("keydown",w.handlers.keyDown),window.removeEventListener("resize",w.handlers.resize),w.dom.overlay?.removeEventListener("click",w.handlers.overlayClick),w.dom.prev?.removeEventListener("click",w.handlers.prevClick),w.dom.next?.removeEventListener("click",w.handlers.nextClick),w.dom.close?.removeEventListener("click",w.handlers.closeClick),w.handlers={}}function Ux(){w.running&&(zP(),VP(),kP(),GP(),w.grainPass?.uniforms?.uTime&&(w.clock.update(),w.grainPass.uniforms.uTime.value=w.clock.getElapsed()),w.composer.render(),w.rafId=requestAnimationFrame(Ux))}async function jP(r){if(w.backgroundEl=document.getElementById("background"),w.container=document.getElementById("gallery")||w.backgroundEl||document.body,!w.container||!Gi.length)return!1;w.renderHost=w.backgroundEl||w.container;const e=w.renderHost.querySelector('canvas[data-archive-canvas="true"]');e&&e.remove();const t=window.innerWidth,n=window.innerHeight;w.renderer=new ym({antialias:!0,alpha:!0,powerPreference:"high-performance"}),w.renderer.outputColorSpace=Kt,w.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),w.renderer.toneMapping=xc,w.renderer.toneMappingExposure=1.2,w.renderer.shadowMap.enabled=!0,w.renderer.shadowMap.type=yo,w.renderer.setSize(t,n),w.renderer.setClearColor(0,0),w.renderer.domElement.dataset.archiveCanvas="true",w.renderHost.appendChild(w.renderer.domElement),w.eventTarget=document.body,w.container.style.pointerEvents="auto",w.container.style.touchAction="none",w.container.style.cursor="grab",w.renderer.domElement.style.pointerEvents="none",w.renderer.domElement.style.touchAction="none",w.renderer.domElement.style.position="absolute",w.renderer.domElement.style.top="0",w.renderer.domElement.style.left="0",document.body.style.color="#111111",document.body.style.backgroundColor="transparent",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(s=>{s.style.color="#111111"}),OP();const i=await LP(Gi);if(r!==w.initToken)return i.forEach(s=>s?.dispose?.()),!1;w.sourceTextures=i.filter(Boolean),w.atlasTexture=DP(i),w.cards=[],w.cardByIndex.clear();for(let s=0;s<Gi.length;s+=1){const o=NP(s,w.atlasTexture),a={index:s,item:Gi[s],mesh:o};w.cards.push(a),w.cardByIndex.set(s,a),w.root.add(o)}return UP(),w.camera.aspect=t/n,w.camera.updateProjectionMatrix(),w.composer.setSize(t,n),w.clock=new xm,!0}function Fx(){w.trackOffset=0,w.trackVelocity=0,w.isDragging=!1,w.activePointerId=null,w.dragDistance=0,w.focusedIndex=-1,w.focusLerp.value=0,w.mouseParallaxTarget.set(0,0),w.mouseParallaxCurrent.set(0,0),w.pointerStart.x=0,w.pointerStart.y=0,w.pointerLast.x=0,w.pointerLast.y=0,rh()}async function Q_(){if(w.running)return;RP(),Fx(),wm();const r=w.initToken+1;w.initToken=r,console.log("[archive] initArchive started");try{const e=await jP(r);if(console.log("[archive] setupArchiveScene completed. result:",e,"token match:",r===w.initToken),!e||r!==w.initToken){console.warn("[archive] Setup failed or token mismatch"),eo();return}w.running=!0,requestAnimationFrame(()=>{console.log("[archive] binding events and starting animation loop"),qP(),Ux()})}catch(e){console.error("[archive] FATAL ERROR in initArchive:",e)}}function eo(){w.initToken+=1,w.running=!1,w.rafId&&(cancelAnimationFrame(w.rafId),w.rafId=null),YP(),wm(),Le.killTweensOf(w.focusLerp);for(const r of w.cards)r.mesh?.parent&&r.mesh.parent.remove(r.mesh),r.mesh?.geometry?.dispose?.(),r.mesh?.material?.dispose?.();w.cards=[],w.cardByIndex.clear(),w.atlasTexture?.dispose?.(),w.atlasTexture=null;for(const r of w.sourceTextures)r?.dispose?.();w.sourceTextures=[],w.composer&&(w.composer.dispose?.(),w.composer=null),w.grainPass=null,w.pmremGenerator?.dispose?.(),w.pmremGenerator=null,w.envRenderTarget?.dispose?.(),w.envRenderTarget=null,w.renderer&&(w.renderer.dispose(),w.renderer.domElement?.parentNode&&w.renderer.domElement.parentNode.removeChild(w.renderer.domElement)),w.container&&(w.container.style.pointerEvents="",w.container.style.touchAction="",w.container.style.cursor=""),document.body.style.color="",document.body.style.backgroundColor="",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(r=>{r.style.color=""}),w.renderer=null,w.scene=null,w.camera=null,w.clock=null,w.root=null,w.ambientLight=null,w.keyLight=null,w.fillLight=null,w.rimLight=null,w.container=null,w.backgroundEl=null,w.renderHost=null,w.eventTarget=null,w.dom={overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},Fx()}let Tn=null,$r=null,Ui=null,Bi=null,Bn=null,gc=[],Cu=null,pp=null,xa=null,Is=!1;const mp=new Map,_c={uTime:{value:0},uGrain:{value:.03}},fs={speed:.2,red:"#f5f5f5",green:"#ffffff",blue:"#f2f2f2",orange:"#ebebeb",cyan:"#d9d9d9",white:"#ffffff",yellow:"#e3e3e3"},$P={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;

    float random(vec2 p) {
      vec2 k1 = vec2(23.14069263277926, 2.665144142690225);
      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y, uTime));
      float grain = random(uvRandom);
      vec3 color = texel.rgb;
      color += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(color, texel.a);
    }
  `},KP={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);
      float edge = smoothstep(0.2, 0.75, dist);

      float shift = 0.0056 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));
      gl_FragColor = vec4(r.r, g.g, b.b, g.a);
    }
  `},ZP=`
  uniform float iTime;
  uniform vec2  iResolution;
  uniform vec3  uRed;
  uniform vec3  uGreen;
  uniform vec3  uBlue;
  uniform vec3  uOrange;
  uniform vec3  uCyan;
  uniform vec3  uWhite;
  uniform vec3  uYellow;
  uniform float uGrain;

  float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  #define OCTAVES 6
  float fbm(in vec2 st) {
    float value = 0.0;
    float amp = 0.55;
    for (int i = 0; i < OCTAVES; i++) {
      value += amp * noise(st);
      st *= 2.1;
      amp *= 0.35;
    }
    return value;
  }

  float pattern(in vec2 p) {
    vec2 q = vec2(
      fbm(p + vec2(iTime * 0.2) + vec2(0.0)),
      fbm(p + vec2(iTime * 0.3) + vec2(2.4, 4.8))
    );
    vec2 r = vec2(
      fbm(q + vec2(iTime * 0.3) + 4.0 * q + vec2(3.0, 9.0)),
      fbm(q + vec2(iTime * 0.2) + 8.0 * q + vec2(2.4, 8.4))
    );
    return fbm(p + r * 2.0 + vec2(iTime * 0.09));
  }

  vec3 gradient(float v) {
    float steps = 7.0;
    float step = 1.0 / steps;

    vec3 col = uGreen;
    if (v >= 0.0 && v < step) {
      col = mix(uYellow, uOrange, v * steps);
    } else if (v >= step && v < step * 2.0) {
      col = mix(uOrange, uRed, (v - step) * steps);
    } else if (v >= step * 2.0 && v < step * 3.0) {
      col = mix(uRed, uWhite, (v - step * 2.0) * steps);
    } else if (v >= step * 3.0 && v < step * 4.0) {
      col = mix(uWhite, uCyan, (v - step * 3.0) * steps);
    } else if (v >= step * 4.0 && v < step * 5.0) {
      col = mix(uCyan, uBlue, (v - step * 4.0) * steps);
    } else if (v >= step * 5.0 && v < step * 6.0) {
      col = mix(uBlue, uGreen, (v - step * 5.0) * steps);
    }
    return col;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy);
    uv = 2.0 * uv / iResolution.y;

    vec3 color = gradient(pattern(uv));

    // Add grain
    float noiseVal = (random(uv + vec2(iTime)) - 0.5) * uGrain;
    color += noiseVal;

    gl_FragColor = vec4(color, 1.0);
  }
`;function JP(r){if(r&&r.querySelector)return r;const e=document.querySelectorAll('[data-barba="container"][data-barba-namespace="film"]');return e.length?e[e.length-1]:document}function QP(){let r=document.getElementById("background");return r||(r=document.createElement("div"),r.id="background",document.body.insertBefore(r,document.body.firstChild),r)}function Ox(){xa&&clearTimeout(xa),xa=window.setTimeout(eL,150)}function eL(){if(!Tn||!Is||!Ui||!Bi)return;const r=window.innerWidth,e=window.innerHeight;Tn.setSize(r,e),Bi.setSize(r,e),Ui.left=-r/2,Ui.right=r/2,Ui.top=e/2,Ui.bottom=-e/2,Ui.updateProjectionMatrix(),Bn&&Bn.material.uniforms.iResolution.value.set(r,e),gc.forEach(({material:t})=>{t.uniforms.uResolution.value.set(r,e)}),wh()}function Bx(){Is&&wh()}function tL(r){if(!$r)return;const e=r.currentSrc||r.src;if(!e)return;const n=new gh().load(e,()=>{r.style.opacity="0"},void 0,()=>{r.style.opacity=""});mp.set(r,n);const i=window.innerWidth,s=window.innerHeight,o=new rn({uniforms:{uTexture:{value:n},uResolution:{value:new Ue(i,s)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uTexture;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor = color;
      }
    `,transparent:!0}),a=new es(1,1),l=new un(a,o);l.renderOrder=1,$r.add(l),gc.push({mesh:l,img:r,material:o})}function wh(){if(!Is||!Ui)return;const r=window.innerWidth,e=window.innerHeight;gc.forEach(({mesh:t,img:n})=>{const i=n.getBoundingClientRect(),s=i.width>0&&i.height>0;if(t.visible=s,!s)return;const o=i.left-r/2+i.width/2,a=-i.top+e/2-i.height/2;t.position.set(o,a,0),t.scale.set(i.width,i.height,1)})}function nL(){if(!$r)return;const r=window.innerWidth,e=window.innerHeight,t=new rn({uniforms:{iTime:{value:0},iResolution:{value:new Ue(r,e)},uRed:{value:new Ne(fs.red)},uGreen:{value:new Ne(fs.green)},uBlue:{value:new Ne(fs.blue)},uOrange:{value:new Ne(fs.orange)},uCyan:{value:new Ne(fs.cyan)},uWhite:{value:new Ne(fs.white)},uYellow:{value:new Ne(fs.yellow)},uGrain:_c.uGrain},vertexShader:`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:ZP,depthWrite:!1,depthTest:!1}),n=new es(2,2);Bn=new un(n,t),Bn.renderOrder=-1,$r.add(Bn)}function kx(){if(!Is||!Tn||!Bi||!Ui)return;Cu=requestAnimationFrame(kx);const r=performance.now();Bn&&(Bn.material.uniforms.iTime.value=r*.001*fs.speed),_c.uTime.value=r*.001,wh(),Bi.render()}async function iL(r){if(Is)return;const e=JP(r);pp=QP(),Is=!0;const t=window.innerWidth,n=window.innerHeight;$r=new ph,Ui=new Va(t/-2,t/2,n/2,n/-2,1,1e3),Ui.position.z=10,Tn=new ym({alpha:!0,antialias:!1,powerPreference:"high-performance"}),Tn.setSize(t,n),Tn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),Tn.outputColorSpace=Kt,Tn.domElement.style.pointerEvents="none",Tn.domElement.style.position="absolute",Tn.domElement.style.top="0",Tn.domElement.style.left="0",pp.appendChild(Tn.domElement),Bi=new Mh(Tn),Bi.addPass(new bh($r,Ui));const i=new Wi($P);i.uniforms.uTime=_c.uTime,i.uniforms.uGrain=_c.uGrain,Bi.addPass(i),Bi.addPass(new Wi(KP)),Bi.addPass(new Th),nL(),e.querySelectorAll(".coverimg img, .project-img img").forEach(o=>{tL(o)}),window.addEventListener("resize",Ox),window.addEventListener("scroll",Bx,{passive:!0}),wh(),kx(),await new Promise(o=>requestAnimationFrame(o))}async function rL(r,e={}){await iL(r)}function vl(){if(Is){if(Is=!1,Cu!==null&&(cancelAnimationFrame(Cu),Cu=null),window.removeEventListener("resize",Ox),window.removeEventListener("scroll",Bx),xa&&(clearTimeout(xa),xa=null),gc.forEach(r=>{r.mesh?.geometry&&r.mesh.geometry.dispose(),r.mesh?.material&&r.mesh.material.dispose();const e=mp.get(r.img);e&&e.dispose(),r.img.style.opacity="",r.mesh?.parent&&r.mesh.parent.remove(r.mesh)}),gc=[],mp.clear(),Bn&&(Bn.geometry&&Bn.geometry.dispose(),Bn.material&&Bn.material.dispose(),Bn.parent&&Bn.parent.remove(Bn),Bn=null),Bi&&(Bi.dispose(),Bi=null),Tn){Tn.dispose();const r=Tn.domElement?.parentNode;r&&r.removeChild(Tn.domElement),Tn=null}$r&&($r.clear(),$r=null),Ui=null,pp=null,_c.uTime.value=0}}Le.registerPlugin(Ps);const Pu=new Map,Lu=[];function sh(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Eh(r,e="lines, words, chars"){if(!r)return null;if(Pu.has(r))return Pu.get(r);const t=new Ps(r,{type:e,reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],f=l[c];u.parentNode.insertBefore(f,u),f.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Pu.set(r,t),Lu.push(t),t}function sL(r,{duration:e=.6,stagger:t=.02,ease:n="power2.out"}={}){const i=Eh(r,"lines, words, chars");return i?.chars?.length?Le.fromTo(i.chars,{y:100,opacity:0},{y:0,opacity:1,duration:e,stagger:t,ease:n}):null}function oL(r,{duration:e=.4,stagger:t=.015,ease:n="power2.in"}={}){const i=Eh(r,"lines, words, chars");return i?.chars?.length?Le.to(i.chars,{y:-100,opacity:0,duration:e,stagger:t,ease:n}):null}function aL(r,{duration:e=.7,stagger:t=.08,ease:n="power4.out"}={}){const i=Eh(r,"lines");return i?.lines?.length?Le.fromTo(i.lines,{yPercent:100,opacity:0},{yPercent:0,opacity:1,duration:e,stagger:t,ease:n}):null}function lL(r,{duration:e=.35,stagger:t=.05,ease:n="power2.in"}={}){const i=Eh(r,"lines");return i?.lines?.length?Le.to(i.lines,{yPercent:-100,opacity:0,duration:e,stagger:t,ease:n}):null}async function If(r){if(!r)return;const e=r.querySelectorAll(".reveal-title"),t=r.querySelectorAll(".reveal-body");if(!e.length&&!t.length)return;const n=[...e,...t];Le.set(n,{clearProps:"all"});const i=[];for(let s=0;s<e.length;s++){const o=e[s];if(!o.textContent.trim())continue;const a=sL(o);a&&i.push(sh(a))}for(let s=0;s<t.length;s++){const o=t[s];if(!o.textContent.trim())continue;const a=aL(o);a&&i.push(sh(a))}i.length&&await Promise.all(i)}async function e0(r){if(!r)return;const e=r.querySelectorAll(".reveal-title"),t=r.querySelectorAll(".reveal-body");if(!e.length&&!t.length)return;const n=[];for(let i=0;i<e.length;i++){const s=e[i];if(!s.textContent.trim())continue;const o=oL(s);o&&n.push(sh(o))}for(let i=0;i<t.length;i++){const s=t[i];if(!s.textContent.trim())continue;const o=lL(s);o&&n.push(sh(o))}n.length&&await Promise.all(n)}function t0(){for(let r=Lu.length-1;r>=0;r--){const e=Lu[r];e&&typeof e.revert=="function"&&e.revert()}Lu.length=0,Pu.clear()}Le.registerPlugin(at);function cL(){}function uL(){window.removeEventListener("resize",cL)}function xl(){uL()}Le.registerPlugin(Ps);const fu={duration:.5,ease:"power2.inOut",stagger:.02},n0="50% 50% -10px",i0=new WeakMap;function hL(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||i0.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),Le.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=r0(i,!1),o=r0(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new Ps(s,{type:"chars"}),l=new Ps(o,{type:"chars"});Le.set(a.chars,{rotationX:0,opacity:1,transformOrigin:n0,backfaceVisibility:"hidden"}),Le.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:n0,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=s0(a.chars,l.chars,!0)},f=()=>{c?.kill(),c=s0(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",f),i0.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:f})})}function r0(r,e){const t=document.createElement("span");return t.textContent=r,Le.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function s0(r,e,t){const n=Le.timeline();return t?n.to(r,{rotationX:90,opacity:0,...fu},0).to(e,{rotationX:0,opacity:1,...fu},0):n.to(r,{rotationX:0,opacity:1,...fu},0).to(e,{rotationX:-90,opacity:0,...fu},0),n}const oh=new WeakMap,fL=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function dL(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function pL(){if(fL())return;document.querySelectorAll(".btn").forEach(e=>{if(oh.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=dL();t.config=n,mL(t);let i=null;const s=()=>{i&&i.kill(),i=o0(t,!0)},o=()=>{i&&i.kill(),i=o0(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),oh.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function mL(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,Le.set(e,{x:0,borderRadius:`${o}px`}),Le.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),Le.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function o0(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,f=Le.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?f.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):f.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),f}function gL(){document.querySelectorAll(".btn").forEach(e=>{const t=oh.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&Le.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&Le.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&Le.set(t.elements.circleIcon,{clearProps:"all"}),oh.delete(e))})}function a0(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function l0(r,e={}){return new Promise(t=>{Le.to(r,{...e,onComplete:()=>{typeof e.onComplete=="function"&&e.onComplete(),t()}})})}function _L(r,e){const t=Le.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&Le.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function vL(){const r=document.querySelector(".link-main");r&&Le.set(r,{autoAlpha:0})}function xL(){const r=document.querySelector(".link-main");r&&Le.set(r,{autoAlpha:1,y:20,opacity:0})}function yL(){const r=document.querySelector(".link-main");return r?Le.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let yl=null;const SL=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"});function c0(){yl||(yl=document.getElementById("time")),yl&&(yl.textContent=`${SL.format(new Date)} IST`)}function ML(){yl=null,c0(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(c0,1e3)}let Nf=!1;function Uf(r){return r==="home"||r==="contact"||r==="work"}function Ff(r,{skipWebglSetup:e=!1}={}){ML(),pM(),hL(),gL(),pL();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace,n=document.querySelector(".link-main");if(n&&(Le.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&Le.set(n,{clearProps:"transform,opacity"})),e){t==="archive"?(Qs(),xl(),_l(),Q_()):(eo(),t==="work"||(t==="home"||t==="contact")&&Df());return}t==="film"?(document.body.classList.add("page-wrap--scrollable"),cM()):document.body.classList.remove("page-wrap--scrollable"),t==="work"?(eo(),vl(),K_(),Df(),Gl("work",!0),nh("work"),Nx()):t==="archive"?(Qs(),vl(),xl(),_l(),Q_()):t==="film"?(eo(),Qs(),xl(),_l(),rL()):t==="home"||t==="contact"?(eo(),Qs(),vl(),K_(),Df(),Gl(t,!0),nh("home")):(eo(),Qs(),vl(),xl(),_l())}Vf.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;$_(),await e0(n),e==="work"||t==="work"?e==="work"&&Qs():e==="contact"&&await a0(_L(n,t)),t0()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"?(nh(t==="work"?"work":"home"),Gl(t,!0),t==="work"&&(await Nx(),await new Promise(o=>requestAnimationFrame(o)))):t==="home"?(vL(),Gl("home")):t==="contact"&&(xL(),Gl("contact")),If(n)},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(Ff(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&Le.set(n,{autoAlpha:0})}else t==="contact"&&await a0(yL())}},{name:"default",async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace;$_(),await e0(r?.current?.container),e==="work"&&Qs(),e==="archive"&&eo(),e==="film"&&(vl(),uM(),document.body.classList.remove("page-wrap--scrollable")),(Uf(e)||e==="film"&&BC()&&!Uf(t))&&(xl(),_l()),t0()},async enter(){},async once(r){const e=r?.next?.namespace;Uf(e)||await Promise.all([Oi.init(),Oi.load([])]),Ff(e);const t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&Le.set(n,{autoAlpha:0})}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(Le.set(n,{autoAlpha:1,y:20,opacity:0}),await l0(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2}))}e==="work"&&await new Promise(n=>requestAnimationFrame(n)),Nf=!0,If(t)}},async after(r){const e=r?.next?.namespace;e&&Ff(e);const t=r?.next?.container;if(e==="contact"){const n=document.querySelector(".link-main");n&&(Le.set(n,{autoAlpha:1,y:20,opacity:0}),await l0(n,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}t&&!Nf&&(e==="work"&&await new Promise(n=>requestAnimationFrame(n)),If(t)),Nf=!1}}]});
