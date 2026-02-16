(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Tv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function Af(r,e,t){return e&&Tv(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Hi(){return Hi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Hi.apply(this,arguments)}function uu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ol(r,e)}function Dh(r){return Dh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Dh(r)}function ol(r,e){return ol=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ol(r,e)}function Ev(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Uh(r,e,t){return Uh=Ev()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&ol(a,s.prototype),a},Uh.apply(null,arguments)}function Nh(r){var e=typeof Map=="function"?new Map:void 0;return Nh=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Uh(t,arguments,Dh(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ol(n,t)},Nh(r)}function wv(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Dr,bv=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Dr||(Dr={}));var Md=Dr.off,Es=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Md},r.setLevel=function(t){return Md=Dr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Dr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Dr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Dr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Dr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Ks(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Td(r){return r&&r.sensitive?"":"i"}var qi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},ws=new((function(){function r(){this.o=qi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),Av=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Hi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Hi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=qi.prefix+"-"+qi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},Af(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),Cg=new Av,kc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=ws.toElement(n.html);i.namespace=ws.getNamespace(s),i.container=ws.getContainer(s),i.url=n.url,i.html=n.html,Cg.update({ns:i.namespace});var o=ws.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Pg=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Td(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,f=c.start,d=f===void 0||f,_=c.end,g=_===void 0||_,p=c.encode,m=p===void 0?function(j){return j}:p,M=c.delimiter,v=M===void 0?"/#?":M,S=c.endsWith,R="[".concat(Ks(S===void 0?"":S),"]|$"),b="[".concat(Ks(v),"]"),w=d?"^":"",I=0,y=a;I<y.length;I++){var x=y[I];if(typeof x=="string")w+=Ks(m(x));else{var O=Ks(m(x.prefix)),U=Ks(m(x.suffix));if(x.pattern)if(l&&l.push(x),O||U)if(x.modifier==="+"||x.modifier==="*"){var D=x.modifier==="*"?"?":"";w+="(?:".concat(O,"((?:").concat(x.pattern,")(?:").concat(U).concat(O,"(?:").concat(x.pattern,"))*)").concat(U,")").concat(D)}else w+="(?:".concat(O,"(").concat(x.pattern,")").concat(U,")").concat(x.modifier);else w+=x.modifier==="+"||x.modifier==="*"?"((?:".concat(x.pattern,")").concat(x.modifier,")"):"(".concat(x.pattern,")").concat(x.modifier);else w+="(?:".concat(O).concat(U,")").concat(x.modifier)}}if(g)h||(w+="".concat(b,"?")),w+=c.endsWith?"(?=".concat(R,")"):"$";else{var F=a[a.length-1],V=typeof F=="string"?b.indexOf(F[F.length-1])>-1:F===void 0;h||(w+="(?:".concat(b,"(?=").concat(R,"))?")),V||(w+="(?=".concat(b,"|").concat(R,")"))}return new RegExp(w,Td(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(U){for(var D=[],F=0;F<U.length;){var V=U[F];if(V!=="*"&&V!=="+"&&V!=="?")if(V!=="\\")if(V!=="{")if(V!=="}")if(V!==":")if(V!=="(")D.push({type:"CHAR",index:F,value:U[F++]});else{var j=1,$="";if(U[X=F+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(X));for(;X<U.length;)if(U[X]!=="\\"){if(U[X]===")"){if(--j==0){X++;break}}else if(U[X]==="("&&(j++,U[X+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(X));$+=U[X++]}else $+=U[X++]+U[X++];if(j)throw new TypeError("Unbalanced pattern at ".concat(F));if(!$)throw new TypeError("Missing pattern at ".concat(F));D.push({type:"PATTERN",index:F,value:$}),F=X}else{for(var z="",X=F+1;X<U.length;){var L=U.charCodeAt(X);if(!(L>=48&&L<=57||L>=65&&L<=90||L>=97&&L<=122||L===95))break;z+=U[X++]}if(!z)throw new TypeError("Missing parameter name at ".concat(F));D.push({type:"NAME",index:F,value:z}),F=X}else D.push({type:"CLOSE",index:F,value:U[F++]});else D.push({type:"OPEN",index:F,value:U[F++]});else D.push({type:"ESCAPED_CHAR",index:F++,value:U[F++]});else D.push({type:"MODIFIER",index:F,value:U[F++]})}return D.push({type:"END",index:F,value:""}),D})(a),u=l.prefixes,h=u===void 0?"./":u,f="[^".concat(Ks(l.delimiter||"/#?"),"]+?"),d=[],_=0,g=0,p="",m=function(U){if(g<c.length&&c[g].type===U)return c[g++].value},M=function(U){var D=m(U);if(D!==void 0)return D;var F=c[g],V=F.index;throw new TypeError("Unexpected ".concat(F.type," at ").concat(V,", expected ").concat(U))},v=function(){for(var U,D="";U=m("CHAR")||m("ESCAPED_CHAR");)D+=U;return D};g<c.length;){var S=m("CHAR"),R=m("NAME"),b=m("PATTERN");if(R||b)h.indexOf(I=S||"")===-1&&(p+=I,I=""),p&&(d.push(p),p=""),d.push({name:R||_++,prefix:I,suffix:"",pattern:b||f,modifier:m("MODIFIER")||""});else{var w=S||m("ESCAPED_CHAR");if(w)p+=w;else if(p&&(d.push(p),p=""),m("OPEN")){var I=v(),y=m("NAME")||"",x=m("PATTERN")||"",O=v();M("CLOSE"),d.push({name:y||(x?_++:""),pattern:y&&!x?f:x,prefix:I,suffix:O,modifier:m("MODIFIER")||""})}else M("END")}}return d})(i,o),s,o)})(e,t,n)},Rv={__proto__:null,update:kc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:Pg},Lg=function(){return window.location.origin},al=function(r){return r===void 0&&(r=window.location.href),Ur(r).port},Ur=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(Lg(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Ig(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Ig=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Oh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},Cv={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:Lg,getPort:al,getPath:function(r){return r===void 0&&(r=window.location.href),Ur(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Ur(r).query):Ur(r).query},getHash:function(r){return Ur(r).hash},parse:Ur,parseQuery:Ig,clean:Oh};function Pv(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Hi({href:l},Ur(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function Lv(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function To(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(Lv(a)?a.then(s,o):s(a))});return i}}var Ir=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new Es("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}uu(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return To(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(bv)),Dg=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return Pg(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Ur(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),Iv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}uu(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Hi({},this.T.get(n),i);return this.T.set(n,s),s},e})(Dg),Dv=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),Uv=function(){return!window.history.pushState},Nv=function(r){return!r.el||!r.href},Ov=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Fv=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},kv=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Bv=function(r){var e=r.el;return e.port!==void 0&&al()!==al(e.href)},zv=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Hv=function(r){return r.el.hasAttribute(qi.prefix+"-"+qi.prevent)},Vv=function(r){return!!r.el.closest("["+qi.prefix+"-"+qi.prevent+'="all"]')},Gv=function(r){var e=r.href;return Oh(e)===Oh()&&al(e)===al()},Wv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}uu(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Uv),this.add("exists",Nv),this.add("newTab",Ov),this.add("blank",Fv),this.add("corsDomain",kv),this.add("corsPort",Bv),this.add("download",zv),this.add("preventSelf",Hv),this.add("preventAll",Vv),this.add("sameUrl",Gv,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(Dg),wu=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(wv(i),e),i.name="BarbaError",i}return uu(e,r),e})(Nh(Error)),Xv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new Es("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(f){return f.name&&f.name==="self"}:function(f){return!f.name||f.name!=="self"});var o=new Map,a=s.find(function(f){var d=!0,_={};return n.self&&f.name==="self"?(o.set(f,_),!0):(i.j.reverse().forEach(function(g){d&&(d=i.M(f,g,t,_),f.from&&f.to&&(d=i.M(f,g,t,_,"from")&&i.M(f,g,t,_,"to")),f.from&&!f.to&&(d=i.M(f,g,t,_,"from")),!f.from&&f.to&&(d=i.M(f,g,t,_,"to")))}),o.set(f,_),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,f=u,d=u,_=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var p=Array.isArray(_[h])?_[h]:[_[h]];g[h]&&p.indexOf(g[h])!==-1&&(l=!0),p.indexOf(g[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[f])?_[f]:[_[f]];g[f]?(g[f].name&&m.indexOf(g[f].name)!==-1&&(l=!0),m.indexOf(g[f].name)===-1&&(a=!1)):a=!1;break;case"function":_[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function fa(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var qv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new Es("@barba/core"),this.store=void 0,this.C=!1,this.store=new Xv(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=fa(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(f){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=fa(function(){function f(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(p){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var g=(function(){if(u)return fa(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(v){if(l.H(v))throw new wu(v,"Transition error [sync]")});var p=function(v){return fa(function(){var S=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(S&&S.then)return S.then(function(){})},function(S){if(l.H(S))throw new wu(S,"Transition error [before/after/enter]")})},m=!1,M=fa(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),kc(s,n)]).then(function(v){return v[0]})).then(function(v){return m=v,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(v){if(l.H(v))throw new wu(v,"Transition error [before/after/leave]")});return M&&M.then?M.then(p):p()})();return g&&g.then?g.then(_):_()})}var d=(function(){if(u)return Promise.resolve(kc(s,n)).then(function(){})})();return d&&d.then?d.then(f):f()},function(f){throw l.C=!1,f.name&&f.name==="BarbaError"?(l.logger.debug(f.label),l.logger.error(f.error),f):(l.logger.debug("Transition error [page]"),l.logger.error(f),f)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(f){return Promise.reject(f)}},e.once=function(t,n){try{return Promise.resolve(Ir.do("once",t,n)).then(function(){return n.once?To(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Ir.do("leave",t,n)).then(function(){return n.leave?To(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Ir.do("enter",t,n)).then(function(){return n.enter?To(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return ws.addContainer(t.next.container,n),Ir.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return ws.removeContainer(t.current.container),Ir.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Ir.do(t,n,i)).then(function(){return i[t]?To(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},Af(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),Yv=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Ir[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?To(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var jv={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Kv=new((function(){function r(){this.version="2.10.3",this.schemaPage=jv,this.Logger=Es,this.logger=new Es("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Ir,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=ws,this.helpers=Rv,this.history=Cg,this.request=Pv,this.url=Cv,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?qi:l,u=n.requestError,h=n.timeout,f=h===void 0?2e3:h,d=n.cacheIgnore,_=d!==void 0&&d,g=n.cacheFirstPage,p=g!==void 0&&g,m=n.prefetchIgnore,M=m!==void 0&&m,v=n.preventRunning,S=v!==void 0&&v,R=n.prevent,b=R===void 0?null:R,w=n.debug,I=n.logLevel;if(Es.setLevel((w!==void 0&&w)===!0?"debug":I===void 0?"off":I),this.logger.info(this.version),Object.keys(c).forEach(function(O){qi[O]&&(qi[O]=c[O])}),this.B=u,this.timeout=f,this.cacheIgnore=_,this.cacheFirstPage=p,this.prefetchIgnore=M,this.preventRunning=S,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var y=this.data.current;if(!y.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Iv(_),this.headers=new Dv,this.prevent=new Wv(M),this.transitions=new qv(s),this.views=new Yv(a),b!==null){if(typeof b!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",b)}this.history.init(y.url.href,y.namespace),p&&this.cache.set(y.url.href,Promise.resolve({html:y.html,url:y.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(O){return O.init()});var x=this.data;x.trigger="barba",x.next=x.current,x.current=Hi({},this.schemaPage),this.hooks.do("ready",x),this.once(x),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var f=(function(d,_){try{var g=(p=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:p,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var p;return g&&g.then?g.then(void 0,_):g})(0,function(){Es.getLevel()===0&&l.force(h.next.url.href)});if(f&&f.then)return f.then(function(){})})},l=this;if(l.data.next.url=Hi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(kc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Hi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Hi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Af(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ug(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},Rf,mn,Nt,mi=1e8,Tt=1/mi,Fh=Math.PI*2,$v=Fh/4,Zv=0,Ng=Math.sqrt,Jv=Math.cos,Qv=Math.sin,fn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},Cf=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Pf=function(){return typeof window<"u"},Il=function(e){return Vt(e)||fn(e)},Og=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,ex=/random\([^)]+\)/g,tx=/,\s*/g,Ed=/(?:-?\.?\d|\.)+/gi,Fg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kg=/[+-]=-?[.\d]+/,nx=/[^,'"\[\]\s]+/gi,ix=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Ui,kh,Lf,oi={},Bc={},Bg,zg=function(e){return(Bc=Vo(e,oi))&&Xn},If=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},Hg=function(e,t){return e&&(oi[e]=t)&&Bc&&(Bc[e]=t)||oi},cl=function(){return 0},rx={suppressEvents:!0,isStart:!0,kill:!1},yc={suppressEvents:!0,kill:!1},sx={suppressEvents:!0},Df={},qr=[],Bh={},Vg,Jn={},Au={},wd=30,Sc=[],Uf="",Nf=function(e){var t=e[0],n,i;if(ji(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sc.length;i--&&!Sc[i].targetTest(t););n=Sc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new f_(e[i],n)))||e.splice(i,1);return e},Us=function(e){return e._gsap||Nf(gi(e))[0]._gsap},Gg=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Cf(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Po=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ox=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},zc=function(){var e=qr.length,t=qr.slice(0),n,i;for(Bh={},qr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Of=function(e){return!!(e._initted||e._startAt||e.add)},Wg=function(e,t,n,i){qr.length&&!mn&&zc(),e.render(t,n,!!(mn&&t<0&&Of(e))),qr.length&&!mn&&zc()},Xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nx).length<2?t:fn(e)?e.trim():e},qg=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ax=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vo=function(e,t){for(var n in t)e[n]=t[n];return e},bd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Hc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ba=function(e){var t=e.parent||kt,n=e.keyframes?ax(wn(e.keyframes)):ai;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},lx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},hu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zh=function(e,t,n,i){return e._startAt&&(mn?e._startAt.revert(yc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ux=function r(e){return!e||e._ts&&r(e.parent)},Ad=function(e){return e._repeat?Go(e._tTime,e=e.duration()+e._rDelay)*e:0},Go=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fu=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},du=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fu(e),n._dirty||Ns(n,e)),e},jg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vc(e.rawTime(),t),(!t._dur||bl(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Bi=function(e,t,n,i){return t.parent&&Zr(t),t._start=Ft((xr(n)?n:n||e!==kt?hi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yg(e,t,"_first","_last",e._sort?"_start":0),Hh(t)||(e._recent=t),i||jg(e,t),e._ts<0&&du(e,e._tTime),e},Kg=function(e,t){return(oi.ScrollTrigger||If("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},$g=function(e,t,n,i,s){if(kf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vg!==ti.frame)return qr.push(e),e._lazy=[s,i],1},hx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&hx(e)&&!(!e._initted&&Hh(e))||(e._ts<0||e._dp._ts<0)&&!Hh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=bl(0,e._tDur,t),u=Go(l,a),e._yoyo&&u&1&&(o=1-o),u!==Go(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||mn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&$g(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&zh(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zr(e,1),!n&&!mn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wo=function(e,t,n,i){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!i&&du(e,e._tTime=e._tDur*a),e.parent&&fu(e),n||Ns(e.parent,e),e},Rd=function(e){return e instanceof Nn?Ns(e):Wo(e,e._dur)},px={_start:0,endTime:cl,totalDuration:cl},hi=function r(e,t,n){var i=e.labels,s=e._recent||px,o=e.duration()>=mi?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},za=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},is=function(e,t){return e||e===0?t(e):t},bl=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!fn(e)||!(t=ix.exec(e))?"":t[1]},mx=function(e,t,n){return is(n,function(i){return bl(e,t,i)})},Vh=[].slice,Zg=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ui},gx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||Zg(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):fn(e)&&!n&&(kh||!Xo())?Vh.call((t||Lf).querySelectorAll(e),0):wn(e)?gx(e,n):Zg(e)?Vh.call(e,0):e?[e]:[]},Gh=function(e){return e=gi(e)[0]||ll("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?ll("Invalid scope")||Lf.createElement("div"):e)}},Jg=function(e){return e.sort(function(){return .5-Math.random()})},Qg=function(e){if(Vt(e))return e;var t=ji(e)?e:{each:e},n=Os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,v,S,R,b,w,I,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,mi])[1],!y){for(w=-mi;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,M=y===mi?0:l?g*h/y-.5:i/y|0,w=0,I=mi,b=0;b<g;b++)v=b%y-m,S=M-(b/y|0),p[b]=R=c?Math.abs(c==="y"?S:v):Ng(v*v+S*S),R>w&&(w=R),R<I&&(I=R);i==="random"&&Jg(p),p.max=w-I,p.min=I,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Tn(t.amount||t.each)||0,n=n&&g<0?c_(n):n}return g=(p[f]-p.min)/p.max||0,Ft(p.b+(n?n(g):g)*p.v)+p.u}},Wh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:Tn(n))}},e_=function(e,t){var n=wn(e),i,s;return!n&&ji(e)&&(i=n=e.radius||mi,e.values?(e=gi(e.values),(s=!xr(e[0]))&&(i*=i)):e=Wh(e.increment)),is(t,n?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||xr(o)?u:u+Tn(o)}:Wh(e))},t_=function(e,t,n,i){return is(wn(e)?!t:n===!0?!!(n=0):!i,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},vx=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},xx=function(e,t,n){return i_(e,t,0,1,n)},n_=function(e,t,n){return is(n,function(i){return e[~~t(i)]})},yx=function r(e,t,n){var i=t-e;return wn(e)?n_(e,r(0,e.length),t):is(n,function(s){return(i+(s-e)%i)%i+e})},Sx=function r(e,t,n){var i=t-e,s=i*2;return wn(e)?n_(e,r(0,e.length-1),t):is(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ul=function(e){return e.replace(ex,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(tx);return t_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},i_=function(e,t,n,i,s){var o=t-e,a=i-n;return is(s,function(l){return n+((l-e)/o*a||0)})},Mx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=fn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Vo(wn(e)?[]:{},e));if(!u){for(l in t)Ff.call(a,e,l,"get",t[l]);s=function(_){return Hf(_,a)||(o?e.p:e)}}}return is(n,s)},Cd=function(e,t,n){var i=e.labels,s=mi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var i=e.vars,s=i[t],o=Nt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qr.length&&zc(),a&&(Nt=a),u=l?s.apply(c,l):s.call(c),Nt=o,u},ba=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ii(e,"onInterrupt"),e},wo,r_=[],s_=function(e){if(e)if(e=!e.name&&e.default||e,Pf()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:cl,render:Hf,add:Ff,kill:kx,modifier:Fx,rawVars:0},o={targetTest:0,get:0,getSetter:zf,aliases:{},register:0};if(Xo(),e!==i){if(Jn[t])return;ai(i,ai(Hc(e,s),o)),Vo(i.prototype,Vo(s,Hc(e,o))),Jn[i.prop=t]=i,e.targetTest&&(Sc.push(i),Df[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hg(t,i),e.register&&e.register(Xn,i,Vn)}else r_.push(e)},Mt=255,Aa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Ru=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},o_=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Aa.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Aa[e])i=Aa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ed),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ru(l+1/3,s,o),i[1]=Ru(l,s,o),i[2]=Ru(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Fg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ed)||Aa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},a_=function(e){var t=[],n=[],i=-1;return e.split(Yr).forEach(function(s){var o=s.match(Eo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Pd=function(e,t,n){var i="",s=(e+i).match(Yr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=o_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=a_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Yr,"1").split(Eo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Yr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Aa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Tx=/hsl[a]?\(/,l_=function(e){var t=e.join(" "),n;if(Yr.lastIndex=0,Yr.test(t))return n=Tx.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,a_(e[1])),!0},hl,ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,M=p===!0,v,S,R,b;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,v=R-o,(v>0||M)&&(b=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,f,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Bg&&(!kh&&Pf()&&(Ui=kh=window,Lf=Ui.document||{},oi.gsap=Xn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Xn.version),zg(Bc||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),r_.forEach(s_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},hl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),hl=0,c=cl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var v=m?function(S,R,b,w){p(S,R,b,w),h.remove(v)}:p;return h.remove(p),a[M?"unshift":"push"](v),Xo(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),Xo=function(){return!hl&&ti.wake()},ut={},Ex=/^[\d.\-M][\d.\-,\s]/,wx=/["']/g,bx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(wx,"").trim():+c,i=l.substr(a+1).trim();return t},Ax=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Rx=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bx(t[1])]:Ax(e).split(",").map(Xg)):ut._CE&&Ex.test(e)?ut._CE("",e):n},c_=function(e){return function(t){return 1-e(1-t)}},u_=function r(e,t){for(var n=e._first,i;n;)n instanceof Nn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Os=function(e,t){return e&&(Vt(e)?e:ut[e]||Rx(e))||t},Ys=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){ut[a]=oi[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},h_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Fh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Qv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:h_(a);return s=Fh/s,l.config=function(c,u){return r(e,c,u)},l},Pu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:h_(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ys(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ys("Elastic",Cu("in"),Cu("out"),Cu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ys("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ys("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ys("Circ",function(r){return-(Ng(1-r*r)-1)});Ys("Sine",function(r){return r===1?1:-Jv(r*$v)+1});Ys("Back",Pu("in"),Pu("out"),Pu());ut.SteppedEase=ut.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*bl(0,o,a)|0)+s)*n}}};Ho.ease=ut["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uf+=r+","+r+"Params,"});var f_=function(e,t){this.id=Zv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gg,this.set=t?t.getSetter:zf},fl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wo(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),hl||ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(du(this,n),!s._dp||s.parent||jg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ad(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ad(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Go(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(bl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),fu(this),cx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sx);var i=mn;return mn=n,Of(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(hi(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Vt(n)?n:qg,l=function(){var u=i.then;i.then=null,s&&s(),Vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ba(this)},r})();ai(fl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){Ug(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),kt&&Bi(n.parent||kt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kg(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return za(0,arguments,this),this},t.from=function(i,s,o){return za(1,arguments,this),this},t.fromTo=function(i,s,o,a){return za(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,hi(this,o),1),this},t.call=function(i,s,o){return Bi(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(i,o,hi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ba(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ba(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,M,v,S,R,b,w;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ft(u%p),u===l?(g=this._repeat,f=c):(R=Ft(u/p),g=~~R,g&&g===R&&(f=c,g--),f>c&&(f=c)),R=Go(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),b&&g&1&&(f=c-f,w=1),g!==R&&!this._lock){var I=b&&R&1,y=I===(b&&g&1);if(g<R&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Ft(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;u_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=dx(this,Ft(a),Ft(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||mn&&Of(d)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=x?-Tt:Tt);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=S,fu(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(xr(s)||(s=hi(this,s,i)),!(i instanceof fl)){if(wn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Vt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&hu(this,i),i===this._recent&&(this._recent=this._last),Ns(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=hi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||cl,o);return a.data="isPause",this._hasPause=1,Bi(this,a,hi(this,i))},t.removePause=function(i){var s=this._first;for(i=hi(this,i);s;)s._start===i&&s.data==="isPause"&&Zr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)kr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=xr(s),u;l;)l instanceof Qt?ox(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=hi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Qt.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Wo(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ai({startAt:{time:hi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Cd(this,hi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Cd(this,hi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ft(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ns(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ns(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ft(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Wo(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&(Wg(kt,Vc(i,kt)),Vg=ti.frame),ti.frame>=wd){wd+=si.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&si.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(fl);ai(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cx=function(e,t,n,i,s,o,a){var l=new Vn(this._pt,e,t,0,1,v_,null,s),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ul(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(bu)||[];h=bu.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Po(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=bu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kg.test(i)||m)&&(l.e=0),this._pt=l,l},Ff=function(e,t,n,i,s,o,a,l,c,u){Vt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Vt(h)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Vt(h)?c?Ux:g_:Bf,_;if(fn(i)&&(~i.indexOf("random(")&&(i=ul(i)),i.charAt(1)==="="&&(_=Po(f,i)+(Tn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Xh)return!isNaN(f*i)&&i!==""?(_=new Vn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Ox:__,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&If(t,i),Cx.call(this,e,t,f,i,d,l||si.stringFilter,c))},Px=function(e,t,n,i,s){if(Vt(e)&&(e=Ha(e,s,t,n,i)),!ji(e)||e.style&&e.nodeType||wn(e)||Og(e))return fn(e)?Ha(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ha(e[a],s,t,n,i);return o},d_=function(e,t,n,i,s,o){var a,l,c,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:Px(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Vn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==wo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kr,Xh,kf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Rf,S=e.timeline,R,b,w,I,y,x,O,U,D,F,V,j,$;if(S&&(!f||!s)&&(s="none"),e._ease=Os(s,Ho.ease),e._yEase=h?c_(Os(h===!0?s:h,Ho.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(U=p[0]?Us(p[0]).harness:0,j=U&&i[U.prop],R=Hc(i,Df),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?yc:rx),g._lazy=0),o){if(Zr(e._startAt=Qt.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!d)&&e._startAt.revert(yc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),w=ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&zn(l),immediateRender:a,stagger:0,parent:m},R),j&&(w[U.prop]=j),Zr(e._startAt=Qt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(yc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&zn(l)||l&&!_,b=0;b<p.length;b++){if(y=p[b],O=y._gsap||Nf(p)[b]._gsap,e._ptLookup[b]=F={},Bh[O.id]&&qr.length&&zc(),V=M===p?b:M.indexOf(y),U&&(D=new U).init(y,j||R,e,V,M)!==!1&&(e._pt=I=new Vn(e._pt,y,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(z){F[z]=I}),D.priority&&(x=1)),!U||j)for(w in R)Jn[w]&&(D=d_(w,R,e,V,y,M))?D.priority&&(x=1):F[w]=I=Ff.call(e,y,w,"get",R[w],V,M,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),v&&e._pt&&(kr=e,kt.killTweensOf(y,F,e.globalTime(t)),$=!e.parent,kr=0),e._pt&&l&&(Bh[O.id]=1)}x&&x_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&S.render(mi,!0,!0)},Lx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xh=1,e.vars[t]="+=0",kf(e,a),Xh=0,l?ll(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Wt(n)+Tn(h.e)),h.b&&(h.b=u.s+Tn(h.b))},Ix=function(e,t){var n=e[0]?Us(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Vo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Dx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(wn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ha=function(e,t,n,i,s){return Vt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?ul(e):e},p_=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",m_={};Hn(p_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return m_[r]=1});var Qt=(function(r){Ug(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ba(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||kt,v=(wn(n)||Og(n)?xr(n[0]):"length"in i)?[n]:gi(n),S,R,b,w,I,y,x,O;if(a._targets=v.length?Nf(v):ll("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Il(c)||Il(u)){if(i=a.vars,S=a.timeline=new Nn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=ar(a),S._start=0,f||Il(c)||Il(u)){if(w=v.length,x=f&&Qg(f),ji(f))for(I in f)~p_.indexOf(I)&&(O||(O={}),O[I]=f[I]);for(R=0;R<w;R++)b=Hc(i,m_),b.stagger=0,m&&(b.yoyoEase=m),O&&Vo(b,O),y=v[R],b.duration=+Ha(c,ar(a),R,y,v),b.delay=(+Ha(u,ar(a),R,y,v)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(y,b,x?x(R,y,v):0),S._ease=ut.none;S.duration()?c=u=0:a.timeline=0}else if(_){Ba(ai(S.vars.defaults,{ease:"none"})),S._ease=Os(_.ease||i.ease||"none");var U=0,D,F,V;if(wn(_))_.forEach(function(j){return S.to(v,j,">")}),S.duration();else{b={};for(I in _)I==="ease"||I==="easeEach"||Dx(I,_[I],b,_.easeEach);for(I in b)for(D=b[I].sort(function(j,$){return j.t-$.t}),U=0,R=0;R<D.length;R++)F=D[R],V={ease:F.e,duration:(F.t-(R?D[R-1].t:0))/100*c},V[I]=F.v,S.to(v,V,U),U+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Rf&&(kr=ar(a),kt.killTweensOf(v),kr=0),Bi(M,ar(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ft(M._time)&&zn(h)&&ux(ar(a))&&M.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),p&&Kg(ar(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,p,m,M,v,S;if(!c)fx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ft(h%g),h===l?(_=this._repeat,f=c):(p=Ft(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=Go(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&u_(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if($g(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!p&&(ii(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zh(this,i,s,o),ii(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&zh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){hl||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||kf(this,c),u=this._ease(c/this._dur),Lx(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(du(this,0),this.parent||Yg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,kr&&kr.vars.overwrite!==!0)._first||ba(this),this.parent&&o!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&lx(a,l))return s==="all"&&(this._pt=0),ba(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},Hn(s,function(M){return g[M]=1}),s=g),s=Ix(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&hu(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ba(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return za(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return za(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e})(fl);ai(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Nn,t=Vh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bf=function(e,t,n){return e[t]=n},g_=function(e,t,n){return e[t](n)},Ux=function(e,t,n,i){return e[t](i.fp,n)},Nx=function(e,t,n){return e.setAttribute(t,n)},zf=function(e,t){return Vt(e[t])?g_:Cf(e[t])&&e.setAttribute?Nx:Bf},__=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ox=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},v_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Fx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},kx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Bx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},x_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Vn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||__,this.d=l||this,this.set=c||Bf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Bx,this.m=n,this.mt=s,this.tween=i},r})();Hn(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Df[r]=1});oi.TweenMax=oi.TweenLite=Qt;oi.TimelineLite=oi.TimelineMax=Nn;kt=new Nn({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=l_;var Fs=[],Mc={},zx=[],Ld=0,Hx=0,Lu=function(e){return(Mc[e]||zx).map(function(t){return t()})},qh=function(){var e=Date.now(),t=[];e-Ld>2&&(Lu("matchMediaInit"),Fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ui.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Lu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ld=e,Lu("matchMedia"))},y_=(function(){function r(t,n){this.selector=n&&Gh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Vt(n)&&(s=i,i=n,n=Vt);var o=this,a=function(){var c=Nt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gh(s)),Nt=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),Nt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fs.length;o--;)Fs[o].id===this.id&&Fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Vx=(function(){function r(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ji(n)||(n={matches:n});var o=new y_(0,s||this.scope),a=o.conditions={},l,c,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(Fs.indexOf(o)<0&&Fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return s_(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=gi(e)[0]);var s=Us(e||{}).get,o=n?qg:Xg;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=Us(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;wo._pt=0,h.init(e,n?u+n:u,wo,0,[e]),h.render(1,h),wo._pt&&Hf(1,wo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,Ho.ease)),bd(Ho,e||{})},config:function(e){return bd(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!oi[a]&&ll(t+" effect requires "+a+" plugin.")}),Au[t]=function(a,l,c){return n(gi(a),ai(l||{},s),c)},o&&(Nn.prototype[t]=function(a,l,c){return this.add(Au[t](a,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):ut},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(kt,n,0),n},context:function(e,t){return e?new y_(e,t):Nt},matchMedia:function(e){return new Vx(e)},matchMediaRefresh:function(){return Fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qh()},addEventListener:function(e,t){var n=Mc[e]||(Mc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Mc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:yx,wrapYoyo:Sx,distribute:Qg,random:t_,snap:e_,normalize:xx,getUnit:Tn,clamp:mx,splitColor:o_,toArray:gi,selector:Gh,mapRange:i_,pipe:_x,unitize:vx,interpolate:Mx,shuffle:Jg},install:zg,effects:Au,ticker:ti,updateRoot:Nn.updateRoot,plugins:Jn,globalTimeline:kt,core:{PropTween:Vn,globals:Hg,Tween:Qt,Timeline:Nn,Animation:fl,getCache:Us,_removeLinkedListItem:hu,reverting:function(){return mn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Rf=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Gc[r]=Qt[r]});ti.add(Nn.updateRoot);wo=Gc.to({},{duration:0});var Gx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Gx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Iu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Wx(a,s)}}}},Xn=Gc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Iu("roundProps",Wh),Iu("modifiers"),Iu("snap",e_))||Gc;Qt.version=Nn.version=Xn.version="3.14.2";Bg=1;Pf()&&Xo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var Id,Br,Lo,Vf,bs,Dd,Gf,Xx=function(){return typeof window<"u"},yr={},gs=180/Math.PI,Io=Math.PI/180,$s=Math.atan2,Ud=1e8,Wf=/([A-Z])/g,qx=/(left|right|width|margin|padding|x)/i,Yx=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$x=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},M_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jx=function(e,t,n){return e.style[t]=n},Qx=function(e,t,n){return e.style.setProperty(t,n)},ey=function(e,t,n){return e._gsap[t]=n},ty=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ny=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},iy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Gn=Bt+"Origin",ry=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=cr(i,a)}):this.tfm[e]=o.x?o[e]:cr(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},T_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Wf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gf(),(!s||!s.isStart)&&!n[Bt]&&(T_(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},E_=function(e,t){var n={target:e,props:[],revert:sy,save:ry};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},w_,jh=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Wf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qo(t)||t,1)||""},Nd="O,Moz,ms,Ms,Webkit".split(","),qo=function(e,t,n){var i=t||bs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Nd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Nd[o]:"")+e},Kh=function(){Xx()&&window.document&&(Id=window,Br=Id.document,Lo=Br.documentElement,bs=jh("div")||{style:{}},jh("div"),Bt=qo(Bt),Gn=Bt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",w_=!!qo("perspective"),Gf=Xn.core.reverting,Vf=1)},Od=function(e){var t=e.ownerSVGElement,n=jh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Lo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Lo.removeChild(n),s},Fd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},b_=function(e){var t,n;try{t=e.getBBox()}catch{t=Od(e),n=1}return t&&(t.width||t.height)||n||(t=Od(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fd(e,["x","cx","x1"])||0,y:+Fd(e,["y","cy","y1"])||0,width:0,height:0}:t},A_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&b_(e))},Jr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==Gn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Wf,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,i,s,o){var a=new Vn(e._pt,t,n,0,1,o?M_:S_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},kd={deg:1,rad:1,turn:1},oy={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bs.style,l=qx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||kd[i]||kd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&A_(e),(d||o==="%")&&(yr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Wt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Br||!g.appendChild)&&(g=Br.body),p=g._gsap,p&&d&&p.width&&l&&p.time===ti.time&&!p.uncache)return Wt(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Jr(e,t)}else(d||o==="%")&&!oy[ri(g,"display")]&&(a.position=ri(e,"position")),g===e&&(a.position="static"),g.appendChild(bs),_=bs[u],g.removeChild(bs),a.position="absolute";return l&&d&&(p=Us(g),p.time=ti.time,p.width=g[u]),Wt(f?_*s/h:_&&s?h/_*s:0)},cr=function(e,t,n,i){var s;return Vf||Kh(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=pl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xc(ri(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wc[t]&&Wc[t](e,t,n)||ri(e,t)||Gg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},ay=function(e,t,n,i){if(!n||n==="none"){var s=qo(t,e,1),o=s&&ri(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var a=new Vn(this._pt,e.style,t,0,1,v_),l=0,c=0,u,h,f,d,_,g,p,m,M,v,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ri(e,t)||i,g?e.style[t]=g:Jr(e,t)),u=[n,i],l_(u),n=u[0],i=u[1],f=n.match(Eo)||[],R=i.match(Eo)||[],R.length){for(;h=Eo.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Po(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=Eo.lastIndex-v.length,v||(v=v||si.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=Qr(e,t,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?M_:S_;return kg.test(i)&&(a.e=0),this._pt=a,a},Bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ly=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bd[n]||n,t[1]=Bd[i]||i,t.join(" ")},cy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yr[a]&&(l=1,a=a==="transformOrigin"?Gn:Bt),Jr(n,a);l&&(Jr(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",pl(n,1),o.uncache=1,T_(i)))}},Wc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Vn(e._pt,t,n,0,0,cy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},dl=[1,0,0,1,0,0],R_={},C_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zd=function(e){var t=ri(e,Bt);return C_(t)?dl:t.substr(7).match(Fg).map(Wt)},Xf=function(e,t){var n=e._gsap||Us(e),i=e.style,s=zd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?dl:s):(s===dl&&!e.offsetParent&&e!==Lo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Lo.appendChild(e)),s=zd(e),l?i.display=l:Jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Lo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$h=function(e,t,n,i,s,o){var a=e._gsap,l=s||Xf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,b,w,I,y;n?l!==dl&&(w=d*p-_*g)&&(I=S*(p/w)+R*(-g/w)+(g*M-p*m)/w,y=S*(-_/w)+R*(d/w)-(d*M-_*m)/w,S=I,R=y):(b=b_(e),S=b.x+(~v[0].indexOf("%")?S/100*b.width:S),R=b.y+(~(v[1]||v[0]).indexOf("%")?R/100*b.height:R)),i||i!==!1&&a.smooth?(m=S-c,M=R-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(zr(o,a,"xOrigin",c,S),zr(o,a,"yOrigin",u,R),zr(o,a,"xOffset",h,a.xOffset),zr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},pl=function(e,t){var n=e._gsap||new f_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ri(e,Gn)||"0",u,h,f,d,_,g,p,m,M,v,S,R,b,w,I,y,x,O,U,D,F,V,j,$,z,X,L,re,xe,We,Y,te;return u=h=f=g=p=m=M=v=S=0,d=_=1,n.svg=!!(e.getCTM&&A_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),w=Xf(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),$h(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,w)),R=n.xOrigin||0,b=n.yOrigin||0,w!==dl&&(O=w[0],U=w[1],D=w[2],F=w[3],u=V=w[4],h=j=w[5],w.length===6?(d=Math.sqrt(O*O+U*U),_=Math.sqrt(F*F+D*D),g=O||U?$s(U,O)*gs:0,M=D||F?$s(D,F)*gs+g:0,M&&(_*=Math.abs(Math.cos(M*Io))),n.svg&&(u-=R-(R*O+b*D),h-=b-(R*U+b*F))):(te=w[6],We=w[7],L=w[8],re=w[9],xe=w[10],Y=w[11],u=w[12],h=w[13],f=w[14],I=$s(te,xe),p=I*gs,I&&(y=Math.cos(-I),x=Math.sin(-I),$=V*y+L*x,z=j*y+re*x,X=te*y+xe*x,L=V*-x+L*y,re=j*-x+re*y,xe=te*-x+xe*y,Y=We*-x+Y*y,V=$,j=z,te=X),I=$s(-D,xe),m=I*gs,I&&(y=Math.cos(-I),x=Math.sin(-I),$=O*y-L*x,z=U*y-re*x,X=D*y-xe*x,Y=F*x+Y*y,O=$,U=z,D=X),I=$s(U,O),g=I*gs,I&&(y=Math.cos(I),x=Math.sin(I),$=O*y+U*x,z=V*y+j*x,U=U*y-O*x,j=j*y-V*x,O=$,V=z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Wt(Math.sqrt(O*O+U*U+D*D)),_=Wt(Math.sqrt(j*j+te*te)),I=$s(V,j),M=Math.abs(I)>2e-4?I*gs:0,S=Y?1/(Y<0?-Y:Y):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!C_(ri(e,Bt)),$&&e.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Wt(d),n.scaleY=Wt(_),n.rotation=Wt(g)+a,n.rotationX=Wt(p)+a,n.rotationY=Wt(m)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=Xc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?hy:w_?P_:uy,n.uncache=0,n},Xc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Du=function(e,t,n){var i=Tn(t);return Wt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},uy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,P_(e,t)},as="0deg",da="0px",ls=") ",P_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==as||u!==as)){var b=parseFloat(u)*Io,w=Math.sin(b),I=Math.cos(b),y;b=parseFloat(h)*Io,y=Math.cos(b),o=Du(M,o,w*y*-v),a=Du(M,a,-Math.sin(b)*-v),l=Du(M,l,I*y*-v+v)}p!==da&&(S+="perspective("+p+ls),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==da||a!==da||l!==da)&&(S+=l!==da||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(S+="rotate("+c+ls),u!==as&&(S+="rotateY("+u+ls),h!==as&&(S+="rotateX("+h+ls),(f!==as||d!==as)&&(S+="skew("+f+", "+d+ls),(_!==1||g!==1)&&(S+="scale("+_+", "+g+ls),M.style[Bt]=S||"translate(0, 0)"},hy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),R,b,w,I,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Io,c*=Io,R=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=Io,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,I*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,b*=y)),R=Wt(R),b=Wt(b),w=Wt(w),I=Wt(I)):(R=h,I=f,b=w=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Qr(d,"x",o,"px"),S=Qr(d,"y",a,"px")),(_||g||p||m)&&(v=Wt(v+_-(_*R+g*w)+p),S=Wt(S+g-(_*b+g*I)+m)),(i||s)&&(y=d.getBBox(),v=Wt(v+i/100*y.width),S=Wt(S+s/100*y.height)),y="matrix("+R+","+b+","+w+","+I+","+v+","+S+")",d.setAttribute("transform",y),M&&(d.style[Bt]=y)},fy=function(e,t,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?gs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ud)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ud)%o-~~(c/o)*o)),e._pt=f=new Vn(e._pt,t,n,i,c,jx),f.e=u,f.u="deg",e._props.push(n),f},Hd=function(e,t){for(var n in t)e[n]=t[n];return e},dy=function(e,t,n){var i=Hd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=pl(n,1),Jr(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=pl(n,1),o[Bt]=c);for(l in yr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Tn(c),_=Tn(u),h=d!==_?Qr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Vn(e._pt,a,l,h,f-h,Yh),e._pt.u=_||0,e._props.push(l));Hd(a,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Wc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return cr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var L_={name:"css",register:Kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,v,S,R,b,w,I,y;Vf||Kh(),this.styles=this.styles||E_(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Jn[g]&&d_(g,t,n,i,e,s)))){if(d=typeof u,_=Wc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ul(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Yr.lastIndex=0,Yr.test(c)||(p=Tn(c),m=Tn(u),m?p!==m&&(c=Qr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],fn(c)&&~c.indexOf("random(")&&(c=ul(c)),Tn(c+"")||c==="auto"||(c+=si.units[g]||Tn(cr(e,g))||""),(c+"").charAt(1)==="="&&(c=cr(e,g))):c=cr(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Vi&&(g==="autoAlpha"&&(f===1&&cr(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),zr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in yr,v){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=ri(e,"perspective"),x?e.style.perspective=x:Jr(e,"perspective")}h=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),b=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new Vn(this._pt,a,Bt,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new Vn(this._pt,R,"scaleY",R.scaleY,(M?Po(R.scaleY,M+h):h)-R.scaleY||0,Yh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Gn,0,a[Gn]),u=ly(u),R.svg?$h(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&zr(this,R,"zOrigin",R.zOrigin,m),zr(this,a,g,Xc(c),Xc(u)));continue}else if(g==="svgOrigin"){$h(e,u,1,b,0,this);continue}else if(g in R_){fy(this,R,g,f,M?Po(f,M+u):u);continue}else if(g==="smoothOrigin"){zr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){dy(this,u,e);continue}}else g in a||(g=qo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!Yx.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Tn(u)||(g in si.units?si.units[g]:p),p!==m&&(f=Qr(e,g,c,m)),this._pt=new Vn(this._pt,v?R:a,g,f,(M?Po(f,M+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Zx:Yh),this._pt.u=m||0,v&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=$x):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Kx);else if(g in a)ay.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){If(g,u);continue}v||(g in a?I.push(g,0,a[g]):typeof e[g]=="function"?I.push(g,2,e[g]()):I.push(g,1,c||e[g])),o.push(g)}}w&&x_(this)},render:function(e,t){if(t.tween._time||!Gf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==Gn&&(e._gsap.x||cr(e,"x"))?n&&Dd===n?t==="scale"?ty:ey:(Dd=n||{})&&(t==="scale"?ny:iy):e.style&&!Cf(e.style[t])?Jx:~t.indexOf("-")?Qx:zf(e,t)},core:{_removeProperty:Jr,_getMatrix:Xf}};Xn.utils.checkPrefix=qo;Xn.core.getStyleSaver=E_;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){yr[s]=1});Hn(e,function(s){si.units[s]="deg",R_[s]=1}),Vi[i[13]]=r+","+e,Hn(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Xn.registerPlugin(L_);var Ee=Xn.registerPlugin(L_)||Xn;Ee.core.Tween;let pa,Zs,Vd=typeof Symbol=="function"?Symbol():"_split",Zh,py=()=>Zh||es.register(window.gsap),Gd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ml=r=>typeof r=="string"?ml(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...ml(t)):e.push(t),e),[]):[r],Wd=r=>ml(r).filter(e=>e instanceof HTMLElement),Jh=[],Uu=function(){},my={add:r=>r()},gy=/\s+/g,Xd=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),qc={left:0,top:0,width:0,height:0},_y=(r,e)=>{for(;++e<r.length&&r[e]===qc;);return r[e]||qc},qd=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Yd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Jh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},jd=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Js=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Qh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},vy=(r,e,t,n)=>{let i=Qh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},I_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=e,p=r.getBoundingClientRect(),m=p,M=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",v=0,S=t.collection,R,b,w,I,y,x,O,U,D,F,V,j,$,z,X,L,re,xe;for(typeof d=="object"?(w=d.delimiter||d,b=d.replaceWith||""):b=d===""?"":d||" ",R=b!==" ";f<h.length;f++)if(I=h[f],I.nodeType===3){for(X=I.textContent||"",_?X=X.replace(gy," "):M&&(X=X.replace(/\n/g,b+`
`)),g&&(X=g(X,r)),I.textContent=X,y=b||w?X.split(w||b):X.match(a)||Jh,re=y[y.length-1],U=R?re.slice(-1)===" ":!re,re||y.pop(),m=p,O=R?y[0].charAt(0)===" ":!y[0],O&&Js(" ",r,I),y[0]||y.shift(),Yd(y,l),s&&c||(I.textContent=""),D=1;D<=y.length;D++)if(L=y[D-1],!_&&M&&L.charAt(0)===`
`&&((u=I.previousSibling)==null||u.remove(),Js(document.createElement("br"),r,I),L=L.slice(1)),!_&&L==="")Js(b,r,I);else if(L===" ")r.insertBefore(document.createTextNode(" "),I);else{if(R&&L.charAt(0)===" "&&Js(" ",r,I),v&&D===1&&!O&&S.indexOf(v.parentNode)>-1?(x=S[S.length-1],x.appendChild(document.createTextNode(n?"":L))):(x=t(n?"":L),Js(x,r,I),v&&D===1&&!O&&x.insertBefore(v,x.firstChild)),n)for(V=Gd?Yd([...Gd.segment(L)].map(We=>We.segment),l):L.match(a)||Jh,xe=0;xe<V.length;xe++)x.appendChild(V[xe]===" "?document.createTextNode(" "):n(V[xe]));if(s&&c){if(X=I.textContent=X.substring(L.length+1,X.length),F=x.getBoundingClientRect(),F.top>m.top&&F.left<=m.left){for(j=r.cloneNode(),$=r.childNodes[0];$&&$!==x;)z=$,$=$.nextSibling,j.appendChild(z);r.parentNode.insertBefore(j,r),i&&jd(j)}m=F}(D<y.length||U)&&Js(D>=y.length?" ":R&&L.slice(-1)===" "?" "+b:b,r,I)}r.removeChild(I),v=0}else I.nodeType===1&&(o&&o.indexOf(I)>-1?(S.indexOf(I.previousSibling)>-1&&S[S.length-1].appendChild(I),v=I):(I_(I,e,t,n,i,s,o,a,l,!0),v=0),i&&jd(I))};const D_=class U_{constructor(e,t){this.isSplit=!1,py(),this.elements=Wd(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Vd])==null||a._data.orig.filter(({element:l})=>l===o).forEach(qd)),o[Vd]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Uu(this),this.split(t)}split(e){return(this._ctx||my).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+Xd.source,"gu"):Xd,p=!!e.ignore&&Wd(e.ignore),{orig:m,animTime:M,obs:v}=this._data,S;(h||f||u)&&(this.elements.forEach((R,b)=>{m[b]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let w=[],I=[],y=[],x=h?Qh("char",e,w):null,O=Qh("word",e,I),U,D,F,V;if(I_(R,e,O,x,d,i&&(u||d),p,g,_,!1),u){let j=ml(R.childNodes),$=vy(R,j,e,y),z,X=[],L=0,re=j.map(Y=>Y.nodeType===1?Y.getBoundingClientRect():qc),xe=qc,We;for(U=0;U<j.length;U++)z=j[U],z.nodeType===1&&(z.nodeName==="BR"?((!U||j[U-1].nodeName!=="BR")&&(X.push(z),$(L,U+1)),L=U+1,xe=_y(re,U)):(We=re[U],U&&We.top>xe.top&&We.left<xe.left+xe.width-1&&($(L,U),L=U),xe=We));L<U&&$(L,U),X.forEach(Y=>{var te;return(te=Y.parentNode)==null?void 0:te.removeChild(Y)})}if(!f){for(U=0;U<I.length;U++)if(D=I[U],h||!D.nextSibling||D.nextSibling.nodeType!==3)if(s&&!u){for(F=document.createElement("span"),F.style.whiteSpace="nowrap";D.firstChild;)F.appendChild(D.firstChild);D.replaceWith(F)}else D.replaceWith(...D.childNodes);else V=D.nextSibling,V&&V.nodeType===3&&(V.textContent=(D.textContent||"")+(V.textContent||""),D.remove());I.length=0,R.normalize()}this.lines.push(...y),this.words.push(...I),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(R=>{let b=R.cloneNode();return R.replaceWith(b),b.appendChild(R),R.className&&(b.className=R.className.trim()+"-mask"),b.style.overflow="clip",b}))),this.isSplit=!0,Zs&&u&&(a?Zs.addEventListener("loadingdone",this._split):Zs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(S=o&&o(this))&&S.totalTime&&(this._data.anim=M?S.totalTime(M):S),u&&a&&this.elements.forEach((R,b)=>{m[b].width=R.offsetWidth,v&&v.observe(R)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Zs?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(qd),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new U_(e,t)}static register(e){pa=pa||e||window.gsap,pa&&(ml=pa.utils.toArray,Uu=pa.core.context||Uu),!Zh&&window.innerWidth>0&&(Zs=document.fonts,Zh=!0)}};D_.version="3.14.2";let es=D_;var xy="1.3.17";function N_(r,e,t){return Math.max(r,Math.min(e,t))}function yy(r,e,t){return(1-t)*r+t*e}function Sy(r,e,t,n){return yy(r,e,1-Math.exp(-t*n))}function My(r,e){return(r%e+e)%e}var Ty=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=N_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Sy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ey(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var wy=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ey(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},O_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Kd=100/6,Mr={passive:!1},by=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new O_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Kd:n===2?this.window.width:1,s=n===1?Kd:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},$d=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Ay=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Ty;emitter=new O_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:I=w,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=xy,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=$d:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,autoRaf:v,anchors:S,autoToggle:R,allowNestedScroll:b,naiveDimensions:I,stopInertiaOnNavigate:y},this.dimensions=new wy(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new by(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=N_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=$d:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const R=window.getComputedStyle(r);i.computedStyle=R;const b=R.overflowX,w=R.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{const R=e!==0,b=t!==0;R&&s&&a&&(_="x"),b&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,M,v;if(_==="x")g=r.scrollLeft,p=c-h,m=e,M=s,v=a;else if(_==="y")g=r.scrollTop,p=u-f,m=t,M=o,v=l;else return!1;return(m>0?g<p:g>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?My(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Ry(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Cy(r,e,t){return e&&Ry(r.prototype,e),r}var pn,Tc,ni,Hr,Vr,Do,F_,_s,Va,k_,fr,Ei,B_,z_=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},H_=1,bo=[],at=[],Yi=[],Ga=Date.now,ef=function(e,t){return t},Py=function(){var e=Va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Yi),at=n,Yi=i,ef=function(o,a){return t[o](a)}},jr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},Wa=function(e){return!!~k_.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Dl="scrollLeft",Ul="scrollTop",tf=function(){return fr&&fr.isPressed||at.cache++},Yc=function(e,t){var n=function i(s){if(s||s===0){H_&&(ni.history.scrollRestoration="manual");var o=fr&&fr.isPressed;s=i.v=Math.round(s)||(fr&&fr.iOS?1:0),e(s),i.cacheID=at.cache,o&&ef("ss",s)}else(t||at.cache!==i.cacheID||ef("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:Dl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yc(function(r){return arguments.length?ni.scrollTo(r,sn.sc()):ni.pageXOffset||Hr[Dl]||Vr[Dl]||Do[Dl]||0})},sn={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:Yc(function(r){return arguments.length?ni.scrollTo(On.sc(),r):ni.pageYOffset||Hr[Ul]||Vr[Ul]||Do[Ul]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ly=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ts=function(e,t){var n=t.s,i=t.sc;Wa(e)&&(e=Hr.scrollingElement||Vr);var s=at.indexOf(e),o=i===sn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Rn(e,"scroll",tf);var a=at[s+o],l=a||(at[s+o]=Yc(jr(e,n),!0)||(Wa(e)?i:Yc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},nf=function(e,t,n){var i=e,s=e,o=Ga(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ga();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Ga();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ma=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},V_=function(){Va=pn.core.globals().ScrollTrigger,Va&&Va.core&&Py()},G_=function(e){return pn=e||z_(),!Tc&&pn&&typeof document<"u"&&document.body&&(ni=window,Hr=document,Vr=Hr.documentElement,Do=Hr.body,k_=[ni,Hr,Vr,Do],pn.utils.clamp,B_=pn.core.context||function(){},_s="onpointerenter"in Do?"pointer":"mouse",F_=qt.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=qt.eventTypes=("ontouchstart"in Vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return H_=0},500),V_(),Tc=1),Tc};On.op=sn;at.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Tc||G_(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Va||V_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,R=n.onRight,b=n.onLeft,w=n.onUp,I=n.onDown,y=n.onChangeX,x=n.onChangeY,O=n.onChange,U=n.onToggleX,D=n.onToggleY,F=n.onHover,V=n.onHoverEnd,j=n.onMove,$=n.ignoreCheck,z=n.isNormalizer,X=n.onGestureStart,L=n.onGestureEnd,re=n.onWheel,xe=n.onEnable,We=n.onDisable,Y=n.onClick,te=n.scrollSpeed,ce=n.capture,se=n.allowClicks,Ce=n.lockAxis,Ie=n.onLockAxis;this.target=a=kn(a)||Vr,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(Do).lineHeight)||22);var qe,H,ke,le,Ye,Ae,je,T=this,E=0,K=0,J=n.passive||!u&&n.passive!==!1,Z=ts(a,On),ee=ts(a,sn),Pe=Z(),ie=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",De=Wa(a),ne=a.ownerDocument||Hr,fe=[0,0,0],Ue=[0,0,0],ge=0,Se=function(){return ge=Ga()},Ne=function(we,tt){return(T.event=we)&&d&&Ly(we.target,d)||tt&&pe&&we.pointerType!=="touch"||$&&$(we,tt)},rt=function(){T._vx.reset(),T._vy.reset(),H.pause(),h&&h(T)},et=function(){var we=T.deltaX=Zd(fe),tt=T.deltaY=Zd(Ue),ue=Math.abs(we)>=i,Ge=Math.abs(tt)>=i;O&&(ue||Ge)&&O(T,we,tt,fe,Ue),ue&&(R&&T.deltaX>0&&R(T),b&&T.deltaX<0&&b(T),y&&y(T),U&&T.deltaX<0!=E<0&&U(T),E=T.deltaX,fe[0]=fe[1]=fe[2]=0),Ge&&(I&&T.deltaY>0&&I(T),w&&T.deltaY<0&&w(T),x&&x(T),D&&T.deltaY<0!=K<0&&D(T),K=T.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(le||ke)&&(j&&j(T),ke&&(p&&ke===1&&p(T),M&&M(T),ke=0),le=!1),Ae&&!(Ae=!1)&&Ie&&Ie(T),Ye&&(re(T),Ye=!1),qe=0},lt=function(we,tt,ue){fe[ue]+=we,Ue[ue]+=tt,T._vx.update(we),T._vy.update(tt),c?qe||(qe=requestAnimationFrame(et)):et()},ft=function(we,tt){Ce&&!je&&(T.axis=je=Math.abs(we)>Math.abs(tt)?"x":"y",Ae=!0),je!=="y"&&(fe[2]+=we,T._vx.update(we,!0)),je!=="x"&&(Ue[2]+=tt,T._vy.update(tt,!0)),c?qe||(qe=requestAnimationFrame(et)):et()},ye=function(we){if(!Ne(we,1)){we=ma(we,u);var tt=we.clientX,ue=we.clientY,Ge=tt-T.x,Oe=ue-T.y,Ve=T.isDragging;T.x=tt,T.y=ue,(Ve||(Ge||Oe)&&(Math.abs(T.startX-tt)>=s||Math.abs(T.startY-ue)>=s))&&(ke||(ke=Ve?2:1),Ve||(T.isDragging=!0),ft(Ge,Oe))}},N=T.onPress=function(Fe){Ne(Fe,1)||Fe&&Fe.button||(T.axis=je=null,H.pause(),T.isPressed=!0,Fe=ma(Fe),E=K=0,T.startX=T.x=Fe.clientX,T.startY=T.y=Fe.clientY,T._vx.reset(),T._vy.reset(),Rn(z?a:ne,Ei[1],ye,J,!0),T.deltaX=T.deltaY=0,v&&v(T))},Q=T.onRelease=function(Fe){if(!Ne(Fe,1)){bn(z?a:ne,Ei[1],ye,!0);var we=!isNaN(T.y-T.startY),tt=T.isDragging,ue=tt&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),Ge=ma(Fe);!ue&&we&&(T._vx.reset(),T._vy.reset(),u&&se&&pn.delayedCall(.08,function(){if(Ga()-ge>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(ne.createEvent){var Oe=ne.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ni,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(Oe)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,h&&tt&&!z&&H.restart(!0),ke&&et(),m&&tt&&m(T),S&&S(T,ue)}},ae=function(we){return we.touches&&we.touches.length>1&&(T.isGesturing=!0)&&X(we,T.isDragging)},_e=function(){return(T.isGesturing=!1)||L(T)},Me=function(we){if(!Ne(we)){var tt=Z(),ue=ee();lt((tt-Pe)*te,(ue-ie)*te,1),Pe=tt,ie=ue,h&&H.restart(!0)}},st=function(we){if(!Ne(we)){we=ma(we,u),re&&(Ye=!0);var tt=(we.deltaMode===1?l:we.deltaMode===2?ni.innerHeight:1)*_;lt(we.deltaX*tt,we.deltaY*tt,0),h&&!z&&H.restart(!0)}},ht=function(we){if(!Ne(we)){var tt=we.clientX,ue=we.clientY,Ge=tt-T.x,Oe=ue-T.y;T.x=tt,T.y=ue,le=!0,h&&H.restart(!0),(Ge||Oe)&&ft(Ge,Oe)}},pt=function(we){T.event=we,F(T)},wt=function(we){T.event=we,V(T)},dt=function(we){return Ne(we)||ma(we,u)&&Y(T)};H=T._dc=pn.delayedCall(f||.25,rt).pause(),T.deltaX=T.deltaY=0,T._vx=nf(0,50,!0),T._vy=nf(0,50,!0),T.scrollX=Z,T.scrollY=ee,T.isDragging=T.isGesturing=T.isPressed=!1,B_(this),T.enable=function(Fe){return T.isEnabled||(Rn(De?ne:a,"scroll",tf),o.indexOf("scroll")>=0&&Rn(De?ne:a,"scroll",Me,J,ce),o.indexOf("wheel")>=0&&Rn(a,"wheel",st,J,ce),(o.indexOf("touch")>=0&&F_||o.indexOf("pointer")>=0)&&(Rn(a,Ei[0],N,J,ce),Rn(ne,Ei[2],Q),Rn(ne,Ei[3],Q),se&&Rn(a,"click",Se,!0,!0),Y&&Rn(a,"click",dt),X&&Rn(ne,"gesturestart",ae),L&&Rn(ne,"gestureend",_e),F&&Rn(a,_s+"enter",pt),V&&Rn(a,_s+"leave",wt),j&&Rn(a,_s+"move",ht)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=le=ke=!1,T._vx.reset(),T._vy.reset(),Pe=Z(),ie=ee(),Fe&&Fe.type&&N(Fe),xe&&xe(T)),T},T.disable=function(){T.isEnabled&&(bo.filter(function(Fe){return Fe!==T&&Wa(Fe.target)}).length||bn(De?ne:a,"scroll",tf),T.isPressed&&(T._vx.reset(),T._vy.reset(),bn(z?a:ne,Ei[1],ye,!0)),bn(De?ne:a,"scroll",Me,ce),bn(a,"wheel",st,ce),bn(a,Ei[0],N,ce),bn(ne,Ei[2],Q),bn(ne,Ei[3],Q),bn(a,"click",Se,!0),bn(a,"click",dt),bn(ne,"gesturestart",ae),bn(ne,"gestureend",_e),bn(a,_s+"enter",pt),bn(a,_s+"leave",wt),bn(a,_s+"move",ht),T.isEnabled=T.isPressed=T.isDragging=!1,We&&We(T))},T.kill=T.revert=function(){T.disable();var Fe=bo.indexOf(T);Fe>=0&&bo.splice(Fe,1),fr===T&&(fr=0)},bo.push(T),z&&Wa(a)&&(fr=T),T.enable(g)},Cy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.14.2";qt.create=function(r){return new qt(r)};qt.register=G_;qt.getAll=function(){return bo.slice()};qt.getById=function(r){return bo.filter(function(e){return e.vars.id===r})[0]};z_()&&pn.registerPlugin(qt);var ve,So,ot,At,Qn,gt,qf,jc,gl,Xa,Ra,Nl,yn,pu,rf,Ln,Jd,Qd,Mo,W_,Nu,X_,Pn,sf,q_,Y_,Lr,of,Yf,Uo,jf,qa,af,Ou,Ol=1,Sn=Date.now,Fu=Sn(),vi=0,Ca=0,ep=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},tp=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Iy=function r(){return Ca&&requestAnimationFrame(r)},np=function(){return pu=1},ip=function(){return pu=0},Ni=function(e){return e},Pa=function(e){return Math.round(e*1e5)/1e5||0},j_=function(){return typeof window<"u"},K_=function(){return ve||j_()&&(ve=window.gsap)&&ve.registerPlugin&&ve},Gs=function(e){return!!~qf.indexOf(e)},$_=function(e){return(e==="Height"?jf:ot["inner"+e])||Qn["client"+e]||gt["client"+e]},Z_=function(e){return jr(e,"getBoundingClientRect")||(Gs(e)?function(){return Rc.width=ot.innerWidth,Rc.height=jf,Rc}:function(){return ur(e)})},Dy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=jr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?$_(s):e["client"+s])||0}},Uy=function(e,t){return!t||~Yi.indexOf(e)?Z_(e):function(){return Rc}},Gi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=jr(e,n))?o()-Z_(e)()[s]:Gs(e)?(Qn[n]||gt[n])-$_(i):e[n]-e["offset"+i])},Fl=function(e,t){for(var n=0;n<Mo.length;n+=3)(!t||~t.indexOf(Mo[n+1]))&&e(Mo[n],Mo[n+1],Mo[n+2])},Zn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},La=function(e){return typeof e=="number"},vs=function(e){return typeof e=="object"},ga=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ku=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qs=Math.abs,J_="left",Q_="top",Kf="right",$f="bottom",ks="width",Bs="height",Ya="Right",ja="Left",Ka="Top",$a="Bottom",Zt="padding",di="margin",Yo="Width",Zf="Height",rn="px",pi=function(e){return ot.getComputedStyle(e)},Ny=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ur=function(e,t){var n=t&&pi(e)[rf]!=="matrix(1, 0, 0, 1, 0, 0)"&&ve.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Kc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},e0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Oy=function(e){return function(t){return ve.utils.snap(e0(e),t)}},Jf=function(e){var t=ve.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Fy=function(e){return function(t,n){return Jf(e0(e))(t,n.direction)}},kl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zl={toggleActions:"play",anticipatePin:0},$c={top:0,left:0,center:.5,bottom:1,right:1},Ec=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $c?$c[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=At.createElement("div"),g=Gs(n)||jr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?gt:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===sn?Kf:$f)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],wc(_,0,i,M),_},wc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Yo]=1,s["border"+a+Yo]=0,s[n.p]=t+"px",ve.set(e,s)},nt=[],lf={},_l,op=function(){return Sn()-vi>34&&(_l||(_l=requestAnimationFrame(mr)))},eo=function(){(!Pn||!Pn.isPressed||Pn.startX>gt.clientWidth)&&(at.cache++,Pn?_l||(_l=requestAnimationFrame(mr)):mr(),vi||Xs("scrollStart"),vi=Sn())},Bu=function(){Y_=ot.innerWidth,q_=ot.innerHeight},Ia=function(e){at.cache++,(e===!0||!yn&&!X_&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!sf||Y_!==ot.innerWidth||Math.abs(ot.innerHeight-q_)>ot.innerHeight*.25))&&jc.restart(!0)},Ws={},ky=[],t0=function r(){return cn(it,"scrollEnd",r)||As(!0)},Xs=function(e){return Ws[e]&&Ws[e].map(function(t){return t()})||ky},$n=[],n0=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},i0=function(){return at.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})},Qf=function(e,t){var n;for(Ln=0;Ln<nt.length;Ln++)n=nt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));qa=!0,t&&n0(t),t||Xs("revert")},r0=function(e,t){at.cache++,(t||!In)&&at.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(ot.history.scrollRestoration=Yf=e)},In,zs=0,ap,By=function(){if(ap!==zs){var e=ap=zs;requestAnimationFrame(function(){return e===zs&&As(!0)})}},s0=function(){gt.appendChild(Uo),jf=!Pn&&Uo.offsetHeight||ot.innerHeight,gt.removeChild(Uo)},lp=function(e){return gl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},As=function(e,t){if(Qn=At.documentElement,gt=At.body,qf=[ot,At,Qn,gt],vi&&!e&&!qa){un(it,"scrollEnd",t0);return}s0(),In=it.isRefreshing=!0,qa||i0();var n=Xs("refreshInit");W_&&it.sort(),t||Qf(),at.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),qa=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),af=1,lp(!0),nt.forEach(function(i){var s=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),lp(!1),af=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),r0(Yf,1),jc.pause(),zs++,In=2,mr(2),nt.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=it.isRefreshing=!1,Xs("refresh")},cf=0,bc=1,Za,mr=function(e){if(e===2||!In&&!qa){it.isUpdating=!0,Za&&Za.update(0);var t=nt.length,n=Sn(),i=n-Fu>=50,s=t&&nt[0].scroll();if(bc=cf>s?-1:1,In||(cf=s),i&&(vi&&!pu&&n-vi>200&&(vi=0,Xs("scrollEnd")),Ra=Fu,Fu=n),bc<0){for(Ln=t;Ln-- >0;)nt[Ln]&&nt[Ln].update(0,i);bc=1}else for(Ln=0;Ln<t;Ln++)nt[Ln]&&nt[Ln].update(0,i);it.isUpdating=!1}_l=0},uf=[J_,Q_,$f,Kf,di+$a,di+Ya,di+Ka,di+ja,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ac=uf.concat([ks,Bs,"boxSizing","max"+Yo,"max"+Zf,"position",di,Zt,Zt+Ka,Zt+Ya,Zt+$a,Zt+ja]),zy=function(e,t,n){No(n);var i=e._gsap;if(i.spacerIsNative)No(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=uf.length,o=t.style,a=e.style,l;s--;)l=uf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$f]=a[Kf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ks]=Kc(e,On)+rn,o[Bs]=Kc(e,sn)+rn,o[Zt]=a[di]=a[Q_]=a[J_]="0",No(i),a[ks]=a["max"+Yo]=n[ks],a[Bs]=a["max"+Zf]=n[Bs],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Hy=/([A-Z])/g,No=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ve.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Hy,"-$1").toLowerCase())}},Vl=function(e){for(var t=Ac.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ac[s],n[Ac[s]]);return i.t=e,i},Vy=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Rc={left:0,top:0},cp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){En(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ec("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),La(e))d&&(e=ve.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&wc(a,n,i,!0);else{En(t)&&(t=t(l));var v=(e||"0").split(" "),S,R,b,w;M=kn(t,l)||gt,S=ur(M)||{},(!S||!S.left&&!S.top)&&pi(M).display==="none"&&(w=M.style.display,M.style.display="block",S=ur(M),w?M.style.display=w:M.style.removeProperty("display")),R=Ec(v[0],S[i.d]),b=Ec(v[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-b,a&&wc(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,y=o._isStart;p="scroll"+i.d2,wc(o,I,i,y&&I>20||!y&&(h?Math.max(gt[p],Qn[p]):o.parentNode[p])<=I+1),h&&(c=ur(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+rn))}return d&&M&&(p=ur(M),d.seek(f),m=ur(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Gy=/(webkit|moz|length|cssText|inset)/i,up=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!Gy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ve.core.getCache(e).uncache=1,t.appendChild(e)}},o0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Gl=function(e,t,n){var i={};i[t.p]="+="+n,ve.set(e,i)},hp=function(e,t){var n=ts(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=o0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&mr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ve.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",n.wheelHandler),it.isTouch&&un(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){So||r.register(ve)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),of(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=Ni;return}n=rp(Zn(n)||La(n)||n.nodeType?{trigger:n}:n,zl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,R=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:sn,O=!h&&h!==0,U=kn(n.scroller||ot),D=ve.core.getCache(U),F=Gs(U),V=("pinType"in n?n.pinType:jr(U,"pinType")||F&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=O&&n.toggleActions.split(" "),z="markers"in n?n.markers:zl.markers,X=F?0:parseFloat(pi(U)["border"+x.p2+Yo])||0,L=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(L)},xe=Dy(U,F,x),We=Uy(U,F),Y=0,te=0,ce=0,se=ts(U,x),Ce,Ie,qe,H,ke,le,Ye,Ae,je,T,E,K,J,Z,ee,Pe,ie,pe,De,ne,fe,Ue,ge,Se,Ne,rt,et,lt,ft,ye,N,Q,ae,_e,Me,st,ht,pt,wt;if(L._startClamp=L._endClamp=!1,L._dir=x,p*=45,L.scroller=U,L.scroll=w?w.time.bind(w):se,H=se(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(W_=1,n.refreshPriority===-9999&&(Za=L)),D.tweenScroll=D.tweenScroll||{top:hp(U,sn),left:hp(U,On)},L.tweenTo=Ce=D.tweenScroll[x.p],L.scrubDuration=function(ue){ae=La(ue)&&ue,ae?Q?Q.duration(ue):Q=ve.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return m&&m(L)}}):(Q&&Q.progress(1).kill(),Q=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ye=0,l||(l=i.vars.id)),S&&((!vs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in gt.style&&ve.set(F?[gt,Qn]:U,{scrollBehavior:"auto"}),at.forEach(function(ue){return En(ue)&&ue.target===(F?At.scrollingElement||Qn:U)&&(ue.smooth=!1)}),qe=En(S.snapTo)?S.snapTo:S.snapTo==="labels"?Oy(i):S.snapTo==="labelsDirectional"?Fy(i):S.directional!==!1?function(ue,Ge){return Jf(S.snapTo)(ue,Sn()-te<500?0:Ge.direction)}:ve.utils.snap(S.snapTo),_e=S.duration||{min:.1,max:2},_e=vs(_e)?Xa(_e.min,_e.max):Xa(_e,_e),Me=ve.delayedCall(S.delay||ae/2||.1,function(){var ue=se(),Ge=Sn()-te<500,Oe=Ce.tween;if((Ge||Math.abs(L.getVelocity())<10)&&!Oe&&!pu&&Y!==ue){var Ve=(ue-le)/Z,Gt=i&&!O?i.totalProgress():Ve,$e=Ge?0:(Gt-N)/(Sn()-Ra)*1e3||0,Lt=ve.utils.clamp(-Ve,1-Ve,Qs($e/2)*$e/.185),nn=Ve+(S.inertia===!1?0:Lt),It,bt,_t=S,C=_t.onStart,k=_t.onInterrupt,W=_t.onComplete;if(It=qe(nn,L),La(It)||(It=nn),bt=Math.max(0,Math.round(le+It*Z)),ue<=Ye&&ue>=le&&bt!==ue){if(Oe&&!Oe._initted&&Oe.data<=Qs(bt-ue))return;S.inertia===!1&&(Lt=It-Ve),Ce(bt,{duration:_e(Qs(Math.max(Qs(nn-Gt),Qs(It-Gt))*.185/$e/.05||0)),ease:S.ease||"power3",data:Qs(bt-ue),onInterrupt:function(){return Me.restart(!0)&&k&&k(L)},onComplete:function(){L.update(),Y=se(),i&&!O&&(Q?Q.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),ye=N=i&&!O?i.totalProgress():L.progress,M&&M(L),W&&W(L)}},ue,Lt*Z,bt-ue-Lt*Z),C&&C(L,Ce.tween)}}else L.isActive&&Y!==ue&&Me.restart(!0)}).pause()),l&&(lf[l]=L),f=L.trigger=kn(f||d!==!0&&d),wt=f&&f._gsap&&f._gsap.stRevert,wt&&(wt=wt(L)),d=d===!0?f:kn(d),Zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===di||(_=!_&&d.parentNode&&d.parentNode.style&&pi(d.parentNode).display==="flex"?!1:Zt),L.pin=d,Ie=ve.core.getCache(d),Ie.spacer?ee=Ie.pinState:(b&&(b=kn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ie.spacerIsNative=!!b,b&&(Ie.spacerState=Vl(b))),Ie.spacer=pe=b||At.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Ie.pinState=ee=Vl(d)),n.force3D!==!1&&ve.set(d,{force3D:!0}),L.spacer=pe=Ie.spacer,ft=pi(d),Se=ft[_+x.os2],ne=ve.getProperty(d),fe=ve.quickSetter(d,x.a,rn),zu(d,pe,ft),ie=Vl(d)),z){K=vs(z)?rp(z,sp):sp,T=Hl("scroller-start",l,U,x,K,0),E=Hl("scroller-end",l,U,x,K,0,T),De=T["offset"+x.op.d2];var dt=kn(jr(U,"content")||U);Ae=this.markerStart=Hl("start",l,dt,x,K,De,0,w),je=this.markerEnd=Hl("end",l,dt,x,K,De,0,w),w&&(pt=ve.quickSetter([Ae,je],x.a,rn)),!V&&!(Yi.length&&jr(U,"fixedMarkers")===!0)&&(Ny(F?gt:U),ve.set([T,E],{force3D:!0}),rt=ve.quickSetter(T,x.a,rn),lt=ve.quickSetter(E,x.a,rn))}if(w){var Fe=w.vars.onUpdate,we=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),Fe&&Fe.apply(w,we||[])})}if(L.previous=function(){return nt[nt.indexOf(L)-1]},L.next=function(){return nt[nt.indexOf(L)+1]},L.revert=function(ue,Ge){if(!Ge)return L.kill(!0);var Oe=ue!==!1||!L.enabled,Ve=yn;Oe!==L.isReverted&&(Oe&&(st=Math.max(se(),L.scroll.rec||0),ce=L.progress,ht=i&&i.progress()),Ae&&[Ae,je,T,E].forEach(function(Gt){return Gt.style.display=Oe?"none":"block"}),Oe&&(yn=L,L.update(Oe)),d&&(!R||!L.isActive)&&(Oe?zy(d,pe,ee):zu(d,pe,pi(d),Ne)),Oe||L.update(Oe),yn=Ve,L.isReverted=Oe)},L.refresh=function(ue,Ge,Oe,Ve){if(!((yn||!L.enabled)&&!Ge)){if(d&&ue&&vi){un(r,"scrollEnd",t0);return}!In&&re&&re(L),yn=L,Ce.tween&&!Oe&&(Ce.tween.kill(),Ce.tween=0),Q&&Q.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(li){return li.vars.immediateRender&&li.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Gt=xe(),$e=We(),Lt=w?w.duration():Gi(U,x),nn=Z<=.01||!Z,It=0,bt=Ve||0,_t=vs(Oe)?Oe.end:n.end,C=n.endTrigger||f,k=vs(Oe)?Oe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),W=L.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,L),q=f&&Math.max(0,nt.indexOf(L))||0,G=q,oe,de,Le,He,Re,Te,Be,Pt,gn,Dt,jt,vt,Xe;for(z&&vs(Oe)&&(vt=ve.getProperty(T,x.p),Xe=ve.getProperty(E,x.p));G-- >0;)Te=nt[G],Te.end||Te.refresh(0,1)||(yn=L),Be=Te.pin,Be&&(Be===f||Be===d||Be===W)&&!Te.isReverted&&(Dt||(Dt=[]),Dt.unshift(Te),Te.revert(!0,!0)),Te!==nt[G]&&(q--,G--);for(En(k)&&(k=k(L)),k=ep(k,"start",L),le=cp(k,f,Gt,x,se(),Ae,T,L,$e,X,V,Lt,w,L._startClamp&&"_startClamp")||(d?-.001:0),En(_t)&&(_t=_t(L)),Zn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Zn(k)?k.split(" ")[0]:"")+_t:(It=Ec(_t.substr(2),Gt),_t=Zn(k)?k:(w?ve.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,le):le)+It,C=f)),_t=ep(_t,"end",L),Ye=Math.max(le,cp(_t||(C?"100% 0":Lt),C,Gt,x,se()+It,je,E,L,$e,X,V,Lt,w,L._endClamp&&"_endClamp"))||-.001,It=0,G=q;G--;)Te=nt[G]||{},Be=Te.pin,Be&&Te.start-Te._pinPush<=le&&!w&&Te.end>0&&(oe=Te.end-(L._startClamp?Math.max(0,Te.start):Te.start),(Be===f&&Te.start-Te._pinPush<le||Be===W)&&isNaN(k)&&(It+=oe*(1-Te.progress)),Be===d&&(bt+=oe));if(le+=It,Ye+=It,L._startClamp&&(L._startClamp+=It),L._endClamp&&!In&&(L._endClamp=Ye||-.001,Ye=Math.min(Ye,Gi(U,x))),Z=Ye-le||(le-=.01)&&.001,nn&&(ce=ve.utils.clamp(0,1,ve.utils.normalize(le,Ye,st))),L._pinPush=bt,Ae&&It&&(oe={},oe[x.a]="+="+It,W&&(oe[x.p]="-="+se()),ve.set([Ae,je],oe)),d&&!(af&&L.end>=Gi(U,x)))oe=pi(d),He=x===sn,Le=se(),Ue=parseFloat(ne(x.a))+bt,!Lt&&Ye>1&&(jt=(F?At.scrollingElement||Qn:U).style,jt={style:jt,value:jt["overflow"+x.a.toUpperCase()]},F&&pi(gt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+x.a.toUpperCase()]="scroll")),zu(d,pe,oe),ie=Vl(d),de=ur(d,!0),Pt=V&&ts(U,He?On:sn)(),_?(Ne=[_+x.os2,Z+bt+rn],Ne.t=pe,G=_===Zt?Kc(d,x)+Z+bt:0,G&&(Ne.push(x.d,G+rn),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+rn)),No(Ne),W&&nt.forEach(function(li){li.pin===W&&li.vars.pinSpacing!==!1&&(li._subPinOffset=!0)}),V&&se(st)):(G=Kc(d,x),G&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+rn)),V&&(Re={top:de.top+(He?Le-le:Pt)+rn,left:de.left+(He?Pt:Le-le)+rn,boxSizing:"border-box",position:"fixed"},Re[ks]=Re["max"+Yo]=Math.ceil(de.width)+rn,Re[Bs]=Re["max"+Zf]=Math.ceil(de.height)+rn,Re[di]=Re[di+Ka]=Re[di+Ya]=Re[di+$a]=Re[di+ja]="0",Re[Zt]=oe[Zt],Re[Zt+Ka]=oe[Zt+Ka],Re[Zt+Ya]=oe[Zt+Ya],Re[Zt+$a]=oe[Zt+$a],Re[Zt+ja]=oe[Zt+ja],Pe=Vy(ee,Re,R),In&&se(0)),i?(gn=i._initted,Nu(1),i.render(i.duration(),!0,!0),ge=ne(x.a)-Ue+Z+bt,et=Math.abs(Z-ge)>1,V&&et&&Pe.splice(Pe.length-2,2),i.render(0,!0,!0),gn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Nu(0)):ge=Z,jt&&(jt.value?jt.style["overflow"+x.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+x.a));else if(f&&se()&&!w)for(de=f.parentNode;de&&de!==gt;)de._pinOffset&&(le-=de._pinOffset,Ye-=de._pinOffset),de=de.parentNode;Dt&&Dt.forEach(function(li){return li.revert(!1,!0)}),L.start=le,L.end=Ye,H=ke=In?st:se(),!w&&!In&&(H<st&&se(st),L.scroll.rec=0),L.revert(!1,!0),te=Sn(),Me&&(Y=-1,Me.restart(!0)),yn=0,i&&O&&(i._initted||ht)&&i.progress()!==ht&&i.progress(ht||0,!0).render(i.time(),!0,!0),(nn||ce!==L.progress||w||g||i&&!i._initted)&&(i&&!O&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(w&&le<-.001&&!ce?ve.utils.normalize(le,Ye,0):ce,!0),L.progress=nn||(H-le)/Z===ce?0:ce),d&&_&&(pe._pinOffset=Math.round(L.progress*ge)),Q&&Q.invalidate(),isNaN(vt)||(vt-=ve.getProperty(T,x.p),Xe-=ve.getProperty(E,x.p),Gl(T,x,vt),Gl(Ae,x,vt-(Ve||0)),Gl(E,x,Xe),Gl(je,x,Xe-(Ve||0))),nn&&!In&&L.update(),u&&!In&&!J&&(J=!0,u(L),J=!1)}},L.getVelocity=function(){return(se()-ke)/(Sn()-Ra)*1e3||0},L.endAnimation=function(){ga(L.callbackAnimation),i&&(Q?Q.progress(1):i.paused()?O||ga(i,L.direction<0,1):ga(i,i.reversed()))},L.labelToScroll=function(ue){return i&&i.labels&&(le||L.refresh()||le)+i.labels[ue]/i.duration()*Z||0},L.getTrailing=function(ue){var Ge=nt.indexOf(L),Oe=L.direction>0?nt.slice(0,Ge).reverse():nt.slice(Ge+1);return(Zn(ue)?Oe.filter(function(Ve){return Ve.vars.preventOverlaps===ue}):Oe).filter(function(Ve){return L.direction>0?Ve.end<=le:Ve.start>=Ye})},L.update=function(ue,Ge,Oe){if(!(w&&!Oe&&!ue)){var Ve=In===!0?st:L.scroll(),Gt=ue?0:(Ve-le)/Z,$e=Gt<0?0:Gt>1?1:Gt||0,Lt=L.progress,nn,It,bt,_t,C,k,W,q;if(Ge&&(ke=H,H=w?se():Ve,S&&(N=ye,ye=i&&!O?i.totalProgress():$e)),p&&d&&!yn&&!Ol&&vi&&(!$e&&le<Ve+(Ve-ke)/(Sn()-Ra)*p?$e=1e-4:$e===1&&Ye>Ve+(Ve-ke)/(Sn()-Ra)*p&&($e=.9999)),$e!==Lt&&L.enabled){if(nn=L.isActive=!!$e&&$e<1,It=!!Lt&&Lt<1,k=nn!==It,C=k||!!$e!=!!Lt,L.direction=$e>Lt?1:-1,L.progress=$e,C&&!yn&&(bt=$e&&!Lt?0:$e===1?1:Lt===1?2:3,O&&(_t=!k&&$[bt+1]!=="none"&&$[bt+1]||$[bt],q=i&&(_t==="complete"||_t==="reset"||_t in i))),y&&(k||q)&&(q||h||!i)&&(En(y)?y(L):L.getTrailing(y).forEach(function(Le){return Le.endAnimation()})),O||(Q&&!yn&&!Ol?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",$e,i._tTime/i._tDur):(Q.vars.totalProgress=$e,Q.invalidate().restart())):i&&i.totalProgress($e,!!(yn&&(te||ue)))),d){if(ue&&_&&(pe.style[_+x.os2]=Se),!V)fe(Pa(Ue+ge*$e));else if(C){if(W=!ue&&$e>Lt&&Ye+1>Ve&&Ve+1>=Gi(U,x),R)if(!ue&&(nn||W)){var G=ur(d,!0),oe=Ve-le;up(d,gt,G.top+(x===sn?oe:0)+rn,G.left+(x===sn?0:oe)+rn)}else up(d,pe);No(nn||W?Pe:ie),et&&$e<1&&nn||fe(Ue+($e===1&&!W?ge:0))}}S&&!Ce.tween&&!yn&&!Ol&&Me.restart(!0),a&&(k||v&&$e&&($e<1||!Ou))&&gl(a.targets).forEach(function(Le){return Le.classList[nn||v?"add":"remove"](a.className)}),o&&!O&&!ue&&o(L),C&&!yn?(O&&(q&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(L)),(k||!Ou)&&(c&&k&&ku(L,c),j[bt]&&ku(L,j[bt]),v&&($e===1?L.kill(!1,1):j[bt]=0),k||(bt=$e===1?1:3,j[bt]&&ku(L,j[bt]))),I&&!nn&&Math.abs(L.getVelocity())>(La(I)?I:2500)&&(ga(L.callbackAnimation),Q?Q.progress(1):ga(i,_t==="reverse"?1:!$e,1))):O&&o&&!yn&&o(L)}if(lt){var de=w?Ve/w.duration()*(w._caScrollDist||0):Ve;rt(de+(T._isFlipped?1:0)),lt(de)}pt&&pt(-Ve/w.duration()*(w._caScrollDist||0))}},L.enable=function(ue,Ge){L.enabled||(L.enabled=!0,un(U,"resize",Ia),F||un(U,"scroll",eo),re&&un(r,"refreshInit",re),ue!==!1&&(L.progress=ce=0,H=ke=Y=se()),Ge!==!1&&L.refresh())},L.getTween=function(ue){return ue&&Ce?Ce.tween:Q},L.setPositions=function(ue,Ge,Oe,Ve){if(w){var Gt=w.scrollTrigger,$e=w.duration(),Lt=Gt.end-Gt.start;ue=Gt.start+Lt*ue/$e,Ge=Gt.start+Lt*Ge/$e}L.refresh(!1,!1,{start:tp(ue,Oe&&!!L._startClamp),end:tp(Ge,Oe&&!!L._endClamp)},Ve),L.update()},L.adjustPinSpacing=function(ue){if(Ne&&ue){var Ge=Ne.indexOf(x.d)+1;Ne[Ge]=parseFloat(Ne[Ge])+ue+rn,Ne[1]=parseFloat(Ne[1])+ue+rn,No(Ne)}},L.disable=function(ue,Ge){if(ue!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ge||Q&&Q.pause(),st=0,Ie&&(Ie.uncache=1),re&&cn(r,"refreshInit",re),Me&&(Me.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!F)){for(var Oe=nt.length;Oe--;)if(nt[Oe].scroller===U&&nt[Oe]!==L)return;cn(U,"resize",Ia),F||cn(U,"scroll",eo)}},L.kill=function(ue,Ge){L.disable(ue,Ge),Q&&!Ge&&Q.kill(),l&&delete lf[l];var Oe=nt.indexOf(L);Oe>=0&&nt.splice(Oe,1),Oe===Ln&&bc>0&&Ln--,Oe=0,nt.forEach(function(Ve){return Ve.scroller===L.scroller&&(Oe=1)}),Oe||In||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),Ge||i.kill()),Ae&&[Ae,je,T,E].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),Za===L&&(Za=0),d&&(Ie&&(Ie.uncache=1),Oe=0,nt.forEach(function(Ve){return Ve.pin===d&&Oe++}),Oe||(Ie.spacer=0)),n.onKill&&n.onKill(L)},nt.push(L),L.enable(!1,!1),wt&&wt(L),i&&i.add&&!Z){var tt=L.update;L.update=function(){L.update=tt,at.cache++,le||Ye||L.refresh()},ve.delayedCall(.01,L.update),Z=.01,le=Ye=0}else L.refresh();d&&By()},r.register=function(n){return So||(ve=n||K_(),j_()&&window.document&&r.enable(),So=Ca),So},r.defaults=function(n){if(n)for(var i in n)zl[i]=n[i];return zl},r.disable=function(n,i){Ca=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(ot,"wheel",eo),cn(At,"scroll",eo),clearInterval(Nl),cn(At,"touchcancel",Ni),cn(gt,"touchstart",Ni),kl(cn,At,"pointerdown,touchstart,mousedown",np),kl(cn,At,"pointerup,touchend,mouseup",ip),jc.kill(),Fl(cn);for(var s=0;s<at.length;s+=3)Bl(cn,at[s],at[s+1]),Bl(cn,at[s],at[s+2])},r.enable=function(){if(ot=window,At=document,Qn=At.documentElement,gt=At.body,ve&&(gl=ve.utils.toArray,Xa=ve.utils.clamp,of=ve.core.context||Ni,Nu=ve.core.suppressOverwrites||Ni,Yf=ot.history.scrollRestoration||"auto",cf=ot.pageYOffset||0,ve.core.globals("ScrollTrigger",r),gt)){Ca=1,Uo=document.createElement("div"),Uo.style.height="100vh",Uo.style.position="absolute",s0(),Iy(),qt.register(ve),r.isTouch=qt.isTouch,Lr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sf=qt.isTouch===1,un(ot,"wheel",eo),qf=[ot,At,Qn,gt],ve.matchMedia?(r.matchMedia=function(c){var u=ve.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ve.addEventListener("matchMediaInit",function(){i0(),Qf()}),ve.addEventListener("matchMediaRevert",function(){return n0()}),ve.addEventListener("matchMedia",function(){As(0,1),Xs("matchMedia")}),ve.matchMedia().add("(orientation: portrait)",function(){return Bu(),Bu})):console.warn("Requires GSAP 3.11.0 or later"),Bu(),un(At,"scroll",eo);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,o=ve.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ur(gt),sn.m=Math.round(a.top+sn.sc())||0,On.m=Math.round(a.left+On.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Nl=setInterval(op,250),ve.delayedCall(.5,function(){return Ol=0}),un(At,"touchcancel",Ni),un(gt,"touchstart",Ni),kl(un,At,"pointerdown,touchstart,mousedown",np),kl(un,At,"pointerup,touchend,mouseup",ip),rf=ve.utils.checkPrefix("transform"),Ac.push(rf),So=Sn(),jc=ve.delayedCall(.2,As).pause(),Mo=[At,"visibilitychange",function(){var c=ot.innerWidth,u=ot.innerHeight;At.hidden?(Jd=c,Qd=u):(Jd!==c||Qd!==u)&&Ia()},At,"DOMContentLoaded",As,ot,"load",As,ot,"resize",Ia],Fl(un),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)Bl(cn,at[l],at[l+1]),Bl(cn,at[l],at[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ou=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nl)||(Nl=i)&&setInterval(op,i),"ignoreMobileResize"in n&&(sf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fl(cn)||Fl(un,n.autoRefreshEvents||"none"),X_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=at.indexOf(s),a=Gs(s);~o&&at.splice(o,a?6:2),i&&(a?Yi.unshift(ot,i,gt,i,Qn,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?kn(n):n).getBoundingClientRect(),a=o[s?ks:Bs]*i||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?ks:Bs],l=i==null?a/2:i in $c?$c[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ws.killAll||[];Ws={},i.forEach(function(s){return s()})}},r})();it.version="3.14.2";it.saveStyles=function(r){return r?gl(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ve.core.getCache(e),of())}}):$n};it.revert=function(r,e){return Qf(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?Ia(!0):(So||it.register())&&As(!0)};it.update=function(r){return++at.cache&&mr(r===!0?2:0)};it.clearScrollMemory=r0;it.maxScroll=function(r,e){return Gi(r,e?On:sn)};it.getScrollFunc=function(r,e){return ts(kn(r),e?On:sn)};it.getById=function(r){return lf[r]};it.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!vi};it.snapDirectional=Jf;it.addEventListener=function(r,e){var t=Ws[r]||(Ws[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Ws[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=ve.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),un(it,"refresh",function(){return s=e.batchMax()})),gl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(it.create(c))}),t};var fp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(gt,t)},Wl={auto:1,scroll:1},Wy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ve.core.getCache(s),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wl[(l=pi(s)).overflowY]||Wl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gs(s)&&(Wl[(l=pi(s)).overflowY]||Wl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},a0=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Wy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(At,qt.eventTypes[0],pp,!1,!0)},onDisable:function(){return cn(At,qt.eventTypes[0],pp,!0)}})},Xy=/(input|label|select|textarea)/i,dp,pp=function(e){var t=Xy.test(e.target.tagName);(t||dp)&&(e._gsapAllow=!0,dp=t)},qy=function(e){vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=kn(e.target)||Qn,u=ve.core.globals().ScrollSmoother,h=u&&u.get(),f=Lr&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ts(c,sn),_=ts(c,On),g=1,p=(qt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,m=0,M=En(i)?function(){return i(a)}:function(){return i||2.8},v,S,R=a0(c,e.type,!0,s),b=function(){return S=!1},w=Ni,I=Ni,y=function(){l=Gi(c,sn),I=Xa(Lr?1:0,l),n&&(w=Xa(0,Gi(c,On))),v=zs},x=function(){f._gsap.y=Pa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(S){requestAnimationFrame(b);var z=Pa(a.deltaY/2),X=I(d.v-z);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var L=Pa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=at.cache,mr()}return!0}d.offset&&x(),S=!0},U,D,F,V,j=function(){y(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&ve.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Lr&&$.type==="touchmove"&&O()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=g;g=Pa((ot.visualViewport&&ot.visualViewport.scale||1)/p),U.pause(),$!==g&&Hu(c,g>1.01?!0:n?!1:"x"),D=_(),F=d(),y(),v=zs},e.onRelease=e.onGestureStart=function($,z){if(d.offset&&x(),!z)V.restart(!0);else{at.cache++;var X=M(),L,re;n&&(L=_(),re=L+X*.05*-$.velocityX/.227,X*=fp(_,L,re,Gi(c,On)),U.vars.scrollX=w(re)),L=d(),re=L+X*.05*-$.velocityY/.227,X*=fp(d,L,re,Gi(c,sn)),U.vars.scrollY=I(re),U.invalidate().duration(X).play(.01),(Lr&&U.vars.scrollY>=l||L>=l-1)&&ve.to({},{onUpdate:j,duration:X})}o&&o($)},e.onWheel=function(){U._ts&&U.pause(),Sn()-m>1e3&&(v=0,m=Sn())},e.onChange=function($,z,X,L,re){if(zs!==v&&y(),z&&n&&_(w(L[2]===z?D+($.startX-$.x):_()+z-L[1])),X){d.offset&&x();var xe=re[2]===X,We=xe?F+$.startY-$.y:d()+X-re[1],Y=I(We);xe&&We!==Y&&(F+=Y-We),d(Y)}(X||z)&&mr()},e.onEnable=function(){Hu(c,n?!1:"x"),it.addEventListener("refresh",j),un(ot,"resize",j),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Hu(c,!0),cn(ot,"resize",j),it.removeEventListener("refresh",j),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=Lr,Lr&&!d()&&d(1),Lr&&ve.ticker.add(Ni),V=a._dc,U=ve.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o0(d,d(),function(){return U.pause()})},onUpdate:mr,onComplete:V.vars.onComplete}),a};it.sort=function(r){if(En(r))return nt.sort(r);var e=ot.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new qt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof qt?r:qy(r);return Pn&&Pn.target===e.target&&Pn.kill(),Gs(e.target)&&(Pn=e),e};it.core={_getVelocityProp:nf,_inputObserver:a0,_scrollers:at,_proxies:Yi,bridge:{ss:function(){vi||Xs("scrollStart"),vi=Sn()},ref:function(){return yn}}};K_()&&ve.registerPlugin(it);const vl=new Ay({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8});Ee.ticker.add(r=>{vl.raf(r*1e3)});Ee.ticker.lagSmoothing(500,33);Ee.registerPlugin(es);let Ja=!1,Ai=!1,ei=null,mp=!1,gp=null,_p=null;const Vu=new Map,Yy=new WeakMap;function jy(r){if(Vu.has(r))return Vu.get(r);const e=new es(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),Vu.set(r,e),e}function Ky(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ai=!0,r.forEach(i=>{i.style.pointerEvents="all"}),ei&&(ei.style.pointerEvents="all"),Ee.to(ei,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),vl&&vl.stop(),r.length?Ee.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Ai=!1}}):Ai=!1,t.forEach(i=>{Ee.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=jy(s);Ee.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),Ja=!0}function Gu(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ai=!0,r.forEach(n=>{n.style.pointerEvents="none"}),ei&&(ei.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),vl&&vl.start(),r.length?Ee.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{Ee.set(t,{opacity:0,transform:"translateY(100%)"}),ei?Ee.to(ei,{autoAlpha:0,duration:.25,onComplete:()=>{Ai=!1}}):Ai=!1}}):Ai=!1,Ja=!1}function $y(){if(mp)return;mp=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".receipt-close");ei=document.querySelector(".menu-wrap"),ei&&(ei.style.pointerEvents="none",Ee.set(ei,{autoAlpha:0}),gp=i=>{i.target===ei&&Ja&&!Ai&&Gu()},ei.addEventListener("click",gp)),r&&(_p=i=>{i.preventDefault(),Ai&&(Ee.killTweensOf([...e,...t]),Ai=!1),Ja?Gu():Ky()},r.addEventListener("click",_p)),n.forEach(i=>{const s=o=>{o.preventDefault(),Ja&&!Ai&&Gu()};i.addEventListener("click",s),Yy.set(i,s)})}const mu="163",Zy=0,vp=1,Jy=2,Qy=0,l0=1,ed=2,or=3,Ki=0,Wn=1,wi=2,gr=0,Hs=1,xl=2,xp=3,yp=4,eS=5,Ms=100,tS=101,nS=102,iS=103,rS=104,sS=200,oS=201,aS=202,lS=203,hf=204,ff=205,cS=206,uS=207,hS=208,fS=209,dS=210,pS=211,mS=212,gS=213,_S=214,vS=0,xS=1,yS=2,Zc=3,SS=4,MS=5,TS=6,ES=7,c0=0,wS=1,bS=2,Kr=0,u0=1,h0=2,f0=3,td=4,AS=5,d0=6,p0=7,Sp="attached",RS="detached",m0=300,jo=301,Ko=302,df=303,pf=304,gu=306,$o=1e3,Bn=1001,Jc=1002,Fn=1003,g0=1004,Da=1005,zt=1006,Cc=1007,Ri=1008,_r=1009,CS=1010,PS=1011,_0=1012,v0=1013,Zo=1014,Wi=1015,$r=1016,x0=1017,y0=1018,Al=1020,LS=35902,IS=1021,DS=1022,_i=1023,US=1024,NS=1025,Oo=1026,yl=1027,S0=1028,M0=1029,OS=1030,T0=1031,E0=1033,Wu=33776,Xu=33777,qu=33778,Yu=33779,Mp=35840,Tp=35841,Ep=35842,wp=35843,w0=36196,bp=37492,Ap=37496,Rp=37808,Cp=37809,Pp=37810,Lp=37811,Ip=37812,Dp=37813,Up=37814,Np=37815,Op=37816,Fp=37817,kp=37818,Bp=37819,zp=37820,Hp=37821,ju=36492,Vp=36494,Gp=36495,FS=36283,Wp=36284,Xp=36285,qp=36286,Sl=2300,Jo=2301,Ku=2302,Yp=2400,jp=2401,Kp=2402,kS=2500,BS=0,b0=1,mf=2,zS=3200,HS=3201,A0=0,VS=1,Nr="",hn="srgb",rs="srgb-linear",nd="display-p3",_u="display-p3-linear",Qc="linear",Rt="srgb",eu="rec709",tu="p3",to=7680,$p=519,GS=512,WS=513,XS=514,R0=515,qS=516,YS=517,jS=518,KS=519,gf=35044,Zp="300 es",dr=2e3,nu=2001;class oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jp=1234567;const Qa=Math.PI/180,Qo=180/Math.PI;function Ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function id(r,e){return(r%e+e)%e}function $S(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ZS(r,e,t){return r!==e?(t-r)/(e-r):0}function el(r,e,t){return(1-t)*r+t*e}function JS(r,e,t,n){return el(r,e,1-Math.exp(-t*n))}function QS(r,e=1){return e-Math.abs(id(r,e*2)-e)}function eM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function iM(r,e){return r+Math.random()*(e-r)}function rM(r){return r*(.5-Math.random())}function sM(r){r!==void 0&&(Jp=r);let e=Jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oM(r){return r*Qa}function aM(r){return r*Qo}function lM(r){return(r&r-1)===0&&r!==0}function cM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pc={DEG2RAD:Qa,RAD2DEG:Qo,generateUUID:Ci,clamp:dn,euclideanModulo:id,mapLinear:$S,inverseLerp:ZS,lerp:el,damp:JS,pingpong:QS,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:rM,seededRandom:sM,degToRad:oM,radToDeg:aM,isPowerOfTwo:lM,ceilPowerOfTwo:cM,floorPowerOfTwo:uM,setQuaternionFromProperEuler:hM,normalize:xt,denormalize:bi};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],v=i[4],S=i[7],R=i[2],b=i[5],w=i[8];return s[0]=o*g+a*M+l*R,s[3]=o*p+a*v+l*b,s[6]=o*m+a*S+l*w,s[1]=c*g+u*M+h*R,s[4]=c*p+u*v+h*b,s[7]=c*m+u*S+h*w,s[2]=f*g+d*M+_*R,s[5]=f*p+d*v+_*b,s[8]=f*m+d*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($u.makeScale(e,t)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,t){return this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new Je;function C0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=Ml("canvas");return r.style.display="block",r}const Qp={};function P0(r){r in Qp||(Qp[r]=!0,console.warn(r))}const em=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tm=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[rs]:{transfer:Qc,primaries:eu,toReference:r=>r,fromReference:r=>r},[hn]:{transfer:Rt,primaries:eu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_u]:{transfer:Qc,primaries:tu,toReference:r=>r.applyMatrix3(tm),fromReference:r=>r.applyMatrix3(em)},[nd]:{transfer:Rt,primaries:tu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(tm),fromReference:r=>r.applyMatrix3(em).convertLinearToSRGB()}},dM=new Set([rs,_u]),St={enabled:!0,_workingColorSpace:rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!dM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Xl[e].toReference,i=Xl[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Xl[r].primaries},getTransfer:function(r){return r===Nr?Qc:Xl[r].transfer}};function Fo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class pM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{no===void 0&&(no=Ml("canvas")),no.width=e.width,no.height=e.height;const n=no.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=no}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ml("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Fo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fo(t[n]/255)*255):t[n]=Fo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mM=0;class L0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ju(i[o].image)):s.push(Ju(i[o]))}else s=Ju(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ju(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class tn extends oa{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Bn,i=Bn,s=zt,o=Ri,a=_i,l=_r,c=tn.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ci(),this.name="",this.source=new L0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=m0;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,R=(m+1)/2,b=(u+f)/4,w=(h+g)/4,I=(_+p)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=w/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=I/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends oa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new L0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends _M{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class I0 extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vM extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,m*M);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}const S=a*M;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new B,nm=new ss;class Ii{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),Yl.subVectors(this.max,_a),io.subVectors(e.a,_a),ro.subVectors(e.b,_a),so.subVectors(e.c,_a),Tr.subVectors(ro,io),Er.subVectors(so,ro),cs.subVectors(io,so);let t=[0,-Tr.z,Tr.y,0,-Er.z,Er.y,0,-cs.z,cs.y,Tr.z,0,-Tr.x,Er.z,0,-Er.x,cs.z,0,-cs.x,-Tr.y,Tr.x,0,-Er.y,Er.x,0,-cs.y,cs.x,0];return!eh(t,io,ro,so,Yl)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,io,ro,so,Yl))?!1:(jl.crossVectors(Tr,Er),t=[jl.x,jl.y,jl.z],eh(t,io,ro,so,Yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new B,new B,new B,new B,new B,new B,new B,new B],Si=new B,ql=new Ii,io=new B,ro=new B,so=new B,Tr=new B,Er=new B,cs=new B,_a=new B,Yl=new B,jl=new B,us=new B;function eh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);const a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xM=new Ii,va=new B,th=new B;class Zi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(th)),this.expandByPoint(va.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const er=new B,nh=new B,Kl=new B,wr=new B,ih=new B,$l=new B,rh=new B;class Rl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nh.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(nh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kl),a=wr.dot(this.direction),l=-wr.dot(Kl),c=wr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(nh).addScaledVector(Kl,f),d}intersectSphere(e,t){er.subVectors(e.center,this.origin);const n=er.dot(this.direction),i=er.dot(er)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,n,i,s){ih.subVectors(t,e),$l.subVectors(n,e),rh.crossVectors(ih,$l);let o=this.direction.dot(rh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,e);const l=a*this.direction.dot($l.crossVectors(wr,$l));if(l<0)return null;const c=a*this.direction.dot(ih.cross(wr));if(c<0||l+c>o)return null;const u=-a*wr.dot(rh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,SM)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),br.crossVectors(n,Yn),br.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),br.crossVectors(n,Yn)),br.normalize(),Zl.crossVectors(Yn,br),i[0]=br.x,i[4]=Zl.x,i[8]=Yn.x,i[1]=br.y,i[5]=Zl.y,i[9]=Yn.y,i[2]=br.z,i[6]=Zl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],v=n[7],S=n[11],R=n[15],b=i[0],w=i[4],I=i[8],y=i[12],x=i[1],O=i[5],U=i[9],D=i[13],F=i[2],V=i[6],j=i[10],$=i[14],z=i[3],X=i[7],L=i[11],re=i[15];return s[0]=o*b+a*x+l*F+c*z,s[4]=o*w+a*O+l*V+c*X,s[8]=o*I+a*U+l*j+c*L,s[12]=o*y+a*D+l*$+c*re,s[1]=u*b+h*x+f*F+d*z,s[5]=u*w+h*O+f*V+d*X,s[9]=u*I+h*U+f*j+d*L,s[13]=u*y+h*D+f*$+d*re,s[2]=_*b+g*x+p*F+m*z,s[6]=_*w+g*O+p*V+m*X,s[10]=_*I+g*U+p*j+m*L,s[14]=_*y+g*D+p*$+m*re,s[3]=M*b+v*x+S*F+R*z,s[7]=M*w+v*O+S*V+R*X,s[11]=M*I+v*U+S*j+R*L,s[15]=M*y+v*D+S*$+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,S=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,b=t*M+n*v+i*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=M*w,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*w,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*w,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=v*w,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*w,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*w,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=S*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=R*w,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,v=l*u,S=l*h,R=n.x,b=n.y,w=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-v)*R,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(f+m))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(_+v)*w,i[9]=(p-M)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=oo.set(i[0],i[1],i[2]).length();const o=oo.set(i[4],i[5],i[6]).length(),a=oo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const c=1/s,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=dr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===dr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nu)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=dr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===dr)_=(o+s)*h,g=-2*h;else if(a===nu)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oo=new B,Mi=new Ke,yM=new B(0,0,0),SM=new B(1,1,1),br=new B,Zl=new B,Yn=new B,im=new Ke,rm=new ss;class $i{constructor(e=0,t=0,n=0,i=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const sm=new B,ao=new ss,tr=new Ke,Jl=new B,xa=new B,TM=new B,EM=new ss,om=new B(1,0,0),am=new B(0,1,0),lm=new B(0,0,1),cm={type:"added"},wM={type:"removed"},lo={type:"childadded",child:null},sh={type:"childremoved",child:null};class Ht extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new B,t=new $i,n=new ss,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,t){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jl.copy(e):Jl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(xa,Jl,this.up):tr.lookAt(Jl,xa,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(tr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wM),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,EM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new B(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new B,nr=new B,oh=new B,ir=new B,co=new B,uo=new B,um=new B,ah=new B,lh=new B,ch=new B;class zi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),nr.subVectors(n,t),oh.subVectors(e,t);const o=Ti.dot(Ti),a=Ti.dot(nr),l=Ti.dot(oh),c=nr.dot(nr),u=nr.dot(oh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),nr.subVectors(e,t),Ti.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ti.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;co.subVectors(i,n),uo.subVectors(s,n),ah.subVectors(e,n);const l=co.dot(ah),c=uo.dot(ah);if(l<=0&&c<=0)return t.copy(n);lh.subVectors(e,i);const u=co.dot(lh),h=uo.dot(lh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(co,o);ch.subVectors(e,s);const d=co.dot(ch),_=uo.dot(ch);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(uo,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return um.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(um,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function uh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=id(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=uh(o,s,e+1/3),this.g=uh(o,s,e),this.b=uh(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=D0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return St.fromWorkingColorSpace(xn.copy(this),e),Math.round(dn(xn.r*255,0,255))*65536+Math.round(dn(xn.g*255,0,255))*256+Math.round(dn(xn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=hn){St.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Ql);const n=el(Ar.h,Ql.h,t),i=el(Ar.s,Ql.s,t),s=el(Ar.l,Ql.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ze;ze.NAMES=D0;let bM=0;class Pi extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=ff,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hf&&(n.blendSrc=this.blendSrc),this.blendDst!==ff&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$p&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pr extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=AM();function AM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function RM(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=dn(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function CM(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const CC={toHalfFloat:RM,fromHalfFloat:CM},Kt=new B,ec=new be;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return P0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gf&&(e.usage=this.usage),e}}class U0 extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class N0 extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Li extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let PM=0;const ui=new Ke,hh=new Ht,ho=new B,jn=new Ii,ya=new Ii,ln=new B;class qn extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?N0:U0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(jn.min,ya.min),jn.expandByPoint(ln),ln.addVectors(jn.max,ya.max),jn.expandByPoint(ln)):(jn.expandByPoint(ya.min),jn.expandByPoint(ya.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),ln.add(ho)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const c=new B,u=new B,h=new B,f=new be,d=new be,_=new be,g=new B,p=new B;function m(I,y,x){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(O),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(O),a[I].add(g),a[y].add(g),a[x].add(g),l[I].add(p),l[y].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,y=M.length;I<y;++I){const x=M[I],O=x.start,U=x.count;for(let D=O,F=O+U;D<F;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new B,S=new B,R=new B,b=new B;function w(I){R.fromBufferAttribute(i,I),b.copy(R);const y=a[I];v.copy(y),v.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(b,y);const O=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,O)}for(let I=0,y=M.length;I<y;++I){const x=M[I],O=x.start,U=x.count;for(let D=O,F=O+U;D<F;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new Ke,hs=new Rl,tc=new Zi,fm=new B,fo=new B,po=new B,mo=new B,fh=new B,nc=new B,ic=new be,rc=new be,sc=new be,dm=new B,pm=new B,mm=new B,oc=new B,ac=new B;class en extends Ht{constructor(e=new qn,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fh.fromBufferAttribute(h,e),o?nc.addScaledVector(fh,u):nc.addScaledVector(fh.sub(t),u))}t.add(nc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(tc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(tc,fm)===null||hs.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),hs.copy(e.ray).applyMatrix4(hm),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=v;S<R;S+=3){const b=a.getX(S),w=a.getX(S+1),I=a.getX(S+2);i=lc(this,m,e,n,c,u,h,b,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=lc(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=v;S<R;S+=3){const b=S,w=S+1,I=S+2;i=lc(this,m,e,n,c,u,h,b,w,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=p,v=p+1,S=p+2;i=lc(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function LM(r,e,t,n,i,s,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ki,a),l===null)return null;ac.copy(a),ac.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ac);return c<t.near||c>t.far?null:{distance:c,point:ac.clone(),object:r}}function lc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,fo),r.getVertexPosition(l,po),r.getVertexPosition(c,mo);const u=LM(r,e,t,n,fo,po,mo,oc);if(u){i&&(ic.fromBufferAttribute(i,a),rc.fromBufferAttribute(i,l),sc.fromBufferAttribute(i,c),u.uv=zi.getInterpolation(oc,fo,po,mo,ic,rc,sc,new be)),s&&(ic.fromBufferAttribute(s,a),rc.fromBufferAttribute(s,l),sc.fromBufferAttribute(s,c),u.uv1=zi.getInterpolation(oc,fo,po,mo,ic,rc,sc,new be)),o&&(dm.fromBufferAttribute(o,a),pm.fromBufferAttribute(o,l),mm.fromBufferAttribute(o,c),u.normal=zi.getInterpolation(oc,fo,po,mo,dm,pm,mm,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};zi.getNormal(fo,po,mo,h.normal),u.face=h}return u}class Cl extends qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(h,2));function _(g,p,m,M,v,S,R,b,w,I,y){const x=S/w,O=R/I,U=S/2,D=R/2,F=b/2,V=w+1,j=I+1;let $=0,z=0;const X=new B;for(let L=0;L<j;L++){const re=L*O-D;for(let xe=0;xe<V;xe++){const We=xe*x-U;X[g]=We*M,X[p]=re*v,X[m]=F,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[m]=b>0?1:-1,u.push(X.x,X.y,X.z),h.push(xe/w),h.push(1-L/I),$+=1}}for(let L=0;L<I;L++)for(let re=0;re<w;re++){const xe=f+re+V*L,We=f+re+V*(L+1),Y=f+(re+1)+V*(L+1),te=f+(re+1)+V*L;l.push(xe,We,te),l.push(We,Y,te),z+=6}a.addGroup(d,z,y),d+=z,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=ea(r[t]);for(const i in n)e[i]=n[i]}return e}function IM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function O0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const ta={clone:ea,merge:Cn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class F0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new B,gm=new be,_m=new be;class Mn extends F0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,gm,_m),t.subVectors(_m,gm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,_o=1;class NM extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(go,_o,e,t);i.layers=this.layers,this.add(i);const s=new Mn(go,_o,e,t);s.layers=this.layers,this.add(s);const o=new Mn(go,_o,e,t);o.layers=this.layers,this.add(o);const a=new Mn(go,_o,e,t);a.layers=this.layers,this.add(a);const l=new Mn(go,_o,e,t);l.layers=this.layers,this.add(l);const c=new Mn(go,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class k0 extends tn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OM extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new k0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cl(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:gr});s.uniforms.tEquirect.value=t;const o=new en(i,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=zt),new NM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const dh=new B,FM=new B,kM=new Je;class xs{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dh.subVectors(n,t).cross(FM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kM.getNormalMatrix(e),i=this.coplanarPoint(dh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Zi,cc=new B;class sd{constructor(e=new xs,t=new xs,n=new xs,i=new xs,s=new xs,o=new xs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+o,f+u,p+_,S+M).normalize(),n[3].setComponents(l-o,f-u,p-_,S-M).normalize(),n[4].setComponents(l-a,f-h,p-g,S-v).normalize(),t===dr)n[5].setComponents(l+a,f+h,p+g,S+v).normalize();else if(t===nu)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cc.x=i.normal.x>0?e.max.x:e.min.x,cc.y=i.normal.y>0?e.max.y:e.min.y,cc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function B0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function BM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ns extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-M,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),R=M+1+c*(m+1),b=M+1+c*m;d.push(v,S,b),d.push(S,R,b)}this.setIndex(d),this.setAttribute("position",new Li(_,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
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
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,eT=`#ifdef USE_BUMPMAP
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vT=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,DT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,BT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$T=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#define LAMBERT
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
}`,iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rw=`#define MATCAP
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
}`,sw=`#define MATCAP
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
}`,ow=`#define NORMAL
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
}`,aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lw=`#define PHONG
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
}`,cw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,uw=`#define STANDARD
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
}`,hw=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,fw=`#define TOON
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
}`,dw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pw=`uniform float size;
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#include <common>
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
}`,_w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xw=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:VM,alphamap_pars_fragment:GM,alphatest_fragment:WM,alphatest_pars_fragment:XM,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:jM,batching_vertex:KM,begin_vertex:$M,beginnormal_vertex:ZM,bsdfs:JM,iridescence_fragment:QM,bumpmap_pars_fragment:eT,clipping_planes_fragment:tT,clipping_planes_pars_fragment:nT,clipping_planes_pars_vertex:iT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:oT,color_pars_vertex:aT,color_vertex:lT,common:cT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:hT,displacementmap_pars_vertex:fT,displacementmap_vertex:dT,emissivemap_fragment:pT,emissivemap_pars_fragment:mT,colorspace_fragment:gT,colorspace_pars_fragment:_T,envmap_fragment:vT,envmap_common_pars_fragment:xT,envmap_pars_fragment:yT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:DT,envmap_vertex:MT,fog_vertex:TT,fog_pars_vertex:ET,fog_fragment:wT,fog_pars_fragment:bT,gradientmap_pars_fragment:AT,lightmap_fragment:RT,lightmap_pars_fragment:CT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:LT,lights_pars_begin:IT,lights_toon_fragment:UT,lights_toon_pars_fragment:NT,lights_phong_fragment:OT,lights_phong_pars_fragment:FT,lights_physical_fragment:kT,lights_physical_pars_fragment:BT,lights_fragment_begin:zT,lights_fragment_maps:HT,lights_fragment_end:VT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:qT,map_fragment:YT,map_pars_fragment:jT,map_particle_fragment:KT,map_particle_pars_fragment:$T,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:JT,morphinstance_vertex:QT,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:aE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:dE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:xE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:TE,shadowmap_vertex:EE,shadowmask_pars_fragment:wE,skinbase_vertex:bE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:IE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:FE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:HE,backgroundCube_vert:VE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:XE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:jE,distanceRGBA_frag:KE,equirect_vert:$E,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:QE,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:rw,meshmatcap_frag:sw,meshnormal_vert:ow,meshnormal_frag:aw,meshphong_vert:lw,meshphong_frag:cw,meshphysical_vert:uw,meshphysical_frag:hw,meshtoon_vert:fw,meshtoon_frag:dw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:_w,sprite_vert:vw,sprite_frag:xw},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Fi={basic:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Cn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Cn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Cn([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Cn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Cn([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Cn([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Cn([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Cn([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Fi.physical={uniforms:Cn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const uc={r:0,b:0,g:0},ds=new $i,yw=new Ke;function Sw(r,e,t,n,i,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gu)?(u===void 0&&(u=new en(new Cl(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ea(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ds.copy(m.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(ds)),u.material.toneMapped=St.getTransfer(v.colorSpace)!==Rt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new en(new ns(2,2),new Yt({name:"BackgroundMaterial",uniforms:ea(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=St.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(uc,O0(r)),n.buffers.color.setClear(uc.r,uc.g,uc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Mw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,O,U,D,F){let V=!1;const j=h(D,U,O);s!==j&&(s=j,c(s.object)),V=d(x,D,U,F),V&&_(x,D,U,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(x,O,U,D),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,O,U){const D=U.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let V=F[O.id];V===void 0&&(V={},F[O.id]=V);let j=V[D];return j===void 0&&(j=f(l()),V[D]=j),j}function f(x){const O=[],U=[],D=[];for(let F=0;F<t;F++)O[F]=0,U[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,O,U,D){const F=s.attributes,V=O.attributes;let j=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){const L=F[z];let re=V[z];if(re===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),L===void 0||L.attribute!==re||re&&L.data!==re.data)return!0;j++}return s.attributesNum!==j||s.index!==D}function _(x,O,U,D){const F={},V=O.attributes;let j=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){let L=V[z];L===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const re={};re.attribute=L,L&&L.data&&(re.data=L.data),F[z]=re,j++}s.attributes=F,s.attributesNum=j,s.index=D}function g(){const x=s.newAttributes;for(let O=0,U=x.length;O<U;O++)x[O]=0}function p(x){m(x,0)}function m(x,O){const U=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;U[x]=1,D[x]===0&&(r.enableVertexAttribArray(x),D[x]=1),F[x]!==O&&(r.vertexAttribDivisor(x,O),F[x]=O)}function M(){const x=s.newAttributes,O=s.enabledAttributes;for(let U=0,D=O.length;U<D;U++)O[U]!==x[U]&&(r.disableVertexAttribArray(U),O[U]=0)}function v(x,O,U,D,F,V,j){j===!0?r.vertexAttribIPointer(x,O,U,F,V):r.vertexAttribPointer(x,O,U,D,F,V)}function S(x,O,U,D){g();const F=D.attributes,V=U.getAttributes(),j=O.defaultAttributeValues;for(const $ in V){const z=V[$];if(z.location>=0){let X=F[$];if(X===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const L=X.normalized,re=X.itemSize,xe=e.get(X);if(xe===void 0)continue;const We=xe.buffer,Y=xe.type,te=xe.bytesPerElement,ce=Y===r.INT||Y===r.UNSIGNED_INT||X.gpuType===v0;if(X.isInterleavedBufferAttribute){const se=X.data,Ce=se.stride,Ie=X.offset;if(se.isInstancedInterleavedBuffer){for(let qe=0;qe<z.locationSize;qe++)m(z.location+qe,se.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let qe=0;qe<z.locationSize;qe++)p(z.location+qe);r.bindBuffer(r.ARRAY_BUFFER,We);for(let qe=0;qe<z.locationSize;qe++)v(z.location+qe,re/z.locationSize,Y,L,Ce*te,(Ie+re/z.locationSize*qe)*te,ce)}else{if(X.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)m(z.location+se,X.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let se=0;se<z.locationSize;se++)p(z.location+se);r.bindBuffer(r.ARRAY_BUFFER,We);for(let se=0;se<z.locationSize;se++)v(z.location+se,re/z.locationSize,Y,L,re*te,re/z.locationSize*se*te,ce)}}else if(j!==void 0){const L=j[$];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(z.location,L);break;case 3:r.vertexAttrib3fv(z.location,L);break;case 4:r.vertexAttrib4fv(z.location,L);break;default:r.vertexAttrib1fv(z.location,L)}}}}M()}function R(){I();for(const x in n){const O=n[x];for(const U in O){const D=O[U];for(const F in D)u(D[F].object),delete D[F];delete O[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const O=n[x.id];for(const U in O){const D=O[U];for(const F in D)u(D[F].object),delete D[F];delete O[U]}delete n[x.id]}function w(x){for(const O in n){const U=n[O];if(U[x.id]===void 0)continue;const D=U[x.id];for(const F in D)u(D[F].object),delete D[F];delete U[x.id]}}function I(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Tw(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Ew(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:m,maxSamples:M}}function ww(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new xs,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,v=M*4;let S=m.clippingState||null;l.value=S,S=u(_,f,v,d);for(let R=0;R!==v;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==g;++v,S+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function bw(r){let e=new WeakMap;function t(o,a){return a===df?o.mapping=jo:a===pf&&(o.mapping=Ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===df||a===pf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pl extends F0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ao=4,vm=[.125,.215,.35,.446,.526,.582],Ts=20,ph=new Pl,xm=new ze;let mh=null,gh=0,_h=0,vh=!1;const ys=(1+Math.sqrt(5))/2,vo=1/ys,ym=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ys,vo),new B(0,ys,-vo),new B(vo,0,ys),new B(-vo,0,ys),new B(ys,vo,0),new B(-ys,vo,0)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:$r,format:_i,colorSpace:rs,depthBuffer:!1},i=Sm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Aw(s)),this._blurMaterial=Rw(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,ph)}_sceneToCubeUV(e,t,n,i){const a=new Mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xm),u.toneMapping=Kr,u.autoClear=!1;const d=new pr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new en(new Cl,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(xm),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;hc(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jo||e.mapping===Ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ph)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ym[(i-1)%ym.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ts;p>Ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ts}`);const m=[];let M=0;for(let w=0;w<Ts;++w){const I=w/g,y=Math.exp(-I*I/2);m.push(y),w===0?M+=y:w<p&&(M+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-Ao?i-v+Ao:0),b=4*(this._cubeSize-S);hc(t,R,b,3*S,2*S),l.setRenderTarget(t),l.render(h,ph)}}function Aw(r){const e=[],t=[],n=[];let i=r;const s=r-Ao+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ao?l=vm[o-r+Ao-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),v=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,I=b>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(y,g*_*b),v.set(f,p*_*b);const x=[b,b,b,b,b,b];S.set(x,m*_*b)}const R=new qn;R.setAttribute("position",new Ot(M,g)),R.setAttribute("uv",new Ot(v,p)),R.setAttribute("faceIndex",new Ot(S,m)),e.push(R),i>Ao&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sm(r,e,t){const n=new xi(r,e,t);return n.texture.mapping=gu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rw(r,e,t){const n=new Float32Array(Ts),i=new B(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:od(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Mm(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Tm(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function od(){return`

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
	`}function Cw(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===df||l===pf,u=l===jo||l===Ko;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _f(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new _f(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lw(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,S=M.length;v<S;v+=3){const R=M[v+0],b=M[v+1],w=M[v+2];f.push(R,b,b,w,w,R)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const R=v+0,b=v+1,w=v+2;f.push(R,b,b,w,w,R)}}else return;const p=new(C0(f)?N0:U0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Iw(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(h[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uw(r,e,t){const n=new WeakMap,i=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*R*4*h),w=new I0(b,S,R,h);w.type=Wi,w.needsUpdate=!0;const I=v*4;for(let x=0;x<h;x++){const O=p[x],U=m[x],D=M[x],F=S*R*4*x;for(let V=0;V<O.count;V++){const j=V*I;d===!0&&(i.fromBufferAttribute(O,V),b[F+j+0]=i.x,b[F+j+1]=i.y,b[F+j+2]=i.z,b[F+j+3]=0),_===!0&&(i.fromBufferAttribute(U,V),b[F+j+4]=i.x,b[F+j+5]=i.y,b[F+j+6]=i.z,b[F+j+7]=0),g===!0&&(i.fromBufferAttribute(D,V),b[F+j+8]=i.x,b[F+j+9]=i.y,b[F+j+10]=i.z,b[F+j+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new be(S,R)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Nw(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class z0 extends tn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Oo,u!==Oo&&u!==yl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oo&&(n=Zo),n===void 0&&u===yl&&(n=Al),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const H0=new tn,V0=new z0(1,1);V0.compareFunction=R0;const G0=new I0,W0=new vM,X0=new k0,Em=[],wm=[],bm=new Float32Array(16),Am=new Float32Array(9),Rm=new Float32Array(4);function aa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Em[i];if(s===void 0&&(s=new Float32Array(i),Em[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vu(r,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ow(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function kw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function Bw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function zw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Rm.set(n),r.uniformMatrix2fv(this.addr,!1,Rm),an(t,n)}}function Hw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Am.set(n),r.uniformMatrix3fv(this.addr,!1,Am),an(t,n)}}function Vw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;bm.set(n),r.uniformMatrix4fv(this.addr,!1,bm),an(t,n)}}function Gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function Xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function Yw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function Kw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function $w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function Zw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?V0:H0;t.setTexture2D(e||s,i)}function Jw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||W0,i)}function Qw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||X0,i)}function eb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||G0,i)}function tb(r){switch(r){case 5126:return Ow;case 35664:return Fw;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return qw;case 5125:return Yw;case 36294:return jw;case 36295:return Kw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(r,e){r.uniform1fv(this.addr,e)}function ib(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function rb(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function sb(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function ob(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ab(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lb(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cb(r,e){r.uniform1iv(this.addr,e)}function ub(r,e){r.uniform2iv(this.addr,e)}function hb(r,e){r.uniform3iv(this.addr,e)}function fb(r,e){r.uniform4iv(this.addr,e)}function db(r,e){r.uniform1uiv(this.addr,e)}function pb(r,e){r.uniform2uiv(this.addr,e)}function mb(r,e){r.uniform3uiv(this.addr,e)}function gb(r,e){r.uniform4uiv(this.addr,e)}function _b(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||H0,s[o])}function vb(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||W0,s[o])}function xb(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||X0,s[o])}function yb(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||G0,s[o])}function Sb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return yb}}class Mb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tb(t.type)}}class Tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Cm(r,e){r.seq.push(e),r.map[e.id]=e}function wb(r,e,t){const n=r.name,i=n.length;for(xh.lastIndex=0;;){const s=xh.exec(n),o=xh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cm(t,c===void 0?new Mb(a,r,e):new Tb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Eb(a),Cm(t,h)),t=h}}}class Lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);wb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const bb=37297;let Ab=0;function Rb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Cb(r){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(r);let n;switch(e===t?n="":e===tu&&t===eu?n="LinearDisplayP3ToLinearSRGB":e===eu&&t===tu&&(n="LinearSRGBToLinearDisplayP3"),r){case rs:case _u:return[n,"LinearTransferOETF"];case hn:case nd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Lm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rb(r.getShaderSource(e),o)}else return i}function Pb(r,e){const t=Cb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lb(r,e){let t;switch(e){case u0:t="Linear";break;case h0:t="Reinhard";break;case f0:t="OptimizedCineon";break;case td:t="ACESFilmic";break;case d0:t="AgX";break;case p0:t="Neutral";break;case AS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ib(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function Db(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ub(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ua(r){return r!==""}function Im(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(r){return r.replace(Nb,Fb)}const Ob=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fb(r,e){let t=Ze[e];if(t===void 0){const n=Ob.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vf(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(r){return r.replace(kb,Bb)}function Bb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function zb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case jo:case Ko:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ko&&(e="ENVMAP_MODE_REFRACTION"),e}function Gb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case c0:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zb(t),c=Hb(t),u=Vb(t),h=Gb(t),f=Wb(t),d=Ib(t),_=Db(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),m.length>0&&(m+=`
`)):(p=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),m=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Kr?Lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Pb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=vf(o),o=Im(o,t),o=Dm(o,t),a=vf(a),a=Im(a,t),a=Dm(a,t),o=Um(o),a=Um(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,S=M+m+a,R=Pm(i,i.VERTEX_SHADER,v),b=Pm(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(O){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(b).trim();let V=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,b);else{const $=Lm(i,R,"vertex"),z=Lm(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+U+`
`+$+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||F==="")&&(j=!1);j&&(O.diagnostics={runnable:V,programLog:U,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(R),i.deleteShader(b),I=new Lc(i,g),y=Ub(i,g)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,bb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=b,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jb(e),t.set(e,n)),n}}class jb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function Kb(r,e,t,n,i,s,o){const a=new rd,l=new Yb,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,O,U,D){const F=U.fog,V=D.geometry,j=y.isMeshStandardMaterial?U.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),z=$&&$.mapping===gu?$.image.height:null,X=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=L!==void 0?L.length:0;let xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let We,Y,te,ce;if(X){const wt=Fi[X];We=wt.vertexShader,Y=wt.fragmentShader}else We=y.vertexShader,Y=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const se=r.getRenderTarget(),Ce=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,qe=!!y.map,H=!!y.matcap,ke=!!$,le=!!y.aoMap,Ye=!!y.lightMap,Ae=!!y.bumpMap,je=!!y.normalMap,T=!!y.displacementMap,E=!!y.emissiveMap,K=!!y.metalnessMap,J=!!y.roughnessMap,Z=y.anisotropy>0,ee=y.clearcoat>0,Pe=y.iridescence>0,ie=y.sheen>0,pe=y.transmission>0,De=Z&&!!y.anisotropyMap,ne=ee&&!!y.clearcoatMap,fe=ee&&!!y.clearcoatNormalMap,Ue=ee&&!!y.clearcoatRoughnessMap,ge=Pe&&!!y.iridescenceMap,Se=Pe&&!!y.iridescenceThicknessMap,Ne=ie&&!!y.sheenColorMap,rt=ie&&!!y.sheenRoughnessMap,et=!!y.specularMap,lt=!!y.specularColorMap,ft=!!y.specularIntensityMap,ye=pe&&!!y.transmissionMap,N=pe&&!!y.thicknessMap,Q=!!y.gradientMap,ae=!!y.alphaMap,_e=y.alphaTest>0,Me=!!y.alphaHash,st=!!y.extensions;let ht=Kr;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=r.toneMapping);const pt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:Y,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ie,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rs,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:H,envMap:ke,envMapMode:ke&&$.mapping,envMapCubeUVHeight:z,aoMap:le,lightMap:Ye,bumpMap:Ae,normalMap:je,displacementMap:f&&T,emissiveMap:E,normalMapObjectSpace:je&&y.normalMapType===VS,normalMapTangentSpace:je&&y.normalMapType===A0,metalnessMap:K,roughnessMap:J,anisotropy:Z,anisotropyMap:De,clearcoat:ee,clearcoatMap:ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ue,iridescence:Pe,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:ie,sheenColorMap:Ne,sheenRoughnessMap:rt,specularMap:et,specularColorMap:lt,specularIntensityMap:ft,transmission:pe,transmissionMap:ye,thicknessMap:N,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:_e,alphaHash:Me,combine:y.combine,mapUv:qe&&g(y.map.channel),aoMapUv:le&&g(y.aoMap.channel),lightMapUv:Ye&&g(y.lightMap.channel),bumpMapUv:Ae&&g(y.bumpMap.channel),normalMapUv:je&&g(y.normalMap.channel),displacementMapUv:T&&g(y.displacementMap.channel),emissiveMapUv:E&&g(y.emissiveMap.channel),metalnessMapUv:K&&g(y.metalnessMap.channel),roughnessMapUv:J&&g(y.roughnessMap.channel),anisotropyMapUv:De&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(y.sheenRoughnessMap.channel),specularMapUv:et&&g(y.specularMap.channel),specularColorMapUv:lt&&g(y.specularColorMap.channel),specularIntensityMapUv:ft&&g(y.specularIntensityMap.channel),transmissionMapUv:ye&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:ae&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(je||Z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(qe||ae),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===Wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)x.push(O),x.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(M(x,y),v(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const x=_[y.type];let O;if(x){const U=Fi[x];O=ta.clone(U.uniforms)}else O=y.uniforms;return O}function R(y,x){let O;for(let U=0,D=u.length;U<D;U++){const F=u[U];if(F.cacheKey===x){O=F,++O.usedTimes;break}}return O===void 0&&(O=new Xb(r,x,y,s),u.push(O)),O}function b(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:I}}function $b(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Om(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||Zb),n.length>1&&n.sort(f||Om),i.length>1&&i.sort(f||Om)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Jb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Fm,r.set(n,[o])):i>=s.length?(o=new Fm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ze};break;case"SpotLight":t={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function eA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let tA=0;function nA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iA(r){const e=new Qb,t=eA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Ke,o=new Ke;function a(c,u){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let _=0,g=0,p=0,m=0,M=0,v=0,S=0,R=0,b=0,w=0,I=0;c.sort(nA);const y=u===!0?Math.PI:1;for(let O=0,U=c.length;O<U;O++){const D=c[O],F=D.color,V=D.intensity,j=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*V*y,f+=F.g*V*y,d+=F.b*V*y;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],V);I++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const X=D.shadow,L=t.get(D);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,n.directionalShadow[_]=L,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=D.shadow.matrix,v++}n.directional[_]=z,_++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(F).multiplyScalar(V*y),z.distance=j,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[p]=z;const X=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[p]=X.matrix,D.castShadow){const L=t.get(D);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,n.spotShadow[p]=L,n.spotShadowMap[p]=$,R++}p++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(F).multiplyScalar(V),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),z.distance=D.distance,z.decay=D.decay,D.castShadow){const X=D.shadow,L=t.get(D);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(V*y),z.groundColor.copy(D.groundColor).multiplyScalar(V*y),n.hemi[M]=z,M++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==_||x.pointLength!==g||x.spotLength!==p||x.rectAreaLength!==m||x.hemiLength!==M||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==R||x.numSpotMaps!==b||x.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=R+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,x.directionalLength=_,x.pointLength=g,x.spotLength=p,x.rectAreaLength=m,x.hemiLength=M,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=R,x.numSpotMaps=b,x.numLightProbes=I,n.version=tA++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function km(r){const e=new iA(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rA(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new km(r),e.set(i,[a])):s>=o.length?(a=new km(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class sA extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oA extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cA(r,e,t){let n=new sd;const i=new be,s=new be,o=new Et,a=new sA({depthPacking:HS}),l=new oA,c={},u=t.maxTextureSize,h={[Ki]:Wn,[Wn]:Ki,[wi]:wi},f=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:aA,fragmentShader:lA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let m=this.type;this.render=function(b,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),U=r.state;U.setBlending(gr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=m!==or&&this.type===or,F=m===or&&this.type!==or;for(let V=0,j=b.length;V<j;V++){const $=b[V],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||D===!0||F===!0){const re=this.type!==or?{minFilter:Fn,magFilter:Fn}:{};z.map!==null&&z.map.dispose(),z.map=new xi(i.x,i.y,re),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const L=z.getViewportCount();for(let re=0;re<L;re++){const xe=z.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),z.updateMatrices($,re),n=z.getFrustum(),S(w,I,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===or&&M(z,I),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,x,O)};function M(b,w){const I=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xi(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,I,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,I,d,g,null)}function v(b,w,I,y){let x=null;const O=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)x=O;else if(x=I.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=x.uuid,D=w.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let V=F[D];V===void 0&&(V=x.clone(),F[D]=V,w.addEventListener("dispose",R)),x=V}if(x.visible=w.visible,x.wireframe=w.wireframe,y===or?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=I}return x}function S(b,w,I,y,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===or)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const D=e.update(b),F=b.material;if(Array.isArray(F)){const V=D.groups;for(let j=0,$=V.length;j<$;j++){const z=V[j],X=F[z.materialIndex];if(X&&X.visible){const L=v(b,X,y,x);b.onBeforeShadow(r,b,w,I,D,L,z),r.renderBufferDirect(I,null,D,L,b,z),b.onAfterShadow(r,b,w,I,D,L,z)}}}else if(F.visible){const V=v(b,F,y,x);b.onBeforeShadow(r,b,w,I,D,V,null),r.renderBufferDirect(I,null,D,V,b,null),b.onAfterShadow(r,b,w,I,D,V,null)}}const U=b.children;for(let D=0,F=U.length;D<F;D++)S(U[D],w,I,y,x)}function R(b){b.target.removeEventListener("dispose",R);for(const I in c){const y=c[I],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function uA(r){function e(){let N=!1;const Q=new Et;let ae=null;const _e=new Et(0,0,0,0);return{setMask:function(Me){ae!==Me&&!N&&(r.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){N=Me},setClear:function(Me,st,ht,pt,wt){wt===!0&&(Me*=pt,st*=pt,ht*=pt),Q.set(Me,st,ht,pt),_e.equals(Q)===!1&&(r.clearColor(Me,st,ht,pt),_e.copy(Q))},reset:function(){N=!1,ae=null,_e.set(-1,0,0,0)}}}function t(){let N=!1,Q=null,ae=null,_e=null;return{setTest:function(Me){Me?ce(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!N&&(r.depthMask(Me),Q=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case vS:r.depthFunc(r.NEVER);break;case xS:r.depthFunc(r.ALWAYS);break;case yS:r.depthFunc(r.LESS);break;case Zc:r.depthFunc(r.LEQUAL);break;case SS:r.depthFunc(r.EQUAL);break;case MS:r.depthFunc(r.GEQUAL);break;case TS:r.depthFunc(r.GREATER);break;case ES:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Me}},setLocked:function(Me){N=Me},setClear:function(Me){_e!==Me&&(r.clearDepth(Me),_e=Me)},reset:function(){N=!1,Q=null,ae=null,_e=null}}}function n(){let N=!1,Q=null,ae=null,_e=null,Me=null,st=null,ht=null,pt=null,wt=null;return{setTest:function(dt){N||(dt?ce(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(dt){Q!==dt&&!N&&(r.stencilMask(dt),Q=dt)},setFunc:function(dt,Fe,we){(ae!==dt||_e!==Fe||Me!==we)&&(r.stencilFunc(dt,Fe,we),ae=dt,_e=Fe,Me=we)},setOp:function(dt,Fe,we){(st!==dt||ht!==Fe||pt!==we)&&(r.stencilOp(dt,Fe,we),st=dt,ht=Fe,pt=we)},setLocked:function(dt){N=dt},setClear:function(dt){wt!==dt&&(r.clearStencil(dt),wt=dt)},reset:function(){N=!1,Q=null,ae=null,_e=null,Me=null,st=null,ht=null,pt=null,wt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,R=null,b=new ze(0,0,0),w=0,I=!1,y=null,x=null,O=null,U=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),V=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=j>=2);let z=null,X={};const L=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),xe=new Et().fromArray(L),We=new Et().fromArray(re);function Y(N,Q,ae,_e){const Me=new Uint8Array(4),st=r.createTexture();r.bindTexture(N,st),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<ae;ht++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Q+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return st}const te={};te[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),s.setFunc(Zc),Ae(!1),je(vp),ce(r.CULL_FACE),le(gr);function ce(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function se(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Ce(N,Q){return u[N]!==Q?(r.bindFramebuffer(N,Q),u[N]=Q,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ie(N,Q){let ae=f,_e=!1;if(N){ae=h.get(Q),ae===void 0&&(ae=[],h.set(Q,ae));const Me=N.textures;if(ae.length!==Me.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ht=Me.length;st<ht;st++)ae[st]=r.COLOR_ATTACHMENT0+st;ae.length=Me.length,_e=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,_e=!0);_e&&r.drawBuffers(ae)}function qe(N){return d!==N?(r.useProgram(N),d=N,!0):!1}const H={[Ms]:r.FUNC_ADD,[tS]:r.FUNC_SUBTRACT,[nS]:r.FUNC_REVERSE_SUBTRACT};H[iS]=r.MIN,H[rS]=r.MAX;const ke={[sS]:r.ZERO,[oS]:r.ONE,[aS]:r.SRC_COLOR,[hf]:r.SRC_ALPHA,[dS]:r.SRC_ALPHA_SATURATE,[hS]:r.DST_COLOR,[cS]:r.DST_ALPHA,[lS]:r.ONE_MINUS_SRC_COLOR,[ff]:r.ONE_MINUS_SRC_ALPHA,[fS]:r.ONE_MINUS_DST_COLOR,[uS]:r.ONE_MINUS_DST_ALPHA,[pS]:r.CONSTANT_COLOR,[mS]:r.ONE_MINUS_CONSTANT_COLOR,[gS]:r.CONSTANT_ALPHA,[_S]:r.ONE_MINUS_CONSTANT_ALPHA};function le(N,Q,ae,_e,Me,st,ht,pt,wt,dt){if(N===gr){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(ce(r.BLEND),_=!0),N!==eS){if(N!==g||dt!==I){if((p!==Ms||v!==Ms)&&(r.blendEquation(r.FUNC_ADD),p=Ms,v=Ms),dt)switch(N){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.ONE,r.ONE);break;case xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,M=null,S=null,R=null,b.set(0,0,0),w=0,g=N,I=dt}return}Me=Me||Q,st=st||ae,ht=ht||_e,(Q!==p||Me!==v)&&(r.blendEquationSeparate(H[Q],H[Me]),p=Q,v=Me),(ae!==m||_e!==M||st!==S||ht!==R)&&(r.blendFuncSeparate(ke[ae],ke[_e],ke[st],ke[ht]),m=ae,M=_e,S=st,R=ht),(pt.equals(b)===!1||wt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,wt),b.copy(pt),w=wt),g=N,I=!1}function Ye(N,Q){N.side===wi?se(r.CULL_FACE):ce(r.CULL_FACE);let ae=N.side===Wn;Q&&(ae=!ae),Ae(ae),N.blending===Hs&&N.transparent===!1?le(gr):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),E(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){y!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),y=N)}function je(N){N!==Zy?(ce(r.CULL_FACE),N!==x&&(N===vp?r.cullFace(r.BACK):N===Jy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),x=N}function T(N){N!==O&&(V&&r.lineWidth(N),O=N)}function E(N,Q,ae){N?(ce(r.POLYGON_OFFSET_FILL),(U!==Q||D!==ae)&&(r.polygonOffset(Q,ae),U=Q,D=ae)):se(r.POLYGON_OFFSET_FILL)}function K(N){N?ce(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function J(N){N===void 0&&(N=r.TEXTURE0+F-1),z!==N&&(r.activeTexture(N),z=N)}function Z(N,Q,ae){ae===void 0&&(z===null?ae=r.TEXTURE0+F-1:ae=z);let _e=X[ae];_e===void 0&&(_e={type:void 0,texture:void 0},X[ae]=_e),(_e.type!==N||_e.texture!==Q)&&(z!==ae&&(r.activeTexture(ae),z=ae),r.bindTexture(N,Q||te[N]),_e.type=N,_e.texture=Q)}function ee(){const N=X[z];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(N){xe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function et(N){We.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),We.copy(N))}function lt(N,Q){let ae=l.get(Q);ae===void 0&&(ae=new WeakMap,l.set(Q,ae));let _e=ae.get(N);_e===void 0&&(_e=r.getUniformBlockIndex(Q,N.name),ae.set(N,_e))}function ft(N,Q){const _e=l.get(Q).get(N);a.get(Q)!==_e&&(r.uniformBlockBinding(Q,_e,N.__bindingPointIndex),a.set(Q,_e))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,X={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,R=null,b=new ze(0,0,0),w=0,I=!1,y=null,x=null,O=null,U=null,D=null,xe.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ce,disable:se,bindFramebuffer:Ce,drawBuffers:Ie,useProgram:qe,setBlending:le,setMaterial:Ye,setFlipSided:Ae,setCullFace:je,setLineWidth:T,setPolygonOffset:E,setScissorTest:K,activeTexture:J,bindTexture:Z,unbindTexture:ee,compressedTexImage2D:Pe,compressedTexImage3D:ie,texImage2D:Se,texImage3D:Ne,updateUBOMapping:lt,uniformBlockBinding:ft,texStorage2D:Ue,texStorage3D:ge,texSubImage2D:pe,texSubImage3D:De,compressedTexSubImage2D:ne,compressedTexSubImage3D:fe,scissor:rt,viewport:et,reset:ye}}function hA(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return d?new OffscreenCanvas(T,E):Ml("canvas")}function g(T,E,K){let J=1;const Z=je(T);if((Z.width>K||Z.height>K)&&(J=K/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ee=Math.floor(J*Z.width),Pe=Math.floor(J*Z.height);h===void 0&&(h=_(ee,Pe));const ie=E?_(ee,Pe):h;return ie.width=ee,ie.height=Pe,ie.getContext("2d").drawImage(T,0,0,ee,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+Pe+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Fn&&T.minFilter!==zt}function m(T){r.generateMipmap(T)}function M(T,E,K,J,Z=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=E;if(E===r.RED&&(K===r.FLOAT&&(ee=r.R32F),K===r.HALF_FLOAT&&(ee=r.R16F),K===r.UNSIGNED_BYTE&&(ee=r.R8)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.R8UI),K===r.UNSIGNED_SHORT&&(ee=r.R16UI),K===r.UNSIGNED_INT&&(ee=r.R32UI),K===r.BYTE&&(ee=r.R8I),K===r.SHORT&&(ee=r.R16I),K===r.INT&&(ee=r.R32I)),E===r.RG&&(K===r.FLOAT&&(ee=r.RG32F),K===r.HALF_FLOAT&&(ee=r.RG16F),K===r.UNSIGNED_BYTE&&(ee=r.RG8)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.RG8UI),K===r.UNSIGNED_SHORT&&(ee=r.RG16UI),K===r.UNSIGNED_INT&&(ee=r.RG32UI),K===r.BYTE&&(ee=r.RG8I),K===r.SHORT&&(ee=r.RG16I),K===r.INT&&(ee=r.RG32I)),E===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),E===r.RGBA){const Pe=Z?Qc:St.getTransfer(J);K===r.FLOAT&&(ee=r.RGBA32F),K===r.HALF_FLOAT&&(ee=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ee=Pe===Rt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(T,E){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fn&&T.minFilter!==zt?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function S(T){const E=T.target;E.removeEventListener("dispose",S),b(E),E.isVideoTexture&&u.delete(E)}function R(T){const E=T.target;E.removeEventListener("dispose",R),I(E)}function b(T){const E=n.get(T);if(E.__webglInit===void 0)return;const K=T.source,J=f.get(K);if(J){const Z=J[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(J).length===0&&f.delete(K)}n.remove(T)}function w(T){const E=n.get(T);r.deleteTexture(E.__webglTexture);const K=T.source,J=f.get(K);delete J[E.__cacheKey],o.memory.textures--}function I(T){const E=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Z=0;Z<E.__webglFramebuffer[J].length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[J][Z]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=T.textures;for(let J=0,Z=K.length;J<Z;J++){const ee=n.get(K[J]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(K[J])}n.remove(T)}let y=0;function x(){y=0}function O(){const T=y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),y+=1,T}function U(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function D(T,E){const K=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.version>0&&K.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(K,T,E);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function F(T,E){const K=n.get(T);if(T.version>0&&K.__version!==T.version){xe(K,T,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function V(T,E){const K=n.get(T);if(T.version>0&&K.__version!==T.version){xe(K,T,E);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function j(T,E){const K=n.get(T);if(T.version>0&&K.__version!==T.version){We(K,T,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const $={[$o]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},z={[Fn]:r.NEAREST,[g0]:r.NEAREST_MIPMAP_NEAREST,[Da]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Cc]:r.LINEAR_MIPMAP_NEAREST,[Ri]:r.LINEAR_MIPMAP_LINEAR},X={[GS]:r.NEVER,[KS]:r.ALWAYS,[WS]:r.LESS,[R0]:r.LEQUAL,[XS]:r.EQUAL,[jS]:r.GEQUAL,[qS]:r.GREATER,[YS]:r.NOTEQUAL};function L(T,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zt||E.magFilter===Cc||E.magFilter===Da||E.magFilter===Ri||E.minFilter===zt||E.minFilter===Cc||E.minFilter===Da||E.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,$[E.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,z[E.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Da&&E.minFilter!==Ri||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function re(T,E){let K=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",S));const J=E.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const ee=U(E);if(ee!==T.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Z[ee].usedTimes++;const Pe=Z[T.__cacheKey];Pe!==void 0&&(Z[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(E)),T.__cacheKey=ee,T.__webglTexture=Z[ee].texture}return K}function xe(T,E,K){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);const Z=re(T,E),ee=E.source;t.bindTexture(J,T.__webglTexture,r.TEXTURE0+K);const Pe=n.get(ee);if(ee.version!==Pe.__version||Z===!0){t.activeTexture(r.TEXTURE0+K);const ie=St.getPrimaries(St.workingColorSpace),pe=E.colorSpace===Nr?null:St.getPrimaries(E.colorSpace),De=E.colorSpace===Nr||ie===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ne=g(E.image,!1,i.maxTextureSize);ne=Ae(E,ne);const fe=s.convert(E.format,E.colorSpace),Ue=s.convert(E.type);let ge=M(E.internalFormat,fe,Ue,E.colorSpace,E.isVideoTexture);L(J,E);let Se;const Ne=E.mipmaps,rt=E.isVideoTexture!==!0&&ge!==w0,et=Pe.__version===void 0||Z===!0,lt=ee.dataReady,ft=v(E,ne);if(E.isDepthTexture)ge=r.DEPTH_COMPONENT16,E.type===Wi?ge=r.DEPTH_COMPONENT32F:E.type===Zo?ge=r.DEPTH_COMPONENT24:E.type===Al&&(ge=r.DEPTH24_STENCIL8),et&&(rt?t.texStorage2D(r.TEXTURE_2D,1,ge,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ue,null));else if(E.isDataTexture)if(Ne.length>0){rt&&et&&t.texStorage2D(r.TEXTURE_2D,ft,ge,Ne[0].width,Ne[0].height);for(let ye=0,N=Ne.length;ye<N;ye++)Se=Ne[ye],rt?lt&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Ue,Se.data):t.texImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,fe,Ue,Se.data);E.generateMipmaps=!1}else rt?(et&&t.texStorage2D(r.TEXTURE_2D,ft,ge,ne.width,ne.height),lt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,fe,Ue,ne.data)):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ue,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,ge,Ne[0].width,Ne[0].height,ne.depth);for(let ye=0,N=Ne.length;ye<N;ye++)Se=Ne[ye],E.format!==_i?fe!==null?rt?lt&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,fe,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?lt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,fe,Ue,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,fe,Ue,Se.data)}else{rt&&et&&t.texStorage2D(r.TEXTURE_2D,ft,ge,Ne[0].width,Ne[0].height);for(let ye=0,N=Ne.length;ye<N;ye++)Se=Ne[ye],E.format!==_i?fe!==null?rt?lt&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?lt&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Ue,Se.data):t.texImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,fe,Ue,Se.data)}else if(E.isDataArrayTexture)rt?(et&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,ge,ne.width,ne.height,ne.depth),lt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ue,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,fe,Ue,ne.data);else if(E.isData3DTexture)rt?(et&&t.texStorage3D(r.TEXTURE_3D,ft,ge,ne.width,ne.height,ne.depth),lt&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ue,ne.data)):t.texImage3D(r.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,fe,Ue,ne.data);else if(E.isFramebufferTexture){if(et)if(rt)t.texStorage2D(r.TEXTURE_2D,ft,ge,ne.width,ne.height);else{let ye=ne.width,N=ne.height;for(let Q=0;Q<ft;Q++)t.texImage2D(r.TEXTURE_2D,Q,ge,ye,N,0,fe,Ue,null),ye>>=1,N>>=1}}else if(Ne.length>0){if(rt&&et){const ye=je(Ne[0]);t.texStorage2D(r.TEXTURE_2D,ft,ge,ye.width,ye.height)}for(let ye=0,N=Ne.length;ye<N;ye++)Se=Ne[ye],rt?lt&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,fe,Ue,Se):t.texImage2D(r.TEXTURE_2D,ye,ge,fe,Ue,Se);E.generateMipmaps=!1}else if(rt){if(et){const ye=je(ne);t.texStorage2D(r.TEXTURE_2D,ft,ge,ye.width,ye.height)}lt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ue,ne)}else t.texImage2D(r.TEXTURE_2D,0,ge,fe,Ue,ne);p(E)&&m(J),Pe.__version=ee.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function We(T,E,K){if(E.image.length!==6)return;const J=re(T,E),Z=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+K);const ee=n.get(Z);if(Z.version!==ee.__version||J===!0){t.activeTexture(r.TEXTURE0+K);const Pe=St.getPrimaries(St.workingColorSpace),ie=E.colorSpace===Nr?null:St.getPrimaries(E.colorSpace),pe=E.colorSpace===Nr||Pe===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let N=0;N<6;N++)!De&&!ne?fe[N]=g(E.image[N],!0,i.maxCubemapSize):fe[N]=ne?E.image[N].image:E.image[N],fe[N]=Ae(E,fe[N]);const Ue=fe[0],ge=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),Ne=M(E.internalFormat,ge,Se,E.colorSpace),rt=E.isVideoTexture!==!0,et=ee.__version===void 0||J===!0,lt=Z.dataReady;let ft=v(E,Ue);L(r.TEXTURE_CUBE_MAP,E);let ye;if(De){rt&&et&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ne,Ue.width,Ue.height);for(let N=0;N<6;N++){ye=fe[N].mipmaps;for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];E.format!==_i?ge!==null?rt?lt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q,0,0,ae.width,ae.height,ge,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?lt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q,0,0,ae.width,ae.height,ge,Se,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q,Ne,ae.width,ae.height,0,ge,Se,ae.data)}}}else{if(ye=E.mipmaps,rt&&et){ye.length>0&&ft++;const N=je(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ne,N.width,N.height)}for(let N=0;N<6;N++)if(ne){rt?lt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,fe[N].width,fe[N].height,ge,Se,fe[N].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ne,fe[N].width,fe[N].height,0,ge,Se,fe[N].data);for(let Q=0;Q<ye.length;Q++){const _e=ye[Q].image[N].image;rt?lt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q+1,0,0,_e.width,_e.height,ge,Se,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q+1,Ne,_e.width,_e.height,0,ge,Se,_e.data)}}else{rt?lt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ge,Se,fe[N]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ne,ge,Se,fe[N]);for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];rt?lt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q+1,0,0,ge,Se,ae.image[N]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Q+1,Ne,ge,Se,ae.image[N])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Y(T,E,K,J,Z,ee){const Pe=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),pe=M(K.internalFormat,Pe,ie,K.colorSpace);if(!n.get(E).__hasExternalTextures){const ne=Math.max(1,E.width>>ee),fe=Math.max(1,E.height>>ee);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,pe,ne,fe,E.depth,0,Pe,ie,null):t.texImage2D(Z,ee,pe,ne,fe,0,Pe,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),le(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Z,n.get(K).__webglTexture,0,ke(E)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Z,n.get(K).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(T,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let J=r.DEPTH_COMPONENT24;if(K||le(E)){const Z=E.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Wi?J=r.DEPTH_COMPONENT32F:Z.type===Zo&&(J=r.DEPTH_COMPONENT24));const ee=ke(E);le(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,J,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,J,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const J=ke(E);K&&le(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,E.width,E.height):le(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const J=E.textures;for(let Z=0;Z<J.length;Z++){const ee=J[Z],Pe=s.convert(ee.format,ee.colorSpace),ie=s.convert(ee.type),pe=M(ee.internalFormat,Pe,ie,ee.colorSpace),De=ke(E);K&&le(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,pe,E.width,E.height):le(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const J=n.get(E.depthTexture).__webglTexture,Z=ke(E);if(E.depthTexture.format===Oo)le(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===yl)le(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function se(T){const E=n.get(T),K=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ce(E.__webglFramebuffer,T)}else if(K){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=r.createRenderbuffer(),te(E.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),te(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(T,E,K){const J=n.get(T);E!==void 0&&Y(J.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&se(T)}function Ie(T){const E=T.texture,K=n.get(T),J=n.get(E);T.addEventListener("dispose",R);const Z=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Pe=Z.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,o.memory.textures++),ee){K.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[ie]=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[ie][pe]=r.createFramebuffer()}else K.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)K.__webglFramebuffer[ie]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ie=0,pe=Z.length;ie<pe;ie++){const De=n.get(Z[ie]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&le(T)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const pe=Z[ie];K.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ie]);const De=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),fe=M(pe.internalFormat,De,ne,pe.colorSpace,T.isXRRenderTarget===!0),Ue=ke(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,K.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),te(K.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),L(r.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Y(K.__webglFramebuffer[ie][pe],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else Y(K.__webglFramebuffer[ie],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ie=0,pe=Z.length;ie<pe;ie++){const De=Z[ie],ne=n.get(De);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),L(r.TEXTURE_2D,De),Y(K.__webglFramebuffer,T,De,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(De)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),L(ie,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Y(K.__webglFramebuffer[pe],T,E,r.COLOR_ATTACHMENT0,ie,pe);else Y(K.__webglFramebuffer,T,E,r.COLOR_ATTACHMENT0,ie,0);p(E)&&m(ie),t.unbindTexture()}T.depthBuffer&&se(T)}function qe(T){const E=T.textures;for(let K=0,J=E.length;K<J;K++){const Z=E[K];if(p(Z)){const ee=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Pe=n.get(Z).__webglTexture;t.bindTexture(ee,Pe),m(ee),t.unbindTexture()}}}function H(T){if(T.samples>0&&le(T)===!1){const E=T.textures,K=T.width,J=T.height;let Z=r.COLOR_BUFFER_BIT;const ee=[],Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(T),pe=E.length>1;if(pe)for(let De=0;De<E.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let De=0;De<E.length;De++){ee.push(r.COLOR_ATTACHMENT0+De),T.depthBuffer&&ee.push(Pe);const ne=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ne===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&ie.__isTransmissionRenderTarget!==!0&&(Z|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[De]),ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Pe])),pe){const fe=n.get(E[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,K,J,0,0,K,J,Z,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<E.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ie.__webglColorRenderbuffer[De]);const ne=n.get(E[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function ke(T){return Math.min(i.maxSamples,T.samples)}function le(T){const E=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(T){const E=o.render.frame;u.get(T)!==E&&(u.set(T,E),T.update())}function Ae(T,E){const K=T.colorSpace,J=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||K!==rs&&K!==Nr&&(St.getTransfer(K)===Rt?(J!==_i||Z!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Ce,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=le}function fA(r,e){function t(n,i=Nr){let s;const o=St.getTransfer(i);if(n===_r)return r.UNSIGNED_BYTE;if(n===x0)return r.UNSIGNED_SHORT_4_4_4_4;if(n===y0)return r.UNSIGNED_SHORT_5_5_5_1;if(n===LS)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===CS)return r.BYTE;if(n===PS)return r.SHORT;if(n===_0)return r.UNSIGNED_SHORT;if(n===v0)return r.INT;if(n===Zo)return r.UNSIGNED_INT;if(n===Wi)return r.FLOAT;if(n===$r)return r.HALF_FLOAT;if(n===IS)return r.ALPHA;if(n===DS)return r.RGB;if(n===_i)return r.RGBA;if(n===US)return r.LUMINANCE;if(n===NS)return r.LUMINANCE_ALPHA;if(n===Oo)return r.DEPTH_COMPONENT;if(n===yl)return r.DEPTH_STENCIL;if(n===S0)return r.RED;if(n===M0)return r.RED_INTEGER;if(n===OS)return r.RG;if(n===T0)return r.RG_INTEGER;if(n===E0)return r.RGBA_INTEGER;if(n===Wu||n===Xu||n===qu||n===Yu)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mp||n===Tp||n===Ep||n===wp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ep)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===w0)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===bp||n===Ap)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bp)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ap)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rp||n===Cp||n===Pp||n===Lp||n===Ip||n===Dp||n===Up||n===Np||n===Op||n===Fp||n===kp||n===Bp||n===zp||n===Hp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ip)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Up)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Np)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Op)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ju||n===Vp||n===Gp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ju)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===FS||n===Wp||n===Xp||n===qp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ju)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Al?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class dA extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pA={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
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

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new tn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Yt({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new ns(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class vA extends oa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new _A,p=t.getContextAttributes();let m=null,M=null;const v=[],S=[],R=new be;let b=null;const w=new Mn;w.layers.enable(1),w.viewport=new Et;const I=new Mn;I.layers.enable(2),I.viewport=new Et;const y=[w,I],x=new dA;x.layers.enable(1),x.layers.enable(2);let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=v[Y];return te===void 0&&(te=new yh,v[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=v[Y];return te===void 0&&(te=new yh,v[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=v[Y];return te===void 0&&(te=new yh,v[Y]=te),te.getHandSpace()};function D(Y){const te=S.indexOf(Y.inputSource);if(te===-1)return;const ce=v[te];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",V);for(let Y=0;Y<v.length;Y++){const te=S[Y];te!==null&&(S[Y]=null,v[Y].disconnect(te))}O=null,U=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new xi(d.framebufferWidth,d.framebufferHeight,{format:_i,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ce=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?yl:Oo,ce=p.stencil?Al:Zo);const Ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new xi(f.textureWidth,f.textureHeight,{format:_i,type:_r,depthTexture:new z0(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ie=e.properties.get(M);Ie.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(Y){for(let te=0;te<Y.removed.length;te++){const ce=Y.removed[te],se=S.indexOf(ce);se>=0&&(S[se]=null,v[se].disconnect(ce))}for(let te=0;te<Y.added.length;te++){const ce=Y.added[te];let se=S.indexOf(ce);if(se===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=S.length){S.push(ce),se=Ie;break}else if(S[Ie]===null){S[Ie]=ce,se=Ie;break}if(se===-1)break}const Ce=v[se];Ce&&Ce.connect(ce)}}const j=new B,$=new B;function z(Y,te,ce){j.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const se=j.distanceTo($),Ce=te.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),H=Ce[14]/(Ce[10]+1),ke=(Ce[9]+1)/Ce[5],le=(Ce[9]-1)/Ce[5],Ye=(Ce[8]-1)/Ce[0],Ae=(Ie[8]+1)/Ie[0],je=qe*Ye,T=qe*Ae,E=se/(-Ye+Ae),K=E*-Ye;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(K),Y.translateZ(E),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const J=qe+E,Z=H+E,ee=je-K,Pe=T+(se-K),ie=ke*H/Z*J,pe=le*H/Z*J;Y.projectionMatrix.makePerspective(ee,Pe,ie,pe,J,Z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function X(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),x.near=I.near=w.near=Y.near,x.far=I.far=w.far=Y.far,(O!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),O=x.near,U=x.far,w.near=O,w.far=U,I.near=O,I.far=U,w.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());const te=Y.parent,ce=x.cameras;X(x,te);for(let se=0;se<ce.length;se++)X(ce[se],te);ce.length===2?z(x,w,I):x.projectionMatrix.copy(w.projectionMatrix),L(Y,x,te)};function L(Y,te,ce){ce===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let re=null;function xe(Y,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let se=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ie=0;Ie<ce.length;Ie++){const qe=ce[Ie];let H=null;if(d!==null)H=d.getViewport(qe);else{const le=h.getViewSubImage(f,qe);H=le.viewport,Ie===0&&(e.setRenderTargetTextures(M,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(M))}let ke=y[Ie];ke===void 0&&(ke=new Mn,ke.layers.enable(Ie),ke.viewport=new Et,y[Ie]=ke),ke.matrix.fromArray(qe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(qe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(H.x,H.y,H.width,H.height),Ie===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ke)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ie=h.getDepthInformation(ce[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,i.renderState)}}for(let ce=0;ce<v.length;ce++){const se=S[ce],Ce=v[ce];se!==null&&Ce!==void 0&&Ce.update(se,te,c||o)}g.render(e,x),re&&re(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const We=new B0;We.setAnimationLoop(xe),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const ps=new $i,xA=new Ke;function yA(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,O0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,S=M.envMapRotation;if(v&&(p.envMap.value=v,ps.copy(S),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),p.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(ps)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function SA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(M,R);const b=e.render.frame;s[M.id]!==b&&(f(M),s[M.id]=b)}function u(M){const v=h();M.__bindingPointIndex=v;const S=r.createBuffer(),R=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,w=S.length;b<w;b++){const I=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,x=I.length;y<x;y++){const O=I[y];if(d(O,b,y,R)===!0){const U=O.__offset,D=Array.isArray(O.value)?O.value:[O.value];let F=0;for(let V=0;V<D.length;V++){const j=D[V],$=g(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,U+F,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,S,R){const b=M.value,w=v+"_"+S;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{const I=R[w];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return R[w]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function _(M){const v=M.uniforms;let S=0;const R=16;for(let w=0,I=v.length;w<I;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,O=y.length;x<O;x++){const U=y[x],D=Array.isArray(U.value)?U.value:[U.value];for(let F=0,V=D.length;F<V;F++){const j=D[F],$=g(j),z=S%R;z!==0&&R-z<$.boundary&&(S+=R-z),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=$.storage}}}const b=S%R;return b>0&&(S+=R-b),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class q0{constructor(e={}){const{canvas:t=fM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Kr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,b=0,w=null,I=-1,y=null;const x=new Et,O=new Et;let U=null;const D=new ze(0);let F=0,V=t.width,j=t.height,$=1,z=null,X=null;const L=new Et(0,0,V,j),re=new Et(0,0,V,j);let xe=!1;const We=new sd;let Y=!1,te=!1;const ce=new Ke,se=new be,Ce=new B,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?$:1}let H=n;function ke(C,k){const W=t.getContext(C,k);return W!==null?W:null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",_e,!1),H===null){const k="webgl2";if(H=ke(k,C),H===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let le,Ye,Ae,je,T,E,K,J,Z,ee,Pe,ie,pe,De,ne,fe,Ue,ge,Se,Ne,rt,et,lt,ft;function ye(){le=new Pw(H),le.init(),Ye=new Ew(H,le,e),et=new fA(H,le),Ae=new uA(H),je=new Dw(H),T=new $b,E=new hA(H,le,Ae,T,Ye,et,je),K=new bw(v),J=new Cw(v),Z=new BM(H),lt=new Mw(H,Z),ee=new Lw(H,Z,je,lt),Pe=new Nw(H,ee,Z,je),Se=new Uw(H,Ye,E),fe=new ww(T),ie=new Kb(v,K,J,le,Ye,lt,fe),pe=new yA(v,T),De=new Jb,ne=new rA(le),ge=new Sw(v,K,J,Ae,Pe,f,l),Ue=new cA(v,Pe,Ye),ft=new SA(H,je,Ye,Ae),Ne=new Tw(H,le,je),rt=new Iw(H,le,je),je.programs=ie.programs,v.capabilities=Ye,v.extensions=le,v.properties=T,v.renderLists=De,v.shadowMap=Ue,v.state=Ae,v.info=je}ye();const N=new vA(v,H);this.xr=N,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(V,j,!1))},this.getSize=function(C){return C.set(V,j)},this.setSize=function(C,k,W=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,j=k,t.width=Math.floor(C*$),t.height=Math.floor(k*$),W===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(V*$,j*$).floor()},this.setDrawingBufferSize=function(C,k,W){V=C,j=k,$=W,t.width=Math.floor(C*W),t.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,k,W,q){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,k,W,q),Ae.viewport(x.copy(L).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,k,W,q){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,k,W,q),Ae.scissor(O.copy(re).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Ae.setScissorTest(xe=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,k=!0,W=!0){let q=0;if(C){let G=!1;if(w!==null){const oe=w.texture.format;G=oe===E0||oe===T0||oe===M0}if(G){const oe=w.texture.type,de=oe===_r||oe===Zo||oe===_0||oe===Al||oe===x0||oe===y0,Le=ge.getClearColor(),He=ge.getClearAlpha(),Re=Le.r,Te=Le.g,Be=Le.b;de?(d[0]=Re,d[1]=Te,d[2]=Be,d[3]=He,H.clearBufferuiv(H.COLOR,0,d)):(_[0]=Re,_[1]=Te,_[2]=Be,_[3]=He,H.clearBufferiv(H.COLOR,0,_))}else q|=H.COLOR_BUFFER_BIT}k&&(q|=H.DEPTH_BUFFER_BIT),W&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),De.dispose(),ne.dispose(),T.dispose(),K.dispose(),J.dispose(),Pe.dispose(),lt.dispose(),ft.dispose(),ie.dispose(),N.dispose(),N.removeEventListener("sessionstart",Fe),N.removeEventListener("sessionend",we),tt.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=je.autoReset,k=Ue.enabled,W=Ue.autoUpdate,q=Ue.needsUpdate,G=Ue.type;ye(),je.autoReset=C,Ue.enabled=k,Ue.autoUpdate=W,Ue.needsUpdate=q,Ue.type=G}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const k=C.target;k.removeEventListener("dispose",Me),st(k)}function st(C){ht(C),T.remove(C)}function ht(C){const k=T.get(C).programs;k!==void 0&&(k.forEach(function(W){ie.releaseProgram(W)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,q,G,oe){k===null&&(k=Ie);const de=G.isMesh&&G.matrixWorld.determinant()<0,Le=It(C,k,W,q,G);Ae.setMaterial(q,de);let He=W.index,Re=1;if(q.wireframe===!0){if(He=ee.getWireframeAttribute(W),He===void 0)return;Re=2}const Te=W.drawRange,Be=W.attributes.position;let Pt=Te.start*Re,gn=(Te.start+Te.count)*Re;oe!==null&&(Pt=Math.max(Pt,oe.start*Re),gn=Math.min(gn,(oe.start+oe.count)*Re)),He!==null?(Pt=Math.max(Pt,0),gn=Math.min(gn,He.count)):Be!=null&&(Pt=Math.max(Pt,0),gn=Math.min(gn,Be.count));const Dt=gn-Pt;if(Dt<0||Dt===1/0)return;lt.setup(G,q,Le,W,He);let jt,vt=Ne;if(He!==null&&(jt=Z.get(He),vt=rt,vt.setIndex(jt)),G.isMesh)q.wireframe===!0?(Ae.setLineWidth(q.wireframeLinewidth*qe()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(G.isLine){let Xe=q.linewidth;Xe===void 0&&(Xe=1),Ae.setLineWidth(Xe*qe()),G.isLineSegments?vt.setMode(H.LINES):G.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else G.isPoints?vt.setMode(H.POINTS):G.isSprite&&vt.setMode(H.TRIANGLES);if(G.isBatchedMesh)vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)vt.renderInstances(Pt,Dt,G.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,li=Math.min(W.instanceCount,Xe);vt.renderInstances(Pt,Dt,li)}else vt.render(Pt,Dt)};function pt(C,k,W){C.transparent===!0&&C.side===wi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,$e(C,k,W),C.side=Ki,C.needsUpdate=!0,$e(C,k,W),C.side=wi):$e(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),p=ne.get(W),p.init(),M.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),C!==W&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const q=new Set;return C.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const Le=oe[de];pt(Le,W,G),q.add(Le)}else pt(oe,W,G),q.add(oe)}),M.pop(),p=null,q},this.compileAsync=function(C,k,W=null){const q=this.compile(C,k,W);return new Promise(G=>{function oe(){if(q.forEach(function(de){T.get(de).currentProgram.isReady()&&q.delete(de)}),q.size===0){G(C);return}setTimeout(oe,10)}le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let wt=null;function dt(C){wt&&wt(C)}function Fe(){tt.stop()}function we(){tt.start()}const tt=new B0;tt.setAnimationLoop(dt),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(C){wt=C,N.setAnimationLoop(C),C===null?tt.stop():tt.start()},N.addEventListener("sessionstart",Fe),N.addEventListener("sessionend",we),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,w),p=ne.get(C,M.length),p.init(),M.push(p),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),We.setFromProjectionMatrix(ce),te=this.localClippingEnabled,Y=fe.init(this.clippingPlanes,te),g=De.get(C,m.length),g.init(),m.push(g),ue(C,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(z,X),this.info.render.frame++,Y===!0&&fe.beginShadows();const W=p.state.shadowsArray;if(Ue.render(W,C,k),Y===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1)&&ge.render(g,C),p.setupLights(v._useLegacyLights),k.isArrayCamera){const q=k.cameras;for(let G=0,oe=q.length;G<oe;G++){const de=q[G];Ge(g,C,de,de.viewport)}}else Ge(g,C,k);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(v,C,k),lt.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ue(C,k,W,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){q&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const de=Pe.update(C),Le=C.material;Le.visible&&g.push(C,de,Le,W,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const de=Pe.update(C),Le=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Le)){const He=de.groups;for(let Re=0,Te=He.length;Re<Te;Re++){const Be=He[Re],Pt=Le[Be.materialIndex];Pt&&Pt.visible&&g.push(C,de,Pt,W,Ce.z,Be)}}else Le.visible&&g.push(C,de,Le,W,Ce.z,null)}}const oe=C.children;for(let de=0,Le=oe.length;de<Le;de++)ue(oe[de],k,W,q)}function Ge(C,k,W,q){const G=C.opaque,oe=C.transmissive,de=C.transparent;p.setupLightsView(W),Y===!0&&fe.setGlobalState(v.clippingPlanes,W),oe.length>0&&Oe(G,oe,k,W),q&&Ae.viewport(x.copy(q)),G.length>0&&Ve(G,k,W),oe.length>0&&Ve(oe,k,W),de.length>0&&Ve(de,k,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Oe(C,k,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new xi(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?$r:_r,minFilter:Ri,samples:4,stencilBuffer:s});const Re=T.get(p.state.transmissionRenderTarget);Re.__isTransmissionRenderTarget=!0}const oe=p.state.transmissionRenderTarget;v.getDrawingBufferSize(se),oe.setSize(se.x,se.y);const de=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(D),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=Kr,Ve(C,W,q),E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe);let He=!1;for(let Re=0,Te=k.length;Re<Te;Re++){const Be=k[Re],Pt=Be.object,gn=Be.geometry,Dt=Be.material,jt=Be.group;if(Dt.side===wi&&Pt.layers.test(q.layers)){const vt=Dt.side;Dt.side=Wn,Dt.needsUpdate=!0,Gt(Pt,W,q,gn,Dt,jt),Dt.side=vt,Dt.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe)),v.setRenderTarget(de),v.setClearColor(D,F),v.toneMapping=Le}function Ve(C,k,W){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,oe=C.length;G<oe;G++){const de=C[G],Le=de.object,He=de.geometry,Re=q===null?de.material:q,Te=de.group;Le.layers.test(W.layers)&&Gt(Le,k,W,He,Re,Te)}}function Gt(C,k,W,q,G,oe){C.onBeforeRender(v,k,W,q,G,oe),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,k,W,q,C,oe),G.transparent===!0&&G.side===wi&&G.forceSinglePass===!1?(G.side=Wn,G.needsUpdate=!0,v.renderBufferDirect(W,k,q,G,C,oe),G.side=Ki,G.needsUpdate=!0,v.renderBufferDirect(W,k,q,G,C,oe),G.side=wi):v.renderBufferDirect(W,k,q,G,C,oe),C.onAfterRender(v,k,W,q,G,oe)}function $e(C,k,W){k.isScene!==!0&&(k=Ie);const q=T.get(C),G=p.state.lights,oe=p.state.shadowsArray,de=G.state.version,Le=ie.getParameters(C,G.state,oe,k,W),He=ie.getProgramCacheKey(Le);let Re=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?J:K).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",Me),Re=new Map,q.programs=Re);let Te=Re.get(He);if(Te!==void 0){if(q.currentProgram===Te&&q.lightsStateVersion===de)return nn(C,Le),Te}else Le.uniforms=ie.getUniforms(C),C.onBuild(W,Le,v),C.onBeforeCompile(Le,v),Te=ie.acquireProgram(Le,He),Re.set(He,Te),q.uniforms=Le.uniforms;const Be=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=fe.uniform),nn(C,Le),q.needsLights=_t(C),q.lightsStateVersion=de,q.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Te,q.uniformsList=null,Te}function Lt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Lc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function nn(C,k){const W=T.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function It(C,k,W,q,G){k.isScene!==!0&&(k=Ie),E.resetTextureUnits();const oe=k.fog,de=q.isMeshStandardMaterial?k.environment:null,Le=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rs,He=(q.isMeshStandardMaterial?J:K).get(q.envMap||de),Re=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Te=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!W.morphAttributes.position,Pt=!!W.morphAttributes.normal,gn=!!W.morphAttributes.color;let Dt=Kr;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=jt!==void 0?jt.length:0,Xe=T.get(q),li=p.state.lights;if(Y===!0&&(te===!0||C!==y)){const ci=C===y&&q.id===I;fe.setState(q,C,ci)}let Ut=!1;q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==li.state.version||Xe.outputColorSpace!==Le||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==He||q.fog===!0&&Xe.fog!==oe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==Re||Xe.vertexTangents!==Te||Xe.morphTargets!==Be||Xe.morphNormals!==Pt||Xe.morphColors!==gn||Xe.toneMapping!==Dt||Xe.morphTargetsCount!==vt)&&(Ut=!0):(Ut=!0,Xe.__version=q.version);let os=Xe.currentProgram;Ut===!0&&(os=$e(q,k,G));let yd=!1,ha=!1,Mu=!1;const _n=os.getUniforms(),Sr=Xe.uniforms;if(Ae.useProgram(os.program)&&(yd=!0,ha=!0,Mu=!0),q.id!==I&&(I=q.id,ha=!0),yd||y!==C){_n.setValue(H,"projectionMatrix",C.projectionMatrix),_n.setValue(H,"viewMatrix",C.matrixWorldInverse);const ci=_n.map.cameraPosition;ci!==void 0&&ci.setValue(H,Ce.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&_n.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_n.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,ha=!0,Mu=!0)}if(G.isSkinnedMesh){_n.setOptional(H,G,"bindMatrix"),_n.setOptional(H,G,"bindMatrixInverse");const ci=G.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),_n.setValue(H,"boneTexture",ci.boneTexture,E))}G.isBatchedMesh&&(_n.setOptional(H,G,"batchingTexture"),_n.setValue(H,"batchingTexture",G._matricesTexture,E));const Tu=W.morphAttributes;if((Tu.position!==void 0||Tu.normal!==void 0||Tu.color!==void 0)&&Se.update(G,W,os),(ha||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,_n.setValue(H,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Sr.envMap.value=He,Sr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Sr.envMapIntensity.value=k.environmentIntensity),ha&&(_n.setValue(H,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&bt(Sr,Mu),oe&&q.fog===!0&&pe.refreshFogUniforms(Sr,oe),pe.refreshMaterialUniforms(Sr,q,$,j,p.state.transmissionRenderTarget),Lc.upload(H,Lt(Xe),Sr,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Lc.upload(H,Lt(Xe),Sr,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_n.setValue(H,"center",G.center),_n.setValue(H,"modelViewMatrix",G.modelViewMatrix),_n.setValue(H,"normalMatrix",G.normalMatrix),_n.setValue(H,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ci=q.uniformsGroups;for(let Eu=0,Mv=ci.length;Eu<Mv;Eu++){const Sd=ci[Eu];ft.update(Sd,os),ft.bind(Sd,os)}}return os}function bt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function _t(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,k,W){T.get(C.texture).__webglTexture=k,T.get(C.depthTexture).__webglTexture=W;const q=T.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const W=T.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,W=0){w=C,R=k,b=W;let q=!0,G=null,oe=!1,de=!1;if(C){const He=T.get(C);He.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):He.__webglFramebuffer===void 0?E.setupRenderTarget(C):He.__hasExternalTextures&&E.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);const Re=C.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(de=!0);const Te=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Te[k])?G=Te[k][W]:G=Te[k],oe=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?G=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Te)?G=Te[W]:G=Te,x.copy(C.viewport),O.copy(C.scissor),U=C.scissorTest}else x.copy(L).multiplyScalar($).floor(),O.copy(re).multiplyScalar($).floor(),U=xe;if(Ae.bindFramebuffer(H.FRAMEBUFFER,G)&&q&&Ae.drawBuffers(C,G),Ae.viewport(x),Ae.scissor(O),Ae.setScissorTest(U),oe){const He=T.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,He.__webglTexture,W)}else if(de){const He=T.get(C.texture),Re=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,W||0,Re)}I=-1},this.readRenderTargetPixels=function(C,k,W,q,G,oe,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(Le=Le[de]),Le){Ae.bindFramebuffer(H.FRAMEBUFFER,Le);try{const He=C.texture,Re=He.format,Te=He.type;if(Re!==_i&&et.convert(Re)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Te===$r&&(le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float"));if(Te!==_r&&et.convert(Te)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&Te!==Wi&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&W>=0&&W<=C.height-G&&H.readPixels(k,W,q,G,et.convert(Re),et.convert(Te),oe)}finally{const He=w!==null?T.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(C,k,W=0){const q=Math.pow(2,-W),G=Math.floor(k.image.width*q),oe=Math.floor(k.image.height*q);E.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,C.x,C.y,G,oe),Ae.unbindTexture()},this.copyTextureToTexture=function(C,k,W,q=0){const G=k.image.width,oe=k.image.height,de=et.convert(W.format),Le=et.convert(W.type);E.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,G,oe,de,Le,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,de,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,de,Le,k.image),q===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,k,W,q,G=0){const oe=Math.round(C.max.x-C.min.x),de=Math.round(C.max.y-C.min.y),Le=C.max.z-C.min.z+1,He=et.convert(q.format),Re=et.convert(q.type);let Te;if(q.isData3DTexture)E.setTexture3D(q,0),Te=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),Te=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),Pt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gn=H.getParameter(H.UNPACK_SKIP_PIXELS),Dt=H.getParameter(H.UNPACK_SKIP_ROWS),jt=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=W.isCompressedTexture?W.mipmaps[G]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Te,G,k.x,k.y,k.z,oe,de,Le,He,Re,vt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Te,G,k.x,k.y,k.z,oe,de,Le,He,vt.data):H.texSubImage3D(Te,G,k.x,k.y,k.z,oe,de,Le,He,Re,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt),G===0&&q.generateMipmaps&&H.generateMipmap(Te),Ae.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,Ae.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nd?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===_u?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iu extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class MA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return P0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new B;class ad{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ad(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bm=new B,zm=new Et,Hm=new Et,TA=new B,Vm=new Ke,fc=new B,Sh=new Zi,Gm=new Ke,Mh=new Rl;class EA extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sp,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sh.copy(this.boundingSphere),Sh.applyMatrix4(i),e.ray.intersectsSphere(Sh)!==!1&&(Gm.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(Gm),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===RS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zm.fromBufferAttribute(i.attributes.skinIndex,e),Hm.fromBufferAttribute(i.attributes.skinWeight,e),Bm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hm.getComponent(s);if(o!==0){const a=zm.getComponent(s);Vm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TA.copy(Bm).applyMatrix4(Vm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Y0 extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ld extends tn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Fn,u=Fn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wm=new Ke,wA=new Ke;class cd{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:wA;Wm.multiplyMatrices(a,t[s]),Wm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ld(t,e,e,_i,Wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Y0),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class xf extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xo=new Ke,Xm=new Ke,dc=[],qm=new Ii,bA=new Ke,Sa=new en,Ma=new Zi;class AA extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),qm.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(qm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),Ma.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xo),Xm.multiplyMatrices(n,xo),Sa.matrixWorld=Xm,Sa.raycast(e,dc);for(let o=0,a=dc.length;o<a;o++){const l=dc[o];l.instanceId=s,l.object=this,t.push(l)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ld(new Float32Array(i*this.count),i,this.count,S0,Wi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class j0 extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ym=new B,jm=new B,Km=new Ke,Th=new Rl,pc=new Zi;class ud extends Ht{constructor(e=new qn,t=new j0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ym.fromBufferAttribute(t,i-1),jm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ym.distanceTo(jm);e.setAttribute("lineDistance",new Li(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;Km.copy(i).invert(),Th.copy(e.ray).applyMatrix4(Km);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,f=new B,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=d){const R=_.getX(v),b=_.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,b),Th.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Th.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const $m=new B,Zm=new B;class RA extends ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$m.fromBufferAttribute(t,i),Zm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$m.distanceTo(Zm);e.setAttribute("lineDistance",new Li(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CA extends ud{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class K0 extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new Ke,yf=new Rl,mc=new Zi,gc=new B;class hd extends Ht{constructor(e=new qn,t=new K0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(i),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;Jm.copy(i).invert(),yf.copy(e.ray).applyMatrix4(Jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);gc.fromBufferAttribute(h,p),Qm(gc,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)gc.fromBufferAttribute(h,_),Qm(gc,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qm(r,e,t,n,i,s,o){const a=yf.distanceSqToPoint(r);if(a<t){const l=new B;yf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class PA extends tn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class LA extends Pi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class IA extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xu extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yi extends xu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _c(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function DA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function UA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function eg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function $0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ll{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class NA extends Ll{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yp,endingEnd:Yp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jp:s=e,a=2*t-n;break;case Kp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jp:o=e,l=2*n-t;break;case Kp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,S=d*p-d*g;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+M*o[c+R]+v*o[l+R]+S*o[h+R];return s}}class OA extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class FA extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new FA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new OA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new NA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sl:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Ku:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sl;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&DA(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ku,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Jo;class la extends Ji{}la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=Sl;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;class Z0 extends Ji{}Z0.prototype.ValueTypeName="color";class ia extends Ji{}ia.prototype.ValueTypeName="number";class kA extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ss.slerpFlat(s,0,o,c-a,o,c,l);return s}}class qs extends Ji{InterpolantFactoryMethodLinear(e){return new kA(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.DefaultInterpolation=Jo;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends Ji{}ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=Sl;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class ra extends Ji{}ra.prototype.ValueTypeName="vector";class BA{constructor(e="",t=-1,n=[],i=kS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=UA(l);l=eg(l,1,u),c=eg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ia(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];$0(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let M=0;M!==f[_].morphTargets.length;++M){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new ia(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ra,d+".position",f,"pos",i),n(qs,d+".quaternion",f,"rot",i),n(ra,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ia;case"vector":case"vector2":case"vector3":case"vector4":return ra;case"color":return Z0;case"quaternion":return qs;case"bool":case"boolean":return la;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function HA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zA(r.type);if(r.times===void 0){const t=[],n=[];$0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Wr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class VA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const GA=new VA;class js{constructor(e){this.manager=e!==void 0?e:GA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const rr={};class WA extends Error{constructor(e,t){super(e),this.response=t}}class fd extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:i});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rr[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,w=u.length;b<w;b++){const I=u[b];I.onProgress&&I.onProgress(R)}m.enqueue(S),M()}})}}});return new Response(p)}else throw new WA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Wr.add(e,c);const u=rr[e];delete rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XA extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ml("img");function l(){u(),Wr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class PC extends js{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ld,a=new fd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:zt,o.minFilter=c.minFilter!==void 0?c.minFilter:zt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ri),c.mipmapCount===1&&(o.minFilter=zt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class dd extends js{constructor(e){super(e)}load(e,t,n,i){const s=new tn,o=new XA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yu extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Eh=new Ke,tg=new B,ng=new B;class pd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ng),t.updateMatrixWorld(),Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qA extends pd{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class YA extends yu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ig=new Ke,Ta=new B,wh=new B;class jA extends pd{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),wh.copy(n.position),wh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wh),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),ig.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ig)}}class J0 extends yu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KA extends pd{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new KA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Q0 extends yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $A extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Wr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Wr.add(e,l),s.manager.itemStart(e)}}class ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rg(){return(typeof performance>"u"?Date:performance).now()}const gd="\\[\\]\\.:\\/",ZA=new RegExp("["+gd+"]","g"),_d="[^"+gd+"]",JA="[^"+gd.replace("\\.","")+"]",QA=/((?:WC+[\/:])*)/.source.replace("WC",_d),e1=/(WCOD+)?/.source.replace("WCOD",JA),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),i1=new RegExp("^"+QA+e1+t1+n1+"$"),r1=["material","materials","bones","map"];class s1{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZA,"")}static parseTrackName(e){const t=i1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);r1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=s1;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const sg=new Ke;class o1{constructor(e,t,n=0,i=1/0){this.ray=new Rl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sg),this}intersectObject(e,t=!0,n=[]){return Sf(e,this,n,t),n.sort(og),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Sf(e[i],this,n,t);return n.sort(og),n}}function og(r,e){return r.distance-e.distance}function Sf(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Sf(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);const Su=[{title:"Blurred Vision",image:"/work/work-1.jpg",href:"/film.html"},{title:"Silent Motion",image:"/work/work-2.jpg",href:"/archive.html"},{title:"Red Mirage",image:"/work/work-3.jpg",href:"/contact.html"},{title:"Echoed Silhouette",image:"/work/work-4.jpg",href:"/contact.html"}],a1=parseInt(mu.replace(/\D+/g,""));function ag(r,e){if(e===BS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===mf||e===b0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===mf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function ru(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Rs="srgb",vr="srgb-linear",lg=3001,l1=3e3;class tv extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new d1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new A1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=tl.extractUrlBase(e);o=tl.resolveURL(c,this.path)}else o=tl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(ru(new Uint8Array(e.slice(0,4)))===nv){try{o[ct.KHR_BINARY_GLTF]=new R1(e)}catch(u){i&&i(u);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(ru(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new H1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:o[u]=new h1;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[u]=new C1(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[u]=new P1;break;case ct.KHR_MESH_QUANTIZATION:o[u]=new L1;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function c1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class u1{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],vr);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new md(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new J0(u),c.distance=h;break;case"spot":c=new YA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,lr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class h1{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return pr}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Rs))}return Promise.all(i)}}class f1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class d1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}}class p1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class m1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class g1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],vr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rs)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],vr),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class y1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],vr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rs)),Promise.all(s)}}class S1{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class M1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class T1{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class E1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class w1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class b1{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class A1{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==fi.TRIANGLES&&c.mode!==fi.TRIANGLE_STRIP&&c.mode!==fi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Ke,p=new B,m=new ss,M=new B(1,1,1),v=new AA(_.geometry,_.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,g.compose(p,m,M));for(const S in l)if(S==="_COLOR_0"){const R=l[S];v.instanceColor=new xf(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);Ht.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const nv="glTF",Ea=12,cg={JSON:1313821514,BIN:5130562};class R1{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea);if(this.header={magic:ru(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ea,i=new DataView(e,Ea);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===cg.JSON){const l=new Uint8Array(e,Ea+s,o);this.content=ru(l)}else if(a===cg.BIN){const l=Ea+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class C1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Mf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Mf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ko[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,vr,f)})})}}class P1{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class L1{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class iv extends Ll{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,M=1-p,v=m-f+h;for(let S=0;S!==a;S++){const R=o[g+S+a],b=o[g+S+l]*u,w=o[_+S+a],I=o[_+S]*u;s[S]=M*R+v*b+p*w+m*I}return s}}const I1=new ss;class D1 extends iv{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return I1.fromArray(s).normalize().toArray(s),s}}const fi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ko={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ug={9728:Fn,9729:zt,9984:g0,9985:Cc,9986:Da,9987:Ri},hg={33071:Bn,33648:Jc,10497:$o},bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...a1>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U1={CUBICSPLINE:void 0,LINEAR:Jo,STEP:Sl},Ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),r.DefaultMaterial}function ms(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function lr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function O1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function F1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k1(r){let e;const t=r.extensions&&r.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rh(t.attributes):e=r.indices+":"+Rh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Rh(r.targets[n]);return e}function Rh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Tf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const z1=new Ke;class H1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new c1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new dd(this.options.manager):this.textureLoader=new $A(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ms(s,a,i),lr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(tl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=bh[i.type],a=ko[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ot(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=bh[i.type],c=ko[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(M);v||(g=new c(a,m*d,i.count*d/u),v=new MA(g,d/u),t.cache.add(M,v)),p=new ad(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Ot(g,l,_);if(i.sparse!==void 0){const m=bh.SCALAR,M=ko[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new M(o[1],v,i.sparse.count*m),b=new c(o[2],S,i.sparse.count*l);a!==null&&(p=new Ot(p.array.slice(),p.itemSize,p.normalized));for(let w=0,I=R.length;w<I;w++){const y=R[w];if(p.setX(y,b[w*l]),l>=2&&p.setY(y,b[w*l+1]),l>=3&&p.setZ(y,b[w*l+2]),l>=4&&p.setW(y,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=ug[f.magFilter]||zt,u.minFilter=ug[f.minFilter]||Ri,u.wrapS=hg[f.wrapS]||$o,u.wrapT=hg[f.wrapT]||$o,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new tn(g);p.needsUpdate=!0,f(p)}),t.load(tl.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),lr(h,o),h.userData.mimeType=o.mimeType||B1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===lg?Rs:vr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===Rs?lg:l1),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new K0,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new j0,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],vr),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rs)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=wi);const u=s.alphaMode||Ah.OPAQUE;if(u===Ah.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ah.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pr){const h=s.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],vr)}return s.emissiveTexture!==void 0&&o!==pr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rs)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),lr(h,s),t.associations.set(h,{materials:e}),s.extensions&&ms(i,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=k1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=fg(new qn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?N1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const M=c[d];if(p.mode===fi.TRIANGLES||p.mode===fi.TRIANGLE_STRIP||p.mode===fi.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new EA(g,M):new en(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===fi.TRIANGLE_STRIP?m.geometry=ag(m.geometry,b0):p.mode===fi.TRIANGLE_FAN&&(m.geometry=ag(m.geometry,mf));else if(p.mode===fi.LINES)m=new RA(g,M);else if(p.mode===fi.LINE_STRIP)m=new ud(g,M);else if(p.mode===fi.LINE_LOOP)m=new CA(g,M);else if(p.mode===fi.POINTS)m=new hd(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&F1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),lr(m,s),p.extensions&&ms(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&ms(i,h[0],s),h[0];const f=new Gr;s.extensions&&ms(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(Pc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),lr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ke;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let M=0,v=f.length;M<v;M++){const S=f[M],R=d[M],b=_[M],w=g[M],I=p[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,R,b,w,I);if(y)for(let x=0;x<y.length;x++)m.push(y[x])}return new BA(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,z1)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Y0:c.length>1?u=new Gr:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),lr(u,s),s.extensions&&ms(n,u,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Gr;n.name&&(s.name=i.createUniqueName(n.name)),lr(s,n),n.extensions&&ms(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Pi||f instanceof tn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Cr[s.path]===Cr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Cr[s.path]){case Cr.weights:c=ia;break;case Cr.rotation:c=qs;break;case Cr.position:case Cr.scale:c=ra;break;default:n.itemSize===1?c=ia:c=ra;break}const u=i.interpolation!==void 0?U1[i.interpolation]:Jo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Cr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qs?D1:iv;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V1(r,e,t){const n=e.attributes,i=new Ii;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Tf(ko[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Tf(ko[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Zi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function fg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Mf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return lr(r,e),V1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?O1(r,e.targets,t):r})}const rv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const G1=new Pl(-1,1,1,-1,0,1);class W1 extends qn{constructor(){super(),this.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Li([0,2,0,0,2,0],2))}}const X1=new W1;class vd{constructor(e){this._mesh=new en(X1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,G1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vs extends ua{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ta.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dg extends ua{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class q1 extends ua{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$r}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vs(rv),this.copyPass.material.blending=gr,this.clock=new ev}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dg!==void 0&&(o instanceof dg?n=!0:o instanceof q1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ov extends ua{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Y1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class av extends ua{constructor(){super();const e=Y1;this.uniforms=ta.clone(e.uniforms),this.material=new IA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===u0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===h0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===f0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===td?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===d0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===p0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const j1="modulepreload",K1=function(r){return"/"+r},pg={},$1=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=K1(c),c in pg)return;pg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":j1,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Z1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class sa extends ua{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(s,o,{type:$r}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new xi(s,o,{type:$r});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new xi(s,o,{type:$r});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Z1;this.highPassUniforms=ta.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=rv;this.copyUniforms=ta.clone(u.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:xl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new pr,this.fsQuad=new vd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}sa.BlurDirectionX=new be(1,0);sa.BlurDirectionY=new be(0,1);var mg={};Ee.registerPlugin(it);let mt=null,Oi=null,$t=null,Ct=null,nl=null,il=null,Ic=null,Ss=null,Xr=!1,Jt=null,Cs=null,Un=null,Ps=null,Or=null,Ls=null,Dn=null;const su=new Set;let Is=null,Ef=null,Fr=null,J1=null,Ds=null;const Tl={uTime:{value:0},uResolution:{value:new be(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};let El=null;const sr={angle:Math.PI/2,y:0,tilt:0},Kn={angle:Math.PI/2,y:0,tilt:0},ki={x:0,y:0,z:0},wa={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Xt={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let Bo=null,wl=null;const lv=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function Q1(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:lv.enableShadows,shadowMapSize:512}}function eR(r,e,t){typeof process<"u"&&mg&&mg.VITEST||(Ps=new _f(e),Ps.compileEquirectangularShader&&Ps.compileEquirectangularShader(),$1(async()=>{const{RGBELoader:n}=await import("./index-BWq77kXQ.js");return{RGBELoader:n}},[]).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Ct){s.dispose?.();return}Or&&Or.dispose?.(),Or=Ps.fromEquirectangular(s),r.environment=Or.texture,r.background=Or.texture,aR(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function tR(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=Qy;return}r.shadowMap.type=ed,Jt&&(Jt.castShadow=!0,Jt.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),Jt.shadow.bias=-1e-4,Jt.shadow.normalBias=.02,Jt.shadow.camera.near=1,Jt.shadow.camera.far=30,Jt.shadow.camera.left=-7,Jt.shadow.camera.right=7,Jt.shadow.camera.top=7,Jt.shadow.camera.bottom=-7);const n=new ns(20,20),i=new LA({opacity:.22});Un=new en(n,i),Un.rotation.x=-Math.PI/2,Un.position.y=-1.35,Un.receiveShadow=!0,e.add(Un)}const nR={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:.15},uOffset:{value:1}},vertexShader:`
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
  `},iR={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},rR={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function sR(r,e,t){const n=new ov(e,t);r.addPass(n),El=new sa(new be(window.innerWidth,window.innerHeight),.075,.4,.85),r.addPass(El);const i=new Vs(nR);r.addPass(i);const s=new Vs(iR);s.uniforms.uGrain=Tl.uGrain,s.uniforms.uTime=Tl.uTime,r.addPass(s);const o=new Vs(rR);r.addPass(o);const a=new av;r.addPass(a)}function oR(){mt&&(mt.toneMappingExposure=Xt.exposure),Cs&&(Cs.intensity=Xt.ambientIntensity,Cs.color?.set&&Cs.color.set(Xt.ambientColor)),Jt&&(Jt.intensity=Xt.keyIntensity,Jt.color?.set&&Jt.color.set(Xt.keyColor),Jt.position.set(Xt.keyX,Xt.keyY,Xt.keyZ))}function aR(){Ct&&(Ct.backgroundIntensity=Xt.envBackgroundIntensity,Ct.backgroundBlurriness=Xt.envBackgroundBlur)}function lR(){Un&&(Un.material&&(Un.material.opacity=Xt.shadowOpacity),Un.position.y=Xt.shadowY)}function cR(){su.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=Pc.clamp((r.userData.baseRoughness??r.roughness)*Xt.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=Pc.clamp((r.userData.baseMetalness??r.metalness)*Xt.metalnessScale,0,1)),r.envMapIntensity=Pc.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Xt.envReflection,.2,5),r.needsUpdate=!0)})}function uR(r){r.map&&(r.map.colorSpace=hn),r.emissiveMap&&(r.emissiveMap.colorSpace=hn),r.needsUpdate=!0}function hR(r){return new yi({color:r?.color?.clone?r.color.clone():new ze(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function fR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=hR(t)),uR(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,su.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function dR(r){const e=new Ii().setFromObject(r),t=e.getCenter(new B),n=e.getSize(new B);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function pR(r){dR(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,fR(e))})}function mR(){if(Ds)return Ds;const r=new tv,e=new Promise(n=>{r.load("/home/scene.glb",i=>{if(!Ct||!Xr){n();return}Is=i.scene,pR(Is),cR(),Is.traverse(s=>{}),Is.traverse(s=>{if(!s.isMesh)return;const o=s.name.toLowerCase();(o.includes("volume")||o.includes("glow")||o.includes("light"))&&(au=cv(s,$t,{c:1.45,p:2.1,glowColor:"#fff3c6",op:.18}))}),n()},void 0,i=>{console.error("[three.js] Home model load error:",i),n()})}),t=new Promise(n=>{n()});return Ds=Promise.all([e,t]),Ds}async function ou(r){if(!Ct||(Ds&&await Ds,!Ct||!Xr))return;const e=r==="work"?Ef:Is;!e||Fr===e||(Fr&&Fr.parent&&Ct.remove(Fr),e.position.set(Xt.modelX,Xt.modelY,Xt.modelZ),Ct.add(e),Fr=e,Ct&&(r==="work"?Ct.fog=new na(15789284,.035):Ct.fog=new na(657935,.045)))}function gR(r,e){Bo=r,wl=e}function _R(){Bo=null,wl=null}function gg(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}function cv(r,e,t={}){const{c:n=1.45,p:i=2.1,glowColor:s="#fff3c6",op:o=.18}=t,a=new pr({side:wi,blending:xl,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1});return a.onBeforeCompile=l=>{l.uniforms.c={value:n},l.uniforms.p={value:i},l.uniforms.glowColor={value:new ze(s)},l.uniforms.op={value:o},l.vertexShader=`
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
    `,a.userData.shader=l},a.customProgramCacheKey=()=>`fake-volume-${s}-${n}-${i}`,r.material=a,r.renderOrder=10,r.needsUpdate=!0,{update(l){},setOpacity(l){const c=a.userData.shader;c&&(c.uniforms.op.value=l)}}}let au=null;const Na=200,uv={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function vR(r){const e=new qn,t=new Float32Array(Na*3),n=new Float32Array(Na),i=new Float32Array(Na),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=uv;for(let f=0;f<Na;f++)t[f*3]=(Math.random()-.5)*2*s,t[f*3+1]=o+Math.random()*(a-o),t[f*3+2]=l+Math.random()*(c-l),n[f]=.008+Math.random()*.016,i[f]=.35+Math.random()*.6;e.setAttribute("position",new Ot(t,3)),e.setAttribute("aSize",new Ot(n,1)),e.setAttribute("aOpacity",new Ot(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),h=new Yt({transparent:!0,depthWrite:!1,blending:xl,uniforms:{uPixelRatio:{value:u}},vertexShader:`
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
    `});Dn=new hd(e,h),Dn.frustumCulled=!1,r.add(Dn)}function xR(r){if(!Dn)return;const e=Dn.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=uv;for(let a=0;a<Na;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}Dn.geometry.attributes.position.needsUpdate=!0}function _g(){if(Xr)return{scene:Ct,camera:$t,renderer:mt};Xr=!0;const r=Q1();if(Ct=new iu,Ct.fog=new na(657935,.045),$t=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),mt=new q0({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),mt.setSize(window.innerWidth,window.innerHeight),mt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),mt.toneMapping=td,mt.toneMappingExposure=r.toneMappingExposure,mt.outputColorSpace=hn,Ss=document.querySelector("#background"),!Ss){console.warn("[three.js] #background element not found, creating one"),Ss=document.createElement("div"),Ss.id="background";const s=document.body.firstChild;document.body.insertBefore(Ss,s)}Ss.appendChild(mt.domElement),Cs=new Q0(16777215,.18),Ct.add(Cs),Jt=new md(16777215,3.25),Jt.position.set(4.2,7.5,6.2),Ct.add(Jt),oR(),eR(Ct,mt,lv.hdriUrl),tR(mt,Ct,r),lR(),vR(Ct);const e=sessionStorage.getItem("webgl-page")||"home";mR().then(()=>{if(!Ct||!Xr)return;ou(e==="work"?"work":"home");const o=fv(e);ki.x=o.x,ki.y=o.y,ki.z=o.z});let t=null;nl=()=>{t&&clearTimeout(t),t=setTimeout(()=>{if(!$t||!mt||!Oi)return;const s=window.innerWidth,o=window.innerHeight;$t.aspect=s/o,$t.updateProjectionMatrix(),mt.setSize(s,o),Oi.setSize(s,o),El&&El.setSize(s,o),Tl.uResolution.value.set(s,o)},100)},window.addEventListener("resize",nl);try{Oi=new sv(mt)}catch{Oi={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>mt?.render(Ct,$t)}}sR(Oi,Ct,$t),sr.angle=Math.PI/2,sr.y=0,sr.tilt=0,Kn.angle=Math.PI/2,Kn.y=0,Kn.tilt=0;let n=0;il=s=>{const o=performance.now();if(o-n<16)return;n=o;const a=s.clientX/window.innerWidth*2-1,l=-(s.clientY/window.innerHeight)*2+1;sr.angle=Math.PI/2+a*wa.angleRange,sr.y=-l*wa.yRange,sr.tilt=a*wa.tiltRange},window.addEventListener("mousemove",il,{passive:!0}),performance.now();const i=()=>{if(!Xr||!$t||!Oi)return;const s=performance.now(),o=wa.lerp;Kn.angle+=(sr.angle-Kn.angle)*o,Kn.y+=(sr.y-Kn.y)*o,Kn.tilt+=(sr.tilt-Kn.tilt)*o;const a=Fr?Fr.position:{x:Xt.modelX,y:Xt.modelY,z:Xt.modelZ},l=a.x+ki.x,c=a.y+ki.y,u=a.z+ki.z,h=wa.orbitRadius;$t.position.x=l+Math.cos(Kn.angle)*h,$t.position.z=u+Math.sin(Kn.angle)*h,$t.position.y=c+Kn.y+1;const f=s*.001;if($t.position.x+=Math.sin(f*.7)*.012+Math.sin(f*1.3)*.008,$t.position.y+=Math.sin(f*.5)*.012+Math.cos(f*1.1)*.008,$t.position.z+=Math.cos(f*.6)*.008,$t.lookAt(l,c,u),$t.rotation.z+=Kn.tilt,Tl.uTime.value=f,xR(f),au&&au.update($t),Oi.render(),Bo&&wl){const d=mt.autoClear;mt.autoClear=!1,mt.clearDepth();const _=Bo.userData?.composer;_?_.render():mt.render(Bo,wl),mt.autoClear=d}Ic=requestAnimationFrame(i)};return i(),{scene:Ct,camera:$t,renderer:mt}}function Dc(){if(!Xr)return;Xr=!1,Ic&&(cancelAnimationFrame(Ic),Ic=null),nl&&(window.removeEventListener("resize",nl),nl=null),il&&(window.removeEventListener("mousemove",il),il=null),Ls&&(Ls.kill(),Ls=null),Tl.uTime.value=0,El=null,Dn&&(Dn.geometry&&Dn.geometry.dispose(),Dn.material&&Dn.material.dispose(),Dn.parent&&Dn.parent.remove(Dn),Dn=null),au=null,Bo=null,wl=null,Un&&(Un.geometry&&Un.geometry.dispose(),Un.material&&Un.material.dispose(),Un=null),Or&&(Or.dispose(),Or=null),Ps&&(Ps.dispose(),Ps=null),su.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),su.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==J1){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Ct?.remove(e))};r(Is),r(Ef),Is=null,Ef=null,Fr=null,Ds=null,Oi&&(Oi.dispose(),Oi=null),mt&&(mt.dispose(),mt.domElement&&mt.domElement.parentNode&&mt.domElement.parentNode.removeChild(mt.domElement),mt=null),Ct=null,$t=null,Jt=null,Cs=null,Ss=null}function hv(){return mt}function fv(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function rl(r,e=!1){const t=fv(r);sessionStorage.setItem("webgl-page",r),Ls&&(Ls.kill(),Ls=null),e?(ki.x=t.x,ki.y=t.y,ki.z=t.z):Ls=Ee.to(ki,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}let sl=!1;function dv(){const r=document.querySelectorAll('[data-barba="container"][data-barba-namespace="work"]');return r.length?r[r.length-1]:null}const Qe={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:4,CAMERA_FOV:50,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ANGLE_RANGE:.2,PARALLAX_Y_RANGE:.3,PARALLAX_TILT_RANGE:.04,PARALLAX_CONFIG_LERP:.05,PARALLAX_ORBIT_RADIUS:5,WAVE_AMPLITUDE:.18,WAVE_FREQUENCY:2.5,WAVE_SPEED:.3,POINT_LIGHT_INTENSITY:3.5,POINT_LIGHT_Z:10,AMBIENT_INTENSITY:1.2,DIRECTIONAL_LIGHT_INTENSITY:2,PARTICLE_COUNT:200,PARTICLE_BOUNDS:{xHalf:8,yMin:-3,yMax:5,zMin:-16,zMax:2},SCROLL_TILT_AMOUNT:.08,SCROLL_TILT_LERP:.04,SCROLL_TILT_MAX:.15},yR=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;
  uniform vec2 uHoverUV;
  uniform float uRippleStrength;

  varying vec2 vUv;
  varying vec3 vNormal;

  // Clean hash for organic noise overlay
  float hash1(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash1(i), hash1(i + vec2(1.0, 0.0)), f.x),
      mix(hash1(i + vec2(0.0, 1.0)), hash1(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;

    float t = uTime * uWaveSpeed;

    // How far from the horizontal center of the strip (0 at center, 1 at edges)
    // Edges of ribbon flutter more — like real cloth pinned along its midline
    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float edgeScale = smoothstep(0.0, 1.0, edgeDist);

    // Horizontal position scaled by wave frequency
    float px = vUv.x * uWaveFreq * 6.2832; // full cycles across strip

    // ── Primary: traveling sine waves (directional, like wind) ──
    // Multiple frequencies at different speeds create a rich, non-repeating wave
    float wave1 = sin(px * 1.0 - t * 3.0 + vUv.y * 1.5) * 0.50;
    float wave2 = sin(px * 2.3 - t * 2.1 + vUv.y * 2.8) * 0.25;
    float wave3 = sin(px * 0.7 + t * 1.4 - vUv.y * 0.9) * 0.15;
    // Counter-traveling wave for interference — makes it look alive, not mechanical
    float wave4 = sin(px * 1.6 + t * 1.8 + vUv.y * 3.2) * 0.10;

    float primaryWave = (wave1 + wave2 + wave3 + wave4);

    // ── Secondary: organic noise variation ──
    // Low amplitude, slow drift — breaks up the sine regularity
    vec2 noiseUV = vUv * vec2(uWaveFreq * 2.0, uWaveFreq);
    float n1 = noise(noiseUV + vec2(t * 0.8, t * 0.3));
    float n2 = noise(noiseUV * 2.1 + vec2(-t * 0.5, t * 0.7));
    float noiseMod = (n1 * 0.6 + n2 * 0.4) * 2.0 - 1.0;

    // ── Combine: edge-scaled displacement along normal ──
    // Primary waves are the dominant motion; noise adds organic imperfection
    // Edge flutter: center barely moves, edges ripple freely
    float centerHold = mix(0.15, 1.0, edgeScale); // center still gets a hint of motion
    float h = (primaryWave + noiseMod * 0.3) * uWaveAmp * centerHold;

    pos += normal * h;

    // ── Subtle vertical ripple (cloth sway) ──
    // Phase-offset from normal displacement creates an elliptical motion path
    // like how real cloth particles orbit, not just push in/out
    float yRipple = sin(px * 1.0 - t * 3.0 + 1.5708 + vUv.y * 1.5) * 0.3;
    pos.y += yRipple * uWaveAmp * edgeScale;

    // ── Hover ripple: bulge + concentric rings radiating from cursor ──
    if (uHoverUV.x >= 0.0) {
      // Aspect-corrected distance (arc ~49wu wide, strip 5.5wu tall)
      vec2 scaledUV = vec2(vUv.x * 8.9, vUv.y);
      vec2 scaledHover = vec2(uHoverUV.x * 8.9, uHoverUV.y);
      float dist = distance(scaledUV, scaledHover);

      // Smooth bulge: pushes mesh outward right at cursor (pressing into cloth)
      float bulge = exp(-dist * 5.0) * uRippleStrength * 0.12;

      // Expanding ripple rings radiating outward from the push point
      float ripple = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 3.0) * uRippleStrength * 0.25;

      pos += normal * (bulge + ripple);
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,SR=`
  uniform sampler2D uTex0;
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform sampler2D uTex3;
  uniform float uScrollOffset;
  uniform float uItemsOnStrip;
  uniform float uNumUnique;
  uniform float uGapSize;
  uniform float uTime;
  uniform vec2 uHoverUV;
  uniform float uRippleStrength;
  varying vec2 vUv;
  varying vec3 vNormal;

  // Fast hash for film grain
  float hash(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  void main() {
    // Map strip UV.x to scrolling item space
    float totalU = vUv.x * uItemsOnStrip + uScrollOffset;

    // Which item slot and position within it
    float itemFract = fract(totalU);
    float itemIndex = floor(totalU);

    // Wrap to unique textures
    float wrappedIndex = mod(itemIndex, uNumUnique);
    if (wrappedIndex < 0.0) wrappedIndex += uNumUnique;

    // Gap: discard pixels in the gap region between items
    float halfGap = uGapSize * 0.5;
    if (itemFract < halfGap || itemFract > 1.0 - halfGap) {
      discard;
    }

    // Remap itemFract to texture UV (skip the gap portion)
    float texU = (itemFract - halfGap) / (1.0 - uGapSize);
    vec2 texCoord = vec2(texU, vUv.y);

    // Sample correct texture based on wrapped index
    vec3 col;
    int idx = int(wrappedIndex);
    if (idx == 0) col = texture2D(uTex0, texCoord).rgb;
    else if (idx == 1) col = texture2D(uTex1, texCoord).rgb;
    else if (idx == 2) col = texture2D(uTex2, texCoord).rgb;
    else col = texture2D(uTex3, texCoord).rgb;

    // Hover glow — warm spot + visible concentric rings near cursor
    if (uHoverUV.x >= 0.0) {
      vec2 scaledUV = vec2(vUv.x * 8.9, vUv.y);
      vec2 scaledHover = vec2(uHoverUV.x * 8.9, uHoverUV.y);
      float dist = distance(scaledUV, scaledHover);

      // Warm glow under cursor
      float glow = exp(-dist * 2.5) * uRippleStrength * 0.18;
      col += glow;

      // Visible concentric light/dark ripple rings on the texture
      float rings = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 3.0) * 0.05;
      col += rings * uRippleStrength;

      // Subtle warm color shift near cursor
      col.r += glow * 0.3;
    }

    // Film grain — matches post-FX treatment of the 3D scene behind
    float grain = (hash(vUv * 1000.0 + uTime * 100.0) - 0.5) * 0.06;
    col += grain;

    // Edge fade (tighter zone, only affects alpha to preserve hover effects)
    float edgeFade = smoothstep(0.0, 0.05, vUv.x) * (1.0 - smoothstep(0.95, 1.0, vUv.x));

    gl_FragColor = vec4(col, edgeFade);
  }
`,P={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,composer:null,workGlowHandle:null,workModel:null,tunedMaterials:new Set,pointLight:null,ambientLight:null,directionalLight:null,shadowPlane:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{},scrollTilt:0,raycaster:new o1,rayMouse:new be,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function MR(){const r=new dd,t=[...new Set(Su.map(n=>n.image))].map(n=>P.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=hn,s.minFilter=Ri,s.magFilter=zt,s.generateMipmaps=!0,P.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function TR(){const r=Qe.ARC_RADIUS,e=Qe.ARC_SPAN,t=Qe.STRIP_HEIGHT,n=Qe.WIDTH_SEGMENTS,i=Qe.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,h=0;for(let _=0;_<=i;_++){const g=_/i,p=(g-.5)*t+Qe.STRIP_Y_OFFSET;for(let m=0;m<=n;m++){const M=m/n,v=(M-.5)*e,S=Math.sin(v)*r,R=(Math.cos(v)-1)*r;o[c++]=S,o[c++]=p,o[c++]=R;const b=Math.sin(v),w=Math.cos(v);a[u++]=b,a[u++]=0,a[u++]=w,l[h++]=M,l[h++]=g}}const f=[];for(let _=0;_<i;_++)for(let g=0;g<n;g++){const p=_*(n+1)+g,m=p+1,M=p+(n+1),v=M+1;f.push(p,m,M),f.push(m,v,M)}const d=new qn;return d.setAttribute("position",new Ot(o,3)),d.setAttribute("normal",new Ot(a,3)),d.setAttribute("uv",new Ot(l,2)),d.setIndex(f),d}function ER(r){r.map&&(r.map.colorSpace=hn),r.emissiveMap&&(r.emissiveMap.colorSpace=hn),r.needsUpdate=!0}function wR(r){return new yi({color:r?.color?.clone?r.color.clone():new ze(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function bR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=wR(t)),ER(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,P.tunedMaterials.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function AR(r){const e=new Ii().setFromObject(r),t=e.getCenter(new B),n=e.getSize(new B);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function RR(r){const e=AR(r),t=Math.max(e.x,e.y,e.z);if(t>0){const i=40/t;r.scale.set(i,i,i)}r.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,bR(n))})}async function CR(){return new Promise((r,e)=>{new tv().load("/work.glb",n=>{P.workModel=n.scene,RR(P.workModel),P.workModel.position.set(0,-6.1,-22.5),P.workModel.scale.set(1.3,1.3,1.3),P.scene.add(P.workModel),P.workModel.traverse(i=>{}),P.workModel.traverse(i=>{if(!i.isMesh)return;const s=i.name.toLowerCase();(s.includes("volume")||s.includes("glow")||s.includes("light"))&&(P.workGlowHandle=cv(i,P.camera,{c:1.5,p:2.1,glowColor:"#fff8de",op:.2}))}),r()},void 0,n=>{console.error("[work] Model load error:",n),e(n)})})}function PR(){const r=window.innerWidth,e=window.innerHeight;P.camera=new Mn(Qe.CAMERA_FOV,r/e,.1,100),P.camera.position.set(0,-1.1,0),P.scene=new iu,P.scene.fog=new na(15789284,.035),P.ambientLight=new Q0(16777215,Qe.AMBIENT_INTENSITY),P.scene.add(P.ambientLight),P.pointLight=new J0(16777215,Qe.POINT_LIGHT_INTENSITY,30,1.5),P.pointLight.position.set(0,.5,Qe.POINT_LIGHT_Z),P.scene.add(P.pointLight),P.directionalLight=new md(16777215,Qe.DIRECTIONAL_LIGHT_INTENSITY),P.directionalLight.position.set(5,10,5),P.directionalLight.castShadow=!0,P.directionalLight.shadow.mapSize.width=2048,P.directionalLight.shadow.mapSize.height=2048,P.directionalLight.shadow.camera.near=1,P.directionalLight.shadow.camera.far=40,P.directionalLight.shadow.camera.left=-15,P.directionalLight.shadow.camera.right=15,P.directionalLight.shadow.camera.top=15,P.directionalLight.shadow.camera.bottom=-15,P.directionalLight.shadow.bias=-1e-4,P.directionalLight.target.position.set(0,-2,-13.4),P.scene.add(P.directionalLight),P.scene.add(P.directionalLight.target);const t=hv();t&&(t.shadowMap.enabled=!0,t.shadowMap.type=ed),P.stripGroup=new Gr,P.stripGroup.position.set(0,-.7,-13.4),P.scene.add(P.stripGroup);const n=new ns(40,20),i=new xu({color:15789284,roughness:.9,metalness:0});P.shadowPlane=new en(n,i),P.shadowPlane.rotation.x=-Math.PI/2,P.shadowPlane.position.set(0,-5.2,-18),P.shadowPlane.receiveShadow=!0,P.shadowPlane.castShadow=!1,P.scene.add(P.shadowPlane),pv(),P.clock=new ev,FR(),gR(P.scene,P.camera)}function LR(){const r=[...new Set(Su.map(e=>e.image))];for(P.textures=r.map(e=>P.textureCache.get(e)).filter(Boolean);P.textures.length<4;)P.textures.push(P.textures[0]||new tn);P.stripGeometry=TR(),P.stripMaterial=new Yt({vertexShader:yR,fragmentShader:SR,uniforms:{uTex0:{value:P.textures[0]},uTex1:{value:P.textures[1]},uTex2:{value:P.textures[2]},uTex3:{value:P.textures[3]},uScrollOffset:{value:0},uItemsOnStrip:{value:Qe.ITEMS_ON_STRIP},uNumUnique:{value:Qe.NUM_UNIQUE},uGapSize:{value:Qe.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Qe.WAVE_AMPLITUDE},uWaveFreq:{value:Qe.WAVE_FREQUENCY},uWaveSpeed:{value:Qe.WAVE_SPEED},uHoverUV:{value:new be(-1,-1)},uRippleStrength:{value:0}},transparent:!0,side:Ki,depthWrite:!0}),P.stripMesh=new en(P.stripGeometry,P.stripMaterial),P.stripMesh.frustumCulled=!1,P.stripMesh.castShadow=!0,P.stripMesh.receiveShadow=!0,P.stripGroup.add(P.stripMesh)}function IR(){if(!P.titleEl||!P.titleEl.isConnected){const n=dv();n&&(P.container=n,P.titleEl=n.querySelector(".slide-title"))}if(!P.titleEl)return;const r=.5*Qe.ITEMS_ON_STRIP+P.scrollCurrent,e=(Math.floor(r)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE;P.activeIndex=e;const t=Su[e];t&&P.lastActiveTitle!==t.title&&(P.lastActiveTitle=t.title,P.titleEl.textContent=t.title)}function DR(r){if(!P.stripMaterial)return;const e=P.stripMaterial.uniforms;e.uScrollOffset.value=P.scrollCurrent,e.uTime.value=r}const lu={uTime:{value:0},uResolution:{value:new be(window.innerWidth,window.innerHeight)},uGrain:{value:.03}},UR={uniforms:{tDiffuse:{value:null},uDarkness:{value:.65},uOffset:{value:.68}},vertexShader:`
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
  `},NR={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},OR={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function FR(){const r=hv();if(!r)return;P.composer=new sv(r);const e=new ov(P.scene,P.camera);P.composer.addPass(e);const t=new Vs(UR);P.composer.addPass(t);const n=new Vs(NR);n.uniforms.uGrain=lu.uGrain,n.uniforms.uTime=lu.uTime,P.composer.addPass(n);const i=new Vs(OR);P.composer.addPass(i);const s=new av;P.composer.addPass(s),P.scene.userData.composer=P.composer}const yo={angle:Math.PI/2,y:0,tilt:0},Di={angle:Math.PI/2,y:0,tilt:0};function kR(){const r=P.clock?P.clock.getElapsedTime():0;yo.angle=Math.PI/2+P.mouseX*Qe.PARALLAX_ANGLE_RANGE,yo.y=-P.mouseY*Qe.PARALLAX_Y_RANGE,yo.tilt=P.mouseX*Qe.PARALLAX_TILT_RANGE;const e=Qe.PARALLAX_CONFIG_LERP;if(Di.angle+=(yo.angle-Di.angle)*e,Di.y+=(yo.y-Di.y)*e,Di.tilt+=(yo.tilt-Di.tilt)*e,P.camera){const t=Qe.PARALLAX_ORBIT_RADIUS;P.camera.position.x=Math.cos(Di.angle)*t,P.camera.position.z=Math.sin(Di.angle)*t,P.camera.position.y=-1.1+Di.y+1;const n=Math.sin(r*.7)*.012+Math.sin(r*1.3)*.008,i=Math.sin(r*.5)*.012+Math.cos(r*1.1)*.008,s=Math.cos(r*.6)*.008;P.camera.position.x+=n,P.camera.position.y+=i,P.camera.position.z+=s,P.camera.lookAt(0,-1.1,-14),P.camera.rotation.z+=Di.tilt,P.pointLight&&(P.pointLight.position.x=P.camera.position.x*.5,P.pointLight.position.y=.5+P.camera.position.y*.3)}}function BR(){if(!P.stripGroup)return;const r=Math.max(-.15,Math.min(Qe.SCROLL_TILT_MAX,P.scrollVelocity*Qe.SCROLL_TILT_AMOUNT));P.scrollTilt+=(r-P.scrollTilt)*Qe.SCROLL_TILT_LERP,P.stripGroup.rotation.z=P.scrollTilt}function pv(){const{PARTICLE_COUNT:r,PARTICLE_BOUNDS:e}=Qe,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=e,a=new qn,l=new Float32Array(r*3),c=new Float32Array(r),u=new Float32Array(r);for(let d=0;d<r;d++)l[d*3]=(Math.random()-.5)*2*t,l[d*3+1]=n+Math.random()*(i-n),l[d*3+2]=s+Math.random()*(o-s),c[d]=.008+Math.random()*.016,u[d]=.35+Math.random()*.6;a.setAttribute("position",new Ot(l,3)),a.setAttribute("aSize",new Ot(c,1)),a.setAttribute("aOpacity",new Ot(u,1));const h=Math.min(window.devicePixelRatio||1,1.5),f=new Yt({transparent:!0,depthWrite:!1,blending:Hs,uniforms:{uPixelRatio:{value:h}},vertexShader:`
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
        float alpha = smoothstep(1.0, 0.3, d) * vOpacity * 0.45;
        gl_FragColor = vec4(vec3(0.12), alpha);
      }
    `});P.particleSystem=new hd(a,f),P.particleSystem.frustumCulled=!1,P.scene.add(P.particleSystem)}function zR(r){if(!P.particleSystem)return;const e=P.particleSystem.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Qe.PARTICLE_BOUNDS;for(let a=0;a<Qe.PARTICLE_COUNT;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}P.particleSystem.geometry.attributes.position.needsUpdate=!0}function HR(){!P.isPointerDown&&Math.abs(P.scrollVelocity)>1e-4?(P.scrollTarget+=P.scrollVelocity,P.scrollVelocity*=.95):P.isPointerDown||(P.scrollVelocity=0),P.scrollCurrent+=(P.scrollTarget-P.scrollCurrent)*Qe.SCROLL_LERP}function VR(r){r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;P.scrollTarget+=e*Qe.SCROLL_SPEED}function GR(r){P.isPointerDown=!0,P.lastPointerX=r.clientX,P.dragStartX=r.clientX,P.dragStartY=r.clientY,P.scrollVelocity=0,P.lastDragTime=performance.now()}let vg=0;function WR(r){if(P.isPointerDown){const i=performance.now(),s=r.clientX-P.lastPointerX,o=i-P.lastDragTime;P.scrollTarget-=s*Qe.DRAG_MULTIPLIER,o>0&&(P.scrollVelocity=-s*Qe.DRAG_MULTIPLIER/(o/16)),P.lastPointerX=r.clientX,P.lastDragTime=i}const e=performance.now();if(e-vg<16)return;vg=e;const t=r.clientX/window.innerWidth*2-1,n=-(r.clientY/window.innerHeight)*2+1;if(P.camera&&P.stripMesh&&!P.isPointerDown){P.rayMouse.set(t,n),P.raycaster.setFromCamera(P.rayMouse,P.camera);const i=P.raycaster.intersectObject(P.stripMesh,!1);if(i.length>0&&i[0].uv){P.hoverUV=i[0].uv.clone(),P.hoverActive=!0,document.body.style.cursor="pointer";return}else P.hoverActive=!1,document.body.style.cursor=""}P.mouseX=t,P.mouseY=n}function XR(r){if(!P.isPointerDown)return;P.isPointerDown=!1;const e=Math.abs(r.clientX-P.dragStartX),t=Math.abs(r.clientY-P.dragStartY);e<5&&t<5&&qR(r)}function qR(r){if(!P.camera||!P.stripMesh)return;P.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),P.raycaster.setFromCamera(P.rayMouse,P.camera);const e=P.raycaster.intersectObject(P.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Qe.ITEMS_ON_STRIP+P.scrollCurrent,i=(Math.floor(n)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE,s=Su[i];if(s?.href){const o=document.querySelector(`a[href="${s.href}"]`);o?o.click():window.location.href=s.href}}}}let zo=null;function YR(){zo&&clearTimeout(zo),zo=setTimeout(()=>{if(!P.camera)return;const r=window.innerWidth,e=window.innerHeight;P.camera.aspect=r/e,P.camera.updateProjectionMatrix(),P.composer&&P.composer.setSize(r,e),lu.uResolution.value.set(r,e)},100)}function jR(){P.handlers.wheel=VR,P.handlers.pointerdown=GR,P.handlers.pointermove=WR,P.handlers.pointerup=XR,P.handlers.resize=YR,window.addEventListener("wheel",P.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",P.handlers.pointerdown),window.addEventListener("pointermove",P.handlers.pointermove),window.addEventListener("pointerup",P.handlers.pointerup),window.addEventListener("resize",P.handlers.resize)}function KR(){P.handlers.wheel&&window.removeEventListener("wheel",P.handlers.wheel),P.handlers.pointerdown&&window.removeEventListener("pointerdown",P.handlers.pointerdown),P.handlers.pointermove&&window.removeEventListener("pointermove",P.handlers.pointermove),P.handlers.pointerup&&window.removeEventListener("pointerup",P.handlers.pointerup),P.handlers.resize&&window.removeEventListener("resize",P.handlers.resize)}function mv(){const r=P.clock?P.clock.getElapsedTime():0;HR(),DR(r),kR(),BR(),zR(r),P.workGlowHandle&&P.workGlowHandle.update(P.camera),IR(),lu.uTime.value=r,P.animationFrame=requestAnimationFrame(mv)}async function gv(){if(sl)return;sl=!0;const r=dv();if(!r){console.warn("[work] no active work container found"),sl=!1;return}P.container=r,P.titleEl=r.querySelector(".slide-title"),PR();try{await CR()}catch(e){console.error("[work] Failed to load 3D model:",e)}await MR(),LR(),pv(),jR(),P.stripGroup&&(P.stripGroup.scale.set(1,1,1),P.stripGroup.rotation.x=0),P.animationFrame=requestAnimationFrame(mv)}function Ro(){sl&&(sl=!1,P.animationFrame!==null&&(cancelAnimationFrame(P.animationFrame),P.animationFrame=null),KR(),_R(),P.stripMesh&&P.stripGroup?.remove(P.stripMesh),P.stripMaterial&&(P.stripMaterial.dispose(),P.stripMaterial=null),P.stripGeometry&&(P.stripGeometry.dispose(),P.stripGeometry=null),P.stripMesh=null,P.textures=[],P.particleSystem&&(P.particleSystem.geometry&&P.particleSystem.geometry.dispose(),P.particleSystem.material&&P.particleSystem.material.dispose(),P.particleSystem.parent&&P.particleSystem.parent.remove(P.particleSystem),P.particleSystem=null),P.workModel&&(P.scene?.remove(P.workModel),P.workModel.traverse(r=>{r.isMesh&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(e=>e.dispose()):r.material.dispose()))}),P.workModel=null),P.tunedMaterials.clear(),P.composer&&(P.composer=null),P.workGlowHandle=null,P.shadowPlane&&(P.shadowPlane.geometry.dispose(),P.shadowPlane.material.dispose(),P.shadowPlane.parent&&P.shadowPlane.parent.remove(P.shadowPlane),P.shadowPlane=null),P.pointLight&&(P.scene?.remove(P.pointLight),P.pointLight=null),P.ambientLight&&(P.scene?.remove(P.ambientLight),P.ambientLight=null),P.directionalLight&&(P.scene?.remove(P.directionalLight),P.directionalLight.dispose(),P.directionalLight=null),P.stripGroup&&(P.scene?.remove(P.stripGroup),P.stripGroup=null),P.textureCache.forEach(r=>r.dispose()),P.textureCache.clear(),zo&&(clearTimeout(zo),zo=null),document.body.style.cursor="",P.scene=null,P.camera=null,P.clock=null,P.container=null,P.titleEl=null,P.scrollTarget=0,P.scrollCurrent=0,P.scrollVelocity=0,P.lastDragTime=0,P.activeIndex=0,P.lastActiveTitle="",P.mouseX=0,P.mouseY=0,P.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},P.scrollTilt=0,P.hoverUV=null,P.hoverActive=!1,P.rippleStrength=0,P.isPointerDown=!1,P.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null})}const Ch={uniforms:{tDiffuse:{value:null},scanlineIntensity:{value:.15},scanlineCount:{value:400},time:{value:0},yOffset:{value:0},brightness:{value:1.1},contrast:{value:1.05},saturation:{value:1.1},bloomIntensity:{value:.2},bloomThreshold:{value:.5},rgbShift:{value:0},adaptiveIntensity:{value:.5},vignetteStrength:{value:.3},curvature:{value:.15},flickerStrength:{value:.01}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif

    uniform sampler2D tDiffuse;
    uniform float scanlineIntensity;
    uniform float scanlineCount;
    uniform float time;
    uniform float yOffset;
    uniform float brightness;
    uniform float contrast;
    uniform float saturation;
    uniform float bloomIntensity;
    uniform float bloomThreshold;
    uniform float rgbShift;
    uniform float adaptiveIntensity;
    uniform float vignetteStrength;
    uniform float curvature;
    uniform float flickerStrength;

    varying vec2 vUv;

    // Precomputed constants
    const float PI = 3.14159265;
    const vec3 LUMA = vec3(0.299, 0.587, 0.114);
    const float BLOOM_THRESHOLD_FACTOR = 0.5;
    const float BLOOM_FACTOR_MULT = 1.5;
    const float CHROMATIC_SHIFT_SCALE = 0.0035;

    // Optimized curvature function (normalized so corners stay within 0-1)
    vec2 curveRemapUV(vec2 uv, float curvature) {
      vec2 coords = uv * 2.0 - 1.0;
      float curveAmount = curvature * 0.25;
      float dist = dot(coords, coords);
      coords = coords * (1.0 + dist * curveAmount);
      // Normalize by corner distortion factor so edges map to exactly 0-1
      float maxFactor = 1.0 + 2.0 * curveAmount;
      coords /= maxFactor;
      return coords * 0.5 + 0.5;
    }

    // Low-cost symmetric bloom sampling (cross + center, normalized)
    vec4 sampleBloom(sampler2D tex, vec2 uv, float radius, vec4 centerSample) {
      vec2 o = vec2(radius);
      vec4 c = centerSample * 0.4;
      vec4 cross = (
        texture2D(tex, uv + vec2(o.x, 0.0)) +
        texture2D(tex, uv - vec2(o.x, 0.0)) +
        texture2D(tex, uv + vec2(0.0, o.y)) +
        texture2D(tex, uv - vec2(0.0, o.y))
      ) * 0.15;
      return c + cross;
    }

    // Approximates vignette using Chebyshev distance squared instead of pow()
    float vignetteApprox(vec2 uv, float strength) {
      vec2 vigCoord = uv * 2.0 - 1.0;
      float dist = max(abs(vigCoord.x), abs(vigCoord.y));
      return 1.0 - dist * dist * strength; // Use squared distance instead of pow
    }

    void main() {
      vec2 uv = vUv;

      // Apply screen curvature if enabled
      if (curvature > 0.001) {
        uv = curveRemapUV(uv, curvature);
      }

      // Get the original pixel color
      vec4 pixel = texture2D(tDiffuse, uv);

      // Apply bloom effect with threshold-based sampling (skip if disabled)
      if (bloomIntensity > 0.001) {
        float pixelLum = dot(pixel.rgb, LUMA);
        // Only sample bloom if pixel is above threshold
        float bloomThresholdHalf = bloomThreshold * BLOOM_THRESHOLD_FACTOR;
        if (pixelLum > bloomThresholdHalf) {
          vec4 bloomSample = sampleBloom(tDiffuse, uv, 0.005, pixel);
          bloomSample.rgb *= brightness;
          float bloomLum = dot(bloomSample.rgb, LUMA);
          float bloomFactor = bloomIntensity * max(0.0, (bloomLum - bloomThreshold) * BLOOM_FACTOR_MULT);
          pixel.rgb += bloomSample.rgb * bloomFactor;
        }
      }

      // Apply radial chromatic aberration (classic red/cyan lens fringing)
      if (rgbShift > 0.005) {
        vec2 centerVec = uv - vec2(0.5);
        float radius = length(centerVec);
        vec2 radialDir = radius > 0.00001 ? centerVec / radius : vec2(0.0, 1.0);
        vec2 tangentialDir = vec2(-radialDir.y, radialDir.x);

        float edge = clamp(radius * 2.0, 0.0, 1.25);
        float edgeWeight = edge * edge * edge;
        float microVariation = sin((uv.y + time * 0.21) * 190.0 + uv.x * 113.0) * 0.5 + 0.5;
        float asymmetry = (microVariation - 0.5) * 0.35;
        float shift = rgbShift * CHROMATIC_SHIFT_SCALE * edgeWeight;

        vec2 redOffset = radialDir * shift * (1.05 + asymmetry) + tangentialDir * shift * 0.08 * asymmetry;
        vec2 blueOffset = -radialDir * shift * (1.05 - asymmetry) - tangentialDir * shift * 0.08 * asymmetry;

        vec2 minUv = vec2(0.001);
        vec2 maxUv = vec2(0.999);
        float blend = clamp(edgeWeight * 0.9 + 0.05, 0.0, 1.0);

        float red = texture2D(tDiffuse, clamp(uv + redOffset, minUv, maxUv)).r;
        float blue = texture2D(tDiffuse, clamp(uv + blueOffset, minUv, maxUv)).b;

        pixel.r = mix(pixel.r, red, blend);
        pixel.b = mix(pixel.b, blue, blend);
      }

      // Apply brightness
      pixel.rgb *= brightness;

      // Apply contrast and saturation in one pass
      float luminance = dot(pixel.rgb, LUMA);
      pixel.rgb = (pixel.rgb - 0.5) * contrast + 0.5;
      pixel.rgb = mix(vec3(luminance), pixel.rgb, saturation);

      // Calculate combined lighting mask (scanlines, flicker, vignette)
      float lightingMask = 1.0;

      // Calculate scanlines (skip if disabled)
      if (scanlineIntensity > 0.001) {
        float scanlineY = (uv.y + yOffset) * scanlineCount;
        float scanlinePattern = abs(sin(scanlineY * PI));

        // Apply adaptive intensity if enabled
        float adaptiveFactor = 1.0;
        if (adaptiveIntensity > 0.001) {
          float yPattern = sin(uv.y * 30.0) * 0.5 + 0.5;
          adaptiveFactor = 1.0 - yPattern * adaptiveIntensity * 0.2;
        }

        lightingMask *= 1.0 - scanlinePattern * scanlineIntensity * adaptiveFactor;
      }

      // Apply flicker effect
      if (flickerStrength > 0.001) {
        lightingMask *= 1.0 + sin(time * 110.0) * flickerStrength;
      }

      // Apply vignette (skip if disabled)
      if (vignetteStrength > 0.001) {
        lightingMask *= vignetteApprox(uv, vignetteStrength);
      }

      // Apply combined lighting effects in single multiplication
      pixel.rgb *= lightingMask;

      gl_FragColor = pixel;
    }
  `},Xi=[{id:1,title:"Archive 01",year:"2024",description:"A glimpse into the creative process.",category:"photography",image:"/archive/image-1.jpg"},{id:2,title:"Archive 02",year:"2024",description:"Exploring light and shadow.",category:"photography",image:"/archive/image-2.jpg"},{id:3,title:"Archive 03",year:"2023",description:"Moments captured in time.",category:"photography",image:"/archive/image-3.jpg"},{id:4,title:"Archive 04",year:"2023",description:"Visual storytelling through imagery.",category:"photography",image:"/archive/image-4.jpg"},{id:5,title:"Archive 05",year:"2023",description:"The art of observation.",category:"photography",image:"/archive/image-5.jpg"}],me=Object.freeze({cellSize:.85,cellSpacing:1.2,gridSize:.15,lineThickness:.01,distortion:.08,depthMin:.6,depthMax:1.4,imageSizeMin:.62,imageSizeMax:.74,imageSizeFocused:.9,depthScaleMin:.92,depthScaleMax:1.08,offsetLerp:.08,parallaxLerp:.1,pointerPanScale:.002,wheelPanScale:.001,clickThreshold:15,clickTimeout:250,dragExitThreshold:50,dragZoomMax:.2,dragZoomDistance:200,focusEnterDuration:.5,focusExitDuration:.4,mousePressedDuration:.3,dragZoomDuration:.3,navSearchRadius:24,crt:Object.freeze({scanlineIntensity:.46,scanlineCount:663,brightness:1.32,contrast:1.06,saturation:1.2,bloomIntensity:.23,bloomThreshold:.35,rgbShift:0,adaptiveIntensity:1,vignetteStrength:0,curvature:.65,flickerStrength:0})}),xg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$R=`
  uniform vec2 uResolution;
  uniform float uGridSize;
  uniform float uMousePressed;
  uniform float uZoom;
  uniform float uDistortion;
  uniform vec2 uOffset;
  uniform float uLineThickness;
  uniform float uFocusState;
  uniform vec2 uMouseParallax;
  varying vec2 vUv;

  void main() {
    vec2 screenUV = (vUv - 0.5) * 2.0;
    screenUV /= uZoom;

    float radius = length(screenUV);
    float effectiveDistortion = mix(uDistortion, 0.0, uMousePressed);
    float distortion = 1.0 - effectiveDistortion * radius * radius;
    vec2 distortedUV = screenUV * distortion;

    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 parallaxOffset = uMouseParallax * 0.5 * (1.0 - uFocusState);
    vec2 gridCoord = (distortedUV * aspectRatio + uOffset + parallaxOffset) / uGridSize;
    vec2 gridCell = fract(gridCoord);

    float lineWidth = uLineThickness;
    float distX = min(gridCell.x, 1.0 - gridCell.x);
    float distY = min(gridCell.y, 1.0 - gridCell.y);
    float lines = step(lineWidth, distX) * step(lineWidth, distY);
    float gridLine = 1.0 - lines;

    vec3 gridColor = vec3(0.5);
    float opacity = gridLine * 0.5 * mix(1.0, 0.15, uFocusState);
    gl_FragColor = vec4(gridColor, opacity);
  }
`;function ZR(r){return`
    uniform vec2 uResolution;
    uniform float uDistortion;
    uniform sampler2D uImageAtlas;
    uniform float uTextureCount;
    uniform vec2 uOffset;
    uniform float uCellSize;
    uniform float uCellSpacing;
    uniform vec2 uFocusCell;
    uniform float uFocusState;
    uniform float uMousePressed;
    uniform float uZoom;
    uniform vec2 uMouseParallax;
    uniform float uAspectRatios[${r}];
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 screenUV = (vUv - 0.5) * 2.0;
      screenUV /= uZoom;

      float radius = length(screenUV);
      float effectiveDistortion = mix(uDistortion, 0.0, uMousePressed);
      float distortion = 1.0 - effectiveDistortion * radius * radius;
      vec2 distortedUV = screenUV * distortion;

      vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
      float gridCellSize = uCellSize * uCellSpacing;

      vec2 preCellPos = (distortedUV * aspectRatio + uOffset) / gridCellSize;
      vec2 cellId = floor(preCellPos);
      float depth = mix(${me.depthMin.toFixed(1)}, ${me.depthMax.toFixed(1)}, random(cellId + vec2(500.0, 0.0)));

      vec2 parallaxOffset = uMouseParallax * depth * (1.0 - uFocusState);
      vec2 worldCoord = (distortedUV * aspectRatio) + uOffset + parallaxOffset;

      vec2 cellPos = worldCoord / gridCellSize;
      cellId = floor(cellPos);
      vec2 cellUV = fract(cellPos);

      float texIndex = mod(cellId.x + cellId.y * 3.0, uTextureCount);
      if (texIndex < 0.0) texIndex += uTextureCount;

      bool isFocused = (abs(cellId.x - uFocusCell.x) < 0.1) && (abs(cellId.y - uFocusCell.y) < 0.1);

      vec3 color = vec3(0.0);
      float outAlpha = 0.0;

      float sizeRand = random(cellId + vec2(200.0, 0.0));
      float baseImageSize = ${me.imageSizeMin.toFixed(2)} + sizeRand * ${(me.imageSizeMax-me.imageSizeMin).toFixed(2)};
      float depthScale = mix(${me.depthScaleMin.toFixed(2)}, ${me.depthScaleMax.toFixed(2)}, clamp((depth - ${me.depthMin.toFixed(1)}) / ${(me.depthMax-me.depthMin).toFixed(1)}, 0.0, 1.0));
      baseImageSize *= depthScale;
      float targetImageSize = isFocused ? ${me.imageSizeFocused.toFixed(2)} : baseImageSize;
      float imageSize = mix(baseImageSize, targetImageSize, uFocusState);

      float imageBorder = (1.0 - imageSize) * 0.5;
      vec2 imageUV = (cellUV - imageBorder) / imageSize;

      float naturalAspect = uAspectRatios[int(texIndex)];
      if (naturalAspect > 1.0) {
        imageUV.x = (imageUV.x - 0.5) * naturalAspect + 0.5;
      } else {
        imageUV.y = (imageUV.y - 0.5) / naturalAspect + 0.5;
      }

      float edgeSmooth = 0.02;
      vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) *
                      smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
      float imageAlpha = imageMask.x * imageMask.y;

      bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0;
      if (inImageArea && imageAlpha > 0.0) {
        float atlasSize = ceil(sqrt(uTextureCount));
        vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));

        float caStrength = 0.012 * pow(radius, 2.0);
        vec2 caOffset = screenUV * caStrength;

        vec2 imageUVR = imageUV - caOffset;
        vec2 imageUVG = imageUV;
        vec2 imageUVB = imageUV + caOffset;

        vec2 atlasUVR = (atlasPos + clamp(imageUVR, 0.0, 1.0)) / atlasSize;
        vec2 atlasUVG = (atlasPos + imageUVG) / atlasSize;
        vec2 atlasUVB = (atlasPos + clamp(imageUVB, 0.0, 1.0)) / atlasSize;

        atlasUVR.y = 1.0 - atlasUVR.y;
        atlasUVG.y = 1.0 - atlasUVG.y;
        atlasUVB.y = 1.0 - atlasUVB.y;

        float r = texture2D(uImageAtlas, atlasUVR).r;
        float g = texture2D(uImageAtlas, atlasUVG).g;
        float b = texture2D(uImageAtlas, atlasUVB).b;
        float a = texture2D(uImageAtlas, atlasUVG).a;

        vec3 finalImageColor = vec3(r, g, b);
        if (!isFocused) {
          finalImageColor *= mix(1.0, 0.15, uFocusState);
        }

        color = finalImageColor;
        outAlpha = imageAlpha * a;
      }

      float fade = 1.0 - smoothstep(1.0, 1.6, radius);
      outAlpha *= fade;
      gl_FragColor = vec4(color * fade, outAlpha);
    }
  `}const A={running:!1,initToken:0,rafId:null,container:null,renderer:null,camera:null,scene:null,postScene:null,gridMesh:null,imageMesh:null,postMesh:null,renderTarget:null,eventTarget:null,sourceTextures:[],atlasTexture:null,aspectRatios:[],offset:{x:0,y:0},targetOffset:{x:0,y:0},isDragging:!1,clickStartTime:0,dragDistance:0,previousPointer:{x:0,y:0},dragStart:{x:0,y:0},focusedIndex:-1,focusCell:{x:-9999,y:-9999},focusState:{value:0},dragZoom:{value:1},mousePressed:{value:0},mouseTarget:{x:0,y:0},mouseParallax:{x:0,y:0},handlers:{},dom:{overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null}};function JR(r){return r-Math.floor(r)}function yg(r,e){return JR(Math.sin(r*12.9898+e*78.233)*43758.5453123)}function _v(r,e){const t=Xi.length;return((r+e*3)%t+t)%t}function vv(){const r=A.container?.clientWidth||window.innerWidth,e=A.container?.clientHeight||window.innerHeight;return{width:r,height:e}}function Ph(r){if(r){for(const e of Object.keys(r)){const t=r[e];t&&typeof t.dispose=="function"&&t.dispose()}r.dispose?.()}}async function QR(r){const e=new dd,t=[],n=new Array(r.length).fill(1);return await Promise.all(r.map((i,s)=>new Promise(o=>{e.load(i.image,a=>{a.wrapS=Bn,a.wrapT=Bn,a.minFilter=zt,a.magFilter=zt,a.colorSpace=hn,t[s]=a;const l=a.image?.width||1,c=a.image?.height||1;n[s]=l/c,o()},void 0,()=>{t[s]=null,n[s]=1,o()})}))),{textures:t,ratios:n}}function eC(r){const e=r.length,t=Math.ceil(Math.sqrt(e)),n=512,i=document.createElement("canvas");i.width=t*n,i.height=t*n;const s=i.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,i.width,i.height),r.forEach((a,l)=>{if(!a?.image)return;const c=l%t*n,u=Math.floor(l/t)*n,h=a.image,f=(h.width||1)/(h.height||1);let d=n,_=n,g=c,p=u;f>1?(d=n*f,g=c-(d-n)*.5):(_=n/f,p=u-(_-n)*.5),s.drawImage(h,g,p,d,_)});const o=new PA(i);return o.wrapS=Bn,o.wrapT=Bn,o.minFilter=zt,o.magFilter=zt,o.colorSpace=hn,o.flipY=!1,o}function tC(){A.dom.overlay=document.getElementById("archive-overlay"),A.dom.panel=document.querySelector(".archive-focus-panel"),A.dom.title=document.querySelector(".archive-focus-title"),A.dom.year=document.querySelector(".archive-focus-year"),A.dom.description=document.querySelector(".archive-focus-description"),A.dom.category=document.querySelector(".archive-focus-category"),A.dom.prev=document.getElementById("archive-prev"),A.dom.next=document.getElementById("archive-next"),A.dom.close=document.querySelector(".archive-close-btn")}function nC(){A.dom.overlay&&A.dom.overlay.classList.add("active"),document.body.classList.add("archive-focus-open")}function xd(){A.dom.overlay&&A.dom.overlay.classList.remove("active"),document.body.classList.remove("archive-focus-open")}function iC(r){const e=Xi[r];e&&(A.dom.title&&(A.dom.title.textContent!==e.title&&Ee.fromTo(A.dom.title,{y:10,opacity:0},{y:0,opacity:1,duration:.25,ease:"power2.out"}),A.dom.title.textContent=e.title),A.dom.year&&(A.dom.year.textContent=e.year||""),A.dom.description&&(A.dom.description.textContent=e.description||""),A.dom.category&&(A.dom.category.textContent=e.category||""),nC())}function xv(r,e){const t=A.imageMesh?.material?.uniforms;t?.uFocusCell?.value&&t.uFocusCell.value.set(r,e)}function rC(r,e,t){const n=me.navSearchRadius,i=Math.round(e),s=Math.round(t);let o={x:i,y:s},a=Number.POSITIVE_INFINITY;for(let l=i-n;l<=i+n;l+=1)for(let c=s-n;c<=s+n;c+=1){if(_v(l,c)!==r)continue;const u=(l-e)*(l-e)+(c-t)*(c-t);u<a&&(a=u,o={x:l,y:c})}return o}function wf(r,e,t){if(r<0||r>=Xi.length||A.focusedIndex===r&&A.focusCell.x===e&&A.focusCell.y===t)return;A.focusedIndex=r,A.focusCell.x=e,A.focusCell.y=t;const n=me.cellSize*me.cellSpacing;A.targetOffset.x=(e+.5)*n,A.targetOffset.y=(t+.5)*n,xv(e,t),iC(r),Ee.to(A.focusState,{value:1,duration:me.focusEnterDuration,ease:"power2.out",overwrite:!0}),Ee.to(A.dragZoom,{value:1.1,duration:me.focusEnterDuration,ease:"power2.out",overwrite:!0})}function Pr(){A.focusedIndex!==-1&&(A.focusedIndex=-1,A.focusCell.x=-9999,A.focusCell.y=-9999,xv(-9999,-9999),xd(),Ee.to(A.focusState,{value:0,duration:me.focusExitDuration,ease:"power2.out",overwrite:!0}),Ee.to(A.dragZoom,{value:1,duration:me.focusExitDuration,ease:"power2.out",overwrite:!0}))}function vc(r){if(A.focusedIndex===-1)return;let e=A.focusedIndex+r;e>=Xi.length&&(e=0),e<0&&(e=Xi.length-1);const t=rC(e,A.focusCell.x,A.focusCell.y);wf(e,t.x,t.y)}function sC(r,e){const t=A.renderer,n=A.imageMesh?.material?.uniforms;if(!t||!n||Xi.length===0)return null;const i=t.domElement.getBoundingClientRect();if(!i.width||!i.height)return null;let s=(r-i.left)/i.width*2-1,o=-((e-i.top)/i.height*2-1);s/=A.dragZoom.value,o/=A.dragZoom.value;const a=Math.sqrt(s*s+o*o),c=1-me.distortion*(1-A.mousePressed.value)*a*a,u=s*c,h=o*c,f=i.width/i.height,d=me.cellSize*me.cellSpacing,_=Math.floor((u*f+A.offset.x)/d),g=Math.floor((h+A.offset.y)/d),p=me.depthMin+yg(_+500,g)*(me.depthMax-me.depthMin),m=1-A.focusState.value,M=u*f+A.offset.x+A.mouseParallax.x*p*m,v=h+A.offset.y+A.mouseParallax.y*p*m,S=Math.floor(M/d),R=Math.floor(v/d),b=M/d-S,w=v/d-R,I=_v(S,R),x=n.uAspectRatios.value[I]||1,O=yg(S+200,R);let U=me.imageSizeMin+O*(me.imageSizeMax-me.imageSizeMin);const D=Math.min(Math.max((p-me.depthMin)/(me.depthMax-me.depthMin),0),1),F=me.depthScaleMin+D*(me.depthScaleMax-me.depthScaleMin);U*=F;const j=S===A.focusCell.x&&R===A.focusCell.y?me.imageSizeFocused:U,$=U+(j-U)*A.focusState.value,z=(1-$)*.5;let X=(b-z)/$,L=(w-z)/$;x>1?X=(X-.5)*x+.5:L=(L-.5)/x+.5;const re=X>=0&&X<=1&&L>=0&&L<=1;return{cellX:S,cellY:R,texIndex:I,isOnImage:re}}function oC(r){return!!(r?.closest(".nav-wrap")||r?.closest(".archive-nav-btn")||r?.closest(".archive-close-btn")||r?.closest(".menu-wrap")||r?.closest(".menu-box")||r?.closest(".bottom-nav-wrap")||r?.closest(".archive-focus-panel"))}function aC(){const r=A.renderer?.domElement,e=A.container||r;!r||!e||(A.eventTarget=e,A.handlers.onPointerDown=t=>{t.button!==void 0&&t.button!==0||oC(t.target)||(A.isDragging=!0,A.clickStartTime=Date.now(),A.dragDistance=0,A.previousPointer.x=t.clientX,A.previousPointer.y=t.clientY,A.dragStart.x=t.clientX,A.dragStart.y=t.clientY,r.style&&(r.style.cursor="grabbing"),Ee.to(A.mousePressed,{value:1,duration:me.mousePressedDuration,ease:"power2.out",overwrite:!0}))},A.handlers.onPointerMove=t=>{if(!A.isDragging){const s=r.getBoundingClientRect(),o=(t.clientX-s.left)/s.width-.5,a=(t.clientY-s.top)/s.height-.5;A.mouseTarget.x=-o*.05,A.mouseTarget.y=a*.05;return}const n=t.clientX-A.previousPointer.x,i=t.clientY-A.previousPointer.y;if(A.dragDistance+=Math.sqrt(n*n+i*i),A.dragDistance>me.clickThreshold){const s=Math.min(A.dragDistance/me.dragZoomDistance,1);A.dragZoom.value=1-s*me.dragZoomMax,A.focusedIndex!==-1&&A.dragDistance>me.dragExitThreshold&&Pr()}A.targetOffset.x-=n*me.pointerPanScale,A.targetOffset.y+=i*me.pointerPanScale,A.previousPointer.x=t.clientX,A.previousPointer.y=t.clientY},A.handlers.onPointerUp=t=>{if(!A.isDragging)return;if(A.isDragging=!1,r.style&&(r.style.cursor="grab"),Ee.to(A.mousePressed,{value:0,duration:me.focusExitDuration,ease:"power2.out",overwrite:!0}),Date.now()-A.clickStartTime<me.clickTimeout&&A.dragDistance<me.clickThreshold){const s=sC(t.clientX,t.clientY);s?A.focusedIndex===-1?s.isOnImage&&wf(s.texIndex,s.cellX,s.cellY):s.isOnImage?s.texIndex===A.focusedIndex&&s.cellX===A.focusCell.x&&s.cellY===A.focusCell.y?Pr():wf(s.texIndex,s.cellX,s.cellY):Pr():A.focusedIndex!==-1&&Pr()}else Ee.to(A.dragZoom,{value:A.focusedIndex===-1?1:1.1,duration:me.dragZoomDuration,ease:"power2.out",overwrite:!0});A.dragDistance=0},A.handlers.onWheel=t=>{e!==r&&!e.contains(t.target)||(t.preventDefault(),A.targetOffset.x+=t.deltaX*me.wheelPanScale,A.targetOffset.y-=t.deltaY*me.wheelPanScale,A.focusedIndex!==-1&&(Math.abs(t.deltaX)>10||Math.abs(t.deltaY)>10)&&Pr())},A.handlers.onKeyDown=t=>{A.focusedIndex!==-1&&(t.key==="ArrowRight"?(t.preventDefault(),vc(1)):t.key==="ArrowLeft"?(t.preventDefault(),vc(-1)):t.key==="Escape"&&(t.preventDefault(),Pr()))},A.handlers.onTouchStart=t=>{if(t.touches.length!==1)return;const n=t.touches[0];A.handlers.onPointerDown({clientX:n.clientX,clientY:n.clientY,target:t.target,button:0})},A.handlers.onTouchMove=t=>{if(t.touches.length!==1)return;const n=t.touches[0];A.handlers.onPointerMove({clientX:n.clientX,clientY:n.clientY})},A.handlers.onTouchEnd=t=>{if(t.changedTouches.length!==1)return;const n=t.changedTouches[0];A.handlers.onPointerUp({clientX:n.clientX,clientY:n.clientY})},A.handlers.onResize=()=>{if(!A.renderer||!A.container)return;const{width:t,height:n}=vv(),i=Math.min(window.devicePixelRatio||1,2);A.renderer.setSize(t,n),A.renderer.setPixelRatio(i),A.renderTarget?.setSize(t*i,n*i);const s=A.gridMesh?.material?.uniforms,o=A.imageMesh?.material?.uniforms;s?.uResolution?.value&&s.uResolution.value.set(t,n),o?.uResolution?.value&&o.uResolution.value.set(t,n)},A.handlers.onPrevClick=t=>{t.preventDefault(),t.stopPropagation(),vc(-1)},A.handlers.onNextClick=t=>{t.preventDefault(),t.stopPropagation(),vc(1)},A.handlers.onCloseClick=t=>{t.preventDefault(),t.stopPropagation(),Pr()},A.handlers.onOverlayClick=t=>{!t.target.closest(".archive-focus-panel")&&!t.target.closest(".archive-nav-btn")&&Pr()},e.addEventListener("pointerdown",A.handlers.onPointerDown),window.addEventListener("pointermove",A.handlers.onPointerMove),window.addEventListener("pointerup",A.handlers.onPointerUp),e.addEventListener("wheel",A.handlers.onWheel,{passive:!1}),window.addEventListener("keydown",A.handlers.onKeyDown),e.addEventListener("touchstart",A.handlers.onTouchStart,{passive:!0}),e.addEventListener("touchmove",A.handlers.onTouchMove,{passive:!0}),e.addEventListener("touchend",A.handlers.onTouchEnd,{passive:!0}),window.addEventListener("resize",A.handlers.onResize),A.dom.prev?.addEventListener("click",A.handlers.onPrevClick),A.dom.next?.addEventListener("click",A.handlers.onNextClick),A.dom.close?.addEventListener("click",A.handlers.onCloseClick),A.dom.overlay?.addEventListener("click",A.handlers.onOverlayClick))}function lC(){const r=A.eventTarget||A.renderer?.domElement;r&&A.handlers.onPointerDown&&(r.removeEventListener("pointerdown",A.handlers.onPointerDown),r.removeEventListener("wheel",A.handlers.onWheel),r.removeEventListener("touchstart",A.handlers.onTouchStart),r.removeEventListener("touchmove",A.handlers.onTouchMove),r.removeEventListener("touchend",A.handlers.onTouchEnd)),window.removeEventListener("pointermove",A.handlers.onPointerMove),window.removeEventListener("pointerup",A.handlers.onPointerUp),window.removeEventListener("keydown",A.handlers.onKeyDown),window.removeEventListener("resize",A.handlers.onResize),A.dom.prev?.removeEventListener("click",A.handlers.onPrevClick),A.dom.next?.removeEventListener("click",A.handlers.onNextClick),A.dom.close?.removeEventListener("click",A.handlers.onCloseClick),A.dom.overlay?.removeEventListener("click",A.handlers.onOverlayClick),A.eventTarget=null,A.handlers={}}function yv(){if(!A.running||!A.renderer)return;A.offset.x+=(A.targetOffset.x-A.offset.x)*me.offsetLerp,A.offset.y+=(A.targetOffset.y-A.offset.y)*me.offsetLerp,A.mouseParallax.x+=(A.mouseTarget.x-A.mouseParallax.x)*me.parallaxLerp,A.mouseParallax.y+=(A.mouseTarget.y-A.mouseParallax.y)*me.parallaxLerp;const r=performance.now()*.001,e=A.imageMesh?.material?.uniforms,t=A.gridMesh?.material?.uniforms;e&&(e.uOffset.value.set(A.offset.x,A.offset.y),e.uMousePressed.value=A.mousePressed.value,e.uZoom.value=A.dragZoom.value,e.uMouseParallax.value.set(A.mouseParallax.x,A.mouseParallax.y),e.uFocusState.value=A.focusState.value),t&&(t.uOffset.value.set(A.offset.x,A.offset.y),t.uMousePressed.value=A.mousePressed.value,t.uZoom.value=A.dragZoom.value,t.uMouseParallax.value.set(A.mouseParallax.x,A.mouseParallax.y),t.uFocusState.value=A.focusState.value),A.postMesh.material.uniforms.time.value=r,A.renderer.setRenderTarget(A.renderTarget),A.renderer.clear(),A.renderer.render(A.scene,A.camera),A.renderer.setRenderTarget(null),A.renderer.clear(),A.renderer.render(A.postScene,A.camera),A.rafId=requestAnimationFrame(yv)}async function cC(r){if(A.container=document.getElementById("gallery"),!A.container||Xi.length===0)return!1;const e=A.container.querySelector("canvas");e&&e.remove();const{width:t,height:n}=vv(),i=Math.min(window.devicePixelRatio||1,2);A.renderer=new q0({antialias:!0,alpha:!0,powerPreference:"high-performance"}),A.renderer.setSize(t,n),A.renderer.setPixelRatio(i),A.renderer.setClearColor(0,0),A.container.appendChild(A.renderer.domElement),A.container.style.pointerEvents="auto",A.renderer.domElement.style.pointerEvents="auto",A.renderer.domElement.style.touchAction="none",A.renderer.domElement.style.cursor="grab",A.scene=new iu,A.postScene=new iu,A.camera=new Pl(-1,1,1,-1,.1,10),A.camera.position.z=1;const{textures:s,ratios:o}=await QR(Xi);if(r!==A.initToken)return s.forEach(f=>f?.dispose?.()),!1;A.sourceTextures=s.filter(Boolean),A.aspectRatios=o,A.atlasTexture=eC(s);const a=new ns(2,2),l=new Yt({vertexShader:xg,fragmentShader:$R,uniforms:{uResolution:{value:new be(t,n)},uGridSize:{value:me.gridSize},uMousePressed:{value:0},uZoom:{value:1},uDistortion:{value:me.distortion},uOffset:{value:new be(0,0)},uLineThickness:{value:me.lineThickness},uFocusState:{value:0},uMouseParallax:{value:new be(0,0)}},transparent:!0,depthWrite:!1,depthTest:!1}),c=new Yt({vertexShader:xg,fragmentShader:ZR(Xi.length),uniforms:{uResolution:{value:new be(t,n)},uDistortion:{value:me.distortion},uImageAtlas:{value:A.atlasTexture},uTextureCount:{value:Xi.length},uOffset:{value:new be(0,0)},uCellSize:{value:me.cellSize},uCellSpacing:{value:me.cellSpacing},uFocusCell:{value:new be(-9999,-9999)},uFocusState:{value:0},uMousePressed:{value:0},uZoom:{value:1},uMouseParallax:{value:new be(0,0)},uAspectRatios:{value:A.aspectRatios}},transparent:!0,depthWrite:!1});A.gridMesh=new en(a,l),A.gridMesh.position.z=-.5,A.imageMesh=new en(a.clone(),c),A.scene.add(A.gridMesh),A.scene.add(A.imageMesh),A.renderTarget=new xi(t*i,n*i,{format:_i,type:_r,minFilter:zt,magFilter:zt,depthBuffer:!1});const u={...ta.clone(Ch.uniforms),tDiffuse:{value:A.renderTarget.texture},scanlineIntensity:{value:me.crt.scanlineIntensity},scanlineCount:{value:me.crt.scanlineCount},brightness:{value:me.crt.brightness},contrast:{value:me.crt.contrast},saturation:{value:me.crt.saturation},bloomIntensity:{value:me.crt.bloomIntensity},bloomThreshold:{value:me.crt.bloomThreshold},rgbShift:{value:me.crt.rgbShift},adaptiveIntensity:{value:me.crt.adaptiveIntensity},vignetteStrength:{value:me.crt.vignetteStrength},curvature:{value:me.crt.curvature},flickerStrength:{value:me.crt.flickerStrength},time:{value:0},yOffset:{value:0}},h=new Yt({vertexShader:Ch.vertexShader,fragmentShader:Ch.fragmentShader,uniforms:u,transparent:!1,depthWrite:!1,depthTest:!1});return A.postMesh=new en(new ns(2,2),h),A.postScene.add(A.postMesh),!0}function Sv(){A.offset.x=0,A.offset.y=0,A.targetOffset.x=0,A.targetOffset.y=0,A.isDragging=!1,A.clickStartTime=0,A.dragDistance=0,A.previousPointer.x=0,A.previousPointer.y=0,A.dragStart.x=0,A.dragStart.y=0,A.focusedIndex=-1,A.focusCell.x=-9999,A.focusCell.y=-9999,A.focusState.value=0,A.dragZoom.value=1,A.mousePressed.value=0,A.mouseTarget.x=0,A.mouseTarget.y=0,A.mouseParallax.x=0,A.mouseParallax.y=0}async function Sg(){if(A.running)return;Sv(),tC(),xd();const r=A.initToken+1;A.initToken=r,!(!await cC(r)||r!==A.initToken)&&(A.running=!0,aC(),yv())}function Oa(){A.initToken+=1,A.running=!1,A.rafId&&(cancelAnimationFrame(A.rafId),A.rafId=null),lC(),xd(),Ee.killTweensOf(A.focusState),Ee.killTweensOf(A.dragZoom),Ee.killTweensOf(A.mousePressed),A.gridMesh&&(A.scene?.remove(A.gridMesh),Ph(A.gridMesh.material),A.gridMesh.geometry?.dispose?.(),A.gridMesh=null),A.imageMesh&&(A.scene?.remove(A.imageMesh),Ph(A.imageMesh.material),A.imageMesh.geometry?.dispose?.(),A.imageMesh=null),A.postMesh&&(A.postScene?.remove(A.postMesh),Ph(A.postMesh.material),A.postMesh.geometry?.dispose?.(),A.postMesh=null),A.renderTarget?.dispose?.(),A.renderTarget=null,A.atlasTexture?.dispose?.(),A.atlasTexture=null,A.sourceTextures.forEach(r=>r?.dispose?.()),A.sourceTextures=[],A.aspectRatios=[],A.renderer&&(A.renderer.dispose(),A.renderer.domElement?.parentNode&&A.renderer.domElement.parentNode.removeChild(A.renderer.domElement)),A.renderer=null,A.camera=null,A.scene=null,A.postScene=null,A.eventTarget=null,A.container&&(A.container.style.pointerEvents=""),A.container=null,A.dom={overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},Sv()}Ee.registerPlugin(it,es);const Uc=new Map,Nc=[],Co=[];function uC(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Fa(r,e={type:"lines, words, chars"}){if(!r)return null;if(Uc.has(r))return Uc.get(r);const t=new es(r,{type:e.type||"lines, words, chars",reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],h=l[c];u.parentNode.insertBefore(h,u),h.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Uc.set(r,t),Nc.push(t),t}function hC(r,{direction:e="up",duration:t=.8,stagger:n=.03,ease:i="power2.out"}={}){const s=Fa(r);if(!s)return null;const o=e==="down"?100:-100;return Ee.fromTo(s.words,{y:o,opacity:0},{y:0,opacity:1,duration:t,stagger:n,ease:i})}async function Oc(r){if(!r)return;const e=r.querySelectorAll(".text-reveal-header:not(.has-3d-text)");if(!e.length)return;const t=Array.from(e);t.length&&Ee.set(t,{clearProps:"all"});const n=[];for(let i=0;i<e.length;i++){const s=e[i],a=s.classList.contains("text-reveal-reverse")?"down":"up",l=hC(s,{direction:a,duration:.8,stagger:.04});l&&n.push(uC(l))}n.length&&await Promise.all(n)}function fC(){bf();const r=document.querySelectorAll(".text-reveal"),e=document.querySelectorAll(".text-reveal-reverse"),t=document.querySelectorAll(".text-reveal-header:not(.contact-contain .text-reveal-header)"),n=document.querySelectorAll(".body-text-reveal:not(.hero-text-reveal)");for(let i=0;i<r.length;i++){const s=r[i],o=Fa(s);if(!o?.words?.length)continue;const a=Ee.fromTo(o.words,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Co.push(a.scrollTrigger)}for(let i=0;i<e.length;i++){const s=e[i],o=Fa(s);if(!o?.words?.length)continue;const a=Ee.fromTo(o.words,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Co.push(a.scrollTrigger)}for(let i=0;i<t.length;i++){const s=t[i],o=Fa(s);if(!o?.words?.length)continue;const l=s.classList.contains("text-reveal-reverse")?100:-100,c=Ee.fromTo(o.words,{y:l,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});c.scrollTrigger&&Co.push(c.scrollTrigger)}for(let i=0;i<n.length;i++){const s=n[i],o=Fa(s,{type:"lines"});if(!o?.lines?.length)continue;Ee.set(o.lines,{yPercent:100,opacity:0});const a=Ee.to(o.lines,{yPercent:0,opacity:1,duration:1,stagger:.1,ease:"power4.out",scrollTrigger:{trigger:s,start:"top 90%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Co.push(a.scrollTrigger)}}function bf(){for(;Co.length;){const r=Co.pop();r&&r.kill()}}function Mg(){for(let r=Nc.length-1;r>=0;r--){const e=Nc[r];e&&typeof e.revert=="function"&&e.revert()}Nc.length=0,Uc.clear()}Ee.registerPlugin(it);function dC(){}function pC(){window.removeEventListener("resize",dC)}function Fc(){pC()}Ee.registerPlugin(es);const xc={duration:.5,ease:"power2.inOut",stagger:.02},Tg="50% 50% -10px",Eg=new WeakMap;function mC(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||Eg.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),Ee.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=wg(i,!1),o=wg(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new es(s,{type:"chars"}),l=new es(o,{type:"chars"});Ee.set(a.chars,{rotationX:0,opacity:1,transformOrigin:Tg,backfaceVisibility:"hidden"}),Ee.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:Tg,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=bg(a.chars,l.chars,!0)},h=()=>{c?.kill(),c=bg(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",h),Eg.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:h})})}function wg(r,e){const t=document.createElement("span");return t.textContent=r,Ee.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function bg(r,e,t){const n=Ee.timeline();return t?n.to(r,{rotationX:90,opacity:0,...xc},0).to(e,{rotationX:0,opacity:1,...xc},0):n.to(r,{rotationX:0,opacity:1,...xc},0).to(e,{rotationX:-90,opacity:0,...xc},0),n}const cu=new WeakMap,gC=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function _C(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function vC(){if(gC())return;document.querySelectorAll(".btn").forEach(e=>{if(cu.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=_C();t.config=n,xC(t);let i=null;const s=()=>{i&&i.kill(),i=Ag(t,!0)},o=()=>{i&&i.kill(),i=Ag(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),cu.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function xC(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,Ee.set(e,{x:0,borderRadius:`${o}px`}),Ee.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),Ee.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function Ag(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,h=Ee.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?h.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):h.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),h}function yC(){document.querySelectorAll(".btn").forEach(e=>{const t=cu.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&Ee.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&Ee.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&Ee.set(t.elements.circleIcon,{clearProps:"all"}),cu.delete(e))})}function Lh(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function SC(){return null}function MC(r,e){const t=Ee.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&Ee.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function TC(){const r=document.querySelector(".link-main");r&&Ee.set(r,{autoAlpha:0})}function EC(){const r=document.querySelector(".link-main");r&&Ee.set(r,{autoAlpha:1,y:20,opacity:0})}function wC(){const r=document.querySelector(".link-main");return r?Ee.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let ka=null;const bC=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"});function Rg(){ka||(ka=document.getElementById("time")),ka&&(ka.textContent=`${bC.format(new Date)} IST`)}function AC(){ka=null,Rg(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(Rg,1e3)}function RC(r){return r==="home"||r==="contact"||r==="work"}function Ih(r,{skipWebglSetup:e=!1}={}){AC(),$y(),fC(),mC(),yC(),vC();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace,n=document.querySelector(".link-main");if(n&&(Ee.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&Ee.set(n,{clearProps:"transform,opacity"})),e){t==="archive"?(Ro(),Fc(),Dc(),Sg()):Oa();return}t==="work"?(Oa(),_g(),rl("work",!0),ou("work"),gv()):t==="archive"?(Ro(),Fc(),Dc(),Sg()):t==="home"||t==="contact"?(Oa(),Ro(),_g(),rl(t,!0),ou("home"),Oc(document.querySelector('[data-barba="container"]'))):(Oa(),Ro(),Fc(),Dc())}Kv.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;gg(),e==="work"||t==="work"?e==="work"&&Ro():e==="home"?await Lh(SC()):e==="contact"&&await Lh(MC(n,t)),bf(),Mg()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"?(ou(t==="work"?"work":"home"),rl(t,!0),t==="work"&&gv()):(t==="home"?(TC(),rl("home")):t==="contact"&&(EC(),rl("contact")),Oc(n))},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(Ih(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&Ee.set(n,{autoAlpha:0})}else t==="contact"&&await Lh(wC())}},{name:"default",async leave(r){const e=r?.current?.namespace;e==="work"&&Ro(),e==="archive"&&Oa(),gg(),RC(e)&&(Fc(),Dc()),bf(),Mg()},async enter(){},async once(r){Ih(r?.next?.namespace);const e=r?.next?.namespace,t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&Ee.set(n,{autoAlpha:0}),Oc(t)}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(Ee.set(n,{autoAlpha:1,y:20,opacity:0}),await Ee.to(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2})),Oc(t)}}},async after(r){const e=r?.next?.namespace;if(e&&Ih(e),e==="contact"){const t=document.querySelector(".link-main");t&&(Ee.set(t,{autoAlpha:1,y:20,opacity:0}),await Ee.to(t,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}}}]});export{PC as D,Wi as F,tv as G,$r as H,zt as L,CC as a,ag as t};
