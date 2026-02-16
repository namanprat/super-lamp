(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function bv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function If(r,e,t){return e&&bv(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Xi(){return Xi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Xi.apply(this,arguments)}function pu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ol(r,e)}function Bh(r){return Bh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Bh(r)}function ol(r,e){return ol=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ol(r,e)}function Av(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zh(r,e,t){return zh=Av()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&ol(a,s.prototype),a},zh.apply(null,arguments)}function Hh(r){var e=typeof Map=="function"?new Map:void 0;return Hh=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return zh(t,arguments,Bh(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ol(n,t)},Hh(r)}function Rv(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Ur,Cv=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Ur||(Ur={}));var Dd=Ur.off,Es=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Dd},r.setLevel=function(t){return Dd=Ur[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Ur.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Ur.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Ur.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Ur.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Zs(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Id(r){return r&&r.sensitive?"":"i"}var ji={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},bs=new((function(){function r(){this.o=ji,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),Pv=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Xi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Xi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=ji.prefix+"-"+ji.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},If(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),Bg=new Pv,zc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=bs.toElement(n.html);i.namespace=bs.getNamespace(s),i.container=bs.getContainer(s),i.url=n.url,i.html=n.html,Bg.update({ns:i.namespace});var o=bs.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},zg=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Id(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,f=c.start,d=f===void 0||f,_=c.end,g=_===void 0||_,p=c.encode,m=p===void 0?function(V){return V}:p,M=c.delimiter,x=M===void 0?"/#?":M,S=c.endsWith,R="[".concat(Zs(S===void 0?"":S),"]|$"),A="[".concat(Zs(x),"]"),w=d?"^":"",P=0,y=a;P<y.length;P++){var v=y[P];if(typeof v=="string")w+=Zs(m(v));else{var O=Zs(m(v.prefix)),N=Zs(m(v.suffix));if(v.pattern)if(l&&l.push(v),O||N)if(v.modifier==="+"||v.modifier==="*"){var I=v.modifier==="*"?"?":"";w+="(?:".concat(O,"((?:").concat(v.pattern,")(?:").concat(N).concat(O,"(?:").concat(v.pattern,"))*)").concat(N,")").concat(I)}else w+="(?:".concat(O,"(").concat(v.pattern,")").concat(N,")").concat(v.modifier);else w+=v.modifier==="+"||v.modifier==="*"?"((?:".concat(v.pattern,")").concat(v.modifier,")"):"(".concat(v.pattern,")").concat(v.modifier);else w+="(?:".concat(O).concat(N,")").concat(v.modifier)}}if(g)h||(w+="".concat(A,"?")),w+=c.endsWith?"(?=".concat(R,")"):"$";else{var F=a[a.length-1],B=typeof F=="string"?A.indexOf(F[F.length-1])>-1:F===void 0;h||(w+="(?:".concat(A,"(?=").concat(R,"))?")),B||(w+="(?=".concat(A,"|").concat(R,")"))}return new RegExp(w,Id(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(N){for(var I=[],F=0;F<N.length;){var B=N[F];if(B!=="*"&&B!=="+"&&B!=="?")if(B!=="\\")if(B!=="{")if(B!=="}")if(B!==":")if(B!=="(")I.push({type:"CHAR",index:F,value:N[F++]});else{var V=1,X="";if(N[j=F+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(j));for(;j<N.length;)if(N[j]!=="\\"){if(N[j]===")"){if(--V==0){j++;break}}else if(N[j]==="("&&(V++,N[j+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(j));X+=N[j++]}else X+=N[j++]+N[j++];if(V)throw new TypeError("Unbalanced pattern at ".concat(F));if(!X)throw new TypeError("Missing pattern at ".concat(F));I.push({type:"PATTERN",index:F,value:X}),F=j}else{for(var H="",j=F+1;j<N.length;){var D=N.charCodeAt(j);if(!(D>=48&&D<=57||D>=65&&D<=90||D>=97&&D<=122||D===95))break;H+=N[j++]}if(!H)throw new TypeError("Missing parameter name at ".concat(F));I.push({type:"NAME",index:F,value:H}),F=j}else I.push({type:"CLOSE",index:F,value:N[F++]});else I.push({type:"OPEN",index:F,value:N[F++]});else I.push({type:"ESCAPED_CHAR",index:F++,value:N[F++]});else I.push({type:"MODIFIER",index:F,value:N[F++]})}return I.push({type:"END",index:F,value:""}),I})(a),u=l.prefixes,h=u===void 0?"./":u,f="[^".concat(Zs(l.delimiter||"/#?"),"]+?"),d=[],_=0,g=0,p="",m=function(N){if(g<c.length&&c[g].type===N)return c[g++].value},M=function(N){var I=m(N);if(I!==void 0)return I;var F=c[g],B=F.index;throw new TypeError("Unexpected ".concat(F.type," at ").concat(B,", expected ").concat(N))},x=function(){for(var N,I="";N=m("CHAR")||m("ESCAPED_CHAR");)I+=N;return I};g<c.length;){var S=m("CHAR"),R=m("NAME"),A=m("PATTERN");if(R||A)h.indexOf(P=S||"")===-1&&(p+=P,P=""),p&&(d.push(p),p=""),d.push({name:R||_++,prefix:P,suffix:"",pattern:A||f,modifier:m("MODIFIER")||""});else{var w=S||m("ESCAPED_CHAR");if(w)p+=w;else if(p&&(d.push(p),p=""),m("OPEN")){var P=x(),y=m("NAME")||"",v=m("PATTERN")||"",O=x();M("CLOSE"),d.push({name:y||(v?_++:""),pattern:y&&!v?f:v,prefix:P,suffix:O,modifier:m("MODIFIER")||""})}else M("END")}}return d})(i,o),s,o)})(e,t,n)},Lv={__proto__:null,update:zc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:zg},Hg=function(){return window.location.origin},al=function(r){return r===void 0&&(r=window.location.href),Or(r).port},Or=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(Hg(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Vg(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Vg=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Vh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},Dv={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:Hg,getPort:al,getPath:function(r){return r===void 0&&(r=window.location.href),Or(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Or(r).query):Or(r).query},getHash:function(r){return Or(r).hash},parse:Or,parseQuery:Vg,clean:Vh};function Iv(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Xi({href:l},Or(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function Nv(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function Eo(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(Nv(a)?a.then(s,o):s(a))});return i}}var Nr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new Es("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}pu(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return Eo(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Cv)),Gg=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return zg(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Or(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),Uv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}pu(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Xi({},this.T.get(n),i);return this.T.set(n,s),s},e})(Gg),Ov=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),Fv=function(){return!window.history.pushState},kv=function(r){return!r.el||!r.href},Bv=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},zv=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Hv=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Vv=function(r){var e=r.el;return e.port!==void 0&&al()!==al(e.href)},Gv=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Wv=function(r){return r.el.hasAttribute(ji.prefix+"-"+ji.prevent)},Xv=function(r){return!!r.el.closest("["+ji.prefix+"-"+ji.prevent+'="all"]')},qv=function(r){var e=r.href;return Vh(e)===Vh()&&al(e)===al()},Yv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}pu(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Fv),this.add("exists",kv),this.add("newTab",Bv),this.add("blank",zv),this.add("corsDomain",Hv),this.add("corsPort",Vv),this.add("download",Gv),this.add("preventSelf",Wv),this.add("preventAll",Xv),this.add("sameUrl",qv,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(Gg),Iu=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(Rv(i),e),i.name="BarbaError",i}return pu(e,r),e})(Hh(Error)),jv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new Es("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(f){return f.name&&f.name==="self"}:function(f){return!f.name||f.name!=="self"});var o=new Map,a=s.find(function(f){var d=!0,_={};return n.self&&f.name==="self"?(o.set(f,_),!0):(i.j.reverse().forEach(function(g){d&&(d=i.M(f,g,t,_),f.from&&f.to&&(d=i.M(f,g,t,_,"from")&&i.M(f,g,t,_,"to")),f.from&&!f.to&&(d=i.M(f,g,t,_,"from")),!f.from&&f.to&&(d=i.M(f,g,t,_,"to")))}),o.set(f,_),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,f=u,d=u,_=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var p=Array.isArray(_[h])?_[h]:[_[h]];g[h]&&p.indexOf(g[h])!==-1&&(l=!0),p.indexOf(g[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[f])?_[f]:[_[f]];g[f]?(g[f].name&&m.indexOf(g[f].name)!==-1&&(l=!0),m.indexOf(g[f].name)===-1&&(a=!1)):a=!1;break;case"function":_[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function da(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var $v=(function(){function r(t){t===void 0&&(t=[]),this.logger=new Es("@barba/core"),this.store=void 0,this.C=!1,this.store=new jv(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=da(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(f){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=da(function(){function f(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(p){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var g=(function(){if(u)return da(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(x){if(l.H(x))throw new Iu(x,"Transition error [sync]")});var p=function(x){return da(function(){var S=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(S&&S.then)return S.then(function(){})},function(S){if(l.H(S))throw new Iu(S,"Transition error [before/after/enter]")})},m=!1,M=da(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),zc(s,n)]).then(function(x){return x[0]})).then(function(x){return m=x,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(x){if(l.H(x))throw new Iu(x,"Transition error [before/after/leave]")});return M&&M.then?M.then(p):p()})();return g&&g.then?g.then(_):_()})}var d=(function(){if(u)return Promise.resolve(zc(s,n)).then(function(){})})();return d&&d.then?d.then(f):f()},function(f){throw l.C=!1,f.name&&f.name==="BarbaError"?(l.logger.debug(f.label),l.logger.error(f.error),f):(l.logger.debug("Transition error [page]"),l.logger.error(f),f)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(f){return Promise.reject(f)}},e.once=function(t,n){try{return Promise.resolve(Nr.do("once",t,n)).then(function(){return n.once?Eo(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Nr.do("leave",t,n)).then(function(){return n.leave?Eo(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Nr.do("enter",t,n)).then(function(){return n.enter?Eo(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return bs.addContainer(t.next.container,n),Nr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return bs.removeContainer(t.current.container),Nr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Nr.do(t,n,i)).then(function(){return i[t]?Eo(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},If(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),Kv=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Nr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Eo(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Zv={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Qv=new((function(){function r(){this.version="2.10.3",this.schemaPage=Zv,this.Logger=Es,this.logger=new Es("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Nr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=bs,this.helpers=Lv,this.history=Bg,this.request=Iv,this.url=Dv,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?ji:l,u=n.requestError,h=n.timeout,f=h===void 0?2e3:h,d=n.cacheIgnore,_=d!==void 0&&d,g=n.cacheFirstPage,p=g!==void 0&&g,m=n.prefetchIgnore,M=m!==void 0&&m,x=n.preventRunning,S=x!==void 0&&x,R=n.prevent,A=R===void 0?null:R,w=n.debug,P=n.logLevel;if(Es.setLevel((w!==void 0&&w)===!0?"debug":P===void 0?"off":P),this.logger.info(this.version),Object.keys(c).forEach(function(O){ji[O]&&(ji[O]=c[O])}),this.B=u,this.timeout=f,this.cacheIgnore=_,this.cacheFirstPage=p,this.prefetchIgnore=M,this.preventRunning=S,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var y=this.data.current;if(!y.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Uv(_),this.headers=new Ov,this.prevent=new Yv(M),this.transitions=new $v(s),this.views=new Kv(a),A!==null){if(typeof A!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",A)}this.history.init(y.url.href,y.namespace),p&&this.cache.set(y.url.href,Promise.resolve({html:y.html,url:y.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(O){return O.init()});var v=this.data;v.trigger="barba",v.next=v.current,v.current=Xi({},this.schemaPage),this.hooks.do("ready",v),this.once(v),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var f=(function(d,_){try{var g=(p=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:p,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var p;return g&&g.then?g.then(void 0,_):g})(0,function(){Es.getLevel()===0&&l.force(h.next.url.href)});if(f&&f.then)return f.then(function(){})})},l=this;if(l.data.next.url=Xi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(zc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Xi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Xi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},If(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function ur(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xo={duration:.5,overwrite:!1,delay:0},Nf,gn,Ot,yi=1e8,wt=1/yi,Gh=Math.PI*2,Jv=Gh/4,ex=0,Xg=Math.sqrt,tx=Math.cos,nx=Math.sin,fn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Mr=function(e){return typeof e=="number"},Uf=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Of=function(){return typeof window<"u"},Il=function(e){return Gt(e)||fn(e)},qg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,ix=/random\([^)]+\)/g,rx=/,\s*/g,Nd=/(?:-?\.?\d|\.)+/gi,Yg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jg=/[+-]=-?[.\d]+/,sx=/[^,'"\[\]\s]+/gi,ox=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,ki,Wh,Ff,li={},Hc={},$g,Kg=function(e){return(Hc=qo(e,li))&&Xn},kf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},Zg=function(e,t){return e&&(li[e]=t)&&Hc&&(Hc[e]=t)||li},cl=function(){return 0},ax={suppressEvents:!0,isStart:!0,kill:!1},Mc={suppressEvents:!0,kill:!1},lx={suppressEvents:!0},Bf={},Yr=[],Xh={},Qg,Qn={},Uu={},Ud=30,Tc=[],zf="",Hf=function(e){var t=e[0],n,i;if(Zi(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Tc.length;i--&&!Tc[i].targetTest(t););n=Tc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new M_(e[i],n)))||e.splice(i,1);return e},Ns=function(e){return e._gsap||Hf(Si(e))[0]._gsap},Jg=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():Uf(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Io=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vc=function(){var e=Yr.length,t=Yr.slice(0),n,i;for(Xh={},Yr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vf=function(e){return!!(e._initted||e._startAt||e.add)},e_=function(e,t,n,i){Yr.length&&!gn&&Vc(),e.render(t,n,!!(gn&&t<0&&Vf(e))),Yr.length&&!gn&&Vc()},t_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sx).length<2?t:fn(e)?e.trim():e},n_=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ux=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qo=function(e,t){for(var n in t)e[n]=t[n];return e},Od=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Gc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ba=function(e){var t=e.parent||Bt,n=e.keyframes?ux(En(e.keyframes)):ci;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},i_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},mu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Mc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},dx=function r(e){return!e||e._ts&&r(e.parent)},Fd=function(e){return e._repeat?Yo(e._tTime,e=e.duration()+e._rDelay)*e:0},Yo=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Wc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gu=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},_u=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gu(e),n._dirty||Us(n,e)),e},r_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wc(e.rawTime(),t),(!t._dur||Rl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Gi=function(e,t,n,i){return t.parent&&Qr(t),t._start=kt((Mr(n)?n:n||e!==Bt?pi(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),i_(e,t,"_first","_last",e._sort?"_start":0),Yh(t)||(e._recent=t),i||r_(e,t),e._ts<0&&_u(e,e._tTime),e},s_=function(e,t){return(li.ScrollTrigger||kf("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},o_=function(e,t,n,i,s){if(Wf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qg!==ti.frame)return Yr.push(e),e._lazy=[s,i],1},px=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Yh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&px(e)&&!(!e._initted&&Yh(e))||(e._ts<0||e._dp._ts<0)&&!Yh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Rl(0,e._tDur,t),u=Yo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Yo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&o_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&qh(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qr(e,1),!n&&!gn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},jo=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&_u(e,e._tTime=e._tDur*a),e.parent&&gu(e),n||Us(e.parent,e),e},kd=function(e){return e instanceof Un?Us(e):jo(e,e._dur)},_x={_start:0,endTime:cl,totalDuration:cl},pi=function r(e,t,n){var i=e.labels,s=e._recent||_x,o=e.duration()>=yi?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},za=function(e,t,n){var i=Mr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},is=function(e,t){return e||e===0?t(e):t},Rl=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!fn(e)||!(t=ox.exec(e))?"":t[1]},vx=function(e,t,n){return is(n,function(i){return Rl(e,t,i)})},jh=[].slice,a_=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==ki},xx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||a_(i,1)?(s=n).push.apply(s,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):fn(e)&&!n&&(Wh||!$o())?jh.call((t||Ff).querySelectorAll(e),0):En(e)?xx(e,n):a_(e)?jh.call(e,0):e?[e]:[]},$h=function(e){return e=Si(e)[0]||ll("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?ll("Invalid scope")||Ff.createElement("div"):e)}},l_=function(e){return e.sort(function(){return .5-Math.random()})},c_=function(e){if(Gt(e))return e;var t=Zi(e)?e:{each:e},n=Os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,x,S,R,A,w,P,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,yi])[1],!y){for(w=-yi;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,M=y===yi?0:l?g*h/y-.5:i/y|0,w=0,P=yi,A=0;A<g;A++)x=A%y-m,S=M-(A/y|0),p[A]=R=c?Math.abs(c==="y"?S:x):Xg(x*x+S*S),R>w&&(w=R),R<P&&(P=R);i==="random"&&l_(p),p.max=w-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Tn(t.amount||t.each)||0,n=n&&g<0?x_(n):n}return g=(p[f]-p.min)/p.max||0,kt(p.b+(n?n(g):g)*p.v)+p.u}},Kh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Mr(n)?0:Tn(n))}},u_=function(e,t){var n=En(e),i,s;return!n&&Zi(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(s=!Mr(e[0]))&&(i*=i)):e=Kh(e.increment)),is(t,n?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=yi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Mr(o)?u:u+Tn(o)}:Kh(e))},h_=function(e,t,n,i){return is(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Sx=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},Mx=function(e,t,n){return d_(e,t,0,1,n)},f_=function(e,t,n){return is(n,function(i){return e[~~t(i)]})},Tx=function r(e,t,n){var i=t-e;return En(e)?f_(e,r(0,e.length),t):is(n,function(s){return(i+(s-e)%i)%i+e})},wx=function r(e,t,n){var i=t-e,s=i*2;return En(e)?f_(e,r(0,e.length-1),t):is(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ul=function(e){return e.replace(ix,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(rx);return h_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},d_=function(e,t,n,i,s){var o=t-e,a=i-n;return is(s,function(l){return n+((l-e)/o*a||0)})},Ex=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=fn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=qo(En(e)?[]:{},e));if(!u){for(l in t)Gf.call(a,e,l,"get",t[l]);s=function(_){return Yf(_,a)||(o?e.p:e)}}}return is(n,s)},Bd=function(e,t,n){var i=e.labels,s=yi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var i=e.vars,s=i[t],o=Ot,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Yr.length&&Vc(),a&&(Ot=a),u=l?s.apply(c,l):s.call(c),Ot=o,u},Aa=function(e){return Qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ii(e,"onInterrupt"),e},Ao,p_=[],m_=function(e){if(e)if(e=!e.name&&e.default||e,Of()||e.headless){var t=e.name,n=Gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:cl,render:Yf,add:Gf,kill:Hx,modifier:zx,rawVars:0},o={targetTest:0,get:0,getSetter:qf,aliases:{},register:0};if($o(),e!==i){if(Qn[t])return;ci(i,ci(Gc(e,s),o)),qo(i.prototype,qo(s,Gc(e,o))),Qn[i.prop=t]=i,e.targetTest&&(Tc.push(i),Bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zg(t,i),e.register&&e.register(Xn,i,Vn)}else p_.push(e)},Tt=255,Ra={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Ou=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},g_=function(e,t,n){var i=e?Mr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Ra.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ra[e])i=Ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Nd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ou(l+1/3,s,o),i[1]=Ou(l,s,o),i[2]=Ou(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Yg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nd)||Ra.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Tt,o=i[1]/Tt,a=i[2]/Tt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},__=function(e){var t=[],n=[],i=-1;return e.split(jr).forEach(function(s){var o=s.match(bo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},zd=function(e,t,n){var i="",s=(e+i).match(jr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=g_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=__(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(jr,"1").split(bo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(jr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},jr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ra)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),bx=/hsl[a]?\(/,v_=function(e){var t=e.join(" "),n;if(jr.lastIndex=0,jr.test(t))return n=bx.test(t),e[1]=zd(e[1],n),e[0]=zd(e[0],n,__(e[1])),!0},hl,ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,M=p===!0,x,S,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,x=R-o,(x>0||M)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){$g&&(!Wh&&Of()&&(ki=Wh=window,Ff=ki.document||{},li.gsap=Xn,(ki.gsapVersions||(ki.gsapVersions=[])).push(Xn.version),Kg(Hc||ki.GreenSockGlobals||!ki.gsap&&ki||{}),p_.forEach(m_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},hl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),hl=0,c=cl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(S,R,A,w){p(S,R,A,w),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),$o(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),$o=function(){return!hl&&ti.wake()},ut={},Ax=/^[\d.\-M][\d.\-,\s]/,Rx=/["']/g,Cx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Rx,"").trim():+c,i=l.substr(a+1).trim();return t},Px=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Lx=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Cx(t[1])]:Px(e).split(",").map(t_)):ut._CE&&Ax.test(e)?ut._CE("",e):n},x_=function(e){return function(t){return 1-e(1-t)}},y_=function r(e,t){for(var n=e._first,i;n;)n instanceof Un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Os=function(e,t){return e&&(Gt(e)?e:ut[e]||Lx(e))||t},js=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){ut[a]=li[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},S_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*nx((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:S_(a);return s=Gh/s,l.config=function(c,u){return r(e,c,u)},l},ku=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:S_(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;js(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;js("Elastic",Fu("in"),Fu("out"),Fu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};js("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);js("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});js("Circ",function(r){return-(Xg(1-r*r)-1)});js("Sine",function(r){return r===1?1:-tx(r*Jv)+1});js("Back",ku("in"),ku("out"),ku());ut.SteppedEase=ut.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((i*Rl(0,o,a)|0)+s)*n}}};Xo.ease=ut["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return zf+=r+","+r+"Params,"});var M_=function(e,t){this.id=ex++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jg,this.set=t?t.getSetter:qf},fl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,jo(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),hl||ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,jo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($o(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_u(this,n),!s._dp||s.parent||r_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),e_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Yo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(Rl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),gu(this),fx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=lx);var i=gn;return gn=n,Vf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Gt(n)?n:n_,l=function(){var u=i.then;i.then=null,s&&s(),Gt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Aa(this)},r})();ci(fl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Un=(function(r){Wg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),Bt&&Gi(n.parent||Bt,ur(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&s_(ur(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return za(0,arguments,this),this},t.from=function(i,s,o){return za(1,arguments,this),this},t.fromTo=function(i,s,o,a){return za(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,pi(this,o),1),this},t.call=function(i,s,o){return Gi(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(i,o,pi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ba(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ba(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,M,x,S,R,A,w;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=kt(u%p),u===l?(g=this._repeat,f=c):(R=kt(u/p),g=~~R,g&&g===R&&(f=c,g--),f>c&&(f=c)),R=Yo(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(f=c-f,w=1),g!==R&&!this._lock){var P=A&&R&1,y=P===(A&&g&1);if(g<R&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(w?0:kt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;y_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=gx(this,kt(a),kt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-wt);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||gn&&Vf(d)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=v?-wt:wt);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=S,gu(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Mr(s)||(s=pi(this,s,i)),!(i instanceof fl)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Gt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?Gi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Gt(i)?this.killTweensOf(i):(i.parent===this&&mu(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||cl,o);return a.data="isPause",this._hasPause=1,Gi(this,a,pi(this,i))},t.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&Qr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)zr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Si(i),l=this._first,c=Mr(s),u;l;)l instanceof Qt?cx(l._targets,a)&&(c?(!zr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=pi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Qt.to(o,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&jo(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ci({startAt:{time:pi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bd(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bd(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=yi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;jo(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Bt._ts&&(e_(Bt,Wc(i,Bt)),Qg=ti.frame),ti.frame>=Ud){Ud+=ai.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&ai.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(fl);ci(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dx=function(e,t,n,i,s,o,a){var l=new Vn(this._pt,e,t,0,1,R_,null,s),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ul(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Nu)||[];h=Nu.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Io(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Nu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(jg.test(i)||m)&&(l.e=0),this._pt=l,l},Gf=function(e,t,n,i,s,o,a,l,c,u){Gt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Gt(h)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Gt(h)?c?Fx:b_:Xf,_;if(fn(i)&&(~i.indexOf("random(")&&(i=ul(i)),i.charAt(1)==="="&&(_=Io(f,i)+(Tn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Zh)return!isNaN(f*i)&&i!==""?(_=new Vn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Bx:A_,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&kf(t,i),Dx.call(this,e,t,f,i,d,l||ai.stringFilter,c))},Ix=function(e,t,n,i,s){if(Gt(e)&&(e=Ha(e,s,t,n,i)),!Zi(e)||e.style&&e.nodeType||En(e)||qg(e))return fn(e)?Ha(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ha(e[a],s,t,n,i);return o},T_=function(e,t,n,i,s,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(s,a.rawVars?t[e]:Ix(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Vn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ao))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},zr,Zh,Wf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Nf,S=e.timeline,R,A,w,P,y,v,O,N,I,F,B,V,X;if(S&&(!f||!s)&&(s="none"),e._ease=Os(s,Xo.ease),e._yEase=h?x_(Os(h===!0?s:h,Xo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(N=p[0]?Ns(p[0]).harness:0,V=N&&i[N.prop],R=Gc(i,Bf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Mc:ax),g._lazy=0),o){if(Qr(e._startAt=Qt.set(p,ci({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Mc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),w=ci({overwrite:!1,data:"isFromStart",lazy:a&&!g&&zn(l),immediateRender:a,stagger:0,parent:m},R),V&&(w[N.prop]=V),Qr(e._startAt=Qt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Mc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&zn(l)||l&&!_,A=0;A<p.length;A++){if(y=p[A],O=y._gsap||Hf(p)[A]._gsap,e._ptLookup[A]=F={},Xh[O.id]&&Yr.length&&Vc(),B=M===p?A:M.indexOf(y),N&&(I=new N).init(y,V||R,e,B,M)!==!1&&(e._pt=P=new Vn(e._pt,y,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){F[H]=P}),I.priority&&(v=1)),!N||V)for(w in R)Qn[w]&&(I=T_(w,R,e,B,y,M))?I.priority&&(v=1):F[w]=P=Gf.call(e,y,w,"get",R[w],B,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),x&&e._pt&&(zr=e,Bt.killTweensOf(y,F,e.globalTime(t)),X=!e.parent,zr=0),e._pt&&l&&(Xh[O.id]=1)}v&&C_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&S.render(yi,!0,!0)},Nx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Zh=1,e.vars[t]="+=0",Wf(e,a),Zh=0,l?ll(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Xt(n)+Tn(h.e)),h.b&&(h.b=u.s+Tn(h.b))},Ux=function(e,t){var n=e[0]?Ns(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=qo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ox=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ha=function(e,t,n,i,s){return Gt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?ul(e):e},w_=zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",E_={};Hn(w_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return E_[r]=1});var Qt=(function(r){Wg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ba(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Bt,x=(En(n)||qg(n)?Mr(n[0]):"length"in i)?[n]:Si(n),S,R,A,w,P,y,v,O;if(a._targets=x.length?Hf(x):ll("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Il(c)||Il(u)){if(i=a.vars,S=a.timeline=new Un({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=ur(a),S._start=0,f||Il(c)||Il(u)){if(w=x.length,v=f&&c_(f),Zi(f))for(P in f)~w_.indexOf(P)&&(O||(O={}),O[P]=f[P]);for(R=0;R<w;R++)A=Gc(i,E_),A.stagger=0,m&&(A.yoyoEase=m),O&&qo(A,O),y=x[R],A.duration=+Ha(c,ur(a),R,y,x),A.delay=(+Ha(u,ur(a),R,y,x)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(y,A,v?v(R,y,x):0),S._ease=ut.none;S.duration()?c=u=0:a.timeline=0}else if(_){Ba(ci(S.vars.defaults,{ease:"none"})),S._ease=Os(_.ease||i.ease||"none");var N=0,I,F,B;if(En(_))_.forEach(function(V){return S.to(x,V,">")}),S.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||Ox(P,_[P],A,_.easeEach);for(P in A)for(I=A[P].sort(function(V,X){return V.t-X.t}),N=0,R=0;R<I.length;R++)F=I[R],B={ease:F.e,duration:(F.t-(R?I[R-1].t:0))/100*c},B[P]=F.v,S.to(x,B,N),N+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Nf&&(zr=ur(a),Bt.killTweensOf(x),zr=0),Gi(M,ur(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===kt(M._time)&&zn(h)&&dx(ur(a))&&M.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),p&&s_(ur(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,_,g,p,m,M,x,S;if(!c)mx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=kt(h%g),h===l?(_=this._repeat,f=c):(p=kt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=Yo(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(x&&this._yEase&&y_(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(kt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(o_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!p&&(ii(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qh(this,i,s,o),ii(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){hl||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wf(this,c),u=this._ease(c/this._dur),Nx(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(_u(this,0),this.parent||i_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zr&&zr.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&jo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&hx(a,l))return s==="all"&&(this._pt=0),Aa(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},Hn(s,function(M){return g[M]=1}),s=g),s=Ux(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&mu(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Aa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return za(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return za(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Bt.killTweensOf(i,s,o)},e})(fl);ci(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Un,t=jh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Xf=function(e,t,n){return e[t]=n},b_=function(e,t,n){return e[t](n)},Fx=function(e,t,n,i){return e[t](i.fp,n)},kx=function(e,t,n){return e.setAttribute(t,n)},qf=function(e,t){return Gt(e[t])?b_:Uf(e[t])&&e.setAttribute?kx:Xf},A_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Bx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},R_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Yf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Hx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?mu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Vx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},C_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Vn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||A_,this.d=l||this,this.set=c||Xf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Vx,this.m=n,this.mt=s,this.tween=i},r})();Hn(zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Bf[r]=1});li.TweenMax=li.TweenLite=Qt;li.TimelineLite=li.TimelineMax=Un;Bt=new Un({sortChildren:!1,defaults:Xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=v_;var Fs=[],wc={},Gx=[],Hd=0,Wx=0,Bu=function(e){return(wc[e]||Gx).map(function(t){return t()})},Qh=function(){var e=Date.now(),t=[];e-Hd>2&&(Bu("matchMediaInit"),Fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ki.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Bu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hd=e,Bu("matchMedia"))},P_=(function(){function r(t,n){this.selector=n&&$h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Gt(n)&&(s=i,i=n,n=Gt);var o=this,a=function(){var c=Ot,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=$h(s)),Ot=o,h=i.apply(o,arguments),Gt(h)&&o._r.push(h),Ot=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fs.length;o--;)Fs[o].id===this.id&&Fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Xx=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Zi(n)||(n={matches:n});var o=new P_(0,s||this.scope),a=o.conditions={},l,c,u;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ki.matchMedia(n[c]),l&&(Fs.indexOf(o)<0&&Fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qh):l.addEventListener("change",Qh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return m_(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=Si(e)[0]);var s=Ns(e||{}).get,o=n?n_:t_;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=Ns(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ao._pt=0,h.init(e,n?u+n:u,Ao,0,[e]),h.render(1,h),Ao._pt&&Yf(1,Ao)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,ci((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,Xo.ease)),Od(Xo,e||{})},config:function(e){return Od(ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!li[a]&&ll(t+" effect requires "+a+" plugin.")}),Uu[t]=function(a,l,c){return n(Si(a),ci(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(Uu[t](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):ut},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=s;return Gi(Bt,n,0),n},context:function(e,t){return e?new P_(e,t):Ot},matchMedia:function(e){return new Xx(e)},matchMediaRefresh:function(){return Fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qh()},addEventListener:function(e,t){var n=wc[e]||(wc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Tx,wrapYoyo:wx,distribute:c_,random:h_,snap:u_,normalize:Mx,getUnit:Tn,clamp:vx,splitColor:g_,toArray:Si,selector:$h,mapRange:d_,pipe:yx,unitize:Sx,interpolate:Ex,shuffle:l_},install:Kg,effects:Uu,ticker:ti,updateRoot:Un.updateRoot,plugins:Qn,globalTimeline:Bt,core:{PropTween:Vn,globals:Zg,Tween:Qt,Timeline:Un,Animation:fl,getCache:Ns,_removeLinkedListItem:mu,reverting:function(){return gn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return Nf=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xc[r]=Qt[r]});ti.add(Un.updateRoot);Ao=Xc.to({},{duration:0});var qx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Yx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Yx(a,s)}}}},Xn=Xc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zu("roundProps",Kh),zu("modifiers"),zu("snap",u_))||Xc;Qt.version=Un.version=Xn.version="3.14.2";$g=1;Of()&&$o();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var Vd,Hr,No,jf,As,Gd,$f,jx=function(){return typeof window<"u"},Tr={},_s=180/Math.PI,Uo=Math.PI/180,Qs=Math.atan2,Wd=1e8,Kf=/([A-Z])/g,$x=/(left|right|width|margin|padding|x)/i,Kx=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ey=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},L_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ty=function(e,t,n){return e.style[t]=n},ny=function(e,t,n){return e.style.setProperty(t,n)},iy=function(e,t,n){return e._gsap[t]=n},ry=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},oy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},zt="transform",Gn=zt+"Origin",ay=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(i,a)}):this.tfm[e]=o.x?o[e]:fr(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},I_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ly=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$f(),(!s||!s.isStart)&&!n[zt]&&(I_(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},N_=function(e,t){var n={target:e,props:[],revert:ly,save:ay};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},U_,ef=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ko(t)||t,1)||""},Xd="O,Moz,ms,Ms,Webkit".split(","),Ko=function(e,t,n){var i=t||As,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xd[o]:"")+e},tf=function(){jx()&&window.document&&(Vd=window,Hr=Vd.document,No=Hr.documentElement,As=ef("div")||{style:{}},ef("div"),zt=Ko(zt),Gn=zt+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",U_=!!Ko("perspective"),$f=Xn.core.reverting,jf=1)},qd=function(e){var t=e.ownerSVGElement,n=ef("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),No.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),No.removeChild(n),s},Yd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},O_=function(e){var t,n;try{t=e.getBBox()}catch{t=qd(e),n=1}return t&&(t.width||t.height)||n||(t=qd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yd(e,["x","cx","x1"])||0,y:+Yd(e,["y","cy","y1"])||0,width:0,height:0}:t},F_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&O_(e))},Jr=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==Gn&&(t=zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Kf,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,i,s,o){var a=new Vn(e._pt,t,n,0,1,o?D_:L_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},jd={deg:1,rad:1,turn:1},cy={grid:1,flex:1},es=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=As.style,l=$x.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||jd[i]||jd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&F_(e),(d||o==="%")&&(Tr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Xt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Hr||!g.appendChild)&&(g=Hr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===ti.time&&!p.uncache)return Xt(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Jr(e,t)}else(d||o==="%")&&!cy[ri(g,"display")]&&(a.position=ri(e,"position")),g===e&&(a.position="static"),g.appendChild(As),_=As[u],g.removeChild(As),a.position="absolute";return l&&d&&(p=Ns(g),p.time=ti.time,p.width=g[u]),Xt(f?_*s/h:_&&s?h/_*s:0)},fr=function(e,t,n,i){var s;return jf||tf(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(s=pl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yc(ri(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qc[t]&&qc[t](e,t,n)||ri(e,t)||Jg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?es(e,t,s,n)+n:s},uy=function(e,t,n,i){if(!n||n==="none"){var s=Ko(t,e,1),o=s&&ri(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var a=new Vn(this._pt,e.style,t,0,1,R_),l=0,c=0,u,h,f,d,_,g,p,m,M,x,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ri(e,t)||i,g?e.style[t]=g:Jr(e,t)),u=[n,i],v_(u),n=u[0],i=u[1],f=n.match(bo)||[],R=i.match(bo)||[],R.length){for(;h=bo.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Io(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=bo.lastIndex-x.length,x||(x=x||ai.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(d=es(e,t,g,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?D_:L_;return jg.test(i)&&(a.e=0),this._pt=a,a},$d={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$d[n]||n,t[1]=$d[i]||i,t.join(" ")},fy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Tr[a]&&(l=1,a=a==="transformOrigin"?Gn:zt),Jr(n,a);l&&(Jr(n,zt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",pl(n,1),o.uncache=1,I_(i)))}},qc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Vn(e._pt,t,n,0,0,fy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},dl=[1,0,0,1,0,0],k_={},B_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kd=function(e){var t=ri(e,zt);return B_(t)?dl:t.substr(7).match(Yg).map(Xt)},Zf=function(e,t){var n=e._gsap||Ns(e),i=e.style,s=Kd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?dl:s):(s===dl&&!e.offsetParent&&e!==No&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,No.appendChild(e)),s=Kd(e),l?i.display=l:Jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):No.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nf=function(e,t,n,i,s,o){var a=e._gsap,l=s||Zf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,w,P,y;n?l!==dl&&(w=d*p-_*g)&&(P=S*(p/w)+R*(-g/w)+(g*M-p*m)/w,y=S*(-_/w)+R*(d/w)-(d*M-_*m)/w,S=P,R=y):(A=O_(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=S-c,M=R-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Vr(o,a,"xOrigin",c,S),Vr(o,a,"yOrigin",u,R),Vr(o,a,"xOffset",h,a.xOffset),Vr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},pl=function(e,t){var n=e._gsap||new M_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ri(e,Gn)||"0",u,h,f,d,_,g,p,m,M,x,S,R,A,w,P,y,v,O,N,I,F,B,V,X,H,j,D,re,de,Le,Y,te;return u=h=f=g=p=m=M=x=S=0,d=_=1,n.svg=!!(e.getCTM&&F_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),i.scale=i.rotate=i.translate="none"),w=Zf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),nf(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),R=n.xOrigin||0,A=n.yOrigin||0,w!==dl&&(O=w[0],N=w[1],I=w[2],F=w[3],u=B=w[4],h=V=w[5],w.length===6?(d=Math.sqrt(O*O+N*N),_=Math.sqrt(F*F+I*I),g=O||N?Qs(N,O)*_s:0,M=I||F?Qs(I,F)*_s+g:0,M&&(_*=Math.abs(Math.cos(M*Uo))),n.svg&&(u-=R-(R*O+A*I),h-=A-(R*N+A*F))):(te=w[6],Le=w[7],D=w[8],re=w[9],de=w[10],Y=w[11],u=w[12],h=w[13],f=w[14],P=Qs(te,de),p=P*_s,P&&(y=Math.cos(-P),v=Math.sin(-P),X=B*y+D*v,H=V*y+re*v,j=te*y+de*v,D=B*-v+D*y,re=V*-v+re*y,de=te*-v+de*y,Y=Le*-v+Y*y,B=X,V=H,te=j),P=Qs(-I,de),m=P*_s,P&&(y=Math.cos(-P),v=Math.sin(-P),X=O*y-D*v,H=N*y-re*v,j=I*y-de*v,Y=F*v+Y*y,O=X,N=H,I=j),P=Qs(N,O),g=P*_s,P&&(y=Math.cos(P),v=Math.sin(P),X=O*y+N*v,H=B*y+V*v,N=N*y-O*v,V=V*y-B*v,O=X,B=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Xt(Math.sqrt(O*O+N*N+I*I)),_=Xt(Math.sqrt(V*V+te*te)),P=Qs(B,V),M=Math.abs(P)>2e-4?P*_s:0,S=Y?1/(Y<0?-Y:Y):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B_(ri(e,zt)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Xt(d),n.scaleY=Xt(_),n.rotation=Xt(g)+a,n.rotationX=Xt(p)+a,n.rotationY=Xt(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=Yc(c)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?py:U_?z_:dy,n.uncache=0,n},Yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hu=function(e,t,n){var i=Tn(t);return Xt(parseFloat(t)+parseFloat(es(e,"x",n+"px",i)))+i},dy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,z_(e,t)},as="0deg",pa="0px",ls=") ",z_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==as||u!==as)){var A=parseFloat(u)*Uo,w=Math.sin(A),P=Math.cos(A),y;A=parseFloat(h)*Uo,y=Math.cos(A),o=Hu(M,o,w*y*-x),a=Hu(M,a,-Math.sin(A)*-x),l=Hu(M,l,P*y*-x+x)}p!==pa&&(S+="perspective("+p+ls),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==pa||a!==pa||l!==pa)&&(S+=l!==pa||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(S+="rotate("+c+ls),u!==as&&(S+="rotateY("+u+ls),h!==as&&(S+="rotateX("+h+ls),(f!==as||d!==as)&&(S+="skew("+f+", "+d+ls),(_!==1||g!==1)&&(S+="scale("+_+", "+g+ls),M.style[zt]=S||"translate(0, 0)"},py=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),R,A,w,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Uo,c*=Uo,R=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Uo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,A*=y)),R=Xt(R),A=Xt(A),w=Xt(w),P=Xt(P)):(R=h,P=f,A=w=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=es(d,"x",o,"px"),S=es(d,"y",a,"px")),(_||g||p||m)&&(x=Xt(x+_-(_*R+g*w)+p),S=Xt(S+g-(_*A+g*P)+m)),(i||s)&&(y=d.getBBox(),x=Xt(x+i/100*y.width),S=Xt(S+s/100*y.height)),y="matrix("+R+","+A+","+w+","+P+","+x+","+S+")",d.setAttribute("transform",y),M&&(d.style[zt]=y)},my=function(e,t,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?_s:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Wd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Wd)%o-~~(c/o)*o)),e._pt=f=new Vn(e._pt,t,n,i,c,Zx),f.e=u,f.u="deg",e._props.push(n),f},Zd=function(e,t){for(var n in t)e[n]=t[n];return e},gy=function(e,t,n){var i=Zd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[zt]=t,a=pl(n,1),Jr(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],o[zt]=t,a=pl(n,1),o[zt]=c);for(l in Tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Tn(c),_=Tn(u),h=d!==_?es(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Vn(e._pt,a,l,h,f-h,Jh),e._pt.u=_||0,e._props.push(l));Zd(a,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});qc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return fr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var H_={name:"css",register:tf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,x,S,R,A,w,P,y;jf||tf(),this.styles=this.styles||N_(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qn[g]&&T_(g,t,n,i,e,s)))){if(d=typeof u,_=qc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ul(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",jr.lastIndex=0,jr.test(c)||(p=Tn(c),m=Tn(u),m?p!==m&&(c=es(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],fn(c)&&~c.indexOf("random(")&&(c=ul(c)),Tn(c+"")||c==="auto"||(c+=ai.units[g]||Tn(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in qi&&(g==="autoAlpha"&&(f===1&&fr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Vr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Tr,x){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=ri(e,"perspective"),v?e.style.perspective=v:Jr(e,"perspective")}h=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new Vn(this._pt,a,zt,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new Vn(this._pt,R,"scaleY",R.scaleY,(M?Io(R.scaleY,M+h):h)-R.scaleY||0,Jh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Gn,0,a[Gn]),u=hy(u),R.svg?nf(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Vr(this,R,"zOrigin",R.zOrigin,m),Vr(this,a,g,Yc(c),Yc(u)));continue}else if(g==="svgOrigin"){nf(e,u,1,A,0,this);continue}else if(g in k_){my(this,R,g,f,M?Io(f,M+u):u);continue}else if(g==="smoothOrigin"){Vr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){gy(this,u,e);continue}}else g in a||(g=Ko(g)||g);if(x||(h||h===0)&&(f||f===0)&&!Kx.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Tn(u)||(g in ai.units?ai.units[g]:p),p!==m&&(f=es(e,g,c,m)),this._pt=new Vn(this._pt,x?R:a,g,f,(M?Io(f,M+h):h)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?ey:Jh),this._pt.u=m||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=Jx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Qx);else if(g in a)uy.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){kf(g,u);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}w&&C_(this)},render:function(e,t){if(t.tween._time||!$f())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==Gn&&(e._gsap.x||fr(e,"x"))?n&&Gd===n?t==="scale"?ry:iy:(Gd=n||{})&&(t==="scale"?sy:oy):e.style&&!Uf(e.style[t])?ty:~t.indexOf("-")?ny:qf(e,t)},core:{_removeProperty:Jr,_getMatrix:Zf}};Xn.utils.checkPrefix=Ko;Xn.core.getStyleSaver=N_;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){Tr[s]=1});Hn(e,function(s){ai.units[s]="deg",k_[s]=1}),qi[i[13]]=r+","+e,Hn(n,function(s){var o=s.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ai.units[r]="px"});Xn.registerPlugin(H_);var _e=Xn.registerPlugin(H_)||Xn;_e.core.Tween;let ma,Js,Qd=typeof Symbol=="function"?Symbol():"_split",rf,_y=()=>rf||ts.register(window.gsap),Jd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ml=r=>typeof r=="string"?ml(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...ml(t)):e.push(t),e),[]):[r],ep=r=>ml(r).filter(e=>e instanceof HTMLElement),sf=[],Vu=function(){},vy={add:r=>r()},xy=/\s+/g,tp=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),jc={left:0,top:0,width:0,height:0},yy=(r,e)=>{for(;++e<r.length&&r[e]===jc;);return r[e]||jc},np=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},ip=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||sf),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},rp=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),eo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),of=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},Sy=(r,e,t,n)=>{let i=of("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},V_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=e,p=r.getBoundingClientRect(),m=p,M=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",x=0,S=t.collection,R,A,w,P,y,v,O,N,I,F,B,V,X,H,j,D,re,de;for(typeof d=="object"?(w=d.delimiter||d,A=d.replaceWith||""):A=d===""?"":d||" ",R=A!==" ";f<h.length;f++)if(P=h[f],P.nodeType===3){for(j=P.textContent||"",_?j=j.replace(xy," "):M&&(j=j.replace(/\n/g,A+`
`)),g&&(j=g(j,r)),P.textContent=j,y=A||w?j.split(w||A):j.match(a)||sf,re=y[y.length-1],N=R?re.slice(-1)===" ":!re,re||y.pop(),m=p,O=R?y[0].charAt(0)===" ":!y[0],O&&eo(" ",r,P),y[0]||y.shift(),ip(y,l),s&&c||(P.textContent=""),I=1;I<=y.length;I++)if(D=y[I-1],!_&&M&&D.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),eo(document.createElement("br"),r,P),D=D.slice(1)),!_&&D==="")eo(A,r,P);else if(D===" ")r.insertBefore(document.createTextNode(" "),P);else{if(R&&D.charAt(0)===" "&&eo(" ",r,P),x&&I===1&&!O&&S.indexOf(x.parentNode)>-1?(v=S[S.length-1],v.appendChild(document.createTextNode(n?"":D))):(v=t(n?"":D),eo(v,r,P),x&&I===1&&!O&&v.insertBefore(x,v.firstChild)),n)for(B=Jd?ip([...Jd.segment(D)].map(Le=>Le.segment),l):D.match(a)||sf,de=0;de<B.length;de++)v.appendChild(B[de]===" "?document.createTextNode(" "):n(B[de]));if(s&&c){if(j=P.textContent=j.substring(D.length+1,j.length),F=v.getBoundingClientRect(),F.top>m.top&&F.left<=m.left){for(V=r.cloneNode(),X=r.childNodes[0];X&&X!==v;)H=X,X=X.nextSibling,V.appendChild(H);r.parentNode.insertBefore(V,r),i&&rp(V)}m=F}(I<y.length||N)&&eo(I>=y.length?" ":R&&D.slice(-1)===" "?" "+A:A,r,P)}r.removeChild(P),x=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),x=P):(V_(P,e,t,n,i,s,o,a,l,!0),x=0),i&&rp(P))};const G_=class W_{constructor(e,t){this.isSplit=!1,_y(),this.elements=ep(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Qd])==null||a._data.orig.filter(({element:l})=>l===o).forEach(np)),o[Qd]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Vu(this),this.split(t)}split(e){return(this._ctx||vy).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+tp.source,"gu"):tp,p=!!e.ignore&&ep(e.ignore),{orig:m,animTime:M,obs:x}=this._data,S;(h||f||u)&&(this.elements.forEach((R,A)=>{m[A]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let w=[],P=[],y=[],v=h?of("char",e,w):null,O=of("word",e,P),N,I,F,B;if(V_(R,e,O,v,d,i&&(u||d),p,g,_,!1),u){let V=ml(R.childNodes),X=Sy(R,V,e,y),H,j=[],D=0,re=V.map(Y=>Y.nodeType===1?Y.getBoundingClientRect():jc),de=jc,Le;for(N=0;N<V.length;N++)H=V[N],H.nodeType===1&&(H.nodeName==="BR"?((!N||V[N-1].nodeName!=="BR")&&(j.push(H),X(D,N+1)),D=N+1,de=yy(re,N)):(Le=re[N],N&&Le.top>de.top&&Le.left<de.left+de.width-1&&(X(D,N),D=N),de=Le));D<N&&X(D,N),j.forEach(Y=>{var te;return(te=Y.parentNode)==null?void 0:te.removeChild(Y)})}if(!f){for(N=0;N<P.length;N++)if(I=P[N],h||!I.nextSibling||I.nextSibling.nodeType!==3)if(s&&!u){for(F=document.createElement("span"),F.style.whiteSpace="nowrap";I.firstChild;)F.appendChild(I.firstChild);I.replaceWith(F)}else I.replaceWith(...I.childNodes);else B=I.nextSibling,B&&B.nodeType===3&&(B.textContent=(I.textContent||"")+(B.textContent||""),I.remove());P.length=0,R.normalize()}this.lines.push(...y),this.words.push(...P),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(R=>{let A=R.cloneNode();return R.replaceWith(A),A.appendChild(R),R.className&&(A.className=R.className.trim()+"-mask"),A.style.overflow="clip",A}))),this.isSplit=!0,Js&&u&&(a?Js.addEventListener("loadingdone",this._split):Js.status==="loading"&&console.warn("SplitText called before fonts loaded")),(S=o&&o(this))&&S.totalTime&&(this._data.anim=M?S.totalTime(M):S),u&&a&&this.elements.forEach((R,A)=>{m[A].width=R.offsetWidth,x&&x.observe(R)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Js?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(np),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new W_(e,t)}static register(e){ma=ma||e||window.gsap,ma&&(ml=ma.utils.toArray,Vu=ma.core.context||Vu),!rf&&window.innerWidth>0&&(Js=document.fonts,rf=!0)}};G_.version="3.14.2";let ts=G_;var My="1.3.17";function X_(r,e,t){return Math.max(r,Math.min(e,t))}function Ty(r,e,t){return(1-t)*r+t*e}function wy(r,e,t,n){return Ty(r,e,1-Math.exp(-t*n))}function Ey(r,e){return(r%e+e)%e}var by=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=X_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=wy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ay(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Ry=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ay(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},q_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},sp=100/6,Er={passive:!1},Cy=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Er),this.element.addEventListener("touchstart",this.onTouchStart,Er),this.element.addEventListener("touchmove",this.onTouchMove,Er),this.element.addEventListener("touchend",this.onTouchEnd,Er)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new q_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Er),this.element.removeEventListener("touchstart",this.onTouchStart,Er),this.element.removeEventListener("touchmove",this.onTouchMove,Er),this.element.removeEventListener("touchend",this.onTouchEnd,Er)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?sp:n===2?this.window.width:1,s=n===1?sp:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},op=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Py=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new by;emitter=new q_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:P=w,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=My,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=op:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,autoRaf:x,anchors:S,autoToggle:R,allowNestedScroll:A,naiveDimensions:P,stopInertiaOnNavigate:y},this.dimensions=new Ry(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Cy(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=X_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=op:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const R=window.getComputedStyle(r);i.computedStyle=R;const A=R.overflowX,w=R.overflowY;if(s=["auto","overlay","scroll"].includes(A),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{const R=e!==0,A=t!==0;R&&s&&a&&(_="x"),A&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,M,x;if(_==="x")g=r.scrollLeft,p=c-h,m=e,M=s,x=a;else if(_==="y")g=r.scrollTop,p=u-f,m=t,M=o,x=l;else return!1;return(m>0?g<p:g>0)&&M&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Ey(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Ly(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Dy(r,e,t){return e&&Ly(r.prototype,e),r}var mn,Ec,ni,Gr,Wr,Oo,Y_,vs,Va,j_,mr,Ri,$_,K_=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Z_=1,Ro=[],ot=[],$i=[],Ga=Date.now,af=function(e,t){return t},Iy=function(){var e=Va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,$i),ot=n,$i=i,af=function(o,a){return t[o](a)}},$r=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},Wa=function(e){return!!~j_.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nl="scrollLeft",Ul="scrollTop",lf=function(){return mr&&mr.isPressed||ot.cache++},$c=function(e,t){var n=function i(s){if(s||s===0){Z_&&(ni.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=i.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),i.cacheID=ot.cache,o&&af("ss",s)}else(t||ot.cache!==i.cacheID||af("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:Nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$c(function(r){return arguments.length?ni.scrollTo(r,nn.sc()):ni.pageXOffset||Gr[Nl]||Wr[Nl]||Oo[Nl]||0})},nn={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:$c(function(r){return arguments.length?ni.scrollTo(On.sc(),r):ni.pageYOffset||Gr[Ul]||Wr[Ul]||Oo[Ul]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ny=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ns=function(e,t){var n=t.s,i=t.sc;Wa(e)&&(e=Gr.scrollingElement||Wr);var s=ot.indexOf(e),o=i===nn.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Rn(e,"scroll",lf);var a=ot[s+o],l=a||(ot[s+o]=$c($r(e,n),!0)||(Wa(e)?i:$c(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},cf=function(e,t,n){var i=e,s=e,o=Ga(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ga();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Ga();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ga=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ap=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Q_=function(){Va=mn.core.globals().ScrollTrigger,Va&&Va.core&&Iy()},J_=function(e){return mn=e||K_(),!Ec&&mn&&typeof document<"u"&&document.body&&(ni=window,Gr=document,Wr=Gr.documentElement,Oo=Gr.body,j_=[ni,Gr,Wr,Oo],mn.utils.clamp,$_=mn.core.context||function(){},vs="onpointerenter"in Oo?"pointer":"mouse",Y_=Yt.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=Yt.eventTypes=("ontouchstart"in Wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Z_=0},500),Q_(),Ec=1),Ec};On.op=nn;ot.cache=0;var Yt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ec||J_(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Va||Q_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,w=n.onUp,P=n.onDown,y=n.onChangeX,v=n.onChangeY,O=n.onChange,N=n.onToggleX,I=n.onToggleY,F=n.onHover,B=n.onHoverEnd,V=n.onMove,X=n.ignoreCheck,H=n.isNormalizer,j=n.onGestureStart,D=n.onGestureEnd,re=n.onWheel,de=n.onEnable,Le=n.onDisable,Y=n.onClick,te=n.scrollSpeed,ce=n.capture,se=n.allowClicks,Re=n.lockAxis,De=n.onLockAxis;this.target=a=kn(a)||Wr,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(Oo).lineHeight)||22);var Xe,G,Be,le,qe,be,Ye,T=this,b=0,K=0,Q=n.passive||!u&&n.passive!==!1,Z=ns(a,On),ee=ns(a,nn),Ce=Z(),ie=ee(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ri[0]==="pointerdown",Ie=Wa(a),ne=a.ownerDocument||Gr,fe=[0,0,0],Ne=[0,0,0],ge=0,Se=function(){return ge=Ga()},Ue=function(we,et){return(T.event=we)&&d&&Ny(we.target,d)||et&&me&&we.pointerType!=="touch"||X&&X(we,et)},it=function(){T._vx.reset(),T._vy.reset(),G.pause(),h&&h(T)},Je=function(){var we=T.deltaX=ap(fe),et=T.deltaY=ap(Ne),ue=Math.abs(we)>=i,Ge=Math.abs(et)>=i;O&&(ue||Ge)&&O(T,we,et,fe,Ne),ue&&(R&&T.deltaX>0&&R(T),A&&T.deltaX<0&&A(T),y&&y(T),N&&T.deltaX<0!=b<0&&N(T),b=T.deltaX,fe[0]=fe[1]=fe[2]=0),Ge&&(P&&T.deltaY>0&&P(T),w&&T.deltaY<0&&w(T),v&&v(T),I&&T.deltaY<0!=K<0&&I(T),K=T.deltaY,Ne[0]=Ne[1]=Ne[2]=0),(le||Be)&&(V&&V(T),Be&&(p&&Be===1&&p(T),M&&M(T),Be=0),le=!1),be&&!(be=!1)&&De&&De(T),qe&&(re(T),qe=!1),Xe=0},at=function(we,et,ue){fe[ue]+=we,Ne[ue]+=et,T._vx.update(we),T._vy.update(et),c?Xe||(Xe=requestAnimationFrame(Je)):Je()},ft=function(we,et){Re&&!Ye&&(T.axis=Ye=Math.abs(we)>Math.abs(et)?"x":"y",be=!0),Ye!=="y"&&(fe[2]+=we,T._vx.update(we,!0)),Ye!=="x"&&(Ne[2]+=et,T._vy.update(et,!0)),c?Xe||(Xe=requestAnimationFrame(Je)):Je()},ye=function(we){if(!Ue(we,1)){we=ga(we,u);var et=we.clientX,ue=we.clientY,Ge=et-T.x,Oe=ue-T.y,Ve=T.isDragging;T.x=et,T.y=ue,(Ve||(Ge||Oe)&&(Math.abs(T.startX-et)>=s||Math.abs(T.startY-ue)>=s))&&(Be||(Be=Ve?2:1),Ve||(T.isDragging=!0),ft(Ge,Oe))}},U=T.onPress=function(Fe){Ue(Fe,1)||Fe&&Fe.button||(T.axis=Ye=null,G.pause(),T.isPressed=!0,Fe=ga(Fe),b=K=0,T.startX=T.x=Fe.clientX,T.startY=T.y=Fe.clientY,T._vx.reset(),T._vy.reset(),Rn(H?a:ne,Ri[1],ye,Q,!0),T.deltaX=T.deltaY=0,x&&x(T))},J=T.onRelease=function(Fe){if(!Ue(Fe,1)){bn(H?a:ne,Ri[1],ye,!0);var we=!isNaN(T.y-T.startY),et=T.isDragging,ue=et&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),Ge=ga(Fe);!ue&&we&&(T._vx.reset(),T._vy.reset(),u&&se&&mn.delayedCall(.08,function(){if(Ga()-ge>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(ne.createEvent){var Oe=ne.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ni,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(Oe)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,h&&et&&!H&&G.restart(!0),Be&&Je(),m&&et&&m(T),S&&S(T,ue)}},ae=function(we){return we.touches&&we.touches.length>1&&(T.isGesturing=!0)&&j(we,T.isDragging)},ve=function(){return(T.isGesturing=!1)||D(T)},Me=function(we){if(!Ue(we)){var et=Z(),ue=ee();at((et-Ce)*te,(ue-ie)*te,1),Ce=et,ie=ue,h&&G.restart(!0)}},rt=function(we){if(!Ue(we)){we=ga(we,u),re&&(qe=!0);var et=(we.deltaMode===1?l:we.deltaMode===2?ni.innerHeight:1)*_;at(we.deltaX*et,we.deltaY*et,0),h&&!H&&G.restart(!0)}},ht=function(we){if(!Ue(we)){var et=we.clientX,ue=we.clientY,Ge=et-T.x,Oe=ue-T.y;T.x=et,T.y=ue,le=!0,h&&G.restart(!0),(Ge||Oe)&&ft(Ge,Oe)}},pt=function(we){T.event=we,F(T)},bt=function(we){T.event=we,B(T)},dt=function(we){return Ue(we)||ga(we,u)&&Y(T)};G=T._dc=mn.delayedCall(f||.25,it).pause(),T.deltaX=T.deltaY=0,T._vx=cf(0,50,!0),T._vy=cf(0,50,!0),T.scrollX=Z,T.scrollY=ee,T.isDragging=T.isGesturing=T.isPressed=!1,$_(this),T.enable=function(Fe){return T.isEnabled||(Rn(Ie?ne:a,"scroll",lf),o.indexOf("scroll")>=0&&Rn(Ie?ne:a,"scroll",Me,Q,ce),o.indexOf("wheel")>=0&&Rn(a,"wheel",rt,Q,ce),(o.indexOf("touch")>=0&&Y_||o.indexOf("pointer")>=0)&&(Rn(a,Ri[0],U,Q,ce),Rn(ne,Ri[2],J),Rn(ne,Ri[3],J),se&&Rn(a,"click",Se,!0,!0),Y&&Rn(a,"click",dt),j&&Rn(ne,"gesturestart",ae),D&&Rn(ne,"gestureend",ve),F&&Rn(a,vs+"enter",pt),B&&Rn(a,vs+"leave",bt),V&&Rn(a,vs+"move",ht)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=le=Be=!1,T._vx.reset(),T._vy.reset(),Ce=Z(),ie=ee(),Fe&&Fe.type&&U(Fe),de&&de(T)),T},T.disable=function(){T.isEnabled&&(Ro.filter(function(Fe){return Fe!==T&&Wa(Fe.target)}).length||bn(Ie?ne:a,"scroll",lf),T.isPressed&&(T._vx.reset(),T._vy.reset(),bn(H?a:ne,Ri[1],ye,!0)),bn(Ie?ne:a,"scroll",Me,ce),bn(a,"wheel",rt,ce),bn(a,Ri[0],U,ce),bn(ne,Ri[2],J),bn(ne,Ri[3],J),bn(a,"click",Se,!0),bn(a,"click",dt),bn(ne,"gesturestart",ae),bn(ne,"gestureend",ve),bn(a,vs+"enter",pt),bn(a,vs+"leave",bt),bn(a,vs+"move",ht),T.isEnabled=T.isPressed=T.isDragging=!1,Le&&Le(T))},T.kill=T.revert=function(){T.disable();var Fe=Ro.indexOf(T);Fe>=0&&Ro.splice(Fe,1),mr===T&&(mr=0)},Ro.push(T),H&&Wa(a)&&(mr=T),T.enable(g)},Dy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Yt.version="3.14.2";Yt.create=function(r){return new Yt(r)};Yt.register=J_;Yt.getAll=function(){return Ro.slice()};Yt.getById=function(r){return Ro.filter(function(e){return e.vars.id===r})[0]};K_()&&mn.registerPlugin(Yt);var xe,To,st,Rt,Jn,gt,Qf,Kc,gl,Xa,Ca,Ol,Sn,vu,uf,Ln,lp,cp,wo,e0,Gu,t0,Pn,hf,n0,i0,Ir,ff,Jf,Fo,ed,qa,df,Wu,Fl=1,Mn=Date.now,Xu=Mn(),wi=0,Pa=0,up=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hp=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Uy=function r(){return Pa&&requestAnimationFrame(r)},fp=function(){return vu=1},dp=function(){return vu=0},Bi=function(e){return e},La=function(e){return Math.round(e*1e5)/1e5||0},r0=function(){return typeof window<"u"},s0=function(){return xe||r0()&&(xe=window.gsap)&&xe.registerPlugin&&xe},Vs=function(e){return!!~Qf.indexOf(e)},o0=function(e){return(e==="Height"?ed:st["inner"+e])||Jn["client"+e]||gt["client"+e]},a0=function(e){return $r(e,"getBoundingClientRect")||(Vs(e)?function(){return Pc.width=st.innerWidth,Pc.height=ed,Pc}:function(){return dr(e)})},Oy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=$r(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?o0(s):e["client"+s])||0}},Fy=function(e,t){return!t||~$i.indexOf(e)?a0(e):function(){return Pc}},Yi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=$r(e,n))?o()-a0(e)()[s]:Vs(e)?(Jn[n]||gt[n])-o0(i):e[n]-e["offset"+i])},kl=function(e,t){for(var n=0;n<wo.length;n+=3)(!t||~t.indexOf(wo[n+1]))&&e(wo[n],wo[n+1],wo[n+2])},Zn=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},Da=function(e){return typeof e=="number"},xs=function(e){return typeof e=="object"},_a=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},to=Math.abs,l0="left",c0="top",td="right",nd="bottom",ks="width",Bs="height",Ya="Right",ja="Left",$a="Top",Ka="Bottom",Zt="padding",gi="margin",Zo="Width",id="Height",tn="px",_i=function(e){return st.getComputedStyle(e)},ky=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},pp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dr=function(e,t){var n=t&&_i(e)[uf]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Zc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},u0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},By=function(e){return function(t){return xe.utils.snap(u0(e),t)}},rd=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},zy=function(e){return function(t,n){return rd(u0(e))(t,n.direction)}},Bl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},zl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hl={toggleActions:"play",anticipatePin:0},Qc={top:0,left:0,center:.5,bottom:1,right:1},bc=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Qc?Qc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Rt.createElement("div"),g=Vs(n)||$r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?gt:n,M=e.indexOf("start")!==-1,x=M?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===nn?td:nd)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Ac(_,0,i,M),_},Ac=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Zo]=1,s["border"+a+Zo]=0,s[n.p]=t+"px",xe.set(e,s)},tt=[],pf={},_l,gp=function(){return Mn()-wi>34&&(_l||(_l=requestAnimationFrame(xr)))},no=function(){(!Pn||!Pn.isPressed||Pn.startX>gt.clientWidth)&&(ot.cache++,Pn?_l||(_l=requestAnimationFrame(xr)):xr(),wi||Ws("scrollStart"),wi=Mn())},Yu=function(){i0=st.innerWidth,n0=st.innerHeight},Ia=function(e){ot.cache++,(e===!0||!Sn&&!t0&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!hf||i0!==st.innerWidth||Math.abs(st.innerHeight-n0)>st.innerHeight*.25))&&Kc.restart(!0)},Gs={},Hy=[],h0=function r(){return ln(nt,"scrollEnd",r)||Rs(!0)},Ws=function(e){return Gs[e]&&Gs[e].map(function(t){return t()})||Hy},Kn=[],f0=function(e){for(var t=0;t<Kn.length;t+=5)(!e||Kn[t+4]&&Kn[t+4].query===e)&&(Kn[t].style.cssText=Kn[t+1],Kn[t].getBBox&&Kn[t].setAttribute("transform",Kn[t+2]||""),Kn[t+3].uncache=1)},d0=function(){return ot.forEach(function(e){return wn(e)&&++e.cacheID&&(e.rec=e())})},sd=function(e,t){var n;for(Ln=0;Ln<tt.length;Ln++)n=tt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));qa=!0,t&&f0(t),t||Ws("revert")},p0=function(e,t){ot.cache++,(t||!Dn)&&ot.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(st.history.scrollRestoration=Jf=e)},Dn,zs=0,_p,Vy=function(){if(_p!==zs){var e=_p=zs;requestAnimationFrame(function(){return e===zs&&Rs(!0)})}},m0=function(){gt.appendChild(Fo),ed=!Pn&&Fo.offsetHeight||st.innerHeight,gt.removeChild(Fo)},vp=function(e){return gl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rs=function(e,t){if(Jn=Rt.documentElement,gt=Rt.body,Qf=[st,Rt,Jn,gt],wi&&!e&&!qa){cn(nt,"scrollEnd",h0);return}m0(),Dn=nt.isRefreshing=!0,qa||d0();var n=Ws("refreshInit");e0&&nt.sort(),t||sd(),ot.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),qa=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),df=1,vp(!0),tt.forEach(function(i){var s=Yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),vp(!1),df=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),p0(Jf,1),Kc.pause(),zs++,Dn=2,xr(2),tt.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=nt.isRefreshing=!1,Ws("refresh")},mf=0,Rc=1,Za,xr=function(e){if(e===2||!Dn&&!qa){nt.isUpdating=!0,Za&&Za.update(0);var t=tt.length,n=Mn(),i=n-Xu>=50,s=t&&tt[0].scroll();if(Rc=mf>s?-1:1,Dn||(mf=s),i&&(wi&&!vu&&n-wi>200&&(wi=0,Ws("scrollEnd")),Ca=Xu,Xu=n),Rc<0){for(Ln=t;Ln-- >0;)tt[Ln]&&tt[Ln].update(0,i);Rc=1}else for(Ln=0;Ln<t;Ln++)tt[Ln]&&tt[Ln].update(0,i);nt.isUpdating=!1}_l=0},gf=[l0,c0,nd,td,gi+Ka,gi+Ya,gi+$a,gi+ja,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cc=gf.concat([ks,Bs,"boxSizing","max"+Zo,"max"+id,"position",gi,Zt,Zt+$a,Zt+Ya,Zt+Ka,Zt+ja]),Gy=function(e,t,n){ko(n);var i=e._gsap;if(i.spacerIsNative)ko(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ju=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=gf.length,o=t.style,a=e.style,l;s--;)l=gf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[nd]=a[td]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ks]=Zc(e,On)+tn,o[Bs]=Zc(e,nn)+tn,o[Zt]=a[gi]=a[c0]=a[l0]="0",ko(i),a[ks]=a["max"+Zo]=n[ks],a[Bs]=a["max"+id]=n[Bs],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Wy=/([A-Z])/g,ko=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Wy,"-$1").toLowerCase())}},Gl=function(e){for(var t=Cc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Cc[s],n[Cc[s]]);return i.t=e,i},Xy=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Pc={left:0,top:0},xp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){wn(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?bc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Da(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ac(a,n,i,!0);else{wn(t)&&(t=t(l));var x=(e||"0").split(" "),S,R,A,w;M=kn(t,l)||gt,S=dr(M)||{},(!S||!S.left&&!S.top)&&_i(M).display==="none"&&(w=M.style.display,M.style.display="block",S=dr(M),w?M.style.display=w:M.style.removeProperty("display")),R=bc(x[0],S[i.d]),A=bc(x[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-A,a&&Ac(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,y=o._isStart;p="scroll"+i.d2,Ac(o,P,i,y&&P>20||!y&&(h?Math.max(gt[p],Jn[p]):o.parentNode[p])<=P+1),h&&(c=dr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return d&&M&&(p=dr(M),d.seek(f),m=dr(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},qy=/(webkit|moz|length|cssText|inset)/i,yp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=_i(e);for(o in a)!+o&&!qy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},g0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wl=function(e,t,n){var i={};i[t.p]="+="+n,xe.set(e,i)},Sp=function(e,t){var n=ns(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=g0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=xe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),nt.isTouch&&cn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){To||r.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ff(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pa){this.update=this.refresh=this.kill=Bi;return}n=pp(Zn(n)||Da(n)||n.nodeType?{trigger:n}:n,Hl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:nn,O=!h&&h!==0,N=kn(n.scroller||st),I=xe.core.getCache(N),F=Vs(N),B=("pinType"in n?n.pinType:$r(N,"pinType")||F&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=O&&n.toggleActions.split(" "),H="markers"in n?n.markers:Hl.markers,j=F?0:parseFloat(_i(N)["border"+v.p2+Zo])||0,D=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(D)},de=Oy(N,F,v),Le=Fy(N,F),Y=0,te=0,ce=0,se=ns(N,v),Re,De,Xe,G,Be,le,qe,be,Ye,T,b,K,Q,Z,ee,Ce,ie,me,Ie,ne,fe,Ne,ge,Se,Ue,it,Je,at,ft,ye,U,J,ae,ve,Me,rt,ht,pt,bt;if(D._startClamp=D._endClamp=!1,D._dir=v,p*=45,D.scroller=N,D.scroll=w?w.time.bind(w):se,G=se(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(e0=1,n.refreshPriority===-9999&&(Za=D)),I.tweenScroll=I.tweenScroll||{top:Sp(N,nn),left:Sp(N,On)},D.tweenTo=Re=I.tweenScroll[v.p],D.scrubDuration=function(ue){ae=Da(ue)&&ue,ae?J?J.duration(ue):J=xe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return m&&m(D)}}):(J&&J.progress(1).kill(),J=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),ye=0,l||(l=i.vars.id)),S&&((!xs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in gt.style&&xe.set(F?[gt,Jn]:N,{scrollBehavior:"auto"}),ot.forEach(function(ue){return wn(ue)&&ue.target===(F?Rt.scrollingElement||Jn:N)&&(ue.smooth=!1)}),Xe=wn(S.snapTo)?S.snapTo:S.snapTo==="labels"?By(i):S.snapTo==="labelsDirectional"?zy(i):S.directional!==!1?function(ue,Ge){return rd(S.snapTo)(ue,Mn()-te<500?0:Ge.direction)}:xe.utils.snap(S.snapTo),ve=S.duration||{min:.1,max:2},ve=xs(ve)?Xa(ve.min,ve.max):Xa(ve,ve),Me=xe.delayedCall(S.delay||ae/2||.1,function(){var ue=se(),Ge=Mn()-te<500,Oe=Re.tween;if((Ge||Math.abs(D.getVelocity())<10)&&!Oe&&!vu&&Y!==ue){var Ve=(ue-le)/Z,Wt=i&&!O?i.totalProgress():Ve,$e=Ge?0:(Wt-U)/(Mn()-Ca)*1e3||0,Dt=xe.utils.clamp(-Ve,1-Ve,to($e/2)*$e/.185),en=Ve+(S.inertia===!1?0:Dt),It,At,_t=S,L=_t.onStart,k=_t.onInterrupt,q=_t.onComplete;if(It=Xe(en,D),Da(It)||(It=en),At=Math.max(0,Math.round(le+It*Z)),ue<=qe&&ue>=le&&At!==ue){if(Oe&&!Oe._initted&&Oe.data<=to(At-ue))return;S.inertia===!1&&(Dt=It-Ve),Re(At,{duration:ve(to(Math.max(to(en-Wt),to(It-Wt))*.185/$e/.05||0)),ease:S.ease||"power3",data:to(At-ue),onInterrupt:function(){return Me.restart(!0)&&k&&k(D)},onComplete:function(){D.update(),Y=se(),i&&!O&&(J?J.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),ye=U=i&&!O?i.totalProgress():D.progress,M&&M(D),q&&q(D)}},ue,Dt*Z,At-ue-Dt*Z),L&&L(D,Re.tween)}}else D.isActive&&Y!==ue&&Me.restart(!0)}).pause()),l&&(pf[l]=D),f=D.trigger=kn(f||d!==!0&&d),bt=f&&f._gsap&&f._gsap.stRevert,bt&&(bt=bt(D)),d=d===!0?f:kn(d),Zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===gi||(_=!_&&d.parentNode&&d.parentNode.style&&_i(d.parentNode).display==="flex"?!1:Zt),D.pin=d,De=xe.core.getCache(d),De.spacer?ee=De.pinState:(A&&(A=kn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),De.spacerIsNative=!!A,A&&(De.spacerState=Gl(A))),De.spacer=me=A||Rt.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),De.pinState=ee=Gl(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),D.spacer=me=De.spacer,ft=_i(d),Se=ft[_+v.os2],ne=xe.getProperty(d),fe=xe.quickSetter(d,v.a,tn),ju(d,me,ft),ie=Gl(d)),H){K=xs(H)?pp(H,mp):mp,T=Vl("scroller-start",l,N,v,K,0),b=Vl("scroller-end",l,N,v,K,0,T),Ie=T["offset"+v.op.d2];var dt=kn($r(N,"content")||N);be=this.markerStart=Vl("start",l,dt,v,K,Ie,0,w),Ye=this.markerEnd=Vl("end",l,dt,v,K,Ie,0,w),w&&(pt=xe.quickSetter([be,Ye],v.a,tn)),!B&&!($i.length&&$r(N,"fixedMarkers")===!0)&&(ky(F?gt:N),xe.set([T,b],{force3D:!0}),it=xe.quickSetter(T,v.a,tn),at=xe.quickSetter(b,v.a,tn))}if(w){var Fe=w.vars.onUpdate,we=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),Fe&&Fe.apply(w,we||[])})}if(D.previous=function(){return tt[tt.indexOf(D)-1]},D.next=function(){return tt[tt.indexOf(D)+1]},D.revert=function(ue,Ge){if(!Ge)return D.kill(!0);var Oe=ue!==!1||!D.enabled,Ve=Sn;Oe!==D.isReverted&&(Oe&&(rt=Math.max(se(),D.scroll.rec||0),ce=D.progress,ht=i&&i.progress()),be&&[be,Ye,T,b].forEach(function(Wt){return Wt.style.display=Oe?"none":"block"}),Oe&&(Sn=D,D.update(Oe)),d&&(!R||!D.isActive)&&(Oe?Gy(d,me,ee):ju(d,me,_i(d),Ue)),Oe||D.update(Oe),Sn=Ve,D.isReverted=Oe)},D.refresh=function(ue,Ge,Oe,Ve){if(!((Sn||!D.enabled)&&!Ge)){if(d&&ue&&wi){cn(r,"scrollEnd",h0);return}!Dn&&re&&re(D),Sn=D,Re.tween&&!Oe&&(Re.tween.kill(),Re.tween=0),J&&J.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(hi){return hi.vars.immediateRender&&hi.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Wt=de(),$e=Le(),Dt=w?w.duration():Yi(N,v),en=Z<=.01||!Z,It=0,At=Ve||0,_t=xs(Oe)?Oe.end:n.end,L=n.endTrigger||f,k=xs(Oe)?Oe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),q=D.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,D),$=f&&Math.max(0,tt.indexOf(D))||0,W=$,oe,pe,Pe,He,Ae,Te,ze,Lt,_n,Nt,jt,vt,We;for(H&&xs(Oe)&&(vt=xe.getProperty(T,v.p),We=xe.getProperty(b,v.p));W-- >0;)Te=tt[W],Te.end||Te.refresh(0,1)||(Sn=D),ze=Te.pin,ze&&(ze===f||ze===d||ze===q)&&!Te.isReverted&&(Nt||(Nt=[]),Nt.unshift(Te),Te.revert(!0,!0)),Te!==tt[W]&&($--,W--);for(wn(k)&&(k=k(D)),k=up(k,"start",D),le=xp(k,f,Wt,v,se(),be,T,D,$e,j,B,Dt,w,D._startClamp&&"_startClamp")||(d?-.001:0),wn(_t)&&(_t=_t(D)),Zn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Zn(k)?k.split(" ")[0]:"")+_t:(It=bc(_t.substr(2),Wt),_t=Zn(k)?k:(w?xe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,le):le)+It,L=f)),_t=up(_t,"end",D),qe=Math.max(le,xp(_t||(L?"100% 0":Dt),L,Wt,v,se()+It,Ye,b,D,$e,j,B,Dt,w,D._endClamp&&"_endClamp"))||-.001,It=0,W=$;W--;)Te=tt[W]||{},ze=Te.pin,ze&&Te.start-Te._pinPush<=le&&!w&&Te.end>0&&(oe=Te.end-(D._startClamp?Math.max(0,Te.start):Te.start),(ze===f&&Te.start-Te._pinPush<le||ze===q)&&isNaN(k)&&(It+=oe*(1-Te.progress)),ze===d&&(At+=oe));if(le+=It,qe+=It,D._startClamp&&(D._startClamp+=It),D._endClamp&&!Dn&&(D._endClamp=qe||-.001,qe=Math.min(qe,Yi(N,v))),Z=qe-le||(le-=.01)&&.001,en&&(ce=xe.utils.clamp(0,1,xe.utils.normalize(le,qe,rt))),D._pinPush=At,be&&It&&(oe={},oe[v.a]="+="+It,q&&(oe[v.p]="-="+se()),xe.set([be,Ye],oe)),d&&!(df&&D.end>=Yi(N,v)))oe=_i(d),He=v===nn,Pe=se(),Ne=parseFloat(ne(v.a))+At,!Dt&&qe>1&&(jt=(F?Rt.scrollingElement||Jn:N).style,jt={style:jt,value:jt["overflow"+v.a.toUpperCase()]},F&&_i(gt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+v.a.toUpperCase()]="scroll")),ju(d,me,oe),ie=Gl(d),pe=dr(d,!0),Lt=B&&ns(N,He?On:nn)(),_?(Ue=[_+v.os2,Z+At+tn],Ue.t=me,W=_===Zt?Zc(d,v)+Z+At:0,W&&(Ue.push(v.d,W+tn),me.style.flexBasis!=="auto"&&(me.style.flexBasis=W+tn)),ko(Ue),q&&tt.forEach(function(hi){hi.pin===q&&hi.vars.pinSpacing!==!1&&(hi._subPinOffset=!0)}),B&&se(rt)):(W=Zc(d,v),W&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=W+tn)),B&&(Ae={top:pe.top+(He?Pe-le:Lt)+tn,left:pe.left+(He?Lt:Pe-le)+tn,boxSizing:"border-box",position:"fixed"},Ae[ks]=Ae["max"+Zo]=Math.ceil(pe.width)+tn,Ae[Bs]=Ae["max"+id]=Math.ceil(pe.height)+tn,Ae[gi]=Ae[gi+$a]=Ae[gi+Ya]=Ae[gi+Ka]=Ae[gi+ja]="0",Ae[Zt]=oe[Zt],Ae[Zt+$a]=oe[Zt+$a],Ae[Zt+Ya]=oe[Zt+Ya],Ae[Zt+Ka]=oe[Zt+Ka],Ae[Zt+ja]=oe[Zt+ja],Ce=Xy(ee,Ae,R),Dn&&se(0)),i?(_n=i._initted,Gu(1),i.render(i.duration(),!0,!0),ge=ne(v.a)-Ne+Z+At,Je=Math.abs(Z-ge)>1,B&&Je&&Ce.splice(Ce.length-2,2),i.render(0,!0,!0),_n||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Gu(0)):ge=Z,jt&&(jt.value?jt.style["overflow"+v.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+v.a));else if(f&&se()&&!w)for(pe=f.parentNode;pe&&pe!==gt;)pe._pinOffset&&(le-=pe._pinOffset,qe-=pe._pinOffset),pe=pe.parentNode;Nt&&Nt.forEach(function(hi){return hi.revert(!1,!0)}),D.start=le,D.end=qe,G=Be=Dn?rt:se(),!w&&!Dn&&(G<rt&&se(rt),D.scroll.rec=0),D.revert(!1,!0),te=Mn(),Me&&(Y=-1,Me.restart(!0)),Sn=0,i&&O&&(i._initted||ht)&&i.progress()!==ht&&i.progress(ht||0,!0).render(i.time(),!0,!0),(en||ce!==D.progress||w||g||i&&!i._initted)&&(i&&!O&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(w&&le<-.001&&!ce?xe.utils.normalize(le,qe,0):ce,!0),D.progress=en||(G-le)/Z===ce?0:ce),d&&_&&(me._pinOffset=Math.round(D.progress*ge)),J&&J.invalidate(),isNaN(vt)||(vt-=xe.getProperty(T,v.p),We-=xe.getProperty(b,v.p),Wl(T,v,vt),Wl(be,v,vt-(Ve||0)),Wl(b,v,We),Wl(Ye,v,We-(Ve||0))),en&&!Dn&&D.update(),u&&!Dn&&!Q&&(Q=!0,u(D),Q=!1)}},D.getVelocity=function(){return(se()-Be)/(Mn()-Ca)*1e3||0},D.endAnimation=function(){_a(D.callbackAnimation),i&&(J?J.progress(1):i.paused()?O||_a(i,D.direction<0,1):_a(i,i.reversed()))},D.labelToScroll=function(ue){return i&&i.labels&&(le||D.refresh()||le)+i.labels[ue]/i.duration()*Z||0},D.getTrailing=function(ue){var Ge=tt.indexOf(D),Oe=D.direction>0?tt.slice(0,Ge).reverse():tt.slice(Ge+1);return(Zn(ue)?Oe.filter(function(Ve){return Ve.vars.preventOverlaps===ue}):Oe).filter(function(Ve){return D.direction>0?Ve.end<=le:Ve.start>=qe})},D.update=function(ue,Ge,Oe){if(!(w&&!Oe&&!ue)){var Ve=Dn===!0?rt:D.scroll(),Wt=ue?0:(Ve-le)/Z,$e=Wt<0?0:Wt>1?1:Wt||0,Dt=D.progress,en,It,At,_t,L,k,q,$;if(Ge&&(Be=G,G=w?se():Ve,S&&(U=ye,ye=i&&!O?i.totalProgress():$e)),p&&d&&!Sn&&!Fl&&wi&&(!$e&&le<Ve+(Ve-Be)/(Mn()-Ca)*p?$e=1e-4:$e===1&&qe>Ve+(Ve-Be)/(Mn()-Ca)*p&&($e=.9999)),$e!==Dt&&D.enabled){if(en=D.isActive=!!$e&&$e<1,It=!!Dt&&Dt<1,k=en!==It,L=k||!!$e!=!!Dt,D.direction=$e>Dt?1:-1,D.progress=$e,L&&!Sn&&(At=$e&&!Dt?0:$e===1?1:Dt===1?2:3,O&&(_t=!k&&X[At+1]!=="none"&&X[At+1]||X[At],$=i&&(_t==="complete"||_t==="reset"||_t in i))),y&&(k||$)&&($||h||!i)&&(wn(y)?y(D):D.getTrailing(y).forEach(function(Pe){return Pe.endAnimation()})),O||(J&&!Sn&&!Fl?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",$e,i._tTime/i._tDur):(J.vars.totalProgress=$e,J.invalidate().restart())):i&&i.totalProgress($e,!!(Sn&&(te||ue)))),d){if(ue&&_&&(me.style[_+v.os2]=Se),!B)fe(La(Ne+ge*$e));else if(L){if(q=!ue&&$e>Dt&&qe+1>Ve&&Ve+1>=Yi(N,v),R)if(!ue&&(en||q)){var W=dr(d,!0),oe=Ve-le;yp(d,gt,W.top+(v===nn?oe:0)+tn,W.left+(v===nn?0:oe)+tn)}else yp(d,me);ko(en||q?Ce:ie),Je&&$e<1&&en||fe(Ne+($e===1&&!q?ge:0))}}S&&!Re.tween&&!Sn&&!Fl&&Me.restart(!0),a&&(k||x&&$e&&($e<1||!Wu))&&gl(a.targets).forEach(function(Pe){return Pe.classList[en||x?"add":"remove"](a.className)}),o&&!O&&!ue&&o(D),L&&!Sn?(O&&($&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(D)),(k||!Wu)&&(c&&k&&qu(D,c),V[At]&&qu(D,V[At]),x&&($e===1?D.kill(!1,1):V[At]=0),k||(At=$e===1?1:3,V[At]&&qu(D,V[At]))),P&&!en&&Math.abs(D.getVelocity())>(Da(P)?P:2500)&&(_a(D.callbackAnimation),J?J.progress(1):_a(i,_t==="reverse"?1:!$e,1))):O&&o&&!Sn&&o(D)}if(at){var pe=w?Ve/w.duration()*(w._caScrollDist||0):Ve;it(pe+(T._isFlipped?1:0)),at(pe)}pt&&pt(-Ve/w.duration()*(w._caScrollDist||0))}},D.enable=function(ue,Ge){D.enabled||(D.enabled=!0,cn(N,"resize",Ia),F||cn(N,"scroll",no),re&&cn(r,"refreshInit",re),ue!==!1&&(D.progress=ce=0,G=Be=Y=se()),Ge!==!1&&D.refresh())},D.getTween=function(ue){return ue&&Re?Re.tween:J},D.setPositions=function(ue,Ge,Oe,Ve){if(w){var Wt=w.scrollTrigger,$e=w.duration(),Dt=Wt.end-Wt.start;ue=Wt.start+Dt*ue/$e,Ge=Wt.start+Dt*Ge/$e}D.refresh(!1,!1,{start:hp(ue,Oe&&!!D._startClamp),end:hp(Ge,Oe&&!!D._endClamp)},Ve),D.update()},D.adjustPinSpacing=function(ue){if(Ue&&ue){var Ge=Ue.indexOf(v.d)+1;Ue[Ge]=parseFloat(Ue[Ge])+ue+tn,Ue[1]=parseFloat(Ue[1])+ue+tn,ko(Ue)}},D.disable=function(ue,Ge){if(ue!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ge||J&&J.pause(),rt=0,De&&(De.uncache=1),re&&ln(r,"refreshInit",re),Me&&(Me.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!F)){for(var Oe=tt.length;Oe--;)if(tt[Oe].scroller===N&&tt[Oe]!==D)return;ln(N,"resize",Ia),F||ln(N,"scroll",no)}},D.kill=function(ue,Ge){D.disable(ue,Ge),J&&!Ge&&J.kill(),l&&delete pf[l];var Oe=tt.indexOf(D);Oe>=0&&tt.splice(Oe,1),Oe===Ln&&Rc>0&&Ln--,Oe=0,tt.forEach(function(Ve){return Ve.scroller===D.scroller&&(Oe=1)}),Oe||Dn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),Ge||i.kill()),be&&[be,Ye,T,b].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),Za===D&&(Za=0),d&&(De&&(De.uncache=1),Oe=0,tt.forEach(function(Ve){return Ve.pin===d&&Oe++}),Oe||(De.spacer=0)),n.onKill&&n.onKill(D)},tt.push(D),D.enable(!1,!1),bt&&bt(D),i&&i.add&&!Z){var et=D.update;D.update=function(){D.update=et,ot.cache++,le||qe||D.refresh()},xe.delayedCall(.01,D.update),Z=.01,le=qe=0}else D.refresh();d&&Vy()},r.register=function(n){return To||(xe=n||s0(),r0()&&window.document&&r.enable(),To=Pa),To},r.defaults=function(n){if(n)for(var i in n)Hl[i]=n[i];return Hl},r.disable=function(n,i){Pa=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(st,"wheel",no),ln(Rt,"scroll",no),clearInterval(Ol),ln(Rt,"touchcancel",Bi),ln(gt,"touchstart",Bi),Bl(ln,Rt,"pointerdown,touchstart,mousedown",fp),Bl(ln,Rt,"pointerup,touchend,mouseup",dp),Kc.kill(),kl(ln);for(var s=0;s<ot.length;s+=3)zl(ln,ot[s],ot[s+1]),zl(ln,ot[s],ot[s+2])},r.enable=function(){if(st=window,Rt=document,Jn=Rt.documentElement,gt=Rt.body,xe&&(gl=xe.utils.toArray,Xa=xe.utils.clamp,ff=xe.core.context||Bi,Gu=xe.core.suppressOverwrites||Bi,Jf=st.history.scrollRestoration||"auto",mf=st.pageYOffset||0,xe.core.globals("ScrollTrigger",r),gt)){Pa=1,Fo=document.createElement("div"),Fo.style.height="100vh",Fo.style.position="absolute",m0(),Uy(),Yt.register(xe),r.isTouch=Yt.isTouch,Ir=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hf=Yt.isTouch===1,cn(st,"wheel",no),Qf=[st,Rt,Jn,gt],xe.matchMedia?(r.matchMedia=function(c){var u=xe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},xe.addEventListener("matchMediaInit",function(){d0(),sd()}),xe.addEventListener("matchMediaRevert",function(){return f0()}),xe.addEventListener("matchMedia",function(){Rs(0,1),Ws("matchMedia")}),xe.matchMedia().add("(orientation: portrait)",function(){return Yu(),Yu})):console.warn("Requires GSAP 3.11.0 or later"),Yu(),cn(Rt,"scroll",no);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,o=xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=dr(gt),nn.m=Math.round(a.top+nn.sc())||0,On.m=Math.round(a.left+On.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Ol=setInterval(gp,250),xe.delayedCall(.5,function(){return Fl=0}),cn(Rt,"touchcancel",Bi),cn(gt,"touchstart",Bi),Bl(cn,Rt,"pointerdown,touchstart,mousedown",fp),Bl(cn,Rt,"pointerup,touchend,mouseup",dp),uf=xe.utils.checkPrefix("transform"),Cc.push(uf),To=Mn(),Kc=xe.delayedCall(.2,Rs).pause(),wo=[Rt,"visibilitychange",function(){var c=st.innerWidth,u=st.innerHeight;Rt.hidden?(lp=c,cp=u):(lp!==c||cp!==u)&&Ia()},Rt,"DOMContentLoaded",Rs,st,"load",Rs,st,"resize",Ia],kl(cn),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)zl(ln,ot[l],ot[l+1]),zl(ln,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Wu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ol)||(Ol=i)&&setInterval(gp,i),"ignoreMobileResize"in n&&(hf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kl(ln)||kl(cn,n.autoRefreshEvents||"none"),t0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=ot.indexOf(s),a=Vs(s);~o&&ot.splice(o,a?6:2),i&&(a?$i.unshift(st,i,gt,i,Jn,i):$i.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?kn(n):n).getBoundingClientRect(),a=o[s?ks:Bs]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?ks:Bs],l=i==null?a/2:i in Qc?Qc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Gs.killAll||[];Gs={},i.forEach(function(s){return s()})}},r})();nt.version="3.14.2";nt.saveStyles=function(r){return r?gl(r).forEach(function(e){if(e&&e.style){var t=Kn.indexOf(e);t>=0&&Kn.splice(t,5),Kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),ff())}}):Kn};nt.revert=function(r,e){return sd(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?Ia(!0):(To||nt.register())&&Rs(!0)};nt.update=function(r){return++ot.cache&&xr(r===!0?2:0)};nt.clearScrollMemory=p0;nt.maxScroll=function(r,e){return Yi(r,e?On:nn)};nt.getScrollFunc=function(r,e){return ns(kn(r),e?On:nn)};nt.getById=function(r){return pf[r]};nt.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!wi};nt.snapDirectional=rd;nt.addEventListener=function(r,e){var t=Gs[r]||(Gs[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=Gs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=xe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&wn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return wn(s)&&(s=s(),cn(nt,"refresh",function(){return s=e.batchMax()})),gl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var Mp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},$u=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===Jn&&r(gt,t)},Xl={auto:1,scroll:1},Yy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||xe.core.getCache(s),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xl[(l=_i(s)).overflowY]||Xl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vs(s)&&(Xl[(l=_i(s)).overflowY]||Xl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},_0=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Yy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(Rt,Yt.eventTypes[0],wp,!1,!0)},onDisable:function(){return ln(Rt,Yt.eventTypes[0],wp,!0)}})},jy=/(input|label|select|textarea)/i,Tp,wp=function(e){var t=jy.test(e.target.tagName);(t||Tp)&&(e._gsapAllow=!0,Tp=t)},$y=function(e){xs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=kn(e.target)||Jn,u=xe.core.globals().ScrollSmoother,h=u&&u.get(),f=Ir&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ns(c,nn),_=ns(c,On),g=1,p=(Yt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,M=wn(i)?function(){return i(a)}:function(){return i||2.8},x,S,R=_0(c,e.type,!0,s),A=function(){return S=!1},w=Bi,P=Bi,y=function(){l=Yi(c,nn),P=Xa(Ir?1:0,l),n&&(w=Xa(0,Yi(c,On))),x=zs},v=function(){f._gsap.y=La(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(S){requestAnimationFrame(A);var H=La(a.deltaY/2),j=P(d.v-H);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var D=La((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ot.cache,xr()}return!0}d.offset&&v(),S=!0},N,I,F,B,V=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&xe.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return Ir&&X.type==="touchmove"&&O()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=g;g=La((st.visualViewport&&st.visualViewport.scale||1)/p),N.pause(),X!==g&&$u(c,g>1.01?!0:n?!1:"x"),I=_(),F=d(),y(),x=zs},e.onRelease=e.onGestureStart=function(X,H){if(d.offset&&v(),!H)B.restart(!0);else{ot.cache++;var j=M(),D,re;n&&(D=_(),re=D+j*.05*-X.velocityX/.227,j*=Mp(_,D,re,Yi(c,On)),N.vars.scrollX=w(re)),D=d(),re=D+j*.05*-X.velocityY/.227,j*=Mp(d,D,re,Yi(c,nn)),N.vars.scrollY=P(re),N.invalidate().duration(j).play(.01),(Ir&&N.vars.scrollY>=l||D>=l-1)&&xe.to({},{onUpdate:V,duration:j})}o&&o(X)},e.onWheel=function(){N._ts&&N.pause(),Mn()-m>1e3&&(x=0,m=Mn())},e.onChange=function(X,H,j,D,re){if(zs!==x&&y(),H&&n&&_(w(D[2]===H?I+(X.startX-X.x):_()+H-D[1])),j){d.offset&&v();var de=re[2]===j,Le=de?F+X.startY-X.y:d()+j-re[1],Y=P(Le);de&&Le!==Y&&(F+=Y-Le),d(Y)}(j||H)&&xr()},e.onEnable=function(){$u(c,n?!1:"x"),nt.addEventListener("refresh",V),cn(st,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){$u(c,!0),ln(st,"resize",V),nt.removeEventListener("refresh",V),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=Ir,Ir&&!d()&&d(1),Ir&&xe.ticker.add(Bi),B=a._dc,N=xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:g0(d,d(),function(){return N.pause()})},onUpdate:xr,onComplete:B.vars.onComplete}),a};nt.sort=function(r){if(wn(r))return tt.sort(r);var e=st.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Yt(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Yt?r:$y(r);return Pn&&Pn.target===e.target&&Pn.kill(),Vs(e.target)&&(Pn=e),e};nt.core={_getVelocityProp:cf,_inputObserver:_0,_scrollers:ot,_proxies:$i,bridge:{ss:function(){wi||Ws("scrollStart"),wi=Mn()},ref:function(){return Sn}}};s0()&&xe.registerPlugin(nt);const vl=new Py({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8});_e.ticker.add(r=>{vl.raf(r*1e3)});_e.ticker.lagSmoothing(500,33);_e.registerPlugin(ts);let Qa=!1,Pi=!1,ei=null,Ep=!1,bp=null,Ap=null;const Ku=new Map,Ky=new WeakMap;function Zy(r){if(Ku.has(r))return Ku.get(r);const e=new ts(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),Ku.set(r,e),e}function Qy(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Pi=!0,r.forEach(i=>{i.style.pointerEvents="all"}),ei&&(ei.style.pointerEvents="all"),_e.to(ei,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),vl&&vl.stop(),r.length?_e.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Pi=!1}}):Pi=!1,t.forEach(i=>{_e.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=Zy(s);_e.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),Qa=!0}function Zu(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Pi=!0,r.forEach(n=>{n.style.pointerEvents="none"}),ei&&(ei.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),vl&&vl.start(),r.length?_e.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{_e.set(t,{opacity:0,transform:"translateY(100%)"}),ei?_e.to(ei,{autoAlpha:0,duration:.25,onComplete:()=>{Pi=!1}}):Pi=!1}}):Pi=!1,Qa=!1}function Jy(){if(Ep)return;Ep=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".receipt-close");ei=document.querySelector(".menu-wrap"),ei&&(ei.style.pointerEvents="none",_e.set(ei,{autoAlpha:0}),bp=i=>{i.target===ei&&Qa&&!Pi&&Zu()},ei.addEventListener("click",bp)),r&&(Ap=i=>{i.preventDefault(),Pi&&(_e.killTweensOf([...e,...t]),Pi=!1),Qa?Zu():Qy()},r.addEventListener("click",Ap)),n.forEach(i=>{const s=o=>{o.preventDefault(),Qa&&!Pi&&Zu()};i.addEventListener("click",s),Ky.set(i,s)})}const xu="163",eS=0,Rp=1,tS=2,nS=0,v0=1,yu=2,cr=3,Qi=0,Wn=1,vi=2,yr=0,Hs=1,xl=2,Cp=3,Pp=4,iS=5,Ts=100,rS=101,sS=102,oS=103,aS=104,lS=200,cS=201,uS=202,hS=203,_f=204,vf=205,fS=206,dS=207,pS=208,mS=209,gS=210,_S=211,vS=212,xS=213,yS=214,SS=0,MS=1,TS=2,Jc=3,wS=4,ES=5,bS=6,AS=7,x0=0,RS=1,CS=2,Kr=0,y0=1,S0=2,M0=3,Su=4,PS=5,T0=6,w0=7,Lp="attached",LS="detached",E0=300,Qo=301,Jo=302,xf=303,yf=304,Mu=306,ea=1e3,Bn=1001,eu=1002,Fn=1003,b0=1004,Na=1005,qt=1006,Lc=1007,si=1008,Zr=1009,DS=1010,IS=1011,A0=1012,R0=1013,ta=1014,oi=1015,Mi=1016,C0=1017,P0=1018,Cl=1020,NS=35902,US=1021,OS=1022,Li=1023,FS=1024,kS=1025,Bo=1026,yl=1027,L0=1028,D0=1029,BS=1030,I0=1031,N0=1033,Qu=33776,Ju=33777,eh=33778,th=33779,Dp=35840,Ip=35841,Np=35842,Up=35843,U0=36196,Op=37492,Fp=37496,kp=37808,Bp=37809,zp=37810,Hp=37811,Vp=37812,Gp=37813,Wp=37814,Xp=37815,qp=37816,Yp=37817,jp=37818,$p=37819,Kp=37820,Zp=37821,nh=36492,Qp=36494,Jp=36495,zS=36283,em=36284,tm=36285,nm=36286,Sl=2300,na=2301,ih=2302,im=2400,rm=2401,sm=2402,HS=2500,VS=0,O0=1,Sf=2,GS=3200,WS=3201,F0=0,XS=1,Fr="",rn="srgb",rs="srgb-linear",od="display-p3",Tu="display-p3-linear",tu="linear",Ct="srgb",nu="rec709",iu="p3",io=7680,om=519,qS=512,YS=513,jS=514,k0=515,$S=516,KS=517,ZS=518,QS=519,Mf=35044,am="300 es",gr=2e3,ru=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lm=1234567;const Ja=Math.PI/180,ia=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function ad(r,e){return(r%e+e)%e}function JS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function eM(r,e,t){return r!==e?(t-r)/(e-r):0}function el(r,e,t){return(1-t)*r+t*e}function tM(r,e,t,n){return el(r,e,1-Math.exp(-t*n))}function nM(r,e=1){return e-Math.abs(ad(r,e*2)-e)}function iM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function sM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function oM(r,e){return r+Math.random()*(e-r)}function aM(r){return r*(.5-Math.random())}function lM(r){r!==void 0&&(lm=r);let e=lm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(r){return r*Ja}function uM(r){return r*ia}function hM(r){return(r&r-1)===0&&r!==0}function fM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dc={DEG2RAD:Ja,RAD2DEG:ia,generateUUID:Di,clamp:dn,euclideanModulo:ad,mapLinear:JS,inverseLerp:eM,lerp:el,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:rM,randInt:sM,randFloat:oM,randFloatSpread:aM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:hM,ceilPowerOfTwo:fM,floorPowerOfTwo:dM,setQuaternionFromProperEuler:pM,normalize:xt,denormalize:Ci};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],x=i[4],S=i[7],R=i[2],A=i[5],w=i[8];return s[0]=o*g+a*M+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*S+l*w,s[1]=c*g+u*M+h*R,s[4]=c*p+u*x+h*A,s[7]=c*m+u*S+h*w,s[2]=f*g+d*M+_*R,s[5]=f*p+d*x+_*A,s[8]=f*m+d*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rh.makeScale(e,t)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new Ze;function B0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mM(){const r=Ml("canvas");return r.style.display="block",r}const cm={};function z0(r){r in cm||(cm[r]=!0,console.warn(r))}const um=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hm=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[rs]:{transfer:tu,primaries:nu,toReference:r=>r,fromReference:r=>r},[rn]:{transfer:Ct,primaries:nu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Tu]:{transfer:tu,primaries:iu,toReference:r=>r.applyMatrix3(hm),fromReference:r=>r.applyMatrix3(um)},[od]:{transfer:Ct,primaries:iu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(hm),fromReference:r=>r.applyMatrix3(um).convertLinearToSRGB()}},gM=new Set([rs,Tu]),St={enabled:!0,_workingColorSpace:rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ql[e].toReference,i=ql[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ql[r].primaries},getTransfer:function(r){return r===Fr?tu:ql[r].transfer}};function zo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ro;class _M{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=Ml("canvas")),ro.width=e.width,ro.height=e.height;const n=ro.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ml("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zo(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zo(t[n]/255)*255):t[n]=zo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class H0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oh(i[o].image)):s.push(oh(i[o]))}else s=oh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_M.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xM=0;class Jt extends aa{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Bn,i=Bn,s=qt,o=si,a=Li,l=Zr,c=Jt.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Di(),this.name="",this.source=new H0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=E0;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,R=(m+1)/2,A=(u+f)/4,w=(h+g)/4,P=(_+p)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=w/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=P/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends aa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new H0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends yM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class V0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SM extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*M);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*M;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new z,fm=new ss;class Oi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),jl.subVectors(this.max,va),so.subVectors(e.a,va),oo.subVectors(e.b,va),ao.subVectors(e.c,va),br.subVectors(oo,so),Ar.subVectors(ao,oo),cs.subVectors(so,ao);let t=[0,-br.z,br.y,0,-Ar.z,Ar.y,0,-cs.z,cs.y,br.z,0,-br.x,Ar.z,0,-Ar.x,cs.z,0,-cs.x,-br.y,br.x,0,-Ar.y,Ar.x,0,-cs.y,cs.x,0];return!lh(t,so,oo,ao,jl)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,so,oo,ao,jl))?!1:($l.crossVectors(br,Ar),t=[$l.x,$l.y,$l.z],lh(t,so,oo,ao,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new z,new z,new z,new z,new z,new z,new z,new z],Ei=new z,Yl=new Oi,so=new z,oo=new z,ao=new z,br=new z,Ar=new z,cs=new z,va=new z,jl=new z,$l=new z,us=new z;function lh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);const a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const MM=new Oi,xa=new z,ch=new z;class er{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):MM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(ch)),this.expandByPoint(xa.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new z,uh=new z,Kl=new z,Rr=new z,hh=new z,Zl=new z,fh=new z;class Pl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uh.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(uh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kl),a=Rr.dot(this.direction),l=-Rr.dot(Kl),c=Rr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(uh).addScaledVector(Kl,f),d}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,s){hh.subVectors(t,e),Zl.subVectors(n,e),fh.crossVectors(hh,Zl);let o=this.direction.dot(fh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rr.subVectors(this.origin,e);const l=a*this.direction.dot(Zl.crossVectors(Rr,Zl));if(l<0)return null;const c=a*this.direction.dot(hh.cross(Rr));if(c<0||l+c>o)return null;const u=-a*Rr.dot(fh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/lo.setFromMatrixColumn(e,0).length(),s=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,wM)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Cr.crossVectors(n,Yn),Cr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Cr.crossVectors(n,Yn)),Cr.normalize(),Ql.crossVectors(Yn,Cr),i[0]=Cr.x,i[4]=Ql.x,i[8]=Yn.x,i[1]=Cr.y,i[5]=Ql.y,i[9]=Yn.y,i[2]=Cr.z,i[6]=Ql.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],x=n[7],S=n[11],R=n[15],A=i[0],w=i[4],P=i[8],y=i[12],v=i[1],O=i[5],N=i[9],I=i[13],F=i[2],B=i[6],V=i[10],X=i[14],H=i[3],j=i[7],D=i[11],re=i[15];return s[0]=o*A+a*v+l*F+c*H,s[4]=o*w+a*O+l*B+c*j,s[8]=o*P+a*N+l*V+c*D,s[12]=o*y+a*I+l*X+c*re,s[1]=u*A+h*v+f*F+d*H,s[5]=u*w+h*O+f*B+d*j,s[9]=u*P+h*N+f*V+d*D,s[13]=u*y+h*I+f*X+d*re,s[2]=_*A+g*v+p*F+m*H,s[6]=_*w+g*O+p*B+m*j,s[10]=_*P+g*N+p*V+m*D,s[14]=_*y+g*I+p*X+m*re,s[3]=M*A+x*v+S*F+R*H,s[7]=M*w+x*O+S*B+R*j,s[11]=M*P+x*N+S*V+R*D,s[15]=M*y+x*I+S*X+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,x=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,S=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,A=t*M+n*x+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*w,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*w,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=x*w,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*w,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*w,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=S*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=R*w,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,x=l*u,S=l*h,R=n.x,A=n.y,w=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+x)*w,i[9]=(p-M)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=lo.set(i[0],i[1],i[2]).length();const o=lo.set(i[4],i[5],i[6]).length(),a=lo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bi.copy(this);const c=1/s,u=1/o,h=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=gr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===gr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ru)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=gr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===gr)_=(o+s)*h,g=-2*h;else if(a===ru)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lo=new z,bi=new je,TM=new z(0,0,0),wM=new z(1,1,1),Cr=new z,Ql=new z,Yn=new z,dm=new je,pm=new ss;class Ji{constructor(e=0,t=0,n=0,i=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const mm=new z,co=new ss,rr=new je,Jl=new z,ya=new z,bM=new z,AM=new ss,gm=new z(1,0,0),_m=new z(0,1,0),vm=new z(0,0,1),xm={type:"added"},RM={type:"removed"},uo={type:"childadded",child:null},dh={type:"childremoved",child:null};class Ht extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,t=new Ji,n=new ss,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jl.copy(e):Jl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(ya,Jl,this.up):rr.lookAt(Jl,ya,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),co.setFromRotationMatrix(rr),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RM),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new z,sr=new z,ph=new z,or=new z,ho=new z,fo=new z,ym=new z,mh=new z,gh=new z,_h=new z;class Wi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ai.subVectors(i,t),sr.subVectors(n,t),ph.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(sr),l=Ai.dot(ph),c=sr.dot(sr),u=sr.dot(ph),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(o,or.y),l.addScaledVector(a,or.z),l)}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),sr.subVectors(e,t),Ai.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ai.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ho.subVectors(i,n),fo.subVectors(s,n),mh.subVectors(e,n);const l=ho.dot(mh),c=fo.dot(mh);if(l<=0&&c<=0)return t.copy(n);gh.subVectors(e,i);const u=ho.dot(gh),h=fo.dot(gh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ho,o);_h.subVectors(e,s);const d=ho.dot(_h),_=fo.dot(_h);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(fo,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return ym.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(ym,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(ho,o).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function vh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=ad(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vh(o,s,e+1/3),this.g=vh(o,s,e),this.b=vh(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=G0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=sh(e.r),this.g=sh(e.g),this.b=sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return St.fromWorkingColorSpace(yn.copy(this),e),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,s=yn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=rn){St.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(ec);const n=el(Pr.h,ec.h,t),i=el(Pr.s,ec.s,t),s=el(Pr.l,ec.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ke;ke.NAMES=G0;let CM=0;class Ni extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Hs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=vf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_f&&(n.blendSrc=this.blendSrc),this.blendDst!==vf&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(n.stencilFail=this.stencilFail),this.stencilZFail!==io&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pr=PM();function PM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function LM(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=dn(r,-65504,65504),pr.floatView[0]=r;const e=pr.uint32View[0],t=e>>23&511;return pr.baseTable[t]+((e&8388607)>>pr.shiftTable[t])}function DM(r){const e=r>>10;return pr.uint32View[0]=pr.mantissaTable[pr.offsetTable[e]+(r&1023)]+pr.exponentTable[e],pr.floatView[0]}const tc={toHalfFloat:LM,fromHalfFloat:DM},$t=new z,nc=new Ee;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return z0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mf&&(e.usage=this.usage),e}}class W0 extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class X0 extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ui extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let IM=0;const di=new je,xh=new Ht,po=new z,jn=new Oi,Sa=new Oi,an=new z;class qn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?X0:W0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(jn.min,Sa.min),jn.expandByPoint(an),an.addVectors(jn.max,Sa.max),jn.expandByPoint(an)):(jn.expandByPoint(Sa.min),jn.expandByPoint(Sa.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(e,c),an.add(po)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,h=new z,f=new Ee,d=new Ee,_=new Ee,g=new z,p=new z;function m(P,y,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(O),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(O),a[P].add(g),a[y].add(g),a[v].add(g),l[P].add(p),l[y].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,y=M.length;P<y;++P){const v=M[P],O=v.start,N=v.count;for(let I=O,F=O+N;I<F;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new z,S=new z,R=new z,A=new z;function w(P){R.fromBufferAttribute(i,P),A.copy(R);const y=a[P];x.copy(y),x.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(A,y);const O=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,O)}for(let P=0,y=M.length;P<y;++P){const v=M[P],O=v.start,N=v.count;for(let I=O,F=O+N;I<F;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Ft(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new je,hs=new Pl,ic=new er,Mm=new z,mo=new z,go=new z,_o=new z,yh=new z,rc=new z,sc=new Ee,oc=new Ee,ac=new Ee,Tm=new z,wm=new z,Em=new z,lc=new z,cc=new z;class un extends Ht{constructor(e=new qn,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(yh.fromBufferAttribute(h,e),o?rc.addScaledVector(yh,u):rc.addScaledVector(yh.sub(t),u))}t.add(rc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(ic.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ic,Mm)===null||hs.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=x;S<R;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);i=uc(this,m,e,n,c,u,h,A,w,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=uc(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=x;S<R;S+=3){const A=S,w=S+1,P=S+2;i=uc(this,m,e,n,c,u,h,A,w,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=p,x=p+1,S=p+2;i=uc(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function NM(r,e,t,n,i,s,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Qi,a),l===null)return null;cc.copy(a),cc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cc);return c<t.near||c>t.far?null:{distance:c,point:cc.clone(),object:r}}function uc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,mo),r.getVertexPosition(l,go),r.getVertexPosition(c,_o);const u=NM(r,e,t,n,mo,go,_o,lc);if(u){i&&(sc.fromBufferAttribute(i,a),oc.fromBufferAttribute(i,l),ac.fromBufferAttribute(i,c),u.uv=Wi.getInterpolation(lc,mo,go,_o,sc,oc,ac,new Ee)),s&&(sc.fromBufferAttribute(s,a),oc.fromBufferAttribute(s,l),ac.fromBufferAttribute(s,c),u.uv1=Wi.getInterpolation(lc,mo,go,_o,sc,oc,ac,new Ee)),o&&(Tm.fromBufferAttribute(o,a),wm.fromBufferAttribute(o,l),Em.fromBufferAttribute(o,c),u.normal=Wi.getInterpolation(lc,mo,go,_o,Tm,wm,Em,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Wi.getNormal(mo,go,_o,h.normal),u.face=h}return u}class Ll extends qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(h,2));function _(g,p,m,M,x,S,R,A,w,P,y){const v=S/w,O=R/P,N=S/2,I=R/2,F=A/2,B=w+1,V=P+1;let X=0,H=0;const j=new z;for(let D=0;D<V;D++){const re=D*O-I;for(let de=0;de<B;de++){const Le=de*v-N;j[g]=Le*M,j[p]=re*x,j[m]=F,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(de/w),h.push(1-D/P),X+=1}}for(let D=0;D<P;D++)for(let re=0;re<w;re++){const de=f+re+B*D,Le=f+re+B*(D+1),Y=f+(re+1)+B*(D+1),te=f+(re+1)+B*D;l.push(de,Le,te),l.push(Le,Y,te),H+=6}a.addGroup(d,H,y),d+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=ra(r[t]);for(const i in n)e[i]=n[i]}return e}function UM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function q0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Tl={clone:ra,merge:Cn};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=UM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Y0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new z,bm=new Ee,Am=new Ee;class pn extends Y0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Am),t.subVectors(Am,bm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vo=-90,xo=1;class kM extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(vo,xo,e,t);i.layers=this.layers,this.add(i);const s=new pn(vo,xo,e,t);s.layers=this.layers,this.add(s);const o=new pn(vo,xo,e,t);o.layers=this.layers,this.add(o);const a=new pn(vo,xo,e,t);a.layers=this.layers,this.add(a);const l=new pn(vo,xo,e,t);l.layers=this.layers,this.add(l);const c=new pn(vo,xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ru)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class j0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BM extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new j0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ll(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:yr});s.uniforms.tEquirect.value=t;const o=new un(i,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=qt),new kM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Sh=new z,zM=new z,HM=new Ze;class ys{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sh.subVectors(n,t).cross(zM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||HM.getNormalMatrix(e),i=this.coplanarPoint(Sh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new er,hc=new z;class cd{constructor(e=new ys,t=new ys,n=new ys,i=new ys,s=new ys,o=new ys){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+o,f+u,p+_,S+M).normalize(),n[3].setComponents(l-o,f-u,p-_,S-M).normalize(),n[4].setComponents(l-a,f-h,p-g,S-x).normalize(),t===gr)n[5].setComponents(l+a,f+h,p+g,S+x).normalize();else if(t===ru)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hc.x=i.normal.x>0?e.max.x:e.min.x,hc.y=i.normal.y>0?e.max.y:e.min.y,hc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function VM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class $s extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,S=M+c*(m+1),R=M+1+c*(m+1),A=M+1+c*m;d.push(x,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new Ui(_,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nT=`#ifdef USE_IRIDESCENCE
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
#endif`,iT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fT=`#define PI 3.141592653589793
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
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pT=`vec3 transformedNormal = objectNormal;
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
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xT="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`
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
}`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PT=`#ifdef USE_GRADIENTMAP
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
}`,LT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UT=`uniform bool receiveShadow;
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
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
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
#endif`,VT=`struct PhysicalMaterial {
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
}`,GT=`
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JT=`#if defined( USE_POINTS_UV )
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
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
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
#endif`,ow=`#ifdef USE_MORPHTARGETS
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
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
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
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_w=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rw=`float getShadowMask() {
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
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
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
#endif`,kw=`#ifdef USE_TRANSMISSION
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
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
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
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`#include <common>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
}`,Zw=`#define DISTANCE
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
}`,Qw=`#define DISTANCE
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define LAMBERT
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
}`,aE=`#define MATCAP
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
}`,lE=`#define MATCAP
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
}`,cE=`#define NORMAL
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
}`,uE=`#define NORMAL
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
}`,hE=`#define PHONG
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
}`,fE=`#define PHONG
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
}`,dE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
}`,mE=`#define TOON
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
}`,gE=`#define TOON
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
}`,_E=`uniform float size;
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
}`,vE=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,yE=`uniform vec3 color;
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
}`,SE=`uniform float rotation;
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
}`,ME=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:GM,alphahash_pars_fragment:WM,alphamap_fragment:XM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:jM,aomap_fragment:$M,aomap_pars_fragment:KM,batching_pars_vertex:ZM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:eT,bsdfs:tT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:aT,color_fragment:lT,color_pars_fragment:cT,color_pars_vertex:uT,color_vertex:hT,common:fT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:_T,emissivemap_pars_fragment:vT,colorspace_fragment:xT,colorspace_pars_fragment:yT,envmap_fragment:ST,envmap_common_pars_fragment:MT,envmap_pars_fragment:TT,envmap_pars_vertex:wT,envmap_physical_pars_fragment:OT,envmap_vertex:ET,fog_vertex:bT,fog_pars_vertex:AT,fog_fragment:RT,fog_pars_fragment:CT,gradientmap_pars_fragment:PT,lightmap_fragment:LT,lightmap_pars_fragment:DT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:NT,lights_pars_begin:UT,lights_toon_fragment:FT,lights_toon_pars_fragment:kT,lights_phong_fragment:BT,lights_phong_pars_fragment:zT,lights_physical_fragment:HT,lights_physical_pars_fragment:VT,lights_fragment_begin:GT,lights_fragment_maps:WT,lights_fragment_end:XT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:jT,logdepthbuf_vertex:$T,map_fragment:KT,map_pars_fragment:ZT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:ow,normal_fragment_begin:aw,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:hw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:_w,packing:vw,premultiplied_alpha_fragment:xw,project_vertex:yw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:Tw,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:bw,shadowmap_vertex:Aw,shadowmask_pars_fragment:Rw,skinbase_vertex:Cw,skinning_pars_vertex:Pw,skinning_vertex:Lw,skinnormal_vertex:Dw,specularmap_fragment:Iw,specularmap_pars_fragment:Nw,tonemapping_fragment:Uw,tonemapping_pars_fragment:Ow,transmission_fragment:Fw,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Hw,worldpos_vertex:Vw,background_vert:Gw,background_frag:Ww,backgroundCube_vert:Xw,backgroundCube_frag:qw,cube_vert:Yw,cube_frag:jw,depth_vert:$w,depth_frag:Kw,distanceRGBA_vert:Zw,distanceRGBA_frag:Qw,equirect_vert:Jw,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:hE,meshphong_frag:fE,meshphysical_vert:dE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:_E,points_frag:vE,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},he={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Hi={basic:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Cn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Cn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Cn([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Cn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Cn([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Cn([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Cn([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Cn([he.lights,he.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Hi.physical={uniforms:Cn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const fc={r:0,b:0,g:0},ds=new Ji,TE=new je;function wE(r,e,t,n,i,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let M=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Mu)?(u===void 0&&(u=new un(new Ll(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ra(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ds.copy(m.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(ds)),u.material.toneMapped=St.getTransfer(x.colorSpace)!==Ct,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new un(new $s(2,2),new hn({name:"BackgroundMaterial",uniforms:ra(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=St.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(fc,q0(r)),n.buffers.color.setClear(fc.r,fc.g,fc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function EE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,O,N,I,F){let B=!1;const V=h(I,N,O);s!==V&&(s=V,c(s.object)),B=d(v,I,N,F),B&&_(v,I,N,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(v,O,N,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,O,N){const I=N.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let B=F[O.id];B===void 0&&(B={},F[O.id]=B);let V=B[I];return V===void 0&&(V=f(l()),B[I]=V),V}function f(v){const O=[],N=[],I=[];for(let F=0;F<t;F++)O[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,O,N,I){const F=s.attributes,B=O.attributes;let V=0;const X=N.getAttributes();for(const H in X)if(X[H].location>=0){const D=F[H];let re=B[H];if(re===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function _(v,O,N,I){const F={},B=O.attributes;let V=0;const X=N.getAttributes();for(const H in X)if(X[H].location>=0){let D=B[H];D===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),F[H]=re,V++}s.attributes=F,s.attributesNum=V,s.index=I}function g(){const v=s.newAttributes;for(let O=0,N=v.length;O<N;O++)v[O]=0}function p(v){m(v,0)}function m(v,O){const N=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;N[v]=1,I[v]===0&&(r.enableVertexAttribArray(v),I[v]=1),F[v]!==O&&(r.vertexAttribDivisor(v,O),F[v]=O)}function M(){const v=s.newAttributes,O=s.enabledAttributes;for(let N=0,I=O.length;N<I;N++)O[N]!==v[N]&&(r.disableVertexAttribArray(N),O[N]=0)}function x(v,O,N,I,F,B,V){V===!0?r.vertexAttribIPointer(v,O,N,F,B):r.vertexAttribPointer(v,O,N,I,F,B)}function S(v,O,N,I){g();const F=I.attributes,B=N.getAttributes(),V=O.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let j=F[X];if(j===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const D=j.normalized,re=j.itemSize,de=e.get(j);if(de===void 0)continue;const Le=de.buffer,Y=de.type,te=de.bytesPerElement,ce=Y===r.INT||Y===r.UNSIGNED_INT||j.gpuType===R0;if(j.isInterleavedBufferAttribute){const se=j.data,Re=se.stride,De=j.offset;if(se.isInstancedInterleavedBuffer){for(let Xe=0;Xe<H.locationSize;Xe++)m(H.location+Xe,se.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Xe=0;Xe<H.locationSize;Xe++)p(H.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Xe=0;Xe<H.locationSize;Xe++)x(H.location+Xe,re/H.locationSize,Y,D,Re*te,(De+re/H.locationSize*Xe)*te,ce)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)m(H.location+se,j.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<H.locationSize;se++)p(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let se=0;se<H.locationSize;se++)x(H.location+se,re/H.locationSize,Y,D,re*te,re/H.locationSize*se*te,ce)}}else if(V!==void 0){const D=V[X];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}M()}function R(){P();for(const v in n){const O=n[v];for(const N in O){const I=O[N];for(const F in I)u(I[F].object),delete I[F];delete O[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const O=n[v.id];for(const N in O){const I=O[N];for(const F in I)u(I[F].object),delete I[F];delete O[N]}delete n[v.id]}function w(v){for(const O in n){const N=n[O];if(N[v.id]===void 0)continue;const I=N[v.id];for(const F in I)u(I[F].object),delete I[F];delete N[v.id]}}function P(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function bE(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function AE(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:m,maxSamples:M}}function RE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ys,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let S=m.clippingState||null;l.value=S,S=u(_,f,x,d);for(let R=0;R!==x;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==g;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function CE(r){let e=new WeakMap;function t(o,a){return a===xf?o.mapping=Qo:a===yf&&(o.mapping=Jo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xf||a===yf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new BM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wu extends Y0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,Rm=[.125,.215,.35,.446,.526,.582],ws=20,Mh=new wu,Cm=new ke;let Th=null,wh=0,Eh=0,bh=!1;const Ss=(1+Math.sqrt(5))/2,yo=1/Ss,Pm=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ss,yo),new z(0,Ss,-yo),new z(yo,0,Ss),new z(-yo,0,Ss),new z(Ss,yo,0),new z(-Ss,yo,0)];class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,wh,Eh),this._renderer.xr.enabled=bh,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Mi,format:Li,colorSpace:rs,depthBuffer:!1},i=Lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PE(s)),this._blurMaterial=LE(s,e,t)}return i}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,n,i){const a=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cm),u.toneMapping=Kr,u.autoClear=!1;const d=new _r({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new un(new Ll,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Cm),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;dc(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qo||e.mapping===Jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pm[(i-1)%Pm.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new un(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ws-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):ws;p>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ws}`);const m=[];let M=0;for(let w=0;w<ws;++w){const P=w/g,y=Math.exp(-P*P/2);m.push(y),w===0?M+=y:w<p&&(M+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-Co?i-x+Co:0),A=4*(this._cubeSize-S);dc(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Mh)}}function PE(r){const e=[],t=[],n=[];let i=r;const s=r-Co+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Co?l=Rm[o-r+Co-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),x=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,P=A>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(y,g*_*A),x.set(f,p*_*A);const v=[A,A,A,A,A,A];S.set(v,m*_*A)}const R=new qn;R.setAttribute("position",new Ft(M,g)),R.setAttribute("uv",new Ft(x,p)),R.setAttribute("faceIndex",new Ft(S,m)),e.push(R),i>Co&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lm(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=Mu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function LE(r,e,t){const n=new Float32Array(ws),i=new z(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ud(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Dm(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Im(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function DE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xf||l===yf,u=l===Qo||l===Jo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new su(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new su(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function IE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function NE(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let x=0,S=M.length;x<S;x+=3){const R=M[x+0],A=M[x+1],w=M[x+2];f.push(R,A,A,w,w,R)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const R=x+0,A=x+1,w=x+2;f.push(R,A,A,w,w,R)}}else return;const p=new(B0(f)?X0:W0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UE(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(h[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function OE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FE(r,e,t){const n=new WeakMap,i=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*h),P=new V0(w,R,A,h);P.type=oi,P.needsUpdate=!0;const y=S*4;for(let O=0;O<h;O++){const N=m[O],I=M[O],F=x[O],B=R*A*4*O;for(let V=0;V<N.count;V++){const X=V*y;_===!0&&(i.fromBufferAttribute(N,V),w[B+X+0]=i.x,w[B+X+1]=i.y,w[B+X+2]=i.z,w[B+X+3]=0),g===!0&&(i.fromBufferAttribute(I,V),w[B+X+4]=i.x,w[B+X+5]=i.y,w[B+X+6]=i.z,w[B+X+7]=0),p===!0&&(i.fromBufferAttribute(F,V),w[B+X+8]=i.x,w[B+X+9]=i.y,w[B+X+10]=i.z,w[B+X+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new Ee(R,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function kE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class K0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Bo,u!==Bo&&u!==yl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bo&&(n=ta),n===void 0&&u===yl&&(n=Cl),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Z0=new Jt,Q0=new K0(1,1);Q0.compareFunction=k0;const J0=new V0,ev=new SM,tv=new j0,Nm=[],Um=[],Om=new Float32Array(16),Fm=new Float32Array(9),km=new Float32Array(4);function la(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Nm[i];if(s===void 0&&(s=new Float32Array(i),Nm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eu(r,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function GE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;km.set(n),r.uniformMatrix2fv(this.addr,!1,km),on(t,n)}}function WE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Fm.set(n),r.uniformMatrix3fv(this.addr,!1,Fm),on(t,n)}}function XE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Om.set(n),r.uniformMatrix4fv(this.addr,!1,Om),on(t,n)}}function qE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function jE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function $E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function KE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function eb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Q0:Z0;t.setTexture2D(e||s,i)}function tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ev,i)}function nb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tv,i)}function ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||J0,i)}function rb(r){switch(r){case 5126:return BE;case 35664:return zE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return qE;case 35667:case 35671:return YE;case 35668:case 35672:return jE;case 35669:case 35673:return $E;case 5125:return KE;case 36294:return ZE;case 36295:return QE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(r,e){r.uniform1fv(this.addr,e)}function ob(r,e){const t=la(e,this.size,2);r.uniform2fv(this.addr,t)}function ab(r,e){const t=la(e,this.size,3);r.uniform3fv(this.addr,t)}function lb(r,e){const t=la(e,this.size,4);r.uniform4fv(this.addr,t)}function cb(r,e){const t=la(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ub(r,e){const t=la(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hb(r,e){const t=la(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fb(r,e){r.uniform1iv(this.addr,e)}function db(r,e){r.uniform2iv(this.addr,e)}function pb(r,e){r.uniform3iv(this.addr,e)}function mb(r,e){r.uniform4iv(this.addr,e)}function gb(r,e){r.uniform1uiv(this.addr,e)}function _b(r,e){r.uniform2uiv(this.addr,e)}function vb(r,e){r.uniform3uiv(this.addr,e)}function xb(r,e){r.uniform4uiv(this.addr,e)}function yb(r,e,t){const n=this.cache,i=e.length,s=Eu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Z0,s[o])}function Sb(r,e,t){const n=this.cache,i=e.length,s=Eu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ev,s[o])}function Mb(r,e,t){const n=this.cache,i=e.length,s=Eu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tv,s[o])}function Tb(r,e,t){const n=this.cache,i=e.length,s=Eu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||J0,s[o])}function wb(r){switch(r){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return fb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}}class bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function Bm(r,e){r.seq.push(e),r.map[e.id]=e}function Rb(r,e,t){const n=r.name,i=n.length;for(Ah.lastIndex=0;;){const s=Ah.exec(n),o=Ah.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bm(t,c===void 0?new Eb(a,r,e):new bb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ab(a),Bm(t,h)),t=h}}}class Ic{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Rb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Cb=37297;let Pb=0;function Lb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Db(r){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(r);let n;switch(e===t?n="":e===iu&&t===nu?n="LinearDisplayP3ToLinearSRGB":e===nu&&t===iu&&(n="LinearSRGBToLinearDisplayP3"),r){case rs:case Tu:return[n,"LinearTransferOETF"];case rn:case od:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Hm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Lb(r.getShaderSource(e),o)}else return i}function Ib(r,e){const t=Db(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nb(r,e){let t;switch(e){case y0:t="Linear";break;case S0:t="Reinhard";break;case M0:t="OptimizedCineon";break;case Su:t="ACESFilmic";break;case T0:t="AgX";break;case w0:t="Neutral";break;case PS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ub(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function Ob(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ua(r){return r!==""}function Vm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(r){return r.replace(kb,zb)}const Bb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zb(r,e){let t=Ke[e];if(t===void 0){const n=Bb.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(r){return r.replace(Hb,Vb)}function Vb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Gb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qo:case Jo:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Jo&&(e="ENVMAP_MODE_REFRACTION"),e}function qb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case RS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gb(t),c=Wb(t),u=Xb(t),h=qb(t),f=Yb(t),d=Ub(t),_=Ob(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),m.length>0&&(m+=`
`)):(p=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),m=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Kr?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=Tf(o),o=Vm(o,t),o=Gm(o,t),a=Tf(a),a=Vm(a,t),a=Gm(a,t),o=Wm(o),a=Wm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,S=M+m+a,R=zm(i,i.VERTEX_SHADER,x),A=zm(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(O){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(A).trim();let B=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const X=Hm(i,R,"vertex"),H=Hm(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+X+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||F==="")&&(V=!1);V&&(O.diagnostics={runnable:B,programLog:N,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(R),i.deleteShader(A),P=new Ic(i,g),y=Fb(i,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Cb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let $b=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zb(e),t.set(e,n)),n}}class Zb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Qb(r,e,t,n,i,s,o){const a=new ld,l=new Kb,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,O,N,I){const F=N.fog,B=I.geometry,V=y.isMeshStandardMaterial?N.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=X&&X.mapping===Mu?X.image.height:null,j=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const D=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=D!==void 0?D.length:0;let de=0;B.morphAttributes.position!==void 0&&(de=1),B.morphAttributes.normal!==void 0&&(de=2),B.morphAttributes.color!==void 0&&(de=3);let Le,Y,te,ce;if(j){const bt=Hi[j];Le=bt.vertexShader,Y=bt.fragmentShader}else Le=y.vertexShader,Y=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const se=r.getRenderTarget(),Re=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Xe=!!y.map,G=!!y.matcap,Be=!!X,le=!!y.aoMap,qe=!!y.lightMap,be=!!y.bumpMap,Ye=!!y.normalMap,T=!!y.displacementMap,b=!!y.emissiveMap,K=!!y.metalnessMap,Q=!!y.roughnessMap,Z=y.anisotropy>0,ee=y.clearcoat>0,Ce=y.iridescence>0,ie=y.sheen>0,me=y.transmission>0,Ie=Z&&!!y.anisotropyMap,ne=ee&&!!y.clearcoatMap,fe=ee&&!!y.clearcoatNormalMap,Ne=ee&&!!y.clearcoatRoughnessMap,ge=Ce&&!!y.iridescenceMap,Se=Ce&&!!y.iridescenceThicknessMap,Ue=ie&&!!y.sheenColorMap,it=ie&&!!y.sheenRoughnessMap,Je=!!y.specularMap,at=!!y.specularColorMap,ft=!!y.specularIntensityMap,ye=me&&!!y.transmissionMap,U=me&&!!y.thicknessMap,J=!!y.gradientMap,ae=!!y.alphaMap,ve=y.alphaTest>0,Me=!!y.alphaHash,rt=!!y.extensions;let ht=Kr;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=r.toneMapping);const pt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:Y,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:De,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rs,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:G,envMap:Be,envMapMode:Be&&X.mapping,envMapCubeUVHeight:H,aoMap:le,lightMap:qe,bumpMap:be,normalMap:Ye,displacementMap:f&&T,emissiveMap:b,normalMapObjectSpace:Ye&&y.normalMapType===XS,normalMapTangentSpace:Ye&&y.normalMapType===F0,metalnessMap:K,roughnessMap:Q,anisotropy:Z,anisotropyMap:Ie,clearcoat:ee,clearcoatMap:ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ne,iridescence:Ce,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:ie,sheenColorMap:Ue,sheenRoughnessMap:it,specularMap:Je,specularColorMap:at,specularIntensityMap:ft,transmission:me,transmissionMap:ye,thicknessMap:U,gradientMap:J,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Me,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:le&&g(y.aoMap.channel),lightMapUv:qe&&g(y.lightMap.channel),bumpMapUv:be&&g(y.bumpMap.channel),normalMapUv:Ye&&g(y.normalMap.channel),displacementMapUv:T&&g(y.displacementMap.channel),emissiveMapUv:b&&g(y.emissiveMap.channel),metalnessMapUv:K&&g(y.metalnessMap.channel),roughnessMapUv:Q&&g(y.roughnessMap.channel),anisotropyMapUv:Ie&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:it&&g(y.sheenRoughnessMap.channel),specularMapUv:Je&&g(y.specularMap.channel),specularColorMapUv:at&&g(y.specularColorMap.channel),specularIntensityMapUv:ft&&g(y.specularIntensityMap.channel),transmissionMapUv:ye&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:ae&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ye||Z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Xe||ae),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:de,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===Wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)v.push(O),v.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(M(v,y),x(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function x(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const v=_[y.type];let O;if(v){const N=Hi[v];O=Tl.clone(N.uniforms)}else O=y.uniforms;return O}function R(y,v){let O;for(let N=0,I=u.length;N<I;N++){const F=u[N];if(F.cacheKey===v){O=F,++O.usedTimes;break}}return O===void 0&&(O=new jb(r,v,y,s),u.push(O)),O}function A(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function Jb(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function eA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ym(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||eA),n.length>1&&n.sort(f||qm),i.length>1&&i.sort(f||qm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function tA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ym,r.set(n,[o])):i>=s.length?(o=new Ym,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function nA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ke};break;case"SpotLight":t={position:new z,direction:new z,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function iA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rA=0;function sA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oA(r){const e=new nA,t=iA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new je,o=new je;function a(c,u){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let _=0,g=0,p=0,m=0,M=0,x=0,S=0,R=0,A=0,w=0,P=0;c.sort(sA);const y=u===!0?Math.PI:1;for(let O=0,N=c.length;O<N;O++){const I=c[O],F=I.color,B=I.intensity,V=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B*y,f+=F.g*B*y,d+=F.b*B*y;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],B);P++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const j=I.shadow,D=t.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,n.directionalShadow[_]=D,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=I.shadow.matrix,x++}n.directional[_]=H,_++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(B*y),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[p]=H;const j=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[p]=j.matrix,I.castShadow){const D=t.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,n.spotShadow[p]=D,n.spotShadowMap[p]=X,R++}p++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*y),H.distance=I.distance,H.decay=I.decay,I.castShadow){const j=I.shadow,D=t.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(B*y),H.groundColor.copy(I.groundColor).multiplyScalar(B*y),n.hemi[M]=H,M++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==_||v.pointLength!==g||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==M||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==R||v.numSpotMaps!==A||v.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=M,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=R+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,v.directionalLength=_,v.pointLength=g,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=M,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=R,v.numSpotMaps=A,v.numLightProbes=P,n.version=rA++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function jm(r){const e=new oA(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aA(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new jm(r),e.set(i,[a])):s>=o.length?(a=new jm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lA extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cA extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
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
}`;function fA(r,e,t){let n=new cd;const i=new Ee,s=new Ee,o=new Et,a=new lA({depthPacking:WS}),l=new cA,c={},u=t.maxTextureSize,h={[Qi]:Wn,[Wn]:Qi,[vi]:vi},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:uA,fragmentShader:hA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new un(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let m=this.type;this.render=function(A,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),N=r.state;N.setBlending(yr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=m!==cr&&this.type===cr,F=m===cr&&this.type!==cr;for(let B=0,V=A.length;B<V;B++){const X=A[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const j=H.getFrameExtents();if(i.multiply(j),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||I===!0||F===!0){const re=this.type!==cr?{minFilter:Fn,magFilter:Fn}:{};H.map!==null&&H.map.dispose(),H.map=new Ii(i.x,i.y,re),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let re=0;re<D;re++){const de=H.getViewport(re);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),N.viewport(o),H.updateMatrices(X,re),n=H.getFrustum(),S(w,P,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===cr&&M(H,P),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,v,O)};function M(A,w){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ii(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,P,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,P,d,g,null)}function x(A,w,P,y){let v=null;const O=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)v=O;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=v.uuid,I=w.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let B=F[I];B===void 0&&(B=v.clone(),F[I]=B,w.addEventListener("dispose",R)),v=B}if(v.visible=w.visible,v.wireframe=w.wireframe,y===cr?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=P}return v}function S(A,w,P,y,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===cr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const I=e.update(A),F=A.material;if(Array.isArray(F)){const B=I.groups;for(let V=0,X=B.length;V<X;V++){const H=B[V],j=F[H.materialIndex];if(j&&j.visible){const D=x(A,j,y,v);A.onBeforeShadow(r,A,w,P,I,D,H),r.renderBufferDirect(P,null,I,D,A,H),A.onAfterShadow(r,A,w,P,I,D,H)}}}else if(F.visible){const B=x(A,F,y,v);A.onBeforeShadow(r,A,w,P,I,B,null),r.renderBufferDirect(P,null,I,B,A,null),A.onAfterShadow(r,A,w,P,I,B,null)}}const N=A.children;for(let I=0,F=N.length;I<F;I++)S(N[I],w,P,y,v)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const y=c[P],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function dA(r){function e(){let U=!1;const J=new Et;let ae=null;const ve=new Et(0,0,0,0);return{setMask:function(Me){ae!==Me&&!U&&(r.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){U=Me},setClear:function(Me,rt,ht,pt,bt){bt===!0&&(Me*=pt,rt*=pt,ht*=pt),J.set(Me,rt,ht,pt),ve.equals(J)===!1&&(r.clearColor(Me,rt,ht,pt),ve.copy(J))},reset:function(){U=!1,ae=null,ve.set(-1,0,0,0)}}}function t(){let U=!1,J=null,ae=null,ve=null;return{setTest:function(Me){Me?ce(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(Me){J!==Me&&!U&&(r.depthMask(Me),J=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case SS:r.depthFunc(r.NEVER);break;case MS:r.depthFunc(r.ALWAYS);break;case TS:r.depthFunc(r.LESS);break;case Jc:r.depthFunc(r.LEQUAL);break;case wS:r.depthFunc(r.EQUAL);break;case ES:r.depthFunc(r.GEQUAL);break;case bS:r.depthFunc(r.GREATER);break;case AS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Me}},setLocked:function(Me){U=Me},setClear:function(Me){ve!==Me&&(r.clearDepth(Me),ve=Me)},reset:function(){U=!1,J=null,ae=null,ve=null}}}function n(){let U=!1,J=null,ae=null,ve=null,Me=null,rt=null,ht=null,pt=null,bt=null;return{setTest:function(dt){U||(dt?ce(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(dt){J!==dt&&!U&&(r.stencilMask(dt),J=dt)},setFunc:function(dt,Fe,we){(ae!==dt||ve!==Fe||Me!==we)&&(r.stencilFunc(dt,Fe,we),ae=dt,ve=Fe,Me=we)},setOp:function(dt,Fe,we){(rt!==dt||ht!==Fe||pt!==we)&&(r.stencilOp(dt,Fe,we),rt=dt,ht=Fe,pt=we)},setLocked:function(dt){U=dt},setClear:function(dt){bt!==dt&&(r.clearStencil(dt),bt=dt)},reset:function(){U=!1,J=null,ae=null,ve=null,Me=null,rt=null,ht=null,pt=null,bt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,R=null,A=new ke(0,0,0),w=0,P=!1,y=null,v=null,O=null,N=null,I=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=V>=2);let H=null,j={};const D=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),de=new Et().fromArray(D),Le=new Et().fromArray(re);function Y(U,J,ae,ve){const Me=new Uint8Array(4),rt=r.createTexture();r.bindTexture(U,rt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<ae;ht++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(J+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return rt}const te={};te[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),s.setFunc(Jc),be(!1),Ye(Rp),ce(r.CULL_FACE),le(yr);function ce(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function se(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function Re(U,J){return u[U]!==J?(r.bindFramebuffer(U,J),u[U]=J,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=J),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=J),!0):!1}function De(U,J){let ae=f,ve=!1;if(U){ae=h.get(J),ae===void 0&&(ae=[],h.set(J,ae));const Me=U.textures;if(ae.length!==Me.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,ht=Me.length;rt<ht;rt++)ae[rt]=r.COLOR_ATTACHMENT0+rt;ae.length=Me.length,ve=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ae)}function Xe(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const G={[Ts]:r.FUNC_ADD,[rS]:r.FUNC_SUBTRACT,[sS]:r.FUNC_REVERSE_SUBTRACT};G[oS]=r.MIN,G[aS]=r.MAX;const Be={[lS]:r.ZERO,[cS]:r.ONE,[uS]:r.SRC_COLOR,[_f]:r.SRC_ALPHA,[gS]:r.SRC_ALPHA_SATURATE,[pS]:r.DST_COLOR,[fS]:r.DST_ALPHA,[hS]:r.ONE_MINUS_SRC_COLOR,[vf]:r.ONE_MINUS_SRC_ALPHA,[mS]:r.ONE_MINUS_DST_COLOR,[dS]:r.ONE_MINUS_DST_ALPHA,[_S]:r.CONSTANT_COLOR,[vS]:r.ONE_MINUS_CONSTANT_COLOR,[xS]:r.CONSTANT_ALPHA,[yS]:r.ONE_MINUS_CONSTANT_ALPHA};function le(U,J,ae,ve,Me,rt,ht,pt,bt,dt){if(U===yr){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(ce(r.BLEND),_=!0),U!==iS){if(U!==g||dt!==P){if((p!==Ts||x!==Ts)&&(r.blendEquation(r.FUNC_ADD),p=Ts,x=Ts),dt)switch(U){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.ONE,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,M=null,S=null,R=null,A.set(0,0,0),w=0,g=U,P=dt}return}Me=Me||J,rt=rt||ae,ht=ht||ve,(J!==p||Me!==x)&&(r.blendEquationSeparate(G[J],G[Me]),p=J,x=Me),(ae!==m||ve!==M||rt!==S||ht!==R)&&(r.blendFuncSeparate(Be[ae],Be[ve],Be[rt],Be[ht]),m=ae,M=ve,S=rt,R=ht),(pt.equals(A)===!1||bt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,bt),A.copy(pt),w=bt),g=U,P=!1}function qe(U,J){U.side===vi?se(r.CULL_FACE):ce(r.CULL_FACE);let ae=U.side===Wn;J&&(ae=!ae),be(ae),U.blending===Hs&&U.transparent===!1?le(yr):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const ve=U.stencilWrite;o.setTest(ve),ve&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),b(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function Ye(U){U!==eS?(ce(r.CULL_FACE),U!==v&&(U===Rp?r.cullFace(r.BACK):U===tS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),v=U}function T(U){U!==O&&(B&&r.lineWidth(U),O=U)}function b(U,J,ae){U?(ce(r.POLYGON_OFFSET_FILL),(N!==J||I!==ae)&&(r.polygonOffset(J,ae),N=J,I=ae)):se(r.POLYGON_OFFSET_FILL)}function K(U){U?ce(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function Q(U){U===void 0&&(U=r.TEXTURE0+F-1),H!==U&&(r.activeTexture(U),H=U)}function Z(U,J,ae){ae===void 0&&(H===null?ae=r.TEXTURE0+F-1:ae=H);let ve=j[ae];ve===void 0&&(ve={type:void 0,texture:void 0},j[ae]=ve),(ve.type!==U||ve.texture!==J)&&(H!==ae&&(r.activeTexture(ae),H=ae),r.bindTexture(U,J||te[U]),ve.type=U,ve.texture=J)}function ee(){const U=j[H];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(U){de.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),de.copy(U))}function Je(U){Le.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function at(U,J){let ae=l.get(J);ae===void 0&&(ae=new WeakMap,l.set(J,ae));let ve=ae.get(U);ve===void 0&&(ve=r.getUniformBlockIndex(J,U.name),ae.set(U,ve))}function ft(U,J){const ve=l.get(J).get(U);a.get(J)!==ve&&(r.uniformBlockBinding(J,ve,U.__bindingPointIndex),a.set(J,ve))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},H=null,j={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,R=null,A=new ke(0,0,0),w=0,P=!1,y=null,v=null,O=null,N=null,I=null,de.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ce,disable:se,bindFramebuffer:Re,drawBuffers:De,useProgram:Xe,setBlending:le,setMaterial:qe,setFlipSided:be,setCullFace:Ye,setLineWidth:T,setPolygonOffset:b,setScissorTest:K,activeTexture:Q,bindTexture:Z,unbindTexture:ee,compressedTexImage2D:Ce,compressedTexImage3D:ie,texImage2D:Se,texImage3D:Ue,updateUBOMapping:at,uniformBlockBinding:ft,texStorage2D:Ne,texStorage3D:ge,texSubImage2D:me,texSubImage3D:Ie,compressedTexSubImage2D:ne,compressedTexSubImage3D:fe,scissor:it,viewport:Je,reset:ye}}function pA(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return d?new OffscreenCanvas(T,b):Ml("canvas")}function g(T,b,K){let Q=1;const Z=Ye(T);if((Z.width>K||Z.height>K)&&(Q=K/Math.max(Z.width,Z.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ee=Math.floor(Q*Z.width),Ce=Math.floor(Q*Z.height);h===void 0&&(h=_(ee,Ce));const ie=b?_(ee,Ce):h;return ie.width=ee,ie.height=Ce,ie.getContext("2d").drawImage(T,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+Ce+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Fn&&T.minFilter!==qt}function m(T){r.generateMipmap(T)}function M(T,b,K,Q,Z=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=b;if(b===r.RED&&(K===r.FLOAT&&(ee=r.R32F),K===r.HALF_FLOAT&&(ee=r.R16F),K===r.UNSIGNED_BYTE&&(ee=r.R8)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.R8UI),K===r.UNSIGNED_SHORT&&(ee=r.R16UI),K===r.UNSIGNED_INT&&(ee=r.R32UI),K===r.BYTE&&(ee=r.R8I),K===r.SHORT&&(ee=r.R16I),K===r.INT&&(ee=r.R32I)),b===r.RG&&(K===r.FLOAT&&(ee=r.RG32F),K===r.HALF_FLOAT&&(ee=r.RG16F),K===r.UNSIGNED_BYTE&&(ee=r.RG8)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.RG8UI),K===r.UNSIGNED_SHORT&&(ee=r.RG16UI),K===r.UNSIGNED_INT&&(ee=r.RG32UI),K===r.BYTE&&(ee=r.RG8I),K===r.SHORT&&(ee=r.RG16I),K===r.INT&&(ee=r.RG32I)),b===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),b===r.RGBA){const Ce=Z?tu:St.getTransfer(Q);K===r.FLOAT&&(ee=r.RGBA32F),K===r.HALF_FLOAT&&(ee=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ee=Ce===Ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(T,b){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fn&&T.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function S(T){const b=T.target;b.removeEventListener("dispose",S),A(b),b.isVideoTexture&&u.delete(b)}function R(T){const b=T.target;b.removeEventListener("dispose",R),P(b)}function A(T){const b=n.get(T);if(b.__webglInit===void 0)return;const K=T.source,Q=f.get(K);if(Q){const Z=Q[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(Q).length===0&&f.delete(K)}n.remove(T)}function w(T){const b=n.get(T);r.deleteTexture(b.__webglTexture);const K=T.source,Q=f.get(K);delete Q[b.__cacheKey],o.memory.textures--}function P(T){const b=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let Z=0;Z<b.__webglFramebuffer[Q].length;Z++)r.deleteFramebuffer(b.__webglFramebuffer[Q][Z]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=T.textures;for(let Q=0,Z=K.length;Q<Z;Q++){const ee=n.get(K[Q]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(K[Q])}n.remove(T)}let y=0;function v(){y=0}function O(){const T=y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),y+=1,T}function N(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function I(T,b){const K=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&K.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,T,b);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function F(T,b){const K=n.get(T);if(T.version>0&&K.__version!==T.version){de(K,T,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function B(T,b){const K=n.get(T);if(T.version>0&&K.__version!==T.version){de(K,T,b);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function V(T,b){const K=n.get(T);if(T.version>0&&K.__version!==T.version){Le(K,T,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const X={[ea]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[eu]:r.MIRRORED_REPEAT},H={[Fn]:r.NEAREST,[b0]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[qt]:r.LINEAR,[Lc]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},j={[qS]:r.NEVER,[QS]:r.ALWAYS,[YS]:r.LESS,[k0]:r.LEQUAL,[jS]:r.EQUAL,[ZS]:r.GEQUAL,[$S]:r.GREATER,[KS]:r.NOTEQUAL};function D(T,b){if(b.type===oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===Lc||b.magFilter===Na||b.magFilter===si||b.minFilter===qt||b.minFilter===Lc||b.minFilter===Na||b.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,X[b.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,H[b.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,H[b.minFilter]),b.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==Na&&b.minFilter!==si||b.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function re(T,b){let K=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",S));const Q=b.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const ee=N(b);if(ee!==T.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Z[ee].usedTimes++;const Ce=Z[T.__cacheKey];Ce!==void 0&&(Z[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(b)),T.__cacheKey=ee,T.__webglTexture=Z[ee].texture}return K}function de(T,b,K){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=re(T,b),ee=b.source;t.bindTexture(Q,T.__webglTexture,r.TEXTURE0+K);const Ce=n.get(ee);if(ee.version!==Ce.__version||Z===!0){t.activeTexture(r.TEXTURE0+K);const ie=St.getPrimaries(St.workingColorSpace),me=b.colorSpace===Fr?null:St.getPrimaries(b.colorSpace),Ie=b.colorSpace===Fr||ie===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ne=g(b.image,!1,i.maxTextureSize);ne=be(b,ne);const fe=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let ge=M(b.internalFormat,fe,Ne,b.colorSpace,b.isVideoTexture);D(Q,b);let Se;const Ue=b.mipmaps,it=b.isVideoTexture!==!0&&ge!==U0,Je=Ce.__version===void 0||Z===!0,at=ee.dataReady,ft=x(b,ne);if(b.isDepthTexture)ge=r.DEPTH_COMPONENT16,b.type===oi?ge=r.DEPTH_COMPONENT32F:b.type===ta?ge=r.DEPTH_COMPONENT24:b.type===Cl&&(ge=r.DEPTH24_STENCIL8),Je&&(it?t.texStorage2D(r.TEXTURE_2D,1,ge,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ne,null));else if(b.isDataTexture)if(Ue.length>0){it&&Je&&t.texStorage2D(r.TEXTURE_2D,ft,ge,Ue[0].width,Ue[0].height);for(let ye=0,U=Ue.length;ye<U;ye++)Se=Ue[ye],it?at&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Ne,Se.data):t.texImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,fe,Ne,Se.data);b.generateMipmaps=!1}else it?(Je&&t.texStorage2D(r.TEXTURE_2D,ft,ge,ne.width,ne.height),at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,fe,Ne,ne.data)):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,fe,Ne,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,ge,Ue[0].width,Ue[0].height,ne.depth);for(let ye=0,U=Ue.length;ye<U;ye++)Se=Ue[ye],b.format!==Li?fe!==null?it?at&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,fe,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,fe,Ne,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,fe,Ne,Se.data)}else{it&&Je&&t.texStorage2D(r.TEXTURE_2D,ft,ge,Ue[0].width,Ue[0].height);for(let ye=0,U=Ue.length;ye<U;ye++)Se=Ue[ye],b.format!==Li?fe!==null?it?at&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?at&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Se.width,Se.height,fe,Ne,Se.data):t.texImage2D(r.TEXTURE_2D,ye,ge,Se.width,Se.height,0,fe,Ne,Se.data)}else if(b.isDataArrayTexture)it?(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,ge,ne.width,ne.height,ne.depth),at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ne,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,fe,Ne,ne.data);else if(b.isData3DTexture)it?(Je&&t.texStorage3D(r.TEXTURE_3D,ft,ge,ne.width,ne.height,ne.depth),at&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ne,ne.data)):t.texImage3D(r.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,fe,Ne,ne.data);else if(b.isFramebufferTexture){if(Je)if(it)t.texStorage2D(r.TEXTURE_2D,ft,ge,ne.width,ne.height);else{let ye=ne.width,U=ne.height;for(let J=0;J<ft;J++)t.texImage2D(r.TEXTURE_2D,J,ge,ye,U,0,fe,Ne,null),ye>>=1,U>>=1}}else if(Ue.length>0){if(it&&Je){const ye=Ye(Ue[0]);t.texStorage2D(r.TEXTURE_2D,ft,ge,ye.width,ye.height)}for(let ye=0,U=Ue.length;ye<U;ye++)Se=Ue[ye],it?at&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,fe,Ne,Se):t.texImage2D(r.TEXTURE_2D,ye,ge,fe,Ne,Se);b.generateMipmaps=!1}else if(it){if(Je){const ye=Ye(ne);t.texStorage2D(r.TEXTURE_2D,ft,ge,ye.width,ye.height)}at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ne,ne)}else t.texImage2D(r.TEXTURE_2D,0,ge,fe,Ne,ne);p(b)&&m(Q),Ce.__version=ee.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Le(T,b,K){if(b.image.length!==6)return;const Q=re(T,b),Z=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+K);const ee=n.get(Z);if(Z.version!==ee.__version||Q===!0){t.activeTexture(r.TEXTURE0+K);const Ce=St.getPrimaries(St.workingColorSpace),ie=b.colorSpace===Fr?null:St.getPrimaries(b.colorSpace),me=b.colorSpace===Fr||Ce===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let U=0;U<6;U++)!Ie&&!ne?fe[U]=g(b.image[U],!0,i.maxCubemapSize):fe[U]=ne?b.image[U].image:b.image[U],fe[U]=be(b,fe[U]);const Ne=fe[0],ge=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),Ue=M(b.internalFormat,ge,Se,b.colorSpace),it=b.isVideoTexture!==!0,Je=ee.__version===void 0||Q===!0,at=Z.dataReady;let ft=x(b,Ne);D(r.TEXTURE_CUBE_MAP,b);let ye;if(Ie){it&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ue,Ne.width,Ne.height);for(let U=0;U<6;U++){ye=fe[U].mipmaps;for(let J=0;J<ye.length;J++){const ae=ye[J];b.format!==Li?ge!==null?it?at&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J,0,0,ae.width,ae.height,ge,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J,Ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J,0,0,ae.width,ae.height,ge,Se,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J,Ue,ae.width,ae.height,0,ge,Se,ae.data)}}}else{if(ye=b.mipmaps,it&&Je){ye.length>0&&ft++;const U=Ye(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ue,U.width,U.height)}for(let U=0;U<6;U++)if(ne){it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,fe[U].width,fe[U].height,ge,Se,fe[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ue,fe[U].width,fe[U].height,0,ge,Se,fe[U].data);for(let J=0;J<ye.length;J++){const ve=ye[J].image[U].image;it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J+1,0,0,ve.width,ve.height,ge,Se,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J+1,Ue,ve.width,ve.height,0,ge,Se,ve.data)}}else{it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ge,Se,fe[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Ue,ge,Se,fe[U]);for(let J=0;J<ye.length;J++){const ae=ye[J];it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J+1,0,0,ge,Se,ae.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,J+1,Ue,ge,Se,ae.image[U])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),ee.__version=Z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Y(T,b,K,Q,Z,ee){const Ce=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),me=M(K.internalFormat,Ce,ie,K.colorSpace);if(!n.get(b).__hasExternalTextures){const ne=Math.max(1,b.width>>ee),fe=Math.max(1,b.height>>ee);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,me,ne,fe,b.depth,0,Ce,ie,null):t.texImage2D(Z,ee,me,ne,fe,0,Ce,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),le(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,n.get(K).__webglTexture,0,Be(b)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,n.get(K).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(T,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let Q=r.DEPTH_COMPONENT24;if(K||le(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===oi?Q=r.DEPTH_COMPONENT32F:Z.type===ta&&(Q=r.DEPTH_COMPONENT24));const ee=Be(b);le(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,Q,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,Q,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const Q=Be(b);K&&le(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const Q=b.textures;for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],Ce=s.convert(ee.format,ee.colorSpace),ie=s.convert(ee.type),me=M(ee.internalFormat,Ce,ie,ee.colorSpace),Ie=Be(b);K&&le(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,me,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,me,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),I(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,Z=Be(b);if(b.depthTexture.format===Bo)le(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===yl)le(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function se(T){const b=n.get(T),K=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ce(b.__webglFramebuffer,T)}else if(K){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=r.createRenderbuffer(),te(b.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),te(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(T,b,K){const Q=n.get(T);b!==void 0&&Y(Q.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&se(T)}function De(T){const b=T.texture,K=n.get(T),Q=n.get(b);T.addEventListener("dispose",R);const Z=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Ce=Z.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++),ee){K.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ie]=[];for(let me=0;me<b.mipmaps.length;me++)K.__webglFramebuffer[ie][me]=r.createFramebuffer()}else K.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)K.__webglFramebuffer[ie]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let ie=0,me=Z.length;ie<me;ie++){const Ie=n.get(Z[ie]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&le(T)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const me=Z[ie];K.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ie]);const Ie=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),fe=M(me.internalFormat,Ie,ne,me.colorSpace,T.isXRRenderTarget===!0),Ne=Be(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,K.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),te(K.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),D(r.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Y(K.__webglFramebuffer[ie][me],T,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me);else Y(K.__webglFramebuffer[ie],T,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(b)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ie=0,me=Z.length;ie<me;ie++){const Ie=Z[ie],ne=n.get(Ie);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),D(r.TEXTURE_2D,Ie),Y(K.__webglFramebuffer,T,Ie,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(Ie)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),D(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Y(K.__webglFramebuffer[me],T,b,r.COLOR_ATTACHMENT0,ie,me);else Y(K.__webglFramebuffer,T,b,r.COLOR_ATTACHMENT0,ie,0);p(b)&&m(ie),t.unbindTexture()}T.depthBuffer&&se(T)}function Xe(T){const b=T.textures;for(let K=0,Q=b.length;K<Q;K++){const Z=b[K];if(p(Z)){const ee=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=n.get(Z).__webglTexture;t.bindTexture(ee,Ce),m(ee),t.unbindTexture()}}}function G(T){if(T.samples>0&&le(T)===!1){const b=T.textures,K=T.width,Q=T.height;let Z=r.COLOR_BUFFER_BIT;const ee=[],Ce=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(T),me=b.length>1;if(me)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){ee.push(r.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&ee.push(Ce);const ne=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ne===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&ie.__isTransmissionRenderTarget!==!0&&(Z|=r.STENCIL_BUFFER_BIT)),me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie]),ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ce]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ce])),me){const fe=n.get(b[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,K,Q,0,0,K,Q,Z,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie]);const ne=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Be(T){return Math.min(i.maxSamples,T.samples)}function le(T){const b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(T){const b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function be(T,b){const K=T.colorSpace,Q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||K!==rs&&K!==Fr&&(St.getTransfer(K)===Ct?(Q!==Li||Z!==Zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function Ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=v,this.setTexture2D=I,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=le}function mA(r,e){function t(n,i=Fr){let s;const o=St.getTransfer(i);if(n===Zr)return r.UNSIGNED_BYTE;if(n===C0)return r.UNSIGNED_SHORT_4_4_4_4;if(n===P0)return r.UNSIGNED_SHORT_5_5_5_1;if(n===NS)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===DS)return r.BYTE;if(n===IS)return r.SHORT;if(n===A0)return r.UNSIGNED_SHORT;if(n===R0)return r.INT;if(n===ta)return r.UNSIGNED_INT;if(n===oi)return r.FLOAT;if(n===Mi)return r.HALF_FLOAT;if(n===US)return r.ALPHA;if(n===OS)return r.RGB;if(n===Li)return r.RGBA;if(n===FS)return r.LUMINANCE;if(n===kS)return r.LUMINANCE_ALPHA;if(n===Bo)return r.DEPTH_COMPONENT;if(n===yl)return r.DEPTH_STENCIL;if(n===L0)return r.RED;if(n===D0)return r.RED_INTEGER;if(n===BS)return r.RG;if(n===I0)return r.RG_INTEGER;if(n===N0)return r.RGBA_INTEGER;if(n===Qu||n===Ju||n===eh||n===th)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ju)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===th)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ju)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===th)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dp||n===Ip||n===Np||n===Up)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ip)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Np)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Up)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===U0)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Op||n===Fp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Op)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kp||n===Bp||n===zp||n===Hp||n===Vp||n===Gp||n===Wp||n===Xp||n===qp||n===Yp||n===jp||n===$p||n===Kp||n===Zp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$p)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zp)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===Qp||n===Jp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nh)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zS||n===em||n===tm||n===nm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===em)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class gA extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _A={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_A)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
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

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new hn({vertexShader:vA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new $s(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class SA extends aa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new yA,p=t.getContextAttributes();let m=null,M=null;const x=[],S=[],R=new Ee;let A=null;const w=new pn;w.layers.enable(1),w.viewport=new Et;const P=new pn;P.layers.enable(2),P.viewport=new Et;const y=[w,P],v=new gA;v.layers.enable(1),v.layers.enable(2);let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=x[Y];return te===void 0&&(te=new Rh,x[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=x[Y];return te===void 0&&(te=new Rh,x[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=x[Y];return te===void 0&&(te=new Rh,x[Y]=te),te.getHandSpace()};function I(Y){const te=S.indexOf(Y.inputSource);if(te===-1)return;const ce=x[te];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<x.length;Y++){const te=S[Y];te!==null&&(S[Y]=null,x[Y].disconnect(te))}O=null,N=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",F),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Li,type:Zr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ce=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?yl:Bo,ce=p.stencil?Cl:ta);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Re),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ii(f.textureWidth,f.textureHeight,{format:Li,type:Zr,depthTexture:new K0(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const De=e.properties.get(M);De.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Le.setContext(i),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(Y){for(let te=0;te<Y.removed.length;te++){const ce=Y.removed[te],se=S.indexOf(ce);se>=0&&(S[se]=null,x[se].disconnect(ce))}for(let te=0;te<Y.added.length;te++){const ce=Y.added[te];let se=S.indexOf(ce);if(se===-1){for(let De=0;De<x.length;De++)if(De>=S.length){S.push(ce),se=De;break}else if(S[De]===null){S[De]=ce,se=De;break}if(se===-1)break}const Re=x[se];Re&&Re.connect(ce)}}const V=new z,X=new z;function H(Y,te,ce){V.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const se=V.distanceTo(X),Re=te.projectionMatrix.elements,De=ce.projectionMatrix.elements,Xe=Re[14]/(Re[10]-1),G=Re[14]/(Re[10]+1),Be=(Re[9]+1)/Re[5],le=(Re[9]-1)/Re[5],qe=(Re[8]-1)/Re[0],be=(De[8]+1)/De[0],Ye=Xe*qe,T=Xe*be,b=se/(-qe+be),K=b*-qe;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(K),Y.translateZ(b),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Q=Xe+b,Z=G+b,ee=Ye-K,Ce=T+(se-K),ie=Be*G/Z*Q,me=le*G/Z*Q;Y.projectionMatrix.makePerspective(ee,Ce,ie,me,Q,Z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function j(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),v.near=P.near=w.near=Y.near,v.far=P.far=w.far=Y.far,(O!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),O=v.near,N=v.far,w.near=O,w.far=N,P.near=O,P.far=N,w.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const te=Y.parent,ce=v.cameras;j(v,te);for(let se=0;se<ce.length;se++)j(ce[se],te);ce.length===2?H(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),D(Y,v,te)};function D(Y,te,ce){ce===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ia*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let re=null;function de(Y,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let se=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let De=0;De<ce.length;De++){const Xe=ce[De];let G=null;if(d!==null)G=d.getViewport(Xe);else{const le=h.getViewSubImage(f,Xe);G=le.viewport,De===0&&(e.setRenderTargetTextures(M,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(M))}let Be=y[De];Be===void 0&&(Be=new pn,Be.layers.enable(De),Be.viewport=new Et,y[De]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(G.x,G.y,G.width,G.height),De===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Be)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const De=h.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&g.init(e,De,i.renderState)}}for(let ce=0;ce<x.length;ce++){const se=S[ce],Re=x[ce];se!==null&&Re!==void 0&&Re.update(se,te,c||o)}g.render(e,v),re&&re(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Le=new $0;Le.setAnimationLoop(de),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const ps=new Ji,MA=new je;function TA(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,q0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,S=M.envMapRotation;if(x&&(p.envMap.value=x,ps.copy(S),ps.x*=-1,ps.y*=-1,ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),p.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(ps)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const S=r.createBuffer(),R=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],S=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,v=P.length;y<v;y++){const O=P[y];if(d(O,A,y,R)===!0){const N=O.__offset,I=Array.isArray(O.value)?O.value:[O.value];let F=0;for(let B=0;B<I.length;B++){const V=I[B],X=g(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+F,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,S,R){const A=M.value,w=x+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(M){const x=M.uniforms;let S=0;const R=16;for(let w=0,P=x.length;w<P;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,O=y.length;v<O;v++){const N=y[v],I=Array.isArray(N.value)?N.value:[N.value];for(let F=0,B=I.length;F<B;F++){const V=I[F],X=g(V),H=S%R;H!==0&&R-H<X.boundary&&(S+=R-H),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=X.storage}}}const A=S%R;return A>0&&(S+=R-A),M.__size=S,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class nv{constructor(e={}){const{canvas:t=mM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this._useLegacyLights=!1,this.toneMapping=Kr,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,w=null,P=-1,y=null;const v=new Et,O=new Et;let N=null;const I=new ke(0);let F=0,B=t.width,V=t.height,X=1,H=null,j=null;const D=new Et(0,0,B,V),re=new Et(0,0,B,V);let de=!1;const Le=new cd;let Y=!1,te=!1;const ce=new je,se=new Ee,Re=new z,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?X:1}let G=n;function Be(L,k){const q=t.getContext(L,k);return q!==null?q:null}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),G===null){const k="webgl2";if(G=Be(k,L),G===null)throw Be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let le,qe,be,Ye,T,b,K,Q,Z,ee,Ce,ie,me,Ie,ne,fe,Ne,ge,Se,Ue,it,Je,at,ft;function ye(){le=new IE(G),le.init(),qe=new AE(G,le,e),Je=new mA(G,le),be=new dA(G),Ye=new OE(G),T=new Jb,b=new pA(G,le,be,T,qe,Je,Ye),K=new CE(x),Q=new DE(x),Z=new VM(G),at=new EE(G,Z),ee=new NE(G,Z,Ye,at),Ce=new kE(G,ee,Z,Ye),Se=new FE(G,qe,b),fe=new RE(T),ie=new Qb(x,K,Q,le,qe,at,fe),me=new TA(x,T),Ie=new tA,ne=new aA(le),ge=new wE(x,K,Q,be,Ce,f,l),Ne=new fA(x,Ce,qe),ft=new wA(G,Ye,qe,be),Ue=new bE(G,le,Ye),it=new UE(G,le,Ye),Ye.programs=ie.programs,x.capabilities=qe,x.extensions=le,x.properties=T,x.renderLists=Ie,x.shadowMap=Ne,x.state=be,x.info=Ye}ye();const U=new SA(x,G);this.xr=U,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(B,V,!1))},this.getSize=function(L){return L.set(B,V)},this.setSize=function(L,k,q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,V=k,t.width=Math.floor(L*X),t.height=Math.floor(k*X),q===!0&&(t.style.width=L+"px",t.style.height=k+"px"),this.setViewport(0,0,L,k)},this.getDrawingBufferSize=function(L){return L.set(B*X,V*X).floor()},this.setDrawingBufferSize=function(L,k,q){B=L,V=k,X=q,t.width=Math.floor(L*q),t.height=Math.floor(k*q),this.setViewport(0,0,L,k)},this.getCurrentViewport=function(L){return L.copy(v)},this.getViewport=function(L){return L.copy(D)},this.setViewport=function(L,k,q,$){L.isVector4?D.set(L.x,L.y,L.z,L.w):D.set(L,k,q,$),be.viewport(v.copy(D).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(re)},this.setScissor=function(L,k,q,$){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,k,q,$),be.scissor(O.copy(re).multiplyScalar(X).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(L){be.setScissorTest(de=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){j=L},this.getClearColor=function(L){return L.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(L=!0,k=!0,q=!0){let $=0;if(L){let W=!1;if(w!==null){const oe=w.texture.format;W=oe===N0||oe===I0||oe===D0}if(W){const oe=w.texture.type,pe=oe===Zr||oe===ta||oe===A0||oe===Cl||oe===C0||oe===P0,Pe=ge.getClearColor(),He=ge.getClearAlpha(),Ae=Pe.r,Te=Pe.g,ze=Pe.b;pe?(d[0]=Ae,d[1]=Te,d[2]=ze,d[3]=He,G.clearBufferuiv(G.COLOR,0,d)):(_[0]=Ae,_[1]=Te,_[2]=ze,_[3]=He,G.clearBufferiv(G.COLOR,0,_))}else $|=G.COLOR_BUFFER_BIT}k&&($|=G.DEPTH_BUFFER_BIT),q&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ie.dispose(),ne.dispose(),T.dispose(),K.dispose(),Q.dispose(),Ce.dispose(),at.dispose(),ft.dispose(),ie.dispose(),U.dispose(),U.removeEventListener("sessionstart",Fe),U.removeEventListener("sessionend",we),et.stop()};function J(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=Ye.autoReset,k=Ne.enabled,q=Ne.autoUpdate,$=Ne.needsUpdate,W=Ne.type;ye(),Ye.autoReset=L,Ne.enabled=k,Ne.autoUpdate=q,Ne.needsUpdate=$,Ne.type=W}function ve(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Me(L){const k=L.target;k.removeEventListener("dispose",Me),rt(k)}function rt(L){ht(L),T.remove(L)}function ht(L){const k=T.get(L).programs;k!==void 0&&(k.forEach(function(q){ie.releaseProgram(q)}),L.isShaderMaterial&&ie.releaseShaderCache(L))}this.renderBufferDirect=function(L,k,q,$,W,oe){k===null&&(k=De);const pe=W.isMesh&&W.matrixWorld.determinant()<0,Pe=It(L,k,q,$,W);be.setMaterial($,pe);let He=q.index,Ae=1;if($.wireframe===!0){if(He=ee.getWireframeAttribute(q),He===void 0)return;Ae=2}const Te=q.drawRange,ze=q.attributes.position;let Lt=Te.start*Ae,_n=(Te.start+Te.count)*Ae;oe!==null&&(Lt=Math.max(Lt,oe.start*Ae),_n=Math.min(_n,(oe.start+oe.count)*Ae)),He!==null?(Lt=Math.max(Lt,0),_n=Math.min(_n,He.count)):ze!=null&&(Lt=Math.max(Lt,0),_n=Math.min(_n,ze.count));const Nt=_n-Lt;if(Nt<0||Nt===1/0)return;at.setup(W,$,Pe,q,He);let jt,vt=Ue;if(He!==null&&(jt=Z.get(He),vt=it,vt.setIndex(jt)),W.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*Xe()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if(W.isLine){let We=$.linewidth;We===void 0&&(We=1),be.setLineWidth(We*Xe()),W.isLineSegments?vt.setMode(G.LINES):W.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else W.isPoints?vt.setMode(G.POINTS):W.isSprite&&vt.setMode(G.TRIANGLES);if(W.isBatchedMesh)vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)vt.renderInstances(Lt,Nt,W.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hi=Math.min(q.instanceCount,We);vt.renderInstances(Lt,Nt,hi)}else vt.render(Lt,Nt)};function pt(L,k,q){L.transparent===!0&&L.side===vi&&L.forceSinglePass===!1?(L.side=Wn,L.needsUpdate=!0,$e(L,k,q),L.side=Qi,L.needsUpdate=!0,$e(L,k,q),L.side=vi):$e(L,k,q)}this.compile=function(L,k,q=null){q===null&&(q=L),p=ne.get(q),p.init(),M.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),L!==q&&L.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const $=new Set;return L.traverse(function(W){const oe=W.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Pe=oe[pe];pt(Pe,q,W),$.add(Pe)}else pt(oe,q,W),$.add(oe)}),M.pop(),p=null,$},this.compileAsync=function(L,k,q=null){const $=this.compile(L,k,q);return new Promise(W=>{function oe(){if($.forEach(function(pe){T.get(pe).currentProgram.isReady()&&$.delete(pe)}),$.size===0){W(L);return}setTimeout(oe,10)}le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let bt=null;function dt(L){bt&&bt(L)}function Fe(){et.stop()}function we(){et.start()}const et=new $0;et.setAnimationLoop(dt),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(L){bt=L,U.setAnimationLoop(L),L===null?et.stop():et.start()},U.addEventListener("sessionstart",Fe),U.addEventListener("sessionend",we),this.render=function(L,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,k,w),p=ne.get(L,M.length),p.init(),M.push(p),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Le.setFromProjectionMatrix(ce),te=this.localClippingEnabled,Y=fe.init(this.clippingPlanes,te),g=Ie.get(L,m.length),g.init(),m.push(g),ue(L,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,j),this.info.render.frame++,Y===!0&&fe.beginShadows();const q=p.state.shadowsArray;if(Ne.render(q,L,k),Y===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1)&&ge.render(g,L),p.setupLights(x._useLegacyLights),k.isArrayCamera){const $=k.cameras;for(let W=0,oe=$.length;W<oe;W++){const pe=$[W];Ge(g,L,pe,pe.viewport)}}else Ge(g,L,k);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(x,L,k),at.resetDefaultState(),P=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ue(L,k,q,$){if(L.visible===!1)return;if(L.layers.test(k.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(k);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Le.intersectsSprite(L)){$&&Re.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);const pe=Ce.update(L),Pe=L.material;Pe.visible&&g.push(L,pe,Pe,q,Re.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Le.intersectsObject(L))){const pe=Ce.update(L),Pe=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Re.copy(L.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Re.copy(pe.boundingSphere.center)),Re.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(Pe)){const He=pe.groups;for(let Ae=0,Te=He.length;Ae<Te;Ae++){const ze=He[Ae],Lt=Pe[ze.materialIndex];Lt&&Lt.visible&&g.push(L,pe,Lt,q,Re.z,ze)}}else Pe.visible&&g.push(L,pe,Pe,q,Re.z,null)}}const oe=L.children;for(let pe=0,Pe=oe.length;pe<Pe;pe++)ue(oe[pe],k,q,$)}function Ge(L,k,q,$){const W=L.opaque,oe=L.transmissive,pe=L.transparent;p.setupLightsView(q),Y===!0&&fe.setGlobalState(x.clippingPlanes,q),oe.length>0&&Oe(W,oe,k,q),$&&be.viewport(v.copy($)),W.length>0&&Ve(W,k,q),oe.length>0&&Ve(oe,k,q),pe.length>0&&Ve(pe,k,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Oe(L,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Ii(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Mi:Zr,minFilter:si,samples:4,stencilBuffer:s});const Ae=T.get(p.state.transmissionRenderTarget);Ae.__isTransmissionRenderTarget=!0}const oe=p.state.transmissionRenderTarget;x.getDrawingBufferSize(se),oe.setSize(se.x,se.y);const pe=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(I),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=Kr,Ve(L,q,$),b.updateMultisampleRenderTarget(oe),b.updateRenderTargetMipmap(oe);let He=!1;for(let Ae=0,Te=k.length;Ae<Te;Ae++){const ze=k[Ae],Lt=ze.object,_n=ze.geometry,Nt=ze.material,jt=ze.group;if(Nt.side===vi&&Lt.layers.test($.layers)){const vt=Nt.side;Nt.side=Wn,Nt.needsUpdate=!0,Wt(Lt,q,$,_n,Nt,jt),Nt.side=vt,Nt.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(oe),b.updateRenderTargetMipmap(oe)),x.setRenderTarget(pe),x.setClearColor(I,F),x.toneMapping=Pe}function Ve(L,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let W=0,oe=L.length;W<oe;W++){const pe=L[W],Pe=pe.object,He=pe.geometry,Ae=$===null?pe.material:$,Te=pe.group;Pe.layers.test(q.layers)&&Wt(Pe,k,q,He,Ae,Te)}}function Wt(L,k,q,$,W,oe){L.onBeforeRender(x,k,q,$,W,oe),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),W.onBeforeRender(x,k,q,$,L,oe),W.transparent===!0&&W.side===vi&&W.forceSinglePass===!1?(W.side=Wn,W.needsUpdate=!0,x.renderBufferDirect(q,k,$,W,L,oe),W.side=Qi,W.needsUpdate=!0,x.renderBufferDirect(q,k,$,W,L,oe),W.side=vi):x.renderBufferDirect(q,k,$,W,L,oe),L.onAfterRender(x,k,q,$,W,oe)}function $e(L,k,q){k.isScene!==!0&&(k=De);const $=T.get(L),W=p.state.lights,oe=p.state.shadowsArray,pe=W.state.version,Pe=ie.getParameters(L,W.state,oe,k,q),He=ie.getProgramCacheKey(Pe);let Ae=$.programs;$.environment=L.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(L.isMeshStandardMaterial?Q:K).get(L.envMap||$.environment),$.envMapRotation=$.environment!==null&&L.envMap===null?k.environmentRotation:L.envMapRotation,Ae===void 0&&(L.addEventListener("dispose",Me),Ae=new Map,$.programs=Ae);let Te=Ae.get(He);if(Te!==void 0){if($.currentProgram===Te&&$.lightsStateVersion===pe)return en(L,Pe),Te}else Pe.uniforms=ie.getUniforms(L),L.onBuild(q,Pe,x),L.onBeforeCompile(Pe,x),Te=ie.acquireProgram(Pe,He),Ae.set(He,Te),$.uniforms=Pe.uniforms;const ze=$.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ze.clippingPlanes=fe.uniform),en(L,Pe),$.needsLights=_t(L),$.lightsStateVersion=pe,$.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Te,$.uniformsList=null,Te}function Dt(L){if(L.uniformsList===null){const k=L.currentProgram.getUniforms();L.uniformsList=Ic.seqWithValue(k.seq,L.uniforms)}return L.uniformsList}function en(L,k){const q=T.get(L);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function It(L,k,q,$,W){k.isScene!==!0&&(k=De),b.resetTextureUnits();const oe=k.fog,pe=$.isMeshStandardMaterial?k.environment:null,Pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rs,He=($.isMeshStandardMaterial?Q:K).get($.envMap||pe),Ae=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Te=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!q.morphAttributes.position,Lt=!!q.morphAttributes.normal,_n=!!q.morphAttributes.color;let Nt=Kr;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const jt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=jt!==void 0?jt.length:0,We=T.get($),hi=p.state.lights;if(Y===!0&&(te===!0||L!==y)){const fi=L===y&&$.id===P;fe.setState($,L,fi)}let Ut=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hi.state.version||We.outputColorSpace!==Pe||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==He||$.fog===!0&&We.fog!==oe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Ae||We.vertexTangents!==Te||We.morphTargets!==ze||We.morphNormals!==Lt||We.morphColors!==_n||We.toneMapping!==Nt||We.morphTargetsCount!==vt)&&(Ut=!0):(Ut=!0,We.__version=$.version);let os=We.currentProgram;Ut===!0&&(os=$e($,k,W));let Pd=!1,fa=!1,Pu=!1;const vn=os.getUniforms(),wr=We.uniforms;if(be.useProgram(os.program)&&(Pd=!0,fa=!0,Pu=!0),$.id!==P&&(P=$.id,fa=!0),Pd||y!==L){vn.setValue(G,"projectionMatrix",L.projectionMatrix),vn.setValue(G,"viewMatrix",L.matrixWorldInverse);const fi=vn.map.cameraPosition;fi!==void 0&&fi.setValue(G,Re.setFromMatrixPosition(L.matrixWorld)),qe.logarithmicDepthBuffer&&vn.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vn.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,fa=!0,Pu=!0)}if(W.isSkinnedMesh){vn.setOptional(G,W,"bindMatrix"),vn.setOptional(G,W,"bindMatrixInverse");const fi=W.skeleton;fi&&(fi.boneTexture===null&&fi.computeBoneTexture(),vn.setValue(G,"boneTexture",fi.boneTexture,b))}W.isBatchedMesh&&(vn.setOptional(G,W,"batchingTexture"),vn.setValue(G,"batchingTexture",W._matricesTexture,b));const Lu=q.morphAttributes;if((Lu.position!==void 0||Lu.normal!==void 0||Lu.color!==void 0)&&Se.update(W,q,os),(fa||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,vn.setValue(G,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wr.envMap.value=He,wr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(wr.envMapIntensity.value=k.environmentIntensity),fa&&(vn.setValue(G,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&At(wr,Pu),oe&&$.fog===!0&&me.refreshFogUniforms(wr,oe),me.refreshMaterialUniforms(wr,$,X,V,p.state.transmissionRenderTarget),Ic.upload(G,Dt(We),wr,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ic.upload(G,Dt(We),wr,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vn.setValue(G,"center",W.center),vn.setValue(G,"modelViewMatrix",W.modelViewMatrix),vn.setValue(G,"normalMatrix",W.normalMatrix),vn.setValue(G,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const fi=$.uniformsGroups;for(let Du=0,Ev=fi.length;Du<Ev;Du++){const Ld=fi[Du];ft.update(Ld,os),ft.bind(Ld,os)}}return os}function At(L,k){L.ambientLightColor.needsUpdate=k,L.lightProbe.needsUpdate=k,L.directionalLights.needsUpdate=k,L.directionalLightShadows.needsUpdate=k,L.pointLights.needsUpdate=k,L.pointLightShadows.needsUpdate=k,L.spotLights.needsUpdate=k,L.spotLightShadows.needsUpdate=k,L.rectAreaLights.needsUpdate=k,L.hemisphereLights.needsUpdate=k}function _t(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,k,q){T.get(L.texture).__webglTexture=k,T.get(L.depthTexture).__webglTexture=q;const $=T.get(L);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,k){const q=T.get(L);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(L,k=0,q=0){w=L,R=k,A=q;let $=!0,W=null,oe=!1,pe=!1;if(L){const He=T.get(L);He.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):He.__webglFramebuffer===void 0?b.setupRenderTarget(L):He.__hasExternalTextures&&b.rebindTextures(L,T.get(L.texture).__webglTexture,T.get(L.depthTexture).__webglTexture);const Ae=L.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Te=T.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Te[k])?W=Te[k][q]:W=Te[k],oe=!0):L.samples>0&&b.useMultisampledRTT(L)===!1?W=T.get(L).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[q]:W=Te,v.copy(L.viewport),O.copy(L.scissor),N=L.scissorTest}else v.copy(D).multiplyScalar(X).floor(),O.copy(re).multiplyScalar(X).floor(),N=de;if(be.bindFramebuffer(G.FRAMEBUFFER,W)&&$&&be.drawBuffers(L,W),be.viewport(v),be.scissor(O),be.setScissorTest(N),oe){const He=T.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,He.__webglTexture,q)}else if(pe){const He=T.get(L.texture),Ae=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,q||0,Ae)}P=-1},this.readRenderTargetPixels=function(L,k,q,$,W,oe,pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&pe!==void 0&&(Pe=Pe[pe]),Pe){be.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const He=L.texture,Ae=He.format,Te=He.type;if(Ae!==Li&&Je.convert(Ae)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Te===Mi&&(le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float"));if(Te!==Zr&&Je.convert(Te)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&Te!==oi&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=L.width-$&&q>=0&&q<=L.height-W&&G.readPixels(k,q,$,W,Je.convert(Ae),Je.convert(Te),oe)}finally{const He=w!==null?T.get(w).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(L,k,q=0){const $=Math.pow(2,-q),W=Math.floor(k.image.width*$),oe=Math.floor(k.image.height*$);b.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,L.x,L.y,W,oe),be.unbindTexture()},this.copyTextureToTexture=function(L,k,q,$=0){const W=k.image.width,oe=k.image.height,pe=Je.convert(q.format),Pe=Je.convert(q.type);b.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,L.x,L.y,W,oe,pe,Pe,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,L.x,L.y,k.mipmaps[0].width,k.mipmaps[0].height,pe,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,L.x,L.y,pe,Pe,k.image),$===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(L,k,q,$,W=0){const oe=Math.round(L.max.x-L.min.x),pe=Math.round(L.max.y-L.min.y),Pe=L.max.z-L.min.z+1,He=Je.convert($.format),Ae=Je.convert($.type);let Te;if($.isData3DTexture)b.setTexture3D($,0),Te=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)b.setTexture2DArray($,0),Te=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const ze=G.getParameter(G.UNPACK_ROW_LENGTH),Lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_n=G.getParameter(G.UNPACK_SKIP_PIXELS),Nt=G.getParameter(G.UNPACK_SKIP_ROWS),jt=G.getParameter(G.UNPACK_SKIP_IMAGES),vt=q.isCompressedTexture?q.mipmaps[W]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,L.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,L.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,L.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Te,W,k.x,k.y,k.z,oe,pe,Pe,He,Ae,vt.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Te,W,k.x,k.y,k.z,oe,pe,Pe,He,vt.data):G.texSubImage3D(Te,W,k.x,k.y,k.z,oe,pe,Pe,He,Ae,vt),G.pixelStorei(G.UNPACK_ROW_LENGTH,ze),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_n),G.pixelStorei(G.UNPACK_SKIP_ROWS,Nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jt),W===0&&$.generateMipmaps&&G.generateMipmap(Te),be.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?b.setTextureCube(L,0):L.isData3DTexture?b.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?b.setTexture2DArray(L,0):b.setTexture2D(L,0),be.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,be.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===od?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Tu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Xs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hd extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class EA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return z0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new z;class fd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $m=new z,Km=new Et,Zm=new Et,bA=new z,Qm=new je,pc=new z,Ch=new er,Jm=new je,Ph=new Pl;class AA extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pc),this.boundingBox.expandByPoint(pc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pc),this.boundingSphere.expandByPoint(pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(i),e.ray.intersectsSphere(Ch)!==!1&&(Jm.copy(i).invert(),Ph.copy(e.ray).applyMatrix4(Jm),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Km.fromBufferAttribute(i.attributes.skinIndex,e),Zm.fromBufferAttribute(i.attributes.skinWeight,e),$m.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Zm.getComponent(s);if(o!==0){const a=Km.getComponent(s);Qm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bA.copy($m).applyMatrix4(Qm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class iv extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dd extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Fn,u=Fn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eg=new je,RA=new je;class pd{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:RA;eg.multiplyMatrices(a,t[s]),eg.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dd(t,e,e,Li,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new iv),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wf extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const So=new je,tg=new je,mc=[],ng=new Oi,CA=new je,Ma=new un,Ta=new er;class PA extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,CA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,So),ng.copy(e.boundingBox).applyMatrix4(So),this.boundingBox.union(ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,So),Ta.copy(e.boundingSphere).applyMatrix4(So),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,So),tg.multiplyMatrices(n,So),Ma.matrixWorld=tg,Ma.raycast(e,mc);for(let o=0,a=mc.length;o<a;o++){const l=mc[o];l.instanceId=s,l.object=this,t.push(l)}mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dd(new Float32Array(i*this.count),i,this.count,L0,oi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rv extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ig=new z,rg=new z,sg=new je,Lh=new Pl,gc=new er;class md extends Ht{constructor(e=new qn,t=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ig.fromBufferAttribute(t,i-1),rg.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ig.distanceTo(rg);e.setAttribute("lineDistance",new Ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;sg.copy(i).invert(),Lh.copy(e.ray).applyMatrix4(sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,f=new z,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let x=m,S=M-1;x<S;x+=d){const R=_.getX(x),A=_.getX(x+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,A),Lh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let x=m,S=M-1;x<S;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Lh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const og=new z,ag=new z;class LA extends md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)og.fromBufferAttribute(t,i),ag.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+og.distanceTo(ag);e.setAttribute("lineDistance",new Ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DA extends md{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sv extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lg=new je,Ef=new Pl,_c=new er,vc=new z;class gd extends Ht{constructor(e=new qn,t=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;lg.copy(i).invert(),Ef.copy(e.ray).applyMatrix4(lg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);vc.fromBufferAttribute(h,p),cg(vc,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)vc.fromBufferAttribute(h,_),cg(vc,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cg(r,e,t,n,i,s,o){const a=Ef.distanceSqToPoint(r);if(a<t){const l=new z;Ef.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class IA extends Jt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class NA extends Ni{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class UA extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bu extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends bu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function OA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function FA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ug(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ov(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Dl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kA extends Dl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:im,endingEnd:im}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case rm:s=e,a=2*t-n;break;case sm:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rm:o=e,l=2*n-t;break;case sm:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*p+(1.5+d)*g+.5*_,S=d*p-d*g;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+M*o[c+R]+x*o[l+R]+S*o[h+R];return s}}class BA extends Dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class zA extends Dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class tr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new BA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sl:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case ih:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sl;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&OA(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ih,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=na;class ca extends tr{}ca.prototype.ValueTypeName="bool";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=Sl;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class av extends tr{}av.prototype.ValueTypeName="color";class sa extends tr{}sa.prototype.ValueTypeName="number";class HA extends Dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ss.slerpFlat(s,0,o,c-a,o,c,l);return s}}class qs extends tr{InterpolantFactoryMethodLinear(e){return new HA(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.DefaultInterpolation=na;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends tr{}ua.prototype.ValueTypeName="string";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=Sl;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends tr{}oa.prototype.ValueTypeName="vector";class VA{constructor(e="",t=-1,n=[],i=HS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(WA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(tr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=FA(l);l=ug(l,1,u),c=ug(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new sa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];ov(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let M=0;M!==f[_].morphTargets.length;++M){const x=f[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new sa(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(oa,d+".position",f,"pos",i),n(qs,d+".quaternion",f,"rot",i),n(oa,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function GA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sa;case"vector":case"vector2":case"vector3":case"vector4":return oa;case"color":return av;case"quaternion":return qs;case"bool":case"boolean":return ca;case"string":return ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function WA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GA(r.type);if(r.times===void 0){const t=[],n=[];ov(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Xr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const XA=new lv;class Ks{constructor(e){this.manager=e!==void 0?e:XA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class qA extends Error{constructor(e,t){super(e),this.response=t}}class _d extends Ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:i});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ar[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:S})=>{if(x)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,w=u.length;A<w;A++){const P=u[A];P.onProgress&&P.onProgress(R)}m.enqueue(S),M()}})}}});return new Response(p)}else throw new qA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Xr.add(e,c);const u=ar[e];delete ar[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),c;delete ar[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class YA extends Ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ml("img");function l(){u(),Xr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jA extends Ks{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new dd,a=new _d(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:qt,o.minFilter=c.minFilter!==void 0?c.minFilter:qt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=si),c.mipmapCount===1&&(o.minFilter=qt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class vd extends Ks{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new YA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Au extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Dh=new je,hg=new z,fg=new z;class xd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hg.setFromMatrixPosition(e.matrixWorld),t.position.copy(hg),fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fg),t.updateMatrixWorld(),Dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $A extends xd{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ia*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bf extends Au{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new $A}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dg=new je,wa=new z,Ih=new z;class KA extends xd{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wa.setFromMatrixPosition(e.matrixWorld),n.position.copy(wa),Ih.copy(n.position),Ih.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ih),n.updateMatrixWorld(),i.makeTranslation(-wa.x,-wa.y,-wa.z),dg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dg)}}class yd extends Au{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new KA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZA extends xd{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ZA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sd extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class QA extends Ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Xr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Xr.add(e,l),s.manager.itemStart(e)}}class Md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pg(){return(typeof performance>"u"?Date:performance).now()}const Td="\\[\\]\\.:\\/",JA=new RegExp("["+Td+"]","g"),wd="[^"+Td+"]",e1="[^"+Td.replace("\\.","")+"]",t1=/((?:WC+[\/:])*)/.source.replace("WC",wd),n1=/(WCOD+)?/.source.replace("WCOD",e1),i1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wd),r1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wd),s1=new RegExp("^"+t1+n1+i1+r1+"$"),o1=["material","materials","bones","map"];class a1{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JA,"")}static parseTrackName(e){const t=s1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);o1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=a1;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const mg=new je;class cv{constructor(e,t,n=0,i=1/0){this.ray=new Pl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ld,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,t=!0,n=[]){return Af(e,this,n,t),n.sort(gg),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Af(e[i],this,n,t);return n.sort(gg),n}}function gg(r,e){return r.distance-e.distance}function Af(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Af(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const l1=parseInt(xu.replace(/\D+/g,""));function Rf(r,e){if(e===VS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Sf||e===O0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===Sf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function au(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Cs="srgb",Sr="srgb-linear",_g=3001,c1=3e3;class Ru extends Ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new R1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=tl.extractUrlBase(e);o=tl.resolveURL(c,this.path)}else o=tl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new _d(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(au(new Uint8Array(e.slice(0,4)))===uv){try{o[lt.KHR_BINARY_GLTF]=new C1(e)}catch(u){i&&i(u);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(au(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new V1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:o[u]=new f1;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new P1(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[u]=new L1;break;case lt.KHR_MESH_QUANTIZATION:o[u]=new D1;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function u1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class h1{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Sr);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ou(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yd(u),c.distance=h;break;case"spot":c=new bf(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class f1{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return _r}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Cs))}return Promise.all(i)}}class d1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class p1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(s)}}class m1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class g1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class _1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Sr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Cs)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Sr),Promise.all(s)}}class y1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class S1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Sr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Cs)),Promise.all(s)}}class M1{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class T1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class w1{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class E1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class b1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A1{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class R1{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new je,p=new z,m=new ss,M=new z(1,1,1),x=new PA(_.geometry,_.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,g.compose(p,m,M));for(const S in l)if(S==="_COLOR_0"){const R=l[S];x.instanceColor=new wf(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);Ht.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const uv="glTF",Ea=12,vg={JSON:1313821514,BIN:5130562};class C1{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea);if(this.header={magic:au(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ea,i=new DataView(e,Ea);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===vg.JSON){const l=new Uint8Array(e,Ea+s,o);this.content=au(l)}else if(a===vg.BIN){const l=Ea+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class P1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ho[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,Sr,f)})})}}class L1{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class D1{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class hv extends Dl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,M=1-p,x=m-f+h;for(let S=0;S!==a;S++){const R=o[g+S+a],A=o[g+S+l]*u,w=o[_+S+a],P=o[_+S]*u;s[S]=M*R+x*A+p*w+m*P}return s}}const I1=new ss;class N1 extends hv{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return I1.fromArray(s).normalize().toArray(s),s}}const mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xg={9728:Fn,9729:qt,9984:b0,9985:Lc,9986:Na,9987:si},yg={33071:Bn,33648:eu,10497:ea},Nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...l1>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U1={CUBICSPLINE:void 0,LINEAR:na,STEP:Sl},Uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new bu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),r.DefaultMaterial}function ms(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function k1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B1(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oh(t.attributes):e=r.indices+":"+Oh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Oh(r.targets[n]);return e}function Oh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function z1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const H1=new je;class V1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new u1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new vd(this.options.manager):this.textureLoader=new QA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _d(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ms(s,a,i),hr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(tl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nh[i.type],a=Ho[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ft(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nh[i.type],c=Ho[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(M);x||(g=new c(a,m*d,i.count*d/u),x=new EA(g,d/u),t.cache.add(M,x)),p=new fd(x,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Ft(g,l,_);if(i.sparse!==void 0){const m=Nh.SCALAR,M=Ho[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new M(o[1],x,i.sparse.count*m),A=new c(o[2],S,i.sparse.count*l);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized));for(let w=0,P=R.length;w<P;w++){const y=R[w];if(p.setX(y,A[w*l]),l>=2&&p.setY(y,A[w*l+1]),l>=3&&p.setZ(y,A[w*l+2]),l>=4&&p.setW(y,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=xg[f.magFilter]||qt,u.minFilter=xg[f.minFilter]||si,u.wrapS=yg[f.wrapS]||ea,u.wrapT=yg[f.wrapT]||ea,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Jt(g);p.needsUpdate=!0,f(p)}),t.load(tl.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hr(h,o),h.userData.mimeType=o.mimeType||z1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===_g?Cs:Sr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===Cs?_g:c1),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sv,Ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rv,Ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Sr),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Cs)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vi);const u=s.alphaMode||Uh.OPAQUE;if(u===Uh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Uh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==_r&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==_r&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==_r){const h=s.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],Sr)}return s.emissiveTexture!==void 0&&o!==_r&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Cs)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),hr(h,s),t.associations.set(h,{materials:e}),s.extensions&&ms(i,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=B1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Sg(new qn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?O1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const M=c[d];if(p.mode===mi.TRIANGLES||p.mode===mi.TRIANGLE_STRIP||p.mode===mi.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new AA(g,M):new un(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===mi.TRIANGLE_STRIP?m.geometry=Rf(m.geometry,O0):p.mode===mi.TRIANGLE_FAN&&(m.geometry=Rf(m.geometry,Sf));else if(p.mode===mi.LINES)m=new LA(g,M);else if(p.mode===mi.LINE_STRIP)m=new md(g,M);else if(p.mode===mi.LINE_LOOP)m=new DA(g,M);else if(p.mode===mi.POINTS)m=new gd(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&k1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),hr(m,s),p.extensions&&ms(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&ms(i,h[0],s),h[0];const f=new vr;s.extensions&&ms(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(Dc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let M=0,x=f.length;M<x;M++){const S=f[M],R=d[M],A=_[M],w=g[M],P=p[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,R,A,w,P);if(y)for(let v=0;v<y.length;v++)m.push(y[v])}return new VA(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,H1)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new iv:c.length>1?u=new vr:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),hr(u,s),s.extensions&&ms(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new vr;n.name&&(s.name=i.createUniqueName(n.name)),hr(s,n),n.extensions&&ms(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ni||f instanceof Jt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Dr[s.path]===Dr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Dr[s.path]){case Dr.weights:c=sa;break;case Dr.rotation:c=qs;break;case Dr.position:case Dr.scale:c=oa;break;default:n.itemSize===1?c=sa:c=oa;break}const u=i.interpolation!==void 0?U1[i.interpolation]:na,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Dr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qs?N1:hv;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function G1(r,e,t){const n=e.attributes,i=new Oi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Pf(Ho[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Pf(Ho[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new er;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Sg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Cf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return hr(r,e),G1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?F1(r,e.targets,t):r})}class fv extends jA{constructor(e){super(e),this.type=Mi}parse(e){const o=function(P,y){switch(P){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},h=function(P,y,v){y=y||1024;let N=P.pos,I=-1,F=0,B="",V=String.fromCharCode.apply(null,new Uint16Array(P.subarray(N,N+128)));for(;0>(I=V.indexOf(`
`))&&F<y&&N<P.byteLength;)B+=V,F+=V.length,N+=128,V+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(N,N+128)));return-1<I?(P.pos+=F+I+1,B+V.slice(0,I)):!1},f=function(P){const y=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,V;for((P.pos>=P.byteLength||!(B=h(P)))&&o(1,"no header found"),(V=B.match(y))||o(3,"bad initial token"),F.valid|=1,F.programtype=V[1],F.string+=B+`
`;B=h(P),B!==!1;){if(F.string+=B+`
`,B.charAt(0)==="#"){F.comments+=B+`
`;continue}if((V=B.match(v))&&(F.gamma=parseFloat(V[1])),(V=B.match(O))&&(F.exposure=parseFloat(V[1])),(V=B.match(N))&&(F.valid|=2,F.format=V[1]),(V=B.match(I))&&(F.valid|=4,F.height=parseInt(V[1],10),F.width=parseInt(V[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(P,y,v){const O=y;if(O<8||O>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);O!==(P[2]<<8|P[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*y*v);N.length||o(4,"unable to allocate buffer space");let I=0,F=0;const B=4*O,V=new Uint8Array(4),X=new Uint8Array(B);let H=v;for(;H>0&&F<P.byteLength;){F+4>P.byteLength&&o(1),V[0]=P[F++],V[1]=P[F++],V[2]=P[F++],V[3]=P[F++],(V[0]!=2||V[1]!=2||(V[2]<<8|V[3])!=O)&&o(3,"bad rgbe scanline format");let j=0,D;for(;j<B&&F<P.byteLength;){D=P[F++];const de=D>128;if(de&&(D-=128),(D===0||j+D>B)&&o(3,"bad scanline data"),de){const Le=P[F++];for(let Y=0;Y<D;Y++)X[j++]=Le}else X.set(P.subarray(F,F+D),j),j+=D,F+=D}const re=O;for(let de=0;de<re;de++){let Le=0;N[I]=X[de+Le],Le+=O,N[I+1]=X[de+Le],Le+=O,N[I+2]=X[de+Le],Le+=O,N[I+3]=X[de+Le],I+=4}H--}return N},_=function(P,y,v,O){const N=P[y+3],I=Math.pow(2,N-128)/255;v[O+0]=P[y+0]*I,v[O+1]=P[y+1]*I,v[O+2]=P[y+2]*I,v[O+3]=1},g=function(P,y,v,O){const N=P[y+3],I=Math.pow(2,N-128)/255;v[O+0]=tc.toHalfFloat(Math.min(P[y+0]*I,65504)),v[O+1]=tc.toHalfFloat(Math.min(P[y+1]*I,65504)),v[O+2]=tc.toHalfFloat(Math.min(P[y+2]*I,65504)),v[O+3]=tc.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),M=m.width,x=m.height,S=d(p.subarray(p.pos),M,x);let R,A,w;switch(this.type){case oi:w=S.length/4;const P=new Float32Array(w*4);for(let v=0;v<w;v++)_(S,v*4,P,v*4);R=P,A=oi;break;case Mi:w=S.length/4;const y=new Uint16Array(w*4);for(let v=0;v<w;v++)g(S,v*4,y,v*4);R=y,A=Mi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:x,data:R,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case oi:case Mi:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=qt,o.magFilter=qt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const W1=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:Ru,RGBELoader:fv,toTrianglesDrawMode:Rf},Symbol.toStringTag,{value:"Module"}));class X1{constructor(){this.cacheDom(),this.loadingManager=new lv,this.gltfLoader=new Ru(this.loadingManager),this.animationComplete=!1,this.pendingLoadBatches=0,this.runPromise=null,this.runResolver=null,this.isCompleting=!1,this.init=this.init.bind(this),this.load=this.load.bind(this)}cacheDom(){this.container=document.querySelector(".preloader"),this.progressBar=document.querySelector(".progress-bar"),this.progressIndicator=document.querySelector(".progress-bar-indicator"),this.progressText=document.querySelector(".progress-bar-copy span"),this.resizeObserver=null}generateGrid(){const e=document.querySelector(".preloader-grid");if(!e)return;const t=window.innerWidth,n=window.innerHeight,i=t*n,s=Math.sqrt(i/200),o=Math.ceil(t/s),a=Math.ceil(n/s);e.style.setProperty("grid-template-columns",`repeat(${o}, 1fr)`),e.style.setProperty("grid-template-rows",`repeat(${a}, 1fr)`),e.innerHTML="";const l=o*a,c=document.createDocumentFragment();for(let u=0;u<l;u++){const h=document.createElement("div");h.classList.add("preloader-block"),c.appendChild(h)}e.appendChild(c),this.preloaderBlocks=document.querySelectorAll(".preloader-block")}init(){this.cacheDom(),this.generateGrid();let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>this.generateGrid(),200)});const t=sessionStorage.getItem("preloaderSeen")==="true";return this.container?this.runPromise?this.runPromise:t?(this.container.style.display="none",Promise.resolve()):(this.container.style.display="flex",this.animationComplete=!1,this.pendingLoadBatches=0,this.isCompleting=!1,this.runPromise=new Promise(n=>{this.runResolver=n,this.startSequence()}),this.runPromise):Promise.resolve()}async load(e){if(this.pendingLoadBatches+=1,!e||e.length===0){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion();return}const t=e.map(n=>new Promise((i,s)=>{this.gltfLoader.load(n,i,void 0,s)}));try{await Promise.all(t)}catch(n){console.error("Error loading assets:",n)}finally{this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}}hold(){this.pendingLoadBatches+=1}release(){this.pendingLoadBatches=Math.max(0,this.pendingLoadBatches-1),this.checkCompletion()}startSequence(){if(!this.progressIndicator||!this.progressText||!this.progressBar){this.animationComplete=!0,this.checkCompletion();return}_e.set(this.preloaderBlocks,{opacity:1}),_e.set(this.progressIndicator,{"--progress":0}),this.progressText&&(this.progressText.textContent="0%"),_e.to(this.progressBar,{opacity:1,duration:.075,ease:"power2.inOut",delay:.5,repeat:1,yoyo:!0,onComplete:()=>{_e.set(this.progressBar,{opacity:1}),this.startIncrements()}})}startIncrements(){let e=0;const t=5;let n=0;const i=this.generateRandomIncrements(t),s=()=>{if(n>=t){this.animationComplete=!0,this.checkCompletion();return}const o=i[n],a=Math.min(e+o,100),l=200+Math.random()*400;setTimeout(()=>{_e.to(this.progressIndicator,{"--progress":a/100,duration:.5,ease:"power2.out",onUpdate:()=>{const c=Math.round(_e.getProperty(this.progressIndicator,"--progress")*100);this.progressText&&(this.progressText.textContent=`${c}%`)},onComplete:()=>{e=a,n++,s()}})},l)};s()}generateRandomIncrements(e){const t=[];let n=100;const i=30;for(let s=0;s<e-1;s++){const o=Math.min(i,n-(e-1-s)),a=Math.max(5,Math.floor(n/(e-s)*.5)),l=Math.floor(Math.random()*(o-a))+a;t.push(l),n-=l}return t.push(n),t.sort(()=>Math.random()-.5)}checkCompletion(){this.runPromise&&this.pendingLoadBatches===0&&this.animationComplete&&this.complete()}resolveRun(){this.runResolver&&this.runResolver(),this.runResolver=null,this.runPromise=null,this.isCompleting=!1}complete(){if(!this.container){this.resolveRun();return}this.isCompleting||(this.isCompleting=!0,sessionStorage.setItem("preloaderSeen","true"),_e.to(this.progressBar,{opacity:0,duration:.075,ease:"power2.inOut",delay:.3,repeat:1,yoyo:!0,onComplete:()=>{_e.set(this.progressBar,{opacity:0}),setTimeout(()=>{if(!this.preloaderBlocks||this.preloaderBlocks.length===0){this.container.style.display="none",this.resolveRun();return}const e=.8;let t=0;const n=this.preloaderBlocks.length;this.preloaderBlocks.forEach(i=>{const s=Math.random()*e;_e.to(i,{opacity:0,duration:.1,ease:"power1.out",delay:s,onComplete:()=>{_e.set(i,{opacity:0}),t++,t>=n&&(this.container.style.display="none",this.resolveRun())}})})},200)}}))}}const xi=new X1,q1="modulepreload",Y1=function(r){return"/"+r},Mg={},j1=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(t.map(u=>{if(u=Y1(u),u in Mg)return;Mg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":q1,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((_,g)=>{d.addEventListener("load",_),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Cu=[{title:"HAPTIC",image:"/work/work-1.jpg",href:"/film.html"},{title:"flashcloud",image:"/work/work-2.jpg",href:"/film.html"},{title:"t.BONK",image:"/work/work-3.jpg",href:"/film.html"},{title:"Perception pod",image:"/work/work-5.jpg",href:"/film.html"},{title:"notice",image:"/work/work-6.jpg",href:"/film.html"}],dv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ha{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $1=new wu(-1,1,1,-1,0,1);class K1 extends qn{constructor(){super(),this.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ui([0,2,0,0,2,0],2))}}const Z1=new K1;class Ed{constructor(e){this._mesh=new un(Z1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ki extends ha{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tl.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ed(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tg extends ha{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Q1 extends ha{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bd{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ki(dv),this.copyPass.material.blending=yr,this.clock=new Md}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Tg!==void 0&&(o instanceof Tg?n=!0:o instanceof Q1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ad extends ha{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const J1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Rd extends ha{constructor(){super();const e=J1;this.uniforms=Tl.clone(e.uniforms),this.material=new UA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ed(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===y0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===S0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===M0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===T0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===w0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const eR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends ha{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ii(s,o,{type:Mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ii(s,o,{type:Mi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ii(s,o,{type:Mi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=eR;this.highPassUniforms=Tl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=dv;this.copyUniforms=Tl.clone(u.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:xl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new _r,this.fsQuad=new Ed(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new hn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ys.BlurDirectionX=new Ee(1,0);Ys.BlurDirectionY=new Ee(0,1);var wg={};_e.registerPlugin(nt);let mt=null,zi=null,Kt=null,Pt=null,nl=null,il=null,Nc=null,Ms=null,qr=!1,Vt=null,Ps=null,Nn=null,Ls=null,kr=null,Ds=null,In=null;const lu=new Set;let Vo=null,wl=null,Br=null,tR=null,Is=null;const El={uTime:{value:0},uResolution:{value:new Ee(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};let bl=null;const lr={angle:Math.PI/2,y:0,tilt:0},$n={angle:Math.PI/2,y:0,tilt:0},Vi={x:0,y:0,z:0},ba={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Mt={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let Go=null,Al=null;const pv=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function nR(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:pv.enableShadows,shadowMapSize:512}}function iR(r,e,t){typeof process<"u"&&wg&&wg.VITEST||(Ls=new su(e),Ls.compileEquirectangularShader&&Ls.compileEquirectangularShader(),j1(async()=>{const{RGBELoader:n}=await Promise.resolve().then(()=>W1);return{RGBELoader:n}},void 0).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Pt){s.dispose?.();return}kr&&kr.dispose?.(),kr=Ls.fromEquirectangular(s),r.environment=kr.texture,r.background=kr.texture,uR(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function rR(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=nS;return}r.shadowMap.type=yu,Vt&&(Vt.castShadow=!0,Vt.shadow.mapSize.set(1024,1024),Vt.shadow.bias=-1e-4,Vt.shadow.normalBias=.02,Vt.shadow.camera.near=1,Vt.shadow.camera.far=30,Vt.shadow.camera.left=-7,Vt.shadow.camera.right=7,Vt.shadow.camera.top=7,Vt.shadow.camera.bottom=-7,Vt.target.position.set(Mt.modelX,Mt.modelY,Mt.modelZ),e.add(Vt.target));const n=new $s(20,20),i=new NA({opacity:.22});Nn=new un(n,i),Nn.rotation.x=-Math.PI/2,Nn.position.set(Mt.modelX,Mt.shadowY,Mt.modelZ),Nn.receiveShadow=!0,e.add(Nn)}const sR={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:.15},uOffset:{value:1}},vertexShader:`
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
  `},oR={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},aR={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function lR(r,e,t){const n=new Ad(e,t);r.addPass(n),bl=new Ys(new Ee(window.innerWidth,window.innerHeight),.075,.4,.85),r.addPass(bl);const i=new Ki(sR);r.addPass(i);const s=new Ki(oR);s.uniforms.uGrain=El.uGrain,s.uniforms.uTime=El.uTime,r.addPass(s);const o=new Ki(aR);r.addPass(o);const a=new Rd;r.addPass(a)}function cR(){mt&&(mt.toneMappingExposure=Mt.exposure),Ps&&(Ps.intensity=Mt.ambientIntensity,Ps.color?.set&&Ps.color.set(Mt.ambientColor)),Vt&&(Vt.intensity=Mt.keyIntensity,Vt.color?.set&&Vt.color.set(Mt.keyColor),Vt.position.set(Mt.keyX,Mt.keyY,Mt.keyZ))}function uR(){Pt&&(Pt.backgroundIntensity=Mt.envBackgroundIntensity,Pt.backgroundBlurriness=Mt.envBackgroundBlur)}function hR(){Nn&&(Nn.material&&(Nn.material.opacity=Mt.shadowOpacity),Nn.position.set(Mt.modelX,Mt.shadowY,Mt.modelZ))}function fR(){lu.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=Dc.clamp((r.userData.baseRoughness??r.roughness)*Mt.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=Dc.clamp((r.userData.baseMetalness??r.metalness)*Mt.metalnessScale,0,1)),r.envMapIntensity=Dc.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Mt.envReflection,.2,5),r.needsUpdate=!0)})}function dR(r){r.map&&(r.map.colorSpace=rn),r.emissiveMap&&(r.emissiveMap.colorSpace=rn),r.needsUpdate=!0}function pR(r){return new ui({color:r?.color?.clone?r.color.clone():new ke(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function mR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=pR(t)),dR(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,lu.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function gR(r){const e=new Oi().setFromObject(r),t=e.getCenter(new z),n=e.getSize(new z);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function Eg(r){gR(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,mR(e))})}function _R(){return Is||(Is=new Promise(async r=>{const e="/home/scene.glb",t="/work.glb";await Promise.all([xi.init(),xi.load([e,t])]),xi.hold();const n=new Ru,i=a=>new Promise(l=>{n.load(a,c=>{l(c.scene)},void 0,c=>{console.error(`[three.js] Error loading ${a}`,c),l(null)})}),[s,o]=await Promise.all([i(e),i(t)]);if(!Pt||!qr){xi.release(),r();return}s&&(Vo=s,Eg(Vo),Vo.traverse(a=>{if(!a.isMesh)return;const l=a.name.toLowerCase();(l.includes("volume")||l.includes("glow")||l.includes("light"))&&(uu=mv(a,Kt,{c:1.45,p:2.1,glowColor:"#fff3c6",op:.18}))})),o&&(wl=o,Eg(wl)),fR(),setTimeout(()=>{xi.release()},200),r()}),Is)}async function cu(r){if(!Pt||(Is&&await Is,!Pt||!qr))return;const e=r==="work"?wl:Vo;!e||Br===e||(Br&&Br.parent&&Pt.remove(Br),e.position.set(Mt.modelX,Mt.modelY,Mt.modelZ),Pt.add(e),Br=e,Pt&&(r==="work"?Pt.fog=new Xs(15789284,.035):Pt.fog=new Xs(657935,.045)))}function vR(r,e){Go=r,Al=e}function xR(){Go=null,Al=null}function bg(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}function mv(r,e,t={}){const{c:n=1.45,p:i=2.1,glowColor:s="#fff3c6",op:o=.18}=t,a=new _r({side:vi,blending:xl,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1});return a.onBeforeCompile=l=>{l.uniforms.c={value:n},l.uniforms.p={value:i},l.uniforms.glowColor={value:new ke(s)},l.uniforms.op={value:o},l.vertexShader=`
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
    `,a.userData.shader=l},a.customProgramCacheKey=()=>`fake-volume-${s}-${n}-${i}`,r.material=a,r.renderOrder=10,r.needsUpdate=!0,{update(l){},setOpacity(l){const c=a.userData.shader;c&&(c.uniforms.op.value=l)}}}let uu=null;const Oa=200,gv={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function yR(r){const e=new qn,t=new Float32Array(Oa*3),n=new Float32Array(Oa),i=new Float32Array(Oa),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=gv;for(let f=0;f<Oa;f++)t[f*3]=(Math.random()-.5)*2*s,t[f*3+1]=o+Math.random()*(a-o),t[f*3+2]=l+Math.random()*(c-l),n[f]=.008+Math.random()*.016,i[f]=.35+Math.random()*.6;e.setAttribute("position",new Ft(t,3)),e.setAttribute("aSize",new Ft(n,1)),e.setAttribute("aOpacity",new Ft(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),h=new hn({transparent:!0,depthWrite:!1,blending:xl,uniforms:{uPixelRatio:{value:u}},vertexShader:`
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
    `});In=new gd(e,h),In.frustumCulled=!1,r.add(In)}function SR(r){if(!In)return;const e=In.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=gv;for(let a=0;a<Oa;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}In.geometry.attributes.position.needsUpdate=!0}function Ag(){if(qr)return{scene:Pt,camera:Kt,renderer:mt};qr=!0;const r=nR();if(Pt=new hd,Pt.fog=new Xs(657935,.045),Kt=new pn(75,window.innerWidth/window.innerHeight,.1,1e3),mt=new nv({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),mt.setSize(window.innerWidth,window.innerHeight),mt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),mt.toneMapping=Su,mt.toneMappingExposure=r.toneMappingExposure,mt.outputColorSpace=rn,Ms=document.querySelector("#background"),!Ms){console.warn("[three.js] #background element not found, creating one"),Ms=document.createElement("div"),Ms.id="background";const i=document.body.firstChild;document.body.insertBefore(Ms,i)}Ms.appendChild(mt.domElement),Ps=new Sd(16777215,.18),Pt.add(Ps),Vt=new ou(16777215,3.25),Vt.position.set(4.2,7.5,6.2),Pt.add(Vt),cR(),iR(Pt,mt,pv.hdriUrl),rR(mt,Pt,r),hR(),yR(Pt),sessionStorage.getItem("webgl-page"),_R().then(()=>{if(!Pt||!qr)return;const i=sessionStorage.getItem("webgl-page")||"home";cu(i==="work"?"work":"home");const o=vv(i);Vi.x=o.x,Vi.y=o.y,Vi.z=o.z});let e=null;nl=()=>{e&&clearTimeout(e),e=setTimeout(()=>{if(!Kt||!mt||!zi)return;const i=window.innerWidth,s=window.innerHeight;Kt.aspect=i/s,Kt.updateProjectionMatrix(),mt.setSize(i,s),zi.setSize(i,s),bl&&bl.setSize(i,s),El.uResolution.value.set(i,s)},100)},window.addEventListener("resize",nl);try{zi=new bd(mt)}catch{zi={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>mt?.render(Pt,Kt)}}lR(zi,Pt,Kt),lr.angle=Math.PI/2,lr.y=0,lr.tilt=0,$n.angle=Math.PI/2,$n.y=0,$n.tilt=0;let t=0;il=i=>{const s=performance.now();if(s-t<16)return;t=s;const o=i.clientX/window.innerWidth*2-1,a=-(i.clientY/window.innerHeight)*2+1;lr.angle=Math.PI/2+o*ba.angleRange,lr.y=-a*ba.yRange,lr.tilt=o*ba.tiltRange},window.addEventListener("mousemove",il,{passive:!0}),performance.now();const n=()=>{if(!qr||!Kt||!zi)return;const i=performance.now(),s=ba.lerp;$n.angle+=(lr.angle-$n.angle)*s,$n.y+=(lr.y-$n.y)*s,$n.tilt+=(lr.tilt-$n.tilt)*s;const o=Br?Br.position:{x:Mt.modelX,y:Mt.modelY,z:Mt.modelZ},a=o.x+Vi.x,l=o.y+Vi.y,c=o.z+Vi.z,u=ba.orbitRadius;Kt.position.x=a+Math.cos($n.angle)*u,Kt.position.z=c+Math.sin($n.angle)*u,Kt.position.y=l+$n.y+1;const h=i*.001;if(Kt.position.x+=Math.sin(h*.7)*.012+Math.sin(h*1.3)*.008,Kt.position.y+=Math.sin(h*.5)*.012+Math.cos(h*1.1)*.008,Kt.position.z+=Math.cos(h*.6)*.008,Kt.lookAt(a,l,c),Kt.rotation.z+=$n.tilt,El.uTime.value=h,SR(h),uu&&uu.update(Kt),zi.render(),Go&&Al){const f=mt.autoClear;mt.autoClear=!1,mt.clearDepth();const d=Go.userData?.composer;d?d.render():mt.render(Go,Al),mt.autoClear=f}Nc=requestAnimationFrame(n)};return n(),{scene:Pt,camera:Kt,renderer:mt}}function Uc(){if(!qr)return;qr=!1,Nc&&(cancelAnimationFrame(Nc),Nc=null),nl&&(window.removeEventListener("resize",nl),nl=null),il&&(window.removeEventListener("mousemove",il),il=null),Ds&&(Ds.kill(),Ds=null),El.uTime.value=0,bl=null,In&&(In.geometry&&In.geometry.dispose(),In.material&&In.material.dispose(),In.parent&&In.parent.remove(In),In=null),uu=null,Go=null,Al=null,Nn&&(Nn.geometry&&Nn.geometry.dispose(),Nn.material&&Nn.material.dispose(),Nn=null),kr&&(kr.dispose(),kr=null),Ls&&(Ls.dispose(),Ls=null),lu.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),lu.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==tR){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Pt?.remove(e))};r(Vo),r(wl),Vo=null,wl=null,Br=null,Is=null,zi&&(zi.dispose(),zi=null),mt&&(mt.dispose(),mt.domElement&&mt.domElement.parentNode&&mt.domElement.parentNode.removeChild(mt.domElement),mt=null),Pt=null,Kt=null,Vt=null,Ps=null,Ms=null}function _v(){return mt}function vv(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function rl(r,e=!1){const t=vv(r);sessionStorage.setItem("webgl-page",r),Ds&&(Ds.kill(),Ds=null),e?(Vi.x=t.x,Vi.y=t.y,Vi.z=t.z):Ds=_e.to(Vi,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}let sl=!1;function xv(){const r=document.querySelectorAll('[data-barba="container"][data-barba-namespace="work"]');return r.length?r[r.length-1]:null}const Qe={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:5,CAMERA_FOV:50,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ANGLE_RANGE:.2,PARALLAX_Y_RANGE:.3,PARALLAX_TILT_RANGE:.04,PARALLAX_CONFIG_LERP:.05,PARALLAX_ORBIT_RADIUS:5,WAVE_AMPLITUDE:.6,WAVE_FREQUENCY:.5,WAVE_SPEED:.2,PARTICLE_COUNT:200,PARTICLE_BOUNDS:{xHalf:8,yMin:-3,yMax:5,zMin:-16,zMax:2},SCROLL_TILT_AMOUNT:.08,SCROLL_TILT_LERP:.04,SCROLL_TILT_MAX:.15},MR=`
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;

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

    float t = uTime * uWaveSpeed;

    // ─── CLOTH SIMULATION ───
    
    // Scale UVs for noise space
    // x is long (ribbon length), y is short (ribbon height)
    vec2 noiseUV = vUv * vec2(2.0, 1.0) * uWaveFreq; 

    // Layer 1: Large, slow rolling folds (wind)
    // Moving the domain (noiseUV + t) simulates wind passing through
    float n1 = snoise(vec3(noiseUV.x - t * 0.5, noiseUV.y, t * 0.2));

    // Layer 2: Smaller details/wrinkles
    float n2 = snoise(vec3(noiseUV.x * 2.5 - t * 0.8, noiseUV.y * 2.5, t * 0.5));

    // Layer 3: Fine flutter (mostly at edges)
    float n3 = snoise(vec3(noiseUV.x * 6.0 - t * 1.5, noiseUV.y * 6.0, t));

    // Edge constraint: center is more constrained, edges flutter more
    float edgeDist = abs(vUv.y - 0.5) * 2.0; // 0 at center, 1 at edge
    float flutter = smoothstep(0.2, 1.0, edgeDist); 

    // Combine layers:
    // Base wave (large) + Detail wave (medium) + Edge flutter (small)
    float displacement = (n1 * 1.0 + n2 * 0.4 + n3 * 0.15 * flutter) * uWaveAmp;

    // Apply displacement along normal
    pos += normal * displacement;



    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Pass view position for recomputing normal in fragment shader
    vViewPosition = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
  }
`,TR=`
  uniform sampler2D uTex0;
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform sampler2D uTex3;
  uniform sampler2D uTex4;
  uniform float uScrollOffset;
  uniform float uItemsOnStrip;
  uniform float uNumUnique;
  uniform float uGapSize;
  uniform float uTime;

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
    else col = texture2D(uTex4, texCoord).rgb;

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

    float edgeFade = smoothstep(0.0, 0.05, vUv.x) * (1.0 - smoothstep(0.95, 1.0, vUv.x));

    // Intro reveal
    float revealMask = 1.0;

    gl_FragColor = vec4(col, edgeFade * 0.95 * revealMask);
  }
`,C={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,composer:null,workGlowHandle:null,workModel:null,tunedMaterials:new Set,pointLight:null,ambientLight:null,directionalLight:null,shadowPlane:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{rx:0,ry:0,cx:0,cy:0},scrollTilt:0,raycaster:new cv,rayMouse:new Ee,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,gui:null,revealProgress:{value:0},introTimeline:null,introComplete:!1,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function wR(){const r=new vd,t=[...new Set(Cu.map(n=>n.image))].map(n=>C.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=rn,s.minFilter=si,s.magFilter=qt,s.generateMipmaps=!0,C.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function ER(){const r=Qe.ARC_RADIUS,e=Qe.ARC_SPAN,t=Qe.STRIP_HEIGHT,n=Qe.WIDTH_SEGMENTS,i=Qe.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,h=0;for(let _=0;_<=i;_++){const g=_/i,p=(g-.5)*t+Qe.STRIP_Y_OFFSET;for(let m=0;m<=n;m++){const M=m/n,x=(M-.5)*e,S=Math.sin(x)*r,R=(Math.cos(x)-1)*r;o[c++]=S,o[c++]=p,o[c++]=R;const A=Math.sin(x),w=Math.cos(x);a[u++]=A,a[u++]=0,a[u++]=w,l[h++]=M,l[h++]=g}}const f=[];for(let _=0;_<i;_++)for(let g=0;g<n;g++){const p=_*(n+1)+g,m=p+1,M=p+(n+1),x=M+1;f.push(p,m,M),f.push(m,x,M)}const d=new qn;return d.setAttribute("position",new Ft(o,3)),d.setAttribute("normal",new Ft(a,3)),d.setAttribute("uv",new Ft(l,2)),d.setIndex(f),d}function bR(r){r.map&&(r.map.colorSpace=rn),r.emissiveMap&&(r.emissiveMap.colorSpace=rn),r.needsUpdate=!0}function AR(r){return new ui({color:r?.color?.clone?r.color.clone():new ke(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function RR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=AR(t)),bR(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,C.tunedMaterials.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function CR(r){const e=new Oi().setFromObject(r),t=e.getCenter(new z),n=e.getSize(new z);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function PR(r){const e=CR(r),t=Math.max(e.x,e.y,e.z);if(t>0){const i=40/t;r.scale.set(i,i,i)}r.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,RR(n))})}async function LR(){const r="/work.glb";return await Promise.all([xi.init(),xi.load([r])]),xi.hold(),new Promise((e,t)=>{new Ru().load(r,i=>{C.workModel=i.scene,PR(C.workModel),C.workModel.position.set(0,-5,-28),C.workModel.scale.set(1,1,1),C.scene.add(C.workModel),C.workModel.traverse(s=>{if(!s.isMesh)return;const o=s.name.toLowerCase();(o.includes("volume")||o.includes("glow")||o.includes("light"))&&(C.workGlowHandle=mv(s,C.camera,{c:1.5,p:2.1,glowColor:"#fff8de",op:.2}))}),setTimeout(()=>{xi.release()},200),e()},void 0,i=>{console.error("[work] Model load error:",i),xi.release(),t(i)})})}function DR(){const r=window.innerWidth,e=window.innerHeight;C.camera=new pn(Qe.CAMERA_FOV,r/e,.1,100),C.camera.position.set(0,0,Qe.PARALLAX_ORBIT_RADIUS),C.scene=new hd,C.scene.fog=new Xs(15461092,.045);const t=new bf(16773341,1200);t.position.set(10,15,12),t.angle=Math.PI/5,t.penumbra=.3,t.decay=1.6,t.distance=50,t.castShadow=!0,t.shadow.bias=-1e-4,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,C.scene.add(t),C.pointLight=t;const n=new yd(16777215,3.5);n.position.set(-15,0,10),n.decay=2,n.distance=30,C.scene.add(n);const i=new bf(16777215,1500);i.position.set(0,10,-15),i.target.position.set(0,0,-5),i.angle=Math.PI/4,i.penumbra=.5,i.decay=1.5,i.distance=40,C.scene.add(i),C.scene.add(i.target),C.ambientLight=new Sd(16777215,.4),C.scene.add(C.ambientLight);const s=_v();s&&(s.shadowMap.enabled=!0,s.shadowMap.type=yu),C.stripGroup=new vr,C.stripGroup.position.set(0,0,0),C.scene.add(C.stripGroup);const o=new $s(40,20),a=new bu({color:15789284,roughness:.9,metalness:0});C.shadowPlane=new un(o,a),C.shadowPlane.rotation.x=-Math.PI/2,C.shadowPlane.position.set(0,-5.2,-18),C.shadowPlane.receiveShadow=!0,C.shadowPlane.castShadow=!1,C.scene.add(C.shadowPlane),yv(),C.clock=new Md,BR(),vR(C.scene,C.camera)}function IR(){const r=[...new Set(Cu.map(e=>e.image))];for(C.textures=r.map(e=>C.textureCache.get(e)).filter(Boolean);C.textures.length<Qe.NUM_UNIQUE;)C.textures.push(C.textures[0]||new Jt);C.stripGeometry=ER(),C.stripMaterial=new hn({vertexShader:MR,fragmentShader:TR,uniforms:{uTex0:{value:C.textures[0]},uTex1:{value:C.textures[1]},uTex2:{value:C.textures[2]},uTex3:{value:C.textures[3]},uTex4:{value:C.textures[4]},uScrollOffset:{value:0},uItemsOnStrip:{value:Qe.ITEMS_ON_STRIP},uNumUnique:{value:Qe.NUM_UNIQUE},uGapSize:{value:Qe.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Qe.WAVE_AMPLITUDE},uWaveFreq:{value:Qe.WAVE_FREQUENCY},uWaveSpeed:{value:Qe.WAVE_SPEED},uHoverUV:{value:new Ee(-1,-1)}},extensions:{derivatives:!0},transparent:!0,side:Qi,depthWrite:!0}),C.stripMesh=new un(C.stripGeometry,C.stripMaterial),C.stripMesh.frustumCulled=!1,C.stripMesh.castShadow=!1,C.stripMesh.receiveShadow=!1,C.stripGroup.add(C.stripMesh)}function NR(){if(!C.titleEl||!C.titleEl.isConnected){const n=xv();n&&(C.container=n,C.titleEl=n.querySelector(".slide-title"))}if(!C.titleEl)return;const r=.5*Qe.ITEMS_ON_STRIP+C.scrollCurrent,e=(Math.floor(r)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE;C.activeIndex=e;const t=Cu[e];t&&C.lastActiveTitle!==t.title&&(C.lastActiveTitle=t.title,C.titleEl.textContent=t.title)}function UR(r){if(!C.stripMaterial)return;const e=C.stripMaterial.uniforms;e.uScrollOffset.value=C.scrollCurrent,e.uTime.value=r}const hu={uTime:{value:0},uResolution:{value:new Ee(window.innerWidth,window.innerHeight)},uGrain:{value:.03}},OR={uniforms:{tDiffuse:{value:null},uDarkness:{value:.65},uOffset:{value:.68}},vertexShader:`
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
  `},FR={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},kR={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function BR(){const r=_v();if(!r)return;C.composer=new bd(r);const e=new Ad(C.scene,C.camera);C.composer.addPass(e);const t=new Ki(OR);C.composer.addPass(t);const n=new Ki(FR);n.uniforms.uGrain=hu.uGrain,n.uniforms.uTime=hu.uTime,C.composer.addPass(n);const i=new Ki(kR);C.composer.addPass(i);const s=new Rd;C.composer.addPass(s),C.scene.userData.composer=C.composer}const Mo={angle:Math.PI/2,y:0,tilt:0},Fi={angle:Math.PI/2,y:0,tilt:0};function zR(){const r=C.clock?C.clock.getElapsedTime():0;Mo.angle=Math.PI/2+C.mouseX*Qe.PARALLAX_ANGLE_RANGE,Mo.y=-C.mouseY*Qe.PARALLAX_Y_RANGE,Mo.tilt=C.mouseX*Qe.PARALLAX_TILT_RANGE;const e=Qe.PARALLAX_CONFIG_LERP;if(Fi.angle+=(Mo.angle-Fi.angle)*e,Fi.y+=(Mo.y-Fi.y)*e,Fi.tilt+=(Mo.tilt-Fi.tilt)*e,C.camera){const t=C.stripGroup?C.stripGroup.position:{x:0,y:-.7,z:-13.4},n=t.x,i=t.y,s=t.z,o=Qe.PARALLAX_ORBIT_RADIUS;C.camera.position.x=n+Math.cos(Fi.angle)*o,C.camera.position.z=s+Math.sin(Fi.angle)*o,C.camera.position.y=i+Fi.y+1;const a=Math.sin(r*.7)*.012+Math.sin(r*1.3)*.008,l=Math.sin(r*.5)*.012+Math.cos(r*1.1)*.008,c=Math.cos(r*.6)*.008;C.camera.position.x+=a,C.camera.position.y+=l,C.camera.position.z+=c,C.camera.lookAt(n,i,s),C.camera.rotation.z+=Fi.tilt,C.pointLight&&(C.pointLight.position.x=C.camera.position.x*.5,C.pointLight.position.y=.5+C.camera.position.y*.3)}}function HR(){if(!C.stripGroup)return;const r=Math.max(-.15,Math.min(Qe.SCROLL_TILT_MAX,C.scrollVelocity*Qe.SCROLL_TILT_AMOUNT));C.scrollTilt+=(r-C.scrollTilt)*Qe.SCROLL_TILT_LERP,C.stripGroup.rotation.z=C.scrollTilt}function yv(){const{PARTICLE_COUNT:r,PARTICLE_BOUNDS:e}=Qe,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=e,a=new qn,l=new Float32Array(r*3),c=new Float32Array(r),u=new Float32Array(r);for(let d=0;d<r;d++)l[d*3]=(Math.random()-.5)*2*t,l[d*3+1]=n+Math.random()*(i-n),l[d*3+2]=s+Math.random()*(o-s),c[d]=.012+Math.random()*.02,u[d]=.5+Math.random()*.4;a.setAttribute("position",new Ft(l,3)),a.setAttribute("aSize",new Ft(c,1)),a.setAttribute("aOpacity",new Ft(u,1));const h=Math.min(window.devicePixelRatio||1,1.5),f=new hn({transparent:!0,depthWrite:!1,blending:Hs,uniforms:{uPixelRatio:{value:h}},vertexShader:`
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
    `});C.particleSystem=new gd(a,f),C.particleSystem.frustumCulled=!1,C.particleSystem.renderOrder=10,C.scene.add(C.particleSystem)}function VR(r){if(!C.particleSystem)return;const e=C.particleSystem.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Qe.PARTICLE_BOUNDS;for(let a=0;a<Qe.PARTICLE_COUNT;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}C.particleSystem.geometry.attributes.position.needsUpdate=!0}function GR(){!C.isPointerDown&&Math.abs(C.scrollVelocity)>1e-4?(C.scrollTarget+=C.scrollVelocity,C.scrollVelocity*=.95):C.isPointerDown||(C.scrollVelocity=0),C.scrollCurrent+=(C.scrollTarget-C.scrollCurrent)*Qe.SCROLL_LERP}function WR(r){if(!C.introComplete)return;r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;C.scrollTarget+=e*Qe.SCROLL_SPEED}function XR(r){C.introComplete&&(C.isPointerDown=!0,C.lastPointerX=r.clientX,C.dragStartX=r.clientX,C.dragStartY=r.clientY,C.scrollVelocity=0,C.lastDragTime=performance.now())}function qR(r){if(C.isPointerDown){const n=performance.now(),i=r.clientX-C.lastPointerX,s=n-C.lastDragTime;C.scrollTarget-=i*Qe.DRAG_MULTIPLIER,s>0&&(C.scrollVelocity=-i*Qe.DRAG_MULTIPLIER/(s/16)),C.lastPointerX=r.clientX,C.lastDragTime=n}const e=r.clientX/window.innerWidth*2-1,t=-(r.clientY/window.innerHeight)*2+1;C.mouseX=e,C.mouseY=t}function YR(r){if(!C.isPointerDown)return;C.isPointerDown=!1;const e=Math.abs(r.clientX-C.dragStartX),t=Math.abs(r.clientY-C.dragStartY);e<5&&t<5&&jR(r)}function jR(r){if(!C.camera||!C.stripMesh)return;C.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),C.raycaster.setFromCamera(C.rayMouse,C.camera);const e=C.raycaster.intersectObject(C.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Qe.ITEMS_ON_STRIP+C.scrollCurrent,i=(Math.floor(n)%Qe.NUM_UNIQUE+Qe.NUM_UNIQUE)%Qe.NUM_UNIQUE,s=Cu[i];if(s?.href){const o=document.querySelector(`a[href="${s.href}"]`);o?o.click():window.location.href=s.href}}}}let Wo=null;function $R(){Wo&&clearTimeout(Wo),Wo=setTimeout(()=>{if(!C.camera)return;const r=window.innerWidth,e=window.innerHeight;C.camera.aspect=r/e,C.camera.updateProjectionMatrix(),C.composer&&C.composer.setSize(r,e),hu.uResolution.value.set(r,e)},100)}function KR(){C.handlers.wheel=WR,C.handlers.pointerdown=XR,C.handlers.pointermove=qR,C.handlers.pointerup=YR,C.handlers.resize=$R,window.addEventListener("wheel",C.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",C.handlers.pointerdown),window.addEventListener("pointermove",C.handlers.pointermove),window.addEventListener("pointerup",C.handlers.pointerup),window.addEventListener("resize",C.handlers.resize)}function ZR(){C.handlers.wheel&&window.removeEventListener("wheel",C.handlers.wheel),C.handlers.pointerdown&&window.removeEventListener("pointerdown",C.handlers.pointerdown),C.handlers.pointermove&&window.removeEventListener("pointermove",C.handlers.pointermove),C.handlers.pointerup&&window.removeEventListener("pointerup",C.handlers.pointerup),C.handlers.resize&&window.removeEventListener("resize",C.handlers.resize)}function QR(){C.stripMaterial}function Sv(){const r=C.clock?C.clock.getElapsedTime():0;GR(),UR(r),zR(),HR(),VR(r),QR(),C.workGlowHandle&&C.workGlowHandle.update(C.camera),NR(),hu.uTime.value=r,C.animationFrame=requestAnimationFrame(Sv)}async function JR(){}async function Mv(){if(sl)return;sl=!0;const r=xv();if(!r){console.warn("[work] no active work container found"),sl=!1;return}C.container=r,C.titleEl=r.querySelector(".slide-title"),DR();try{await LR()}catch(e){console.error("[work] Failed to load 3D model:",e)}await wR(),IR(),yv(),KR(),await JR(),C.introComplete=!1,C.stripGroup&&C.stripGroup.scale.set(.35,.35,.35),C.scrollVelocity=0,C.scrollTarget=-1,C.scrollCurrent=C.scrollTarget,C.titleEl&&_e.set(C.titleEl,{opacity:1,y:0}),C.introTimeline=_e.timeline({onComplete:()=>{C.introComplete=!0}}),C.stripGroup&&(C.stripGroup.rotation.y=Math.PI*1.5,C.stripGroup.position.y+=2,C.stripMaterial&&(C.stripMaterial.uniforms.uWaveAmp.value=2,C.stripMaterial.uniforms.uWaveFreq.value=1),C.introTimeline.to(C.stripGroup.rotation,{y:0,duration:2.5,ease:"power3.out"},0),C.introTimeline.to(C.stripGroup.position,{y:"-=2",duration:2.2,ease:"elastic.out(1, 0.75)"},0),C.stripMaterial&&(C.introTimeline.to(C.stripMaterial.uniforms.uWaveAmp,{value:Qe.WAVE_AMPLITUDE,duration:3,ease:"elastic.out(1, 0.5)"},.2),C.introTimeline.to(C.stripMaterial.uniforms.uWaveFreq,{value:Qe.WAVE_FREQUENCY,duration:3,ease:"power2.out"},.2))),C.introTimeline.to(C,{scrollTarget:.8,duration:2.5,ease:"power2.out"},0),C.animationFrame=requestAnimationFrame(Sv)}function Po(){sl&&(sl=!1,C.animationFrame!==null&&(cancelAnimationFrame(C.animationFrame),C.animationFrame=null),ZR(),xR(),C.introTimeline&&(C.introTimeline.kill(),C.introTimeline=null),C.titleEl&&_e.killTweensOf(C.titleEl),C.gui&&(C.gui.destroy(),C.gui=null),C.stripMesh&&C.stripGroup?.remove(C.stripMesh),C.stripMaterial&&(C.stripMaterial.dispose(),C.stripMaterial=null),C.stripGeometry&&(C.stripGeometry.dispose(),C.stripGeometry=null),C.stripMesh=null,C.textures=[],C.particleSystem&&(C.particleSystem.geometry&&C.particleSystem.geometry.dispose(),C.particleSystem.material&&C.particleSystem.material.dispose(),C.particleSystem.parent&&C.particleSystem.parent.remove(C.particleSystem),C.particleSystem=null),C.workModel&&(C.scene?.remove(C.workModel),C.workModel.traverse(r=>{r.isMesh&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(e=>e.dispose()):r.material.dispose()))}),C.workModel=null),C.tunedMaterials.clear(),C.composer&&(C.composer=null),C.workGlowHandle=null,C.shadowPlane&&(C.shadowPlane.geometry.dispose(),C.shadowPlane.material.dispose(),C.shadowPlane.parent&&C.shadowPlane.parent.remove(C.shadowPlane),C.shadowPlane=null),C.pointLight&&(C.scene?.remove(C.pointLight),C.pointLight=null),C.ambientLight&&(C.scene?.remove(C.ambientLight),C.ambientLight=null),C.directionalLight&&(C.scene?.remove(C.directionalLight),C.directionalLight.dispose(),C.directionalLight=null),C.stripGroup&&(C.scene?.remove(C.stripGroup),C.stripGroup=null),C.textureCache.forEach(r=>r.dispose()),C.textureCache.clear(),Wo&&(clearTimeout(Wo),Wo=null),document.body.style.cursor="",C.scene=null,C.camera=null,C.clock=null,C.container=null,C.titleEl=null,C.scrollTarget=0,C.scrollCurrent=0,C.scrollVelocity=0,C.lastDragTime=0,C.activeIndex=0,C.lastActiveTitle="",C.mouseX=0,C.mouseY=0,C.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},C.scrollTilt=0,C.hoverUV=null,C.hoverActive=!1,C.rippleStrength=0,C.isPointerDown=!1,C.revealProgress={value:0},C.introTimeline=null,C.introComplete=!1,C.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null})}const Ti=[{id:1,title:"Archive 01",year:"2024",description:"A glimpse into the creative process.",category:"photography",image:"/archive/image-1.jpg"},{id:2,title:"Archive 02",year:"2024",description:"Exploring light and shadow.",category:"photography",image:"/archive/image-2.jpg"},{id:3,title:"Archive 03",year:"2023",description:"Moments captured in time.",category:"photography",image:"/archive/image-3.jpg"},{id:4,title:"Archive 04",year:"2023",description:"Visual storytelling through imagery.",category:"photography",image:"/archive/image-4.jpg"},{id:5,title:"Archive 05",year:"2023",description:"The art of observation.",category:"photography",image:"/archive/image-5.jpg"}],ct=Object.freeze({cardWidth:2.25,cardHeight:2.8,cardSpacing:1.85,visibleRange:12,dragSensitivityDesktop:.0035,dragSensitivityMobile:.006,wheelSensitivity:.0012,velocityDamping:.95,velocityEpsilon:1e-5,boundSlack:1.1,clickThreshold:12,clickTimeout:260,dragExitThreshold:48,focusLift:1.35,focusScale:1.22,focusTrackLerp:.12,focusTransition:.42,cameraFollowLerp:.085,cameraBaseY:.25,cameraBaseZ:8.6,dockMargin:20,dockTopSafe:90,atlasTileSize:1024,mobileBreakpoint:900,hdriUrl:"/env.hdr",postFX:Object.freeze({grain:.015,vignette:.15,bloomStrength:.12,bloomRadius:.4,bloomThreshold:.85})}),eC={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:ct.postFX.vignette},uOffset:{value:1}},vertexShader:`
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
  `},tC={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:ct.postFX.grain}},vertexShader:`
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
  `},nC={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `},E={running:!1,initToken:0,rafId:null,container:null,backgroundEl:null,renderHost:null,eventTarget:null,renderer:null,composer:null,grainPass:null,pmremGenerator:null,envRenderTarget:null,scene:null,camera:null,clock:null,root:null,cards:[],cardByIndex:new Map,atlasTexture:null,sourceTextures:[],ambientLight:null,keyLight:null,fillLight:null,rimLight:null,raycaster:new cv,pointerNdc:new Ee,trackOffset:0,trackVelocity:0,isDragging:!1,activePointerId:null,pointerStart:{x:0,y:0},pointerLast:{x:0,y:0},clickStartTime:0,dragDistance:0,focusedIndex:-1,focusLerp:{value:0},mouseParallaxTarget:new Ee(0,0),mouseParallaxCurrent:new Ee(0,0),dockPosCurrent:new Ee(-9999,-9999),dockPosTarget:new Ee(-9999,-9999),handlers:{},dom:{overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},tmp:{p0:new z,p1:new z,toCam:new z,projected:new z}};function Rg(r,e,t){return Math.min(t,Math.max(e,r))}function iC(){return window.innerWidth<=ct.mobileBreakpoint}function rC(){return iC()?ct.dragSensitivityMobile:ct.dragSensitivityDesktop}function Cg(r,e){return e.x=r*ct.cardSpacing,e.y=Math.sin(r*.42)*.52+Math.sin(r*.11)*.25,e.z=Math.sin(r*.78)*2.15+Math.sin(r*.2)*1.1,e}function sC(r){return Math.sin(r*.55)*.24+Math.sin(r*.17)*.1}function fu(){E.dom.panel&&(E.dom.panel.style.transform="translate3d(-9999px, -9999px, 0)"),E.dockPosCurrent.set(-9999,-9999),E.dockPosTarget.set(-9999,-9999)}function oC(){E.dom.overlay=document.getElementById("archive-overlay"),E.dom.panel=document.querySelector(".archive-focus-panel"),E.dom.title=document.querySelector(".archive-focus-title"),E.dom.year=document.querySelector(".archive-focus-year"),E.dom.description=document.querySelector(".archive-focus-description"),E.dom.category=document.querySelector(".archive-focus-category"),E.dom.prev=document.getElementById("archive-prev"),E.dom.next=document.getElementById("archive-next"),E.dom.close=document.querySelector(".archive-close-btn")}function aC(){E.dom.overlay&&E.dom.overlay.classList.add("active"),document.body.classList.add("archive-focus-open")}function Cd(){E.dom.overlay&&E.dom.overlay.classList.remove("active"),document.body.classList.remove("archive-focus-open"),fu()}function lC(r){const e=Ti[r];e&&(E.dom.title&&(E.dom.title.textContent=e.title||""),E.dom.year&&(E.dom.year.textContent=e.year||""),E.dom.description&&(E.dom.description.textContent=e.description||""),E.dom.category&&(E.dom.category.textContent=e.category||""))}async function cC(r){const e=new vd,t=new Array(r.length).fill(null);return await Promise.all(r.map((n,i)=>new Promise(s=>{e.load(n.image,o=>{o.colorSpace=rn,o.wrapS=Bn,o.wrapT=Bn,o.minFilter=si,o.magFilter=qt,o.generateMipmaps=!0,t[i]=o,s()},void 0,()=>{t[i]=null,s()})}))),t}function uC(r){const e=Math.ceil(Math.sqrt(r.length)),t=ct.atlasTileSize,n=document.createElement("canvas");n.width=e*t,n.height=e*t;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,n.width,n.height),r.forEach((o,a)=>{if(!o?.image)return;const l=o.image,c=a%e*t,u=Math.floor(a/e)*t,h=(l.width||1)/(l.height||1);let f=t,d=t,_=c,g=u;h>1?(f=t*h,_=c-(f-t)*.5):(d=t/h,g=u-(d-t)*.5),i.drawImage(l,_,g,f,d)});const s=new IA(n);return s.colorSpace=rn,s.wrapS=Bn,s.wrapT=Bn,s.minFilter=si,s.magFilter=qt,s.generateMipmaps=!0,s.flipY=!1,s}function hC(r,e){const t=Math.ceil(Math.sqrt(e)),n=r%t,i=Math.floor(r/t),s=new $s(ct.cardWidth,ct.cardHeight,1,1),o=s.attributes.uv;for(let a=0;a<o.count;a+=1){const l=o.getX(a),c=o.getY(a),u=(l+n)/t,h=(c+(t-1-i))/t;o.setXY(a,u,h)}return o.needsUpdate=!0,s}function fC(r,e){const t=hC(r,Ti.length),n=new ui({map:e,color:16777215,roughness:.25,metalness:.1,clearcoat:1,clearcoatRoughness:.1,iridescence:.15,iridescenceIOR:1.3,envMapIntensity:1.2,side:vi}),i=new un(t,n);return i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.userData.archiveIndex=r,i}function dC(){E.composer=new bd(E.renderer);const r=new Ad(E.scene,E.camera);E.composer.addPass(r);const e=new Ys(new Ee(window.innerWidth,window.innerHeight),ct.postFX.bloomStrength,ct.postFX.bloomRadius,ct.postFX.bloomThreshold);E.composer.addPass(e);const t=new Ki(eC);E.composer.addPass(t),E.grainPass=new Ki(tC),E.composer.addPass(E.grainPass);const n=new Ki(nC);E.composer.addPass(n),E.composer.addPass(new Rd)}function pC(){E.pmremGenerator=new su(E.renderer),E.pmremGenerator.compileEquirectangularShader(),new fv().load(ct.hdriUrl,r=>{E.envRenderTarget=E.pmremGenerator.fromEquirectangular(r),E.scene.environment=E.envRenderTarget.texture,r.dispose()})}function mC(){E.scene=new hd,E.scene.background=new ke(15921906),E.scene.fog=new Xs(15921906,.035),E.camera=new pn(45,1,.1,120),E.camera.position.set(0,ct.cameraBaseY,ct.cameraBaseZ),E.root=new vr,E.scene.add(E.root),E.ambientLight=new Sd(16777215,.4),E.keyLight=new ou(16777215,2),E.keyLight.position.set(5,5,8),E.keyLight.castShadow=!0,E.keyLight.shadow.mapSize.width=1024,E.keyLight.shadow.mapSize.height=1024,E.fillLight=new yd(12176383,.8,20),E.fillLight.position.set(-5,0,5),E.rimLight=new ou(16767406,1.5),E.rimLight.position.set(0,5,-5),E.scene.add(E.ambientLight,E.keyLight,E.fillLight,E.rimLight),pC()}function gC(r,e){const t=r.mesh,n=t.material,i=E.focusedIndex===r.index,s=E.focusLerp.value;let o=0;s>0&&E.focusedIndex!==-1&&!i&&(o=s);const a=1-o*.55;n.color.setRGB(a,a,a),n.emissiveIntensity=i?.08+s*.22:.05,n.opacity=1-o*.2,t.visible=Math.abs(e)<=ct.visibleRange}function _C(){const r=E.tmp.p0,e=E.tmp.p1;for(const t of E.cards){const n=t.index-E.trackOffset;Cg(n,r),Cg(n+.04,e);const i=t.mesh;i.position.copy(r),i.lookAt(e),i.rotateZ(sC(n)),i.scale.set(1,1,1),E.focusedIndex===t.index&&E.focusLerp.value>.001&&(E.tmp.toCam.copy(E.camera.position).sub(i.position).normalize(),i.position.addScaledVector(E.tmp.toCam,ct.focusLift*E.focusLerp.value),i.scale.setScalar(1+ct.focusScale*E.focusLerp.value)),gC(t,n)}}function vC(){if(E.focusedIndex!==-1){const t=E.focusedIndex;E.trackOffset+=(t-E.trackOffset)*ct.focusTrackLerp,E.trackVelocity*=.84}else E.trackOffset+=E.trackVelocity,E.trackVelocity*=ct.velocityDamping,Math.abs(E.trackVelocity)<ct.velocityEpsilon&&(E.trackVelocity=0);const r=-ct.boundSlack,e=Ti.length-1+ct.boundSlack;E.trackOffset<r&&(E.trackOffset=r,E.trackVelocity<0&&(E.trackVelocity*=.35)),E.trackOffset>e&&(E.trackOffset=e,E.trackVelocity>0&&(E.trackVelocity*=.35))}function xC(){const r=Math.sin(E.trackOffset*.24)*.65+(E.trackOffset-(Ti.length-1)*.5)*.08;E.camera.position.x+=(r-E.camera.position.x)*ct.cameraFollowLerp,E.camera.position.y=ct.cameraBaseY,E.camera.position.z=ct.cameraBaseZ,E.camera.lookAt(E.camera.position.x*.2,0,-.45),E.mouseParallaxCurrent.x+=(E.mouseParallaxTarget.x-E.mouseParallaxCurrent.x)*.1,E.mouseParallaxCurrent.y+=(E.mouseParallaxTarget.y-E.mouseParallaxCurrent.y)*.1,E.camera.position.x+=E.mouseParallaxCurrent.x*.7,E.camera.position.y+=E.mouseParallaxCurrent.y*.28}function yC(){if(E.focusedIndex===-1||!E.dom.panel){fu();return}const r=E.cardByIndex.get(E.focusedIndex);if(!r?.mesh?.visible){fu();return}const e=r.mesh;E.tmp.projected.copy(e.position),E.tmp.projected.y+=ct.cardHeight*.22,E.tmp.projected.project(E.camera);const t=window.innerWidth,n=window.innerHeight,i=(E.tmp.projected.x*.5+.5)*t,s=(-E.tmp.projected.y*.5+.5)*n,o=E.dom.panel.getBoundingClientRect(),a=Rg(i+28,ct.dockMargin,t-o.width-ct.dockMargin),l=Rg(s-o.height*.5,ct.dockTopSafe,n-o.height-ct.dockMargin);E.dockPosTarget.set(a,l),E.dockPosCurrent.x+=(E.dockPosTarget.x-E.dockPosCurrent.x)*.2,E.dockPosCurrent.y+=(E.dockPosTarget.y-E.dockPosCurrent.y)*.2,E.dom.panel.style.transform=`translate3d(${E.dockPosCurrent.x.toFixed(2)}px, ${E.dockPosCurrent.y.toFixed(2)}px, 0)`}function SC(r,e){const t=E.renderer.domElement.getBoundingClientRect();E.pointerNdc.set((r-t.left)/t.width*2-1,-((e-t.top)/t.height*2-1))}function MC(r,e){if(!E.renderer||!E.camera||E.cards.length===0)return null;SC(r,e),E.raycaster.setFromCamera(E.pointerNdc,E.camera);const t=E.raycaster.intersectObjects(E.cards.map(s=>s.mesh),!1);if(!t.length)return null;const i=t[0].object.userData?.archiveIndex;return typeof i!="number"?null:i}function Lf(r){r<0||r>=Ti.length||(E.focusedIndex=r,lC(r),aC(),_e.to(E.focusLerp,{value:1,duration:ct.focusTransition,ease:"power2.out",overwrite:!0}))}function gs(){E.focusedIndex!==-1&&(E.focusedIndex=-1,_e.to(E.focusLerp,{value:0,duration:ct.focusTransition*.92,ease:"power2.out",overwrite:!0,onComplete:()=>{E.focusedIndex===-1&&Cd()}}))}function yc(r){if(Ti.length===0)return;if(E.focusedIndex===-1){Lf(0);return}let e=E.focusedIndex+r;e<0&&(e=Ti.length-1),e>=Ti.length&&(e=0),Lf(e)}function TC(r){return!!(r?.closest(".nav-wrap")||r?.closest(".bottom-nav-wrap")||r?.closest(".menu-wrap")||r?.closest(".menu-box")||r?.closest(".archive-nav-btn")||r?.closest(".archive-close-btn")||r?.closest(".archive-focus-panel"))}function wC(){const r=E.eventTarget;r&&(E.handlers.pointerDown=e=>{if(!(e.button!==void 0&&e.button!==0)&&!TC(e.target)){if(E.isDragging=!0,E.activePointerId=e.pointerId??null,E.pointerStart.x=e.clientX,E.pointerStart.y=e.clientY,E.pointerLast.x=e.clientX,E.pointerLast.y=e.clientY,E.clickStartTime=performance.now(),E.dragDistance=0,r.setPointerCapture&&e.pointerId!==void 0)try{r.setPointerCapture(e.pointerId)}catch{}E.eventTarget?.style&&(E.eventTarget.style.cursor="grabbing")}},E.handlers.pointerMove=e=>{const t=E.renderer?.domElement?.getBoundingClientRect();if(t&&t.width&&t.height){const o=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;E.mouseParallaxTarget.set(-o*.05,a*.05)}if(!E.isDragging||E.activePointerId!==null&&e.pointerId!==void 0&&E.activePointerId!==e.pointerId)return;const n=e.clientX-E.pointerLast.x,i=e.clientY-E.pointerLast.y;E.dragDistance+=Math.sqrt(n*n+i*i);const s=-n*rC();E.trackOffset+=s,E.trackVelocity=s,E.focusedIndex!==-1&&E.dragDistance>ct.dragExitThreshold&&gs(),E.pointerLast.x=e.clientX,E.pointerLast.y=e.clientY},E.handlers.pointerUp=e=>{if(!E.isDragging||E.activePointerId!==null&&e.pointerId!==void 0&&E.activePointerId!==e.pointerId)return;if(E.isDragging=!1,r.releasePointerCapture&&e.pointerId!==void 0)try{r.releasePointerCapture(e.pointerId)}catch{}if(E.activePointerId=null,E.eventTarget?.style&&(E.eventTarget.style.cursor="grab"),performance.now()-E.clickStartTime<=ct.clickTimeout&&E.dragDistance<=ct.clickThreshold){const i=MC(e.clientX,e.clientY);i===null?E.focusedIndex!==-1&&gs():E.focusedIndex===i?gs():Lf(i),E.trackVelocity=0}},E.handlers.wheel=e=>{if(!r.contains(e.target))return;e.preventDefault();const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,n=t*ct.wheelSensitivity;E.trackOffset+=n,E.trackVelocity+=n*.35,E.focusedIndex!==-1&&Math.abs(t)>8&&gs()},E.handlers.keyDown=e=>{if(e.key==="Escape"){E.focusedIndex!==-1&&(e.preventDefault(),gs());return}e.key==="ArrowRight"?(e.preventDefault(),yc(1)):e.key==="ArrowLeft"&&(e.preventDefault(),yc(-1))},E.handlers.overlayClick=e=>{!e.target.closest(".archive-focus-panel")&&!e.target.closest(".archive-nav-btn")&&gs()},E.handlers.prevClick=e=>{e.preventDefault(),e.stopPropagation(),yc(-1)},E.handlers.nextClick=e=>{e.preventDefault(),e.stopPropagation(),yc(1)},E.handlers.closeClick=e=>{e.preventDefault(),e.stopPropagation(),gs()},E.handlers.resize=()=>{if(!E.renderer||!E.camera||!E.composer)return;const e=E.renderHost||E.backgroundEl||E.container,t=e?.clientWidth||window.innerWidth,n=e?.clientHeight||window.innerHeight;E.camera.aspect=t/n,E.camera.updateProjectionMatrix(),E.renderer.setSize(t,n),E.composer.setSize(t,n)},r.addEventListener("pointerdown",E.handlers.pointerDown),window.addEventListener("pointermove",E.handlers.pointerMove),window.addEventListener("pointerup",E.handlers.pointerUp),r.addEventListener("wheel",E.handlers.wheel,{passive:!1}),window.addEventListener("keydown",E.handlers.keyDown),window.addEventListener("resize",E.handlers.resize),E.dom.overlay?.addEventListener("click",E.handlers.overlayClick),E.dom.prev?.addEventListener("click",E.handlers.prevClick),E.dom.next?.addEventListener("click",E.handlers.nextClick),E.dom.close?.addEventListener("click",E.handlers.closeClick))}function EC(){const r=E.eventTarget;r&&(E.handlers.pointerDown&&r.removeEventListener("pointerdown",E.handlers.pointerDown),E.handlers.wheel&&r.removeEventListener("wheel",E.handlers.wheel)),window.removeEventListener("pointermove",E.handlers.pointerMove),window.removeEventListener("pointerup",E.handlers.pointerUp),window.removeEventListener("keydown",E.handlers.keyDown),window.removeEventListener("resize",E.handlers.resize),E.dom.overlay?.removeEventListener("click",E.handlers.overlayClick),E.dom.prev?.removeEventListener("click",E.handlers.prevClick),E.dom.next?.removeEventListener("click",E.handlers.nextClick),E.dom.close?.removeEventListener("click",E.handlers.closeClick),E.handlers={}}function Tv(){E.running&&(vC(),xC(),_C(),yC(),E.grainPass?.uniforms?.uTime&&(E.grainPass.uniforms.uTime.value=E.clock.getElapsedTime()),E.composer.render(),E.rafId=requestAnimationFrame(Tv))}async function bC(r){if(E.backgroundEl=document.getElementById("background"),E.container=document.getElementById("gallery")||E.backgroundEl||document.body,!E.container||!Ti.length)return!1;E.renderHost=E.backgroundEl||E.container;const e=E.renderHost.querySelector('canvas[data-archive-canvas="true"]');e&&e.remove();const t=window.innerWidth,n=window.innerHeight;E.renderer=new nv({antialias:!0,alpha:!0,powerPreference:"high-performance"}),E.renderer.outputColorSpace=rn,E.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),E.renderer.toneMapping=Su,E.renderer.toneMappingExposure=1.2,E.renderer.shadowMap.enabled=!0,E.renderer.shadowMap.type=yu,E.renderer.setSize(t,n),E.renderer.setClearColor(0,0),E.renderer.domElement.dataset.archiveCanvas="true",E.renderHost.appendChild(E.renderer.domElement),E.eventTarget=document.body,E.container.style.pointerEvents="auto",E.container.style.touchAction="none",E.container.style.cursor="grab",E.renderer.domElement.style.pointerEvents="none",E.renderer.domElement.style.touchAction="none",E.renderer.domElement.style.position="absolute",E.renderer.domElement.style.top="0",E.renderer.domElement.style.left="0",document.body.style.color="#111111",document.body.style.backgroundColor="transparent",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(s=>{s.style.color="#111111"}),mC();const i=await cC(Ti);if(r!==E.initToken)return i.forEach(s=>s?.dispose?.()),!1;E.sourceTextures=i.filter(Boolean),E.atlasTexture=uC(i),E.cards=[],E.cardByIndex.clear();for(let s=0;s<Ti.length;s+=1){const o=fC(s,E.atlasTexture),a={index:s,item:Ti[s],mesh:o};E.cards.push(a),E.cardByIndex.set(s,a),E.root.add(o)}return dC(),E.camera.aspect=t/n,E.camera.updateProjectionMatrix(),E.composer.setSize(t,n),E.clock=new Md,!0}function wv(){E.trackOffset=0,E.trackVelocity=0,E.isDragging=!1,E.activePointerId=null,E.dragDistance=0,E.focusedIndex=-1,E.focusLerp.value=0,E.mouseParallaxTarget.set(0,0),E.mouseParallaxCurrent.set(0,0),E.pointerStart.x=0,E.pointerStart.y=0,E.pointerLast.x=0,E.pointerLast.y=0,fu()}async function Pg(){if(E.running)return;oC(),wv(),Cd();const r=E.initToken+1;E.initToken=r,console.log("[archive] initArchive started");try{const e=await bC(r);if(console.log("[archive] setupArchiveScene completed. result:",e,"token match:",r===E.initToken),!e||r!==E.initToken){console.warn("[archive] Setup failed or token mismatch"),Lo();return}E.running=!0,requestAnimationFrame(()=>{console.log("[archive] binding events and starting animation loop"),wC(),Tv()})}catch(e){console.error("[archive] FATAL ERROR in initArchive:",e)}}function Lo(){E.initToken+=1,E.running=!1,E.rafId&&(cancelAnimationFrame(E.rafId),E.rafId=null),EC(),Cd(),_e.killTweensOf(E.focusLerp);for(const r of E.cards)r.mesh?.parent&&r.mesh.parent.remove(r.mesh),r.mesh?.geometry?.dispose?.(),r.mesh?.material?.dispose?.();E.cards=[],E.cardByIndex.clear(),E.atlasTexture?.dispose?.(),E.atlasTexture=null;for(const r of E.sourceTextures)r?.dispose?.();E.sourceTextures=[],E.composer&&(E.composer.dispose?.(),E.composer=null),E.grainPass=null,E.pmremGenerator?.dispose?.(),E.pmremGenerator=null,E.envRenderTarget?.dispose?.(),E.envRenderTarget=null,E.renderer&&(E.renderer.dispose(),E.renderer.domElement?.parentNode&&E.renderer.domElement.parentNode.removeChild(E.renderer.domElement)),E.container&&(E.container.style.pointerEvents="",E.container.style.touchAction="",E.container.style.cursor=""),document.body.style.color="",document.body.style.backgroundColor="",document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn").forEach(r=>{r.style.color=""}),E.renderer=null,E.scene=null,E.camera=null,E.clock=null,E.root=null,E.ambientLight=null,E.keyLight=null,E.fillLight=null,E.rimLight=null,E.container=null,E.backgroundEl=null,E.renderHost=null,E.eventTarget=null,E.dom={overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},wv()}_e.registerPlugin(nt,ts);const Oc=new Map,Fc=[],Do=[];function AC(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Fa(r,e={type:"lines, words, chars"}){if(!r)return null;if(Oc.has(r))return Oc.get(r);const t=new ts(r,{type:e.type||"lines, words, chars",reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],h=l[c];u.parentNode.insertBefore(h,u),h.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Oc.set(r,t),Fc.push(t),t}function RC(r,{direction:e="up",duration:t=.8,stagger:n=.03,ease:i="power2.out"}={}){const s=Fa(r);if(!s)return null;const o=e==="down"?100:-100;return _e.fromTo(s.words,{y:o,opacity:0},{y:0,opacity:1,duration:t,stagger:n,ease:i})}async function kc(r){if(!r)return;const e=r.querySelectorAll(".text-reveal-header:not(.has-3d-text)");if(!e.length)return;const t=Array.from(e);t.length&&_e.set(t,{clearProps:"all"});const n=[];for(let i=0;i<e.length;i++){const s=e[i],a=s.classList.contains("text-reveal-reverse")?"down":"up",l=RC(s,{direction:a,duration:.8,stagger:.04});l&&n.push(AC(l))}n.length&&await Promise.all(n)}function CC(){Df();const r=document.querySelectorAll(".text-reveal"),e=document.querySelectorAll(".text-reveal-reverse"),t=document.querySelectorAll(".text-reveal-header:not(.contact-contain .text-reveal-header)"),n=document.querySelectorAll(".body-text-reveal:not(.hero-text-reveal)");for(let i=0;i<r.length;i++){const s=r[i],o=Fa(s);if(!o?.words?.length)continue;const a=_e.fromTo(o.words,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Do.push(a.scrollTrigger)}for(let i=0;i<e.length;i++){const s=e[i],o=Fa(s);if(!o?.words?.length)continue;const a=_e.fromTo(o.words,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Do.push(a.scrollTrigger)}for(let i=0;i<t.length;i++){const s=t[i],o=Fa(s);if(!o?.words?.length)continue;const l=s.classList.contains("text-reveal-reverse")?100:-100,c=_e.fromTo(o.words,{y:l,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});c.scrollTrigger&&Do.push(c.scrollTrigger)}for(let i=0;i<n.length;i++){const s=n[i],o=Fa(s,{type:"lines"});if(!o?.lines?.length)continue;_e.set(o.lines,{yPercent:100,opacity:0});const a=_e.to(o.lines,{yPercent:0,opacity:1,duration:1,stagger:.1,ease:"power4.out",scrollTrigger:{trigger:s,start:"top 90%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Do.push(a.scrollTrigger)}}function Df(){for(;Do.length;){const r=Do.pop();r&&r.kill()}}function Lg(){for(let r=Fc.length-1;r>=0;r--){const e=Fc[r];e&&typeof e.revert=="function"&&e.revert()}Fc.length=0,Oc.clear()}_e.registerPlugin(nt);function PC(){}function LC(){window.removeEventListener("resize",PC)}function Bc(){LC()}_e.registerPlugin(ts);const Sc={duration:.5,ease:"power2.inOut",stagger:.02},Dg="50% 50% -10px",Ig=new WeakMap;function DC(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||Ig.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),_e.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=Ng(i,!1),o=Ng(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new ts(s,{type:"chars"}),l=new ts(o,{type:"chars"});_e.set(a.chars,{rotationX:0,opacity:1,transformOrigin:Dg,backfaceVisibility:"hidden"}),_e.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:Dg,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=Ug(a.chars,l.chars,!0)},h=()=>{c?.kill(),c=Ug(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",h),Ig.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:h})})}function Ng(r,e){const t=document.createElement("span");return t.textContent=r,_e.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function Ug(r,e,t){const n=_e.timeline();return t?n.to(r,{rotationX:90,opacity:0,...Sc},0).to(e,{rotationX:0,opacity:1,...Sc},0):n.to(r,{rotationX:0,opacity:1,...Sc},0).to(e,{rotationX:-90,opacity:0,...Sc},0),n}const du=new WeakMap,IC=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function NC(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function UC(){if(IC())return;document.querySelectorAll(".btn").forEach(e=>{if(du.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=NC();t.config=n,OC(t);let i=null;const s=()=>{i&&i.kill(),i=Og(t,!0)},o=()=>{i&&i.kill(),i=Og(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),du.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function OC(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,_e.set(e,{x:0,borderRadius:`${o}px`}),_e.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),_e.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function Og(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,h=_e.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?h.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):h.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),h}function FC(){document.querySelectorAll(".btn").forEach(e=>{const t=du.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&_e.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&_e.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&_e.set(t.elements.circleIcon,{clearProps:"all"}),du.delete(e))})}function Fh(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function kC(){return null}function BC(r,e){const t=_e.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&_e.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function zC(){const r=document.querySelector(".link-main");r&&_e.set(r,{autoAlpha:0})}function HC(){const r=document.querySelector(".link-main");r&&_e.set(r,{autoAlpha:1,y:20,opacity:0})}function VC(){const r=document.querySelector(".link-main");return r?_e.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let ka=null;const GC=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"});function Fg(){ka||(ka=document.getElementById("time")),ka&&(ka.textContent=`${GC.format(new Date)} IST`)}function WC(){ka=null,Fg(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(Fg,1e3)}function kg(r){return r==="home"||r==="contact"||r==="work"}function kh(r,{skipWebglSetup:e=!1}={}){WC(),Jy(),CC(),DC(),FC(),UC();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace,n=document.querySelector(".link-main");if(n&&(_e.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&_e.set(n,{clearProps:"transform,opacity"})),e){t==="archive"?(Po(),Bc(),Uc(),Pg()):Lo();return}t==="work"?(Lo(),Ag(),rl("work",!0),cu("work"),Mv()):t==="archive"?(Po(),Bc(),Uc(),Pg()):t==="home"||t==="contact"?(Lo(),Po(),Ag(),rl(t,!0),cu("home"),kc(document.querySelector('[data-barba="container"]'))):(Lo(),Po(),Bc(),Uc())}Qv.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;bg(),e==="work"||t==="work"?e==="work"&&Po():e==="home"?await Fh(kC()):e==="contact"&&await Fh(BC(n,t)),Df(),Lg()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"?(cu(t==="work"?"work":"home"),rl(t,!0),t==="work"&&Mv()):(t==="home"?(zC(),rl("home")):t==="contact"&&(HC(),rl("contact")),kc(n))},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(kh(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&_e.set(n,{autoAlpha:0})}else t==="contact"&&await Fh(VC())}},{name:"default",async leave(r){const e=r?.current?.namespace;e==="work"&&Po(),e==="archive"&&Lo(),bg(),kg(e)&&(Bc(),Uc()),Df(),Lg()},async enter(){},async once(r){const e=r?.next?.namespace;kg(e)||await Promise.all([xi.init(),xi.load([])]),kh(e);const t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&_e.set(n,{autoAlpha:0}),kc(t)}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(_e.set(n,{autoAlpha:1,y:20,opacity:0}),await _e.to(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2})),kc(t)}}},async after(r){const e=r?.next?.namespace;if(e&&kh(e),e==="contact"){const t=document.querySelector(".link-main");t&&(_e.set(t,{autoAlpha:1,y:20,opacity:0}),await _e.to(t,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}}}]});
