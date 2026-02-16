(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function yv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function bf(r,e,t){return e&&yv(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Vi(){return Vi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Vi.apply(this,arguments)}function hu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,sl(r,e)}function Ih(r){return Ih=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ih(r)}function sl(r,e){return sl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},sl(r,e)}function Sv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Dh(r,e,t){return Dh=Sv()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&sl(a,s.prototype),a},Dh.apply(null,arguments)}function Nh(r){var e=typeof Map=="function"?new Map:void 0;return Nh=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Dh(t,arguments,Ih(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),sl(n,t)},Nh(r)}function Mv(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Ir,Tv=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Ir||(Ir={}));var Ad=Ir.off,ws=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Ad},r.setLevel=function(t){return Ad=Ir[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Ir.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Ir.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Ir.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Ir.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Ks(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Rd(r){return r&&r.sensitive?"":"i"}var qi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},Es=new((function(){function r(){this.o=qi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),wv=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Vi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Vi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=qi.prefix+"-"+qi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},bf(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),Ng=new wv,Bc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=Es.toElement(n.html);i.namespace=Es.getNamespace(s),i.container=Es.getContainer(s),i.url=n.url,i.html=n.html,Ng.update({ns:i.namespace});var o=Es.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Ug=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Rd(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,f=c.start,d=f===void 0||f,_=c.end,g=_===void 0||_,p=c.encode,m=p===void 0?function(Y){return Y}:p,M=c.delimiter,v=M===void 0?"/#?":M,S=c.endsWith,R="[".concat(Ks(S===void 0?"":S),"]|$"),A="[".concat(Ks(v),"]"),E=d?"^":"",I=0,y=a;I<y.length;I++){var x=y[I];if(typeof x=="string")E+=Ks(m(x));else{var O=Ks(m(x.prefix)),N=Ks(m(x.suffix));if(x.pattern)if(l&&l.push(x),O||N)if(x.modifier==="+"||x.modifier==="*"){var D=x.modifier==="*"?"?":"";E+="(?:".concat(O,"((?:").concat(x.pattern,")(?:").concat(N).concat(O,"(?:").concat(x.pattern,"))*)").concat(N,")").concat(D)}else E+="(?:".concat(O,"(").concat(x.pattern,")").concat(N,")").concat(x.modifier);else E+=x.modifier==="+"||x.modifier==="*"?"((?:".concat(x.pattern,")").concat(x.modifier,")"):"(".concat(x.pattern,")").concat(x.modifier);else E+="(?:".concat(O).concat(N,")").concat(x.modifier)}}if(g)h||(E+="".concat(A,"?")),E+=c.endsWith?"(?=".concat(R,")"):"$";else{var F=a[a.length-1],V=typeof F=="string"?A.indexOf(F[F.length-1])>-1:F===void 0;h||(E+="(?:".concat(A,"(?=").concat(R,"))?")),V||(E+="(?=".concat(A,"|").concat(R,")"))}return new RegExp(E,Rd(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(N){for(var D=[],F=0;F<N.length;){var V=N[F];if(V!=="*"&&V!=="+"&&V!=="?")if(V!=="\\")if(V!=="{")if(V!=="}")if(V!==":")if(V!=="(")D.push({type:"CHAR",index:F,value:N[F++]});else{var Y=1,$="";if(N[j=F+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(j));for(;j<N.length;)if(N[j]!=="\\"){if(N[j]===")"){if(--Y==0){j++;break}}else if(N[j]==="("&&(Y++,N[j+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(j));$+=N[j++]}else $+=N[j++]+N[j++];if(Y)throw new TypeError("Unbalanced pattern at ".concat(F));if(!$)throw new TypeError("Missing pattern at ".concat(F));D.push({type:"PATTERN",index:F,value:$}),F=j}else{for(var z="",j=F+1;j<N.length;){var L=N.charCodeAt(j);if(!(L>=48&&L<=57||L>=65&&L<=90||L>=97&&L<=122||L===95))break;z+=N[j++]}if(!z)throw new TypeError("Missing parameter name at ".concat(F));D.push({type:"NAME",index:F,value:z}),F=j}else D.push({type:"CLOSE",index:F,value:N[F++]});else D.push({type:"OPEN",index:F,value:N[F++]});else D.push({type:"ESCAPED_CHAR",index:F++,value:N[F++]});else D.push({type:"MODIFIER",index:F,value:N[F++]})}return D.push({type:"END",index:F,value:""}),D})(a),u=l.prefixes,h=u===void 0?"./":u,f="[^".concat(Ks(l.delimiter||"/#?"),"]+?"),d=[],_=0,g=0,p="",m=function(N){if(g<c.length&&c[g].type===N)return c[g++].value},M=function(N){var D=m(N);if(D!==void 0)return D;var F=c[g],V=F.index;throw new TypeError("Unexpected ".concat(F.type," at ").concat(V,", expected ").concat(N))},v=function(){for(var N,D="";N=m("CHAR")||m("ESCAPED_CHAR");)D+=N;return D};g<c.length;){var S=m("CHAR"),R=m("NAME"),A=m("PATTERN");if(R||A)h.indexOf(I=S||"")===-1&&(p+=I,I=""),p&&(d.push(p),p=""),d.push({name:R||_++,prefix:I,suffix:"",pattern:A||f,modifier:m("MODIFIER")||""});else{var E=S||m("ESCAPED_CHAR");if(E)p+=E;else if(p&&(d.push(p),p=""),m("OPEN")){var I=v(),y=m("NAME")||"",x=m("PATTERN")||"",O=v();M("CLOSE"),d.push({name:y||(x?_++:""),pattern:y&&!x?f:x,prefix:I,suffix:O,modifier:m("MODIFIER")||""})}else M("END")}}return d})(i,o),s,o)})(e,t,n)},Ev={__proto__:null,update:Bc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:Ug},Og=function(){return window.location.origin},ol=function(r){return r===void 0&&(r=window.location.href),Dr(r).port},Dr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(Og(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Fg(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},Fg=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Uh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},bv={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:Og,getPort:ol,getPath:function(r){return r===void 0&&(r=window.location.href),Dr(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Dr(r).query):Dr(r).query},getHash:function(r){return Dr(r).hash},parse:Dr,parseQuery:Fg,clean:Uh};function Av(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Vi({href:l},Dr(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function Rv(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function To(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(Rv(a)?a.then(s,o):s(a))});return i}}var Lr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new ws("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}hu(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return To(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Tv)),kg=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return Ug(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Dr(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),Cv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}hu(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Vi({},this.T.get(n),i);return this.T.set(n,s),s},e})(kg),Pv=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),Lv=function(){return!window.history.pushState},Iv=function(r){return!r.el||!r.href},Dv=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Nv=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Uv=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Ov=function(r){var e=r.el;return e.port!==void 0&&ol()!==ol(e.href)},Fv=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},kv=function(r){return r.el.hasAttribute(qi.prefix+"-"+qi.prevent)},Bv=function(r){return!!r.el.closest("["+qi.prefix+"-"+qi.prevent+'="all"]')},zv=function(r){var e=r.href;return Uh(e)===Uh()&&ol(e)===ol()},Hv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}hu(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Lv),this.add("exists",Iv),this.add("newTab",Dv),this.add("blank",Nv),this.add("corsDomain",Uv),this.add("corsPort",Ov),this.add("download",Fv),this.add("preventSelf",kv),this.add("preventAll",Bv),this.add("sameUrl",zv,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(kg),bu=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(Mv(i),e),i.name="BarbaError",i}return hu(e,r),e})(Nh(Error)),Vv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new ws("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(f){return f.name&&f.name==="self"}:function(f){return!f.name||f.name!=="self"});var o=new Map,a=s.find(function(f){var d=!0,_={};return n.self&&f.name==="self"?(o.set(f,_),!0):(i.j.reverse().forEach(function(g){d&&(d=i.M(f,g,t,_),f.from&&f.to&&(d=i.M(f,g,t,_,"from")&&i.M(f,g,t,_,"to")),f.from&&!f.to&&(d=i.M(f,g,t,_,"from")),!f.from&&f.to&&(d=i.M(f,g,t,_,"to")))}),o.set(f,_),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,f=u,d=u,_=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var p=Array.isArray(_[h])?_[h]:[_[h]];g[h]&&p.indexOf(g[h])!==-1&&(l=!0),p.indexOf(g[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[f])?_[f]:[_[f]];g[f]?(g[f].name&&m.indexOf(g[f].name)!==-1&&(l=!0),m.indexOf(g[f].name)===-1&&(a=!1)):a=!1;break;case"function":_[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function fa(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var Gv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new ws("@barba/core"),this.store=void 0,this.C=!1,this.store=new Vv(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=fa(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(f){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=fa(function(){function f(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(p){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var g=(function(){if(u)return fa(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(v){if(l.H(v))throw new bu(v,"Transition error [sync]")});var p=function(v){return fa(function(){var S=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(S&&S.then)return S.then(function(){})},function(S){if(l.H(S))throw new bu(S,"Transition error [before/after/enter]")})},m=!1,M=fa(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Bc(s,n)]).then(function(v){return v[0]})).then(function(v){return m=v,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(v){if(l.H(v))throw new bu(v,"Transition error [before/after/leave]")});return M&&M.then?M.then(p):p()})();return g&&g.then?g.then(_):_()})}var d=(function(){if(u)return Promise.resolve(Bc(s,n)).then(function(){})})();return d&&d.then?d.then(f):f()},function(f){throw l.C=!1,f.name&&f.name==="BarbaError"?(l.logger.debug(f.label),l.logger.error(f.error),f):(l.logger.debug("Transition error [page]"),l.logger.error(f),f)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(f){return Promise.reject(f)}},e.once=function(t,n){try{return Promise.resolve(Lr.do("once",t,n)).then(function(){return n.once?To(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Lr.do("leave",t,n)).then(function(){return n.leave?To(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Lr.do("enter",t,n)).then(function(){return n.enter?To(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return Es.addContainer(t.next.container,n),Lr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return Es.removeContainer(t.current.container),Lr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Lr.do(t,n,i)).then(function(){return i[t]?To(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},bf(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),Wv=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Lr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?To(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Xv={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},qv=new((function(){function r(){this.version="2.10.3",this.schemaPage=Xv,this.Logger=ws,this.logger=new ws("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Lr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=Es,this.helpers=Ev,this.history=Ng,this.request=Av,this.url=bv,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?qi:l,u=n.requestError,h=n.timeout,f=h===void 0?2e3:h,d=n.cacheIgnore,_=d!==void 0&&d,g=n.cacheFirstPage,p=g!==void 0&&g,m=n.prefetchIgnore,M=m!==void 0&&m,v=n.preventRunning,S=v!==void 0&&v,R=n.prevent,A=R===void 0?null:R,E=n.debug,I=n.logLevel;if(ws.setLevel((E!==void 0&&E)===!0?"debug":I===void 0?"off":I),this.logger.info(this.version),Object.keys(c).forEach(function(O){qi[O]&&(qi[O]=c[O])}),this.B=u,this.timeout=f,this.cacheIgnore=_,this.cacheFirstPage=p,this.prefetchIgnore=M,this.preventRunning=S,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var y=this.data.current;if(!y.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Cv(_),this.headers=new Pv,this.prevent=new Hv(M),this.transitions=new Gv(s),this.views=new Wv(a),A!==null){if(typeof A!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",A)}this.history.init(y.url.href,y.namespace),p&&this.cache.set(y.url.href,Promise.resolve({html:y.html,url:y.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(O){return O.init()});var x=this.data;x.trigger="barba",x.next=x.current,x.current=Vi({},this.schemaPage),this.hooks.do("ready",x),this.once(x),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var f=(function(d,_){try{var g=(p=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:p,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var p;return g&&g.then?g.then(void 0,_):g})(0,function(){ws.getLevel()===0&&l.force(h.next.url.href)});if(f&&f.then)return f.then(function(){})})},l=this;if(l.data.next.url=Vi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Bc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Vi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Vi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},bf(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vo={duration:.5,overwrite:!1,delay:0},Af,gn,Ut,_i=1e8,Tt=1/_i,Oh=Math.PI*2,Yv=Oh/4,jv=0,zg=Math.sqrt,Kv=Math.cos,$v=Math.sin,fn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},Rf=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Cf=function(){return typeof window<"u"},Dl=function(e){return Ht(e)||fn(e)},Hg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,Zv=/random\([^)]+\)/g,Jv=/,\s*/g,Cd=/(?:-?\.?\d|\.)+/gi,Vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Au=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gg=/[+-]=-?[.\d]+/,Qv=/[^,'"\[\]\s]+/gi,ex=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Ui,Fh,Pf,ai={},zc={},Wg,Xg=function(e){return(zc=Go(e,ai))&&Xn},Lf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},al=function(e,t){return!t&&console.warn(e)},qg=function(e,t){return e&&(ai[e]=t)&&zc&&(zc[e]=t)||ai},ll=function(){return 0},tx={suppressEvents:!0,isStart:!0,kill:!1},Sc={suppressEvents:!0,kill:!1},nx={suppressEvents:!0},If={},Wr=[],kh={},Yg,Jn={},Ru={},Pd=30,Mc=[],Df="",Nf=function(e){var t=e[0],n,i;if(ji(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Mc.length;i--&&!Mc[i].targetTest(t););n=Mc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new __(e[i],n)))||e.splice(i,1);return e},Ns=function(e){return e._gsap||Nf(vi(e))[0]._gsap},jg=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Rf(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Lo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ix=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Hc=function(){var e=Wr.length,t=Wr.slice(0),n,i;for(kh={},Wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Uf=function(e){return!!(e._initted||e._startAt||e.add)},Kg=function(e,t,n,i){Wr.length&&!gn&&Hc(),e.render(t,n,!!(gn&&t<0&&Uf(e))),Wr.length&&!gn&&Hc()},$g=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Qv).length<2?t:fn(e)?e.trim():e},Zg=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Go=function(e,t){for(var n in t)e[n]=t[n];return e},Ld=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Vc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ka=function(e){var t=e.parent||kt,n=e.keyframes?rx(En(e.keyframes)):li;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},fu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ox=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Sc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ax=function r(e){return!e||e._ts&&r(e.parent)},Id=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},du=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},pu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),du(e),n._dirty||Us(n,e)),e},Qg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gc(e.rawTime(),t),(!t._dur||Al(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},zi=function(e,t,n,i){return t.parent&&Zr(t),t._start=Ft((xr(n)?n:n||e!==kt?fi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jg(e,t,"_first","_last",e._sort?"_start":0),zh(t)||(e._recent=t),i||Qg(e,t),e._ts<0&&pu(e,e._tTime),e},e_=function(e,t){return(ai.ScrollTrigger||Lf("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},t_=function(e,t,n,i,s){if(Ff(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yg!==ti.frame)return Wr.push(e),e._lazy=[s,i],1},lx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},zh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&lx(e)&&!(!e._initted&&zh(e))||(e._ts<0||e._dp._ts<0)&&!zh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Al(0,e._tDur,t),u=Wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&t_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Bh(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zr(e,1),!n&&!gn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ux=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xo=function(e,t,n,i){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!i&&pu(e,e._tTime=e._tDur*a),e.parent&&du(e),n||Us(e.parent,e),e},Dd=function(e){return e instanceof Un?Us(e):Xo(e,e._dur)},hx={_start:0,endTime:ll,totalDuration:ll},fi=function r(e,t,n){var i=e.labels,s=e._recent||hx,o=e.duration()>=_i?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ba=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},ns=function(e,t){return e||e===0?t(e):t},Al=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!fn(e)||!(t=ex.exec(e))?"":t[1]},fx=function(e,t,n){return ns(n,function(i){return Al(e,t,i)})},Hh=[].slice,n_=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ui},dx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||n_(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):fn(e)&&!n&&(Fh||!qo())?Hh.call((t||Pf).querySelectorAll(e),0):En(e)?dx(e,n):n_(e)?Hh.call(e,0):e?[e]:[]},Vh=function(e){return e=vi(e)[0]||al("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?al("Invalid scope")||Pf.createElement("div"):e)}},i_=function(e){return e.sort(function(){return .5-Math.random()})},r_=function(e){if(Ht(e))return e;var t=ji(e)?e:{each:e},n=Os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,v,S,R,A,E,I,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,_i])[1],!y){for(E=-_i;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,M=y===_i?0:l?g*h/y-.5:i/y|0,E=0,I=_i,A=0;A<g;A++)v=A%y-m,S=M-(A/y|0),p[A]=R=c?Math.abs(c==="y"?S:v):zg(v*v+S*S),R>E&&(E=R),R<I&&(I=R);i==="random"&&i_(p),p.max=E-I,p.min=I,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Tn(t.amount||t.each)||0,n=n&&g<0?p_(n):n}return g=(p[f]-p.min)/p.max||0,Ft(p.b+(n?n(g):g)*p.v)+p.u}},Gh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:Tn(n))}},s_=function(e,t){var n=En(e),i,s;return!n&&ji(e)&&(i=n=e.radius||_i,e.values?(e=vi(e.values),(s=!xr(e[0]))&&(i*=i)):e=Gh(e.increment)),ns(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=_i,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||xr(o)?u:u+Tn(o)}:Gh(e))},o_=function(e,t,n,i){return ns(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},px=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},mx=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},gx=function(e,t,n){return l_(e,t,0,1,n)},a_=function(e,t,n){return ns(n,function(i){return e[~~t(i)]})},_x=function r(e,t,n){var i=t-e;return En(e)?a_(e,r(0,e.length),t):ns(n,function(s){return(i+(s-e)%i)%i+e})},vx=function r(e,t,n){var i=t-e,s=i*2;return En(e)?a_(e,r(0,e.length-1),t):ns(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},cl=function(e){return e.replace(Zv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Jv);return o_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},l_=function(e,t,n,i,s){var o=t-e,a=i-n;return ns(s,function(l){return n+((l-e)/o*a||0)})},xx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=fn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Go(En(e)?[]:{},e));if(!u){for(l in t)Of.call(a,e,l,"get",t[l]);s=function(_){return zf(_,a)||(o?e.p:e)}}}return ns(n,s)},Nd=function(e,t,n){var i=e.labels,s=_i,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var i=e.vars,s=i[t],o=Ut,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Wr.length&&Hc(),a&&(Ut=a),u=l?s.apply(c,l):s.call(c),Ut=o,u},ba=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ii(e,"onInterrupt"),e},Eo,c_=[],u_=function(e){if(e)if(e=!e.name&&e.default||e,Cf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ll,render:zf,add:Of,kill:Ux,modifier:Nx,rawVars:0},o={targetTest:0,get:0,getSetter:Bf,aliases:{},register:0};if(qo(),e!==i){if(Jn[t])return;li(i,li(Vc(e,s),o)),Go(i.prototype,Go(s,Vc(e,o))),Jn[i.prop=t]=i,e.targetTest&&(Mc.push(i),If[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qg(t,i),e.register&&e.register(Xn,i,Vn)}else c_.push(e)},Mt=255,Aa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Cu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},h_=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Aa.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Aa[e])i=Aa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Cd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Cu(l+1/3,s,o),i[1]=Cu(l,s,o),i[2]=Cu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Vg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cd)||Aa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},f_=function(e){var t=[],n=[],i=-1;return e.split(Xr).forEach(function(s){var o=s.match(wo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ud=function(e,t,n){var i="",s=(e+i).match(Xr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=h_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=f_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Xr,"1").split(wo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Xr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Aa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),yx=/hsl[a]?\(/,d_=function(e){var t=e.join(" "),n;if(Xr.lastIndex=0,Xr.test(t))return n=yx.test(t),e[1]=Ud(e[1],n),e[0]=Ud(e[0],n,f_(e[1])),!0},ul,ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,M=p===!0,v,S,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,v=R-o,(v>0||M)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Wg&&(!Fh&&Cf()&&(Ui=Fh=window,Pf=Ui.document||{},ai.gsap=Xn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Xn.version),Xg(zc||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),c_.forEach(u_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ul=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ul=0,c=ll},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var v=m?function(S,R,A,E){p(S,R,A,E),h.remove(v)}:p;return h.remove(p),a[M?"unshift":"push"](v),qo(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),qo=function(){return!ul&&ti.wake()},ct={},Sx=/^[\d.\-M][\d.\-,\s]/,Mx=/["']/g,Tx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Mx,"").trim():+c,i=l.substr(a+1).trim();return t},wx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ex=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Tx(t[1])]:wx(e).split(",").map($g)):ct._CE&&Sx.test(e)?ct._CE("",e):n},p_=function(e){return function(t){return 1-e(1-t)}},m_=function r(e,t){for(var n=e._first,i;n;)n instanceof Un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Os=function(e,t){return e&&(Ht(e)?e:ct[e]||Ex(e))||t},qs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){ct[a]=ai[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},g_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Oh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*$v((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:g_(a);return s=Oh/s,l.config=function(c,u){return r(e,c,u)},l},Lu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:g_(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;qs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;qs("Elastic",Pu("in"),Pu("out"),Pu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};qs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});qs("Circ",function(r){return-(zg(1-r*r)-1)});qs("Sine",function(r){return r===1?1:-Kv(r*Yv)+1});qs("Back",Lu("in"),Lu("out"),Lu());ct.SteppedEase=ct.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*Al(0,o,a)|0)+s)*n}}};Vo.ease=ct["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Df+=r+","+r+"Params,"});var __=function(e,t){this.id=jv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jg,this.set=t?t.getSetter:Bf},hl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),ul||ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pu(this,n),!s._dp||s.parent||Qg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Id(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Id(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Al(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),du(this),ox(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nx);var i=gn;return gn=n,Uf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fi(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ht(n)?n:Zg,l=function(){var u=i.then;i.then=null,s&&s(),Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ba(this)},r})();li(hl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Un=(function(r){Bg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),kt&&zi(n.parent||kt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&e_(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ba(0,arguments,this),this},t.from=function(i,s,o){return Ba(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ba(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ka(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(i,s,fi(this,o),1),this},t.call=function(i,s,o){return zi(this,Zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(i,o,fi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ka(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ka(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,M,v,S,R,A,E;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ft(u%p),u===l?(g=this._repeat,f=c):(R=Ft(u/p),g=~~R,g&&g===R&&(f=c,g--),f>c&&(f=c)),R=Wo(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(f=c-f,E=1),g!==R&&!this._lock){var I=A&&R&1,y=I===(A&&g&1);if(g<R&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ft(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;m_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ux(this,Ft(a),Ft(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||gn&&Uf(d)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=x?-Tt:Tt);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=S,du(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(xr(s)||(s=fi(this,s,i)),!(i instanceof hl)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Ht(i))i=Zt.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&fu(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=fi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Zt.delayedCall(0,s||ll,o);return a.data="isPause",this._hasPause=1,zi(this,a,fi(this,i))},t.removePause=function(i){var s=this._first;for(i=fi(this,i);s;)s._start===i&&s.data==="isPause"&&Zr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=vi(i),l=this._first,c=xr(s),u;l;)l instanceof Zt?ix(l._targets,a)&&(c?(!Fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=fi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Zt.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Xo(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:fi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Nd(this,fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Nd(this,fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ft(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=_i,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ft(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&(Kg(kt,Gc(i,kt)),Yg=ti.frame),ti.frame>=Pd){Pd+=oi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&oi.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(hl);li(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var bx=function(e,t,n,i,s,o,a){var l=new Vn(this._pt,e,t,0,1,T_,null,s),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=cl(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Au)||[];h=Au.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Lo(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Au.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gg.test(i)||m)&&(l.e=0),this._pt=l,l},Of=function(e,t,n,i,s,o,a,l,c,u){Ht(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ht(h)?c?Lx:S_:kf,_;if(fn(i)&&(~i.indexOf("random(")&&(i=cl(i)),i.charAt(1)==="="&&(_=Lo(f,i)+(Tn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Wh)return!isNaN(f*i)&&i!==""?(_=new Vn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Dx:M_,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Lf(t,i),bx.call(this,e,t,f,i,d,l||oi.stringFilter,c))},Ax=function(e,t,n,i,s){if(Ht(e)&&(e=za(e,s,t,n,i)),!ji(e)||e.style&&e.nodeType||En(e)||Hg(e))return fn(e)?za(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=za(e[a],s,t,n,i);return o},v_=function(e,t,n,i,s,o){var a,l,c,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:Ax(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Vn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Eo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fr,Wh,Ff=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Af,S=e.timeline,R,A,E,I,y,x,O,N,D,F,V,Y,$;if(S&&(!f||!s)&&(s="none"),e._ease=Os(s,Vo.ease),e._yEase=h?p_(Os(h===!0?s:h,Vo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(N=p[0]?Ns(p[0]).harness:0,Y=N&&i[N.prop],R=Vc(i,If),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Sc:tx),g._lazy=0),o){if(Zr(e._startAt=Zt.set(p,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Sc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),E=li({overwrite:!1,data:"isFromStart",lazy:a&&!g&&zn(l),immediateRender:a,stagger:0,parent:m},R),Y&&(E[N.prop]=Y),Zr(e._startAt=Zt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Sc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&zn(l)||l&&!_,A=0;A<p.length;A++){if(y=p[A],O=y._gsap||Nf(p)[A]._gsap,e._ptLookup[A]=F={},kh[O.id]&&Wr.length&&Hc(),V=M===p?A:M.indexOf(y),N&&(D=new N).init(y,Y||R,e,V,M)!==!1&&(e._pt=I=new Vn(e._pt,y,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(z){F[z]=I}),D.priority&&(x=1)),!N||Y)for(E in R)Jn[E]&&(D=v_(E,R,e,V,y,M))?D.priority&&(x=1):F[E]=I=Of.call(e,y,E,"get",R[E],V,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),v&&e._pt&&(Fr=e,kt.killTweensOf(y,F,e.globalTime(t)),$=!e.parent,Fr=0),e._pt&&l&&(kh[O.id]=1)}x&&w_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&S.render(_i,!0,!0)},Rx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Wh=1,e.vars[t]="+=0",Ff(e,a),Wh=0,l?al(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+Tn(h.e)),h.b&&(h.b=u.s+Tn(h.b))},Cx=function(e,t){var n=e[0]?Ns(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Go({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Px=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},za=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?cl(e):e},x_=Df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",y_={};Hn(x_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return y_[r]=1});var Zt=(function(r){Bg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ka(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||kt,v=(En(n)||Hg(n)?xr(n[0]):"length"in i)?[n]:vi(n),S,R,A,E,I,y,x,O;if(a._targets=v.length?Nf(v):al("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Dl(c)||Dl(u)){if(i=a.vars,S=a.timeline=new Un({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=ar(a),S._start=0,f||Dl(c)||Dl(u)){if(E=v.length,x=f&&r_(f),ji(f))for(I in f)~x_.indexOf(I)&&(O||(O={}),O[I]=f[I]);for(R=0;R<E;R++)A=Vc(i,y_),A.stagger=0,m&&(A.yoyoEase=m),O&&Go(A,O),y=v[R],A.duration=+za(c,ar(a),R,y,v),A.delay=(+za(u,ar(a),R,y,v)||0)-a._delay,!f&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(y,A,x?x(R,y,v):0),S._ease=ct.none;S.duration()?c=u=0:a.timeline=0}else if(_){ka(li(S.vars.defaults,{ease:"none"})),S._ease=Os(_.ease||i.ease||"none");var N=0,D,F,V;if(En(_))_.forEach(function(Y){return S.to(v,Y,">")}),S.duration();else{A={};for(I in _)I==="ease"||I==="easeEach"||Px(I,_[I],A,_.easeEach);for(I in A)for(D=A[I].sort(function(Y,$){return Y.t-$.t}),N=0,R=0;R<D.length;R++)F=D[R],V={ease:F.e,duration:(F.t-(R?D[R-1].t:0))/100*c},V[I]=F.v,S.to(v,V,N),N+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Af&&(Fr=ar(a),kt.killTweensOf(v),Fr=0),zi(M,ar(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ft(M._time)&&zn(h)&&ax(ar(a))&&M.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),p&&e_(ar(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,p,m,M,v,S;if(!c)cx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ft(h%g),h===l?(_=this._repeat,f=c):(p=Ft(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=Wo(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&m_(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(t_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!p&&(ii(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Bh(this,i,s,o),ii(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Bh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ul||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ff(this,c),u=this._ease(c/this._dur),Rx(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(pu(this,0),this.parent||Jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fr&&Fr.vars.overwrite!==!0)._first||ba(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&sx(a,l))return s==="all"&&(this._pt=0),ba(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},Hn(s,function(M){return g[M]=1}),s=g),s=Cx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&fu(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ba(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ba(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ba(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e})(hl);li(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var e=new Un,t=Hh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kf=function(e,t,n){return e[t]=n},S_=function(e,t,n){return e[t](n)},Lx=function(e,t,n,i){return e[t](i.fp,n)},Ix=function(e,t,n){return e.setAttribute(t,n)},Bf=function(e,t){return Ht(e[t])?S_:Rf(e[t])&&e.setAttribute?Ix:kf},M_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Dx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},T_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Nx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Ux=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ox=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},w_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Vn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||M_,this.d=l||this,this.set=c||kf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ox,this.m=n,this.mt=s,this.tween=i},r})();Hn(Df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return If[r]=1});ai.TweenMax=ai.TweenLite=Zt;ai.TimelineLite=ai.TimelineMax=Un;kt=new Un({sortChildren:!1,defaults:Vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=d_;var Fs=[],Tc={},Fx=[],Od=0,kx=0,Iu=function(e){return(Tc[e]||Fx).map(function(t){return t()})},Xh=function(){var e=Date.now(),t=[];e-Od>2&&(Iu("matchMediaInit"),Fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ui.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Iu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Od=e,Iu("matchMedia"))},E_=(function(){function r(t,n){this.selector=n&&Vh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var o=this,a=function(){var c=Ut,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Vh(s)),Ut=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),Ut=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fs.length;o--;)Fs[o].id===this.id&&Fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Bx=(function(){function r(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ji(n)||(n={matches:n});var o=new E_(0,s||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(Fs.indexOf(o)<0&&Fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xh):l.addEventListener("change",Xh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Wc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return u_(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=vi(e)[0]);var s=Ns(e||{}).get,o=n?Zg:$g;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=Ns(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Eo._pt=0,h.init(e,n?u+n:u,Eo,0,[e]),h.render(1,h),Eo._pt&&zf(1,Eo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,Vo.ease)),Ld(Vo,e||{})},config:function(e){return Ld(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!ai[a]&&al(t+" effect requires "+a+" plugin.")}),Ru[t]=function(a,l,c){return n(vi(a),li(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(Ru[t](a,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):ct},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(kt,n,0),n},context:function(e,t){return e?new E_(e,t):Ut},matchMedia:function(e){return new Bx(e)},matchMediaRefresh:function(){return Fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xh()},addEventListener:function(e,t){var n=Tc[e]||(Tc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:_x,wrapYoyo:vx,distribute:r_,random:o_,snap:s_,normalize:gx,getUnit:Tn,clamp:fx,splitColor:h_,toArray:vi,selector:Vh,mapRange:l_,pipe:px,unitize:mx,interpolate:xx,shuffle:i_},install:Xg,effects:Ru,ticker:ti,updateRoot:Un.updateRoot,plugins:Jn,globalTimeline:kt,core:{PropTween:Vn,globals:qg,Tween:Zt,Timeline:Un,Animation:hl,getCache:Ns,_removeLinkedListItem:fu,reverting:function(){return gn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Af=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wc[r]=Zt[r]});ti.add(Un.updateRoot);Eo=Wc.to({},{duration:0});var zx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Hx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=zx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Hx(a,s)}}}},Xn=Wc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",Gh),Du("modifiers"),Du("snap",s_))||Wc;Zt.version=Un.version=Xn.version="3.14.2";Wg=1;Cf()&&qo();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;var Fd,kr,Io,Hf,bs,kd,Vf,Vx=function(){return typeof window<"u"},yr={},gs=180/Math.PI,Do=Math.PI/180,$s=Math.atan2,Bd=1e8,Gf=/([A-Z])/g,Gx=/(left|right|width|margin|padding|x)/i,Wx=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},b_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},A_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kx=function(e,t,n){return e.style[t]=n},$x=function(e,t,n){return e.style.setProperty(t,n)},Zx=function(e,t,n){return e._gsap[t]=n},Jx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Qx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ey=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Gn=Bt+"Origin",ty=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=cr(i,a)}):this.tfm[e]=o.x?o[e]:cr(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},R_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ny=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Vf(),(!s||!s.isStart)&&!n[Bt]&&(R_(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},C_=function(e,t){var n={target:e,props:[],revert:ny,save:ty};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},P_,Yh=function(e,t){var n=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return n&&n.style?n:kr.createElement(e)},ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Yo(t)||t,1)||""},zd="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,n){var i=t||bs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zd[o]:"")+e},jh=function(){Vx()&&window.document&&(Fd=window,kr=Fd.document,Io=kr.documentElement,bs=Yh("div")||{style:{}},Yh("div"),Bt=Yo(Bt),Gn=Bt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",P_=!!Yo("perspective"),Vf=Xn.core.reverting,Hf=1)},Hd=function(e){var t=e.ownerSVGElement,n=Yh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Io.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Io.removeChild(n),s},Vd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},L_=function(e){var t,n;try{t=e.getBBox()}catch{t=Hd(e),n=1}return t&&(t.width||t.height)||n||(t=Hd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vd(e,["x","cx","x1"])||0,y:+Vd(e,["y","cy","y1"])||0,width:0,height:0}:t},I_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&L_(e))},Jr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==Gn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gf,"-$1").toLowerCase())):n.removeAttribute(t)}},Br=function(e,t,n,i,s,o){var a=new Vn(e._pt,t,n,0,1,o?A_:b_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Gd={deg:1,rad:1,turn:1},iy={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bs.style,l=Gx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Gd[i]||Gd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&I_(e),(d||o==="%")&&(yr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Gt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===kr||!g.appendChild)&&(g=kr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===ti.time&&!p.uncache)return Gt(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Jr(e,t)}else(d||o==="%")&&!iy[ri(g,"display")]&&(a.position=ri(e,"position")),g===e&&(a.position="static"),g.appendChild(bs),_=bs[u],g.removeChild(bs),a.position="absolute";return l&&d&&(p=Ns(g),p.time=ti.time,p.width=g[u]),Gt(f?_*s/h:_&&s?h/_*s:0)},cr=function(e,t,n,i){var s;return Hf||jh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=dl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qc(ri(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xc[t]&&Xc[t](e,t,n)||ri(e,t)||jg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},ry=function(e,t,n,i){if(!n||n==="none"){var s=Yo(t,e,1),o=s&&ri(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var a=new Vn(this._pt,e.style,t,0,1,T_),l=0,c=0,u,h,f,d,_,g,p,m,M,v,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ri(e,t)||i,g?e.style[t]=g:Jr(e,t)),u=[n,i],d_(u),n=u[0],i=u[1],f=n.match(wo)||[],R=i.match(wo)||[],R.length){for(;h=wo.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Lo(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=wo.lastIndex-v.length,v||(v=v||oi.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=Qr(e,t,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?A_:b_;return Gg.test(i)&&(a.e=0),this._pt=a,a},Wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wd[n]||n,t[1]=Wd[i]||i,t.join(" ")},oy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yr[a]&&(l=1,a=a==="transformOrigin"?Gn:Bt),Jr(n,a);l&&(Jr(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",dl(n,1),o.uncache=1,R_(i)))}},Xc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Vn(e._pt,t,n,0,0,oy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},fl=[1,0,0,1,0,0],D_={},N_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xd=function(e){var t=ri(e,Bt);return N_(t)?fl:t.substr(7).match(Vg).map(Gt)},Wf=function(e,t){var n=e._gsap||Ns(e),i=e.style,s=Xd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fl:s):(s===fl&&!e.offsetParent&&e!==Io&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Io.appendChild(e)),s=Xd(e),l?i.display=l:Jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Io.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,A,E,I,y;n?l!==fl&&(E=d*p-_*g)&&(I=S*(p/E)+R*(-g/E)+(g*M-p*m)/E,y=S*(-_/E)+R*(d/E)-(d*M-_*m)/E,S=I,R=y):(A=L_(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(v[1]||v[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=S-c,M=R-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Br(o,a,"xOrigin",c,S),Br(o,a,"yOrigin",u,R),Br(o,a,"xOffset",h,a.xOffset),Br(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},dl=function(e,t){var n=e._gsap||new __(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ri(e,Gn)||"0",u,h,f,d,_,g,p,m,M,v,S,R,A,E,I,y,x,O,N,D,F,V,Y,$,z,j,L,oe,ve,Ge,q,te;return u=h=f=g=p=m=M=v=S=0,d=_=1,n.svg=!!(e.getCTM&&I_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),E=Wf(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Kh(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,A=n.yOrigin||0,E!==fl&&(O=E[0],N=E[1],D=E[2],F=E[3],u=V=E[4],h=Y=E[5],E.length===6?(d=Math.sqrt(O*O+N*N),_=Math.sqrt(F*F+D*D),g=O||N?$s(N,O)*gs:0,M=D||F?$s(D,F)*gs+g:0,M&&(_*=Math.abs(Math.cos(M*Do))),n.svg&&(u-=R-(R*O+A*D),h-=A-(R*N+A*F))):(te=E[6],Ge=E[7],L=E[8],oe=E[9],ve=E[10],q=E[11],u=E[12],h=E[13],f=E[14],I=$s(te,ve),p=I*gs,I&&(y=Math.cos(-I),x=Math.sin(-I),$=V*y+L*x,z=Y*y+oe*x,j=te*y+ve*x,L=V*-x+L*y,oe=Y*-x+oe*y,ve=te*-x+ve*y,q=Ge*-x+q*y,V=$,Y=z,te=j),I=$s(-D,ve),m=I*gs,I&&(y=Math.cos(-I),x=Math.sin(-I),$=O*y-L*x,z=N*y-oe*x,j=D*y-ve*x,q=F*x+q*y,O=$,N=z,D=j),I=$s(N,O),g=I*gs,I&&(y=Math.cos(I),x=Math.sin(I),$=O*y+N*x,z=V*y+Y*x,N=N*y-O*x,Y=Y*y-V*x,O=$,V=z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Gt(Math.sqrt(O*O+N*N+D*D)),_=Gt(Math.sqrt(Y*Y+te*te)),I=$s(V,Y),M=Math.abs(I)>2e-4?I*gs:0,S=q?1/(q<0?-q:q):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!N_(ri(e,Bt)),$&&e.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(_),n.rotation=Gt(g)+a,n.rotationX=Gt(p)+a,n.rotationY=Gt(m)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=qc(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?ly:P_?U_:ay,n.uncache=0,n},qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nu=function(e,t,n){var i=Tn(t);return Gt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},ay=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,U_(e,t)},os="0deg",da="0px",as=") ",U_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==os||u!==os)){var A=parseFloat(u)*Do,E=Math.sin(A),I=Math.cos(A),y;A=parseFloat(h)*Do,y=Math.cos(A),o=Nu(M,o,E*y*-v),a=Nu(M,a,-Math.sin(A)*-v),l=Nu(M,l,I*y*-v+v)}p!==da&&(S+="perspective("+p+as),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==da||a!==da||l!==da)&&(S+=l!==da||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+as),c!==os&&(S+="rotate("+c+as),u!==os&&(S+="rotateY("+u+as),h!==os&&(S+="rotateX("+h+as),(f!==os||d!==os)&&(S+="skew("+f+", "+d+as),(_!==1||g!==1)&&(S+="scale("+_+", "+g+as),M.style[Bt]=S||"translate(0, 0)"},ly=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),R,A,E,I,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Do,c*=Do,R=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=Do,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,I*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,A*=y)),R=Gt(R),A=Gt(A),E=Gt(E),I=Gt(I)):(R=h,I=f,A=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Qr(d,"x",o,"px"),S=Qr(d,"y",a,"px")),(_||g||p||m)&&(v=Gt(v+_-(_*R+g*E)+p),S=Gt(S+g-(_*A+g*I)+m)),(i||s)&&(y=d.getBBox(),v=Gt(v+i/100*y.width),S=Gt(S+s/100*y.height)),y="matrix("+R+","+A+","+E+","+I+","+v+","+S+")",d.setAttribute("transform",y),M&&(d.style[Bt]=y)},cy=function(e,t,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?gs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Bd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Bd)%o-~~(c/o)*o)),e._pt=f=new Vn(e._pt,t,n,i,c,Xx),f.e=u,f.u="deg",e._props.push(n),f},qd=function(e,t){for(var n in t)e[n]=t[n];return e},uy=function(e,t,n){var i=qd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=dl(n,1),Jr(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=dl(n,1),o[Bt]=c);for(l in yr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Tn(c),_=Tn(u),h=d!==_?Qr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Vn(e._pt,a,l,h,f-h,qh),e._pt.u=_||0,e._props.push(l));qd(a,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Xc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return cr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var O_={name:"css",register:jh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,v,S,R,A,E,I,y;Hf||jh(),this.styles=this.styles||C_(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Jn[g]&&v_(g,t,n,i,e,s)))){if(d=typeof u,_=Xc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=cl(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Xr.lastIndex=0,Xr.test(c)||(p=Tn(c),m=Tn(u),m?p!==m&&(c=Qr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],fn(c)&&~c.indexOf("random(")&&(c=cl(c)),Tn(c+"")||c==="auto"||(c+=oi.units[g]||Tn(cr(e,g))||""),(c+"").charAt(1)==="="&&(c=cr(e,g))):c=cr(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(f===1&&cr(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Br(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in yr,v){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=ri(e,"perspective"),x?e.style.perspective=x:Jr(e,"perspective")}h=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||dl(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new Vn(this._pt,a,Bt,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new Vn(this._pt,R,"scaleY",R.scaleY,(M?Lo(R.scaleY,M+h):h)-R.scaleY||0,qh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Gn,0,a[Gn]),u=sy(u),R.svg?Kh(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Br(this,R,"zOrigin",R.zOrigin,m),Br(this,a,g,qc(c),qc(u)));continue}else if(g==="svgOrigin"){Kh(e,u,1,A,0,this);continue}else if(g in D_){cy(this,R,g,f,M?Lo(f,M+u):u);continue}else if(g==="smoothOrigin"){Br(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){uy(this,u,e);continue}}else g in a||(g=Yo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!Wx.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Tn(u)||(g in oi.units?oi.units[g]:p),p!==m&&(f=Qr(e,g,c,m)),this._pt=new Vn(this._pt,v?R:a,g,f,(M?Lo(f,M+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?jx:qh),this._pt.u=m||0,v&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=Yx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=qx);else if(g in a)ry.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Lf(g,u);continue}v||(g in a?I.push(g,0,a[g]):typeof e[g]=="function"?I.push(g,2,e[g]()):I.push(g,1,c||e[g])),o.push(g)}}E&&w_(this)},render:function(e,t){if(t.tween._time||!Vf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cr,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==Gn&&(e._gsap.x||cr(e,"x"))?n&&kd===n?t==="scale"?Jx:Zx:(kd=n||{})&&(t==="scale"?Qx:ey):e.style&&!Rf(e.style[t])?Kx:~t.indexOf("-")?$x:Bf(e,t)},core:{_removeProperty:Jr,_getMatrix:Wf}};Xn.utils.checkPrefix=Yo;Xn.core.getStyleSaver=C_;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){yr[s]=1});Hn(e,function(s){oi.units[s]="deg",D_[s]=1}),Gi[i[13]]=r+","+e,Hn(n,function(s){var o=s.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Xn.registerPlugin(O_);var Fe=Xn.registerPlugin(O_)||Xn;Fe.core.Tween;let pa,Zs,Yd=typeof Symbol=="function"?Symbol():"_split",$h,hy=()=>$h||es.register(window.gsap),jd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,pl=r=>typeof r=="string"?pl(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...pl(t)):e.push(t),e),[]):[r],Kd=r=>pl(r).filter(e=>e instanceof HTMLElement),Zh=[],Uu=function(){},fy={add:r=>r()},dy=/\s+/g,$d=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Yc={left:0,top:0,width:0,height:0},py=(r,e)=>{for(;++e<r.length&&r[e]===Yc;);return r[e]||Yc},Zd=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Jd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Zh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Qd=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Js=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Jh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},my=(r,e,t,n)=>{let i=Jh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},F_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=e,p=r.getBoundingClientRect(),m=p,M=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",v=0,S=t.collection,R,A,E,I,y,x,O,N,D,F,V,Y,$,z,j,L,oe,ve;for(typeof d=="object"?(E=d.delimiter||d,A=d.replaceWith||""):A=d===""?"":d||" ",R=A!==" ";f<h.length;f++)if(I=h[f],I.nodeType===3){for(j=I.textContent||"",_?j=j.replace(dy," "):M&&(j=j.replace(/\n/g,A+`
`)),g&&(j=g(j,r)),I.textContent=j,y=A||E?j.split(E||A):j.match(a)||Zh,oe=y[y.length-1],N=R?oe.slice(-1)===" ":!oe,oe||y.pop(),m=p,O=R?y[0].charAt(0)===" ":!y[0],O&&Js(" ",r,I),y[0]||y.shift(),Jd(y,l),s&&c||(I.textContent=""),D=1;D<=y.length;D++)if(L=y[D-1],!_&&M&&L.charAt(0)===`
`&&((u=I.previousSibling)==null||u.remove(),Js(document.createElement("br"),r,I),L=L.slice(1)),!_&&L==="")Js(A,r,I);else if(L===" ")r.insertBefore(document.createTextNode(" "),I);else{if(R&&L.charAt(0)===" "&&Js(" ",r,I),v&&D===1&&!O&&S.indexOf(v.parentNode)>-1?(x=S[S.length-1],x.appendChild(document.createTextNode(n?"":L))):(x=t(n?"":L),Js(x,r,I),v&&D===1&&!O&&x.insertBefore(v,x.firstChild)),n)for(V=jd?Jd([...jd.segment(L)].map(Ge=>Ge.segment),l):L.match(a)||Zh,ve=0;ve<V.length;ve++)x.appendChild(V[ve]===" "?document.createTextNode(" "):n(V[ve]));if(s&&c){if(j=I.textContent=j.substring(L.length+1,j.length),F=x.getBoundingClientRect(),F.top>m.top&&F.left<=m.left){for(Y=r.cloneNode(),$=r.childNodes[0];$&&$!==x;)z=$,$=$.nextSibling,Y.appendChild(z);r.parentNode.insertBefore(Y,r),i&&Qd(Y)}m=F}(D<y.length||N)&&Js(D>=y.length?" ":R&&L.slice(-1)===" "?" "+A:A,r,I)}r.removeChild(I),v=0}else I.nodeType===1&&(o&&o.indexOf(I)>-1?(S.indexOf(I.previousSibling)>-1&&S[S.length-1].appendChild(I),v=I):(F_(I,e,t,n,i,s,o,a,l,!0),v=0),i&&Qd(I))};const k_=class B_{constructor(e,t){this.isSplit=!1,hy(),this.elements=Kd(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Yd])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Zd)),o[Yd]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Uu(this),this.split(t)}split(e){return(this._ctx||fy).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+$d.source,"gu"):$d,p=!!e.ignore&&Kd(e.ignore),{orig:m,animTime:M,obs:v}=this._data,S;(h||f||u)&&(this.elements.forEach((R,A)=>{m[A]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let E=[],I=[],y=[],x=h?Jh("char",e,E):null,O=Jh("word",e,I),N,D,F,V;if(F_(R,e,O,x,d,i&&(u||d),p,g,_,!1),u){let Y=pl(R.childNodes),$=my(R,Y,e,y),z,j=[],L=0,oe=Y.map(q=>q.nodeType===1?q.getBoundingClientRect():Yc),ve=Yc,Ge;for(N=0;N<Y.length;N++)z=Y[N],z.nodeType===1&&(z.nodeName==="BR"?((!N||Y[N-1].nodeName!=="BR")&&(j.push(z),$(L,N+1)),L=N+1,ve=py(oe,N)):(Ge=oe[N],N&&Ge.top>ve.top&&Ge.left<ve.left+ve.width-1&&($(L,N),L=N),ve=Ge));L<N&&$(L,N),j.forEach(q=>{var te;return(te=q.parentNode)==null?void 0:te.removeChild(q)})}if(!f){for(N=0;N<I.length;N++)if(D=I[N],h||!D.nextSibling||D.nextSibling.nodeType!==3)if(s&&!u){for(F=document.createElement("span"),F.style.whiteSpace="nowrap";D.firstChild;)F.appendChild(D.firstChild);D.replaceWith(F)}else D.replaceWith(...D.childNodes);else V=D.nextSibling,V&&V.nodeType===3&&(V.textContent=(D.textContent||"")+(V.textContent||""),D.remove());I.length=0,R.normalize()}this.lines.push(...y),this.words.push(...I),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(R=>{let A=R.cloneNode();return R.replaceWith(A),A.appendChild(R),R.className&&(A.className=R.className.trim()+"-mask"),A.style.overflow="clip",A}))),this.isSplit=!0,Zs&&u&&(a?Zs.addEventListener("loadingdone",this._split):Zs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(S=o&&o(this))&&S.totalTime&&(this._data.anim=M?S.totalTime(M):S),u&&a&&this.elements.forEach((R,A)=>{m[A].width=R.offsetWidth,v&&v.observe(R)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Zs?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Zd),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new B_(e,t)}static register(e){pa=pa||e||window.gsap,pa&&(pl=pa.utils.toArray,Uu=pa.core.context||Uu),!$h&&window.innerWidth>0&&(Zs=document.fonts,$h=!0)}};k_.version="3.14.2";let es=k_;var gy="1.3.17";function z_(r,e,t){return Math.max(r,Math.min(e,t))}function _y(r,e,t){return(1-t)*r+t*e}function vy(r,e,t,n){return _y(r,e,1-Math.exp(-t*n))}function xy(r,e){return(r%e+e)%e}var yy=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=z_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=vy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Sy(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var My=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Sy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},H_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},ep=100/6,Mr={passive:!1},Ty=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new H_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?ep:n===2?this.window.width:1,s=n===1?ep:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},tp=r=>Math.min(1,1.001-Math.pow(2,-10*r)),wy=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new yy;emitter=new H_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:I=E,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=gy,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=tp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,autoRaf:v,anchors:S,autoToggle:R,allowNestedScroll:A,naiveDimensions:I,stopInertiaOnNavigate:y},this.dimensions=new My(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Ty(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=z_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=tp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const R=window.getComputedStyle(r);i.computedStyle=R;const A=R.overflowX,E=R.overflowY;if(s=["auto","overlay","scroll"].includes(A),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{const R=e!==0,A=t!==0;R&&s&&a&&(_="x"),A&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,M,v;if(_==="x")g=r.scrollLeft,p=c-h,m=e,M=s,v=a;else if(_==="y")g=r.scrollTop,p=u-f,m=t,M=o,v=l;else return!1;return(m>0?g<p:g>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?xy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Ey(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function by(r,e,t){return e&&Ey(r.prototype,e),r}var mn,wc,ni,zr,Hr,No,V_,_s,Ha,G_,fr,Ei,W_,X_=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},q_=1,bo=[],ot=[],Yi=[],Va=Date.now,Qh=function(e,t){return t},Ay=function(){var e=Ha.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Yi),ot=n,Yi=i,Qh=function(o,a){return t[o](a)}},qr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},Ga=function(e){return!!~G_.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nl="scrollLeft",Ul="scrollTop",ef=function(){return fr&&fr.isPressed||ot.cache++},jc=function(e,t){var n=function i(s){if(s||s===0){q_&&(ni.history.scrollRestoration="manual");var o=fr&&fr.isPressed;s=i.v=Math.round(s)||(fr&&fr.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Qh("ss",s)}else(t||ot.cache!==i.cacheID||Qh("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:Nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jc(function(r){return arguments.length?ni.scrollTo(r,tn.sc()):ni.pageXOffset||zr[Nl]||Hr[Nl]||No[Nl]||0})},tn={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:jc(function(r){return arguments.length?ni.scrollTo(On.sc(),r):ni.pageYOffset||zr[Ul]||Hr[Ul]||No[Ul]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ry=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ts=function(e,t){var n=t.s,i=t.sc;Ga(e)&&(e=zr.scrollingElement||Hr);var s=ot.indexOf(e),o=i===tn.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Rn(e,"scroll",ef);var a=ot[s+o],l=a||(ot[s+o]=jc(qr(e,n),!0)||(Ga(e)?i:jc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},tf=function(e,t,n){var i=e,s=e,o=Va(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Va();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Va();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ma=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},np=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Y_=function(){Ha=mn.core.globals().ScrollTrigger,Ha&&Ha.core&&Ay()},j_=function(e){return mn=e||X_(),!wc&&mn&&typeof document<"u"&&document.body&&(ni=window,zr=document,Hr=zr.documentElement,No=zr.body,G_=[ni,zr,Hr,No],mn.utils.clamp,W_=mn.core.context||function(){},_s="onpointerenter"in No?"pointer":"mouse",V_=Xt.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Xt.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return q_=0},500),Y_(),wc=1),wc};On.op=tn;ot.cache=0;var Xt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){wc||j_(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Ha||Y_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,E=n.onUp,I=n.onDown,y=n.onChangeX,x=n.onChangeY,O=n.onChange,N=n.onToggleX,D=n.onToggleY,F=n.onHover,V=n.onHoverEnd,Y=n.onMove,$=n.ignoreCheck,z=n.isNormalizer,j=n.onGestureStart,L=n.onGestureEnd,oe=n.onWheel,ve=n.onEnable,Ge=n.onDisable,q=n.onClick,te=n.scrollSpeed,ce=n.capture,re=n.allowClicks,Ae=n.lockAxis,Pe=n.onLockAxis;this.target=a=kn(a)||Hr,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(No).lineHeight)||22);var Xe,H,ke,le,qe,we,Ye,T=this,w=0,K=0,J=n.passive||!u&&n.passive!==!1,Z=ts(a,On),ee=ts(a,tn),Re=Z(),ie=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",Le=Ga(a),ne=a.ownerDocument||zr,fe=[0,0,0],Ie=[0,0,0],me=0,ye=function(){return me=Va()},De=function(Te,et){return(T.event=Te)&&d&&Ry(Te.target,d)||et&&pe&&Te.pointerType!=="touch"||$&&$(Te,et)},it=function(){T._vx.reset(),T._vy.reset(),H.pause(),h&&h(T)},Qe=function(){var Te=T.deltaX=np(fe),et=T.deltaY=np(Ie),ue=Math.abs(Te)>=i,Ve=Math.abs(et)>=i;O&&(ue||Ve)&&O(T,Te,et,fe,Ie),ue&&(R&&T.deltaX>0&&R(T),A&&T.deltaX<0&&A(T),y&&y(T),N&&T.deltaX<0!=w<0&&N(T),w=T.deltaX,fe[0]=fe[1]=fe[2]=0),Ve&&(I&&T.deltaY>0&&I(T),E&&T.deltaY<0&&E(T),x&&x(T),D&&T.deltaY<0!=K<0&&D(T),K=T.deltaY,Ie[0]=Ie[1]=Ie[2]=0),(le||ke)&&(Y&&Y(T),ke&&(p&&ke===1&&p(T),M&&M(T),ke=0),le=!1),we&&!(we=!1)&&Pe&&Pe(T),qe&&(oe(T),qe=!1),Xe=0},at=function(Te,et,ue){fe[ue]+=Te,Ie[ue]+=et,T._vx.update(Te),T._vy.update(et),c?Xe||(Xe=requestAnimationFrame(Qe)):Qe()},ft=function(Te,et){Ae&&!Ye&&(T.axis=Ye=Math.abs(Te)>Math.abs(et)?"x":"y",we=!0),Ye!=="y"&&(fe[2]+=Te,T._vx.update(Te,!0)),Ye!=="x"&&(Ie[2]+=et,T._vy.update(et,!0)),c?Xe||(Xe=requestAnimationFrame(Qe)):Qe()},xe=function(Te){if(!De(Te,1)){Te=ma(Te,u);var et=Te.clientX,ue=Te.clientY,Ve=et-T.x,Ue=ue-T.y,He=T.isDragging;T.x=et,T.y=ue,(He||(Ve||Ue)&&(Math.abs(T.startX-et)>=s||Math.abs(T.startY-ue)>=s))&&(ke||(ke=He?2:1),He||(T.isDragging=!0),ft(Ve,Ue))}},U=T.onPress=function(Oe){De(Oe,1)||Oe&&Oe.button||(T.axis=Ye=null,H.pause(),T.isPressed=!0,Oe=ma(Oe),w=K=0,T.startX=T.x=Oe.clientX,T.startY=T.y=Oe.clientY,T._vx.reset(),T._vy.reset(),Rn(z?a:ne,Ei[1],xe,J,!0),T.deltaX=T.deltaY=0,v&&v(T))},Q=T.onRelease=function(Oe){if(!De(Oe,1)){bn(z?a:ne,Ei[1],xe,!0);var Te=!isNaN(T.y-T.startY),et=T.isDragging,ue=et&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),Ve=ma(Oe);!ue&&Te&&(T._vx.reset(),T._vy.reset(),u&&re&&mn.delayedCall(.08,function(){if(Va()-me>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(ne.createEvent){var Ue=ne.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,ni,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Ue)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,h&&et&&!z&&H.restart(!0),ke&&Qe(),m&&et&&m(T),S&&S(T,ue)}},ae=function(Te){return Te.touches&&Te.touches.length>1&&(T.isGesturing=!0)&&j(Te,T.isDragging)},ge=function(){return(T.isGesturing=!1)||L(T)},Se=function(Te){if(!De(Te)){var et=Z(),ue=ee();at((et-Re)*te,(ue-ie)*te,1),Re=et,ie=ue,h&&H.restart(!0)}},rt=function(Te){if(!De(Te)){Te=ma(Te,u),oe&&(qe=!0);var et=(Te.deltaMode===1?l:Te.deltaMode===2?ni.innerHeight:1)*_;at(Te.deltaX*et,Te.deltaY*et,0),h&&!z&&H.restart(!0)}},ht=function(Te){if(!De(Te)){var et=Te.clientX,ue=Te.clientY,Ve=et-T.x,Ue=ue-T.y;T.x=et,T.y=ue,le=!0,h&&H.restart(!0),(Ve||Ue)&&ft(Ve,Ue)}},pt=function(Te){T.event=Te,F(T)},Et=function(Te){T.event=Te,V(T)},dt=function(Te){return De(Te)||ma(Te,u)&&q(T)};H=T._dc=mn.delayedCall(f||.25,it).pause(),T.deltaX=T.deltaY=0,T._vx=tf(0,50,!0),T._vy=tf(0,50,!0),T.scrollX=Z,T.scrollY=ee,T.isDragging=T.isGesturing=T.isPressed=!1,W_(this),T.enable=function(Oe){return T.isEnabled||(Rn(Le?ne:a,"scroll",ef),o.indexOf("scroll")>=0&&Rn(Le?ne:a,"scroll",Se,J,ce),o.indexOf("wheel")>=0&&Rn(a,"wheel",rt,J,ce),(o.indexOf("touch")>=0&&V_||o.indexOf("pointer")>=0)&&(Rn(a,Ei[0],U,J,ce),Rn(ne,Ei[2],Q),Rn(ne,Ei[3],Q),re&&Rn(a,"click",ye,!0,!0),q&&Rn(a,"click",dt),j&&Rn(ne,"gesturestart",ae),L&&Rn(ne,"gestureend",ge),F&&Rn(a,_s+"enter",pt),V&&Rn(a,_s+"leave",Et),Y&&Rn(a,_s+"move",ht)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=le=ke=!1,T._vx.reset(),T._vy.reset(),Re=Z(),ie=ee(),Oe&&Oe.type&&U(Oe),ve&&ve(T)),T},T.disable=function(){T.isEnabled&&(bo.filter(function(Oe){return Oe!==T&&Ga(Oe.target)}).length||bn(Le?ne:a,"scroll",ef),T.isPressed&&(T._vx.reset(),T._vy.reset(),bn(z?a:ne,Ei[1],xe,!0)),bn(Le?ne:a,"scroll",Se,ce),bn(a,"wheel",rt,ce),bn(a,Ei[0],U,ce),bn(ne,Ei[2],Q),bn(ne,Ei[3],Q),bn(a,"click",ye,!0),bn(a,"click",dt),bn(ne,"gesturestart",ae),bn(ne,"gestureend",ge),bn(a,_s+"enter",pt),bn(a,_s+"leave",Et),bn(a,_s+"move",ht),T.isEnabled=T.isPressed=T.isDragging=!1,Ge&&Ge(T))},T.kill=T.revert=function(){T.disable();var Oe=bo.indexOf(T);Oe>=0&&bo.splice(Oe,1),fr===T&&(fr=0)},bo.push(T),z&&Ga(a)&&(fr=T),T.enable(g)},by(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xt.version="3.14.2";Xt.create=function(r){return new Xt(r)};Xt.register=j_;Xt.getAll=function(){return bo.slice()};Xt.getById=function(r){return bo.filter(function(e){return e.vars.id===r})[0]};X_()&&mn.registerPlugin(Xt);var _e,So,st,At,Qn,gt,Xf,Kc,ml,Wa,Ra,Ol,Sn,mu,nf,Ln,ip,rp,Mo,K_,Ou,$_,Pn,rf,Z_,J_,Pr,sf,qf,Uo,Yf,Xa,of,Fu,Fl=1,Mn=Date.now,ku=Mn(),yi=0,Ca=0,sp=function(e,t,n){var i=Zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},op=function(e,t){return t&&(!Zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Cy=function r(){return Ca&&requestAnimationFrame(r)},ap=function(){return mu=1},lp=function(){return mu=0},Oi=function(e){return e},Pa=function(e){return Math.round(e*1e5)/1e5||0},Q_=function(){return typeof window<"u"},e0=function(){return _e||Q_()&&(_e=window.gsap)&&_e.registerPlugin&&_e},Vs=function(e){return!!~Xf.indexOf(e)},t0=function(e){return(e==="Height"?Yf:st["inner"+e])||Qn["client"+e]||gt["client"+e]},n0=function(e){return qr(e,"getBoundingClientRect")||(Vs(e)?function(){return Cc.width=st.innerWidth,Cc.height=Yf,Cc}:function(){return ur(e)})},Py=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=qr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?t0(s):e["client"+s])||0}},Ly=function(e,t){return!t||~Yi.indexOf(e)?n0(e):function(){return Cc}},Wi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=qr(e,n))?o()-n0(e)()[s]:Vs(e)?(Qn[n]||gt[n])-t0(i):e[n]-e["offset"+i])},kl=function(e,t){for(var n=0;n<Mo.length;n+=3)(!t||~t.indexOf(Mo[n+1]))&&e(Mo[n],Mo[n+1],Mo[n+2])},Zn=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},La=function(e){return typeof e=="number"},vs=function(e){return typeof e=="object"},ga=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qs=Math.abs,i0="left",r0="top",jf="right",Kf="bottom",ks="width",Bs="height",qa="Right",Ya="Left",ja="Top",Ka="Bottom",Kt="padding",pi="margin",jo="Width",$f="Height",en="px",mi=function(e){return st.getComputedStyle(e)},Iy=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ur=function(e,t){var n=t&&mi(e)[nf]!=="matrix(1, 0, 0, 1, 0, 0)"&&_e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},$c=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},s0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Dy=function(e){return function(t){return _e.utils.snap(s0(e),t)}},Zf=function(e){var t=_e.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Ny=function(e){return function(t,n){return Zf(s0(e))(t,n.direction)}},Bl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},zl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},up={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hl={toggleActions:"play",anticipatePin:0},Zc={top:0,left:0,center:.5,bottom:1,right:1},Ec=function(e,t){if(Zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Zc?Zc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=At.createElement("div"),g=Vs(n)||qr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?gt:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===tn?jf:Kf)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],bc(_,0,i,M),_},bc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+jo]=1,s["border"+a+jo]=0,s[n.p]=t+"px",_e.set(e,s)},tt=[],af={},gl,hp=function(){return Mn()-yi>34&&(gl||(gl=requestAnimationFrame(gr)))},eo=function(){(!Pn||!Pn.isPressed||Pn.startX>gt.clientWidth)&&(ot.cache++,Pn?gl||(gl=requestAnimationFrame(gr)):gr(),yi||Ws("scrollStart"),yi=Mn())},zu=function(){J_=st.innerWidth,Z_=st.innerHeight},Ia=function(e){ot.cache++,(e===!0||!Sn&&!$_&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!rf||J_!==st.innerWidth||Math.abs(st.innerHeight-Z_)>st.innerHeight*.25))&&Kc.restart(!0)},Gs={},Uy=[],o0=function r(){return ln(nt,"scrollEnd",r)||As(!0)},Ws=function(e){return Gs[e]&&Gs[e].map(function(t){return t()})||Uy},$n=[],a0=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},l0=function(){return ot.forEach(function(e){return wn(e)&&++e.cacheID&&(e.rec=e())})},Jf=function(e,t){var n;for(Ln=0;Ln<tt.length;Ln++)n=tt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xa=!0,t&&a0(t),t||Ws("revert")},c0=function(e,t){ot.cache++,(t||!In)&&ot.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),Zn(e)&&(st.history.scrollRestoration=qf=e)},In,zs=0,fp,Oy=function(){if(fp!==zs){var e=fp=zs;requestAnimationFrame(function(){return e===zs&&As(!0)})}},u0=function(){gt.appendChild(Uo),Yf=!Pn&&Uo.offsetHeight||st.innerHeight,gt.removeChild(Uo)},dp=function(e){return ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},As=function(e,t){if(Qn=At.documentElement,gt=At.body,Xf=[st,At,Qn,gt],yi&&!e&&!Xa){cn(nt,"scrollEnd",o0);return}u0(),In=nt.isRefreshing=!0,Xa||l0();var n=Ws("refreshInit");K_&&nt.sort(),t||Jf(),ot.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Xa=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),of=1,dp(!0),tt.forEach(function(i){var s=Wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),dp(!1),of=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),c0(qf,1),Kc.pause(),zs++,In=2,gr(2),tt.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=nt.isRefreshing=!1,Ws("refresh")},lf=0,Ac=1,$a,gr=function(e){if(e===2||!In&&!Xa){nt.isUpdating=!0,$a&&$a.update(0);var t=tt.length,n=Mn(),i=n-ku>=50,s=t&&tt[0].scroll();if(Ac=lf>s?-1:1,In||(lf=s),i&&(yi&&!mu&&n-yi>200&&(yi=0,Ws("scrollEnd")),Ra=ku,ku=n),Ac<0){for(Ln=t;Ln-- >0;)tt[Ln]&&tt[Ln].update(0,i);Ac=1}else for(Ln=0;Ln<t;Ln++)tt[Ln]&&tt[Ln].update(0,i);nt.isUpdating=!1}gl=0},cf=[i0,r0,Kf,jf,pi+Ka,pi+qa,pi+ja,pi+Ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rc=cf.concat([ks,Bs,"boxSizing","max"+jo,"max"+$f,"position",pi,Kt,Kt+ja,Kt+qa,Kt+Ka,Kt+Ya]),Fy=function(e,t,n){Oo(n);var i=e._gsap;if(i.spacerIsNative)Oo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=cf.length,o=t.style,a=e.style,l;s--;)l=cf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Kf]=a[jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ks]=$c(e,On)+en,o[Bs]=$c(e,tn)+en,o[Kt]=a[pi]=a[r0]=a[i0]="0",Oo(i),a[ks]=a["max"+jo]=n[ks],a[Bs]=a["max"+$f]=n[Bs],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ky=/([A-Z])/g,Oo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||_e.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ky,"-$1").toLowerCase())}},Gl=function(e){for(var t=Rc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Rc[s],n[Rc[s]]);return i.t=e,i},By=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Cc={left:0,top:0},pp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){wn(e)&&(e=e(l)),Zn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ec("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),La(e))d&&(e=_e.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&bc(a,n,i,!0);else{wn(t)&&(t=t(l));var v=(e||"0").split(" "),S,R,A,E;M=kn(t,l)||gt,S=ur(M)||{},(!S||!S.left&&!S.top)&&mi(M).display==="none"&&(E=M.style.display,M.style.display="block",S=ur(M),E?M.style.display=E:M.style.removeProperty("display")),R=Ec(v[0],S[i.d]),A=Ec(v[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-A,a&&bc(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,y=o._isStart;p="scroll"+i.d2,bc(o,I,i,y&&I>20||!y&&(h?Math.max(gt[p],Qn[p]):o.parentNode[p])<=I+1),h&&(c=ur(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+en))}return d&&M&&(p=ur(M),d.seek(f),m=ur(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},zy=/(webkit|moz|length|cssText|inset)/i,mp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!zy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;_e.core.getCache(e).uncache=1,t.appendChild(e)}},h0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wl=function(e,t,n){var i={};i[t.p]="+="+n,_e.set(e,i)},gp=function(e,t){var n=ts(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=h0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&gr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=_e.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),nt.isTouch&&cn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){So||r.register(_e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=Oi;return}n=cp(Zn(n)||La(n)||n.nodeType?{trigger:n}:n,Hl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,I=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:tn,O=!h&&h!==0,N=kn(n.scroller||st),D=_e.core.getCache(N),F=Vs(N),V=("pinType"in n?n.pinType:qr(N,"pinType")||F&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=O&&n.toggleActions.split(" "),z="markers"in n?n.markers:Hl.markers,j=F?0:parseFloat(mi(N)["border"+x.p2+jo])||0,L=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ve=Py(N,F,x),Ge=Ly(N,F),q=0,te=0,ce=0,re=ts(N,x),Ae,Pe,Xe,H,ke,le,qe,we,Ye,T,w,K,J,Z,ee,Re,ie,pe,Le,ne,fe,Ie,me,ye,De,it,Qe,at,ft,xe,U,Q,ae,ge,Se,rt,ht,pt,Et;if(L._startClamp=L._endClamp=!1,L._dir=x,p*=45,L.scroller=N,L.scroll=E?E.time.bind(E):re,H=re(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(K_=1,n.refreshPriority===-9999&&($a=L)),D.tweenScroll=D.tweenScroll||{top:gp(N,tn),left:gp(N,On)},L.tweenTo=Ae=D.tweenScroll[x.p],L.scrubDuration=function(ue){ae=La(ue)&&ue,ae?Q?Q.duration(ue):Q=_e.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return m&&m(L)}}):(Q&&Q.progress(1).kill(),Q=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),xe=0,l||(l=i.vars.id)),S&&((!vs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in gt.style&&_e.set(F?[gt,Qn]:N,{scrollBehavior:"auto"}),ot.forEach(function(ue){return wn(ue)&&ue.target===(F?At.scrollingElement||Qn:N)&&(ue.smooth=!1)}),Xe=wn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Dy(i):S.snapTo==="labelsDirectional"?Ny(i):S.directional!==!1?function(ue,Ve){return Zf(S.snapTo)(ue,Mn()-te<500?0:Ve.direction)}:_e.utils.snap(S.snapTo),ge=S.duration||{min:.1,max:2},ge=vs(ge)?Wa(ge.min,ge.max):Wa(ge,ge),Se=_e.delayedCall(S.delay||ae/2||.1,function(){var ue=re(),Ve=Mn()-te<500,Ue=Ae.tween;if((Ve||Math.abs(L.getVelocity())<10)&&!Ue&&!mu&&q!==ue){var He=(ue-le)/Z,Vt=i&&!O?i.totalProgress():He,Ke=Ve?0:(Vt-U)/(Mn()-Ra)*1e3||0,Lt=_e.utils.clamp(-He,1-He,Qs(Ke/2)*Ke/.185),Qt=He+(S.inertia===!1?0:Lt),It,bt,_t=S,C=_t.onStart,k=_t.onInterrupt,W=_t.onComplete;if(It=Xe(Qt,L),La(It)||(It=Qt),bt=Math.max(0,Math.round(le+It*Z)),ue<=qe&&ue>=le&&bt!==ue){if(Ue&&!Ue._initted&&Ue.data<=Qs(bt-ue))return;S.inertia===!1&&(Lt=It-He),Ae(bt,{duration:ge(Qs(Math.max(Qs(Qt-Vt),Qs(It-Vt))*.185/Ke/.05||0)),ease:S.ease||"power3",data:Qs(bt-ue),onInterrupt:function(){return Se.restart(!0)&&k&&k(L)},onComplete:function(){L.update(),q=re(),i&&!O&&(Q?Q.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),xe=U=i&&!O?i.totalProgress():L.progress,M&&M(L),W&&W(L)}},ue,Lt*Z,bt-ue-Lt*Z),C&&C(L,Ae.tween)}}else L.isActive&&q!==ue&&Se.restart(!0)}).pause()),l&&(af[l]=L),f=L.trigger=kn(f||d!==!0&&d),Et=f&&f._gsap&&f._gsap.stRevert,Et&&(Et=Et(L)),d=d===!0?f:kn(d),Zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===pi||(_=!_&&d.parentNode&&d.parentNode.style&&mi(d.parentNode).display==="flex"?!1:Kt),L.pin=d,Pe=_e.core.getCache(d),Pe.spacer?ee=Pe.pinState:(A&&(A=kn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=Gl(A))),Pe.spacer=pe=A||At.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Pe.pinState=ee=Gl(d)),n.force3D!==!1&&_e.set(d,{force3D:!0}),L.spacer=pe=Pe.spacer,ft=mi(d),ye=ft[_+x.os2],ne=_e.getProperty(d),fe=_e.quickSetter(d,x.a,en),Hu(d,pe,ft),ie=Gl(d)),z){K=vs(z)?cp(z,up):up,T=Vl("scroller-start",l,N,x,K,0),w=Vl("scroller-end",l,N,x,K,0,T),Le=T["offset"+x.op.d2];var dt=kn(qr(N,"content")||N);we=this.markerStart=Vl("start",l,dt,x,K,Le,0,E),Ye=this.markerEnd=Vl("end",l,dt,x,K,Le,0,E),E&&(pt=_e.quickSetter([we,Ye],x.a,en)),!V&&!(Yi.length&&qr(N,"fixedMarkers")===!0)&&(Iy(F?gt:N),_e.set([T,w],{force3D:!0}),it=_e.quickSetter(T,x.a,en),at=_e.quickSetter(w,x.a,en))}if(E){var Oe=E.vars.onUpdate,Te=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),Oe&&Oe.apply(E,Te||[])})}if(L.previous=function(){return tt[tt.indexOf(L)-1]},L.next=function(){return tt[tt.indexOf(L)+1]},L.revert=function(ue,Ve){if(!Ve)return L.kill(!0);var Ue=ue!==!1||!L.enabled,He=Sn;Ue!==L.isReverted&&(Ue&&(rt=Math.max(re(),L.scroll.rec||0),ce=L.progress,ht=i&&i.progress()),we&&[we,Ye,T,w].forEach(function(Vt){return Vt.style.display=Ue?"none":"block"}),Ue&&(Sn=L,L.update(Ue)),d&&(!R||!L.isActive)&&(Ue?Fy(d,pe,ee):Hu(d,pe,mi(d),De)),Ue||L.update(Ue),Sn=He,L.isReverted=Ue)},L.refresh=function(ue,Ve,Ue,He){if(!((Sn||!L.enabled)&&!Ve)){if(d&&ue&&yi){cn(r,"scrollEnd",o0);return}!In&&oe&&oe(L),Sn=L,Ae.tween&&!Ue&&(Ae.tween.kill(),Ae.tween=0),Q&&Q.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ci){return ci.vars.immediateRender&&ci.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Vt=ve(),Ke=Ge(),Lt=E?E.duration():Wi(N,x),Qt=Z<=.01||!Z,It=0,bt=He||0,_t=vs(Ue)?Ue.end:n.end,C=n.endTrigger||f,k=vs(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),W=L.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,L),X=f&&Math.max(0,tt.indexOf(L))||0,G=X,se,de,Ce,ze,Ee,Me,Be,Pt,_n,Dt,qt,vt,We;for(z&&vs(Ue)&&(vt=_e.getProperty(T,x.p),We=_e.getProperty(w,x.p));G-- >0;)Me=tt[G],Me.end||Me.refresh(0,1)||(Sn=L),Be=Me.pin,Be&&(Be===f||Be===d||Be===W)&&!Me.isReverted&&(Dt||(Dt=[]),Dt.unshift(Me),Me.revert(!0,!0)),Me!==tt[G]&&(X--,G--);for(wn(k)&&(k=k(L)),k=sp(k,"start",L),le=pp(k,f,Vt,x,re(),we,T,L,Ke,j,V,Lt,E,L._startClamp&&"_startClamp")||(d?-.001:0),wn(_t)&&(_t=_t(L)),Zn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Zn(k)?k.split(" ")[0]:"")+_t:(It=Ec(_t.substr(2),Vt),_t=Zn(k)?k:(E?_e.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,le):le)+It,C=f)),_t=sp(_t,"end",L),qe=Math.max(le,pp(_t||(C?"100% 0":Lt),C,Vt,x,re()+It,Ye,w,L,Ke,j,V,Lt,E,L._endClamp&&"_endClamp"))||-.001,It=0,G=X;G--;)Me=tt[G]||{},Be=Me.pin,Be&&Me.start-Me._pinPush<=le&&!E&&Me.end>0&&(se=Me.end-(L._startClamp?Math.max(0,Me.start):Me.start),(Be===f&&Me.start-Me._pinPush<le||Be===W)&&isNaN(k)&&(It+=se*(1-Me.progress)),Be===d&&(bt+=se));if(le+=It,qe+=It,L._startClamp&&(L._startClamp+=It),L._endClamp&&!In&&(L._endClamp=qe||-.001,qe=Math.min(qe,Wi(N,x))),Z=qe-le||(le-=.01)&&.001,Qt&&(ce=_e.utils.clamp(0,1,_e.utils.normalize(le,qe,rt))),L._pinPush=bt,we&&It&&(se={},se[x.a]="+="+It,W&&(se[x.p]="-="+re()),_e.set([we,Ye],se)),d&&!(of&&L.end>=Wi(N,x)))se=mi(d),ze=x===tn,Ce=re(),Ie=parseFloat(ne(x.a))+bt,!Lt&&qe>1&&(qt=(F?At.scrollingElement||Qn:N).style,qt={style:qt,value:qt["overflow"+x.a.toUpperCase()]},F&&mi(gt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(qt.style["overflow"+x.a.toUpperCase()]="scroll")),Hu(d,pe,se),ie=Gl(d),de=ur(d,!0),Pt=V&&ts(N,ze?On:tn)(),_?(De=[_+x.os2,Z+bt+en],De.t=pe,G=_===Kt?$c(d,x)+Z+bt:0,G&&(De.push(x.d,G+en),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+en)),Oo(De),W&&tt.forEach(function(ci){ci.pin===W&&ci.vars.pinSpacing!==!1&&(ci._subPinOffset=!0)}),V&&re(rt)):(G=$c(d,x),G&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=G+en)),V&&(Ee={top:de.top+(ze?Ce-le:Pt)+en,left:de.left+(ze?Pt:Ce-le)+en,boxSizing:"border-box",position:"fixed"},Ee[ks]=Ee["max"+jo]=Math.ceil(de.width)+en,Ee[Bs]=Ee["max"+$f]=Math.ceil(de.height)+en,Ee[pi]=Ee[pi+ja]=Ee[pi+qa]=Ee[pi+Ka]=Ee[pi+Ya]="0",Ee[Kt]=se[Kt],Ee[Kt+ja]=se[Kt+ja],Ee[Kt+qa]=se[Kt+qa],Ee[Kt+Ka]=se[Kt+Ka],Ee[Kt+Ya]=se[Kt+Ya],Re=By(ee,Ee,R),In&&re(0)),i?(_n=i._initted,Ou(1),i.render(i.duration(),!0,!0),me=ne(x.a)-Ie+Z+bt,Qe=Math.abs(Z-me)>1,V&&Qe&&Re.splice(Re.length-2,2),i.render(0,!0,!0),_n||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ou(0)):me=Z,qt&&(qt.value?qt.style["overflow"+x.a.toUpperCase()]=qt.value:qt.style.removeProperty("overflow-"+x.a));else if(f&&re()&&!E)for(de=f.parentNode;de&&de!==gt;)de._pinOffset&&(le-=de._pinOffset,qe-=de._pinOffset),de=de.parentNode;Dt&&Dt.forEach(function(ci){return ci.revert(!1,!0)}),L.start=le,L.end=qe,H=ke=In?rt:re(),!E&&!In&&(H<rt&&re(rt),L.scroll.rec=0),L.revert(!1,!0),te=Mn(),Se&&(q=-1,Se.restart(!0)),Sn=0,i&&O&&(i._initted||ht)&&i.progress()!==ht&&i.progress(ht||0,!0).render(i.time(),!0,!0),(Qt||ce!==L.progress||E||g||i&&!i._initted)&&(i&&!O&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(E&&le<-.001&&!ce?_e.utils.normalize(le,qe,0):ce,!0),L.progress=Qt||(H-le)/Z===ce?0:ce),d&&_&&(pe._pinOffset=Math.round(L.progress*me)),Q&&Q.invalidate(),isNaN(vt)||(vt-=_e.getProperty(T,x.p),We-=_e.getProperty(w,x.p),Wl(T,x,vt),Wl(we,x,vt-(He||0)),Wl(w,x,We),Wl(Ye,x,We-(He||0))),Qt&&!In&&L.update(),u&&!In&&!J&&(J=!0,u(L),J=!1)}},L.getVelocity=function(){return(re()-ke)/(Mn()-Ra)*1e3||0},L.endAnimation=function(){ga(L.callbackAnimation),i&&(Q?Q.progress(1):i.paused()?O||ga(i,L.direction<0,1):ga(i,i.reversed()))},L.labelToScroll=function(ue){return i&&i.labels&&(le||L.refresh()||le)+i.labels[ue]/i.duration()*Z||0},L.getTrailing=function(ue){var Ve=tt.indexOf(L),Ue=L.direction>0?tt.slice(0,Ve).reverse():tt.slice(Ve+1);return(Zn(ue)?Ue.filter(function(He){return He.vars.preventOverlaps===ue}):Ue).filter(function(He){return L.direction>0?He.end<=le:He.start>=qe})},L.update=function(ue,Ve,Ue){if(!(E&&!Ue&&!ue)){var He=In===!0?rt:L.scroll(),Vt=ue?0:(He-le)/Z,Ke=Vt<0?0:Vt>1?1:Vt||0,Lt=L.progress,Qt,It,bt,_t,C,k,W,X;if(Ve&&(ke=H,H=E?re():He,S&&(U=xe,xe=i&&!O?i.totalProgress():Ke)),p&&d&&!Sn&&!Fl&&yi&&(!Ke&&le<He+(He-ke)/(Mn()-Ra)*p?Ke=1e-4:Ke===1&&qe>He+(He-ke)/(Mn()-Ra)*p&&(Ke=.9999)),Ke!==Lt&&L.enabled){if(Qt=L.isActive=!!Ke&&Ke<1,It=!!Lt&&Lt<1,k=Qt!==It,C=k||!!Ke!=!!Lt,L.direction=Ke>Lt?1:-1,L.progress=Ke,C&&!Sn&&(bt=Ke&&!Lt?0:Ke===1?1:Lt===1?2:3,O&&(_t=!k&&$[bt+1]!=="none"&&$[bt+1]||$[bt],X=i&&(_t==="complete"||_t==="reset"||_t in i))),y&&(k||X)&&(X||h||!i)&&(wn(y)?y(L):L.getTrailing(y).forEach(function(Ce){return Ce.endAnimation()})),O||(Q&&!Sn&&!Fl?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",Ke,i._tTime/i._tDur):(Q.vars.totalProgress=Ke,Q.invalidate().restart())):i&&i.totalProgress(Ke,!!(Sn&&(te||ue)))),d){if(ue&&_&&(pe.style[_+x.os2]=ye),!V)fe(Pa(Ie+me*Ke));else if(C){if(W=!ue&&Ke>Lt&&qe+1>He&&He+1>=Wi(N,x),R)if(!ue&&(Qt||W)){var G=ur(d,!0),se=He-le;mp(d,gt,G.top+(x===tn?se:0)+en,G.left+(x===tn?0:se)+en)}else mp(d,pe);Oo(Qt||W?Re:ie),Qe&&Ke<1&&Qt||fe(Ie+(Ke===1&&!W?me:0))}}S&&!Ae.tween&&!Sn&&!Fl&&Se.restart(!0),a&&(k||v&&Ke&&(Ke<1||!Fu))&&ml(a.targets).forEach(function(Ce){return Ce.classList[Qt||v?"add":"remove"](a.className)}),o&&!O&&!ue&&o(L),C&&!Sn?(O&&(X&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(L)),(k||!Fu)&&(c&&k&&Bu(L,c),Y[bt]&&Bu(L,Y[bt]),v&&(Ke===1?L.kill(!1,1):Y[bt]=0),k||(bt=Ke===1?1:3,Y[bt]&&Bu(L,Y[bt]))),I&&!Qt&&Math.abs(L.getVelocity())>(La(I)?I:2500)&&(ga(L.callbackAnimation),Q?Q.progress(1):ga(i,_t==="reverse"?1:!Ke,1))):O&&o&&!Sn&&o(L)}if(at){var de=E?He/E.duration()*(E._caScrollDist||0):He;it(de+(T._isFlipped?1:0)),at(de)}pt&&pt(-He/E.duration()*(E._caScrollDist||0))}},L.enable=function(ue,Ve){L.enabled||(L.enabled=!0,cn(N,"resize",Ia),F||cn(N,"scroll",eo),oe&&cn(r,"refreshInit",oe),ue!==!1&&(L.progress=ce=0,H=ke=q=re()),Ve!==!1&&L.refresh())},L.getTween=function(ue){return ue&&Ae?Ae.tween:Q},L.setPositions=function(ue,Ve,Ue,He){if(E){var Vt=E.scrollTrigger,Ke=E.duration(),Lt=Vt.end-Vt.start;ue=Vt.start+Lt*ue/Ke,Ve=Vt.start+Lt*Ve/Ke}L.refresh(!1,!1,{start:op(ue,Ue&&!!L._startClamp),end:op(Ve,Ue&&!!L._endClamp)},He),L.update()},L.adjustPinSpacing=function(ue){if(De&&ue){var Ve=De.indexOf(x.d)+1;De[Ve]=parseFloat(De[Ve])+ue+en,De[1]=parseFloat(De[1])+ue+en,Oo(De)}},L.disable=function(ue,Ve){if(ue!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ve||Q&&Q.pause(),rt=0,Pe&&(Pe.uncache=1),oe&&ln(r,"refreshInit",oe),Se&&(Se.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!F)){for(var Ue=tt.length;Ue--;)if(tt[Ue].scroller===N&&tt[Ue]!==L)return;ln(N,"resize",Ia),F||ln(N,"scroll",eo)}},L.kill=function(ue,Ve){L.disable(ue,Ve),Q&&!Ve&&Q.kill(),l&&delete af[l];var Ue=tt.indexOf(L);Ue>=0&&tt.splice(Ue,1),Ue===Ln&&Ac>0&&Ln--,Ue=0,tt.forEach(function(He){return He.scroller===L.scroller&&(Ue=1)}),Ue||In||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),Ve||i.kill()),we&&[we,Ye,T,w].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),$a===L&&($a=0),d&&(Pe&&(Pe.uncache=1),Ue=0,tt.forEach(function(He){return He.pin===d&&Ue++}),Ue||(Pe.spacer=0)),n.onKill&&n.onKill(L)},tt.push(L),L.enable(!1,!1),Et&&Et(L),i&&i.add&&!Z){var et=L.update;L.update=function(){L.update=et,ot.cache++,le||qe||L.refresh()},_e.delayedCall(.01,L.update),Z=.01,le=qe=0}else L.refresh();d&&Oy()},r.register=function(n){return So||(_e=n||e0(),Q_()&&window.document&&r.enable(),So=Ca),So},r.defaults=function(n){if(n)for(var i in n)Hl[i]=n[i];return Hl},r.disable=function(n,i){Ca=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(st,"wheel",eo),ln(At,"scroll",eo),clearInterval(Ol),ln(At,"touchcancel",Oi),ln(gt,"touchstart",Oi),Bl(ln,At,"pointerdown,touchstart,mousedown",ap),Bl(ln,At,"pointerup,touchend,mouseup",lp),Kc.kill(),kl(ln);for(var s=0;s<ot.length;s+=3)zl(ln,ot[s],ot[s+1]),zl(ln,ot[s],ot[s+2])},r.enable=function(){if(st=window,At=document,Qn=At.documentElement,gt=At.body,_e&&(ml=_e.utils.toArray,Wa=_e.utils.clamp,sf=_e.core.context||Oi,Ou=_e.core.suppressOverwrites||Oi,qf=st.history.scrollRestoration||"auto",lf=st.pageYOffset||0,_e.core.globals("ScrollTrigger",r),gt)){Ca=1,Uo=document.createElement("div"),Uo.style.height="100vh",Uo.style.position="absolute",u0(),Cy(),Xt.register(_e),r.isTouch=Xt.isTouch,Pr=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rf=Xt.isTouch===1,cn(st,"wheel",eo),Xf=[st,At,Qn,gt],_e.matchMedia?(r.matchMedia=function(c){var u=_e.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},_e.addEventListener("matchMediaInit",function(){l0(),Jf()}),_e.addEventListener("matchMediaRevert",function(){return a0()}),_e.addEventListener("matchMedia",function(){As(0,1),Ws("matchMedia")}),_e.matchMedia().add("(orientation: portrait)",function(){return zu(),zu})):console.warn("Requires GSAP 3.11.0 or later"),zu(),cn(At,"scroll",eo);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,o=_e.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ur(gt),tn.m=Math.round(a.top+tn.sc())||0,On.m=Math.round(a.left+On.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Ol=setInterval(hp,250),_e.delayedCall(.5,function(){return Fl=0}),cn(At,"touchcancel",Oi),cn(gt,"touchstart",Oi),Bl(cn,At,"pointerdown,touchstart,mousedown",ap),Bl(cn,At,"pointerup,touchend,mouseup",lp),nf=_e.utils.checkPrefix("transform"),Rc.push(nf),So=Mn(),Kc=_e.delayedCall(.2,As).pause(),Mo=[At,"visibilitychange",function(){var c=st.innerWidth,u=st.innerHeight;At.hidden?(ip=c,rp=u):(ip!==c||rp!==u)&&Ia()},At,"DOMContentLoaded",As,st,"load",As,st,"resize",Ia],kl(cn),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)zl(ln,ot[l],ot[l+1]),zl(ln,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Fu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ol)||(Ol=i)&&setInterval(hp,i),"ignoreMobileResize"in n&&(rf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kl(ln)||kl(cn,n.autoRefreshEvents||"none"),$_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=ot.indexOf(s),a=Vs(s);~o&&ot.splice(o,a?6:2),i&&(a?Yi.unshift(st,i,gt,i,Qn,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Zn(n)?kn(n):n).getBoundingClientRect(),a=o[s?ks:Bs]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?ks:Bs],l=i==null?a/2:i in Zc?Zc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Gs.killAll||[];Gs={},i.forEach(function(s){return s()})}},r})();nt.version="3.14.2";nt.saveStyles=function(r){return r?ml(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),_e.core.getCache(e),sf())}}):$n};nt.revert=function(r,e){return Jf(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?Ia(!0):(So||nt.register())&&As(!0)};nt.update=function(r){return++ot.cache&&gr(r===!0?2:0)};nt.clearScrollMemory=c0;nt.maxScroll=function(r,e){return Wi(r,e?On:tn)};nt.getScrollFunc=function(r,e){return ts(kn(r),e?On:tn)};nt.getById=function(r){return af[r]};nt.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!yi};nt.snapDirectional=Zf;nt.addEventListener=function(r,e){var t=Gs[r]||(Gs[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=Gs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=_e.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&wn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return wn(s)&&(s=s(),cn(nt,"refresh",function(){return s=e.batchMax()})),ml(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var _p=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(gt,t)},Xl={auto:1,scroll:1},Hy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||_e.core.getCache(s),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xl[(l=mi(s)).overflowY]||Xl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vs(s)&&(Xl[(l=mi(s)).overflowY]||Xl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},f0=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Hy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(At,Xt.eventTypes[0],xp,!1,!0)},onDisable:function(){return ln(At,Xt.eventTypes[0],xp,!0)}})},Vy=/(input|label|select|textarea)/i,vp,xp=function(e){var t=Vy.test(e.target.tagName);(t||vp)&&(e._gsapAllow=!0,vp=t)},Gy=function(e){vs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=kn(e.target)||Qn,u=_e.core.globals().ScrollSmoother,h=u&&u.get(),f=Pr&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ts(c,tn),_=ts(c,On),g=1,p=(Xt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,M=wn(i)?function(){return i(a)}:function(){return i||2.8},v,S,R=f0(c,e.type,!0,s),A=function(){return S=!1},E=Oi,I=Oi,y=function(){l=Wi(c,tn),I=Wa(Pr?1:0,l),n&&(E=Wa(0,Wi(c,On))),v=zs},x=function(){f._gsap.y=Pa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},O=function(){if(S){requestAnimationFrame(A);var z=Pa(a.deltaY/2),j=I(d.v-z);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var L=Pa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=ot.cache,gr()}return!0}d.offset&&x(),S=!0},N,D,F,V,Y=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&_e.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Pr&&$.type==="touchmove"&&O()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=g;g=Pa((st.visualViewport&&st.visualViewport.scale||1)/p),N.pause(),$!==g&&Vu(c,g>1.01?!0:n?!1:"x"),D=_(),F=d(),y(),v=zs},e.onRelease=e.onGestureStart=function($,z){if(d.offset&&x(),!z)V.restart(!0);else{ot.cache++;var j=M(),L,oe;n&&(L=_(),oe=L+j*.05*-$.velocityX/.227,j*=_p(_,L,oe,Wi(c,On)),N.vars.scrollX=E(oe)),L=d(),oe=L+j*.05*-$.velocityY/.227,j*=_p(d,L,oe,Wi(c,tn)),N.vars.scrollY=I(oe),N.invalidate().duration(j).play(.01),(Pr&&N.vars.scrollY>=l||L>=l-1)&&_e.to({},{onUpdate:Y,duration:j})}o&&o($)},e.onWheel=function(){N._ts&&N.pause(),Mn()-m>1e3&&(v=0,m=Mn())},e.onChange=function($,z,j,L,oe){if(zs!==v&&y(),z&&n&&_(E(L[2]===z?D+($.startX-$.x):_()+z-L[1])),j){d.offset&&x();var ve=oe[2]===j,Ge=ve?F+$.startY-$.y:d()+j-oe[1],q=I(Ge);ve&&Ge!==q&&(F+=q-Ge),d(q)}(j||z)&&gr()},e.onEnable=function(){Vu(c,n?!1:"x"),nt.addEventListener("refresh",Y),cn(st,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Vu(c,!0),ln(st,"resize",Y),nt.removeEventListener("refresh",Y),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=Pr,Pr&&!d()&&d(1),Pr&&_e.ticker.add(Oi),V=a._dc,N=_e.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:h0(d,d(),function(){return N.pause()})},onUpdate:gr,onComplete:V.vars.onComplete}),a};nt.sort=function(r){if(wn(r))return tt.sort(r);var e=st.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Xt(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Xt?r:Gy(r);return Pn&&Pn.target===e.target&&Pn.kill(),Vs(e.target)&&(Pn=e),e};nt.core={_getVelocityProp:tf,_inputObserver:f0,_scrollers:ot,_proxies:Yi,bridge:{ss:function(){yi||Ws("scrollStart"),yi=Mn()},ref:function(){return Sn}}};e0()&&_e.registerPlugin(nt);const _l=new wy({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8});Fe.ticker.add(r=>{_l.raf(r*1e3)});Fe.ticker.lagSmoothing(500,33);Fe.registerPlugin(es);let Za=!1,Ai=!1,ei=null,yp=!1,Sp=null,Mp=null;const Gu=new Map,Wy=new WeakMap;function Xy(r){if(Gu.has(r))return Gu.get(r);const e=new es(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),Gu.set(r,e),e}function qy(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ai=!0,r.forEach(i=>{i.style.pointerEvents="all"}),ei&&(ei.style.pointerEvents="all"),Fe.to(ei,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),_l&&_l.stop(),r.length?Fe.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Ai=!1}}):Ai=!1,t.forEach(i=>{Fe.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=Xy(s);Fe.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),Za=!0}function Wu(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Ai=!0,r.forEach(n=>{n.style.pointerEvents="none"}),ei&&(ei.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),_l&&_l.start(),r.length?Fe.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{Fe.set(t,{opacity:0,transform:"translateY(100%)"}),ei?Fe.to(ei,{autoAlpha:0,duration:.25,onComplete:()=>{Ai=!1}}):Ai=!1}}):Ai=!1,Za=!1}function Yy(){if(yp)return;yp=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".receipt-close");ei=document.querySelector(".menu-wrap"),ei&&(ei.style.pointerEvents="none",Fe.set(ei,{autoAlpha:0}),Sp=i=>{i.target===ei&&Za&&!Ai&&Wu()},ei.addEventListener("click",Sp)),r&&(Mp=i=>{i.preventDefault(),Ai&&(Fe.killTweensOf([...e,...t]),Ai=!1),Za?Wu():qy()},r.addEventListener("click",Mp)),n.forEach(i=>{const s=o=>{o.preventDefault(),Za&&!Ai&&Wu()};i.addEventListener("click",s),Wy.set(i,s)})}const gu="163",jy=0,Tp=1,Ky=2,$y=0,d0=1,Qf=2,or=3,Ki=0,Wn=1,gi=2,_r=0,Hs=1,vl=2,wp=3,Ep=4,Zy=5,Ms=100,Jy=101,Qy=102,eS=103,tS=104,nS=200,iS=201,rS=202,sS=203,uf=204,hf=205,oS=206,aS=207,lS=208,cS=209,uS=210,hS=211,fS=212,dS=213,pS=214,mS=0,gS=1,_S=2,Jc=3,vS=4,xS=5,yS=6,SS=7,p0=0,MS=1,TS=2,Yr=0,m0=1,g0=2,_0=3,ed=4,wS=5,v0=6,x0=7,bp="attached",ES="detached",y0=300,Ko=301,$o=302,ff=303,df=304,_u=306,Zo=1e3,Bn=1001,Qc=1002,Fn=1003,S0=1004,Da=1005,rn=1006,Pc=1007,si=1008,jr=1009,bS=1010,AS=1011,M0=1012,T0=1013,Jo=1014,Xi=1015,Kr=1016,w0=1017,E0=1018,Rl=1020,RS=35902,CS=1021,PS=1022,Ri=1023,LS=1024,IS=1025,Fo=1026,xl=1027,b0=1028,A0=1029,DS=1030,R0=1031,C0=1033,Xu=33776,qu=33777,Yu=33778,ju=33779,Ap=35840,Rp=35841,Cp=35842,Pp=35843,P0=36196,Lp=37492,Ip=37496,Dp=37808,Np=37809,Up=37810,Op=37811,Fp=37812,kp=37813,Bp=37814,zp=37815,Hp=37816,Vp=37817,Gp=37818,Wp=37819,Xp=37820,qp=37821,Ku=36492,Yp=36494,jp=36495,NS=36283,Kp=36284,$p=36285,Zp=36286,yl=2300,Qo=2301,$u=2302,Jp=2400,Qp=2401,em=2402,US=2500,OS=0,L0=1,pf=2,FS=3200,kS=3201,I0=0,BS=1,Nr="",nn="srgb",is="srgb-linear",td="display-p3",vu="display-p3-linear",eu="linear",Rt="srgb",tu="rec709",nu="p3",to=7680,tm=519,zS=512,HS=513,VS=514,D0=515,GS=516,WS=517,XS=518,qS=519,mf=35044,nm="300 es",dr=2e3,iu=2001;class oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Ja=Math.PI/180,ea=180/Math.PI;function Ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function nd(r,e){return(r%e+e)%e}function YS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function jS(r,e,t){return r!==e?(t-r)/(e-r):0}function Qa(r,e,t){return(1-t)*r+t*e}function KS(r,e,t,n){return Qa(r,e,1-Math.exp(-t*n))}function $S(r,e=1){return e-Math.abs(nd(r,e*2)-e)}function ZS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function JS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function QS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function eM(r,e){return r+Math.random()*(e-r)}function tM(r){return r*(.5-Math.random())}function nM(r){r!==void 0&&(im=r);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iM(r){return r*Ja}function rM(r){return r*ea}function sM(r){return(r&r-1)===0&&r!==0}function oM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function aM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lc={DEG2RAD:Ja,RAD2DEG:ea,generateUUID:Ci,clamp:dn,euclideanModulo:nd,mapLinear:YS,inverseLerp:jS,lerp:Qa,damp:KS,pingpong:$S,smoothstep:ZS,smootherstep:JS,randInt:QS,randFloat:eM,randFloatSpread:tM,seededRandom:nM,degToRad:iM,radToDeg:rM,isPowerOfTwo:sM,ceilPowerOfTwo:oM,floorPowerOfTwo:aM,setQuaternionFromProperEuler:lM,normalize:xt,denormalize:bi};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],v=i[4],S=i[7],R=i[2],A=i[5],E=i[8];return s[0]=o*g+a*M+l*R,s[3]=o*p+a*v+l*A,s[6]=o*m+a*S+l*E,s[1]=c*g+u*M+h*R,s[4]=c*p+u*v+h*A,s[7]=c*m+u*S+h*E,s[2]=f*g+d*M+_*R,s[5]=f*p+d*v+_*A,s[8]=f*m+d*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new Ze;function N0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cM(){const r=Sl("canvas");return r.style.display="block",r}const rm={};function U0(r){r in rm||(rm[r]=!0,console.warn(r))}const sm=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[is]:{transfer:eu,primaries:tu,toReference:r=>r,fromReference:r=>r},[nn]:{transfer:Rt,primaries:tu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vu]:{transfer:eu,primaries:nu,toReference:r=>r.applyMatrix3(om),fromReference:r=>r.applyMatrix3(sm)},[td]:{transfer:Rt,primaries:nu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(om),fromReference:r=>r.applyMatrix3(sm).convertLinearToSRGB()}},uM=new Set([is,vu]),St={enabled:!0,_workingColorSpace:is,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!uM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ql[e].toReference,i=ql[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ql[r].primaries},getTransfer:function(r){return r===Nr?eu:ql[r].transfer}};function ko(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ju(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class hM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{no===void 0&&(no=Sl("canvas")),no.width=e.width,no.height=e.height;const n=no.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=no}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ko(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ko(t[n]/255)*255):t[n]=ko(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fM=0;class O0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qu(i[o].image)):s.push(Qu(i[o]))}else s=Qu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dM=0;class Jt extends oa{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Bn,i=Bn,s=rn,o=si,a=Ri,l=jr,c=Jt.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ci(),this.name="",this.source=new O0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=y0;Jt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,R=(m+1)/2,A=(u+f)/4,E=(h+g)/4,I=(_+p)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=I/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends oa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new O0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends pM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class F0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mM extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,m*M);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*M;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(am.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new B,am=new rs;class Di{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),jl.subVectors(this.max,_a),io.subVectors(e.a,_a),ro.subVectors(e.b,_a),so.subVectors(e.c,_a),Tr.subVectors(ro,io),wr.subVectors(so,ro),ls.subVectors(io,so);let t=[0,-Tr.z,Tr.y,0,-wr.z,wr.y,0,-ls.z,ls.y,Tr.z,0,-Tr.x,wr.z,0,-wr.x,ls.z,0,-ls.x,-Tr.y,Tr.x,0,-wr.y,wr.x,0,-ls.y,ls.x,0];return!th(t,io,ro,so,jl)||(t=[1,0,0,0,1,0,0,0,1],!th(t,io,ro,so,jl))?!1:(Kl.crossVectors(Tr,wr),t=[Kl.x,Kl.y,Kl.z],th(t,io,ro,so,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new B,new B,new B,new B,new B,new B,new B,new B],Mi=new B,Yl=new Di,io=new B,ro=new B,so=new B,Tr=new B,wr=new B,ls=new B,_a=new B,jl=new B,Kl=new B,cs=new B;function th(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cs.fromArray(r,s);const a=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gM=new Di,va=new B,nh=new B;class Zi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(nh)),this.expandByPoint(va.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const er=new B,ih=new B,$l=new B,Er=new B,rh=new B,Zl=new B,sh=new B;class Cl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ih.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(ih);const s=e.distanceTo(t)*.5,o=-this.direction.dot($l),a=Er.dot(this.direction),l=-Er.dot($l),c=Er.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ih).addScaledVector($l,f),d}intersectSphere(e,t){er.subVectors(e.center,this.origin);const n=er.dot(this.direction),i=er.dot(er)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,n,i,s){rh.subVectors(t,e),Zl.subVectors(n,e),sh.crossVectors(rh,Zl);let o=this.direction.dot(sh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const l=a*this.direction.dot(Zl.crossVectors(Er,Zl));if(l<0)return null;const c=a*this.direction.dot(rh.cross(Er));if(c<0||l+c>o)return null;const u=-a*Er.dot(sh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_M,e,vM)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),br.crossVectors(n,Yn),br.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),br.crossVectors(n,Yn)),br.normalize(),Jl.crossVectors(Yn,br),i[0]=br.x,i[4]=Jl.x,i[8]=Yn.x,i[1]=br.y,i[5]=Jl.y,i[9]=Yn.y,i[2]=br.z,i[6]=Jl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],v=n[7],S=n[11],R=n[15],A=i[0],E=i[4],I=i[8],y=i[12],x=i[1],O=i[5],N=i[9],D=i[13],F=i[2],V=i[6],Y=i[10],$=i[14],z=i[3],j=i[7],L=i[11],oe=i[15];return s[0]=o*A+a*x+l*F+c*z,s[4]=o*E+a*O+l*V+c*j,s[8]=o*I+a*N+l*Y+c*L,s[12]=o*y+a*D+l*$+c*oe,s[1]=u*A+h*x+f*F+d*z,s[5]=u*E+h*O+f*V+d*j,s[9]=u*I+h*N+f*Y+d*L,s[13]=u*y+h*D+f*$+d*oe,s[2]=_*A+g*x+p*F+m*z,s[6]=_*E+g*O+p*V+m*j,s[10]=_*I+g*N+p*Y+m*L,s[14]=_*y+g*D+p*$+m*oe,s[3]=M*A+v*x+S*F+R*z,s[7]=M*E+v*O+S*V+R*j,s[11]=M*I+v*N+S*Y+R*L,s[15]=M*y+v*D+S*$+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,S=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,A=t*M+n*v+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=M*E,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*E,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=v*E,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*E,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=S*E,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*E,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=R*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,v=l*u,S=l*h,R=n.x,A=n.y,E=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-v)*R,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+v)*E,i[9]=(p-M)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=oo.set(i[0],i[1],i[2]).length();const o=oo.set(i[4],i[5],i[6]).length(),a=oo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ti.copy(this);const c=1/s,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=dr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===dr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===iu)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=dr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===dr)_=(o+s)*h,g=-2*h;else if(a===iu)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oo=new B,Ti=new je,_M=new B(0,0,0),vM=new B(1,1,1),br=new B,Jl=new B,Yn=new B,lm=new je,cm=new rs;class $i{constructor(e=0,t=0,n=0,i=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xM=0;const um=new B,ao=new rs,tr=new je,Ql=new B,xa=new B,yM=new B,SM=new rs,hm=new B(1,0,0),fm=new B(0,1,0),dm=new B(0,0,1),pm={type:"added"},MM={type:"removed"},lo={type:"childadded",child:null},oh={type:"childremoved",child:null};class zt extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new B,t=new $i,n=new rs,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,t){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ql.copy(e):Ql.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(xa,Ql,this.up):tr.lookAt(Ql,xa,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(tr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(MM),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new B(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new B,nr=new B,ah=new B,ir=new B,co=new B,uo=new B,mm=new B,lh=new B,ch=new B,uh=new B;class Hi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),nr.subVectors(n,t),ah.subVectors(e,t);const o=wi.dot(wi),a=wi.dot(nr),l=wi.dot(ah),c=nr.dot(nr),u=nr.dot(ah),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),nr.subVectors(e,t),wi.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),wi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;co.subVectors(i,n),uo.subVectors(s,n),lh.subVectors(e,n);const l=co.dot(lh),c=uo.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,i);const u=co.dot(ch),h=uo.dot(ch);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(co,o);uh.subVectors(e,s);const d=co.dot(uh),_=uo.dot(uh);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(uo,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return mm.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(mm,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},ec={h:0,s:0,l:0};function hh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=nd(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hh(o,s,e+1/3),this.g=hh(o,s,e),this.b=hh(o,s,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=k0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return St.fromWorkingColorSpace(yn.copy(this),e),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,s=yn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=nn){St.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(ec);const n=Qa(Ar.h,ec.h,t),i=Qa(Ar.s,ec.s,t),s=Qa(Ar.l,ec.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Ne;Ne.NAMES=k0;let TM=0;class Li extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uf&&(n.blendSrc=this.blendSrc),this.blendDst!==hf&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pr extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=wM();function wM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function EM(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=dn(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function bM(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const UC={toHalfFloat:EM,fromHalfFloat:bM},Yt=new B,tc=new be;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return U0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class B0 extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class z0 extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let AM=0;const hi=new je,fh=new zt,ho=new B,jn=new Di,ya=new Di,an=new B;class qn extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?z0:B0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(jn.min,ya.min),jn.expandByPoint(an),an.addVectors(jn.max,ya.max),jn.expandByPoint(an)):(jn.expandByPoint(ya.min),jn.expandByPoint(ya.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),an.add(ho)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const c=new B,u=new B,h=new B,f=new be,d=new be,_=new be,g=new B,p=new B;function m(I,y,x){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(O),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(O),a[I].add(g),a[y].add(g),a[x].add(g),l[I].add(p),l[y].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,y=M.length;I<y;++I){const x=M[I],O=x.start,N=x.count;for(let D=O,F=O+N;D<F;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new B,S=new B,R=new B,A=new B;function E(I){R.fromBufferAttribute(i,I),A.copy(R);const y=a[I];v.copy(y),v.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(A,y);const O=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,O)}for(let I=0,y=M.length;I<y;++I){const x=M[I],O=x.start,N=x.count;for(let D=O,F=O+N;D<F;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new je,us=new Cl,nc=new Zi,_m=new B,fo=new B,po=new B,mo=new B,dh=new B,ic=new B,rc=new be,sc=new be,oc=new be,vm=new B,xm=new B,ym=new B,ac=new B,lc=new B;class un extends zt{constructor(e=new qn,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(dh.fromBufferAttribute(h,e),o?ic.addScaledVector(dh,u):ic.addScaledVector(dh.sub(t),u))}t.add(ic)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),us.copy(e.ray).recast(e.near),!(nc.containsPoint(us.origin)===!1&&(us.intersectSphere(nc,_m)===null||us.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(gm.copy(s).invert(),us.copy(e.ray).applyMatrix4(gm),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=v;S<R;S+=3){const A=a.getX(S),E=a.getX(S+1),I=a.getX(S+2);i=cc(this,m,e,n,c,u,h,A,E,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=cc(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,R=v;S<R;S+=3){const A=S,E=S+1,I=S+2;i=cc(this,m,e,n,c,u,h,A,E,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=p,v=p+1,S=p+2;i=cc(this,o,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function RM(r,e,t,n,i,s,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ki,a),l===null)return null;lc.copy(a),lc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(lc);return c<t.near||c>t.far?null:{distance:c,point:lc.clone(),object:r}}function cc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,fo),r.getVertexPosition(l,po),r.getVertexPosition(c,mo);const u=RM(r,e,t,n,fo,po,mo,ac);if(u){i&&(rc.fromBufferAttribute(i,a),sc.fromBufferAttribute(i,l),oc.fromBufferAttribute(i,c),u.uv=Hi.getInterpolation(ac,fo,po,mo,rc,sc,oc,new be)),s&&(rc.fromBufferAttribute(s,a),sc.fromBufferAttribute(s,l),oc.fromBufferAttribute(s,c),u.uv1=Hi.getInterpolation(ac,fo,po,mo,rc,sc,oc,new be)),o&&(vm.fromBufferAttribute(o,a),xm.fromBufferAttribute(o,l),ym.fromBufferAttribute(o,c),u.normal=Hi.getInterpolation(ac,fo,po,mo,vm,xm,ym,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Hi.getNormal(fo,po,mo,h.normal),u.face=h}return u}class Pl extends qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(h,2));function _(g,p,m,M,v,S,R,A,E,I,y){const x=S/E,O=R/I,N=S/2,D=R/2,F=A/2,V=E+1,Y=I+1;let $=0,z=0;const j=new B;for(let L=0;L<Y;L++){const oe=L*O-D;for(let ve=0;ve<V;ve++){const Ge=ve*x-N;j[g]=Ge*M,j[p]=oe*v,j[m]=F,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(ve/E),h.push(1-L/I),$+=1}}for(let L=0;L<I;L++)for(let oe=0;oe<E;oe++){const ve=f+oe+V*L,Ge=f+oe+V*(L+1),q=f+(oe+1)+V*(L+1),te=f+(oe+1)+V*L;l.push(ve,Ge,te),l.push(Ge,q,te),z+=6}a.addGroup(d,z,y),d+=z,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=ta(r[t]);for(const i in n)e[i]=n[i]}return e}function CM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function H0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Ml={clone:ta,merge:Cn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class V0 extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new B,Sm=new be,Mm=new be;class pn extends V0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Sm,Mm),t.subVectors(Mm,Sm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,_o=1;class IM extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(go,_o,e,t);i.layers=this.layers,this.add(i);const s=new pn(go,_o,e,t);s.layers=this.layers,this.add(s);const o=new pn(go,_o,e,t);o.layers=this.layers,this.add(o);const a=new pn(go,_o,e,t);a.layers=this.layers,this.add(a);const l=new pn(go,_o,e,t);l.layers=this.layers,this.add(l);const c=new pn(go,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===iu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class G0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ko,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DM extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new G0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pl(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:_r});s.uniforms.tEquirect.value=t;const o=new un(i,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=rn),new IM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ph=new B,NM=new B,UM=new Ze;class xs{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ph.subVectors(n,t).cross(NM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ph),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||UM.getNormalMatrix(e),i=this.coplanarPoint(ph).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Zi,uc=new B;class rd{constructor(e=new xs,t=new xs,n=new xs,i=new xs,s=new xs,o=new xs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+o,f+u,p+_,S+M).normalize(),n[3].setComponents(l-o,f-u,p-_,S-M).normalize(),n[4].setComponents(l-a,f-h,p-g,S-v).normalize(),t===dr)n[5].setComponents(l+a,f+h,p+g,S+v).normalize();else if(t===iu)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(uc.x=i.normal.x>0?e.max.x:e.min.x,uc.y=i.normal.y>0?e.max.y:e.min.y,uc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function OM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Ys extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-M,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),R=M+1+c*(m+1),A=M+1+c*m;d.push(v,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
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
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
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
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$M=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oT=`#define PI 3.141592653589793
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
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lT=`vec3 transformedNormal = objectNormal;
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
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`
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
}`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wT=`#ifdef USE_GRADIENTMAP
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
}`,ET=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
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
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
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
#endif`,OT=`struct PhysicalMaterial {
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
}`,FT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
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
#endif`,QT=`#ifdef USE_MORPHTARGETS
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
#endif`,ew=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
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
#endif`,aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mw=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Fw=`varying vec2 vUv;
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
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
}`,Ww=`#if DEPTH_PACKING == 3200
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
}`,Xw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define MATCAP
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
}`,nE=`#define MATCAP
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
}`,iE=`#define NORMAL
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
}`,rE=`#define NORMAL
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
}`,sE=`#define PHONG
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
}`,oE=`#define PHONG
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
}`,aE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
}`,cE=`#define TOON
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
}`,uE=`#define TOON
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
}`,hE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,pE=`uniform vec3 color;
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
}`,mE=`uniform float rotation;
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
}`,gE=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:FM,alphahash_pars_fragment:kM,alphamap_fragment:BM,alphamap_pars_fragment:zM,alphatest_fragment:HM,alphatest_pars_fragment:VM,aomap_fragment:GM,aomap_pars_fragment:WM,batching_pars_vertex:XM,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:jM,bsdfs:KM,iridescence_fragment:$M,bumpmap_pars_fragment:ZM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:sT,common:oT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:lT,displacementmap_pars_vertex:cT,displacementmap_vertex:uT,emissivemap_fragment:hT,emissivemap_pars_fragment:fT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:_T,envmap_pars_vertex:vT,envmap_physical_pars_fragment:PT,envmap_vertex:xT,fog_vertex:yT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:TT,gradientmap_pars_fragment:wT,lightmap_fragment:ET,lightmap_pars_fragment:bT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:LT,lights_toon_pars_fragment:IT,lights_phong_fragment:DT,lights_phong_pars_fragment:NT,lights_physical_fragment:UT,lights_physical_pars_fragment:OT,lights_fragment_begin:FT,lights_fragment_maps:kT,lights_fragment_end:BT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:GT,map_fragment:WT,map_pars_fragment:XT,map_particle_fragment:qT,map_particle_pars_fragment:YT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:KT,morphinstance_vertex:$T,morphcolor_vertex:ZT,morphnormal_vertex:JT,morphtarget_pars_vertex:QT,morphtarget_vertex:ew,normal_fragment_begin:tw,normal_fragment_maps:nw,normal_pars_fragment:iw,normal_pars_vertex:rw,normal_vertex:sw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:aw,clearcoat_normal_fragment_maps:lw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:uw,opaque_fragment:hw,packing:fw,premultiplied_alpha_fragment:dw,project_vertex:pw,dithering_fragment:mw,dithering_pars_fragment:gw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:yw,shadowmap_vertex:Sw,shadowmask_pars_fragment:Mw,skinbase_vertex:Tw,skinning_pars_vertex:ww,skinning_vertex:Ew,skinnormal_vertex:bw,specularmap_fragment:Aw,specularmap_pars_fragment:Rw,tonemapping_fragment:Cw,tonemapping_pars_fragment:Pw,transmission_fragment:Lw,transmission_pars_fragment:Iw,uv_pars_fragment:Dw,uv_pars_vertex:Nw,uv_vertex:Uw,worldpos_vertex:Ow,background_vert:Fw,background_frag:kw,backgroundCube_vert:Bw,backgroundCube_frag:zw,cube_vert:Hw,cube_frag:Vw,depth_vert:Gw,depth_frag:Ww,distanceRGBA_vert:Xw,distanceRGBA_frag:qw,equirect_vert:Yw,equirect_frag:jw,linedashed_vert:Kw,linedashed_frag:$w,meshbasic_vert:Zw,meshbasic_frag:Jw,meshlambert_vert:Qw,meshlambert_frag:eE,meshmatcap_vert:tE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:oE,meshphysical_vert:aE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:uE,points_vert:hE,points_frag:fE,shadow_vert:dE,shadow_frag:pE,sprite_vert:mE,sprite_frag:gE},he={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ki={basic:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Cn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Cn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Cn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Cn([he.points,he.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Cn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Cn([he.common,he.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Cn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Cn([he.sprite,he.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Cn([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Cn([he.lights,he.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ki.physical={uniforms:Cn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const hc={r:0,b:0,g:0},fs=new $i,_E=new je;function vE(r,e,t,n,i,s,o){const a=new Ne(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_u)?(u===void 0&&(u=new un(new Pl(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ta(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),fs.copy(m.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(fs)),u.material.toneMapped=St.getTransfer(v.colorSpace)!==Rt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new un(new Ys(2,2),new hn({name:"BackgroundMaterial",uniforms:ta(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=St.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(hc,H0(r)),n.buffers.color.setClear(hc.r,hc.g,hc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function xE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,O,N,D,F){let V=!1;const Y=h(D,N,O);s!==Y&&(s=Y,c(s.object)),V=d(x,D,N,F),V&&_(x,D,N,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(x,O,N,D),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,O,N){const D=N.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let V=F[O.id];V===void 0&&(V={},F[O.id]=V);let Y=V[D];return Y===void 0&&(Y=f(l()),V[D]=Y),Y}function f(x){const O=[],N=[],D=[];for(let F=0;F<t;F++)O[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,O,N,D){const F=s.attributes,V=O.attributes;let Y=0;const $=N.getAttributes();for(const z in $)if($[z].location>=0){const L=F[z];let oe=V[z];if(oe===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),L===void 0||L.attribute!==oe||oe&&L.data!==oe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==D}function _(x,O,N,D){const F={},V=O.attributes;let Y=0;const $=N.getAttributes();for(const z in $)if($[z].location>=0){let L=V[z];L===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const oe={};oe.attribute=L,L&&L.data&&(oe.data=L.data),F[z]=oe,Y++}s.attributes=F,s.attributesNum=Y,s.index=D}function g(){const x=s.newAttributes;for(let O=0,N=x.length;O<N;O++)x[O]=0}function p(x){m(x,0)}function m(x,O){const N=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;N[x]=1,D[x]===0&&(r.enableVertexAttribArray(x),D[x]=1),F[x]!==O&&(r.vertexAttribDivisor(x,O),F[x]=O)}function M(){const x=s.newAttributes,O=s.enabledAttributes;for(let N=0,D=O.length;N<D;N++)O[N]!==x[N]&&(r.disableVertexAttribArray(N),O[N]=0)}function v(x,O,N,D,F,V,Y){Y===!0?r.vertexAttribIPointer(x,O,N,F,V):r.vertexAttribPointer(x,O,N,D,F,V)}function S(x,O,N,D){g();const F=D.attributes,V=N.getAttributes(),Y=O.defaultAttributeValues;for(const $ in V){const z=V[$];if(z.location>=0){let j=F[$];if(j===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const L=j.normalized,oe=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const Ge=ve.buffer,q=ve.type,te=ve.bytesPerElement,ce=q===r.INT||q===r.UNSIGNED_INT||j.gpuType===T0;if(j.isInterleavedBufferAttribute){const re=j.data,Ae=re.stride,Pe=j.offset;if(re.isInstancedInterleavedBuffer){for(let Xe=0;Xe<z.locationSize;Xe++)m(z.location+Xe,re.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Xe=0;Xe<z.locationSize;Xe++)p(z.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Xe=0;Xe<z.locationSize;Xe++)v(z.location+Xe,oe/z.locationSize,q,L,Ae*te,(Pe+oe/z.locationSize*Xe)*te,ce)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)m(z.location+re,j.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<z.locationSize;re++)p(z.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let re=0;re<z.locationSize;re++)v(z.location+re,oe/z.locationSize,q,L,oe*te,oe/z.locationSize*re*te,ce)}}else if(Y!==void 0){const L=Y[$];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(z.location,L);break;case 3:r.vertexAttrib3fv(z.location,L);break;case 4:r.vertexAttrib4fv(z.location,L);break;default:r.vertexAttrib1fv(z.location,L)}}}}M()}function R(){I();for(const x in n){const O=n[x];for(const N in O){const D=O[N];for(const F in D)u(D[F].object),delete D[F];delete O[N]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const O=n[x.id];for(const N in O){const D=O[N];for(const F in D)u(D[F].object),delete D[F];delete O[N]}delete n[x.id]}function E(x){for(const O in n){const N=n[O];if(N[x.id]===void 0)continue;const D=N[x.id];for(const F in D)u(D[F].object),delete D[F];delete N[x.id]}}function I(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function yE(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function SE(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:m,maxSamples:M}}function ME(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new xs,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,v=M*4;let S=m.clippingState||null;l.value=S,S=u(_,f,v,d);for(let R=0;R!==v;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==g;++v,S+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function TE(r){let e=new WeakMap;function t(o,a){return a===ff?o.mapping=Ko:a===df&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ff||a===df)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new DM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xu extends V0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ao=4,Tm=[.125,.215,.35,.446,.526,.582],Ts=20,mh=new xu,wm=new Ne;let gh=null,_h=0,vh=0,xh=!1;const ys=(1+Math.sqrt(5))/2,vo=1/ys,Em=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ys,vo),new B(0,ys,-vo),new B(vo,0,ys),new B(-vo,0,ys),new B(ys,vo,0),new B(-ys,vo,0)];class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ko||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Kr,format:Ri,colorSpace:is,depthBuffer:!1},i=bm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(s)),this._blurMaterial=EE(s,e,t)}return i}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,mh)}_sceneToCubeUV(e,t,n,i){const a=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wm),u.toneMapping=Yr,u.autoClear=!1;const d=new pr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new un(new Pl,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(wm),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;fc(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ko||e.mapping===$o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Em[(i-1)%Em.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new un(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ts;p>Ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ts}`);const m=[];let M=0;for(let E=0;E<Ts;++E){const I=E/g,y=Math.exp(-I*I/2);m.push(y),E===0?M+=y:E<p&&(M+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-Ao?i-v+Ao:0),A=4*(this._cubeSize-S);fc(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,mh)}}function wE(r){const e=[],t=[],n=[];let i=r;const s=r-Ao+1+Tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ao?l=Tm[o-r+Ao-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),v=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,I=A>2?0:-1,y=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(y,g*_*A),v.set(f,p*_*A);const x=[A,A,A,A,A,A];S.set(x,m*_*A)}const R=new qn;R.setAttribute("position",new Ot(M,g)),R.setAttribute("uv",new Ot(v,p)),R.setAttribute("faceIndex",new Ot(S,m)),e.push(R),i>Ao&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bm(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=_u,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function EE(r,e,t){const n=new Float32Array(Ts),i=new B(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Am(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Rm(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function bE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ff||l===df,u=l===Ko||l===$o;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new gf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function AE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function RE(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,S=M.length;v<S;v+=3){const R=M[v+0],A=M[v+1],E=M[v+2];f.push(R,A,A,E,E,R)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const R=v+0,A=v+1,E=v+2;f.push(R,A,A,E,E,R)}}else return;const p=new(N0(f)?z0:B0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function CE(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(h[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function PE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function LE(r,e,t){const n=new WeakMap,i=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*R*4*h),E=new F0(A,S,R,h);E.type=Xi,E.needsUpdate=!0;const I=v*4;for(let x=0;x<h;x++){const O=p[x],N=m[x],D=M[x],F=S*R*4*x;for(let V=0;V<O.count;V++){const Y=V*I;d===!0&&(i.fromBufferAttribute(O,V),A[F+Y+0]=i.x,A[F+Y+1]=i.y,A[F+Y+2]=i.z,A[F+Y+3]=0),_===!0&&(i.fromBufferAttribute(N,V),A[F+Y+4]=i.x,A[F+Y+5]=i.y,A[F+Y+6]=i.z,A[F+Y+7]=0),g===!0&&(i.fromBufferAttribute(D,V),A[F+Y+8]=i.x,A[F+Y+9]=i.y,A[F+Y+10]=i.z,A[F+Y+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new be(S,R)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function IE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class X0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Fo,u!==Fo&&u!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fo&&(n=Jo),n===void 0&&u===xl&&(n=Rl),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const q0=new Jt,Y0=new X0(1,1);Y0.compareFunction=D0;const j0=new F0,K0=new mM,$0=new G0,Cm=[],Pm=[],Lm=new Float32Array(16),Im=new Float32Array(9),Dm=new Float32Array(4);function aa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cm[i];if(s===void 0&&(s=new Float32Array(i),Cm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yu(r,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function DE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function NE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function UE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function OE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function FE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Dm.set(n),r.uniformMatrix2fv(this.addr,!1,Dm),on(t,n)}}function kE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Im.set(n),r.uniformMatrix3fv(this.addr,!1,Im),on(t,n)}}function BE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Lm.set(n),r.uniformMatrix4fv(this.addr,!1,Lm),on(t,n)}}function zE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function GE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function WE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function jE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Y0:q0;t.setTexture2D(e||s,i)}function KE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||K0,i)}function $E(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$0,i)}function ZE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||j0,i)}function JE(r){switch(r){case 5126:return DE;case 35664:return NE;case 35665:return UE;case 35666:return OE;case 35674:return FE;case 35675:return kE;case 35676:return BE;case 5124:case 35670:return zE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return XE;case 36295:return qE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return ZE}}function QE(r,e){r.uniform1fv(this.addr,e)}function eb(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function tb(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function nb(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function ib(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rb(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sb(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ob(r,e){r.uniform1iv(this.addr,e)}function ab(r,e){r.uniform2iv(this.addr,e)}function lb(r,e){r.uniform3iv(this.addr,e)}function cb(r,e){r.uniform4iv(this.addr,e)}function ub(r,e){r.uniform1uiv(this.addr,e)}function hb(r,e){r.uniform2uiv(this.addr,e)}function fb(r,e){r.uniform3uiv(this.addr,e)}function db(r,e){r.uniform4uiv(this.addr,e)}function pb(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||q0,s[o])}function mb(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||K0,s[o])}function gb(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$0,s[o])}function _b(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||j0,s[o])}function vb(r){switch(r){case 5126:return QE;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return hb;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}class xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JE(t.type)}}class yb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vb(t.type)}}class Sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function Nm(r,e){r.seq.push(e),r.map[e.id]=e}function Mb(r,e,t){const n=r.name,i=n.length;for(yh.lastIndex=0;;){const s=yh.exec(n),o=yh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nm(t,c===void 0?new xb(a,r,e):new yb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Sb(a),Nm(t,h)),t=h}}}class Ic{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Mb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Um(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Tb=37297;let wb=0;function Eb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bb(r){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(r);let n;switch(e===t?n="":e===nu&&t===tu?n="LinearDisplayP3ToLinearSRGB":e===tu&&t===nu&&(n="LinearSRGBToLinearDisplayP3"),r){case is:case vu:return[n,"LinearTransferOETF"];case nn:case td:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Om(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Eb(r.getShaderSource(e),o)}else return i}function Ab(r,e){const t=bb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rb(r,e){let t;switch(e){case m0:t="Linear";break;case g0:t="Reinhard";break;case _0:t="OptimizedCineon";break;case ed:t="ACESFilmic";break;case v0:t="AgX";break;case x0:t="Neutral";break;case wS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function Pb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Na(r){return r!==""}function Fm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(r){return r.replace(Ib,Nb)}const Db=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nb(r,e){let t=$e[e];if(t===void 0){const n=Db.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _f(t)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(r){return r.replace(Ub,Ob)}function Ob(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Fb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ko:case $o:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===$o&&(e="ENVMAP_MODE_REFRACTION"),e}function zb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case MS:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function Hb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fb(t),c=kb(t),u=Bb(t),h=zb(t),f=Hb(t),d=Cb(t),_=Pb(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),m.length>0&&(m+=`
`)):(p=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),m=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?$e.tonemapping_pars_fragment:"",t.toneMapping!==Yr?Rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Ab("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=_f(o),o=Fm(o,t),o=km(o,t),a=_f(a),a=Fm(a,t),a=km(a,t),o=Bm(o),a=Bm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,S=M+m+a,R=Um(i,i.VERTEX_SHADER,v),A=Um(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(O){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(A).trim();let V=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const $=Om(i,R,"vertex"),z=Om(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+$+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(Y=!1);Y&&(O.diagnostics={runnable:V,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(R),i.deleteShader(A),I=new Ic(i,g),y=Lb(i,g)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,Tb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let Gb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xb(e),t.set(e,n)),n}}class Xb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function qb(r,e,t,n,i,s,o){const a=new id,l=new Wb,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,O,N,D){const F=N.fog,V=D.geometry,Y=y.isMeshStandardMaterial?N.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),z=$&&$.mapping===_u?$.image.height:null,j=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=L!==void 0?L.length:0;let ve=0;V.morphAttributes.position!==void 0&&(ve=1),V.morphAttributes.normal!==void 0&&(ve=2),V.morphAttributes.color!==void 0&&(ve=3);let Ge,q,te,ce;if(j){const Et=ki[j];Ge=Et.vertexShader,q=Et.fragmentShader}else Ge=y.vertexShader,q=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const re=r.getRenderTarget(),Ae=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,Xe=!!y.map,H=!!y.matcap,ke=!!$,le=!!y.aoMap,qe=!!y.lightMap,we=!!y.bumpMap,Ye=!!y.normalMap,T=!!y.displacementMap,w=!!y.emissiveMap,K=!!y.metalnessMap,J=!!y.roughnessMap,Z=y.anisotropy>0,ee=y.clearcoat>0,Re=y.iridescence>0,ie=y.sheen>0,pe=y.transmission>0,Le=Z&&!!y.anisotropyMap,ne=ee&&!!y.clearcoatMap,fe=ee&&!!y.clearcoatNormalMap,Ie=ee&&!!y.clearcoatRoughnessMap,me=Re&&!!y.iridescenceMap,ye=Re&&!!y.iridescenceThicknessMap,De=ie&&!!y.sheenColorMap,it=ie&&!!y.sheenRoughnessMap,Qe=!!y.specularMap,at=!!y.specularColorMap,ft=!!y.specularIntensityMap,xe=pe&&!!y.transmissionMap,U=pe&&!!y.thicknessMap,Q=!!y.gradientMap,ae=!!y.alphaMap,ge=y.alphaTest>0,Se=!!y.alphaHash,rt=!!y.extensions;let ht=Yr;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=r.toneMapping);const pt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:q,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pe,instancing:Ae,instancingColor:Ae&&D.instanceColor!==null,instancingMorph:Ae&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:is,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:H,envMap:ke,envMapMode:ke&&$.mapping,envMapCubeUVHeight:z,aoMap:le,lightMap:qe,bumpMap:we,normalMap:Ye,displacementMap:f&&T,emissiveMap:w,normalMapObjectSpace:Ye&&y.normalMapType===BS,normalMapTangentSpace:Ye&&y.normalMapType===I0,metalnessMap:K,roughnessMap:J,anisotropy:Z,anisotropyMap:Le,clearcoat:ee,clearcoatMap:ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ie,iridescence:Re,iridescenceMap:me,iridescenceThicknessMap:ye,sheen:ie,sheenColorMap:De,sheenRoughnessMap:it,specularMap:Qe,specularColorMap:at,specularIntensityMap:ft,transmission:pe,transmissionMap:xe,thicknessMap:U,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:ge,alphaHash:Se,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:le&&g(y.aoMap.channel),lightMapUv:qe&&g(y.lightMap.channel),bumpMapUv:we&&g(y.bumpMap.channel),normalMapUv:Ye&&g(y.normalMap.channel),displacementMapUv:T&&g(y.displacementMap.channel),emissiveMapUv:w&&g(y.emissiveMap.channel),metalnessMapUv:K&&g(y.metalnessMap.channel),roughnessMapUv:J&&g(y.roughnessMap.channel),anisotropyMapUv:Le&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:it&&g(y.sheenRoughnessMap.channel),specularMapUv:Qe&&g(y.specularMap.channel),specularColorMapUv:at&&g(y.specularColorMap.channel),specularIntensityMapUv:ft&&g(y.specularIntensityMap.channel),transmissionMapUv:xe&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:ae&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ye||Z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Xe||ae),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ve,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===Wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)x.push(O),x.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(M(x,y),v(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){const x=_[y.type];let O;if(x){const N=ki[x];O=Ml.clone(N.uniforms)}else O=y.uniforms;return O}function R(y,x){let O;for(let N=0,D=u.length;N<D;N++){const F=u[N];if(F.cacheKey===x){O=F,++O.usedTimes;break}}return O===void 0&&(O=new Vb(r,x,y,s),u.push(O)),O}function A(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:I}}function Yb(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function jb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||jb),n.length>1&&n.sort(f||Hm),i.length>1&&i.sort(f||Hm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Kb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vm,r.set(n,[o])):i>=s.length?(o=new Vm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function $b(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Zb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Jb=0;function Qb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eA(r){const e=new $b,t=Zb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new je,o=new je;function a(c,u){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let _=0,g=0,p=0,m=0,M=0,v=0,S=0,R=0,A=0,E=0,I=0;c.sort(Qb);const y=u===!0?Math.PI:1;for(let O=0,N=c.length;O<N;O++){const D=c[O],F=D.color,V=D.intensity,Y=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*V*y,f+=F.g*V*y,d+=F.b*V*y;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],V);I++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const j=D.shadow,L=t.get(D);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,n.directionalShadow[_]=L,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=D.shadow.matrix,v++}n.directional[_]=z,_++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(F).multiplyScalar(V*y),z.distance=Y,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[p]=z;const j=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,j.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[p]=j.matrix,D.castShadow){const L=t.get(D);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,n.spotShadow[p]=L,n.spotShadowMap[p]=$,R++}p++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(F).multiplyScalar(V),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),z.distance=D.distance,z.decay=D.decay,D.castShadow){const j=D.shadow,L=t.get(D);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(V*y),z.groundColor.copy(D.groundColor).multiplyScalar(V*y),n.hemi[M]=z,M++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==_||x.pointLength!==g||x.spotLength!==p||x.rectAreaLength!==m||x.hemiLength!==M||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==R||x.numSpotMaps!==A||x.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=R+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,x.directionalLength=_,x.pointLength=g,x.spotLength=p,x.rectAreaLength=m,x.hemiLength=M,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=R,x.numSpotMaps=A,x.numLightProbes=I,n.version=Jb++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Gm(r){const e=new eA(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tA(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Gm(r),e.set(i,[a])):s>=o.length?(a=new Gm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class nA extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iA extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
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
}`;function oA(r,e,t){let n=new rd;const i=new be,s=new be,o=new wt,a=new nA({depthPacking:kS}),l=new iA,c={},u=t.maxTextureSize,h={[Ki]:Wn,[Wn]:Ki,[gi]:gi},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new un(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let m=this.type;this.render=function(A,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),N=r.state;N.setBlending(_r),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==or&&this.type===or,F=m===or&&this.type!==or;for(let V=0,Y=A.length;V<Y;V++){const $=A[V],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const j=z.getFrameExtents();if(i.multiply(j),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||D===!0||F===!0){const oe=this.type!==or?{minFilter:Fn,magFilter:Fn}:{};z.map!==null&&z.map.dispose(),z.map=new Pi(i.x,i.y,oe),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const L=z.getViewportCount();for(let oe=0;oe<L;oe++){const ve=z.getViewport(oe);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),N.viewport(o),z.updateMatrices($,oe),n=z.getFrustum(),S(E,I,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===or&&M(z,I),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,x,O)};function M(A,E){const I=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,I,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,I,d,g,null)}function v(A,E,I,y){let x=null;const O=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)x=O;else if(x=I.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=x.uuid,D=E.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let V=F[D];V===void 0&&(V=x.clone(),F[D]=V,E.addEventListener("dispose",R)),x=V}if(x.visible=E.visible,x.wireframe=E.wireframe,y===or?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=r.properties.get(x);N.light=I}return x}function S(A,E,I,y,x){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===or)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const D=e.update(A),F=A.material;if(Array.isArray(F)){const V=D.groups;for(let Y=0,$=V.length;Y<$;Y++){const z=V[Y],j=F[z.materialIndex];if(j&&j.visible){const L=v(A,j,y,x);A.onBeforeShadow(r,A,E,I,D,L,z),r.renderBufferDirect(I,null,D,L,A,z),A.onAfterShadow(r,A,E,I,D,L,z)}}}else if(F.visible){const V=v(A,F,y,x);A.onBeforeShadow(r,A,E,I,D,V,null),r.renderBufferDirect(I,null,D,V,A,null),A.onAfterShadow(r,A,E,I,D,V,null)}}const N=A.children;for(let D=0,F=N.length;D<F;D++)S(N[D],E,I,y,x)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const y=c[I],x=A.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function aA(r){function e(){let U=!1;const Q=new wt;let ae=null;const ge=new wt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!U&&(r.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){U=Se},setClear:function(Se,rt,ht,pt,Et){Et===!0&&(Se*=pt,rt*=pt,ht*=pt),Q.set(Se,rt,ht,pt),ge.equals(Q)===!1&&(r.clearColor(Se,rt,ht,pt),ge.copy(Q))},reset:function(){U=!1,ae=null,ge.set(-1,0,0,0)}}}function t(){let U=!1,Q=null,ae=null,ge=null;return{setTest:function(Se){Se?ce(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(Se){Q!==Se&&!U&&(r.depthMask(Se),Q=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case mS:r.depthFunc(r.NEVER);break;case gS:r.depthFunc(r.ALWAYS);break;case _S:r.depthFunc(r.LESS);break;case Jc:r.depthFunc(r.LEQUAL);break;case vS:r.depthFunc(r.EQUAL);break;case xS:r.depthFunc(r.GEQUAL);break;case yS:r.depthFunc(r.GREATER);break;case SS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Se}},setLocked:function(Se){U=Se},setClear:function(Se){ge!==Se&&(r.clearDepth(Se),ge=Se)},reset:function(){U=!1,Q=null,ae=null,ge=null}}}function n(){let U=!1,Q=null,ae=null,ge=null,Se=null,rt=null,ht=null,pt=null,Et=null;return{setTest:function(dt){U||(dt?ce(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(dt){Q!==dt&&!U&&(r.stencilMask(dt),Q=dt)},setFunc:function(dt,Oe,Te){(ae!==dt||ge!==Oe||Se!==Te)&&(r.stencilFunc(dt,Oe,Te),ae=dt,ge=Oe,Se=Te)},setOp:function(dt,Oe,Te){(rt!==dt||ht!==Oe||pt!==Te)&&(r.stencilOp(dt,Oe,Te),rt=dt,ht=Oe,pt=Te)},setLocked:function(dt){U=dt},setClear:function(dt){Et!==dt&&(r.clearStencil(dt),Et=dt)},reset:function(){U=!1,Q=null,ae=null,ge=null,Se=null,rt=null,ht=null,pt=null,Et=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,R=null,A=new Ne(0,0,0),E=0,I=!1,y=null,x=null,O=null,N=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Y>=2);let z=null,j={};const L=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ve=new wt().fromArray(L),Ge=new wt().fromArray(oe);function q(U,Q,ae,ge){const Se=new Uint8Array(4),rt=r.createTexture();r.bindTexture(U,rt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<ae;ht++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(Q+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return rt}const te={};te[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),s.setFunc(Jc),we(!1),Ye(Tp),ce(r.CULL_FACE),le(_r);function ce(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function re(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function Ae(U,Q){return u[U]!==Q?(r.bindFramebuffer(U,Q),u[U]=Q,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Q),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(U,Q){let ae=f,ge=!1;if(U){ae=h.get(Q),ae===void 0&&(ae=[],h.set(Q,ae));const Se=U.textures;if(ae.length!==Se.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,ht=Se.length;rt<ht;rt++)ae[rt]=r.COLOR_ATTACHMENT0+rt;ae.length=Se.length,ge=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ae)}function Xe(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const H={[Ms]:r.FUNC_ADD,[Jy]:r.FUNC_SUBTRACT,[Qy]:r.FUNC_REVERSE_SUBTRACT};H[eS]=r.MIN,H[tS]=r.MAX;const ke={[nS]:r.ZERO,[iS]:r.ONE,[rS]:r.SRC_COLOR,[uf]:r.SRC_ALPHA,[uS]:r.SRC_ALPHA_SATURATE,[lS]:r.DST_COLOR,[oS]:r.DST_ALPHA,[sS]:r.ONE_MINUS_SRC_COLOR,[hf]:r.ONE_MINUS_SRC_ALPHA,[cS]:r.ONE_MINUS_DST_COLOR,[aS]:r.ONE_MINUS_DST_ALPHA,[hS]:r.CONSTANT_COLOR,[fS]:r.ONE_MINUS_CONSTANT_COLOR,[dS]:r.CONSTANT_ALPHA,[pS]:r.ONE_MINUS_CONSTANT_ALPHA};function le(U,Q,ae,ge,Se,rt,ht,pt,Et,dt){if(U===_r){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(ce(r.BLEND),_=!0),U!==Zy){if(U!==g||dt!==I){if((p!==Ms||v!==Ms)&&(r.blendEquation(r.FUNC_ADD),p=Ms,v=Ms),dt)switch(U){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vl:r.blendFunc(r.ONE,r.ONE);break;case wp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ep:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ep:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,M=null,S=null,R=null,A.set(0,0,0),E=0,g=U,I=dt}return}Se=Se||Q,rt=rt||ae,ht=ht||ge,(Q!==p||Se!==v)&&(r.blendEquationSeparate(H[Q],H[Se]),p=Q,v=Se),(ae!==m||ge!==M||rt!==S||ht!==R)&&(r.blendFuncSeparate(ke[ae],ke[ge],ke[rt],ke[ht]),m=ae,M=ge,S=rt,R=ht),(pt.equals(A)===!1||Et!==E)&&(r.blendColor(pt.r,pt.g,pt.b,Et),A.copy(pt),E=Et),g=U,I=!1}function qe(U,Q){U.side===gi?re(r.CULL_FACE):ce(r.CULL_FACE);let ae=U.side===Wn;Q&&(ae=!ae),we(ae),U.blending===Hs&&U.transparent===!1?le(_r):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),w(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function Ye(U){U!==jy?(ce(r.CULL_FACE),U!==x&&(U===Tp?r.cullFace(r.BACK):U===Ky?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),x=U}function T(U){U!==O&&(V&&r.lineWidth(U),O=U)}function w(U,Q,ae){U?(ce(r.POLYGON_OFFSET_FILL),(N!==Q||D!==ae)&&(r.polygonOffset(Q,ae),N=Q,D=ae)):re(r.POLYGON_OFFSET_FILL)}function K(U){U?ce(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function J(U){U===void 0&&(U=r.TEXTURE0+F-1),z!==U&&(r.activeTexture(U),z=U)}function Z(U,Q,ae){ae===void 0&&(z===null?ae=r.TEXTURE0+F-1:ae=z);let ge=j[ae];ge===void 0&&(ge={type:void 0,texture:void 0},j[ae]=ge),(ge.type!==U||ge.texture!==Q)&&(z!==ae&&(r.activeTexture(ae),z=ae),r.bindTexture(U,Q||te[U]),ge.type=U,ge.texture=Q)}function ee(){const U=j[z];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(U){ve.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}function Qe(U){Ge.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function at(U,Q){let ae=l.get(Q);ae===void 0&&(ae=new WeakMap,l.set(Q,ae));let ge=ae.get(U);ge===void 0&&(ge=r.getUniformBlockIndex(Q,U.name),ae.set(U,ge))}function ft(U,Q){const ge=l.get(Q).get(U);a.get(Q)!==ge&&(r.uniformBlockBinding(Q,ge,U.__bindingPointIndex),a.set(Q,ge))}function xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,j={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,R=null,A=new Ne(0,0,0),E=0,I=!1,y=null,x=null,O=null,N=null,D=null,ve.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ce,disable:re,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:Xe,setBlending:le,setMaterial:qe,setFlipSided:we,setCullFace:Ye,setLineWidth:T,setPolygonOffset:w,setScissorTest:K,activeTexture:J,bindTexture:Z,unbindTexture:ee,compressedTexImage2D:Re,compressedTexImage3D:ie,texImage2D:ye,texImage3D:De,updateUBOMapping:at,uniformBlockBinding:ft,texStorage2D:Ie,texStorage3D:me,texSubImage2D:pe,texSubImage3D:Le,compressedTexSubImage2D:ne,compressedTexSubImage3D:fe,scissor:it,viewport:Qe,reset:xe}}function lA(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,w){return d?new OffscreenCanvas(T,w):Sl("canvas")}function g(T,w,K){let J=1;const Z=Ye(T);if((Z.width>K||Z.height>K)&&(J=K/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ee=Math.floor(J*Z.width),Re=Math.floor(J*Z.height);h===void 0&&(h=_(ee,Re));const ie=w?_(ee,Re):h;return ie.width=ee,ie.height=Re,ie.getContext("2d").drawImage(T,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+Re+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Fn&&T.minFilter!==rn}function m(T){r.generateMipmap(T)}function M(T,w,K,J,Z=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=w;if(w===r.RED&&(K===r.FLOAT&&(ee=r.R32F),K===r.HALF_FLOAT&&(ee=r.R16F),K===r.UNSIGNED_BYTE&&(ee=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.R8UI),K===r.UNSIGNED_SHORT&&(ee=r.R16UI),K===r.UNSIGNED_INT&&(ee=r.R32UI),K===r.BYTE&&(ee=r.R8I),K===r.SHORT&&(ee=r.R16I),K===r.INT&&(ee=r.R32I)),w===r.RG&&(K===r.FLOAT&&(ee=r.RG32F),K===r.HALF_FLOAT&&(ee=r.RG16F),K===r.UNSIGNED_BYTE&&(ee=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ee=r.RG8UI),K===r.UNSIGNED_SHORT&&(ee=r.RG16UI),K===r.UNSIGNED_INT&&(ee=r.RG32UI),K===r.BYTE&&(ee=r.RG8I),K===r.SHORT&&(ee=r.RG16I),K===r.INT&&(ee=r.RG32I)),w===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),w===r.RGBA){const Re=Z?eu:St.getTransfer(J);K===r.FLOAT&&(ee=r.RGBA32F),K===r.HALF_FLOAT&&(ee=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ee=Re===Rt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(T,w){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fn&&T.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function S(T){const w=T.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&u.delete(w)}function R(T){const w=T.target;w.removeEventListener("dispose",R),I(w)}function A(T){const w=n.get(T);if(w.__webglInit===void 0)return;const K=T.source,J=f.get(K);if(J){const Z=J[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(J).length===0&&f.delete(K)}n.remove(T)}function E(T){const w=n.get(T);r.deleteTexture(w.__webglTexture);const K=T.source,J=f.get(K);delete J[w.__cacheKey],o.memory.textures--}function I(T){const w=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Z=0;Z<w.__webglFramebuffer[J].length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[J][Z]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=T.textures;for(let J=0,Z=K.length;J<Z;J++){const ee=n.get(K[J]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(K[J])}n.remove(T)}let y=0;function x(){y=0}function O(){const T=y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),y+=1,T}function N(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function D(T,w){const K=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&K.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(K,T,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function F(T,w){const K=n.get(T);if(T.version>0&&K.__version!==T.version){ve(K,T,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function V(T,w){const K=n.get(T);if(T.version>0&&K.__version!==T.version){ve(K,T,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function Y(T,w){const K=n.get(T);if(T.version>0&&K.__version!==T.version){Ge(K,T,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const $={[Zo]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},z={[Fn]:r.NEAREST,[S0]:r.NEAREST_MIPMAP_NEAREST,[Da]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Pc]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},j={[zS]:r.NEVER,[qS]:r.ALWAYS,[HS]:r.LESS,[D0]:r.LEQUAL,[VS]:r.EQUAL,[XS]:r.GEQUAL,[GS]:r.GREATER,[WS]:r.NOTEQUAL};function L(T,w){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===Pc||w.magFilter===Da||w.magFilter===si||w.minFilter===rn||w.minFilter===Pc||w.minFilter===Da||w.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,$[w.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,$[w.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,$[w.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,z[w.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,z[w.minFilter]),w.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fn||w.minFilter!==Da&&w.minFilter!==si||w.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function oe(T,w){let K=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",S));const J=w.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const ee=N(w);if(ee!==T.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Z[ee].usedTimes++;const Re=Z[T.__cacheKey];Re!==void 0&&(Z[T.__cacheKey].usedTimes--,Re.usedTimes===0&&E(w)),T.__cacheKey=ee,T.__webglTexture=Z[ee].texture}return K}function ve(T,w,K){let J=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=r.TEXTURE_3D);const Z=oe(T,w),ee=w.source;t.bindTexture(J,T.__webglTexture,r.TEXTURE0+K);const Re=n.get(ee);if(ee.version!==Re.__version||Z===!0){t.activeTexture(r.TEXTURE0+K);const ie=St.getPrimaries(St.workingColorSpace),pe=w.colorSpace===Nr?null:St.getPrimaries(w.colorSpace),Le=w.colorSpace===Nr||ie===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=g(w.image,!1,i.maxTextureSize);ne=we(w,ne);const fe=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type);let me=M(w.internalFormat,fe,Ie,w.colorSpace,w.isVideoTexture);L(J,w);let ye;const De=w.mipmaps,it=w.isVideoTexture!==!0&&me!==P0,Qe=Re.__version===void 0||Z===!0,at=ee.dataReady,ft=v(w,ne);if(w.isDepthTexture)me=r.DEPTH_COMPONENT16,w.type===Xi?me=r.DEPTH_COMPONENT32F:w.type===Jo?me=r.DEPTH_COMPONENT24:w.type===Rl&&(me=r.DEPTH24_STENCIL8),Qe&&(it?t.texStorage2D(r.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,me,ne.width,ne.height,0,fe,Ie,null));else if(w.isDataTexture)if(De.length>0){it&&Qe&&t.texStorage2D(r.TEXTURE_2D,ft,me,De[0].width,De[0].height);for(let xe=0,U=De.length;xe<U;xe++)ye=De[xe],it?at&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,ye.width,ye.height,fe,Ie,ye.data):t.texImage2D(r.TEXTURE_2D,xe,me,ye.width,ye.height,0,fe,Ie,ye.data);w.generateMipmaps=!1}else it?(Qe&&t.texStorage2D(r.TEXTURE_2D,ft,me,ne.width,ne.height),at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,fe,Ie,ne.data)):t.texImage2D(r.TEXTURE_2D,0,me,ne.width,ne.height,0,fe,Ie,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,me,De[0].width,De[0].height,ne.depth);for(let xe=0,U=De.length;xe<U;xe++)ye=De[xe],w.format!==Ri?fe!==null?it?at&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,ye.width,ye.height,ne.depth,fe,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,me,ye.width,ye.height,ne.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,ye.width,ye.height,ne.depth,fe,Ie,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,me,ye.width,ye.height,ne.depth,0,fe,Ie,ye.data)}else{it&&Qe&&t.texStorage2D(r.TEXTURE_2D,ft,me,De[0].width,De[0].height);for(let xe=0,U=De.length;xe<U;xe++)ye=De[xe],w.format!==Ri?fe!==null?it?at&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?at&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,ye.width,ye.height,fe,Ie,ye.data):t.texImage2D(r.TEXTURE_2D,xe,me,ye.width,ye.height,0,fe,Ie,ye.data)}else if(w.isDataArrayTexture)it?(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,me,ne.width,ne.height,ne.depth),at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(w.isData3DTexture)it?(Qe&&t.texStorage3D(r.TEXTURE_3D,ft,me,ne.width,ne.height,ne.depth),at&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ie,ne.data)):t.texImage3D(r.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,fe,Ie,ne.data);else if(w.isFramebufferTexture){if(Qe)if(it)t.texStorage2D(r.TEXTURE_2D,ft,me,ne.width,ne.height);else{let xe=ne.width,U=ne.height;for(let Q=0;Q<ft;Q++)t.texImage2D(r.TEXTURE_2D,Q,me,xe,U,0,fe,Ie,null),xe>>=1,U>>=1}}else if(De.length>0){if(it&&Qe){const xe=Ye(De[0]);t.texStorage2D(r.TEXTURE_2D,ft,me,xe.width,xe.height)}for(let xe=0,U=De.length;xe<U;xe++)ye=De[xe],it?at&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,fe,Ie,ye):t.texImage2D(r.TEXTURE_2D,xe,me,fe,Ie,ye);w.generateMipmaps=!1}else if(it){if(Qe){const xe=Ye(ne);t.texStorage2D(r.TEXTURE_2D,ft,me,xe.width,xe.height)}at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ie,ne)}else t.texImage2D(r.TEXTURE_2D,0,me,fe,Ie,ne);p(w)&&m(J),Re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ge(T,w,K){if(w.image.length!==6)return;const J=oe(T,w),Z=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+K);const ee=n.get(Z);if(Z.version!==ee.__version||J===!0){t.activeTexture(r.TEXTURE0+K);const Re=St.getPrimaries(St.workingColorSpace),ie=w.colorSpace===Nr?null:St.getPrimaries(w.colorSpace),pe=w.colorSpace===Nr||Re===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let U=0;U<6;U++)!Le&&!ne?fe[U]=g(w.image[U],!0,i.maxCubemapSize):fe[U]=ne?w.image[U].image:w.image[U],fe[U]=we(w,fe[U]);const Ie=fe[0],me=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),De=M(w.internalFormat,me,ye,w.colorSpace),it=w.isVideoTexture!==!0,Qe=ee.__version===void 0||J===!0,at=Z.dataReady;let ft=v(w,Ie);L(r.TEXTURE_CUBE_MAP,w);let xe;if(Le){it&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,De,Ie.width,Ie.height);for(let U=0;U<6;U++){xe=fe[U].mipmaps;for(let Q=0;Q<xe.length;Q++){const ae=xe[Q];w.format!==Ri?me!==null?it?at&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,0,0,ae.width,ae.height,me,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,De,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,0,0,ae.width,ae.height,me,ye,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q,De,ae.width,ae.height,0,me,ye,ae.data)}}}else{if(xe=w.mipmaps,it&&Qe){xe.length>0&&ft++;const U=Ye(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,De,U.width,U.height)}for(let U=0;U<6;U++)if(ne){it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,fe[U].width,fe[U].height,me,ye,fe[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,De,fe[U].width,fe[U].height,0,me,ye,fe[U].data);for(let Q=0;Q<xe.length;Q++){const ge=xe[Q].image[U].image;it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,0,0,ge.width,ge.height,me,ye,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,De,ge.width,ge.height,0,me,ye,ge.data)}}else{it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,me,ye,fe[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,De,me,ye,fe[U]);for(let Q=0;Q<xe.length;Q++){const ae=xe[Q];it?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,0,0,me,ye,ae.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Q+1,De,me,ye,ae.image[U])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),ee.__version=Z.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function q(T,w,K,J,Z,ee){const Re=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),pe=M(K.internalFormat,Re,ie,K.colorSpace);if(!n.get(w).__hasExternalTextures){const ne=Math.max(1,w.width>>ee),fe=Math.max(1,w.height>>ee);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,pe,ne,fe,w.depth,0,Re,ie,null):t.texImage2D(Z,ee,pe,ne,fe,0,Re,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),le(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Z,n.get(K).__webglTexture,0,ke(w)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Z,n.get(K).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(T,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let J=r.DEPTH_COMPONENT24;if(K||le(w)){const Z=w.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Xi?J=r.DEPTH_COMPONENT32F:Z.type===Jo&&(J=r.DEPTH_COMPONENT24));const ee=ke(w);le(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,J,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,J,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const J=ke(w);K&&le(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):le(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const J=w.textures;for(let Z=0;Z<J.length;Z++){const ee=J[Z],Re=s.convert(ee.format,ee.colorSpace),ie=s.convert(ee.type),pe=M(ee.internalFormat,Re,ie,ee.colorSpace),Le=ke(w);K&&le(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,pe,w.width,w.height):le(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,pe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture,Z=ke(w);if(w.depthTexture.format===Fo)le(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===xl)le(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function re(T){const w=n.get(T),K=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,T)}else if(K){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=r.createRenderbuffer(),te(w.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),te(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(T,w,K){const J=n.get(T);w!==void 0&&q(J.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&re(T)}function Pe(T){const w=T.texture,K=n.get(T),J=n.get(w);T.addEventListener("dispose",R);const Z=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Re=Z.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=w.version,o.memory.textures++),ee){K.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[ie]=[];for(let pe=0;pe<w.mipmaps.length;pe++)K.__webglFramebuffer[ie][pe]=r.createFramebuffer()}else K.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)K.__webglFramebuffer[ie]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Re)for(let ie=0,pe=Z.length;ie<pe;ie++){const Le=n.get(Z[ie]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&le(T)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const pe=Z[ie];K.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ie]);const Le=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),fe=M(pe.internalFormat,Le,ne,pe.colorSpace,T.isXRRenderTarget===!0),Ie=ke(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,K.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),te(K.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),L(r.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)q(K.__webglFramebuffer[ie][pe],T,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else q(K.__webglFramebuffer[ie],T,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ie=0,pe=Z.length;ie<pe;ie++){const Le=Z[ie],ne=n.get(Le);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),L(r.TEXTURE_2D,Le),q(K.__webglFramebuffer,T,Le,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),p(Le)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),L(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)q(K.__webglFramebuffer[pe],T,w,r.COLOR_ATTACHMENT0,ie,pe);else q(K.__webglFramebuffer,T,w,r.COLOR_ATTACHMENT0,ie,0);p(w)&&m(ie),t.unbindTexture()}T.depthBuffer&&re(T)}function Xe(T){const w=T.textures;for(let K=0,J=w.length;K<J;K++){const Z=w[K];if(p(Z)){const ee=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Re=n.get(Z).__webglTexture;t.bindTexture(ee,Re),m(ee),t.unbindTexture()}}}function H(T){if(T.samples>0&&le(T)===!1){const w=T.textures,K=T.width,J=T.height;let Z=r.COLOR_BUFFER_BIT;const ee=[],Re=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(T),pe=w.length>1;if(pe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){ee.push(r.COLOR_ATTACHMENT0+Le),T.depthBuffer&&ee.push(Re);const ne=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ne===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&ie.__isTransmissionRenderTarget!==!0&&(Z|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Le]),ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Re]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Re])),pe){const fe=n.get(w[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,K,J,0,0,K,J,Z,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Le]);const ne=n.get(w[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function ke(T){return Math.min(i.maxSamples,T.samples)}function le(T){const w=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(T){const w=o.render.frame;u.get(T)!==w&&(u.set(T,w),T.update())}function we(T,w){const K=T.colorSpace,J=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||K!==is&&K!==Nr&&(St.getTransfer(K)===Rt?(J!==Ri||Z!==jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=q,this.useMultisampledRTT=le}function cA(r,e){function t(n,i=Nr){let s;const o=St.getTransfer(i);if(n===jr)return r.UNSIGNED_BYTE;if(n===w0)return r.UNSIGNED_SHORT_4_4_4_4;if(n===E0)return r.UNSIGNED_SHORT_5_5_5_1;if(n===RS)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bS)return r.BYTE;if(n===AS)return r.SHORT;if(n===M0)return r.UNSIGNED_SHORT;if(n===T0)return r.INT;if(n===Jo)return r.UNSIGNED_INT;if(n===Xi)return r.FLOAT;if(n===Kr)return r.HALF_FLOAT;if(n===CS)return r.ALPHA;if(n===PS)return r.RGB;if(n===Ri)return r.RGBA;if(n===LS)return r.LUMINANCE;if(n===IS)return r.LUMINANCE_ALPHA;if(n===Fo)return r.DEPTH_COMPONENT;if(n===xl)return r.DEPTH_STENCIL;if(n===b0)return r.RED;if(n===A0)return r.RED_INTEGER;if(n===DS)return r.RG;if(n===R0)return r.RG_INTEGER;if(n===C0)return r.RGBA_INTEGER;if(n===Xu||n===qu||n===Yu||n===ju)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ju)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ju)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ap||n===Rp||n===Cp||n===Pp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ap)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===P0)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Lp||n===Ip)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lp)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ip)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dp||n===Np||n===Up||n===Op||n===Fp||n===kp||n===Bp||n===zp||n===Hp||n===Vp||n===Gp||n===Wp||n===Xp||n===qp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Np)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Up)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Op)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qp)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ku||n===Yp||n===jp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ku)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===NS||n===Kp||n===$p||n===Zp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ku)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$p)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class uA extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
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

}`;class pA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new hn({vertexShader:fA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new Ys(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class mA extends oa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new pA,p=t.getContextAttributes();let m=null,M=null;const v=[],S=[],R=new be;let A=null;const E=new pn;E.layers.enable(1),E.viewport=new wt;const I=new pn;I.layers.enable(2),I.viewport=new wt;const y=[E,I],x=new uA;x.layers.enable(1),x.layers.enable(2);let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=v[q];return te===void 0&&(te=new Sh,v[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=v[q];return te===void 0&&(te=new Sh,v[q]=te),te.getGripSpace()},this.getHand=function(q){let te=v[q];return te===void 0&&(te=new Sh,v[q]=te),te.getHandSpace()};function D(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const ce=v[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){const te=S[q];te!==null&&(S[q]=null,v[q].disconnect(te))}O=null,N=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Pi(d.framebufferWidth,d.framebufferHeight,{format:Ri,type:jr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ce=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?xl:Fo,ce=p.stencil?Rl:Jo);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Pi(f.textureWidth,f.textureHeight,{format:Ri,type:jr,depthTexture:new X0(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Pe=e.properties.get(M);Pe.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(q){for(let te=0;te<q.removed.length;te++){const ce=q.removed[te],re=S.indexOf(ce);re>=0&&(S[re]=null,v[re].disconnect(ce))}for(let te=0;te<q.added.length;te++){const ce=q.added[te];let re=S.indexOf(ce);if(re===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(ce),re=Pe;break}else if(S[Pe]===null){S[Pe]=ce,re=Pe;break}if(re===-1)break}const Ae=v[re];Ae&&Ae.connect(ce)}}const Y=new B,$=new B;function z(q,te,ce){Y.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const re=Y.distanceTo($),Ae=te.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,Xe=Ae[14]/(Ae[10]-1),H=Ae[14]/(Ae[10]+1),ke=(Ae[9]+1)/Ae[5],le=(Ae[9]-1)/Ae[5],qe=(Ae[8]-1)/Ae[0],we=(Pe[8]+1)/Pe[0],Ye=Xe*qe,T=Xe*we,w=re/(-qe+we),K=w*-qe;te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(K),q.translateZ(w),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const J=Xe+w,Z=H+w,ee=Ye-K,Re=T+(re-K),ie=ke*H/Z*J,pe=le*H/Z*J;q.projectionMatrix.makePerspective(ee,Re,ie,pe,J,Z),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),x.near=I.near=E.near=q.near,x.far=I.far=E.far=q.far,(O!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),O=x.near,N=x.far,E.near=O,E.far=N,I.near=O,I.far=N,E.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const te=q.parent,ce=x.cameras;j(x,te);for(let re=0;re<ce.length;re++)j(ce[re],te);ce.length===2?z(x,E,I):x.projectionMatrix.copy(E.projectionMatrix),L(q,x,te)};function L(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ea*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null};let oe=null;function ve(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let re=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Pe=0;Pe<ce.length;Pe++){const Xe=ce[Pe];let H=null;if(d!==null)H=d.getViewport(Xe);else{const le=h.getViewSubImage(f,Xe);H=le.viewport,Pe===0&&(e.setRenderTargetTextures(M,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(M))}let ke=y[Pe];ke===void 0&&(ke=new pn,ke.layers.enable(Pe),ke.viewport=new wt,y[Pe]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(H.x,H.y,H.width,H.height),Pe===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(ke)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=h.getDepthInformation(ce[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let ce=0;ce<v.length;ce++){const re=S[ce],Ae=v[ce];re!==null&&Ae!==void 0&&Ae.update(re,te,c||o)}g.render(e,x),oe&&oe(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ge=new W0;Ge.setAnimationLoop(ve),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const ds=new $i,gA=new je;function _A(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,H0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,S=M.envMapRotation;if(v&&(p.envMap.value=v,ds.copy(S),ds.x*=-1,ds.y*=-1,ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),p.envMapRotation.value.setFromMatrix4(gA.makeRotationFromEuler(ds)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vA(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const v=h();M.__bindingPointIndex=v;const S=r.createBuffer(),R=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=S.length;A<E;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,x=I.length;y<x;y++){const O=I[y];if(d(O,A,y,R)===!0){const N=O.__offset,D=Array.isArray(O.value)?O.value:[O.value];let F=0;for(let V=0;V<D.length;V++){const Y=D[V],$=g(Y);typeof Y=="number"||typeof Y=="boolean"?(O.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,N+F,O.__data)):Y.isMatrix3?(O.__data[0]=Y.elements[0],O.__data[1]=Y.elements[1],O.__data[2]=Y.elements[2],O.__data[3]=0,O.__data[4]=Y.elements[3],O.__data[5]=Y.elements[4],O.__data[6]=Y.elements[5],O.__data[7]=0,O.__data[8]=Y.elements[6],O.__data[9]=Y.elements[7],O.__data[10]=Y.elements[8],O.__data[11]=0):(Y.toArray(O.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,S,R){const A=M.value,E=v+"_"+S;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const I=R[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(M){const v=M.uniforms;let S=0;const R=16;for(let E=0,I=v.length;E<I;E++){const y=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,O=y.length;x<O;x++){const N=y[x],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,V=D.length;F<V;F++){const Y=D[F],$=g(Y),z=S%R;z!==0&&R-z<$.boundary&&(S+=R-z),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=$.storage}}}const A=S%R;return A>0&&(S+=R-A),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Z0{constructor(e={}){const{canvas:t=cM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=Yr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,E=null,I=-1,y=null;const x=new wt,O=new wt;let N=null;const D=new Ne(0);let F=0,V=t.width,Y=t.height,$=1,z=null,j=null;const L=new wt(0,0,V,Y),oe=new wt(0,0,V,Y);let ve=!1;const Ge=new rd;let q=!1,te=!1;const ce=new je,re=new be,Ae=new B,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return E===null?$:1}let H=n;function ke(C,k){const W=t.getContext(C,k);return W!==null?W:null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ge,!1),H===null){const k="webgl2";if(H=ke(k,C),H===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let le,qe,we,Ye,T,w,K,J,Z,ee,Re,ie,pe,Le,ne,fe,Ie,me,ye,De,it,Qe,at,ft;function xe(){le=new AE(H),le.init(),qe=new SE(H,le,e),Qe=new cA(H,le),we=new aA(H),Ye=new PE(H),T=new Yb,w=new lA(H,le,we,T,qe,Qe,Ye),K=new TE(v),J=new bE(v),Z=new OM(H),at=new xE(H,Z),ee=new RE(H,Z,Ye,at),Re=new IE(H,ee,Z,Ye),ye=new LE(H,qe,w),fe=new ME(T),ie=new qb(v,K,J,le,qe,at,fe),pe=new _A(v,T),Le=new Kb,ne=new tA(le),me=new vE(v,K,J,we,Re,f,l),Ie=new oA(v,Re,qe),ft=new vA(H,Ye,qe,we),De=new yE(H,le,Ye),it=new CE(H,le,Ye),Ye.programs=ie.programs,v.capabilities=qe,v.extensions=le,v.properties=T,v.renderLists=Le,v.shadowMap=Ie,v.state=we,v.info=Ye}xe();const U=new mA(v,H);this.xr=U,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(V,Y,!1))},this.getSize=function(C){return C.set(V,Y)},this.setSize=function(C,k,W=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,Y=k,t.width=Math.floor(C*$),t.height=Math.floor(k*$),W===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(V*$,Y*$).floor()},this.setDrawingBufferSize=function(C,k,W){V=C,Y=k,$=W,t.width=Math.floor(C*W),t.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,k,W,X){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,k,W,X),we.viewport(x.copy(L).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,k,W,X){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,k,W,X),we.scissor(O.copy(oe).multiplyScalar($).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){we.setScissorTest(ve=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,k=!0,W=!0){let X=0;if(C){let G=!1;if(E!==null){const se=E.texture.format;G=se===C0||se===R0||se===A0}if(G){const se=E.texture.type,de=se===jr||se===Jo||se===M0||se===Rl||se===w0||se===E0,Ce=me.getClearColor(),ze=me.getClearAlpha(),Ee=Ce.r,Me=Ce.g,Be=Ce.b;de?(d[0]=Ee,d[1]=Me,d[2]=Be,d[3]=ze,H.clearBufferuiv(H.COLOR,0,d)):(_[0]=Ee,_[1]=Me,_[2]=Be,_[3]=ze,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}k&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Le.dispose(),ne.dispose(),T.dispose(),K.dispose(),J.dispose(),Re.dispose(),at.dispose(),ft.dispose(),ie.dispose(),U.dispose(),U.removeEventListener("sessionstart",Oe),U.removeEventListener("sessionend",Te),et.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Ye.autoReset,k=Ie.enabled,W=Ie.autoUpdate,X=Ie.needsUpdate,G=Ie.type;xe(),Ye.autoReset=C,Ie.enabled=k,Ie.autoUpdate=W,Ie.needsUpdate=X,Ie.type=G}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Se(C){const k=C.target;k.removeEventListener("dispose",Se),rt(k)}function rt(C){ht(C),T.remove(C)}function ht(C){const k=T.get(C).programs;k!==void 0&&(k.forEach(function(W){ie.releaseProgram(W)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,X,G,se){k===null&&(k=Pe);const de=G.isMesh&&G.matrixWorld.determinant()<0,Ce=It(C,k,W,X,G);we.setMaterial(X,de);let ze=W.index,Ee=1;if(X.wireframe===!0){if(ze=ee.getWireframeAttribute(W),ze===void 0)return;Ee=2}const Me=W.drawRange,Be=W.attributes.position;let Pt=Me.start*Ee,_n=(Me.start+Me.count)*Ee;se!==null&&(Pt=Math.max(Pt,se.start*Ee),_n=Math.min(_n,(se.start+se.count)*Ee)),ze!==null?(Pt=Math.max(Pt,0),_n=Math.min(_n,ze.count)):Be!=null&&(Pt=Math.max(Pt,0),_n=Math.min(_n,Be.count));const Dt=_n-Pt;if(Dt<0||Dt===1/0)return;at.setup(G,X,Ce,W,ze);let qt,vt=De;if(ze!==null&&(qt=Z.get(ze),vt=it,vt.setIndex(qt)),G.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Xe()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(G.isLine){let We=X.linewidth;We===void 0&&(We=1),we.setLineWidth(We*Xe()),G.isLineSegments?vt.setMode(H.LINES):G.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else G.isPoints?vt.setMode(H.POINTS):G.isSprite&&vt.setMode(H.TRIANGLES);if(G.isBatchedMesh)vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)vt.renderInstances(Pt,Dt,G.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ci=Math.min(W.instanceCount,We);vt.renderInstances(Pt,Dt,ci)}else vt.render(Pt,Dt)};function pt(C,k,W){C.transparent===!0&&C.side===gi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ke(C,k,W),C.side=Ki,C.needsUpdate=!0,Ke(C,k,W),C.side=gi):Ke(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),p=ne.get(W),p.init(),M.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),C!==W&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const X=new Set;return C.traverse(function(G){const se=G.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const Ce=se[de];pt(Ce,W,G),X.add(Ce)}else pt(se,W,G),X.add(se)}),M.pop(),p=null,X},this.compileAsync=function(C,k,W=null){const X=this.compile(C,k,W);return new Promise(G=>{function se(){if(X.forEach(function(de){T.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){G(C);return}setTimeout(se,10)}le.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Et=null;function dt(C){Et&&Et(C)}function Oe(){et.stop()}function Te(){et.start()}const et=new W0;et.setAnimationLoop(dt),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(C){Et=C,U.setAnimationLoop(C),C===null?et.stop():et.start()},U.addEventListener("sessionstart",Oe),U.addEventListener("sessionend",Te),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,E),p=ne.get(C,M.length),p.init(),M.push(p),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ge.setFromProjectionMatrix(ce),te=this.localClippingEnabled,q=fe.init(this.clippingPlanes,te),g=Le.get(C,m.length),g.init(),m.push(g),ue(C,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(z,j),this.info.render.frame++,q===!0&&fe.beginShadows();const W=p.state.shadowsArray;if(Ie.render(W,C,k),q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1)&&me.render(g,C),p.setupLights(v._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let G=0,se=X.length;G<se;G++){const de=X[G];Ve(g,C,de,de.viewport)}}else Ve(g,C,k);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,k),at.resetDefaultState(),I=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ue(C,k,W,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){X&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const de=Re.update(C),Ce=C.material;Ce.visible&&g.push(C,de,Ce,W,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const de=Re.update(C),Ce=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Ce)){const ze=de.groups;for(let Ee=0,Me=ze.length;Ee<Me;Ee++){const Be=ze[Ee],Pt=Ce[Be.materialIndex];Pt&&Pt.visible&&g.push(C,de,Pt,W,Ae.z,Be)}}else Ce.visible&&g.push(C,de,Ce,W,Ae.z,null)}}const se=C.children;for(let de=0,Ce=se.length;de<Ce;de++)ue(se[de],k,W,X)}function Ve(C,k,W,X){const G=C.opaque,se=C.transmissive,de=C.transparent;p.setupLightsView(W),q===!0&&fe.setGlobalState(v.clippingPlanes,W),se.length>0&&Ue(G,se,k,W),X&&we.viewport(x.copy(X)),G.length>0&&He(G,k,W),se.length>0&&He(se,k,W),de.length>0&&He(de,k,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ue(C,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Pi(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Kr:jr,minFilter:si,samples:4,stencilBuffer:s});const Ee=T.get(p.state.transmissionRenderTarget);Ee.__isTransmissionRenderTarget=!0}const se=p.state.transmissionRenderTarget;v.getDrawingBufferSize(re),se.setSize(re.x,re.y);const de=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(D),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Yr,He(C,W,X),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se);let ze=!1;for(let Ee=0,Me=k.length;Ee<Me;Ee++){const Be=k[Ee],Pt=Be.object,_n=Be.geometry,Dt=Be.material,qt=Be.group;if(Dt.side===gi&&Pt.layers.test(X.layers)){const vt=Dt.side;Dt.side=Wn,Dt.needsUpdate=!0,Vt(Pt,W,X,_n,Dt,qt),Dt.side=vt,Dt.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se)),v.setRenderTarget(de),v.setClearColor(D,F),v.toneMapping=Ce}function He(C,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let G=0,se=C.length;G<se;G++){const de=C[G],Ce=de.object,ze=de.geometry,Ee=X===null?de.material:X,Me=de.group;Ce.layers.test(W.layers)&&Vt(Ce,k,W,ze,Ee,Me)}}function Vt(C,k,W,X,G,se){C.onBeforeRender(v,k,W,X,G,se),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,k,W,X,C,se),G.transparent===!0&&G.side===gi&&G.forceSinglePass===!1?(G.side=Wn,G.needsUpdate=!0,v.renderBufferDirect(W,k,X,G,C,se),G.side=Ki,G.needsUpdate=!0,v.renderBufferDirect(W,k,X,G,C,se),G.side=gi):v.renderBufferDirect(W,k,X,G,C,se),C.onAfterRender(v,k,W,X,G,se)}function Ke(C,k,W){k.isScene!==!0&&(k=Pe);const X=T.get(C),G=p.state.lights,se=p.state.shadowsArray,de=G.state.version,Ce=ie.getParameters(C,G.state,se,k,W),ze=ie.getProgramCacheKey(Ce);let Ee=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?J:K).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ee===void 0&&(C.addEventListener("dispose",Se),Ee=new Map,X.programs=Ee);let Me=Ee.get(ze);if(Me!==void 0){if(X.currentProgram===Me&&X.lightsStateVersion===de)return Qt(C,Ce),Me}else Ce.uniforms=ie.getUniforms(C),C.onBuild(W,Ce,v),C.onBeforeCompile(Ce,v),Me=ie.acquireProgram(Ce,ze),Ee.set(ze,Me),X.uniforms=Ce.uniforms;const Be=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Qt(C,Ce),X.needsLights=_t(C),X.lightsStateVersion=de,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Me,X.uniformsList=null,Me}function Lt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Qt(C,k){const W=T.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function It(C,k,W,X,G){k.isScene!==!0&&(k=Pe),w.resetTextureUnits();const se=k.fog,de=X.isMeshStandardMaterial?k.environment:null,Ce=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:is,ze=(X.isMeshStandardMaterial?J:K).get(X.envMap||de),Ee=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Me=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!W.morphAttributes.position,Pt=!!W.morphAttributes.normal,_n=!!W.morphAttributes.color;let Dt=Yr;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const qt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=qt!==void 0?qt.length:0,We=T.get(X),ci=p.state.lights;if(q===!0&&(te===!0||C!==y)){const ui=C===y&&X.id===I;fe.setState(X,C,ui)}let Nt=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ci.state.version||We.outputColorSpace!==Ce||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==ze||X.fog===!0&&We.fog!==se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Ee||We.vertexTangents!==Me||We.morphTargets!==Be||We.morphNormals!==Pt||We.morphColors!==_n||We.toneMapping!==Dt||We.morphTargetsCount!==vt)&&(Nt=!0):(Nt=!0,We.__version=X.version);let ss=We.currentProgram;Nt===!0&&(ss=Ke(X,k,G));let Ed=!1,ha=!1,Tu=!1;const vn=ss.getUniforms(),Sr=We.uniforms;if(we.useProgram(ss.program)&&(Ed=!0,ha=!0,Tu=!0),X.id!==I&&(I=X.id,ha=!0),Ed||y!==C){vn.setValue(H,"projectionMatrix",C.projectionMatrix),vn.setValue(H,"viewMatrix",C.matrixWorldInverse);const ui=vn.map.cameraPosition;ui!==void 0&&ui.setValue(H,Ae.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&vn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,ha=!0,Tu=!0)}if(G.isSkinnedMesh){vn.setOptional(H,G,"bindMatrix"),vn.setOptional(H,G,"bindMatrixInverse");const ui=G.skeleton;ui&&(ui.boneTexture===null&&ui.computeBoneTexture(),vn.setValue(H,"boneTexture",ui.boneTexture,w))}G.isBatchedMesh&&(vn.setOptional(H,G,"batchingTexture"),vn.setValue(H,"batchingTexture",G._matricesTexture,w));const wu=W.morphAttributes;if((wu.position!==void 0||wu.normal!==void 0||wu.color!==void 0)&&ye.update(G,W,ss),(ha||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,vn.setValue(H,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Sr.envMap.value=ze,Sr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Sr.envMapIntensity.value=k.environmentIntensity),ha&&(vn.setValue(H,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&bt(Sr,Tu),se&&X.fog===!0&&pe.refreshFogUniforms(Sr,se),pe.refreshMaterialUniforms(Sr,X,$,Y,p.state.transmissionRenderTarget),Ic.upload(H,Lt(We),Sr,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ic.upload(H,Lt(We),Sr,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vn.setValue(H,"center",G.center),vn.setValue(H,"modelViewMatrix",G.modelViewMatrix),vn.setValue(H,"normalMatrix",G.normalMatrix),vn.setValue(H,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ui=X.uniformsGroups;for(let Eu=0,xv=ui.length;Eu<xv;Eu++){const bd=ui[Eu];ft.update(bd,ss),ft.bind(bd,ss)}}return ss}function bt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function _t(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,k,W){T.get(C.texture).__webglTexture=k,T.get(C.depthTexture).__webglTexture=W;const X=T.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const W=T.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,W=0){E=C,R=k,A=W;let X=!0,G=null,se=!1,de=!1;if(C){const ze=T.get(C);ze.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):ze.__webglFramebuffer===void 0?w.setupRenderTarget(C):ze.__hasExternalTextures&&w.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);const Me=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Me[k])?G=Me[k][W]:G=Me[k],se=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?G=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Me)?G=Me[W]:G=Me,x.copy(C.viewport),O.copy(C.scissor),N=C.scissorTest}else x.copy(L).multiplyScalar($).floor(),O.copy(oe).multiplyScalar($).floor(),N=ve;if(we.bindFramebuffer(H.FRAMEBUFFER,G)&&X&&we.drawBuffers(C,G),we.viewport(x),we.scissor(O),we.setScissorTest(N),se){const ze=T.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,ze.__webglTexture,W)}else if(de){const ze=T.get(C.texture),Ee=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,W||0,Ee)}I=-1},this.readRenderTargetPixels=function(C,k,W,X,G,se,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(Ce=Ce[de]),Ce){we.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const ze=C.texture,Ee=ze.format,Me=ze.type;if(Ee!==Ri&&Qe.convert(Ee)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Me===Kr&&(le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float"));if(Me!==jr&&Qe.convert(Me)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&Me!==Xi&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&W>=0&&W<=C.height-G&&H.readPixels(k,W,X,G,Qe.convert(Ee),Qe.convert(Me),se)}finally{const ze=E!==null?T.get(E).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,k,W=0){const X=Math.pow(2,-W),G=Math.floor(k.image.width*X),se=Math.floor(k.image.height*X);w.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,C.x,C.y,G,se),we.unbindTexture()},this.copyTextureToTexture=function(C,k,W,X=0){const G=k.image.width,se=k.image.height,de=Qe.convert(W.format),Ce=Qe.convert(W.type);w.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,G,se,de,Ce,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,de,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,de,Ce,k.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(C,k,W,X,G=0){const se=Math.round(C.max.x-C.min.x),de=Math.round(C.max.y-C.min.y),Ce=C.max.z-C.min.z+1,ze=Qe.convert(X.format),Ee=Qe.convert(X.type);let Me;if(X.isData3DTexture)w.setTexture3D(X,0),Me=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)w.setTexture2DArray(X,0),Me=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),Pt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_n=H.getParameter(H.UNPACK_SKIP_PIXELS),Dt=H.getParameter(H.UNPACK_SKIP_ROWS),qt=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=W.isCompressedTexture?W.mipmaps[G]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Me,G,k.x,k.y,k.z,se,de,Ce,ze,Ee,vt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Me,G,k.x,k.y,k.z,se,de,Ce,ze,vt.data):H.texSubImage3D(Me,G,k.x,k.y,k.z,se,de,Ce,ze,Ee,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_n),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt),G===0&&X.generateMipmaps&&H.generateMipmap(Me),we.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,we.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===td?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===vu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class od extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return U0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new B;class ad{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ad(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wm=new B,Xm=new wt,qm=new wt,yA=new B,Ym=new je,dc=new B,Mh=new Zi,jm=new je,Th=new Cl;class SA extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dc),this.boundingBox.expandByPoint(dc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dc),this.boundingSphere.expandByPoint(dc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(i),e.ray.intersectsSphere(Mh)!==!1&&(jm.copy(i).invert(),Th.copy(e.ray).applyMatrix4(jm),!(this.boundingBox!==null&&Th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Th)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ES?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xm.fromBufferAttribute(i.attributes.skinIndex,e),qm.fromBufferAttribute(i.attributes.skinWeight,e),Wm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=qm.getComponent(s);if(o!==0){const a=Xm.getComponent(s);Ym.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yA.copy(Wm).applyMatrix4(Ym),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class J0 extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ld extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Fn,u=Fn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Km=new je,MA=new je;class cd{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:MA;Km.multiplyMatrices(a,t[s]),Km.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ld(t,e,e,Ri,Xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new J0),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vf extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xo=new je,$m=new je,pc=[],Zm=new Di,TA=new je,Sa=new un,Ma=new Zi;class wA extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,TA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),Zm.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(Zm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),Ma.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xo),$m.multiplyMatrices(n,xo),Sa.matrixWorld=$m,Sa.raycast(e,pc);for(let o=0,a=pc.length;o<a;o++){const l=pc[o];l.instanceId=s,l.object=this,t.push(l)}pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ld(new Float32Array(i*this.count),i,this.count,b0,Xi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Q0 extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jm=new B,Qm=new B,eg=new je,wh=new Cl,mc=new Zi;class ud extends zt{constructor(e=new qn,t=new Q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jm.fromBufferAttribute(t,i-1),Qm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jm.distanceTo(Qm);e.setAttribute("lineDistance",new Ii(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(i),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;eg.copy(i).invert(),wh.copy(e.ray).applyMatrix4(eg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,f=new B,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=d){const R=_.getX(v),A=_.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,A),wh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),wh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const tg=new B,ng=new B;class EA extends ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)tg.fromBufferAttribute(t,i),ng.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tg.distanceTo(ng);e.setAttribute("lineDistance",new Ii(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bA extends ud{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ev extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ig=new je,xf=new Cl,gc=new Zi,_c=new B;class hd extends zt{constructor(e=new qn,t=new ev){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;ig.copy(i).invert(),xf.copy(e.ray).applyMatrix4(ig);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);_c.fromBufferAttribute(h,p),rg(_c,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)_c.fromBufferAttribute(h,_),rg(_c,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rg(r,e,t,n,i,s,o){const a=xf.distanceSqToPoint(r);if(a<t){const l=new B;xf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class AA extends Jt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class RA extends Li{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class CA extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ll extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function PA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function LA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function tv(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Il{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IA extends Il{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jp,endingEnd:Jp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qp:s=e,a=2*t-n;break;case em:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qp:o=e,l=2*n-t;break;case em:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,S=d*p-d*g;for(let R=0;R!==a;++R)s[R]=m*o[u+R]+M*o[c+R]+v*o[l+R]+S*o[h+R];return s}}class DA extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class NA extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vc(t,this.TimeBufferType),this.values=vc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vc(e.times,Array),values:vc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new NA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yl:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case $u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&PA(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$u,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Qo;class la extends Ji{}la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=yl;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;class nv extends Ji{}nv.prototype.ValueTypeName="color";class ia extends Ji{}ia.prototype.ValueTypeName="number";class UA extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)rs.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Xs extends Ji{InterpolantFactoryMethodLinear(e){return new UA(this.times,this.values,this.getValueSize(),e)}}Xs.prototype.ValueTypeName="quaternion";Xs.prototype.DefaultInterpolation=Qo;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends Ji{}ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=yl;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class ra extends Ji{}ra.prototype.ValueTypeName="vector";class OA{constructor(e="",t=-1,n=[],i=US){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=LA(l);l=sg(l,1,u),c=sg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ia(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];tv(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let M=0;M!==f[_].morphTargets.length;++M){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new ia(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ra,d+".position",f,"pos",i),n(Xs,d+".quaternion",f,"rot",i),n(ra,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ia;case"vector":case"vector2":case"vector3":case"vector4":return ra;case"color":return nv;case"quaternion":return Xs;case"bool":case"boolean":return la;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FA(r.type);if(r.times===void 0){const t=[],n=[];tv(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class BA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const zA=new BA;class js{constructor(e){this.manager=e!==void 0?e:zA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const rr={};class HA extends Error{constructor(e,t){super(e),this.response=t}}class fd extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:i});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=rr[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:v,value:S})=>{if(v)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,E=u.length;A<E;A++){const I=u[A];I.onProgress&&I.onProgress(R)}m.enqueue(S),M()}})}}});return new Response(p)}else throw new HA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Vr.add(e,c);const u=rr[e];delete rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class VA extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Sl("img");function l(){u(),Vr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class OC extends js{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ld,a=new fd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bn,o.wrapT=c.wrapT!==void 0?c.wrapT:Bn,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=si),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class dd extends js{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new VA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Su extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Eh=new je,og=new B,ag=new B;class pd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;og.setFromMatrixPosition(e.matrixWorld),t.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ag),t.updateMatrixWorld(),Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GA extends pd{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ea*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class WA extends Su{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new GA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lg=new je,Ta=new B,bh=new B;class XA extends pd{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),bh.copy(n.position),bh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bh),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),lg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg)}}class md extends Su{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new XA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qA extends pd{constructor(){super(new xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new qA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd extends Su{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class el{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class YA extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vr.add(e,l),s.manager.itemStart(e)}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cg(){return(typeof performance>"u"?Date:performance).now()}const vd="\\[\\]\\.:\\/",jA=new RegExp("["+vd+"]","g"),xd="[^"+vd+"]",KA="[^"+vd.replace("\\.","")+"]",$A=/((?:WC+[\/:])*)/.source.replace("WC",xd),ZA=/(WCOD+)?/.source.replace("WCOD",KA),JA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xd),QA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xd),e1=new RegExp("^"+$A+ZA+JA+QA+"$"),t1=["material","materials","bones","map"];class n1{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jA,"")}static parseTrackName(e){const t=e1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);t1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=n1;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ug=new je;class iv{constructor(e,t,n=0,i=1/0){this.ray=new Cl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ug),this}intersectObject(e,t=!0,n=[]){return yf(e,this,n,t),n.sort(hg),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yf(e[i],this,n,t);return n.sort(hg),n}}function hg(r,e){return r.distance-e.distance}function yf(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)yf(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);const Mu=[{title:"Blurred Vision",image:"/work/work-1.jpg",href:"/film.html"},{title:"Silent Motion",image:"/work/work-2.jpg",href:"/archive.html"},{title:"Red Mirage",image:"/work/work-3.jpg",href:"/contact.html"},{title:"Echoed Silhouette",image:"/work/work-4.jpg",href:"/contact.html"}],i1=parseInt(gu.replace(/\D+/g,""));function fg(r,e){if(e===OS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===pf||e===L0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===pf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function ru(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Rs="srgb",vr="srgb-linear",dg=3001,r1=3e3;class rv extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new c1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new T1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=el.extractUrlBase(e);o=el.resolveURL(c,this.path)}else o=el.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(ru(new Uint8Array(e.slice(0,4)))===sv){try{o[lt.KHR_BINARY_GLTF]=new w1(e)}catch(u){i&&i(u);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(ru(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new F1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:o[u]=new a1;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new E1(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[u]=new b1;break;case lt.KHR_MESH_QUANTIZATION:o[u]=new A1;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function s1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class o1{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],vr);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new md(u),c.distance=h;break;case"spot":c=new WA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,lr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class a1{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return pr}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Rs))}return Promise.all(i)}}class l1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class c1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}}class u1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class h1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class f1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],vr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rs)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class d1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class p1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],vr),Promise.all(s)}}class m1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class g1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],vr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rs)),Promise.all(s)}}class _1{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class x1{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class y1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class S1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class M1{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class T1{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new je,p=new B,m=new rs,M=new B(1,1,1),v=new wA(_.geometry,_.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,g.compose(p,m,M));for(const S in l)if(S==="_COLOR_0"){const R=l[S];v.instanceColor=new vf(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);zt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const sv="glTF",wa=12,pg={JSON:1313821514,BIN:5130562};class w1{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wa);if(this.header={magic:ru(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-wa,i=new DataView(e,wa);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===pg.JSON){const l=new Uint8Array(e,wa+s,o);this.content=ru(l)}else if(a===pg.BIN){const l=wa+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class E1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Sf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Sf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Bo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,vr,f)})})}}class b1{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class A1{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class ov extends Il{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,M=1-p,v=m-f+h;for(let S=0;S!==a;S++){const R=o[g+S+a],A=o[g+S+l]*u,E=o[_+S+a],I=o[_+S]*u;s[S]=M*R+v*A+p*E+m*I}return s}}const R1=new rs;class C1 extends ov{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return R1.fromArray(s).normalize().toArray(s),s}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mg={9728:Fn,9729:rn,9984:S0,9985:Pc,9986:Da,9987:si},gg={33071:Bn,33648:Qc,10497:Zo},Ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...i1>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},P1={CUBICSPLINE:void 0,LINEAR:Qo,STEP:yl},Rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function L1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),r.DefaultMaterial}function ps(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function lr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function D1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function N1(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ch(t.attributes):e=r.indices+":"+Ch(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ch(r.targets[n]);return e}function Ch(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Mf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function U1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const O1=new je;class F1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new s1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new dd(this.options.manager):this.textureLoader=new YA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ps(s,a,i),lr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(el.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ah[i.type],a=Bo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ot(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ah[i.type],c=Bo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(M);v||(g=new c(a,m*d,i.count*d/u),v=new xA(g,d/u),t.cache.add(M,v)),p=new ad(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Ot(g,l,_);if(i.sparse!==void 0){const m=Ah.SCALAR,M=Bo[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new M(o[1],v,i.sparse.count*m),A=new c(o[2],S,i.sparse.count*l);a!==null&&(p=new Ot(p.array.slice(),p.itemSize,p.normalized));for(let E=0,I=R.length;E<I;E++){const y=R[E];if(p.setX(y,A[E*l]),l>=2&&p.setY(y,A[E*l+1]),l>=3&&p.setZ(y,A[E*l+2]),l>=4&&p.setW(y,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=mg[f.magFilter]||rn,u.minFilter=mg[f.minFilter]||si,u.wrapS=gg[f.wrapS]||Zo,u.wrapT=gg[f.wrapT]||Zo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Jt(g);p.needsUpdate=!0,f(p)}),t.load(el.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),lr(h,o),h.userData.mimeType=o.mimeType||U1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===dg?Rs:vr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===Rs?dg:r1),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ev,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Q0,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ll}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],vr),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rs)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=gi);const u=s.alphaMode||Rh.OPAQUE;if(u===Rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pr){const h=s.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],vr)}return s.emissiveTexture!==void 0&&o!==pr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rs)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),lr(h,s),t.associations.set(h,{materials:e}),s.extensions&&ps(i,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _g(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=N1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=_g(new qn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?L1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const M=c[d];if(p.mode===di.TRIANGLES||p.mode===di.TRIANGLE_STRIP||p.mode===di.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new SA(g,M):new un(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===di.TRIANGLE_STRIP?m.geometry=fg(m.geometry,L0):p.mode===di.TRIANGLE_FAN&&(m.geometry=fg(m.geometry,pf));else if(p.mode===di.LINES)m=new EA(g,M);else if(p.mode===di.LINE_STRIP)m=new ud(g,M);else if(p.mode===di.LINE_LOOP)m=new bA(g,M);else if(p.mode===di.POINTS)m=new hd(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&D1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),lr(m,s),p.extensions&&ps(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&ps(i,h[0],s),h[0];const f=new mr;s.extensions&&ps(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(Lc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),lr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let M=0,v=f.length;M<v;M++){const S=f[M],R=d[M],A=_[M],E=g[M],I=p[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,R,A,E,I);if(y)for(let x=0;x<y.length;x++)m.push(y[x])}return new OA(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,O1)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new J0:c.length>1?u=new mr:c.length===1?u=c[0]:u=new zt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),lr(u,s),s.extensions&&ps(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mr;n.name&&(s.name=i.createUniqueName(n.name)),lr(s,n),n.extensions&&ps(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Li||f instanceof Jt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Cr[s.path]===Cr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Cr[s.path]){case Cr.weights:c=ia;break;case Cr.rotation:c=Xs;break;case Cr.position:case Cr.scale:c=ra;break;default:n.itemSize===1?c=ia:c=ra;break}const u=i.interpolation!==void 0?P1[i.interpolation]:Qo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Cr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Xs?C1:ov;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function k1(r,e,t){const n=e.attributes,i=new Di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Mf(Bo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Mf(Bo[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Zi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function _g(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Sf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return lr(r,e),k1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?I1(r,e.targets,t):r})}const av={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B1=new xu(-1,1,1,-1,0,1);class z1 extends qn{constructor(){super(),this.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ii([0,2,0,0,2,0],2))}}const H1=new z1;class yd{constructor(e){this._mesh=new un(H1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $r extends ua{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ml.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vg extends ua{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class V1 extends ua{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Sd{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $r(av),this.copyPass.material.blending=_r,this.clock=new _d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vg!==void 0&&(o instanceof vg?n=!0:o instanceof V1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Md extends ua{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const G1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Td extends ua{constructor(){super();const e=G1;this.uniforms=Ml.clone(e.uniforms),this.material=new CA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===m0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===g0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===v0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===x0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const W1="modulepreload",X1=function(r){return"/"+r},xg={},q1=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=X1(c),c in xg)return;xg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":W1,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Y1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class sa extends ua{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pi(s,o,{type:Kr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Pi(s,o,{type:Kr});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Pi(s,o,{type:Kr});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Y1;this.highPassUniforms=Ml.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=av;this.copyUniforms=Ml.clone(u.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new pr,this.fsQuad=new yd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new hn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}sa.BlurDirectionX=new be(1,0);sa.BlurDirectionY=new be(0,1);var yg={};Fe.registerPlugin(nt);let mt=null,Fi=null,jt=null,Ct=null,tl=null,nl=null,Dc=null,Ss=null,Gr=!1,$t=null,Cs=null,Nn=null,Ps=null,Ur=null,Ls=null,Dn=null;const su=new Set;let Is=null,Tf=null,Or=null,j1=null,Ds=null;const wl={uTime:{value:0},uResolution:{value:new be(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};let El=null;const sr={angle:Math.PI/2,y:0,tilt:0},Kn={angle:Math.PI/2,y:0,tilt:0},Bi={x:0,y:0,z:0},Ea={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Wt={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let zo=null,bl=null;const lv=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function K1(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:lv.enableShadows,shadowMapSize:512}}function $1(r,e,t){typeof process<"u"&&yg&&yg.VITEST||(Ps=new gf(e),Ps.compileEquirectangularShader&&Ps.compileEquirectangularShader(),q1(async()=>{const{RGBELoader:n}=await import("./index-DU0KVPpC.js");return{RGBELoader:n}},[]).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Ct){s.dispose?.();return}Ur&&Ur.dispose?.(),Ur=Ps.fromEquirectangular(s),r.environment=Ur.texture,r.background=Ur.texture,iR(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function Z1(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=$y;return}r.shadowMap.type=Qf,$t&&($t.castShadow=!0,$t.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),$t.shadow.bias=-1e-4,$t.shadow.normalBias=.02,$t.shadow.camera.near=1,$t.shadow.camera.far=30,$t.shadow.camera.left=-7,$t.shadow.camera.right=7,$t.shadow.camera.top=7,$t.shadow.camera.bottom=-7);const n=new Ys(20,20),i=new RA({opacity:.22});Nn=new un(n,i),Nn.rotation.x=-Math.PI/2,Nn.position.y=-1.35,Nn.receiveShadow=!0,e.add(Nn)}const J1={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:.15},uOffset:{value:1}},vertexShader:`
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
  `},Q1={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},eR={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function tR(r,e,t){const n=new Md(e,t);r.addPass(n),El=new sa(new be(window.innerWidth,window.innerHeight),.075,.4,.85),r.addPass(El);const i=new $r(J1);r.addPass(i);const s=new $r(Q1);s.uniforms.uGrain=wl.uGrain,s.uniforms.uTime=wl.uTime,r.addPass(s);const o=new $r(eR);r.addPass(o);const a=new Td;r.addPass(a)}function nR(){mt&&(mt.toneMappingExposure=Wt.exposure),Cs&&(Cs.intensity=Wt.ambientIntensity,Cs.color?.set&&Cs.color.set(Wt.ambientColor)),$t&&($t.intensity=Wt.keyIntensity,$t.color?.set&&$t.color.set(Wt.keyColor),$t.position.set(Wt.keyX,Wt.keyY,Wt.keyZ))}function iR(){Ct&&(Ct.backgroundIntensity=Wt.envBackgroundIntensity,Ct.backgroundBlurriness=Wt.envBackgroundBlur)}function rR(){Nn&&(Nn.material&&(Nn.material.opacity=Wt.shadowOpacity),Nn.position.y=Wt.shadowY)}function sR(){su.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=Lc.clamp((r.userData.baseRoughness??r.roughness)*Wt.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=Lc.clamp((r.userData.baseMetalness??r.metalness)*Wt.metalnessScale,0,1)),r.envMapIntensity=Lc.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Wt.envReflection,.2,5),r.needsUpdate=!0)})}function oR(r){r.map&&(r.map.colorSpace=nn),r.emissiveMap&&(r.emissiveMap.colorSpace=nn),r.needsUpdate=!0}function aR(r){return new Si({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function lR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=aR(t)),oR(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,su.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function cR(r){const e=new Di().setFromObject(r),t=e.getCenter(new B),n=e.getSize(new B);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function uR(r){cR(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,lR(e))})}function hR(){if(Ds)return Ds;const r=new rv,e=new Promise(n=>{r.load("/home/scene.glb",i=>{if(!Ct||!Gr){n();return}Is=i.scene,uR(Is),sR(),Is.traverse(s=>{}),Is.traverse(s=>{if(!s.isMesh)return;const o=s.name.toLowerCase();(o.includes("volume")||o.includes("glow")||o.includes("light"))&&(au=cv(s,jt,{c:1.45,p:2.1,glowColor:"#fff3c6",op:.18}))}),n()},void 0,i=>{console.error("[three.js] Home model load error:",i),n()})}),t=new Promise(n=>{n()});return Ds=Promise.all([e,t]),Ds}async function ou(r){if(!Ct||(Ds&&await Ds,!Ct||!Gr))return;const e=r==="work"?Tf:Is;!e||Or===e||(Or&&Or.parent&&Ct.remove(Or),e.position.set(Wt.modelX,Wt.modelY,Wt.modelZ),Ct.add(e),Or=e,Ct&&(r==="work"?Ct.fog=new na(15789284,.035):Ct.fog=new na(657935,.045)))}function fR(r,e){zo=r,bl=e}function dR(){zo=null,bl=null}function Sg(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}function cv(r,e,t={}){const{c:n=1.45,p:i=2.1,glowColor:s="#fff3c6",op:o=.18}=t,a=new pr({side:gi,blending:vl,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1});return a.onBeforeCompile=l=>{l.uniforms.c={value:n},l.uniforms.p={value:i},l.uniforms.glowColor={value:new Ne(s)},l.uniforms.op={value:o},l.vertexShader=`
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
    `,a.userData.shader=l},a.customProgramCacheKey=()=>`fake-volume-${s}-${n}-${i}`,r.material=a,r.renderOrder=10,r.needsUpdate=!0,{update(l){},setOpacity(l){const c=a.userData.shader;c&&(c.uniforms.op.value=l)}}}let au=null;const Ua=200,uv={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function pR(r){const e=new qn,t=new Float32Array(Ua*3),n=new Float32Array(Ua),i=new Float32Array(Ua),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=uv;for(let f=0;f<Ua;f++)t[f*3]=(Math.random()-.5)*2*s,t[f*3+1]=o+Math.random()*(a-o),t[f*3+2]=l+Math.random()*(c-l),n[f]=.008+Math.random()*.016,i[f]=.35+Math.random()*.6;e.setAttribute("position",new Ot(t,3)),e.setAttribute("aSize",new Ot(n,1)),e.setAttribute("aOpacity",new Ot(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),h=new hn({transparent:!0,depthWrite:!1,blending:vl,uniforms:{uPixelRatio:{value:u}},vertexShader:`
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
    `});Dn=new hd(e,h),Dn.frustumCulled=!1,r.add(Dn)}function mR(r){if(!Dn)return;const e=Dn.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=uv;for(let a=0;a<Ua;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}Dn.geometry.attributes.position.needsUpdate=!0}function Mg(){if(Gr)return{scene:Ct,camera:jt,renderer:mt};Gr=!0;const r=K1();if(Ct=new od,Ct.fog=new na(657935,.045),jt=new pn(75,window.innerWidth/window.innerHeight,.1,1e3),mt=new Z0({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),mt.setSize(window.innerWidth,window.innerHeight),mt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),mt.toneMapping=ed,mt.toneMappingExposure=r.toneMappingExposure,mt.outputColorSpace=nn,Ss=document.querySelector("#background"),!Ss){console.warn("[three.js] #background element not found, creating one"),Ss=document.createElement("div"),Ss.id="background";const s=document.body.firstChild;document.body.insertBefore(Ss,s)}Ss.appendChild(mt.domElement),Cs=new gd(16777215,.18),Ct.add(Cs),$t=new Tl(16777215,3.25),$t.position.set(4.2,7.5,6.2),Ct.add($t),nR(),$1(Ct,mt,lv.hdriUrl),Z1(mt,Ct,r),rR(),pR(Ct);const e=sessionStorage.getItem("webgl-page")||"home";hR().then(()=>{if(!Ct||!Gr)return;ou(e==="work"?"work":"home");const o=fv(e);Bi.x=o.x,Bi.y=o.y,Bi.z=o.z});let t=null;tl=()=>{t&&clearTimeout(t),t=setTimeout(()=>{if(!jt||!mt||!Fi)return;const s=window.innerWidth,o=window.innerHeight;jt.aspect=s/o,jt.updateProjectionMatrix(),mt.setSize(s,o),Fi.setSize(s,o),El&&El.setSize(s,o),wl.uResolution.value.set(s,o)},100)},window.addEventListener("resize",tl);try{Fi=new Sd(mt)}catch{Fi={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>mt?.render(Ct,jt)}}tR(Fi,Ct,jt),sr.angle=Math.PI/2,sr.y=0,sr.tilt=0,Kn.angle=Math.PI/2,Kn.y=0,Kn.tilt=0;let n=0;nl=s=>{const o=performance.now();if(o-n<16)return;n=o;const a=s.clientX/window.innerWidth*2-1,l=-(s.clientY/window.innerHeight)*2+1;sr.angle=Math.PI/2+a*Ea.angleRange,sr.y=-l*Ea.yRange,sr.tilt=a*Ea.tiltRange},window.addEventListener("mousemove",nl,{passive:!0}),performance.now();const i=()=>{if(!Gr||!jt||!Fi)return;const s=performance.now(),o=Ea.lerp;Kn.angle+=(sr.angle-Kn.angle)*o,Kn.y+=(sr.y-Kn.y)*o,Kn.tilt+=(sr.tilt-Kn.tilt)*o;const a=Or?Or.position:{x:Wt.modelX,y:Wt.modelY,z:Wt.modelZ},l=a.x+Bi.x,c=a.y+Bi.y,u=a.z+Bi.z,h=Ea.orbitRadius;jt.position.x=l+Math.cos(Kn.angle)*h,jt.position.z=u+Math.sin(Kn.angle)*h,jt.position.y=c+Kn.y+1;const f=s*.001;if(jt.position.x+=Math.sin(f*.7)*.012+Math.sin(f*1.3)*.008,jt.position.y+=Math.sin(f*.5)*.012+Math.cos(f*1.1)*.008,jt.position.z+=Math.cos(f*.6)*.008,jt.lookAt(l,c,u),jt.rotation.z+=Kn.tilt,wl.uTime.value=f,mR(f),au&&au.update(jt),Fi.render(),zo&&bl){const d=mt.autoClear;mt.autoClear=!1,mt.clearDepth();const _=zo.userData?.composer;_?_.render():mt.render(zo,bl),mt.autoClear=d}Dc=requestAnimationFrame(i)};return i(),{scene:Ct,camera:jt,renderer:mt}}function Nc(){if(!Gr)return;Gr=!1,Dc&&(cancelAnimationFrame(Dc),Dc=null),tl&&(window.removeEventListener("resize",tl),tl=null),nl&&(window.removeEventListener("mousemove",nl),nl=null),Ls&&(Ls.kill(),Ls=null),wl.uTime.value=0,El=null,Dn&&(Dn.geometry&&Dn.geometry.dispose(),Dn.material&&Dn.material.dispose(),Dn.parent&&Dn.parent.remove(Dn),Dn=null),au=null,zo=null,bl=null,Nn&&(Nn.geometry&&Nn.geometry.dispose(),Nn.material&&Nn.material.dispose(),Nn=null),Ur&&(Ur.dispose(),Ur=null),Ps&&(Ps.dispose(),Ps=null),su.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),su.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==j1){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Ct?.remove(e))};r(Is),r(Tf),Is=null,Tf=null,Or=null,Ds=null,Fi&&(Fi.dispose(),Fi=null),mt&&(mt.dispose(),mt.domElement&&mt.domElement.parentNode&&mt.domElement.parentNode.removeChild(mt.domElement),mt=null),Ct=null,jt=null,$t=null,Cs=null,Ss=null}function hv(){return mt}function fv(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function il(r,e=!1){const t=fv(r);sessionStorage.setItem("webgl-page",r),Ls&&(Ls.kill(),Ls=null),e?(Bi.x=t.x,Bi.y=t.y,Bi.z=t.z):Ls=Fe.to(Bi,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}let rl=!1;function dv(){const r=document.querySelectorAll('[data-barba="container"][data-barba-namespace="work"]');return r.length?r[r.length-1]:null}const Je={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:4,CAMERA_FOV:50,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ANGLE_RANGE:.2,PARALLAX_Y_RANGE:.3,PARALLAX_TILT_RANGE:.04,PARALLAX_CONFIG_LERP:.05,PARALLAX_ORBIT_RADIUS:5,WAVE_AMPLITUDE:.18,WAVE_FREQUENCY:2.5,WAVE_SPEED:.3,POINT_LIGHT_INTENSITY:3.5,POINT_LIGHT_Z:10,AMBIENT_INTENSITY:1.2,DIRECTIONAL_LIGHT_INTENSITY:2,PARTICLE_COUNT:200,PARTICLE_BOUNDS:{xHalf:8,yMin:-3,yMax:5,zMin:-16,zMax:2},SCROLL_TILT_AMOUNT:.08,SCROLL_TILT_LERP:.04,SCROLL_TILT_MAX:.15},gR=`
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
`,_R=`
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
`,P={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,composer:null,workGlowHandle:null,workModel:null,tunedMaterials:new Set,pointLight:null,ambientLight:null,directionalLight:null,shadowPlane:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{},scrollTilt:0,raycaster:new iv,rayMouse:new be,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function vR(){const r=new dd,t=[...new Set(Mu.map(n=>n.image))].map(n=>P.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=nn,s.minFilter=si,s.magFilter=rn,s.generateMipmaps=!0,P.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function xR(){const r=Je.ARC_RADIUS,e=Je.ARC_SPAN,t=Je.STRIP_HEIGHT,n=Je.WIDTH_SEGMENTS,i=Je.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,h=0;for(let _=0;_<=i;_++){const g=_/i,p=(g-.5)*t+Je.STRIP_Y_OFFSET;for(let m=0;m<=n;m++){const M=m/n,v=(M-.5)*e,S=Math.sin(v)*r,R=(Math.cos(v)-1)*r;o[c++]=S,o[c++]=p,o[c++]=R;const A=Math.sin(v),E=Math.cos(v);a[u++]=A,a[u++]=0,a[u++]=E,l[h++]=M,l[h++]=g}}const f=[];for(let _=0;_<i;_++)for(let g=0;g<n;g++){const p=_*(n+1)+g,m=p+1,M=p+(n+1),v=M+1;f.push(p,m,M),f.push(m,v,M)}const d=new qn;return d.setAttribute("position",new Ot(o,3)),d.setAttribute("normal",new Ot(a,3)),d.setAttribute("uv",new Ot(l,2)),d.setIndex(f),d}function yR(r){r.map&&(r.map.colorSpace=nn),r.emissiveMap&&(r.emissiveMap.colorSpace=nn),r.needsUpdate=!0}function SR(r){return new Si({color:r?.color?.clone?r.color.clone():new Ne(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function MR(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=SR(t)),yR(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,P.tunedMaterials.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function TR(r){const e=new Di().setFromObject(r),t=e.getCenter(new B),n=e.getSize(new B);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function wR(r){const e=TR(r),t=Math.max(e.x,e.y,e.z);if(t>0){const i=40/t;r.scale.set(i,i,i)}r.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,MR(n))})}async function ER(){return new Promise((r,e)=>{new rv().load("/work.glb",n=>{P.workModel=n.scene,wR(P.workModel),P.workModel.position.set(0,-6.1,-22.5),P.workModel.scale.set(1.3,1.3,1.3),P.scene.add(P.workModel),P.workModel.traverse(i=>{}),P.workModel.traverse(i=>{if(!i.isMesh)return;const s=i.name.toLowerCase();(s.includes("volume")||s.includes("glow")||s.includes("light"))&&(P.workGlowHandle=cv(i,P.camera,{c:1.5,p:2.1,glowColor:"#fff8de",op:.2}))}),r()},void 0,n=>{console.error("[work] Model load error:",n),e(n)})})}function bR(){const r=window.innerWidth,e=window.innerHeight;P.camera=new pn(Je.CAMERA_FOV,r/e,.1,100),P.camera.position.set(0,-1.1,0),P.scene=new od,P.scene.fog=new na(15789284,.035),P.ambientLight=new gd(16777215,Je.AMBIENT_INTENSITY),P.scene.add(P.ambientLight),P.pointLight=new md(16777215,Je.POINT_LIGHT_INTENSITY,30,1.5),P.pointLight.position.set(0,.5,Je.POINT_LIGHT_Z),P.scene.add(P.pointLight),P.directionalLight=new Tl(16777215,Je.DIRECTIONAL_LIGHT_INTENSITY),P.directionalLight.position.set(5,10,5),P.directionalLight.castShadow=!0,P.directionalLight.shadow.mapSize.width=2048,P.directionalLight.shadow.mapSize.height=2048,P.directionalLight.shadow.camera.near=1,P.directionalLight.shadow.camera.far=40,P.directionalLight.shadow.camera.left=-15,P.directionalLight.shadow.camera.right=15,P.directionalLight.shadow.camera.top=15,P.directionalLight.shadow.camera.bottom=-15,P.directionalLight.shadow.bias=-1e-4,P.directionalLight.target.position.set(0,-2,-13.4),P.scene.add(P.directionalLight),P.scene.add(P.directionalLight.target);const t=hv();t&&(t.shadowMap.enabled=!0,t.shadowMap.type=Qf),P.stripGroup=new mr,P.stripGroup.position.set(0,-.7,-13.4),P.scene.add(P.stripGroup);const n=new Ys(40,20),i=new Ll({color:15789284,roughness:.9,metalness:0});P.shadowPlane=new un(n,i),P.shadowPlane.rotation.x=-Math.PI/2,P.shadowPlane.position.set(0,-5.2,-18),P.shadowPlane.receiveShadow=!0,P.shadowPlane.castShadow=!1,P.scene.add(P.shadowPlane),pv(),P.clock=new _d,DR(),fR(P.scene,P.camera)}function AR(){const r=[...new Set(Mu.map(e=>e.image))];for(P.textures=r.map(e=>P.textureCache.get(e)).filter(Boolean);P.textures.length<4;)P.textures.push(P.textures[0]||new Jt);P.stripGeometry=xR(),P.stripMaterial=new hn({vertexShader:gR,fragmentShader:_R,uniforms:{uTex0:{value:P.textures[0]},uTex1:{value:P.textures[1]},uTex2:{value:P.textures[2]},uTex3:{value:P.textures[3]},uScrollOffset:{value:0},uItemsOnStrip:{value:Je.ITEMS_ON_STRIP},uNumUnique:{value:Je.NUM_UNIQUE},uGapSize:{value:Je.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Je.WAVE_AMPLITUDE},uWaveFreq:{value:Je.WAVE_FREQUENCY},uWaveSpeed:{value:Je.WAVE_SPEED},uHoverUV:{value:new be(-1,-1)},uRippleStrength:{value:0}},transparent:!0,side:Ki,depthWrite:!0}),P.stripMesh=new un(P.stripGeometry,P.stripMaterial),P.stripMesh.frustumCulled=!1,P.stripMesh.castShadow=!0,P.stripMesh.receiveShadow=!0,P.stripGroup.add(P.stripMesh)}function RR(){if(!P.titleEl||!P.titleEl.isConnected){const n=dv();n&&(P.container=n,P.titleEl=n.querySelector(".slide-title"))}if(!P.titleEl)return;const r=.5*Je.ITEMS_ON_STRIP+P.scrollCurrent,e=(Math.floor(r)%Je.NUM_UNIQUE+Je.NUM_UNIQUE)%Je.NUM_UNIQUE;P.activeIndex=e;const t=Mu[e];t&&P.lastActiveTitle!==t.title&&(P.lastActiveTitle=t.title,P.titleEl.textContent=t.title)}function CR(r){if(!P.stripMaterial)return;const e=P.stripMaterial.uniforms;e.uScrollOffset.value=P.scrollCurrent,e.uTime.value=r}const lu={uTime:{value:0},uResolution:{value:new be(window.innerWidth,window.innerHeight)},uGrain:{value:.03}},PR={uniforms:{tDiffuse:{value:null},uDarkness:{value:.65},uOffset:{value:.68}},vertexShader:`
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
  `},LR={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},IR={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function DR(){const r=hv();if(!r)return;P.composer=new Sd(r);const e=new Md(P.scene,P.camera);P.composer.addPass(e);const t=new $r(PR);P.composer.addPass(t);const n=new $r(LR);n.uniforms.uGrain=lu.uGrain,n.uniforms.uTime=lu.uTime,P.composer.addPass(n);const i=new $r(IR);P.composer.addPass(i);const s=new Td;P.composer.addPass(s),P.scene.userData.composer=P.composer}const yo={angle:Math.PI/2,y:0,tilt:0},Ni={angle:Math.PI/2,y:0,tilt:0};function NR(){const r=P.clock?P.clock.getElapsedTime():0;yo.angle=Math.PI/2+P.mouseX*Je.PARALLAX_ANGLE_RANGE,yo.y=-P.mouseY*Je.PARALLAX_Y_RANGE,yo.tilt=P.mouseX*Je.PARALLAX_TILT_RANGE;const e=Je.PARALLAX_CONFIG_LERP;if(Ni.angle+=(yo.angle-Ni.angle)*e,Ni.y+=(yo.y-Ni.y)*e,Ni.tilt+=(yo.tilt-Ni.tilt)*e,P.camera){const t=Je.PARALLAX_ORBIT_RADIUS;P.camera.position.x=Math.cos(Ni.angle)*t,P.camera.position.z=Math.sin(Ni.angle)*t,P.camera.position.y=-1.1+Ni.y+1;const n=Math.sin(r*.7)*.012+Math.sin(r*1.3)*.008,i=Math.sin(r*.5)*.012+Math.cos(r*1.1)*.008,s=Math.cos(r*.6)*.008;P.camera.position.x+=n,P.camera.position.y+=i,P.camera.position.z+=s,P.camera.lookAt(0,-1.1,-14),P.camera.rotation.z+=Ni.tilt,P.pointLight&&(P.pointLight.position.x=P.camera.position.x*.5,P.pointLight.position.y=.5+P.camera.position.y*.3)}}function UR(){if(!P.stripGroup)return;const r=Math.max(-.15,Math.min(Je.SCROLL_TILT_MAX,P.scrollVelocity*Je.SCROLL_TILT_AMOUNT));P.scrollTilt+=(r-P.scrollTilt)*Je.SCROLL_TILT_LERP,P.stripGroup.rotation.z=P.scrollTilt}function pv(){const{PARTICLE_COUNT:r,PARTICLE_BOUNDS:e}=Je,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=e,a=new qn,l=new Float32Array(r*3),c=new Float32Array(r),u=new Float32Array(r);for(let d=0;d<r;d++)l[d*3]=(Math.random()-.5)*2*t,l[d*3+1]=n+Math.random()*(i-n),l[d*3+2]=s+Math.random()*(o-s),c[d]=.008+Math.random()*.016,u[d]=.35+Math.random()*.6;a.setAttribute("position",new Ot(l,3)),a.setAttribute("aSize",new Ot(c,1)),a.setAttribute("aOpacity",new Ot(u,1));const h=Math.min(window.devicePixelRatio||1,1.5),f=new hn({transparent:!0,depthWrite:!1,blending:Hs,uniforms:{uPixelRatio:{value:h}},vertexShader:`
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
    `});P.particleSystem=new hd(a,f),P.particleSystem.frustumCulled=!1,P.scene.add(P.particleSystem)}function OR(r){if(!P.particleSystem)return;const e=P.particleSystem.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=Je.PARTICLE_BOUNDS;for(let a=0;a<Je.PARTICLE_COUNT;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}P.particleSystem.geometry.attributes.position.needsUpdate=!0}function FR(){!P.isPointerDown&&Math.abs(P.scrollVelocity)>1e-4?(P.scrollTarget+=P.scrollVelocity,P.scrollVelocity*=.95):P.isPointerDown||(P.scrollVelocity=0),P.scrollCurrent+=(P.scrollTarget-P.scrollCurrent)*Je.SCROLL_LERP}function kR(r){r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;P.scrollTarget+=e*Je.SCROLL_SPEED}function BR(r){P.isPointerDown=!0,P.lastPointerX=r.clientX,P.dragStartX=r.clientX,P.dragStartY=r.clientY,P.scrollVelocity=0,P.lastDragTime=performance.now()}let Tg=0;function zR(r){if(P.isPointerDown){const i=performance.now(),s=r.clientX-P.lastPointerX,o=i-P.lastDragTime;P.scrollTarget-=s*Je.DRAG_MULTIPLIER,o>0&&(P.scrollVelocity=-s*Je.DRAG_MULTIPLIER/(o/16)),P.lastPointerX=r.clientX,P.lastDragTime=i}const e=performance.now();if(e-Tg<16)return;Tg=e;const t=r.clientX/window.innerWidth*2-1,n=-(r.clientY/window.innerHeight)*2+1;if(P.camera&&P.stripMesh&&!P.isPointerDown){P.rayMouse.set(t,n),P.raycaster.setFromCamera(P.rayMouse,P.camera);const i=P.raycaster.intersectObject(P.stripMesh,!1);if(i.length>0&&i[0].uv){P.hoverUV=i[0].uv.clone(),P.hoverActive=!0,document.body.style.cursor="pointer";return}else P.hoverActive=!1,document.body.style.cursor=""}P.mouseX=t,P.mouseY=n}function HR(r){if(!P.isPointerDown)return;P.isPointerDown=!1;const e=Math.abs(r.clientX-P.dragStartX),t=Math.abs(r.clientY-P.dragStartY);e<5&&t<5&&VR(r)}function VR(r){if(!P.camera||!P.stripMesh)return;P.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),P.raycaster.setFromCamera(P.rayMouse,P.camera);const e=P.raycaster.intersectObject(P.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Je.ITEMS_ON_STRIP+P.scrollCurrent,i=(Math.floor(n)%Je.NUM_UNIQUE+Je.NUM_UNIQUE)%Je.NUM_UNIQUE,s=Mu[i];if(s?.href){const o=document.querySelector(`a[href="${s.href}"]`);o?o.click():window.location.href=s.href}}}}let Ho=null;function GR(){Ho&&clearTimeout(Ho),Ho=setTimeout(()=>{if(!P.camera)return;const r=window.innerWidth,e=window.innerHeight;P.camera.aspect=r/e,P.camera.updateProjectionMatrix(),P.composer&&P.composer.setSize(r,e),lu.uResolution.value.set(r,e)},100)}function WR(){P.handlers.wheel=kR,P.handlers.pointerdown=BR,P.handlers.pointermove=zR,P.handlers.pointerup=HR,P.handlers.resize=GR,window.addEventListener("wheel",P.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",P.handlers.pointerdown),window.addEventListener("pointermove",P.handlers.pointermove),window.addEventListener("pointerup",P.handlers.pointerup),window.addEventListener("resize",P.handlers.resize)}function XR(){P.handlers.wheel&&window.removeEventListener("wheel",P.handlers.wheel),P.handlers.pointerdown&&window.removeEventListener("pointerdown",P.handlers.pointerdown),P.handlers.pointermove&&window.removeEventListener("pointermove",P.handlers.pointermove),P.handlers.pointerup&&window.removeEventListener("pointerup",P.handlers.pointerup),P.handlers.resize&&window.removeEventListener("resize",P.handlers.resize)}function mv(){const r=P.clock?P.clock.getElapsedTime():0;FR(),CR(r),NR(),UR(),OR(r),P.workGlowHandle&&P.workGlowHandle.update(P.camera),RR(),lu.uTime.value=r,P.animationFrame=requestAnimationFrame(mv)}async function gv(){if(rl)return;rl=!0;const r=dv();if(!r){console.warn("[work] no active work container found"),rl=!1;return}P.container=r,P.titleEl=r.querySelector(".slide-title"),bR();try{await ER()}catch(e){console.error("[work] Failed to load 3D model:",e)}await vR(),AR(),pv(),WR(),P.stripGroup&&(P.stripGroup.scale.set(1,1,1),P.stripGroup.rotation.x=0),P.animationFrame=requestAnimationFrame(mv)}function Ro(){rl&&(rl=!1,P.animationFrame!==null&&(cancelAnimationFrame(P.animationFrame),P.animationFrame=null),XR(),dR(),P.stripMesh&&P.stripGroup?.remove(P.stripMesh),P.stripMaterial&&(P.stripMaterial.dispose(),P.stripMaterial=null),P.stripGeometry&&(P.stripGeometry.dispose(),P.stripGeometry=null),P.stripMesh=null,P.textures=[],P.particleSystem&&(P.particleSystem.geometry&&P.particleSystem.geometry.dispose(),P.particleSystem.material&&P.particleSystem.material.dispose(),P.particleSystem.parent&&P.particleSystem.parent.remove(P.particleSystem),P.particleSystem=null),P.workModel&&(P.scene?.remove(P.workModel),P.workModel.traverse(r=>{r.isMesh&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(e=>e.dispose()):r.material.dispose()))}),P.workModel=null),P.tunedMaterials.clear(),P.composer&&(P.composer=null),P.workGlowHandle=null,P.shadowPlane&&(P.shadowPlane.geometry.dispose(),P.shadowPlane.material.dispose(),P.shadowPlane.parent&&P.shadowPlane.parent.remove(P.shadowPlane),P.shadowPlane=null),P.pointLight&&(P.scene?.remove(P.pointLight),P.pointLight=null),P.ambientLight&&(P.scene?.remove(P.ambientLight),P.ambientLight=null),P.directionalLight&&(P.scene?.remove(P.directionalLight),P.directionalLight.dispose(),P.directionalLight=null),P.stripGroup&&(P.scene?.remove(P.stripGroup),P.stripGroup=null),P.textureCache.forEach(r=>r.dispose()),P.textureCache.clear(),Ho&&(clearTimeout(Ho),Ho=null),document.body.style.cursor="",P.scene=null,P.camera=null,P.clock=null,P.container=null,P.titleEl=null,P.scrollTarget=0,P.scrollCurrent=0,P.scrollVelocity=0,P.lastDragTime=0,P.activeIndex=0,P.lastActiveTitle="",P.mouseX=0,P.mouseY=0,P.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},P.scrollTilt=0,P.hoverUV=null,P.hoverActive=!1,P.rippleStrength=0,P.isPointerDown=!1,P.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null})}const xi=[{id:1,title:"Archive 01",year:"2024",description:"A glimpse into the creative process.",category:"photography",image:"/archive/image-1.jpg"},{id:2,title:"Archive 02",year:"2024",description:"Exploring light and shadow.",category:"photography",image:"/archive/image-2.jpg"},{id:3,title:"Archive 03",year:"2023",description:"Moments captured in time.",category:"photography",image:"/archive/image-3.jpg"},{id:4,title:"Archive 04",year:"2023",description:"Visual storytelling through imagery.",category:"photography",image:"/archive/image-4.jpg"},{id:5,title:"Archive 05",year:"2023",description:"The art of observation.",category:"photography",image:"/archive/image-5.jpg"}],ut=Object.freeze({cardWidth:2.25,cardHeight:2.8,cardSpacing:1.85,visibleRange:12,dragSensitivityDesktop:.0048,dragSensitivityMobile:.007,wheelSensitivity:.0016,velocityDamping:.9,velocityEpsilon:2e-5,boundSlack:1.1,clickThreshold:12,clickTimeout:260,dragExitThreshold:48,focusLift:1.35,focusScale:1.22,focusTrackLerp:.12,focusTransition:.42,cameraFollowLerp:.085,cameraBaseY:.25,cameraBaseZ:8.6,dockMargin:20,dockTopSafe:90,atlasTileSize:1024,mobileBreakpoint:900,analog:Object.freeze({grain:.018,shift:.0022,vignette:.22})}),qR={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:ut.analog.grain},uShift:{value:ut.analog.shift},uVignette:{value:ut.analog.vignette}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    uniform float uShift;
    uniform float uVignette;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 345.45));
      p += dot(p, p + 34.345);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float radius = length(center) * 1.4142;

      float shift = uShift * radius;
      float r = texture2D(tDiffuse, uv + vec2(shift, 0.0)).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - vec2(shift, 0.0)).b;

      vec3 color = vec3(r, g, b);

      float grain = hash(uv * 1200.0 + uTime * 53.0) - 0.5;
      color += grain * uGrain;

      float vig = 1.0 - smoothstep(0.45, 1.0, radius) * uVignette;
      color *= vig;

      gl_FragColor = vec4(color, 1.0);
    }
  `},b={running:!1,initToken:0,rafId:null,container:null,backgroundEl:null,renderHost:null,eventTarget:null,renderer:null,composer:null,analogPass:null,scene:null,camera:null,clock:null,root:null,cards:[],cardByIndex:new Map,atlasTexture:null,sourceTextures:[],ambientLight:null,keyLight:null,fillLight:null,rimLight:null,raycaster:new iv,pointerNdc:new be,trackOffset:0,trackVelocity:0,isDragging:!1,activePointerId:null,pointerStart:{x:0,y:0},pointerLast:{x:0,y:0},clickStartTime:0,dragDistance:0,focusedIndex:-1,focusLerp:{value:0},mouseParallaxTarget:new be(0,0),mouseParallaxCurrent:new be(0,0),dockPosCurrent:new be(-9999,-9999),dockPosTarget:new be(-9999,-9999),handlers:{},dom:{overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},tmp:{p0:new B,p1:new B,toCam:new B,projected:new B}};function wg(r,e,t){return Math.min(t,Math.max(e,r))}function YR(){return window.innerWidth<=ut.mobileBreakpoint}function jR(){return YR()?ut.dragSensitivityMobile:ut.dragSensitivityDesktop}function Eg(r,e){return e.x=r*ut.cardSpacing,e.y=Math.sin(r*.42)*.52+Math.sin(r*.11)*.25,e.z=Math.sin(r*.78)*2.15+Math.sin(r*.2)*1.1,e}function KR(r){return Math.sin(r*.55)*.24+Math.sin(r*.17)*.1}function cu(){b.dom.panel&&(b.dom.panel.style.transform="translate3d(-9999px, -9999px, 0)"),b.dockPosCurrent.set(-9999,-9999),b.dockPosTarget.set(-9999,-9999)}function $R(){b.dom.overlay=document.getElementById("archive-overlay"),b.dom.panel=document.querySelector(".archive-focus-panel"),b.dom.title=document.querySelector(".archive-focus-title"),b.dom.year=document.querySelector(".archive-focus-year"),b.dom.description=document.querySelector(".archive-focus-description"),b.dom.category=document.querySelector(".archive-focus-category"),b.dom.prev=document.getElementById("archive-prev"),b.dom.next=document.getElementById("archive-next"),b.dom.close=document.querySelector(".archive-close-btn")}function ZR(){b.dom.overlay&&b.dom.overlay.classList.add("active"),document.body.classList.add("archive-focus-open")}function wd(){b.dom.overlay&&b.dom.overlay.classList.remove("active"),document.body.classList.remove("archive-focus-open"),cu()}function JR(r){const e=xi[r];e&&(b.dom.title&&(b.dom.title.textContent=e.title||""),b.dom.year&&(b.dom.year.textContent=e.year||""),b.dom.description&&(b.dom.description.textContent=e.description||""),b.dom.category&&(b.dom.category.textContent=e.category||""))}async function QR(r){const e=new dd,t=new Array(r.length).fill(null);return await Promise.all(r.map((n,i)=>new Promise(s=>{e.load(n.image,o=>{o.colorSpace=nn,o.wrapS=Bn,o.wrapT=Bn,o.minFilter=si,o.magFilter=rn,o.generateMipmaps=!0,t[i]=o,s()},void 0,()=>{t[i]=null,s()})}))),t}function eC(r){const e=Math.ceil(Math.sqrt(r.length)),t=ut.atlasTileSize,n=document.createElement("canvas");n.width=e*t,n.height=e*t;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,n.width,n.height),r.forEach((o,a)=>{if(!o?.image)return;const l=o.image,c=a%e*t,u=Math.floor(a/e)*t,h=(l.width||1)/(l.height||1);let f=t,d=t,_=c,g=u;h>1?(f=t*h,_=c-(f-t)*.5):(d=t/h,g=u-(d-t)*.5),i.drawImage(l,_,g,f,d)});const s=new AA(n);return s.colorSpace=nn,s.wrapS=Bn,s.wrapT=Bn,s.minFilter=si,s.magFilter=rn,s.generateMipmaps=!0,s.flipY=!1,s}function tC(r,e){const t=Math.ceil(Math.sqrt(e)),n=r%t,i=Math.floor(r/t),s=new Ys(ut.cardWidth,ut.cardHeight,1,1),o=s.attributes.uv;for(let a=0;a<o.count;a+=1){const l=o.getX(a),c=o.getY(a),u=(l+n)/t,h=(c+(t-1-i))/t;o.setXY(a,u,h)}return o.needsUpdate=!0,s}function nC(r,e){const t=tC(r,xi.length),n=new Ll({map:e,color:new Ne(16777215),roughness:.58,metalness:.06,emissive:new Ne(921360),emissiveIntensity:.05,transparent:!0,opacity:1,side:gi}),i=new un(t,n);return i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,i.userData.archiveIndex=r,i}function iC(){b.composer=new Sd(b.renderer),b.composer.addPass(new Md(b.scene,b.camera)),b.analogPass=new $r(qR),b.composer.addPass(b.analogPass),b.composer.addPass(new Td)}function rC(){b.scene=new od,b.scene.background=new Ne(592139),b.camera=new pn(45,1,.1,120),b.camera.position.set(0,ut.cameraBaseY,ut.cameraBaseZ),b.root=new mr,b.scene.add(b.root),b.ambientLight=new gd(16777215,.46),b.keyLight=new Tl(16777215,1.25),b.keyLight.position.set(6.5,5.2,8.2),b.fillLight=new md(12176383,.42,28,2),b.fillLight.position.set(-5.8,1.8,3.5),b.rimLight=new Tl(16767406,.7),b.rimLight.position.set(-4.2,4,-6.2),b.scene.add(b.ambientLight,b.keyLight,b.fillLight,b.rimLight)}function sC(r,e){const t=r.mesh,n=t.material,i=b.focusedIndex===r.index,s=b.focusLerp.value;let o=0;s>0&&b.focusedIndex!==-1&&!i&&(o=s);const a=1-o*.55;n.color.setRGB(a,a,a),n.emissiveIntensity=i?.08+s*.22:.05,n.opacity=1-o*.2,t.visible=Math.abs(e)<=ut.visibleRange}function oC(){const r=b.tmp.p0,e=b.tmp.p1;for(const t of b.cards){const n=t.index-b.trackOffset;Eg(n,r),Eg(n+.04,e);const i=t.mesh;i.position.copy(r),i.lookAt(e),i.rotateZ(KR(n)),i.scale.set(1,1,1),b.focusedIndex===t.index&&b.focusLerp.value>.001&&(b.tmp.toCam.copy(b.camera.position).sub(i.position).normalize(),i.position.addScaledVector(b.tmp.toCam,ut.focusLift*b.focusLerp.value),i.scale.setScalar(1+ut.focusScale*b.focusLerp.value)),sC(t,n)}}function aC(){if(b.focusedIndex!==-1){const t=b.focusedIndex;b.trackOffset+=(t-b.trackOffset)*ut.focusTrackLerp,b.trackVelocity*=.84}else b.trackOffset+=b.trackVelocity,b.trackVelocity*=ut.velocityDamping,Math.abs(b.trackVelocity)<ut.velocityEpsilon&&(b.trackVelocity=0);const r=-ut.boundSlack,e=xi.length-1+ut.boundSlack;b.trackOffset<r&&(b.trackOffset=r,b.trackVelocity<0&&(b.trackVelocity*=.35)),b.trackOffset>e&&(b.trackOffset=e,b.trackVelocity>0&&(b.trackVelocity*=.35))}function lC(){const r=Math.sin(b.trackOffset*.24)*.65+(b.trackOffset-(xi.length-1)*.5)*.08;b.camera.position.x+=(r-b.camera.position.x)*ut.cameraFollowLerp,b.camera.position.y=ut.cameraBaseY,b.camera.position.z=ut.cameraBaseZ,b.camera.lookAt(b.camera.position.x*.2,0,-.45),b.mouseParallaxCurrent.x+=(b.mouseParallaxTarget.x-b.mouseParallaxCurrent.x)*.1,b.mouseParallaxCurrent.y+=(b.mouseParallaxTarget.y-b.mouseParallaxCurrent.y)*.1,b.camera.position.x+=b.mouseParallaxCurrent.x*.7,b.camera.position.y+=b.mouseParallaxCurrent.y*.28}function cC(){if(b.focusedIndex===-1||!b.dom.panel){cu();return}const r=b.cardByIndex.get(b.focusedIndex);if(!r?.mesh?.visible){cu();return}const e=r.mesh;b.tmp.projected.copy(e.position),b.tmp.projected.y+=ut.cardHeight*.22,b.tmp.projected.project(b.camera);const t=window.innerWidth,n=window.innerHeight,i=(b.tmp.projected.x*.5+.5)*t,s=(-b.tmp.projected.y*.5+.5)*n,o=b.dom.panel.getBoundingClientRect(),a=wg(i+28,ut.dockMargin,t-o.width-ut.dockMargin),l=wg(s-o.height*.5,ut.dockTopSafe,n-o.height-ut.dockMargin);b.dockPosTarget.set(a,l),b.dockPosCurrent.x+=(b.dockPosTarget.x-b.dockPosCurrent.x)*.2,b.dockPosCurrent.y+=(b.dockPosTarget.y-b.dockPosCurrent.y)*.2,b.dom.panel.style.transform=`translate3d(${b.dockPosCurrent.x.toFixed(2)}px, ${b.dockPosCurrent.y.toFixed(2)}px, 0)`}function uC(r,e){const t=b.renderer.domElement.getBoundingClientRect();b.pointerNdc.set((r-t.left)/t.width*2-1,-((e-t.top)/t.height*2-1))}function hC(r,e){if(!b.renderer||!b.camera||b.cards.length===0)return null;uC(r,e),b.raycaster.setFromCamera(b.pointerNdc,b.camera);const t=b.raycaster.intersectObjects(b.cards.map(s=>s.mesh),!1);if(!t.length)return null;const i=t[0].object.userData?.archiveIndex;return typeof i!="number"?null:i}function wf(r){r<0||r>=xi.length||(b.focusedIndex=r,JR(r),ZR(),Fe.to(b.focusLerp,{value:1,duration:ut.focusTransition,ease:"power2.out",overwrite:!0}))}function ms(){b.focusedIndex!==-1&&(b.focusedIndex=-1,Fe.to(b.focusLerp,{value:0,duration:ut.focusTransition*.92,ease:"power2.out",overwrite:!0,onComplete:()=>{b.focusedIndex===-1&&wd()}}))}function xc(r){if(xi.length===0)return;if(b.focusedIndex===-1){wf(0);return}let e=b.focusedIndex+r;e<0&&(e=xi.length-1),e>=xi.length&&(e=0),wf(e)}function fC(r){return!!(r?.closest(".nav-wrap")||r?.closest(".bottom-nav-wrap")||r?.closest(".menu-wrap")||r?.closest(".menu-box")||r?.closest(".archive-nav-btn")||r?.closest(".archive-close-btn")||r?.closest(".archive-focus-panel"))}function dC(){const r=b.eventTarget;r&&(b.handlers.pointerDown=e=>{if(!(e.button!==void 0&&e.button!==0)&&!fC(e.target)){if(b.isDragging=!0,b.activePointerId=e.pointerId??null,b.pointerStart.x=e.clientX,b.pointerStart.y=e.clientY,b.pointerLast.x=e.clientX,b.pointerLast.y=e.clientY,b.clickStartTime=performance.now(),b.dragDistance=0,r.setPointerCapture&&e.pointerId!==void 0)try{r.setPointerCapture(e.pointerId)}catch{}b.eventTarget?.style&&(b.eventTarget.style.cursor="grabbing")}},b.handlers.pointerMove=e=>{const t=b.renderer?.domElement?.getBoundingClientRect();if(t&&t.width&&t.height){const o=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;b.mouseParallaxTarget.set(-o*.05,a*.05)}if(!b.isDragging||b.activePointerId!==null&&e.pointerId!==void 0&&b.activePointerId!==e.pointerId)return;const n=e.clientX-b.pointerLast.x,i=e.clientY-b.pointerLast.y;b.dragDistance+=Math.sqrt(n*n+i*i);const s=-n*jR();b.trackOffset+=s,b.trackVelocity=s,b.focusedIndex!==-1&&b.dragDistance>ut.dragExitThreshold&&ms(),b.pointerLast.x=e.clientX,b.pointerLast.y=e.clientY},b.handlers.pointerUp=e=>{if(!b.isDragging||b.activePointerId!==null&&e.pointerId!==void 0&&b.activePointerId!==e.pointerId)return;if(b.isDragging=!1,r.releasePointerCapture&&e.pointerId!==void 0)try{r.releasePointerCapture(e.pointerId)}catch{}if(b.activePointerId=null,b.eventTarget?.style&&(b.eventTarget.style.cursor="grab"),performance.now()-b.clickStartTime<=ut.clickTimeout&&b.dragDistance<=ut.clickThreshold){const i=hC(e.clientX,e.clientY);i===null?b.focusedIndex!==-1&&ms():b.focusedIndex===i?ms():wf(i),b.trackVelocity=0}},b.handlers.wheel=e=>{if(!r.contains(e.target))return;e.preventDefault();const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,n=t*ut.wheelSensitivity;b.trackOffset+=n,b.trackVelocity+=n*.35,b.focusedIndex!==-1&&Math.abs(t)>8&&ms()},b.handlers.keyDown=e=>{if(e.key==="Escape"){b.focusedIndex!==-1&&(e.preventDefault(),ms());return}e.key==="ArrowRight"?(e.preventDefault(),xc(1)):e.key==="ArrowLeft"&&(e.preventDefault(),xc(-1))},b.handlers.overlayClick=e=>{!e.target.closest(".archive-focus-panel")&&!e.target.closest(".archive-nav-btn")&&ms()},b.handlers.prevClick=e=>{e.preventDefault(),e.stopPropagation(),xc(-1)},b.handlers.nextClick=e=>{e.preventDefault(),e.stopPropagation(),xc(1)},b.handlers.closeClick=e=>{e.preventDefault(),e.stopPropagation(),ms()},b.handlers.resize=()=>{if(!b.renderer||!b.camera||!b.composer)return;const e=b.renderHost||b.backgroundEl||b.container,t=e?.clientWidth||window.innerWidth,n=e?.clientHeight||window.innerHeight;b.camera.aspect=t/n,b.camera.updateProjectionMatrix(),b.renderer.setSize(t,n),b.composer.setSize(t,n)},r.addEventListener("pointerdown",b.handlers.pointerDown),window.addEventListener("pointermove",b.handlers.pointerMove),window.addEventListener("pointerup",b.handlers.pointerUp),r.addEventListener("wheel",b.handlers.wheel,{passive:!1}),window.addEventListener("keydown",b.handlers.keyDown),window.addEventListener("resize",b.handlers.resize),b.dom.overlay?.addEventListener("click",b.handlers.overlayClick),b.dom.prev?.addEventListener("click",b.handlers.prevClick),b.dom.next?.addEventListener("click",b.handlers.nextClick),b.dom.close?.addEventListener("click",b.handlers.closeClick))}function pC(){const r=b.eventTarget;r&&(b.handlers.pointerDown&&r.removeEventListener("pointerdown",b.handlers.pointerDown),b.handlers.wheel&&r.removeEventListener("wheel",b.handlers.wheel)),window.removeEventListener("pointermove",b.handlers.pointerMove),window.removeEventListener("pointerup",b.handlers.pointerUp),window.removeEventListener("keydown",b.handlers.keyDown),window.removeEventListener("resize",b.handlers.resize),b.dom.overlay?.removeEventListener("click",b.handlers.overlayClick),b.dom.prev?.removeEventListener("click",b.handlers.prevClick),b.dom.next?.removeEventListener("click",b.handlers.nextClick),b.dom.close?.removeEventListener("click",b.handlers.closeClick),b.handlers={}}function _v(){b.running&&(aC(),lC(),oC(),cC(),b.analogPass?.uniforms?.uTime&&(b.analogPass.uniforms.uTime.value=b.clock.getElapsedTime()),b.composer.render(),b.rafId=requestAnimationFrame(_v))}async function mC(r){if(b.container=document.getElementById("gallery"),b.backgroundEl=document.getElementById("background"),!b.container||!xi.length||(b.renderHost=b.backgroundEl||b.container,!b.renderHost))return!1;const e=b.renderHost.querySelector('canvas[data-archive-canvas="true"]');e&&e.remove();const t=b.renderHost.clientWidth||window.innerWidth,n=b.renderHost.clientHeight||window.innerHeight;b.renderer=new Z0({antialias:!0,alpha:!0,powerPreference:"high-performance"}),b.renderer.outputColorSpace=nn,b.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),b.renderer.setSize(t,n),b.renderer.setClearColor(0,0),b.renderer.domElement.dataset.archiveCanvas="true",b.renderHost.appendChild(b.renderer.domElement),b.container.style.pointerEvents="auto",b.container.style.touchAction="none",b.container.style.cursor="grab",b.renderer.domElement.style.pointerEvents="none",b.renderer.domElement.style.touchAction="none",b.renderer.domElement.style.cursor="default",b.eventTarget=b.container,rC();const i=await QR(xi);if(r!==b.initToken)return i.forEach(s=>s?.dispose?.()),!1;b.sourceTextures=i.filter(Boolean),b.atlasTexture=eC(i),b.cards=[],b.cardByIndex.clear();for(let s=0;s<xi.length;s+=1){const o=nC(s,b.atlasTexture),a={index:s,item:xi[s],mesh:o};b.cards.push(a),b.cardByIndex.set(s,a),b.root.add(o)}return iC(),b.camera.aspect=t/n,b.camera.updateProjectionMatrix(),b.composer.setSize(t,n),b.clock=new _d,!0}function vv(){b.trackOffset=0,b.trackVelocity=0,b.isDragging=!1,b.activePointerId=null,b.dragDistance=0,b.focusedIndex=-1,b.focusLerp.value=0,b.mouseParallaxTarget.set(0,0),b.mouseParallaxCurrent.set(0,0),b.pointerStart.x=0,b.pointerStart.y=0,b.pointerLast.x=0,b.pointerLast.y=0,cu()}async function bg(){if(b.running)return;$R(),vv(),wd();const r=b.initToken+1;if(b.initToken=r,!await mC(r)||r!==b.initToken){Co();return}b.running=!0,dC(),_v()}function Co(){b.initToken+=1,b.running=!1,b.rafId&&(cancelAnimationFrame(b.rafId),b.rafId=null),pC(),wd(),Fe.killTweensOf(b.focusLerp);for(const r of b.cards)r.mesh?.parent&&r.mesh.parent.remove(r.mesh),r.mesh?.geometry?.dispose?.(),r.mesh?.material?.dispose?.();b.cards=[],b.cardByIndex.clear(),b.atlasTexture?.dispose?.(),b.atlasTexture=null;for(const r of b.sourceTextures)r?.dispose?.();b.sourceTextures=[],b.composer&&(b.composer.dispose?.(),b.composer=null),b.analogPass=null,b.renderer&&(b.renderer.dispose(),b.renderer.domElement?.parentNode&&b.renderer.domElement.parentNode.removeChild(b.renderer.domElement)),b.container&&(b.container.style.pointerEvents="",b.container.style.touchAction="",b.container.style.cursor=""),b.renderer=null,b.scene=null,b.camera=null,b.clock=null,b.root=null,b.ambientLight=null,b.keyLight=null,b.fillLight=null,b.rimLight=null,b.container=null,b.backgroundEl=null,b.renderHost=null,b.eventTarget=null,b.dom={overlay:null,panel:null,title:null,year:null,description:null,category:null,prev:null,next:null,close:null},vv()}Fe.registerPlugin(nt,es);const Uc=new Map,Oc=[],Po=[];function gC(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Oa(r,e={type:"lines, words, chars"}){if(!r)return null;if(Uc.has(r))return Uc.get(r);const t=new es(r,{type:e.type||"lines, words, chars",reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],h=l[c];u.parentNode.insertBefore(h,u),h.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Uc.set(r,t),Oc.push(t),t}function _C(r,{direction:e="up",duration:t=.8,stagger:n=.03,ease:i="power2.out"}={}){const s=Oa(r);if(!s)return null;const o=e==="down"?100:-100;return Fe.fromTo(s.words,{y:o,opacity:0},{y:0,opacity:1,duration:t,stagger:n,ease:i})}async function Fc(r){if(!r)return;const e=r.querySelectorAll(".text-reveal-header:not(.has-3d-text)");if(!e.length)return;const t=Array.from(e);t.length&&Fe.set(t,{clearProps:"all"});const n=[];for(let i=0;i<e.length;i++){const s=e[i],a=s.classList.contains("text-reveal-reverse")?"down":"up",l=_C(s,{direction:a,duration:.8,stagger:.04});l&&n.push(gC(l))}n.length&&await Promise.all(n)}function vC(){Ef();const r=document.querySelectorAll(".text-reveal"),e=document.querySelectorAll(".text-reveal-reverse"),t=document.querySelectorAll(".text-reveal-header:not(.contact-contain .text-reveal-header)"),n=document.querySelectorAll(".body-text-reveal:not(.hero-text-reveal)");for(let i=0;i<r.length;i++){const s=r[i],o=Oa(s);if(!o?.words?.length)continue;const a=Fe.fromTo(o.words,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Po.push(a.scrollTrigger)}for(let i=0;i<e.length;i++){const s=e[i],o=Oa(s);if(!o?.words?.length)continue;const a=Fe.fromTo(o.words,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Po.push(a.scrollTrigger)}for(let i=0;i<t.length;i++){const s=t[i],o=Oa(s);if(!o?.words?.length)continue;const l=s.classList.contains("text-reveal-reverse")?100:-100,c=Fe.fromTo(o.words,{y:l,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});c.scrollTrigger&&Po.push(c.scrollTrigger)}for(let i=0;i<n.length;i++){const s=n[i],o=Oa(s,{type:"lines"});if(!o?.lines?.length)continue;Fe.set(o.lines,{yPercent:100,opacity:0});const a=Fe.to(o.lines,{yPercent:0,opacity:1,duration:1,stagger:.1,ease:"power4.out",scrollTrigger:{trigger:s,start:"top 90%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&Po.push(a.scrollTrigger)}}function Ef(){for(;Po.length;){const r=Po.pop();r&&r.kill()}}function Ag(){for(let r=Oc.length-1;r>=0;r--){const e=Oc[r];e&&typeof e.revert=="function"&&e.revert()}Oc.length=0,Uc.clear()}Fe.registerPlugin(nt);function xC(){}function yC(){window.removeEventListener("resize",xC)}function kc(){yC()}Fe.registerPlugin(es);const yc={duration:.5,ease:"power2.inOut",stagger:.02},Rg="50% 50% -10px",Cg=new WeakMap;function SC(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||Cg.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),Fe.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=Pg(i,!1),o=Pg(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new es(s,{type:"chars"}),l=new es(o,{type:"chars"});Fe.set(a.chars,{rotationX:0,opacity:1,transformOrigin:Rg,backfaceVisibility:"hidden"}),Fe.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:Rg,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=Lg(a.chars,l.chars,!0)},h=()=>{c?.kill(),c=Lg(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",h),Cg.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:h})})}function Pg(r,e){const t=document.createElement("span");return t.textContent=r,Fe.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function Lg(r,e,t){const n=Fe.timeline();return t?n.to(r,{rotationX:90,opacity:0,...yc},0).to(e,{rotationX:0,opacity:1,...yc},0):n.to(r,{rotationX:0,opacity:1,...yc},0).to(e,{rotationX:-90,opacity:0,...yc},0),n}const uu=new WeakMap,MC=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function TC(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function wC(){if(MC())return;document.querySelectorAll(".btn").forEach(e=>{if(uu.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=TC();t.config=n,EC(t);let i=null;const s=()=>{i&&i.kill(),i=Ig(t,!0)},o=()=>{i&&i.kill(),i=Ig(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),uu.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function EC(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,Fe.set(e,{x:0,borderRadius:`${o}px`}),Fe.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),Fe.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function Ig(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,h=Fe.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?h.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):h.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),h}function bC(){document.querySelectorAll(".btn").forEach(e=>{const t=uu.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&Fe.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&Fe.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&Fe.set(t.elements.circleIcon,{clearProps:"all"}),uu.delete(e))})}function Ph(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function AC(){return null}function RC(r,e){const t=Fe.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&Fe.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function CC(){const r=document.querySelector(".link-main");r&&Fe.set(r,{autoAlpha:0})}function PC(){const r=document.querySelector(".link-main");r&&Fe.set(r,{autoAlpha:1,y:20,opacity:0})}function LC(){const r=document.querySelector(".link-main");return r?Fe.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let Fa=null;const IC=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"});function Dg(){Fa||(Fa=document.getElementById("time")),Fa&&(Fa.textContent=`${IC.format(new Date)} IST`)}function DC(){Fa=null,Dg(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(Dg,1e3)}function NC(r){return r==="home"||r==="contact"||r==="work"}function Lh(r,{skipWebglSetup:e=!1}={}){DC(),Yy(),vC(),SC(),bC(),wC();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace,n=document.querySelector(".link-main");if(n&&(Fe.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&Fe.set(n,{clearProps:"transform,opacity"})),e){t==="archive"?(Ro(),kc(),Nc(),bg()):Co();return}t==="work"?(Co(),Mg(),il("work",!0),ou("work"),gv()):t==="archive"?(Ro(),kc(),Nc(),bg()):t==="home"||t==="contact"?(Co(),Ro(),Mg(),il(t,!0),ou("home"),Fc(document.querySelector('[data-barba="container"]'))):(Co(),Ro(),kc(),Nc())}qv.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;Sg(),e==="work"||t==="work"?e==="work"&&Ro():e==="home"?await Ph(AC()):e==="contact"&&await Ph(RC(n,t)),Ef(),Ag()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"?(ou(t==="work"?"work":"home"),il(t,!0),t==="work"&&gv()):(t==="home"?(CC(),il("home")):t==="contact"&&(PC(),il("contact")),Fc(n))},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(Lh(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&Fe.set(n,{autoAlpha:0})}else t==="contact"&&await Ph(LC())}},{name:"default",async leave(r){const e=r?.current?.namespace;e==="work"&&Ro(),e==="archive"&&Co(),Sg(),NC(e)&&(kc(),Nc()),Ef(),Ag()},async enter(){},async once(r){Lh(r?.next?.namespace);const e=r?.next?.namespace,t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&Fe.set(n,{autoAlpha:0}),Fc(t)}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(Fe.set(n,{autoAlpha:1,y:20,opacity:0}),await Fe.to(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2})),Fc(t)}}},async after(r){const e=r?.next?.namespace;if(e&&Lh(e),e==="contact"){const t=document.querySelector(".link-main");t&&(Fe.set(t,{autoAlpha:1,y:20,opacity:0}),await Fe.to(t,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}}}]});export{OC as D,Xi as F,rv as G,Kr as H,rn as L,UC as a,fg as t};
