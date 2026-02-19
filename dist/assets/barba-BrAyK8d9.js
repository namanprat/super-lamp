(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function qx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function yp(r,e,t){return e&&qx(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function dr(){return dr=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},dr.apply(this,arguments)}function lh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Xl(r,e)}function Vf(r){return Vf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Vf(r)}function Xl(r,e){return Xl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Xl(r,e)}function Yx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gf(r,e,t){return Gf=Yx()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Xl(a,s.prototype),a},Gf.apply(null,arguments)}function Hf(r){var e=typeof Map=="function"?new Map:void 0;return Hf=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Gf(t,arguments,Vf(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Xl(n,t)},Hf(r)}function jx(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var ms,$x=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(ms||(ms={}));var Im=ms.off,no=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Im},r.setLevel=function(t){return Im=ms[t]};var e=r.prototype;return e.error=function(){this.i(console.error,ms.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,ms.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,ms.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,ms.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function No(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Dm(r){return r&&r.sensitive?"":"i"}var _r={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},io=new((function(){function r(){this.o=_r,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),Kx=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=dr({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=dr({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=_r.prefix+"-"+_r.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},yp(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),m0=new Kx,Iu=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=io.toElement(n.html);i.namespace=io.getNamespace(s),i.container=io.getContainer(s),i.url=n.url,i.html=n.html,m0.update({ns:i.namespace});var o=io.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},g0=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Dm(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,f=u!==void 0&&u,h=c.start,d=h===void 0||h,p=c.end,_=p===void 0||p,m=c.encode,g=m===void 0?function(z){return z}:m,x=c.delimiter,M=x===void 0?"/#?":x,y=c.endsWith,E="[".concat(No(y===void 0?"":y),"]|$"),R="[".concat(No(M),"]"),A=d?"^":"",v=0,S=a;v<S.length;v++){var I=S[v];if(typeof I=="string")A+=No(g(I));else{var P=No(g(I.prefix)),L=No(g(I.suffix));if(I.pattern)if(l&&l.push(I),P||L)if(I.modifier==="+"||I.modifier==="*"){var U=I.modifier==="*"?"?":"";A+="(?:".concat(P,"((?:").concat(I.pattern,")(?:").concat(L).concat(P,"(?:").concat(I.pattern,"))*)").concat(L,")").concat(U)}else A+="(?:".concat(P,"(").concat(I.pattern,")").concat(L,")").concat(I.modifier);else A+=I.modifier==="+"||I.modifier==="*"?"((?:".concat(I.pattern,")").concat(I.modifier,")"):"(".concat(I.pattern,")").concat(I.modifier);else A+="(?:".concat(P).concat(L,")").concat(I.modifier)}}if(_)f||(A+="".concat(R,"?")),A+=c.endsWith?"(?=".concat(E,")"):"$";else{var F=a[a.length-1],k=typeof F=="string"?R.indexOf(F[F.length-1])>-1:F===void 0;f||(A+="(?:".concat(R,"(?=").concat(E,"))?")),k||(A+="(?=".concat(R,"|").concat(E,")"))}return new RegExp(A,Dm(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(L){for(var U=[],F=0;F<L.length;){var k=L[F];if(k!=="*"&&k!=="+"&&k!=="?")if(k!=="\\")if(k!=="{")if(k!=="}")if(k!==":")if(k!=="(")U.push({type:"CHAR",index:F,value:L[F++]});else{var z=1,O="";if(L[X=F+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(X));for(;X<L.length;)if(L[X]!=="\\"){if(L[X]===")"){if(--z==0){X++;break}}else if(L[X]==="("&&(z++,L[X+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(X));O+=L[X++]}else O+=L[X++]+L[X++];if(z)throw new TypeError("Unbalanced pattern at ".concat(F));if(!O)throw new TypeError("Missing pattern at ".concat(F));U.push({type:"PATTERN",index:F,value:O}),F=X}else{for(var Z="",X=F+1;X<L.length;){var N=L.charCodeAt(X);if(!(N>=48&&N<=57||N>=65&&N<=90||N>=97&&N<=122||N===95))break;Z+=L[X++]}if(!Z)throw new TypeError("Missing parameter name at ".concat(F));U.push({type:"NAME",index:F,value:Z}),F=X}else U.push({type:"CLOSE",index:F,value:L[F++]});else U.push({type:"OPEN",index:F,value:L[F++]});else U.push({type:"ESCAPED_CHAR",index:F++,value:L[F++]});else U.push({type:"MODIFIER",index:F,value:L[F++]})}return U.push({type:"END",index:F,value:""}),U})(a),u=l.prefixes,f=u===void 0?"./":u,h="[^".concat(No(l.delimiter||"/#?"),"]+?"),d=[],p=0,_=0,m="",g=function(L){if(_<c.length&&c[_].type===L)return c[_++].value},x=function(L){var U=g(L);if(U!==void 0)return U;var F=c[_],k=F.index;throw new TypeError("Unexpected ".concat(F.type," at ").concat(k,", expected ").concat(L))},M=function(){for(var L,U="";L=g("CHAR")||g("ESCAPED_CHAR");)U+=L;return U};_<c.length;){var y=g("CHAR"),E=g("NAME"),R=g("PATTERN");if(E||R)f.indexOf(v=y||"")===-1&&(m+=v,v=""),m&&(d.push(m),m=""),d.push({name:E||p++,prefix:v,suffix:"",pattern:R||h,modifier:g("MODIFIER")||""});else{var A=y||g("ESCAPED_CHAR");if(A)m+=A;else if(m&&(d.push(m),m=""),g("OPEN")){var v=M(),S=g("NAME")||"",I=g("PATTERN")||"",P=M();x("CLOSE"),d.push({name:S||(I?p++:""),pattern:S&&!I?h:I,prefix:v,suffix:P,modifier:g("MODIFIER")||""})}else x("END")}}return d})(i,o),s,o)})(e,t,n)},Zx={__proto__:null,update:Iu,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:g0},_0=function(){return window.location.origin},ql=function(r){return r===void 0&&(r=window.location.href),gs(r).port},gs=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(_0(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=v0(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},v0=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Wf=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},Jx={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:_0,getPort:ql,getPath:function(r){return r===void 0&&(r=window.location.href),gs(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(gs(r).query):gs(r).query},getHash:function(r){return gs(r).hash},parse:gs,parseQuery:v0,clean:Wf};function Qx(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:dr({href:l},gs(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function ey(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function sa(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(ey(a)?a.then(s,o):s(a))});return i}}var ps=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new no("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}lh(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return sa(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})($x)),x0=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return g0(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=gs(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),ty=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}lh(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=dr({},this.T.get(n),i);return this.T.set(n,s),s},e})(x0),ny=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),iy=function(){return!window.history.pushState},ry=function(r){return!r.el||!r.href},sy=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},oy=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},ay=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},ly=function(r){var e=r.el;return e.port!==void 0&&ql()!==ql(e.href)},cy=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},uy=function(r){return r.el.hasAttribute(_r.prefix+"-"+_r.prevent)},hy=function(r){return!!r.el.closest("["+_r.prefix+"-"+_r.prevent+'="all"]')},fy=function(r){var e=r.href;return Wf(e)===Wf()&&ql(e)===ql()},dy=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}lh(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",iy),this.add("exists",ry),this.add("newTab",sy),this.add("blank",oy),this.add("corsDomain",ay),this.add("corsPort",ly),this.add("download",cy),this.add("preventSelf",uy),this.add("preventAll",hy),this.add("sameUrl",fy,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(x0),Lh=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(jx(i),e),i.name="BarbaError",i}return lh(e,r),e})(Hf(Error)),py=(function(){function r(t){t===void 0&&(t=[]),this.logger=new no("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var o=new Map,a=s.find(function(h){var d=!0,p={};return n.self&&h.name==="self"?(o.set(h,p),!0):(i.j.reverse().forEach(function(_){d&&(d=i.M(h,_,t,p),h.from&&h.to&&(d=i.M(h,_,t,p,"from")&&i.M(h,_,t,p,"to")),h.from&&!h.to&&(d=i.M(h,_,t,p,"from")),!h.from&&h.to&&(d=i.M(h,_,t,p,"to")))}),o.set(h,p),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,f=[a];Object.keys(l).length>0&&f.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,f=u,h=u,d=u,p=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?p&&p[u]:p[u]){switch(n.type){case"strings":default:var m=Array.isArray(p[f])?p[f]:[p[f]];_[f]&&m.indexOf(_[f])!==-1&&(l=!0),m.indexOf(_[f])===-1&&(a=!1);break;case"object":var g=Array.isArray(p[h])?p[h]:[p[h]];_[h]?(_[h].name&&g.indexOf(_[h].name)!==-1&&(l=!0),g.indexOf(_[h].name)===-1&&(a=!1)):a=!1;break;case"function":p[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function Xa(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var my=(function(){function r(t){t===void 0&&(t=[]),this.logger=new no("@barba/core"),this.store=void 0,this.C=!1,this.store=new py(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=Xa(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(h){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var f=Xa(function(){function h(){return Promise.resolve(l.L("before",n,c)).then(function(){function p(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var _=(function(){if(u)return Xa(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(M){if(l.H(M))throw new Lh(M,"Transition error [sync]")});var m=function(M){return Xa(function(){var y=(function(){if(g!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,g)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(y&&y.then)return y.then(function(){})},function(y){if(l.H(y))throw new Lh(y,"Transition error [before/after/enter]")})},g=!1,x=Xa(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Iu(s,n)]).then(function(M){return M[0]})).then(function(M){return g=M,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(M){if(l.H(M))throw new Lh(M,"Transition error [before/after/leave]")});return x&&x.then?x.then(m):m()})();return _&&_.then?_.then(p):p()})}var d=(function(){if(u)return Promise.resolve(Iu(s,n)).then(function(){})})();return d&&d.then?d.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(f&&f.then?f.then(a):a())}catch(h){return Promise.reject(h)}},e.once=function(t,n){try{return Promise.resolve(ps.do("once",t,n)).then(function(){return n.once?sa(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(ps.do("leave",t,n)).then(function(){return n.leave?sa(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(ps.do("enter",t,n)).then(function(){return n.enter?sa(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return io.addContainer(t.next.container,n),ps.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return io.removeContainer(t.current.container),ps.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(ps.do(t,n,i)).then(function(){return i[t]?sa(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},yp(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),gy=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){ps[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?sa(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var _y={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Xf=new((function(){function r(){this.version="2.10.3",this.schemaPage=_y,this.Logger=no,this.logger=new no("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=ps,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=io,this.helpers=Zx,this.history=m0,this.request=Qx,this.url=Jx,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?_r:l,u=n.requestError,f=n.timeout,h=f===void 0?2e3:f,d=n.cacheIgnore,p=d!==void 0&&d,_=n.cacheFirstPage,m=_!==void 0&&_,g=n.prefetchIgnore,x=g!==void 0&&g,M=n.preventRunning,y=M!==void 0&&M,E=n.prevent,R=E===void 0?null:E,A=n.debug,v=n.logLevel;if(no.setLevel((A!==void 0&&A)===!0?"debug":v===void 0?"off":v),this.logger.info(this.version),Object.keys(c).forEach(function(P){_r[P]&&(_r[P]=c[P])}),this.B=u,this.timeout=h,this.cacheIgnore=p,this.cacheFirstPage=m,this.prefetchIgnore=x,this.preventRunning=y,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var S=this.data.current;if(!S.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new ty(p),this.headers=new ny,this.prevent=new dy(x),this.transitions=new my(s),this.views=new gy(a),R!==null){if(typeof R!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",R)}this.history.init(S.url.href,S.namespace),m&&this.cache.set(S.url.href,Promise.resolve({html:S.html,url:S.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(P){return P.init()});var I=this.data;I.trigger="barba",I.next=I.current,I.current=dr({},this.schemaPage),this.hooks.do("ready",I),this.once(I),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var f=l.data;return Promise.resolve(l.hooks.do("page",f)).then(function(){var h=(function(d,p){try{var _=(m=l.transitions.get(f,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:f,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return p()}var m;return _&&_.then?_.then(void 0,p):_})(0,function(){no.getLevel()===0&&l.force(f.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=dr({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(f){f.url.href!==t&&l.history.add(f.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Iu(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(f){return Promise.reject(f)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:dr({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:dr({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},yp(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function Nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function y0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},Sp,Ln,Gt,ki=1e8,Nt=1/ki,qf=Math.PI*2,vy=qf/4,xy=0,S0=Math.sqrt,yy=Math.cos,Sy=Math.sin,wn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Zr=function(e){return typeof e=="number"},Mp=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},bp=function(){return typeof window<"u"},Mc=function(e){return Jt(e)||wn(e)},M0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,My=/random\([^)]+\)/g,by=/,\s*/g,Nm=/(?:-?\.?\d|\.)+/gi,b0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ih=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,T0=/[+-]=-?[.\d]+/,Ty=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,ar,Yf,Tp,wi={},Du={},E0,w0=function(e){return(Du=Sa(e,wi))&&li},Ep=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yl=function(e,t){return!t&&console.warn(e)},A0=function(e,t){return e&&(wi[e]=t)&&Du&&(Du[e]=t)||wi},jl=function(){return 0},wy={suppressEvents:!0,isStart:!0,kill:!1},du={suppressEvents:!0,kill:!1},Ay={suppressEvents:!0},wp={},Es=[],jf={},R0,mi={},Dh={},Um=30,pu=[],Ap="",Rp=function(e){var t=e[0],n,i;if(Sr(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pu.length;i--&&!pu[i].targetTest(t););n=pu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new J0(e[i],n)))||e.splice(i,1);return e},po=function(e){return e._gsap||Rp(zi(e))[0]._gsap},C0=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():Mp(n)&&e.getAttribute&&e.getAttribute(t)||n},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},ca=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ry=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Nu=function(){var e=Es.length,t=Es.slice(0),n,i;for(jf={},Es.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cp=function(e){return!!(e._initted||e._startAt||e.add)},P0=function(e,t,n,i){Es.length&&!Ln&&Nu(),e.render(t,n,!!(Ln&&t<0&&Cp(e))),Es.length&&!Ln&&Nu()},L0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ty).length<2?t:wn(e)?e.trim():e},I0=function(e){return e},Ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sa=function(e,t){for(var n in t)e[n]=t[n];return e},Fm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Sr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Uu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ml=function(e){var t=e.parent||Xt,n=e.keyframes?Cy(Hn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Py=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},D0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ch=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ly=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$f=function(e,t,n,i){return e._startAt&&(Ln?e._startAt.revert(du):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Iy=function r(e){return!e||e._ts&&r(e.parent)},Om=function(e){return e._repeat?Ma(e._tTime,e=e.duration()+e._rDelay)*e:0},Ma=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uh=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},hh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uh(e),n._dirty||mo(n,e)),e},N0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fu(e.rawTime(),t),(!t._dur||vc(0,t.totalDuration(),n)-t._tTime>Nt)&&t.render(n,!0)),mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Nt}},fr=function(e,t,n,i){return t.parent&&Rs(t),t._start=Wt((Zr(n)?n:n||e!==Xt?Li(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),D0(e,t,"_first","_last",e._sort?"_start":0),Kf(t)||(e._recent=t),i||N0(e,t),e._ts<0&&hh(e,e._tTime),e},U0=function(e,t){return(wi.ScrollTrigger||Ep("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},F0=function(e,t,n,i,s){if(Lp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&R0!==vi.frame)return Es.push(e),e._lazy=[s,i],1},Dy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Kf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ny=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Dy(e)&&!(!e._initted&&Kf(e))||(e._ts<0||e._dp._ts<0)&&!Kf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=vc(0,e._tDur,t),u=Ma(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ma(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||i||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&F0(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Nt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$f(e,t,n,!0),e._onUpdate&&!n&&Si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Rs(e,1),!n&&!Ln&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Uy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ba=function(e,t,n,i){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&hh(e,e._tTime=e._tDur*a),e.parent&&uh(e),n||mo(e.parent,e),e},Bm=function(e){return e instanceof Jn?mo(e):ba(e,e._dur)},Fy={_start:0,endTime:jl,totalDuration:jl},Li=function r(e,t,n){var i=e.labels,s=e._recent||Fy,o=e.duration()>=ki?s.endTime(!1):e._dur,a,l,c;return wn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},bl=function(e,t,n){var i=Zr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},Us=function(e,t){return e||e===0?t(e):t},vc=function(e,t,n){return n<e?e:n>t?t:n},zn=function(e,t){return!wn(e)||!(t=Ey.exec(e))?"":t[1]},Oy=function(e,t,n){return Us(n,function(i){return vc(e,t,i)})},Zf=[].slice,O0=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==ar},By=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return wn(i)&&!t||O0(i,1)?(s=n).push.apply(s,zi(i)):n.push(i)})||n},zi=function(e,t,n){return Gt&&!t&&Gt.selector?Gt.selector(e):wn(e)&&!n&&(Yf||!Ta())?Zf.call((t||Tp).querySelectorAll(e),0):Hn(e)?By(e,n):O0(e)?Zf.call(e,0):e?[e]:[]},Jf=function(e){return e=zi(e)[0]||Yl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?Yl("Invalid scope")||Tp.createElement("div"):e)}},B0=function(e){return e.sort(function(){return .5-Math.random()})},k0=function(e){if(Jt(e))return e;var t=Sr(e)?e:{each:e},n=go(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return wn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,p){var _=(p||t).length,m=o[_],g,x,M,y,E,R,A,v,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ki])[1],!S){for(A=-ki;A<(A=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*u-.5:i%S,x=S===ki?0:l?_*f/S-.5:i/S|0,A=0,v=ki,R=0;R<_;R++)M=R%S-g,y=x-(R/S|0),m[R]=E=c?Math.abs(c==="y"?y:M):S0(M*M+y*y),E>A&&(A=E),E<v&&(v=E);i==="random"&&B0(m),m.max=A-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zn(t.amount||t.each)||0,n=n&&_<0?$0(n):n}return _=(m[h]-m.min)/m.max||0,Wt(m.b+(n?n(_):_)*m.v)+m.u}},Qf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zr(n)?0:zn(n))}},z0=function(e,t){var n=Hn(e),i,s;return!n&&Sr(e)&&(i=n=e.radius||ki,e.values?(e=zi(e.values),(s=!Zr(e[0]))&&(i*=i)):e=Qf(e.increment)),Us(t,n?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ki,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Zr(o)?u:u+zn(o)}:Qf(e))},V0=function(e,t,n,i){return Us(Hn(e)?!t:n===!0?!!(n=0):!i,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ky=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},zy=function(e,t){return function(n){return e(parseFloat(n))+(t||zn(n))}},Vy=function(e,t,n){return H0(e,t,0,1,n)},G0=function(e,t,n){return Us(n,function(i){return e[~~t(i)]})},Gy=function r(e,t,n){var i=t-e;return Hn(e)?G0(e,r(0,e.length),t):Us(n,function(s){return(i+(s-e)%i)%i+e})},Hy=function r(e,t,n){var i=t-e,s=i*2;return Hn(e)?G0(e,r(0,e.length-1),t):Us(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},$l=function(e){return e.replace(My,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(by);return V0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},H0=function(e,t,n,i,s){var o=t-e,a=i-n;return Us(s,function(l){return n+((l-e)/o*a||0)})},Wy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=wn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=Sa(Hn(e)?[]:{},e));if(!u){for(l in t)Pp.call(a,e,l,"get",t[l]);s=function(p){return Np(p,a)||(o?e.p:e)}}}return Us(n,s)},km=function(e,t,n){var i=e.labels,s=ki,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,n){var i=e.vars,s=i[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Es.length&&Nu(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},al=function(e){return Rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Si(e,"onInterrupt"),e},aa,W0=[],X0=function(e){if(e)if(e=!e.name&&e.default||e,bp()||e.headless){var t=e.name,n=Jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:jl,render:Np,add:Pp,kill:oS,modifier:sS,rawVars:0},o={targetTest:0,get:0,getSetter:Dp,aliases:{},register:0};if(Ta(),e!==i){if(mi[t])return;Ai(i,Ai(Uu(e,s),o)),Sa(i.prototype,Sa(s,Uu(e,o))),mi[i.prop=t]=i,e.targetTest&&(pu.push(i),wp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}A0(t,i),e.register&&e.register(li,i,ri)}else W0.push(e)},Dt=255,ll={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Nh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},q0=function(e,t,n){var i=e?Zr(e)?[e>>16,e>>8&Dt,e&Dt]:0:ll.black,s,o,a,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ll[e])i=ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Nm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Nh(l+1/3,s,o),i[1]=Nh(l,s,o),i[2]=Nh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(b0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nm)||ll.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Y0=function(e){var t=[],n=[],i=-1;return e.split(ws).forEach(function(s){var o=s.match(oa)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},zm=function(e,t,n){var i="",s=(e+i).match(ws),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=q0(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Y0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ws,"1").split(oa),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ws),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ws=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ll)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Xy=/hsl[a]?\(/,j0=function(e){var t=e.join(" "),n;if(ws.lastIndex=0,ws.test(t))return n=Xy.test(t),e[1]=zm(e[1],n),e[0]=zm(e[0],n,Y0(e[1])),!0},Kl,vi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,p=function _(m){var g=r()-i,x=m===!0,M,y,E,R;if((g>e||g<0)&&(n+=g-t),i+=g,E=i-n,M=E-o,(M>0||x)&&(R=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=M+(M>=s?4:s-M),y=1),x||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](E,h,R,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){E0&&(!Yf&&bp()&&(ar=Yf=window,Tp=ar.document||{},wi.gsap=li,(ar.gsapVersions||(ar.gsapVersions=[])).push(li.version),w0(Du||ar.GreenSockGlobals||!ar.gsap&&ar||{}),W0.forEach(X0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Kl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Kl=0,c=jl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,g,x){var M=g?function(y,E,R,A){m(y,E,R,A),f.remove(M)}:m;return f.remove(m),a[x?"unshift":"push"](M),Ta(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),Ta=function(){return!Kl&&vi.wake()},gt={},qy=/^[\d.\-M][\d.\-,\s]/,Yy=/["']/g,jy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Yy,"").trim():+c,i=l.substr(a+1).trim();return t},$y=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ky=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[jy(t[1])]:$y(e).split(",").map(L0)):gt._CE&&qy.test(e)?gt._CE("",e):n},$0=function(e){return function(t){return 1-e(1-t)}},K0=function r(e,t){for(var n=e._first,i;n;)n instanceof Jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},go=function(e,t){return e&&(Jt(e)?e:gt[e]||Ky(e))||t},Co=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ii(e,function(a){gt[a]=wi[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},Z0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/qf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Sy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Z0(a);return s=qf/s,l.config=function(c,u){return r(e,c,u)},l},Fh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Z0(n);return i.config=function(s){return r(e,s)},i};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Co(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Co("Elastic",Uh("in"),Uh("out"),Uh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Co("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Co("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Co("Circ",function(r){return-(S0(1-r*r)-1)});Co("Sine",function(r){return r===1?1:-yy(r*vy)+1});Co("Back",Fh("in"),Fh("out"),Fh());gt.SteppedEase=gt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Nt;return function(a){return((i*vc(0,o,a)|0)+s)*n}}};ya.ease=gt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ap+=r+","+r+"Params,"});var J0=function(e,t){this.id=xy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:C0,this.set=t?t.getSetter:Dp},Zl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ba(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Kl||vi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ba(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ta(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hh(this,n),!s._dp||s.parent||N0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),P0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Om(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Om(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ma(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),uh(this),Ly(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ay);var i=Ln;return Ln=n,Cp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Li(this,n),ni(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-Nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Nt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Jt(n)?n:I0,l=function(){var u=i.then;i.then=null,s&&s(),Jt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){al(this)},r})();Ai(Zl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var Jn=(function(r){y0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Xt&&fr(n.parent||Xt,Nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&U0(Nr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return bl(0,arguments,this),this},t.from=function(i,s,o){return bl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return bl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ml(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(i,s,Li(this,o),1),this},t.call=function(i,s,o){return fr(this,ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(i,o,Li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ml(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Ml(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,_,m,g,x,M,y,E,R,A;if(this!==Xt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,M=this._ts,g=!M,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Wt(u%m),u===l?(_=this._repeat,h=c):(E=Wt(u/m),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=Ma(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),R&&_&1&&(h=c-h,A=1),_!==E&&!this._lock){var v=R&&E&1,S=v===(R&&_&1);if(_<E&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Wt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;K0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Uy(this,Wt(a),Wt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!E&&(Si(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=-Nt);break}}d=p}else{d=this._last;for(var I=i<0?i:h;d;){if(p=d._prev,(d._act||I<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,s,o||Ln&&Cp(d)),h!==this._time||!this._ts&&!g){x=0,p&&(u+=this._zTime=I?-Nt:Nt);break}}d=p}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-Nt)._zTime=h>=a?1:-1,this._ts))return this._start=y,uh(this),this.render(i,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Zr(s)||(s=Li(this,s,i)),!(i instanceof Zl)){if(Hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(wn(i))return this.addLabel(i,s);if(Jt(i))i=ln.delayedCall(0,i);else return this}return this!==i?fr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return wn(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(i.parent===this&&ch(this,i),i===this._recent&&(this._recent=this._last),mo(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(vi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=ln.delayedCall(0,s||jl,o);return a.data="isPause",this._hasPause=1,fr(this,a,Li(this,i))},t.removePause=function(i){var s=this._first;for(i=Li(this,i);s;)s._start===i&&s.data==="isPause"&&Rs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=zi(i),l=this._first,c=Zr(s),u;l;)l instanceof ln?Ry(l._targets,a)&&(c?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Li(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=ln.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ba(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ai({startAt:{time:Li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),km(this,Li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),km(this,Li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Wt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return mo(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mo(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ki,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ba(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Xt._ts&&(P0(Xt,Fu(i,Xt)),R0=vi.frame),vi.frame>=Um){Um+=Ti.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Ti.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e})(Zl);Ai(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zy=function(e,t,n,i,s,o,a){var l=new ri(this._pt,e,t,0,1,rv,null,s),c=0,u=0,f,h,d,p,_,m,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=$l(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),h=n.match(Ih)||[];f=Ih.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?ca(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Ih.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(T0.test(i)||g)&&(l.e=0),this._pt=l,l},Pp=function(e,t,n,i,s,o,a,l,c,u){Jt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Jt(f)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Jt(f)?c?nS:nv:Ip,p;if(wn(i)&&(~i.indexOf("random(")&&(i=$l(i)),i.charAt(1)==="="&&(p=ca(h,i)+(zn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||ed)return!isNaN(h*i)&&i!==""?(p=new ri(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?rS:iv,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&Ep(t,i),Zy.call(this,e,t,h,i,d,l||Ti.stringFilter,c))},Jy=function(e,t,n,i,s){if(Jt(e)&&(e=Tl(e,s,t,n,i)),!Sr(e)||e.style&&e.nodeType||Hn(e)||M0(e))return wn(e)?Tl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Tl(e[a],s,t,n,i);return o},Q0=function(e,t,n,i,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:Jy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ri(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xs,ed,Lp=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!Sp,y=e.timeline,E,R,A,v,S,I,P,L,U,F,k,z,O;if(y&&(!h||!s)&&(s="none"),e._ease=go(s,ya.ease),e._yEase=f?$0(go(f===!0?s:f,ya.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(L=m[0]?po(m[0]).harness:0,z=L&&i[L.prop],E=Uu(i,wp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?du:wy),_._lazy=0),o){if(Rs(e._startAt=ln.set(m,Ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!d)&&e._startAt.revert(du),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(a=!1),A=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:g},E),z&&(A[L.prop]=z),Rs(e._startAt=ln.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(du):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ni(l)||l&&!p,R=0;R<m.length;R++){if(S=m[R],P=S._gsap||Rp(m)[R]._gsap,e._ptLookup[R]=F={},jf[P.id]&&Es.length&&Nu(),k=x===m?R:x.indexOf(S),L&&(U=new L).init(S,z||E,e,k,x)!==!1&&(e._pt=v=new ri(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Z){F[Z]=v}),U.priority&&(I=1)),!L||z)for(A in E)mi[A]&&(U=Q0(A,E,e,k,S,x))?U.priority&&(I=1):F[A]=v=Pp.call(e,S,A,"get",E[A],k,x,0,i.stringFilter);e._op&&e._op[R]&&e.kill(S,e._op[R]),M&&e._pt&&(xs=e,Xt.killTweensOf(S,F,e.globalTime(t)),O=!e.parent,xs=0),e._pt&&l&&(jf[P.id]=1)}I&&sv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,h&&t<=0&&y.render(ki,!0,!0)},Qy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ed=1,e.vars[t]="+=0",Lp(e,a),ed=0,l?Yl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=tn(n)+zn(f.e)),f.b&&(f.b=u.s+zn(f.b))},eS=function(e,t){var n=e[0]?po(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Sa({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Tl=function(e,t,n,i,s){return Jt(e)?e.call(t,n,i,s):wn(e)&&~e.indexOf("random(")?$l(e):e},ev=Ap+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tv={};ii(ev+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tv[r]=1});var ln=(function(r){y0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ml(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,x=i.parent||Xt,M=(Hn(n)||M0(n)?Zr(n[0]):"length"in i)?[n]:zi(n),y,E,R,A,v,S,I,P;if(a._targets=M.length?Rp(M):Yl("GSAP target "+n+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||h||Mc(c)||Mc(u)){if(i=a.vars,y=a.timeline=new Jn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:M}),y.kill(),y.parent=y._dp=Nr(a),y._start=0,h||Mc(c)||Mc(u)){if(A=M.length,I=h&&k0(h),Sr(h))for(v in h)~ev.indexOf(v)&&(P||(P={}),P[v]=h[v]);for(E=0;E<A;E++)R=Uu(i,tv),R.stagger=0,g&&(R.yoyoEase=g),P&&Sa(R,P),S=M[E],R.duration=+Tl(c,Nr(a),E,S,M),R.delay=(+Tl(u,Nr(a),E,S,M)||0)-a._delay,!h&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),y.to(S,R,I?I(E,S,M):0),y._ease=gt.none;y.duration()?c=u=0:a.timeline=0}else if(p){Ml(Ai(y.vars.defaults,{ease:"none"})),y._ease=go(p.ease||i.ease||"none");var L=0,U,F,k;if(Hn(p))p.forEach(function(z){return y.to(M,z,">")}),y.duration();else{R={};for(v in p)v==="ease"||v==="easeEach"||tS(v,p[v],R,p.easeEach);for(v in R)for(U=R[v].sort(function(z,O){return z.t-O.t}),L=0,E=0;E<U.length;E++)F=U[E],k={ease:F.e,duration:(F.t-(E?U[E-1].t:0))/100*c},k[v]=F.v,y.to(M,k,L),L+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Sp&&(xs=Nr(a),Xt.killTweensOf(M),xs=0),fr(x,Nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Wt(x._time)&&ni(f)&&Iy(Nr(a))&&x.data!=="nested")&&(a._tTime=-Nt,a.render(Math.max(0,-u)||0)),m&&U0(Nr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Nt&&!u?l:i<Nt?0:i,h,d,p,_,m,g,x,M,y;if(!c)Ny(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Wt(f%_),f===l?(p=this._repeat,h=c):(m=Wt(f/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,h=c-h),m=Ma(this._tTime,_),h===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(M&&this._yEase&&K0(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(F0(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),!a&&f&&!s&&!m&&(Si(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$f(this,i,s,o),Si(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&$f(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Rs(this,1),!s&&!(u&&!a)&&(f||a||g)&&(Si(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Kl||vi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lp(this,c),u=this._ease(c/this._dur),Qy(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(hh(this,0),this.parent||D0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?al(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xs&&xs.vars.overwrite!==!0)._first||al(this),this.parent&&o!==this.timeline.totalDuration()&&ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?zi(i):a,c=this._ptLookup,u=this._pt,f,h,d,p,_,m,g;if((!s||s==="all")&&Py(a,l))return s==="all"&&(this._pt=0),al(this);for(f=this._op=this._op||[],s!=="all"&&(wn(s)&&(_={},ii(s,function(x){return _[x]=1}),s=_),s=eS(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,p=h,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ch(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&al(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return bl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return bl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Xt.killTweensOf(i,s,o)},e})(Zl);Ai(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(r){ln[r]=function(){var e=new Jn,t=Zf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ip=function(e,t,n){return e[t]=n},nv=function(e,t,n){return e[t](n)},nS=function(e,t,n,i){return e[t](i.fp,n)},iS=function(e,t,n){return e.setAttribute(t,n)},Dp=function(e,t){return Jt(e[t])?nv:Mp(e[t])&&e.setAttribute?iS:Ip},iv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rv=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Np=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},oS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ch(this,t,"_pt"):t.dep||(n=1),t=i;return!n},aS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sv=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ri=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||iv,this.d=l||this,this.set=c||Ip,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aS,this.m=n,this.mt=s,this.tween=i},r})();ii(Ap+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wp[r]=1});wi.TweenMax=wi.TweenLite=ln;wi.TimelineLite=wi.TimelineMax=Jn;Xt=new Jn({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=j0;var _o=[],mu={},lS=[],Vm=0,cS=0,Oh=function(e){return(mu[e]||lS).map(function(t){return t()})},td=function(){var e=Date.now(),t=[];e-Vm>2&&(Oh("matchMediaInit"),_o.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ar.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Oh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vm=e,Oh("matchMedia"))},ov=(function(){function r(t,n){this.selector=n&&Jf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var o=this,a=function(){var c=Gt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jf(s)),Gt=o,f=i.apply(o,arguments),Jt(f)&&o._r.push(f),Gt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Jt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=_o.length;o--;)_o[o].id===this.id&&_o.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),uS=(function(){function r(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Sr(n)||(n={matches:n});var o=new ov(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ar.matchMedia(n[c]),l&&(_o.indexOf(o)<0&&_o.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(td):l.addEventListener("change",td)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return X0(i)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){wn(e)&&(e=zi(e)[0]);var s=po(e||{}).get,o=n?I0:L0;return n==="native"&&(n=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,n,i)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var i=e.map(function(u){return li.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=mi[t],a=po(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;aa._pt=0,f.init(e,n?u+n:u,aa,0,[e]),f.render(1,f),aa._pt&&Np(1,aa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=li.to(e,Ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=go(e.ease,ya.ease)),Fm(ya,e||{})},config:function(e){return Fm(Ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!mi[a]&&!wi[a]&&Yl(t+" effect requires "+a+" plugin.")}),Dh[t]=function(a,l,c){return n(zi(a),Ai(l||{},s),c)},o&&(Jn.prototype[t]=function(a,l,c){return this.add(Dh[t](a,Sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=go(t)},parseEase:function(e,t){return arguments.length?go(e,t):gt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jn(e),i,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ln&&i.vars.onComplete===i._targets[0]))&&fr(n,i,i._start-i._delay),i=s;return fr(Xt,n,0),n},context:function(e,t){return e?new ov(e,t):Gt},matchMedia:function(e){return new uS(e)},matchMediaRefresh:function(){return _o.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||td()},addEventListener:function(e,t){var n=mu[e]||(mu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Gy,wrapYoyo:Hy,distribute:k0,random:V0,snap:z0,normalize:Vy,getUnit:zn,clamp:Oy,splitColor:q0,toArray:zi,selector:Jf,mapRange:H0,pipe:ky,unitize:zy,interpolate:Wy,shuffle:B0},install:w0,effects:Dh,ticker:vi,updateRoot:Jn.updateRoot,plugins:mi,globalTimeline:Xt,core:{PropTween:ri,globals:A0,Tween:ln,Timeline:Jn,Animation:Zl,getCache:po,_removeLinkedListItem:ch,reverting:function(){return Ln},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Sp=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ou[r]=ln[r]});vi.add(Jn.updateRoot);aa=Ou.to({},{duration:0});var hS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=hS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Bh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(wn(s)&&(l={},ii(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fS(a,s)}}}},li=Ou.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bh("roundProps",Qf),Bh("modifiers"),Bh("snap",z0))||Ou;ln.version=Jn.version=li.version="3.14.2";E0=1;bp()&&Ta();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;var Gm,ys,ua,Up,ro,Hm,Fp,dS=function(){return typeof window<"u"},Jr={},Ys=180/Math.PI,ha=Math.PI/180,Uo=Math.atan2,Wm=1e8,Op=/([A-Z])/g,pS=/(left|right|width|margin|padding|x)/i,mS=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_S=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},av=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yS=function(e,t,n){return e.style[t]=n},SS=function(e,t,n){return e.style.setProperty(t,n)},MS=function(e,t,n){return e._gsap[t]=n},bS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},TS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ES=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},qt="transform",si=qt+"Origin",wS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fr(i,a)}):this.tfm[e]=o.x?o[e]:Fr(i,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},cv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Op,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Fp(),(!s||!s.isStart)&&!n[qt]&&(cv(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},uv=function(e,t){var n={target:e,props:[],revert:AS,save:wS};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},hv,id=function(e,t){var n=ys.createElementNS?ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ys.createElement(e);return n&&n.style?n:ys.createElement(e)},Mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Op,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ea(t)||t,1)||""},Xm="O,Moz,ms,Ms,Webkit".split(","),Ea=function(e,t,n){var i=t||ro,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xm[o]:"")+e},rd=function(){dS()&&window.document&&(Gm=window,ys=Gm.document,ua=ys.documentElement,ro=id("div")||{style:{}},id("div"),qt=Ea(qt),si=qt+"Origin",ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hv=!!Ea("perspective"),Fp=li.core.reverting,Up=1)},qm=function(e){var t=e.ownerSVGElement,n=id("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ua.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ua.removeChild(n),s},Ym=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fv=function(e){var t,n;try{t=e.getBBox()}catch{t=qm(e),n=1}return t&&(t.width||t.height)||n||(t=qm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ym(e,["x","cx","x1"])||0,y:+Ym(e,["y","cy","y1"])||0,width:0,height:0}:t},dv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fv(e))},Cs=function(e,t){if(t){var n=e.style,i;t in Jr&&t!==si&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Op,"-$1").toLowerCase())):n.removeAttribute(t)}},Ss=function(e,t,n,i,s,o){var a=new ri(e._pt,t,n,0,1,o?lv:av);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},jm={deg:1,rad:1,turn:1},RS={grid:1,flex:1},Ps=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ro.style,l=pS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||jm[i]||jm[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&dv(e),(d||o==="%")&&(Jr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],tn(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ys||!_.appendChild)&&(_=ys.body),m=_._gsap,m&&d&&m.width&&l&&m.time===vi.time&&!m.uncache)return tn(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+i,p=e[u],x?e.style[t]=x:Cs(e,t)}else(d||o==="%")&&!RS[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(ro),p=ro[u],_.removeChild(ro),a.position="absolute";return l&&d&&(m=po(_),m.time=vi.time,m.width=_[u]),tn(h?p*s/f:p&&s?f/p*s:0)},Fr=function(e,t,n,i){var s;return Up||rd(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jr[t]&&t!=="transform"?(s=Ql(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ku(Mi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bu[t]&&Bu[t](e,t,n)||Mi(e,t)||C0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ps(e,t,s,n)+n:s},CS=function(e,t,n,i){if(!n||n==="none"){var s=Ea(t,e,1),o=s&&Mi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,rv),l=0,c=0,u,f,h,d,p,_,m,g,x,M,y,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Mi(e,t)||i,_?e.style[t]=_:Cs(e,t)),u=[n,i],j0(u),n=u[0],i=u[1],h=n.match(oa)||[],E=i.match(oa)||[],E.length){for(;f=oa.exec(i);)m=f[0],x=i.substring(l,f.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=ca(d,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=oa.lastIndex-M.length,M||(M=M||Ti.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(d=Ps(e,t,_,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?lv:av;return T0.test(i)&&(a.e=0),this._pt=a,a},$m={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$m[n]||n,t[1]=$m[i]||i,t.join(" ")},LS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Jr[a]&&(l=1,a=a==="transformOrigin"?si:qt),Cs(n,a);l&&(Cs(n,qt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ql(n,1),o.uncache=1,cv(i)))}},Bu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,n,0,0,LS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Jl=[1,0,0,1,0,0],pv={},mv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Km=function(e){var t=Mi(e,qt);return mv(t)?Jl:t.substr(7).match(b0).map(tn)},Bp=function(e,t){var n=e._gsap||po(e),i=e.style,s=Km(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Jl:s):(s===Jl&&!e.offsetParent&&e!==ua&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ua.appendChild(e)),s=Km(e),l?i.display=l:Cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sd=function(e,t,n,i,s,o){var a=e._gsap,l=s||Bp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],x=l[5],M=t.split(" "),y=parseFloat(M[0])||0,E=parseFloat(M[1])||0,R,A,v,S;n?l!==Jl&&(A=d*m-p*_)&&(v=y*(m/A)+E*(-_/A)+(_*x-m*g)/A,S=y*(-p/A)+E*(d/A)-(d*x-p*g)/A,y=v,E=S):(R=fv(e),y=R.x+(~M[0].indexOf("%")?y/100*R.width:y),E=R.y+(~(M[1]||M[0]).indexOf("%")?E/100*R.height:E)),i||i!==!1&&a.smooth?(g=y-c,x=E-u,a.xOffset=f+(g*d+x*_)-g,a.yOffset=h+(g*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[si]="0px 0px",o&&(Ss(o,a,"xOrigin",c,y),Ss(o,a,"yOrigin",u,E),Ss(o,a,"xOffset",f,a.xOffset),Ss(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Ql=function(e,t){var n=e._gsap||new J0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Mi(e,si)||"0",u,f,h,d,p,_,m,g,x,M,y,E,R,A,v,S,I,P,L,U,F,k,z,O,Z,X,N,se,ne,Se,Ve,Je;return u=f=h=_=m=g=x=M=y=0,d=p=1,n.svg=!!(e.getCTM&&dv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),i.scale=i.rotate=i.translate="none"),A=Bp(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),sd(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,R=n.yOrigin||0,A!==Jl&&(P=A[0],L=A[1],U=A[2],F=A[3],u=k=A[4],f=z=A[5],A.length===6?(d=Math.sqrt(P*P+L*L),p=Math.sqrt(F*F+U*U),_=P||L?Uo(L,P)*Ys:0,x=U||F?Uo(U,F)*Ys+_:0,x&&(p*=Math.abs(Math.cos(x*ha))),n.svg&&(u-=E-(E*P+R*U),f-=R-(E*L+R*F))):(Je=A[6],Se=A[7],N=A[8],se=A[9],ne=A[10],Ve=A[11],u=A[12],f=A[13],h=A[14],v=Uo(Je,ne),m=v*Ys,v&&(S=Math.cos(-v),I=Math.sin(-v),O=k*S+N*I,Z=z*S+se*I,X=Je*S+ne*I,N=k*-I+N*S,se=z*-I+se*S,ne=Je*-I+ne*S,Ve=Se*-I+Ve*S,k=O,z=Z,Je=X),v=Uo(-U,ne),g=v*Ys,v&&(S=Math.cos(-v),I=Math.sin(-v),O=P*S-N*I,Z=L*S-se*I,X=U*S-ne*I,Ve=F*I+Ve*S,P=O,L=Z,U=X),v=Uo(L,P),_=v*Ys,v&&(S=Math.cos(v),I=Math.sin(v),O=P*S+L*I,Z=k*S+z*I,L=L*S-P*I,z=z*S-k*I,P=O,k=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=tn(Math.sqrt(P*P+L*L+U*U)),p=tn(Math.sqrt(z*z+Je*Je)),v=Uo(k,z),x=Math.abs(v)>2e-4?v*Ys:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mv(Mi(e,qt)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=tn(d),n.scaleY=tn(p),n.rotation=tn(_)+a,n.rotationX=tn(m)+a,n.rotationY=tn(g)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[si]=ku(c)),n.xOffset=n.yOffset=0,n.force3D=Ti.force3D,n.renderTransform=n.svg?DS:hv?gv:IS,n.uncache=0,n},ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},kh=function(e,t,n){var i=zn(t);return tn(parseFloat(t)+parseFloat(Ps(e,"x",n+"px",i)))+i},IS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gv(e,t)},Os="0deg",qa="0px",Bs=") ",gv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,M=n.zOrigin,y="",E=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==Os||u!==Os)){var R=parseFloat(u)*ha,A=Math.sin(R),v=Math.cos(R),S;R=parseFloat(f)*ha,S=Math.cos(R),o=kh(x,o,A*S*-M),a=kh(x,a,-Math.sin(R)*-M),l=kh(x,l,v*S*-M+M)}m!==qa&&(y+="perspective("+m+Bs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||o!==qa||a!==qa||l!==qa)&&(y+=l!==qa||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bs),c!==Os&&(y+="rotate("+c+Bs),u!==Os&&(y+="rotateY("+u+Bs),f!==Os&&(y+="rotateX("+f+Bs),(h!==Os||d!==Os)&&(y+="skew("+h+", "+d+Bs),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Bs),x.style[qt]=y||"translate(0, 0)"},DS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,x=n.forceCSS,M=parseFloat(o),y=parseFloat(a),E,R,A,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ha,c*=ha,E=Math.cos(l)*f,R=Math.sin(l)*f,A=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=ha,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,R*=S)),E=tn(E),R=tn(R),A=tn(A),v=tn(v)):(E=f,v=h,R=A=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Ps(d,"x",o,"px"),y=Ps(d,"y",a,"px")),(p||_||m||g)&&(M=tn(M+p-(p*E+_*A)+m),y=tn(y+_-(p*R+_*v)+g)),(i||s)&&(S=d.getBBox(),M=tn(M+i/100*S.width),y=tn(y+s/100*S.height)),S="matrix("+E+","+R+","+A+","+v+","+M+","+y+")",d.setAttribute("transform",S),x&&(d.style[qt]=S)},NS=function(e,t,n,i,s){var o=360,a=wn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ys:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Wm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Wm)%o-~~(c/o)*o)),e._pt=h=new ri(e._pt,t,n,i,c,gS),h.e=u,h.u="deg",e._props.push(n),h},Zm=function(e,t){for(var n in t)e[n]=t[n];return e},US=function(e,t,n){var i=Zm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[qt]=t,a=Ql(n,1),Cs(n,qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qt],o[qt]=t,a=Ql(n,1),o[qt]=c);for(l in Jr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=zn(c),p=zn(u),f=d!==p?Ps(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new ri(e._pt,a,l,f,h-f,nd),e._pt.u=p||0,e._props.push(l));Zm(a,i)};ii("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Bu[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(p){return Fr(a,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var _v={name:"css",register:rd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,p,_,m,g,x,M,y,E,R,A,v,S;Up||rd(),this.styles=this.styles||uv(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(mi[_]&&Q0(_,t,n,i,e,s)))){if(d=typeof u,p=Bu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=$l(u)),p)p(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ws.lastIndex=0,ws.test(c)||(m=zn(c),g=zn(u),g?m!==g&&(c=Ps(e,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],wn(c)&&~c.indexOf("random(")&&(c=$l(c)),zn(c+"")||c==="auto"||(c+=Ti.units[_]||zn(Fr(e,_))||""),(c+"").charAt(1)==="="&&(c=Fr(e,_))):c=Fr(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(h===1&&Fr(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,a.visibility),Ss(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Jr,M){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=Mi(e,"perspective"),I?e.style.perspective=I:Cs(e,"perspective")}f=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ql(e,t.parseTransform),R=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new ri(this._pt,a,qt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,E,"scaleY",E.scaleY,(x?ca(E.scaleY,x+f):f)-E.scaleY||0,nd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(si,0,a[si]),u=PS(u),E.svg?sd(e,u,0,R,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==E.zOrigin&&Ss(this,E,"zOrigin",E.zOrigin,g),Ss(this,a,_,ku(c),ku(u)));continue}else if(_==="svgOrigin"){sd(e,u,1,R,0,this);continue}else if(_ in pv){NS(this,E,_,h,x?ca(h,x+u):u);continue}else if(_==="smoothOrigin"){Ss(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){US(this,u,e);continue}}else _ in a||(_=Ea(_)||_);if(M||(f||f===0)&&(h||h===0)&&!mS.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),g=zn(u)||(_ in Ti.units?Ti.units[_]:m),m!==g&&(h=Ps(e,_,c,g)),this._pt=new ri(this._pt,M?E:a,_,h,(x?ca(h,x+f):f)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?xS:nd),this._pt.u=g||0,M&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=vS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=_S);else if(_ in a)CS.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Ep(_,u);continue}M||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}A&&sv(this)},render:function(e,t){if(t.tween._time||!Fp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fr,aliases:pr,getSetter:function(e,t,n){var i=pr[t];return i&&i.indexOf(",")<0&&(t=i),t in Jr&&t!==si&&(e._gsap.x||Fr(e,"x"))?n&&Hm===n?t==="scale"?bS:MS:(Hm=n||{})&&(t==="scale"?TS:ES):e.style&&!Mp(e.style[t])?yS:~t.indexOf("-")?SS:Dp(e,t)},core:{_removeProperty:Cs,_getMatrix:Bp}};li.utils.checkPrefix=Ea;li.core.getStyleSaver=uv;(function(r,e,t,n){var i=ii(r+","+e+","+t,function(s){Jr[s]=1});ii(e,function(s){Ti.units[s]="deg",pv[s]=1}),pr[i[13]]=r+","+e,ii(n,function(s){var o=s.split(":");pr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ti.units[r]="px"});li.registerPlugin(_v);var Le=li.registerPlugin(_v)||li;Le.core.Tween;let Ya,Fo,Jm=typeof Symbol=="function"?Symbol():"_split",od,FS=()=>od||Ls.register(window.gsap),Qm=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ec=r=>typeof r=="string"?ec(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...ec(t)):e.push(t),e),[]):[r],eg=r=>ec(r).filter(e=>e instanceof HTMLElement),ad=[],zh=function(){},OS={add:r=>r()},BS=/\s+/g,tg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),zu={left:0,top:0,width:0,height:0},kS=(r,e)=>{for(;++e<r.length&&r[e]===zu;);return r[e]||zu},ng=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},ig=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||ad),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},rg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Oo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),ld=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},zS=(r,e,t,n)=>{let i=ld("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},vv=(r,e,t,n,i,s,o,a,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=e,m=r.getBoundingClientRect(),g=m,x=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,y=t.collection,E,R,A,v,S,I,P,L,U,F,k,z,O,Z,X,N,se,ne;for(typeof d=="object"?(A=d.delimiter||d,R=d.replaceWith||""):R=d===""?"":d||" ",E=R!==" ";h<f.length;h++)if(v=f[h],v.nodeType===3){for(X=v.textContent||"",p?X=X.replace(BS," "):x&&(X=X.replace(/\n/g,R+`
`)),_&&(X=_(X,r)),v.textContent=X,S=R||A?X.split(A||R):X.match(a)||ad,se=S[S.length-1],L=E?se.slice(-1)===" ":!se,se||S.pop(),g=m,P=E?S[0].charAt(0)===" ":!S[0],P&&Oo(" ",r,v),S[0]||S.shift(),ig(S,l),s&&c||(v.textContent=""),U=1;U<=S.length;U++)if(N=S[U-1],!p&&x&&N.charAt(0)===`
`&&((u=v.previousSibling)==null||u.remove(),Oo(document.createElement("br"),r,v),N=N.slice(1)),!p&&N==="")Oo(R,r,v);else if(N===" ")r.insertBefore(document.createTextNode(" "),v);else{if(E&&N.charAt(0)===" "&&Oo(" ",r,v),M&&U===1&&!P&&y.indexOf(M.parentNode)>-1?(I=y[y.length-1],I.appendChild(document.createTextNode(n?"":N))):(I=t(n?"":N),Oo(I,r,v),M&&U===1&&!P&&I.insertBefore(M,I.firstChild)),n)for(k=Qm?ig([...Qm.segment(N)].map(Se=>Se.segment),l):N.match(a)||ad,ne=0;ne<k.length;ne++)I.appendChild(k[ne]===" "?document.createTextNode(" "):n(k[ne]));if(s&&c){if(X=v.textContent=X.substring(N.length+1,X.length),F=I.getBoundingClientRect(),F.top>g.top&&F.left<=g.left){for(z=r.cloneNode(),O=r.childNodes[0];O&&O!==I;)Z=O,O=O.nextSibling,z.appendChild(Z);r.parentNode.insertBefore(z,r),i&&rg(z)}g=F}(U<S.length||L)&&Oo(U>=S.length?" ":E&&N.slice(-1)===" "?" "+R:R,r,v)}r.removeChild(v),M=0}else v.nodeType===1&&(o&&o.indexOf(v)>-1?(y.indexOf(v.previousSibling)>-1&&y[y.length-1].appendChild(v),M=v):(vv(v,e,t,n,i,s,o,a,l,!0),M=0),i&&rg(v))};const xv=class yv{constructor(e,t){this.isSplit=!1,FS(),this.elements=eg(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Jm])==null||a._data.orig.filter(({element:l})=>l===o).forEach(ng)),o[Jm]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},zh(this),this.split(t)}split(e){return(this._ctx||OS).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,d=f&&!h&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+tg.source,"gu"):tg,m=!!e.ignore&&eg(e.ignore),{orig:g,animTime:x,obs:M}=this._data,y;(f||h||u)&&(this.elements.forEach((E,R)=>{g[R]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},n==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):n==="hidden"&&E.setAttribute("aria-hidden","true");let A=[],v=[],S=[],I=f?ld("char",e,A):null,P=ld("word",e,v),L,U,F,k;if(vv(E,e,P,I,d,i&&(u||d),m,_,p,!1),u){let z=ec(E.childNodes),O=zS(E,z,e,S),Z,X=[],N=0,se=z.map(Ve=>Ve.nodeType===1?Ve.getBoundingClientRect():zu),ne=zu,Se;for(L=0;L<z.length;L++)Z=z[L],Z.nodeType===1&&(Z.nodeName==="BR"?((!L||z[L-1].nodeName!=="BR")&&(X.push(Z),O(N,L+1)),N=L+1,ne=kS(se,L)):(Se=se[L],L&&Se.top>ne.top&&Se.left<ne.left+ne.width-1&&(O(N,L),N=L),ne=Se));N<L&&O(N,L),X.forEach(Ve=>{var Je;return(Je=Ve.parentNode)==null?void 0:Je.removeChild(Ve)})}if(!h){for(L=0;L<v.length;L++)if(U=v[L],f||!U.nextSibling||U.nextSibling.nodeType!==3)if(s&&!u){for(F=document.createElement("span"),F.style.whiteSpace="nowrap";U.firstChild;)F.appendChild(U.firstChild);U.replaceWith(F)}else U.replaceWith(...U.childNodes);else k=U.nextSibling,k&&k.nodeType===3&&(k.textContent=(U.textContent||"")+(k.textContent||""),U.remove());v.length=0,E.normalize()}this.lines.push(...S),this.words.push(...v),this.chars.push(...A)}),c&&this[c]&&this.masks.push(...this[c].map(E=>{let R=E.cloneNode();return E.replaceWith(R),R.appendChild(E),E.className&&(R.className=E.className.trim()+"-mask"),R.style.overflow="clip",R}))),this.isSplit=!0,Fo&&u&&(a?Fo.addEventListener("loadingdone",this._split):Fo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(y=o&&o(this))&&y.totalTime&&(this._data.anim=x?y.totalTime(x):y),u&&a&&this.elements.forEach((E,R)=>{g[R].width=E.offsetWidth,M&&M.observe(E)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Fo?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(ng),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new yv(e,t)}static register(e){Ya=Ya||e||window.gsap,Ya&&(ec=Ya.utils.toArray,zh=Ya.core.context||zh),!od&&window.innerWidth>0&&(Fo=document.fonts,od=!0)}};xv.version="3.14.2";let Ls=xv;var VS="1.3.17";function Sv(r,e,t){return Math.max(r,Math.min(e,t))}function GS(r,e,t){return(1-t)*r+t*e}function HS(r,e,t,n){return GS(r,e,1-Math.exp(-t*n))}function WS(r,e){return(r%e+e)%e}var XS=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Sv(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=HS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function qS(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var YS=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=qS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Mv=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},sg=100/6,rs={passive:!1},jS=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rs),this.element.addEventListener("touchstart",this.onTouchStart,rs),this.element.addEventListener("touchmove",this.onTouchMove,rs),this.element.addEventListener("touchend",this.onTouchEnd,rs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Mv;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,rs),this.element.removeEventListener("touchstart",this.onTouchStart,rs),this.element.removeEventListener("touchmove",this.onTouchMove,rs),this.element.removeEventListener("touchend",this.onTouchEnd,rs)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?sg:n===2?this.window.width:1,s=n===1?sg:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},og=r=>Math.min(1,1.001-Math.pow(2,-10*r)),$S=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new XS;emitter=new Mv;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:M=!1,anchors:y=!1,autoToggle:E=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=VS,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=og:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:x,autoRaf:M,anchors:y,autoToggle:E,allowNestedScroll:R,naiveDimensions:v,stopInertiaOnNavigate:S},this.dimensions=new YS(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new jS(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?(h=document.querySelector(r),h||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(h=r),h){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?p.left:p.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const h=r-this.animatedScroll;h>this.limit/2?r=r-this.limit:h<-this.limit/2&&(r=r+this.limit)}}else r=Sv(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=og:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),i&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const R=E.overflowX,A=E.overflowY;if(s=["auto","overlay","scroll"].includes(R),o=["auto","overlay","scroll"].includes(A),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight,a=c>f,l=u>h,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let p;if(d==="horizontal")p="x";else if(d==="vertical")p="y";else{const E=e!==0,R=t!==0;E&&s&&a&&(p="x"),R&&o&&l&&(p="y")}if(!p)return!1;let _,m,g,x,M;if(p==="x")_=r.scrollLeft,m=c-f,g=e,x=s,M=a;else if(p==="y")_=r.scrollTop,m=u-h,g=t,x=o,M=l;else return!1;return(g>0?_<m:_>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?WS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function KS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ZS(r,e,t){return e&&KS(r.prototype,e),r}var Cn,gu,xi,Ms,bs,fa,bv,js,El,Tv,Gr,$i,Ev,wv=function(){return Cn||typeof window<"u"&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},Av=1,la=[],ft=[],vr=[],wl=Date.now,cd=function(e,t){return t},JS=function(){var e=El.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,vr),ft=n,vr=i,cd=function(o,a){return t[o](a)}},As=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},Al=function(e){return!!~Tv.indexOf(e)},Yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},bc="scrollLeft",Tc="scrollTop",ud=function(){return Gr&&Gr.isPressed||ft.cache++},Vu=function(e,t){var n=function i(s){if(s||s===0){Av&&(xi.history.scrollRestoration="manual");var o=Gr&&Gr.isPressed;s=i.v=Math.round(s)||(Gr&&Gr.iOS?1:0),e(s),i.cacheID=ft.cache,o&&cd("ss",s)}else(t||ft.cache!==i.cacheID||cd("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Qn={s:bc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vu(function(r){return arguments.length?xi.scrollTo(r,gn.sc()):xi.pageXOffset||Ms[bc]||bs[bc]||fa[bc]||0})},gn={s:Tc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Qn,sc:Vu(function(r){return arguments.length?xi.scrollTo(Qn.sc(),r):xi.pageYOffset||Ms[Tc]||bs[Tc]||fa[Tc]||0})},ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||Cn.utils.toArray)(e)[0]||(typeof e=="string"&&Cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},QS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Is=function(e,t){var n=t.s,i=t.sc;Al(e)&&(e=Ms.scrollingElement||bs);var s=ft.indexOf(e),o=i===gn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||Yn(e,"scroll",ud);var a=ft[s+o],l=a||(ft[s+o]=Vu(As(e,n),!0)||(Al(e)?i:Vu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Cn.getProperty(e,"scrollBehavior")==="smooth"),l},hd=function(e,t,n){var i=e,s=e,o=wl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=wl();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(p){var _=a,m=s,g=wl();return(p||p===0)&&p!==i&&u(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ja=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ag=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Rv=function(){El=Cn.core.globals().ScrollTrigger,El&&El.core&&JS()},Cv=function(e){return Cn=e||wv(),!gu&&Cn&&typeof document<"u"&&document.body&&(xi=window,Ms=document,bs=Ms.documentElement,fa=Ms.body,Tv=[xi,Ms,bs,fa],Cn.utils.clamp,Ev=Cn.core.context||function(){},js="onpointerenter"in fa?"pointer":"mouse",bv=nn.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=nn.eventTypes=("ontouchstart"in bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Av=0},500),Rv(),gu=1),gu};Qn.op=gn;ft.cache=0;var nn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){gu||Cv(Cn)||console.warn("Please gsap.registerPlugin(Observer)"),El||Rv();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,x=n.onDrag,M=n.onPress,y=n.onRelease,E=n.onRight,R=n.onLeft,A=n.onUp,v=n.onDown,S=n.onChangeX,I=n.onChangeY,P=n.onChange,L=n.onToggleX,U=n.onToggleY,F=n.onHover,k=n.onHoverEnd,z=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,X=n.onGestureStart,N=n.onGestureEnd,se=n.onWheel,ne=n.onEnable,Se=n.onDisable,Ve=n.onClick,Je=n.scrollSpeed,Q=n.capture,ie=n.allowClicks,le=n.lockAxis,Be=n.onLockAxis;this.target=a=ti(a)||bs,this.vars=n,d&&(d=Cn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,Je=Je||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(fa).lineHeight)||22);var ke,Ie,_t,we,Ye,tt,qe,j=this,V=0,St=0,lt=n.passive||!u&&n.passive!==!1,je=Is(a,Qn),Me=Is(a,gn),D=je(),b=Me(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",ee=Al(a),te=a.ownerDocument||Ms,K=[0,0,0],xe=[0,0,0],ue=0,De=function(){return ue=wl()},be=function(Fe,it){return(j.event=Fe)&&d&&QS(Fe.target,d)||it&&G&&Fe.pointerType!=="touch"||O&&O(Fe,it)},oe=function(){j._vx.reset(),j._vy.reset(),Ie.pause(),f&&f(j)},ce=function(){var Fe=j.deltaX=ag(K),it=j.deltaY=ag(xe),_e=Math.abs(Fe)>=i,Ze=Math.abs(it)>=i;P&&(_e||Ze)&&P(j,Fe,it,K,xe),_e&&(E&&j.deltaX>0&&E(j),R&&j.deltaX<0&&R(j),S&&S(j),L&&j.deltaX<0!=V<0&&L(j),V=j.deltaX,K[0]=K[1]=K[2]=0),Ze&&(v&&j.deltaY>0&&v(j),A&&j.deltaY<0&&A(j),I&&I(j),U&&j.deltaY<0!=St<0&&U(j),St=j.deltaY,xe[0]=xe[1]=xe[2]=0),(we||_t)&&(z&&z(j),_t&&(m&&_t===1&&m(j),x&&x(j),_t=0),we=!1),tt&&!(tt=!1)&&Be&&Be(j),Ye&&(se(j),Ye=!1),ke=0},Te=function(Fe,it,_e){K[_e]+=Fe,xe[_e]+=it,j._vx.update(Fe),j._vy.update(it),c?ke||(ke=requestAnimationFrame(ce)):ce()},Ae=function(Fe,it){le&&!qe&&(j.axis=qe=Math.abs(Fe)>Math.abs(it)?"x":"y",tt=!0),qe!=="y"&&(K[2]+=Fe,j._vx.update(Fe,!0)),qe!=="x"&&(xe[2]+=it,j._vy.update(it,!0)),c?ke||(ke=requestAnimationFrame(ce)):ce()},pe=function(Fe){if(!be(Fe,1)){Fe=ja(Fe,u);var it=Fe.clientX,_e=Fe.clientY,Ze=it-j.x,We=_e-j.y,Qe=j.isDragging;j.x=it,j.y=_e,(Qe||(Ze||We)&&(Math.abs(j.startX-it)>=s||Math.abs(j.startY-_e)>=s))&&(_t||(_t=Qe?2:1),Qe||(j.isDragging=!0),Ae(Ze,We))}},Ke=j.onPress=function(ye){be(ye,1)||ye&&ye.button||(j.axis=qe=null,Ie.pause(),j.isPressed=!0,ye=ja(ye),V=St=0,j.startX=j.x=ye.clientX,j.startY=j.y=ye.clientY,j._vx.reset(),j._vy.reset(),Yn(Z?a:te,$i[1],pe,lt,!0),j.deltaX=j.deltaY=0,M&&M(j))},B=j.onRelease=function(ye){if(!be(ye,1)){Xn(Z?a:te,$i[1],pe,!0);var Fe=!isNaN(j.y-j.startY),it=j.isDragging,_e=it&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Ze=ja(ye);!_e&&Fe&&(j._vx.reset(),j._vy.reset(),u&&ie&&Cn.delayedCall(.08,function(){if(wl()-ue>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(te.createEvent){var We=te.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,xi,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(We)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,f&&it&&!Z&&Ie.restart(!0),_t&&ce(),g&&it&&g(j),y&&y(j,_e)}},he=function(Fe){return Fe.touches&&Fe.touches.length>1&&(j.isGesturing=!0)&&X(Fe,j.isDragging)},ae=function(){return(j.isGesturing=!1)||N(j)},me=function(Fe){if(!be(Fe)){var it=je(),_e=Me();Te((it-D)*Je,(_e-b)*Je,1),D=it,b=_e,f&&Ie.restart(!0)}},re=function(Fe){if(!be(Fe)){Fe=ja(Fe,u),se&&(Ye=!0);var it=(Fe.deltaMode===1?l:Fe.deltaMode===2?xi.innerHeight:1)*p;Te(Fe.deltaX*it,Fe.deltaY*it,0),f&&!Z&&Ie.restart(!0)}},J=function(Fe){if(!be(Fe)){var it=Fe.clientX,_e=Fe.clientY,Ze=it-j.x,We=_e-j.y;j.x=it,j.y=_e,we=!0,f&&Ie.restart(!0),(Ze||We)&&Ae(Ze,We)}},Ee=function(Fe){j.event=Fe,F(j)},He=function(Fe){j.event=Fe,k(j)},xt=function(Fe){return be(Fe)||ja(Fe,u)&&Ve(j)};Ie=j._dc=Cn.delayedCall(h||.25,oe).pause(),j.deltaX=j.deltaY=0,j._vx=hd(0,50,!0),j._vy=hd(0,50,!0),j.scrollX=je,j.scrollY=Me,j.isDragging=j.isGesturing=j.isPressed=!1,Ev(this),j.enable=function(ye){return j.isEnabled||(Yn(ee?te:a,"scroll",ud),o.indexOf("scroll")>=0&&Yn(ee?te:a,"scroll",me,lt,Q),o.indexOf("wheel")>=0&&Yn(a,"wheel",re,lt,Q),(o.indexOf("touch")>=0&&bv||o.indexOf("pointer")>=0)&&(Yn(a,$i[0],Ke,lt,Q),Yn(te,$i[2],B),Yn(te,$i[3],B),ie&&Yn(a,"click",De,!0,!0),Ve&&Yn(a,"click",xt),X&&Yn(te,"gesturestart",he),N&&Yn(te,"gestureend",ae),F&&Yn(a,js+"enter",Ee),k&&Yn(a,js+"leave",He),z&&Yn(a,js+"move",J)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=we=_t=!1,j._vx.reset(),j._vy.reset(),D=je(),b=Me(),ye&&ye.type&&Ke(ye),ne&&ne(j)),j},j.disable=function(){j.isEnabled&&(la.filter(function(ye){return ye!==j&&Al(ye.target)}).length||Xn(ee?te:a,"scroll",ud),j.isPressed&&(j._vx.reset(),j._vy.reset(),Xn(Z?a:te,$i[1],pe,!0)),Xn(ee?te:a,"scroll",me,Q),Xn(a,"wheel",re,Q),Xn(a,$i[0],Ke,Q),Xn(te,$i[2],B),Xn(te,$i[3],B),Xn(a,"click",De,!0),Xn(a,"click",xt),Xn(te,"gesturestart",he),Xn(te,"gestureend",ae),Xn(a,js+"enter",Ee),Xn(a,js+"leave",He),Xn(a,js+"move",J),j.isEnabled=j.isPressed=j.isDragging=!1,Se&&Se(j))},j.kill=j.revert=function(){j.disable();var ye=la.indexOf(j);ye>=0&&la.splice(ye,1),Gr===j&&(Gr=0)},la.push(j),Z&&Al(a)&&(Gr=j),j.enable(_)},ZS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();nn.version="3.14.2";nn.create=function(r){return new nn(r)};nn.register=Cv;nn.getAll=function(){return la.slice()};nn.getById=function(r){return la.filter(function(e){return e.vars.id===r})[0]};wv()&&Cn.registerPlugin(nn);var Pe,ia,ht,Ft,gi,Et,kp,Gu,tc,Rl,cl,Ec,On,fh,fd,Kn,lg,cg,ra,Pv,Vh,Lv,$n,dd,Iv,Dv,fs,pd,zp,da,Vp,Cl,md,Gh,wc=1,kn=Date.now,Hh=kn(),Hi=0,ul=0,ug=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hg=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},eM=function r(){return ul&&requestAnimationFrame(r)},fg=function(){return fh=1},dg=function(){return fh=0},lr=function(e){return e},hl=function(e){return Math.round(e*1e5)/1e5||0},Nv=function(){return typeof window<"u"},Uv=function(){return Pe||Nv()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},To=function(e){return!!~kp.indexOf(e)},Fv=function(e){return(e==="Height"?Vp:ht["inner"+e])||gi["client"+e]||Et["client"+e]},Ov=function(e){return As(e,"getBoundingClientRect")||(To(e)?function(){return Su.width=ht.innerWidth,Su.height=Vp,Su}:function(){return Br(e)})},tM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=As(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Fv(s):e["client"+s])||0}},nM=function(e,t){return!t||~vr.indexOf(e)?Ov(e):function(){return Su}},mr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=As(e,n))?o()-Ov(e)()[s]:To(e)?(gi[n]||Et[n])-Fv(i):e[n]-e["offset"+i])},Ac=function(e,t){for(var n=0;n<ra.length;n+=3)(!t||~t.indexOf(ra[n+1]))&&e(ra[n],ra[n+1],ra[n+2])},pi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},fl=function(e){return typeof e=="number"},$s=function(e){return typeof e=="object"},$a=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Wh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Bo=Math.abs,Bv="left",kv="top",Gp="right",Hp="bottom",vo="width",xo="height",Pl="Right",Ll="Left",Il="Top",Dl="Bottom",an="padding",Di="margin",wa="Width",Wp="Height",pn="px",Ni=function(e){return ht.getComputedStyle(e)},iM=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},pg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Br=function(e,t){var n=t&&Ni(e)[fd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},zv=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},rM=function(e){return function(t){return Pe.utils.snap(zv(e),t)}},Xp=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},sM=function(e){return function(t,n){return Xp(zv(e))(t,n.direction)}},Rc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Cc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pc={toggleActions:"play",anticipatePin:0},Wu={top:0,left:0,center:.5,bottom:1,right:1},_u=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wu?Wu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Ft.createElement("div"),_=To(n)||As(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?Et:n,x=e.indexOf("start")!==-1,M=x?c:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===gn?Gp:Hp)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],vu(p,0,i,x),p},vu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+wa]=1,s["border"+a+wa]=0,s[n.p]=t+"px",Pe.set(e,s)},ut=[],gd={},nc,gg=function(){return kn()-Hi>34&&(nc||(nc=requestAnimationFrame(Yr)))},ko=function(){(!$n||!$n.isPressed||$n.startX>Et.clientWidth)&&(ft.cache++,$n?nc||(nc=requestAnimationFrame(Yr)):Yr(),Hi||wo("scrollStart"),Hi=kn())},Xh=function(){Dv=ht.innerWidth,Iv=ht.innerHeight},dl=function(e){ft.cache++,(e===!0||!On&&!Lv&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!dd||Dv!==ht.innerWidth||Math.abs(ht.innerHeight-Iv)>ht.innerHeight*.25))&&Gu.restart(!0)},Eo={},oM=[],Vv=function r(){return Mn(at,"scrollEnd",r)||so(!0)},wo=function(e){return Eo[e]&&Eo[e].map(function(t){return t()})||oM},di=[],Gv=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},Hv=function(){return ft.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},qp=function(e,t){var n;for(Kn=0;Kn<ut.length;Kn++)n=ut[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Cl=!0,t&&Gv(t),t||wo("revert")},Wv=function(e,t){ft.cache++,(t||!Zn)&&ft.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(ht.history.scrollRestoration=zp=e)},Zn,yo=0,_g,aM=function(){if(_g!==yo){var e=_g=yo;requestAnimationFrame(function(){return e===yo&&so(!0)})}},Xv=function(){Et.appendChild(da),Vp=!$n&&da.offsetHeight||ht.innerHeight,Et.removeChild(da)},vg=function(e){return tc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},so=function(e,t){if(gi=Ft.documentElement,Et=Ft.body,kp=[ht,Ft,gi,Et],Hi&&!e&&!Cl){bn(at,"scrollEnd",Vv);return}Xv(),Zn=at.isRefreshing=!0,Cl||Hv();var n=wo("refreshInit");Pv&&at.sort(),t||qp(),ft.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),Cl=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),md=1,vg(!0),ut.forEach(function(i){var s=mr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),vg(!1),md=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Wv(zp,1),Gu.pause(),yo++,Zn=2,Yr(2),ut.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=at.isRefreshing=!1,wo("refresh")},_d=0,xu=1,Nl,Yr=function(e){if(e===2||!Zn&&!Cl){at.isUpdating=!0,Nl&&Nl.update(0);var t=ut.length,n=kn(),i=n-Hh>=50,s=t&&ut[0].scroll();if(xu=_d>s?-1:1,Zn||(_d=s),i&&(Hi&&!fh&&n-Hi>200&&(Hi=0,wo("scrollEnd")),cl=Hh,Hh=n),xu<0){for(Kn=t;Kn-- >0;)ut[Kn]&&ut[Kn].update(0,i);xu=1}else for(Kn=0;Kn<t;Kn++)ut[Kn]&&ut[Kn].update(0,i);at.isUpdating=!1}nc=0},vd=[Bv,kv,Hp,Gp,Di+Dl,Di+Pl,Di+Il,Di+Ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yu=vd.concat([vo,xo,"boxSizing","max"+wa,"max"+Wp,"position",Di,an,an+Il,an+Pl,an+Dl,an+Ll]),lM=function(e,t,n){pa(n);var i=e._gsap;if(i.spacerIsNative)pa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},qh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=vd.length,o=t.style,a=e.style,l;s--;)l=vd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hp]=a[Gp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vo]=Hu(e,Qn)+pn,o[xo]=Hu(e,gn)+pn,o[an]=a[Di]=a[kv]=a[Bv]="0",pa(i),a[vo]=a["max"+wa]=n[vo],a[xo]=a["max"+Wp]=n[xo],a[an]=n[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},cM=/([A-Z])/g,pa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(cM,"-$1").toLowerCase())}},Ic=function(e){for(var t=yu.length,n=e.style,i=[],s=0;s<t;s++)i.push(yu[s],n[yu[s]]);return i.t=e,i},uM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Su={left:0,top:0},xg=function(e,t,n,i,s,o,a,l,c,u,f,h,d,p){Vn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?_u("0"+e.substr(3),n):0));var _=d?d.time():0,m,g,x;if(d&&d.seek(0),isNaN(e)||(e=+e),fl(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&vu(a,n,i,!0);else{Vn(t)&&(t=t(l));var M=(e||"0").split(" "),y,E,R,A;x=ti(t,l)||Et,y=Br(x)||{},(!y||!y.left&&!y.top)&&Ni(x).display==="none"&&(A=x.style.display,x.style.display="block",y=Br(x),A?x.style.display=A:x.style.removeProperty("display")),E=_u(M[0],y[i.d]),R=_u(M[1]||"0",n),e=y[i.p]-c[i.p]-u+E+s-R,a&&vu(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var v=e+n,S=o._isStart;m="scroll"+i.d2,vu(o,v,i,S&&v>20||!S&&(f?Math.max(Et[m],gi[m]):o.parentNode[m])<=v+1),f&&(c=Br(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+pn))}return d&&x&&(m=Br(x),d.seek(h),g=Br(x),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},hM=/(webkit|moz|length|cssText|inset)/i,yg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Et){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!hM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},qv=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Dc=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},Sg=function(e,t){var n=Is(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,p={};c=c||n();var _=qv(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&Yr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Pe.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",n.wheelHandler),at.isTouch&&bn(e,"touchmove",n.wheelHandler),s},at=(function(){function r(t,n){ia||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ul){this.update=this.refresh=this.kill=lr;return}n=pg(pi(n)||fl(n)||n.nodeType?{trigger:n}:n,Pc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,M=s.once,y=s.snap,E=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,S=s.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Qn:gn,P=!f&&f!==0,L=ti(n.scroller||ht),U=Pe.core.getCache(L),F=To(L),k=("pinType"in n?n.pinType:As(L,"pinType")||F&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Pc.markers,X=F?0:parseFloat(Ni(L)["border"+I.p2+wa])||0,N=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(N)},ne=tM(L,F,I),Se=nM(L,F),Ve=0,Je=0,Q=0,ie=Is(L,I),le,Be,ke,Ie,_t,we,Ye,tt,qe,j,V,St,lt,je,Me,D,b,G,ee,te,K,xe,ue,De,be,oe,ce,Te,Ae,pe,Ke,B,he,ae,me,re,J,Ee,He;if(N._startClamp=N._endClamp=!1,N._dir=I,m*=45,N.scroller=L,N.scroll=A?A.time.bind(A):ie,Ie=ie(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(Pv=1,n.refreshPriority===-9999&&(Nl=N)),U.tweenScroll=U.tweenScroll||{top:Sg(L,gn),left:Sg(L,Qn)},N.tweenTo=le=U.tweenScroll[I.p],N.scrubDuration=function(_e){he=fl(_e)&&_e,he?B?B.duration(_e):B=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return g&&g(N)}}):(B&&B.progress(1).kill(),B=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(f),pe=0,l||(l=i.vars.id)),y&&((!$s(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Et.style&&Pe.set(F?[Et,gi]:L,{scrollBehavior:"auto"}),ft.forEach(function(_e){return Vn(_e)&&_e.target===(F?Ft.scrollingElement||gi:L)&&(_e.smooth=!1)}),ke=Vn(y.snapTo)?y.snapTo:y.snapTo==="labels"?rM(i):y.snapTo==="labelsDirectional"?sM(i):y.directional!==!1?function(_e,Ze){return Xp(y.snapTo)(_e,kn()-Je<500?0:Ze.direction)}:Pe.utils.snap(y.snapTo),ae=y.duration||{min:.1,max:2},ae=$s(ae)?Rl(ae.min,ae.max):Rl(ae,ae),me=Pe.delayedCall(y.delay||he/2||.1,function(){var _e=ie(),Ze=kn()-Je<500,We=le.tween;if((Ze||Math.abs(N.getVelocity())<10)&&!We&&!fh&&Ve!==_e){var Qe=(_e-we)/je,Qt=i&&!P?i.totalProgress():Qe,et=Ze?0:(Qt-Ke)/(kn()-cl)*1e3||0,kt=Pe.utils.clamp(-Qe,1-Qe,Bo(et/2)*et/.185),hn=Qe+(y.inertia===!1?0:kt),zt,wt,Mt=y,In=Mt.onStart,Ut=Mt.onInterrupt,Dn=Mt.onComplete;if(zt=ke(hn,N),fl(zt)||(zt=hn),wt=Math.max(0,Math.round(we+zt*je)),_e<=Ye&&_e>=we&&wt!==_e){if(We&&!We._initted&&We.data<=Bo(wt-_e))return;y.inertia===!1&&(kt=zt-Qe),le(wt,{duration:ae(Bo(Math.max(Bo(hn-Qt),Bo(zt-Qt))*.185/et/.05||0)),ease:y.ease||"power3",data:Bo(wt-_e),onInterrupt:function(){return me.restart(!0)&&Ut&&Ut(N)},onComplete:function(){N.update(),Ve=ie(),i&&!P&&(B?B.resetTo("totalProgress",zt,i._tTime/i._tDur):i.progress(zt)),pe=Ke=i&&!P?i.totalProgress():N.progress,x&&x(N),Dn&&Dn(N)}},_e,kt*je,wt-_e-kt*je),In&&In(N,le.tween)}}else N.isActive&&Ve!==_e&&me.restart(!0)}).pause()),l&&(gd[l]=N),h=N.trigger=ti(h||d!==!0&&d),He=h&&h._gsap&&h._gsap.stRevert,He&&(He=He(N)),d=d===!0?h:ti(d),pi(a)&&(a={targets:h,className:a}),d&&(p===!1||p===Di||(p=!p&&d.parentNode&&d.parentNode.style&&Ni(d.parentNode).display==="flex"?!1:an),N.pin=d,Be=Pe.core.getCache(d),Be.spacer?Me=Be.pinState:(R&&(R=ti(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Be.spacerIsNative=!!R,R&&(Be.spacerState=Ic(R))),Be.spacer=G=R||Ft.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),Be.pinState=Me=Ic(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),N.spacer=G=Be.spacer,Ae=Ni(d),De=Ae[p+I.os2],te=Pe.getProperty(d),K=Pe.quickSetter(d,I.a,pn),qh(d,G,Ae),b=Ic(d)),Z){St=$s(Z)?pg(Z,mg):mg,j=Lc("scroller-start",l,L,I,St,0),V=Lc("scroller-end",l,L,I,St,0,j),ee=j["offset"+I.op.d2];var xt=ti(As(L,"content")||L);tt=this.markerStart=Lc("start",l,xt,I,St,ee,0,A),qe=this.markerEnd=Lc("end",l,xt,I,St,ee,0,A),A&&(Ee=Pe.quickSetter([tt,qe],I.a,pn)),!k&&!(vr.length&&As(L,"fixedMarkers")===!0)&&(iM(F?Et:L),Pe.set([j,V],{force3D:!0}),oe=Pe.quickSetter(j,I.a,pn),Te=Pe.quickSetter(V,I.a,pn))}if(A){var ye=A.vars.onUpdate,Fe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),ye&&ye.apply(A,Fe||[])})}if(N.previous=function(){return ut[ut.indexOf(N)-1]},N.next=function(){return ut[ut.indexOf(N)+1]},N.revert=function(_e,Ze){if(!Ze)return N.kill(!0);var We=_e!==!1||!N.enabled,Qe=On;We!==N.isReverted&&(We&&(re=Math.max(ie(),N.scroll.rec||0),Q=N.progress,J=i&&i.progress()),tt&&[tt,qe,j,V].forEach(function(Qt){return Qt.style.display=We?"none":"block"}),We&&(On=N,N.update(We)),d&&(!E||!N.isActive)&&(We?lM(d,G,Me):qh(d,G,Ni(d),be)),We||N.update(We),On=Qe,N.isReverted=We)},N.refresh=function(_e,Ze,We,Qe){if(!((On||!N.enabled)&&!Ze)){if(d&&_e&&Hi){bn(r,"scrollEnd",Vv);return}!Zn&&se&&se(N),On=N,le.tween&&!We&&(le.tween.kill(),le.tween=0),B&&B.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Qt=ne(),et=Se(),kt=A?A.duration():mr(L,I),hn=je<=.01||!je,zt=0,wt=Qe||0,Mt=$s(We)?We.end:n.end,In=n.endTrigger||h,Ut=$s(We)?We.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Dn=N.pinnedContainer=n.pinnedContainer&&ti(n.pinnedContainer,N),Ci=h&&Math.max(0,ut.indexOf(N))||0,fn=Ci,dn,xn,wr,Lo,C,H,$,Y,q,fe,ge,de,Ce;for(Z&&$s(We)&&(de=Pe.getProperty(j,I.p),Ce=Pe.getProperty(V,I.p));fn-- >0;)H=ut[fn],H.end||H.refresh(0,1)||(On=N),$=H.pin,$&&($===h||$===d||$===Dn)&&!H.isReverted&&(fe||(fe=[]),fe.unshift(H),H.revert(!0,!0)),H!==ut[fn]&&(Ci--,fn--);for(Vn(Ut)&&(Ut=Ut(N)),Ut=ug(Ut,"start",N),we=xg(Ut,h,Qt,I,ie(),tt,j,N,et,X,k,kt,A,N._startClamp&&"_startClamp")||(d?-.001:0),Vn(Mt)&&(Mt=Mt(N)),pi(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(pi(Ut)?Ut.split(" ")[0]:"")+Mt:(zt=_u(Mt.substr(2),Qt),Mt=pi(Ut)?Ut:(A?Pe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,we):we)+zt,In=h)),Mt=ug(Mt,"end",N),Ye=Math.max(we,xg(Mt||(In?"100% 0":kt),In,Qt,I,ie()+zt,qe,V,N,et,X,k,kt,A,N._endClamp&&"_endClamp"))||-.001,zt=0,fn=Ci;fn--;)H=ut[fn]||{},$=H.pin,$&&H.start-H._pinPush<=we&&!A&&H.end>0&&(dn=H.end-(N._startClamp?Math.max(0,H.start):H.start),($===h&&H.start-H._pinPush<we||$===Dn)&&isNaN(Ut)&&(zt+=dn*(1-H.progress)),$===d&&(wt+=dn));if(we+=zt,Ye+=zt,N._startClamp&&(N._startClamp+=zt),N._endClamp&&!Zn&&(N._endClamp=Ye||-.001,Ye=Math.min(Ye,mr(L,I))),je=Ye-we||(we-=.01)&&.001,hn&&(Q=Pe.utils.clamp(0,1,Pe.utils.normalize(we,Ye,re))),N._pinPush=wt,tt&&zt&&(dn={},dn[I.a]="+="+zt,Dn&&(dn[I.p]="-="+ie()),Pe.set([tt,qe],dn)),d&&!(md&&N.end>=mr(L,I)))dn=Ni(d),Lo=I===gn,wr=ie(),xe=parseFloat(te(I.a))+wt,!kt&&Ye>1&&(ge=(F?Ft.scrollingElement||gi:L).style,ge={style:ge,value:ge["overflow"+I.a.toUpperCase()]},F&&Ni(Et)["overflow"+I.a.toUpperCase()]!=="scroll"&&(ge.style["overflow"+I.a.toUpperCase()]="scroll")),qh(d,G,dn),b=Ic(d),xn=Br(d,!0),Y=k&&Is(L,Lo?Qn:gn)(),p?(be=[p+I.os2,je+wt+pn],be.t=G,fn=p===an?Hu(d,I)+je+wt:0,fn&&(be.push(I.d,fn+pn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=fn+pn)),pa(be),Dn&&ut.forEach(function(Re){Re.pin===Dn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),k&&ie(re)):(fn=Hu(d,I),fn&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=fn+pn)),k&&(C={top:xn.top+(Lo?wr-we:Y)+pn,left:xn.left+(Lo?Y:wr-we)+pn,boxSizing:"border-box",position:"fixed"},C[vo]=C["max"+wa]=Math.ceil(xn.width)+pn,C[xo]=C["max"+Wp]=Math.ceil(xn.height)+pn,C[Di]=C[Di+Il]=C[Di+Pl]=C[Di+Dl]=C[Di+Ll]="0",C[an]=dn[an],C[an+Il]=dn[an+Il],C[an+Pl]=dn[an+Pl],C[an+Dl]=dn[an+Dl],C[an+Ll]=dn[an+Ll],D=uM(Me,C,E),Zn&&ie(0)),i?(q=i._initted,Vh(1),i.render(i.duration(),!0,!0),ue=te(I.a)-xe+je+wt,ce=Math.abs(je-ue)>1,k&&ce&&D.splice(D.length-2,2),i.render(0,!0,!0),q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vh(0)):ue=je,ge&&(ge.value?ge.style["overflow"+I.a.toUpperCase()]=ge.value:ge.style.removeProperty("overflow-"+I.a));else if(h&&ie()&&!A)for(xn=h.parentNode;xn&&xn!==Et;)xn._pinOffset&&(we-=xn._pinOffset,Ye-=xn._pinOffset),xn=xn.parentNode;fe&&fe.forEach(function(Re){return Re.revert(!1,!0)}),N.start=we,N.end=Ye,Ie=_t=Zn?re:ie(),!A&&!Zn&&(Ie<re&&ie(re),N.scroll.rec=0),N.revert(!1,!0),Je=kn(),me&&(Ve=-1,me.restart(!0)),On=0,i&&P&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(hn||Q!==N.progress||A||_||i&&!i._initted)&&(i&&!P&&(i._initted||Q||i.vars.immediateRender!==!1)&&i.totalProgress(A&&we<-.001&&!Q?Pe.utils.normalize(we,Ye,0):Q,!0),N.progress=hn||(Ie-we)/je===Q?0:Q),d&&p&&(G._pinOffset=Math.round(N.progress*ue)),B&&B.invalidate(),isNaN(de)||(de-=Pe.getProperty(j,I.p),Ce-=Pe.getProperty(V,I.p),Dc(j,I,de),Dc(tt,I,de-(Qe||0)),Dc(V,I,Ce),Dc(qe,I,Ce-(Qe||0))),hn&&!Zn&&N.update(),u&&!Zn&&!lt&&(lt=!0,u(N),lt=!1)}},N.getVelocity=function(){return(ie()-_t)/(kn()-cl)*1e3||0},N.endAnimation=function(){$a(N.callbackAnimation),i&&(B?B.progress(1):i.paused()?P||$a(i,N.direction<0,1):$a(i,i.reversed()))},N.labelToScroll=function(_e){return i&&i.labels&&(we||N.refresh()||we)+i.labels[_e]/i.duration()*je||0},N.getTrailing=function(_e){var Ze=ut.indexOf(N),We=N.direction>0?ut.slice(0,Ze).reverse():ut.slice(Ze+1);return(pi(_e)?We.filter(function(Qe){return Qe.vars.preventOverlaps===_e}):We).filter(function(Qe){return N.direction>0?Qe.end<=we:Qe.start>=Ye})},N.update=function(_e,Ze,We){if(!(A&&!We&&!_e)){var Qe=Zn===!0?re:N.scroll(),Qt=_e?0:(Qe-we)/je,et=Qt<0?0:Qt>1?1:Qt||0,kt=N.progress,hn,zt,wt,Mt,In,Ut,Dn,Ci;if(Ze&&(_t=Ie,Ie=A?ie():Qe,y&&(Ke=pe,pe=i&&!P?i.totalProgress():et)),m&&d&&!On&&!wc&&Hi&&(!et&&we<Qe+(Qe-_t)/(kn()-cl)*m?et=1e-4:et===1&&Ye>Qe+(Qe-_t)/(kn()-cl)*m&&(et=.9999)),et!==kt&&N.enabled){if(hn=N.isActive=!!et&&et<1,zt=!!kt&&kt<1,Ut=hn!==zt,In=Ut||!!et!=!!kt,N.direction=et>kt?1:-1,N.progress=et,In&&!On&&(wt=et&&!kt?0:et===1?1:kt===1?2:3,P&&(Mt=!Ut&&O[wt+1]!=="none"&&O[wt+1]||O[wt],Ci=i&&(Mt==="complete"||Mt==="reset"||Mt in i))),S&&(Ut||Ci)&&(Ci||f||!i)&&(Vn(S)?S(N):N.getTrailing(S).forEach(function(wr){return wr.endAnimation()})),P||(B&&!On&&!wc?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",et,i._tTime/i._tDur):(B.vars.totalProgress=et,B.invalidate().restart())):i&&i.totalProgress(et,!!(On&&(Je||_e)))),d){if(_e&&p&&(G.style[p+I.os2]=De),!k)K(hl(xe+ue*et));else if(In){if(Dn=!_e&&et>kt&&Ye+1>Qe&&Qe+1>=mr(L,I),E)if(!_e&&(hn||Dn)){var fn=Br(d,!0),dn=Qe-we;yg(d,Et,fn.top+(I===gn?dn:0)+pn,fn.left+(I===gn?0:dn)+pn)}else yg(d,G);pa(hn||Dn?D:b),ce&&et<1&&hn||K(xe+(et===1&&!Dn?ue:0))}}y&&!le.tween&&!On&&!wc&&me.restart(!0),a&&(Ut||M&&et&&(et<1||!Gh))&&tc(a.targets).forEach(function(wr){return wr.classList[hn||M?"add":"remove"](a.className)}),o&&!P&&!_e&&o(N),In&&!On?(P&&(Ci&&(Mt==="complete"?i.pause().totalProgress(1):Mt==="reset"?i.restart(!0).pause():Mt==="restart"?i.restart(!0):i[Mt]()),o&&o(N)),(Ut||!Gh)&&(c&&Ut&&Wh(N,c),z[wt]&&Wh(N,z[wt]),M&&(et===1?N.kill(!1,1):z[wt]=0),Ut||(wt=et===1?1:3,z[wt]&&Wh(N,z[wt]))),v&&!hn&&Math.abs(N.getVelocity())>(fl(v)?v:2500)&&($a(N.callbackAnimation),B?B.progress(1):$a(i,Mt==="reverse"?1:!et,1))):P&&o&&!On&&o(N)}if(Te){var xn=A?Qe/A.duration()*(A._caScrollDist||0):Qe;oe(xn+(j._isFlipped?1:0)),Te(xn)}Ee&&Ee(-Qe/A.duration()*(A._caScrollDist||0))}},N.enable=function(_e,Ze){N.enabled||(N.enabled=!0,bn(L,"resize",dl),F||bn(L,"scroll",ko),se&&bn(r,"refreshInit",se),_e!==!1&&(N.progress=Q=0,Ie=_t=Ve=ie()),Ze!==!1&&N.refresh())},N.getTween=function(_e){return _e&&le?le.tween:B},N.setPositions=function(_e,Ze,We,Qe){if(A){var Qt=A.scrollTrigger,et=A.duration(),kt=Qt.end-Qt.start;_e=Qt.start+kt*_e/et,Ze=Qt.start+kt*Ze/et}N.refresh(!1,!1,{start:hg(_e,We&&!!N._startClamp),end:hg(Ze,We&&!!N._endClamp)},Qe),N.update()},N.adjustPinSpacing=function(_e){if(be&&_e){var Ze=be.indexOf(I.d)+1;be[Ze]=parseFloat(be[Ze])+_e+pn,be[1]=parseFloat(be[1])+_e+pn,pa(be)}},N.disable=function(_e,Ze){if(_e!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ze||B&&B.pause(),re=0,Be&&(Be.uncache=1),se&&Mn(r,"refreshInit",se),me&&(me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!F)){for(var We=ut.length;We--;)if(ut[We].scroller===L&&ut[We]!==N)return;Mn(L,"resize",dl),F||Mn(L,"scroll",ko)}},N.kill=function(_e,Ze){N.disable(_e,Ze),B&&!Ze&&B.kill(),l&&delete gd[l];var We=ut.indexOf(N);We>=0&&ut.splice(We,1),We===Kn&&xu>0&&Kn--,We=0,ut.forEach(function(Qe){return Qe.scroller===N.scroller&&(We=1)}),We||Zn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Ze||i.kill()),tt&&[tt,qe,j,V].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Nl===N&&(Nl=0),d&&(Be&&(Be.uncache=1),We=0,ut.forEach(function(Qe){return Qe.pin===d&&We++}),We||(Be.spacer=0)),n.onKill&&n.onKill(N)},ut.push(N),N.enable(!1,!1),He&&He(N),i&&i.add&&!je){var it=N.update;N.update=function(){N.update=it,ft.cache++,we||Ye||N.refresh()},Pe.delayedCall(.01,N.update),je=.01,we=Ye=0}else N.refresh();d&&aM()},r.register=function(n){return ia||(Pe=n||Uv(),Nv()&&window.document&&r.enable(),ia=ul),ia},r.defaults=function(n){if(n)for(var i in n)Pc[i]=n[i];return Pc},r.disable=function(n,i){ul=0,ut.forEach(function(o){return o[i?"kill":"disable"](n)}),Mn(ht,"wheel",ko),Mn(Ft,"scroll",ko),clearInterval(Ec),Mn(Ft,"touchcancel",lr),Mn(Et,"touchstart",lr),Rc(Mn,Ft,"pointerdown,touchstart,mousedown",fg),Rc(Mn,Ft,"pointerup,touchend,mouseup",dg),Gu.kill(),Ac(Mn);for(var s=0;s<ft.length;s+=3)Cc(Mn,ft[s],ft[s+1]),Cc(Mn,ft[s],ft[s+2])},r.enable=function(){if(ht=window,Ft=document,gi=Ft.documentElement,Et=Ft.body,Pe&&(tc=Pe.utils.toArray,Rl=Pe.utils.clamp,pd=Pe.core.context||lr,Vh=Pe.core.suppressOverwrites||lr,zp=ht.history.scrollRestoration||"auto",_d=ht.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),Et)){ul=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",Xv(),eM(),nn.register(Pe),r.isTouch=nn.isTouch,fs=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dd=nn.isTouch===1,bn(ht,"wheel",ko),kp=[ht,Ft,gi,Et],Pe.matchMedia?(r.matchMedia=function(c){var u=Pe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Pe.addEventListener("matchMediaInit",function(){Hv(),qp()}),Pe.addEventListener("matchMediaRevert",function(){return Gv()}),Pe.addEventListener("matchMedia",function(){so(0,1),wo("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Xh(),Xh})):console.warn("Requires GSAP 3.11.0 or later"),Xh(),bn(Ft,"scroll",ko);var n=Et.hasAttribute("style"),i=Et.style,s=i.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Br(Et),gn.m=Math.round(a.top+gn.sc())||0,Qn.m=Math.round(a.left+Qn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),Ec=setInterval(gg,250),Pe.delayedCall(.5,function(){return wc=0}),bn(Ft,"touchcancel",lr),bn(Et,"touchstart",lr),Rc(bn,Ft,"pointerdown,touchstart,mousedown",fg),Rc(bn,Ft,"pointerup,touchend,mouseup",dg),fd=Pe.utils.checkPrefix("transform"),yu.push(fd),ia=kn(),Gu=Pe.delayedCall(.2,so).pause(),ra=[Ft,"visibilitychange",function(){var c=ht.innerWidth,u=ht.innerHeight;Ft.hidden?(lg=c,cg=u):(lg!==c||cg!==u)&&dl()},Ft,"DOMContentLoaded",so,ht,"load",so,ht,"resize",dl],Ac(bn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)Cc(Mn,ft[l],ft[l+1]),Cc(Mn,ft[l],ft[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Gh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ec)||(Ec=i)&&setInterval(gg,i),"ignoreMobileResize"in n&&(dd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ac(Mn)||Ac(bn,n.autoRefreshEvents||"none"),Lv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=ti(n),o=ft.indexOf(s),a=To(s);~o&&ft.splice(o,a?6:2),i&&(a?vr.unshift(ht,i,Et,i,gi,i):vr.unshift(s,i))},r.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?ti(n):n).getBoundingClientRect(),a=o[s?vo:xo]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=ti(n));var o=n.getBoundingClientRect(),a=o[s?vo:xo],l=i==null?a/2:i in Wu?Wu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Eo.killAll||[];Eo={},i.forEach(function(s){return s()})}},r})();at.version="3.14.2";at.saveStyles=function(r){return r?tc(r).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),pd())}}):di};at.revert=function(r,e){return qp(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?dl(!0):(ia||at.register())&&so(!0)};at.update=function(r){return++ft.cache&&Yr(r===!0?2:0)};at.clearScrollMemory=Wv;at.maxScroll=function(r,e){return mr(r,e?Qn:gn)};at.getScrollFunc=function(r,e){return Is(ti(r),e?Qn:gn)};at.getById=function(r){return gd[r]};at.getAll=function(){return ut.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Hi};at.snapDirectional=Xp;at.addEventListener=function(r,e){var t=Eo[r]||(Eo[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=Eo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Pe.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),bn(at,"refresh",function(){return s=e.batchMax()})),tc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var Mg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Yh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===gi&&r(Et,t)},Nc={auto:1,scroll:1},fM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Nc[(l=Ni(s)).overflowY]||Nc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!To(s)&&(Nc[(l=Ni(s)).overflowY]||Nc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Yv=function(e,t,n,i){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&fM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&bn(Ft,nn.eventTypes[0],Tg,!1,!0)},onDisable:function(){return Mn(Ft,nn.eventTypes[0],Tg,!0)}})},dM=/(input|label|select|textarea)/i,bg,Tg=function(e){var t=dM.test(e.target.tagName);(t||bg)&&(e._gsapAllow=!0,bg=t)},pM=function(e){$s(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ti(e.target)||gi,u=Pe.core.globals().ScrollSmoother,f=u&&u.get(),h=fs&&(e.content&&ti(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Is(c,gn),p=Is(c,Qn),_=1,m=(nn.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,g=0,x=Vn(i)?function(){return i(a)}:function(){return i||2.8},M,y,E=Yv(c,e.type,!0,s),R=function(){return y=!1},A=lr,v=lr,S=function(){l=mr(c,gn),v=Rl(fs?1:0,l),n&&(A=Rl(0,mr(c,Qn))),M=yo},I=function(){h._gsap.y=hl(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(R);var Z=hl(a.deltaY/2),X=v(d.v-Z);if(h&&X!==d.v+d.offset){d.offset=X-d.v;var N=hl((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px",d.cacheID=ft.cache,Yr()}return!0}d.offset&&I(),y=!0},L,U,F,k,z=function(){S(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return h&&Pe.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return fs&&O.type==="touchmove"&&P()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=hl((ht.visualViewport&&ht.visualViewport.scale||1)/m),L.pause(),O!==_&&Yh(c,_>1.01?!0:n?!1:"x"),U=p(),F=d(),S(),M=yo},e.onRelease=e.onGestureStart=function(O,Z){if(d.offset&&I(),!Z)k.restart(!0);else{ft.cache++;var X=x(),N,se;n&&(N=p(),se=N+X*.05*-O.velocityX/.227,X*=Mg(p,N,se,mr(c,Qn)),L.vars.scrollX=A(se)),N=d(),se=N+X*.05*-O.velocityY/.227,X*=Mg(d,N,se,mr(c,gn)),L.vars.scrollY=v(se),L.invalidate().duration(X).play(.01),(fs&&L.vars.scrollY>=l||N>=l-1)&&Pe.to({},{onUpdate:z,duration:X})}o&&o(O)},e.onWheel=function(){L._ts&&L.pause(),kn()-g>1e3&&(M=0,g=kn())},e.onChange=function(O,Z,X,N,se){if(yo!==M&&S(),Z&&n&&p(A(N[2]===Z?U+(O.startX-O.x):p()+Z-N[1])),X){d.offset&&I();var ne=se[2]===X,Se=ne?F+O.startY-O.y:d()+X-se[1],Ve=v(Se);ne&&Se!==Ve&&(F+=Ve-Se),d(Ve)}(X||Z)&&Yr()},e.onEnable=function(){Yh(c,n?!1:"x"),at.addEventListener("refresh",z),bn(ht,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){Yh(c,!0),Mn(ht,"resize",z),at.removeEventListener("refresh",z),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=fs,fs&&!d()&&d(1),fs&&Pe.ticker.add(lr),k=a._dc,L=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qv(d,d(),function(){return L.pause()})},onUpdate:Yr,onComplete:k.vars.onComplete}),a};at.sort=function(r){if(Vn(r))return ut.sort(r);var e=ht.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ut.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new nn(r)};at.normalizeScroll=function(r){if(typeof r>"u")return $n;if(r===!0&&$n)return $n.enable();if(r===!1){$n&&$n.kill(),$n=r;return}var e=r instanceof nn?r:pM(r);return $n&&$n.target===e.target&&$n.kill(),To(e.target)&&($n=e),e};at.core={_getVelocityProp:hd,_inputObserver:Yv,_scrollers:ft,_proxies:vr,bridge:{ss:function(){Hi||wo("scrollStart"),Hi=kn()},ref:function(){return On}}};Uv()&&Pe.registerPlugin(at);Le.registerPlugin(at);let kr=null,Ul=null;function mM(){return kr||(kr=new $S({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8}),Ul=r=>{kr.raf(r*1e3),at.update()},Le.ticker.add(Ul),Le.ticker.lagSmoothing(500,33),kr)}function gM(){kr&&(Ul&&(Le.ticker.remove(Ul),Ul=null),kr.destroy(),kr=null)}function Xu(){return kr}Le.registerPlugin(Ls);let Fl=!1,Ji=!1,_i=null,Eg=!1,wg=null,Ag=null;const jh=new Map,_M=new WeakMap;function vM(r){if(jh.has(r))return jh.get(r);const e=new Ls(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),jh.set(r,e),e}function xM(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ji=!0,r.forEach(i=>{i.style.pointerEvents="all"}),_i&&(_i.style.pointerEvents="all"),Le.to(_i,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),Xu()&&Xu().stop(),r.length?Le.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Ji=!1}}):Ji=!1,t.forEach(i=>{Le.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=vM(s);Le.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),Fl=!0}function $h(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ji=!0,r.forEach(n=>{n.style.pointerEvents="none"}),_i&&(_i.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),Xu()&&Xu().start(),r.length?Le.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{Le.set(t,{opacity:0,transform:"translateY(100%)"}),_i?Le.to(_i,{autoAlpha:0,duration:.25,onComplete:()=>{Ji=!1}}):Ji=!1}}):Ji=!1,Fl=!1}function yM(){if(Eg)return;Eg=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".receipt-close");_i=document.querySelector(".menu-wrap"),_i&&(_i.style.pointerEvents="none",Le.set(_i,{autoAlpha:0}),wg=s=>{s.target===_i&&Fl&&!Ji&&$h()},_i.addEventListener("click",wg)),r&&(Ag=s=>{s.preventDefault(),Ji&&(Le.killTweensOf([...e,...t]),Ji=!1),Fl?$h():xM()},r.addEventListener("click",Ag)),n.forEach(s=>{const o=a=>{a.preventDefault(),Fl&&!Ji&&$h()};s.addEventListener("click",o),_M.set(s,o)});const i=document.getElementById("receipt-datetime");if(i){const s=new Date,a=["SUN","MON","TUE","WED","THU","FRI","SAT"][s.getDay()],l=String(s.getDate()).padStart(2,"0"),c=String(s.getMonth()+1).padStart(2,"0"),u=String(s.getFullYear()).slice(-2);let f=s.getHours();const h=f>=12?"PM":"AM";f=f%12||12;const d=String(f).padStart(2,"0"),p=String(s.getMinutes()).padStart(2,"0"),_=String(s.getSeconds()).padStart(2,"0");i.textContent=`${a} ${l}/${c}/${u} ${d}:${p}:${_} ${h}`}}const dh="183",SM=0,Rg=1,MM=2,bM=0,So=1,TM=2,pl=3,Mr=0,oi=1,Fi=2,xr=0,Mo=1,ic=2,Cg=3,Pg=4,EM=5,Js=100,wM=101,AM=102,RM=103,CM=104,PM=200,LM=201,IM=202,DM=203,xd=204,yd=205,NM=206,UM=207,FM=208,OM=209,BM=210,kM=211,zM=212,VM=213,GM=214,Sd=0,Md=1,bd=2,Aa=3,Td=4,Ed=5,wd=6,Ad=7,jv=0,HM=1,WM=2,yr=0,Yp=1,jp=2,$p=3,xc=4,Kp=5,Zp=6,Jp=7,Lg="attached",XM="detached",$v=300,Ao=301,Ra=302,Kh=303,Zh=304,ph=306,Ca=1e3,Gn=1001,qu=1002,En=1003,Kv=1004,ml=1005,Bt=1006,Mu=1007,bi=1008,yi=1009,Zv=1010,Jv=1011,rc=1012,Qp=1013,br=1014,ei=1015,Pn=1016,em=1017,tm=1018,sc=1020,Qv=35902,ex=35899,tx=1021,nx=1022,Vi=1023,Qr=1026,oo=1027,nm=1028,im=1029,Pa=1030,rm=1031,sm=1033,bu=33776,Tu=33777,Eu=33778,wu=33779,Rd=35840,Cd=35841,Pd=35842,Ld=35843,Id=36196,Dd=37492,Nd=37496,Ud=37488,Fd=37489,Od=37490,Bd=37491,kd=37808,zd=37809,Vd=37810,Gd=37811,Hd=37812,Wd=37813,Xd=37814,qd=37815,Yd=37816,jd=37817,$d=37818,Kd=37819,Zd=37820,Jd=37821,Qd=36492,ep=36494,tp=36495,np=36283,ip=36284,rp=36285,sp=36286,oc=2300,ac=2301,Jh=2302,Ig=2303,Dg=2400,Ng=2401,Ug=2402,qM=2500,YM=0,ix=1,op=2,jM=3200,rx=0,$M=1,_s="",Kt="srgb",La="srgb-linear",Yu="linear",Tt="srgb",zo=7680,Fg=519,KM=512,ZM=513,JM=514,om=515,QM=516,eb=517,am=518,tb=519,ap=35044,Og="300 es",gr=2e3,lc=2001;function nb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ib(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function cc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rb(){const r=cc("canvas");return r.style.display="block",r}const Bg={};function ju(...r){const e="THREE."+r.shift();console.log(e,...r)}function sx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=sx(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function $e(...r){r=sx(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function $u(...r){const e=r.join(" ");e in Bg||(Bg[e]=!0,ze(...r))}function sb(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ob={[Sd]:Md,[bd]:wd,[Td]:Ad,[Aa]:Ed,[Md]:Sd,[wd]:bd,[Ad]:Td,[Ed]:Aa};class Ba{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const Ol=Math.PI/180,Ia=180/Math.PI;function Qi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function lm(r,e){return(r%e+e)%e}function ab(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function lb(r,e,t){return r!==e?(t-r)/(e-r):0}function Bl(r,e,t){return(1-t)*r+t*e}function cb(r,e,t,n){return Bl(r,e,1-Math.exp(-t*n))}function ub(r,e=1){return e-Math.abs(lm(r,e*2)-e)}function hb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function fb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function db(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pb(r,e){return r+Math.random()*(e-r)}function mb(r){return r*(.5-Math.random())}function gb(r){r!==void 0&&(kg=r);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _b(r){return r*Ol}function vb(r){return r*Ia}function xb(r){return(r&r-1)===0&&r!==0}function yb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Sb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bo={DEG2RAD:Ol,RAD2DEG:Ia,generateUUID:Qi,clamp:dt,euclideanModulo:lm,mapLinear:ab,inverseLerp:lb,lerp:Bl,damp:cb,pingpong:ub,smoothstep:hb,smootherstep:fb,randInt:db,randFloat:pb,randFloatSpread:mb,seededRandom:gb,degToRad:_b,radToDeg:vb,isPowerOfTwo:xb,ceilPowerOfTwo:yb,floorPowerOfTwo:Sb,setQuaternionFromProperEuler:Mb,normalize:At,denormalize:Ki};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qh=new W,zg=new es;class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],M=i[4],y=i[7],E=i[2],R=i[5],A=i[8];return s[0]=o*_+a*x+l*E,s[3]=o*m+a*M+l*R,s[6]=o*g+a*y+l*A,s[1]=c*_+u*x+f*E,s[4]=c*m+u*M+f*R,s[7]=c*g+u*y+f*A,s[2]=h*_+d*x+p*E,s[5]=h*m+d*M+p*R,s[8]=h*g+d*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ef.makeScale(e,t)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new rt,Vg=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bb(){const r={enabled:!0,workingColorSpace:La,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=ma(i.r),i.g=ma(i.g),i.b=ma(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_s?Yu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $u("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $u("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[La]:{primaries:e,whitePoint:n,transfer:Yu,toXYZ:Vg,fromXYZ:Gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Vg,fromXYZ:Gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}const vt=bb();function jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vo;class Tb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vo===void 0&&(Vo=cc("canvas")),Vo.width=e.width,Vo.height=e.height;const i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eb=0;class cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(tf(i[o].image)):s.push(tf(i[o]))}else s=tf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let wb=0;const nf=new W;class cn extends Ba{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Gn,i=Gn,s=Bt,o=bi,a=Vi,l=yi,c=cn.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Qi(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nf).x}get height(){return this.source.getSize(nf).y}get depth(){return this.source.getSize(nf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=$v;cn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,E=(g+1)/2,R=(u+h)/4,A=(f+_)/4,v=(p+m)/4;return M>y&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=R/n,s=A/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=R/i,s=v/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ab extends Ba{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new cn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cm(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Ab{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ox extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rb extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class st{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Go.setFromMatrixColumn(e,0).length(),s=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,p=a*u,_=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cb,e,Pb)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ss.crossVectors(n,ui),ss.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ss.crossVectors(n,ui)),ss.normalize(),Uc.crossVectors(ui,ss),i[0]=ss.x,i[4]=Uc.x,i[8]=ui.x,i[1]=ss.y,i[5]=Uc.y,i[9]=ui.y,i[2]=ss.z,i[6]=Uc.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],y=n[11],E=n[15],R=i[0],A=i[4],v=i[8],S=i[12],I=i[1],P=i[5],L=i[9],U=i[13],F=i[2],k=i[6],z=i[10],O=i[14],Z=i[3],X=i[7],N=i[11],se=i[15];return s[0]=o*R+a*I+l*F+c*Z,s[4]=o*A+a*P+l*k+c*X,s[8]=o*v+a*L+l*z+c*N,s[12]=o*S+a*U+l*O+c*se,s[1]=u*R+f*I+h*F+d*Z,s[5]=u*A+f*P+h*k+d*X,s[9]=u*v+f*L+h*z+d*N,s[13]=u*S+f*U+h*O+d*se,s[2]=p*R+_*I+m*F+g*Z,s[6]=p*A+_*P+m*k+g*X,s[10]=p*v+_*L+m*z+g*N,s[14]=p*S+_*U+m*O+g*se,s[3]=x*R+M*I+y*F+E*Z,s[7]=x*A+M*P+y*k+E*X,s[11]=x*v+M*L+y*z+E*N,s[15]=x*S+M*U+y*O+E*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*d-c*h,M=a*d-c*f,y=a*h-l*f,E=o*d-c*u,R=o*h-l*u,A=o*f-a*u;return t*(_*x-m*M+g*y)-n*(p*x-m*E+g*R)+i*(p*M-_*E+g*A)-s*(p*y-_*R+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*a-n*o,M=t*l-i*o,y=t*c-s*o,E=n*l-i*a,R=n*c-s*a,A=i*c-s*l,v=u*_-f*p,S=u*m-h*p,I=u*g-d*p,P=f*m-h*_,L=f*g-d*_,U=h*g-d*m,F=x*U-M*L+y*P+E*I-R*S+A*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(a*U-l*L+c*P)*k,e[1]=(i*L-n*U-s*P)*k,e[2]=(_*A-m*R+g*E)*k,e[3]=(h*R-f*A-d*E)*k,e[4]=(l*I-o*U-c*S)*k,e[5]=(t*U-i*I+s*S)*k,e[6]=(m*y-p*A-g*M)*k,e[7]=(u*A-h*y+d*M)*k,e[8]=(o*L-a*I+c*v)*k,e[9]=(n*I-t*L-s*v)*k,e[10]=(p*R-_*y+g*x)*k,e[11]=(f*y-u*R-d*x)*k,e[12]=(a*S-o*P-l*v)*k,e[13]=(t*P-n*S+i*v)*k,e[14]=(_*M-p*E-m*x)*k,e[15]=(u*E-f*M+h*x)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,p=s*f,_=o*u,m=o*f,g=a*f,x=l*c,M=l*u,y=l*f,E=n.x,R=n.y,A=n.z;return i[0]=(1-(_+g))*E,i[1]=(d+y)*E,i[2]=(p-M)*E,i[3]=0,i[4]=(d-y)*R,i[5]=(1-(h+g))*R,i[6]=(m+x)*R,i[7]=0,i[8]=(p+M)*A,i[9]=(m-x)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Go.set(i[0],i[1],i[2]).length();const a=Go.set(i[4],i[5],i[6]).length(),l=Go.set(i[8],i[9],i[10]).length();s<0&&(o=-o),qi.copy(this);const c=1/o,u=1/a,f=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=f,qi.elements[9]*=f,qi.elements[10]*=f,t.setFromRotationMatrix(qi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=gr,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===gr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===lc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=gr,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===gr)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===lc)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Go=new W,qi=new st,Cb=new W(0,0,0),Pb=new W(1,1,1),ss=new W,Uc=new W,ui=new W,Hg=new st,Wg=new es;class Tr{constructor(e=0,t=0,n=0,i=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lb=0;const Xg=new W,Ho=new es,Ar=new st,Fc=new W,Ka=new W,Ib=new W,Db=new es,qg=new W(1,0,0),Yg=new W(0,1,0),jg=new W(0,0,1),$g={type:"added"},Nb={type:"removed"},Wo={type:"childadded",child:null},rf={type:"childremoved",child:null};class Yt extends Ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new W,t=new Tr,n=new es,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(qg,e)}rotateY(e){return this.rotateOnAxis(Yg,e)}rotateZ(e){return this.rotateOnAxis(jg,e)}translateOnAxis(e,t){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qg,e)}translateY(e){return this.translateOnAxis(Yg,e)}translateZ(e){return this.translateOnAxis(jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Ka,Fc,this.up):Ar.lookAt(Fc,Ka,this.up),this.quaternion.setFromRotationMatrix(Ar),i&&(Ar.extractRotation(i.matrixWorld),Ho.setFromRotationMatrix(Ar),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nb),rf.child=e,this.dispatchEvent(rf),rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new W(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function of(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=lm(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=ax[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return vt.workingToColorSpace(Fn.copy(this),e),Math.round(dt(Fn.r*255,0,255))*65536+Math.round(dt(Fn.g*255,0,255))*256+Math.round(dt(Fn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,i=Fn.g,s=Fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Kt){vt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,n=Fn.g,i=Fn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Oc);const n=Bl(os.h,Oc.h,t),i=Bl(os.s,Oc.s,t),s=Bl(os.l,Oc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ne;Ne.NAMES=ax;class Ro{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mh extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yi=new W,Rr=new W,af=new W,Cr=new W,Xo=new W,qo=new W,Kg=new W,lf=new W,cf=new W,uf=new W,hf=new Vt,ff=new Vt,df=new Vt;class Zi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yi.subVectors(e,t),i.cross(Yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yi.subVectors(i,t),Rr.subVectors(n,t),af.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(Rr),l=Yi.dot(af),c=Rr.dot(Rr),u=Rr.dot(af),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return hf.setScalar(0),ff.setScalar(0),df.setScalar(0),hf.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,n),df.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(hf,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(df,s.z),o}static isFrontFacing(e,t,n,i){return Yi.subVectors(n,t),Rr.subVectors(e,t),Yi.cross(Rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Yi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Xo.subVectors(i,n),qo.subVectors(s,n),lf.subVectors(e,n);const l=Xo.dot(lf),c=qo.dot(lf);if(l<=0&&c<=0)return t.copy(n);cf.subVectors(e,i);const u=Xo.dot(cf),f=qo.dot(cf);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xo,o);uf.subVectors(e,s);const d=Xo.dot(uf),p=qo.dot(uf);if(p>=0&&d<=p)return t.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(qo,a);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Kg.subVectors(s,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Kg,a);const g=1/(m+_+h);return o=_*g,a=h*g,t.copy(n).addScaledVector(Xo,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bc.copy(n.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),kc.subVectors(this.max,Za),Yo.subVectors(e.a,Za),jo.subVectors(e.b,Za),$o.subVectors(e.c,Za),as.subVectors(jo,Yo),ls.subVectors($o,jo),ks.subVectors(Yo,$o);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-ks.z,ks.y,as.z,0,-as.x,ls.z,0,-ls.x,ks.z,0,-ks.x,-as.y,as.x,0,-ls.y,ls.x,0,-ks.y,ks.x,0];return!pf(t,Yo,jo,$o,kc)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,Yo,jo,$o,kc))?!1:(zc.crossVectors(as,ls),t=[zc.x,zc.y,zc.z],pf(t,Yo,jo,$o,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pr=[new W,new W,new W,new W,new W,new W,new W,new W],ji=new W,Bc=new tr,Yo=new W,jo=new W,$o=new W,as=new W,ls=new W,ks=new W,Za=new W,kc=new W,zc=new W,zs=new W;function pf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zs.fromArray(r,s);const a=i.x*Math.abs(zs.x)+i.y*Math.abs(zs.y)+i.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),u=n.dot(zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zr=Fb();function Fb(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ob(r){Math.abs(r)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),r=dt(r,-65504,65504),zr.floatView[0]=r;const e=zr.uint32View[0],t=e>>23&511;return zr.baseTable[t]+((e&8388607)>>zr.shiftTable[t])}function Bb(r){const e=r>>10;return zr.uint32View[0]=zr.mantissaTable[zr.offsetTable[e]+(r&1023)]+zr.exponentTable[e],zr.floatView[0]}class Vc{static toHalfFloat(e){return Ob(e)}static fromHalfFloat(e){return Bb(e)}}const sn=new W,Gc=new Ue;let kb=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ap,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}}class lx extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cx extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ei extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zb=new tr,Ja=new W,mf=new W;class Er{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ja,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(mf)),this.expandByPoint(Ja.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vb=0;const Pi=new st,gf=new Yt,Ko=new W,hi=new tr,Qa=new tr,Sn=new W;class Wn extends Ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nb(e)?cx:lx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ei(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(hi.min,Qa.min),hi.expandByPoint(Sn),Sn.addVectors(hi.max,Qa.max),hi.expandByPoint(Sn)):(hi.expandByPoint(Qa.min),hi.expandByPoint(Qa.max))}hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(Ko.fromBufferAttribute(e,c),Sn.add(Ko)),i=Math.max(i,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new W,l[v]=new W;const c=new W,u=new W,f=new W,h=new Ue,d=new Ue,p=new Ue,_=new W,m=new W;function g(v,S,I){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,I),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,I),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[v].add(_),a[S].add(_),a[I].add(_),l[v].add(m),l[S].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,S=x.length;v<S;++v){const I=x[v],P=I.start,L=I.count;for(let U=P,F=P+L;U<F;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new W,y=new W,E=new W,R=new W;function A(v){E.fromBufferAttribute(i,v),R.copy(E);const S=a[v];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(R,S);const P=y.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,S=x.length;v<S;++v){const I=x[v],P=I.start,L=I.count;for(let U=P,F=P+L;U<F;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new Ht(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new W;class hm{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ju("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ju("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Hb=0;class er extends Ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Mo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xd&&(n.blendSrc=this.blendSrc),this.blendDst!==yd&&(n.blendDst=this.blendDst),this.blendEquation!==Js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lr=new W,_f=new W,Hc=new W,cs=new W,vf=new W,Wc=new W,xf=new W;class yc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_f.copy(e).add(t).multiplyScalar(.5),Hc.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(_f);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hc),a=cs.dot(this.direction),l=-cs.dot(Hc),c=cs.lengthSq(),u=Math.abs(1-o*o);let f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_f).addScaledVector(Hc,h),d}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const n=Lr.dot(this.direction),i=Lr.dot(Lr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,i,s){vf.subVectors(t,e),Wc.subVectors(n,e),xf.crossVectors(vf,Wc);let o=this.direction.dot(xf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const l=a*this.direction.dot(Wc.crossVectors(cs,Wc));if(l<0)return null;const c=a*this.direction.dot(vf.cross(cs));if(c<0||l+c>o)return null;const u=-a*cs.dot(xf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wr extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zg=new st,Vs=new yc,Xc=new Er,Jg=new W,qc=new W,Yc=new W,jc=new W,yf=new W,$c=new W,Qg=new W,Kc=new W;class un extends Yt{constructor(e=new Wn,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(yf.fromBufferAttribute(f,e),o?$c.addScaledVector(yf,u):$c.addScaledVector(yf.sub(t),u))}t.add($c)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(s),Vs.copy(e.ray).recast(e.near),!(Xc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Xc,Jg)===null||Vs.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Zg.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Zg),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,E=M;y<E;y+=3){const R=a.getX(y),A=a.getX(y+1),v=a.getX(y+2);i=Zc(this,g,e,n,c,u,f,R,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Zc(this,o,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,E=M;y<E;y+=3){const R=y,A=y+1,v=y+2;i=Zc(this,g,e,n,c,u,f,R,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,M=m+1,y=m+2;i=Zc(this,o,e,n,c,u,f,x,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Wb(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mr,a),l===null)return null;Kc.copy(a),Kc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Kc);return c<t.near||c>t.far?null:{distance:c,point:Kc.clone(),object:r}}function Zc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qc),r.getVertexPosition(l,Yc),r.getVertexPosition(c,jc);const u=Wb(r,e,t,n,qc,Yc,jc,Qg);if(u){const f=new W;Zi.getBarycoord(Qg,qc,Yc,jc,f),i&&(u.uv=Zi.getInterpolatedAttribute(i,a,l,c,f,new Ue)),s&&(u.uv1=Zi.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};Zi.getNormal(qc,Yc,jc,h.normal),u.face=h,u.barycoord=f}return u}const e_=new W,t_=new Vt,n_=new Vt,Xb=new W,i_=new st,Jc=new W,Sf=new Er,r_=new st,Mf=new yc;class qb extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lg,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingBox.expandByPoint(Jc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingSphere.expandByPoint(Jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sf.copy(this.boundingSphere),Sf.applyMatrix4(i),e.ray.intersectsSphere(Sf)!==!1&&(r_.copy(i).invert(),Mf.copy(e.ray).applyMatrix4(r_),!(this.boundingBox!==null&&Mf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===XM?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;t_.fromBufferAttribute(i.attributes.skinIndex,e),n_.fromBufferAttribute(i.attributes.skinWeight,e),e_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=n_.getComponent(s);if(o!==0){const a=t_.getComponent(s);i_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Xb.copy(e_).applyMatrix4(i_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ux extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gh extends cn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=En,u=En,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s_=new st,Yb=new st;class fm{constructor(e=[],t=[]){this.uuid=Qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Yb;s_.multiplyMatrices(a,t[s]),s_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gh(t,e,e,Vi,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new ux),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class lp extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zo=new st,o_=new st,Qc=[],a_=new tr,jb=new st,el=new un,tl=new Er;class $b extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lp(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zo),a_.copy(e.boundingBox).applyMatrix4(Zo),this.boundingBox.union(a_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zo),tl.copy(e.boundingSphere).applyMatrix4(Zo),this.boundingSphere.union(tl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(n),e.ray.intersectsSphere(tl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zo),o_.multiplyMatrices(n,Zo),el.matrixWorld=o_,el.raycast(e,Qc);for(let o=0,a=Qc.length;o<a;o++){const l=Qc[o];l.instanceId=s,l.object=this,t.push(l)}Qc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(i*this.count),i,this.count,nm,ei));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bf=new W,Kb=new W,Zb=new rt;class Ks{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bf.subVectors(n,t).cross(Kb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zb.getNormalMatrix(e),i=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new Er,Jb=new Ue(.5,.5),eu=new W;class dm{constructor(e=new Ks,t=new Ks,n=new Ks,i=new Ks,s=new Ks,o=new Ks){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],x=s[12],M=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-o,d-u,g-p,E-x).normalize(),i[1].setComponents(c+o,d+u,g+p,E+x).normalize(),i[2].setComponents(c+a,d+f,g+_,E+M).normalize(),i[3].setComponents(c-a,d-f,g-_,E-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,d-h,g-m,E-y).normalize();else if(i[4].setComponents(c-l,d-h,g-m,E-y).normalize(),t===gr)i[5].setComponents(c+l,d+h,g+m,E+y).normalize();else if(t===lc)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);const t=Jb.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(eu.x=i.normal.x>0?e.max.x:e.min.x,eu.y=i.normal.y>0?e.max.y:e.min.y,eu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hx extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ku=new W,Zu=new W,l_=new st,nl=new yc,tu=new Er,Tf=new W,c_=new W;class pm extends Yt{constructor(e=new Wn,t=new hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ku.fromBufferAttribute(t,i-1),Zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ku.distanceTo(Zu);e.setAttribute("lineDistance",new Ei(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(i),tu.radius+=s,e.ray.intersectsSphere(tu)===!1)return;l_.copy(i).invert(),nl.copy(e.ray).applyMatrix4(l_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=u.getX(_),x=u.getX(_+1),M=nu(this,e,nl,l,g,x,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(d),g=nu(this,e,nl,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=nu(this,e,nl,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=nu(this,e,nl,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nu(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ku.fromBufferAttribute(a,i),Zu.fromBufferAttribute(a,s),t.distanceSqToSegment(Ku,Zu,Tf,c_)>n)return;Tf.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Tf);if(!(c<e.near||c>e.far))return{distance:c,point:c_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const u_=new W,h_=new W;class Qb extends pm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)u_.fromBufferAttribute(t,i),h_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+u_.distanceTo(h_);e.setAttribute("lineDistance",new Ei(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eT extends pm{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fx extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f_=new st,cp=new yc,iu=new Er,ru=new W;class mm extends Yt{constructor(e=new Wn,t=new fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(i),iu.radius+=s,e.ray.intersectsSphere(iu)===!1)return;f_.copy(i).invert(),cp.copy(e.ray).applyMatrix4(f_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,_=d;p<_;p++){const m=c.getX(p);ru.fromBufferAttribute(f,m),d_(ru,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,_=d;p<_;p++)ru.fromBufferAttribute(f,p),d_(ru,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function d_(r,e,t,n,i,s,o){const a=cp.distanceSqToPoint(r);if(a<t){const l=new W;cp.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dx extends cn{constructor(e=[],t=Ao,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tT extends cn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uc extends cn{constructor(e,t,n=br,i,s,o,a=En,l=En,c,u=Qr,f=1){if(u!==Qr&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nT extends uc{constructor(e,t=br,n=Ao,i,s,o=En,a=En,l,c=Qr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class px extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sc extends Wn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(f,2));function p(_,m,g,x,M,y,E,R,A,v,S){const I=y/A,P=E/v,L=y/2,U=E/2,F=R/2,k=A+1,z=v+1;let O=0,Z=0;const X=new W;for(let N=0;N<z;N++){const se=N*P-U;for(let ne=0;ne<k;ne++){const Se=ne*I-L;X[_]=Se*x,X[m]=se*M,X[g]=F,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=R>0?1:-1,u.push(X.x,X.y,X.z),f.push(ne/A),f.push(1-N/v),O+=1}}for(let N=0;N<v;N++)for(let se=0;se<A;se++){const ne=h+se+k*N,Se=h+se+k*(N+1),Ve=h+(se+1)+k*(N+1),Je=h+(se+1)+k*N;l.push(ne,Se,Je),l.push(Se,Ve,Je),Z+=6}a.addGroup(d,Z,S),d+=Z,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ts extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-o;for(let M=0;M<c;M++){const y=M*f-s;p.push(y,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const M=x+c*g,y=x+c*(g+1),E=x+1+c*(g+1),R=x+1+c*g;d.push(M,y,R),d.push(y,E,R)}this.setIndex(d),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class mx extends er{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Da(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jn(r){const e={};for(let t=0;t<r.length;t++){const n=Da(r[t]);for(const i in n)e[i]=n[i]}return e}function iT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const hc={clone:Da,merge:jn};var rT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=iT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _x extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gm extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rx,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends gm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oT extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function su(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function lT(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function p_(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function vx(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ka{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cT extends ka{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dg,endingEnd:Dg}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ng:s=e,a=2*t-n;break;case Ug:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ng:o=e,l=2*n-t;break;case Ug:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,x=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let E=0;E!==a;++E)s[E]=g*o[u+E]+x*o[c+E]+M*o[l+E]+y*o[f+E];return s}}class uT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class hT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fT extends ka{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*m+o[l+g]*_;return s}const d=a*2,p=e-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],x=p*d+_*2,M=h[x],y=h[x+1],E=e*d+_*2,R=f[E],A=f[E+1];let v=(n-t)/(i-t),S,I,P,L,U;for(let F=0;F<8;F++){S=v*v,I=S*v,P=1-v,L=P*P,U=L*P;const z=U*t+3*L*v*M+3*P*S*R+I*i-n;if(Math.abs(z)<1e-10)break;const O=3*L*(M-t)+6*P*v*(R-M)+3*S*(i-R);if(Math.abs(O)<1e-10)break;v=v-z/O,v=Math.max(0,Math.min(1,v))}s[_]=U*m+3*L*v*y+3*P*S*A+I*g}return s}}class nr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=su(t,this.TimeBufferType),this.values=su(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:su(e.times,Array),values:su(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new fT(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case oc:t=this.InterpolantFactoryMethodDiscrete;break;case ac:t=this.InterpolantFactoryMethodLinear;break;case Jh:t=this.InterpolantFactoryMethodSmooth;break;case Ig:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oc;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return Jh;case this.InterpolantFactoryMethodBezier:return Ig}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ib(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[h+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nr.prototype.ValueTypeName="";nr.prototype.TimeBufferType=Float32Array;nr.prototype.ValueBufferType=Float32Array;nr.prototype.DefaultInterpolation=ac;class za extends nr{constructor(e,t,n){super(e,t,n)}}za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=oc;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;class xx extends nr{constructor(e,t,n,i){super(e,t,n,i)}}xx.prototype.ValueTypeName="color";class Na extends nr{constructor(e,t,n,i){super(e,t,n,i)}}Na.prototype.ValueTypeName="number";class dT extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)es.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ua extends nr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dT(this.times,this.values,this.getValueSize(),e)}}Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Va extends nr{constructor(e,t,n){super(e,t,n)}}Va.prototype.ValueTypeName="string";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=oc;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends nr{constructor(e,t,n,i){super(e,t,n,i)}}Fa.prototype.ValueTypeName="vector";class pT{constructor(e="",t=-1,n=[],i=qM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gT(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(nr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=lT(l);l=p_(l,1,u),c=p_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Na(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return $e("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,p,_){if(d.length!==0){const m=[],g=[];vx(d,m,g,p),m.length!==0&&_.push(new f(h,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)d[h[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==h[p].morphTargets.length;++x){const M=h[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new Na(".morphTargetInfluence["+_+"]",m,g))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Fa,d+".position",h,"pos",i),n(Ua,d+".quaternion",h,"rot",i),n(Fa,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Na;case"vector":case"vector2":case"vector3":case"vector4":return Fa;case"color":return xx;case"quaternion":return Ua;case"bool":case"boolean":return za;case"string":return Va}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mT(r.type);if(r.times===void 0){const t=[],n=[];vx(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Xr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(m_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!m_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function m_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class yx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _T=new yx;class Po{constructor(e){this.manager=e!==void 0?e:_T,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ir={};class vT extends Error{constructor(e,t){super(e),this.response=t}}class _m extends Po{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ir[e]!==void 0){Ir[e].push({onLoad:t,onProgress:n,onError:i});return}Ir[e]=[],Ir[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ir[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){f.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let R=0,A=u.length;R<A;R++){const v=u[R];v.onProgress&&v.onProgress(E)}g.enqueue(y),x()}},M=>{g.error(M)})}}});return new Response(m)}else throw new vT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Xr.add(`file:${e}`,c);const u=Ir[e];delete Ir[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ir[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ir[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jo=new WeakMap;class xT extends Po{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Jo.get(o);f===void 0&&(f=[],Jo.set(o,f)),f.push({onLoad:t,onError:i})}return o}const a=cc("img");function l(){u(),t&&t(this);const f=Jo.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Jo.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Xr.remove(`image:${e}`);const h=Jo.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}Jo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class yT extends Po{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new gh,a=new _m(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{u(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Gn,o.wrapT=c.wrapT!==void 0?c.wrapT:Gn,o.magFilter=c.magFilter!==void 0?c.magFilter:Bt,o.minFilter=c.minFilter!==void 0?c.minFilter:Bt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=bi),c.mipmapCount===1&&(o.minFilter=Bt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class _h extends Po{constructor(e){super(e)}load(e,t,n,i){const s=new cn,o=new xT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class vh extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ef=new st,g_=new W,__=new W;class vm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dm,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;g_.setFromMatrixPosition(e.matrixWorld),t.position.copy(g_),__.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(__),t.updateMatrixWorld(),Ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lc||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ou=new W,au=new es,rr=new W;class Sx extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ou,au,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,au,rr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ou,au,rr),rr.x===1&&rr.y===1&&rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ou,au,rr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new W,v_=new Ue,x_=new Ue;class Rn extends Sx{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,v_,x_),t.subVectors(x_,v_)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ol*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ST extends vm{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ia*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class up extends vh{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ST}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class MT extends vm{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class xm extends vh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new MT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ga extends Sx{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bT extends vm{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new bT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ym extends vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wf=new WeakMap;class TT extends Po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(wf.has(o)===!0)i&&i(wf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wf.set(l,c),Xr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qo=-90,ea=1;class ET extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Qo,ea,e,t);i.layers=this.layers,this.add(i);const s=new Rn(Qo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Qo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Qo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Qo,ea,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class wT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sm="\\[\\]\\.:\\/",AT=new RegExp("["+Sm+"]","g"),Mm="[^"+Sm+"]",RT="[^"+Sm.replace("\\.","")+"]",CT=/((?:WC+[\/:])*)/.source.replace("WC",Mm),PT=/(WCOD+)?/.source.replace("WCOD",RT),LT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mm),IT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mm),DT=new RegExp("^"+CT+PT+LT+IT+"$"),NT=["material","materials","bones","map"];class UT{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AT,"")}static parseTrackName(e){const t=DT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);NT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=UT;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const y_=new st;class Mx{constructor(e,t,n=0,i=1/0){this.ray=new yc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new um,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return y_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(y_),this}intersectObject(e,t=!0,n=[]){return hp(e,this,n,t),n.sort(S_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hp(e[i],this,n,t);return n.sort(S_),n}}function S_(r,e){return r.distance-e.distance}function hp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)hp(s[o],e,t,!0)}}class bm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=FT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function FT(){this._document.hidden===!1&&this.reset()}function M_(r,e,t,n){const i=OT(n);switch(t){case tx:return r*e;case nm:return r*e/i.components*i.byteLength;case im:return r*e/i.components*i.byteLength;case Pa:return r*e*2/i.components*i.byteLength;case rm:return r*e*2/i.components*i.byteLength;case nx:return r*e*3/i.components*i.byteLength;case Vi:return r*e*4/i.components*i.byteLength;case sm:return r*e*4/i.components*i.byteLength;case bu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Ld:return Math.max(r,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(r,8)*Math.max(e,8)/2;case Id:case Dd:case Ud:case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nd:case Od:case Bd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qd:case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OT(r){switch(r){case yi:case Zv:return{byteLength:1,components:1};case rc:case Jv:case Pn:return{byteLength:2,components:1};case em:case tm:return{byteLength:2,components:4};case br:case Qp:case ei:return{byteLength:4,components:1};case Qv:case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);function bx(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function BT(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var kT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XT=`#ifdef USE_AOMAP
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
#endif`,qT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YT=`#ifdef USE_BATCHING
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
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JT=`#ifdef USE_IRIDESCENCE
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
#endif`,QT=`#ifdef USE_BUMPMAP
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lE=`#define PI 3.141592653589793
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
} // validated`,cE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uE=`vec3 transformedNormal = objectNormal;
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
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_E=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FE=`PhysicalMaterial material;
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
#endif`,OE=`uniform sampler2D dfgLUT;
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
}`,BE=`
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jE=`#if defined( USE_POINTS_UV )
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
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
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
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bw=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
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
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
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
#endif`,Rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,qw=`#define DISTANCE
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
}`,Yw=`#define DISTANCE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Jw=`#include <common>
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,cA=`#define STANDARD
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
}`,uA=`#define TOON
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
}`,hA=`#define TOON
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
}`,fA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,gA=`uniform float rotation;
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
}`,_A=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:kT,alphahash_pars_fragment:zT,alphamap_fragment:VT,alphamap_pars_fragment:GT,alphatest_fragment:HT,alphatest_pars_fragment:WT,aomap_fragment:XT,aomap_pars_fragment:qT,batching_pars_vertex:YT,batching_vertex:jT,begin_vertex:$T,beginnormal_vertex:KT,bsdfs:ZT,iridescence_fragment:JT,bumpmap_pars_fragment:QT,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:uE,displacementmap_pars_vertex:hE,displacementmap_vertex:fE,emissivemap_fragment:dE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:gE,envmap_fragment:_E,envmap_common_pars_fragment:vE,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:LE,envmap_vertex:SE,fog_vertex:ME,fog_pars_vertex:bE,fog_fragment:TE,fog_pars_fragment:EE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:AE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:CE,lights_pars_begin:PE,lights_toon_fragment:IE,lights_toon_pars_fragment:DE,lights_phong_fragment:NE,lights_phong_pars_fragment:UE,lights_physical_fragment:FE,lights_physical_pars_fragment:OE,lights_fragment_begin:BE,lights_fragment_maps:kE,lights_fragment_end:zE,logdepthbuf_fragment:VE,logdepthbuf_pars_fragment:GE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:WE,map_fragment:XE,map_pars_fragment:qE,map_particle_fragment:YE,map_particle_pars_fragment:jE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:KE,morphinstance_vertex:ZE,morphcolor_vertex:JE,morphnormal_vertex:QE,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:uw,iridescence_pars_fragment:hw,opaque_fragment:fw,packing:dw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:_w,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:bw,skinbase_vertex:Tw,skinning_pars_vertex:Ew,skinning_vertex:ww,skinnormal_vertex:Aw,specularmap_fragment:Rw,specularmap_pars_fragment:Cw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Lw,transmission_fragment:Iw,transmission_pars_fragment:Dw,uv_pars_fragment:Nw,uv_pars_vertex:Uw,uv_vertex:Fw,worldpos_vertex:Ow,background_vert:Bw,background_frag:kw,backgroundCube_vert:zw,backgroundCube_frag:Vw,cube_vert:Gw,cube_frag:Hw,depth_vert:Ww,depth_frag:Xw,distance_vert:qw,distance_frag:Yw,equirect_vert:jw,equirect_frag:$w,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Jw,meshbasic_frag:Qw,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:hA,points_vert:fA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},ve={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ur={basic:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:jn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:jn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:jn([ve.points,ve.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:jn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:jn([ve.common,ve.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:jn([ve.sprite,ve.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:jn([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:jn([ve.lights,ve.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ur.physical={uniforms:jn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const lu={r:0,b:0,g:0},Hs=new Tr,vA=new st;function xA(r,e,t,n,i,s){const o=new Ne(0);let a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1;const y=d(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,M){const y=d(M);y&&(y.isCubeTexture||y.mapping===ph)?(c===void 0&&(c=new un(new Sc(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Da(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Hs.copy(M.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(Hs)),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Tt,(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new un(new ts(2,2),new rn({name:"BackgroundMaterial",uniforms:Da(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(lu,gx(r)),t.buffers.color.setClear(lu.r,lu.g,lu.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function yA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(P,L,U,F,k){let z=!1;const O=f(P,F,U,L);s!==O&&(s=O,c(s.object)),z=d(P,F,U,k),z&&p(P,F,U,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(P,L,U,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function f(P,L,U,F){const k=F.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const O=P.isInstancedMesh===!0?P.id:0;let Z=z[O];Z===void 0&&(Z={},z[O]=Z);let X=Z[U.id];X===void 0&&(X={},Z[U.id]=X);let N=X[k];return N===void 0&&(N=h(l()),X[k]=N),N}function h(P){const L=[],U=[],F=[];for(let k=0;k<t;k++)L[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:F,object:P,attributes:{},index:null}}function d(P,L,U,F){const k=s.attributes,z=L.attributes;let O=0;const Z=U.getAttributes();for(const X in Z)if(Z[X].location>=0){const se=k[X];let ne=z[X];if(ne===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),se===void 0||se.attribute!==ne||ne&&se.data!==ne.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function p(P,L,U,F){const k={},z=L.attributes;let O=0;const Z=U.getAttributes();for(const X in Z)if(Z[X].location>=0){let se=z[X];se===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const ne={};ne.attribute=se,se&&se.data&&(ne.data=se.data),k[X]=ne,O++}s.attributes=k,s.attributesNum=O,s.index=F}function _(){const P=s.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){const U=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;U[P]=1,F[P]===0&&(r.enableVertexAttribArray(P),F[P]=1),k[P]!==L&&(r.vertexAttribDivisor(P,L),k[P]=L)}function x(){const P=s.newAttributes,L=s.enabledAttributes;for(let U=0,F=L.length;U<F;U++)L[U]!==P[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function M(P,L,U,F,k,z,O){O===!0?r.vertexAttribIPointer(P,L,U,k,z):r.vertexAttribPointer(P,L,U,F,k,z)}function y(P,L,U,F){_();const k=F.attributes,z=U.getAttributes(),O=L.defaultAttributeValues;for(const Z in z){const X=z[Z];if(X.location>=0){let N=k[Z];if(N===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(N=P.instanceColor)),N!==void 0){const se=N.normalized,ne=N.itemSize,Se=e.get(N);if(Se===void 0)continue;const Ve=Se.buffer,Je=Se.type,Q=Se.bytesPerElement,ie=Je===r.INT||Je===r.UNSIGNED_INT||N.gpuType===Qp;if(N.isInterleavedBufferAttribute){const le=N.data,Be=le.stride,ke=N.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)g(X.location+Ie,le.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)m(X.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Ie=0;Ie<X.locationSize;Ie++)M(X.location+Ie,ne/X.locationSize,Je,se,Be*Q,(ke+ne/X.locationSize*Ie)*Q,ie)}else{if(N.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)g(X.location+le,N.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let le=0;le<X.locationSize;le++)M(X.location+le,ne/X.locationSize,Je,se,ne*Q,ne/X.locationSize*le*Q,ie)}}else if(O!==void 0){const se=O[Z];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(X.location,se);break;case 3:r.vertexAttrib3fv(X.location,se);break;case 4:r.vertexAttrib4fv(X.location,se);break;default:r.vertexAttrib1fv(X.location,se)}}}}x()}function E(){S();for(const P in n){const L=n[P];for(const U in L){const F=L[U];for(const k in F){const z=F[k];for(const O in z)u(z[O].object),delete z[O];delete F[k]}}delete n[P]}}function R(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const U in L){const F=L[U];for(const k in F){const z=F[k];for(const O in z)u(z[O].object),delete z[O];delete F[k]}}delete n[P.id]}function A(P){for(const L in n){const U=n[L];for(const F in U){const k=U[F];if(k[P.id]===void 0)continue;const z=k[P.id];for(const O in z)u(z[O].object),delete z[O];delete k[P.id]}}}function v(P){for(const L in n){const U=n[L],F=P.isInstancedMesh===!0?P.id:0,k=U[F];if(k!==void 0){for(const z in k){const O=k[z];for(const Z in O)u(O[Z].object),delete O[Z];delete k[z]}delete U[F],Object.keys(U).length===0&&delete n[L]}}}function S(){I(),o=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function SA(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_]*h[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Vi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ei&&!v)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),R=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:R}}function bA(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ks,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,M=x*4;let y=g.clippingState||null;l.value=y,y=u(p,h,M,d);for(let E=0;E!==M;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ts=4,b_=[.125,.215,.35,.446,.526,.582],Qs=20,TA=256,il=new Ga,T_=new Ne;let Af=null,Rf=0,Cf=0,Pf=!1;const EA=new W;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=EA}=s;Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Pn,format:Vi,colorSpace:La,depthBuffer:!1},i=E_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wA(s)),this._blurMaterial=RA(s,e,t),this._ggxMaterial=AA(s,e,t)}return i}_compileMaterial(e){const t=new un(new Wn,e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i,s){const l=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(T_),f.toneMapping=yr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Sc,new Wr({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(T_),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;ta(i,y*E,M>2?E:0,E,E),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ao||e.mapping===Ra;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Ts?n-p+Ts:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ta(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,il),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ta(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,il)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Qs;m>Qs&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);const g=[];let x=0;for(let A=0;A<Qs;++A){const v=A/_,S=Math.exp(-v*v/2);g.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-n;const y=this._sizeLods[i],E=3*y*(i>M-Ts?i-M+Ts:0),R=4*(this._cubeSize-y);ta(t,E,R,3*y,2*y),l.setRenderTarget(t),l.render(f,il)}}function wA(r){const e=[],t=[],n=[];let i=r;const s=r-Ts+1+b_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ts?l=b_[o-r+Ts-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),M=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,v=R>2?0:-1,S=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];x.set(S,_*p*R),M.set(h,m*p*R);const I=[R,R,R,R,R,R];y.set(I,g*p*R)}const E=new Wn;E.setAttribute("position",new Ht(x,_)),E.setAttribute("uv",new Ht(M,m)),E.setAttribute("faceIndex",new Ht(y,g)),n.push(new un(E,null)),i>Ts&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function E_(r,e,t){const n=new ai(r,e,t);return n.texture.mapping=ph,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function AA(r,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xh(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function RA(r,e,t){const n=new Float32Array(Qs),i=new W(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xh(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function w_(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function A_(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}class Tx extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dx(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sc(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:xr});s.uniforms.tEquirect.value=t;const o=new un(i,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Bt),new ET(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function CA(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Kh||d===Zh)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new Tx(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,p=d===Kh||d===Zh,_=d===Ao||d===Ra;if(p||_){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Qu(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Qu(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Kh?h.mapping=Ao:d===Zh&&(h.mapping=Ra),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function PA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$u("WebGLRenderer: "+n+" extension not supported."),i}}}function LA(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,y=x.length;M<y;M+=3){const E=x[M+0],R=x[M+1],A=x[M+2];h.push(E,R,R,A,A,E)}}else{const x=p.array;_=p.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const E=M+0,R=M+1,A=M+2;h.push(E,R,R,A,A,E)}}const m=new(p.count>=65535?cx:lx)(h,1);m.version=_;const g=s.get(f);g&&e.remove(g),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function IA(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,h*o,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function f(h,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function DA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function NA(r,e,t){const n=new WeakMap,i=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let I=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var d=I;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=a.attributes.position.count*y,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*R*4*f),v=new ox(A,E,R,f);v.type=ei,v.needsUpdate=!0;const S=y*4;for(let P=0;P<f;P++){const L=g[P],U=x[P],F=M[P],k=E*R*4*P;for(let z=0;z<L.count;z++){const O=z*S;p===!0&&(i.fromBufferAttribute(L,z),A[k+O+0]=i.x,A[k+O+1]=i.y,A[k+O+2]=i.z,A[k+O+3]=0),_===!0&&(i.fromBufferAttribute(U,z),A[k+O+4]=i.x,A[k+O+5]=i.y,A[k+O+6]=i.z,A[k+O+7]=0),m===!0&&(i.fromBufferAttribute(F,z),A[k+O+8]=i.x,A[k+O+9]=i.y,A[k+O+10]=i.z,A[k+O+11]=F.itemSize===4?i.w:1)}}h={count:f,texture:v,size:new Ue(E,R)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function UA(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const FA={[Yp]:"LINEAR_TONE_MAPPING",[jp]:"REINHARD_TONE_MAPPING",[$p]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Zp]:"AGX_TONE_MAPPING",[Jp]:"NEUTRAL_TONE_MAPPING",[Kp]:"CUSTOM_TONE_MAPPING"};function OA(r,e,t,n,i){const s=new ai(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new ai(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),a=new Wn;a.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ei([0,2,0,0,2,0],2));const l=new _x({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new un(a,l),u=new Ga(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(x,M){s.setSize(x,M),o.setSize(x,M);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const M=s.width,y=s.height;for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(M,y)}},this.begin=function(x,M){if(d||x.toneMapping===yr&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,E=M.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return g===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=yr,!0},this.hasRenderPass=function(){return g},this.end=function(x,M){x.toneMapping=p,d=!0;let y=s,E=o;for(let R=0;R<m.length;R++){const A=m[R];if(A.enabled!==!1&&(A.render(x,E,y,M),A.needsSwap!==!1)){const v=y;y=E,E=v}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},vt.getTransfer(f)===Tt&&(l.defines.SRGB_TRANSFER="");const R=FA[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ex=new cn,fp=new uc(1,1),wx=new ox,Ax=new Rb,Rx=new dx,R_=[],C_=[],P_=new Float32Array(16),L_=new Float32Array(9),I_=new Float32Array(4);function Ha(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=R_[i];if(s===void 0&&(s=new Float32Array(i),R_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _n(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yh(r,e){let t=C_[e];t===void 0&&(t=new Int32Array(e),C_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function zA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function VA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function GA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;I_.set(n),r.uniformMatrix2fv(this.addr,!1,I_),vn(t,n)}}function HA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;L_.set(n),r.uniformMatrix3fv(this.addr,!1,L_),vn(t,n)}}function WA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;P_.set(n),r.uniformMatrix4fv(this.addr,!1,P_),vn(t,n)}}function XA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function jA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function $A(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function ZA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function JA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function QA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=t.isReversedDepthBuffer()?am:om,s=fp):s=Ex,t.setTexture2D(e||s,i)}function e1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ax,i)}function t1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rx,i)}function n1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wx,i)}function i1(r){switch(r){case 5126:return BA;case 35664:return kA;case 35665:return zA;case 35666:return VA;case 35674:return GA;case 35675:return HA;case 35676:return WA;case 5124:case 35670:return XA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return jA;case 5125:return $A;case 36294:return KA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(r,e){r.uniform1fv(this.addr,e)}function s1(r,e){const t=Ha(e,this.size,2);r.uniform2fv(this.addr,t)}function o1(r,e){const t=Ha(e,this.size,3);r.uniform3fv(this.addr,t)}function a1(r,e){const t=Ha(e,this.size,4);r.uniform4fv(this.addr,t)}function l1(r,e){const t=Ha(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function c1(r,e){const t=Ha(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function u1(r,e){const t=Ha(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h1(r,e){r.uniform1iv(this.addr,e)}function f1(r,e){r.uniform2iv(this.addr,e)}function d1(r,e){r.uniform3iv(this.addr,e)}function p1(r,e){r.uniform4iv(this.addr,e)}function m1(r,e){r.uniform1uiv(this.addr,e)}function g1(r,e){r.uniform2uiv(this.addr,e)}function _1(r,e){r.uniform3uiv(this.addr,e)}function v1(r,e){r.uniform4uiv(this.addr,e)}function x1(r,e,t){const n=this.cache,i=e.length,s=yh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=fp:o=Ex;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function y1(r,e,t){const n=this.cache,i=e.length,s=yh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ax,s[o])}function S1(r,e,t){const n=this.cache,i=e.length,s=yh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rx,s[o])}function M1(r,e,t){const n=this.cache,i=e.length,s=yh(t,i);_n(n,s)||(r.uniform1iv(this.addr,s),vn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wx,s[o])}function b1(r){switch(r){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return h1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class T1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class E1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function D_(r,e){r.seq.push(e),r.map[e.id]=e}function A1(r,e,t){const n=r.name,i=n.length;for(Lf.lastIndex=0;;){const s=Lf.exec(n),o=Lf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){D_(t,c===void 0?new T1(a,r,e):new E1(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new w1(a),D_(t,f)),t=f}}}class Au{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);A1(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function N_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const R1=37297;let C1=0;function P1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const U_=new rt;function L1(r){vt._getMatrix(U_,vt.workingColorSpace,r);const e=`mat3( ${U_.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Yu:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function F_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+P1(r.getShaderSource(e),a)}else return s}function I1(r,e){const t=L1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const D1={[Yp]:"Linear",[jp]:"Reinhard",[$p]:"Cineon",[xc]:"ACESFilmic",[Zp]:"AgX",[Jp]:"Neutral",[Kp]:"Custom"};function N1(r,e){const t=D1[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cu=new W;function U1(){vt.getLuminanceCoefficients(cu);const r=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function O1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gl(r){return r!==""}function O_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(r){return r.replace(k1,V1)}const z1=new Map;function V1(r,e){let t=ot[e];if(t===void 0){const n=z1.get(e);if(n!==void 0)t=ot[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dp(t)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(r){return r.replace(G1,H1)}function H1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function z_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const W1={[So]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function X1(r){return W1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q1={[Ao]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[ph]:"ENVMAP_TYPE_CUBE_UV"};function Y1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":q1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const j1={[Ra]:"ENVMAP_MODE_REFRACTION"};function $1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":j1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[jv]:"ENVMAP_BLENDING_MULTIPLY",[HM]:"ENVMAP_BLENDING_MIX",[WM]:"ENVMAP_BLENDING_ADD"};function Z1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":K1[r.combine]||"ENVMAP_BLENDING_NONE"}function J1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=X1(t),c=Y1(t),u=$1(t),f=Z1(t),h=J1(t),d=F1(t),p=O1(s),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),g.length>0&&(g+=`
`)):(m=[z_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),g=[z_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?ot.tonemapping_pars_fragment:"",t.toneMapping!==yr?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),U1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),o=dp(o),o=O_(o,t),o=B_(o,t),a=dp(a),a=O_(a,t),a=B_(a,t),o=k_(o),a=k_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+m+o,y=x+g+a,E=N_(i,i.VERTEX_SHADER,M),R=N_(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(R)||"",k=L.trim(),z=U.trim(),O=F.trim();let Z=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,R);else{const N=F_(i,E,"vertex"),se=F_(i,R,"fragment");$e("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+N+`
`+se)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(z===""||O==="")&&(X=!1);X&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:g}})}i.deleteShader(E),i.deleteShader(R),v=new Au(i,_),S=B1(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,R1)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nR(e),t.set(e,n)),n}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function iR(r,e,t,n,i,s){const o=new um,a=new tR,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,S,I,P,L){const U=P.fog,F=L.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||k,z),Z=O&&O.mapping===ph?O.image.height:null,X=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=N!==void 0?N.length:0;let ne=0;F.morphAttributes.position!==void 0&&(ne=1),F.morphAttributes.normal!==void 0&&(ne=2),F.morphAttributes.color!==void 0&&(ne=3);let Se,Ve,Je,Q;if(X){const ye=ur[X];Se=ye.vertexShader,Ve=ye.fragmentShader}else Se=v.vertexShader,Ve=v.fragmentShader,a.update(v),Je=a.getVertexShaderID(v),Q=a.getFragmentShaderID(v);const ie=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,Ie=!!v.map,_t=!!v.matcap,we=!!O,Ye=!!v.aoMap,tt=!!v.lightMap,qe=!!v.bumpMap,j=!!v.normalMap,V=!!v.displacementMap,St=!!v.emissiveMap,lt=!!v.metalnessMap,je=!!v.roughnessMap,Me=v.anisotropy>0,D=v.clearcoat>0,b=v.dispersion>0,G=v.iridescence>0,ee=v.sheen>0,te=v.transmission>0,K=Me&&!!v.anisotropyMap,xe=D&&!!v.clearcoatMap,ue=D&&!!v.clearcoatNormalMap,De=D&&!!v.clearcoatRoughnessMap,be=G&&!!v.iridescenceMap,oe=G&&!!v.iridescenceThicknessMap,ce=ee&&!!v.sheenColorMap,Te=ee&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,pe=!!v.specularColorMap,Ke=!!v.specularIntensityMap,B=te&&!!v.transmissionMap,he=te&&!!v.thicknessMap,ae=!!v.gradientMap,me=!!v.alphaMap,re=v.alphaTest>0,J=!!v.alphaHash,Ee=!!v.extensions;let He=yr;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=r.toneMapping);const xt={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:Se,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Je,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:La,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:_t,envMap:we,envMapMode:we&&O.mapping,envMapCubeUVHeight:Z,aoMap:Ye,lightMap:tt,bumpMap:qe,normalMap:j,displacementMap:V,emissiveMap:St,normalMapObjectSpace:j&&v.normalMapType===$M,normalMapTangentSpace:j&&v.normalMapType===rx,metalnessMap:lt,roughnessMap:je,anisotropy:Me,anisotropyMap:K,clearcoat:D,clearcoatMap:xe,clearcoatNormalMap:ue,clearcoatRoughnessMap:De,dispersion:b,iridescence:G,iridescenceMap:be,iridescenceThicknessMap:oe,sheen:ee,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:Ae,specularColorMap:pe,specularIntensityMap:Ke,transmission:te,transmissionMap:B,thicknessMap:he,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Mo&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:re,alphaHash:J,combine:v.combine,mapUv:Ie&&p(v.map.channel),aoMapUv:Ye&&p(v.aoMap.channel),lightMapUv:tt&&p(v.lightMap.channel),bumpMapUv:qe&&p(v.bumpMap.channel),normalMapUv:j&&p(v.normalMap.channel),displacementMapUv:V&&p(v.displacementMap.channel),emissiveMapUv:St&&p(v.emissiveMap.channel),metalnessMapUv:lt&&p(v.metalnessMap.channel),roughnessMapUv:je&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:xe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:Ae&&p(v.specularMap.channel),specularColorMapUv:pe&&p(v.specularColorMap.channel),specularIntensityMapUv:Ke&&p(v.specularIntensityMap.channel),transmissionMapUv:B&&p(v.transmissionMap.channel),thicknessMapUv:he&&p(v.thicknessMap.channel),alphaMapUv:me&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(j||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ie||me),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&j===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===oi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(S,v),x(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function g(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=d[v.type];let I;if(S){const P=ur[S];I=hc.clone(P.uniforms)}else I=v.uniforms;return I}function y(v,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new Q1(r,S,v,i),c.push(I),u.set(S,I)),I}function E(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:A}}function rR(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function V_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function G_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,m,g){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function l(h,d,p,_,m,g){const x=a(h,d,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(h,d,p,_,m,g){const x=a(h,d,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||sR),n.length>1&&n.sort(d||V_),i.length>1&&i.sort(d||V_)}function f(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function oR(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new G_,r.set(n,[o])):i>=s.length?(o=new G_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function aR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ne};break;case"SpotLight":t={position:new W,direction:new W,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function lR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cR=0;function uR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hR(r){const e=new aR,t=lR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,s=new st,o=new st;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,M=0,y=0,E=0,R=0,A=0;c.sort(uR);for(let S=0,I=c.length;S<I;S++){const P=c[S],L=P.color,U=P.intensity,F=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pa?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*U,f+=L.g*U,h+=L.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);A++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(L).multiplyScalar(U),z.distance=F,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const O=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,O.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=k,y++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(L).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const O=P.shadow,Z=t.get(P);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=z,p++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==E||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,v.directionalLength=d,v.pointLength=p,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=E,v.numLightProbes=A,n.version=cR++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function H_(r){const e=new hR(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fR(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new H_(r),e.set(i,[a])):s>=o.length?(a=new H_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
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
}`,mR=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],gR=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],W_=new st,rl=new W,If=new W;function _R(r,e,t){let n=new dm;const i=new Ue,s=new Ue,o=new Vt,a=new oT,l=new aT,c={},u=t.maxTextureSize,f={[Mr]:oi,[oi]:Mr,[Fi]:Fi},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Wn;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let g=this.type;this.render=function(R,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===TM&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=So);const S=r.getRenderTarget(),I=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(xr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=g!==this.type;U&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=R.length;F<k;F++){const z=R[F],O=z.shadow;if(O===void 0){ze("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===pl){if(z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ai(i.x,i.y,{format:Pa,type:Pn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new uc(i.x,i.y,ei),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Qr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=En,O.map.depthTexture.magFilter=En}else z.isPointLight?(O.map=new Tx(i.x),O.map.depthTexture=new nT(i.x,br)):(O.map=new ai(i.x,i.y),O.map.depthTexture=new uc(i.x,i.y,br)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Qr,this.type===So?(O.map.depthTexture.compareFunction=X?am:om,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=En,O.map.depthTexture.magFilter=En);O.camera.updateProjectionMatrix()}const N=O.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<N;se++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,se),r.clear();else{se===0&&(r.setRenderTarget(O.map),r.clear());const ne=O.getViewport(se);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),L.viewport(o)}if(z.isPointLight){const ne=O.camera,Se=O.matrix,Ve=z.distance||ne.far;Ve!==ne.far&&(ne.far=Ve,ne.updateProjectionMatrix()),rl.setFromMatrixPosition(z.matrixWorld),ne.position.copy(rl),If.copy(ne.position),If.add(mR[se]),ne.up.copy(gR[se]),ne.lookAt(If),ne.updateMatrixWorld(),Se.makeTranslation(-rl.x,-rl.y,-rl.z),W_.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),O._frustum.setFromProjectionMatrix(W_,ne.coordinateSystem,ne.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),y(A,v,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===pl&&x(O,v),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(S,I,P)};function x(R,A){const v=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(i.x,i.y,{format:Pa,type:Pn})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,v,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,v,d,_,null)}function M(R,A,v,S){let I=null;const P=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)I=P;else if(I=v.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=I.uuid,U=A.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let k=F[U];k===void 0&&(k=I.clone(),F[U]=k,A.addEventListener("dispose",E)),I=k}if(I.visible=A.visible,I.wireframe=A.wireframe,S===pl?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:f[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=r.properties.get(I);L.light=v}return I}function y(R,A,v,S,I){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===pl)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const U=e.update(R),F=R.material;if(Array.isArray(F)){const k=U.groups;for(let z=0,O=k.length;z<O;z++){const Z=k[z],X=F[Z.materialIndex];if(X&&X.visible){const N=M(R,X,S,I);R.onBeforeShadow(r,R,A,v,U,N,Z),r.renderBufferDirect(v,null,U,N,R,Z),R.onAfterShadow(r,R,A,v,U,N,Z)}}}else if(F.visible){const k=M(R,F,S,I);R.onBeforeShadow(r,R,A,v,U,k,null),r.renderBufferDirect(v,null,U,k,R,null),R.onAfterShadow(r,R,A,v,U,k,null)}}const L=R.children;for(let U=0,F=L.length;U<F;U++)y(L[U],A,v,S,I)}function E(R){R.target.removeEventListener("dispose",E);for(const v in c){const S=c[v],I=R.target.uuid;I in S&&(S[I].dispose(),delete S[I])}}}function vR(r,e){function t(){let B=!1;const he=new Vt;let ae=null;const me=new Vt(0,0,0,0);return{setMask:function(re){ae!==re&&!B&&(r.colorMask(re,re,re,re),ae=re)},setLocked:function(re){B=re},setClear:function(re,J,Ee,He,xt){xt===!0&&(re*=He,J*=He,Ee*=He),he.set(re,J,Ee,He),me.equals(he)===!1&&(r.clearColor(re,J,Ee,He),me.copy(he))},reset:function(){B=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ae=null,me=null,re=null;return{setReversed:function(J){if(he!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),he=J;const He=re;re=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(J){J?ie(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(J){ae!==J&&!B&&(r.depthMask(J),ae=J)},setFunc:function(J){if(he&&(J=ob[J]),me!==J){switch(J){case Sd:r.depthFunc(r.NEVER);break;case Md:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case Aa:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case Ed:r.depthFunc(r.GEQUAL);break;case wd:r.depthFunc(r.GREATER);break;case Ad:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=J}},setLocked:function(J){B=J},setClear:function(J){re!==J&&(re=J,he&&(J=1-J),r.clearDepth(J))},reset:function(){B=!1,ae=null,me=null,re=null,he=!1}}}function i(){let B=!1,he=null,ae=null,me=null,re=null,J=null,Ee=null,He=null,xt=null;return{setTest:function(ye){B||(ye?ie(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(ye){he!==ye&&!B&&(r.stencilMask(ye),he=ye)},setFunc:function(ye,Fe,it){(ae!==ye||me!==Fe||re!==it)&&(r.stencilFunc(ye,Fe,it),ae=ye,me=Fe,re=it)},setOp:function(ye,Fe,it){(J!==ye||Ee!==Fe||He!==it)&&(r.stencilOp(ye,Fe,it),J=ye,Ee=Fe,He=it)},setLocked:function(ye){B=ye},setClear:function(ye){xt!==ye&&(r.clearStencil(ye),xt=ye)},reset:function(){B=!1,he=null,ae=null,me=null,re=null,J=null,Ee=null,He=null,xt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,E=null,R=null,A=new Ne(0,0,0),v=0,S=!1,I=null,P=null,L=null,U=null,F=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=O>=2);let X=null,N={};const se=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Se=new Vt().fromArray(se),Ve=new Vt().fromArray(ne);function Je(B,he,ae,me){const re=new Uint8Array(4),J=r.createTexture();r.bindTexture(B,J),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ae;Ee++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(he+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return J}const Q={};Q[r.TEXTURE_2D]=Je(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(Aa),qe(!1),j(Rg),ie(r.CULL_FACE),Ye(xr);function ie(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function le(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Be(B,he){return f[B]!==he?(r.bindFramebuffer(B,he),f[B]=he,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=he),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ke(B,he){let ae=d,me=!1;if(B){ae=h.get(he),ae===void 0&&(ae=[],h.set(he,ae));const re=B.textures;if(ae.length!==re.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Ee=re.length;J<Ee;J++)ae[J]=r.COLOR_ATTACHMENT0+J;ae.length=re.length,me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,me=!0);me&&r.drawBuffers(ae)}function Ie(B){return p!==B?(r.useProgram(B),p=B,!0):!1}const _t={[Js]:r.FUNC_ADD,[wM]:r.FUNC_SUBTRACT,[AM]:r.FUNC_REVERSE_SUBTRACT};_t[RM]=r.MIN,_t[CM]=r.MAX;const we={[PM]:r.ZERO,[LM]:r.ONE,[IM]:r.SRC_COLOR,[xd]:r.SRC_ALPHA,[BM]:r.SRC_ALPHA_SATURATE,[FM]:r.DST_COLOR,[NM]:r.DST_ALPHA,[DM]:r.ONE_MINUS_SRC_COLOR,[yd]:r.ONE_MINUS_SRC_ALPHA,[OM]:r.ONE_MINUS_DST_COLOR,[UM]:r.ONE_MINUS_DST_ALPHA,[kM]:r.CONSTANT_COLOR,[zM]:r.ONE_MINUS_CONSTANT_COLOR,[VM]:r.CONSTANT_ALPHA,[GM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(B,he,ae,me,re,J,Ee,He,xt,ye){if(B===xr){_===!0&&(le(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),B!==EM){if(B!==m||ye!==S){if((g!==Js||y!==Js)&&(r.blendEquation(r.FUNC_ADD),g=Js,y=Js),ye)switch(B){case Mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFunc(r.ONE,r.ONE);break;case Cg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$e("WebGLState: Invalid blending: ",B);break}else switch(B){case Mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cg:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",B);break}x=null,M=null,E=null,R=null,A.set(0,0,0),v=0,m=B,S=ye}return}re=re||he,J=J||ae,Ee=Ee||me,(he!==g||re!==y)&&(r.blendEquationSeparate(_t[he],_t[re]),g=he,y=re),(ae!==x||me!==M||J!==E||Ee!==R)&&(r.blendFuncSeparate(we[ae],we[me],we[J],we[Ee]),x=ae,M=me,E=J,R=Ee),(He.equals(A)===!1||xt!==v)&&(r.blendColor(He.r,He.g,He.b,xt),A.copy(He),v=xt),m=B,S=!1}function tt(B,he){B.side===Fi?le(r.CULL_FACE):ie(r.CULL_FACE);let ae=B.side===oi;he&&(ae=!ae),qe(ae),B.blending===Mo&&B.transparent===!1?Ye(xr):Ye(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const me=B.stencilWrite;a.setTest(me),me&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(B){I!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),I=B)}function j(B){B!==SM?(ie(r.CULL_FACE),B!==P&&(B===Rg?r.cullFace(r.BACK):B===MM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),P=B}function V(B){B!==L&&(z&&r.lineWidth(B),L=B)}function St(B,he,ae){B?(ie(r.POLYGON_OFFSET_FILL),(U!==he||F!==ae)&&(U=he,F=ae,o.getReversed()&&(he=-he),r.polygonOffset(he,ae))):le(r.POLYGON_OFFSET_FILL)}function lt(B){B?ie(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function je(B){B===void 0&&(B=r.TEXTURE0+k-1),X!==B&&(r.activeTexture(B),X=B)}function Me(B,he,ae){ae===void 0&&(X===null?ae=r.TEXTURE0+k-1:ae=X);let me=N[ae];me===void 0&&(me={type:void 0,texture:void 0},N[ae]=me),(me.type!==B||me.texture!==he)&&(X!==ae&&(r.activeTexture(ae),X=ae),r.bindTexture(B,he||Q[B]),me.type=B,me.texture=he)}function D(){const B=N[X];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function ee(){try{r.texSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function te(){try{r.texSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function ue(){try{r.texStorage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function De(){try{r.texStorage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function be(){try{r.texImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function oe(){try{r.texImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function ce(B){Se.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function Te(B){Ve.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ve.copy(B))}function Ae(B,he){let ae=c.get(he);ae===void 0&&(ae=new WeakMap,c.set(he,ae));let me=ae.get(B);me===void 0&&(me=r.getUniformBlockIndex(he,B.name),ae.set(B,me))}function pe(B,he){const me=c.get(he).get(B);l.get(he)!==me&&(r.uniformBlockBinding(he,me,B.__bindingPointIndex),l.set(he,me))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,N={},f={},h=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,M=null,y=null,E=null,R=null,A=new Ne(0,0,0),v=0,S=!1,I=null,P=null,L=null,U=null,F=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:le,bindFramebuffer:Be,drawBuffers:ke,useProgram:Ie,setBlending:Ye,setMaterial:tt,setFlipSided:qe,setCullFace:j,setLineWidth:V,setPolygonOffset:St,setScissorTest:lt,activeTexture:je,bindTexture:Me,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:be,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:De,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:ce,viewport:Te,reset:Ke}}function xR(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,b){return d?new OffscreenCanvas(D,b):cc("canvas")}function _(D,b,G){let ee=1;const te=Me(D);if((te.width>G||te.height>G)&&(ee=G/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor(ee*te.width),xe=Math.floor(ee*te.height);f===void 0&&(f=p(K,xe));const ue=b?p(K,xe):f;return ue.width=K,ue.height=xe,ue.getContext("2d").drawImage(D,0,0,K,xe),ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+xe+")."),ue}else return"data"in D&&ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function m(D){return D.generateMipmaps}function g(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(D,b,G,ee,te=!1){if(D!==null){if(r[D]!==void 0)return r[D];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=b;if(b===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),b===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),b===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),b===r.RGBA){const xe=te?Yu:vt.getTransfer(ee);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=xe===Tt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(D,b){let G;return D?b===null||b===br||b===sc?G=r.DEPTH24_STENCIL8:b===ei?G=r.DEPTH32F_STENCIL8:b===rc&&(G=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===sc?G=r.DEPTH_COMPONENT24:b===ei?G=r.DEPTH_COMPONENT32F:b===rc&&(G=r.DEPTH_COMPONENT16),G}function E(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==En&&D.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function R(D){const b=D.target;b.removeEventListener("dispose",R),v(b),b.isVideoTexture&&u.delete(b)}function A(D){const b=D.target;b.removeEventListener("dispose",A),I(b)}function v(D){const b=n.get(D);if(b.__webglInit===void 0)return;const G=D.source,ee=h.get(G);if(ee){const te=ee[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(D),Object.keys(ee).length===0&&h.delete(G)}n.remove(D)}function S(D){const b=n.get(D);r.deleteTexture(b.__webglTexture);const G=D.source,ee=h.get(G);delete ee[b.__cacheKey],o.memory.textures--}function I(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let te=0;te<b.__webglFramebuffer[ee].length;te++)r.deleteFramebuffer(b.__webglFramebuffer[ee][te]);else r.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[ee]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=D.textures;for(let ee=0,te=G.length;ee<te;ee++){const K=n.get(G[ee]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(D)}let P=0;function L(){P=0}function U(){const D=P;return D>=i.maxTextures&&ze("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),P+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function k(D,b){const G=n.get(D);if(D.isVideoTexture&&lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const ee=D.image;if(ee===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,D,b);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function z(D,b){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Q(G,D,b);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function O(D,b){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Q(G,D,b);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function Z(D,b){const G=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){ie(G,D,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const X={[Ca]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[qu]:r.MIRRORED_REPEAT},N={[En]:r.NEAREST,[Kv]:r.NEAREST_MIPMAP_NEAREST,[ml]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Mu]:r.LINEAR_MIPMAP_NEAREST,[bi]:r.LINEAR_MIPMAP_LINEAR},se={[KM]:r.NEVER,[tb]:r.ALWAYS,[ZM]:r.LESS,[om]:r.LEQUAL,[JM]:r.EQUAL,[am]:r.GEQUAL,[QM]:r.GREATER,[eb]:r.NOTEQUAL};function ne(D,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Mu||b.magFilter===ml||b.magFilter===bi||b.minFilter===Bt||b.minFilter===Mu||b.minFilter===ml||b.minFilter===bi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,X[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===En||b.minFilter!==ml&&b.minFilter!==bi||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Se(D,b){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",R));const ee=b.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const K=F(b);if(K!==D.__cacheKey){te[K]===void 0&&(te[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[K].usedTimes++;const xe=te[D.__cacheKey];xe!==void 0&&(te[D.__cacheKey].usedTimes--,xe.usedTimes===0&&S(b)),D.__cacheKey=K,D.__webglTexture=te[K].texture}return G}function Ve(D,b,G){return Math.floor(Math.floor(D/G)/b)}function Je(D,b,G,ee){const K=D.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,G,ee,b.data);else{K.sort((oe,ce)=>oe.start-ce.start);let xe=0;for(let oe=1;oe<K.length;oe++){const ce=K[xe],Te=K[oe],Ae=ce.start+ce.count,pe=Ve(Te.start,b.width,4),Ke=Ve(ce.start,b.width,4);Te.start<=Ae+1&&pe===Ke&&Ve(Te.start+Te.count-1,b.width,4)===pe?ce.count=Math.max(ce.count,Te.start+Te.count-ce.start):(++xe,K[xe]=Te)}K.length=xe+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),De=r.getParameter(r.UNPACK_SKIP_PIXELS),be=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let oe=0,ce=K.length;oe<ce;oe++){const Te=K[oe],Ae=Math.floor(Te.start/4),pe=Math.ceil(Te.count/4),Ke=Ae%b.width,B=Math.floor(Ae/b.width),he=pe,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Ke,B,he,ae,G,ee,b.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,De),r.pixelStorei(r.UNPACK_SKIP_ROWS,be)}}function Q(D,b,G){let ee=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=r.TEXTURE_3D);const te=Se(D,b),K=b.source;t.bindTexture(ee,D.__webglTexture,r.TEXTURE0+G);const xe=n.get(K);if(K.version!==xe.__version||te===!0){t.activeTexture(r.TEXTURE0+G);const ue=vt.getPrimaries(vt.workingColorSpace),De=b.colorSpace===_s?null:vt.getPrimaries(b.colorSpace),be=b.colorSpace===_s||ue===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let oe=_(b.image,!1,i.maxTextureSize);oe=je(b,oe);const ce=s.convert(b.format,b.colorSpace),Te=s.convert(b.type);let Ae=M(b.internalFormat,ce,Te,b.colorSpace,b.isVideoTexture);ne(ee,b);let pe;const Ke=b.mipmaps,B=b.isVideoTexture!==!0,he=xe.__version===void 0||te===!0,ae=K.dataReady,me=E(b,oe);if(b.isDepthTexture)Ae=y(b.format===oo,b.type),he&&(B?t.texStorage2D(r.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ce,Te,null));else if(b.isDataTexture)if(Ke.length>0){B&&he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,Ke[0].width,Ke[0].height);for(let re=0,J=Ke.length;re<J;re++)pe=Ke[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,Te,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,ce,Te,pe.data);b.generateMipmaps=!1}else B?(he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,oe.width,oe.height),ae&&Je(b,oe,ce,Te)):t.texImage2D(r.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ce,Te,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,Ke[0].width,Ke[0].height,oe.depth);for(let re=0,J=Ke.length;re<J;re++)if(pe=Ke[re],b.format!==Vi)if(ce!==null)if(B){if(ae)if(b.layerUpdates.size>0){const Ee=M_(pe.width,pe.height,b.format,b.type);for(const He of b.layerUpdates){const xt=pe.data.subarray(He*Ee/pe.data.BYTES_PER_ELEMENT,(He+1)*Ee/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,He,pe.width,pe.height,1,ce,xt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ce,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,oe.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,ce,Te,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,oe.depth,0,ce,Te,pe.data)}else{B&&he&&t.texStorage2D(r.TEXTURE_2D,me,Ae,Ke[0].width,Ke[0].height);for(let re=0,J=Ke.length;re<J;re++)pe=Ke[re],b.format!==Vi?ce!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,ce,Te,pe.data):t.texImage2D(r.TEXTURE_2D,re,Ae,pe.width,pe.height,0,ce,Te,pe.data)}else if(b.isDataArrayTexture)if(B){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,oe.width,oe.height,oe.depth),ae)if(b.layerUpdates.size>0){const re=M_(oe.width,oe.height,b.format,b.type);for(const J of b.layerUpdates){const Ee=oe.data.subarray(J*re/oe.data.BYTES_PER_ELEMENT,(J+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ce,Te,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ce,Te,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,ce,Te,oe.data);else if(b.isData3DTexture)B?(he&&t.texStorage3D(r.TEXTURE_3D,me,Ae,oe.width,oe.height,oe.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ce,Te,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,ce,Te,oe.data);else if(b.isFramebufferTexture){if(he)if(B)t.texStorage2D(r.TEXTURE_2D,me,Ae,oe.width,oe.height);else{let re=oe.width,J=oe.height;for(let Ee=0;Ee<me;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Ae,re,J,0,ce,Te,null),re>>=1,J>>=1}}else if(Ke.length>0){if(B&&he){const re=Me(Ke[0]);t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height)}for(let re=0,J=Ke.length;re<J;re++)pe=Ke[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ce,Te,pe):t.texImage2D(r.TEXTURE_2D,re,Ae,ce,Te,pe);b.generateMipmaps=!1}else if(B){if(he){const re=Me(oe);t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Te,oe)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ce,Te,oe);m(b)&&g(ee),xe.__version=K.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ie(D,b,G){if(b.image.length!==6)return;const ee=Se(D,b),te=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const K=n.get(te);if(te.version!==K.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const xe=vt.getPrimaries(vt.workingColorSpace),ue=b.colorSpace===_s?null:vt.getPrimaries(b.colorSpace),De=b.colorSpace===_s||xe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!be&&!oe?ce[J]=_(b.image[J],!0,i.maxCubemapSize):ce[J]=oe?b.image[J].image:b.image[J],ce[J]=je(b,ce[J]);const Te=ce[0],Ae=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),Ke=M(b.internalFormat,Ae,pe,b.colorSpace),B=b.isVideoTexture!==!0,he=K.__version===void 0||ee===!0,ae=te.dataReady;let me=E(b,Te);ne(r.TEXTURE_CUBE_MAP,b);let re;if(be){B&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,Te.width,Te.height);for(let J=0;J<6;J++){re=ce[J].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const He=re[Ee];b.format!==Vi?Ae!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Ke,He.width,He.height,0,He.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,He.width,He.height,Ae,pe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Ke,He.width,He.height,0,Ae,pe,He.data)}}}else{if(re=b.mipmaps,B&&he){re.length>0&&me++;const J=Me(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,J.width,J.height)}for(let J=0;J<6;J++)if(oe){B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,Ae,pe,ce[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,ce[J].width,ce[J].height,0,Ae,pe,ce[J].data);for(let Ee=0;Ee<re.length;Ee++){const xt=re[Ee].image[J].image;B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,xt.width,xt.height,Ae,pe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Ke,xt.width,xt.height,0,Ae,pe,xt.data)}}else{B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,pe,ce[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,Ae,pe,ce[J]);for(let Ee=0;Ee<re.length;Ee++){const He=re[Ee];B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Ae,pe,He.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Ke,Ae,pe,He.image[J])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),K.__version=te.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function le(D,b,G,ee,te,K){const xe=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),De=M(G.internalFormat,xe,ue,G.colorSpace),be=n.get(b),oe=n.get(G);if(oe.__renderTarget=b,!be.__hasExternalTextures){const ce=Math.max(1,b.width>>K),Te=Math.max(1,b.height>>K);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,K,De,ce,Te,b.depth,0,xe,ue,null):t.texImage2D(te,K,De,ce,Te,0,xe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,te,oe.__webglTexture,0,V(b)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,te,oe.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(D,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const ee=b.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,K=y(b.stencilBuffer,te),xe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;St(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),K,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,D)}else{const ee=b.textures;for(let te=0;te<ee.length;te++){const K=ee[te],xe=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),De=M(K.internalFormat,xe,ue,K.colorSpace);St(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),De,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),De,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,De,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(D,b,G){const ee=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b.depthTexture);const be=s.convert(b.depthTexture.format),oe=s.convert(b.depthTexture.type);let ce;b.depthTexture.format===Qr?ce=r.DEPTH_COMPONENT24:b.depthTexture.format===oo&&(ce=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ce,b.width,b.height,0,be,oe,null)}}else k(b.depthTexture,0);const K=te.__webglTexture,xe=V(b),ue=ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,De=b.depthTexture.format===oo?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Qr)St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,De,ue,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,De,ue,K,0);else if(b.depthTexture.format===oo)St(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,De,ue,K,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,De,ue,K,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const b=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=ee}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let ee=0;ee<6;ee++)ke(b.__webglFramebuffer[ee],D,ee);else{const ee=D.texture.mipmaps;ee&&ee.length>0?ke(b.__webglFramebuffer[0],D,0):ke(b.__webglFramebuffer,D,0)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=r.createRenderbuffer(),Be(b.__webglDepthbuffer[ee],D,!1);else{const te=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Be(b.__webglDepthbuffer,D,!1);else{const te=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(D,b,G){const ee=n.get(D);b!==void 0&&le(ee.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ie(D)}function we(D){const b=D.texture,G=n.get(D),ee=n.get(b);D.addEventListener("dispose",A);const te=D.textures,K=D.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let De=0;De<b.mipmaps.length;De++)G.__webglFramebuffer[ue][De]=r.createFramebuffer()}else G.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)G.__webglFramebuffer[ue]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ue=0,De=te.length;ue<De;ue++){const be=n.get(te[ue]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&St(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const De=te[ue];G.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const be=s.convert(De.format,De.colorSpace),oe=s.convert(De.type),ce=M(De.internalFormat,be,oe,De.colorSpace,D.isXRRenderTarget===!0),Te=V(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ce,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)le(G.__webglFramebuffer[ue][De],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De);else le(G.__webglFramebuffer[ue],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,De=te.length;ue<De;ue++){const be=te[ue],oe=n.get(be);let ce=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,oe.__webglTexture),ne(ce,be),le(G.__webglFramebuffer,D,be,r.COLOR_ATTACHMENT0+ue,ce,0),m(be)&&g(ce)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),ne(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)le(G.__webglFramebuffer[De],D,b,r.COLOR_ATTACHMENT0,ue,De);else le(G.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ue,0);m(b)&&g(ue),t.unbindTexture()}D.depthBuffer&&Ie(D)}function Ye(D){const b=D.textures;for(let G=0,ee=b.length;G<ee;G++){const te=b[G];if(m(te)){const K=x(D),xe=n.get(te).__webglTexture;t.bindTexture(K,xe),g(K),t.unbindTexture()}}}const tt=[],qe=[];function j(D){if(D.samples>0){if(St(D)===!1){const b=D.textures,G=D.width,ee=D.height;let te=r.COLOR_BUFFER_BIT;const K=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(D),ue=b.length>1;if(ue)for(let be=0;be<b.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const De=D.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<b.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(b[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,r.NEAREST),l===!0&&(tt.length=0,qe.length=0,tt.push(r.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push(K),qe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<b.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=n.get(b[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(D){return Math.min(i.maxSamples,D.samples)}function St(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function je(D,b){const G=D.colorSpace,ee=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==La&&G!==_s&&(vt.getTransfer(G)===Tt?(ee!==Vi||te!==yi)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",G)),b}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=_t,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=le,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yR(r,e){function t(n,i=_s){let s;const o=vt.getTransfer(i);if(n===yi)return r.UNSIGNED_BYTE;if(n===em)return r.UNSIGNED_SHORT_4_4_4_4;if(n===tm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ex)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zv)return r.BYTE;if(n===Jv)return r.SHORT;if(n===rc)return r.UNSIGNED_SHORT;if(n===Qp)return r.INT;if(n===br)return r.UNSIGNED_INT;if(n===ei)return r.FLOAT;if(n===Pn)return r.HALF_FLOAT;if(n===tx)return r.ALPHA;if(n===nx)return r.RGB;if(n===Vi)return r.RGBA;if(n===Qr)return r.DEPTH_COMPONENT;if(n===oo)return r.DEPTH_STENCIL;if(n===nm)return r.RED;if(n===im)return r.RED_INTEGER;if(n===Pa)return r.RG;if(n===rm)return r.RG_INTEGER;if(n===sm)return r.RGBA_INTEGER;if(n===bu||n===Tu||n===Eu||n===wu)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rd||n===Cd||n===Pd||n===Ld)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Id||n===Dd||n===Nd||n===Ud||n===Fd||n===Od||n===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Id||n===Dd)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ud)return s.COMPRESSED_R11_EAC;if(n===Fd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Od)return s.COMPRESSED_RG11_EAC;if(n===Bd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kd||n===zd||n===Vd||n===Gd||n===Hd||n===Wd||n===Xd||n===qd||n===Yd||n===jd||n===$d||n===Kd||n===Zd||n===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$d)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qd||n===ep||n===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qd)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===np||n===ip||n===rp||n===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===np)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sc?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const SR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
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

}`;class bR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new px(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:SR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends Ba{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new bR,g={},x=t.getContextAttributes();let M=null,y=null;const E=[],R=[],A=new Ue;let v=null;const S=new Rn;S.viewport=new Vt;const I=new Rn;I.viewport=new Vt;const P=[S,I],L=new wT;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=E[Q];return ie===void 0&&(ie=new sf,E[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=E[Q];return ie===void 0&&(ie=new sf,E[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=E[Q];return ie===void 0&&(ie=new sf,E[Q]=ie),ie.getHandSpace()};function k(Q){const ie=R.indexOf(Q.inputSource);if(ie===-1)return;const le=E[ie];le!==void 0&&(le.update(Q.inputSource,Q.frame,c||o),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let Q=0;Q<E.length;Q++){const ie=R[Q];ie!==null&&(R[Q]=null,E[Q].disconnect(ie))}U=null,F=null,m.reset();for(const Q in g)delete g[Q];e.setRenderTarget(M),d=null,h=null,f=null,i=null,y=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Be=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?oo:Qr,Be=x.stencil?sc:br);const Ie={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ie),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ai(h.textureWidth,h.textureHeight,{format:Vi,type:yi,depthTexture:new uc(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ai(d.framebufferWidth,d.framebufferHeight,{format:Vi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Q){for(let ie=0;ie<Q.removed.length;ie++){const le=Q.removed[ie],Be=R.indexOf(le);Be>=0&&(R[Be]=null,E[Be].disconnect(le))}for(let ie=0;ie<Q.added.length;ie++){const le=Q.added[ie];let Be=R.indexOf(le);if(Be===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=R.length){R.push(le),Be=Ie;break}else if(R[Ie]===null){R[Ie]=le,Be=Ie;break}if(Be===-1)break}const ke=E[Be];ke&&ke.connect(le)}}const Z=new W,X=new W;function N(Q,ie,le){Z.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Be=Z.distanceTo(X),ke=ie.projectionMatrix.elements,Ie=le.projectionMatrix.elements,_t=ke[14]/(ke[10]-1),we=ke[14]/(ke[10]+1),Ye=(ke[9]+1)/ke[5],tt=(ke[9]-1)/ke[5],qe=(ke[8]-1)/ke[0],j=(Ie[8]+1)/Ie[0],V=_t*qe,St=_t*j,lt=Be/(-qe+j),je=lt*-qe;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(lt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=_t+lt,D=we+lt,b=V-je,G=St+(Be-je),ee=Ye*we/D*Me,te=tt*we/D*Me;Q.projectionMatrix.makePerspective(b,G,ee,te,Me,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ie=Q.near,le=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(le=m.depthFar)),L.near=I.near=S.near=ie,L.far=I.far=S.far=le,(U!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,F=L.far),L.layers.mask=Q.layers.mask|6,S.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const Be=Q.parent,ke=L.cameras;se(L,Be);for(let Ie=0;Ie<ke.length;Ie++)se(ke[Ie],Be);ke.length===2?N(L,S,I):L.projectionMatrix.copy(S.projectionMatrix),ne(Q,L,Be)};function ne(Q,ie,le){le===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ia*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Q){return g[Q]};let Se=null;function Ve(Q,ie){if(u=ie.getViewerPose(c||o),p=ie,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Be=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Be=!0);for(let we=0;we<le.length;we++){const Ye=le[we];let tt=null;if(d!==null)tt=d.getViewport(Ye);else{const j=f.getViewSubImage(h,Ye);tt=j.viewport,we===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let qe=P[we];qe===void 0&&(qe=new Rn,qe.layers.enable(we),qe.viewport=new Vt,P[we]=qe),qe.matrix.fromArray(Ye.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ye.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(tt.x,tt.y,tt.width,tt.height),we===0&&(L.matrix.copy(qe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Be===!0&&L.cameras.push(qe)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const we=f.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&m.init(we,i.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let we=0;we<le.length;we++){const Ye=le[we].camera;if(Ye){let tt=g[Ye];tt||(tt=new px,g[Ye]=tt);const qe=f.getCameraImage(Ye);tt.sourceTexture=qe}}}}for(let le=0;le<E.length;le++){const Be=R[le],ke=E[le];Be!==null&&ke!==void 0&&ke.update(Be,ie,c||o)}Se&&Se(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}const Je=new bx;Je.setAnimationLoop(Ve),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Ws=new Tr,ER=new st;function wR(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,gx(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,M,y){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===oi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===oi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,Ws.copy(y),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),m.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(Ws)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===oi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AR(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=i[x.id];y===void 0&&(p(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(x,E);const R=e.render.frame;s[x.id]!==R&&(h(x),s[x.id]=R)}function u(x){const M=f();x.__bindingPointIndex=M;const y=r.createBuffer(),E=x.__size,R=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let R=0,A=y.length;R<A;R++){const v=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,I=v.length;S<I;S++){const P=v[S];if(d(P,R,S,E)===!0){const L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let k=0;k<U.length;k++){const z=U[k],O=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+F,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,y,E){const R=x.value,A=M+"_"+y;if(E[A]===void 0)return typeof R=="number"||typeof R=="boolean"?E[A]=R:E[A]=R.clone(),!0;{const v=E[A];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return E[A]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function p(x){const M=x.uniforms;let y=0;const E=16;for(let A=0,v=M.length;A<v;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let I=0,P=S.length;I<P;I++){const L=S[I],U=Array.isArray(L.value)?L.value:[L.value];for(let F=0,k=U.length;F<k;F++){const z=U[F],O=_(z),Z=y%E,X=Z%O.boundary,N=Z+X;y+=X,N!==0&&E-N<O.storage&&(y+=E-N),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}const R=y%E;return R>0&&(y+=E-R),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const RR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sr=null;function CR(){return sr===null&&(sr=new gh(RR,16,16,Pa,Pn),sr.name="DFG_LUT",sr.minFilter=Bt,sr.magFilter=Bt,sr.wrapS=Gn,sr.wrapT=Gn,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}class Tm{constructor(e={}){const{canvas:t=rb(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=yi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=d,m=new Set([sm,rm,im]),g=new Set([yi,br,rc,sc,em,tm]),x=new Uint32Array(4),M=new Int32Array(4);let y=null,E=null;const R=[],A=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Kt;let P=0,L=0,U=null,F=-1,k=null;const z=new Vt,O=new Vt;let Z=null;const X=new Ne(0);let N=0,se=t.width,ne=t.height,Se=1,Ve=null,Je=null;const Q=new Vt(0,0,se,ne),ie=new Vt(0,0,se,ne);let le=!1;const Be=new dm;let ke=!1,Ie=!1;const _t=new st,we=new W,Ye=new Vt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function j(){return U===null?Se:1}let V=n;function St(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dh}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",xt,!1),V===null){const H="webgl2";if(V=St(H,C),V===null)throw St(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw $e("WebGLRenderer: "+C.message),C}let lt,je,Me,D,b,G,ee,te,K,xe,ue,De,be,oe,ce,Te,Ae,pe,Ke,B,he,ae,me;function re(){lt=new PA(V),lt.init(),he=new yR(V,lt),je=new MA(V,lt,e,he),Me=new vR(V,lt),je.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),D=new DA(V),b=new rR,G=new xR(V,lt,Me,b,je,he,D),ee=new CA(S),te=new BT(V),ae=new yA(V,te),K=new LA(V,te,D,ae),xe=new UA(V,K,te,ae,D),pe=new NA(V,je,G),ce=new bA(b),ue=new iR(S,ee,lt,je,ae,ce),De=new wR(S,b),be=new oR,oe=new fR(lt),Ae=new xA(S,ee,Me,xe,p,l),Te=new _R(S,xe,je),me=new AR(V,D,je,Me),Ke=new SA(V,lt,D),B=new IA(V,lt,D),D.programs=ue.programs,S.capabilities=je,S.extensions=lt,S.properties=b,S.renderLists=be,S.shadowMap=Te,S.state=Me,S.info=D}re(),_!==yi&&(v=new OA(_,t.width,t.height,i,s));const J=new TR(S,V);this.xr=J,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(C){C!==void 0&&(Se=C,this.setSize(se,ne,!1))},this.getSize=function(C){return C.set(se,ne)},this.setSize=function(C,H,$=!0){if(J.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,ne=H,t.width=Math.floor(C*Se),t.height=Math.floor(H*Se),$===!0&&(t.style.width=C+"px",t.style.height=H+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(se*Se,ne*Se).floor()},this.setDrawingBufferSize=function(C,H,$){se=C,ne=H,Se=$,t.width=Math.floor(C*$),t.height=Math.floor(H*$),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(_===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,H,$,Y){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,H,$,Y),Me.viewport(z.copy(Q).multiplyScalar(Se).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,H,$,Y){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,H,$,Y),Me.scissor(O.copy(ie).multiplyScalar(Se).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Me.setScissorTest(le=C)},this.setOpaqueSort=function(C){Ve=C},this.setTransparentSort=function(C){Je=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,$=!0){let Y=0;if(C){let q=!1;if(U!==null){const fe=U.texture.format;q=m.has(fe)}if(q){const fe=U.texture.type,ge=g.has(fe),de=Ae.getClearColor(),Ce=Ae.getClearAlpha(),Re=de.r,nt=de.g,ct=de.b;ge?(x[0]=Re,x[1]=nt,x[2]=ct,x[3]=Ce,V.clearBufferuiv(V.COLOR,0,x)):(M[0]=Re,M[1]=nt,M[2]=ct,M[3]=Ce,V.clearBufferiv(V.COLOR,0,M))}else Y|=V.COLOR_BUFFER_BIT}H&&(Y|=V.DEPTH_BUFFER_BIT),$&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Ae.dispose(),be.dispose(),oe.dispose(),b.dispose(),ee.dispose(),xe.dispose(),ae.dispose(),me.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",Qe),J.removeEventListener("sessionend",Qt),et.stop()};function Ee(C){C.preventDefault(),ju("WebGLRenderer: Context Lost."),I=!0}function He(){ju("WebGLRenderer: Context Restored."),I=!1;const C=D.autoReset,H=Te.enabled,$=Te.autoUpdate,Y=Te.needsUpdate,q=Te.type;re(),D.autoReset=C,Te.enabled=H,Te.autoUpdate=$,Te.needsUpdate=Y,Te.type=q}function xt(C){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ye(C){const H=C.target;H.removeEventListener("dispose",ye),Fe(H)}function Fe(C){it(C),b.remove(C)}function it(C){const H=b.get(C).programs;H!==void 0&&(H.forEach(function($){ue.releaseProgram($)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,$,Y,q,fe){H===null&&(H=tt);const ge=q.isMesh&&q.matrixWorld.determinant()<0,de=Ci(C,H,$,Y,q);Me.setMaterial(Y,ge);let Ce=$.index,Re=1;if(Y.wireframe===!0){if(Ce=K.getWireframeAttribute($),Ce===void 0)return;Re=2}const nt=$.drawRange,ct=$.attributes.position;let Ge=nt.start*Re,Pt=(nt.start+nt.count)*Re;fe!==null&&(Ge=Math.max(Ge,fe.start*Re),Pt=Math.min(Pt,(fe.start+fe.count)*Re)),Ce!==null?(Ge=Math.max(Ge,0),Pt=Math.min(Pt,Ce.count)):ct!=null&&(Ge=Math.max(Ge,0),Pt=Math.min(Pt,ct.count));const en=Pt-Ge;if(en<0||en===1/0)return;ae.setup(q,Y,de,$,Ce);let jt,Lt=Ke;if(Ce!==null&&(jt=te.get(Ce),Lt=B,Lt.setIndex(jt)),q.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*j()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(q.isLine){let Nn=Y.linewidth;Nn===void 0&&(Nn=1),Me.setLineWidth(Nn*j()),q.isLineSegments?Lt.setMode(V.LINES):q.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else q.isPoints?Lt.setMode(V.POINTS):q.isSprite&&Lt.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$u("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Nn=q._multiDrawStarts,Oe=q._multiDrawCounts,ci=q._multiDrawCount,yt=Ce?te.get(Ce).bytesPerElement:1,Xi=b.get(Y).currentProgram.getUniforms();for(let ir=0;ir<ci;ir++)Xi.setValue(V,"_gl_DrawID",ir),Lt.render(Nn[ir]/yt,Oe[ir])}else if(q.isInstancedMesh)Lt.renderInstances(Ge,en,q.count);else if($.isInstancedBufferGeometry){const Nn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Nn);Lt.renderInstances(Ge,en,Oe)}else Lt.render(Ge,en)};function _e(C,H,$){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,In(C,H,$),C.side=Mr,C.needsUpdate=!0,In(C,H,$),C.side=Fi):In(C,H,$)}this.compile=function(C,H,$=null){$===null&&($=C),E=oe.get($),E.init(H),A.push(E),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),C!==$&&C.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights();const Y=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const fe=q.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const de=fe[ge];_e(de,$,q),Y.add(de)}else _e(fe,$,q),Y.add(fe)}),E=A.pop(),Y},this.compileAsync=function(C,H,$=null){const Y=this.compile(C,H,$);return new Promise(q=>{function fe(){if(Y.forEach(function(ge){b.get(ge).currentProgram.isReady()&&Y.delete(ge)}),Y.size===0){q(C);return}setTimeout(fe,10)}lt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ze=null;function We(C){Ze&&Ze(C)}function Qe(){et.stop()}function Qt(){et.start()}const et=new bx;et.setAnimationLoop(We),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(C){Ze=C,J.setAnimationLoop(C),C===null?et.stop():et.start()},J.addEventListener("sessionstart",Qe),J.addEventListener("sessionend",Qt),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const $=J.enabled===!0&&J.isPresenting===!0,Y=v!==null&&(U===null||$)&&v.begin(S,U);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,H,U),E=oe.get(C,A.length),E.init(H),A.push(E),_t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Be.setFromProjectionMatrix(_t,gr,H.reversedDepth),Ie=this.localClippingEnabled,ke=ce.init(this.clippingPlanes,Ie),y=be.get(C,R.length),y.init(),R.push(y),J.enabled===!0&&J.isPresenting===!0){const ge=S.xr.getDepthSensingMesh();ge!==null&&kt(ge,H,-1/0,S.sortObjects)}kt(C,H,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Ve,Je),qe=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,qe&&Ae.addToRenderList(y,C),this.info.render.frame++,ke===!0&&ce.beginShadows();const q=E.state.shadowsArray;if(Te.render(q,C,H),ke===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&v.hasRenderPass())===!1){const ge=y.opaque,de=y.transmissive;if(E.setupLights(),H.isArrayCamera){const Ce=H.cameras;if(de.length>0)for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re];zt(ge,de,C,ct)}qe&&Ae.render(C);for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re];hn(y,C,ct,ct.viewport)}}else de.length>0&&zt(ge,de,C,H),qe&&Ae.render(C),hn(y,C,H)}U!==null&&L===0&&(G.updateMultisampleRenderTarget(U),G.updateRenderTargetMipmap(U)),Y&&v.end(S),C.isScene===!0&&C.onAfterRender(S,C,H),ae.resetDefaultState(),F=-1,k=null,A.pop(),A.length>0?(E=A[A.length-1],ke===!0&&ce.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function kt(C,H,$,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){Y&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_t);const ge=xe.update(C),de=C.material;de.visible&&y.push(C,ge,de,$,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){const ge=xe.update(C),de=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ye.copy(ge.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4(_t)),Array.isArray(de)){const Ce=ge.groups;for(let Re=0,nt=Ce.length;Re<nt;Re++){const ct=Ce[Re],Ge=de[ct.materialIndex];Ge&&Ge.visible&&y.push(C,ge,Ge,$,Ye.z,ct)}}else de.visible&&y.push(C,ge,de,$,Ye.z,null)}}const fe=C.children;for(let ge=0,de=fe.length;ge<de;ge++)kt(fe[ge],H,$,Y)}function hn(C,H,$,Y){const{opaque:q,transmissive:fe,transparent:ge}=C;E.setupLightsView($),ke===!0&&ce.setGlobalState(S.clippingPlanes,$),Y&&Me.viewport(z.copy(Y)),q.length>0&&wt(q,H,$),fe.length>0&&wt(fe,H,$),ge.length>0&&wt(ge,H,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function zt(C,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Ge=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:Ge?Pn:yi,minFilter:bi,samples:je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const fe=E.state.transmissionRenderTarget[Y.id],ge=Y.viewport||z;fe.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(X),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Ae.render($);const nt=S.toneMapping;S.toneMapping=yr;const ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),ke===!0&&ce.setGlobalState(S.clippingPlanes,Y),wt(C,$,Y),G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pt=0,en=H.length;Pt<en;Pt++){const jt=H[Pt],{object:Lt,geometry:Nn,material:Oe,group:ci}=jt;if(Oe.side===Fi&&Lt.layers.test(Y.layers)){const yt=Oe.side;Oe.side=oi,Oe.needsUpdate=!0,Mt(Lt,$,Y,Nn,Oe,ci),Oe.side=yt,Oe.needsUpdate=!0,Ge=!0}}Ge===!0&&(G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe))}S.setRenderTarget(de,Ce,Re),S.setClearColor(X,N),ct!==void 0&&(Y.viewport=ct),S.toneMapping=nt}function wt(C,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let q=0,fe=C.length;q<fe;q++){const ge=C[q],{object:de,geometry:Ce,group:Re}=ge;let nt=ge.material;nt.allowOverride===!0&&Y!==null&&(nt=Y),de.layers.test($.layers)&&Mt(de,H,$,Ce,nt,Re)}}function Mt(C,H,$,Y,q,fe){C.onBeforeRender(S,H,$,Y,q,fe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(S,H,$,Y,C,fe),q.transparent===!0&&q.side===Fi&&q.forceSinglePass===!1?(q.side=oi,q.needsUpdate=!0,S.renderBufferDirect($,H,Y,q,C,fe),q.side=Mr,q.needsUpdate=!0,S.renderBufferDirect($,H,Y,q,C,fe),q.side=Fi):S.renderBufferDirect($,H,Y,q,C,fe),C.onAfterRender(S,H,$,Y,q,fe)}function In(C,H,$){H.isScene!==!0&&(H=tt);const Y=b.get(C),q=E.state.lights,fe=E.state.shadowsArray,ge=q.state.version,de=ue.getParameters(C,q.state,fe,H,$),Ce=ue.getProgramCacheKey(de);let Re=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=ee.get(C.envMap||Y.environment,nt),Y.envMapRotation=Y.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",ye),Re=new Map,Y.programs=Re);let ct=Re.get(Ce);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===ge)return Dn(C,de),ct}else de.uniforms=ue.getUniforms(C),C.onBeforeCompile(de,S),ct=ue.acquireProgram(de,Ce),Re.set(Ce,ct),Y.uniforms=de.uniforms;const Ge=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),Dn(C,de),Y.needsLights=dn(C),Y.lightsStateVersion=ge,Y.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=ct,Y.uniformsList=null,ct}function Ut(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Au.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Dn(C,H){const $=b.get(C);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ci(C,H,$,Y,q){H.isScene!==!0&&(H=tt),G.resetTextureUnits();const fe=H.fog,ge=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,de=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:La,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Re=ee.get(Y.envMap||ge,Ce),nt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ct=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!$.morphAttributes.position,Pt=!!$.morphAttributes.normal,en=!!$.morphAttributes.color;let jt=yr;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(jt=S.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nn=Lt!==void 0?Lt.length:0,Oe=b.get(Y),ci=E.state.lights;if(ke===!0&&(Ie===!0||C!==k)){const yn=C===k&&Y.id===F;ce.setState(Y,C,yn)}let yt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ci.state.version||Oe.outputColorSpace!==de||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Re||Y.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ce.numPlanes||Oe.numIntersection!==ce.numIntersection)||Oe.vertexAlphas!==nt||Oe.vertexTangents!==ct||Oe.morphTargets!==Ge||Oe.morphNormals!==Pt||Oe.morphColors!==en||Oe.toneMapping!==jt||Oe.morphTargetsCount!==Nn)&&(yt=!0):(yt=!0,Oe.__version=Y.version);let Xi=Oe.currentProgram;yt===!0&&(Xi=In(Y,H,q));let ir=!1,Fs=!1,Io=!1;const It=Xi.getUniforms(),An=Oe.uniforms;if(Me.useProgram(Xi.program)&&(ir=!0,Fs=!0,Io=!0),Y.id!==F&&(F=Y.id,Fs=!0),ir||k!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",C.projectionMatrix),It.setValue(V,"viewMatrix",C.matrixWorldInverse);const is=It.map.cameraPosition;is!==void 0&&is.setValue(V,we.setFromMatrixPosition(C.matrixWorld)),je.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&It.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,Fs=!0,Io=!0)}if(Oe.needsLights&&(ci.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",ci.state.directionalShadowMap,G),ci.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",ci.state.spotShadowMap,G),ci.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",ci.state.pointShadowMap,G)),q.isSkinnedMesh){It.setOptional(V,q,"bindMatrix"),It.setOptional(V,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),It.setValue(V,"boneTexture",yn.boneTexture,G))}q.isBatchedMesh&&(It.setOptional(V,q,"batchingTexture"),It.setValue(V,"batchingTexture",q._matricesTexture,G),It.setOptional(V,q,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",q._indirectTexture,G),It.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",q._colorsTexture,G));const ns=$.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&pe.update(q,$,Xi),(Fs||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,It.setValue(V,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(An.envMapIntensity.value=H.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=CR()),Fs&&(It.setValue(V,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&fn(An,Io),fe&&Y.fog===!0&&De.refreshFogUniforms(An,fe),De.refreshMaterialUniforms(An,Y,Se,ne,E.state.transmissionRenderTarget[C.id]),Au.upload(V,Ut(Oe),An,G)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Au.upload(V,Ut(Oe),An,G),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&It.setValue(V,"center",q.center),It.setValue(V,"modelViewMatrix",q.modelViewMatrix),It.setValue(V,"normalMatrix",q.normalMatrix),It.setValue(V,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let is=0,Do=yn.length;is<Do;is++){const Lm=yn[is];me.update(Lm,Xi),me.bind(Lm,Xi)}}return Xi}function fn(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function dn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,H,$){const Y=b.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=H,b.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const $=b.get(C);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const xn=V.createFramebuffer();this.setRenderTarget=function(C,H=0,$=0){U=C,P=H,L=$;let Y=null,q=!1,fe=!1;if(C){const de=b.get(C);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(V.FRAMEBUFFER,de.__webglFramebuffer),z.copy(C.viewport),O.copy(C.scissor),Z=C.scissorTest,Me.viewport(z),Me.scissor(O),Me.setScissorTest(Z),F=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(de.__hasExternalTextures)G.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(de.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Re=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[H])?Y=Re[H][$]:Y=Re[H],q=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?Y=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?Y=Re[$]:Y=Re,z.copy(C.viewport),O.copy(C.scissor),Z=C.scissorTest}else z.copy(Q).multiplyScalar(Se).floor(),O.copy(ie).multiplyScalar(Se).floor(),Z=le;if($!==0&&(Y=xn),Me.bindFramebuffer(V.FRAMEBUFFER,Y)&&Me.drawBuffers(C,Y),Me.viewport(z),Me.scissor(O),Me.setScissorTest(Z),q){const de=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,de.__webglTexture,$)}else if(fe){const de=H;for(let Ce=0;Ce<C.textures.length;Ce++){const Re=b.get(C.textures[Ce]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ce,Re.__webglTexture,$,de)}}else if(C!==null&&$!==0){const de=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,$)}F=-1},this.readRenderTargetPixels=function(C,H,$,Y,q,fe,ge,de=0){if(!(C&&C.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){Me.bindFramebuffer(V.FRAMEBUFFER,Ce);try{const Re=C.textures[de],nt=Re.format,ct=Re.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!je.textureFormatReadable(nt)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(ct)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&$>=0&&$<=C.height-q&&V.readPixels(H,$,Y,q,he.convert(nt),he.convert(ct),fe)}finally{const Re=U!==null?b.get(U).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,H,$,Y,q,fe,ge,de=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce)if(H>=0&&H<=C.width-Y&&$>=0&&$<=C.height-q){Me.bindFramebuffer(V.FRAMEBUFFER,Ce);const Re=C.textures[de],nt=Re.format,ct=Re.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!je.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,fe.byteLength,V.STREAM_READ),V.readPixels(H,$,Y,q,he.convert(nt),he.convert(ct),0);const Pt=U!==null?b.get(U).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,Pt);const en=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await sb(V,en,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,fe),V.deleteBuffer(Ge),V.deleteSync(en),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,$=0){const Y=Math.pow(2,-$),q=Math.floor(C.image.width*Y),fe=Math.floor(C.image.height*Y),ge=H!==null?H.x:0,de=H!==null?H.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,ge,de,q,fe),Me.unbindTexture()};const wr=V.createFramebuffer(),Lo=V.createFramebuffer();this.copyTextureToTexture=function(C,H,$=null,Y=null,q=0,fe=0){let ge,de,Ce,Re,nt,ct,Ge,Pt,en;const jt=C.isCompressedTexture?C.mipmaps[fe]:C.image;if($!==null)ge=$.max.x-$.min.x,de=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,nt=$.min.y,ct=$.isBox3?$.min.z:0;else{const An=Math.pow(2,-q);ge=Math.floor(jt.width*An),de=Math.floor(jt.height*An),C.isDataArrayTexture?Ce=jt.depth:C.isData3DTexture?Ce=Math.floor(jt.depth*An):Ce=1,Re=0,nt=0,ct=0}Y!==null?(Ge=Y.x,Pt=Y.y,en=Y.z):(Ge=0,Pt=0,en=0);const Lt=he.convert(H.format),Nn=he.convert(H.type);let Oe;H.isData3DTexture?(G.setTexture3D(H,0),Oe=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(G.setTexture2DArray(H,0),Oe=V.TEXTURE_2D_ARRAY):(G.setTexture2D(H,0),Oe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const ci=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xi=V.getParameter(V.UNPACK_SKIP_PIXELS),ir=V.getParameter(V.UNPACK_SKIP_ROWS),Fs=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Re),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);const Io=C.isDataArrayTexture||C.isData3DTexture,It=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const An=b.get(C),ns=b.get(H),yn=b.get(An.__renderTarget),is=b.get(ns.__renderTarget);Me.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Do=0;Do<Ce;Do++)Io&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,q,ct+Do),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(H).__webglTexture,fe,en+Do)),V.blitFramebuffer(Re,nt,ge,de,Ge,Pt,ge,de,V.DEPTH_BUFFER_BIT,V.NEAREST);Me.bindFramebuffer(V.READ_FRAMEBUFFER,null),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||b.has(C)){const An=b.get(C),ns=b.get(H);Me.bindFramebuffer(V.READ_FRAMEBUFFER,wr),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,Lo);for(let yn=0;yn<Ce;yn++)Io?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,q,ct+yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,q),It?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ns.__webglTexture,fe,en+yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ns.__webglTexture,fe),q!==0?V.blitFramebuffer(Re,nt,ge,de,Ge,Pt,ge,de,V.COLOR_BUFFER_BIT,V.NEAREST):It?V.copyTexSubImage3D(Oe,fe,Ge,Pt,en+yn,Re,nt,ge,de):V.copyTexSubImage2D(Oe,fe,Ge,Pt,Re,nt,ge,de);Me.bindFramebuffer(V.READ_FRAMEBUFFER,null),Me.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,Nn,jt.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,jt.data):V.texSubImage3D(Oe,fe,Ge,Pt,en,ge,de,Ce,Lt,Nn,jt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,ge,de,Lt,Nn,jt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,jt.width,jt.height,Lt,jt.data):V.texSubImage2D(V.TEXTURE_2D,fe,Ge,Pt,ge,de,Lt,Nn,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ci),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xi),V.pixelStorei(V.UNPACK_SKIP_ROWS,ir),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fs),fe===0&&H.generateMipmaps&&V.generateMipmap(Oe),Me.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,Me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const PR=parseInt(dh.replace(/\D+/g,""));function pp(r,e){if(e===YM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===op||e===ix){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===op)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function eh(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const ao="srgb",$r="srgb-linear",X_=3001,LR=3e3;class Sh extends Po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new FR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new KR(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=kl.extractUrlBase(e);o=kl.resolveURL(c,this.path)}else o=kl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new _m(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(eh(new Uint8Array(e.slice(0,4)))===Cx){try{o[pt.KHR_BINARY_GLTF]=new ZR(e)}catch(u){i&&i(u);return}s=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(eh(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new uC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:o[u]=new NR;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new JR(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[u]=new QR;break;case pt.KHR_MESH_QUANTIZATION:o[u]=new eC;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function IR(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DR{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],$r);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ju(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xm(u),c.distance=f;break;case"spot":c=new up(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ur(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class NR{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wr}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$r),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ao))}return Promise.all(i)}}class UR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class FR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class OR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class BR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class kR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$r)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ao)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class zR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class VR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],$r),Promise.all(s)}}class GR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],$r),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ao)),Promise.all(s)}}class WR{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class XR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class qR{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class YR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $R{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class KR{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const p of f){const _=new st,m=new W,g=new es,x=new W(1,1,1),M=new $b(p.geometry,p.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,_.compose(m,g,x));for(const y in l)if(y==="_COLOR_0"){const E=l[y];M.instanceColor=new lp(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);Yt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Cx="glTF",sl=12,q_={JSON:1313821514,BIN:5130562};class ZR{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sl);if(this.header={magic:eh(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-sl,i=new DataView(e,sl);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===q_.JSON){const l=new Uint8Array(e,sl+s,o);this.content=eh(l)}else if(a===q_.BIN){const l=sl+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=mp[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=mp[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=ga[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},a,c,$r,h)})})}}class QR{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eC{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Px extends ka{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,_=p-c,m=-2*d+3*h,g=d-h,x=1-m,M=g-h+f;for(let y=0;y!==a;y++){const E=o[_+y+a],R=o[_+y+l]*u,A=o[p+y+a],v=o[p+y]*u;s[y]=x*E+M*R+m*A+g*v}return s}}const tC=new es;class nC extends Px{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return tC.fromArray(s).normalize().toArray(s),s}}const Ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Y_={9728:En,9729:Bt,9984:Kv,9985:Mu,9986:ml,9987:bi},j_={33071:Gn,33648:qu,10497:Ca},Df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...PR>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iC={CUBICSPLINE:void 0,LINEAR:ac,STEP:oc},Nf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),r.DefaultMaterial}function Xs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ur(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sC(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function oC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aC(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uf(t.attributes):e=r.indices+":"+Uf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Uf(r.targets[n]);return e}function Uf(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cC=new st;class uC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new _h(this.options.manager):this.textureLoader=new TT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _m(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xs(s,a,i),Ur(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(kl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Df[i.type],a=ga[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Df[i.type],c=ga[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(d&&d!==f){const g=Math.floor(h/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(x);M||(_=new c(a,g*d,i.count*d/u),M=new Gb(_,d/u),t.cache.add(x,M)),m=new hm(M,l,h%d/u,p)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),m=new Ht(_,l,p);if(i.sparse!==void 0){const g=Df.SCALAR,x=ga[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new x(o[1],M,i.sparse.count*g),R=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized));for(let A=0,v=E.length;A<v;A++){const S=E[A];if(m.setX(S,R[A*l]),l>=2&&m.setY(S,R[A*l+1]),l>=3&&m.setZ(S,R[A*l+2]),l>=4&&m.setW(S,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Y_[h.magFilter]||Bt,u.minFilter=Y_[h.minFilter]||bi,u.wrapS=j_[h.wrapS]||Ca,u.wrapT=j_[h.wrapT]||Ca,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(_){const m=new cn(_);m.needsUpdate=!0,h(m)}),t.load(kl.resolveURL(f,s.path),p,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ur(f,o),f.userData.mimeType=o.mimeType||lC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===X_?ao:$r),"colorSpace"in o?o.colorSpace=i:o.encoding=i===ao?X_:LR),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fx,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hx,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gm}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const f=i[pt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],$r),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,ao)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Fi);const u=s.alphaMode||Nf.OPAQUE;if(u===Nf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Wr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Wr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Wr){const f=s.emissiveFactor;a.emissive=new Ne().setRGB(f[0],f[1],f[2],$r)}return s.emissiveTexture!==void 0&&o!==Wr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ao)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ur(f,s),t.associations.set(f,{materials:e}),s.extensions&&Xs(i,f,s),f})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=aC(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=$_(new Wn,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?rC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){const _=u[d],m=o[d];let g;const x=c[d];if(m.mode===Ii.TRIANGLES||m.mode===Ii.TRIANGLE_STRIP||m.mode===Ii.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new qb(_,x):new un(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Ii.TRIANGLE_STRIP?g.geometry=pp(g.geometry,ix):m.mode===Ii.TRIANGLE_FAN&&(g.geometry=pp(g.geometry,op));else if(m.mode===Ii.LINES)g=new Qb(_,x);else if(m.mode===Ii.LINE_STRIP)g=new pm(_,x);else if(m.mode===Ii.LINE_LOOP)g=new eT(_,x);else if(m.mode===Ii.POINTS)g=new mm(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&oC(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ur(g,s),m.extensions&&Xs(i,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Xs(i,f[0],s),f[0];const h=new Hr;s.extensions&&Xs(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(bo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ur(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new st;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fm(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],p=f[2],_=f[3],m=f[4],g=[];for(let x=0,M=h.length;x<M;x++){const y=h[x],E=d[x],R=p[x],A=_[x],v=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,E,R,A,v);if(S)for(let I=0;I<S.length;I++)g.push(S[I])}return new pT(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,cC)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ux:c.length>1?u=new Hr:c.length===1?u=c[0]:u=new Yt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ur(u,s),s.extensions&&Xs(n,u,s),s.matrix!==void 0){const f=new st;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Hr;n.name&&(s.name=i.createUniqueName(n.name)),Ur(s,n),n.extensions&&Xs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof er||h instanceof cn)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];hs[s.path]===hs.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(hs[s.path]){case hs.weights:c=Na;break;case hs.rotation:c=Ua;break;case hs.position:case hs.scale:c=Fa;break;default:n.itemSize===1?c=Na:c=Fa;break}const u=i.interpolation!==void 0?iC[i.interpolation]:ac,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const p=new c(l[h]+"."+hs[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gp(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ua?nC:Px;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hC(r,e,t){const n=e.attributes,i=new tr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),a.normalized){const u=gp(ga[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new W,l=new W;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){const _=gp(ga[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Er;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function $_(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=mp[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ur(r,e),hC(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sC(r,e.targets,t):r})}class Lx extends yT{constructor(e){super(e),this.type=Pn}parse(e){const o=function(v,S){switch(v){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},f=function(v,S,I){S=S||1024;let L=v.pos,U=-1,F=0,k="",z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(L,L+128)));for(;0>(U=z.indexOf(`
`))&&F<S&&L<v.byteLength;)k+=z,F+=z.length,L+=128,z+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(L,L+128)));return-1<U?(v.pos+=F+U+1,k+z.slice(0,U)):!1},h=function(v){const S=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,z;for((v.pos>=v.byteLength||!(k=f(v)))&&o(1,"no header found"),(z=k.match(S))||o(3,"bad initial token"),F.valid|=1,F.programtype=z[1],F.string+=k+`
`;k=f(v),k!==!1;){if(F.string+=k+`
`,k.charAt(0)==="#"){F.comments+=k+`
`;continue}if((z=k.match(I))&&(F.gamma=parseFloat(z[1])),(z=k.match(P))&&(F.exposure=parseFloat(z[1])),(z=k.match(L))&&(F.valid|=2,F.format=z[1]),(z=k.match(U))&&(F.valid|=4,F.height=parseInt(z[1],10),F.width=parseInt(z[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(v,S,I){const P=S;if(P<8||P>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);P!==(v[2]<<8|v[3])&&o(3,"wrong scanline width");const L=new Uint8Array(4*S*I);L.length||o(4,"unable to allocate buffer space");let U=0,F=0;const k=4*P,z=new Uint8Array(4),O=new Uint8Array(k);let Z=I;for(;Z>0&&F<v.byteLength;){F+4>v.byteLength&&o(1),z[0]=v[F++],z[1]=v[F++],z[2]=v[F++],z[3]=v[F++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=P)&&o(3,"bad rgbe scanline format");let X=0,N;for(;X<k&&F<v.byteLength;){N=v[F++];const ne=N>128;if(ne&&(N-=128),(N===0||X+N>k)&&o(3,"bad scanline data"),ne){const Se=v[F++];for(let Ve=0;Ve<N;Ve++)O[X++]=Se}else O.set(v.subarray(F,F+N),X),X+=N,F+=N}const se=P;for(let ne=0;ne<se;ne++){let Se=0;L[U]=O[ne+Se],Se+=P,L[U+1]=O[ne+Se],Se+=P,L[U+2]=O[ne+Se],Se+=P,L[U+3]=O[ne+Se],U+=4}Z--}return L},p=function(v,S,I,P){const L=v[S+3],U=Math.pow(2,L-128)/255;I[P+0]=v[S+0]*U,I[P+1]=v[S+1]*U,I[P+2]=v[S+2]*U,I[P+3]=1},_=function(v,S,I,P){const L=v[S+3],U=Math.pow(2,L-128)/255;I[P+0]=Vc.toHalfFloat(Math.min(v[S+0]*U,65504)),I[P+1]=Vc.toHalfFloat(Math.min(v[S+1]*U,65504)),I[P+2]=Vc.toHalfFloat(Math.min(v[S+2]*U,65504)),I[P+3]=Vc.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const g=h(m),x=g.width,M=g.height,y=d(m.subarray(m.pos),x,M);let E,R,A;switch(this.type){case ei:A=y.length/4;const v=new Float32Array(A*4);for(let I=0;I<A;I++)p(y,I*4,v,I*4);E=v,R=ei;break;case Pn:A=y.length/4;const S=new Uint16Array(A*4);for(let I=0;I<A;I++)_(y,I*4,S,I*4);E=S,R=Pn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:M,data:E,header:g.string,gamma:g.gamma,exposure:g.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case ei:case Pn:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=Bt,o.magFilter=Bt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const fC=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:Sh,RGBELoader:Lx,toTrianglesDrawMode:pp},Symbol.toStringTag,{value:"Module"}));class dC{constructor(){this.cacheDom(),this.loadingManager=new yx,this.gltfLoader=new Sh(this.loadingManager),this.animationComplete=!1,this.pendingLoadBatches=0,this.runPromise=null,this.runResolver=null,this.isCompleting=!1,this.init=this.init.bind(this),this.load=this.load.bind(this)}cacheDom(){this.container=document.querySelector(".preloader"),this.progressBar=document.querySelector(".progress-bar"),this.progressIndicator=document.querySelector(".progress-bar-indicator"),this.progressText=document.querySelector(".progress-bar-copy span"),this.resizeObserver=null}generateGrid(){const e=document.querySelector(".preloader-grid");if(!e)return;const t=window.innerWidth,n=window.innerHeight,i=t*n,s=Math.sqrt(i/200),o=Math.ceil(t/s),a=Math.ceil(n/s);e.style.setProperty("grid-template-columns",`repeat(${o}, 1fr)`),e.style.setProperty("grid-template-rows",`repeat(${a}, 1fr)`),e.innerHTML="";const l=o*a,c=document.createDocumentFragment();for(let u=0;u<l;u++){const f=document.createElement("div");f.classList.add("preloader-block"),c.appendChild(f)}e.appendChild(c),this.preloaderBlocks=document.querySelectorAll(".preloader-block")}init(){this.cacheDom(),this.generateGrid();let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>this.generateGrid(),200)});const t=sessionStorage.getItem("preloaderSeen")==="true";return this.container?this.runPromise?this.runPromise:t?(this.container.style.display="none",Promise.resolve()):(this.container.style.display="flex",this.animationComplete=!1,this.pendingLoadBatches=0,this.isCompleting=!1,this.runPromise=new Promise(n=>{this.runResolver=n,this.startSequence()}),this.runPromise):Promise.resolve()}async load(e){if(this.pendingLoadBatches+=1,!e||e.length===0){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion();return}const t=e.map(n=>new Promise((i,s)=>{this.gltfLoader.load(n,i,void 0,s)}));try{await Promise.all(t)}catch(n){console.error("Error loading assets:",n)}finally{this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}}hold(){this.pendingLoadBatches+=1}release(){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}startSequence(){if(!this.progressIndicator||!this.progressText||!this.progressBar){this.animationComplete=!0,this.checkCompletion();return}Le.set(this.preloaderBlocks,{opacity:1}),Le.set(this.progressIndicator,{"--progress":0}),this.progressText&&(this.progressText.textContent="0%"),Le.to(this.progressBar,{opacity:1,duration:.075,ease:"power2.inOut",delay:.5,repeat:1,yoyo:!0,onComplete:()=>{Le.set(this.progressBar,{opacity:1}),this.startIncrements()}})}startIncrements(){let e=0;const t=5;let n=0;const i=this.generateRandomIncrements(t),s=()=>{if(n>=t){this.animationComplete=!0,this.checkCompletion();return}const o=i[n],a=Math.min(e+o,100),l=200+Math.random()*400;setTimeout(()=>{Le.to(this.progressIndicator,{"--progress":a/100,duration:.5,ease:"power2.out",onUpdate:()=>{const c=Math.round(Le.getProperty(this.progressIndicator,"--progress")*100);this.progressText&&(this.progressText.textContent=`${c}%`)},onComplete:()=>{e=a,n++,s()}})},l)};s()}generateRandomIncrements(e){const t=[];let n=100;const i=30;for(let s=0;s<e-1;s++){const o=Math.min(i,n-(e-1-s)),a=Math.max(5,Math.floor(n/(e-s)*.5)),l=Math.floor(Math.random()*(o-a))+a;t.push(l),n-=l}return t.push(n),t.sort(()=>Math.random()-.5)}checkCompletion(){this.runPromise&&this.pendingLoadBatches===0&&this.animationComplete&&this.complete()}resolveRun(){this.runResolver&&this.runResolver(),this.runResolver=null,this.runPromise=null,this.isCompleting=!1}complete(){if(!this.container){this.resolveRun();return}this.isCompleting||(this.isCompleting=!0,sessionStorage.setItem("preloaderSeen","true"),Le.to(this.progressBar,{opacity:0,duration:.075,ease:"power2.inOut",delay:.3,repeat:1,yoyo:!0,onComplete:()=>{Le.set(this.progressBar,{opacity:0}),setTimeout(()=>{if(!this.preloaderBlocks||this.preloaderBlocks.length===0){this.container.style.display="none",this.resolveRun();return}const e=.8;let t=0;const n=this.preloaderBlocks.length;this.preloaderBlocks.forEach(i=>{const s=Math.random()*e;Le.to(i,{opacity:0,duration:.1,ease:"power1.out",delay:s,onComplete:()=>{Le.set(i,{opacity:0}),t++,t>=n&&(this.container.style.display="none",this.resolveRun())}})})},200)}}))}}const Oi=new dC,Mh=[{id:"money-me",slug:"money-me",title:"Money.me",image:"/archive/Naman_A_close-up_composition_of_delicate_sculpture_of_Centella__aace8618-81de-463e-8679-702770b9f84b.png",href:"/film"},{id:"haptic",slug:"haptic",title:"HAPTIC",image:"/archive/Naman_aluminum_tube_of_hand_cream_on_a_rock_standing_on_a_rugge_7ba8faf1-3491-429c-8e0a-12003c3a3b87.png",href:"/film"},{id:"flashcloud",slug:"flashcloud",title:"flashcloud",image:"/archive/Naman_A_north_Indian_postman_standing_alone_in_a_dimly_lit_op_79e71e38-b114-4803-a9ff-70f8b74bbca1_2.png",href:"/film"},{id:"gang",slug:"gang",title:"gang",image:"/archive/1.png",href:"/film"},{id:"t-bonk",slug:"t-bonk",title:"t.BONK",image:"/archive/Naman_A_close-up_composition_of_delicate_sculpture_of_cica_gl_848b5b68-582f-44b9-b9f9-a58993358e22_2.png",href:"/film"},{id:"perception-pod",slug:"perception-pod",title:"Perception pod",image:"/archive/Naman_A_surreal_still-life_composition_blending_luxury_with_s_7ffffa3b-e3b3-4578-bb03-62480fcdfd8a_1.png",href:"/film"}],Ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pC=new Ga(-1,1,1,-1,0,1);class mC extends Wn{constructor(){super(),this.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ei([0,2,0,0,2,0],2))}}const gC=new mC;class Em{constructor(e){this._mesh=new un(gC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wi extends Wa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hc.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Em(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class K_ extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class _C extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wi(Ru),this.copyPass.material.blending=xr,this.timer=new bm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}K_!==void 0&&(o instanceof K_?n=!0:o instanceof _C&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const vC="modulepreload",xC=function(r){return"/"+r},Z_={},yC=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(t.map(u=>{if(u=xC(u),u in Z_)return;Z_[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":vC,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class Th extends Wa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const uu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Eh extends Wa{constructor(){super(),this.isOutputPass=!0,this.uniforms=hc.clone(uu.uniforms),this.material=new _x({name:uu.name,uniforms:this.uniforms,vertexShader:uu.vertexShader,fragmentShader:uu.fragmentShader}),this._fsQuad=new Em(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$p?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const SC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends Wa{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(s,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ai(s,o,{type:Pn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new ai(s,o,{type:Pn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=SC;this.highPassUniforms=hc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hc.clone(Ru.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Ru.vertexShader,fragmentShader:Ru.fragmentShader,premultipliedAlpha:!0,blending:ic,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Wr,this._fsQuad=new Em(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Ds.BlurDirectionX=new Ue(1,0);Ds.BlurDirectionY=new Ue(0,1);function wm({darkness:r=.15,offset:e=1}={}){return{name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:r},uOffset:{value:e}},vertexShader:`
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
    `}}function wh({grain:r=.015}={}){return{name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:r}},vertexShader:`
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
          23.14069263277926, // e^pi  (Gelfond's constant)
          2.665144142690225  // 2^sqrt(2) (Gelfond–Schneider constant)
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
    `}}function Ah({shift:r=.0056,edgeStart:e=.2,edgeEnd:t=.75,preserveAlpha:n=!1}={}){return{name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null},uShift:{value:r},uEdgeStart:{value:e},uEdgeEnd:{value:t}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uShift;
      uniform float uEdgeStart;
      uniform float uEdgeEnd;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec2 center = uv - 0.5;
        float dist = length(center);
        float edge = smoothstep(uEdgeStart, uEdgeEnd, dist);

        float shift = uShift * edge;
        vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
        vec4 g = texture2D(tDiffuse, uv);
        vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

        gl_FragColor = vec4(r.r, g.g, b.b, ${n?"g.a":"1.0"});
      }
    `}}function Am(){return{uTime:{value:0},uGrain:{value:.03}}}var J_={};Le.registerPlugin(at);let bt=null,cr=null,on=null,Ot=null,zl=null,Vl=null,Gl=null,Zs=null,qr=!1,$t=null,lo=null,Zt=null,co=null,vs=null,uo=null,mn=null;const th=new Set;let _a=null,fc=null,Vr=null,MC=null,ho=null;const Oa=Am();Oa.uResolution={value:new Ue(window.innerWidth,window.innerHeight)};let dc=null;const Dr={angle:Math.PI/2,y:0,tilt:0},fi={angle:Math.PI/2,y:0,tilt:0},hr={x:0,y:0,z:0},ol={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Ct={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let fo=null,pc=null,mc=1;const Ix=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function bC(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:Ix.enableShadows,shadowMapSize:512}}function TC(r,e,t){typeof process<"u"&&J_&&J_.VITEST||(co=new Qu(e),co.compileEquirectangularShader&&co.compileEquirectangularShader(),yC(async()=>{const{RGBELoader:n}=await Promise.resolve().then(()=>fC);return{RGBELoader:n}},void 0).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Ot){s.dispose?.();return}vs&&vs.dispose?.(),vs=co.fromEquirectangular(s),r.environment=vs.texture,r.background=vs.texture,RC(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function EC(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=bM;return}r.shadowMap.type=So,$t&&($t.castShadow=!0,$t.shadow.mapSize.set(1024,1024),$t.shadow.bias=-1e-4,$t.shadow.normalBias=.02,$t.shadow.camera.near=1,$t.shadow.camera.far=30,$t.shadow.camera.left=-7,$t.shadow.camera.right=7,$t.shadow.camera.top=7,$t.shadow.camera.bottom=-7,$t.target.position.set(Ct.modelX,Ct.modelY,Ct.modelZ),e.add($t.target));const n=new ts(20,20),i=new mx({opacity:.22});Zt=new un(n,i),Zt.rotation.x=-Math.PI/2,Zt.position.set(Ct.modelX,Ct.shadowY,Ct.modelZ),Zt.receiveShadow=!0,e.add(Zt)}function wC(r,e,t){const n=new Th(e,t);r.addPass(n),dc=new Ds(new Ue(window.innerWidth,window.innerHeight),.03,.3,1),r.addPass(dc);const i=new Wi(wm());r.addPass(i);const s=new Wi(wh());s.uniforms.uGrain=Oa.uGrain,s.uniforms.uTime=Oa.uTime,r.addPass(s);const o=new Wi(Ah());r.addPass(o);const a=new Eh;r.addPass(a)}function AC(){bt&&(bt.toneMappingExposure=Ct.exposure),lo&&(lo.intensity=Ct.ambientIntensity,lo.color?.set&&lo.color.set(Ct.ambientColor)),$t&&($t.intensity=Ct.keyIntensity,$t.color?.set&&$t.color.set(Ct.keyColor),$t.position.set(Ct.keyX,Ct.keyY,Ct.keyZ))}function RC(){Ot&&(Ot.backgroundIntensity=Ct.envBackgroundIntensity,Ot.backgroundBlurriness=Ct.envBackgroundBlur)}function CC(){Zt&&(Zt.material&&(Zt.material.opacity=Ct.shadowOpacity),Zt.position.set(Ct.modelX,Ct.shadowY,Ct.modelZ))}function PC(){th.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=bo.clamp((r.userData.baseRoughness??r.roughness)*Ct.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=bo.clamp((r.userData.baseMetalness??r.metalness)*Ct.metalnessScale,0,1)),r.envMapIntensity=bo.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Ct.envReflection,.2,5),r.needsUpdate=!0)})}function LC(r){r.map&&(r.map.colorSpace=Kt),r.emissiveMap&&(r.emissiveMap.colorSpace=Kt),r.needsUpdate=!0}function IC(r){return new Ri({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function DC(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=IC(t)),LC(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,th.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function NC(r){const e=new tr().setFromObject(r),t=e.getCenter(new W),n=e.getSize(new W);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function Q_(r){NC(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,DC(e))})}function UC(){return ho||(ho=new Promise(async r=>{const e="/home/scene.glb",t="/work.glb";await Promise.all([Oi.init(),Oi.load([e,t])]),Oi.hold();const n=new Sh,i=a=>new Promise(l=>{n.load(a,c=>{l(c.scene)},void 0,c=>{console.error(`[three.js] Error loading ${a}`,c),l(null)})}),[s,o]=await Promise.all([i(e),i(t)]);if(!Ot||!qr){Oi.release(),r();return}s&&(_a=s,Q_(_a),_a.traverse(a=>{if(!a.isMesh)return;const l=a.name.toLowerCase();(l.includes("volume")||l.includes("glow")||l.includes("light"))&&(ih=Dx(a,on,{c:1.45,p:2.1,glowColor:"#fff3c6",op:.18}))})),o&&(fc=o,Q_(fc)),PC(),setTimeout(()=>{Oi.release()},200),r()}),ho)}async function nh(r){if(!Ot||(ho&&await ho,!Ot||!qr))return;const e=r==="work"?fc:_a;!e||Vr===e||(Vr&&Vr.parent&&Ot.remove(Vr),e.position.set(Ct.modelX,Ct.modelY,Ct.modelZ),Ot.add(e),Vr=e,Ot&&(r==="work"?Ot.fog=new Ro(15789284,.035):Ot.fog=new Ro(657935,.045)),Rm())}function FC(r,e){fo=r,pc=e}function OC(){fo=null,pc=null}function e0(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}function Dx(r,e,t={}){const{c:n=1.45,p:i=2.1,glowColor:s="#fff3c6",op:o=.18}=t,a=new Wr({side:Fi,blending:ic,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1});return a.onBeforeCompile=l=>{l.uniforms.c={value:n},l.uniforms.p={value:i},l.uniforms.glowColor={value:new Ne(s)},l.uniforms.op={value:o},l.vertexShader=`
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
    `,a.userData.shader=l},a.customProgramCacheKey=()=>`fake-volume-${s}-${n}-${i}`,r.material=a,r.renderOrder=10,r.needsUpdate=!0,{update(l){},setOpacity(l){const c=a.userData.shader;c&&(c.uniforms.op.value=l)}}}let ih=null;const _l=200,Nx={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function BC(r){const e=new Wn,t=new Float32Array(_l*3),n=new Float32Array(_l),i=new Float32Array(_l),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=Nx;for(let h=0;h<_l;h++)t[h*3]=(Math.random()-.5)*2*s,t[h*3+1]=o+Math.random()*(a-o),t[h*3+2]=l+Math.random()*(c-l),n[h]=.008+Math.random()*.016,i[h]=.35+Math.random()*.6;e.setAttribute("position",new Ht(t,3)),e.setAttribute("aSize",new Ht(n,1)),e.setAttribute("aOpacity",new Ht(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),f=new rn({transparent:!0,depthWrite:!1,blending:ic,uniforms:{uPixelRatio:{value:u}},vertexShader:`
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
    `});mn=new mm(e,f),mn.frustumCulled=!1,r.add(mn),Rm()}function kC(r){if(!mn)return;const e=mn.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Nx;for(let a=0;a<_l;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}mn.geometry.attributes.position.needsUpdate=!0}function zC(r,e){r&&r.traverse(t=>{if(!t.isMesh||!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i&&(i.userData.__baseOpacity===void 0&&(i.userData.__baseOpacity=i.opacity??1),i.transparent=!0,i.opacity=i.userData.__baseOpacity*e,i.depthWrite=e>.02,i.needsUpdate=!0)})})}function Rm(){const r=bo.clamp(mc,0,1);zC(Vr,r),mn?.material&&(mn.material.transparent=!0,mn.material.opacity=r,mn.visible=r>.01),Zt?.material&&(Zt.material.userData.__baseOpacity===void 0&&(Zt.material.userData.__baseOpacity=Zt.material.opacity??.22),Zt.material.opacity=Zt.material.userData.__baseOpacity*r,Zt.visible=r>.01)}function t0(){if(qr)return{scene:Ot,camera:on,renderer:bt};qr=!0,mc=1;const r=bC();Ot=new mh,Ot.fog=new Ro(657935,.045),on=new Rn(75,window.innerWidth/window.innerHeight,.1,1e3);const e=(window.devicePixelRatio||1)<1.5;if(bt=new Tm({antialias:e,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),bt.setSize(window.innerWidth,window.innerHeight),bt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),bt.toneMapping=xc,bt.toneMappingExposure=r.toneMappingExposure,bt.outputColorSpace=Kt,Zs=document.querySelector("#background"),!Zs){console.warn("[three.js] #background element not found, creating one"),Zs=document.createElement("div"),Zs.id="background";const s=document.body.firstChild;document.body.insertBefore(Zs,s)}Zs.appendChild(bt.domElement),lo=new ym(16777215,.18),Ot.add(lo),$t=new Ju(16777215,3.25),$t.position.set(4.2,7.5,6.2),Ot.add($t),AC(),TC(Ot,bt,Ix.hdriUrl),EC(bt,Ot,r),CC(),BC(Ot),sessionStorage.getItem("webgl-page"),UC().then(()=>{if(!Ot||!qr)return;const s=sessionStorage.getItem("webgl-page")||"home";nh(s==="work"?"work":"home");const a=Fx(s);hr.x=a.x,hr.y=a.y,hr.z=a.z});let t=null;zl=()=>{t&&clearTimeout(t),t=setTimeout(()=>{if(!on||!bt||!cr)return;const s=window.innerWidth,o=window.innerHeight;on.aspect=s/o,on.updateProjectionMatrix(),bt.setSize(s,o),cr.setSize(s,o),dc&&dc.setSize(s,o),Oa.uResolution.value.set(s,o)},100)},window.addEventListener("resize",zl);try{cr=new bh(bt)}catch{cr={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>bt?.render(Ot,on)}}wC(cr,Ot,on),Dr.angle=Math.PI/2,Dr.y=0,Dr.tilt=0,fi.angle=Math.PI/2,fi.y=0,fi.tilt=0;let n=0;Vl=s=>{const o=performance.now();if(o-n<16)return;n=o;const a=s.clientX/window.innerWidth*2-1,l=-(s.clientY/window.innerHeight)*2+1;Dr.angle=Math.PI/2+a*ol.angleRange,Dr.y=-l*ol.yRange,Dr.tilt=a*ol.tiltRange},window.addEventListener("mousemove",Vl,{passive:!0}),performance.now();const i=()=>{if(!qr||!on||!cr)return;if(mc<=0&&!fo){Gl=requestAnimationFrame(i);return}const s=performance.now(),o=ol.lerp;fi.angle+=(Dr.angle-fi.angle)*o,fi.y+=(Dr.y-fi.y)*o,fi.tilt+=(Dr.tilt-fi.tilt)*o;const a=Vr?Vr.position:{x:Ct.modelX,y:Ct.modelY,z:Ct.modelZ},l=a.x+hr.x,c=a.y+hr.y,u=a.z+hr.z,f=ol.orbitRadius;on.position.x=l+Math.cos(fi.angle)*f,on.position.z=u+Math.sin(fi.angle)*f,on.position.y=c+fi.y+1;const h=s*.001;if(on.position.x+=Math.sin(h*.7)*.012+Math.sin(h*1.3)*.008,on.position.y+=Math.sin(h*.5)*.012+Math.cos(h*1.1)*.008,on.position.z+=Math.cos(h*.6)*.008,on.lookAt(l,c,u),on.rotation.z+=fi.tilt,Oa.uTime.value=h,kC(h),ih&&ih.update(on),cr.render(),fo&&pc){const d=bt.autoClear;bt.autoClear=!1,bt.clearDepth();const p=fo.userData?.composer;p?p.render():bt.render(fo,pc),bt.autoClear=d}Gl=requestAnimationFrame(i)};return i(),{scene:Ot,camera:on,renderer:bt}}function vl(){if(!qr)return;qr=!1,Gl&&(cancelAnimationFrame(Gl),Gl=null),zl&&(window.removeEventListener("resize",zl),zl=null),Vl&&(window.removeEventListener("mousemove",Vl),Vl=null),uo&&(uo.kill(),uo=null),Oa.uTime.value=0,dc=null,mn&&(mn.geometry&&mn.geometry.dispose(),mn.material&&mn.material.dispose(),mn.parent&&mn.parent.remove(mn),mn=null),ih=null,fo=null,pc=null,Zt&&(Zt.geometry&&Zt.geometry.dispose(),Zt.material&&Zt.material.dispose(),Zt=null),vs&&(vs.dispose(),vs=null),co&&(co.dispose(),co=null),th.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),th.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==MC){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Ot?.remove(e))};r(_a),r(fc),_a=null,fc=null,Vr=null,ho=null,cr&&(cr.dispose(),cr=null),bt&&(bt.dispose(),bt.domElement&&bt.domElement.parentNode&&bt.domElement.parentNode.removeChild(bt.domElement),bt=null),Ot=null,on=null,$t=null,lo=null,Zs=null,mc=1}function VC(){return qr}function Ux(){return bt}function Cm(r){mc=bo.clamp(r,0,1),Rm()}function Ff(r){Cm(1)}function Fx(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function Hl(r,e=!1){const t=Fx(r);sessionStorage.setItem("webgl-page",r),uo&&(uo.kill(),uo=null),e?(hr.x=t.x,hr.y=t.y,hr.z=t.z):uo=Le.to(hr,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}function GC(r,e,t,n,i={}){const{bloomStrength:s=.15,bloomRadius:o=.5,bloomThreshold:a=.5,vignetteDarkness:l=.65,vignetteOffset:c=.68,includeBloom:u=!0,includeVignette:f=!0,edgeShift:h=.012,edgeStart:d=.1,edgeEnd:p=.6}=i,_=new Th(e,t);if(r.addPass(_),u){const M=new Ds(new Ue(window.innerWidth,window.innerHeight),s,o,a);r.addPass(M)}if(f){const M=new Wi(wm({darkness:l,offset:c}));r.addPass(M)}const m=new Wi(wh());n?.uTime&&(m.uniforms.uTime=n.uTime),n?.uGrain&&(m.uniforms.uGrain=n.uGrain),r.addPass(m);const g=new Wi(Ah({shift:h,edgeStart:d,edgeEnd:p}));r.addPass(g);const x=new Eh;r.addPass(x)}let Wl=!1;function Ox(){const r=document.querySelectorAll('[data-barba="container"][data-barba-namespace="work"]');return r.length?r[r.length-1]:null}const Xe={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:6,CAMERA_FOV:50,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ANGLE_RANGE:.2,PARALLAX_Y_RANGE:.3,PARALLAX_TILT_RANGE:.04,PARALLAX_CONFIG_LERP:.05,PARALLAX_ORBIT_RADIUS:5,WAVE_AMPLITUDE:.6,WAVE_FREQUENCY:.5,WAVE_SPEED:.2,WAVE_FLOW_X:.9,WAVE_FLOW_Y:.05,WAVE_FLOW_TURBULENCE:.08,WAVE_LAYER_FLOW_1:.45,WAVE_LAYER_FLOW_2:.9,WAVE_LAYER_FLOW_3:1.35,WIND_BASE_STRENGTH:.16,WIND_GUST_SCALE:.22,WIND_GUST_FREQ_1:.7,WIND_GUST_FREQ_2:2.3,WIND_PIN_POWER:1.8,REVEAL_DURATION:.95,REVEAL_SOFTNESS:.06,REVEAL_EASE:"power2.out",PARTICLE_COUNT:200,PARTICLE_BOUNDS:{xHalf:8,yMin:-3,yMax:5,zMin:-16,zMax:2},SCROLL_TILT_AMOUNT:.08,SCROLL_TILT_LERP:.04,SCROLL_TILT_MAX:.15},HC=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;
  uniform vec2 uWaveFlow;
  uniform float uWaveFlowTurbulence;
  uniform vec3 uWaveLayerFlow;
  uniform float uWindStrength;
  uniform float uWindPinPower;
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
    // Pin top edge and increase motion toward loose edge.
    float looseFactor = 1.0 - vUv.y;
    float pinInfluence = pow(looseFactor, uWindPinPower);
    
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

    // Wind-driven gust logic (ported from cloth prototype)
    float wave1 = sin(vUv.x * 5.0 + t * 2.0);
    float wave2 = sin(vUv.x * 12.0 + t * 4.0 + vUv.y * 5.0);
    float wave3 = sin(t * 1.5);
    float ripples = wave1 * 0.5 + wave2 * 0.2 + wave3 * 0.3;

    float noiseDisplacement = (n1 * 1.0 + n2 * 0.4 + n3 * 0.15 * flutter) * uWaveAmp;
    float windDisplacement = (uWindStrength * 2.0 + ripples * uWaveFreq) * pinInfluence;

    // Combine layers:
    // Keep the existing look, but drive motion with cloth pin/gust behavior.
    float displacement = mix(noiseDisplacement, windDisplacement, 0.42) * (1.0 - flatten);

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
  uniform float uRevealProgress;
  uniform float uRevealSoftness;
  uniform float uArcSpan;

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

    // Sweep in arc-angle space (right -> left) so reveal starts on the visible edge.
    float progress = clamp(uRevealProgress, 0.0, 1.0);
    float angle = (vUv.x - 0.5) * uArcSpan;
    float startAngle = uArcSpan * 0.52;
    float endAngle = -uArcSpan * 0.52;
    float revealHead = mix(startAngle, endAngle, progress);
    float revealSoft = max(0.0001, uRevealSoftness * uArcSpan);
    float revealMask = smoothstep(revealHead, revealHead + revealSoft, angle);
    if (revealMask <= 0.001) discard;

    gl_FragColor = vec4(col, alpha * uTransitionOpacity * revealMask);
  }
`,T={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,composer:null,workGlowHandle:null,workModel:null,workModelMaterials:[],tunedMaterials:new Set,pointLight:null,ambientLight:null,shadowPlane:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{},scrollTilt:0,raycaster:new Mx,rayMouse:new Ue,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,revealProgress:{value:1},introTimeline:null,introComplete:!1,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,transitionLocked:!1,transitionProgress:0,selectedItemIndex:-1,selectedSlotIndex:0,selectedItem:null,clickNdc:new Ue(0,0),transitionTimeline:null,cinematicExitTimeline:null,cinematicExitSnapshot:null,transitionTargetRect:null,stripStart:{position:new W(0,0,-1.5),scale:new W(.35,.35,.35),rotationZ:0},transitionEnd:{position:new W,scale:new W,rotationZ:0},transitionEndComputed:!1,coverPlaneTexture:null,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function XC(){const r=new _h,t=[...new Set(Mh.map(n=>n.image).filter(Boolean))].map(n=>T.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=Kt,s.minFilter=bi,s.magFilter=Bt,s.generateMipmaps=!0,T.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function qC(){const r=Xe.ARC_RADIUS,e=Xe.ARC_SPAN,t=Xe.STRIP_HEIGHT,n=Xe.WIDTH_SEGMENTS,i=Xe.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,f=0;for(let p=0;p<=i;p++){const _=p/i,m=(_-.5)*t+Xe.STRIP_Y_OFFSET;for(let g=0;g<=n;g++){const x=g/n,M=(x-.5)*e,y=Math.sin(M)*r,E=(Math.cos(M)-1)*r;o[c++]=y,o[c++]=m,o[c++]=E;const R=Math.sin(M),A=Math.cos(M);a[u++]=R,a[u++]=0,a[u++]=A,l[f++]=x,l[f++]=_}}const h=[];for(let p=0;p<i;p++)for(let _=0;_<n;_++){const m=p*(n+1)+_,g=m+1,x=m+(n+1),M=x+1;h.push(m,g,x),h.push(g,M,x)}const d=new Wn;return d.setAttribute("position",new Ht(o,3)),d.setAttribute("normal",new Ht(a,3)),d.setAttribute("uv",new Ht(l,2)),d.setIndex(h),d}function YC(r){r.map&&(r.map.colorSpace=Kt),r.emissiveMap&&(r.emissiveMap.colorSpace=Kt),r.needsUpdate=!0}function jC(r){return new Ri({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function $C(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=jC(t)),YC(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,T.tunedMaterials.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function KC(r){const e=new tr().setFromObject(r),t=e.getCenter(new W),n=e.getSize(new W);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function ZC(r){const e=KC(r),t=Math.max(e.x,e.y,e.z);if(t>0){const i=40/t;r.scale.set(i,i,i)}T.workModelMaterials=[],r.traverse(n=>{if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0,$C(n),(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{s&&(s.userData.__baseOpacity===void 0&&(s.userData.__baseOpacity=s.opacity??1),T.workModelMaterials.push(s))})})}async function JC(){const r="/work.glb";return await Promise.all([Oi.init(),Oi.load([r])]),Oi.hold(),new Promise((e,t)=>{new Sh().load(r,i=>{T.workModel=i.scene,ZC(T.workModel),T.workModel.position.set(0,-5.6,-17.3),T.workModel.scale.set(1,1,1),T.scene.add(T.workModel),T.workModel.traverse(s=>{if(!s.isMesh)return;const o=s.name.toLowerCase();(o.includes("volume")||o.includes("glow")||o.includes("light"))&&(T.workGlowHandle=Dx(s,T.camera,{c:1.5,p:2.1,glowColor:"#fff8de",op:.2}))}),setTimeout(()=>{Oi.release()},200),e()},void 0,i=>{console.error("[work] Model load error:",i),Oi.release(),t(i)})})}function QC(){const r=window.innerWidth,e=window.innerHeight;T.camera=new Rn(Xe.CAMERA_FOV,r/e,.1,100),T.camera.position.set(0,0,Xe.PARALLAX_ORBIT_RADIUS),T.scene=new mh,T.scene.fog=new Ro(15131868,.055);const t=new up(16774630,1260);t.position.set(10,15,12),t.angle=Math.PI/5,t.penumbra=.5,t.decay=1.6,t.distance=3,t.castShadow=!0,t.shadow.bias=-1e-4,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.radius=4,T.scene.add(t),T.pointLight=t;const n=new xm(16777215,.9);n.position.set(-15,0,10),n.decay=2,n.distance=30,T.scene.add(n);const i=new up(16777215,1080);i.position.set(0,10,-15),i.target.position.set(0,0,-5),i.angle=Math.PI/4,i.penumbra=.6,i.decay=1.5,i.distance=40,T.scene.add(i),T.scene.add(i.target),T.ambientLight=new ym(16777215,.54),T.scene.add(T.ambientLight);const s=Ux();s&&(s.shadowMap.enabled=!0,s.shadowMap.type=So),T.stripGroup=new Hr,T.stripGroup.position.set(0,0,-1.5),T.stripGroup.scale.set(.35,.35,.35),T.scene.add(T.stripGroup),uP();const o=new ts(60,60),a=new mx({opacity:.15,color:0});T.shadowPlane=new un(o,a),T.shadowPlane.rotation.x=-Math.PI/2,T.shadowPlane.position.set(0,-6,0),T.shadowPlane.receiveShadow=!0,T.shadowPlane.castShadow=!1,T.scene.add(T.shadowPlane),aP(),T.clock=new bm,rP(),FC(T.scene,T.camera)}function eP(){const r=[...new Set(Mh.map(e=>e.image))];for(T.textures=r.map(e=>T.textureCache.get(e)).filter(Boolean);T.textures.length<6;)T.textures.push(T.textures[0]||new cn);T.stripGeometry=qC(),T.stripMaterial=new rn({vertexShader:HC,fragmentShader:WC,uniforms:{uTex0:{value:T.textures[0]},uTex1:{value:T.textures[1]},uTex2:{value:T.textures[2]},uTex3:{value:T.textures[3]},uTex4:{value:T.textures[4]},uTex5:{value:T.textures[5]},uScrollOffset:{value:0},uItemsOnStrip:{value:Xe.ITEMS_ON_STRIP},uNumUnique:{value:Xe.NUM_UNIQUE},uGapSize:{value:Xe.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Xe.WAVE_AMPLITUDE},uWaveFreq:{value:Xe.WAVE_FREQUENCY},uWaveSpeed:{value:Xe.WAVE_SPEED},uWaveFlow:{value:new Ue(Xe.WAVE_FLOW_X,Xe.WAVE_FLOW_Y)},uWaveFlowTurbulence:{value:Xe.WAVE_FLOW_TURBULENCE},uWaveLayerFlow:{value:new W(Xe.WAVE_LAYER_FLOW_1,Xe.WAVE_LAYER_FLOW_2,Xe.WAVE_LAYER_FLOW_3)},uWindStrength:{value:Xe.WIND_BASE_STRENGTH},uWindPinPower:{value:Xe.WIND_PIN_POWER},uHoverUV:{value:new Ue(-1,-1)},uFlatten:{value:0},uSelectedIndex:{value:-1},uNonSelectedFade:{value:0},uFocusSlot:{value:-1},uIsolateSlot:{value:0},uTransitionOpacity:{value:1},uRevealProgress:{value:1},uRevealSoftness:{value:Xe.REVEAL_SOFTNESS},uArcRadius:{value:Xe.ARC_RADIUS},uArcSpan:{value:Xe.ARC_SPAN}},extensions:{derivatives:!0},transparent:!0,side:Mr,depthWrite:!0}),T.stripMesh=new un(T.stripGeometry,T.stripMaterial),T.stripMesh.frustumCulled=!1,T.stripMesh.castShadow=!0,T.stripMesh.receiveShadow=!1,T.stripGroup.add(T.stripMesh)}function tP(){if(!T.titleEl||!T.titleEl.isConnected){const n=Ox();n&&(T.container=n,T.titleEl=n.querySelector(".slide-title"))}if(!T.titleEl)return;const r=.5*Xe.ITEMS_ON_STRIP+T.scrollCurrent,e=(Math.floor(r)%Xe.NUM_UNIQUE+Xe.NUM_UNIQUE)%Xe.NUM_UNIQUE;T.activeIndex=e;const t=Mh[e];t&&T.lastActiveTitle!==t.title&&(T.lastActiveTitle=t.title,T.titleEl.textContent=t.title)}function rh(r){const e=Or(r);T.revealProgress.value=e,T.stripMaterial?.uniforms?.uRevealProgress&&(T.stripMaterial.uniforms.uRevealProgress.value=e)}function Bx({progress:r=1}={}){T.introTimeline&&(T.introTimeline.kill(),T.introTimeline=null),rh(r)}function nP(){if(!T.stripMaterial){T.introComplete=!0,T.transitionLocked=!1;return}Bx({progress:0}),T.transitionLocked=!0,T.introComplete=!1;const r=T.revealProgress,e=()=>{rh(1),T.introComplete=!0,T.transitionLocked=!1,T.introTimeline=null};T.introTimeline=Le.timeline({onComplete:e,onInterrupt:e}),T.introTimeline.to(r,{value:1,duration:Xe.REVEAL_DURATION,ease:Xe.REVEAL_EASE,onUpdate:()=>{rh(r.value)}})}function iP(r){if(!T.stripMaterial)return;const e=T.stripMaterial.uniforms,t=Math.sin(r*Xe.WIND_GUST_FREQ_1)+Math.sin(r*Xe.WIND_GUST_FREQ_2)*.5+.5,n=Math.max(0,t);e.uScrollOffset.value=T.scrollCurrent,e.uTime.value=r,e.uWindStrength.value=Xe.WIND_BASE_STRENGTH+n*Xe.WIND_GUST_SCALE}const Rh=Am();Rh.uResolution={value:new Ue(window.innerWidth,window.innerHeight)};function rP(){const r=Ux();r&&(T.composer=new bh(r),GC(T.composer,T.scene,T.camera,Rh,{includeBloom:!0,bloomStrength:.05,bloomRadius:.3,bloomThreshold:.7,includeVignette:!1}),T.scene.userData.composer=T.composer)}const na={angle:Math.PI/2,y:0,tilt:0},or={angle:Math.PI/2,y:0,tilt:0};function sP(){if(T.transitionLocked)return;const r=T.clock?T.clock.getElapsed():0;na.angle=Math.PI/2+T.mouseX*Xe.PARALLAX_ANGLE_RANGE,na.y=-T.mouseY*Xe.PARALLAX_Y_RANGE,na.tilt=T.mouseX*Xe.PARALLAX_TILT_RANGE;const e=Xe.PARALLAX_CONFIG_LERP;if(or.angle+=(na.angle-or.angle)*e,or.y+=(na.y-or.y)*e,or.tilt+=(na.tilt-or.tilt)*e,T.camera){const t=T.stripGroup?T.stripGroup.position:{x:0,y:-.7,z:-13.4},n=t.x,i=t.y,s=t.z,o=Xe.PARALLAX_ORBIT_RADIUS;T.camera.position.x=n+Math.cos(or.angle)*o,T.camera.position.z=s+Math.sin(or.angle)*o,T.camera.position.y=i+or.y+1;const a=Math.sin(r*.7)*.012+Math.sin(r*1.3)*.008,l=Math.sin(r*.5)*.012+Math.cos(r*1.1)*.008,c=Math.cos(r*.6)*.008;T.camera.position.x+=a,T.camera.position.y+=l,T.camera.position.z+=c,T.camera.lookAt(n,i,s),T.camera.rotation.z+=or.tilt,T.pointLight&&(T.pointLight.position.x=T.camera.position.x*.5,T.pointLight.position.y=.5+T.camera.position.y*.3)}}function oP(){if(!T.stripGroup)return;const r=Math.max(-.15,Math.min(Xe.SCROLL_TILT_MAX,T.scrollVelocity*Xe.SCROLL_TILT_AMOUNT));T.scrollTilt+=(r-T.scrollTilt)*Xe.SCROLL_TILT_LERP,T.stripGroup.rotation.z=T.scrollTilt}function aP(){const{PARTICLE_COUNT:r,PARTICLE_BOUNDS:e}=Xe,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=e,a=new Wn,l=new Float32Array(r*3),c=new Float32Array(r),u=new Float32Array(r);for(let d=0;d<r;d++)l[d*3]=(Math.random()-.5)*2*t,l[d*3+1]=n+Math.random()*(i-n),l[d*3+2]=s+Math.random()*(o-s),c[d]=.012+Math.random()*.02,u[d]=.5+Math.random()*.4;a.setAttribute("position",new Ht(l,3)),a.setAttribute("aSize",new Ht(c,1)),a.setAttribute("aOpacity",new Ht(u,1));const f=Math.min(window.devicePixelRatio||1,1.5),h=new rn({transparent:!0,depthWrite:!1,blending:Mo,uniforms:{uPixelRatio:{value:f}},vertexShader:`
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
    `});T.particleSystem=new mm(a,h),T.particleSystem.frustumCulled=!1,T.particleSystem.renderOrder=10,T.scene.add(T.particleSystem)}function lP(r){if(!T.particleSystem)return;const e=T.particleSystem.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Xe.PARTICLE_BOUNDS;for(let a=0;a<Xe.PARTICLE_COUNT;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}T.particleSystem.geometry.attributes.position.needsUpdate=!0}function cP(){if(T.transitionLocked){T.scrollVelocity=0,T.scrollTarget=T.scrollCurrent;return}!T.isPointerDown&&Math.abs(T.scrollVelocity)>1e-4?(T.scrollTarget+=T.scrollVelocity,T.scrollVelocity*=.95):T.isPointerDown||(T.scrollVelocity=0),T.scrollCurrent+=(T.scrollTarget-T.scrollCurrent)*Xe.SCROLL_LERP}function Or(r){return Math.max(0,Math.min(1,r))}function uP(){T.stripGroup&&(T.stripStart.position.copy(T.stripGroup.position),T.stripStart.scale.copy(T.stripGroup.scale),T.stripStart.rotationZ=T.stripGroup.rotation.z)}function hP(){T.stripGroup&&(T.stripGroup.position.copy(T.stripStart.position),T.stripGroup.scale.copy(T.stripStart.scale),T.stripGroup.rotation.z=T.stripStart.rotationZ)}function fP(r){if(!T.stripGroup||!T.transitionEndComputed)return;const t=r;T.stripGroup.position.lerpVectors(T.stripStart.position,T.transitionEnd.position,t),T.stripGroup.scale.lerpVectors(T.stripStart.scale,T.transitionEnd.scale,t),T.stripGroup.rotation.z=bo.lerp(T.stripStart.rotationZ,T.transitionEnd.rotationZ,t)}function dP(r){const e=Or(r);if(T.transitionProgress=e,T.stripMaterial?.uniforms&&(T.stripMaterial.uniforms.uFlatten.value=e,T.stripMaterial.uniforms.uSelectedIndex.value=T.selectedItemIndex,T.stripMaterial.uniforms.uNonSelectedFade.value=Or((e-.18)/.55),T.stripMaterial.uniforms.uFocusSlot.value=T.selectedSlotIndex,T.stripMaterial.uniforms.uIsolateSlot.value=0),T.titleEl&&(T.titleEl.style.opacity=`${1-Or(e*1.5)}`),T.workModel){const t=1-Or((e-.05)/.45);mP(t)}if(gP(1-Or(e*1.4)),T.stripMaterial?.uniforms&&e>.75){const t=1-Or((e-.75)/.25);T.stripMaterial.uniforms.uTransitionOpacity.value=t}T.transitionTargetRect&&T.transitionEndComputed&&fP(e)}function pP(){T.coverPlaneTexture=null}function mP(r){if(!T.workModel)return;const e=Or(r);T.workModel.visible=e>.01;const t=T.workModelMaterials?.length?T.workModelMaterials:null;t&&t.forEach(n=>{n&&(n.userData.__baseOpacity===void 0&&(n.userData.__baseOpacity=n.opacity??1),n.transparent=!0,n.opacity=n.userData.__baseOpacity*e)})}function gP(r){if(!T.particleSystem?.material||!("opacity"in T.particleSystem.material))return;const e=Or(r);T.particleSystem.material.transparent=!0,T.particleSystem.material.opacity=e,T.particleSystem.visible=e>.01}function _P(r){if(T.transitionLocked||!T.introComplete)return;r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;T.scrollTarget+=e*Xe.SCROLL_SPEED}function vP(r){T.transitionLocked||!T.introComplete||(T.isPointerDown=!0,T.lastPointerX=r.clientX,T.dragStartX=r.clientX,T.dragStartY=r.clientY,T.scrollVelocity=0,T.lastDragTime=performance.now())}function xP(r){if(T.transitionLocked)return;if(T.isPointerDown){const n=performance.now(),i=r.clientX-T.lastPointerX,s=n-T.lastDragTime;T.scrollTarget-=i*Xe.DRAG_MULTIPLIER,s>0&&(T.scrollVelocity=-i*Xe.DRAG_MULTIPLIER/(s/16)),T.lastPointerX=r.clientX,T.lastDragTime=n}const e=r.clientX/window.innerWidth*2-1,t=-(r.clientY/window.innerHeight)*2+1;T.mouseX=e,T.mouseY=t}function yP(r){if(T.transitionLocked||!T.isPointerDown)return;T.isPointerDown=!1;const e=Math.abs(r.clientX-T.dragStartX),t=Math.abs(r.clientY-T.dragStartY);e<5&&t<5&&SP(r)}function SP(r){if(T.transitionLocked||!T.camera||!T.stripMesh)return;T.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),T.raycaster.setFromCamera(T.rayMouse,T.camera);const e=T.raycaster.intersectObject(T.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Xe.ITEMS_ON_STRIP+T.scrollCurrent,i=(Math.floor(n)%Xe.NUM_UNIQUE+Xe.NUM_UNIQUE)%Xe.NUM_UNIQUE,s=Mh[i];s?.href&&(Xf?.go?Xf.go(s.href):window.location.href=s.href)}}}let va=null;function MP(){va&&clearTimeout(va),va=setTimeout(()=>{if(!T.camera)return;const r=window.innerWidth,e=window.innerHeight;T.camera.aspect=r/e,T.camera.updateProjectionMatrix(),T.composer&&T.composer.setSize(r,e),Rh.uResolution.value.set(r,e)},100)}function bP(){T.handlers.wheel=_P,T.handlers.pointerdown=vP,T.handlers.pointermove=xP,T.handlers.pointerup=yP,T.handlers.resize=MP,window.addEventListener("wheel",T.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",T.handlers.pointerdown),window.addEventListener("pointermove",T.handlers.pointermove),window.addEventListener("pointerup",T.handlers.pointerup),window.addEventListener("resize",T.handlers.resize)}function TP(){T.handlers.wheel&&window.removeEventListener("wheel",T.handlers.wheel),T.handlers.pointerdown&&window.removeEventListener("pointerdown",T.handlers.pointerdown),T.handlers.pointermove&&window.removeEventListener("pointermove",T.handlers.pointermove),T.handlers.pointerup&&window.removeEventListener("pointerup",T.handlers.pointerup),T.handlers.resize&&window.removeEventListener("resize",T.handlers.resize)}function kx(){T.clock&&T.clock.update();const r=T.clock?T.clock.getElapsed():0;cP(),iP(r),sP(),oP(),lP(r),T.workGlowHandle&&T.workGlowHandle.update(T.camera),tP(),Rh.uTime.value=r,T.animationFrame=requestAnimationFrame(kx)}async function zx(){if(Wl)return;Wl=!0;const r=Ox();if(!r){console.warn("[work] no active work container found"),Wl=!1;return}T.container=r,T.titleEl=r.querySelector(".slide-title"),T.transitionLocked=!1,T.transitionProgress=0,T.selectedItem=null,T.selectedItemIndex=-1,T.selectedSlotIndex=0,T.transitionTargetRect=null,T.transitionTimeline&&(T.transitionTimeline.kill(),T.transitionTimeline=null),Cm(1),QC();try{await JC()}catch(e){console.error("[work] Failed to load 3D model:",e)}await XC(),eP(),bP(),T.introComplete=!1,T.transitionLocked=!0,T.scrollVelocity=0,T.scrollTarget=0,T.scrollCurrent=0,T.titleEl&&Le.set(T.titleEl,{opacity:1,y:0}),hP(),dP(0),rh(0),nP(),T.animationFrame=requestAnimationFrame(kx)}function eo({keepCoverPlane:r=!1,preserveTexture:e=null}={}){if(!Wl)return;Wl=!1;const t=T.transitionLocked;T.animationFrame!==null&&(cancelAnimationFrame(T.animationFrame),T.animationFrame=null),TP(),OC(),r||pP(),Bx({progress:1}),T.titleEl&&(Le.killTweensOf(T.titleEl),T.titleEl.style.opacity=""),T.transitionTimeline&&(T.transitionTimeline.kill(),T.transitionTimeline=null),T.stripMesh&&T.stripGroup?.remove(T.stripMesh),T.stripMaterial&&(T.stripMaterial.dispose(),T.stripMaterial=null),T.stripGeometry&&(T.stripGeometry.dispose(),T.stripGeometry=null),T.stripMesh=null,T.textures=[],T.particleSystem&&(T.particleSystem.geometry&&T.particleSystem.geometry.dispose(),T.particleSystem.material&&T.particleSystem.material.dispose(),T.particleSystem.parent&&T.particleSystem.parent.remove(T.particleSystem),T.particleSystem=null),T.workModel&&(T.scene?.remove(T.workModel),T.workModel.traverse(n=>{n.isMesh&&(n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()))}),T.workModel=null,T.workModelMaterials=[]),T.tunedMaterials.clear(),T.composer&&(T.composer=null),T.workGlowHandle=null,T.shadowPlane&&(T.shadowPlane.geometry.dispose(),T.shadowPlane.material.dispose(),T.shadowPlane.parent&&T.shadowPlane.parent.remove(T.shadowPlane),T.shadowPlane=null),T.pointLight&&(T.scene?.remove(T.pointLight),T.pointLight=null),T.ambientLight&&(T.scene?.remove(T.ambientLight),T.ambientLight=null),T.stripGroup&&(T.scene?.remove(T.stripGroup),T.stripGroup=null),T.textureCache.forEach(n=>{!n||n===e||n.dispose()}),T.textureCache.clear(),va&&(clearTimeout(va),va=null),document.body.style.cursor="",T.scene=null,T.camera=null,T.clock=null,T.container=null,T.titleEl=null,T.scrollTarget=0,T.scrollCurrent=0,T.scrollVelocity=0,T.lastDragTime=0,T.activeIndex=0,T.lastActiveTitle="",T.mouseX=0,T.mouseY=0,T.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},T.scrollTilt=0,T.hoverUV=null,T.hoverActive=!1,T.rippleStrength=0,T.isPointerDown=!1,T.transitionLocked=!1,T.transitionProgress=0,T.selectedItemIndex=-1,T.selectedSlotIndex=0,T.selectedItem=null,T.transitionTargetRect=null,T.transitionEndComputed=!1,T.transitionTimeline=null,T.cinematicExitTimeline=null,T.cinematicExitSnapshot=null,T.clickNdc.set(0,0),t||Cm(1),T.revealProgress={value:1},T.introTimeline=null,T.introComplete=!1,T.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}}const Gi=[{id:1,title:"Archive 01",year:"2024",description:"A glimpse into the creative process.",category:"photography",image:"/archive/image-1.jpg"},{id:2,title:"Archive 02",year:"2024",description:"Exploring light and shadow.",category:"photography",image:"/archive/image-2.jpg"},{id:3,title:"Archive 03",year:"2023",description:"Moments captured in time.",category:"photography",image:"/archive/image-3.jpg"},{id:4,title:"Archive 04",year:"2023",description:"Visual storytelling through imagery.",category:"photography",image:"/archive/image-4.jpg"},{id:5,title:"Archive 05",year:"2023",description:"The art of observation.",category:"photography",image:"/archive/image-5.jpg"}],mt=Object.freeze({cardWidth:2.25,cardHeight:2.8,cardSpacing:1.85,visibleRange:12,dragSensitivityDesktop:.0035,dragSensitivityMobile:.006,wheelSensitivity:.0012,velocityDamping:.95,velocityEpsilon:1e-5,boundSlack:1.1,clickThreshold:12,clickTimeout:260,dragExitThreshold:48,focusLift:1.35,focusScale:1.22,focusTrackLerp:.12,focusTransition:.42,cameraFollowLerp:.085,cameraBaseY:.25,cameraBaseZ:8.6,dockMargin:20,dockTopSafe:90,atlasTileSize:1024,mobileBreakpoint:900,hdriUrl:"/env.hdr",postFX:Object.freeze({grain:.015,vignette:.15,bloomStrength:.12,bloomRadius:.4,bloomThreshold:.85})}),w={running:!1,initToken:0,rafId:null,container:null,backgroundEl:null,renderHost:null,eventTarget:null,renderer:null,composer:null,grainPass:null,pmremGenerator:null,envRenderTarget:null,scene:null,camera:null,clock:null,root:null,cards:[],cardByIndex:new Map,atlasTexture:null,sourceTextures:[],ambientLight:null,keyLight:null,fillLight:null,rimLight:null,raycaster:new Mx,pointerNdc:new Ue,trackOffset:0,trackVelocity:0,isDragging:!1,activePointerId:null,pointerStart:{x:0,y:0},pointerLast:{x:0,y:0},clickStartTime:0,dragDistance:0,focusedIndex:-1,focusLerp:{value:0},mouseParallaxTarget:new Ue(0,0),mouseParallaxCurrent:new Ue(0,0),dockPosCurrent:new Ue(-9999,-9999),dockPosTarget:new Ue(-9999,-9999),handlers:{},dom:{overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},tmp:{p0:new W,p1:new W,toCam:new W,projected:new W}};function n0(r,e,t){return Math.min(t,Math.max(e,r))}function EP(){return window.innerWidth<=mt.mobileBreakpoint}function wP(){return EP()?mt.dragSensitivityMobile:mt.dragSensitivityDesktop}function i0(r,e){return e.x=r*mt.cardSpacing,e.y=Math.sin(r*.42)*.52+Math.sin(r*.11)*.25,e.z=Math.sin(r*.78)*2.15+Math.sin(r*.2)*1.1,e}function AP(r){return Math.sin(r*.55)*.24+Math.sin(r*.17)*.1}function sh(){w.dom.panel&&(w.dom.panel.style.transform="translate3d(-9999px, -9999px, 0)"),w.dockPosCurrent.set(-9999,-9999),w.dockPosTarget.set(-9999,-9999)}function RP(){w.dom.overlay=document.getElementById("archive-overlay"),w.dom.panel=document.querySelector(".archive-focus-panel"),w.dom.title=document.querySelector(".archive-focus-title"),w.dom.year=document.querySelector(".archive-focus-year"),w.dom.description=document.querySelector(".archive-focus-description"),w.dom.category=document.querySelector(".archive-focus-category"),w.dom.prev=document.getElementById("archive-prev"),w.dom.next=document.getElementById("archive-next"),w.dom.close=document.querySelector(".archive-close-btn")}function CP(){w.dom.overlay&&w.dom.overlay.classList.add("active"),document.body.classList.add("archive-focus-open")}function Pm(){w.dom.overlay&&w.dom.overlay.classList.remove("active"),document.body.classList.remove("archive-focus-open"),sh()}function PP(r){const e=Gi[r];e&&(w.dom.title&&(w.dom.title.textContent=e.title||""),w.dom.year&&(w.dom.year.textContent=e.year||""),w.dom.description&&(w.dom.description.textContent=e.description||""),w.dom.category&&(w.dom.category.textContent=e.category||""))}async function LP(r){const e=new _h,t=new Array(r.length).fill(null);return await Promise.all(r.map((n,i)=>new Promise(s=>{e.load(n.image,o=>{o.colorSpace=Kt,o.wrapS=Gn,o.wrapT=Gn,o.minFilter=bi,o.magFilter=Bt,o.generateMipmaps=!0,t[i]=o,s()},void 0,()=>{t[i]=null,s()})}))),t}function IP(r){const e=Math.ceil(Math.sqrt(r.length)),t=mt.atlasTileSize,n=document.createElement("canvas");n.width=e*t,n.height=e*t;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,n.width,n.height),r.forEach((o,a)=>{if(!o?.image)return;const l=o.image,c=a%e*t,u=Math.floor(a/e)*t,f=(l.width||1)/(l.height||1);let h=t,d=t,p=c,_=u;f>1?(h=t*f,p=c-(h-t)*.5):(d=t/f,_=u-(d-t)*.5),i.drawImage(l,p,_,h,d)});const s=new tT(n);return s.colorSpace=Kt,s.wrapS=Gn,s.wrapT=Gn,s.minFilter=bi,s.magFilter=Bt,s.generateMipmaps=!0,s.flipY=!1,s}function DP(r,e){const t=Math.ceil(Math.sqrt(e)),n=r%t,i=Math.floor(r/t),s=new ts(mt.cardWidth,mt.cardHeight,1,1),o=s.attributes.uv;for(let a=0;a<o.count;a+=1){const l=o.getX(a),c=o.getY(a),u=(l+n)/t,f=(c+(t-1-i))/t;o.setXY(a,u,f)}return o.needsUpdate=!0,s}function NP(r,e){const t=DP(r,Gi.length),n=new Ri({map:e,color:16777215,roughness:.25,metalness:.1,clearcoat:1,clearcoatRoughness:.1,iridescence:.15,iridescenceIOR:1.3,envMapIntensity:1.2,side:Fi}),i=new un(t,n);return i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.userData.archiveIndex=r,i}function UP(){w.composer=new bh(w.renderer);const r=new Th(w.scene,w.camera);w.composer.addPass(r);const e=new Ds(new Ue(window.innerWidth,window.innerHeight),mt.postFX.bloomStrength,mt.postFX.bloomRadius,mt.postFX.bloomThreshold);w.composer.addPass(e);const t=new Wi(wm({darkness:mt.postFX.vignette}));w.composer.addPass(t),w.grainPass=new Wi(wh({grain:mt.postFX.grain})),w.composer.addPass(w.grainPass);const n=new Wi(Ah({shift:.004}));w.composer.addPass(n),w.composer.addPass(new Eh)}function FP(){w.pmremGenerator=new Qu(w.renderer),w.pmremGenerator.compileEquirectangularShader(),new Lx().load(mt.hdriUrl,r=>{w.envRenderTarget=w.pmremGenerator.fromEquirectangular(r),w.scene.environment=w.envRenderTarget.texture,r.dispose()})}function OP(){w.scene=new mh,w.scene.background=new Ne(15921906),w.scene.fog=new Ro(15921906,.035),w.camera=new Rn(45,1,.1,120),w.camera.position.set(0,mt.cameraBaseY,mt.cameraBaseZ),w.root=new Hr,w.scene.add(w.root),w.ambientLight=new ym(16777215,.4),w.keyLight=new Ju(16777215,2),w.keyLight.position.set(5,5,8),w.keyLight.castShadow=!0,w.keyLight.shadow.mapSize.width=1024,w.keyLight.shadow.mapSize.height=1024,w.fillLight=new xm(12176383,.8,20),w.fillLight.position.set(-5,0,5),w.rimLight=new Ju(16767406,1.5),w.rimLight.position.set(0,5,-5),w.scene.add(w.ambientLight,w.keyLight,w.fillLight,w.rimLight),FP()}function BP(r,e){const t=r.mesh,n=t.material,i=w.focusedIndex===r.index,s=w.focusLerp.value;let o=0;s>0&&w.focusedIndex!==-1&&!i&&(o=s);const a=1-o*.55;n.color.setRGB(a,a,a),n.emissiveIntensity=i?.08+s*.22:.05,n.opacity=1-o*.2,t.visible=Math.abs(e)<=mt.visibleRange}function kP(){const r=w.tmp.p0,e=w.tmp.p1;for(const t of w.cards){const n=t.index-w.trackOffset;i0(n,r),i0(n+.04,e);const i=t.mesh;i.position.copy(r),i.lookAt(e),i.rotateZ(AP(n)),i.scale.set(1,1,1),w.focusedIndex===t.index&&w.focusLerp.value>.001&&(w.tmp.toCam.copy(w.camera.position).sub(i.position).normalize(),i.position.addScaledVector(w.tmp.toCam,mt.focusLift*w.focusLerp.value),i.scale.setScalar(1+mt.focusScale*w.focusLerp.value)),BP(t,n)}}function zP(){if(w.focusedIndex!==-1){const t=w.focusedIndex;w.trackOffset+=(t-w.trackOffset)*mt.focusTrackLerp,w.trackVelocity*=.84}else w.trackOffset+=w.trackVelocity,w.trackVelocity*=mt.velocityDamping,Math.abs(w.trackVelocity)<mt.velocityEpsilon&&(w.trackVelocity=0);const r=-mt.boundSlack,e=Gi.length-1+mt.boundSlack;w.trackOffset<r&&(w.trackOffset=r,w.trackVelocity<0&&(w.trackVelocity*=.35)),w.trackOffset>e&&(w.trackOffset=e,w.trackVelocity>0&&(w.trackVelocity*=.35))}function VP(){const r=Math.sin(w.trackOffset*.24)*.65+(w.trackOffset-(Gi.length-1)*.5)*.08;w.camera.position.x+=(r-w.camera.position.x)*mt.cameraFollowLerp,w.camera.position.y=mt.cameraBaseY,w.camera.position.z=mt.cameraBaseZ,w.camera.lookAt(w.camera.position.x*.2,0,-.45),w.mouseParallaxCurrent.x+=(w.mouseParallaxTarget.x-w.mouseParallaxCurrent.x)*.1,w.mouseParallaxCurrent.y+=(w.mouseParallaxTarget.y-w.mouseParallaxCurrent.y)*.1,w.camera.position.x+=w.mouseParallaxCurrent.x*.7,w.camera.position.y+=w.mouseParallaxCurrent.y*.28}function GP(){if(w.focusedIndex===-1||!w.dom.panel){sh();return}const r=w.cardByIndex.get(w.focusedIndex);if(!r?.mesh?.visible){sh();return}const e=r.mesh;w.tmp.projected.copy(e.position),w.tmp.projected.y+=mt.cardHeight*.22,w.tmp.projected.project(w.camera);const t=window.innerWidth,n=window.innerHeight,i=(w.tmp.projected.x*.5+.5)*t,s=(-w.tmp.projected.y*.5+.5)*n,o=w.dom.panel.getBoundingClientRect(),a=n0(i+28,mt.dockMargin,t-o.width-mt.dockMargin),l=n0(s-o.height*.5,mt.dockTopSafe,n-o.height-mt.dockMargin);w.dockPosTarget.set(a,l),w.dockPosCurrent.x+=(w.dockPosTarget.x-w.dockPosCurrent.x)*.2,w.dockPosCurrent.y+=(w.dockPosTarget.y-w.dockPosCurrent.y)*.2,w.dom.panel.style.transform=`translate3d(${w.dockPosCurrent.x.toFixed(2)}px, ${w.dockPosCurrent.y.toFixed(2)}px, 0)`}function HP(r,e){const t=w.renderer.domElement.getBoundingClientRect();w.pointerNdc.set((r-t.left)/t.width*2-1,-((e-t.top)/t.height*2-1))}function WP(r,e){if(!w.renderer||!w.camera||w.cards.length===0)return null;HP(r,e),w.raycaster.setFromCamera(w.pointerNdc,w.camera);const t=w.raycaster.intersectObjects(w.cards.map(s=>s.mesh),!1);if(!t.length)return null;const i=t[0].object.userData?.archiveIndex;return typeof i!="number"?null:i}function _p(r){r<0||r>=Gi.length||(w.focusedIndex=r,PP(r),CP(),Le.to(w.focusLerp,{value:1,duration:mt.focusTransition,ease:"power2.out",overwrite:!0}))}function qs(){w.focusedIndex!==-1&&(w.focusedIndex=-1,Le.to(w.focusLerp,{value:0,duration:mt.focusTransition*.92,ease:"power2.out",overwrite:!0,onComplete:()=>{w.focusedIndex===-1&&Pm()}}))}function hu(r){if(Gi.length===0)return;if(w.focusedIndex===-1){_p(0);return}let e=w.focusedIndex+r;e<0&&(e=Gi.length-1),e>=Gi.length&&(e=0),_p(e)}function XP(r){return!!(r?.closest(".nav-wrap")||r?.closest(".bottom-nav-wrap")||r?.closest(".menu-wrap")||r?.closest(".menu-box")||r?.closest(".archive-nav-btn")||r?.closest(".archive-close-btn")||r?.closest(".archive-focus-panel"))}function qP(){const r=w.eventTarget;r&&(w.handlers.pointerDown=e=>{if(!(e.button!==void 0&&e.button!==0)&&!XP(e.target)){if(w.isDragging=!0,w.activePointerId=e.pointerId??null,w.pointerStart.x=e.clientX,w.pointerStart.y=e.clientY,w.pointerLast.x=e.clientX,w.pointerLast.y=e.clientY,w.clickStartTime=performance.now(),w.dragDistance=0,r.setPointerCapture&&e.pointerId!==void 0)try{r.setPointerCapture(e.pointerId)}catch{}w.eventTarget?.style&&(w.eventTarget.style.cursor="grabbing")}},w.handlers.pointerMove=e=>{const t=w.renderer?.domElement?.getBoundingClientRect();if(t&&t.width&&t.height){const o=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;w.mouseParallaxTarget.set(-o*.05,a*.05)}if(!w.isDragging||w.activePointerId!==null&&e.pointerId!==void 0&&w.activePointerId!==e.pointerId)return;const n=e.clientX-w.pointerLast.x,i=e.clientY-w.pointerLast.y;w.dragDistance+=Math.sqrt(n*n+i*i);const s=-n*wP();w.trackOffset+=s,w.trackVelocity=s,w.focusedIndex!==-1&&w.dragDistance>mt.dragExitThreshold&&qs(),w.pointerLast.x=e.clientX,w.pointerLast.y=e.clientY},w.handlers.pointerUp=e=>{if(!w.isDragging||w.activePointerId!==null&&e.pointerId!==void 0&&w.activePointerId!==e.pointerId)return;if(w.isDragging=!1,r.releasePointerCapture&&e.pointerId!==void 0)try{r.releasePointerCapture(e.pointerId)}catch{}if(w.activePointerId=null,w.eventTarget?.style&&(w.eventTarget.style.cursor="grab"),performance.now()-w.clickStartTime<=mt.clickTimeout&&w.dragDistance<=mt.clickThreshold){const i=WP(e.clientX,e.clientY);i===null?w.focusedIndex!==-1&&qs():w.focusedIndex===i?qs():_p(i),w.trackVelocity=0}},w.handlers.wheel=e=>{if(!r.contains(e.target))return;e.preventDefault();const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,n=t*mt.wheelSensitivity;w.trackOffset+=n,w.trackVelocity+=n*.35,w.focusedIndex!==-1&&Math.abs(t)>8&&qs()},w.handlers.keyDown=e=>{if(e.key==="Escape"){w.focusedIndex!==-1&&(e.preventDefault(),qs());return}e.key==="ArrowRight"?(e.preventDefault(),hu(1)):e.key==="ArrowLeft"&&(e.preventDefault(),hu(-1))},w.handlers.overlayClick=e=>{!e.target.closest(".archive-focus-panel")&&!e.target.closest(".archive-nav-btn")&&qs()},w.handlers.prevClick=e=>{e.preventDefault(),e.stopPropagation(),hu(-1)},w.handlers.nextClick=e=>{e.preventDefault(),e.stopPropagation(),hu(1)},w.handlers.closeClick=e=>{e.preventDefault(),e.stopPropagation(),qs()},w.handlers.resize=()=>{if(!w.renderer||!w.camera||!w.composer)return;const e=w.renderHost||w.backgroundEl||w.container,t=e?.clientWidth||window.innerWidth,n=e?.clientHeight||window.innerHeight;w.camera.aspect=t/n,w.camera.updateProjectionMatrix(),w.renderer.setSize(t,n),w.composer.setSize(t,n)},r.addEventListener("pointerdown",w.handlers.pointerDown),window.addEventListener("pointermove",w.handlers.pointerMove),window.addEventListener("pointerup",w.handlers.pointerUp),r.addEventListener("wheel",w.handlers.wheel,{passive:!1}),window.addEventListener("keydown",w.handlers.keyDown),window.addEventListener("resize",w.handlers.resize),w.dom.overlay?.addEventListener("click",w.handlers.overlayClick),w.dom.prev?.addEventListener("click",w.handlers.prevClick),w.dom.next?.addEventListener("click",w.handlers.nextClick),w.dom.close?.addEventListener("click",w.handlers.closeClick))}function YP(){const r=w.eventTarget;r&&(w.handlers.pointerDown&&r.removeEventListener("pointerdown",w.handlers.pointerDown),w.handlers.wheel&&r.removeEventListener("wheel",w.handlers.wheel)),window.removeEventListener("pointermove",w.handlers.pointerMove),window.removeEventListener("pointerup",w.handlers.pointerUp),window.removeEventListener("keydown",w.handlers.keyDown),window.removeEventListener("resize",w.handlers.resize),w.dom.overlay?.removeEventListener("click",w.handlers.overlayClick),w.dom.prev?.removeEventListener("click",w.handlers.prevClick),w.dom.next?.removeEventListener("click",w.handlers.nextClick),w.dom.close?.removeEventListener("click",w.handlers.closeClick),w.handlers={}}function Vx(){w.running&&(zP(),VP(),kP(),GP(),w.grainPass?.uniforms?.uTime&&(w.clock.update(),w.grainPass.uniforms.uTime.value=w.clock.getElapsed()),w.composer.render(),w.rafId=requestAnimationFrame(Vx))}async function jP(r){if(w.backgroundEl=document.getElementById("background"),w.container=document.getElementById("gallery")||w.backgroundEl||document.body,!w.container||!Gi.length)return!1;w.renderHost=w.backgroundEl||w.container;const e=w.renderHost.querySelector('canvas[data-archive-canvas="true"]');e&&e.remove();const t=window.innerWidth,n=window.innerHeight;w.renderer=new Tm({antialias:!0,alpha:!0,powerPreference:"high-performance"}),w.renderer.outputColorSpace=Kt,w.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),w.renderer.toneMapping=xc,w.renderer.toneMappingExposure=1.2,w.renderer.shadowMap.enabled=!0,w.renderer.shadowMap.type=So,w.renderer.setSize(t,n),w.renderer.setClearColor(0,0),w.renderer.domElement.dataset.archiveCanvas="true",w.renderHost.appendChild(w.renderer.domElement),w.eventTarget=document.body,w.container.style.pointerEvents="auto",w.container.style.touchAction="none",w.container.style.cursor="grab",w.renderer.domElement.style.pointerEvents="none",w.renderer.domElement.style.touchAction="none",w.renderer.domElement.style.position="absolute",w.renderer.domElement.style.top="0",w.renderer.domElement.style.left="0",document.body.style.color="#111111",document.body.style.backgroundColor="transparent",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(s=>{s.style.color="#111111"}),OP();const i=await LP(Gi);if(r!==w.initToken)return i.forEach(s=>s?.dispose?.()),!1;w.sourceTextures=i.filter(Boolean),w.atlasTexture=IP(i),w.cards=[],w.cardByIndex.clear();for(let s=0;s<Gi.length;s+=1){const o=NP(s,w.atlasTexture),a={index:s,item:Gi[s],mesh:o};w.cards.push(a),w.cardByIndex.set(s,a),w.root.add(o)}return UP(),w.camera.aspect=t/n,w.camera.updateProjectionMatrix(),w.composer.setSize(t,n),w.clock=new bm,!0}function Gx(){w.trackOffset=0,w.trackVelocity=0,w.isDragging=!1,w.activePointerId=null,w.dragDistance=0,w.focusedIndex=-1,w.focusLerp.value=0,w.mouseParallaxTarget.set(0,0),w.mouseParallaxCurrent.set(0,0),w.pointerStart.x=0,w.pointerStart.y=0,w.pointerLast.x=0,w.pointerLast.y=0,sh()}async function r0(){if(w.running)return;RP(),Gx(),Pm();const r=w.initToken+1;w.initToken=r,console.log("[archive] initArchive started");try{const e=await jP(r);if(console.log("[archive] setupArchiveScene completed. result:",e,"token match:",r===w.initToken),!e||r!==w.initToken){console.warn("[archive] Setup failed or token mismatch"),to();return}w.running=!0,requestAnimationFrame(()=>{console.log("[archive] binding events and starting animation loop"),qP(),Vx()})}catch(e){console.error("[archive] FATAL ERROR in initArchive:",e)}}function to(){w.initToken+=1,w.running=!1,w.rafId&&(cancelAnimationFrame(w.rafId),w.rafId=null),YP(),Pm(),Le.killTweensOf(w.focusLerp);for(const r of w.cards)r.mesh?.parent&&r.mesh.parent.remove(r.mesh),r.mesh?.geometry?.dispose?.(),r.mesh?.material?.dispose?.();w.cards=[],w.cardByIndex.clear(),w.atlasTexture?.dispose?.(),w.atlasTexture=null;for(const r of w.sourceTextures)r?.dispose?.();w.sourceTextures=[],w.composer&&(w.composer.dispose?.(),w.composer=null),w.grainPass=null,w.pmremGenerator?.dispose?.(),w.pmremGenerator=null,w.envRenderTarget?.dispose?.(),w.envRenderTarget=null,w.renderer&&(w.renderer.dispose(),w.renderer.domElement?.parentNode&&w.renderer.domElement.parentNode.removeChild(w.renderer.domElement)),w.container&&(w.container.style.pointerEvents="",w.container.style.touchAction="",w.container.style.cursor=""),document.body.style.color="",document.body.style.backgroundColor="",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(r=>{r.style.color=""}),w.renderer=null,w.scene=null,w.camera=null,w.clock=null,w.root=null,w.ambientLight=null,w.keyLight=null,w.fillLight=null,w.rimLight=null,w.container=null,w.backgroundEl=null,w.renderHost=null,w.eventTarget=null,w.dom={overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},Gx()}let Tn=null,Kr=null,Ui=null,Bi=null,Bn=null,gc=[],Cu=null,vp=null,xa=null,Ns=!1;const xp=new Map,_c=Am(),ds={speed:.1,red:"#f5f5f5",green:"#ffffff",blue:"#f2f2f2",orange:"#ebebeb",cyan:"#ebebebff",white:"#ffffff",yellow:"#e3e3e3"},$P=`
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
`;function KP(r){if(r&&r.querySelector)return r;const e=document.querySelectorAll('[data-barba="container"][data-barba-namespace="film"]');return e.length?e[e.length-1]:document}function ZP(){let r=document.getElementById("background");return r||(r=document.createElement("div"),r.id="background",document.body.insertBefore(r,document.body.firstChild),r)}function Hx(){xa&&clearTimeout(xa),xa=window.setTimeout(JP,150)}function JP(){if(!Tn||!Ns||!Ui||!Bi)return;const r=window.innerWidth,e=window.innerHeight;Tn.setSize(r,e),Bi.setSize(r,e),Ui.left=-r/2,Ui.right=r/2,Ui.top=e/2,Ui.bottom=-e/2,Ui.updateProjectionMatrix(),Bn&&Bn.material.uniforms.iResolution.value.set(r,e),gc.forEach(({material:t})=>{t.uniforms.uResolution.value.set(r,e)}),Ch()}function Wx(){Ns&&Ch()}function QP(r){if(!Kr)return;const e=r.currentSrc||r.src;if(!e)return;const n=new _h().load(e,()=>{r.style.opacity="0"},void 0,()=>{r.style.opacity=""});xp.set(r,n);const i=window.innerWidth,s=window.innerHeight,o=new rn({uniforms:{uTexture:{value:n},uResolution:{value:new Ue(i,s)}},vertexShader:`
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
    `,transparent:!0}),a=new ts(1,1),l=new un(a,o);l.renderOrder=1,Kr.add(l),gc.push({mesh:l,img:r,material:o})}function Ch(){if(!Ns||!Ui)return;const r=window.innerWidth,e=window.innerHeight;gc.forEach(({mesh:t,img:n})=>{const i=n.getBoundingClientRect(),s=i.width>0&&i.height>0;if(t.visible=s,!s)return;const o=i.left-r/2+i.width/2,a=-i.top+e/2-i.height/2;t.position.set(o,a,0),t.scale.set(i.width,i.height,1)})}function eL(){if(!Kr)return;const r=window.innerWidth,e=window.innerHeight,t=new rn({uniforms:{iTime:{value:0},iResolution:{value:new Ue(r,e)},uRed:{value:new Ne(ds.red)},uGreen:{value:new Ne(ds.green)},uBlue:{value:new Ne(ds.blue)},uOrange:{value:new Ne(ds.orange)},uCyan:{value:new Ne(ds.cyan)},uWhite:{value:new Ne(ds.white)},uYellow:{value:new Ne(ds.yellow)},uGrain:_c.uGrain},vertexShader:`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:$P,depthWrite:!1,depthTest:!1}),n=new ts(2,2);Bn=new un(n,t),Bn.renderOrder=-1,Kr.add(Bn)}function Xx(){if(!Ns||!Tn||!Bi||!Ui)return;Cu=requestAnimationFrame(Xx);const r=performance.now();Bn&&(Bn.material.uniforms.iTime.value=r*.001*ds.speed),_c.uTime.value=r*.001,Ch(),Bi.render()}async function tL(r){if(Ns)return;const e=KP(r);vp=ZP(),Ns=!0;const t=window.innerWidth,n=window.innerHeight;Kr=new mh,Ui=new Ga(t/-2,t/2,n/2,n/-2,1,1e3),Ui.position.z=10,Tn=new Tm({alpha:!0,antialias:!1,powerPreference:"high-performance"}),Tn.setSize(t,n),Tn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),Tn.outputColorSpace=Kt,Tn.domElement.style.pointerEvents="none",Tn.domElement.style.position="absolute",Tn.domElement.style.top="0",Tn.domElement.style.left="0",vp.appendChild(Tn.domElement),Bi=new bh(Tn),Bi.addPass(new Th(Kr,Ui));const i=new Wi(wh());i.uniforms.uTime=_c.uTime,i.uniforms.uGrain=_c.uGrain,Bi.addPass(i),Bi.addPass(new Wi(Ah({preserveAlpha:!0}))),Bi.addPass(new Eh),eL(),e.querySelectorAll(".coverimg img, .project-img img").forEach(o=>{QP(o)}),window.addEventListener("resize",Hx),window.addEventListener("scroll",Wx,{passive:!0}),Ch(),Xx(),await new Promise(o=>requestAnimationFrame(o))}async function nL(r,e={}){await tL(r)}function xl(){if(Ns){if(Ns=!1,Cu!==null&&(cancelAnimationFrame(Cu),Cu=null),window.removeEventListener("resize",Hx),window.removeEventListener("scroll",Wx),xa&&(clearTimeout(xa),xa=null),gc.forEach(r=>{r.mesh?.geometry&&r.mesh.geometry.dispose(),r.mesh?.material&&r.mesh.material.dispose();const e=xp.get(r.img);e&&e.dispose(),r.img.style.opacity="",r.mesh?.parent&&r.mesh.parent.remove(r.mesh)}),gc=[],xp.clear(),Bn&&(Bn.geometry&&Bn.geometry.dispose(),Bn.material&&Bn.material.dispose(),Bn.parent&&Bn.parent.remove(Bn),Bn=null),Bi&&(Bi.dispose(),Bi=null),Tn){Tn.dispose();const r=Tn.domElement?.parentNode;r&&r.removeChild(Tn.domElement),Tn=null}Kr&&(Kr.clear(),Kr=null),Ui=null,vp=null,_c.uTime.value=0}}Le.registerPlugin(Ls);const Pu=new Map,Lu=[];function oh(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Ph(r,e="lines, words, chars"){if(!r)return null;if(Pu.has(r))return Pu.get(r);const t=new Ls(r,{type:e,reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],f=l[c];u.parentNode.insertBefore(f,u),f.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Pu.set(r,t),Lu.push(t),t}function iL(r,{duration:e=.6,stagger:t=.02,ease:n="power2.out"}={}){const i=Ph(r,"lines, words, chars");return i?.chars?.length?Le.fromTo(i.chars,{y:100,opacity:0},{y:0,opacity:1,duration:e,stagger:t,ease:n}):null}function rL(r,{duration:e=.4,stagger:t=.015,ease:n="power2.in"}={}){const i=Ph(r,"lines, words, chars");return i?.chars?.length?Le.to(i.chars,{y:-100,opacity:0,duration:e,stagger:t,ease:n}):null}function sL(r,{duration:e=.7,stagger:t=.08,ease:n="power4.out"}={}){const i=Ph(r,"lines");return i?.lines?.length?Le.fromTo(i.lines,{yPercent:100,opacity:0},{yPercent:0,opacity:1,duration:e,stagger:t,ease:n}):null}function oL(r,{duration:e=.35,stagger:t=.05,ease:n="power2.in"}={}){const i=Ph(r,"lines");return i?.lines?.length?Le.to(i.lines,{yPercent:-100,opacity:0,duration:e,stagger:t,ease:n}):null}async function Of(r){if(!r)return;const e=r.querySelectorAll(".reveal-title"),t=r.querySelectorAll(".reveal-body");if(!e.length&&!t.length)return;const n=[...e,...t];Le.set(n,{clearProps:"all"});const i=[];for(let s=0;s<e.length;s++){const o=e[s];if(!o.textContent.trim())continue;const a=iL(o);a&&i.push(oh(a))}for(let s=0;s<t.length;s++){const o=t[s];if(!o.textContent.trim())continue;const a=sL(o);a&&i.push(oh(a))}i.length&&await Promise.all(i)}async function s0(r){if(!r)return;const e=r.querySelectorAll(".reveal-title"),t=r.querySelectorAll(".reveal-body");if(!e.length&&!t.length)return;const n=[];for(let i=0;i<e.length;i++){const s=e[i];if(!s.textContent.trim())continue;const o=rL(s);o&&n.push(oh(o))}for(let i=0;i<t.length;i++){const s=t[i];if(!s.textContent.trim())continue;const o=oL(s);o&&n.push(oh(o))}n.length&&await Promise.all(n)}function o0(){for(let r=Lu.length-1;r>=0;r--){const e=Lu[r];e&&typeof e.revert=="function"&&e.revert()}Lu.length=0,Pu.clear()}Le.registerPlugin(at);function aL(){}function lL(){window.removeEventListener("resize",aL)}function yl(){lL()}Le.registerPlugin(Ls);const fu={duration:.5,ease:"power2.inOut",stagger:.02},a0="50% 50% -10px",l0=new WeakMap;function cL(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||l0.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),Le.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=c0(i,!1),o=c0(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new Ls(s,{type:"chars"}),l=new Ls(o,{type:"chars"});Le.set(a.chars,{rotationX:0,opacity:1,transformOrigin:a0,backfaceVisibility:"hidden"}),Le.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:a0,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=u0(a.chars,l.chars,!0)},f=()=>{c?.kill(),c=u0(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",f),l0.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:f})})}function c0(r,e){const t=document.createElement("span");return t.textContent=r,Le.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function u0(r,e,t){const n=Le.timeline();return t?n.to(r,{rotationX:90,opacity:0,...fu},0).to(e,{rotationX:0,opacity:1,...fu},0):n.to(r,{rotationX:0,opacity:1,...fu},0).to(e,{rotationX:-90,opacity:0,...fu},0),n}const ah=new WeakMap,uL=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function hL(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function fL(){if(uL())return;document.querySelectorAll(".btn").forEach(e=>{if(ah.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=hL();t.config=n,dL(t);let i=null;const s=()=>{i&&i.kill(),i=h0(t,!0)},o=()=>{i&&i.kill(),i=h0(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),ah.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function dL(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,Le.set(e,{x:0,borderRadius:`${o}px`}),Le.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),Le.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function h0(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,f=Le.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?f.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):f.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),f}function pL(){document.querySelectorAll(".btn").forEach(e=>{const t=ah.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&Le.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&Le.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&Le.set(t.elements.circleIcon,{clearProps:"all"}),ah.delete(e))})}function f0(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function d0(r,e={}){return new Promise(t=>{Le.to(r,{...e,onComplete:()=>{typeof e.onComplete=="function"&&e.onComplete(),t()}})})}function mL(r,e){const t=Le.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&Le.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function gL(){const r=document.querySelector(".link-main");r&&Le.set(r,{autoAlpha:0})}function _L(){const r=document.querySelector(".link-main");r&&Le.set(r,{autoAlpha:1,y:20,opacity:0})}function vL(){const r=document.querySelector(".link-main");return r?Le.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let Sl=null;const xL=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"});function p0(){Sl||(Sl=document.getElementById("time")),Sl&&(Sl.textContent=`${xL.format(new Date)} IST`)}function yL(){Sl=null,p0(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(p0,1e3)}let Bf=!1;function kf(r){return r==="home"||r==="contact"||r==="work"}function zf(r,{skipWebglSetup:e=!1}={}){yL(),yM(),cL(),pL(),fL();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace,n=document.querySelector(".link-main");if(n&&(Le.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&Le.set(n,{clearProps:"transform,opacity"})),e){t==="archive"?(eo(),yl(),vl(),r0()):(to(),t==="work"||(t==="home"||t==="contact")&&Ff());return}t==="film"?(document.body.classList.add("page-wrap--scrollable"),mM()):document.body.classList.remove("page-wrap--scrollable"),t==="work"?(to(),xl(),t0(),Ff(),Hl("work",!0),nh("work"),zx()):t==="archive"?(eo(),xl(),yl(),vl(),r0()):t==="film"?(to(),eo(),yl(),vl(),nL()):t==="home"||t==="contact"?(to(),eo(),xl(),t0(),Ff(),Hl(t,!0),nh("home")):(to(),eo(),xl(),yl(),vl())}Xf.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;e0(),await s0(n),e==="work"||t==="work"?e==="work"&&eo():e==="contact"&&await f0(mL(n,t)),o0()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"?(nh(t==="work"?"work":"home"),Hl(t,!0),t==="work"&&(await zx(),await new Promise(o=>requestAnimationFrame(o)))):t==="home"?(gL(),Hl("home")):t==="contact"&&(_L(),Hl("contact")),Of(n)},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(zf(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&Le.set(n,{autoAlpha:0})}else t==="contact"&&await f0(vL())}},{name:"default",async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace;e0(),await s0(r?.current?.container),e==="work"&&eo(),e==="archive"&&to(),e==="film"&&(xl(),gM(),document.body.classList.remove("page-wrap--scrollable")),(kf(e)||e==="film"&&VC()&&!kf(t))&&(yl(),vl()),o0()},async enter(){},async once(r){const e=r?.next?.namespace;kf(e)||await Promise.all([Oi.init(),Oi.load([])]),zf(e);const t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&Le.set(n,{autoAlpha:0})}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(Le.set(n,{autoAlpha:1,y:20,opacity:0}),await d0(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2}))}e==="work"&&await new Promise(n=>requestAnimationFrame(n)),Bf=!0,Of(t)}},async after(r){const e=r?.next?.namespace;e&&zf(e);const t=r?.next?.container;if(e==="contact"){const n=document.querySelector(".link-main");n&&(Le.set(n,{autoAlpha:1,y:20,opacity:0}),await d0(n,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}t&&!Bf&&(e==="work"&&await new Promise(n=>requestAnimationFrame(n)),Of(t)),Bf=!1}}]});
